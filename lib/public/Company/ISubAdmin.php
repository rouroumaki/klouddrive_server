<?php

declare(strict_types=1);


namespace OCP\Company;

use OCP\ICompany;
use OCP\IUser;

interface ISubAdmin {
	public function createSubAdmin(IUser $user, ICompany $company): void;

	public function deleteSubAdmin(IUser $user, ICompany $company): void;

	public function getSubAdminsCompanies(IUser $user): array;

	public function getCompanySubAdmins(ICompany $company): array;

	public function isSubAdminOfCompany(IUser $user, ICompany $company): bool;

	public function isSubAdmin(IUser $user): bool;

	public function isUserAccessible(IUser $subadmin, IUser $user): bool;
}
