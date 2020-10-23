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
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _Menus_DesktopMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menus/DesktopMenu */ "./src/components/Navigation/Menus/DesktopMenu.js");
/* harmony import */ var _Menus_MobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menus/MobileMenu */ "./src/components/Navigation/Menus/MobileMenu.js");
/* harmony import */ var _NavTabs_NavTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NavTabs/NavTabs */ "./src/components/Navigation/NavTabs/NavTabs.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle.js");


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
  /* Detect mobile view */


  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  /************************************************** render */

  console.log("AppBar render");
  return __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "topAnchor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    drawerToogleClick: props.drawerToogleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    logoClick: props.logoClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(_NavTabs_NavTabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    tabValue: props.tabValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(_Menus_DesktopMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(_Menus_MobileMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }))));
};
/************************************************** propTypes */


_s(AppBar, "kHeIdq+y+2b0bGY4N56B+1LbC8A=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvQXBwQmFyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXhHcm93IiwiQXBwQmFyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsInVzZUVmZmVjdCIsImlzTW9iaWxlVmlldyIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIkJvb2xlYW4iLCJjb25zb2xlIiwibG9nIiwiZHJhd2VyVG9vZ2xlQ2xpY2siLCJsb2dvQ2xpY2siLCJ0YWJWYWx1ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRTtBQUREO0FBRDRCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBTUE7O0FBQ0E7Ozs7O0FBSUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDaEJDLFFBRGdCLEdBQ0hELEtBREcsQ0FDaEJDLFFBRGdCO0FBRXhCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6Qjs7QUFGd0Isd0JBR1FTLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR2pCQyxRQUhpQjtBQUFBLE1BR1BDLFdBSE87QUFLeEI7OztBQUNBSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUMsWUFBWSxHQUFHLGlFQUFpRUMsSUFBakUsV0FDZEMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxTQUFqQixDQUEyQkMsV0FBM0IsRUFEYyxFQUFuQjtBQUdBUCxlQUFXLENBQUNRLE9BQU8sQ0FBQ04sWUFBRCxDQUFSLENBQVg7QUFDRCxHQUxELEVBS0csRUFMSDtBQU9BOztBQUNBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRWQsT0FBTyxDQUFDTCxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFTLE1BQUUsRUFBQyxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWMscUJBQWlCLEVBQUVHLEtBQUssQ0FBQ2lCLGlCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFFakIsS0FBSyxDQUFDa0IsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyx3REFBRDtBQUFTLFlBQVEsRUFBRWxCLEtBQUssQ0FBQ21CLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQURGLENBREY7QUFhRCxDQTVCRDtBQThCQTs7O0dBOUJNcEIsTTtVQUVZTCxTOzs7S0FGWkssTTtBQStCTkEsTUFBTSxDQUFDcUIsU0FBUCxHQUFtQjtBQUNqQkgsbUJBQWlCLEVBQUVJLGlEQUFTLENBQUNDLElBRFo7QUFFakJKLFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0M7QUFGSixDQUFuQjtBQUtldkIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzRkZDM5MTk0NTRiYTc1NjM3OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBCYXJNVSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nby9Mb2dvXCI7XHJcbmltcG9ydCBEZXNrdG9wTWVudSBmcm9tIFwiLi4vTWVudXMvRGVza3RvcE1lbnVcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4uL01lbnVzL01vYmlsZU1lbnVcIjtcclxuaW1wb3J0IE5hdlRhYnMgZnJvbSBcIi4uL05hdlRhYnMvTmF2VGFic1wiO1xyXG5pbXBvcnQgRHJhd2VyVG9nZ2xlIGZyb20gXCIuLi9TaWRlRHJhd2VyL0RyYXdlclRvZ2dsZS9EcmF3ZXJUb2dnbGVcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NpcHRpb246XHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcclxuICovXHJcbmNvbnN0IEFwcEJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLyogRGV0ZWN0IG1vYmlsZSB2aWV3ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vYmlsZVZpZXcgPSAvYW5kcm9pZHx3ZWJvc3xpcGhvbmV8aXBhZHxpcG9kfGJsYWNrYmVycnl8aWVtb2JpbGV8b3BlcmEgbWluaS9pLnRlc3QoXHJcbiAgICAgIGAke3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgKTtcclxuICAgIHNldElzTW9iaWxlKEJvb2xlYW4oaXNNb2JpbGVWaWV3KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgY29uc29sZS5sb2coXCJBcHBCYXIgcmVuZGVyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8QXBwQmFyTVU+XHJcbiAgICAgICAgPFRvb2xiYXIgaWQ9XCJ0b3BBbmNob3JcIj5cclxuICAgICAgICAgIDxEcmF3ZXJUb2dnbGUgZHJhd2VyVG9vZ2xlQ2xpY2s9e3Byb3BzLmRyYXdlclRvb2dsZUNsaWNrfSAvPlxyXG4gICAgICAgICAgPExvZ28gbG9nb0NsaWNrPXtwcm9wcy5sb2dvQ2xpY2t9IC8+XHJcbiAgICAgICAgICA8TmF2VGFicyB0YWJWYWx1ZT17cHJvcHMudGFiVmFsdWV9IC8+XHJcbiAgICAgICAgICA8RGVza3RvcE1lbnUgLz5cclxuICAgICAgICAgIDxNb2JpbGVNZW51IC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhck1VPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBwcm9wVHlwZXMgKi9cclxuQXBwQmFyLnByb3BUeXBlcyA9IHtcclxuICBkcmF3ZXJUb29nbGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbG9nb0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcEJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==