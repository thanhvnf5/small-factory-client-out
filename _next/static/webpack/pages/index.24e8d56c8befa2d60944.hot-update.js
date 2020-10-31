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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/LinkTab */ "./src/components/UI/LinkTab.js");
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
  var tabChangeHandler = react__WEBPACK_IMPORTED_MODULE_4___default.a.useCallback(function (event, newValue) {
    router.push(newValue);
  }, []);
  /************************************************** render */

  console.log("NavTabs render");
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "/",
    value: "/",
    label: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), props.isAuthenticated ? __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "/catalog",
    value: "/catalog",
    label: "Catalog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }) : __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "/sigin",
    value: "/sigin",
    label: "Sigin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "/about",
    value: "/about",
    label: "About",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }))));
};
/************************************************** propTypes */


_s(NavTabs, "/xC9J+FGzivJ9cldNdFlqr7JR6c=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = NavTabs;
NavTabs.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  tabValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZUYWJzL05hdlRhYnMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIk5hdlRhYnMiLCJwcm9wcyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0YWJDaGFuZ2VIYW5kbGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwibmV3VmFsdWUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRhYlZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLHFCQUFlLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUZ0QztBQURpQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQU9BOztBQUNBOzs7OztBQUlBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QixNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxNQUFNWSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUdDLDRDQUFLLENBQUNDLFdBQU4sQ0FBa0IsVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQzlETixVQUFNLENBQUNPLElBQVAsQ0FBWUQsUUFBWjtBQUNELEdBRndCLEVBRXRCLEVBRnNCLENBQXpCO0FBSUE7O0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRVYsT0FBTyxDQUFDUixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFFTyxLQUFLLENBQUNZLFFBRmY7QUFHRSxZQUFRLEVBQUVSLGdCQUhaO0FBSUUsa0JBQVcsa0JBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsbURBQUQ7QUFBUyxPQUFHLEVBQUMsR0FBYjtBQUFpQixTQUFLLEVBQUMsR0FBdkI7QUFBMkIsU0FBSyxFQUFDLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVVHSixLQUFLLENBQUNhLGVBQU4sR0FDQyxNQUFDLG1EQUFEO0FBQVMsT0FBRyxFQUFDLFVBQWI7QUFBd0IsU0FBSyxFQUFDLFVBQTlCO0FBQXlDLFNBQUssRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQyxNQUFDLG1EQUFEO0FBQVMsT0FBRyxFQUFDLFFBQWI7QUFBc0IsU0FBSyxFQUFDLFFBQTVCO0FBQXFDLFNBQUssRUFBQyxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFnQkUsTUFBQyxtREFBRDtBQUFTLE9BQUcsRUFBQyxRQUFiO0FBQXNCLFNBQUssRUFBQyxRQUE1QjtBQUFxQyxTQUFLLEVBQUMsT0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQURGLENBREYsQ0FERjtBQXdCRCxDQWxDRDtBQW9DQTs7O0dBcENNZCxPO1VBQ1lULFMsRUFDRGEscUQ7OztLQUZYSixPO0FBcUNOQSxPQUFPLENBQUNlLFNBQVIsR0FBb0I7QUFDbEJELGlCQUFlLEVBQUVFLGlEQUFTLENBQUNDLElBRFQ7QUFFbEJKLFVBQVEsRUFBRUcsaURBQVMsQ0FBQ0U7QUFGRixDQUFwQjtBQUtlbEIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjRlOGQ1NmM4YmVmYTJkNjA5NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgTGlua1RhYiBmcm9tIFwiLi4vLi4vVUkvTGlua1RhYlwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY3JpcHRpb246XHJcbiAqIEBwYXJhbSB7fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTmF2VGFicyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgdGFiQ2hhbmdlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKG5ld1ZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICBjb25zb2xlLmxvZyhcIk5hdlRhYnMgcmVuZGVyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy50YWJWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0YWJDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIm5hdiB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rVGFiIGtleT1cIi9cIiB2YWx1ZT1cIi9cIiBsYWJlbD1cIkhvbWVcIiAvPlxyXG4gICAgICAgICAgey8qIDxMaW5rVGFiIGtleT1cIi9jYXRhbG9nXCIgdmFsdWU9XCIvY2F0YWxvZ1wiIGxhYmVsPVwiQ2F0YWxvZ1wiIC8+XHJcbiAgICAgICAgICA8TGlua1RhYiBrZXk9XCIvc2lnaW5cIiB2YWx1ZT1cIi9zaWdpblwiIGxhYmVsPVwiU2lnaW5cIiAvPiAqL31cclxuXHJcbiAgICAgICAgICB7cHJvcHMuaXNBdXRoZW50aWNhdGVkID8gKFxyXG4gICAgICAgICAgICA8TGlua1RhYiBrZXk9XCIvY2F0YWxvZ1wiIHZhbHVlPVwiL2NhdGFsb2dcIiBsYWJlbD1cIkNhdGFsb2dcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPExpbmtUYWIga2V5PVwiL3NpZ2luXCIgdmFsdWU9XCIvc2lnaW5cIiBsYWJlbD1cIlNpZ2luXCIgLz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPExpbmtUYWIga2V5PVwiL2Fib3V0XCIgdmFsdWU9XCIvYWJvdXRcIiBsYWJlbD1cIkFib3V0XCIgLz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBwcm9wVHlwZXMgKi9cclxuTmF2VGFicy5wcm9wVHlwZXMgPSB7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICB0YWJWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlRhYnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=