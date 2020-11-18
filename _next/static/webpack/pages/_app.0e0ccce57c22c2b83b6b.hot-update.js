webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/sagas/index.js":
/*!**********************************!*\
  !*** ./src/store/sagas/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webSocketSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webSocketSaga */ "./src/store/sagas/webSocketSaga.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./src/store/sagas/auth.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./src/store/sagas/common.js");
/* harmony import */ var _deptSaga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deptSaga */ "./src/store/sagas/deptSaga.js");
/* harmony import */ var _employeeSaga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeeSaga */ "./src/store/sagas/employeeSaga.js");
/* harmony import */ var _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goldTypeSaga */ "./src/store/sagas/goldTypeSaga.js");
/* harmony import */ var _productTypeSaga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productTypeSaga */ "./src/store/sagas/productTypeSaga.js");
/* harmony import */ var _productSaga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productSaga */ "./src/store/sagas/productSaga.js");
/* harmony import */ var _purchaseSaga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./purchaseSaga */ "./src/store/sagas/purchaseSaga.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);












function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([
          /* WebSocket */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["WEBSOCKET_ADD_MESSAGE"], function (action) {
            return _webSocketSaga__WEBPACK_IMPORTED_MODULE_1__["webSocketAddMessage"](action, params);
          }),
          /* Authen */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_CHECK_TIMEOUT"], _auth__WEBPACK_IMPORTED_MODULE_4__["checkAuthTimeoutSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_LOGOUT"], _auth__WEBPACK_IMPORTED_MODULE_4__["logoutSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_USER"], _auth__WEBPACK_IMPORTED_MODULE_4__["authUserSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_CHECK_STATE"], _auth__WEBPACK_IMPORTED_MODULE_4__["authCheckStateSaga"]),
          /* Common */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_common__WEBPACK_IMPORTED_MODULE_5__["runClockSaga"]),
          /* Dept */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_ADD"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_UPDATE"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_DELETE"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_LIST"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptList"]),
          /* Employee */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_ADD"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_UPDATE"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_DELETE"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_LIST"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeList"]),
          /* GoldType */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_ADD"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_UPDATE"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_DELETE"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_LIST"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeList"]),
          /* ProductType */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_ADD"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_9__["productTypeAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_UPDATE"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_9__["productTypeUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_DELETE"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_9__["productTypeDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_LIST"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_9__["productTypeList"]),
          /* Product */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_ADD"], _productSaga__WEBPACK_IMPORTED_MODULE_10__["productAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_UPDATE"], _productSaga__WEBPACK_IMPORTED_MODULE_10__["productUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_DELETE"], _productSaga__WEBPACK_IMPORTED_MODULE_10__["productDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_LIST"], _productSaga__WEBPACK_IMPORTED_MODULE_10__["productList"]),
          /* Purchase */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_ADD"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_11__["purchaseAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_UPDATE"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_11__["purchaseUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_DELETE"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_11__["purchaseDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_LIST"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_11__["purchaseList"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NhZ2FzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwidGFrZUV2ZXJ5IiwiYWN0aW9uVHlwZXMiLCJhY3Rpb24iLCJ3ZWJTb2NrZXRTYWdhIiwicGFyYW1zIiwiYXV0aCIsImNhbGwiLCJjb21tb24iLCJkZXB0IiwiZW1wbG95ZWUiLCJnb2xkVHlwZSIsInByb2R1Y3RUeXBlIiwicHJvZHVjdCIsInB1cmNoYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBWXlCQSxROztBQVp6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTUMsOERBQUcsQ0FBQztBQUNSO0FBQ0FDLDhFQUFTLENBQUNDLGtFQUFELEVBQW9DLFVBQUNDLE1BQUQ7QUFBQSxtQkFDM0NDLGtFQUFBLENBQWtDRCxNQUFsQyxFQUEwQ0UsTUFBMUMsQ0FEMkM7QUFBQSxXQUFwQyxDQUZEO0FBS1I7QUFDQUosOEVBQVMsQ0FBQ0MsK0RBQUQsRUFBaUNJLDBEQUFqQyxDQU5ELEVBT1JMLG9FQUFTLENBQUNDLHdEQUFELEVBQTBCSSxnREFBMUIsQ0FQRCxFQVFSTCxvRUFBUyxDQUFDQyxzREFBRCxFQUF3Qkksa0RBQXhCLENBUkQsRUFTUkwsb0VBQVMsQ0FBQ0MsNkRBQUQsRUFBK0JJLHdEQUEvQixDQVREO0FBVVI7QUFDQUMseUVBQUksQ0FBQ0Msb0RBQUQsQ0FYSTtBQVlSO0FBQ0FQLDhFQUFTLENBQUNDLHFEQUFELEVBQXVCTyxpREFBdkIsQ0FiRCxFQWNSUixvRUFBUyxDQUFDQyx3REFBRCxFQUEwQk8sb0RBQTFCLENBZEQsRUFlUlIsb0VBQVMsQ0FBQ0Msd0RBQUQsRUFBMEJPLG9EQUExQixDQWZELEVBZ0JSUixvRUFBUyxDQUFDQyxzREFBRCxFQUF3Qk8sa0RBQXhCLENBaEJEO0FBaUJSO0FBQ0FSLDhFQUFTLENBQUNDLHlEQUFELEVBQTJCUSx5REFBM0IsQ0FsQkQsRUFtQlJULG9FQUFTLENBQUNDLDREQUFELEVBQThCUSw0REFBOUIsQ0FuQkQsRUFvQlJULG9FQUFTLENBQUNDLDREQUFELEVBQThCUSw0REFBOUIsQ0FwQkQsRUFxQlJULG9FQUFTLENBQUNDLDBEQUFELEVBQTRCUSwwREFBNUIsQ0FyQkQ7QUFzQlI7QUFDQVQsOEVBQVMsQ0FBQ0MsMERBQUQsRUFBNEJTLHlEQUE1QixDQXZCRCxFQXdCUlYsb0VBQVMsQ0FBQ0MsNkRBQUQsRUFBK0JTLDREQUEvQixDQXhCRCxFQXlCUlYsb0VBQVMsQ0FBQ0MsNkRBQUQsRUFBK0JTLDREQUEvQixDQXpCRCxFQTBCUlYsb0VBQVMsQ0FBQ0MsMkRBQUQsRUFBNkJTLDBEQUE3QixDQTFCRDtBQTJCUjtBQUNBViw4RUFBUyxDQUFDQyw2REFBRCxFQUErQlUsK0RBQS9CLENBNUJELEVBNkJSWCxvRUFBUyxDQUFDQyxnRUFBRCxFQUFrQ1Usa0VBQWxDLENBN0JELEVBOEJSWCxvRUFBUyxDQUFDQyxnRUFBRCxFQUFrQ1Usa0VBQWxDLENBOUJELEVBK0JSWCxvRUFBUyxDQUFDQyw4REFBRCxFQUFnQ1UsZ0VBQWhDLENBL0JEO0FBZ0NSO0FBQ0FYLDhFQUFTLENBQUNDLHdEQUFELEVBQTBCVyx3REFBMUIsQ0FqQ0QsRUFrQ1JaLG9FQUFTLENBQUNDLDJEQUFELEVBQTZCVywyREFBN0IsQ0FsQ0QsRUFtQ1JaLG9FQUFTLENBQUNDLDJEQUFELEVBQTZCVywyREFBN0IsQ0FuQ0QsRUFvQ1JaLG9FQUFTLENBQUNDLHlEQUFELEVBQTJCVyx5REFBM0IsQ0FwQ0Q7QUFxQ1I7QUFDQVosOEVBQVMsQ0FBQ0MseURBQUQsRUFBMkJZLDBEQUEzQixDQXRDRCxFQXVDUmIsb0VBQVMsQ0FBQ0MsNERBQUQsRUFBOEJZLDZEQUE5QixDQXZDRCxFQXdDUmIsb0VBQVMsQ0FBQ0MsNERBQUQsRUFBOEJZLDZEQUE5QixDQXhDRCxFQXlDUmIsb0VBQVMsQ0FBQ0MsMERBQUQsRUFBNEJZLDJEQUE1QixDQXpDRCxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZTBjY2NlNTdjMjJjMmI4M2I2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2ViU29ja2V0U2FnYSBmcm9tIFwiLi93ZWJTb2NrZXRTYWdhXCI7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0ICogYXMgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XHJcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0ICogYXMgZGVwdCBmcm9tIFwiLi9kZXB0U2FnYVwiO1xyXG5pbXBvcnQgKiBhcyBlbXBsb3llZSBmcm9tIFwiLi9lbXBsb3llZVNhZ2FcIjtcclxuaW1wb3J0ICogYXMgZ29sZFR5cGUgZnJvbSBcIi4vZ29sZFR5cGVTYWdhXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RUeXBlIGZyb20gXCIuL3Byb2R1Y3RUeXBlU2FnYVwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0IGZyb20gXCIuL3Byb2R1Y3RTYWdhXCI7XHJcbmltcG9ydCAqIGFzIHB1cmNoYXNlIGZyb20gXCIuL3B1cmNoYXNlU2FnYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICAvKiBXZWJTb2NrZXQgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5XRUJTT0NLRVRfQUREX01FU1NBR0UsIChhY3Rpb24pID0+XHJcbiAgICAgIHdlYlNvY2tldFNhZ2Eud2ViU29ja2V0QWRkTWVzc2FnZShhY3Rpb24sIHBhcmFtcylcclxuICAgICksXHJcbiAgICAvKiBBdXRoZW4gKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5BVVRIX0NIRUNLX1RJTUVPVVQsIGF1dGguY2hlY2tBdXRoVGltZW91dFNhZ2EpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFVVEhfTE9HT1VULCBhdXRoLmxvZ291dFNhZ2EpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFVVEhfVVNFUiwgYXV0aC5hdXRoVXNlclNhZ2EpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFVVEhfQ0hFQ0tfU1RBVEUsIGF1dGguYXV0aENoZWNrU3RhdGVTYWdhKSxcclxuICAgIC8qIENvbW1vbiAqL1xyXG4gICAgY2FsbChjb21tb24ucnVuQ2xvY2tTYWdhKSxcclxuICAgIC8qIERlcHQgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX0FERCwgZGVwdC5kZXB0QWRkKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX1VQREFURSwgZGVwdC5kZXB0VXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX0RFTEVURSwgZGVwdC5kZXB0RGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX0xJU1QsIGRlcHQuZGVwdExpc3QpLFxyXG4gICAgLyogRW1wbG95ZWUgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9BREQsIGVtcGxveWVlLmVtcGxveWVlQWRkKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9VUERBVEUsIGVtcGxveWVlLmVtcGxveWVlVXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9ERUxFVEUsIGVtcGxveWVlLmVtcGxveWVlRGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9MSVNULCBlbXBsb3llZS5lbXBsb3llZUxpc3QpLFxyXG4gICAgLyogR29sZFR5cGUgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5HT0xEX1RZUEVfQURELCBnb2xkVHlwZS5nb2xkVHlwZUFkZCksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR09MRF9UWVBFX1VQREFURSwgZ29sZFR5cGUuZ29sZFR5cGVVcGRhdGUpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdPTERfVFlQRV9ERUxFVEUsIGdvbGRUeXBlLmdvbGRUeXBlRGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5HT0xEX1RZUEVfTElTVCwgZ29sZFR5cGUuZ29sZFR5cGVMaXN0KSxcclxuICAgIC8qIFByb2R1Y3RUeXBlICovXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9UWVBFX0FERCwgcHJvZHVjdFR5cGUucHJvZHVjdFR5cGVBZGQpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBST0RVQ1RfVFlQRV9VUERBVEUsIHByb2R1Y3RUeXBlLnByb2R1Y3RUeXBlVXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX1RZUEVfREVMRVRFLCBwcm9kdWN0VHlwZS5wcm9kdWN0VHlwZURlbGV0ZSksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9UWVBFX0xJU1QsIHByb2R1Y3RUeXBlLnByb2R1Y3RUeXBlTGlzdCksXHJcbiAgICAvKiBQcm9kdWN0ICovXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9BREQsIHByb2R1Y3QucHJvZHVjdEFkZCksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9VUERBVEUsIHByb2R1Y3QucHJvZHVjdFVwZGF0ZSksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9ERUxFVEUsIHByb2R1Y3QucHJvZHVjdERlbGV0ZSksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9MSVNULCBwcm9kdWN0LnByb2R1Y3RMaXN0KSxcclxuICAgIC8qIFB1cmNoYXNlICovXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFVSQ0hBU0VfQURELCBwdXJjaGFzZS5wdXJjaGFzZUFkZCksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFVSQ0hBU0VfVVBEQVRFLCBwdXJjaGFzZS5wdXJjaGFzZVVwZGF0ZSksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFVSQ0hBU0VfREVMRVRFLCBwdXJjaGFzZS5wdXJjaGFzZURlbGV0ZSksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFVSQ0hBU0VfTElTVCwgcHVyY2hhc2UucHVyY2hhc2VMaXN0KSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9