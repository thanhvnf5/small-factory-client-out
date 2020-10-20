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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


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

  var light = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"])(function (state) {
    return state.common.light;
  });
  var lastUpdate = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"])(function (state) {
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
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "topAnchor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    drawerToogleClick: drawerToogleHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    logoClick: props.logoClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(_Clock__WEBPACK_IMPORTED_MODULE_13__["default"], {
    lastUpdate: lastUpdate,
    light: light,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    value: props.tabValue,
    onChange: tabChangeHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
        lineNumber: 67,
        columnNumber: 15
      }
    });
  })), __jsx(_Menu_DesktopMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(_Menu_MobileMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 11
    }
  }))));
};
/************************************************** propTypes */


_s(SearchAppBar, "M4kKPeNldf/CFpEnw263KDffMmw=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9BcHBCYXIvU2VhcmNoQXBwQmFyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXhHcm93IiwiU2VhcmNoQXBwQmFyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwibGlnaHQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29tbW9uIiwibGFzdFVwZGF0ZSIsImRyYXdlclRvb2dsZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwibWVudUl0ZW1IYW5kbGVyIiwidGFiQ2hhbmdlSGFuZGxlciIsInZhbHVlIiwicHVzaCIsInVzZUVmZmVjdCIsImlzTW9iaWxlVmlldyIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIkJvb2xlYW4iLCJsb2dvQ2xpY2siLCJ0YWJWYWx1ZSIsInJvdXRlcyIsIm1hcCIsInJvdXRlIiwiaW5kZXgiLCJsYWJlbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsInN0cmluZyIsImRyYXdlclRvb2dsZUNsaWNrIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRTtBQUREO0FBRDRCLEdBQVo7QUFBQSxDQUFE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LFNBQUcsRUFBRUEsS0FBVjtBQUFpQixXQUFLLEVBQUVELEtBQUssQ0FBQ2QsS0FBOUI7QUFBcUMsV0FBSyxFQUFFYyxLQUFLLENBQUNFLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZ0I7QUFBQSxHQUFqQixDQURILENBSkYsRUFTRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQywrREFBRDtBQUNFLFlBQVEsRUFBRTlCLFFBRFo7QUFFRSxRQUFJLEVBQUVFLFVBRlI7QUFHRSxXQUFPLEVBQUVPLG1CQUhYO0FBSUUsaUJBQWEsRUFBRUcsZUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREYsQ0FERixDQURGO0FBd0JELENBckREO0FBdURBOzs7R0F2RE1wQixZO1VBRVlMLFMsRUFDRFUscUQsRUFHRFEsd0QsRUFDS0Esd0Q7OztLQVBmYixZO0FBd0ROQSxZQUFZLENBQUN1QyxTQUFiLEdBQXlCO0FBQ3ZCTCxRQUFNLEVBQUVNLGlEQUFTLENBQUNDLEdBREs7QUFFdkJSLFVBQVEsRUFBRU8saURBQVMsQ0FBQ0UsTUFGRztBQUd2QkMsbUJBQWlCLEVBQUVILGlEQUFTLENBQUNJLElBSE47QUFJdkJaLFdBQVMsRUFBRVEsaURBQVMsQ0FBQ0k7QUFKRSxDQUF6QjtBQU9lNUMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ0NjMzNjYzZWE3NTA0OGZiMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYiwgVGFicyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vTG9nby9Mb2dvXCI7XHJcbmltcG9ydCBEZXNrdG9wTWVudSBmcm9tIFwiLi4vTWVudS9EZXNrdG9wTWVudVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi4vTWVudS9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBEcmF3ZXJUb2dnbGUgZnJvbSBcIi4uL1NpZGVEcmF3ZXIvRHJhd2VyVG9nZ2xlL0RyYXdlclRvZ2dsZVwiO1xyXG5pbXBvcnQgTGVmdERyYXdlciBmcm9tIFwiLi4vU2lkZURyYXdlci9MZWZ0RHJhd2VyXCI7XHJcblxyXG5pbXBvcnQgQ2xvY2sgZnJvbSBcIi4uLy4uL0Nsb2NrXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjaXB0aW9uOlxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTZWFyY2hBcHBCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGxpZ2h0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24ubGlnaHQpO1xyXG4gIGNvbnN0IGxhc3RVcGRhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi5sYXN0VXBkYXRlKTtcclxuXHJcbiAgY29uc3QgZHJhd2VyVG9vZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0T3BlbkRyYXdlcihmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRhYkNoYW5nZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQsIHZhbHVlKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCh2YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VG9vbGJhciBpZD1cInRvcEFuY2hvclwiPlxyXG4gICAgICAgICAgPERyYXdlclRvZ2dsZSBkcmF3ZXJUb29nbGVDbGljaz17ZHJhd2VyVG9vZ2xlSGFuZGxlcn0gLz5cclxuICAgICAgICAgIDxMb2dvIGxvZ29DbGljaz17cHJvcHMubG9nb0NsaWNrfSAvPlxyXG4gICAgICAgICAgPENsb2NrIGxhc3RVcGRhdGU9e2xhc3RVcGRhdGV9IGxpZ2h0PXtsaWdodH0gLz5cclxuICAgICAgICAgIDxUYWJzIHZhbHVlPXtwcm9wcy50YWJWYWx1ZX0gb25DaGFuZ2U9e3RhYkNoYW5nZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICB7cHJvcHMucm91dGVzLm1hcCgocm91dGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhYiBrZXk9e2luZGV4fSB2YWx1ZT17cm91dGUudmFsdWV9IGxhYmVsPXtyb3V0ZS5sYWJlbH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8RGVza3RvcE1lbnUgLz5cclxuICAgICAgICAgIDxNb2JpbGVNZW51IC8+XHJcbiAgICAgICAgICA8TGVmdERyYXdlclxyXG4gICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICAgIG9wZW49e29wZW5EcmF3ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2RyYXdlclRvb2dsZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIG1lbnVJdGVtQ2xpY2s9e21lbnVJdGVtSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcblNlYXJjaEFwcEJhci5wcm9wVHlwZXMgPSB7XHJcbiAgcm91dGVzOiBQcm9wVHlwZXMuYW55LFxyXG4gIHRhYlZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRyYXdlclRvb2dsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsb2dvQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQXBwQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9