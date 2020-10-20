webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/AppBar/SearchAppBar.js":
/*!**********************************************************!*\
  !*** ./src/components/Navigation/AppBar/SearchAppBar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _Menu_DesktopMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Menu/DesktopMenu */ "./src/components/Navigation/Menu/DesktopMenu.js");
/* harmony import */ var _Menu_MobileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Menu/MobileMenu */ "./src/components/Navigation/Menu/MobileMenu.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js");
/* harmony import */ var _SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../SideDrawer/LeftDrawer */ "./src/components/Navigation/SideDrawer/LeftDrawer.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Clock */ "./src/components/Clock.js");


var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\AppBar\\SearchAppBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;













/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    container: {
      flexGrow: 1
    }
  };
});
/************************************************** Constructor */

/**
 * Desciption:
 * @param {*} props
 */

var SearchAppBar = function SearchAppBar(props) {
  _s();

  var children = props.children;
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      openDrawer = _React$useState4[0],
      setOpenDrawer = _React$useState4[1];

  var light = useSelector(function (state) {
    return state.common.light;
  });
  var lastUpdate = useSelector(function (state) {
    return state.common.lastUpdate;
  });
  var drawerToogleHandler = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(function (event) {
    setOpenDrawer(!openDrawer);
  });
  var menuItemHandler = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(function (event) {
    setOpenDrawer(false);
  });
  var tabChangeHandler = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(function (event, value) {
    router.push(value);
  });
  /* Detect mobile view */

  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  return __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "topAnchor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    drawerToogleClick: drawerToogleHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    logoClick: props.logoClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(_Clock__WEBPACK_IMPORTED_MODULE_13__["default"], {
    lastUpdate: lastUpdate,
    light: light,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    value: props.tabValue,
    onChange: tabChangeHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, props.routes.map(function (route, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
      key: index,
      value: route.value,
      label: route.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    });
  })), __jsx(_Menu_DesktopMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx(_Menu_MobileMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(_SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isMobile: isMobile,
    open: openDrawer,
    onClose: drawerToogleHandler,
    menuItemClick: menuItemHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }))));
};
/************************************************** propTypes */


_s(SearchAppBar, "M4kKPeNldf/CFpEnw263KDffMmw=", true, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = SearchAppBar;
SearchAppBar.propTypes = {
  routes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  tabValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  drawerToogleClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  logoClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SearchAppBar);

var _c;

$RefreshReg$(_c, "SearchAppBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvU2VhcmNoQXBwQmFyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXhHcm93IiwiU2VhcmNoQXBwQmFyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwibGlnaHQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29tbW9uIiwibGFzdFVwZGF0ZSIsImRyYXdlclRvb2dsZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwibWVudUl0ZW1IYW5kbGVyIiwidGFiQ2hhbmdlSGFuZGxlciIsInZhbHVlIiwicHVzaCIsInVzZUVmZmVjdCIsImlzTW9iaWxlVmlldyIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIkJvb2xlYW4iLCJsb2dvQ2xpY2siLCJ0YWJWYWx1ZSIsInJvdXRlcyIsIm1hcCIsInJvdXRlIiwiaW5kZXgiLCJsYWJlbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsInN0cmluZyIsImRyYXdlclRvb2dsZUNsaWNrIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRTtBQUREO0FBRDRCLEdBQVo7QUFBQSxDQUFELENBQTVC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QUVBLEtBQVY7QUFBaUIsV0FBSyxFQUFFRCxLQUFLLENBQUNkLEtBQTlCO0FBQXFDLFdBQUssRUFBRWMsS0FBSyxDQUFDRSxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGdCO0FBQUEsR0FBakIsQ0FESCxDQUpGLEVBU0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsK0RBQUQ7QUFDRSxZQUFRLEVBQUU5QixRQURaO0FBRUUsUUFBSSxFQUFFRSxVQUZSO0FBR0UsV0FBTyxFQUFFTyxtQkFIWDtBQUlFLGlCQUFhLEVBQUVHLGVBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGLENBREYsQ0FERjtBQXdCRCxDQXJERDtBQXVEQTs7O0dBdkRNcEIsWTtVQUVZTCxTLEVBQ0RVLHFEOzs7S0FIWEwsWTtBQXdETkEsWUFBWSxDQUFDdUMsU0FBYixHQUF5QjtBQUN2QkwsUUFBTSxFQUFFTSxpREFBUyxDQUFDQyxHQURLO0FBRXZCUixVQUFRLEVBQUVPLGlEQUFTLENBQUNFLE1BRkc7QUFHdkJDLG1CQUFpQixFQUFFSCxpREFBUyxDQUFDSSxJQUhOO0FBSXZCWixXQUFTLEVBQUVRLGlEQUFTLENBQUNJO0FBSkUsQ0FBekI7QUFPZTVDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJjMmQ4NTczNTVmYjVkMjFkN2YwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWIsIFRhYnMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL0xvZ28vTG9nb1wiO1xyXG5pbXBvcnQgRGVza3RvcE1lbnUgZnJvbSBcIi4uL01lbnUvRGVza3RvcE1lbnVcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4uL01lbnUvTW9iaWxlTWVudVwiO1xyXG5pbXBvcnQgRHJhd2VyVG9nZ2xlIGZyb20gXCIuLi9TaWRlRHJhd2VyL0RyYXdlclRvZ2dsZS9EcmF3ZXJUb2dnbGVcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uL1NpZGVEcmF3ZXIvTGVmdERyYXdlclwiO1xyXG5cclxuaW1wb3J0IENsb2NrIGZyb20gXCIuLi8uLi9DbG9ja1wiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY2lwdGlvbjpcclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgU2VhcmNoQXBwQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuRHJhd2VyLCBzZXRPcGVuRHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBsaWdodCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbW9uLmxpZ2h0KTtcclxuICBjb25zdCBsYXN0VXBkYXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24ubGFzdFVwZGF0ZSk7XHJcblxyXG4gIGNvbnN0IGRyYXdlclRvb2dsZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldE9wZW5EcmF3ZXIoIW9wZW5EcmF3ZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51SXRlbUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldE9wZW5EcmF3ZXIoZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0YWJDaGFuZ2VIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50LCB2YWx1ZSkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2godmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICAvKiBEZXRlY3QgbW9iaWxlIHZpZXcgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW9iaWxlVmlldyA9IC9hbmRyb2lkfHdlYm9zfGlwaG9uZXxpcGFkfGlwb2R8YmxhY2tiZXJyeXxpZW1vYmlsZXxvcGVyYSBtaW5pL2kudGVzdChcclxuICAgICAgYCR7d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKX1gXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2JpbGUoQm9vbGVhbihpc01vYmlsZVZpZXcpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgaWQ9XCJ0b3BBbmNob3JcIj5cclxuICAgICAgICAgIDxEcmF3ZXJUb2dnbGUgZHJhd2VyVG9vZ2xlQ2xpY2s9e2RyYXdlclRvb2dsZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICA8TG9nbyBsb2dvQ2xpY2s9e3Byb3BzLmxvZ29DbGlja30gLz5cclxuICAgICAgICAgIDxDbG9jayBsYXN0VXBkYXRlPXtsYXN0VXBkYXRlfSBsaWdodD17bGlnaHR9IC8+XHJcbiAgICAgICAgICA8VGFicyB2YWx1ZT17cHJvcHMudGFiVmFsdWV9IG9uQ2hhbmdlPXt0YWJDaGFuZ2VIYW5kbGVyfT5cclxuICAgICAgICAgICAge3Byb3BzLnJvdXRlcy5tYXAoKHJvdXRlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWIga2V5PXtpbmRleH0gdmFsdWU9e3JvdXRlLnZhbHVlfSBsYWJlbD17cm91dGUubGFiZWx9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPERlc2t0b3BNZW51IC8+XHJcbiAgICAgICAgICA8TW9iaWxlTWVudSAvPlxyXG4gICAgICAgICAgPExlZnREcmF3ZXJcclxuICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgICBvcGVuPXtvcGVuRHJhd2VyfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtkcmF3ZXJUb29nbGVIYW5kbGVyfVxyXG4gICAgICAgICAgICBtZW51SXRlbUNsaWNrPXttZW51SXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5TZWFyY2hBcHBCYXIucHJvcFR5cGVzID0ge1xyXG4gIHJvdXRlczogUHJvcFR5cGVzLmFueSxcclxuICB0YWJWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkcmF3ZXJUb29nbGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbG9nb0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFwcEJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==