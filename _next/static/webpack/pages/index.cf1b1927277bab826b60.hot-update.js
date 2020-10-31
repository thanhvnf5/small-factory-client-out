webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/Menus/AccountMenu.js":
/*!********************************************************!*\
  !*** ./src/components/Navigation/Menus/AccountMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/auth */ "./src/store/actions/auth.js");


var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\Menus\\AccountMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    menuBadge: {
      marginTop: "5px"
    }
  };
});
/************************************************** Constructor */

var AccountMenu = function AccountMenu(props) {
  _s();

  var classes = useStyles();
  var onLogout = react__WEBPACK_IMPORTED_MODULE_4___default.a.useCallback(function (event) {
    props.onLogout();
    props.onMenuClick("sigout");
  }, []);
  /************************************************** render */

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    id: props.id,
    anchorEl: props.anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: Boolean(props.anchorEl),
    onClose: props.onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: props.onMenuClick("profile"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: props.onMenuClick("account"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "My account"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: onLogout(event),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Sigout")));
};
/************************************************** propTypes */


_s(AccountMenu, "FtddFJmLyAuqjRRxXTrwdHNpBjY=", false, function () {
  return [useStyles];
});

_c = AccountMenu;
AccountMenu.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onMenuClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}; //export default AccountMenu;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_6__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(AccountMenu));

var _c;

$RefreshReg$(_c, "AccountMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Navigation/Menus/DesktopMenu.js":
/*!********************************************************!*\
  !*** ./src/components/Navigation/Menus/DesktopMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AccountMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AccountMenu */ "./src/components/Navigation/Menus/AccountMenu.js");



var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\Menus\\DesktopMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    sectionDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex"
    })
  };
});
/************************************************** Constructor */

var DesktopMenu = function DesktopMenu(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      accountMenuAnchorEl = _React$useState2[0],
      setAccountMenuAnchorEl = _React$useState2[1];

  var accountMenuOpenHandler = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAccountMenuAnchorEl(event.currentTarget);
  }, []);
  var accountMenuCloseHandler = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAccountMenuAnchorEl(null);
  }, []);
  var onAccountMenuClick = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAccountMenuAnchorEl(null);
  }, []);
  /************************************************** render */

  return __jsx("div", {
    id: "sectionDesktop",
    className: classes.sectionDesktop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    badgeContent: 4,
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    "aria-label": "show 17 new notifications",
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    badgeContent: 17,
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    "aria-controls": "account-menu-id",
    edge: "end",
    "aria-label": "account of current user",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: accountMenuOpenHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["AccountCircle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), __jsx(_AccountMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "account-menu-id",
    anchorEl: accountMenuAnchorEl,
    onClose: accountMenuCloseHandler,
    onMenuClick: onAccountMenuClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
};
/************************************************** propTypes */


_s(DesktopMenu, "3ko3kSsStKo0ypNxo2aeNaWwjZw=", false, function () {
  return [useStyles];
});

_c = DesktopMenu;
DesktopMenu.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (DesktopMenu);

var _c;

$RefreshReg$(_c, "DesktopMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Navigation/Menus/MobileMenu.js":
/*!*******************************************************!*\
  !*** ./src/components/Navigation/Menus/MobileMenu.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _AccountMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AccountMenu */ "./src/components/Navigation/Menus/AccountMenu.js");



var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\Menus\\MobileMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    menuBadge: {
      marginTop: "5px"
    }
  };
});
/************************************************** Constructor */

var MobileMenu = function MobileMenu(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      accountMenuAnchorEl = _React$useState4[0],
      setAccountMenuAnchorEl = _React$useState4[1];

  var showMenuPopup = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAnchorEl(event.currentTarget);
  }, []);
  var closeMenuPopup = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAnchorEl(null);
  }, []);
  var accountMenuOpenHandler = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAccountMenuAnchorEl(event.currentTarget);
  }, []);
  var accountMenuCloseHandler = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAccountMenuAnchorEl(null);
  }, []);
  var onAccountMenuClick = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {
    setAccountMenuAnchorEl(null);
    setAnchorEl(null);
  }, []);
  /************************************************** render */

  return __jsx("div", {
    id: "sectionMobile",
    className: classes.sectionMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    "aria-controls": "mobile-menu-id",
    "aria-label": "show more",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: showMenuPopup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "mobile-menu-id",
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    onClose: closeMenuPopup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    className: classes.menuBadge,
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
    badgeContent: 4,
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Messages")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    className: classes.menuBadge,
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
    badgeContent: 11,
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Notifications")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: accountMenuOpenHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    "aria-label": "account of current user",
    "aria-controls": "account-menu-id",
    "aria-haspopup": "true",
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AccountCircle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Profile"))), __jsx(_AccountMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "account-menu-id",
    anchorEl: accountMenuAnchorEl,
    onClose: accountMenuCloseHandler,
    onMenuClick: onAccountMenuClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }));
};
/************************************************** propTypes */


_s(MobileMenu, "3kWyRLCJmOZr0abzM3KmVZaz3rs=", false, function () {
  return [useStyles];
});

_c = MobileMenu;
MobileMenu.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

var _c;

$RefreshReg$(_c, "MobileMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9NZW51cy9BY2NvdW50TWVudS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9NZW51cy9EZXNrdG9wTWVudS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9NZW51cy9Nb2JpbGVNZW51LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInNlY3Rpb25Nb2JpbGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1lbnVCYWRnZSIsIm1hcmdpblRvcCIsIkFjY291bnRNZW51IiwicHJvcHMiLCJjbGFzc2VzIiwib25Mb2dvdXQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJvbk1lbnVDbGljayIsImlkIiwiYW5jaG9yRWwiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJCb29sZWFuIiwib25DbG9zZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImZ1bmMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJjb25uZWN0Iiwic2VjdGlvbkRlc2t0b3AiLCJEZXNrdG9wTWVudSIsInVzZVN0YXRlIiwiYWNjb3VudE1lbnVBbmNob3JFbCIsInNldEFjY291bnRNZW51QW5jaG9yRWwiLCJhY2NvdW50TWVudU9wZW5IYW5kbGVyIiwiY3VycmVudFRhcmdldCIsImFjY291bnRNZW51Q2xvc2VIYW5kbGVyIiwib25BY2NvdW50TWVudUNsaWNrIiwiTW9iaWxlTWVudSIsInNldEFuY2hvckVsIiwic2hvd01lbnVQb3B1cCIsImNsb3NlTWVudVBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQSxJQUFN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QUE7QUFBQSxJQURGLENBTEYsQ0FERixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsQ0FyQkYsRUFpQ0UsTUFBQyxrRUFBRDtBQUFVLFdBQU8sRUFBRThCLHNCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLGtCQUFXLHlCQURiO0FBRUUscUJBQWMsaUJBRmhCO0FBR0UscUJBQWMsTUFIaEI7QUFJRSxTQUFLLEVBQUMsU0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixDQWpDRixDQVZGLEVBd0RFLE1BQUMscURBQUQ7QUFDRSxNQUFFLEVBQUMsaUJBREw7QUFFRSxZQUFRLEVBQUVGLG1CQUZaO0FBR0UsV0FBTyxFQUFFSSx1QkFIWDtBQUlFLGVBQVcsRUFBRUMsa0JBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhERixDQURGO0FBaUVELENBNUZEO0FBOEZBOzs7R0E5Rk1DLFU7VUFDWXpDLFM7OztLQURaeUMsVTtBQStGTkEsVUFBVSxDQUFDbEIsU0FBWCxHQUF1QixFQUF2QjtBQUVla0IseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2YxYjE5MjcyNzdiYWI4MjZiNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUsIE1lbnVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVudUJhZGdlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNvbnN0IEFjY291bnRNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBvbkxvZ291dCA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgcHJvcHMub25Mb2dvdXQoKTtcclxuICAgIHByb3BzLm9uTWVudUNsaWNrKFwic2lnb3V0XCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICBhbmNob3JFbD17cHJvcHMuYW5jaG9yRWx9XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3JFbCl9XHJcbiAgICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtwcm9wcy5vbk1lbnVDbGljayhcInByb2ZpbGVcIil9PlByb2ZpbGU8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtwcm9wcy5vbk1lbnVDbGljayhcImFjY291bnRcIil9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtvbkxvZ291dChldmVudCl9PlNpZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkFjY291bnRNZW51LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhbmNob3JFbDogUHJvcFR5cGVzLmFueSxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbk1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IEFjY291bnRNZW51O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFjY291bnRNZW51KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IEJhZGdlLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgQWNjb3VudE1lbnUgZnJvbSBcIi4vQWNjb3VudE1lbnVcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc2VjdGlvbkRlc2t0b3A6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgRGVza3RvcE1lbnUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2FjY291bnRNZW51QW5jaG9yRWwsIHNldEFjY291bnRNZW51QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFjY291bnRNZW51T3BlbkhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldEFjY291bnRNZW51QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhY2NvdW50TWVudUNsb3NlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0QWNjb3VudE1lbnVBbmNob3JFbChudWxsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQWNjb3VudE1lbnVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0QWNjb3VudE1lbnVBbmNob3JFbChudWxsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInNlY3Rpb25EZXNrdG9wXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cclxuICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgNCBuZXcgbWFpbHNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgPC9CYWRnZT5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyAxNyBuZXcgbm90aWZpY2F0aW9uc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezE3fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgPC9CYWRnZT5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJhY2NvdW50LW1lbnUtaWRcIlxyXG4gICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgb25DbGljaz17YWNjb3VudE1lbnVPcGVuSGFuZGxlcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgey8qIEFjY291bnRNZW51ICovfVxyXG4gICAgICA8QWNjb3VudE1lbnVcclxuICAgICAgICBpZD1cImFjY291bnQtbWVudS1pZFwiXHJcbiAgICAgICAgYW5jaG9yRWw9e2FjY291bnRNZW51QW5jaG9yRWx9XHJcbiAgICAgICAgb25DbG9zZT17YWNjb3VudE1lbnVDbG9zZUhhbmRsZXJ9XHJcbiAgICAgICAgb25NZW51Q2xpY2s9e29uQWNjb3VudE1lbnVDbGlja31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkRlc2t0b3BNZW51LnByb3BUeXBlcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcE1lbnU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCB7IEJhZGdlLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5pbXBvcnQgQWNjb3VudE1lbnUgZnJvbSBcIi4vQWNjb3VudE1lbnVcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWVudUJhZGdlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNvbnN0IE1vYmlsZU1lbnUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWNjb3VudE1lbnVBbmNob3JFbCwgc2V0QWNjb3VudE1lbnVBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgc2hvd01lbnVQb3B1cCA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjbG9zZU1lbnVQb3B1cCA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhY2NvdW50TWVudU9wZW5IYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBY2NvdW50TWVudUFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYWNjb3VudE1lbnVDbG9zZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldEFjY291bnRNZW51QW5jaG9yRWwobnVsbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkFjY291bnRNZW51Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldEFjY291bnRNZW51QW5jaG9yRWwobnVsbCk7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInNlY3Rpb25Nb2JpbGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51LWlkXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyBtb3JlXCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICBvbkNsaWNrPXtzaG93TWVudVBvcHVwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cIm1vYmlsZS1tZW51LWlkXCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VNZW51UG9wdXB9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJhZGdlfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8c3Bhbj5NZXNzYWdlczwvc3Bhbj5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QmFkZ2V9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDExIG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTF9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8c3Bhbj5Ob3RpZmljYXRpb25zPC9zcGFuPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2FjY291bnRNZW51T3BlbkhhbmRsZXJ9PlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImFjY291bnQtbWVudS1pZFwiXHJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxzcGFuPlByb2ZpbGU8L3NwYW4+XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICB7LyogQWNjb3VudE1lbnUgKi99XHJcbiAgICAgIDxBY2NvdW50TWVudVxyXG4gICAgICAgIGlkPVwiYWNjb3VudC1tZW51LWlkXCJcclxuICAgICAgICBhbmNob3JFbD17YWNjb3VudE1lbnVBbmNob3JFbH1cclxuICAgICAgICBvbkNsb3NlPXthY2NvdW50TWVudUNsb3NlSGFuZGxlcn1cclxuICAgICAgICBvbk1lbnVDbGljaz17b25BY2NvdW50TWVudUNsaWNrfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBwcm9wVHlwZXMgKi9cclxuTW9iaWxlTWVudS5wcm9wVHlwZXMgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=