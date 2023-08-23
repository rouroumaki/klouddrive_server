<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface ISetDisplayNameBackend{
	public function setDisplayName(string $cid, string $name): bool;
}