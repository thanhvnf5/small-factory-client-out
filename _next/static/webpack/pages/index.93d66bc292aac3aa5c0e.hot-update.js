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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UI_LinkTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UI/LinkTab */ "./src/components/UI/LinkTab.js");



var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\NavTabs\\NavTabs.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(0),
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
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "fullWidth",
    value: props.tabValue,
    onChange: handleChange,
    "aria-label": "nav tabs example",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "Home",
    href: "/"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "About",
    href: "/about"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })))));
};
/************************************************** propTypes */


_s(NavTabs, "T1FEr9VIbuitSe7+SoxXzCIxDl4=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZUYWJzL05hdlRhYnMuanMiXSwibmFtZXMiOlsiYTExeVByb3BzIiwiaW5kZXgiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJOYXZUYWJzIiwicHJvcHMiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwicHVzaCIsInRhYlZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixTQUFPO0FBQ0xDLE1BQUUsb0JBQWFELEtBQWIsQ0FERztBQUVMLDRDQUFpQ0EsS0FBakM7QUFGSyxHQUFQO0FBSUQ7QUFDRDs7O0FBQ0EsSUFBTUUsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMscUJBQWUsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBRnRDO0FBRGlDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBT0E7O0FBQ0E7Ozs7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLE1BQU1ZLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRnlCLHdCQUdDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUhEO0FBQUE7QUFBQSxNQUdsQkMsS0FIa0I7QUFBQSxNQUdYQyxRQUhXOztBQUt6QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDeENILFlBQVEsQ0FBQ0csUUFBRCxDQUFSO0FBQ0FSLFVBQU0sQ0FBQ1MsSUFBUCxDQUFZRCxRQUFaO0FBQ0QsR0FIRDtBQUtBOzs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFVCxPQUFPLENBQUNSLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUVPLEtBQUssQ0FBQ1ksUUFGZjtBQUdFLFlBQVEsRUFBRUosWUFIWjtBQUlFLGtCQUFXLGtCQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLG1EQUFEO0FBQVMsU0FBSyxFQUFDLE1BQWY7QUFBc0IsUUFBSSxFQUFDO0FBQTNCLEtBQW1DckIsU0FBUyxDQUFDLENBQUQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GLEVBT0UsTUFBQyxtREFBRDtBQUFTLFNBQUssRUFBQyxPQUFmO0FBQXVCLFFBQUksRUFBQztBQUE1QixLQUF5Q0EsU0FBUyxDQUFDLENBQUQsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVBGLENBREYsQ0FERixDQURGO0FBZUQsQ0ExQkQ7QUE0QkE7OztHQTVCTVksTztVQUNZVCxTLEVBQ0RhLHFEOzs7S0FGWEosTztBQThCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTNkNjZiYzI5MmFhYzNhYTVjMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua1RhYiBmcm9tIFwiLi4vLi4vVUkvTGlua1RhYlwiO1xyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBgbmF2LXRhYi0ke2luZGV4fWAsXHJcbiAgICBcImFyaWEtY29udHJvbHNcIjogYG5hdi10YWJwYW5lbC0ke2luZGV4fWAsXHJcbiAgfTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjcmlwdGlvbjpcclxuICogQHBhcmFtIHt9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBOYXZUYWJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIHJvdXRlci5wdXNoKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnRhYlZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJuYXYgdGFicyBleGFtcGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlua1RhYiBsYWJlbD1cIkhvbWVcIiBocmVmPVwiL1wiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICA8TGlua1RhYiBsYWJlbD1cIkFib3V0XCIgaHJlZj1cIi9hYm91dFwiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZUYWJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9