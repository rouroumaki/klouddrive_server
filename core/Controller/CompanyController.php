<?php

namespace OC\Core\Controller;

use OCP\AppFramework\Http;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\TemplateResponse;
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
    public function create(string $cid, string $displayname, string $pwd=''): JSONResponse
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
	 * delete a company
	 * 
	 * @return JSONResponse<Http::STATUS_OK, array{}>

	 */
	public function delete(string $cid):JSONResponse{
		try{
			$company = $this->companyManager->get($cid);
			if ($company === null){
				return new JSONResponse(['data' => [
					'message' => $this->l10n->t('Not found the company( '). $cid . ').'
				]], Http::STATUS_BAD_REQUEST);
			}

			$company->delete();
			return new JSONResponse();
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
	 * add a user to a company
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
	 * remove a user from a company
	 * 
	 * @return JSONResponse<Http::STATUS_OK, array{}>

	 */
	public function removeUser(string $cid, string $uid): JSONResponse{
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
			$company->removeUser($user);
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
	 * remove a user from a company
	 * 
	 * @return JSONResponse<Http::STATUS_OK, array{}>

	 */
	public function members(string $cid, ?int $pageno=0, ?int $pagesize=null):JSONResponse{
		try{
			$company = $this->companyManager->get($cid);
			
			if ($company === null){
				return new JSONResponse(['data' => [
					'message' => $this->l10n->t('Not found the company( '). $cid . ').'
				]], Http::STATUS_BAD_REQUEST);
			}
			$company->getUsers();
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
			$data = array_map(function($item){
				return ['cid'=> $item->getCID(), 'display'=> $item->getDisplayname()];
			}, $companies);
			return new JSONResponse(['data' => $data]);
		}
		catch(\Exception $e){
			return new JSONResponse(['data' => ['message' => $this->l10n->t('An error occurred. '). $e->getMessage()]], Http::STATUS_BAD_REQUEST);
		}
	}

	/**
	 * @NoCSRFRequired
	 * @NoSameSiteCookieRequired
	 * 
	 * companyList
	 * 
	 * @return TemplateResponse

	 */
	public function companyList(){
		$jsonData = '{
			"groups": [
				{
					"id": "admin",
					"name": "admin",
					"usercount": 2,
					"disabled": 0,
					"canAdd": true,
					"canRemove": true
				},
				{
					"id": "disabled",
					"name": "Disabled users",
					"usercount": 0
				}
			],
			"isAdmin": true,
			"sortGroups": 1,
			"quotaPreset": [
				"1 GB",
				"5 GB",
				"10 GB"
			],
			"allowUnlimitedQuota": true,
			"userCount": 2,
			"languages": {
				"commonLanguages": [
					{
						"code": "en",
						"name": "English (US)"
					},
					{
						"code": "es",
						"name": "Español (España)"
					},
					{
						"code": "fr",
						"name": "Français"
					},
					{
						"code": "de",
						"name": "Deutsch (Persönlich: Du)"
					},
					{
						"code": "de_DE",
						"name": "Deutsch (Förmlich: Sie)"
					},
					{
						"code": "ja",
						"name": "Japanese (日本語)"
					},
					{
						"code": "ar",
						"name": "اللغة العربية"
					},
					{
						"code": "ru",
						"name": "Русский"
					},
					{
						"code": "nl",
						"name": "Nederlands"
					},
					{
						"code": "it",
						"name": "Italiano"
					},
					{
						"code": "pt_BR",
						"name": "Português Brasileiro"
					},
					{
						"code": "pt_PT",
						"name": "Português"
					},
					{
						"code": "da",
						"name": "Dansk"
					},
					{
						"code": "sv",
						"name": "Svenska"
					},
					{
						"code": "tr",
						"name": "Türkçe"
					},
					{
						"code": "zh_CN",
						"name": "简体中文"
					},
					{
						"code": "ko",
						"name": "한국어"
					}
				],
				"otherLanguages": [
					{
						"code": "id",
						"name": "Bahasa Indonesia"
					},
					{
						"code": "br",
						"name": "Brezhoneg"
					},
					{
						"code": "ca",
						"name": "Català"
					},
					{
						"code": "et_EE",
						"name": "Eesti"
					},
					{
						"code": "en_GB",
						"name": "English (British English)"
					},
					{
						"code": "es_AR",
						"name": "Español (Argentina)"
					},
					{
						"code": "es_CL",
						"name": "Español (Chile)"
					},
					{
						"code": "es_CO",
						"name": "Español (Colombia)"
					},
					{
						"code": "es_CR",
						"name": "Español (Costa Rica)"
					},
					{
						"code": "es_DO",
						"name": "Español (Dominican Republic)"
					},
					{
						"code": "es_EC",
						"name": "Español (Ecuador)"
					},
					{
						"code": "es_SV",
						"name": "Español (El Salvador)"
					},
					{
						"code": "es_GT",
						"name": "Español (Guatemala)"
					},
					{
						"code": "es_HN",
						"name": "Español (Honduras)"
					},
					{
						"code": "es_419",
						"name": "Español (Latin America)"
					},
					{
						"code": "es_MX",
						"name": "Español (México)"
					},
					{
						"code": "es_NI",
						"name": "Español (Nicaragua)"
					},
					{
						"code": "es_PA",
						"name": "Español (Panama)"
					},
					{
						"code": "es_PY",
						"name": "Español (Paraguay)"
					},
					{
						"code": "es_PE",
						"name": "Español (Peru)"
					},
					{
						"code": "es_PR",
						"name": "Español (Puerto Rico)"
					},
					{
						"code": "es_UY",
						"name": "Español (Uruguay)"
					},
					{
						"code": "eo",
						"name": "Esperanto"
					},
					{
						"code": "eu",
						"name": "Euskara"
					},
					{
						"code": "gl",
						"name": "Galego"
					},
					{
						"code": "hr",
						"name": "Hrvatski"
					},
					{
						"code": "lv",
						"name": "Latviešu"
					},
					{
						"code": "lt_LT",
						"name": "Lietuvių"
					},
					{
						"code": "hu",
						"name": "Magyar"
					},
					{
						"code": "nb",
						"name": "Norsk bokmål"
					},
					{
						"code": "oc",
						"name": "Occitan"
					},
					{
						"code": "pl",
						"name": "Polski"
					},
					{
						"code": "ro",
						"name": "Română"
					},
					{
						"code": "sk",
						"name": "Slovenčina"
					},
					{
						"code": "sl",
						"name": "Slovenščina"
					},
					{
						"code": "vi",
						"name": "Tiếng Việt"
					},
					{
						"code": "sc",
						"name": "sardu"
					},
					{
						"code": "fi",
						"name": "suomi"
					},
					{
						"code": "is",
						"name": "Íslenska"
					},
					{
						"code": "cs",
						"name": "Čeština"
					},
					{
						"code": "el",
						"name": "Ελληνικά"
					},
					{
						"code": "bg",
						"name": "Български"
					},
					{
						"code": "mk",
						"name": "Македонски"
					},
					{
						"code": "sr",
						"name": "Српски"
					},
					{
						"code": "uk",
						"name": "Українська"
					},
					{
						"code": "he",
						"name": "עברית"
					},
					{
						"code": "fa",
						"name": "فارسى"
					},
					{
						"code": "th",
						"name": "ภาษาไทย - Thai"
					},
					{
						"code": "lo",
						"name": "ຂີ້ຕົວະ"
					},
					{
						"code": "ka_GE",
						"name": "ქართული"
					},
					{
						"code": "zh_TW",
						"name": "正體中文（臺灣）"
					},
					{
						"code": "zh_HK",
						"name": "正體中文（香港）"
					}
				]
			},
			"defaultLanguage": "en",
			"forceLanguage": false,
			"defaultQuota": "none",
			"canChangePassword": true,
			"newUserGenerateUserID": false,
			"newUserRequireEmail": false,
			"newUserSendEmail": true
		} ';
		
		$serverData = json_decode($jsonData, true);
		return new TemplateResponse('settings', 'settings-vue', ['serverData' => $serverData, 'pageTitle' => $this->l10n->t('Users')]);
	}
}