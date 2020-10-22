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
      console.log("drawerToogleClick");

      _this.setState(function (prevState) {
        return {
          openDrawer: !prevState.openDrawer
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logoClick", function (event) {
      console.log("logoClick");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvTGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInN0eWxlcyIsInRoZW1lIiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwiY29udGVudCIsImZsZXhHcm93Iiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsInNwYWNpbmciLCJMYXlvdXQiLCJvcGVuRHJhd2VyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJuZXh0Q29udGV4dCIsImNsYXNzZXMiLCJwcm9wcyIsImxvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJjdXJyZW50UGFnZSIsImRyYXdlclRvb2dsZUNsaWNrIiwibG9nb0NsaWNrIiwic3RhdGUiLCJ0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJ3aXRoVHJhbnNsYXRpb24iLCJjb25uZWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFDQTs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsR0FBc0I7QUFEeEIsS0FEaUI7QUFJekJDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUUsQ0FESDtBQUVQQyxXQUFLLHdCQUFpQlIsV0FBakIsUUFGRTtBQUdQUyxnQkFBVSxFQUFFVCxXQUhMO0FBSVBVLGFBQU8sRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZDtBQUpGO0FBSmdCLEdBQVo7QUFBQSxDQUFmO0FBWUE7O0FBQ0E7Ozs7O0lBR01DLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZ0JBQVUsRUFBRTtBQUROLEs7OzROQUdZLFVBQUNDLEtBQUQsRUFBVztBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjLFVBQUNDLFNBQUQ7QUFBQSxlQUFnQjtBQUFFTCxvQkFBVSxFQUFFLENBQUNLLFNBQVMsQ0FBQ0w7QUFBekIsU0FBaEI7QUFBQSxPQUFkO0FBQ0QsSzs7b05BQ1csVUFBQ0MsS0FBRCxFQUFXO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsSzs7Ozs7OzswQ0FFcUJHLFMsRUFBV0MsUyxFQUFXQyxXLEVBQWE7QUFDdkQsYUFBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs2QkFDUztBQUNQTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBRE8sVUFFQ00sT0FGRCxHQUVhLEtBQUtDLEtBRmxCLENBRUNELE9BRkQ7QUFHUCxVQUFJRSxNQUFNLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxNQUF4QjtBQUNBLGFBQ0UsTUFBQyw2Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUUsTUFBQyx1RUFBRDtBQUNFLGFBQUssRUFBRSxlQUFDQyxVQUFEO0FBQUEsaUJBQWdCQyxnRkFBYyxDQUFDRCxVQUFELEVBQWFFLHFEQUFPLENBQUNILE1BQUQsQ0FBcEIsQ0FBOUI7QUFBQSxTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRSxNQUFDLDZFQUFEO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdLLFdBRHZCO0FBRUUsZ0JBQVEsRUFBQyxPQUZYO0FBR0UsaUJBQVMsRUFBRU4sT0FBTyxDQUFDbkIsTUFIckI7QUFJRSx5QkFBaUIsRUFBRSxLQUFLMEIsaUJBSjFCO0FBS0UsaUJBQVMsRUFBRSxLQUFLQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsRUFVRSxNQUFDLHFGQUFEO0FBQVksa0JBQVUsRUFBRSxLQUFLQyxLQUFMLENBQVdsQixVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkYsRUFXRTtBQUFNLGlCQUFTLEVBQUVTLE9BQU8sQ0FBQ2hCLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDREQUFEO0FBQVksaUJBQVMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4MEJBREYsRUFnQkUsTUFBQyw0REFBRDtBQUFZLGlCQUFTLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb3lCQWhCRixFQStCRyxLQUFLaUIsS0FBTCxDQUFXUyxDQUFYLENBQWEsaUJBQWIsQ0EvQkgsQ0FYRixDQUZGLENBREY7QUFrREQ7Ozs7RUF2RWtCQyw2Q0FBSyxDQUFDQyxTO0FBMEUzQjs7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMUCxVQUFNLEVBQUVPLEtBQUssQ0FBQ0ssTUFBTixDQUFhWjtBQURoQixHQUFQO0FBR0QsQ0FKRDs7QUFNZWEsNkhBQWUsQ0FBQyxRQUFELENBQWYsQ0FDYkMsNERBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCSSw0RUFBVSxDQUFDdEMsTUFBRCxDQUFWLENBQW1CVyxNQUFuQixDQUF6QixDQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmRhZTE3NjZjMDgwNDk3ODgzOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgKiBhcyBsb2NhbGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9sb2NhbGVcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVNdWlUaGVtZSxcclxuICBUaGVtZVByb3ZpZGVyLFxyXG4gIHdpdGhTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyXCI7XHJcbmltcG9ydCBMZWZ0RHJhd2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24vU2lkZURyYXdlci9MZWZ0RHJhd2VyXCI7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi8uLi9pMThuXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDIwMDtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY2lwdGlvbjpcclxuICovXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBvcGVuRHJhd2VyOiBmYWxzZSxcclxuICB9O1xyXG4gIGRyYXdlclRvb2dsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRyYXdlclRvb2dsZUNsaWNrXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyBvcGVuRHJhd2VyOiAhcHJldlN0YXRlLm9wZW5EcmF3ZXIgfSkpO1xyXG4gIH07XHJcbiAgbG9nb0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ29DbGlja1wiKTtcclxuICB9O1xyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQgcmVuZGVyXCIpO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgICB0aGVtZT17KG91dGVyVGhlbWUpID0+IGNyZWF0ZU11aVRoZW1lKG91dGVyVGhlbWUsIGxvY2FsZXNbbG9jYWxlXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFwcEJhclxyXG4gICAgICAgICAgICB0YWJWYWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9XHJcbiAgICAgICAgICAgIGRyYXdlclRvb2dsZUNsaWNrPXt0aGlzLmRyYXdlclRvb2dsZUNsaWNrfVxyXG4gICAgICAgICAgICBsb2dvQ2xpY2s9e3RoaXMubG9nb0NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMZWZ0RHJhd2VyIG9wZW5EcmF3ZXI9e3RoaXMuc3RhdGUub3BlbkRyYXdlcn0gLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgUmhvbmN1cyBkb2xvciBwdXJ1cyBub24gZW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlbyB2ZWwuXHJcbiAgICAgICAgICAgICAgUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldC4gU2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdFxyXG4gICAgICAgICAgICAgIGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cy4gQ29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWRcclxuICAgICAgICAgICAgICBpbnRlcmR1bSB2ZWxpdCBsYW9yZWV0IGlkIGRvbmVjIHVsdHJpY2VzLiBPZGlvIG1vcmJpIHF1aXMgY29tbW9kb1xyXG4gICAgICAgICAgICAgIG9kaW8gYWVuZWFuIHNlZCBhZGlwaXNjaW5nLiBBbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bVxyXG4gICAgICAgICAgICAgIGVzdCB1bHRyaWNpZXMgaW50ZWdlciBxdWlzLiBDdXJzdXMgZXVpc21vZCBxdWlzIHZpdmVycmEgbmliaCBjcmFzLlxyXG4gICAgICAgICAgICAgIE1ldHVzIHZ1bHB1dGF0ZSBldSBzY2VsZXJpc3F1ZSBmZWxpcyBpbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtXHJcbiAgICAgICAgICAgICAgbGVvLiBNYXVyaXMgY29tbW9kbyBxdWlzIGltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQuIENyYXMgdGluY2lkdW50XHJcbiAgICAgICAgICAgICAgbG9ib3J0aXMgZmV1Z2lhdCB2aXZhbXVzIGF0IGF1Z3VlLiBBdCBhdWd1ZSBlZ2V0IGFyY3UgZGljdHVtXHJcbiAgICAgICAgICAgICAgdmFyaXVzIGR1aXMgYXQgY29uc2VjdGV0dXIgbG9yZW0uIFZlbGl0IHNlZCB1bGxhbWNvcnBlciBtb3JiaVxyXG4gICAgICAgICAgICAgIHRpbmNpZHVudC4gTG9yZW0gZG9uZWMgbWFzc2Egc2FwaWVuIGZhdWNpYnVzIGV0IG1vbGVzdGllIGFjLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICBDb25zZXF1YXQgbWF1cmlzIG51bmMgY29uZ3VlIG5pc2kgdml0YWUgc3VzY2lwaXQuIEZyaW5naWxsYSBlc3RcclxuICAgICAgICAgICAgICB1bGxhbWNvcnBlciBlZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtLiBQdWx2aW5hclxyXG4gICAgICAgICAgICAgIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW0gbmVxdWUgdm9sdXRwYXQgYWMgdGluY2lkdW50LiBPcm5hcmVcclxuICAgICAgICAgICAgICBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cyBzZWQgdml2ZXJyYSB0ZWxsdXMuIFB1cnVzIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgdm9sdXRwYXQgY29uc2VxdWF0IG1hdXJpcy4gRWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaS5cclxuICAgICAgICAgICAgICBFdWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cyBzZWQgdnVscHV0YXRlIG9kaW8uIE1vcmJpIHRpbmNpZHVudFxyXG4gICAgICAgICAgICAgIG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMgcHVydXMgdml2ZXJyYSBhY2N1bXNhbiBpbi4gSW4gaGVuZHJlcml0XHJcbiAgICAgICAgICAgICAgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzIG9yY2kgYWMuIFBlbGxlbnRlc3F1ZSBuZWMgbmFtXHJcbiAgICAgICAgICAgICAgYWxpcXVhbSBzZW0gZXQgdG9ydG9yLiBIYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQuXHJcbiAgICAgICAgICAgICAgQWRpcGlzY2luZyBlbGl0IGR1aXMgdHJpc3RpcXVlIHNvbGxpY2l0dWRpbiBuaWJoIHNpdC4gT3JuYXJlXHJcbiAgICAgICAgICAgICAgYWVuZWFuIGV1aXNtb2QgZWxlbWVudHVtIG5pc2kgcXVpcyBlbGVpZmVuZC4gQ29tbW9kbyB2aXZlcnJhXHJcbiAgICAgICAgICAgICAgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy4gTnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW5cclxuICAgICAgICAgICAgICBhbGlxdWFtIHVsdHJpY2VzIHNhZ2l0dGlzIG9yY2kgYS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50KFwiY2hhbmdlLWxhbmd1YWdlXCIpfVxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogc3RhdGUuY29tbW9uLmxvY2FsZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFwibGF5b3V0XCIpKFxyXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0KSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==