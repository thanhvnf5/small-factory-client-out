webpackHotUpdate_N_E("pages/index",{

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
    onClick: props.onMenuClick("sigout"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9NZW51cy9BY2NvdW50TWVudS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJzZWN0aW9uTW9iaWxlIiwiZGlzcGxheSIsImJyZWFrcG9pbnRzIiwidXAiLCJtZW51QmFkZ2UiLCJtYXJnaW5Ub3AiLCJBY2NvdW50TWVudSIsInByb3BzIiwiY2xhc3NlcyIsIm9uTG9nb3V0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsImV2ZW50Iiwib25NZW51Q2xpY2siLCJpZCIsImFuY2hvckVsIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxpQkFBYSxFQUFFO0FBQ2JDLGFBQU8sRUFBRTtBQURFLE9BRVZGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGVSxFQUVtQjtBQUM1QkYsYUFBTyxFQUFFO0FBRG1CLEtBRm5CLENBRDBCO0FBT3ZDRyxhQUFTLEVBQUU7QUFDVEMsZUFBUyxFQUFFO0FBREY7QUFQNEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFZQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBRUEsTUFBTVksUUFBUSxHQUFHQyw0Q0FBSyxDQUFDQyxXQUFOLENBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUM1Q0wsU0FBSyxDQUFDRSxRQUFOO0FBQ0FGLFNBQUssQ0FBQ00sV0FBTixDQUFrQixRQUFsQjtBQUNELEdBSGdCLEVBR2QsRUFIYyxDQUFqQjtBQUtBOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxNQUFFLEVBQUVOLEtBQUssQ0FBQ08sRUFEWjtBQUVFLFlBQVEsRUFBRVAsS0FBSyxDQUFDUSxRQUZsQjtBQUdFLGdCQUFZLEVBQUU7QUFBRUMsY0FBUSxFQUFFLEtBQVo7QUFBbUJDLGdCQUFVLEVBQUU7QUFBL0IsS0FIaEI7QUFJRSxlQUFXLE1BSmI7QUFLRSxtQkFBZSxFQUFFO0FBQUVELGNBQVEsRUFBRSxLQUFaO0FBQW1CQyxnQkFBVSxFQUFFO0FBQS9CLEtBTG5CO0FBTUUsUUFBSSxFQUFFQyxPQUFPLENBQUNYLEtBQUssQ0FBQ1EsUUFBUCxDQU5mO0FBT0UsV0FBTyxFQUFFUixLQUFLLENBQUNZLE9BUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFWixLQUFLLENBQUNNLFdBQU4sQ0FBa0IsU0FBbEIsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLEVBVUUsTUFBQywwREFBRDtBQUFVLFdBQU8sRUFBRU4sS0FBSyxDQUFDTSxXQUFOLENBQWtCLFNBQWxCLENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsRUFXRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFTixLQUFLLENBQUNNLFdBQU4sQ0FBa0IsUUFBbEIsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLENBREYsQ0FERjtBQWlCRCxDQTFCRDtBQTRCQTs7O0dBNUJNUCxXO1VBQ1lULFM7OztLQURaUyxXO0FBNkJOQSxXQUFXLENBQUNjLFNBQVosR0FBd0I7QUFDdEJOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFEUTtBQUV0QlAsVUFBUSxFQUFFTSxpREFBUyxDQUFDRSxHQUZFO0FBR3RCSixTQUFPLEVBQUVFLGlEQUFTLENBQUNHLElBSEc7QUFJdEJYLGFBQVcsRUFBRVEsaURBQVMsQ0FBQ0c7QUFKRCxDQUF4QixDLENBT0E7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMakIsWUFBUSxFQUFFO0FBQUEsYUFBTWlCLFFBQVEsQ0FBQ0MsMERBQUEsRUFBRCxDQUFkO0FBQUE7QUFETCxHQUFQO0FBR0QsQ0FKRDs7QUFNZUMsMEhBQU8sQ0FBQyxJQUFELEVBQU9ILGtCQUFQLENBQVAsQ0FBa0NuQixXQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzOWZkOGY4NjRiNzg0YzdhMmE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51LCBNZW51SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lbnVCYWRnZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBBY2NvdW50TWVudSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dvdXQgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHByb3BzLm9uTG9nb3V0KCk7XHJcbiAgICBwcm9wcy5vbk1lbnVDbGljayhcInNpZ291dFwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgYW5jaG9yRWw9e3Byb3BzLmFuY2hvckVsfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICAgIG9wZW49e0Jvb2xlYW4ocHJvcHMuYW5jaG9yRWwpfVxyXG4gICAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17cHJvcHMub25NZW51Q2xpY2soXCJwcm9maWxlXCIpfT5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17cHJvcHMub25NZW51Q2xpY2soXCJhY2NvdW50XCIpfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17cHJvcHMub25NZW51Q2xpY2soXCJzaWdvdXRcIil9PlNpZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkFjY291bnRNZW51LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhbmNob3JFbDogUHJvcFR5cGVzLmFueSxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbk1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IEFjY291bnRNZW51O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFjY291bnRNZW51KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==