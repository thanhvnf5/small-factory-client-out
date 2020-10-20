webpackHotUpdate_N_E("pages/index",{

/***/ "./store/sagas/index.js":
/*!******************************!*\
  !*** ./store/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./store/actions/index.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runClockSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadDataSaga),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




function runClockSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].START_CLOCK);

        case 2:
          if (false) {}

          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["tickClock"])(false));

        case 5:
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 7:
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function loadDataSaga() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadDataSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("https://jsonplaceholder.typicode.com/users");

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return res.json();

        case 6:
          data = _context2.sent;
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(loadDataSuccess(data));

        case 9:
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(failure(_context2.t0));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 11]]);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(runClockSaga)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsicnVuQ2xvY2tTYWdhIiwibG9hZERhdGFTYWdhIiwicm9vdFNhZ2EiLCJ0YWtlIiwiYWN0aW9uVHlwZXMiLCJTVEFSVF9DTE9DSyIsInB1dCIsInRpY2tDbG9jayIsImRlbGF5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImxvYWREYXRhU3VjY2VzcyIsImZhaWx1cmUiLCJhbGwiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztrR0FHVUEsWTttR0FRQUMsWTttR0FVQUMsUTs7QUFyQlY7QUFDQTs7QUFFQSxTQUFVRixZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNRywrREFBSSxDQUFDQyxvREFBVyxDQUFDQyxXQUFiLENBQVY7O0FBREY7QUFBQTs7QUFBQTtBQUdJLGlCQUFNQyw4REFBRyxDQUFDQywwREFBUyxDQUFDLEtBQUQsQ0FBVixDQUFUOztBQUhKO0FBQUE7QUFJSSxpQkFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLFNBQVVQLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVnQixpQkFBTVEsS0FBSyxDQUFDLDRDQUFELENBQVg7O0FBRmhCO0FBRVVDLGFBRlY7QUFBQTtBQUdpQixpQkFBTUEsR0FBRyxDQUFDQyxJQUFKLEVBQU47O0FBSGpCO0FBR1VDLGNBSFY7QUFBQTtBQUlJLGlCQUFNTiw4REFBRyxDQUFDTyxlQUFlLENBQUNELElBQUQsQ0FBaEIsQ0FBVDs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSSxpQkFBTU4sOERBQUcsQ0FBQ1EsT0FBTyxjQUFSLENBQVQ7O0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUEsU0FBVVosUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTWEsOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDaEIsWUFBRCxDQUFMLENBQUQsQ0FBVDs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZUUsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDlkMTE3N2IzYjlkYmM5ZDgyM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIHB1dCwgdGFrZSwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIHRpY2tDbG9jayB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiogcnVuQ2xvY2tTYWdhKCkge1xyXG4gIHlpZWxkIHRha2UoYWN0aW9uVHlwZXMuU1RBUlRfQ0xPQ0spO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICB5aWVsZCBwdXQodGlja0Nsb2NrKGZhbHNlKSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRGF0YVNhZ2EoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlcy5qc29uKCk7XHJcbiAgICB5aWVsZCBwdXQobG9hZERhdGFTdWNjZXNzKGRhdGEpKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dChmYWlsdXJlKGVycikpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbY2FsbChydW5DbG9ja1NhZ2EpXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9