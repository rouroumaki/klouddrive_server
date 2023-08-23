<?php

namespace OCP;

interface CompanyInterface {
    
	public const CREATE_COMPANY = 0x00000001;
	public const DELETE_COMPANY = 0x00000010;
	public const ADD_TO_COMPANY = 0x00000100;

	public const REMOVE_FROM_COMPANY = 0x00001000;
	
	public const COUNT_USERS = 0x00100000;
	public const COMPANY_DETAILS = 0x01000000;
	public const IS_ADMIN = 0x10000000;

	public function implementsActions($actions);

	public function inCompany($uid, $cid);

	public function getUserCompanies($uid);

	public function getCompanies(string $search = '', int $limit = -1, int $offset = 0);

	public function companyExists($cid);

	public function usersInCompany($cid, $search = '', $limit = -1, $offset = 0);
}