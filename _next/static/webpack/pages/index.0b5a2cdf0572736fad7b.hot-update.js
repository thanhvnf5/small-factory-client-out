webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/NavTabs/NavTabs.js":
/*!******************************************************!*\
  !*** ./src/components/Navigation/NavTabs/NavTabs.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/LinkTab */ "./src/components/UI/LinkTab.js");



var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\NavTabs\\NavTabs.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






function a11yProps(index) {
  return {
    id: "nav-tab-".concat(index),
    "aria-controls": "nav-tabpanel-".concat(index)
  };
}
/************************************************** styles */


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
    router.push(newValue);
  };
  /************************************************** render */


  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "fullWidth",
    value: value,
    onChange: handleChange,
    "aria-label": "nav tabs example",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "Home",
    href: "/"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "About",
    href: "/about"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })))));
};
/************************************************** propTypes */


_s(NavTabs, "BDkWVlEh8+DaKPHysXJ2gpEmtFI=", false, function () {
  return [useStyles];
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

/***/ }),

/***/ "./src/components/Navigation/Page/TabPage.js":
/*!***************************************************!*\
  !*** ./src/components/Navigation/Page/TabPage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hocs/Auxiliary/Auxiliary */ "./src/hocs/Auxiliary/Auxiliary.js");
var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\Page\\TabPage.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // /************************************************** styles */
// const useStyles = makeStyles((theme) => ({}));

/************************************************** Constructor */

/**
 * Description:
 * @param {} props
 */

var TabPage = function TabPage(props) {
  _s();

  // const classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var tabChangeHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (event, newValue) {
    router.push(newValue);
  });
  /************************************************** render */

  return __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    value: props.tabValue,
    onChange: tabChangeHandler,
    variant: "fullWidth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, props.routes.map(function (route, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: index,
      value: route.value,
      label: route.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    });
  })));
};
/************************************************** propTypes */


_s(TabPage, "SjnUcXpIybP5wlC9DAMO1FTDKZM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = TabPage;
TabPage.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (TabPage);

var _c;

$RefreshReg$(_c, "TabPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZUYWJzL05hdlRhYnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vUGFnZS9UYWJQYWdlLmpzIl0sIm5hbWVzIjpbImExMXlQcm9wcyIsImluZGV4IiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiTmF2VGFicyIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInJvdXRlciIsInB1c2giLCJUYWJQYWdlIiwidXNlUm91dGVyIiwidGFiQ2hhbmdlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwidGFiVmFsdWUiLCJyb3V0ZXMiLCJtYXAiLCJyb3V0ZSIsImxhYmVsIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQU87QUFDTEMsTUFBRSxvQkFBYUQsS0FBYixDQURHO0FBRUwsNENBQWlDQSxLQUFqQztBQUZLLEdBQVA7QUFJRDtBQUNEOzs7QUFDQSxJQUFNRSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKQyxxQkFBZSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFGdEM7QUFEaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFPQTs7QUFDQTs7Ozs7QUFJQSxJQUFNQyxPQUFPLEdB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ZXguMGI1YTJjZGYwNTcyNzM2ZmFkN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rVGFiIGZyb20gXCIuLi8uLi9VSS9MaW5rVGFiXCI7XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGBuYXYtdGFiLSR7aW5kZXh9YCxcclxuICAgIFwiYXJpYS1jb250cm9sc1wiOiBgbmF2LXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICB9O1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NyaXB0aW9uOlxyXG4gKiBAcGFyYW0ge30gcHJvcHNcclxuICovXHJcbmNvbnN0IE5hdlRhYnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgcm91dGVyLnB1c2gobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIm5hdiB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rVGFiIGxhYmVsPVwiSG9tZVwiIGhyZWY9XCIvXCIgey4uLmExMXlQcm9wcygwKX0gLz5cclxuICAgICAgICAgIDxMaW5rVGFiIGxhYmVsPVwiQWJvdXRcIiBocmVmPVwiL2Fib3V0XCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBwcm9wVHlwZXMgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlRhYnM7XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vLi4vLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcblxyXG4vLyAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbi8vIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe30pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY3JpcHRpb246XHJcbiAqIEBwYXJhbSB7fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgVGFiUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgdGFiQ2hhbmdlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKG5ld1ZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV4PlxyXG4gICAgICA8VGFic1xyXG4gICAgICAgIHZhbHVlPXtwcm9wcy50YWJWYWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17dGFiQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5yb3V0ZXMubWFwKChyb3V0ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxUYWIga2V5PXtpbmRleH0gdmFsdWU9e3JvdXRlLnZhbHVlfSBsYWJlbD17cm91dGUubGFiZWx9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvVGFicz5cclxuICAgIDwvQXV4PlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcblRhYlBhZ2UucHJvcFR5cGVzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9