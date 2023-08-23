<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface IGetDisplayNameBackend{
	public function getDisplayName(string $cid): string;
}