<?php

declare(strict_types=1);


namespace OCP\Company\Events;

use OCP\EventDispatcher\Event;
use OCP\ICompany;

class CompanyCreatedEvent extends Event {
	private $company;

	public function __construct(ICompany $company) {
		parent::__construct();
		$this->company = $company;
	}

	public function getCompany(): ICompany {
		return $this->company;
	}
}
