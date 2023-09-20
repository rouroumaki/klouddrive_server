/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files_external/src/actions/enterCredentialsAction.ts":
/*!*******************************************************************!*\
  !*** ./apps/files_external/src/actions/enterCredentialsAction.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _mdi_svg_svg_login_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/login.svg?raw */ "./node_modules/@mdi/svg/svg/login.svg?raw");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/credentialsUtils */ "./apps/files_external/src/utils/credentialsUtils.ts");
/* harmony import */ var _utils_externalStorageUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/externalStorageUtils */ "./apps/files_external/src/utils/externalStorageUtils.ts");









const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_5__.FileAction({
  id: 'credentials-external-storage',
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Enter missing credentials'),
  iconSvgInline: () => _mdi_svg_svg_login_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
  enabled: nodes => {
    var _node$attributes;
    // Only works on single node
    if (nodes.length !== 1) {
      return false;
    }
    const node = nodes[0];
    if (!(0,_utils_externalStorageUtils__WEBPACK_IMPORTED_MODULE_7__.isNodeExternalStorage)(node)) {
      return false;
    }
    const config = ((_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.config) || {};
    if ((0,_utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_6__.isMissingAuthConfig)(config)) {
      return true;
    }
    return false;
  },
  async exec(node) {
    // always resolve auth request, we'll process the data afterwards
    const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('/apps/files_external/api/v1/auth'), {
      validateStatus: () => true
    });
    const data = (response === null || response === void 0 ? void 0 : response.data) || {};
    if (data.ocs.data.user && data.ocs.data.password) {
      const configResponse = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('apps/files_external/userglobalstorages/{id}', node.attributes), {
        backendOptions: data.ocs.data
      });
      const config = configResponse.data;
      if (config.status !== _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_6__.STORAGE_STATUS.SUCCESS) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files_external', 'Unable to update this external storage config. {statusMessage}', {
          statusMessage: (config === null || config === void 0 ? void 0 : config.statusMessage) || ''
        }));
        return null;
      }
      // Success update config attribute
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files_external', 'New configuration successfully saved'));
      vue__WEBPACK_IMPORTED_MODULE_8__["default"].set(node.attributes, 'config', config);
    }
    return null;
  },
  // Before openFolderAction
  order: -1000,
  default: _nextcloud_files__WEBPACK_IMPORTED_MODULE_5__.DefaultType.DEFAULT,
  inline: () => true
});
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_5__.registerFileAction)(action);

/***/ }),

/***/ "./apps/files_external/src/actions/inlineStorageCheckAction.ts":
/*!*********************************************************************!*\
  !*** ./apps/files_external/src/actions/inlineStorageCheckAction.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_alert_circle_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/alert-circle.svg?raw */ "./node_modules/@mdi/svg/svg/alert-circle.svg?raw");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _css_fileEntryStatus_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/fileEntryStatus.scss */ "./apps/files_external/src/css/fileEntryStatus.scss");
/* harmony import */ var _services_externalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/externalStorage */ "./apps/files_external/src/services/externalStorage.ts");
/* harmony import */ var _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/credentialsUtils */ "./apps/files_external/src/utils/credentialsUtils.ts");
/* harmony import */ var _utils_externalStorageUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/externalStorageUtils */ "./apps/files_external/src/utils/externalStorageUtils.ts");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");









const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_7__.FileAction({
  id: 'check-external-storage',
  displayName: () => '',
  iconSvgInline: () => '',
  enabled: nodes => {
    return nodes.every(node => (0,_utils_externalStorageUtils__WEBPACK_IMPORTED_MODULE_6__.isNodeExternalStorage)(node) === true);
  },
  exec: async () => null,
  /**
   * Use this function to check the storage availability
   * We then update the node attributes directly.
   */
  async renderInline(node) {
    let config = null;
    try {
      const response = await (0,_services_externalStorage__WEBPACK_IMPORTED_MODULE_4__.getStatus)(node.attributes.id, node.attributes.scope === 'system');
      config = response.data;
      vue__WEBPACK_IMPORTED_MODULE_8__["default"].set(node.attributes, 'config', config);
      if (config.status !== _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_5__.STORAGE_STATUS.SUCCESS) {
        var _config;
        throw new Error(((_config = config) === null || _config === void 0 ? void 0 : _config.statusMessage) || (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files_external', 'There was an error with this external storage.'));
      }
      return null;
    } catch (error) {
      // If axios failed or if something else prevented
      // us from getting the config
      if (error.response && !config) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showWarning)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files_external', 'We were unable to check the external storage {basename}', {
          basename: node.basename
        }));
        return null;
      }
      // Checking if we really have an error
      const isWarning = (0,_utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_5__.isMissingAuthConfig)(config);
      const overlay = document.createElement('span');
      overlay.classList.add("files-list__row-status--".concat(isWarning ? 'warning' : 'error'));
      const span = document.createElement('span');
      span.className = 'files-list__row-status';
      // Only show an icon for errors, warning like missing credentials
      // have a dedicated inline action button
      if (!isWarning) {
        span.innerHTML = _mdi_svg_svg_alert_circle_svg_raw__WEBPACK_IMPORTED_MODULE_2__;
        span.title = error.message;
      }
      span.prepend(overlay);
      return span;
    }
  },
  order: 10
});
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_7__.registerFileAction)(action);

/***/ }),

/***/ "./apps/files_external/src/actions/openInFilesAction.ts":
/*!**************************************************************!*\
  !*** ./apps/files_external/src/actions/openInFilesAction.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/credentialsUtils */ "./apps/files_external/src/utils/credentialsUtils.ts");




const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.FileAction({
  id: 'open-in-files-external-storage',
  displayName: nodes => {
    var _nodes$;
    const config = (nodes === null || nodes === void 0 || (_nodes$ = nodes[0]) === null || _nodes$ === void 0 || (_nodes$ = _nodes$.attributes) === null || _nodes$ === void 0 ? void 0 : _nodes$.config) || {
      status: _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_3__.STORAGE_STATUS.INDETERMINATE
    };
    if (config.status !== _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_3__.STORAGE_STATUS.SUCCESS) {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files_external', 'Examine this faulty external storage configuration');
    }
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'Open in files');
  },
  iconSvgInline: () => '',
  enabled: (nodes, view) => view.id === 'extstoragemounts',
  async exec(node) {
    const config = node.attributes.config;
    if ((config === null || config === void 0 ? void 0 : config.status) !== _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_3__.STORAGE_STATUS.SUCCESS) {
      window.OC.dialogs.confirm((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files_external', 'There was an error with this external storage. Do you want to review this mount point config in the settings page?'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files_external', 'External mount error'), redirect => {
        if (redirect === true) {
          const scope = node.attributes.scope === 'personal' ? 'user' : 'admin';
          window.location.href = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/settings/".concat(scope, "/externalstorages"));
        }
      });
      return null;
    }
    // Do not use fileid as we don't have that information
    // from the external storage api
    window.OCP.Files.Router.goToRoute(null,
    // use default route
    {
      view: 'files'
    }, {
      dir: node.path
    });
    return null;
  },
  // Before openFolderAction
  order: -1000,
  default: _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.DefaultType.HIDDEN
});
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.registerFileAction)(action);

/***/ }),

/***/ "./apps/files_external/src/main.ts":
/*!*****************************************!*\
  !*** ./apps/files_external/src/main.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _mdi_svg_svg_folder_network_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/folder-network.svg?raw */ "./node_modules/@mdi/svg/svg/folder-network.svg?raw");
/* harmony import */ var _actions_enterCredentialsAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/enterCredentialsAction */ "./apps/files_external/src/actions/enterCredentialsAction.ts");
/* harmony import */ var _actions_inlineStorageCheckAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/inlineStorageCheckAction */ "./apps/files_external/src/actions/inlineStorageCheckAction.ts");
/* harmony import */ var _actions_openInFilesAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/openInFilesAction */ "./apps/files_external/src/actions/openInFilesAction.ts");
/* harmony import */ var _services_externalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/externalStorage */ "./apps/files_external/src/services/externalStorage.ts");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */








const allowUserMounting = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('files_external', 'allowUserMounting', false);
const Navigation = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_7__.getNavigation)();
Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_7__.View({
  id: 'extstoragemounts',
  name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'External storage'),
  caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'List of external storage.'),
  emptyCaption: allowUserMounting ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'There is no external storage configured. You can configure them in your Personal settings.') : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'There is no external storage configured and you don\'t have the permission to configure them.'),
  emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'No external storage'),
  icon: _mdi_svg_svg_folder_network_svg_raw__WEBPACK_IMPORTED_MODULE_2__,
  order: 30,
  columns: [new _nextcloud_files__WEBPACK_IMPORTED_MODULE_7__.Column({
    id: 'storage-type',
    title: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'Storage type'),
    render(node) {
      var _node$attributes;
      const backend = ((_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.backend) || (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'Unknown');
      const span = document.createElement('span');
      span.textContent = backend;
      return span;
    }
  }), new _nextcloud_files__WEBPACK_IMPORTED_MODULE_7__.Column({
    id: 'scope',
    title: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'Scope'),
    render(node) {
      var _node$attributes2;
      const span = document.createElement('span');
      let scope = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'Personal');
      if (((_node$attributes2 = node.attributes) === null || _node$attributes2 === void 0 ? void 0 : _node$attributes2.scope) === 'system') {
        scope = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_external', 'System');
      }
      span.textContent = scope;
      return span;
    }
  })],
  getContents: _services_externalStorage__WEBPACK_IMPORTED_MODULE_6__.getContents
}));

/***/ }),

/***/ "./apps/files_external/src/services/externalStorage.ts":
/*!*************************************************************!*\
  !*** ./apps/files_external/src/services/externalStorage.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents),
/* harmony export */   getStatus: () => (/* binding */ getStatus),
/* harmony export */   rootPath: () => (/* binding */ rootPath)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/credentialsUtils */ "./apps/files_external/src/utils/credentialsUtils.ts");
var _getCurrentUser;





const rootPath = "/files/".concat((_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid);
const entryToFolder = ocsEntry => {
  var _getCurrentUser2;
  const path = (ocsEntry.path + '/' + ocsEntry.name).replace(/^\//gm, '');
  return new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Folder({
    id: ocsEntry.id,
    source: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav' + rootPath + '/' + path),
    root: rootPath,
    owner: ((_getCurrentUser2 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()) === null || _getCurrentUser2 === void 0 ? void 0 : _getCurrentUser2.uid) || null,
    permissions: ocsEntry.config.status !== _utils_credentialsUtils__WEBPACK_IMPORTED_MODULE_4__.STORAGE_STATUS.SUCCESS ? _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.NONE : (ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.permissions) || _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.READ,
    attributes: {
      displayName: path,
      ...ocsEntry
    }
  });
};
const getContents = async () => {
  var _getCurrentUser3;
  const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_external/api/v1/mounts'));
  const contents = response.data.ocs.data.map(entryToFolder);
  return {
    folder: new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Folder({
      id: 0,
      source: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav' + rootPath),
      root: rootPath,
      owner: ((_getCurrentUser3 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()) === null || _getCurrentUser3 === void 0 ? void 0 : _getCurrentUser3.uid) || null,
      permissions: _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.READ
    }),
    contents
  };
};
const getStatus = function (id) {
  let global = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const type = global ? 'userglobalstorages' : 'userstorages';
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("apps/files_external/".concat(type, "/").concat(id, "?testOnly=false")));
};

/***/ }),

/***/ "./apps/files_external/src/utils/credentialsUtils.ts":
/*!***********************************************************!*\
  !*** ./apps/files_external/src/utils/credentialsUtils.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORAGE_STATUS: () => (/* binding */ STORAGE_STATUS),
/* harmony export */   isMissingAuthConfig: () => (/* binding */ isMissingAuthConfig)
/* harmony export */ });
// @see https://github.com/nextcloud/server/blob/ac2bc2384efe3c15ff987b87a7432bc60d545c67/lib/public/Files/StorageNotAvailableException.php#L41
var STORAGE_STATUS;
(function (STORAGE_STATUS) {
  STORAGE_STATUS[STORAGE_STATUS["SUCCESS"] = 0] = "SUCCESS";
  STORAGE_STATUS[STORAGE_STATUS["ERROR"] = 1] = "ERROR";
  STORAGE_STATUS[STORAGE_STATUS["INDETERMINATE"] = 2] = "INDETERMINATE";
  STORAGE_STATUS[STORAGE_STATUS["INCOMPLETE_CONF"] = 3] = "INCOMPLETE_CONF";
  STORAGE_STATUS[STORAGE_STATUS["UNAUTHORIZED"] = 4] = "UNAUTHORIZED";
  STORAGE_STATUS[STORAGE_STATUS["TIMEOUT"] = 5] = "TIMEOUT";
  STORAGE_STATUS[STORAGE_STATUS["NETWORK_ERROR"] = 6] = "NETWORK_ERROR";
})(STORAGE_STATUS || (STORAGE_STATUS = {}));
const isMissingAuthConfig = function (config) {
  // If we don't know the status, assume it is ok
  if (!config.status || config.status === STORAGE_STATUS.SUCCESS) {
    return false;
  }
  return config.userProvided || config.authMechanism === 'password::global::user';
};

/***/ }),

/***/ "./apps/files_external/src/utils/externalStorageUtils.ts":
/*!***************************************************************!*\
  !*** ./apps/files_external/src/utils/externalStorageUtils.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNodeExternalStorage: () => (/* binding */ isNodeExternalStorage)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

const isNodeExternalStorage = function (node) {
  // Not a folder, not a storage
  if (node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.File) {
    return false;
  }
  // No backend or scope, not a storage
  const attributes = node.attributes;
  if (!attributes.scope || !attributes.backend) {
    return false;
  }
  // Specific markers that we're sure are ext storage only
  return attributes.scope === 'personal' || attributes.scope === 'system';
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/files_external/src/css/fileEntryStatus.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/files_external/src/css/fileEntryStatus.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.files-list__row-status {
  display: flex;
  width: 44px;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.files-list__row-status svg {
  width: 24px;
  height: 24px;
}
.files-list__row-status svg path {
  fill: currentColor;
}
.files-list__row-status--error, .files-list__row-status--warning {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: -1;
}
.files-list__row-status--error {
  background: var(--color-error);
}
.files-list__row-status--warning {
  background: var(--color-warning);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./apps/files_external/src/css/fileEntryStatus.scss":
/*!**********************************************************!*\
  !*** ./apps/files_external/src/css/fileEntryStatus.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryStatus_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./fileEntryStatus.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/files_external/src/css/fileEntryStatus.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryStatus_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryStatus_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryStatus_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryStatus_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@mdi/svg/svg/alert-circle.svg?raw":
/*!********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/alert-circle.svg?raw ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-alert-circle\" viewBox=\"0 0 24 24\"><path d=\"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/folder-network.svg?raw":
/*!**********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/folder-network.svg?raw ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-network\" viewBox=\"0 0 24 24\"><path d=\"M3,15V5A2,2 0 0,1 5,3H11L13,5H19A2,2 0 0,1 21,7V15A2,2 0 0,1 19,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H5A2,2 0 0,1 3,15Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/login.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/login.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-login\" viewBox=\"0 0 24 24\"><path d=\"M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z\" /></svg>";

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"files_external-main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files_external/src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files_external-main.js.map?v=d10d44daf3788c38cab3