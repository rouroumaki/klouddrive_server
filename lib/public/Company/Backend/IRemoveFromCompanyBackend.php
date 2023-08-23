<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface IRemoveFromCompanyBackend{
	public function removeFromCompany(string $uid, string $cid): bool;
}