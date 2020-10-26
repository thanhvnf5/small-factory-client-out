webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! exports provided: sigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sigin", function() { return sigin; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/services/index.js");
 // let urlSigin = "api/sigin";

var urlSigin = "identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAALz1ybNNQONJ7n-yFp433meHZphUFn-M"; // let url =
// "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAALz1ybNNQONJ7n-yFp433meHZphUFn-M";
// if (!action.isSignup) {
// url =
//   "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAALz1ybNNQONJ7n-yFp433meHZphUFn-M";
// }

var sigin = function sigin(data) {
  return _index__WEBPACK_IMPORTED_MODULE_0__["default"].post(urlSigin, data);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGguanMiXSwibmFtZXMiOlsidXJsU2lnaW4iLCJzaWdpbiIsImRhdGEiLCJheGlvcyIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQSxJQUFJQSxRQUFRLEdBQ1YsNEZBREYsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxJQUFELEVBQVU7QUFDN0IsU0FBT0MsOENBQUssQ0FBQ0MsSUFBTixDQUFXSixRQUFYLEVBQXFCRSxJQUFyQixDQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFmZTkzM2YxYjUwYzdmMDE2MDU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbi8vIGxldCB1cmxTaWdpbiA9IFwiYXBpL3NpZ2luXCI7XHJcbmxldCB1cmxTaWdpbiA9XHJcbiAgXCJpZGVudGl0eXRvb2xraXQvdjMvcmVseWluZ3BhcnR5L3ZlcmlmeVBhc3N3b3JkP2tleT1BSXphU3lBQUx6MXliTk5RT05KN24teUZwNDMzbWVIWnBoVUZuLU1cIjtcclxuLy8gbGV0IHVybCA9XHJcbi8vIFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vaWRlbnRpdHl0b29sa2l0L3YzL3JlbHlpbmdwYXJ0eS9zaWdudXBOZXdVc2VyP2tleT1BSXphU3lBQUx6MXliTk5RT05KN24teUZwNDMzbWVIWnBoVUZuLU1cIjtcclxuLy8gaWYgKCFhY3Rpb24uaXNTaWdudXApIHtcclxuLy8gdXJsID1cclxuLy8gICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2lkZW50aXR5dG9vbGtpdC92My9yZWx5aW5ncGFydHkvdmVyaWZ5UGFzc3dvcmQ/a2V5PUFJemFTeUFBTHoxeWJOTlFPTko3bi15RnA0MzNtZUhacGhVRm4tTVwiO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnaW4gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KHVybFNpZ2luLCBkYXRhKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==