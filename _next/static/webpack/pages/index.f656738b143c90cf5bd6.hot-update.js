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
    // content: {
    //   flexGrow: 1,
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    //   padding: theme.spacing(1),
    // },
    container: {
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
          lineNumber: 60,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
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
          lineNumber: 65,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: classes.container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }, __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        openDrawerHandler: function openDrawerHandler(handler) {
          return _this2.drawerToogleHandler = handler;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvTGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInN0eWxlcyIsInRoZW1lIiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwiY29udGFpbmVyIiwiZmxleEdyb3ciLCJjb250ZW50Iiwid2lkdGgiLCJwYWRkaW5nIiwic3BhY2luZyIsIkxheW91dCIsInVuZGVmaW5lZCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRyYXdlclRvb2dsZUhhbmRsZXIiLCJjbGFzc2VzIiwicHJvcHMiLCJsb2NhbGUiLCJvdXRlclRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJsb2NhbGVzIiwiY3VycmVudFBhZ2UiLCJkcmF3ZXJUb29nbGVDbGljayIsImxvZ29DbGljayIsImhhbmRsZXIiLCJ0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW1vbiIsIndpdGhUcmFuc2xhdGlvbiIsImNvbm5lY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUNBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBYixHQUFzQjtBQUR4QixLQURpQjtBQUl6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRTtBQURELEtBVmM7QUFhekJDLFdBQU8sRUFBRTtBQUNQQyxXQUFLLEVBQUUsTUFEQTtBQUVQQyxhQUFPLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjLENBQWQ7QUFGRjtBQWJnQixHQUFaO0FBQUEsQ0FBZjtBQW1CQTs7QUFDQTs7Ozs7SUFHTUMsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSSxFOzs4TkFFY0MsUzs7NE5BQ0YsVUFBQ0MsS0FBRCxFQUFXO0FBQzdCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFDQSxZQUFLQyxtQkFBTCxDQUF5QkgsS0FBekI7QUFDRCxLOztvTkFFVyxVQUFDQSxLQUFELEVBQVc7QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxLOzs7Ozs7OztBQUVEOzZCQUNTO0FBQUE7O0FBQ1BELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFETyxVQUVDRSxPQUZELEdBRWEsS0FBS0MsS0FGbEIsQ0FFQ0QsT0FGRDtBQUdQLFVBQUlFLE1BQU0sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE1BQXhCO0FBQ0EsYUFDRSxNQUFDLDZDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRSxNQUFDLHVFQUFEO0FBQ0UsYUFBSyxFQUFFLGVBQUNDLFVBQUQ7QUFBQSxpQkFBZ0JDLGdGQUFjLENBQUNELFVBQUQsRUFBYUUscURBQU8sQ0FBQ0gsTUFBRCxDQUFwQixDQUE5QjtBQUFBLFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdFLE1BQUMsNkVBQUQ7QUFDRSxnQkFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0ssV0FEdkI7QUFFRSxnQkFBUSxFQUFDLE9BRlg7QUFHRSxpQkFBUyxFQUFFTixPQUFPLENBQUNmLE1BSHJCO0FBSUUseUJBQWlCLEVBQUUsS0FBS3NCLGlCQUoxQjtBQUtFLGlCQUFTLEVBQUUsS0FBS0MsU0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLEVBVUU7QUFBSyxpQkFBUyxFQUFFUixPQUFPLENBQUNaLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHFGQUFEO0FBQ0UseUJBQWlCLEVBQUUsMkJBQUNxQixPQUFEO0FBQUEsaUJBQ2hCLE1BQUksQ0FBQ1YsbUJBQUwsR0FBMkJVLE9BRFg7QUFBQSxTQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRTtBQUFNLGlCQUFTLEVBQUVULE9BQU8sQ0FBQ1YsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsNERBQUQ7QUFBWSxpQkFBUyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDgwQkFERixFQWlCRSxNQUFDLDREQUFEO0FBQVksaUJBQVMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxveUJBakJGLEVBZ0NHLEtBQUtXLEtBQUwsQ0FBV1MsQ0FBWCxDQUFhLGlCQUFiLENBaENILENBTkYsQ0FWRixDQUZGLENBREY7QUF5REQ7Ozs7RUEzRWtCQyw2Q0FBSyxDQUFDQyxTO0FBOEUzQjs7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMWixVQUFNLEVBQUVZLEtBQUssQ0FBQ0MsTUFBTixDQUFhYjtBQURoQixHQUFQO0FBR0QsQ0FKRDs7QUFNZWMsNkhBQWUsQ0FBQyxRQUFELENBQWYsQ0FDYkMsNERBQU8sQ0FBQ0osZUFBRCxDQUFQLENBQXlCSyw0RUFBVSxDQUFDbkMsTUFBRCxDQUFWLENBQW1CVyxNQUFuQixDQUF6QixDQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjY1NjczOGIxNDNjOTBjZjViZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgKiBhcyBsb2NhbGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9sb2NhbGVcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVNdWlUaGVtZSxcclxuICBUaGVtZVByb3ZpZGVyLFxyXG4gIHdpdGhTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyXCI7XHJcbmltcG9ydCBMZWZ0RHJhd2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24vU2lkZURyYXdlci9MZWZ0RHJhd2VyXCI7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi8uLi9pMThuXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDIwMDtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIH0sXHJcbiAgLy8gY29udGVudDoge1xyXG4gIC8vICAgZmxleEdyb3c6IDEsXHJcbiAgLy8gICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAvLyAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gIC8vICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAvLyB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjaXB0aW9uOlxyXG4gKi9cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9O1xyXG5cclxuICBkcmF3ZXJUb29nbGVIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG4gIGRyYXdlclRvb2dsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRyYXdlclRvb2dsZUNsaWNrXCIpO1xyXG4gICAgdGhpcy5kcmF3ZXJUb29nbGVIYW5kbGVyKGV2ZW50KTtcclxuICB9O1xyXG5cclxuICBsb2dvQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nb0NsaWNrXCIpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dCByZW5kZXJcIik7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbG9jYWxlID0gdGhpcy5wcm9wcy5sb2NhbGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICAgIHRoZW1lPXsob3V0ZXJUaGVtZSkgPT4gY3JlYXRlTXVpVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxlc1tsb2NhbGVdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgIHRhYlZhbHVlPXt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn1cclxuICAgICAgICAgICAgZHJhd2VyVG9vZ2xlQ2xpY2s9e3RoaXMuZHJhd2VyVG9vZ2xlQ2xpY2t9XHJcbiAgICAgICAgICAgIGxvZ29DbGljaz17dGhpcy5sb2dvQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPExlZnREcmF3ZXJcclxuICAgICAgICAgICAgICBvcGVuRHJhd2VySGFuZGxlcj17KGhhbmRsZXIpID0+XHJcbiAgICAgICAgICAgICAgICAodGhpcy5kcmF3ZXJUb29nbGVIYW5kbGVyID0gaGFuZGxlcilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cclxuICAgICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgICBSaG9uY3VzIGRvbG9yIHB1cnVzIG5vbiBlbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvXHJcbiAgICAgICAgICAgICAgICB2ZWwuIFJpc3VzIGF0IHVsdHJpY2VzIG1pIHRlbXB1cyBpbXBlcmRpZXQuIFNlbXBlciByaXN1cyBpblxyXG4gICAgICAgICAgICAgICAgaGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cy4gQ29udmFsbGlzIGNvbnZhbGxpc1xyXG4gICAgICAgICAgICAgICAgdGVsbHVzIGlkIGludGVyZHVtIHZlbGl0IGxhb3JlZXQgaWQgZG9uZWMgdWx0cmljZXMuIE9kaW8gbW9yYmlcclxuICAgICAgICAgICAgICAgIHF1aXMgY29tbW9kbyBvZGlvIGFlbmVhbiBzZWQgYWRpcGlzY2luZy4gQW1ldCBuaXNsIHN1c2NpcGl0XHJcbiAgICAgICAgICAgICAgICBhZGlwaXNjaW5nIGJpYmVuZHVtIGVzdCB1bHRyaWNpZXMgaW50ZWdlciBxdWlzLiBDdXJzdXMgZXVpc21vZFxyXG4gICAgICAgICAgICAgICAgcXVpcyB2aXZlcnJhIG5pYmggY3Jhcy4gTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzXHJcbiAgICAgICAgICAgICAgICBpbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtIGxlby4gTWF1cmlzIGNvbW1vZG8gcXVpcyBpbXBlcmRpZXRcclxuICAgICAgICAgICAgICAgIG1hc3NhIHRpbmNpZHVudC4gQ3JhcyB0aW5jaWR1bnQgbG9ib3J0aXMgZmV1Z2lhdCB2aXZhbXVzIGF0XHJcbiAgICAgICAgICAgICAgICBhdWd1ZS4gQXQgYXVndWUgZWdldCBhcmN1IGRpY3R1bSB2YXJpdXMgZHVpcyBhdCBjb25zZWN0ZXR1clxyXG4gICAgICAgICAgICAgICAgbG9yZW0uIFZlbGl0IHNlZCB1bGxhbWNvcnBlciBtb3JiaSB0aW5jaWR1bnQuIExvcmVtIGRvbmVjIG1hc3NhXHJcbiAgICAgICAgICAgICAgICBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgIENvbnNlcXVhdCBtYXVyaXMgbnVuYyBjb25ndWUgbmlzaSB2aXRhZSBzdXNjaXBpdC4gRnJpbmdpbGxhIGVzdFxyXG4gICAgICAgICAgICAgICAgdWxsYW1jb3JwZXIgZWdldCBudWxsYSBmYWNpbGlzaSBldGlhbSBkaWduaXNzaW0gZGlhbS4gUHVsdmluYXJcclxuICAgICAgICAgICAgICAgIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW0gbmVxdWUgdm9sdXRwYXQgYWMgdGluY2lkdW50LiBPcm5hcmVcclxuICAgICAgICAgICAgICAgIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhIHRlbGx1cy4gUHVydXMgc2l0IGFtZXRcclxuICAgICAgICAgICAgICAgIHZvbHV0cGF0IGNvbnNlcXVhdCBtYXVyaXMuIEVsZW1lbnR1bSBldSBmYWNpbGlzaXMgc2VkIG9kaW9cclxuICAgICAgICAgICAgICAgIG1vcmJpLiBFdWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cyBzZWQgdnVscHV0YXRlIG9kaW8uIE1vcmJpXHJcbiAgICAgICAgICAgICAgICB0aW5jaWR1bnQgb3JuYXJlIG1hc3NhIGVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluLlxyXG4gICAgICAgICAgICAgICAgSW4gaGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cyBvcmNpIGFjLlxyXG4gICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIG5lYyBuYW0gYWxpcXVhbSBzZW0gZXQgdG9ydG9yLiBIYWJpdGFudCBtb3JiaVxyXG4gICAgICAgICAgICAgICAgdHJpc3RpcXVlIHNlbmVjdHVzIGV0LiBBZGlwaXNjaW5nIGVsaXQgZHVpcyB0cmlzdGlxdWVcclxuICAgICAgICAgICAgICAgIHNvbGxpY2l0dWRpbiBuaWJoIHNpdC4gT3JuYXJlIGFlbmVhbiBldWlzbW9kIGVsZW1lbnR1bSBuaXNpIHF1aXNcclxuICAgICAgICAgICAgICAgIGVsZWlmZW5kLiBDb21tb2RvIHZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy5cclxuICAgICAgICAgICAgICAgIE51bGxhIHBvc3VlcmUgc29sbGljaXR1ZGluIGFsaXF1YW0gdWx0cmljZXMgc2FnaXR0aXMgb3JjaSBhLlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50KFwiY2hhbmdlLWxhbmd1YWdlXCIpfVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2NhbGU6IHN0YXRlLmNvbW1vbi5sb2NhbGUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihcImxheW91dFwiKShcclxuICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKExheW91dCkpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=