<?php

namespace OC\Company;

use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use OCP\Company\Backend\ISearchableCompanyBackend;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\Company\Backend\ABackend;
use OCP\Company\Backend\IAddToCompanyBackend;
use OCP\Company\Backend\ICountUsersBackend;
use OCP\Company\Backend\ICreateCompanyBackend;
use OCP\Company\Backend\IDeleteCompanyBackend;
use OCP\Company\Backend\IGetDisplayNameBackend;
use OCP\Company\Backend\ICompanyDetailsBackend;
use OCP\Company\Backend\IRemoveFromCompanyBackend;
use OCP\Company\Backend\ISetDisplayNameBackend;
use OCP\Company\Backend\INamedBackend;
use OCP\IDBConnection;
use OCP\IUserManager;
use OC\User\LazyUser;

/**
 * Class for group management in a SQL Database (e.g. MySQL, SQLite)
 */
class Database extends ABackend implements
	IAddToCompanyBackend,
	ICountUsersBackend,
	ICreateCompanyBackend,
	IDeleteCompanyBackend,
	IGetDisplayNameBackend,
	ICompanyDetailsBackend,
	IRemoveFromCompanyBackend,
    ISearchableCompanyBackend,
	ISetDisplayNameBackend,
	INamedBackend {
	/** @var string[] */
	private $companyCache = [];

	/** @var IDBConnection */
	private $dbConn;

	/**
	 * \OC\Group\Database constructor.
	 *
	 * @param IDBConnection|null $dbConn
	 */
	public function __construct(IDBConnection $dbConn = null) {
		$this->dbConn = $dbConn;
	}

	/**
	 * FIXME: This function should not be required!
	 */
	private function fixDI() {
		if ($this->dbConn === null) {
			$this->dbConn = \OC::$server->getDatabaseConnection();
		}
	}

	
	public function createCompany(string $cid, string $name): bool {
		$this->fixDI();

		try {
			// Add group
			$builder = $this->dbConn->getQueryBuilder();
			$result = $builder->insert('companies')
				->setValue('cid', $builder->createNamedParameter($cid))
				->setValue('displayname', $builder->createNamedParameter($name))
				->execute();
		} catch (UniqueConstraintViolationException $e) {
			$result = 0;
		}

		// Add to cache
		$this->companyCache[$cid] = [
			'cid' => $cid,
			'displayname' => $name
		];

		return $result === 1;
	}

	
	public function deleteCompany(string $cid): bool {
		$this->fixDI();

		// Delete the group
		$qb = $this->dbConn->getQueryBuilder();
		$qb->delete('companies')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($cid)))
			->execute();

		// Delete the group-user relation
		$qb = $this->dbConn->getQueryBuilder();
		$qb->delete('company_user')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($cid)))
			->execute();

		// Delete from cache
		unset($this->companyCache[$cid]);

		return true;
	}

	public function inCompany($uid, $cid) {
		$this->fixDI();

		// check
		$qb = $this->dbConn->getQueryBuilder();
		$cursor = $qb->select('uid')
			->from('company_user')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($cid)))
			->andWhere($qb->expr()->eq('uid', $qb->createNamedParameter($uid)))
			->execute();

		$result = $cursor->fetch();
		$cursor->closeCursor();

		return $result ? true : false;
	}

	
	public function addToCompany(string $uid, string $cid): bool {
		$this->fixDI();

		if (!$this->inCompany($uid, $cid)) {
			$qb = $this->dbConn->getQueryBuilder();
			$qb->insert('company_user')
				->setValue('uid', $qb->createNamedParameter($uid))
				->setValue('cid', $qb->createNamedParameter($cid))
				->execute();
			return true;
		} else {
			return false;
		}
	}

	
	public function removeFromCompany(string $uid, string $cid): bool {
		$this->fixDI();

		$qb = $this->dbConn->getQueryBuilder();
		$qb->delete('company_user')
			->where($qb->expr()->eq('uid', $qb->createNamedParameter($uid)))
			->andWhere($qb->expr()->eq('cid', $qb->createNamedParameter($cid)))
			->execute();

		return true;
	}

	
	public function getUserCompanies($uid) {
		
		if ($uid === null || $uid === '') {
			return [];
		}

		$this->fixDI();

		$qb = $this->dbConn->getQueryBuilder();
		$cursor = $qb->select('cu.cid', 'c.displayname')
			->from('company_user', 'cu')
			->leftJoin('gu', 'companies', 'c', $qb->expr()->eq('cu.cid', 'c.cid'))
			->where($qb->expr()->eq('uid', $qb->createNamedParameter($uid)))
			->execute();

		$companies = [];
		while ($row = $cursor->fetch()) {
			$companies[] = $row['cid'];
			$this->companyCache[$row['cid']] = [
				'cid' => $row['cid'],
				'displayname' => $row['displayname'],
			];
		}
		$cursor->closeCursor();

		return $companies;
	}

	
	public function getCompanies(string $search = '', int $limit = -1, int $offset = 0) {
		$this->fixDI();

		$query = $this->dbConn->getQueryBuilder();
		$query->select('cid')
			->from('companies')
			->orderBy('cid', 'ASC');

		if ($search !== '') {
			$query->where($query->expr()->iLike('cid', $query->createNamedParameter(
				'%' . $this->dbConn->escapeLikeParameter($search) . '%'
			)));
			$query->orWhere($query->expr()->iLike('displayname', $query->createNamedParameter(
				'%' . $this->dbConn->escapeLikeParameter($search) . '%'
			)));
		}

		if ($limit > 0) {
			$query->setMaxResults($limit);
		}
		if ($offset > 0) {
			$query->setFirstResult($offset);
		}
		$result = $query->execute();

		$companies = [];
		while ($row = $result->fetch()) {
			$companies[] = $row['cid'];
		}
		$result->closeCursor();

		return $companies;
	}

	
	public function companyExists($cid) {
		$this->fixDI();

		if (isset($this->companyCache[$cid])) {
			return true;
		}

		$qb = $this->dbConn->getQueryBuilder();
		$cursor = $qb->select('cid', 'displayname')
			->from('companies')
			->where($qb->expr()->eq('cid', $qb->createNamedParameter($cid)))
			->execute();
		$result = $cursor->fetch();
		$cursor->closeCursor();

		if ($result !== false) {
			$this->companyCache[$cid] = [
				'gid' => $cid,
				'displayname' => $result['displayname'],
			];
			return true;
		}
		return false;
	}

	
	public function usersInCompany($cid, $search = '', $limit = -1, $offset = 0): array {
		return array_values(array_map(fn ($user) => $user->getUid(), $this->searchInCompany($cid, $search, $limit, $offset)));
	}

	public function searchInCompany(string $cid, string $search = '', int $limit = -1, int $offset = 0): array {
		$this->fixDI();

		$query = $this->dbConn->getQueryBuilder();
		$query->select('c.uid', 'u.displayname');

		$query->from('company_user', 'c')
			->where($query->expr()->eq('cid', $query->createNamedParameter($cid)))
			->orderBy('c.uid', 'ASC');

		$query->leftJoin('c', 'users', 'u', $query->expr()->eq('c.uid', 'u.uid'));

		if ($search !== '') {
			$query->leftJoin('u', 'preferences', 'p', $query->expr()->andX(
				$query->expr()->eq('p.userid', 'u.uid'),
				$query->expr()->eq('p.appid', $query->expr()->literal('settings')),
				$query->expr()->eq('p.configkey', $query->expr()->literal('email'))
			))
				// sqlite doesn't like re-using a single named parameter here
				->andWhere(
					$query->expr()->orX(
						$query->expr()->ilike('c.uid', $query->createNamedParameter('%' . $this->dbConn->escapeLikeParameter($search) . '%')),
						$query->expr()->ilike('u.displayname', $query->createNamedParameter('%' . $this->dbConn->escapeLikeParameter($search) . '%')),
						$query->expr()->ilike('p.configvalue', $query->createNamedParameter('%' . $this->dbConn->escapeLikeParameter($search) . '%'))
					)
				)
				->orderBy('u.uid_lower', 'ASC');
		}

		if ($limit !== -1) {
			$query->setMaxResults($limit);
		}
		if ($offset !== 0) {
			$query->setFirstResult($offset);
		}

		$result = $query->executeQuery();

		$users = [];
		$userManager = \OCP\Server::get(IUserManager::class);
		while ($row = $result->fetch()) {
			$users[$row['uid']] = new LazyUser($row['uid'], $userManager, $row['displayname'] ?? null);
		}
		$result->closeCursor();

		return $users;
	}

	public function countUsersInCompany(string $cid, string $search = ''): int {
		$this->fixDI();

		$query = $this->dbConn->getQueryBuilder();
		$query->select($query->func()->count('*', 'num_users'))
			->from('company_user')
			->where($query->expr()->eq('cid', $query->createNamedParameter($cid)));

		if ($search !== '') {
			$query->andWhere($query->expr()->like('uid', $query->createNamedParameter(
				'%' . $this->dbConn->escapeLikeParameter($search) . '%'
			)));
		}

		$result = $query->execute();
		$count = $result->fetchOne();
		$result->closeCursor();

		if ($count !== false) {
			$count = (int)$count;
		} else {
			$count = 0;
		}

		return $count;
	}


	public function getDisplayName(string $cid): string {
		if (isset($this->companyCache[$cid])) {
			$displayName = $this->companyCache[$cid]['displayname'];

			if (isset($displayName) && trim($displayName) !== '') {
				return $displayName;
			}
		}

		$this->fixDI();

		$query = $this->dbConn->getQueryBuilder();
		$query->select('displayname')
			->from('companies')
			->where($query->expr()->eq('cid', $query->createNamedParameter($cid)));

		$result = $query->execute();
		$displayName = $result->fetchOne();
		$result->closeCursor();

		return (string) $displayName;
	}

	public function getCompanyDetails(string $cid): array {
		$displayName = $this->getDisplayName($cid);
		if ($displayName !== '') {
			return ['displayName' => $displayName];
		}

		return [];
	}

	public function setDisplayName(string $cid, string $displayName): bool {
		if (!$this->companyExists($cid)) {
			return false;
		}

		$this->fixDI();

		$displayName = trim($displayName);
		if ($displayName === '') {
			$displayName = $cid;
		}

		$query = $this->dbConn->getQueryBuilder();
		$query->update('companies')
			->set('displayname', $query->createNamedParameter($displayName))
			->where($query->expr()->eq('cid', $query->createNamedParameter($cid)));
		$query->execute();

		return true;
	}

	public function getBackendName(): string {
		return 'Database';
	}
}
