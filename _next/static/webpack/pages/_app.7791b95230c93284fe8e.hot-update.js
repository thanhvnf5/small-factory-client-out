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
  sellName: {
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
  goldUnitId: {
    value: "",
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
  sellQuantity: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  sellInputDate: {
    value: new Date(),
    valid: true,
    touched: false,
    autoFocus: false
  },
  sellDescription: {
    value: "",
    valid: true,
    touched: false,
    autoFocus: false
  },
  valid: false,
  waiting: false
};
var SELL_LIST = {
  sells: [],
  waiting: false
};
var initialState = {
  sellEdit: SELL_EDIT,
  sellList: SELL_LIST,
  error: null
};

var sellNameFocus = function sellNameFocus(state, action) {
  var sellName = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    sellName: _objectSpread(_objectSpread({}, state.sellEdit.sellName), sellName)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellNameChanged = function sellNameChanged(state, action) {
  var sellEdit = {
    sellName: {
      value: action.sellName,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.sellName, action.validation),
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellEmployeeIdFocus = function sellEmployeeIdFocus(state, action) {
  var employeeId = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    employeeId: _objectSpread(_objectSpread({}, state.sellEdit.employeeId), employeeId)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellEmployeeIdChanged = function sellEmployeeIdChanged(state, action) {
  var sellEdit = {
    employeeId: {
      value: action.employeeId,
      valid: !!action.employeeId,
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellProductIdFocus = function sellProductIdFocus(state, action) {
  var productId = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    productId: _objectSpread(_objectSpread({}, state.sellEdit.productId), productId)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellProductIdChanged = function sellProductIdChanged(state, action) {
  var sellEdit = {
    productId: {
      value: action.productId,
      valid: !!action.productId,
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellGoldTypeIdFocus = function sellGoldTypeIdFocus(state, action) {
  var goldTypeId = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    goldTypeId: _objectSpread(_objectSpread({}, state.sellEdit.goldTypeId), goldTypeId)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellGoldTypeIdChanged = function sellGoldTypeIdChanged(state, action) {
  var sellEdit = {
    goldTypeId: {
      value: action.goldTypeId,
      valid: !!action.goldTypeId,
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellGoldUnitIdFocus = function sellGoldUnitIdFocus(state, action) {
  var goldUnitId = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    goldUnitId: _objectSpread(_objectSpread({}, state.sellEdit.goldUnitId), goldUnitId)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellGoldUnitIdChanged = function sellGoldUnitIdChanged(state, action) {
  var sellEdit = {
    goldUnitId: {
      value: action.goldUnitId,
      valid: !!action.goldUnitId,
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellWeightFocus = function sellWeightFocus(state, action) {
  var sellWeight = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    sellWeight: _objectSpread(_objectSpread({}, state.sellEdit.sellWeight), sellWeight)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellWeightChanged = function sellWeightChanged(state, action) {
  var sellEdit = {
    sellWeight: {
      value: action.sellWeight,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.sellWeight, action.validation),
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellQuantityFocus = function sellQuantityFocus(state, action) {
  var sellQuantity = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    sellQuantity: _objectSpread(_objectSpread({}, state.sellEdit.sellQuantity), sellQuantity)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellQuantityChanged = function sellQuantityChanged(state, action) {
  var sellEdit = {
    sellQuantity: {
      value: action.sellQuantity,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.sellQuantity, action.validation),
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellInputDateFocus = function sellInputDateFocus(state, action) {
  var sellInputDate = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    sellInputDate: _objectSpread(_objectSpread({}, state.sellEdit.sellInputDate), sellInputDate)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellInputDateChanged = function sellInputDateChanged(state, action) {
  var sellEdit = {
    sellInputDate: {
      value: action.sellInputDate,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.sellInputDate, action.validation),
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellDescriptionFocus = function sellDescriptionFocus(state, action) {
  var sellDescription = {
    touched: true,
    autoFocus: true
  };
  var sellEdit = {
    sellDescription: _objectSpread(_objectSpread({}, state.sellEdit.sellDescription), sellDescription)
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellDescriptionChanged = function sellDescriptionChanged(state, action) {
  var sellEdit = {
    sellDescription: {
      value: action.sellDescription,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.sellDescription, action.validation),
      touched: true
    }
  };
  sellEdit = _objectSpread(_objectSpread({}, state.sellEdit), sellEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: sellEdit
  });

  return stateNew;
};

var sellCreate = function sellCreate(state, action) {
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: SELL_EDIT
  });

  return stateNew;
};

var sellAdd = function sellAdd(state, action) {
  var stateNew = state;
  action.sellEditValid = state.sellEdit.sellName.valid && state.sellEdit.employeeId.valid && state.sellEdit.productId.valid && state.sellEdit.goldTypeId.valid && state.sellEdit.goldUnitId.valid && state.sellEdit.sellWeight.valid && state.sellEdit.sellQuantity.valid && state.sellEdit.sellInputDate.valid && state.sellEdit.sellDescription.valid;

  if (!action.sellEditValid) {
    state.sellEdit.sellName.touched = true;
    state.sellEdit.employeeId.touched = true;
    state.sellEdit.productId.touched = true;
    state.sellEdit.goldTypeId.touched = true;
    state.sellEdit.goldUnitId.touched = true;
    state.sellEdit.sellWeight.touched = true;
    state.sellEdit.sellQuantity.touched = true;
    state.sellEdit.sellInputDate.touched = true;
    state.sellEdit.sellDescription.touched = true;
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
  // let stateNew = updateObject(state, { sellEdit: SELL_EDIT });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: SELL_EDIT
  });

  return stateNew;
};

var sellEdit = function sellEdit(state, action) {
  var sellEdit = {
    id: action.sell.id,
    sellName: {
      value: action.sell.name,
      valid: true,
      touched: false,
      autoFocus: true
    },
    employeeId: {
      value: action.sell.employeeId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    productId: {
      value: action.sell.productId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    goldTypeId: {
      value: action.sell.goldTypeId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    goldUnitId: {
      value: action.sell.goldUnitId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellWeight: {
      value: action.sell.weight,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellQuantity: {
      value: action.sell.quantity,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellInputDate: {
      value: action.sell.inputDate,
      valid: true,
      touched: false,
      autoFocus: false
    },
    sellDescription: {
      value: action.sell.description,
      valid: true,
      touched: false,
      autoFocus: false
    },
    valid: true
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
  action.sellEditValid = state.sellEdit.sellName.valid && state.sellEdit.employeeId.valid && state.sellEdit.productId.valid && state.sellEdit.goldTypeId.valid && state.sellEdit.goldUnitId.valid && state.sellEdit.sellWeight.valid && state.sellEdit.sellQuantity.valid && state.sellEdit.sellInputDate.valid && state.sellEdit.sellDescription.valid;

  if (!action.sellEditValid) {
    state.sellEdit.sellName.touched = true;
    state.sellEdit.employeeId.touched = true;
    state.sellEdit.productId.touched = true;
    state.sellEdit.goldTypeId.touched = true;
    state.sellEdit.goldUnitId.touched = true;
    state.sellEdit.sellWeight.touched = true;
    state.sellEdit.sellQuantity.touched = true;
    state.sellEdit.sellInputDate.touched = true;
    state.sellEdit.sellDescription.touched = true;
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
  // let stateNew = updateObject(state, { error: null,  sellEdit: SELL_EDIT });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    sellEdit: SELL_EDIT
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
  var sells = [];
  var data = action.response.data;

  for (var key in data) {
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
      image: data[key].image
    });
  }

  var sellList = _objectSpread(_objectSpread({}, state.sellList), {}, {
    sells: sells,
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* console.log(
    new Date().toLocaleString() + " ............ Sell initialize ....."
  ); */
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_NAME_FOCUS"]:
      return sellNameFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_NAME_CHANGED"]:
      return sellNameChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_EMPLOYEE_ID_FOCUS"]:
      return sellEmployeeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_EMPLOYEE_ID_CHANGED"]:
      return sellEmployeeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_PRODUCT_ID_FOCUS"]:
      return sellProductIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_PRODUCT_ID_CHANGED"]:
      return sellProductIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_GOLD_TYPE_ID_FOCUS"]:
      return sellGoldTypeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_GOLD_TYPE_ID_CHANGED"]:
      return sellGoldTypeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_GOLD_UNIT_ID_FOCUS"]:
      return sellGoldUnitIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_GOLD_UNIT_ID_CHANGED"]:
      return sellGoldUnitIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_WEIGHT_FOCUS"]:
      return sellWeightFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_WEIGHT_CHANGED"]:
      return sellWeightChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_QUANTITY_FOCUS"]:
      return sellQuantityFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_QUANTITY_CHANGED"]:
      return sellQuantityChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_INPUT_DATE_FOCUS"]:
      return sellInputDateFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_INPUT_DATE_CHANGED"]:
      return sellInputDateChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_DESCRIPTION_FOCUS"]:
      return sellDescriptionFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_DESCRIPTION_CHANGED"]:
      return sellDescriptionChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_CREATE"]:
      return sellCreate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ADD"]:
      return sellAdd(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_ADD_SUCCESS"]:
      return sellAddSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_EDIT"]:
      return sellEdit(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_UPDATE"]:
      return sellUpdate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_UPDATE_SUCCESS"]:
      return sellUpdateSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_LIST"]:
      return sellList(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SELL_LIST_SUCCESS"]:
      return sellListSuccess(state, action);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3NlbGxSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIlNFTExfRURJVCIsImlkIiwic2VsbE5hbWUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImVtcGxveWVlSWQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwiZ29sZFVuaXRJZCIsInNlbGxXZWlnaHQiLCJzZWxsUXVhbnRpdHkiLCJzZWxsSW5wdXREYXRlIiwiRGF0ZSIsInNlbGxEZXNjcmlwdGlvbiIsIndhaXRpbmciLCJTRUxMX0xJU1QiLCJzZWxscyIsImluaXRpYWxTdGF0ZSIsInNlbGxFZGl0Iiwic2VsbExpc3QiLCJlcnJvciIsInNlbGxOYW1lRm9jdXMiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXRlTmV3Iiwic2VsbE5hbWVDaGFuZ2VkIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRpb24iLCJzZWxsRW1wbG95ZWVJZEZvY3VzIiwic2VsbEVtcGxveWVlSWRDaGFuZ2VkIiwic2VsbFByb2R1Y3RJZEZvY3VzIiwic2VsbFByb2R1Y3RJZENoYW5nZWQiLCJzZWxsR29sZFR5cGVJZEZvY3VzIiwic2VsbEdvbGRUeXBlSWRDaGFuZ2VkIiwic2VsbEdvbGRVbml0SWRGb2N1cyIsInNlbGxHb2xkVW5pdElkQ2hhbmdlZCIsInNlbGxXZWlnaHRGb2N1cyIsInNlbGxXZWlnaHRDaGFuZ2VkIiwic2VsbFF1YW50aXR5Rm9jdXMiLCJzZWxsUXVhbnRpdHlDaGFuZ2VkIiwic2VsbElucHV0RGF0ZUZvY3VzIiwic2VsbElucHV0RGF0ZUNoYW5nZWQiLCJzZWxsRGVzY3JpcHRpb25Gb2N1cyIsInNlbGxEZXNjcmlwdGlvbkNoYW5nZWQiLCJzZWxsQ3JlYXRlIiwic2VsbEFkZCIsInNlbGxFZGl0VmFsaWQiLCJzZWxsQWRkU3VjY2VzcyIsInNlbGwiLCJuYW1lIiwid2VpZ2h0IiwicXVhbnRpdHkiLCJpbnB1dERhdGUiLCJkZXNjcmlwdGlvbiIsInNlbGxVcGRhdGUiLCJzZWxsVXBkYXRlU3VjY2VzcyIsInNlbGxMaXN0U3VjY2VzcyIsImRhdGEiLCJyZXNwb25zZSIsImtleSIsInB1c2giLCJpbWFnZSIsInNlbGxFcnJvciIsImNhbGxlciIsImFjdGlvblR5cGVzIiwic2VsbEVycm9ySGFuZGxlZCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRSxJQURZO0FBRWhCQyxVQUFRLEVBQUU7QUFDUkMsU0FBSyxFQUFFLEVBREM7QUFFUkMsU0FBSyxFQUFFLEtBRkM7QUFHUkMsV0FBTyxFQUFFLEtBSEQ7QUFJUkMsYUFBUyxFQUFFO0FBSkgsR0FGTTtBQVFoQkMsWUFBVSxFQUFFO0FBQ1ZKLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBUkk7QUFjaEJFLFdBQVMsRUFBRTtBQUNUTCxTQUFLLEVBQUUsSUFERTtBQUVUQyxTQUFLLEVBQUUsS0FGRTtBQUdUQyxXQUFPLEVBQUUsS0FIQTtBQUlUQyxhQUFTLEVBQUU7QUFKRixHQWRLO0FBb0JoQkcsWUFBVSxFQUFFO0FBQ1ZOLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBcEJJO0FBMEJoQkksWUFBVSxFQUFFO0FBQ1ZQLFNBQUssRUFBRSxFQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBMUJJO0FBZ0NoQkssWUFBVSxFQUFFO0FBQ1ZSLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBaENJO0FB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T3BCLFVBQVUsQ0FBQ3RCLEtBQUQsRUFBUUMsTUFBUixDQUFqQjs7QUFDRixTQUFLeUMscURBQUw7QUFDRSxhQUFPbkIsT0FBTyxDQUFDdkIsS0FBRCxFQUFRQyxNQUFSLENBQWQ7O0FBQ0YsU0FBS3lDLDZEQUFMO0FBQ0UsYUFBT2pCLGNBQWMsQ0FBQ3pCLEtBQUQsRUFBUUMsTUFBUixDQUFyQjs7QUFFRixTQUFLeUMsc0RBQUw7QUFDRSxhQUFPOUMsUUFBUSxDQUFDSSxLQUFELEVBQVFDLE1BQVIsQ0FBZjs7QUFDRixTQUFLeUMsd0RBQUw7QUFDRSxhQUFPVixVQUFVLENBQUNoQyxLQUFELEVBQVFDLE1BQVIsQ0FBakI7O0FBQ0YsU0FBS3lDLGdFQUFMO0FBQ0UsYUFBT1QsaUJBQWlCLENBQUNqQyxLQUFELEVBQVFDLE1BQVIsQ0FBeEI7O0FBRUYsU0FBS3lDLHNEQUFMO0FBQ0UsYUFBTzdDLFFBQVEsQ0FBQ0csS0FBRCxFQUFRQyxNQUFSLENBQWY7O0FBQ0YsU0FBS3lDLDhEQUFMO0FBQ0UsYUFBT1IsZUFBZSxDQUFDbEMsS0FBRCxFQUFRQyxNQUFSLENBQXRCOztBQUVGLFNBQUt5Qyx1REFBTDtBQUNFLGFBQU9GLFNBQVMsQ0FBQ3hDLEtBQUQsRUFBUUMsTUFBUixDQUFoQjs7QUFDRixTQUFLeUMsK0RBQUw7QUFDRSxhQUFPQyxnQkFBZ0IsQ0FBQzNDLEtBQUQsRUFBUUMsTUFBUixDQUF2Qjs7QUFDRjtBQUNFLGFBQU9ELEtBQVA7QUE5REo7QUFnRUQsQ0FwRUQ7O0FBc0VlNEMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NzkxYjk1MjMwYzkzMjg0ZmU4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tWYWxpZGl0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbGl0eVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IFNFTExfRURJVCA9IHtcclxuICBpZDogbnVsbCxcclxuICBzZWxsTmFtZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9LFxyXG4gIGVtcGxveWVlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHJvZHVjdElkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRUeXBlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZ29sZFVuaXRJZDoge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBzZWxsV2VpZ2h0OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHNlbGxRdWFudGl0eToge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBzZWxsSW5wdXREYXRlOiB7XHJcbiAgICB2YWx1ZTogbmV3IERhdGUoKSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgc2VsbERlc2NyaXB0aW9uOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdmFsaWQ6IGZhbHNlLFxyXG4gIHdhaXRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgU0VMTF9MSVNUID0ge1xyXG4gIHNlbGxzOiBbXSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBzZWxsRWRpdDogU0VMTF9FRElULFxyXG4gIHNlbGxMaXN0OiBTRUxMX0xJU1QsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBzZWxsTmFtZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbE5hbWUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgc2VsbE5hbWU6IHtcclxuICAgICAgLi4uc3RhdGUuc2VsbEVkaXQuc2VsbE5hbWUsXHJcbiAgICAgIC4uLnNlbGxOYW1lLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbE5hbWVDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBzZWxsTmFtZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGxOYW1lLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uc2VsbE5hbWUsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxFbXBsb3llZUlkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgLi4uc3RhdGUuc2VsbEVkaXQuZW1wbG95ZWVJZCxcclxuICAgICAgLi4uZW1wbG95ZWVJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxFbXBsb3llZUlkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmVtcGxveWVlSWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5lbXBsb3llZUlkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbFByb2R1Y3RJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5zZWxsRWRpdC5wcm9kdWN0SWQsXHJcbiAgICAgIC4uLnByb2R1Y3RJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxQcm9kdWN0SWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wcm9kdWN0SWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5wcm9kdWN0SWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsR29sZFR5cGVJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIC4uLnN0YXRlLnNlbGxFZGl0LmdvbGRUeXBlSWQsXHJcbiAgICAgIC4uLmdvbGRUeXBlSWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsR29sZFR5cGVJZENoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5nb2xkVHlwZUlkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24uZ29sZFR5cGVJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxHb2xkVW5pdElkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBnb2xkVW5pdElkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIGdvbGRVbml0SWQ6IHtcclxuICAgICAgLi4uc3RhdGUuc2VsbEVkaXQuZ29sZFVuaXRJZCxcclxuICAgICAgLi4uZ29sZFVuaXRJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxHb2xkVW5pdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmdvbGRVbml0SWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5nb2xkVW5pdElkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbFdlaWdodEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbFdlaWdodCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBzZWxsV2VpZ2h0OiB7XHJcbiAgICAgIC4uLnN0YXRlLnNlbGxFZGl0LnNlbGxXZWlnaHQsXHJcbiAgICAgIC4uLnNlbGxXZWlnaHQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsV2VpZ2h0Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgc2VsbFdlaWdodDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGxXZWlnaHQsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5zZWxsV2VpZ2h0LCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsUXVhbnRpdHlGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxRdWFudGl0eSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBzZWxsUXVhbnRpdHk6IHtcclxuICAgICAgLi4uc3RhdGUuc2VsbEVkaXQuc2VsbFF1YW50aXR5LFxyXG4gICAgICAuLi5zZWxsUXVhbnRpdHksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsUXVhbnRpdHlDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBzZWxsUXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsUXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5zZWxsUXVhbnRpdHksIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQsIC4uLnNlbGxFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxJbnB1dERhdGVGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxJbnB1dERhdGUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgc2VsbElucHV0RGF0ZToge1xyXG4gICAgICAuLi5zdGF0ZS5zZWxsRWRpdC5zZWxsSW5wdXREYXRlLFxyXG4gICAgICAuLi5zZWxsSW5wdXREYXRlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbElucHV0RGF0ZUNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIHNlbGxJbnB1dERhdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsSW5wdXREYXRlLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uc2VsbElucHV0RGF0ZSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbERlc2NyaXB0aW9uRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRGVzY3JpcHRpb24gPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgc2VsbERlc2NyaXB0aW9uOiB7XHJcbiAgICAgIC4uLnN0YXRlLnNlbGxFZGl0LnNlbGxEZXNjcmlwdGlvbixcclxuICAgICAgLi4uc2VsbERlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbERlc2NyaXB0aW9uQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgc2VsbERlc2NyaXB0aW9uOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbERlc2NyaXB0aW9uLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uc2VsbERlc2NyaXB0aW9uLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsQ3JlYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IFNFTExfRURJVCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxBZGQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5zZWxsRWRpdFZhbGlkID1cclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxOYW1lLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5lbXBsb3llZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRVbml0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxXZWlnaHQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxRdWFudGl0eS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbElucHV0RGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbERlc2NyaXB0aW9uLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLnNlbGxFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxOYW1lLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZW1wbG95ZWVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRUeXBlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVW5pdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFdlaWdodC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxJbnB1dERhdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsRGVzY3JpcHRpb24udG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5zZWxsRWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLnNlbGxFZGl0VmFsaWQsXHJcbiAgfTtcclxuICBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsQWRkU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IHNlbGxFZGl0OiBTRUxMX0VESVQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBTRUxMX0VESVQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsRWRpdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgaWQ6IGFjdGlvbi5zZWxsLmlkLFxyXG4gICAgc2VsbE5hbWU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLm5hbWUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLmVtcGxveWVlSWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLmdvbGRUeXBlSWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbC5nb2xkVW5pdElkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2VsbFdlaWdodDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGwud2VpZ2h0LFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2VsbFF1YW50aXR5OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbC5xdWFudGl0eSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxJbnB1dERhdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLmlucHV0RGF0ZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxEZXNjcmlwdGlvbjoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGwuZGVzY3JpcHRpb24sXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgc2VsbEVkaXQ6IHNlbGxFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsVXBkYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24uc2VsbEVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsTmFtZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuZW1wbG95ZWVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQucHJvZHVjdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVW5pdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsV2VpZ2h0LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsUXVhbnRpdHkudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxJbnB1dERhdGUudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxEZXNjcmlwdGlvbi52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5zZWxsRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsTmFtZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmVtcGxveWVlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5wcm9kdWN0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFVuaXRJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsUXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsSW5wdXREYXRlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbERlc2NyaXB0aW9uLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5zZWxsRWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24uc2VsbEVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5zZWxsRWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxVcGRhdGVTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IG51bGwsICBzZWxsRWRpdDogU0VMTF9FRElUIH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogU0VMTF9FRElUIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbExpc3QgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsTGlzdCA9IHsgLi4uc3RhdGUuc2VsbExpc3QsIHdhaXRpbmc6IHRydWUgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbExpc3Q6IHNlbGxMaXN0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbExpc3RTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbHMgPSBbXTtcclxuICBsZXQgZGF0YSA9IGFjdGlvbi5yZXNwb25zZS5kYXRhO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICBzZWxscy5wdXNoKHtcclxuICAgICAga2V5OiBrZXksXHJcbiAgICAgIGlkOiBrZXksXHJcbiAgICAgIG5hbWU6IGRhdGFba2V5XS5uYW1lLFxyXG4gICAgICBlbXBsb3llZUlkOiBkYXRhW2tleV0uZW1wbG95ZWVJZCxcclxuICAgICAgcHJvZHVjdElkOiBkYXRhW2tleV0ucHJvZHVjdElkLFxyXG4gICAgICBnb2xkVHlwZUlkOiBkYXRhW2tleV0uZ29sZFR5cGVJZCxcclxuICAgICAgZ29sZFVuaXRJZDogZGF0YVtrZXldLmdvbGRVbml0SWQsXHJcbiAgICAgIHdlaWdodDogZGF0YVtrZXldLndlaWdodCxcclxuICAgICAgcXVhbnRpdHk6IGRhdGFba2V5XS5xdWFudGl0eSxcclxuICAgICAgaW5wdXREYXRlOiBkYXRhW2tleV0uaW5wdXREYXRlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YVtrZXldLmRlc2NyaXB0aW9uLFxyXG4gICAgICBpbWFnZTogZGF0YVtrZXldLmltYWdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxldCBzZWxsTGlzdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxMaXN0LFxyXG4gICAgc2VsbHM6IHNlbGxzLFxyXG4gICAgd2FpdGluZzogZmFsc2UsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IG51bGwsICBzZWxsTGlzdDogc2VsbExpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxMaXN0OiBzZWxsTGlzdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxFcnJvciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gc2VsbExpc3QgPSB7IC4uLnN0YXRlLnNlbGxMaXN0LCAuLi5zZWxsTGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBzZWxsTGlzdDogc2VsbExpc3QgfSk7XHJcbiAgaWYgKGFjdGlvbi5jYWxsZXIgPT09IGFjdGlvblR5cGVzLlNFTExfTElTVCkge1xyXG4gICAgc3RhdGUuc2VsbExpc3Qud2FpdGluZyA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsRXJyb3JIYW5kbGVkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBzZWxsTGlzdCA9IHsgLi4uc3RhdGUuc2VsbExpc3QsIC4uLnNlbGxMaXN0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBhY3Rpb24uZXJyb3IsIHNlbGxMaXN0OiBzZWxsTGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIFNlbGwgaW5pdGlhbGl6ZSAuLi4uLlwiXHJcbiAgKTsgKi9cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfTkFNRV9GT0NVUzpcclxuICAgICAgcmV0dXJuIHNlbGxOYW1lRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfTkFNRV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gc2VsbE5hbWVDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0VNUExPWUVFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gc2VsbEVtcGxveWVlSWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9FTVBMT1lFRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gc2VsbEVtcGxveWVlSWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX1BST0RVQ1RfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBzZWxsUHJvZHVjdElkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfUFJPRFVDVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gc2VsbFByb2R1Y3RJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfR09MRF9UWVBFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gc2VsbEdvbGRUeXBlSWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9HT0xEX1RZUEVfSURfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHNlbGxHb2xkVHlwZUlkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9HT0xEX1VOSVRfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBzZWxsR29sZFVuaXRJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0dPTERfVU5JVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gc2VsbEdvbGRVbml0SWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX1dFSUdIVF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHNlbGxXZWlnaHRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9XRUlHSFRfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHNlbGxXZWlnaHRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX1FVQU5USVRZX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gc2VsbFF1YW50aXR5Rm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfUVVBTlRJVFlfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHNlbGxRdWFudGl0eUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfSU5QVVRfREFURV9GT0NVUzpcclxuICAgICAgcmV0dXJuIHNlbGxJbnB1dERhdGVGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9JTlBVVF9EQVRFX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBzZWxsSW5wdXREYXRlQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9ERVNDUklQVElPTl9GT0NVUzpcclxuICAgICAgcmV0dXJuIHNlbGxEZXNjcmlwdGlvbkZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0RFU0NSSVBUSU9OX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBzZWxsRGVzY3JpcHRpb25DaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9DUkVBVEU6XHJcbiAgICAgIHJldHVybiBzZWxsQ3JlYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0FERDpcclxuICAgICAgcmV0dXJuIHNlbGxBZGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfQUREX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBzZWxsQWRkU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfRURJVDpcclxuICAgICAgcmV0dXJuIHNlbGxFZGl0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX1VQREFURTpcclxuICAgICAgcmV0dXJuIHNlbGxVcGRhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfVVBEQVRFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBzZWxsVXBkYXRlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfTElTVDpcclxuICAgICAgcmV0dXJuIHNlbGxMaXN0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHNlbGxMaXN0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfRVJST1I6XHJcbiAgICAgIHJldHVybiBzZWxsRXJyb3Ioc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfRVJST1JfSEFORExFRDpcclxuICAgICAgcmV0dXJuIHNlbGxFcnJvckhhbmRsZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==