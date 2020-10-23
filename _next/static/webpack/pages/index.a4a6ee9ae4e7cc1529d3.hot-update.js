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
    toolbar: theme.mixins.toolbar,
    drawer: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
      whiteSpace: "nowrap",
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
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
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.drawerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
        lineNumber: 96,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, ["All mail", "Trash", "Spam"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index + 4,
      onClick: function onClick(event) {
        return handleListItemClick(event, index + 4);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
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
    header: {
      flexGrow: 1,
      display: "inline-block"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    toolbar: theme.mixins.toolbar,
    // content: {
    //   flexGrow: 1,
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    //   padding: theme.spacing(1),
    // },
    container: {
      display: "flex",
      flexGrow: 1
    },
    content: {
      width: "auto",
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "drawerToogleHandler", undefined);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "drawerToogleClick", function (event) {
      console.log("drawerToogleClick");

      _this.drawerToogleHandler(event);
    });

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
          lineNumber: 66,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: classes.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, __jsx(_components_Navigation_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        tabValue: this.props.currentPage,
        className: classes.appBar,
        drawerToogleClick: this.drawerToogleClick,
        logoClick: this.logoClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        className: classes.container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        openDrawerHandler: function openDrawerHandler(handler) {
          return _this2.drawerToogleHandler = handler;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }
      }, "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."), this.props.t("change-language")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob2NzL0xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0b29sYmFyIiwibWl4aW5zIiwiZHJhd2VyIiwid2lkdGgiLCJ6SW5kZXgiLCJ3aGl0ZVNwYWNlIiwiZmxleFNocmluayIsImRyYXdlclBhcGVyIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3ciLCJkcmF3ZXJPcGVuIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImVudGVyaW5nU2NyZWVuIiwiZHJhd2VyQ2xvc2UiLCJsZWF2aW5nU2NyZWVuIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJMZWZ0RHJhd2VyIiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJkcmF3ZXJUb29nbGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImhhbmRsZUxpc3RJdGVtQ2xpY2siLCJpbmRleCIsIm9wZW5EcmF3ZXJIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImNsc3giLCJwYXBlciIsIm1hcCIsInRleHQiLCJwcm9wVHlwZXMiLCJpc01vYmlsZSIsIlByb3BUeXBlcyIsImJvb2wiLCJvcGVuIiwib25DbG9zZSIsImZ1bmMiLCJtZW51SXRlbUNsaWNrIiwic3R5bGVzIiwiaGVhZGVyIiwiZmxleEdyb3ciLCJkaXNwbGF5IiwiYXBwQmFyIiwiY29udGFpbmVyIiwiY29udGVudCIsInBhZGRpbmciLCJMYXlvdXQiLCJ1bmRlZmluZWQiLCJsb2NhbGUiLCJvdXRlclRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJsb2NhbGVzIiwiY3VycmVudFBhZ2UiLCJkcmF3ZXJUb29nbGVDbGljayIsImxvZ29DbGljayIsImhhbmRsZXIiLCJ0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tb24iLCJ3aXRoVHJhbnNsYXRpb24iLCJjb25uZWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUVBOztBQUNBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsV0FBTyxFQUFFRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsT0FEaUI7QUFFdkNFLFVBQU0sRUFBRTtBQUNOQyxXQUFLLEVBQUVQLFdBREQ7QUFFTlEsWUFBTSxFQUFFTCxLQUFLLENBQUNLLE1BQU4sQ0FBYUYsTUFGZjtBQUdORyxnQkFBVSxFQUFFLFFBSE47QUFJTkMsZ0JBQVUsRUFBRTtBQUpOLEtBRitCO0FBUXZDQyxlQUFXLEVBQUU7QUFDWEosV0FBSyxFQUFFUCxXQURJO0FBRVhRLFlBQU0sRUFBRUwsS0FBSyxDQUFDSyxNQUFOLENBQWFGLE1BRlY7QUFHWEcsZ0JBQVUsRUFBRTtBQUhELEtBUjBCO0FBYXZDRyxtQkFBZSxFQUFFO0FBQ2ZDLGNBQVEsRUFBRTtBQURLLEtBYnNCO0FBZ0J2Q0MsY0FBVSxFQUFFO0FBQ1ZQLFdBQUssRUFBRVAsV0FERztBQUVWZSxnQkFBVSxFQUFFWixLQUFLLENBQUNhLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLE9BQXpCLEVBQWtDO0FBQzVDQyxjQUFNLEVBQUVmLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkUsTUFBbEIsQ0FBeUJDLEtBRFc7QUFFNUNDLGdCQUFRLEVBQUVqQixLQUFLLENBQUNhLFdB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VyxLQUFLLENBQUNDLE1BQU4sQ0FBYVo7QUFEaEIsR0FBUDtBQUdELENBSkQ7O0FBTWVhLDZIQUFlLENBQUMsUUFBRCxDQUFmLENBQ2JDLDREQUFPLENBQUNKLGVBQUQsQ0FBUCxDQUF5QkssNEVBQVUsQ0FBQ3pCLE1BQUQsQ0FBVixDQUFtQlEsTUFBbkIsQ0FBekIsQ0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0YTZlZTlhZTRlN2NjMTUyOWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpdmlkZXIsXHJcbiAgRHJhd2VyLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBtYWtlU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgfSxcclxuICBkcmF3ZXJDb250YWluZXI6IHtcclxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICB9LFxyXG4gIGRyYXdlck9wZW46IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgZHJhd2VyQ2xvc2U6IHtcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSArIDEsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSkgKyAxLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NyaXB0aW9uOlxyXG4gKiAtIFNob3cgbGlzdCBvZiBtZW51IG9uIHRoZSBsZWZ0IHNpZGUuXHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcclxuICovXHJcbmNvbnN0IExlZnREcmF3ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBkcmF3ZXJUb29nbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlzdEl0ZW1DbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHByb3BzLm9wZW5EcmF3ZXJIYW5kbGVyKGRyYXdlclRvb2dsZUhhbmRsZXIpO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgY29uc29sZS5sb2coXCJMZWZ0RHJhd2VyIHJlbmRlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kcmF3ZXIsIHtcclxuICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJPcGVuXTogb3BlbkRyYXdlcixcclxuICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFvcGVuRHJhd2VyLFxyXG4gICAgICB9KX1cclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHBhcGVyOiBjbHN4KGNsYXNzZXMuZHJhd2VyUGFwZXIsIHtcclxuICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBvcGVuRHJhd2VyLFxyXG4gICAgICAgICAgW2NsYXNzZXMuZHJhd2VyQ2xvc2VdOiAhb3BlbkRyYXdlcixcclxuICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7W1wiSW5ib3hcIiwgXCJTdGFycmVkXCIsIFwiU2VuZCBlbWFpbFwiLCBcIkRyYWZ0c1wiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVMaXN0SXRlbUNsaWNrKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7W1wiQWxsIG1haWxcIiwgXCJUcmFzaFwiLCBcIlNwYW1cIl0ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e3RleHR9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09IGluZGV4ICsgNH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZXZlbnQsIGluZGV4ICsgNCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkxlZnREcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBtZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnREcmF3ZXI7XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2xvY2FsZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgd2l0aFN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0FwcEJhci9BcHBCYXJcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXJcIjtcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uL2kxOG5cIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBoZWFkZXI6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gIC8vIGNvbnRlbnQ6IHtcclxuICAvLyAgIGZsZXhHcm93OiAxLFxyXG4gIC8vICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgLy8gICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAvLyAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgLy8gfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjaXB0aW9uOlxyXG4gKi9cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9O1xyXG5cclxuICBkcmF3ZXJUb29nbGVIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG4gIGRyYXdlclRvb2dsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRyYXdlclRvb2dsZUNsaWNrXCIpO1xyXG4gICAgdGhpcy5kcmF3ZXJUb29nbGVIYW5kbGVyKGV2ZW50KTtcclxuICB9O1xyXG5cclxuICBsb2dvQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nb0NsaWNrXCIpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dCByZW5kZXJcIik7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbG9jYWxlID0gdGhpcy5wcm9wcy5sb2NhbGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICAgIHRoZW1lPXsob3V0ZXJUaGVtZSkgPT4gY3JlYXRlTXVpVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxlc1tsb2NhbGVdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgICAgdGFiVmFsdWU9e3RoaXMucHJvcHMuY3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn1cclxuICAgICAgICAgICAgICBkcmF3ZXJUb29nbGVDbGljaz17dGhpcy5kcmF3ZXJUb29nbGVDbGlja31cclxuICAgICAgICAgICAgICBsb2dvQ2xpY2s9e3RoaXMubG9nb0NsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TGVmdERyYXdlclxyXG4gICAgICAgICAgICAgIG9wZW5EcmF3ZXJIYW5kbGVyPXsoaGFuZGxlcikgPT5cclxuICAgICAgICAgICAgICAgICh0aGlzLmRyYXdlclRvb2dsZUhhbmRsZXIgPSBoYW5kbGVyKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvTGVmdERyYXdlcj5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICAgIFJob25jdXMgZG9sb3IgcHVydXMgbm9uIGVuaW0gcHJhZXNlbnQgZWxlbWVudHVtIGZhY2lsaXNpcyBsZW9cclxuICAgICAgICAgICAgICAgIHZlbC4gUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldC4gU2VtcGVyIHJpc3VzIGluXHJcbiAgICAgICAgICAgICAgICBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzLiBDb252YWxsaXMgY29udmFsbGlzXHJcbiAgICAgICAgICAgICAgICB0ZWxsdXMgaWQgaW50ZXJkdW0gdmVsaXQgbGFvcmVldCBpZCBkb25lYyB1bHRyaWNlcy4gT2RpbyBtb3JiaVxyXG4gICAgICAgICAgICAgICAgcXVpcyBjb21tb2RvIG9kaW8gYWVuZWFuIHNlZCBhZGlwaXNjaW5nLiBBbWV0IG5pc2wgc3VzY2lwaXRcclxuICAgICAgICAgICAgICAgIGFkaXBpc2NpbmcgYmliZW5kdW0gZXN0IHVsdHJpY2llcyBpbnRlZ2VyIHF1aXMuIEN1cnN1cyBldWlzbW9kXHJcbiAgICAgICAgICAgICAgICBxdWlzIHZpdmVycmEgbmliaCBjcmFzLiBNZXR1cyB2dWxwdXRhdGUgZXUgc2NlbGVyaXNxdWUgZmVsaXNcclxuICAgICAgICAgICAgICAgIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW0gbGVvLiBNYXVyaXMgY29tbW9kbyBxdWlzIGltcGVyZGlldFxyXG4gICAgICAgICAgICAgICAgbWFzc2EgdGluY2lkdW50LiBDcmFzIHRpbmNpZHVudCBsb2JvcnRpcyBmZXVnaWF0IHZpdmFtdXMgYXRcclxuICAgICAgICAgICAgICAgIGF1Z3VlLiBBdCBhdWd1ZSBlZ2V0IGFyY3UgZGljdHVtIHZhcml1cyBkdWlzIGF0IGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgICAgICBsb3JlbS4gVmVsaXQgc2VkIHVsbGFtY29ycGVyIG1vcmJpIHRpbmNpZHVudC4gTG9yZW0gZG9uZWMgbWFzc2FcclxuICAgICAgICAgICAgICAgIHNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYy5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgICAgQ29uc2VxdWF0IG1hdXJpcyBudW5jIGNvbmd1ZSBuaXNpIHZpdGFlIHN1c2NpcGl0LiBGcmluZ2lsbGEgZXN0XHJcbiAgICAgICAgICAgICAgICB1bGxhbWNvcnBlciBlZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtLiBQdWx2aW5hclxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdCBhYyB0aW5jaWR1bnQuIE9ybmFyZVxyXG4gICAgICAgICAgICAgICAgc3VzcGVuZGlzc2Ugc2VkIG5pc2kgbGFjdXMgc2VkIHZpdmVycmEgdGVsbHVzLiBQdXJ1cyBzaXQgYW1ldFxyXG4gICAgICAgICAgICAgICAgdm9sdXRwYXQgY29uc2VxdWF0IG1hdXJpcy4gRWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2Rpb1xyXG4gICAgICAgICAgICAgICAgbW9yYmkuIEV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzIHNlZCB2dWxwdXRhdGUgb2Rpby4gTW9yYmlcclxuICAgICAgICAgICAgICAgIHRpbmNpZHVudCBvcm5hcmUgbWFzc2EgZWdldCBlZ2VzdGFzIHB1cnVzIHZpdmVycmEgYWNjdW1zYW4gaW4uXHJcbiAgICAgICAgICAgICAgICBJbiBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzIG9yY2kgYWMuXHJcbiAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbmVjIG5hbSBhbGlxdWFtIHNlbSBldCB0b3J0b3IuIEhhYml0YW50IG1vcmJpXHJcbiAgICAgICAgICAgICAgICB0cmlzdGlxdWUgc2VuZWN0dXMgZXQuIEFkaXBpc2NpbmcgZWxpdCBkdWlzIHRyaXN0aXF1ZVxyXG4gICAgICAgICAgICAgICAgc29sbGljaXR1ZGluIG5pYmggc2l0LiBPcm5hcmUgYWVuZWFuIGV1aXNtb2QgZWxlbWVudHVtIG5pc2kgcXVpc1xyXG4gICAgICAgICAgICAgICAgZWxlaWZlbmQuIENvbW1vZG8gdml2ZXJyYSBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLlxyXG4gICAgICAgICAgICAgICAgTnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW4gYWxpcXVhbSB1bHRyaWNlcyBzYWdpdHRpcyBvcmNpIGEuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnQoXCJjaGFuZ2UtbGFuZ3VhZ2VcIil9XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogc3RhdGUuY29tbW9uLmxvY2FsZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFwibGF5b3V0XCIpKFxyXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0KSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==