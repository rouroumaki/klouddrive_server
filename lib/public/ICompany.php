<?php

namespace OCP;

interface ICompany {
	public function getCID();

	public function getDisplayName();

	public function setDisplayName(string $displayName): bool;

	public function getUsers();

	public function inCompany(IUser $user);

	public function addUser(IUser $user);

	public function removeUser($user);

	public function searchUsers(string $search, ?int $limit = null, ?int $offset = null): array;

	public function count($search = '');


	public function searchDisplayName($search, $limit = null, $offset = null);

	public function getBackendNames();

	public function delete();

	public function canRemoveUser();

	public function canAddUser();

}
