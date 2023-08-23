<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface IAddToCompanyBackend{
	public function addToCompany(string $uid, string $cid): bool;
}