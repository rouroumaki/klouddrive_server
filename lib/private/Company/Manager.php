<?php

namespace OC\Company;

use OC\Hooks\PublicEmitter;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Company\Events\BeforeCompanyCreatedEvent;
use OCP\Company\Events\CompanyCreatedEvent;
use OCP\CompanyInterface;
use OCP\ICacheFactory;
use OCP\ICompany;
use OCP\ICompanyManager;
use OCP\IUser;
use Psr\Log\LoggerInterface;

class Manager extends PublicEmitter implements ICompanyManager {
	private $backends = [];

	private $userManager;
	private IEventDispatcher $dispatcher;
	private LoggerInterface $logger;

	private $cachedCompanies = [];

	private $cachedUserCompanies = [];

	private DisplayNameCache $displayNameCache;

	public function __construct(\OC\User\Manager $userManager,
								IEventDispatcher $dispatcher,
								LoggerInterface $logger,
								ICacheFactory $cacheFactory) {
		$this->userManager = $userManager;
		$this->dispatcher = $dispatcher;
		$this->logger = $logger;
		$this->displayNameCache = new DisplayNameCache($cacheFactory, $this);

		$cachedCompanies = &$this->cachedCompanies;
		$cachedUserCompanies = &$this->cachedUserCompanies;
		$this->listen('\OC\Company', 'postDelete', function ($company) use (&$cachedCompanies, &$cachedUserCompanies) {
			unset($cachedCompanies[$company->getCID()]);
			$cachedUserCompanies = [];
		});
		$this->listen('\OC\Company', 'postAddUser', function ($company) use (&$cachedUserCompanies) {
			$cachedUserCompanies = [];
		});
		$this->listen('\OC\Company', 'postRemoveUser', function ($company) use (&$cachedUserCompanies) {
			$cachedUserCompanies = [];
		});
	}

	
	public function isBackendUsed($backendClass) {
		$backendClass = strtolower(ltrim($backendClass, '\\'));

		foreach ($this->backends as $backend) {
			if (strtolower(get_class($backend)) === $backendClass) {
				return true;
			}
		}

		return false;
	}

	public function addBackend($backend) {
		$this->backends[] = $backend;
		$this->clearCaches();
	}

	public function clearBackends() {
		$this->backends = [];
		$this->clearCaches();
	}

	public function getBackends() {
		return $this->backends;
	}


	protected function clearCaches() {
		$this->cachedCompanies = [];
		$this->cachedUserCompanies = [];
	}

	
	public function get($cid): ?ICompany {
		if (isset($this->cachedCompanies[$cid])) {
			return $this->cachedCompanies[$cid];
		}
		return $this->getCompanyObject($cid);
	}

	protected function getCompanyObject($cid, $displayName = null) {
		$backends = [];
		foreach ($this->backends as $backend) {
			if ($backend->implementsActions(Backend::COMPANY_DETAILS)) {
				$companyData = $backend->getCompanyDetails($cid);
				if (is_array($companyData) && !empty($companyData)) {
					if (is_null($displayName) && isset($companyData['displayName'])) {
						$displayName = $companyData['displayName'];
					}
					$backends[] = $backend;
				}
			} elseif ($backend->companyExists($cid)) {
				$backends[] = $backend;
			}
		}
		if (count($backends) === 0) {
			return null;
		}
		$this->cachedCompanies[$cid] = new Company($cid, $backends, $this->dispatcher, $this->userManager, $this, $displayName);
		return $this->cachedCompanies[$cid];
	}

	public function companyExists($cid): bool {
		return $this->get($cid) instanceof ICompany;
	}

	public function createCompany($cid, $name): ?ICompany {
		if ($cid === '' || $cid === null) {
			return null;
		} elseif ($company = $this->get($cid)) {
			return $company;
		} else {
			foreach ($this->backends as $backend) {
				if ($backend->implementsActions(Backend::CREATE_COMPANY)) {
					if ($backend->createCompany($cid)) {
						$company = $this->getCompanyObject($cid);
						$this->dispatcher->dispatchTyped(new CompanyCreatedEvent($company));
						$this->emit('\OC\Company', 'postCreate', [$company]);
						return $company;
					}
				}
			}
			return null;
		}
	}

	public function search(string $search, ?int $limit = null, ?int $offset = 0) {
		$companies = [];
		foreach ($this->backends as $backend) {
			$companyIds = $backend->getCompanies($search, $limit ?? -1, $offset ?? 0);
			foreach ($companyIds as $companyId) {
				$aCompany = $this->get($companyId);
				if ($aCompany instanceof ICompany) {
					$companies[$companyId] = $aCompany;
				} else {
					$this->logger->debug('Company "' . $companyId . '" was returned by search but not found through direct access', ['app' => 'core']);
				}
			}
			if (!is_null($limit) and $limit <= 0) {
				return array_values($companies);
			}
		}
		return array_values($companies);
	}

	public function getUserCompanies(IUser $user = null) {
		if (!$user instanceof IUser) {
			return [];
		}
		return $this->getUserIdCompanies($user->getUID());
	}

	public function getUserIdCompanies(string $uid): array {
		$companies = [];

		foreach ($this->getUserIdCompanyIds($uid) as $companyId) {
			$aCompany = $this->get($companyId);
			if ($aCompany instanceof ICompany) {
				$companies[$companyId] = $aCompany;
			} else {
				$this->logger->debug('User "' . $uid . '" belongs to deleted company: "' . $companyId . '"', ['app' => 'core']);
			}
		}

		return $companies;
	}

	public function isInCompany($userId, $company) {
		return array_search($company, $this->getUserIdCompanyIds($userId)) !== false;
	}

	public function getUserCompanyIds(IUser $user): array {
		return $this->getUserIdCompanyIds($user->getUID());
	}

	private function getUserIdCompanyIds(string $uid): array {
		if (!isset($this->cachedUserCompanies[$uid])) {
			$companies = [];
			foreach ($this->backends as $backend) {
				if ($companyIds = $backend->getUserCompanies($uid)) {
					$companies = array_merge($companies, $companyIds);
				}
			}
			$this->cachedUserCompanies[$uid] = $companies;
		}

		return $this->cachedUserCompanies[$uid];
	}

	public function getDisplayName(string $groupId): ?string {
		return $this->displayNameCache->getDisplayName($groupId);
	}

	public function getUserCompanyNames(IUser $user) {
		return array_map(function ($company) {
			return ['displayName' => $this->displayNameCache->getDisplayName($company->getCID())];
		}, $this->getUserCompanies($user));
	}

	public function displayNamesInGroup($cid, $search = '', $limit = -1, $offset = 0) {
		$company = $this->get($cid);
		if (is_null($company)) {
			return [];
		}

		$search = trim($search);
		$companyUsers = [];

		if (!empty($search)) {
			// only user backends have the capability to do a complex search for users
			$searchOffset = 0;
			$searchLimit = $limit * 100;
			if ($limit === -1) {
				$searchLimit = 500;
			}

			do {
				$filteredUsers = $this->userManager->searchDisplayName($search, $searchLimit, $searchOffset);
				foreach ($filteredUsers as $filteredUser) {
					if ($company->inCompany($filteredUser)) {
						$companyUsers[] = $filteredUser;
					}
				}
				$searchOffset += $searchLimit;
			} while (count($companyUsers) < $searchLimit + $offset && count($filteredUsers) >= $searchLimit);

			if ($limit === -1) {
				$companyUsers = array_slice($companyUsers, $offset);
			} else {
				$companyUsers = array_slice($companyUsers, $offset, $limit);
			}
		} else {
			$companyUsers = $company->searchUsers('', $limit, $offset);
		}

		$matchingUsers = [];
		foreach ($companyUsers as $companyUser) {
			$matchingUsers[(string) $companyUser->getUID()] = $companyUser->getDisplayName();
		}
		return $matchingUsers;
	}

}
