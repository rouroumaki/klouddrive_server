<?php

namespace OCP;
interface ICompanyManager {
	public function isBackendUsed($backendClass);

	public function addBackend($backend);

	public function clearBackends();

	public function getBackends();

	public function get($cid): ?ICompany;

	public function companyExists($cid): bool;

	public function createCompany($cid, $name): ?ICompany;

	public function search(string $search, ?int $limit = null, ?int $offset = 0);

	public function getUserCompanies(IUser $user = null);

	public function getUserCompanyIds(IUser $user): array;

	public function displayNamesInGroup($cid, $search = '', $limit = -1, $offset = 0);

	public function isInCompany($userId, $company);

	public function getDisplayName(string $companyId): ?string;
}