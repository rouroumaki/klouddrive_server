<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2019, Georg Ehrke
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Georg Ehrke <oc.list@georgehrke.com>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Richard Steinmetz <richard@steinmetz.cloud>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\DAV\CalDAV\Reminder;

use OCP\IUser;
use Sabre\VObject\Component\VEvent;

/**
 * Interface INotificationProvider
 *
 * @package OCA\DAV\CalDAV\Reminder
 */
interface INotificationProvider {

	/**
	 * Send notification
	 *
	 * @param VEvent $vevent
	 * @param string|null $calendarDisplayName
	 * @param string[] $principalEmailAddresses All email addresses associated to the principal owning the calendar object
	 * @param IUser[] $users
	 * @return void
	 */
	public function send(VEvent $vevent,
						 ?string $calendarDisplayName,
						 array  $principalEmailAddresses,
						 array $users = []): void;
}
