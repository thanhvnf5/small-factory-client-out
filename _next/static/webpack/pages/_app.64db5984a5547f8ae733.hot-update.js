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
    value: "",
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
      valid: !!action.goldUnitId,
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
  action.purchaseEditValid = state.purchaseEdit.purchaseName.valid && state.purchaseEdit.employeeId.valid && state.purchaseEdit.productId.valid && state.purchaseEdit.goldTypeId.valid && state.purchaseEdit.goldUnitId.valid && state.purchaseEdit.purchaseWeight.valid && state.purchaseEdit.purchaseQuantity.valid && state.purchaseEdit.purchaseInputDate.valid && state.purchaseEdit.purchaseDescription.valid;

  if (!action.purchaseEditValid) {
    state.purchaseEdit.purchaseName.touched = true;
    state.purchaseEdit.employeeId.touched = true;
    state.purchaseEdit.productId.touched = true;
    state.purchaseEdit.goldTypeId.touched = true;
    state.purchaseEdit.goldUnitId.touched = true;
    state.purchaseEdit.purchaseWeight.touched = true;
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
  action.purchaseEditValid = state.purchaseEdit.purchaseName.valid && state.purchaseEdit.employeeId.valid && state.purchaseEdit.productId.valid && state.purchaseEdit.goldTypeId.valid && state.purchaseEdit.goldUnitId.valid && state.purchaseEdit.purchaseWeight.valid && state.purchaseEdit.purchaseQuantity.valid && state.purchaseEdit.purchaseInputDate.valid && state.purchaseEdit.purchaseDescription.valid;

  if (!action.purchaseEditValid) {
    state.purchaseEdit.purchaseName.touched = true;
    state.purchaseEdit.employeeId.touched = true;
    state.purchaseEdit.productId.touched = true;
    state.purchaseEdit.goldTypeId.touched = true;
    state.purchaseEdit.goldUnitId.touched = true;
    state.purchaseEdit.purchaseWeight.touched = true;
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
      goldUnitId: data[key].goldUnitId,
      weight: data[key].weight,
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

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_UNIT_ID_FOCUS"]:
      return purchaseGoldUnitIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_UNIT_ID_CHANGED"]:
      return purchaseGoldUnitIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_WEIGHT_FOCUS"]:
      return purchaseWeightFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_WEIGHT_CHANGED"]:
      return purchaseWeightChanged(state, action);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3B1cmNoYXNlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJQVVJDSEFTRV9FRElUIiwiaWQiLCJwdXJjaGFzZU5hbWUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImVtcGxveWVlSWQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwicHVyY2hhc2VXZWlnaHQiLCJnb2xkVW5pdElkIiwicHVyY2hhc2VRdWFudGl0eSIsInB1cmNoYXNlSW5wdXREYXRlIiwiRGF0ZSIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJ3YWl0aW5nIiwiUFVSQ0hBU0VfTElTVCIsInB1cmNoYXNlcyIsImluaXRpYWxTdGF0ZSIsInB1cmNoYXNlRWRpdCIsInB1cmNoYXNlTGlzdCIsImVycm9yIiwicHVyY2hhc2VOYW1lRm9jdXMiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXRlTmV3IiwicHVyY2hhc2VOYW1lQ2hhbmdlZCIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0aW9uIiwicHVyY2hhc2VFbXBsb3llZUlkRm9jdXMiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1cyIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsInB1cmNoYXNlR29sZFVuaXRJZEZvY3VzIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXMiLCJwdXJjaGFzZVdlaWdodENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXMiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlSW5wdXREYXRlRm9jdXMiLCJwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWQiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCIsInB1cmNoYXNlQ3JlYXRlIiwicHVyY2hhc2VBZGQiLCJwdXJjaGFzZUVkaXRWYWxpZCIsInB1cmNoYXNlQWRkU3VjY2VzcyIsInB1cmNoYXNlIiwibmFtZSIsIndlaWdodCIsInF1YW50aXR5IiwiaW5wdXREYXRlIiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZVVwZGF0ZSIsInB1cmNoYXNlVXBkYXRlU3VjY2VzcyIsInB1cmNoYXNlTGlzdFN1Y2Nlc3MiLCJkYXRhIiwicmVzcG9uc2UiLCJrZXkiLCJwdXNoIiwiaW1hZ2UiLCJwdXJjaGFzZUVycm9yIiwiY2FsbGVyIiwiYWN0aW9uVHlwZXMiLCJwdXJjaGFzZUVycm9ySGFuZGxlZCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLElBQUUsRUFBRSxJQURnQjtBQUVwQkMsY0FBWSxFQUFFO0FBQ1pDLFNBQUssRUFBRSxFQURLO0FBRVpDLFNBQUssRUFBRSxLQUZLO0FBR1pDLFdBQU8sRUFBRSxLQUhHO0FBSVpDLGFBQVMsRUFBRTtBQUpDLEdBRk07QUFRcEJDLFlBQVUsRUFBRTtBQUNWSixTQUFLLEVBQUUsSUFERztBQUVWQyxTQUFLLEVBQUUsS0FGRztBQUdWQyxXQUFPLEVBQUUsS0FIQztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQVJRO0FBY3BCRSxXQUFTLEVBQUU7QUFDVEwsU0FBSyxFQUFFLElBREU7QUFFVEMsU0FBSyxFQUFFLEtBRkU7QUFHVEMsV0FBTyxFQUFFLEtBSEE7QUFJVEMsYUFBUyxFQUFFO0FBSkYsR0FkUztBQW9CcEJHLFlBQVUsRUFBRTtBQUNWTixTQUFLLEVBQUUsSUFERztBQUVWQyxTQUFLLEVBQUUsS0FGRztBQUdWQyxXQUFPLEVBQUUsS0FIQztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQXBCUTtBQTBCcEJJLGdCQUFjLEVBQUU7QUFDZFAsU0FBSyxFQUFFLElBRE87QUFFZEMsU0FBSyxFQUFFLEtBRk87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QUFDRSxhQUFPUixtQkFBbUIsQ0FBQ2xDLEtBQUQsRUFBUUMsTUFBUixDQUExQjs7QUFFRixTQUFLeUMsMkRBQUw7QUFDRSxhQUFPRixhQUFhLENBQUN4QyxLQUFELEVBQVFDLE1BQVIsQ0FBcEI7O0FBQ0YsU0FBS3lDLG1FQUFMO0FBQ0UsYUFBT0Msb0JBQW9CLENBQUMzQyxLQUFELEVBQVFDLE1BQVIsQ0FBM0I7O0FBQ0Y7QUFDRSxhQUFPRCxLQUFQO0FBOURKO0FBZ0VELENBcEVEOztBQXNFZTRDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjRkYjU5ODRhNTU0N2Y4YWU3MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrVmFsaWRpdHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxpdHlcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBQVVJDSEFTRV9FRElUID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIHB1cmNoYXNlTmFtZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9LFxyXG4gIGVtcGxveWVlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHJvZHVjdElkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRUeXBlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHVyY2hhc2VXZWlnaHQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZ29sZFVuaXRJZDoge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBwdXJjaGFzZVF1YW50aXR5OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHB1cmNoYXNlSW5wdXREYXRlOiB7XHJcbiAgICB2YWx1ZTogbmV3IERhdGUoKSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbjoge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHZhbGlkOiBmYWxzZSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IFBVUkNIQVNFX0xJU1QgPSB7XHJcbiAgcHVyY2hhc2VzOiBbXSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwdXJjaGFzZUVkaXQ6IFBVUkNIQVNFX0VESVQsXHJcbiAgcHVyY2hhc2VMaXN0OiBQVVJDSEFTRV9MSVNULFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VOYW1lRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZU5hbWUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlTmFtZToge1xyXG4gICAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VOYW1lLFxyXG4gICAgICAuLi5wdXJjaGFzZU5hbWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlTmFtZUNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZU5hbWU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZU5hbWUsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZU5hbWUsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBlbXBsb3llZUlkOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5lbXBsb3llZUlkLFxyXG4gICAgICAuLi5lbXBsb3llZUlkLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmVtcGxveWVlSWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5lbXBsb3llZUlkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LnByb2R1Y3RJZCxcclxuICAgICAgLi4ucHJvZHVjdElkLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wcm9kdWN0SWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5wcm9kdWN0SWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFR5cGVJZCxcclxuICAgICAgLi4uZ29sZFR5cGVJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5nb2xkVHlwZUlkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24uZ29sZFR5cGVJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VHb2xkVW5pdElkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBnb2xkVW5pdElkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVW5pdElkLFxyXG4gICAgICAuLi5nb2xkVW5pdElkLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmdvbGRVbml0SWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5nb2xkVW5pdElkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVdlaWdodEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VXZWlnaHQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodCxcclxuICAgICAgLi4ucHVyY2hhc2VXZWlnaHQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2VXZWlnaHQsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZVdlaWdodCwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVF1YW50aXR5Rm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZVF1YW50aXR5ID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZVF1YW50aXR5OiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgICAuLi5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlUXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VRdWFudGl0eSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VJbnB1dERhdGUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZSxcclxuICAgICAgLi4ucHVyY2hhc2VJbnB1dERhdGUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2VJbnB1dERhdGUsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZUlucHV0RGF0ZSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZURlc2NyaXB0aW9uID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgICAuLi5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VEZXNjcmlwdGlvbiwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUNyZWF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlQWRkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmVtcGxveWVlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFVuaXRJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCxcclxuICB9O1xyXG4gIHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VBZGRTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElUIH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IFBVUkNIQVNFX0VESVQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVkaXQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBpZDogYWN0aW9uLnB1cmNoYXNlLmlkLFxyXG4gICAgcHVyY2hhc2VOYW1lOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UubmFtZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmVtcGxveWVlSWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5wcm9kdWN0SWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UuZ29sZFR5cGVJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2Uud2VpZ2h0LFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmdvbGRVbml0SWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UucXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwdXJjaGFzZUlucHV0RGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmlucHV0RGF0ZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5kZXNjcmlwdGlvbixcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVVwZGF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gc3RhdGU7XHJcbiAgYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkID1cclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5lbXBsb3llZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHJvZHVjdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFR5cGVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWQ7XHJcbiAgaWYgKCFhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZW1wbG95ZWVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFR5cGVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVW5pdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VJbnB1dERhdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQsXHJcbiAgICB3YWl0aW5nOiBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVVwZGF0ZVN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElUIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VMaXN0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VMaXN0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUxpc3QsIHdhaXRpbmc6IHRydWUgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUxpc3RTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VzID0gW107XHJcbiAgbGV0IGRhdGEgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgcHVyY2hhc2VzLnB1c2goe1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgaWQ6IGtleSxcclxuICAgICAgbmFtZTogZGF0YVtrZXldLm5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGRhdGFba2V5XS5lbXBsb3llZUlkLFxyXG4gICAgICBwcm9kdWN0SWQ6IGRhdGFba2V5XS5wcm9kdWN0SWQsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IGRhdGFba2V5XS5nb2xkVHlwZUlkLFxyXG4gICAgICBnb2xkVW5pdElkOiBkYXRhW2tleV0uZ29sZFVuaXRJZCxcclxuICAgICAgd2VpZ2h0OiBkYXRhW2tleV0ud2VpZ2h0LFxyXG4gICAgICBxdWFudGl0eTogZGF0YVtrZXldLnF1YW50aXR5LFxyXG4gICAgICBpbnB1dERhdGU6IGRhdGFba2V5XS5pbnB1dERhdGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhW2tleV0uZGVzY3JpcHRpb24sXHJcbiAgICAgIGltYWdlOiBkYXRhW2tleV0uaW1hZ2UsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbGV0IHB1cmNoYXNlTGlzdCA9IHtcclxuICAgIC4uLnN0YXRlLnB1cmNoYXNlTGlzdCxcclxuICAgIHB1cmNoYXNlczogcHVyY2hhc2VzLFxyXG4gICAgd2FpdGluZzogZmFsc2UsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IG51bGwsICBwdXJjaGFzZUxpc3Q6IHB1cmNoYXNlTGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVycm9yID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBwdXJjaGFzZUxpc3QgPSB7IC4uLnN0YXRlLnB1cmNoYXNlTGlzdCwgLi4ucHVyY2hhc2VMaXN0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBhY3Rpb24uZXJyb3IsIHB1cmNoYXNlTGlzdDogcHVyY2hhc2VMaXN0IH0pO1xyXG4gIGlmIChhY3Rpb24uY2FsbGVyID09PSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9MSVNUKSB7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUxpc3Qud2FpdGluZyA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQud2FpdGluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VFcnJvckhhbmRsZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIHB1cmNoYXNlTGlzdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VMaXN0LCAuLi5wdXJjaGFzZUxpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvKiBjb25zb2xlLmxvZyhcclxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZSBpbml0aWFsaXplIC4uLi4uXCJcclxuICApOyAqL1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfTkFNRV9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlTmFtZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9OQU1FX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZU5hbWVDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9FTVBMT1lFRV9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9FTVBMT1lFRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfUFJPRFVDVF9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlUHJvZHVjdElkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1BST0RVQ1RfSURfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfR09MRF9UWVBFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0dPTERfVFlQRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfR09MRF9VTklUX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVW5pdElkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0dPTERfVU5JVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfV0VJR0hUX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VXZWlnaHRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfV0VJR0hUX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVdlaWdodENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1FVQU5USVRZX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VRdWFudGl0eUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9RVUFOVElUWV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VRdWFudGl0eUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0lOUFVUX0RBVEVfRk9DVVM6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9JTlBVVF9EQVRFX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0RFU0NSSVBUSU9OX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9ERVNDUklQVElPTl9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9DUkVBVEU6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUNyZWF0ZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfQUREOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VBZGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0FERF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VBZGRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfRURJVDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlRWRpdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfVVBEQVRFOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VVcGRhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1VQREFURV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VVcGRhdGVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfTElTVDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlTGlzdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VMaXN0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0VSUk9SOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VFcnJvcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfRVJST1JfSEFORExFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlRXJyb3JIYW5kbGVkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=