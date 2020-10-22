webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/AppBar/AppBar.js":
/*!****************************************************!*\
  !*** ./src/components/Navigation/AppBar/AppBar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Clock */ "./src/components/Clock.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _Menus_DesktopMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menus/DesktopMenu */ "./src/components/Navigation/Menus/DesktopMenu.js");
/* harmony import */ var _Menus_MobileMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Menus/MobileMenu */ "./src/components/Navigation/Menus/MobileMenu.js");
/* harmony import */ var _NavTabs_NavTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NavTabs/NavTabs */ "./src/components/Navigation/NavTabs/NavTabs.js");
/* harmony import */ var _Page_TabPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Page/TabPage */ "./src/components/Navigation/Page/TabPage.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js");
/* harmony import */ var _SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../SideDrawer/LeftDrawer */ "./src/components/Navigation/SideDrawer/LeftDrawer.js");


var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\AppBar\\AppBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;













/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      flexGrow: 1
    }
  };
});
/************************************************** Constructor */

/**
 * Desciption:
 * @param {*} props
 */

var AppBar = function AppBar(props) {
  _s();

  var children = props.children;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      openDrawer = _React$useState4[0],
      setOpenDrawer = _React$useState4[1];

  var drawerToogleHandler = react__WEBPACK_IMPORTED_MODULE_5___default.a.useCallback(function (event) {
    setOpenDrawer(!openDrawer);
  });
  var menuItemHandler = react__WEBPACK_IMPORTED_MODULE_5___default.a.useCallback(function (event) {
    setOpenDrawer(false);
  });
  /* Detect mobile view */

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  return __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "topAnchor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    drawerToogleClick: drawerToogleHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    logoClick: props.logoClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(_NavTabs_NavTabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tabValue: _this.props.tabValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(_Menus_DesktopMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(_Menus_MobileMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }))));
};
/************************************************** propTypes */


_s(AppBar, "1o9OF621JCw+VyzEPELYQzv2LQE=", false, function () {
  return [useStyles];
});

_c = AppBar;
AppBar.propTypes = {
  drawerToogleClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  logoClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

var _c;

$RefreshReg$(_c, "AppBar");

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

/***/ "./src/hocs/Layout/Layout.js":
/*!***********************************!*\
  !*** ./src/hocs/Layout/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/locale */ "./node_modules/@material-ui/core/locale/index.js");
/* harmony import */ var _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Navigation_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Navigation/AppBar/AppBar */ "./src/components/Navigation/AppBar/AppBar.js");
/* harmony import */ var _components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Navigation/SideDrawer/LeftDrawer */ "./src/components/Navigation/SideDrawer/LeftDrawer.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\hocs\\Layout\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var drawerWidth = 200;
/************************************************** styles */

var styles = function styles(theme) {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    content: {
      flexGrow: 1,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      padding: theme.spacing(1)
    }
  };
};
/************************************************** Constructor */

/**
 * Desciption:
 */


var Layout = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, _React$Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "drawerToogleClick", function (event) {
      console.log("aaaaaa");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logoClick", function (event) {
      console.log("bbbb");
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return false;
    }
    /************************************************** render */

  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var locale = this.props.locale;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, __jsx(_components_Navigation_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        tabValue: this.props.currentPage,
        position: "fixed",
        className: classes.appBar,
        drawerToogleClick: this.drawerToogleClick,
        logoClick: this.logoClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }), __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."), this.props.t("change-language"))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: state.common.locale
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_15__["withTranslation"])("layout")(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(styles)(Layout))));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvaG9jcy9MYXlvdXQvTGF5b3V0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXhHcm93IiwiQXBwQmFyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwiZHJhd2VyVG9vZ2xlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJtZW51SXRlbUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwibG9nb0NsaWNrIiwidGFiVmFsdWUiLCJwcm9wVHlwZXMiLCJkcmF3ZXJUb29nbGVDbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJkcmF3ZXJXaWR0aCIsInN0eWxlcyIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsImNvbnRlbnQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwic3BhY2luZyIsIkxheW91dCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJuZXh0Q29udGV4dCIsImxvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJjdXJyZW50UGFnZSIsInQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW1vbiIsIndpdGhUcmFuc2xhdGlvbiIsImNvbm5lY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixNQUFELENBQVYsQ0FBbUJTLE1BQW5CLENBQXpCLENBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDkwYjljNmU0MmJjYmM3NWJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEJhck1VIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDbG9jayBmcm9tIFwiLi4vLi4vQ2xvY2tcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL0xvZ28vTG9nb1wiO1xyXG5pbXBvcnQgRGVza3RvcE1lbnUgZnJvbSBcIi4uL01lbnVzL0Rlc2t0b3BNZW51XCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuLi9NZW51cy9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBOYXZUYWJzIGZyb20gXCIuLi9OYXZUYWJzL05hdlRhYnNcIjtcclxuaW1wb3J0IFRhYlBhZ2UgZnJvbSBcIi4uL1BhZ2UvVGFiUGFnZVwiO1xyXG5pbXBvcnQgRHJhd2VyVG9nZ2xlIGZyb20gXCIuLi9TaWRlRHJhd2VyL0RyYXdlclRvZ2dsZS9EcmF3ZXJUb2dnbGVcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uL1NpZGVEcmF3ZXIvTGVmdERyYXdlclwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY2lwdGlvbjpcclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQXBwQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuRHJhd2VyLCBzZXRPcGVuRHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZHJhd2VyVG9vZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcihmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxBcHBCYXJNVSBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyIGlkPVwidG9wQW5jaG9yXCI+XHJcbiAgICAgICAgICA8RHJhd2VyVG9nZ2xlIGRyYXdlclRvb2dsZUNsaWNrPXtkcmF3ZXJUb29nbGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgPExvZ28gbG9nb0NsaWNrPXtwcm9wcy5sb2dvQ2xpY2t9IC8+XHJcbiAgICAgICAgICA8TmF2VGFicyB0YWJWYWx1ZT17dGhpcy5wcm9wcy50YWJWYWx1ZX0gLz5cclxuICAgICAgICAgIDxEZXNrdG9wTWVudSAvPlxyXG4gICAgICAgICAgPE1vYmlsZU1lbnUgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyTVU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5BcHBCYXIucHJvcFR5cGVzID0ge1xyXG4gIGRyYXdlclRvb2dsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsb2dvQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQmFyO1xyXG4iLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0ICogYXMgbG9jYWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvbG9jYWxlXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB3aXRoU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyXCI7XHJcbmltcG9ydCBMZWZ0RHJhd2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24vU2lkZURyYXdlci9MZWZ0RHJhd2VyXCI7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi8uLi9pMThuXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDIwMDtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY2lwdGlvbjpcclxuICovXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgZHJhd2VyVG9vZ2xlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWFhYWFhXCIpO1xyXG4gIH07XHJcbiAgbG9nb0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImJiYmJcIik7XHJcbiAgfTtcclxuXHJcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBsb2NhbGUgPSB0aGlzLnByb3BzLmxvY2FsZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgICAgdGhlbWU9eyhvdXRlclRoZW1lKSA9PiBjcmVhdGVNdWlUaGVtZShvdXRlclRoZW1lLCBsb2NhbGVzW2xvY2FsZV0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgICAgdGFiVmFsdWU9e3RoaXMucHJvcHMuY3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxyXG4gICAgICAgICAgICBkcmF3ZXJUb29nbGVDbGljaz17dGhpcy5kcmF3ZXJUb29nbGVDbGlja31cclxuICAgICAgICAgICAgbG9nb0NsaWNrPXt0aGlzLmxvZ29DbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGVmdERyYXdlciAvPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICBSaG9uY3VzIGRvbG9yIHB1cnVzIG5vbiBlbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbC5cclxuICAgICAgICAgICAgICBSaXN1cyBhdCB1bHRyaWNlcyBtaSB0ZW1wdXMgaW1wZXJkaWV0LiBTZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0XHJcbiAgICAgICAgICAgICAgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzLiBDb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZFxyXG4gICAgICAgICAgICAgIGludGVyZHVtIHZlbGl0IGxhb3JlZXQgaWQgZG9uZWMgdWx0cmljZXMuIE9kaW8gbW9yYmkgcXVpcyBjb21tb2RvXHJcbiAgICAgICAgICAgICAgb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcuIEFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtXHJcbiAgICAgICAgICAgICAgZXN0IHVsdHJpY2llcyBpbnRlZ2VyIHF1aXMuIEN1cnN1cyBldWlzbW9kIHF1aXMgdml2ZXJyYSBuaWJoIGNyYXMuXHJcbiAgICAgICAgICAgICAgTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW1cclxuICAgICAgICAgICAgICBsZW8uIE1hdXJpcyBjb21tb2RvIHF1aXMgaW1wZXJkaWV0IG1hc3NhIHRpbmNpZHVudC4gQ3JhcyB0aW5jaWR1bnRcclxuICAgICAgICAgICAgICBsb2JvcnRpcyBmZXVnaWF0IHZpdmFtdXMgYXQgYXVndWUuIEF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW1cclxuICAgICAgICAgICAgICB2YXJpdXMgZHVpcyBhdCBjb25zZWN0ZXR1ciBsb3JlbS4gVmVsaXQgc2VkIHVsbGFtY29ycGVyIG1vcmJpXHJcbiAgICAgICAgICAgICAgdGluY2lkdW50LiBMb3JlbSBkb25lYyBtYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIENvbnNlcXVhdCBtYXVyaXMgbnVuYyBjb25ndWUgbmlzaSB2aXRhZSBzdXNjaXBpdC4gRnJpbmdpbGxhIGVzdFxyXG4gICAgICAgICAgICAgIHVsbGFtY29ycGVyIGVnZXQgbnVsbGEgZmFjaWxpc2kgZXRpYW0gZGlnbmlzc2ltIGRpYW0uIFB1bHZpbmFyXHJcbiAgICAgICAgICAgICAgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdCBhYyB0aW5jaWR1bnQuIE9ybmFyZVxyXG4gICAgICAgICAgICAgIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhIHRlbGx1cy4gUHVydXMgc2l0IGFtZXRcclxuICAgICAgICAgICAgICB2b2x1dHBhdCBjb25zZXF1YXQgbWF1cmlzLiBFbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZCBvZGlvIG1vcmJpLlxyXG4gICAgICAgICAgICAgIEV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzIHNlZCB2dWxwdXRhdGUgb2Rpby4gTW9yYmkgdGluY2lkdW50XHJcbiAgICAgICAgICAgICAgb3JuYXJlIG1hc3NhIGVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluLiBJbiBoZW5kcmVyaXRcclxuICAgICAgICAgICAgICBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYy4gUGVsbGVudGVzcXVlIG5lYyBuYW1cclxuICAgICAgICAgICAgICBhbGlxdWFtIHNlbSBldCB0b3J0b3IuIEhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldC5cclxuICAgICAgICAgICAgICBBZGlwaXNjaW5nIGVsaXQgZHVpcyB0cmlzdGlxdWUgc29sbGljaXR1ZGluIG5pYmggc2l0LiBPcm5hcmVcclxuICAgICAgICAgICAgICBhZW5lYW4gZXVpc21vZCBlbGVtZW50dW0gbmlzaSBxdWlzIGVsZWlmZW5kLiBDb21tb2RvIHZpdmVycmFcclxuICAgICAgICAgICAgICBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLiBOdWxsYSBwb3N1ZXJlIHNvbGxpY2l0dWRpblxyXG4gICAgICAgICAgICAgIGFsaXF1YW0gdWx0cmljZXMgc2FnaXR0aXMgb3JjaSBhLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnQoXCJjaGFuZ2UtbGFuZ3VhZ2VcIil9XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYWxlOiBzdGF0ZS5jb21tb24ubG9jYWxlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oXCJsYXlvdXRcIikoXHJcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXQpKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9