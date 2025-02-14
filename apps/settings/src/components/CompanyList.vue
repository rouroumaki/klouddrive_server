<!--
  - @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @author John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->

<template>
	<Fragment>
		<NewCompanyModal
			v-if="showConfig.showNewCompanyForm"
			:loading="loading"
			:new-user="newUser"
			:quota-options="quotaOptions"
			@reset="resetForm"
			@close="closeModal"
		/>
		<NcEmptyContent
			v-if="filteredCompanies.length === 0"
			class="empty"
			:name="
				isInitialLoad && loading.companies
					? null
					: t('settings', 'No companies')
			"
		>
			<template #icon>
				<NcLoadingIcon
					v-if="isInitialLoad && loading.companies"
					:name="t('settings', 'Loading companies …')"
					:size="64"
				/>
				<NcIconSvgWrapper v-else :svg="usersSvg" />
			</template>
		</NcEmptyContent>

		<RecycleScroller
			v-else
			ref="scroller"
			class="user-list"
			:style="style"
			:items="filteredCompanies"
			key-field="id"
			role="table"
			list-tag="tbody"
			list-class="user-list__body"
			item-tag="tr"
			item-class="user-list__row"
			:item-size="rowHeight"
			@hook:mounted="handleMounted"
			@scroll-end="handleScrollEnd"
		>
			<template #before>
				<caption class="hidden-visually">
					{{
						t(
							"settings",
							"List of companies. This list is not fully rendered for performance reasons. The companies will be rendered as you navigate through the list."
						)
					}}
				</caption>
				<UserListHeader :has-obfuscated="hasObfuscated" />
			</template>

			<template #default="{ item: company }">
				<!-- :quota-options="quotaOptions" -->
				<UserRow
					:user="company"
					:companies="companies"
					:settings="settings"
					:has-obfuscated="hasObfuscated"
					:groups="groups"
					:languages="languages"
					:external-actions="externalActions"
				/>
			</template>

			<template #after>
				<ConpanyListFooter
					:loading="loading.companies"
					:filtered-companies="filteredCompanies"
				/>
			</template>
		</RecycleScroller>
	</Fragment>
</template>

<script>
import Vue from "vue";
import { Fragment } from "vue-frag";
import { RecycleScroller } from "vue-virtual-scroller";

import NcEmptyContent from "@nextcloud/vue/dist/Components/NcEmptyContent.js";
import NcIconSvgWrapper from "@nextcloud/vue/dist/Components/NcIconSvgWrapper.js";
import NcLoadingIcon from "@nextcloud/vue/dist/Components/NcLoadingIcon.js";

import { subscribe, unsubscribe } from "@nextcloud/event-bus";
import { showError } from "@nextcloud/dialogs";

import NewCompanyModal from "./Companies/NewCompanyModal.vue";
import ConpanyListFooter from "./Companies/ConpanyListFooter.vue";
import UserListHeader from "./Companies/UserListHeader.vue";
import UserRow from "./Companies/UserRow.vue";

import {
	defaultQuota,
	isObfuscated,
	unlimitedQuota,
} from "../utils/userUtils.ts";
import logger from "../logger.js";

import usersSvg from "../../img/users.svg?raw";

const newUser = {
	id: "",
	displayName: "",
	password: "",
	mailAddress: "",
	groups: [],
	manager: "",
	subAdminsGroups: [],
	quota: defaultQuota,
	language: {
		code: "en",
		name: t("settings", "Default language"),
	},
	adminUser: '',
	adminDisplayname: '',
	adminPassword: '',
};

export default {
	name: "UserList",

	components: {
		Fragment,
		NcEmptyContent,
		NcIconSvgWrapper,
		NcLoadingIcon,
		NewCompanyModal,
		RecycleScroller,
		ConpanyListFooter,
		UserListHeader,
		UserRow,
	},

	props: {
		selectedGroup: {
			type: String,
			default: null,
		},
		externalActions: {
			type: Array,
			default: () => [],
		},
	},

	data() {
		return {
			loading: {
				all: false,
				groups: false,
				companies: false,
			},
			isInitialLoad: true,
			rowHeight: 55,
			usersSvg,
			searchQuery: "",
			newUser: Object.assign({}, newUser),
		};
	},

	computed: {
		showConfig() {
			return this.$store.getters.getShowConfig;
		},

		settings() {
			return this.$store.getters.getServerData;
		},

		style() {
			return {
				"--row-height": `${this.rowHeight}px`,
			};
		},

		hasObfuscated() {
			return this.filteredCompanies.some((user) => isObfuscated(user));
		},

		companies() {
			return this.$store.getters.getCompanies;
		},

		filteredCompanies() {
			if (this.selectedGroup === "disabled") {
				return this.companies.filter((user) => user.enabled == false);
			}
			if (!this.settings.isAdmin) {
				return this.companies.filter((user) => user.enabled !== false);
			}
			return this.companies.filter((user) => user.enabled != false);
		},

		quotaOptions() {
			// convert the preset array into objects
			const quotaPreset = this.settings.quotaPreset.reduce((acc, cur) => acc.concat({
				id: cur,
				label: cur,
			}), [])
			// add default presets
			if (this.settings.allowUnlimitedQuota) {
				quotaPreset.unshift(unlimitedQuota)
			}
			quotaPreset.unshift(defaultQuota)
			return quotaPreset
		},

		groups() {
			// data provided php side + remove the disabled group
			return this.$store.getters.getGroups
				.filter((group) => group.id !== "disabled")
				.sort((a, b) => a.name.localeCompare(b.name));
		},

		subAdminsGroups() {
			// data provided php side
			return this.$store.getters.getSubadminGroups;
		},

		companiesOffset() {
			return this.$store.getters.getCompaniesOffset;
		},

		companiesLimit() {
			return this.$store.getters.getCompaniesLimit;
		},

		companiesCount() {
			return this.companies.length;
		},

		/* LANGUAGES */
		languages() {
			return [
				{
					label: t("settings", "Common languages"),
					languages: this.settings.languages.commonLanguages,
				},
				{
					label: t("settings", "Other languages"),
					languages: this.settings.languages.otherLanguages,
				},
			];
		},
	},

	watch: {
		filteredCompanies(filteredCompanies) {
			logger.debug(`${filteredCompanies.length} filtered user(s)`);
		},
	},

	async mounted() {
		await this.loadCompanies();
		if (!this.settings.canChangePassword) {
			OC.Notification.showTemporary(
				t(
					"settings",
					"Password change is disabled because the master key is disabled"
				)
			);
		}

		/**
		 * Reset and init new user form
		 */
		this.resetForm();

		/**
		 * Register search
		 */
		subscribe("nextcloud:unified-search.search", this.search);
		subscribe("nextcloud:unified-search.reset", this.resetSearch);

		/**
		 * If disabled group but empty, redirect
		 */
		await this.redirectIfDisabled();
	},

	beforeDestroy() {
		unsubscribe("nextcloud:unified-search.search", this.search);
		unsubscribe("nextcloud:unified-search.reset", this.resetSearch);
	},

	methods: {
		async handleMounted() {
			// Add proper semantics to the recycle scroller slots
			const header = this.$refs.scroller.$refs.before;
			const footer = this.$refs.scroller.$refs.after;
			header.classList.add("user-list__header");
			header.setAttribute("role", "rowgroup");
			footer.classList.add("user-list__footer");
			footer.setAttribute("role", "rowgroup");
		},

		async handleScrollEnd() {
			await this.loadCompanies();
		},

		async loadCompanies() {
			this.loading.companies = true;
			try {
				await this.$store.dispatch("getCompanies", {
					offset: this.companiesOffset,
					limit: this.companiesLimit,
					search: this.searchQuery,
				});
				logger.debug(`${this.companies.length} total user(s) loaded`);
			} catch (error) {
				logger.error("Failed to load companies", { error });
				showError("Failed to load companies");
			}
			this.loading.companies = false
			this.isInitialLoad = false;
		},

		closeModal() {
			this.$store.commit("setShowConfig", {
				key: "showNewCompanyForm",
				value: false,
			});
		},

		async search({ query }) {
			this.searchQuery = query;
			this.$store.commit("resetUsers");
			await this.loadCompanies();
		},

		resetSearch() {
			this.search({ query: "" });
		},

		resetForm() {
			// revert form to original state
			this.newUser = Object.assign({}, newUser);

			/**
			 * Init default language from server data. The use of this.settings
			 * requires a computed variable, which break the v-model binding of the form,
			 * this is a much easier solution than getter and setter on a computed var
			 */
			if (this.settings.defaultLanguage) {
				Vue.set(this.newUser.language, "code", this.settings.defaultLanguage);
			}

			/**
			 * In case the user directly loaded the user list within a group
			 * the watch won't be triggered. We need to initialize it.
			 */
			this.setNewUserDefaultGroup(this.selectedGroup);

			this.loading.all = false;
		},

		setNewUserDefaultGroup(value) {
			if (value && value.length > 0) {
				// setting new user default group to the current selected one
				const currentGroup = this.groups.find((group) => group.id === value);
				if (currentGroup) {
					this.newUser.groups = [currentGroup];
					return;
				}
			}
			// fallback, empty selected group
			this.newUser.groups = [];
		},

		/**
		 * If the selected group is the disabled group but the count is 0
		 * redirect to the all companies page.
		 * we only check for 0 because we don't have the count on ldap
		 * and we therefore set the usercount to -1 in this specific case
		 */
		async redirectIfDisabled() {
			const allGroups = this.$store.getters.getGroups;
			if (
				this.selectedGroup === "disabled" &&
				allGroups.findIndex(
					(group) => group.id === "disabled" && group.usercount === 0
				) > -1
			) {
				// disabled group is empty, redirection to all companies
				this.$router.push({ name: "companies" });
				await this.loadCompanies();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./Companies/shared/styles.scss";

.empty {
	:deep {
		.icon-vue {
			width: 64px;
			height: 64px;

			svg {
				max-width: 64px;
				max-height: 64px;
			}
		}
	}
}

.user-list {
	--avatar-cell-width: 48px;
	--cell-padding: 7px;
	--cell-width: 200px;
	--cell-min-width: calc(var(--cell-width) - (2 * var(--cell-padding)));

	display: block;
	overflow: auto;
	height: 100%;

	:deep {
		.user-list {
			&__body {
				display: flex;
				flex-direction: column;
				width: 100%;
				// Necessary for virtual scrolling absolute
				position: relative;
				margin-top: var(--row-height);
			}

			&__row {
				@include row;
				border-bottom: 1px solid var(--color-border);

				&:hover {
					background-color: var(--color-background-hover);

					.row__cell:not(.row__cell--actions) {
						background-color: var(--color-background-hover);
					}
				}
			}
		}

		.vue-recycle-scroller__slot {
			&.user-list__header,
			&.user-list__footer {
				position: sticky;
			}

			&.user-list__header {
				top: 0;
				z-index: 10;
			}

			&.user-list__footer {
				left: 0;
			}
		}
	}
}
</style>
