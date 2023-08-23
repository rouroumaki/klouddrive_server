<?php

declare(strict_types=1);


namespace OCP\Company\Events;

use OCP\EventDispatcher\Event;

class BeforeCompanyCreatedEvent extends Event {
	private $name;

	public function __construct(string $name) {
		parent::__construct();
		$this->name = $name;
	}

	public function getName(): string {
		return $this->name;
	}
}
