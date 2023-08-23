<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface ICreateCompanyBackend{
	public function createCompany(string $cid, string $name): bool;
}