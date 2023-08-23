<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface ICompanyDetailsBackend{
	public function getCompanyDetails(string $cid): array;
}