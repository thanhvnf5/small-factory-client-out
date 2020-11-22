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

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_UNIT_ID_FOCUS"]:
      return purchaseGoldUnitIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_UNIT_ID_CHANGED"]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3B1cmNoYXNlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJQVVJDSEFTRV9FRElUIiwiaWQiLCJwdXJjaGFzZU5hbWUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImVtcGxveWVlSWQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwicHVyY2hhc2VXZWlnaHQiLCJnb2xkVW5pdElkIiwicHVyY2hhc2VRdWFudGl0eSIsInB1cmNoYXNlSW5wdXREYXRlIiwiRGF0ZSIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJ3YWl0aW5nIiwiUFVSQ0hBU0VfTElTVCIsInB1cmNoYXNlcyIsImluaXRpYWxTdGF0ZSIsInB1cmNoYXNlRWRpdCIsInB1cmNoYXNlTGlzdCIsImVycm9yIiwicHVyY2hhc2VOYW1lRm9jdXMiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXRlTmV3IiwicHVyY2hhc2VOYW1lQ2hhbmdlZCIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0aW9uIiwicHVyY2hhc2VFbXBsb3llZUlkRm9jdXMiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1cyIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXMiLCJwdXJjaGFzZVdlaWdodENoYW5nZWQiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1cyIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXMiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlSW5wdXREYXRlRm9jdXMiLCJwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWQiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCIsInB1cmNoYXNlQ3JlYXRlIiwicHVyY2hhc2VBZGQiLCJwdXJjaGFzZUVkaXRWYWxpZCIsInB1cmNoYXNlQWRkU3VjY2VzcyIsInB1cmNoYXNlIiwibmFtZSIsIndlaWdodCIsInF1YW50aXR5IiwiaW5wdXREYXRlIiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZVVwZGF0ZSIsInB1cmNoYXNlVXBkYXRlU3VjY2VzcyIsInB1cmNoYXNlTGlzdFN1Y2Nlc3MiLCJkYXRhIiwicmVzcG9uc2UiLCJrZXkiLCJwdXNoIiwiaW1hZ2UiLCJwdXJjaGFzZUVycm9yIiwiY2FsbGVyIiwiYWN0aW9uVHlwZXMiLCJwdXJjaGFzZUVycm9ySGFuZGxlZCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLElBQUUsRUFBRSxJQURnQjtBQUVwQkMsY0FBWSxFQUFFO0FBQ1pDLFNBQUssRUFBRSxFQURLO0FBRVpDLFNBQUssRUFBRSxLQUZLO0FBR1pDLFdBQU8sRUFBRSxLQUhHO0FBSVpDLGFBQVMsRUFBRTtBQUpDLEdBRk07QUFRcEJDLFlBQVUsRUFBRTtBQUNWSixTQUFLLEVBQUUsSUFERztBQUVWQyxTQUFLLEVBQUUsS0FGRztBQUdWQyxXQUFPLEVBQUUsS0FIQztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQVJRO0FBY3BCRSxXQUFTLEVBQUU7QUFDVEwsU0FBSyxFQUFFLElBREU7QUFFVEMsU0FBSyxFQUFFLEtBRkU7QUFHVEMsV0FBTyxFQUFFLEtBSEE7QUFJVEMsYUFBUyxFQUFFO0FBSkYsR0FkUztBQW9CcEJHLFlBQVUsRUFBRTtBQUNWTixTQUFLLEVBQUUsSUFERztBQUVWQyxTQUFLLEVBQUUsS0FGRztBQUdWQyxXQUFPLEVBQUUsS0FIQztBQUlWQyxhQUFTLEVBQUU7QUFKRCxHQXBCUTtBQTBCcEJJLGdCQUFjLEVBQUU7QUFDZFAsU0FBSyxFQUFFLElBRE87QUFFZEMsU0FBSyxFQUFFLEtBRk87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TDtBQUNFLGFBQU9SLG1CQUFtQixDQUFDbEMsS0FBRCxFQUFRQyxNQUFSLENBQTFCOztBQUVGLFNBQUt5QywyREFBTDtBQUNFLGFBQU9GLGFBQWEsQ0FBQ3hDLEtBQUQsRUFBUUMsTUFBUixDQUFwQjs7QUFDRixTQUFLeUMsbUVBQUw7QUFDRSxhQUFPQyxvQkFBb0IsQ0FBQzNDLEtBQUQsRUFBUUMsTUFBUixDQUEzQjs7QUFDRjtBQUNFLGFBQU9ELEtBQVA7QUE5REo7QUFnRUQsQ0FwRUQ7O0FBc0VlNEMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMmJmM2Y1YWUwMmYxNWJjODFkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tWYWxpZGl0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbGl0eVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IFBVUkNIQVNFX0VESVQgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgcHVyY2hhc2VOYW1lOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1wbG95ZWVJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBwcm9kdWN0SWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZ29sZFR5cGVJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBwdXJjaGFzZVdlaWdodDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBnb2xkVW5pdElkOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHB1cmNoYXNlUXVhbnRpdHk6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHVyY2hhc2VJbnB1dERhdGU6IHtcclxuICAgIHZhbHVlOiBuZXcgRGF0ZSgpLFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBwdXJjaGFzZURlc2NyaXB0aW9uOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdmFsaWQ6IGZhbHNlLFxyXG4gIHdhaXRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgUFVSQ0hBU0VfTElTVCA9IHtcclxuICBwdXJjaGFzZXM6IFtdLFxyXG4gIHdhaXRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCxcclxuICBwdXJjaGFzZUxpc3Q6IFBVUkNIQVNFX0xJU1QsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZU5hbWVGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlTmFtZSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VOYW1lOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUsXHJcbiAgICAgIC4uLnB1cmNoYXNlTmFtZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VOYW1lQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlTmFtZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlTmFtZSxcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLnB1cmNoYXNlTmFtZSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVtcGxveWVlSWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGVtcGxveWVlSWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LmVtcGxveWVlSWQsXHJcbiAgICAgIC4uLmVtcGxveWVlSWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBlbXBsb3llZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZW1wbG95ZWVJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLmVtcGxveWVlSWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlUHJvZHVjdElkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQucHJvZHVjdElkLFxyXG4gICAgICAuLi5wcm9kdWN0SWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLnByb2R1Y3RJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLFxyXG4gICAgICAuLi5nb2xkVHlwZUlkLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmdvbGRUeXBlSWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5nb2xkVHlwZUlkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVdlaWdodEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VXZWlnaHQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodCxcclxuICAgICAgLi4ucHVyY2hhc2VXZWlnaHQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2VXZWlnaHQsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZVdlaWdodCwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUdvbGRVbml0SWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGdvbGRVbml0SWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGdvbGRVbml0SWQ6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQsXHJcbiAgICAgIC4uLmdvbGRVbml0SWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZ29sZFVuaXRJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLmdvbGRVbml0SWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlUXVhbnRpdHlGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlUXVhbnRpdHkgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlUXVhbnRpdHk6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHksXHJcbiAgICAgIC4uLnB1cmNoYXNlUXVhbnRpdHksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VRdWFudGl0eToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlUXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZVF1YW50aXR5LCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlSW5wdXREYXRlRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUlucHV0RGF0ZSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VJbnB1dERhdGU6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLFxyXG4gICAgICAuLi5wdXJjaGFzZUlucHV0RGF0ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VJbnB1dERhdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZUlucHV0RGF0ZSxcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLnB1cmNoYXNlSW5wdXREYXRlLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRGVzY3JpcHRpb24gPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24sXHJcbiAgICAgIC4uLnB1cmNoYXNlRGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbjoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlRGVzY3JpcHRpb24sXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZURlc2NyaXB0aW9uLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlQ3JlYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElUIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VBZGQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VOYW1lLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZW1wbG95ZWVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnByb2R1Y3RJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VJbnB1dERhdGUudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VOYW1lLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmVtcGxveWVlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHJvZHVjdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQuZ29sZFVuaXRJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24udG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsXHJcbiAgICB2YWxpZDogYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUFkZFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBwdXJjaGFzZUVkaXQ6IFBVUkNIQVNFX0VESVQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRWRpdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGlkOiBhY3Rpb24ucHVyY2hhc2UuaWQsXHJcbiAgICBwdXJjaGFzZU5hbWU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5uYW1lLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBlbXBsb3llZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UuZW1wbG95ZWVJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5nb2xkVHlwZUlkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcHVyY2hhc2VXZWlnaHQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS53ZWlnaHQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UuZ29sZFVuaXRJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1cmNoYXNlUXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5xdWFudGl0eSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UuaW5wdXREYXRlLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbjoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmRlc2NyaXB0aW9uLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlVXBkYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmVtcGxveWVlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVW5pdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5wdXJjaGFzZUVkaXRWYWxpZCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlVXBkYXRlU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBudWxsLCAgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElUIH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IFBVUkNIQVNFX0VESVQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUxpc3QgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZUxpc3QgPSB7IC4uLnN0YXRlLnB1cmNoYXNlTGlzdCwgd2FpdGluZzogdHJ1ZSB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUxpc3Q6IHB1cmNoYXNlTGlzdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlTGlzdFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZXMgPSBbXTtcclxuICBsZXQgZGF0YSA9IGFjdGlvbi5yZXNwb25zZS5kYXRhO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICBwdXJjaGFzZXMucHVzaCh7XHJcbiAgICAgIGtleToga2V5LFxyXG4gICAgICBpZDoga2V5LFxyXG4gICAgICBuYW1lOiBkYXRhW2tleV0ubmFtZSxcclxuICAgICAgZW1wbG95ZWVJZDogZGF0YVtrZXldLmVtcGxveWVlSWQsXHJcbiAgICAgIHByb2R1Y3RJZDogZGF0YVtrZXldLnByb2R1Y3RJZCxcclxuICAgICAgZ29sZFR5cGVJZDogZGF0YVtrZXldLmdvbGRUeXBlSWQsXHJcbiAgICAgIHdlaWdodDogZGF0YVtrZXldLndlaWdodCxcclxuICAgICAgZ29sZFVuaXRJZDogZGF0YVtrZXldLmdvbGRVbml0SWQsXHJcbiAgICAgIHF1YW50aXR5OiBkYXRhW2tleV0ucXVhbnRpdHksXHJcbiAgICAgIGlucHV0RGF0ZTogZGF0YVtrZXldLmlucHV0RGF0ZSxcclxuICAgICAgZGVzY3JpcHRpb246IGRhdGFba2V5XS5kZXNjcmlwdGlvbixcclxuICAgICAgaW1hZ2U6IGRhdGFba2V5XS5pbWFnZSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBsZXQgcHVyY2hhc2VMaXN0ID0ge1xyXG4gICAgLi4uc3RhdGUucHVyY2hhc2VMaXN0LFxyXG4gICAgcHVyY2hhc2VzOiBwdXJjaGFzZXMsXHJcbiAgICB3YWl0aW5nOiBmYWxzZSxcclxuICB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIHB1cmNoYXNlTGlzdDogcHVyY2hhc2VMaXN0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUxpc3Q6IHB1cmNoYXNlTGlzdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRXJyb3IgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIHB1cmNoYXNlTGlzdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VMaXN0LCAuLi5wdXJjaGFzZUxpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfSk7XHJcbiAgaWYgKGFjdGlvbi5jYWxsZXIgPT09IGFjdGlvblR5cGVzLlBVUkNIQVNFX0xJU1QpIHtcclxuICAgIHN0YXRlLnB1cmNoYXNlTGlzdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVycm9ySGFuZGxlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gcHVyY2hhc2VMaXN0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUxpc3QsIC4uLnB1cmNoYXNlTGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBwdXJjaGFzZUxpc3Q6IHB1cmNoYXNlTGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIFB1cmNoYXNlIGluaXRpYWxpemUgLi4uLi5cIlxyXG4gICk7ICovXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9OQU1FX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VOYW1lRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX05BTUVfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlTmFtZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0VNUExPWUVFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VFbXBsb3llZUlkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0VNUExPWUVFX0lEX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9QUk9EVUNUX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VQcm9kdWN0SWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfUFJPRFVDVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9HT0xEX1RZUEVfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfR09MRF9UWVBFX0lEX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9XRUlHSFRfRk9DVVM6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVdlaWdodEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9XRUlHSFRfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfR09MRF9VTklUX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVW5pdElkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0dPTERfVU5JVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfUVVBTlRJVFlfRk9DVVM6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVF1YW50aXR5Rm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1FVQU5USVRZX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfSU5QVVRfREFURV9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlSW5wdXREYXRlRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0lOUFVUX0RBVEVfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfREVTQ1JJUFRJT05fRk9DVVM6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0RFU0NSSVBUSU9OX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0NSRUFURTpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlQ3JlYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9BREQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUFkZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfQUREX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUFkZFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9FRElUOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VFZGl0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9VUERBVEU6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVVwZGF0ZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfVVBEQVRFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVVwZGF0ZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9MSVNUOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VMaXN0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9MSVNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUxpc3RTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfRVJST1I6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUVycm9yKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9FUlJPUl9IQU5ETEVEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VFcnJvckhhbmRsZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==