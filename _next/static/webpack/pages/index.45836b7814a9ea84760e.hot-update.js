webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/AppBar/AppBar.js":
/*!****************************************************!*\
  !*** ./src/components/Navigation/AppBar/AppBar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Clock */ "./src/components/Clock.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _Menus_DesktopMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menus/DesktopMenu */ "./src/components/Navigation/Menus/DesktopMenu.js");
/* harmony import */ var _Menus_MobileMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Menus/MobileMenu */ "./src/components/Navigation/Menus/MobileMenu.js");
/* harmony import */ var _NavTabs_NavTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NavTabs/NavTabs */ "./src/components/Navigation/NavTabs/NavTabs.js");
/* harmony import */ var _Page_TabPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Page/TabPage */ "./src/components/Navigation/Page/TabPage.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js");
/* harmony import */ var _SideDrawer_LeftDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../SideDrawer/LeftDrawer */ "./src/components/Navigation/SideDrawer/LeftDrawer.js");


var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\AppBar\\AppBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;













/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
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

var AppBar = function AppBar(props) {
  _s();

  var children = props.children;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      openDrawer = _React$useState4[0],
      setOpenDrawer = _React$useState4[1];

  var drawerToogleHandler = react__WEBPACK_IMPORTED_MODULE_5___default.a.useCallback(function (event) {
    setOpenDrawer(!openDrawer);
  });
  var menuItemHandler = react__WEBPACK_IMPORTED_MODULE_5___default.a.useCallback(function (event) {
    setOpenDrawer(false);
  });
  /* Detect mobile view */

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  return __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "topAnchor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    drawerToogleClick: drawerToogleHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    logoClick: props.logoClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(_NavTabs_NavTabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tabValue: _this.props.currentPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(_Menus_DesktopMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(_Menus_MobileMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }))));
};
/************************************************** propTypes */


_s(AppBar, "1o9OF621JCw+VyzEPELYQzv2LQE=", false, function () {
  return [useStyles];
});

_c = AppBar;
AppBar.propTypes = {
  drawerToogleClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  logoClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

var _c;

$RefreshReg$(_c, "AppBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXhHcm93IiwiQXBwQmFyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwiZHJhd2VyVG9vZ2xlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJtZW51SXRlbUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwibG9nb0NsaWNrIiwiY3VycmVudFBhZ2UiLCJwcm9wVHlwZXMiLCJkcmF3ZXJUb29nbGVDbGljayIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRTtBQUREO0FBRDRCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBTUE7O0FBQ0E7Ozs7O0FBSUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDaEJDLFFBRGdCLEdBQ0hELEtBREcsQ0FDaEJDLFFBRGdCO0FBRXhCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6Qjs7QUFGd0Isd0JBR1FTLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR2pCQyxRQUhpQjtBQUFBLE1BR1BDLFdBSE87O0FBQUEseUJBSVlILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSlo7QUFBQTtBQUFBLE1BSWpCRyxVQUppQjtBQUFBLE1BSUxDLGFBSks7O0FBTXhCLE1BQU1DLG1CQUFtQixHQUFHTiw0Q0FBSyxDQUFDTyxXQUFOLENBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUN2REgsaUJBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDRCxHQUYyQixDQUE1QjtBQUlBLE1BQU1LLGVBQWUsR0FBR1QsNENBQUssQ0FBQ08sV0FBTixDQUFrQixVQUFDQyxLQUFELEVBQVc7QUFDbkRILGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsR0FGdUIsQ0FBeEI7QUFJQTs7QUFDQUwsOENBQUssQ0FBQ1UsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlDLFlBQVksR0FBRyxpRUFBaUVDLElBQWpFLFdBQ2RDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkJDLFdBQTNCLEVBRGMsRUFBbkI7QUFHQWIsZUFBVyxDQUFDYyxPQUFPLENBQUNOLFlBQUQsQ0FBUixDQUFYO0FBQ0QsR0FMRCxFQUtHLEVBTEg7QUFPQSxTQUNFO0FBQUssYUFBUyxFQUFFWixPQUFPLENBQUNMLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVUsWUFBUSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQVMsTUFBRSxFQUFDLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBYyxxQkFBaUIsRUFBRVksbUJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUVULEtBQUssQ0FBQ3FCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMseURBQUQ7QUFBUyxZQUFRLEVBQUUsS0FBSSxDQUFDckIsS0FBTCxDQUFXc0IsV0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLENBREYsQ0FERjtBQWFELENBbkNEO0FBcUNBOzs7R0FyQ012QixNO1VBRVlMLFM7OztLQUZaSyxNO0FBc0NOQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CO0FBQ2pCQyxtQkFBaUIsRUFBRUMsaURBQVMsQ0FBQ0MsSUFEWjtBQUVqQkwsV0FBUyxFQUFFSSxpREFBUyxDQUFDQztBQUZKLENBQW5CO0FBS2UzQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTgzNmI3ODE0YTllYTg0NzYwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEJhck1VIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDbG9jayBmcm9tIFwiLi4vLi4vQ2xvY2tcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL0xvZ28vTG9nb1wiO1xyXG5pbXBvcnQgRGVza3RvcE1lbnUgZnJvbSBcIi4uL01lbnVzL0Rlc2t0b3BNZW51XCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuLi9NZW51cy9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBOYXZUYWJzIGZyb20gXCIuLi9OYXZUYWJzL05hdlRhYnNcIjtcclxuaW1wb3J0IFRhYlBhZ2UgZnJvbSBcIi4uL1BhZ2UvVGFiUGFnZVwiO1xyXG5pbXBvcnQgRHJhd2VyVG9nZ2xlIGZyb20gXCIuLi9TaWRlRHJhd2VyL0RyYXdlclRvZ2dsZS9EcmF3ZXJUb2dnbGVcIjtcclxuaW1wb3J0IExlZnREcmF3ZXIgZnJvbSBcIi4uL1NpZGVEcmF3ZXIvTGVmdERyYXdlclwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY2lwdGlvbjpcclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQXBwQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuRHJhd2VyLCBzZXRPcGVuRHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZHJhd2VyVG9vZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcihmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxBcHBCYXJNVSBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyIGlkPVwidG9wQW5jaG9yXCI+XHJcbiAgICAgICAgICA8RHJhd2VyVG9nZ2xlIGRyYXdlclRvb2dsZUNsaWNrPXtkcmF3ZXJUb29nbGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgPExvZ28gbG9nb0NsaWNrPXtwcm9wcy5sb2dvQ2xpY2t9IC8+XHJcbiAgICAgICAgICA8TmF2VGFicyB0YWJWYWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX0gLz5cclxuICAgICAgICAgIDxEZXNrdG9wTWVudSAvPlxyXG4gICAgICAgICAgPE1vYmlsZU1lbnUgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyTVU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5BcHBCYXIucHJvcFR5cGVzID0ge1xyXG4gIGRyYXdlclRvb2dsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsb2dvQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9