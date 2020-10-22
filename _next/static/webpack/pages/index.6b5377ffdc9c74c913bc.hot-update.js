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
    tabValue: props.tabValue,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXhHcm93IiwiQXBwQmFyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwiZHJhd2VyVG9vZ2xlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJtZW51SXRlbUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwibG9nb0NsaWNrIiwidGFiVmFsdWUiLCJwcm9wVHlwZXMiLCJkcmF3ZXJUb29nbGVDbGljayIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRTtBQUREO0FBRDRCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBTUE7O0FBQ0E7Ozs7O0FBSUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDaEJDLFFBRGdCLEdBQ0hELEtBREcsQ0FDaEJDLFFBRGdCO0FBRXhCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6Qjs7QUFGd0Isd0JBR1FTLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR2pCQyxRQUhpQjtBQUFBLE1BR1BDLFdBSE87O0FBQUEseUJBSVlILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSlo7QUFBQTtBQUFBLE1BSWpCRyxVQUppQjtBQUFBLE1BSUxDLGFBSks7O0FBTXhCLE1BQU1DLG1CQUFtQixHQUFHTiw0Q0FBSyxDQUFDTyxXQUFOLENBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUN2REgsaUJBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDRCxHQUYyQixDQUE1QjtBQUlBLE1BQU1LLGVBQWUsR0FBR1QsNENBQUssQ0FBQ08sV0FBTixDQUFrQixVQUFDQyxLQUFELEVBQVc7QUFDbkRILGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsR0FGdUIsQ0FBeEI7QUFJQTs7QUFDQUwsOENBQUssQ0FBQ1UsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlDLFlBQVksR0FBRyxpRUFBaUVDLElBQWpFLFdBQ2RDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkJDLFdBQTNCLEVBRGMsRUFBbkI7QUFHQWIsZUFBVyxDQUFDYyxPQUFPLENBQUNOLFlBQUQsQ0FBUixDQUFYO0FBQ0QsR0FMRCxFQUtHLEVBTEg7QUFPQSxTQUNFO0FBQUssYUFBUyxFQUFFWixPQUFPLENBQUNMLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVUsWUFBUSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQVMsTUFBRSxFQUFDLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBYyxxQkFBaUIsRUFBRVksbUJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUVULEtBQUssQ0FBQ3FCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMseURBQUQ7QUFBUyxZQUFRLEVBQUVyQixLQUFLLENBQUNzQixRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0FERixDQURGO0FBYUQsQ0FuQ0Q7QUFxQ0E7OztHQXJDTXZCLE07VUFFWUwsUzs7O0tBRlpLLE07QUFzQ05BLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUI7QUFDakJDLG1CQUFpQixFQUFFQyxpREFBUyxDQUFDQyxJQURaO0FBRWpCTCxXQUFTLEVBQUVJLGlEQUFTLENBQUNDO0FBRkosQ0FBbkI7QUFLZTNCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZiNTM3N2ZmZGM5Yzc0YzkxM2JjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyTVUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENsb2NrIGZyb20gXCIuLi8uLi9DbG9ja1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nby9Mb2dvXCI7XHJcbmltcG9ydCBEZXNrdG9wTWVudSBmcm9tIFwiLi4vTWVudXMvRGVza3RvcE1lbnVcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4uL01lbnVzL01vYmlsZU1lbnVcIjtcclxuaW1wb3J0IE5hdlRhYnMgZnJvbSBcIi4uL05hdlRhYnMvTmF2VGFic1wiO1xyXG5pbXBvcnQgVGFiUGFnZSBmcm9tIFwiLi4vUGFnZS9UYWJQYWdlXCI7XHJcbmltcG9ydCBEcmF3ZXJUb2dnbGUgZnJvbSBcIi4uL1NpZGVEcmF3ZXIvRHJhd2VyVG9nZ2xlL0RyYXdlclRvZ2dsZVwiO1xyXG5pbXBvcnQgTGVmdERyYXdlciBmcm9tIFwiLi4vU2lkZURyYXdlci9MZWZ0RHJhd2VyXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjaXB0aW9uOlxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBBcHBCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBkcmF3ZXJUb29nbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1IYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRPcGVuRHJhd2VyKGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgLyogRGV0ZWN0IG1vYmlsZSB2aWV3ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vYmlsZVZpZXcgPSAvYW5kcm9pZHx3ZWJvc3xpcGhvbmV8aXBhZHxpcG9kfGJsYWNrYmVycnl8aWVtb2JpbGV8b3BlcmEgbWluaS9pLnRlc3QoXHJcbiAgICAgIGAke3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgKTtcclxuICAgIHNldElzTW9iaWxlKEJvb2xlYW4oaXNNb2JpbGVWaWV3KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPEFwcEJhck1VIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgaWQ9XCJ0b3BBbmNob3JcIj5cclxuICAgICAgICAgIDxEcmF3ZXJUb2dnbGUgZHJhd2VyVG9vZ2xlQ2xpY2s9e2RyYXdlclRvb2dsZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICA8TG9nbyBsb2dvQ2xpY2s9e3Byb3BzLmxvZ29DbGlja30gLz5cclxuICAgICAgICAgIDxOYXZUYWJzIHRhYlZhbHVlPXtwcm9wcy50YWJWYWx1ZX0gLz5cclxuICAgICAgICAgIDxEZXNrdG9wTWVudSAvPlxyXG4gICAgICAgICAgPE1vYmlsZU1lbnUgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyTVU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5BcHBCYXIucHJvcFR5cGVzID0ge1xyXG4gIGRyYXdlclRvb2dsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsb2dvQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9