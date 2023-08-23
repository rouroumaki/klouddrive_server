<?php

declare(strict_types=1);


namespace OC\Company;

use OCP\Cache\CappedMemoryCache;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Company\Events\CompanyChangedEvent;
use OCP\ICache;
use OCP\ICacheFactory;
use OCP\ICompanyManager;

class DisplayNameCache implements IEventListener {
	private CappedMemoryCache $cache;
	private ICache $memCache;
	private ICompanyManager $companyManager;

	public function __construct(ICacheFactory $cacheFactory, ICompanyManager $companyManager) {
		$this->cache = new CappedMemoryCache();
		$this->memCache = $cacheFactory->createDistributed('companyDisplayNameMappingCache');
		$this->companyManager = $companyManager;
	}

	public function getDisplayName(string $companyId): ?string {
		if (isset($this->cache[$companyId])) {
			return $this->cache[$companyId];
		}
		$displayName = $this->memCache->get($companyId);
		if ($displayName) {
			$this->cache[$companyId] = $displayName;
			return $displayName;
		}

		$company = $this->companyManager->get($companyId);
		if ($company) {
			$displayName = $company->getDisplayName();
		} else {
			$displayName = null;
		}
		$this->cache[$companyId] = $displayName;
		$this->memCache->set($companyId, $displayName, 60 * 10); 

		return $displayName;
	}

	public function clear(): void {
		$this->cache = new CappedMemoryCache();
		$this->memCache->clear();
	}

	public function handle(Event $event): void {
		if ($event instanceof CompanyChangedEvent && $event->getFeature() === 'displayName') {
			$companyId = $event->getCompany()->getCID();
			$newDisplayName = $event->getValue();
			$this->cache[$companyId] = $newDisplayName;
			$this->memCache->set($companyId, $newDisplayName, 60 * 10); 
		}
	}
}
