webpackHotUpdate_N_E("pages/index",{

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(1),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selectedIndex = _React$useState2[0],
      setSelectedIndex = _React$useState2[1];

  var handleListItemClick = function handleListItemClick(event, index) {
    setSelectedIndex(index);
  };
  /************************************************** render */


  console.log("LeftDrawer render");
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawer, (_clsx = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.drawerOpen, props.openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.drawerClose, !props.openDrawer), _clsx)),
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])((_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.drawerOpen, props.openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.drawerClose, !props.openDrawer), _clsx2))
    },
    variant: "permanent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.drawerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        lineNumber: 108,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
      console.log("aaaaaa");

      _this.setState(function (prevState) {
        return {
          openDrawer: !prevState.openDrawer
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logoClick", function (event) {
      console.log("bbbb");
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return nextState.openDrawer != this.state.openDrawer;
    }
    /************************************************** render */

  }, {
    key: "render",
    value: function render() {
      console.log("Layout render");
      var classes = this.props.classes;
      var locale = this.props.locale;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
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
          lineNumber: 61,
          columnNumber: 11
        }
      }), __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        openDrawer: this.state.openDrawer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob2NzL0xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsInRvcCIsIndoaXRlU3BhY2UiLCJmbGV4U2hyaW5rIiwiZHJhd2VyUGFwZXIiLCJkcmF3ZXJDb250YWluZXIiLCJvdmVyZmxvdyIsImRyYXdlck9wZW4iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwiZW50ZXJpbmdTY3JlZW4iLCJkcmF3ZXJDbG9zZSIsImxlYXZpbmdTY3JlZW4iLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkxlZnREcmF3ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJoYW5kbGVMaXN0SXRlbUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJjbHN4Iiwib3BlbkRyYXdlciIsInBhcGVyIiwibWFwIiwidGV4dCIsInByb3BUeXBlcyIsImlzTW9iaWxlIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9wZW4iLCJvbkNsb3NlIiwiZnVuYyIsIm1lbnVJdGVtQ2xpY2siLCJzdHlsZXMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIkxheW91dCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwibmV4dENvbnRleHQiLCJzdGF0ZSIsImxvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJjdXJyZW50UGFnZSIsImRyYXdlclRvb2dsZUNsaWNrIiwibG9nb0NsaWNrIiwidCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbW1vbiIsIndpdGhUcmFuc2xhdGlvbiIsImNvbm5lY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUE7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBYixHQUFzQjtBQUR4QixLQUQrQjtBQUl2Q0EsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRVAsV0FERDtBQUVOSyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxNQUZmO0FBR05FLFNBQUcsRUFBRSxLQUhDO0FBSU5DLGdCQUFVLEVBQUUsUUFKTjtBQUtOQyxnQkFBVSxFQUFFO0FBTE4sS0FKK0I7QUFXdkNDLGVBQVcsRUFBRTtBQUNYSixXQUFLLEVBQUVQLFdBREk7QUFFWEssWUFBTSxFQUFFRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFGVjtBQUdYRSxTQUFHLEVBQUUsS0FITTtBQUlYQyxnQkFBVSxFQUFFO0FBSkQsS0FYMEI7QUFpQnZDRyxtQkFBZSxFQUFFO0FBQ2ZDLGNBQVEsRUFBRTtBQURLLEtBakJzQjtBQW9CdkNDLGNBQVUsRUFBRTtBQUNWUCxXQUFLLEVBQUVQLFdBREc7QUFFVmUsZ0JBQVUsRUFBRVosS0FBSyxDQUFDYSxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixPQUF6QixFQUFrQztBQUM1Q0MsY0FBTSxFQUFFZixLQUFLLENBQUNhLFdBQU4sQ0FBa0JFLE1BQWxCLENBQXlCQyxLQURXO0FBRTVDQyxnQkFBUSxFQUFFakIs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QUE7QUFBQTtBQUFBLFFBVkYsRUFXRTtBQUFNLGlCQUFTLEVBQUVYLE9BQU8sQ0FBQ3dCLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDREQUFEO0FBQVksaUJBQVMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4MEJBREYsRUFnQkUsTUFBQyw0REFBRDtBQUFZLGlCQUFTLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb3lCQWhCRixFQStCRyxLQUFLekIsS0FBTCxDQUFXMkMsQ0FBWCxDQUFhLGlCQUFiLENBL0JILENBWEYsQ0FGRixDQURGO0FBa0REOzs7O0VBdkVrQnpDLDZDQUFLLENBQUMwQyxTO0FBMEUzQjs7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDVixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMQyxVQUFNLEVBQUVELEtBQUssQ0FBQ1csTUFBTixDQUFhVjtBQURoQixHQUFQO0FBR0QsQ0FKRDs7QUFNZVcsNkhBQWUsQ0FBQyxRQUFELENBQWYsQ0FDYkMsNERBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCSSw0RUFBVSxDQUFDekIsTUFBRCxDQUFWLENBQW1CSyxNQUFuQixDQUF6QixDQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTcwZGNmYmM5MDJhM2QwMDcwNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGl2aWRlcixcclxuICBEcmF3ZXIsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIG1ha2VTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyMDA7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxyXG4gICAgdG9wOiBcIjV2aFwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgfSxcclxuICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxyXG4gICAgdG9wOiBcIjV2aFwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICB9LFxyXG4gIGRyYXdlckNvbnRhaW5lcjoge1xyXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgZHJhd2VyT3Blbjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBkcmF3ZXJDbG9zZToge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpICsgMSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSArIDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY3JpcHRpb246XHJcbiAqIC0gU2hvdyBsaXN0IG9mIG1lbnUgb24gdGhlIGxlZnQgc2lkZS5cclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTGVmdERyYXdlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlzdEl0ZW1DbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICBjb25zb2xlLmxvZyhcIkxlZnREcmF3ZXIgcmVuZGVyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRyYXdlciwge1xyXG4gICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBwcm9wcy5vcGVuRHJhd2VyLFxyXG4gICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIXByb3BzLm9wZW5EcmF3ZXIsXHJcbiAgICAgIH0pfVxyXG4gICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgcGFwZXI6IGNsc3goe1xyXG4gICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IHByb3BzLm9wZW5EcmF3ZXIsXHJcbiAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFwcm9wcy5vcGVuRHJhd2VyLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyQ29udGFpbmVyfT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJJbmJveFwiLCBcIlN0YXJyZWRcIiwgXCJTZW5kIGVtYWlsXCIsIFwiRHJhZnRzXCJdLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSBpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZXZlbnQsIGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJBbGwgbWFpbFwiLCBcIlRyYXNoXCIsIFwiU3BhbVwiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVMaXN0SXRlbUNsaWNrKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkxlZnREcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBtZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnREcmF3ZXI7XHJcbiIsImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgKiBhcyBsb2NhbGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9sb2NhbGVcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVNdWlUaGVtZSxcclxuICBUaGVtZVByb3ZpZGVyLFxyXG4gIHdpdGhTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyXCI7XHJcbmltcG9ydCBMZWZ0RHJhd2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24vU2lkZURyYXdlci9MZWZ0RHJhd2VyXCI7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi8uLi9pMThuXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDIwMDtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY2lwdGlvbjpcclxuICovXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBvcGVuRHJhd2VyOiBmYWxzZSxcclxuICB9O1xyXG4gIGRyYXdlclRvb2dsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFhYWFhYVwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgb3BlbkRyYXdlcjogIXByZXZTdGF0ZS5vcGVuRHJhd2VyIH0pKTtcclxuICB9O1xyXG4gIGxvZ29DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJiYmJiXCIpO1xyXG4gIH07XHJcblxyXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcclxuICAgIHJldHVybiBuZXh0U3RhdGUub3BlbkRyYXdlciAhPSB0aGlzLnN0YXRlLm9wZW5EcmF3ZXI7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQgcmVuZGVyXCIpO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgICB0aGVtZT17KG91dGVyVGhlbWUpID0+IGNyZWF0ZU11aVRoZW1lKG91dGVyVGhlbWUsIGxvY2FsZXNbbG9jYWxlXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFwcEJhclxyXG4gICAgICAgICAgICB0YWJWYWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9XHJcbiAgICAgICAgICAgIGRyYXdlclRvb2dsZUNsaWNrPXt0aGlzLmRyYXdlclRvb2dsZUNsaWNrfVxyXG4gICAgICAgICAgICBsb2dvQ2xpY2s9e3RoaXMubG9nb0NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMZWZ0RHJhd2VyIG9wZW5EcmF3ZXI9e3RoaXMuc3RhdGUub3BlbkRyYXdlcn0gLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgUmhvbmN1cyBkb2xvciBwdXJ1cyBub24gZW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlbyB2ZWwuXHJcbiAgICAgICAgICAgICAgUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldC4gU2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdFxyXG4gICAgICAgICAgICAgIGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cy4gQ29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWRcclxuICAgICAgICAgICAgICBpbnRlcmR1bSB2ZWxpdCBsYW9yZWV0IGlkIGRvbmVjIHVsdHJpY2VzLiBPZGlvIG1vcmJpIHF1aXMgY29tbW9kb1xyXG4gICAgICAgICAgICAgIG9kaW8gYWVuZWFuIHNlZCBhZGlwaXNjaW5nLiBBbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bVxyXG4gICAgICAgICAgICAgIGVzdCB1bHRyaWNpZXMgaW50ZWdlciBxdWlzLiBDdXJzdXMgZXVpc21vZCBxdWlzIHZpdmVycmEgbmliaCBjcmFzLlxyXG4gICAgICAgICAgICAgIE1ldHVzIHZ1bHB1dGF0ZSBldSBzY2VsZXJpc3F1ZSBmZWxpcyBpbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtXHJcbiAgICAgICAgICAgICAgbGVvLiBNYXVyaXMgY29tbW9kbyBxdWlzIGltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQuIENyYXMgdGluY2lkdW50XHJcbiAgICAgICAgICAgICAgbG9ib3J0aXMgZmV1Z2lhdCB2aXZhbXVzIGF0IGF1Z3VlLiBBdCBhdWd1ZSBlZ2V0IGFyY3UgZGljdHVtXHJcbiAgICAgICAgICAgICAgdmFyaXVzIGR1aXMgYXQgY29uc2VjdGV0dXIgbG9yZW0uIFZlbGl0IHNlZCB1bGxhbWNvcnBlciBtb3JiaVxyXG4gICAgICAgICAgICAgIHRpbmNpZHVudC4gTG9yZW0gZG9uZWMgbWFzc2Egc2FwaWVuIGZhdWNpYnVzIGV0IG1vbGVzdGllIGFjLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICBDb25zZXF1YXQgbWF1cmlzIG51bmMgY29uZ3VlIG5pc2kgdml0YWUgc3VzY2lwaXQuIEZyaW5naWxsYSBlc3RcclxuICAgICAgICAgICAgICB1bGxhbWNvcnBlciBlZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtLiBQdWx2aW5hclxyXG4gICAgICAgICAgICAgIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW0gbmVxdWUgdm9sdXRwYXQgYWMgdGluY2lkdW50LiBPcm5hcmVcclxuICAgICAgICAgICAgICBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cyBzZWQgdml2ZXJyYSB0ZWxsdXMuIFB1cnVzIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgdm9sdXRwYXQgY29uc2VxdWF0IG1hdXJpcy4gRWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaS5cclxuICAgICAgICAgICAgICBFdWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cyBzZWQgdnVscHV0YXRlIG9kaW8uIE1vcmJpIHRpbmNpZHVudFxyXG4gICAgICAgICAgICAgIG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMgcHVydXMgdml2ZXJyYSBhY2N1bXNhbiBpbi4gSW4gaGVuZHJlcml0XHJcbiAgICAgICAgICAgICAgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzIG9yY2kgYWMuIFBlbGxlbnRlc3F1ZSBuZWMgbmFtXHJcbiAgICAgICAgICAgICAgYWxpcXVhbSBzZW0gZXQgdG9ydG9yLiBIYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQuXHJcbiAgICAgICAgICAgICAgQWRpcGlzY2luZyBlbGl0IGR1aXMgdHJpc3RpcXVlIHNvbGxpY2l0dWRpbiBuaWJoIHNpdC4gT3JuYXJlXHJcbiAgICAgICAgICAgICAgYWVuZWFuIGV1aXNtb2QgZWxlbWVudHVtIG5pc2kgcXVpcyBlbGVpZmVuZC4gQ29tbW9kbyB2aXZlcnJhXHJcbiAgICAgICAgICAgICAgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy4gTnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW5cclxuICAgICAgICAgICAgICBhbGlxdWFtIHVsdHJpY2VzIHNhZ2l0dGlzIG9yY2kgYS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50KFwiY2hhbmdlLWxhbmd1YWdlXCIpfVxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogc3RhdGUuY29tbW9uLmxvY2FsZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFwibGF5b3V0XCIpKFxyXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0KSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==