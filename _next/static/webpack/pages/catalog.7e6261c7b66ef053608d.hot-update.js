webpackHotUpdate_N_E("pages/catalog",{

/***/ "./src/components/Navigation/Menus/AccountMenu.js":
/*!********************************************************!*\
  !*** ./src/components/Navigation/Menus/AccountMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/auth */ "./src/store/actions/auth.js");


var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\Menus\\AccountMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    menuBadge: {
      marginTop: "5px"
    }
  };
});
/************************************************** Constructor */

var AccountMenu = function AccountMenu(props) {
  _s();

  var classes = useStyles();
  var onLogout = react__WEBPACK_IMPORTED_MODULE_4___default.a.useCallback(function (event) {
    props.onLogout();
    props.onMenuClick("sigout");
  }, []);
  /************************************************** render */

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    id: props.id,
    anchorEl: props.anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: Boolean(props.anchorEl),
    onClose: props.onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: props.onMenuClick("profile"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: props.onMenuClick("account"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "My account"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: onLogout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Sigout")));
};
/************************************************** propTypes */


_s(AccountMenu, "FtddFJmLyAuqjRRxXTrwdHNpBjY=", false, function () {
  return [useStyles];
});

_c = AccountMenu;
AccountMenu.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onMenuClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}; //export default AccountMenu;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_6__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(AccountMenu));

var _c;

$RefreshReg$(_c, "AccountMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9NZW51cy9BY2NvdW50TWVudS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJzZWN0aW9uTW9iaWxlIiwiZGlzcGxheSIsImJyZWFrcG9pbnRzIiwidXAiLCJtZW51QmFkZ2UiLCJtYXJnaW5Ub3AiLCJBY2NvdW50TWVudSIsInByb3BzIiwiY2xhc3NlcyIsIm9uTG9nb3V0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsImV2ZW50Iiwib25NZW51Q2xpY2siLCJpZCIsImFuY2hvckVsIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxpQkFBYSxFQUFFO0FBQ2JDLGFBQU8sRUFBRTtBQURFLE9BRVZGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGVSxFQUVtQjtBQUM1QkYsYUFBTyxFQUFFO0FBRG1CLEtBRm5CLENBRDBCO0FBT3ZDRyxhQUFTLEVBQUU7QUFDVEMsZUFBUyxFQUFFO0FBREY7QUFQNEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFZQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBRUEsTUFBTVksUUFBUSxHQUFHQyw0Q0FBSyxDQUFDQyxXQUFOLENBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUM1Q0wsU0FBSyxDQUFDRSxRQUFOO0FBQ0FGLFNBQUssQ0FBQ00sV0FBTixDQUFrQixRQUFsQjtBQUNELEdBSGdCLEVBR2QsRUFIYyxDQUFqQjtBQUtBOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxNQUFFLEVBQUVOLEtBQUssQ0FBQ08sRUFEWjtBQUVFLFlBQVEsRUFBRVAsS0FBSyxDQUFDUSxRQUZsQjtBQUdFLGdCQUFZLEVBQUU7QUFBRUMsY0FBUSxFQUFFLEtBQVo7QUFBbUJDLGdCQUFVLEVBQUU7QUFBL0IsS0FIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSxtQkFBZSxFQUFFO0FBQUVELGNBQVEsRUFBRSxLQUFaO0FBQW1CQyxnQkFBVSxFQUFFO0FBQS9CLEtBTG5CO0FBTUUsUUFBSSxFQUFFQyxPQUFPLENBQUNYLEtBQUssQ0FBQ1EsUUFBUCxDQU5mO0FBT0UsV0FBTyxFQUFFUixLQUFLLENBQUNZLE9BUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFWixLQUFLLENBQUNNLFdBQU4sQ0FBa0IsU0FBbEIsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLEVBVUUsTUFBQywwREFBRDtBQUFVLFdBQU8sRUFBRU4sS0FBSyxDQUFDTSxXQUFOLENBQWtCLFNBQWxCLENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsRUFXRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFSixRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsQ0FERixDQURGO0FBaUJELENBMUJEO0FBNEJBOzs7R0E1Qk1ILFc7VUFDWVQsUzs7O0tBRFpTLFc7QUE2Qk5BLFdBQVcsQ0FBQ2MsU0FBWixHQUF3QjtBQUN0Qk4sSUFBRSxFQUFFTyxpREFBUyxDQUFDQyxNQURRO0FBRXRCUCxVQUFRLEVBQUVNLGlEQUFTLENBQUNFLEdBRkU7QUFHdEJKLFNBQU8sRUFBRUUsaURBQVMsQ0FBQ0csSUFIRztBQUl0QlgsYUFBVyxFQUFFUSxpREFBUyxDQUFDRztBQUpELENBQXhCLEMsQ0FPQTs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xqQixZQUFRLEVBQUU7QUFBQSxhQUFNaUIsUUFBUSxDQUFDQywwREFBQSxFQUFELENBQWQ7QUFBQTtBQURMLEdBQVA7QUFHRCxDQUpEOztBQU1lQywwSEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQ25CLFdBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0YWxvZy43ZTYyNjFjN2I2NmVmMDUzNjA4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSwgTWVudUl0ZW0gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBzZWN0aW9uTW9iaWxlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZW51QmFkZ2U6IHtcclxuICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgQWNjb3VudE1lbnUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IG9uTG9nb3V0ID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBwcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgcHJvcHMub25NZW51Q2xpY2soXCJzaWdvdXRcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIGFuY2hvckVsPXtwcm9wcy5hbmNob3JFbH1cclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cclxuICAgICAgICBvcGVuPXtCb29sZWFuKHByb3BzLmFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e3Byb3BzLm9uTWVudUNsaWNrKFwicHJvZmlsZVwiKX0+UHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e3Byb3BzLm9uTWVudUNsaWNrKFwiYWNjb3VudFwiKX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uTG9nb3V0fT5TaWdvdXQ8L01lbnVJdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5BY2NvdW50TWVudS5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYW5jaG9yRWw6IFByb3BUeXBlcy5hbnksXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25NZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBBY2NvdW50TWVudTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShBY2NvdW50TWVudSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=