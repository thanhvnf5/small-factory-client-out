webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hocs_Layout_BasicLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hocs/Layout/BasicLayout */ "./src/hocs/Layout/BasicLayout.js");
/* harmony import */ var _hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hocs/Layout/Layout */ "./src/hocs/Layout/Layout.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n */ "./src/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");


var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








function Index(props) {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_7__["startClock"])());
  }, [dispatch]);
  return __jsx(_hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }));
}

_s(Index, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = Index;
Index.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
}; // Index.getInitialProps = async () => {
//   console.log("Index.getInitialProps");
//   return {
//     namespacesRequired: ["common", "home", "layout"],
//     currentPage: "/",
//   };
// };
// Index.defaultProps = {
//   namespacesRequired: ["common", "home"],
// };

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(tickClock(false));
//   if (!store.getState().placeholderData) {
//     store.dispatch(loadData());
//     store.dispatch(END);
//   }
//   await store.sagaTask.toPromise();
// });
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])("home")(Index));

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0Iiwic3RhcnRDbG9jayIsInByb3BUeXBlcyIsInQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDcEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsWUFBUSxDQUFDRyxpRUFBVSxFQUFYLENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0gsUUFBRCxDQUZNLENBQVQ7QUFHQSxTQUFPLE1BQUMsMkRBQUQseUZBQVlELEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0Q7O0dBUFFELEs7VUFDVUcsdUQ7OztLQURWSCxLO0FBU1RBLEtBQUssQ0FBQ00sU0FBTixHQUFrQjtBQUNoQkMsR0FBQyxFQUFFQyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREYsQ0FBbEIsQyxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRWVDLDRIQUFlLENBQUMsTUFBRCxDQUFmLENBQXdCWCxLQUF4QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxYWY5MmQzN2VjNzhlNTkxYmFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEJhc2ljTGF5b3V0IGZyb20gXCIuLi9ob2NzL0xheW91dC9CYXNpY0xheW91dFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9ob2NzL0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uL2kxOG5cIjtcclxuaW1wb3J0IHsgc3RhcnRDbG9jayB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHN0YXJ0Q2xvY2soKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgcmV0dXJuIDxMYXlvdXQgey4uLnByb3BzfT48L0xheW91dD47XHJcbn1cclxuXHJcbkluZGV4LnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiSW5kZXguZ2V0SW5pdGlhbFByb3BzXCIpO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiLCBcImhvbWVcIiwgXCJsYXlvdXRcIl0sXHJcbi8vICAgICBjdXJyZW50UGFnZTogXCIvXCIsXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIEluZGV4LmRlZmF1bHRQcm9wcyA9IHtcclxuLy8gICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiLCBcImhvbWVcIl0sXHJcbi8vIH07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zb2xlLmxvZyhcImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1wiKTtcclxuICByZXR1cm4ge1xyXG4gICAgLy8gVW5saWtlIGBnZXRJbml0aWFsUHJvcHNgIHRoZSBwcm9wcyBhcmUgcmV0dXJuZWQgdW5kZXIgYSBwcm9wcyBrZXlcclxuICAgIC8vIFRoZSByZWFzb25pbmcgYmVoaW5kIHRoaXMgaXMgdGhhdCB0aGVyZSdzIHBvdGVudGlhbGx5IG1vcmUgb3B0aW9uc1xyXG4gICAgLy8gdGhhdCB3aWxsIGJlIGludHJvZHVjZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgIC8vIEZvciBleGFtcGxlIHRvIGFsbG93IHlvdSB0byBmdXJ0aGVyIGNvbnRyb2wgYmVoYXZpb3IgcGVyLXBhZ2UuXHJcbiAgICBwcm9wczogeyBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiLCBcImhvbWVcIl0gfSxcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKGFzeW5jICh7IHN0b3JlIH0pID0+IHtcclxuLy8gICBzdG9yZS5kaXNwYXRjaCh0aWNrQ2xvY2soZmFsc2UpKTtcclxuXHJcbi8vICAgaWYgKCFzdG9yZS5nZXRTdGF0ZSgpLnBsYWNlaG9sZGVyRGF0YSkge1xyXG4vLyAgICAgc3RvcmUuZGlzcGF0Y2gobG9hZERhdGEoKSk7XHJcbi8vICAgICBzdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgYXdhaXQgc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbi8vIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFwiaG9tZVwiKShJbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=