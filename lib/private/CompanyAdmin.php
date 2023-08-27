<?php
namespace OC;

use OC\Hooks\PublicEmitter;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Company\Events\SubAdminAddedEvent;
use OCP\Company\Events\SubAdminRemovedEvent;
use OCP\Company\ISubAdmin;
use OCP\IDBConnection;
use OCP\ICompany;
use OCP\ICompanyManager;
use OCP\IUser;
use OCP\IUserManager;

class CompanyAdmin extends PublicEmitter implements ISubAdmin {
	private $userManager;

	private $companyManager;

	private $dbConn;

	private $eventDispatcher;

	public function __construct(IUserManager $userManager,
								ICompanyManager $companyManager,
								IDBConnection $dbConn,
								IEventDispatcher $eventDispatcher) {
		$this->userManager = $userManager;
		$this->companyManager = $companyManager;
		$this->dbConn = $dbConn;
		$this->eventDispatcher = $eventDispatcher;

		$this->userManager->listen('\OC\User', 'postDelete', function ($user) {
			$this->post_deleteUser($user);
		});
		$this->companyManager->listen('\OC\Company', 'postDelete', function ($company) {
			$this->post_deleteCompany($company);
		});
	}

	public function createSubAdmin(IUser $user, ICompany $company): void {
		$qb = $this->dbConn->getQueryBuilder();

		$qb->insert('company_admin')
			->values([
				'cid' => $qb->createNamedParameter($company->getCID()),
				'uid' => $qb->createNamedParameter($user->getUID())
			])
			->execute();

		$this->emit('\OC\CompanyAdmin', 'postCreateSubAdmin', [$user, $company]);
		$event = new SubAdminAddedEvent($company, $user);
		$this->eventDispatcher->dispatchTyped($event);
	}

	public function deleteSubAdmin(IUser $user, ICompany $company): void {
		$qb = $this->dbConn->getQueryBuilder();

		$qb->delete('company_admin')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($company->getCID())))
			->andWhere($qb->expr()->eq('uid', $qb->createNamedParameter($user->getUID())))
			->execute();

		$this->emit('\OC\CompanyAdmin', 'postDeleteSubAdmin', [$user, $company]);
		$event = new SubAdminRemovedEvent($company, $user);
		$this->eventDispatcher->dispatchTyped($event);
	}

	public function getSubAdminsCompanies(IUser $user): array {
		$companyIds = $this->getSubAdminsCompanyIds($user);

		$companies = [];
		foreach ($companyIds as $companyId) {
			$company = $this->companyManager->get($companyId);
			if ($company !== null) {
				$companies[$company->getCID()] = $company;
			}
		}

		return $companies;
	}

	
	public function getSubAdminsCompanyIds(IUser $user): array {
		$qb = $this->dbConn->getQueryBuilder();

		$result = $qb->select('cid')
			->from('company_admin')
			->where($qb->expr()->eq('uid', $qb->createNamedParameter($user->getUID())))
			->execute();

		$companyIds = [];
		while ($row = $result->fetch()) {
			$companyIds[] = $row['cid'];
		}
		$result->closeCursor();

		return $companyIds;
	}

	
	public function getSubAdminsCompaniesName(IUser $user): array {
		return array_map(function ($company) {
			return ['displayName' => $company->getDisplayName()];
		}, $this->getSubAdminsCompanies($user));
	}

	public function getCompanySubAdmins(ICompany $company): array {
		$qb = $this->dbConn->getQueryBuilder();

		$result = $qb->select('uid')
			->from('company_admin')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($company->getCID())))
			->execute();

		$users = [];
		while ($row = $result->fetch()) {
			$user = $this->userManager->get($row['uid']);
			if (!is_null($user)) {
				$users[] = $user;
			}
		}
		$result->closeCursor();

		return $users;
	}

	public function getAllSubAdmins(): array {
		$qb = $this->dbConn->getQueryBuilder();

		$result = $qb->select('*')
			->from('company_admin')
			->execute();

		$subadmins = [];
		while ($row = $result->fetch()) {
			$user = $this->userManager->get($row['uid']);
			$company = $this->companyManager->get($row['cid']);
			if (!is_null($user) && !is_null($company)) {
				$subadmins[] = [
					'user' => $user,
					'company' => $company
				];
			}
		}
		$result->closeCursor();

		return $subadmins;
	}

	public function isSubAdminOfCompany(IUser $user, ICompany $company): bool {
		$qb = $this->dbConn->getQueryBuilder();

		$result = $qb->select('*')
			->from('company_admin')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($company->getCID())))
			->andWhere($qb->expr()->eq('uid', $qb->createNamedParameter($user->getUID())))
			->execute();

		$fetch = $result->fetch();
		$result->closeCursor();
		$result = !empty($fetch) ? true : false;

		return $result;
	}

	public function isSubAdmin(IUser $user): bool {
		$qb = $this->dbConn->getQueryBuilder();

		$result = $qb->select('cid')
			->from('company_admin')
			->andWhere($qb->expr()->eq('uid', $qb->createNamedParameter($user->getUID())))
			->setMaxResults(1)
			->execute();

		$isSubAdmin = $result->fetch();
		$result->closeCursor();

		return $isSubAdmin !== false;
	}

	public function isUserAccessible(IUser $subadmin, IUser $user): bool {
		if (!$this->isSubAdmin($subadmin)) {
			return false;
		}

		$accessibleCompanyIds = $this->getSubAdminsCompanyIds($subadmin);
		$userCompanyIds = $this->companyManager->getUserCompanyIds($user);

		return !empty(array_intersect($accessibleCompanyIds, $userCompanyIds));
	}

	private function post_deleteUser(IUser $user) {
		$qb = $this->dbConn->getQueryBuilder();

		$qb->delete('company_admin')
			->where($qb->expr()->eq('uid', $qb->createNamedParameter($user->getUID())))
			->execute();
	}

	private function post_deleteCompany(ICompany $company) {
		$qb = $this->dbConn->getQueryBuilder();

		$qb->delete('company_admin')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($company->getCID())))
			->execute();
	}
}
