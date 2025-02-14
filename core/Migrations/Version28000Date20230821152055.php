<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Julien Veyssier <julien-nc@posteo.net>
 *
 * @author Julien Veyssier <julien-nc@posteo.net>
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

namespace OC\Core\Migrations;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Adjust textprocessing_tasks table
 */
class Version28000Date20230821152055 extends SimpleMigrationStep {
	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('companies')) {
			$table = $schema->createTable('companies');
			$table->addColumn('cid', 'string', [
				'notnull' => true,
				'length' => 64,
				'default' => '',
			]);

			$table->addColumn('displayname', 'string', [
				'notnull' => false,
				'length' => 255,
				'default' => 'name',
			]);
			$table->addColumn('password', 'string', [
				'notnull' => false,
				'length' => 255,
				'default' => '',
			]);

            $table->setPrimaryKey(['cid']);
		}

		if (!$schema->hasTable('company_user')) {
			$table = $schema->createTable('company_user');
			$table->addColumn('cid', 'string', [
				'notnull' => true,
				'length' => 64,
				'default' => '',
			]);
			$table->addColumn('uid', 'string', [
				'notnull' => true,
				'length' => 64,
				'default' => '',
			]);
			$table->setPrimaryKey(['cid', 'uid']);
			$table->addIndex(['uid'], 'cu_uid_index');
		}

		if (!$schema->hasTable('company_admin')) {
			$table = $schema->createTable('company_admin');
			$table->addColumn('cid', 'string', [
				'notnull' => true,
				'length' => 64,
				'default' => '',
			]);
			$table->addColumn('uid', 'string', [
				'notnull' => true,
				'length' => 64,
				'default' => '',
			]);
			$table->setPrimaryKey(['cid', 'uid']);
			$table->addIndex(['uid'], 'ca_uid_index');
		}
		return $schema;
	}
}
