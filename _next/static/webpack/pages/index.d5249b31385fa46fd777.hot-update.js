webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hocs_Layout_BasicLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hocs/Layout/BasicLayout */ "./src/hocs/Layout/BasicLayout.js");
/* harmony import */ var _hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hocs/Layout/Layout */ "./src/hocs/Layout/Layout.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n */ "./src/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");




var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








function Index(props) {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_9__["startClock"])());
  }, [dispatch]);
  return __jsx(_hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }));
}

_s(Index, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = Index;
Index.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Index.getInitialProps");
          return _context.abrupt("return", {
            namespacesRequired: ["common", "home", "layout"],
            currentPage: "/"
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})); // Index.defaultProps = {
//   namespacesRequired: ["common", "home"],
// };
// export async function getServerSideProps(context) {
//   console.log("export async function getServerSideProps(context) {");
//   return {
//     // Unlike `getInitialProps` the props are returned under a props key
//     // The reasoning behind this is that there's potentially more options
//     // that will be introduced in the future.
//     // For example to allow you to further control behavior per-page.
//     props: { namespacesRequired: ["common", "home"] },
//   };
// }
// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(tickClock(false));
//   if (!store.getState().placeholderData) {
//     store.dispatch(loadData());
//     store.dispatch(END);
//   }
//   await store.sagaTask.toPromise();
// });

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])("home")(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0Iiwic3RhcnRDbG9jayIsInByb3BUeXBlcyIsInQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImdldEluaXRpYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJjdXJyZW50UGFnZSIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ3BCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLFlBQVEsQ0FBQ0csaUVBQVUsRUFBWCxDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNILFFBQUQsQ0FGTSxDQUFUO0FBR0EsU0FBTyxNQUFDLDJEQUFELHlGQUFZRCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNEOztHQVBRRCxLO1VBQ1VHLHVEOzs7S0FEVkgsSztBQVNUQSxLQUFLLENBQUNNLFNBQU4sR0FBa0I7QUFDaEJDLEdBQUMsRUFBRUMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURGLENBQWxCO0FBSUFWLEtBQUssQ0FBQ1csZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBRHNCLDJDQUVmO0FBQ0xDLDhCQUFrQixFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsUUFBbkIsQ0FEZjtBQUVMQyx1QkFBVyxFQUFFO0FBRlIsV0FGZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QixHLENBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVlQyw0SEFBZSxDQUFDLE1BQUQsQ0FBZixDQUF3QmhCLEtBQXhCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDUyNDliMzEzODVmYTQ2ZmQ3NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQmFzaWNMYXlvdXQgZnJvbSBcIi4uL2hvY3MvTGF5b3V0L0Jhc2ljTGF5b3V0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2hvY3MvTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tIFwiLi4vaTE4blwiO1xyXG5pbXBvcnQgeyBzdGFydENsb2NrIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc3RhcnRDbG9jaygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICByZXR1cm4gPExheW91dCB7Li4ucHJvcHN9PjwvTGF5b3V0PjtcclxufVxyXG5cclxuSW5kZXgucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJJbmRleC5nZXRJbml0aWFsUHJvcHNcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogW1wiY29tbW9uXCIsIFwiaG9tZVwiLCBcImxheW91dFwiXSxcclxuICAgIGN1cnJlbnRQYWdlOiBcIi9cIixcclxuICB9O1xyXG59O1xyXG5cclxuLy8gSW5kZXguZGVmYXVsdFByb3BzID0ge1xyXG4vLyAgIG5hbWVzcGFjZXNSZXF1aXJlZDogW1wiY29tbW9uXCIsIFwiaG9tZVwiXSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XCIpO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICAvLyBVbmxpa2UgYGdldEluaXRpYWxQcm9wc2AgdGhlIHByb3BzIGFyZSByZXR1cm5lZCB1bmRlciBhIHByb3BzIGtleVxyXG4vLyAgICAgLy8gVGhlIHJlYXNvbmluZyBiZWhpbmQgdGhpcyBpcyB0aGF0IHRoZXJlJ3MgcG90ZW50aWFsbHkgbW9yZSBvcHRpb25zXHJcbi8vICAgICAvLyB0aGF0IHdpbGwgYmUgaW50cm9kdWNlZCBpbiB0aGUgZnV0dXJlLlxyXG4vLyAgICAgLy8gRm9yIGV4YW1wbGUgdG8gYWxsb3cgeW91IHRvIGZ1cnRoZXIgY29udHJvbCBiZWhhdmlvciBwZXItcGFnZS5cclxuLy8gICAgIHByb3BzOiB7IG5hbWVzcGFjZXNSZXF1aXJlZDogW1wiY29tbW9uXCIsIFwiaG9tZVwiXSB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoYXN5bmMgKHsgc3RvcmUgfSkgPT4ge1xyXG4vLyAgIHN0b3JlLmRpc3BhdGNoKHRpY2tDbG9jayhmYWxzZSkpO1xyXG5cclxuLy8gICBpZiAoIXN0b3JlLmdldFN0YXRlKCkucGxhY2Vob2xkZXJEYXRhKSB7XHJcbi8vICAgICBzdG9yZS5kaXNwYXRjaChsb2FkRGF0YSgpKTtcclxuLy8gICAgIHN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuLy8gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oXCJob21lXCIpKEluZGV4KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==