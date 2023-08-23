<?php

namespace OC\Company;

use OC\Hooks\PublicEmitter;
use OC\User\LazyUser;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\CompanyInterface;
use OCP\Company\Backend\IGetDisplayNameBackend;
use OCP\Company\Backend\INamedBackend;
use OCP\Company\Backend\ISearchableCompanyBackend;
use OCP\Company\Backend\ISetDisplayNameBackend;
use OCP\ICompany;
use OCP\IUser;
use OCP\IUserManager;

class Company implements ICompany {
	protected $displayName;

	private $cid;

	private $users = [];

	private $usersLoaded;

	private $backends;
    private $dispatcher;
    private $emitter;
	private $userManager;

	public function __construct(string $cid, array $backends, IEventDispatcher $dispatcher, IUserManager $userManager, PublicEmitter $emitter = null, ?string $displayName = null) {
		$this->cid = $cid;
		$this->backends = $backends;
		$this->dispatcher = $dispatcher;
		$this->userManager = $userManager;
		$this->emitter = $emitter;
		$this->userManager = $userManager;
	}

	public function getCID() {
		return $this->cid;
	}

	public function getDisplayName() {
		if (is_null($this->displayName)) {
			foreach ($this->backends as $backend) {
				if ($backend instanceof IGetDisplayNameBackend) {
					$displayName = $backend->getDisplayName($this->cid);
					if (trim($displayName) !== '') {
						$this->displayName = $displayName;
						return $this->displayName;
					}
				}
			}
			return $this->cid;
		}
		return $this->displayName;
	}

	public function setDisplayName(string $displayName): bool {
		$displayName = trim($displayName);
		if ($displayName !== '') {
			foreach ($this->backends as $backend) {
				if (($backend instanceof ISetDisplayNameBackend)
					&& $backend->setDisplayName($this->cid, $displayName)) {
					$this->displayName = $displayName;
					return true;
				}
			}
		}
		return false;
	}

	public function getUsers() {
		if ($this->usersLoaded) {
			return $this->users;
		}

		$userIds = [];
		foreach ($this->backends as $backend) {
			$diff = array_diff(
				$backend->usersInCompany($this->cid),
				$userIds
			);
			
			if ($diff) {
				$userIds = array_merge($userIds, $diff);
			}
		}

		$this->users = $this->getVerifiedUsers($userIds);
		$this->usersLoaded = true;
		return $this->users;
	}

	public function inCompany(IUser $user) {
		if (isset($this->users[$user->getUID()])) {
			return true;
		}
		foreach ($this->backends as $backend) {
			if ($backend->inGroup($user->getUID(), $this->cid)) {
				$this->users[$user->getUID()] = $user;
				return true;
			}
		}
		return false;
	}

	public function addUser(IUser $user) {
		if ($this->inCompany($user)) {
			return;
		}

		foreach ($this->backends as $backend) {
			if ($backend->implementsActions(\OC\Company\Backend::ADD_TO_COMPANY)) {
				$backend->addToCompany($user->getUID(), $this->cid);
				if ($this->users) {
					$this->users[$user->getUID()] = $user;
				}

				return;
			}
		}
	}

	public function removeUser($user) {
		$result = false;
		foreach ($this->backends as $backend) {
			if ($backend->implementsActions(\OC\Company\Backend::REMOVE_FROM_COMPANY) and $backend->inGroup($user->getUID(), $this->cid)) {
				$backend->removeFromCompany($user->getUID(), $this->cid);
				$result = true;
			}
		}
		if ($result) {
			if ($this->users) {
				foreach ($this->users as $index => $companyUser) {
					if ($companyUser->getUID() === $user->getUID()) {
						unset($this->users[$index]);
						return;
					}
				}
			}
		}
	}

	public function searchUsers(string $search, ?int $limit = null, ?int $offset = null): array {
		$users = [];
		foreach ($this->backends as $backend) {
			if ($backend instanceof ISearchableCompanyBackend) {
				$users += $backend->searchInCompany($this->cid, $search, $limit ?? -1, $offset ?? 0);
			} else {
				$userIds = $backend->usersInCompany($this->cid, $search, $limit ?? -1, $offset ?? 0);
				$userManager = \OCP\Server::get(IUserManager::class);
				foreach ($userIds as $userId) {
					if (!isset($users[$userId])) {
						$users[$userId] = new LazyUser($userId, $userManager);
					}
				}
			}
			if (!is_null($limit) and $limit <= 0) {
				return $users;
			}
		}
		return $users;
	}

	public function count($search = '') {
		$users = false;
		foreach ($this->backends as $backend) {
			if ($backend->implementsActions(\OC\Company\Backend::COUNT_USERS)) {
				if ($users === false) {
					$users = 0;
				}
				$users += $backend->countUsersInCompany($this->cid, $search);
			}
		}
		return $users;
	}

	public function searchDisplayName($search, $limit = null, $offset = null) {
		return $this->searchUsers($search, $limit, $offset);
	}

	public function getBackendNames() {
		$backends = [];
		foreach ($this->backends as $backend) {
			if ($backend instanceof INamedBackend) {
				$backends[] = $backend->getBackendName();
			} else {
				$backends[] = get_class($backend);
			}
		}

		return $backends;
	}

	public function delete() {

		$result = false;
		foreach ($this->backends as $backend) {
			if ($backend->implementsActions(\OC\Company\Backend::DELETE_COMPANY)) {
				$result = $result || $backend->deleteCompany($this->cid);
			}
		}
		return $result;
	}

	private function getVerifiedUsers(array $userIds): array {
		$users = [];
		foreach ($userIds as $userId) {
			$user = $this->userManager->get($userId);
			if (!is_null($user)) {
				$users[$userId] = $user;
			}
		}
		return $users;
	}

	public function canRemoveUser() {
		foreach ($this->backends as $backend) {
			if ($backend->implementsActions(CompanyInterface::REMOVE_FROM_COMPANY)) {
				return true;
			}
		}
		return false;
	}

	public function canAddUser() {
		foreach ($this->backends as $backend) {
			if ($backend->implementsActions(CompanyInterface::ADD_TO_COMPANY)) {
				return true;
			}
		}
		return false;
	}

}
