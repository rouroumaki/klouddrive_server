<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface ISearchableCompanyBackend{
	public function searchInCompany(string $cid, string $search = '', int $limit = -1, int $offset = 0): array;

}