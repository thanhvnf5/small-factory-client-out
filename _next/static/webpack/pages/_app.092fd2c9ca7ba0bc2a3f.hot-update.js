webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/reducers/purchaseReducer.js":
/*!***********************************************!*\
  !*** ./src/store/reducers/purchaseReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var PURCHASE_EDIT = {
  id: null,
  purchaseName: {
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
  purchaseWeight: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  goldUnitId: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  purchaseQuantity: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  purchaseInputDate: {
    value: new Date(),
    valid: true,
    touched: false,
    autoFocus: false
  },
  purchaseDescription: {
    value: "",
    valid: true,
    touched: false,
    autoFocus: false
  },
  valid: false,
  waiting: false
};
var PURCHASE_LIST = {
  purchases: [],
  waiting: false
};
var initialState = {
  purchaseEdit: PURCHASE_EDIT,
  purchaseList: PURCHASE_LIST,
  error: null
};

var purchaseNameFocus = function purchaseNameFocus(state, action) {
  var purchaseName = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    purchaseName: _objectSpread(_objectSpread({}, state.purchaseEdit.purchaseName), purchaseName)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseNameChanged = function purchaseNameChanged(state, action) {
  var purchaseEdit = {
    purchaseName: {
      value: action.purchaseName,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.purchaseName, action.validation),
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseEmployeeIdFocus = function purchaseEmployeeIdFocus(state, action) {
  var employeeId = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    employeeId: _objectSpread(_objectSpread({}, state.purchaseEdit.employeeId), employeeId)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseEmployeeIdChanged = function purchaseEmployeeIdChanged(state, action) {
  var purchaseEdit = {
    employeeId: {
      value: action.employeeId,
      valid: !!action.employeeId,
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseProductIdFocus = function purchaseProductIdFocus(state, action) {
  var productId = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    productId: _objectSpread(_objectSpread({}, state.purchaseEdit.productId), productId)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseProductIdChanged = function purchaseProductIdChanged(state, action) {
  var purchaseEdit = {
    productId: {
      value: action.productId,
      valid: !!action.productId,
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseGoldTypeIdFocus = function purchaseGoldTypeIdFocus(state, action) {
  var goldTypeId = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    goldTypeId: _objectSpread(_objectSpread({}, state.purchaseEdit.goldTypeId), goldTypeId)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseGoldTypeIdChanged = function purchaseGoldTypeIdChanged(state, action) {
  var purchaseEdit = {
    goldTypeId: {
      value: action.goldTypeId,
      valid: !!action.goldTypeId,
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseWeightFocus = function purchaseWeightFocus(state, action) {
  var purchaseWeight = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    purchaseWeight: _objectSpread(_objectSpread({}, state.purchaseEdit.purchaseWeight), purchaseWeight)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseWeightChanged = function purchaseWeightChanged(state, action) {
  var purchaseEdit = {
    purchaseWeight: {
      value: action.purchaseWeight,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.purchaseWeight, action.validation),
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseGoldUnitIdFocus = function purchaseGoldUnitIdFocus(state, action) {
  var goldUnitId = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    goldUnitId: _objectSpread(_objectSpread({}, state.purchaseEdit.goldUnitId), goldUnitId)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseGoldUnitIdChanged = function purchaseGoldUnitIdChanged(state, action) {
  var purchaseEdit = {
    goldUnitId: {
      value: action.goldUnitId,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.goldUnitId, action.validation),
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseQuantityFocus = function purchaseQuantityFocus(state, action) {
  var purchaseQuantity = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    purchaseQuantity: _objectSpread(_objectSpread({}, state.purchaseEdit.purchaseQuantity), purchaseQuantity)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseQuantityChanged = function purchaseQuantityChanged(state, action) {
  var purchaseEdit = {
    purchaseQuantity: {
      value: action.purchaseQuantity,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.purchaseQuantity, action.validation),
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseInputDateFocus = function purchaseInputDateFocus(state, action) {
  var purchaseInputDate = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    purchaseInputDate: _objectSpread(_objectSpread({}, state.purchaseEdit.purchaseInputDate), purchaseInputDate)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseInputDateChanged = function purchaseInputDateChanged(state, action) {
  var purchaseEdit = {
    purchaseInputDate: {
      value: action.purchaseInputDate,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.purchaseInputDate, action.validation),
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseDescriptionFocus = function purchaseDescriptionFocus(state, action) {
  var purchaseDescription = {
    touched: true,
    autoFocus: true
  };
  var purchaseEdit = {
    purchaseDescription: _objectSpread(_objectSpread({}, state.purchaseEdit.purchaseDescription), purchaseDescription)
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseDescriptionChanged = function purchaseDescriptionChanged(state, action) {
  var purchaseEdit = {
    purchaseDescription: {
      value: action.purchaseDescription,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.purchaseDescription, action.validation),
      touched: true
    }
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseCreate = function purchaseCreate(state, action) {
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: PURCHASE_EDIT
  });

  return stateNew;
};

var purchaseAdd = function purchaseAdd(state, action) {
  var stateNew = state;
  action.purchaseEditValid = state.purchaseEdit.purchaseName.valid && state.purchaseEdit.employeeId.valid && state.purchaseEdit.productId.valid && state.purchaseEdit.goldTypeId.valid && state.purchaseEdit.purchaseWeight.valid && state.purchaseEdit.goldUnitId.valid && state.purchaseEdit.purchaseQuantity.valid && state.purchaseEdit.purchaseInputDate.valid && state.purchaseEdit.purchaseDescription.valid;

  if (!action.purchaseEditValid) {
    state.purchaseEdit.purchaseName.touched = true;
    state.purchaseEdit.employeeId.touched = true;
    state.purchaseEdit.productId.touched = true;
    state.purchaseEdit.goldTypeId.touched = true;
    state.purchaseEdit.purchaseWeight.touched = true;
    state.purchaseEdit.goldUnitId.touched = true;
    state.purchaseEdit.purchaseQuantity.touched = true;
    state.purchaseEdit.purchaseInputDate.touched = true;
    state.purchaseEdit.purchaseDescription.touched = true;
  }

  var purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), {}, {
    valid: action.purchaseEditValid,
    waiting: action.purchaseEditValid
  });

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });
  return stateNew;
};

var purchaseAddSuccess = function purchaseAddSuccess(state, action) {
  // let stateNew = updateObject(state, { purchaseEdit: PURCHASE_EDIT });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: PURCHASE_EDIT
  });

  return stateNew;
};

var purchaseEdit = function purchaseEdit(state, action) {
  var purchaseEdit = {
    id: action.purchase.id,
    purchaseName: {
      value: action.purchase.name,
      valid: true,
      touched: false,
      autoFocus: true
    },
    employeeId: {
      value: action.purchase.employeeId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    productId: {
      value: action.purchase.productId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    goldTypeId: {
      value: action.purchase.goldTypeId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    purchaseWeight: {
      value: action.purchase.weight,
      valid: true,
      touched: false,
      autoFocus: false
    },
    goldUnitId: {
      value: action.purchase.goldUnitId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    purchaseQuantity: {
      value: action.purchase.quantity,
      valid: true,
      touched: false,
      autoFocus: false
    },
    purchaseInputDate: {
      value: action.purchase.inputDate,
      valid: true,
      touched: false,
      autoFocus: false
    },
    purchaseDescription: {
      value: action.purchase.description,
      valid: true,
      touched: false,
      autoFocus: false
    },
    valid: true
  };
  purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), purchaseEdit); // let stateNew = updateObject(state, { purchaseEdit: purchaseEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseUpdate = function purchaseUpdate(state, action) {
  // let stateNew = state;
  action.purchaseEditValid = state.purchaseEdit.purchaseName.valid && state.purchaseEdit.employeeId.valid && state.purchaseEdit.productId.valid && state.purchaseEdit.goldTypeId.valid && state.purchaseEdit.purchaseWeight.valid && state.purchaseEdit.goldUnitId.valid && state.purchaseEdit.purchaseQuantity.valid && state.purchaseEdit.purchaseInputDate.valid && state.purchaseEdit.purchaseDescription.valid;

  if (!action.purchaseEditValid) {
    state.purchaseEdit.purchaseName.touched = true;
    state.purchaseEdit.employeeId.touched = true;
    state.purchaseEdit.productId.touched = true;
    state.purchaseEdit.goldTypeId.touched = true;
    state.purchaseEdit.purchaseWeight.touched = true;
    state.purchaseEdit.goldUnitId.touched = true;
    state.purchaseEdit.purchaseQuantity.touched = true;
    state.purchaseEdit.purchaseInputDate.touched = true;
    state.purchaseEdit.purchaseDescription.touched = true;
  }

  var purchaseEdit = _objectSpread(_objectSpread({}, state.purchaseEdit), {}, {
    valid: action.purchaseEditValid,
    waiting: action.purchaseEditValid
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: purchaseEdit
  });

  return stateNew;
};

var purchaseUpdateSuccess = function purchaseUpdateSuccess(state, action) {
  // let stateNew = updateObject(state, { error: null,  purchaseEdit: PURCHASE_EDIT });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseEdit: PURCHASE_EDIT
  });

  return stateNew;
};

var purchaseList = function purchaseList(state, action) {
  var purchaseList = _objectSpread(_objectSpread({}, state.purchaseList), {}, {
    waiting: true
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseList: purchaseList
  });

  return stateNew;
};

var purchaseListSuccess = function purchaseListSuccess(state, action) {
  var purchases = [];
  var data = action.response.data;

  for (var key in data) {
    purchases.push({
      key: key,
      id: key,
      name: data[key].name,
      employeeId: data[key].employeeId,
      productId: data[key].productId,
      goldTypeId: data[key].goldTypeId,
      weight: data[key].weight,
      goldUnitId: data[key].goldUnitId,
      quantity: data[key].quantity,
      inputDate: data[key].inputDate,
      description: data[key].description,
      image: data[key].image
    });
  }

  var purchaseList = _objectSpread(_objectSpread({}, state.purchaseList), {}, {
    purchases: purchases,
    waiting: false
  }); // let stateNew = updateObject(state, { error: null,  purchaseList: purchaseList });


  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    purchaseList: purchaseList
  });

  return stateNew;
};

var purchaseError = function purchaseError(state, action) {
  // purchaseList = { ...state.purchaseList, ...purchaseList };
  // let stateNew = updateObject(state, { error: action.error, purchaseList: purchaseList });
  if (action.caller === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_LIST"]) {
    state.purchaseList.waiting = false;
  } else {
    state.purchaseEdit.waiting = false;
  }

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: action.error
  });

  return stateNew;
};

var purchaseErrorHandled = function purchaseErrorHandled(state, action) {
  // purchaseList = { ...state.purchaseList, ...purchaseList };
  // let stateNew = updateObject(state, { error: action.error, purchaseList: purchaseList });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null
  });

  return stateNew;
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* console.log(
    new Date().toLocaleString() + " ............ Purchase initialize ....."
  ); */
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_NAME_FOCUS"]:
      return purchaseNameFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_NAME_CHANGED"]:
      return purchaseNameChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_EMPLOYEE_ID_FOCUS"]:
      return purchaseEmployeeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_EMPLOYEE_ID_CHANGED"]:
      return purchaseEmployeeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_PRODUCT_ID_FOCUS"]:
      return purchaseProductIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_PRODUCT_ID_CHANGED"]:
      return purchaseProductIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_TYPE_ID_FOCUS"]:
      return purchaseGoldTypeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_TYPE_ID_CHANGED"]:
      return purchaseGoldTypeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_WEIGHT_FOCUS"]:
      return purchaseWeightFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_WEIGHT_CHANGED"]:
      return purchaseWeightChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_UNIT_FOCUS"]:
      return purchaseGoldUnitIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_UNIT_CHANGED"]:
      return purchaseGoldUnitIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_QUANTITY_FOCUS"]:
      return purchaseQuantityFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_QUANTITY_CHANGED"]:
      return purchaseQuantityChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_INPUT_DATE_FOCUS"]:
      return purchaseInputDateFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_INPUT_DATE_CHANGED"]:
      return purchaseInputDateChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_DESCRIPTION_FOCUS"]:
      return purchaseDescriptionFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_DESCRIPTION_CHANGED"]:
      return purchaseDescriptionChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_CREATE"]:
      return purchaseCreate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_ADD"]:
      return purchaseAdd(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_ADD_SUCCESS"]:
      return purchaseAddSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_EDIT"]:
      return purchaseEdit(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_UPDATE"]:
      return purchaseUpdate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_UPDATE_SUCCESS"]:
      return purchaseUpdateSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_LIST"]:
      return purchaseList(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_LIST_SUCCESS"]:
      return purchaseListSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_ERROR"]:
      return purchaseError(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_ERROR_HANDLED"]:
      return purchaseErrorHandled(state, action);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3B1cmNoYXNlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJQVVJDSEFTRV9FRElUIiwiaWQiLCJwdXJjaGFzZU5hbWUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImVtcGxveWVlSWQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwicHVyY2hhc2VXZWlnaHQiLCJnb2xkVW5pdElkIiwicHVyY2hhc2VRdWFudGl0eSIsInB1cmNoYXNlSW5wdXREYXRlIiwiRGF0ZSIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJ3YWl0aW5nIiwiUFVSQ0hBU0VfTElTVCIsInB1cmNoYXNlcyIsImluaXRpYWxTdGF0ZSIsInB1cmNoYXNlRWRpdCIsInB1cmNoYXNlTGlzdCIsImVycm9yIiwicHVyY2hhc2VOYW1lRm9jdXMiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXRlTmV3IiwicHVyY2hhc2VOYW1lQ2hhbmdlZCIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0aW9uIiwicHVyY2hhc2VFbXBsb3llZUlkRm9jdXMiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1cyIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXMiLCJwdXJjaGFzZVdlaWdodENoYW5nZWQiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1cyIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXMiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlSW5wdXREYXRlRm9jdXMiLCJwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWQiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCIsInB1cmNoYXNlQ3JlYXRlIiwicHVyY2hhc2VBZGQiLCJwdXJjaGFzZUVkaXRWYWxpZCIsInB1cmNoYXNlQWRkU3VjY2VzcyIsInB1cmNoYXNlIiwibmFtZSIsIndlaWdodCIsInF1YW50aXR5IiwiaW5wdXREYXRlIiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZVVwZGF0ZSIsInB1cmNoYXNlVXBkYXRlU3VjY2VzcyIsInB1cmNoYXNlTGlzdFN1Y2Nlc3MiLCJkYXRhIiwicmVzcG9uc2UiLCJrZXkiLCJwdXNoIiwiaW1hZ2UiLCJwdXJjaGFzZUVycm9yIiwiY2FsbGVyIiwiYWN0aW9uVHlwZXMiLCJwdXJjaGFzZUVycm9ySGFuZGxlZCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLElBQUUsRUFBRSxJQURnQjtBQUVwQkMsY0FBWSxFQUFFO0FBQ1pDLFNBQUssRUFBRSxFQURLO0FBRVpDLFNBQUssRUFBRSxLQUZLO0FBR1pDLFdBQU8sRUFBRSxLQUhHO0FBSVpDLGFBQVMsRUFBRTtBQUpDLEdBRk07QUFRcEJDLFlBQVUsRUFBRTtBQUNWSixTQUFLLEVBQUUsSUFERztBQUVWQyxTQUFLLEVBQUUsS0FGRztBQUdWQyxXQUFPLEVBQUUsS0FIQztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQVJRO0FBY3BCRSxXQUFTLEVBQUU7QUFDVEwsU0FBSyxFQUFFLElBREU7QUFFVEMsU0FBSyxFQUFFLEtBRkU7QUFHVEMsV0FBTyxFQUFFLEtBSEE7QUFJVEMsYUFBUyxFQUFFO0FBSkYsR0FkUztBQW9CcEJHLFlBQVUsRUFBRTtBQUNWTixTQUFLLEVBQUUsSUFERztBQUVWQyxTQUFLLEVBQUUsS0FGRztBQUdWQyxXQUFPLEVBQUUsS0FIQztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQXBCUTtBQTBCcEJJLGdCQUFjLEVBQUU7QUFDZFAsU0FBSyxFQUFFLElBRE87QUFFZEMsU0FBSyxFQUFFLEtBRk87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QVFDLE1BQVIsQ0FBbkI7O0FBQ0YsU0FBS3lDLGtFQUFMO0FBQ0UsYUFBT1IsbUJBQW1CLENBQUNsQyxLQUFELEVBQVFDLE1BQVIsQ0FBMUI7O0FBRUYsU0FBS3lDLDJEQUFMO0FBQ0UsYUFBT0YsYUFBYSxDQUFDeEMsS0FBRCxFQUFRQyxNQUFSLENBQXBCOztBQUNGLFNBQUt5QyxtRUFBTDtBQUNFLGFBQU9DLG9CQUFvQixDQUFDM0MsS0FBRCxFQUFRQyxNQUFSLENBQTNCOztBQUNGO0FBQ0UsYUFBT0QsS0FBUDtBQTlESjtBQWdFRCxDQXBFRDs7QUFzRWU0QyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA5MmZkMmM5Y2E3YmEwYmMyYTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVja1ZhbGlkaXR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlsaXR5XCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgUFVSQ0hBU0VfRURJVCA9IHtcclxuICBpZDogbnVsbCxcclxuICBwdXJjaGFzZU5hbWU6IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfSxcclxuICBlbXBsb3llZUlkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHByb2R1Y3RJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBnb2xkVHlwZUlkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRVbml0SWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHVyY2hhc2VRdWFudGl0eToge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBwdXJjaGFzZUlucHV0RGF0ZToge1xyXG4gICAgdmFsdWU6IG5ldyBEYXRlKCksXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICB2YWxpZDogZmFsc2UsXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBQVVJDSEFTRV9MSVNUID0ge1xyXG4gIHB1cmNoYXNlczogW10sXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElULFxyXG4gIHB1cmNoYXNlTGlzdDogUFVSQ0hBU0VfTElTVCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlTmFtZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VOYW1lID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZU5hbWU6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZSxcclxuICAgICAgLi4ucHVyY2hhc2VOYW1lLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZU5hbWVDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VOYW1lOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2VOYW1lLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VOYW1lLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZW1wbG95ZWVJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQuZW1wbG95ZWVJZCxcclxuICAgICAgLi4uZW1wbG95ZWVJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5lbXBsb3llZUlkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24uZW1wbG95ZWVJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VQcm9kdWN0SWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHJvZHVjdElkOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQsXHJcbiAgICAgIC4uLnByb2R1Y3RJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHJvZHVjdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHJvZHVjdElkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24ucHJvZHVjdElkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQsXHJcbiAgICAgIC4uLmdvbGRUeXBlSWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZ29sZFR5cGVJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLmdvbGRUeXBlSWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlV2VpZ2h0Rm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZVdlaWdodCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VXZWlnaHQ6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LFxyXG4gICAgICAuLi5wdXJjaGFzZVdlaWdodCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VXZWlnaHQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZVdlaWdodCxcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLnB1cmNoYXNlV2VpZ2h0LCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlR29sZFVuaXRJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZ29sZFVuaXRJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFVuaXRJZCxcclxuICAgICAgLi4uZ29sZFVuaXRJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGdvbGRVbml0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5nb2xkVW5pdElkLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uZ29sZFVuaXRJZCwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVF1YW50aXR5Rm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZVF1YW50aXR5ID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZVF1YW50aXR5OiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgICAuLi5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlUXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VRdWFudGl0eSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VJbnB1dERhdGUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZSxcclxuICAgICAgLi4ucHVyY2hhc2VJbnB1dERhdGUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2VJbnB1dERhdGUsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZUlucHV0RGF0ZSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZURlc2NyaXB0aW9uID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgICAuLi5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VEZXNjcmlwdGlvbiwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUNyZWF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlQWRkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmVtcGxveWVlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVW5pdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCxcclxuICB9O1xyXG4gIHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VBZGRTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElUIH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IFBVUkNIQVNFX0VESVQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVkaXQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBpZDogYWN0aW9uLnB1cmNoYXNlLmlkLFxyXG4gICAgcHVyY2hhc2VOYW1lOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UubmFtZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmVtcGxveWVlSWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5wcm9kdWN0SWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UuZ29sZFR5cGVJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2Uud2VpZ2h0LFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmdvbGRVbml0SWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UucXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwdXJjaGFzZUlucHV0RGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmlucHV0RGF0ZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5kZXNjcmlwdGlvbixcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVVwZGF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gc3RhdGU7XHJcbiAgYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkID1cclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5lbXBsb3llZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHJvZHVjdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFR5cGVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFVuaXRJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWQ7XHJcbiAgaWYgKCFhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZW1wbG95ZWVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFR5cGVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVW5pdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VJbnB1dERhdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQsXHJcbiAgICB3YWl0aW5nOiBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVVwZGF0ZVN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElUIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VMaXN0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VMaXN0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUxpc3QsIHdhaXRpbmc6IHRydWUgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUxpc3RTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VzID0gW107XHJcbiAgbGV0IGRhdGEgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgcHVyY2hhc2VzLnB1c2goe1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgaWQ6IGtleSxcclxuICAgICAgbmFtZTogZGF0YVtrZXldLm5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGRhdGFba2V5XS5lbXBsb3llZUlkLFxyXG4gICAgICBwcm9kdWN0SWQ6IGRhdGFba2V5XS5wcm9kdWN0SWQsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IGRhdGFba2V5XS5nb2xkVHlwZUlkLFxyXG4gICAgICB3ZWlnaHQ6IGRhdGFba2V5XS53ZWlnaHQsXHJcbiAgICAgIGdvbGRVbml0SWQ6IGRhdGFba2V5XS5nb2xkVW5pdElkLFxyXG4gICAgICBxdWFudGl0eTogZGF0YVtrZXldLnF1YW50aXR5LFxyXG4gICAgICBpbnB1dERhdGU6IGRhdGFba2V5XS5pbnB1dERhdGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhW2tleV0uZGVzY3JpcHRpb24sXHJcbiAgICAgIGltYWdlOiBkYXRhW2tleV0uaW1hZ2UsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbGV0IHB1cmNoYXNlTGlzdCA9IHtcclxuICAgIC4uLnN0YXRlLnB1cmNoYXNlTGlzdCxcclxuICAgIHB1cmNoYXNlczogcHVyY2hhc2VzLFxyXG4gICAgd2FpdGluZzogZmFsc2UsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IG51bGwsICBwdXJjaGFzZUxpc3Q6IHB1cmNoYXNlTGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVycm9yID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBwdXJjaGFzZUxpc3QgPSB7IC4uLnN0YXRlLnB1cmNoYXNlTGlzdCwgLi4ucHVyY2hhc2VMaXN0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBhY3Rpb24uZXJyb3IsIHB1cmNoYXNlTGlzdDogcHVyY2hhc2VMaXN0IH0pO1xyXG4gIGlmIChhY3Rpb24uY2FsbGVyID09PSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9MSVNUKSB7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUxpc3Qud2FpdGluZyA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQud2FpdGluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VFcnJvckhhbmRsZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIHB1cmNoYXNlTGlzdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VMaXN0LCAuLi5wdXJjaGFzZUxpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvKiBjb25zb2xlLmxvZyhcclxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZSBpbml0aWFsaXplIC4uLi4uXCJcclxuICApOyAqL1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfTkFNRV9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlTmFtZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9OQU1FX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZU5hbWVDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9FTVBMT1lFRV9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9FTVBMT1lFRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfUFJPRFVDVF9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlUHJvZHVjdElkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1BST0RVQ1RfSURfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfR09MRF9UWVBFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0dPTERfVFlQRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfV0VJR0hUX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VXZWlnaHRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfV0VJR0hUX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVdlaWdodENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0dPTERfVU5JVF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlR29sZFVuaXRJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9HT0xEX1VOSVRfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1FVQU5USVRZX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VRdWFudGl0eUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9RVUFOVElUWV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VRdWFudGl0eUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0lOUFVUX0RBVEVfRk9DVVM6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9JTlBVVF9EQVRFX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0RFU0NSSVBUSU9OX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9ERVNDUklQVElPTl9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9DUkVBVEU6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUNyZWF0ZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfQUREOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VBZGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0FERF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VBZGRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfRURJVDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlRWRpdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfVVBEQVRFOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VVcGRhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1VQREFURV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VVcGRhdGVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfTElTVDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlTGlzdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VMaXN0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0VSUk9SOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VFcnJvcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfRVJST1JfSEFORExFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlRXJyb3JIYW5kbGVkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=