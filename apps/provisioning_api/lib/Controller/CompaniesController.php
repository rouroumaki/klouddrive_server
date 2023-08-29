<?php

namespace OCA\Provisioning_API\Controller;

use OCA\Provisioning_API\ResponseDefinitions;
use OCP\Accounts\IAccountManager;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCS\OCSForbiddenException;
use OCP\AppFramework\OCS\OCSNotFoundException;
use OCP\AppFramework\OCSController;
use OCP\IConfig;
use OCP\IGroup;
use OCP\IGroupManager;
use OCP\ICompany;
use OCP\ICompanyManager;
use OCP\ILogger;
use OCP\IRequest;
use OCP\IUser;
use OCP\IUserManager;
use OCP\IUserSession;
use OCP\L10N\IFactory;
use Psr\Log\LoggerInterface;

class CompaniesController extends AUserData {
	/** @var \OC\Company\Manager */
    private $companyManager;
    private $logger;

    public function __construct(string $appName,
                                IRequest $request,
                                IUserManager $userManager,
                                IConfig $config,
                                IGroupManager $groupManager,
                                IUserSession $userSession,
                                IAccountManager $accountManager,
                                IFactory $l10nFactory,
                                ICompanyManager $companyManager,
                                LoggerInterface $logger ){
        parent::__construct($appName, $request, $userManager, $config, $groupManager, $userSession, $accountManager, $l10nFactory);

        $this->companyManager = $companyManager;
        $this->logger = $logger;
    }


	/**
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 *
	 * Get a list of companies
	 *
	 * @param string $search Text to search for
	 * @param ?int $limit Limit the amount of companies returned
	 * @param int $offset Offset for searching for companies
	 * @return DataResponse<Http::STATUS_OK, array{companies: string[]}, array{}>
	 */
	public function getCompanies(string $search = '', ?int $limit = null, int $offset = 0): DataResponse {
		$companies = $this->companyManager->search($search, $limit, $offset);
		$companies = array_map(function ($company) {
			return $company->getCID();
		}, $companies);

		return new DataResponse(['companies' => $companies]);
	}
	

	/**
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 *
	 * Get a list of companies details
	 *
	 * @param string $search Text to search for
	 * @param ?int $limit Limit the amount of companies returned
	 * @param int $offset Offset for searching for companies
	 * @return DataResponse<Http::STATUS_OK, array{groups: ProvisioningApiGroupDetails[]}, array{}>
	 */
	public function getCompaniesDetails(string $search = '', int $limit = null, int $offset = 0): DataResponse {
		$companies = $this->companyManager->search($search, $limit, $offset);
		$companies = array_map(function ($company) {
			return [
				'id' => $company->getCID(),
				'displayname' => $company->getDisplayName(),
				'usercount' => $company->count(),
				//'disabled' => 0,
				//'canAdd' => $company->canAddUser(),
				//'canRemove' => $company->canRemoveUser(),
			];
		}, $companies);

		return new DataResponse(['companies' => $companies]);
	}


	/**
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 *
	 * Get the specified company info
	 *
	 * @param string $companyId ID of the company
	 * @return DataResponse<Http::STATUS_OK, array{users: string[]}, array{}>
	 * @throws OCSException
	 *
	 * @deprecated 14 Use getGroupUsers
	 */
	public function getCompany(string $companyId): DataResponse {
		$company = $this->companyManager->get($companyId);
		if ($company == null) {
			throw new OCSException('The requested company could not be found', OCSController::RESPOND_NOT_FOUND);
        }

		return new DataResponse(['id'=> $company->getCID(), 'displayname'=> $company->getDisplayName()]);
	}
	

	/**
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 *
	 * Get a list of users details in the specified company
	 *
	 * @param string $companyId ID of the company
	 * @param string $search Text to search for
	 * @param int|null $limit Limit the amount of users returned
	 * @param int $offset Offset for searching for users
	 *
	 * @return DataResponse<Http::STATUS_OK, array{users: array<string, ProvisioningApiUserDetails|array{id: string}>}, array{}>
	 * @throws OCSException
	 */
	public function getCompanyUsersDetails(string $companyId, string $search = '', int $limit = null, int $offset = 0): DataResponse {
		$companyId = urldecode($companyId);
		$user = $this->userSession->getUser();
		$isSubadminOfCompany = false;
		

		$company = $this->companyManager->get($companyId);
		if ($company !== null) {
			$isSubadminOfCompany = $this->companyManager->getSubAdmin()->isSubAdminOfCompany($user, $company);
		} else {
			throw new OCSException('The requested company could not be found', OCSController::RESPOND_NOT_FOUND);
        }

		if ($this->groupManager->isAdmin($user->getUID()) || $isSubadminOfCompany) {
			$users = $company->searchUsers($search, $limit, $offset);

			$usersDetails = [];
			foreach ($users as $user) {
				try {
					$userId = (string)$user->getUID();
					$userData = $this->getUserData($userId);
					if ($userData !== null) {
						$usersDetails[$userId] = $userData;
					} else {
						$usersDetails[$userId] = ['id' => $userId];
					}
				} catch (OCSNotFoundException $e) {
				}
			}
			return new DataResponse(['users' => $usersDetails]);
		}

		throw new OCSException('The requested company could not be found', OCSController::RESPOND_NOT_FOUND);

	}


	/**
	 * @NoCSRFRequired
	 * @PasswordConfirmationRequired
	 *
	 * Create a new company
	 *
	 * @param string $companyid ID of the company
	 * @param string $displayname Display name of the company
	 * @return DataResponse<Http::STATUS_OK, array<empty>, array{}>
	 * @throws OCSException
	 */
	public function addCompany(string $companyid, string $displayname = '', string $pwd = '', string $adminid='', string $adminname='', string $adminpwd=''): DataResponse {
		// Validate name
		if (empty($companyid)) {
			$this->logger->error('Company name not supplied', ['app' => 'provisioning_api']);
			throw new OCSException('Invalid company name', 101);
		}
		
		if ($this->companyManager->companyExists($companyid)) {
			throw new OCSException('company exists', 102);
		}
		$company = $this->companyManager->createCompany($companyid, $displayname);
		if ($company === null) {
			throw new OCSException('Not supported by backend', 103);
		}

		if ($adminid !== ''){

			$adminuser = $this->userManager->createUser($adminid, $adminpwd);
			$company->addUser($adminuser);
			$this->companyManager->getSubAdmin()->createSubAdmin($adminuser, $company);
		}
		else{
			$user = $this->userSession->getUser();
			$company->addUser($user);
			$this->companyManager->getSubAdmin()->createSubAdmin($user, $company);
		}

		return new DataResponse();
	}
    
	/**
	 * @NoCSRFRequired
	 * @PasswordConfirmationRequired
	 *
	 * Delete a company
	 *
	 * @param string $companyid ID of the company
	 * @return DataResponse<Http::STATUS_OK, array<empty>, array{}>
	 * @throws OCSException
	 */
	public function deleteGroup(string $companyid): DataResponse {
		$companyid = urldecode($companyid);

		// Check it exists
		if (!$this->companyManager->companyExists($companyid)) {
			throw new OCSException('', 101);
		}
        
        $this->companyManager->get($companyid)->delete();

		return new DataResponse();
	}
    

	/**
	 * @NoCSRFRequired
	 * 
	 * Get the list of user IDs that are a subadmin of the company
	 *
	 * @param string $companyId ID of the company
	 * @return DataResponse<Http::STATUS_OK, string[], array{}>
	 * @throws OCSException
	 */
	public function getSubAdminsOfCompany(string $companyId): DataResponse {
		$targetCompany = $this->companyManager->get($companyId);
		if ($targetCompany === null) {
			throw new OCSException('Company does not exist', 101);
		}

		$subadmins = $this->companyManager->getSubAdmin()->getCompanySubAdmins($targetCompany);
		$uids = [];
		foreach ($subadmins as $user) {
			$uids[] = $user->getUID();
		}

		return new DataResponse($uids);
	}	
}