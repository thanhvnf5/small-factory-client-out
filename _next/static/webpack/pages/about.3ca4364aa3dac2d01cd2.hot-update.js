webpackHotUpdate_N_E("pages/about",{

/***/ "./src/components/Navigation/SideDrawer/LeftDrawer.js":
/*!************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/LeftDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\SideDrawer\\LeftDrawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var drawerWidth = 200;
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
      top: "5vh",
      whiteSpace: "nowrap",
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
      top: "5vh",
      whiteSpace: "nowrap"
    },
    drawerContainer: {
      overflow: "auto"
    }
  };
});
/************************************************** Constructor */

/**
 * Description:
 * - Show list of menu on the left side.
 * @param {*} props
 */

var LeftDrawer = function LeftDrawer(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(1),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selectedIndex = _React$useState2[0],
      setSelectedIndex = _React$useState2[1];

  var handleListItemClick = function handleListItemClick(event, index) {
    setSelectedIndex(index);
  };
  /************************************************** render */


  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    className: classes.drawer,
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.drawerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, ["Inbox", "Starred", "Send email", "Drafts"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, ["All mail", "Trash", "Spam"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }));
  }))));
};
/************************************************** propTypes */


_s(LeftDrawer, "SZ7qzv4KiU3jS5aDCWf98tgow18=", false, function () {
  return [useStyles];
});

_c = LeftDrawer;
LeftDrawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  menuItemClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (LeftDrawer);

var _c;

$RefreshReg$(_c, "LeftDrawer");

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
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, theme.breakpoints.up("sm"), {
      width: theme.spacing(9) + 1
    })
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
      var _clsx, _clsx2;

      var classes = this.props.classes;
      var locale = this.props.locale;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
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
          lineNumber: 73,
          columnNumber: 11
        }
      }), __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: clsx(classes.drawer, (_clsx = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx, classes.drawerOpen, open), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx, classes.drawerClose, !open), _clsx)),
        classes: {
          paper: clsx((_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx2, classes.drawerOpen, open), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx2, classes.drawerClose, !open), _clsx2))
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob2NzL0xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsInRvcCIsIndoaXRlU3BhY2UiLCJmbGV4U2hyaW5rIiwiZHJhd2VyUGFwZXIiLCJkcmF3ZXJDb250YWluZXIiLCJvdmVyZmxvdyIsIkxlZnREcmF3ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJoYW5kbGVMaXN0SXRlbUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsInBhcGVyIiwibWFwIiwidGV4dCIsInByb3BUeXBlcyIsImlzTW9iaWxlIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9wZW4iLCJvbkNsb3NlIiwiZnVuYyIsIm1lbnVJdGVtQ2xpY2siLCJzdHlsZXMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsInNwYWNpbmciLCJkcmF3ZXJPcGVuIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImVudGVyaW5nU2NyZWVuIiwiZHJhd2VyQ2xvc2UiLCJsZWF2aW5nU2NyZWVuIiwib3ZlcmZsb3dYIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkxheW91dCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJuZXh0Q29udGV4dCIsImxvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJjdXJyZW50UGFnZSIsImRyYXdlclRvb2dsZUNsaWNrIiwibG9nb0NsaWNrIiwiY2xzeCIsInQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW1vbiIsIndpdGhUcmFuc2xhdGlvbiIsImNvbm5lY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUVBOztBQUNBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsR0FBc0I7QUFEeEIsS0FEK0I7QUFJdkNBLFVBQU0sRUFBRTtBQUNOQyxXQUFLLEVBQUVQLFdBREQ7QUFFTkssWUFBTSxFQUFFRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFGZjtBQUdORSxTQUFHLEVBQUUsS0FIQztBQUlOQyxnQkFBVSxFQUFFLFFBSk47QUFLTkMsZ0JBQVUsRUFBRTtBQUxOLEtBSitCO0FBV3ZDQyxlQUFXLEVBQUU7QUFDWEosV0FBSyxFQUFFUCxXQURJO0FBRVhLLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BRlY7QUFHWEUsU0FBRyxFQUFFLEtBSE07QUFJWEMsZ0JBQVUsRUFBRTtBQUpELEtBWDBCO0FBaUJ2Q0csbUJBQWUsRUFBRTtBQUNmQyxjQUFRLEVBQUU7QUFESztBQWpCc0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFzQkE7O0FBQ0E7Ozs7OztBQUtBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QixNQUFNQyxPQUFPLEdBQUdmLFNBQVMsRUFBekI7O0FBRDRCLHdCQUVjZ0IsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGZDtBQUFBO0FBQUEsTUFFckJDLGFBRnFCO0FBQUEsTUFFTkMsZ0JBRk07O0FBSTVCLE1BQU1DLG1C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aUJBQWIsQ0EvQkgsQ0F0QkYsQ0FGRixDQURGO0FBNkREOzs7O0VBN0VrQm5ELDZDQUFLLENBQUNvRCxTO0FBZ0YzQjs7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMWCxVQUFNLEVBQUVXLEtBQUssQ0FBQ0MsTUFBTixDQUFhWjtBQURoQixHQUFQO0FBR0QsQ0FKRDs7QUFNZWEsNkhBQWUsQ0FBQyxRQUFELENBQWYsQ0FDYkMsNERBQU8sQ0FBQ0osZUFBRCxDQUFQLENBQXlCSyw0RUFBVSxDQUFDeEMsTUFBRCxDQUFWLENBQW1CbUIsTUFBbkIsQ0FBekIsQ0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjNjYTQzNjRhYTNkYWMyZDAxY2QyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpdmlkZXIsXHJcbiAgRHJhd2VyLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBtYWtlU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcclxuICAgIHRvcDogXCI1dmhcIixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcclxuICAgIHRvcDogXCI1dmhcIixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgfSxcclxuICBkcmF3ZXJDb250YWluZXI6IHtcclxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NyaXB0aW9uOlxyXG4gKiAtIFNob3cgbGlzdCBvZiBtZW51IG9uIHRoZSBsZWZ0IHNpZGUuXHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcclxuICovXHJcbmNvbnN0IExlZnREcmF3ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICB9fVxyXG4gICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyQ29udGFpbmVyfT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJJbmJveFwiLCBcIlN0YXJyZWRcIiwgXCJTZW5kIGVtYWlsXCIsIFwiRHJhZnRzXCJdLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSBpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZXZlbnQsIGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJBbGwgbWFpbFwiLCBcIlRyYXNoXCIsIFwiU3BhbVwiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVMaXN0SXRlbUNsaWNrKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkxlZnREcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBtZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnREcmF3ZXI7XHJcbiIsImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgKiBhcyBsb2NhbGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9sb2NhbGVcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVNdWlUaGVtZSxcclxuICBUaGVtZVByb3ZpZGVyLFxyXG4gIHdpdGhTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0FwcEJhci9BcHBCYXJcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXJcIjtcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uL2kxOG5cIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgZHJhd2VyT3Blbjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBkcmF3ZXJDbG9zZToge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpICsgMSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSArIDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjaXB0aW9uOlxyXG4gKi9cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBkcmF3ZXJUb29nbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJhYWFhYWFcIik7XHJcbiAgfTtcclxuICBsb2dvQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYmJiYlwiKTtcclxuICB9O1xyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgICB0aGVtZT17KG91dGVyVGhlbWUpID0+IGNyZWF0ZU11aVRoZW1lKG91dGVyVGhlbWUsIGxvY2FsZXNbbG9jYWxlXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFwcEJhclxyXG4gICAgICAgICAgICB0YWJWYWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9XHJcbiAgICAgICAgICAgIGRyYXdlclRvb2dsZUNsaWNrPXt0aGlzLmRyYXdlclRvb2dsZUNsaWNrfVxyXG4gICAgICAgICAgICBsb2dvQ2xpY2s9e3RoaXMubG9nb0NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMZWZ0RHJhd2VyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRyYXdlciwge1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBvcGVuLFxyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIW9wZW4sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgcGFwZXI6IGNsc3goe1xyXG4gICAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IG9wZW4sXHJcbiAgICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFvcGVuLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgUmhvbmN1cyBkb2xvciBwdXJ1cyBub24gZW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlbyB2ZWwuXHJcbiAgICAgICAgICAgICAgUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldC4gU2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdFxyXG4gICAgICAgICAgICAgIGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cy4gQ29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWRcclxuICAgICAgICAgICAgICBpbnRlcmR1bSB2ZWxpdCBsYW9yZWV0IGlkIGRvbmVjIHVsdHJpY2VzLiBPZGlvIG1vcmJpIHF1aXMgY29tbW9kb1xyXG4gICAgICAgICAgICAgIG9kaW8gYWVuZWFuIHNlZCBhZGlwaXNjaW5nLiBBbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bVxyXG4gICAgICAgICAgICAgIGVzdCB1bHRyaWNpZXMgaW50ZWdlciBxdWlzLiBDdXJzdXMgZXVpc21vZCBxdWlzIHZpdmVycmEgbmliaCBjcmFzLlxyXG4gICAgICAgICAgICAgIE1ldHVzIHZ1bHB1dGF0ZSBldSBzY2VsZXJpc3F1ZSBmZWxpcyBpbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtXHJcbiAgICAgICAgICAgICAgbGVvLiBNYXVyaXMgY29tbW9kbyBxdWlzIGltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQuIENyYXMgdGluY2lkdW50XHJcbiAgICAgICAgICAgICAgbG9ib3J0aXMgZmV1Z2lhdCB2aXZhbXVzIGF0IGF1Z3VlLiBBdCBhdWd1ZSBlZ2V0IGFyY3UgZGljdHVtXHJcbiAgICAgICAgICAgICAgdmFyaXVzIGR1aXMgYXQgY29uc2VjdGV0dXIgbG9yZW0uIFZlbGl0IHNlZCB1bGxhbWNvcnBlciBtb3JiaVxyXG4gICAgICAgICAgICAgIHRpbmNpZHVudC4gTG9yZW0gZG9uZWMgbWFzc2Egc2FwaWVuIGZhdWNpYnVzIGV0IG1vbGVzdGllIGFjLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICBDb25zZXF1YXQgbWF1cmlzIG51bmMgY29uZ3VlIG5pc2kgdml0YWUgc3VzY2lwaXQuIEZyaW5naWxsYSBlc3RcclxuICAgICAgICAgICAgICB1bGxhbWNvcnBlciBlZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtLiBQdWx2aW5hclxyXG4gICAgICAgICAgICAgIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW0gbmVxdWUgdm9sdXRwYXQgYWMgdGluY2lkdW50LiBPcm5hcmVcclxuICAgICAgICAgICAgICBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cyBzZWQgdml2ZXJyYSB0ZWxsdXMuIFB1cnVzIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgdm9sdXRwYXQgY29uc2VxdWF0IG1hdXJpcy4gRWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaS5cclxuICAgICAgICAgICAgICBFdWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cyBzZWQgdnVscHV0YXRlIG9kaW8uIE1vcmJpIHRpbmNpZHVudFxyXG4gICAgICAgICAgICAgIG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMgcHVydXMgdml2ZXJyYSBhY2N1bXNhbiBpbi4gSW4gaGVuZHJlcml0XHJcbiAgICAgICAgICAgICAgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzIG9yY2kgYWMuIFBlbGxlbnRlc3F1ZSBuZWMgbmFtXHJcbiAgICAgICAgICAgICAgYWxpcXVhbSBzZW0gZXQgdG9ydG9yLiBIYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQuXHJcbiAgICAgICAgICAgICAgQWRpcGlzY2luZyBlbGl0IGR1aXMgdHJpc3RpcXVlIHNvbGxpY2l0dWRpbiBuaWJoIHNpdC4gT3JuYXJlXHJcbiAgICAgICAgICAgICAgYWVuZWFuIGV1aXNtb2QgZWxlbWVudHVtIG5pc2kgcXVpcyBlbGVpZmVuZC4gQ29tbW9kbyB2aXZlcnJhXHJcbiAgICAgICAgICAgICAgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy4gTnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW5cclxuICAgICAgICAgICAgICBhbGlxdWFtIHVsdHJpY2VzIHNhZ2l0dGlzIG9yY2kgYS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50KFwiY2hhbmdlLWxhbmd1YWdlXCIpfVxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogc3RhdGUuY29tbW9uLmxvY2FsZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFwibGF5b3V0XCIpKFxyXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0KSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==