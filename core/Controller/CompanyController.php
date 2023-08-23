<?php

namespace OC\Core\Controller;

use OCP\AppFramework\Http;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserManager;
use OCP\ICompanyManager;
use Psr\Log\LoggerInterface;
use OCP\IL10N;


class CompanyController extends Controller {
	public function __construct(
		string $appName,
		IRequest $request,
		protected IL10N $l10n,
		protected LoggerInterface $logger,
		protected IUserManager $userManager,
		protected ICompanyManager $companyManager,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * @NoCSRFRequired
	 * @NoSameSiteCookieRequired
	 * 
	 * create a company
	 * 
	 * @return JSONResponse<Http::STATUS_OK, array{}>

	 */
    public function create(string $cid, string $displayname, string $pwd): JSONResponse
    {
		try{
			$company = $this->companyManager->createCompany($cid, $displayname);
			
			if ($company === null){
				return new JSONResponse(['data' => [
					'message' => $this->l10n->t('Not found the company( '). $cid . ').'
				]], Http::STATUS_BAD_REQUEST);
			}

			return new JSONResponse(['data'=> [
				'cid' => $company->getCID(),
				'displayname'=> $company->getDisplayName()
			]], Http::STATUS_OK);
		}
		catch (\Exception $e) {
			$this->logger->error($e->getMessage(), ['exception' => $e]);
			return new JSONResponse(['data' => ['message' => $this->l10n->t('An error occurred. '). $e->getMessage()]], Http::STATUS_OK);
		}
    }

	/**
	 * @NoCSRFRequired
	 * @NoSameSiteCookieRequired
	 * 
	 * create a company
	 * 
	 * @return JSONResponse<Http::STATUS_OK, array{}>

	 */
	public function addUser(string $cid, string $uid): JSONResponse	{
		try{
			$company = $this->companyManager->get($cid);
			$user = $this->userManager->get($uid);
			if ($company === null){
				return new JSONResponse(['data' => [
					'message' => $this->l10n->t('Not found the company( '). $cid . ').'
				]], Http::STATUS_BAD_REQUEST);
			}
			if ($user === null){
				return new JSONResponse(['data' => [
					'message' => $this->l10n->t('Not found the user ('). $uid . ').'
				]], Http::STATUS_BAD_REQUEST);
			}
			$company->addUser($user);
			return new JSONResponse();
		}
		catch(\Exception $e){
			return new JSONResponse(['data' => ['message' => $this->l10n->t('An error occurred. '). $e->getMessage()]], Http::STATUS_BAD_REQUEST);
		}
	}


	/**
	 * @NoCSRFRequired
	 * @NoSameSiteCookieRequired
	 * 
	 * create a company
	 * 
	 * @return JSONResponse<Http::STATUS_OK, array{}>

	 */
	public function search(string $search='', ?int $pageno=0, ?int $pagesize=null){
		$offset = 0;
		$limit = null;

		if (!is_null($pagesize) && $pagesize >0){
			$limit = $pagesize;			
			$offset = $pagesize * max(($pageno ?? 1), 1) - $pagesize;
		}

		try{
			$companies = $this->companyManager->search($search, $limit, $offset);
			return new JSONResponse(['data' => $companies]);
		}
		catch(\Exception $e){
			return new JSONResponse(['data' => ['message' => $this->l10n->t('An error occurred. '). $e->getMessage()]], Http::STATUS_BAD_REQUEST);
		}
	}
}