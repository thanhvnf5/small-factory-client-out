webpackHotUpdate_N_E("pages/about",{

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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_Navigation_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Navigation/AppBar/AppBar */ "./src/components/Navigation/AppBar/AppBar.js");
/* harmony import */ var _components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Navigation/SideDrawer/LeftDrawer */ "./src/components/Navigation/SideDrawer/LeftDrawer.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_16__);







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
          lineNumber: 74,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, __jsx(_components_Navigation_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tabValue: this.props.currentPage,
        position: "fixed",
        className: classes.appBar,
        drawerToogleClick: this.drawerToogleClick,
        logoClick: this.logoClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }), __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])(classes.drawer, (_clsx = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx, classes.drawerOpen, this.state.openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx, classes.drawerClose, !this.state.openDrawer), _clsx)),
        classes: {
          paper: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])((_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx2, classes.drawerOpen, this.state.openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_clsx2, classes.drawerClose, !this.state.openDrawer), _clsx2))
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_16__["withTranslation"])("layout")(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(styles)(Layout))));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvTGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInN0eWxlcyIsInRoZW1lIiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwiY29udGVudCIsImZsZXhHcm93Iiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsInNwYWNpbmciLCJkcmF3ZXJPcGVuIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImVudGVyaW5nU2NyZWVuIiwiZHJhd2VyQ2xvc2UiLCJsZWF2aW5nU2NyZWVuIiwib3ZlcmZsb3dYIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkxheW91dCIsIm9wZW5EcmF3ZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIm5leHRDb250ZXh0IiwiY2xhc3NlcyIsInByb3BzIiwibG9jYWxlIiwib3V0ZXJUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwibG9jYWxlcyIsImN1cnJlbnRQYWdlIiwiZHJhd2VyVG9vZ2xlQ2xpY2siLCJsb2dvQ2xpY2siLCJjbHN4Iiwic3RhdGUiLCJwYXBlciIsInQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbW1vbiIsIndpdGhUcmFuc2xhdGlvbiIsImNvbm5lY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUNBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLEVBQUU7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Q0gsZUFBRCxDQUFQLENBQXlCSSw0RUFBVSxDQUFDckQsTUFBRCxDQUFWLENBQW1Cd0IsTUFBbkIsQ0FBekIsQ0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjY5YmNhN2ExZDQzMGZlZDM4NzU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0ICogYXMgbG9jYWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvbG9jYWxlXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB3aXRoU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24vQXBwQmFyL0FwcEJhclwiO1xyXG5pbXBvcnQgTGVmdERyYXdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVEcmF3ZXIvTGVmdERyYXdlclwiO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tIFwiLi4vLi4vaTE4blwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyMDA7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkcmF3ZXJPcGVuOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGRyYXdlckNsb3NlOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNykgKyAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpICsgMSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NpcHRpb246XHJcbiAqL1xyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgb3BlbkRyYXdlcjogZmFsc2UsXHJcbiAgfTtcclxuICBkcmF3ZXJUb29nbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJhYWFhYWFcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IG9wZW5EcmF3ZXI6ICFwcmV2U3RhdGUub3BlbkRyYXdlciB9KSk7XHJcbiAgfTtcclxuICBsb2dvQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYmJiYlwiKTtcclxuICB9O1xyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgICB0aGVtZT17KG91dGVyVGhlbWUpID0+IGNyZWF0ZU11aVRoZW1lKG91dGVyVGhlbWUsIGxvY2FsZXNbbG9jYWxlXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFwcEJhclxyXG4gICAgICAgICAgICB0YWJWYWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9XHJcbiAgICAgICAgICAgIGRyYXdlclRvb2dsZUNsaWNrPXt0aGlzLmRyYXdlclRvb2dsZUNsaWNrfVxyXG4gICAgICAgICAgICBsb2dvQ2xpY2s9e3RoaXMubG9nb0NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMZWZ0RHJhd2VyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRyYXdlciwge1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiB0aGlzLnN0YXRlLm9wZW5EcmF3ZXIsXHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyQ2xvc2VdOiAhdGhpcy5zdGF0ZS5vcGVuRHJhd2VyLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIHBhcGVyOiBjbHN4KHtcclxuICAgICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiB0aGlzLnN0YXRlLm9wZW5EcmF3ZXIsXHJcbiAgICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICF0aGlzLnN0YXRlLm9wZW5EcmF3ZXIsXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICBSaG9uY3VzIGRvbG9yIHB1cnVzIG5vbiBlbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbC5cclxuICAgICAgICAgICAgICBSaXN1cyBhdCB1bHRyaWNlcyBtaSB0ZW1wdXMgaW1wZXJkaWV0LiBTZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0XHJcbiAgICAgICAgICAgICAgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzLiBDb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZFxyXG4gICAgICAgICAgICAgIGludGVyZHVtIHZlbGl0IGxhb3JlZXQgaWQgZG9uZWMgdWx0cmljZXMuIE9kaW8gbW9yYmkgcXVpcyBjb21tb2RvXHJcbiAgICAgICAgICAgICAgb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcuIEFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtXHJcbiAgICAgICAgICAgICAgZXN0IHVsdHJpY2llcyBpbnRlZ2VyIHF1aXMuIEN1cnN1cyBldWlzbW9kIHF1aXMgdml2ZXJyYSBuaWJoIGNyYXMuXHJcbiAgICAgICAgICAgICAgTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW1cclxuICAgICAgICAgICAgICBsZW8uIE1hdXJpcyBjb21tb2RvIHF1aXMgaW1wZXJkaWV0IG1hc3NhIHRpbmNpZHVudC4gQ3JhcyB0aW5jaWR1bnRcclxuICAgICAgICAgICAgICBsb2JvcnRpcyBmZXVnaWF0IHZpdmFtdXMgYXQgYXVndWUuIEF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW1cclxuICAgICAgICAgICAgICB2YXJpdXMgZHVpcyBhdCBjb25zZWN0ZXR1ciBsb3JlbS4gVmVsaXQgc2VkIHVsbGFtY29ycGVyIG1vcmJpXHJcbiAgICAgICAgICAgICAgdGluY2lkdW50LiBMb3JlbSBkb25lYyBtYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIENvbnNlcXVhdCBtYXVyaXMgbnVuYyBjb25ndWUgbmlzaSB2aXRhZSBzdXNjaXBpdC4gRnJpbmdpbGxhIGVzdFxyXG4gICAgICAgICAgICAgIHVsbGFtY29ycGVyIGVnZXQgbnVsbGEgZmFjaWxpc2kgZXRpYW0gZGlnbmlzc2ltIGRpYW0uIFB1bHZpbmFyXHJcbiAgICAgICAgICAgICAgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdCBhYyB0aW5jaWR1bnQuIE9ybmFyZVxyXG4gICAgICAgICAgICAgIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhIHRlbGx1cy4gUHVydXMgc2l0IGFtZXRcclxuICAgICAgICAgICAgICB2b2x1dHBhdCBjb25zZXF1YXQgbWF1cmlzLiBFbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZCBvZGlvIG1vcmJpLlxyXG4gICAgICAgICAgICAgIEV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzIHNlZCB2dWxwdXRhdGUgb2Rpby4gTW9yYmkgdGluY2lkdW50XHJcbiAgICAgICAgICAgICAgb3JuYXJlIG1hc3NhIGVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluLiBJbiBoZW5kcmVyaXRcclxuICAgICAgICAgICAgICBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYy4gUGVsbGVudGVzcXVlIG5lYyBuYW1cclxuICAgICAgICAgICAgICBhbGlxdWFtIHNlbSBldCB0b3J0b3IuIEhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldC5cclxuICAgICAgICAgICAgICBBZGlwaXNjaW5nIGVsaXQgZHVpcyB0cmlzdGlxdWUgc29sbGljaXR1ZGluIG5pYmggc2l0LiBPcm5hcmVcclxuICAgICAgICAgICAgICBhZW5lYW4gZXVpc21vZCBlbGVtZW50dW0gbmlzaSBxdWlzIGVsZWlmZW5kLiBDb21tb2RvIHZpdmVycmFcclxuICAgICAgICAgICAgICBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLiBOdWxsYSBwb3N1ZXJlIHNvbGxpY2l0dWRpblxyXG4gICAgICAgICAgICAgIGFsaXF1YW0gdWx0cmljZXMgc2FnaXR0aXMgb3JjaSBhLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnQoXCJjaGFuZ2UtbGFuZ3VhZ2VcIil9XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYWxlOiBzdGF0ZS5jb21tb24ubG9jYWxlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oXCJsYXlvdXRcIikoXHJcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXQpKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9