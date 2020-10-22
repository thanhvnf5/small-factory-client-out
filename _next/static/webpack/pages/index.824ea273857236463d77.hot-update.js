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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvTGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInN0eWxlcyIsInRoZW1lIiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhHcm93IiwiY29udGVudCIsIndpZHRoIiwicGFkZGluZyIsInNwYWNpbmciLCJMYXlvdXQiLCJ1bmRlZmluZWQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkcmF3ZXJUb29nbGVIYW5kbGVyIiwiY2xhc3NlcyIsInByb3BzIiwibG9jYWxlIiwib3V0ZXJUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwibG9jYWxlcyIsImN1cnJlbnRQYWdlIiwiZHJhd2VyVG9vZ2xlQ2xpY2siLCJsb2dvQ2xpY2siLCJoYW5kbGVyIiwidCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tb24iLCJ3aXRoVHJhbnNsYXRpb24iLCJjb25uZWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFDQTs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsR0FBc0I7QUFEeEIsS0FEaUI7QUFJekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFRLEVBQUU7QUFGRCxLQVZjO0FBY3pCQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLE1BREE7QUFFUEMsYUFBTyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkO0FBRkY7QUFkZ0IsR0FBWjtBQUFBLENBQWY7QUFvQkE7O0FBQ0E7Ozs7O0lBR01DLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0ksRTs7OE5BRWNDLFM7OzROQUNGLFVBQUNDLEtBQUQsRUFBVztBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0EsWUFBS0MsbUJBQUwsQ0FBeUJILEtBQXpCO0FBQ0QsSzs7b05BRVcsVUFBQ0EsS0FBRCxFQUFXO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsSzs7Ozs7Ozs7QUFFRDs2QkFDUztBQUFBOztBQUNQRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBRE8sVUFFQ0UsT0FGRCxHQUVhLEtBQUtDLEtBRmxCLENBRUNELE9BRkQ7QUFHUCxVQUFJRSxNQUFNLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxNQUF4QjtBQUNBLGFBQ0UsTUFBQyw2Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUUsTUFBQyx1RUFBRDtBQUNFLGFBQUssRUFBRSxlQUFDQyxVQUFEO0FBQUEsaUJBQWdCQyxnRkFBYyxDQUFDRCxVQUFELEVBQWFFLHFEQUFPLENBQUNILE1BQUQsQ0FBcEIsQ0FBOUI7QUFBQSxTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRSxNQUFDLDZFQUFEO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdLLFdBRHZCO0FBRUUsZ0JBQVEsRUFBQyxPQUZYO0FBR0UsaUJBQVMsRUFBRU4sT0FBTyxDQUFDaEIsTUFIckI7QUFJRSx5QkFBaUIsRUFBRSxLQUFLdUIsaUJBSjFCO0FBS0UsaUJBQVMsRUFBRSxLQUFLQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsRUFVRTtBQUFLLGlCQUFTLEVBQUVSLE9BQU8sQ0FBQ2IsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscUZBQUQ7QUFDRSx5QkFBaUIsRUFBRSwyQkFBQ3NCLE9BQUQ7QUFBQSxpQkFDaEIsTUFBSSxDQUFDVixtQkFBTCxHQUEyQlUsT0FEWDtBQUFBLFNBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQU1FO0FBQU0saUJBQVMsRUFBRVQsT0FBTyxDQUFDVixPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0REFBRDtBQUFZLGlCQUFTLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsODBCQURGLEVBaUJFLE1BQUMsNERBQUQ7QUFBWSxpQkFBUyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG95QkFqQkYsRUFnQ0csS0FBS1csS0FBTCxDQUFXUyxDQUFYLENBQWEsaUJBQWIsQ0FoQ0gsQ0FORixDQVZGLENBRkYsQ0FERjtBQXlERDs7OztFQTNFa0JDLDZDQUFLLENBQUNDLFM7QUE4RTNCOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xaLFVBQU0sRUFBRVksS0FBSyxDQUFDQyxNQUFOLENBQWFiO0FBRGhCLEdBQVA7QUFHRCxDQUpEOztBQU1lYyw2SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUNiQyw0REFBTyxDQUFDSixlQUFELENBQVAsQ0FBeUJLLDRFQUFVLENBQUNwQyxNQUFELENBQVYsQ0FBbUJZLE1BQW5CLENBQXpCLENBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MjRlYTI3Mzg1NzIzNjQ2M2Q3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2xvY2FsZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgd2l0aFN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0FwcEJhci9BcHBCYXJcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXJcIjtcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uL2kxOG5cIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICAvLyBjb250ZW50OiB7XHJcbiAgLy8gICBmbGV4R3JvdzogMSxcclxuICAvLyAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gIC8vICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgLy8gICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIC8vIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY2lwdGlvbjpcclxuICovXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fTtcclxuXHJcbiAgZHJhd2VyVG9vZ2xlSGFuZGxlciA9IHVuZGVmaW5lZDtcclxuICBkcmF3ZXJUb29nbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJkcmF3ZXJUb29nbGVDbGlja1wiKTtcclxuICAgIHRoaXMuZHJhd2VyVG9vZ2xlSGFuZGxlcihldmVudCk7XHJcbiAgfTtcclxuXHJcbiAgbG9nb0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ29DbGlja1wiKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQgcmVuZGVyXCIpO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgICB0aGVtZT17KG91dGVyVGhlbWUpID0+IGNyZWF0ZU11aVRoZW1lKG91dGVyVGhlbWUsIGxvY2FsZXNbbG9jYWxlXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFwcEJhclxyXG4gICAgICAgICAgICB0YWJWYWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9XHJcbiAgICAgICAgICAgIGRyYXdlclRvb2dsZUNsaWNrPXt0aGlzLmRyYXdlclRvb2dsZUNsaWNrfVxyXG4gICAgICAgICAgICBsb2dvQ2xpY2s9e3RoaXMubG9nb0NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxMZWZ0RHJhd2VyXHJcbiAgICAgICAgICAgICAgb3BlbkRyYXdlckhhbmRsZXI9eyhoYW5kbGVyKSA9PlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZHJhd2VyVG9vZ2xlSGFuZGxlciA9IGhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxyXG4gICAgICAgICAgICAgICAgUmhvbmN1cyBkb2xvciBwdXJ1cyBub24gZW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlb1xyXG4gICAgICAgICAgICAgICAgdmVsLiBSaXN1cyBhdCB1bHRyaWNlcyBtaSB0ZW1wdXMgaW1wZXJkaWV0LiBTZW1wZXIgcmlzdXMgaW5cclxuICAgICAgICAgICAgICAgIGhlbmRyZXJpdCBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMuIENvbnZhbGxpcyBjb252YWxsaXNcclxuICAgICAgICAgICAgICAgIHRlbGx1cyBpZCBpbnRlcmR1bSB2ZWxpdCBsYW9yZWV0IGlkIGRvbmVjIHVsdHJpY2VzLiBPZGlvIG1vcmJpXHJcbiAgICAgICAgICAgICAgICBxdWlzIGNvbW1vZG8gb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcuIEFtZXQgbmlzbCBzdXNjaXBpdFxyXG4gICAgICAgICAgICAgICAgYWRpcGlzY2luZyBiaWJlbmR1bSBlc3QgdWx0cmljaWVzIGludGVnZXIgcXVpcy4gQ3Vyc3VzIGV1aXNtb2RcclxuICAgICAgICAgICAgICAgIHF1aXMgdml2ZXJyYSBuaWJoIGNyYXMuIE1ldHVzIHZ1bHB1dGF0ZSBldSBzY2VsZXJpc3F1ZSBmZWxpc1xyXG4gICAgICAgICAgICAgICAgaW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8uIE1hdXJpcyBjb21tb2RvIHF1aXMgaW1wZXJkaWV0XHJcbiAgICAgICAgICAgICAgICBtYXNzYSB0aW5jaWR1bnQuIENyYXMgdGluY2lkdW50IGxvYm9ydGlzIGZldWdpYXQgdml2YW11cyBhdFxyXG4gICAgICAgICAgICAgICAgYXVndWUuIEF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW0gdmFyaXVzIGR1aXMgYXQgY29uc2VjdGV0dXJcclxuICAgICAgICAgICAgICAgIGxvcmVtLiBWZWxpdCBzZWQgdWxsYW1jb3JwZXIgbW9yYmkgdGluY2lkdW50LiBMb3JlbSBkb25lYyBtYXNzYVxyXG4gICAgICAgICAgICAgICAgc2FwaWVuIGZhdWNpYnVzIGV0IG1vbGVzdGllIGFjLlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgICBDb25zZXF1YXQgbWF1cmlzIG51bmMgY29uZ3VlIG5pc2kgdml0YWUgc3VzY2lwaXQuIEZyaW5naWxsYSBlc3RcclxuICAgICAgICAgICAgICAgIHVsbGFtY29ycGVyIGVnZXQgbnVsbGEgZmFjaWxpc2kgZXRpYW0gZGlnbmlzc2ltIGRpYW0uIFB1bHZpbmFyXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50dW0gaW50ZWdlciBlbmltIG5lcXVlIHZvbHV0cGF0IGFjIHRpbmNpZHVudC4gT3JuYXJlXHJcbiAgICAgICAgICAgICAgICBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cyBzZWQgdml2ZXJyYSB0ZWxsdXMuIFB1cnVzIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICB2b2x1dHBhdCBjb25zZXF1YXQgbWF1cmlzLiBFbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZCBvZGlvXHJcbiAgICAgICAgICAgICAgICBtb3JiaS4gRXVpc21vZCBsYWNpbmlhIGF0IHF1aXMgcmlzdXMgc2VkIHZ1bHB1dGF0ZSBvZGlvLiBNb3JiaVxyXG4gICAgICAgICAgICAgICAgdGluY2lkdW50IG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMgcHVydXMgdml2ZXJyYSBhY2N1bXNhbiBpbi5cclxuICAgICAgICAgICAgICAgIEluIGhlbmRyZXJpdCBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYy5cclxuICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBuZWMgbmFtIGFsaXF1YW0gc2VtIGV0IHRvcnRvci4gSGFiaXRhbnQgbW9yYmlcclxuICAgICAgICAgICAgICAgIHRyaXN0aXF1ZSBzZW5lY3R1cyBldC4gQWRpcGlzY2luZyBlbGl0IGR1aXMgdHJpc3RpcXVlXHJcbiAgICAgICAgICAgICAgICBzb2xsaWNpdHVkaW4gbmliaCBzaXQuIE9ybmFyZSBhZW5lYW4gZXVpc21vZCBlbGVtZW50dW0gbmlzaSBxdWlzXHJcbiAgICAgICAgICAgICAgICBlbGVpZmVuZC4gQ29tbW9kbyB2aXZlcnJhIG1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzIHZlbCBmYWNpbGlzaXMuXHJcbiAgICAgICAgICAgICAgICBOdWxsYSBwb3N1ZXJlIHNvbGxpY2l0dWRpbiBhbGlxdWFtIHVsdHJpY2VzIHNhZ2l0dGlzIG9yY2kgYS5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMudChcImNoYW5nZS1sYW5ndWFnZVwiKX1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYWxlOiBzdGF0ZS5jb21tb24ubG9jYWxlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oXCJsYXlvdXRcIikoXHJcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXQpKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9