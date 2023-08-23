<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface ICountUsersBackend{
	public function countUsersInCompany(string $cid, string $search = ''): int;
}