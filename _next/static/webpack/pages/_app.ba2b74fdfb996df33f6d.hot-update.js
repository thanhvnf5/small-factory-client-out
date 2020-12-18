webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/sagas/importFromFactorySaga.js":
/*!**************************************************!*\
  !*** ./src/store/sagas/importFromFactorySaga.js ***!
  \**************************************************/
/*! exports provided: importFromFactoryAdd, importFromFactoryEdit, importFromFactoryUpdate, importFromFactoryDelete, importFromFactoryList, importFromFactoryGetByCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFromFactoryAdd", function() { return importFromFactoryAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFromFactoryEdit", function() { return importFromFactoryEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFromFactoryUpdate", function() { return importFromFactoryUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFromFactoryDelete", function() { return importFromFactoryDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFromFactoryList", function() { return importFromFactoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFromFactoryGetByCode", function() { return importFromFactoryGetByCode; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/importFromFactory */ "./src/services/importFromFactory.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/store/actions/index.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(importFromFactoryAdd),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(importFromFactoryEdit),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(importFromFactoryUpdate),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(importFromFactoryDelete),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(importFromFactoryList),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(importFromFactoryGetByCode);





function importFromFactoryAdd(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function importFromFactoryAdd$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!action.importFromFactoryEditValid) {
            _context.next = 14;
            break;
          }

          _context.next = 4;
          return _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__["importFromFactoryAdd"](action.importFromFactory);

        case 4:
          response = _context.sent;

          if (!(response && response.status === 200)) {
            _context.next = 12;
            break;
          }

          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryAddSuccess"]());

        case 8:
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryList"]());

        case 10:
          _context.next = 14;
          break;

        case 12:
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_ADD"], response));

        case 14:
          _context.next = 21;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          _context.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_ADD"], _context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 16]]);
}
function importFromFactoryEdit(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function importFromFactoryEdit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__["importFromFactoryDetailList"](action.importFromFactory.id);

        case 3:
          response = _context2.sent;

          if (!(response && response.status === 200)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryEditSuccess"](response));

        case 7:
          _context2.next = 11;
          break;

        case 9:
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_EDIT"], response));

        case 11:
          _context2.next = 18;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_EDIT"], _context2.t0));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 13]]);
}
function importFromFactoryUpdate(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function importFromFactoryUpdate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;

          if (!action.importFromFactoryEditValid) {
            _context3.next = 14;
            break;
          }

          _context3.next = 4;
          return _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__["importFromFactoryUpdate"](action.id, action.importFromFactory);

        case 4:
          response = _context3.sent;

          if (!(response && response.status === 200)) {
            _context3.next = 12;
            break;
          }

          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryUpdateSuccess"]());

        case 8:
          _context3.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryList"]());

        case 10:
          _context3.next = 14;
          break;

        case 12:
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_UPDATE"], response));

        case 14:
          _context3.next = 21;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          _context3.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_UPDATE"], _context3.t0));

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 16]]);
}
function importFromFactoryDelete(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function importFromFactoryDelete$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__["importFromFactoryDelete"](action.id, action.version);

        case 3:
          response = _context4.sent;

          if (!(response && response.status === 200)) {
            _context4.next = 11;
            break;
          }

          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryDeleteSuccess"]());

        case 7:
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryList"]());

        case 9:
          _context4.next = 13;
          break;

        case 11:
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_DELETE"], response));

        case 13:
          _context4.next = 20;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          _context4.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_DELETE"], _context4.t0));

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 15]]);
}
function importFromFactoryList(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function importFromFactoryList$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__["importFromFactoryList"]();

        case 3:
          response = _context5.sent;

          if (!(response && response.status === 200)) {
            _context5.next = 9;
            break;
          }

          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryListSuccess"](response));

        case 7:
          _context5.next = 11;
          break;

        case 9:
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_LIST"], response));

        case 11:
          _context5.next = 18;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          _context5.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_LIST"], _context5.t0));

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 13]]);
}
function importFromFactoryGetByCode(action) {
  var response, responseDetailList;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function importFromFactoryGetByCode$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__["importFromFactoryGetByCode"](action.code);

        case 3:
          response = _context6.sent;

          if (!(response && response.status === 200)) {
            _context6.next = 22;
            break;
          }

          if (response.data) {
            _context6.next = 10;
            break;
          }

          _context6.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryGetByCodeSuccess"](response, null));

        case 8:
          _context6.next = 20;
          break;

        case 10:
          _context6.next = 12;
          return _services_importFromFactory__WEBPACK_IMPORTED_MODULE_2__["importFromFactoryDetailList"](response.data.id);

        case 12:
          responseDetailList = _context6.sent;

          if (!(responseDetailList && responseDetailList.status === 200)) {
            _context6.next = 18;
            break;
          }

          _context6.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryGetByCodeSuccess"](response, responseDetailList));

        case 16:
          _context6.next = 20;
          break;

        case 18:
          _context6.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_GET_BY_CODE"], response));

        case 20:
          _context6.next = 24;
          break;

        case 22:
          _context6.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_GET_BY_CODE"], response));

        case 24:
          _context6.next = 31;
          break;

        case 26:
          _context6.prev = 26;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          _context6.next = 31;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_GET_BY_CODE"], _context6.t0));

        case 31:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 26]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NhZ2FzL2ltcG9ydEZyb21GYWN0b3J5U2FnYS5qcyJdLCJuYW1lcyI6WyJpbXBvcnRGcm9tRmFjdG9yeUFkZCIsImltcG9ydEZyb21GYWN0b3J5RWRpdCIsImltcG9ydEZyb21GYWN0b3J5VXBkYXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlEZWxldGUiLCJpbXBvcnRGcm9tRmFjdG9yeUxpc3QiLCJpbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZSIsImFjdGlvbiIsImltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkIiwic2VydmljZSIsImltcG9ydEZyb21GYWN0b3J5IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJwdXQiLCJhY3Rpb25zIiwiYWN0aW9uVHlwZXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ2ZXJzaW9uIiwiY29kZSIsImRhdGEiLCJyZXNwb25zZURldGFpbExpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBS2lCQSxvQjttR0E0QkFDLHFCO21HQTJCQUMsdUI7bUdBZ0NBQyx1QjttR0E2QkFDLHFCO21HQXlCQUMsMEI7O0FBbEpqQjtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVVMLG9CQUFWLENBQStCTSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxlQUdDQSxNQUFNLENBQUNDLDBCQUhSO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBSWdCLGlCQUFNQyxnRkFBQSxDQUNyQkYsTUFBTSxDQUFDRyxpQkFEYyxDQUFOOztBQUpoQjtBQUlLQyxrQkFKTDs7QUFBQSxnQkFPR0EsUUFBUSxJQUFJQSxRQUFRLENBQUNDLE1BQVQsS0FBb0IsR0FQbkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFRQyxpQkFBTUMsOERBQUcsQ0FBQ0Msb0VBQUEsRUFBRCxDQUFUOztBQVJEO0FBQUE7QUFTQyxpQkFBTUQsOERBQUcsQ0FBQ0MsOERBQUEsRUFBRCxDQUFUOztB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QUFUOztBQUxEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBUzRCLGlCQUFNRix1RkFBQSxDQUMvQkUsUUFBUSxDQUFDVSxJQUFULENBQWNILEVBRGlCLENBQU47O0FBVDVCO0FBU09JLDRCQVRQOztBQUFBLGdCQVlLQSxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNWLE1BQW5CLEtBQThCLEdBWnpEO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBYUcsaUJBQU1DLDhEQUFHLENBQ1BDLDBFQUFBLENBQ0VILFFBREYsRUFFRVcsa0JBRkYsQ0FETyxDQUFUOztBQWJIO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBcUJHLGlCQUFNVCw4REFBRyxDQUNQQywrREFBQSxDQUNFQyw0RUFERixFQUVFSixRQUZGLENBRE8sQ0FBVDs7QUFyQkg7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUErQkQsaUJBQU1FLDhEQUFHLENBQ1BDLCtEQUFBLENBQ0VDLDRFQURGLEVBRUVKLFFBRkYsQ0FETyxDQUFUOztBQS9CQztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBdUNISyxpQkFBTyxDQUFDQyxHQUFSO0FBdkNHO0FBd0NILGlCQUFNSiw4REFBRyxDQUNQQywrREFBQSxDQUNFQyw0RUFERixlQURPLENBQVQ7O0FBeENHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmEyYjc0ZmRmYjk5NmRmMzNmNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgc2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaW1wb3J0RnJvbUZhY3RvcnlcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogaW1wb3J0RnJvbUZhY3RvcnlBZGQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBpbXBvcnRGcm9tRmFjdG9yeUFkZCAuLi5cIik7XHJcbiAgICBpZiAoYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VydmljZS5pbXBvcnRGcm9tRmFjdG9yeUFkZChcclxuICAgICAgICBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlBZGRTdWNjZXNzKCkpO1xyXG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5TGlzdCgpKTtcclxuICAgICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9BREQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB5aWVsZCBwdXQoXHJcbiAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0FERCwgZXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VydmljZS5pbXBvcnRGcm9tRmFjdG9yeURldGFpbExpc3QoXHJcbiAgICAgIGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeS5pZFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVkaXRTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9FRElULFxyXG4gICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dChcclxuICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCxcclxuICAgICAgICBlcnJvclxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgdG9rZW4gPSB5aWVsZCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGUoXHJcbiAgICAgICAgYWN0aW9uLmlkLFxyXG4gICAgICAgIGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZVN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlMaXN0KCkpO1xyXG4gICAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgICBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1VQREFURSxcclxuICAgICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dChcclxuICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfVVBEQVRFLFxyXG4gICAgICAgIGVycm9yXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGltcG9ydEZyb21GYWN0b3J5RGVsZXRlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuaW1wb3J0RnJvbUZhY3RvcnlEZWxldGUoXHJcbiAgICAgIGFjdGlvbi5pZCxcclxuICAgICAgYWN0aW9uLnZlcnNpb25cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlEZWxldGVTdWNjZXNzKCkpO1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUxpc3QoKSk7XHJcbiAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9ERUxFVEUsXHJcbiAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgeWllbGQgcHV0KFxyXG4gICAgICBhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5RXJyb3IoXHJcbiAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9ERUxFVEUsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogaW1wb3J0RnJvbUZhY3RvcnlMaXN0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuaW1wb3J0RnJvbUZhY3RvcnlMaXN0KCk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlMaXN0U3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfTElTVCxcclxuICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB5aWVsZCBwdXQoXHJcbiAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0xJU1QsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VydmljZS5pbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZShhY3Rpb24uY29kZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzKHJlc3BvbnNlLCBudWxsKSk7XHJcbiAgICAgICAgLy95aWVsZCBwdXQoYWN0aW9ucy53ZWJTb2NrZXRBZGRNZXNzYWdlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBEZXRhaWwgbGlzdC5cclxuICAgICAgICBjb25zdCByZXNwb25zZURldGFpbExpc3QgPSB5aWVsZCBzZXJ2aWNlLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsTGlzdChcclxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChyZXNwb25zZURldGFpbExpc3QgJiYgcmVzcG9uc2VEZXRhaWxMaXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzKFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlRGV0YWlsTGlzdFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy95aWVsZCBwdXQoYWN0aW9ucy53ZWJTb2NrZXRBZGRNZXNzYWdlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5RXJyb3IoXHJcbiAgICAgICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9HRVRfQllfQ09ERSxcclxuICAgICAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9HRVRfQllfQ09ERSxcclxuICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB5aWVsZCBwdXQoXHJcbiAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0dFVF9CWV9DT0RFLFxyXG4gICAgICAgIGVycm9yXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=