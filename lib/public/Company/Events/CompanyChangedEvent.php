<?php

declare(strict_types=1);


namespace OCP\Company\Events;

use OCP\EventDispatcher\Event;
use OCP\ICompany;

class CompanyChangedEvent extends Event {
	private ICompany $company;
	private string $feature;
	private $value;
	private $oldValue;

	public function __construct(ICompany $company,
		string $feature,
		$value,
		$oldValue = null) {
		parent::__construct();
		$this->company = $company;
		$this->feature = $feature;
		$this->value = $value;
		$this->oldValue = $oldValue;
	}

	public function getCompany(): ICompany {
		return $this->company;
	}

	public function getFeature(): string {
		return $this->feature;
	}

	public function getValue() {
		return $this->value;
	}

	public function getOldValue() {
		return $this->oldValue;
	}
}
