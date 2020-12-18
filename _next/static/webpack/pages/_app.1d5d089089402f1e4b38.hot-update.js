webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/reducers/sellReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/sellReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var SELL_EDIT = {
  id: null,
  version: null,
  sellCode: {
    value: "",
    valid: false,
    touched: false,
    autoFocus: true
  },
  employeeId: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  sellDate: {
    value: new Date(),
    valid: true,
    touched: false,
    autoFocus: false
  },
  sellNote: {
    value: "",
    valid: true,
    touched: false,
    autoFocus: false
  },
  weightTotal: 0,
  quantityTotal: 0,
  sellDetails: [],
  valid: false,
  waiting: false
};
var SELL_DETAIL_EDIT = {
  id: null,
  productId: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  goldTypeId: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  sellWeight: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  goldUnitId: {
    value: "",
    valid: false,
    touched: false,
    autoFocus: false
  },
  sellQuantity: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  validDetail: false
};
var SELL_LIST = {
  sells: [],
  waiting: false
};
var initialState = {
  sellEdit: _objectSpread(_objectSpread({}, SELL_EDIT), SELL_DETAIL_EDIT),
  sellList: SELL_LIST,
  error: null
};

var updateSellEdit = function updateSellEdit(state, name, value) {
  var sellEdit = _objectSpread({}, state.sellEdit);

  sellEdit[name] = _objectSpread(_objectSpread({}, sellEdit[name]), value);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return newState;
};

var sellOnFocus = function sellOnFocus(state, action) {
  var newValue = {
    touched: true,
    autoFocus: true
  };
  var newState = updateSellEdit(state, action.name, newValue);
  return newState;
};

var sellOnChanged = function sellOnChanged(state, action) {
  var newValue = {
    value: action.data.value,
    valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.data.value, action.data.validation),
    touched: true
  };
  var newState = updateSellEdit(state, action.name, newValue);
  return newState;
};

var sellCreate = function sellCreate(state, action) {
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: _objectSpread(_objectSpread({}, SELL_EDIT), SELL_DETAIL_EDIT)
  });

  return stateNew;
};

var sellAdd = function sellAdd(state, action) {
  var stateNew = state;
  action.sellEditValid = state.sellEdit.sellCode.valid && state.sellEdit.employeeId.valid && state.sellEdit.sellDate.valid && state.sellEdit.sellNote.valid;

  if (!action.sellEditValid) {
    state.sellEdit.sellCode.touched = true;
    state.sellEdit.employeeId.touched = true;
    state.sellEdit.sellDate.touched = true;
    state.sellEdit.sellNote.touched = true;
  }

  var sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), {}, {
    valid: action.sellEditValid,
    waiting: action.sellEditValid
  });

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });
  return stateNew;
};

var sellAddSuccess = function sellAddSuccess(state, action) {
  var sellEdit = _objectSpread(_objectSpread({}, SELL_EDIT), SELL_DETAIL_EDIT);

  sellEdit.sellDetails = [];

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellAddDetail = function sellAddDetail(state, action) {
  var stateNew = state;
  action.sellEditValid = state.sellEdit.productId.valid && state.sellEdit.goldTypeId.valid && state.sellEdit.goldUnitId.valid && state.sellEdit.sellWeight.valid && state.sellEdit.sellQuantity.valid;

  if (!action.sellEditValid) {
    state.sellEdit.productId.touched = true;
    state.sellEdit.goldTypeId.touched = true;
    state.sellEdit.goldUnitId.touched = true;
    state.sellEdit.sellWeight.touched = true;
    state.sellEdit.sellQuantity.touched = true;
  }

  var sellEdit = _objectSpread(_objectSpread(_objectSpread({}, state.sellEdit), SELL_DETAIL_EDIT), {}, {
    validDetail: action.sellEditValid
  }); // Add detail.


  if (action.sellEditValid) {
    sellEdit.sellDetails.push(action.detail); // Update WeightTotal and QuantityTotal.

    var weightTotal = 0;
    var quantityTotal = 0;
    state.sellEdit.sellDetails.forEach(function (item) {
      weightTotal += parseFloat(item.weight);
      quantityTotal += parseInt(item.quantity);
    });
    sellEdit.weightTotal = weightTotal;
    sellEdit.quantityTotal = quantityTotal;
  }

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });
  return stateNew;
};

var sellEditAction = function sellEditAction(state, action) {
  var sellEdit = _objectSpread(_objectSpread({
    id: null,
    //action.sell.id,
    version: action.sell.version,
    sellCode: {
      value: action.sell.code,
      valid: true,
      touched: false,
      autoFocus: true
    },
    employeeId: {
      value: action.sell.sellerId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellDate: {
      value: action.sell.sellDate,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellNote: {
      value: action.sell.note ? action.sell.note : "",
      valid: true,
      touched: false,
      autoFocus: false
    }
  }, SELL_DETAIL_EDIT), {}, {
    valid: true
  });

  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit); // let stateNew = updateObject(state, { sellEdit: sellEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellEditSuccess = function sellEditSuccess(state, action) {
  var sellEdit = _objectSpread({}, state.sellEdit);

  sellEdit.sellDetails = action.response.data; // Update WeightTotal and QuantityTotal.

  var weightTotal = 0;
  var quantityTotal = 0;
  sellEdit.sellDetails.forEach(function (item) {
    weightTotal += parseFloat(item.weight);
    quantityTotal += parseInt(item.quantity);
  });
  sellEdit.weightTotal = weightTotal;
  sellEdit.quantityTotal = quantityTotal;

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellDetailEditAction = function sellDetailEditAction(state, action) {
  var sellEdit = {
    id: action.sellDetail.id,
    productId: {
      value: action.sellDetail.productId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    goldTypeId: {
      value: action.sellDetail.goldTypeId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    sellWeight: {
      value: action.sellDetail.weight,
      valid: false,
      touched: false,
      autoFocus: false
    },
    goldUnitId: {
      value: action.sellDetail.goldUnitId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    sellQuantity: {
      value: action.sellDetail.quantity,
      valid: false,
      touched: false,
      autoFocus: false
    },
    validDetail: false
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit); // let stateNew = updateObject(state, { sellEdit: sellEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellUpdate = function sellUpdate(state, action) {
  // let stateNew = state;
  action.sellEditValid = state.sellEdit.sellCode.valid && state.sellEdit.employeeId.valid && state.sellEdit.productId.valid && state.sellEdit.goldTypeId.valid && state.sellEdit.goldUnitId.valid && state.sellEdit.sellWeight.valid && state.sellEdit.sellQuantity.valid && state.sellEdit.sellDate.valid && state.sellEdit.sellNote.valid;

  if (!action.sellEditValid) {
    state.sellEdit.sellCode.touched = true;
    state.sellEdit.employeeId.touched = true;
    state.sellEdit.productId.touched = true;
    state.sellEdit.goldTypeId.touched = true;
    state.sellEdit.goldUnitId.touched = true;
    state.sellEdit.sellWeight.touched = true;
    state.sellEdit.sellQuantity.touched = true;
    state.sellEdit.sellDate.touched = true;
    state.sellEdit.sellNote.touched = true;
  }

  var sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), {}, {
    valid: action.sellEditValid,
    waiting: action.sellEditValid
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellUpdateSuccess = function sellUpdateSuccess(state, action) {
  var sellEdit = _objectSpread(_objectSpread({}, SELL_EDIT), SELL_DETAIL_EDIT);

  sellEdit.sellDetails = [];

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellList = function sellList(state, action) {
  var sellList = _objectSpread(_objectSpread({}, state.sellList), {}, {
    waiting: true
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellList: sellList
  });

  return stateNew;
};

var sellListSuccess = function sellListSuccess(state, action) {
  /* let sells = [];
  let data = action.response.data;
  for (let key in data) {
    sells.push({
      key: key,
      id: key,
      name: data[key].name,
      employeeId: data[key].employeeId,
      productId: data[key].productId,
      goldTypeId: data[key].goldTypeId,
      goldUnitId: data[key].goldUnitId,
      weight: data[key].weight,
      quantity: data[key].quantity,
      inputDate: data[key].inputDate,
      description: data[key].description,
      image: data[key].image,
    });
  } */
  var sellList = _objectSpread(_objectSpread({}, state.sellList), {}, {
    sells: action.response.data,
    waiting: false
  }); // let stateNew = updateObject(state, { error: null,  sellList: sellList });


  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellList: sellList
  });

  return stateNew;
};

var sellError = function sellError(state, action) {
  // sellList = { ...state.sellList, ...sellList };
  // let stateNew = updateObject(state, { error: action.error, sellList: sellList });
  if (action.caller === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_LIST"]) {
    state.sellList.waiting = false;
  } else {
    state.sellEdit.waiting = false;
  }

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: action.error
  });

  return stateNew;
};

var sellErrorHandled = function sellErrorHandled(state, action) {
  // sellList = { ...state.sellList, ...sellList };
  // let stateNew = updateObject(state, { error: action.error, sellList: sellList });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null
  });

  return stateNew;
};

var importFromFactoryGetByCodeSuccess = function importFromFactoryGetByCodeSuccess(state, action) {
  if (!action.response.data) {
    var _sellEdit = _objectSpread(_objectSpread({}, SELL_EDIT), SELL_DETAIL_EDIT);

    _sellEdit.sellDetails = [];

    var _stateNew = _objectSpread(_objectSpread({}, state), {}, {
      error: null,
      sellEdit: _sellEdit
    });

    return _stateNew;
  } // let employeeId = localStorage.getItem("employeeId");


  var sellEdit = _objectSpread(_objectSpread({
    // id: action.response.data.id,
    version: action.response.data.version,
    sellCode: {
      value: action.response.data.code,
      valid: true,
      touched: false,
      autoFocus: true
    },
    employeeId: {
      value: action.response.data.receiverId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellDate: {
      value: action.response.data.importFromFactoryDate,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellNote: {
      value: action.response.data.note ? action.response.data.note : "",
      valid: true,
      touched: false,
      autoFocus: false
    }
  }, SELL_DETAIL_EDIT), {}, {
    valid: true
  });

  sellEdit.sellDetails = action.responseDetailList.data; // Update WeightTotal and QuantityTotal.

  var weightTotal = 0;
  var quantityTotal = 0;
  sellEdit.sellDetails.forEach(function (item) {
    weightTotal += parseFloat(item.weight);
    quantityTotal += parseInt(item.quantity);
  });
  sellEdit.weightTotal = weightTotal;
  sellEdit.quantityTotal = quantityTotal;
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit); // let stateNew = updateObject(state, { sellEdit: sellEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* console.log(
    new Date().toLocaleString() + " ............ Sell initialize ....."
  ); */
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ON_FOCUS"]:
      return sellOnFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ON_CHANGED"]:
      return sellOnChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_CREATE"]:
      return sellCreate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ADD"]:
      return sellAdd(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ADD_SUCCESS"]:
      return sellAddSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ADD_DETAIL"]:
      return sellAddDetail(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_EDIT"]:
      return sellEditAction(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_EDIT_SUCCESS"]:
      return sellEditSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_DETAIL_EDIT"]:
      return sellDetailEditAction(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_UPDATE"]:
      return sellUpdate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_UPDATE_SUCCESS"]:
      return sellUpdateSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_LIST"]:
      return sellList(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_LIST_SUCCESS"]:
      return sellListSuccess(state, action);
    // ImportFromFactory.

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_GET_BY_CODE_SUCCESS"]:
      return importFromFactoryGetByCodeSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ERROR"]:
      return sellError(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ERROR_HANDLED"]:
      return sellErrorHandled(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3NlbGxSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIlNFTExfRURJVCIsImlkIiwidmVyc2lvbiIsInNlbGxDb2RlIiwidmFsdWUiLCJ2YWxpZCIsInRvdWNoZWQiLCJhdXRvRm9jdXMiLCJlbXBsb3llZUlkIiwic2VsbERhdGUiLCJEYXRlIiwic2VsbE5vdGUiLCJ3ZWlnaHRUb3RhbCIsInF1YW50aXR5VG90YWwiLCJzZWxsRGV0YWlscyIsIndhaXRpbmciLCJTRUxMX0RFVEFJTF9FRElUIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsInNlbGxXZWlnaHQiLCJnb2xkVW5pdElkIiwic2VsbFF1YW50aXR5IiwidmFsaWREZXRhaWwiLCJTRUxMX0xJU1QiLCJzZWxscyIsImluaXRpYWxTdGF0ZSIsInNlbGxFZGl0Iiwic2VsbExpc3QiLCJlcnJvciIsInVwZGF0ZVNlbGxFZGl0Iiwic3RhdGUiLCJuYW1lIiwibmV3U3RhdGUiLCJzZWxsT25Gb2N1cyIsImFjdGlvbiIsIm5ld1ZhbHVlIiwic2VsbE9uQ2hhbmdlZCIsImRhdGEiLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdGlvbiIsInNlbGxDcmVhdGUiLCJzdGF0ZU5ldyIsInNlbGxBZGQiLCJzZWxsRWRpdFZhbGlkIiwic2VsbEFkZFN1Y2Nlc3MiLCJzZWxsQWRkRGV0YWlsIiwicHVzaCIsImRldGFpbCIsImZvckVhY2giLCJpdGVtIiwicGFyc2VGbG9hdCIsIndlaWdodCIsInBhcnNlSW50IiwicXVhbnRpdHkiLCJzZWxsRWRpdEFjdGlvbiIsInNlbGwiLCJjb2RlIiwic2VsbGVySWQiLCJub3RlIiwic2VsbEVkaXRTdWNjZXNzIiwicmVzcG9uc2UiLCJzZWxsRGV0YWlsRWRpdEFjdGlvbiIsInNlbGxEZXRhaWwiLCJzZWxsVXBkYXRlIiwic2VsbFVwZGF0ZVN1Y2Nlc3MiLCJzZWxsTGlzdFN1Y2Nlc3MiLCJzZWxsRXJyb3IiLCJjYWxsZXIiLCJhY3Rpb25UeXBlcyIsInNlbGxFcnJvckhhbmRsZWQiLCJpbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZVN1Y2Nlc3MiLCJyZWNlaXZlcklkIiwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlIiwicmVzcG9uc2VEZXRhaWxMaXN0IiwicmVkdWNlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFLElBRFk7QUFFaEJDLFNBQU8sRUFBRSxJQUZPO0FBR2hCQyxVQUFRLEVBQUU7QUFDUkMsU0FBSyxFQUFFLEVBREM7QUFFUkMsU0FBSyxFQUFFLEtBRkM7QUFHUkMsV0FBTyxFQUFFLEtBSEQ7QUFJUkMsYUFBUyxFQUFFO0FBSkgsR0FITTtBQVNoQkMsWUFBVSxFQUFFO0FBQ1ZKLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBVEk7QUFlaEJFLFVBQVEsRUFBRTtBQUNSTCxTQUFLLEVBQUUsSUFBSU0sSUFBSixFQURDO0FBRVJMLFNBQUssRUFBRSxJQUZDO0FBR1JDLFdBQU8sRUFBRSxLQUhEO0FBSVJDLGFBQVMsRUFBRTtBQUpILEdBZk07QUFxQmhCSSxVQUFRLEVBQUU7QUFDUlAsU0FBSyxFQUFFLEVBREM7QUFFUkMsU0FBSyxFQUFFLElBRkM7QUFHUkMsV0FBTyxFQUFFLEtBSEQ7QUFJUkMsYUFBUyxFQUFFO0FBSkgsR0FyQk07QUEyQmhCSyxhQUFXLEVBQUUsQ0EzQkc7QUE0QmhCQyxlQUFhLEVBQUUsQ0E1QkM7QUE2QmhCQyxhQUFXLEVBQUUsRUE3Qkc7QUE4QmhCVCxPQUFLLEVBQUUsS0E5QlM7QUErQmhCVSxTQUFPLEVBQUU7QUEvQk8sQ0FBbEI7QUFrQ0EsSUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJmLElBQUUsRUFBRSxJQURtQjtBQUV2QmdCLFdBQVMsRUFBRTtBQUNUYixTQUFLLEVBQUUsSUFERTtB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RCxFQUFRSSxNQUFSLENBQTNCOztBQUNGLFNBQUtrQyx3REFBTDtBQUNFLGFBQU9MLFVBQVUsQ0FBQ2pDLEtBQUQsRUFBUUksTUFBUixDQUFqQjs7QUFDRixTQUFLa0MsZ0VBQUw7QUFDRSxhQUFPSixpQkFBaUIsQ0FBQ2xDLEtBQUQsRUFBUUksTUFBUixDQUF4Qjs7QUFFRixTQUFLa0Msc0RBQUw7QUFDRSxhQUFPekMsUUFBUSxDQUFDRyxLQUFELEVBQVFJLE1BQVIsQ0FBZjs7QUFDRixTQUFLa0MsOERBQUw7QUFDRSxhQUFPSCxlQUFlLENBQUNuQyxLQUFELEVBQVFJLE1BQVIsQ0FBdEI7QUFFRjs7QUFDQSxTQUFLa0Msb0ZBQUw7QUFDRSxhQUFPRSxpQ0FBaUMsQ0FBQ3hDLEtBQUQsRUFBUUksTUFBUixDQUF4Qzs7QUFFRixTQUFLa0MsdURBQUw7QUFDRSxhQUFPRixTQUFTLENBQUNwQyxLQUFELEVBQVFJLE1BQVIsQ0FBaEI7O0FBQ0YsU0FBS2tDLCtEQUFMO0FBQ0UsYUFBT0MsZ0JBQWdCLENBQUN2QyxLQUFELEVBQVFJLE1BQVIsQ0FBdkI7O0FBQ0Y7QUFDRSxhQUFPSixLQUFQO0FBekNKO0FBMkNELENBL0NEOztBQWlEZTRDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWQ1ZDA4OTA4OTQwMmYxZTRiMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrVmFsaWRpdHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxpdHlcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBTRUxMX0VESVQgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgdmVyc2lvbjogbnVsbCxcclxuICBzZWxsQ29kZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9LFxyXG4gIGVtcGxveWVlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgc2VsbERhdGU6IHtcclxuICAgIHZhbHVlOiBuZXcgRGF0ZSgpLFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBzZWxsTm90ZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHdlaWdodFRvdGFsOiAwLFxyXG4gIHF1YW50aXR5VG90YWw6IDAsXHJcbiAgc2VsbERldGFpbHM6IFtdLFxyXG4gIHZhbGlkOiBmYWxzZSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IFNFTExfREVUQUlMX0VESVQgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgcHJvZHVjdElkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRUeXBlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgc2VsbFdlaWdodDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBnb2xkVW5pdElkOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHNlbGxRdWFudGl0eToge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICB2YWxpZERldGFpbDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBTRUxMX0xJU1QgPSB7XHJcbiAgc2VsbHM6IFtdLFxyXG4gIHdhaXRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHNlbGxFZGl0OiB7IC4uLlNFTExfRURJVCwgLi4uU0VMTF9ERVRBSUxfRURJVCB9LFxyXG4gIHNlbGxMaXN0OiBTRUxMX0xJU1QsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVTZWxsRWRpdCA9IChzdGF0ZSwgbmFtZSwgdmFsdWUpID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0IH07XHJcbiAgc2VsbEVkaXRbbmFtZV0gPSB7IC4uLnNlbGxFZGl0W25hbWVdLCAuLi52YWx1ZSB9O1xyXG4gIGxldCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsT25Gb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IG5ld1ZhbHVlID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBuZXdTdGF0ZSA9IHVwZGF0ZVNlbGxFZGl0KHN0YXRlLCBhY3Rpb24ubmFtZSwgbmV3VmFsdWUpO1xyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IHNlbGxPbkNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBuZXdWYWx1ZSA9IHtcclxuICAgIHZhbHVlOiBhY3Rpb24uZGF0YS52YWx1ZSxcclxuICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5kYXRhLnZhbHVlLCBhY3Rpb24uZGF0YS52YWxpZGF0aW9uKSxcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgbmV3U3RhdGUgPSB1cGRhdGVTZWxsRWRpdChzdGF0ZSwgYWN0aW9uLm5hbWUsIG5ld1ZhbHVlKTtcclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsQ3JlYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgc2VsbEVkaXQ6IHsgLi4uU0VMTF9FRElULCAuLi5TRUxMX0RFVEFJTF9FRElUIH0sXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsQWRkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24uc2VsbEVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsQ29kZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuZW1wbG95ZWVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbERhdGUudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxOb3RlLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLnNlbGxFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxDb2RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZW1wbG95ZWVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxEYXRlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbE5vdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5zZWxsRWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLnNlbGxFZGl0VmFsaWQsXHJcbiAgfTtcclxuICBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsQWRkU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0geyAuLi5TRUxMX0VESVQsIC4uLlNFTExfREVUQUlMX0VESVQgfTtcclxuICBzZWxsRWRpdC5zZWxsRGV0YWlscyA9IFtdO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBzZWxsRWRpdDogc2VsbEVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsQWRkRGV0YWlsID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24uc2VsbEVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRVbml0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxXZWlnaHQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxRdWFudGl0eS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5zZWxsRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5wcm9kdWN0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFVuaXRJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsUXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxFZGl0LFxyXG4gICAgLi4uU0VMTF9ERVRBSUxfRURJVCxcclxuICAgIHZhbGlkRGV0YWlsOiBhY3Rpb24uc2VsbEVkaXRWYWxpZCxcclxuICB9O1xyXG4gIC8vIEFkZCBkZXRhaWwuXHJcbiAgaWYgKGFjdGlvbi5zZWxsRWRpdFZhbGlkKSB7XHJcbiAgICBzZWxsRWRpdC5zZWxsRGV0YWlscy5wdXNoKGFjdGlvbi5kZXRhaWwpO1xyXG4gICAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gICAgbGV0IHdlaWdodFRvdGFsID0gMDtcclxuICAgIGxldCBxdWFudGl0eVRvdGFsID0gMDtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxEZXRhaWxzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgd2VpZ2h0VG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLndlaWdodCk7XHJcbiAgICAgIHF1YW50aXR5VG90YWwgKz0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgICB9KTtcclxuICAgIHNlbGxFZGl0LndlaWdodFRvdGFsID0gd2VpZ2h0VG90YWw7XHJcbiAgICBzZWxsRWRpdC5xdWFudGl0eVRvdGFsID0gcXVhbnRpdHlUb3RhbDtcclxuICB9XHJcbiAgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgc2VsbEVkaXQ6IHNlbGxFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbEVkaXRBY3Rpb24gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIGlkOiBudWxsLCAvL2FjdGlvbi5zZWxsLmlkLFxyXG4gICAgdmVyc2lvbjogYWN0aW9uLnNlbGwudmVyc2lvbixcclxuICAgIHNlbGxDb2RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbC5jb2RlLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBlbXBsb3llZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbC5zZWxsZXJJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxEYXRlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbC5zZWxsRGF0ZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxOb3RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbC5ub3RlID8gYWN0aW9uLnNlbGwubm90ZSA6IFwiXCIsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICAuLi5TRUxMX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IHNlbGxFZGl0OiBzZWxsRWRpdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbEVkaXRTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5zZWxsRWRpdCxcclxuICB9O1xyXG4gIHNlbGxFZGl0LnNlbGxEZXRhaWxzID0gYWN0aW9uLnJlc3BvbnNlLmRhdGE7XHJcbiAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gIGxldCB3ZWlnaHRUb3RhbCA9IDA7XHJcbiAgbGV0IHF1YW50aXR5VG90YWwgPSAwO1xyXG4gIHNlbGxFZGl0LnNlbGxEZXRhaWxzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHdlaWdodFRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS53ZWlnaHQpO1xyXG4gICAgcXVhbnRpdHlUb3RhbCArPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICB9KTtcclxuICBzZWxsRWRpdC53ZWlnaHRUb3RhbCA9IHdlaWdodFRvdGFsO1xyXG4gIHNlbGxFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBzZWxsRWRpdDogc2VsbEVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsRGV0YWlsRWRpdEFjdGlvbiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgaWQ6IGFjdGlvbi5zZWxsRGV0YWlsLmlkLFxyXG4gICAgcHJvZHVjdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbERldGFpbC5wcm9kdWN0SWQsXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGxEZXRhaWwuZ29sZFR5cGVJZCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzZWxsV2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbERldGFpbC53ZWlnaHQsXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGxEZXRhaWwuZ29sZFVuaXRJZCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzZWxsUXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsRGV0YWlsLnF1YW50aXR5LFxyXG4gICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkRGV0YWlsOiBmYWxzZSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgc2VsbEVkaXQ6IHNlbGxFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsVXBkYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24uc2VsbEVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsQ29kZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuZW1wbG95ZWVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQucHJvZHVjdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVW5pdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsV2VpZ2h0LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsUXVhbnRpdHkudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxEYXRlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsTm90ZS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5zZWxsRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsQ29kZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmVtcGxveWVlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5wcm9kdWN0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFVuaXRJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsUXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsRGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxOb3RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5zZWxsRWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24uc2VsbEVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5zZWxsRWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxVcGRhdGVTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7IC4uLlNFTExfRURJVCwgLi4uU0VMTF9ERVRBSUxfRURJVCB9O1xyXG4gIHNlbGxFZGl0LnNlbGxEZXRhaWxzID0gW107XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHNlbGxFZGl0OiBzZWxsRWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxMaXN0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbExpc3QgPSB7IC4uLnN0YXRlLnNlbGxMaXN0LCB3YWl0aW5nOiB0cnVlIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxMaXN0OiBzZWxsTGlzdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxMaXN0U3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLyogbGV0IHNlbGxzID0gW107XHJcbiAgbGV0IGRhdGEgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgc2VsbHMucHVzaCh7XHJcbiAgICAgIGtleToga2V5LFxyXG4gICAgICBpZDoga2V5LFxyXG4gICAgICBuYW1lOiBkYXRhW2tleV0ubmFtZSxcclxuICAgICAgZW1wbG95ZWVJZDogZGF0YVtrZXldLmVtcGxveWVlSWQsXHJcbiAgICAgIHByb2R1Y3RJZDogZGF0YVtrZXldLnByb2R1Y3RJZCxcclxuICAgICAgZ29sZFR5cGVJZDogZGF0YVtrZXldLmdvbGRUeXBlSWQsXHJcbiAgICAgIGdvbGRVbml0SWQ6IGRhdGFba2V5XS5nb2xkVW5pdElkLFxyXG4gICAgICB3ZWlnaHQ6IGRhdGFba2V5XS53ZWlnaHQsXHJcbiAgICAgIHF1YW50aXR5OiBkYXRhW2tleV0ucXVhbnRpdHksXHJcbiAgICAgIGlucHV0RGF0ZTogZGF0YVtrZXldLmlucHV0RGF0ZSxcclxuICAgICAgZGVzY3JpcHRpb246IGRhdGFba2V5XS5kZXNjcmlwdGlvbixcclxuICAgICAgaW1hZ2U6IGRhdGFba2V5XS5pbWFnZSxcclxuICAgIH0pO1xyXG4gIH0gKi9cclxuICBsZXQgc2VsbExpc3QgPSB7XHJcbiAgICAuLi5zdGF0ZS5zZWxsTGlzdCxcclxuICAgIHNlbGxzOiBhY3Rpb24ucmVzcG9uc2UuZGF0YSxcclxuICAgIHdhaXRpbmc6IGZhbHNlLFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBudWxsLCAgc2VsbExpc3Q6IHNlbGxMaXN0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsTGlzdDogc2VsbExpc3QgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsRXJyb3IgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIHNlbGxMaXN0ID0geyAuLi5zdGF0ZS5zZWxsTGlzdCwgLi4uc2VsbExpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgc2VsbExpc3Q6IHNlbGxMaXN0IH0pO1xyXG4gIGlmIChhY3Rpb24uY2FsbGVyID09PSBhY3Rpb25UeXBlcy5TRUxMX0xJU1QpIHtcclxuICAgIHN0YXRlLnNlbGxMaXN0LndhaXRpbmcgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdGUuc2VsbEVkaXQud2FpdGluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbEVycm9ySGFuZGxlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gc2VsbExpc3QgPSB7IC4uLnN0YXRlLnNlbGxMaXN0LCAuLi5zZWxsTGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBzZWxsTGlzdDogc2VsbExpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZVN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGlmICghYWN0aW9uLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgIGxldCBzZWxsRWRpdCA9IHtcclxuICAgICAgLi4uU0VMTF9FRElULFxyXG4gICAgICAuLi5TRUxMX0RFVEFJTF9FRElULFxyXG4gICAgfTtcclxuICAgIHNlbGxFZGl0LnNlbGxEZXRhaWxzID0gW107XHJcbiAgICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgc2VsbEVkaXQ6IHNlbGxFZGl0LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBzdGF0ZU5ldztcclxuICB9XHJcbiAgLy8gbGV0IGVtcGxveWVlSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtcGxveWVlSWRcIik7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgLy8gaWQ6IGFjdGlvbi5yZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgdmVyc2lvbjogYWN0aW9uLnJlc3BvbnNlLmRhdGEudmVyc2lvbixcclxuICAgIHNlbGxDb2RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5jb2RlLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBlbXBsb3llZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5yZWNlaXZlcklkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2VsbERhdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLmltcG9ydEZyb21GYWN0b3J5RGF0ZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxOb3RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5ub3RlID8gYWN0aW9uLnJlc3BvbnNlLmRhdGEubm90ZSA6IFwiXCIsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICAuLi5TRUxMX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgc2VsbEVkaXQuc2VsbERldGFpbHMgPSBhY3Rpb24ucmVzcG9uc2VEZXRhaWxMaXN0LmRhdGE7XHJcbiAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gIGxldCB3ZWlnaHRUb3RhbCA9IDA7XHJcbiAgbGV0IHF1YW50aXR5VG90YWwgPSAwO1xyXG4gIHNlbGxFZGl0LnNlbGxEZXRhaWxzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHdlaWdodFRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS53ZWlnaHQpO1xyXG4gICAgcXVhbnRpdHlUb3RhbCArPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICB9KTtcclxuICBzZWxsRWRpdC53ZWlnaHRUb3RhbCA9IHdlaWdodFRvdGFsO1xyXG4gIHNlbGxFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG5cclxuICBzZWxsRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxFZGl0LFxyXG4gICAgLi4uc2VsbEVkaXQsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgc2VsbEVkaXQ6IHNlbGxFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBzZWxsRWRpdDogc2VsbEVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvKiBjb25zb2xlLmxvZyhcclxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBTZWxsIGluaXRpYWxpemUgLi4uLi5cIlxyXG4gICk7ICovXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX09OX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gc2VsbE9uRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfT05fQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHNlbGxPbkNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0NSRUFURTpcclxuICAgICAgcmV0dXJuIHNlbGxDcmVhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfQUREOlxyXG4gICAgICByZXR1cm4gc2VsbEFkZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9BRERfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHNlbGxBZGRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9BRERfREVUQUlMOlxyXG4gICAgICByZXR1cm4gc2VsbEFkZERldGFpbChzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfRURJVDpcclxuICAgICAgcmV0dXJuIHNlbGxFZGl0QWN0aW9uKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0VESVRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHNlbGxFZGl0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9ERVRBSUxfRURJVDpcclxuICAgICAgcmV0dXJuIHNlbGxEZXRhaWxFZGl0QWN0aW9uKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX1VQREFURTpcclxuICAgICAgcmV0dXJuIHNlbGxVcGRhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfVVBEQVRFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBzZWxsVXBkYXRlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfTElTVDpcclxuICAgICAgcmV0dXJuIHNlbGxMaXN0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHNlbGxMaXN0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICAvLyBJbXBvcnRGcm9tRmFjdG9yeS5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9HRVRfQllfQ09ERV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHNlbGxFcnJvcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9FUlJPUl9IQU5ETEVEOlxyXG4gICAgICByZXR1cm4gc2VsbEVycm9ySGFuZGxlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9