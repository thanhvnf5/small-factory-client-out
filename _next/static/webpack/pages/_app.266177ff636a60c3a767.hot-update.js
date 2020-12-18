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
      value: action.response.data.sellDate,
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
  }, IMPORT_FROM_FACTORY_DETAIL_EDIT), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3NlbGxSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIlNFTExfRURJVCIsImlkIiwidmVyc2lvbiIsInNlbGxDb2RlIiwidmFsdWUiLCJ2YWxpZCIsInRvdWNoZWQiLCJhdXRvRm9jdXMiLCJlbXBsb3llZUlkIiwic2VsbERhdGUiLCJEYXRlIiwic2VsbE5vdGUiLCJ3ZWlnaHRUb3RhbCIsInF1YW50aXR5VG90YWwiLCJzZWxsRGV0YWlscyIsIndhaXRpbmciLCJTRUxMX0RFVEFJTF9FRElUIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsInNlbGxXZWlnaHQiLCJnb2xkVW5pdElkIiwic2VsbFF1YW50aXR5IiwidmFsaWREZXRhaWwiLCJTRUxMX0xJU1QiLCJzZWxscyIsImluaXRpYWxTdGF0ZSIsInNlbGxFZGl0Iiwic2VsbExpc3QiLCJlcnJvciIsInVwZGF0ZVNlbGxFZGl0Iiwic3RhdGUiLCJuYW1lIiwibmV3U3RhdGUiLCJzZWxsT25Gb2N1cyIsImFjdGlvbiIsIm5ld1ZhbHVlIiwic2VsbE9uQ2hhbmdlZCIsImRhdGEiLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdGlvbiIsInNlbGxDcmVhdGUiLCJzdGF0ZU5ldyIsInNlbGxBZGQiLCJzZWxsRWRpdFZhbGlkIiwic2VsbEFkZFN1Y2Nlc3MiLCJzZWxsQWRkRGV0YWlsIiwicHVzaCIsImRldGFpbCIsImZvckVhY2giLCJpdGVtIiwicGFyc2VGbG9hdCIsIndlaWdodCIsInBhcnNlSW50IiwicXVhbnRpdHkiLCJzZWxsRWRpdEFjdGlvbiIsInNlbGwiLCJjb2RlIiwic2VsbGVySWQiLCJub3RlIiwic2VsbEVkaXRTdWNjZXNzIiwicmVzcG9uc2UiLCJzZWxsRGV0YWlsRWRpdEFjdGlvbiIsInNlbGxEZXRhaWwiLCJzZWxsVXBkYXRlIiwic2VsbFVwZGF0ZVN1Y2Nlc3MiLCJzZWxsTGlzdFN1Y2Nlc3MiLCJzZWxsRXJyb3IiLCJjYWxsZXIiLCJhY3Rpb25UeXBlcyIsInNlbGxFcnJvckhhbmRsZWQiLCJpbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZVN1Y2Nlc3MiLCJyZWNlaXZlcklkIiwiSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVCIsInJlc3BvbnNlRGV0YWlsTGlzdCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRSxJQURZO0FBRWhCQyxTQUFPLEVBQUUsSUFGTztBQUdoQkMsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxFQURDO0FBRVJDLFNBQUssRUFBRSxLQUZDO0FBR1JDLFdBQU8sRUFBRSxLQUhEO0FBSVJDLGFBQVMsRUFBRTtBQUpILEdBSE07QUFTaEJDLFlBQVUsRUFBRTtBQUNWSixTQUFLLEVBQUUsSUFERztBQUVWQyxTQUFLLEVBQUUsS0FGRztBQUdWQyxXQUFPLEVBQUUsS0FIQztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQVRJO0FBZWhCRSxVQUFRLEVBQUU7QUFDUkwsU0FBSyxFQUFFLElBQUlNLElBQUosRUFEQztBQUVSTCxTQUFLLEVBQUUsSUFGQztBQUdSQyxXQUFPLEVBQUUsS0FIRDtBQUlSQyxhQUFTLEVBQUU7QUFKSCxHQWZNO0FBcUJoQkksVUFBUSxFQUFFO0FBQ1JQLFNBQUssRUFBRSxFQURDO0FBRVJDLFNBQUssRUFBRSxJQUZDO0FBR1JDLFdBQU8sRUFBRSxLQUhEO0FBSVJDLGFBQVMsRUFBRTtBQUpILEdBckJNO0FBMkJoQkssYUFBVyxFQUFFLENBM0JHO0FBNEJoQkMsZUFBYSxFQUFFLENBNUJDO0FBNkJoQkMsYUFBVyxFQUFFLEVBN0JHO0FBOEJoQlQsT0FBSyxFQUFFLEtBOUJTO0FBK0JoQlUsU0FBTyxFQUFFO0FBL0JPLENBQWxCO0FBa0NBLElBQU1DLGdCQUFnQixHQUFHO0FBQ3ZCZixJQUFFLEVBQUUsSUFEbUI7QUFFdkJnQixXQUFTLEVBQUU7QUFDVGIsU0FBSyxF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Q0FBQy9CLEtBQUQsRUFBUUksTUFBUixDQUEzQjs7QUFDRixTQUFLa0Msd0RBQUw7QUFDRSxhQUFPTCxVQUFVLENBQUNqQyxLQUFELEVBQVFJLE1BQVIsQ0FBakI7O0FBQ0YsU0FBS2tDLGdFQUFMO0FBQ0UsYUFBT0osaUJBQWlCLENBQUNsQyxLQUFELEVBQVFJLE1BQVIsQ0FBeEI7O0FBRUYsU0FBS2tDLHNEQUFMO0FBQ0UsYUFBT3pDLFFBQVEsQ0FBQ0csS0FBRCxFQUFRSSxNQUFSLENBQWY7O0FBQ0YsU0FBS2tDLDhEQUFMO0FBQ0UsYUFBT0gsZUFBZSxDQUFDbkMsS0FBRCxFQUFRSSxNQUFSLENBQXRCO0FBRUY7O0FBQ0EsU0FBS2tDLG9GQUFMO0FBQ0UsYUFBT0UsaUNBQWlDLENBQUN4QyxLQUFELEVBQVFJLE1BQVIsQ0FBeEM7O0FBRUYsU0FBS2tDLHVEQUFMO0FBQ0UsYUFBT0YsU0FBUyxDQUFDcEMsS0FBRCxFQUFRSSxNQUFSLENBQWhCOztBQUNGLFNBQUtrQywrREFBTDtBQUNFLGFBQU9DLGdCQUFnQixDQUFDdkMsS0FBRCxFQUFRSSxNQUFSLENBQXZCOztBQUNGO0FBQ0UsYUFBT0osS0FBUDtBQXpDSjtBQTJDRCxDQS9DRDs7QUFpRGU0QyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI2NjE3N2ZmNjM2YTYwYzNhNzY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVja1ZhbGlkaXR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlsaXR5XCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgU0VMTF9FRElUID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIHZlcnNpb246IG51bGwsXHJcbiAgc2VsbENvZGU6IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfSxcclxuICBlbXBsb3llZUlkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHNlbGxEYXRlOiB7XHJcbiAgICB2YWx1ZTogbmV3IERhdGUoKSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgc2VsbE5vdGU6IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICB3ZWlnaHRUb3RhbDogMCxcclxuICBxdWFudGl0eVRvdGFsOiAwLFxyXG4gIHNlbGxEZXRhaWxzOiBbXSxcclxuICB2YWxpZDogZmFsc2UsXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBTRUxMX0RFVEFJTF9FRElUID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIHByb2R1Y3RJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBnb2xkVHlwZUlkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHNlbGxXZWlnaHQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZ29sZFVuaXRJZDoge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBzZWxsUXVhbnRpdHk6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdmFsaWREZXRhaWw6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgU0VMTF9MSVNUID0ge1xyXG4gIHNlbGxzOiBbXSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBzZWxsRWRpdDogeyAuLi5TRUxMX0VESVQsIC4uLlNFTExfREVUQUlMX0VESVQgfSxcclxuICBzZWxsTGlzdDogU0VMTF9MSVNULFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlU2VsbEVkaXQgPSAoc3RhdGUsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCB9O1xyXG4gIHNlbGxFZGl0W25hbWVdID0geyAuLi5zZWxsRWRpdFtuYW1lXSwgLi4udmFsdWUgfTtcclxuICBsZXQgbmV3U3RhdGUgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbE9uRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBuZXdWYWx1ZSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgbmV3U3RhdGUgPSB1cGRhdGVTZWxsRWRpdChzdGF0ZSwgYWN0aW9uLm5hbWUsIG5ld1ZhbHVlKTtcclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsT25DaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgbmV3VmFsdWUgPSB7XHJcbiAgICB2YWx1ZTogYWN0aW9uLmRhdGEudmFsdWUsXHJcbiAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uZGF0YS52YWx1ZSwgYWN0aW9uLmRhdGEudmFsaWRhdGlvbiksXHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IG5ld1N0YXRlID0gdXBkYXRlU2VsbEVkaXQoc3RhdGUsIGFjdGlvbi5uYW1lLCBuZXdWYWx1ZSk7XHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbENyZWF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHNlbGxFZGl0OiB7IC4uLlNFTExfRURJVCwgLi4uU0VMTF9ERVRBSUxfRURJVCB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbEFkZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0gc3RhdGU7XHJcbiAgYWN0aW9uLnNlbGxFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbENvZGUudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmVtcGxveWVlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxEYXRlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsTm90ZS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5zZWxsRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsQ29kZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmVtcGxveWVlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsRGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxOb3RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5zZWxsRWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24uc2VsbEVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5zZWxsRWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbEFkZFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHsgLi4uU0VMTF9FRElULCAuLi5TRUxMX0RFVEFJTF9FRElUIH07XHJcbiAgc2VsbEVkaXQuc2VsbERldGFpbHMgPSBbXTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgc2VsbEVkaXQ6IHNlbGxFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbEFkZERldGFpbCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0gc3RhdGU7XHJcbiAgYWN0aW9uLnNlbGxFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUuc2VsbEVkaXQucHJvZHVjdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVW5pdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsV2VpZ2h0LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsUXVhbnRpdHkudmFsaWQ7XHJcbiAgaWYgKCFhY3Rpb24uc2VsbEVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuc2VsbEVkaXQucHJvZHVjdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFR5cGVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsV2VpZ2h0LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFF1YW50aXR5LnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5zZWxsRWRpdCxcclxuICAgIC4uLlNFTExfREVUQUlMX0VESVQsXHJcbiAgICB2YWxpZERldGFpbDogYWN0aW9uLnNlbGxFZGl0VmFsaWQsXHJcbiAgfTtcclxuICAvLyBBZGQgZGV0YWlsLlxyXG4gIGlmIChhY3Rpb24uc2VsbEVkaXRWYWxpZCkge1xyXG4gICAgc2VsbEVkaXQuc2VsbERldGFpbHMucHVzaChhY3Rpb24uZGV0YWlsKTtcclxuICAgIC8vIFVwZGF0ZSBXZWlnaHRUb3RhbCBhbmQgUXVhbnRpdHlUb3RhbC5cclxuICAgIGxldCB3ZWlnaHRUb3RhbCA9IDA7XHJcbiAgICBsZXQgcXVhbnRpdHlUb3RhbCA9IDA7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsRGV0YWlscy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHdlaWdodFRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS53ZWlnaHQpO1xyXG4gICAgICBxdWFudGl0eVRvdGFsICs9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxsRWRpdC53ZWlnaHRUb3RhbCA9IHdlaWdodFRvdGFsO1xyXG4gICAgc2VsbEVkaXQucXVhbnRpdHlUb3RhbCA9IHF1YW50aXR5VG90YWw7XHJcbiAgfVxyXG4gIHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHNlbGxFZGl0OiBzZWxsRWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxFZGl0QWN0aW9uID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBpZDogbnVsbCwgLy9hY3Rpb24uc2VsbC5pZCxcclxuICAgIHZlcnNpb246IGFjdGlvbi5zZWxsLnZlcnNpb24sXHJcbiAgICBzZWxsQ29kZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGwuY29kZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGwuc2VsbGVySWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzZWxsRGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGwuc2VsbERhdGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzZWxsTm90ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGwubm90ZSA/IGFjdGlvbi5zZWxsLm5vdGUgOiBcIlwiLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLi4uU0VMTF9ERVRBSUxfRURJVCxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBzZWxsRWRpdDogc2VsbEVkaXQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxFZGl0U3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuc2VsbEVkaXQsXHJcbiAgfTtcclxuICBzZWxsRWRpdC5zZWxsRGV0YWlscyA9IGFjdGlvbi5yZXNwb25zZS5kYXRhO1xyXG4gIC8vIFVwZGF0ZSBXZWlnaHRUb3RhbCBhbmQgUXVhbnRpdHlUb3RhbC5cclxuICBsZXQgd2VpZ2h0VG90YWwgPSAwO1xyXG4gIGxldCBxdWFudGl0eVRvdGFsID0gMDtcclxuICBzZWxsRWRpdC5zZWxsRGV0YWlscy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB3ZWlnaHRUb3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0ud2VpZ2h0KTtcclxuICAgIHF1YW50aXR5VG90YWwgKz0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgfSk7XHJcbiAgc2VsbEVkaXQud2VpZ2h0VG90YWwgPSB3ZWlnaHRUb3RhbDtcclxuICBzZWxsRWRpdC5xdWFudGl0eVRvdGFsID0gcXVhbnRpdHlUb3RhbDtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgc2VsbEVkaXQ6IHNlbGxFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbERldGFpbEVkaXRBY3Rpb24gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIGlkOiBhY3Rpb24uc2VsbERldGFpbC5pZCxcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGxEZXRhaWwucHJvZHVjdElkLFxyXG4gICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsRGV0YWlsLmdvbGRUeXBlSWQsXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2VsbFdlaWdodDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGxEZXRhaWwud2VpZ2h0LFxyXG4gICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGdvbGRVbml0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsRGV0YWlsLmdvbGRVbml0SWQsXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2VsbFF1YW50aXR5OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbERldGFpbC5xdWFudGl0eSxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZERldGFpbDogZmFsc2UsXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IHNlbGxFZGl0OiBzZWxsRWRpdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbFVwZGF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gc3RhdGU7XHJcbiAgYWN0aW9uLnNlbGxFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbENvZGUudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmVtcGxveWVlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnByb2R1Y3RJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFR5cGVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFVuaXRJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFF1YW50aXR5LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsRGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbE5vdGUudmFsaWQ7XHJcbiAgaWYgKCFhY3Rpb24uc2VsbEVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbENvZGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQucHJvZHVjdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFR5cGVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsV2VpZ2h0LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFF1YW50aXR5LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbERhdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsTm90ZS50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuc2VsbEVkaXQsXHJcbiAgICB2YWxpZDogYWN0aW9uLnNlbGxFZGl0VmFsaWQsXHJcbiAgICB3YWl0aW5nOiBhY3Rpb24uc2VsbEVkaXRWYWxpZCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsVXBkYXRlU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0geyAuLi5TRUxMX0VESVQsIC4uLlNFTExfREVUQUlMX0VESVQgfTtcclxuICBzZWxsRWRpdC5zZWxsRGV0YWlscyA9IFtdO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBzZWxsRWRpdDogc2VsbEVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsTGlzdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxMaXN0ID0geyAuLi5zdGF0ZS5zZWxsTGlzdCwgd2FpdGluZzogdHJ1ZSB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsTGlzdDogc2VsbExpc3QgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsTGlzdFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qIGxldCBzZWxscyA9IFtdO1xyXG4gIGxldCBkYXRhID0gYWN0aW9uLnJlc3BvbnNlLmRhdGE7XHJcbiAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgIHNlbGxzLnB1c2goe1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgaWQ6IGtleSxcclxuICAgICAgbmFtZTogZGF0YVtrZXldLm5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGRhdGFba2V5XS5lbXBsb3llZUlkLFxyXG4gICAgICBwcm9kdWN0SWQ6IGRhdGFba2V5XS5wcm9kdWN0SWQsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IGRhdGFba2V5XS5nb2xkVHlwZUlkLFxyXG4gICAgICBnb2xkVW5pdElkOiBkYXRhW2tleV0uZ29sZFVuaXRJZCxcclxuICAgICAgd2VpZ2h0OiBkYXRhW2tleV0ud2VpZ2h0LFxyXG4gICAgICBxdWFudGl0eTogZGF0YVtrZXldLnF1YW50aXR5LFxyXG4gICAgICBpbnB1dERhdGU6IGRhdGFba2V5XS5pbnB1dERhdGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhW2tleV0uZGVzY3JpcHRpb24sXHJcbiAgICAgIGltYWdlOiBkYXRhW2tleV0uaW1hZ2UsXHJcbiAgICB9KTtcclxuICB9ICovXHJcbiAgbGV0IHNlbGxMaXN0ID0ge1xyXG4gICAgLi4uc3RhdGUuc2VsbExpc3QsXHJcbiAgICBzZWxsczogYWN0aW9uLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB3YWl0aW5nOiBmYWxzZSxcclxuICB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIHNlbGxMaXN0OiBzZWxsTGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbExpc3Q6IHNlbGxMaXN0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbEVycm9yID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBzZWxsTGlzdCA9IHsgLi4uc3RhdGUuc2VsbExpc3QsIC4uLnNlbGxMaXN0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBhY3Rpb24uZXJyb3IsIHNlbGxMaXN0OiBzZWxsTGlzdCB9KTtcclxuICBpZiAoYWN0aW9uLmNhbGxlciA9PT0gYWN0aW9uVHlwZXMuU0VMTF9MSVNUKSB7XHJcbiAgICBzdGF0ZS5zZWxsTGlzdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLnNlbGxFZGl0LndhaXRpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxFcnJvckhhbmRsZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIHNlbGxMaXN0ID0geyAuLi5zdGF0ZS5zZWxsTGlzdCwgLi4uc2VsbExpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgc2VsbExpc3Q6IHNlbGxMaXN0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoIWFjdGlvbi5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICAgIC4uLlNFTExfRURJVCxcclxuICAgICAgLi4uU0VMTF9ERVRBSUxfRURJVCxcclxuICAgIH07XHJcbiAgICBzZWxsRWRpdC5zZWxsRGV0YWlscyA9IFtdO1xyXG4gICAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgIHNlbGxFZGl0OiBzZWxsRWRpdCxcclxuICAgIH07XHJcbiAgICByZXR1cm4gc3RhdGVOZXc7XHJcbiAgfVxyXG4gIC8vIGxldCBlbXBsb3llZUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbXBsb3llZUlkXCIpO1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIC8vIGlkOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5pZCxcclxuICAgIHZlcnNpb246IGFjdGlvbi5yZXNwb25zZS5kYXRhLnZlcnNpb24sXHJcbiAgICBzZWxsQ29kZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnJlc3BvbnNlLmRhdGEuY29kZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnJlc3BvbnNlLmRhdGEucmVjZWl2ZXJJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxEYXRlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5zZWxsRGF0ZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxOb3RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5ub3RlID8gYWN0aW9uLnJlc3BvbnNlLmRhdGEubm90ZSA6IFwiXCIsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgc2VsbEVkaXQuc2VsbERldGFpbHMgPSBhY3Rpb24ucmVzcG9uc2VEZXRhaWxMaXN0LmRhdGE7XHJcbiAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gIGxldCB3ZWlnaHRUb3RhbCA9IDA7XHJcbiAgbGV0IHF1YW50aXR5VG90YWwgPSAwO1xyXG4gIHNlbGxFZGl0LnNlbGxEZXRhaWxzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHdlaWdodFRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS53ZWlnaHQpO1xyXG4gICAgcXVhbnRpdHlUb3RhbCArPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICB9KTtcclxuICBzZWxsRWRpdC53ZWlnaHRUb3RhbCA9IHdlaWdodFRvdGFsO1xyXG4gIHNlbGxFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG5cclxuICBzZWxsRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxFZGl0LFxyXG4gICAgLi4uc2VsbEVkaXQsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgc2VsbEVkaXQ6IHNlbGxFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBzZWxsRWRpdDogc2VsbEVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvKiBjb25zb2xlLmxvZyhcclxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBTZWxsIGluaXRpYWxpemUgLi4uLi5cIlxyXG4gICk7ICovXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX09OX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gc2VsbE9uRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfT05fQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHNlbGxPbkNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0NSRUFURTpcclxuICAgICAgcmV0dXJuIHNlbGxDcmVhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfQUREOlxyXG4gICAgICByZXR1cm4gc2VsbEFkZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9BRERfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHNlbGxBZGRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9BRERfREVUQUlMOlxyXG4gICAgICByZXR1cm4gc2VsbEFkZERldGFpbChzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfRURJVDpcclxuICAgICAgcmV0dXJuIHNlbGxFZGl0QWN0aW9uKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0VESVRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHNlbGxFZGl0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9ERVRBSUxfRURJVDpcclxuICAgICAgcmV0dXJuIHNlbGxEZXRhaWxFZGl0QWN0aW9uKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX1VQREFURTpcclxuICAgICAgcmV0dXJuIHNlbGxVcGRhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfVVBEQVRFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBzZWxsVXBkYXRlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfTElTVDpcclxuICAgICAgcmV0dXJuIHNlbGxMaXN0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHNlbGxMaXN0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICAvLyBJbXBvcnRGcm9tRmFjdG9yeS5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9HRVRfQllfQ09ERV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHNlbGxFcnJvcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9FUlJPUl9IQU5ETEVEOlxyXG4gICAgICByZXR1cm4gc2VsbEVycm9ySGFuZGxlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9