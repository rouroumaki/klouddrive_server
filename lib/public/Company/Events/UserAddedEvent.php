<?php

declare(strict_types=1);


namespace OCP\Company\Events;

use OCP\EventDispatcher\Event;
use OCP\ICompany;
use OCP\IUser;

/**
 * @since 18.0.0
 */
class UserAddedEvent extends Event {
	private $company;

	private $user;

	public function __construct(ICompany $company, IUser $user) {
		parent::__construct();
		$this->company = $company;
		$this->user = $user;
	}

	public function getCompany(): ICompany {
		return $this->company;
	}

	/**
	 * @return IUser
	 * @since 18.0.0
	 */
	public function getUser(): IUser {
		return $this->user;
	}
}
