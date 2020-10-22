webpackHotUpdate_N_E("pages/index",{

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
      debugger;
      return nextState.openDrawer != this.state.openDrawer;
    }
    /************************************************** render */

  }, {
    key: "render",
    value: function render() {
      var _clsx, _clsx2;

      debugger;
      var classes = this.props.classes;
      var locale = this.props.locale;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
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
          lineNumber: 81,
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
          lineNumber: 88,
          columnNumber: 11
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvTGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInN0eWxlcyIsInRoZW1lIiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwiY29udGVudCIsImZsZXhHcm93Iiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsInNwYWNpbmciLCJkcmF3ZXJPcGVuIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImVudGVyaW5nU2NyZWVuIiwiZHJhd2VyQ2xvc2UiLCJsZWF2aW5nU2NyZWVuIiwib3ZlcmZsb3dYIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkxheW91dCIsIm9wZW5EcmF3ZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIm5leHRDb250ZXh0Iiwic3RhdGUiLCJjbGFzc2VzIiwicHJvcHMiLCJsb2NhbGUiLCJvdXRlclRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJsb2NhbGVzIiwiY3VycmVudFBhZ2UiLCJkcmF3ZXJUb29nbGVDbGljayIsImxvZ29DbGljayIsImNsc3giLCJwYXBlciIsInQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbW1vbiIsIndpdGhUcmFuc2xhdGlvbiIsImNvbm5lY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUNBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLEVBQUU7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Q0FKRDs7QUFNZWMsNkhBQWUsQ0FBQyxRQUFELENBQWYsQ0FDYkMsNERBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCSSw0RUFBVSxDQUFDckQsTUFBRCxDQUFWLENBQW1Cd0IsTUFBbkIsQ0FBekIsQ0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkODkwNzU3Mjg2ZmE5M2Y4MDkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0ICogYXMgbG9jYWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvbG9jYWxlXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB3aXRoU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24vQXBwQmFyL0FwcEJhclwiO1xyXG5pbXBvcnQgTGVmdERyYXdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVEcmF3ZXIvTGVmdERyYXdlclwiO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tIFwiLi4vLi4vaTE4blwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyMDA7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkcmF3ZXJPcGVuOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGRyYXdlckNsb3NlOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNykgKyAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpICsgMSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NpcHRpb246XHJcbiAqL1xyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgb3BlbkRyYXdlcjogZmFsc2UsXHJcbiAgfTtcclxuICBkcmF3ZXJUb29nbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJhYWFhYWFcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IG9wZW5EcmF3ZXI6ICFwcmV2U3RhdGUub3BlbkRyYXdlciB9KSk7XHJcbiAgfTtcclxuICBsb2dvQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYmJiYlwiKTtcclxuICB9O1xyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIHJldHVybiBuZXh0U3RhdGUub3BlbkRyYXdlciAhPSB0aGlzLnN0YXRlLm9wZW5EcmF3ZXI7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbG9jYWxlID0gdGhpcy5wcm9wcy5sb2NhbGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICAgIHRoZW1lPXsob3V0ZXJUaGVtZSkgPT4gY3JlYXRlTXVpVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxlc1tsb2NhbGVdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgIHRhYlZhbHVlPXt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn1cclxuICAgICAgICAgICAgZHJhd2VyVG9vZ2xlQ2xpY2s9e3RoaXMuZHJhd2VyVG9vZ2xlQ2xpY2t9XHJcbiAgICAgICAgICAgIGxvZ29DbGljaz17dGhpcy5sb2dvQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExlZnREcmF3ZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZHJhd2VyLCB7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IHRoaXMuc3RhdGUub3BlbkRyYXdlcixcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICF0aGlzLnN0YXRlLm9wZW5EcmF3ZXIsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgcGFwZXI6IGNsc3goe1xyXG4gICAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IHRoaXMuc3RhdGUub3BlbkRyYXdlcixcclxuICAgICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIXRoaXMuc3RhdGUub3BlbkRyYXdlcixcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cclxuICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxyXG4gICAgICAgICAgICAgIFJob25jdXMgZG9sb3IgcHVydXMgbm9uIGVuaW0gcHJhZXNlbnQgZWxlbWVudHVtIGZhY2lsaXNpcyBsZW8gdmVsLlxyXG4gICAgICAgICAgICAgIFJpc3VzIGF0IHVsdHJpY2VzIG1pIHRlbXB1cyBpbXBlcmRpZXQuIFNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXRcclxuICAgICAgICAgICAgICBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMuIENvbnZhbGxpcyBjb252YWxsaXMgdGVsbHVzIGlkXHJcbiAgICAgICAgICAgICAgaW50ZXJkdW0gdmVsaXQgbGFvcmVldCBpZCBkb25lYyB1bHRyaWNlcy4gT2RpbyBtb3JiaSBxdWlzIGNvbW1vZG9cclxuICAgICAgICAgICAgICBvZGlvIGFlbmVhbiBzZWQgYWRpcGlzY2luZy4gQW1ldCBuaXNsIHN1c2NpcGl0IGFkaXBpc2NpbmcgYmliZW5kdW1cclxuICAgICAgICAgICAgICBlc3QgdWx0cmljaWVzIGludGVnZXIgcXVpcy4gQ3Vyc3VzIGV1aXNtb2QgcXVpcyB2aXZlcnJhIG5pYmggY3Jhcy5cclxuICAgICAgICAgICAgICBNZXR1cyB2dWxwdXRhdGUgZXUgc2NlbGVyaXNxdWUgZmVsaXMgaW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bVxyXG4gICAgICAgICAgICAgIGxlby4gTWF1cmlzIGNvbW1vZG8gcXVpcyBpbXBlcmRpZXQgbWFzc2EgdGluY2lkdW50LiBDcmFzIHRpbmNpZHVudFxyXG4gICAgICAgICAgICAgIGxvYm9ydGlzIGZldWdpYXQgdml2YW11cyBhdCBhdWd1ZS4gQXQgYXVndWUgZWdldCBhcmN1IGRpY3R1bVxyXG4gICAgICAgICAgICAgIHZhcml1cyBkdWlzIGF0IGNvbnNlY3RldHVyIGxvcmVtLiBWZWxpdCBzZWQgdWxsYW1jb3JwZXIgbW9yYmlcclxuICAgICAgICAgICAgICB0aW5jaWR1bnQuIExvcmVtIGRvbmVjIG1hc3NhIHNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYy5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgQ29uc2VxdWF0IG1hdXJpcyBudW5jIGNvbmd1ZSBuaXNpIHZpdGFlIHN1c2NpcGl0LiBGcmluZ2lsbGEgZXN0XHJcbiAgICAgICAgICAgICAgdWxsYW1jb3JwZXIgZWdldCBudWxsYSBmYWNpbGlzaSBldGlhbSBkaWduaXNzaW0gZGlhbS4gUHVsdmluYXJcclxuICAgICAgICAgICAgICBlbGVtZW50dW0gaW50ZWdlciBlbmltIG5lcXVlIHZvbHV0cGF0IGFjIHRpbmNpZHVudC4gT3JuYXJlXHJcbiAgICAgICAgICAgICAgc3VzcGVuZGlzc2Ugc2VkIG5pc2kgbGFjdXMgc2VkIHZpdmVycmEgdGVsbHVzLiBQdXJ1cyBzaXQgYW1ldFxyXG4gICAgICAgICAgICAgIHZvbHV0cGF0IGNvbnNlcXVhdCBtYXVyaXMuIEVsZW1lbnR1bSBldSBmYWNpbGlzaXMgc2VkIG9kaW8gbW9yYmkuXHJcbiAgICAgICAgICAgICAgRXVpc21vZCBsYWNpbmlhIGF0IHF1aXMgcmlzdXMgc2VkIHZ1bHB1dGF0ZSBvZGlvLiBNb3JiaSB0aW5jaWR1bnRcclxuICAgICAgICAgICAgICBvcm5hcmUgbWFzc2EgZWdldCBlZ2VzdGFzIHB1cnVzIHZpdmVycmEgYWNjdW1zYW4gaW4uIEluIGhlbmRyZXJpdFxyXG4gICAgICAgICAgICAgIGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cyBvcmNpIGFjLiBQZWxsZW50ZXNxdWUgbmVjIG5hbVxyXG4gICAgICAgICAgICAgIGFsaXF1YW0gc2VtIGV0IHRvcnRvci4gSGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0LlxyXG4gICAgICAgICAgICAgIEFkaXBpc2NpbmcgZWxpdCBkdWlzIHRyaXN0aXF1ZSBzb2xsaWNpdHVkaW4gbmliaCBzaXQuIE9ybmFyZVxyXG4gICAgICAgICAgICAgIGFlbmVhbiBldWlzbW9kIGVsZW1lbnR1bSBuaXNpIHF1aXMgZWxlaWZlbmQuIENvbW1vZG8gdml2ZXJyYVxyXG4gICAgICAgICAgICAgIG1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzIHZlbCBmYWNpbGlzaXMuIE51bGxhIHBvc3VlcmUgc29sbGljaXR1ZGluXHJcbiAgICAgICAgICAgICAgYWxpcXVhbSB1bHRyaWNlcyBzYWdpdHRpcyBvcmNpIGEuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudChcImNoYW5nZS1sYW5ndWFnZVwiKX1cclxuICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2NhbGU6IHN0YXRlLmNvbW1vbi5sb2NhbGUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihcImxheW91dFwiKShcclxuICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKExheW91dCkpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=