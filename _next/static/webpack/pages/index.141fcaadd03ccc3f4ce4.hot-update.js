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
  };
  /************************************************** render */


  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "Home",
    href: "/"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(_UI_LinkTab__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "About",
    href: "/about"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZUYWJzL05hdlRhYnMuanMiXSwibmFtZXMiOlsiYTExeVByb3BzIiwiaW5kZXgiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJOYXZUYWJzIiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQU87QUFDTEMsTUFBRSxvQkFBYUQsS0FBYixDQURHO0FBRUwsNENBQWlDQSxLQUFqQztBQUZLLEdBQVA7QUFJRDtBQUNEOzs7QUFDQSxJQUFNRSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKQyxxQkFBZSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFGdEM7QUFEaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFPQTs7QUFDQTs7Ozs7QUFJQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDekIsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCOztBQUR5Qix3QkFFQ1ksNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGRDtBQUFBO0FBQUEsTUFFbEJDLEtBRmtCO0FBQUEsTUFFWEMsUUFGVzs7QUFJekIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3hDSCxZQUFRLENBQUNHLFFBQUQsQ0FBUjtBQUNELEdBRkQ7QUFJQTs7O0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRVAsT0FBTyxDQUFDUixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFFVyxLQUZUO0FBR0UsWUFBUSxFQUFFRSxZQUhaO0FBSUUsa0JBQVcsa0JBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsbURBQUQ7QUFBUyxTQUFLLEVBQUMsTUFBZjtBQUFzQixRQUFJLEVBQUM7QUFBM0IsS0FBbUNuQixTQUFTLENBQUMsQ0FBRCxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkYsRUFPRSxNQUFDLG1EQUFEO0FBQVMsU0FBSyxFQUFDLE9BQWY7QUFBdUIsUUFBSSxFQUFDO0FBQTVCLEtBQXlDQSxTQUFTLENBQUMsQ0FBRCxDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUEYsQ0FERixDQURGLENBREY7QUFlRCxDQXhCRDtBQTBCQTs7O0dBMUJNWSxPO1VBQ1lULFM7OztLQURaUyxPO0FBNEJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDFmY2FhZGQwM2NjYzNmNGNlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmtUYWIgZnJvbSBcIi4uLy4uL1VJL0xpbmtUYWJcIjtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogYG5hdi10YWItJHtpbmRleH1gLFxyXG4gICAgXCJhcmlhLWNvbnRyb2xzXCI6IGBuYXYtdGFicGFuZWwtJHtpbmRleH1gLFxyXG4gIH07XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY3JpcHRpb246XHJcbiAqIEBwYXJhbSB7fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTmF2VGFicyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibmF2IHRhYnMgZXhhbXBsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtUYWIgbGFiZWw9XCJIb21lXCIgaHJlZj1cIi9cIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgICAgPExpbmtUYWIgbGFiZWw9XCJBYm91dFwiIGhyZWY9XCIvYWJvdXRcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VGFicztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==