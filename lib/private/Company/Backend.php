<?php

namespace OC\Company;

abstract class Backend implements \OCP\CompanyInterface {
	/**
	 * error code for functions not provided by the group backend
	 */
	public const NOT_IMPLEMENTED = -501;

	protected $possibleActions = [
		self::CREATE_COMPANY => 'createCompany',
		self::DELETE_COMPANY => 'deleteCompany',
		self::ADD_TO_COMPANY => 'addToCompany',
		self::REMOVE_FROM_COMPANY => 'removeFromCompany',
		self::COUNT_USERS => 'countUsersInCompany',
		self::GROUP_DETAILS => 'getCompanyDetails',
	];

	
	public function getSupportedActions() {
		$actions = 0;
		foreach ($this->possibleActions as $action => $methodName) {
			if (method_exists($this, $methodName)) {
				$actions |= $action;
			}
		}

		return $actions;
	}

	public function implementsActions($actions) {
		return (bool)($this->getSupportedActions() & $actions);
	}

	public function inCompany($uid, $cid) {
		return in_array($cid, $this->getUserCompanies($uid));
	}

	public function getUserCompanies($uid) {
		return [];
	}

	public function getCompanies($search = '', $limit = -1, $offset = 0) {
		return [];
	}

	public function companyExists($cid) {
		return in_array($cid, $this->getCompanies($cid, 1));
	}

	public function usersInCompany($cid, $search = '', $limit = -1, $offset = 0) {
		return [];
	}
}