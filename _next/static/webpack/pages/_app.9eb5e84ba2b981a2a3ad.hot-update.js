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
            email: action.email,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NhZ2FzL2F1dGguanMiXSwibmFtZXMiOlsibG9nb3V0U2FnYSIsImNoZWNrQXV0aFRpbWVvdXRTYWdhIiwiYXV0aFVzZXJTYWdhIiwiYXV0aENoZWNrU3RhdGVTYWdhIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXMiLCJzZXRUaW1lb3V0IiwiYWN0aW9uIiwiY2FsbCIsImxvY2FsU3RvcmFnZSIsInB1dCIsImFjdGlvbnMiLCJleHBpcmF0aW9uVGltZSIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiYXV0aERhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzZXJ2aWNlcyIsInJlc3BvbnNlIiwic3RhdHVzIiwiRGF0ZSIsImdldFRpbWUiLCJkYXRhIiwiZXhwaXJlc0luIiwiZXhwaXJhdGlvbkRhdGUiLCJzZXRJdGVtIiwiaWRUb2tlbiIsImxvY2FsSWQiLCJnZXRJdGVtIiwidG9rZW4iLCJ1c2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVFpQkEsVTttR0FPQUMsb0I7bUdBS0FDLFk7bUdBaUNBQyxrQjs7QUFyRGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxVQUFVLENBQUNELEdBQUQsRUFBTUYsRUFBTixDQUFuQjtBQUFBLEdBQVosQ0FBUjtBQUFBLENBQWQ7O0FBRU8sU0FBVUwsVUFBVixDQUFxQlMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0wsaUJBQU1DLCtEQUFJLENBQUMsQ0FBQ0MsWUFBRCxFQUFlLFlBQWYsQ0FBRCxFQUErQixPQUEvQixDQUFWOztBQURLO0FBQUE7QUFFTCxpQkFBTUQsK0RBQUksQ0FBQyxDQUFDQyxZ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O0FBaUNBLFNBQVVWLGtCQUFWLENBQTZCTSxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNTLGlCQUFNRSxZQUFZLENBQUN3QixPQUFiLENBQXFCLE9BQXJCLENBQU47O0FBRFQ7QUFDQ0MsZUFERDs7QUFBQSxjQUVBQSxLQUZBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR0gsaUJBQU14Qiw4REFBRyxDQUFDQyxxREFBQSxFQUFELENBQVQ7O0FBSEc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFLb0IsaUJBQU0sSUFBSWMsSUFBSixDQUMzQmhCLFlBQVksQ0FBQ3dCLE9BQWIsQ0FBcUIsZ0JBQXJCLENBRDJCLENBQU47O0FBTHBCO0FBS0dKLHdCQUxIOztBQUFBLGdCQVFDQSxjQUFjLElBQUksSUFBSUosSUFBSixFQVJuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVNELGlCQUFNZiw4REFBRyxDQUFDQyxxREFBQSxFQUFELENBQVQ7O0FBVEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFXYyxpQkFBTUYsWUFBWSxDQUFDd0IsT0FBYixDQUFxQixRQUFyQixDQUFOOztBQVhkO0FBV0tFLGdCQVhMO0FBQUE7QUFZRCxpQkFBTXpCLDhEQUFHLENBQUNDLDBEQUFBLENBQW9CdUIsS0FBcEIsRUFBMkJDLE1BQTNCLENBQUQsQ0FBVDs7QUFaQztBQUFBO0FBYUQsaUJBQU16Qiw4REFBRyxDQUNQQywrREFBQSxDQUNFLENBQUNrQixjQUFjLENBQUNILE9BQWYsS0FBMkIsSUFBSUQsSUFBSixHQUFXQyxPQUFYLEVBQTVCLElBQW9ELElBRHRELENBRE8sQ0FBVDs7QUFiQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjllYjVlODRiYTJiOTgxYTJhM2FkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IGRlbGF5IH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgc2VydmljZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhcIjtcclxuXHJcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KHJlcywgbXMpKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbG9nb3V0U2FnYShhY3Rpb24pIHtcclxuICB5aWVsZCBjYWxsKFtsb2NhbFN0b3JhZ2UsIFwicmVtb3ZlSXRlbVwiXSwgXCJ0b2tlblwiKTtcclxuICB5aWVsZCBjYWxsKFtsb2NhbFN0b3JhZ2UsIFwicmVtb3ZlSXRlbVwiXSwgXCJleHBpcmF0aW9uRGF0ZVwiKTtcclxuICB5aWVsZCBjYWxsKFtsb2NhbFN0b3JhZ2UsIFwicmVtb3ZlSXRlbVwiXSwgXCJ1c2VySWRcIik7XHJcbiAgeWllbGQgcHV0KGFjdGlvbnMubG9nb3V0U3VjY2VlZCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjaGVja0F1dGhUaW1lb3V0U2FnYShhY3Rpb24pIHtcclxuICB5aWVsZCBkZWxheShhY3Rpb24uZXhwaXJhdGlvblRpbWUgKiAxMDAwKTtcclxuICB5aWVsZCBwdXQoYWN0aW9ucy5sb2dvdXQoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYXV0aFVzZXJTYWdhKGFjdGlvbikge1xyXG4gIHlpZWxkIHB1dChhY3Rpb25zLmF1dGhTdGFydCgpKTtcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG4gIGNvbnN0IGF1dGhEYXRhID0ge1xyXG4gICAgZW1haWw6IGFjdGlvbi5lbWFpbCxcclxuICAgIHBhc3N3b3JkOiBhY3Rpb24ucGFzc3dvcmQsXHJcbiAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcclxuICB9O1xyXG4gIC8vIGlmICghYWN0aW9uLmlzU2lnbnVwKSB7XHJcbiAgLy8gfVxyXG4gIHRyeSB7XHJcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0geWllbGQgYXhpb3MucG9zdChcImFwaS9zaWdpblwiLCBhdXRoRGF0YSk7eWllbGQgY2FsbChjcmVhdGVCbGFCbGEsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VydmljZXMuc2lnaW4oYXV0aERhdGEpO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmF1dGhGYWlsKFwiZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvclwiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IHlpZWxkIG5ldyBEYXRlKFxyXG4gICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmVzcG9uc2UuZGF0YS5leHBpcmVzSW4gKiAxMDAwXHJcbiAgICAgICk7XHJcbiAgICAgIHlpZWxkIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5pZFRva2VuKTtcclxuICAgICAgeWllbGQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBpcmF0aW9uRGF0ZVwiLCBleHBpcmF0aW9uRGF0ZSk7XHJcbiAgICAgIHlpZWxkIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIHJlc3BvbnNlLmRhdGEubG9jYWxJZCk7XHJcbiAgICAgIHlpZWxkIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgYWN0aW9uLmVtYWlsKTtcclxuICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgIGFjdGlvbnMuYXV0aFN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5pZFRva2VuLCByZXNwb25zZS5kYXRhLmxvY2FsSWQpXHJcbiAgICAgICk7XHJcbiAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmNoZWNrQXV0aFRpbWVvdXQocmVzcG9uc2UuZGF0YS5leHBpcmVzSW4pKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGFjdGlvbnMuYXV0aEZhaWwoXCJlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yXCIpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYXV0aENoZWNrU3RhdGVTYWdhKGFjdGlvbikge1xyXG4gIGNvbnN0IHRva2VuID0geWllbGQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICB5aWVsZCBwdXQoYWN0aW9ucy5sb2dvdXQoKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0geWllbGQgbmV3IERhdGUoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvbkRhdGVcIilcclxuICAgICk7XHJcbiAgICBpZiAoZXhwaXJhdGlvbkRhdGUgPD0gbmV3IERhdGUoKSkge1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5sb2dvdXQoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB1c2VySWQgPSB5aWVsZCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcclxuICAgICAgeWllbGQgcHV0KGFjdGlvbnMuYXV0aFN1Y2Nlc3ModG9rZW4sIHVzZXJJZCkpO1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5jaGVja0F1dGhUaW1lb3V0KFxyXG4gICAgICAgICAgKGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDBcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=