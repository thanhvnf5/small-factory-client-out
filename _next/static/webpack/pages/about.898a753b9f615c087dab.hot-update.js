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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");



var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\SideDrawer\\LeftDrawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var drawerWidth = 200;
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
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
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
});
/************************************************** Constructor */

/**
 * Description:
 * - Show list of menu on the left side.
 * @param {*} props
 */

var LeftDrawer = function LeftDrawer(props) {
  _s();

  var _clsx, _clsx2;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      openDrawer = _React$useState2[0],
      setOpenDrawer = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(1),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      selectedIndex = _React$useState4[0],
      setSelectedIndex = _React$useState4[1];

  var drawerToogleHandler = react__WEBPACK_IMPORTED_MODULE_6___default.a.useCallback(function (event) {
    setOpenDrawer(!openDrawer);
  });

  var handleListItemClick = function handleListItemClick(event, index) {
    setSelectedIndex(index);
  };

  props.openDrawerHandler(drawerToogleHandler);
  /************************************************** render */

  console.log("LeftDrawer render");
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawer, (_clsx = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.drawerOpen, openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.drawerClose, !openDrawer), _clsx)),
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawerPaper, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.drawerOpen, openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.drawerClose, !openDrawer), _clsx2))
    },
    variant: "permanent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.drawerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, ["Inbox", "Starred", "Send email", "Drafts"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, ["All mail", "Trash", "Spam"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }
    }));
  }))));
};
/************************************************** propTypes */


_s(LeftDrawer, "CqSRinVZSjOgvzaKZNOg7LQhnAs=", false, function () {
  return [useStyles];
});

_c = LeftDrawer;
LeftDrawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  menuItemClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      openDrawer: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "drawerToogleClick", function (event) {
      console.log("drawerToogleClick"); //this.setState((prevState) => ({ openDrawer: !prevState.openDrawer }));

      _this.drawerToogleHandler(event);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "drawerToogleHandler", undefined);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logoClick", function (event) {
      console.log("logoClick");
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",

    /************************************************** render */
    value: function render() {
      var _this2 = this;

      console.log("Layout render");
      var classes = this.props.classes;
      var locale = this.props.locale;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
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
          lineNumber: 60,
          columnNumber: 11
        }
      }), __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        openDrawerHandler: function openDrawerHandler(handler) {
          return _this2.drawerToogleHandler = handler;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob2NzL0xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsInRvcCIsIndoaXRlU3BhY2UiLCJmbGV4U2hyaW5rIiwiZHJhd2VyUGFwZXIiLCJkcmF3ZXJDb250YWluZXIiLCJvdmVyZmxvdyIsImRyYXdlck9wZW4iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwiZW50ZXJpbmdTY3JlZW4iLCJkcmF3ZXJDbG9zZSIsImxlYXZpbmdTY3JlZW4iLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkxlZnREcmF3ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsImRyYXdlclRvb2dsZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiaGFuZGxlTGlzdEl0ZW1DbGljayIsImluZGV4Iiwib3BlbkRyYXdlckhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiY2xzeCIsInBhcGVyIiwibWFwIiwidGV4dCIsInByb3BUeXBlcyIsImlzTW9iaWxlIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9wZW4iLCJvbkNsb3NlIiwiZnVuYyIsIm1lbnVJdGVtQ2xpY2siLCJzdHlsZXMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIkxheW91dCIsInVuZGVmaW5lZCIsImxvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJjdXJyZW50UGFnZSIsImRyYXdlclRvb2dsZUNsaWNrIiwibG9nb0NsaWNrIiwiaGFuZGxlciIsInQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW1vbiIsIndpdGhUcmFuc2xhdGlvbiIsImNvbm5lY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUE7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBYixHQUFzQjtBQUR4QixLQUQrQjtBQUl2Q0EsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRVAsV0FERDtBQUVOSyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxNQUZmO0FBR05FLFNBQUcsRUFBRSxLQUhDO0FBSU5DLGdCQUFVLEVBQUUsUUFKTjtBQUtOQyxnQkFBVSxFQUFFO0FBTE4sS0FKK0I7QUFXdkNDLGVBQVcsRUFBRTtBQUNYSixXQUFLLEVBQUVQLFdBREk7QUFFWEssWUFBTSxFQUFFRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFGVjtBQUdYRSxTQUFHLEVBQUUsS0FITTtBQUlYQyxnQkFBVSxFQUFFO0FBSkQsS0FYMEI7QUFpQnZDRyxtQkFBZSxFQUFFO0FBQ2ZDLGNBQVEsRUFBRTtBQURLLEtBakJzQjtBQW9CdkNDLGNBQVUsRUFBRTtBQUNWUCxXQUFLLEVBQUVQLFdBREc7QUFFVmUsZ0JBQVUsRUFBRVosS0FBSyxDQUFDYSxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixPQUF6QixFQUFrQztBQUM1Q0MsY0FBTSxFQUFFZixLQUFLLENBQUNhLFdBQU4sQ0FBa0JFLE1BQWxC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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsRUFVRSxNQUFDLHFGQUFEO0FBQ0UseUJBQWlCLEVBQUUsMkJBQUNDLE9BQUQ7QUFBQSxpQkFDaEIsTUFBSSxDQUFDbEMsbUJBQUwsR0FBMkJrQyxPQURYO0FBQUEsU0FEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLEVBZUU7QUFBTSxpQkFBUyxFQUFFekMsT0FBTyxDQUFDNEIsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsNERBQUQ7QUFBWSxpQkFBUyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDgwQkFERixFQWdCRSxNQUFDLDREQUFEO0FBQVksaUJBQVMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxveUJBaEJGLEVBK0JHLEtBQUs3QixLQUFMLENBQVcyQyxDQUFYLENBQWEsaUJBQWIsQ0EvQkgsQ0FmRixDQUZGLENBREY7QUFzREQ7Ozs7RUExRWtCekMsNkNBQUssQ0FBQzBDLFM7QUE2RTNCOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xYLFVBQU0sRUFBRVcsS0FBSyxDQUFDQyxNQUFOLENBQWFaO0FBRGhCLEdBQVA7QUFHRCxDQUpEOztBQU1lYSw2SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUNiQyw0REFBTyxDQUFDSixlQUFELENBQVAsQ0FBeUJLLDRFQUFVLENBQUN0QixNQUFELENBQVYsQ0FBbUJLLE1BQW5CLENBQXpCLENBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC44OThhNzUzYjlmNjE1YzA4N2RhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXZpZGVyLFxyXG4gIERyYXdlcixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgbWFrZVN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDIwMDtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIsXHJcbiAgICB0b3A6IFwiNXZoXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGRyYXdlclBhcGVyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIsXHJcbiAgICB0b3A6IFwiNXZoXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyQ29udGFpbmVyOiB7XHJcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgfSxcclxuICBkcmF3ZXJPcGVuOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGRyYXdlckNsb3NlOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNykgKyAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpICsgMSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjcmlwdGlvbjpcclxuICogLSBTaG93IGxpc3Qgb2YgbWVudSBvbiB0aGUgbGVmdCBzaWRlLlxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBMZWZ0RHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuRHJhd2VyLCBzZXRPcGVuRHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgZHJhd2VyVG9vZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICB9O1xyXG5cclxuICBwcm9wcy5vcGVuRHJhd2VySGFuZGxlcihkcmF3ZXJUb29nbGVIYW5kbGVyKTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIGNvbnNvbGUubG9nKFwiTGVmdERyYXdlciByZW5kZXJcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZHJhd2VyLCB7XHJcbiAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IG9wZW5EcmF3ZXIsXHJcbiAgICAgICAgW2NsYXNzZXMuZHJhd2VyQ2xvc2VdOiAhb3BlbkRyYXdlcixcclxuICAgICAgfSl9XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICBwYXBlcjogY2xzeChjbGFzc2VzLmRyYXdlclBhcGVyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJPcGVuXTogb3BlbkRyYXdlcixcclxuICAgICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIW9wZW5EcmF3ZXIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAge1tcIkluYm94XCIsIFwiU3RhcnJlZFwiLCBcIlNlbmQgZW1haWxcIiwgXCJEcmFmdHNcIl0ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e3RleHR9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhldmVudCwgaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAge1tcIkFsbCBtYWlsXCIsIFwiVHJhc2hcIiwgXCJTcGFtXCJdLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSBpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZXZlbnQsIGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBwcm9wVHlwZXMgKi9cclxuTGVmdERyYXdlci5wcm9wVHlwZXMgPSB7XHJcbiAgaXNNb2JpbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG1lbnVJdGVtQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdERyYXdlcjtcclxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2xvY2FsZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgd2l0aFN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0FwcEJhci9BcHBCYXJcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXJcIjtcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uL2kxOG5cIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjaXB0aW9uOlxyXG4gKi9cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIG9wZW5EcmF3ZXI6IGZhbHNlLFxyXG4gIH07XHJcbiAgZHJhd2VyVG9vZ2xlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZHJhd2VyVG9vZ2xlQ2xpY2tcIik7XHJcbiAgICAvL3RoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgb3BlbkRyYXdlcjogIXByZXZTdGF0ZS5vcGVuRHJhd2VyIH0pKTtcclxuICAgIHRoaXMuZHJhd2VyVG9vZ2xlSGFuZGxlcihldmVudCk7XHJcbiAgfTtcclxuICBkcmF3ZXJUb29nbGVIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG5cclxuICBsb2dvQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nb0NsaWNrXCIpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dCByZW5kZXJcIik7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbG9jYWxlID0gdGhpcy5wcm9wcy5sb2NhbGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICAgIHRoZW1lPXsob3V0ZXJUaGVtZSkgPT4gY3JlYXRlTXVpVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxlc1tsb2NhbGVdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgIHRhYlZhbHVlPXt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn1cclxuICAgICAgICAgICAgZHJhd2VyVG9vZ2xlQ2xpY2s9e3RoaXMuZHJhd2VyVG9vZ2xlQ2xpY2t9XHJcbiAgICAgICAgICAgIGxvZ29DbGljaz17dGhpcy5sb2dvQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExlZnREcmF3ZXJcclxuICAgICAgICAgICAgb3BlbkRyYXdlckhhbmRsZXI9eyhoYW5kbGVyKSA9PlxyXG4gICAgICAgICAgICAgICh0aGlzLmRyYXdlclRvb2dsZUhhbmRsZXIgPSBoYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICBSaG9uY3VzIGRvbG9yIHB1cnVzIG5vbiBlbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbC5cclxuICAgICAgICAgICAgICBSaXN1cyBhdCB1bHRyaWNlcyBtaSB0ZW1wdXMgaW1wZXJkaWV0LiBTZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0XHJcbiAgICAgICAgICAgICAgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzLiBDb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZFxyXG4gICAgICAgICAgICAgIGludGVyZHVtIHZlbGl0IGxhb3JlZXQgaWQgZG9uZWMgdWx0cmljZXMuIE9kaW8gbW9yYmkgcXVpcyBjb21tb2RvXHJcbiAgICAgICAgICAgICAgb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcuIEFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtXHJcbiAgICAgICAgICAgICAgZXN0IHVsdHJpY2llcyBpbnRlZ2VyIHF1aXMuIEN1cnN1cyBldWlzbW9kIHF1aXMgdml2ZXJyYSBuaWJoIGNyYXMuXHJcbiAgICAgICAgICAgICAgTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW1cclxuICAgICAgICAgICAgICBsZW8uIE1hdXJpcyBjb21tb2RvIHF1aXMgaW1wZXJkaWV0IG1hc3NhIHRpbmNpZHVudC4gQ3JhcyB0aW5jaWR1bnRcclxuICAgICAgICAgICAgICBsb2JvcnRpcyBmZXVnaWF0IHZpdmFtdXMgYXQgYXVndWUuIEF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW1cclxuICAgICAgICAgICAgICB2YXJpdXMgZHVpcyBhdCBjb25zZWN0ZXR1ciBsb3JlbS4gVmVsaXQgc2VkIHVsbGFtY29ycGVyIG1vcmJpXHJcbiAgICAgICAgICAgICAgdGluY2lkdW50LiBMb3JlbSBkb25lYyBtYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIENvbnNlcXVhdCBtYXVyaXMgbnVuYyBjb25ndWUgbmlzaSB2aXRhZSBzdXNjaXBpdC4gRnJpbmdpbGxhIGVzdFxyXG4gICAgICAgICAgICAgIHVsbGFtY29ycGVyIGVnZXQgbnVsbGEgZmFjaWxpc2kgZXRpYW0gZGlnbmlzc2ltIGRpYW0uIFB1bHZpbmFyXHJcbiAgICAgICAgICAgICAgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdCBhYyB0aW5jaWR1bnQuIE9ybmFyZVxyXG4gICAgICAgICAgICAgIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhIHRlbGx1cy4gUHVydXMgc2l0IGFtZXRcclxuICAgICAgICAgICAgICB2b2x1dHBhdCBjb25zZXF1YXQgbWF1cmlzLiBFbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZCBvZGlvIG1vcmJpLlxyXG4gICAgICAgICAgICAgIEV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzIHNlZCB2dWxwdXRhdGUgb2Rpby4gTW9yYmkgdGluY2lkdW50XHJcbiAgICAgICAgICAgICAgb3JuYXJlIG1hc3NhIGVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluLiBJbiBoZW5kcmVyaXRcclxuICAgICAgICAgICAgICBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYy4gUGVsbGVudGVzcXVlIG5lYyBuYW1cclxuICAgICAgICAgICAgICBhbGlxdWFtIHNlbSBldCB0b3J0b3IuIEhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldC5cclxuICAgICAgICAgICAgICBBZGlwaXNjaW5nIGVsaXQgZHVpcyB0cmlzdGlxdWUgc29sbGljaXR1ZGluIG5pYmggc2l0LiBPcm5hcmVcclxuICAgICAgICAgICAgICBhZW5lYW4gZXVpc21vZCBlbGVtZW50dW0gbmlzaSBxdWlzIGVsZWlmZW5kLiBDb21tb2RvIHZpdmVycmFcclxuICAgICAgICAgICAgICBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLiBOdWxsYSBwb3N1ZXJlIHNvbGxpY2l0dWRpblxyXG4gICAgICAgICAgICAgIGFsaXF1YW0gdWx0cmljZXMgc2FnaXR0aXMgb3JjaSBhLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnQoXCJjaGFuZ2UtbGFuZ3VhZ2VcIil9XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYWxlOiBzdGF0ZS5jb21tb24ubG9jYWxlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oXCJsYXlvdXRcIikoXHJcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXQpKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9