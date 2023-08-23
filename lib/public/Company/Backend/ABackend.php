<?php

declare(strict_types=1);


namespace OCP\Company\Backend;

use OCP\CompanyInterface;

abstract class ABackend implements CompanyInterface {
	public function implementsActions($actions): bool {
		$implements = 0;

		if ($this instanceof IAddToCompanyBackend) {
			$implements |= CompanyInterface::ADD_TO_Company;
		}
		if ($this instanceof ICountUsersBackend) {
			$implements |= CompanyInterface::COUNT_USERS;
		}
		if ($this instanceof ICreateCompanyBackend) {
			$implements |= CompanyInterface::CREATE_COMPANY;
		}
		if ($this instanceof IDeleteCompanyBackend) {
			$implements |= CompanyInterface::DELETE_COMPANY;
		}
		if ($this instanceof ICompanyDetailsBackend) {
			$implements |= CompanyInterface::COMPANY_DETAILS;
		}
		if ($this instanceof IRemoveFromCompanyBackend) {
			$implements |= CompanyInterface::REMOVE_FROM_COMPANY;
		}

		return (bool)($actions & $implements);
	}
}
