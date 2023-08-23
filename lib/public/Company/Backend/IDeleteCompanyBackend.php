<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface IDeleteCompanyBackend{
	public function deleteCompany(string $cid): bool;
}