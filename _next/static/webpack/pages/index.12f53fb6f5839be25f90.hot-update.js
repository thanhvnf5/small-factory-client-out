webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/NavTabs/NavTabs.js":
/*!******************************************************!*\
  !*** ./src/components/Navigation/NavTabs/NavTabs.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_LinkTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/LinkTab */ "./src/components/UI/LinkTab.js");
var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\NavTabs\\NavTabs.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  };
});
/************************************************** Constructor */

/**
 * Description:
 * @param {} props
 */

var NavTabs = function NavTabs(props) {
  _s();

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var tabChangeHandler = function tabChangeHandler(event, newValue) {
    router.push(newValue);
  };
  /************************************************** render */


  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "fullWidth",
    value: props.tabValue,
    onChange: tabChangeHandler,
    "aria-label": "nav tabs example",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "/",
    label: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "/about",
    label: "About",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))));
};
/************************************************** propTypes */


_s(NavTabs, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = NavTabs;
/* harmony default export */ __webpack_exports__["default"] = (NavTabs);

var _c;

$RefreshReg$(_c, "NavTabs");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZUYWJzL05hdlRhYnMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIk5hdlRhYnMiLCJwcm9wcyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0YWJDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInB1c2giLCJ0YWJWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMscUJBQWUsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBRnRDO0FBRGlDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBT0E7O0FBQ0E7Ozs7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLE1BQU1ZLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDNUNKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFZRCxRQUFaO0FBQ0QsR0FGRDtBQUlBOzs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFTCxPQUFPLENBQUNSLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUVPLEtBQUssQ0FBQ1EsUUFGZjtBQUdFLFlBQVEsRUFBRUosZ0JBSFo7QUFJRSxrQkFBVyxrQkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxtREFBRDtBQUFTLFNBQUssRUFBQyxHQUFmO0FBQW1CLFNBQUssRUFBQyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLG1EQUFEO0FBQVMsU0FBSyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFDLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLENBREYsQ0FERjtBQWVELENBeEJEO0FBMEJBOzs7R0ExQk1MLE87VUFDWVQsUyxFQUNEYSxxRDs7O0tBRlhKLE87QUE0QlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEyZjUzZmI2ZjU4MzliZTI1ZjkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmtUYWIgZnJvbSBcIi4uLy4uL1VJL0xpbmtUYWJcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NyaXB0aW9uOlxyXG4gKiBAcGFyYW0ge30gcHJvcHNcclxuICovXHJcbmNvbnN0IE5hdlRhYnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHRhYkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy50YWJWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0YWJDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIm5hdiB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rVGFiIHZhbHVlPVwiL1wiIGxhYmVsPVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICA8TGlua1RhYiB2YWx1ZT1cIi9hYm91dFwiIGxhYmVsPVwiQWJvdXRcIiAvPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VGFicztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==