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
      display: "float",
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
          lineNumber: 61,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: function theme(outerTheme) {
          return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_9__[locale]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
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
          lineNumber: 66,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: classes.container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }
      }, __jsx(_components_Navigation_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        openDrawerHandler: function openDrawerHandler(handler) {
          return _this2.drawerToogleHandler = handler;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }), __jsx("main", {
        className: classes.content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvTGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInN0eWxlcyIsInRoZW1lIiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhHcm93IiwiY29udGVudCIsIndpZHRoIiwicGFkZGluZyIsInNwYWNpbmciLCJMYXlvdXQiLCJ1bmRlZmluZWQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkcmF3ZXJUb29nbGVIYW5kbGVyIiwiY2xhc3NlcyIsInByb3BzIiwibG9jYWxlIiwib3V0ZXJUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwibG9jYWxlcyIsImN1cnJlbnRQYWdlIiwiZHJhd2VyVG9vZ2xlQ2xpY2siLCJsb2dvQ2xpY2siLCJoYW5kbGVyIiwidCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tb24iLCJ3aXRoVHJhbnNsYXRpb24iLCJjb25uZWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFDQTs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsR0FBc0I7QUFEeEIsS0FEaUI7QUFJekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsT0FEQTtBQUVUQyxjQUFRLEVBQUU7QUFGRCxLQVZjO0FBY3pCQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLE1BREE7QUFFUEMsYUFBTyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkO0FBRkY7QUFkZ0IsR0FBWjtBQUFBLENBQWY7QUFvQkE7O0FBQ0E7Ozs7O0lBR01DLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0ksRTs7OE5BRWNDLFM7OzROQUNGLFVBQUNDLEtBQUQsRUFBVztBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0EsWUFBS0MsbUJBQUwsQ0FBeUJILEtBQXpCO0FBQ0QsSzs7b05BRVcsVUFBQ0EsS0FBRCxFQUFXO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsSzs7Ozs7Ozs7QUFFRDs2QkFDUztBQUFBOztBQUNQRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBRE8sVUFFQ0UsT0FGRCxHQUVhLEtBQUtDLEtBRmxCLENBRUNELE9BRkQ7QUFHUCxVQUFJRSxNQUFNLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxNQUF4QjtBQUNBLGFBQ0UsTUFBQyw2Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUUsTUFBQyx1RUFBRDtBQUNFLGFBQUssRUFBRSxlQUFDQyxVQUFEO0FBQUEsaUJBQWdCQyxnRkFBYyxDQUFDRCxVQUFELEVBQWFFLHFEQUFPLENBQUNILE1BQUQsQ0FBcEIsQ0FBOUI7QUFBQSxTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRSxNQUFDLDZFQUFEO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdLLFdBRHZCO0FBRUUsZ0JBQVEsRUFBQyxPQUZYO0FBR0UsaUJBQVMsRUFBRU4sT0FBTyxDQUFDaEIsTUFIckI7QUFJRSx5QkFBaUIsRUFBRSxLQUFLdUIsaUJBSjFCO0FBS0UsaUJBQVMsRUFBRSxLQUFLQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsRUFVRTtBQUFLLGlCQUFTLEVBQUVSLE9BQU8sQ0FBQ2IsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscUZBQUQ7QUFDRSx5QkFBaUIsRUFBRSwyQkFBQ3NCLE9BQUQ7QUFBQSxpQkFDaEIsTUFBSSxDQUFDVixtQkFBTCxHQUEyQlUsT0FEWDtBQUFBLFNBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQU1FO0FBQU0saUJBQVMsRUFBRVQsT0FBTyxDQUFDVixPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0REFBRDtBQUFZLGlCQUFTLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsODBCQURGLEVBaUJFLE1BQUMsNERBQUQ7QUFBWSxpQkFBUyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG95QkFqQkYsRUFnQ0csS0FBS1csS0FBTCxDQUFXUyxDQUFYLENBQWEsaUJBQWIsQ0FoQ0gsQ0FORixDQVZGLENBRkYsQ0FERjtBQXlERDs7OztFQTNFa0JDLDZDQUFLLENBQUNDLFM7QUE4RTNCOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xaLFVBQU0sRUFBRVksS0FBSyxDQUFDQyxNQUFOLENBQWFiO0FBRGhCLEdBQVA7QUFHRCxDQUpEOztBQU1lYyw2SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUNiQyw0REFBTyxDQUFDSixlQUFELENBQVAsQ0FBeUJLLDRFQUFVLENBQUNwQyxNQUFELENBQVYsQ0FBbUJZLE1BQW5CLENBQXpCLENBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4wNmRmNmRlYTU5YjdlZTI3MTMwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2xvY2FsZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgd2l0aFN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0FwcEJhci9BcHBCYXJcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXJcIjtcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uL2kxOG5cIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICAvLyBjb250ZW50OiB7XHJcbiAgLy8gICBmbGV4R3JvdzogMSxcclxuICAvLyAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gIC8vICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgLy8gICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIC8vIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsb2F0XCIsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NpcHRpb246XHJcbiAqL1xyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge307XHJcblxyXG4gIGRyYXdlclRvb2dsZUhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcbiAgZHJhd2VyVG9vZ2xlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZHJhd2VyVG9vZ2xlQ2xpY2tcIik7XHJcbiAgICB0aGlzLmRyYXdlclRvb2dsZUhhbmRsZXIoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGxvZ29DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsb2dvQ2xpY2tcIik7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0IHJlbmRlclwiKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBsb2NhbGUgPSB0aGlzLnByb3BzLmxvY2FsZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgICAgdGhlbWU9eyhvdXRlclRoZW1lKSA9PiBjcmVhdGVNdWlUaGVtZShvdXRlclRoZW1lLCBsb2NhbGVzW2xvY2FsZV0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgICAgdGFiVmFsdWU9e3RoaXMucHJvcHMuY3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxyXG4gICAgICAgICAgICBkcmF3ZXJUb29nbGVDbGljaz17dGhpcy5kcmF3ZXJUb29nbGVDbGlja31cclxuICAgICAgICAgICAgbG9nb0NsaWNrPXt0aGlzLmxvZ29DbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TGVmdERyYXdlclxyXG4gICAgICAgICAgICAgIG9wZW5EcmF3ZXJIYW5kbGVyPXsoaGFuZGxlcikgPT5cclxuICAgICAgICAgICAgICAgICh0aGlzLmRyYXdlclRvb2dsZUhhbmRsZXIgPSBoYW5kbGVyKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cclxuICAgICAgICAgICAgICAgIFJob25jdXMgZG9sb3IgcHVydXMgbm9uIGVuaW0gcHJhZXNlbnQgZWxlbWVudHVtIGZhY2lsaXNpcyBsZW9cclxuICAgICAgICAgICAgICAgIHZlbC4gUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldC4gU2VtcGVyIHJpc3VzIGluXHJcbiAgICAgICAgICAgICAgICBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzLiBDb252YWxsaXMgY29udmFsbGlzXHJcbiAgICAgICAgICAgICAgICB0ZWxsdXMgaWQgaW50ZXJkdW0gdmVsaXQgbGFvcmVldCBpZCBkb25lYyB1bHRyaWNlcy4gT2RpbyBtb3JiaVxyXG4gICAgICAgICAgICAgICAgcXVpcyBjb21tb2RvIG9kaW8gYWVuZWFuIHNlZCBhZGlwaXNjaW5nLiBBbWV0IG5pc2wgc3VzY2lwaXRcclxuICAgICAgICAgICAgICAgIGFkaXBpc2NpbmcgYmliZW5kdW0gZXN0IHVsdHJpY2llcyBpbnRlZ2VyIHF1aXMuIEN1cnN1cyBldWlzbW9kXHJcbiAgICAgICAgICAgICAgICBxdWlzIHZpdmVycmEgbmliaCBjcmFzLiBNZXR1cyB2dWxwdXRhdGUgZXUgc2NlbGVyaXNxdWUgZmVsaXNcclxuICAgICAgICAgICAgICAgIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW0gbGVvLiBNYXVyaXMgY29tbW9kbyBxdWlzIGltcGVyZGlldFxyXG4gICAgICAgICAgICAgICAgbWFzc2EgdGluY2lkdW50LiBDcmFzIHRpbmNpZHVudCBsb2JvcnRpcyBmZXVnaWF0IHZpdmFtdXMgYXRcclxuICAgICAgICAgICAgICAgIGF1Z3VlLiBBdCBhdWd1ZSBlZ2V0IGFyY3UgZGljdHVtIHZhcml1cyBkdWlzIGF0IGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgICAgICBsb3JlbS4gVmVsaXQgc2VkIHVsbGFtY29ycGVyIG1vcmJpIHRpbmNpZHVudC4gTG9yZW0gZG9uZWMgbWFzc2FcclxuICAgICAgICAgICAgICAgIHNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYy5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgICAgQ29uc2VxdWF0IG1hdXJpcyBudW5jIGNvbmd1ZSBuaXNpIHZpdGFlIHN1c2NpcGl0LiBGcmluZ2lsbGEgZXN0XHJcbiAgICAgICAgICAgICAgICB1bGxhbWNvcnBlciBlZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtLiBQdWx2aW5hclxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdCBhYyB0aW5jaWR1bnQuIE9ybmFyZVxyXG4gICAgICAgICAgICAgICAgc3VzcGVuZGlzc2Ugc2VkIG5pc2kgbGFjdXMgc2VkIHZpdmVycmEgdGVsbHVzLiBQdXJ1cyBzaXQgYW1ldFxyXG4gICAgICAgICAgICAgICAgdm9sdXRwYXQgY29uc2VxdWF0IG1hdXJpcy4gRWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2Rpb1xyXG4gICAgICAgICAgICAgICAgbW9yYmkuIEV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzIHNlZCB2dWxwdXRhdGUgb2Rpby4gTW9yYmlcclxuICAgICAgICAgICAgICAgIHRpbmNpZHVudCBvcm5hcmUgbWFzc2EgZWdldCBlZ2VzdGFzIHB1cnVzIHZpdmVycmEgYWNjdW1zYW4gaW4uXHJcbiAgICAgICAgICAgICAgICBJbiBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzIG9yY2kgYWMuXHJcbiAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgbmVjIG5hbSBhbGlxdWFtIHNlbSBldCB0b3J0b3IuIEhhYml0YW50IG1vcmJpXHJcbiAgICAgICAgICAgICAgICB0cmlzdGlxdWUgc2VuZWN0dXMgZXQuIEFkaXBpc2NpbmcgZWxpdCBkdWlzIHRyaXN0aXF1ZVxyXG4gICAgICAgICAgICAgICAgc29sbGljaXR1ZGluIG5pYmggc2l0LiBPcm5hcmUgYWVuZWFuIGV1aXNtb2QgZWxlbWVudHVtIG5pc2kgcXVpc1xyXG4gICAgICAgICAgICAgICAgZWxlaWZlbmQuIENvbW1vZG8gdml2ZXJyYSBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLlxyXG4gICAgICAgICAgICAgICAgTnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW4gYWxpcXVhbSB1bHRyaWNlcyBzYWdpdHRpcyBvcmNpIGEuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnQoXCJjaGFuZ2UtbGFuZ3VhZ2VcIil9XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2FsZTogc3RhdGUuY29tbW9uLmxvY2FsZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFwibGF5b3V0XCIpKFxyXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0KSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==