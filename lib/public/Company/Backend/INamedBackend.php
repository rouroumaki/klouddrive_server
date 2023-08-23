<?php
declare(strict_types=1);

namespace OCP\Company\Backend;

interface INamedBackend{
	public function getBackendName(): string;    
}