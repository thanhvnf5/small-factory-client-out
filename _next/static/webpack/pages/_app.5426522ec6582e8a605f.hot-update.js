webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/sagas/auth.js":
/*!*********************************!*\
  !*** ./src/store/sagas/auth.js ***!
  \*********************************/
/*! exports provided: logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSaga", function() { return logoutSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthTimeoutSaga", function() { return checkAuthTimeoutSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUserSaga", function() { return authUserSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authCheckStateSaga", function() { return authCheckStateSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./src/store/actions/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logoutSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(checkAuthTimeoutSaga),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authUserSaga),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authCheckStateSaga);

//import { delay } from "redux-saga";





var delay = function delay(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

function logoutSaga(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logoutSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([localStorage, "removeItem"], "token");

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([localStorage, "removeItem"], "expirationDate");

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])([localStorage, "removeItem"], "userId");

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["logoutSucceed"]());

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function checkAuthTimeoutSaga(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function checkAuthTimeoutSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return delay(action.expirationTime * 1000);

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["logout"]());

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function authUserSaga(action) {
  var fetcher, authData, response, expirationDate;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authUserSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["authStart"]());

        case 2:
          fetcher = function fetcher(url) {
            return fetch(url).then(function (res) {
              return res.json();
            });
          };

          authData = {
            email: action.email + "@test.net",
            password: action.password,
            returnSecureToken: true
          }; // if (!action.isSignup) {
          // }

          _context3.prev = 4;
          _context3.next = 7;
          return _services_auth__WEBPACK_IMPORTED_MODULE_4__["sigin"](authData);

        case 7:
          response = _context3.sent;

          if (!(response.status !== 200)) {
            _context3.next = 13;
            break;
          }

          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["authFail"]("error.response.data.error"));

        case 11:
          _context3.next = 28;
          break;

        case 13:
          _context3.next = 15;
          return new Date(new Date().getTime() + response.data.expiresIn * 1000);

        case 15:
          expirationDate = _context3.sent;
          _context3.next = 18;
          return localStorage.setItem("token", response.data.idToken);

        case 18:
          _context3.next = 20;
          return localStorage.setItem("expirationDate", expirationDate);

        case 20:
          _context3.next = 22;
          return localStorage.setItem("userId", response.data.localId);

        case 22:
          _context3.next = 24;
          return localStorage.setItem("email", action.email);

        case 24:
          _context3.next = 26;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["authSuccess"](response.data.idToken, response.data.localId));

        case 26:
          _context3.next = 28;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["checkAuthTimeout"](response.data.expiresIn));

        case 28:
          _context3.next = 34;
          break;

        case 30:
          _context3.prev = 30;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 34;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["authFail"]("error.response.data.error"));

        case 34:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 30]]);
}
function authCheckStateSaga(action) {
  var token, expirationDate, userId;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authCheckStateSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return localStorage.getItem("token");

        case 2:
          token = _context4.sent;

          if (token) {
            _context4.next = 8;
            break;
          }

          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["logout"]());

        case 6:
          _context4.next = 23;
          break;

        case 8:
          _context4.next = 10;
          return new Date(localStorage.getItem("expirationDate"));

        case 10:
          expirationDate = _context4.sent;

          if (!(expirationDate <= new Date())) {
            _context4.next = 16;
            break;
          }

          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["logout"]());

        case 14:
          _context4.next = 23;
          break;

        case 16:
          _context4.next = 18;
          return localStorage.getItem("userId");

        case 18:
          userId = _context4.sent;
          _context4.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["authSuccess"](token, userId));

        case 21:
          _context4.next = 23;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_index__WEBPACK_IMPORTED_MODULE_3__["checkAuthTimeout"]((expirationDate.getTime() - new Date().getTime()) / 1000));

        case 23:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NhZ2FzL2F1dGguanMiXSwibmFtZXMiOlsibG9nb3V0U2FnYSIsImNoZWNrQXV0aFRpbWVvdXRTYWdhIiwiYXV0aFVzZXJTYWdhIiwiYXV0aENoZWNrU3RhdGVTYWdhIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXMiLCJzZXRUaW1lb3V0IiwiYWN0aW9uIiwiY2FsbCIsImxvY2FsU3RvcmFnZSIsInB1dCIsImFjdGlvbnMiLCJleHBpcmF0aW9uVGltZSIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiYXV0aERhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzZXJ2aWNlcyIsInJlc3BvbnNlIiwic3RhdHVzIiwiRGF0ZSIsImdldFRpbWUiLCJkYXRhIiwiZXhwaXJlc0luIiwiZXhwaXJhdGlvbkRhdGUiLCJzZXRJdGVtIiwiaWRUb2tlbiIsImxvY2FsSWQiLCJnZXRJdGVtIiwidG9rZW4iLCJ1c2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVFpQkEsVTttR0FPQUMsb0I7bUdBS0FDLFk7bUdBaUNBQyxrQjs7QUFyRGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxVQUFVLENBQUNELEdBQUQsRUFBTUYsRUFBTixDQUFuQjtBQUFBLEdBQVosQ0FBUjtBQUFBLENBQWQ7O0FBRU8sU0FBVUwsVUFBVixDQUFxQlMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0wsaUJBQU1DLCtEQUFJLENBQUMsQ0FBQ0MsWUFBRCxFQUFlLFlBQWYsQ0FBRCxFQUErQixPQUEvQixDQUFWOztBQURLO0FBQUE7QUFFTCxpQkFBTUQsK0RBQUksQ0FBQyxDQUFDQyxZ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O0FBQUE7QUFBQTtBQWlDQSxTQUFVVixrQkFBVixDQUE2Qk0sTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUyxpQkFBTUUsWUFBWSxDQUFDd0IsT0FBYixDQUFxQixPQUFyQixDQUFOOztBQURUO0FBQ0NDLGVBREQ7O0FBQUEsY0FFQUEsS0FGQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUdILGlCQUFNeEIsOERBQUcsQ0FBQ0MscURBQUEsRUFBRCxDQUFUOztBQUhHO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBS29CLGlCQUFNLElBQUljLElBQUosQ0FDM0JoQixZQUFZLENBQUN3QixPQUFiLENBQXFCLGdCQUFyQixDQUQyQixDQUFOOztBQUxwQjtBQUtHSix3QkFMSDs7QUFBQSxnQkFRQ0EsY0FBYyxJQUFJLElBQUlKLElBQUosRUFSbkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFTRCxpQkFBTWYsOERBQUcsQ0FBQ0MscURBQUEsRUFBRCxDQUFUOztBQVRDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBV2MsaUJBQU1GLFlBQVksQ0FBQ3dCLE9BQWIsQ0FBcUIsUUFBckIsQ0FBTjs7QUFYZDtBQVdLRSxnQkFYTDtBQUFBO0FBWUQsaUJBQU16Qiw4REFBRyxDQUFDQywwREFBQSxDQUFvQnVCLEtBQXBCLEVBQTJCQyxNQUEzQixDQUFELENBQVQ7O0FBWkM7QUFBQTtBQWFELGlCQUFNekIsOERBQUcsQ0FDUEMsK0RBQUEsQ0FDRSxDQUFDa0IsY0FBYyxDQUFDSCxPQUFmLEtBQTJCLElBQUlELElBQUosR0FBV0MsT0FBWCxFQUE1QixJQUFvRCxJQUR0RCxDQURPLENBQVQ7O0FBYkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41NDI2NTIyZWM2NTgyZThhNjA1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBkZWxheSB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIHNlcnZpY2VzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoXCI7XHJcblxyXG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvZ291dFNhZ2EoYWN0aW9uKSB7XHJcbiAgeWllbGQgY2FsbChbbG9jYWxTdG9yYWdlLCBcInJlbW92ZUl0ZW1cIl0sIFwidG9rZW5cIik7XHJcbiAgeWllbGQgY2FsbChbbG9jYWxTdG9yYWdlLCBcInJlbW92ZUl0ZW1cIl0sIFwiZXhwaXJhdGlvbkRhdGVcIik7XHJcbiAgeWllbGQgY2FsbChbbG9jYWxTdG9yYWdlLCBcInJlbW92ZUl0ZW1cIl0sIFwidXNlcklkXCIpO1xyXG4gIHlpZWxkIHB1dChhY3Rpb25zLmxvZ291dFN1Y2NlZWQoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY2hlY2tBdXRoVGltZW91dFNhZ2EoYWN0aW9uKSB7XHJcbiAgeWllbGQgZGVsYXkoYWN0aW9uLmV4cGlyYXRpb25UaW1lICogMTAwMCk7XHJcbiAgeWllbGQgcHV0KGFjdGlvbnMubG9nb3V0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGF1dGhVc2VyU2FnYShhY3Rpb24pIHtcclxuICB5aWVsZCBwdXQoYWN0aW9ucy5hdXRoU3RhcnQoKSk7XHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuICBjb25zdCBhdXRoRGF0YSA9IHtcclxuICAgIGVtYWlsOiBhY3Rpb24uZW1haWwgKyBcIkB0ZXN0Lm5ldFwiLFxyXG4gICAgcGFzc3dvcmQ6IGFjdGlvbi5wYXNzd29yZCxcclxuICAgIHJldHVyblNlY3VyZVRva2VuOiB0cnVlLFxyXG4gIH07XHJcbiAgLy8gaWYgKCFhY3Rpb24uaXNTaWdudXApIHtcclxuICAvLyB9XHJcbiAgdHJ5IHtcclxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBheGlvcy5wb3N0KFwiYXBpL3NpZ2luXCIsIGF1dGhEYXRhKTt5aWVsZCBjYWxsKGNyZWF0ZUJsYUJsYSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBzZXJ2aWNlcy5zaWdpbihhdXRoRGF0YSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgeWllbGQgcHV0KGFjdGlvbnMuYXV0aEZhaWwoXCJlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yXCIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0geWllbGQgbmV3IERhdGUoXHJcbiAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyByZXNwb25zZS5kYXRhLmV4cGlyZXNJbiAqIDEwMDBcclxuICAgICAgKTtcclxuICAgICAgeWllbGQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLmlkVG9rZW4pO1xyXG4gICAgICB5aWVsZCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGlyYXRpb25EYXRlXCIsIGV4cGlyYXRpb25EYXRlKTtcclxuICAgICAgeWllbGQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgcmVzcG9uc2UuZGF0YS5sb2NhbElkKTtcclxuICAgICAgeWllbGQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCBhY3Rpb24uZW1haWwpO1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5hdXRoU3VjY2VzcyhyZXNwb25zZS5kYXRhLmlkVG9rZW4sIHJlc3BvbnNlLmRhdGEubG9jYWxJZClcclxuICAgICAgKTtcclxuICAgICAgeWllbGQgcHV0KGFjdGlvbnMuY2hlY2tBdXRoVGltZW91dChyZXNwb25zZS5kYXRhLmV4cGlyZXNJbikpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoYWN0aW9ucy5hdXRoRmFpbChcImVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcIikpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBhdXRoQ2hlY2tTdGF0ZVNhZ2EoYWN0aW9uKSB7XHJcbiAgY29uc3QgdG9rZW4gPSB5aWVsZCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHlpZWxkIHB1dChhY3Rpb25zLmxvZ291dCgpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSB5aWVsZCBuZXcgRGF0ZShcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiKVxyXG4gICAgKTtcclxuICAgIGlmIChleHBpcmF0aW9uRGF0ZSA8PSBuZXcgRGF0ZSgpKSB7XHJcbiAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmxvZ291dCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IHlpZWxkIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5hdXRoU3VjY2Vzcyh0b2tlbiwgdXNlcklkKSk7XHJcbiAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICBhY3Rpb25zLmNoZWNrQXV0aFRpbWVvdXQoXHJcbiAgICAgICAgICAoZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMTAwMFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==