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
    value: 0,
    valid: true,
    touched: false,
    autoFocus: false
  },
  purchaseQuantity: {
    value: 0,
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
  action.purchaseEditValid = state.purchaseEdit.purchaseName.valid && state.purchaseEdit.productId.valid && state.purchaseEdit.goldTypeId.valid && state.purchaseEdit.purchaseWeight.valid && state.purchaseEdit.purchaseQuantity.valid && state.purchaseEdit.purchaseDescription.valid;

  if (!action.purchaseEditValid) {
    state.purchaseEdit.purchaseName.touched = true;
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
    purchaseQuantity: {
      value: action.purchase.quantity,
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
  action.purchaseEditValid = state.purchaseEdit.purchaseName.valid && state.purchaseEdit.productId.valid && state.purchaseEdit.goldTypeId.valid && state.purchaseEdit.purchaseWeight.valid && state.purchaseEdit.purchaseQuantity.valid && state.purchaseEdit.purchaseDescription.valid;

  if (!action.purchaseEditValid) {
    state.purchaseEdit.purchaseName.touched = true;
    state.purchaseEdit.purchaseProduct.touched = true;
    state.purchaseEdit.purchaseGoldType.touched = true;
    state.purchaseEdit.purchaseWeight.touched = true;
    state.purchaseEdit.purchaseQuantity.touched = true;
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
      productId: data[key].productId,
      goldTypeId: data[key].goldTypeId,
      weight: data[key].weight,
      quantity: data[key].quantity,
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

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_PRODUCT_ID_FOCUS"]:
      return purchaseProductIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_PRODUCT_ID_CHANGED"]:
      return purchaseProductIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_TYPE_ID_FOCUS"]:
      return purchaseGoldTypeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_GOLD_TYPE_ID_CHANGED"]:
      return purchaseGoldTypeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_DESCRIPTION_FOCUS"]:
      return purchaseDescriptionFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_DESCRIPTION_CHANGED"]:
      return purchaseDescriptionChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_WEIGHT_FOCUS"]:
      return purchaseWeightFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_WEIGHT_CHANGED"]:
      return purchaseWeightChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_QUANTITY_FOCUS"]:
      return purchaseQuantityFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["PURCHASE_QUANTITY_CHANGED"]:
      return purchaseQuantityChanged(state, action);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3B1cmNoYXNlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJQVVJDSEFTRV9FRElUIiwiaWQiLCJwdXJjaGFzZU5hbWUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsInByb2R1Y3RJZCIsImdvbGRUeXBlSWQiLCJwdXJjaGFzZVdlaWdodCIsInB1cmNoYXNlUXVhbnRpdHkiLCJwdXJjaGFzZURlc2NyaXB0aW9uIiwid2FpdGluZyIsIlBVUkNIQVNFX0xJU1QiLCJwdXJjaGFzZXMiLCJpbml0aWFsU3RhdGUiLCJwdXJjaGFzZUVkaXQiLCJwdXJjaGFzZUxpc3QiLCJlcnJvciIsInB1cmNoYXNlTmFtZUZvY3VzIiwic3RhdGUiLCJhY3Rpb24iLCJzdGF0ZU5ldyIsInB1cmNoYXNlTmFtZUNoYW5nZWQiLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdGlvbiIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXMiLCJwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1cyIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQiLCJwdXJjaGFzZVdlaWdodEZvY3VzIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkIiwicHVyY2hhc2VRdWFudGl0eUZvY3VzIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWQiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCIsInB1cmNoYXNlQ3JlYXRlIiwicHVyY2hhc2VBZGQiLCJwdXJjaGFzZUVkaXRWYWxpZCIsInB1cmNoYXNlQWRkU3VjY2VzcyIsInB1cmNoYXNlIiwibmFtZSIsIndlaWdodCIsInF1YW50aXR5IiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZVVwZGF0ZSIsInB1cmNoYXNlUHJvZHVjdCIsInB1cmNoYXNlR29sZFR5cGUiLCJwdXJjaGFzZVVwZGF0ZVN1Y2Nlc3MiLCJwdXJjaGFzZUxpc3RTdWNjZXNzIiwiZGF0YSIsInJlc3BvbnNlIiwia2V5IiwicHVzaCIsImltYWdlIiwicHVyY2hhc2VFcnJvciIsImNhbGxlciIsImFjdGlvblR5cGVzIiwicHVyY2hhc2VFcnJvckhhbmRsZWQiLCJyZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxJQUFFLEVBQUUsSUFEZ0I7QUFFcEJDLGNBQVksRUFBRTtBQUNaQyxTQUFLLEVBQUUsRUFESztBQUVaQyxTQUFLLEVBQUUsS0FGSztBQUdaQyxXQUFPLEVBQUUsS0FIRztBQUlaQyxhQUFTLEVBQUU7QUFKQyxHQUZNO0FBUXBCQyxXQUFTLEVBQUU7QUFDVEosU0FBSyxFQUFFLElBREU7QUFFVEMsU0FBSyxFQUFFLEtBRkU7QUFHVEMsV0FBTyxFQUFFLEtBSEE7QUFJVEMsYUFBUyxFQUFFO0FBSkYsR0FSUztBQWNwQkUsWUFBVSxFQUFFO0FBQ1ZMLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBZFE7QUFvQnBCRyxnQkFBYyxFQUFFO0FBQ2ROLFNBQUssRUFBRSxDQURPO0FBRWRDLFNBQUssRUFBRSxJQUZPO0FBR2RDLFdBQU8sRUFBRSxLQUhLO0FBSWRDLGFBQVMsRUFBRTtBQUpHLEdBcEJJO0FBMEJwQkksa0JBQWdCLEVBQUU7QUFDaEJQLFNBQUssRUFBRSxDQURTO0FBRWhCQyxTQUFLLEVBQUUsSUFGUztBQUdoQkMsV0FBTyxFQUFFLEtBSE87QUFJaEJDLGFBQVMsRUFBRTtBQUpLLEdBMUJFO0FBZ0NwQksscUJBQW1CLEVBQUU7QUFDbkJSLFNBQUssRUFBRSxFQURZO0FBRW5CQyxTQUFLLEVBQUUsSUFGWTtBQUduQkMsV0FBTyxFQUFFLEtBSFU7QUFJbkJDLGFBQVMsRUFBRTtBQUpRLEdBaENEO0FBc0NwQkYsT0FBSyxFQUFFLEtB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Mzk2N2QzY2Y5MzRkYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrVmFsaWRpdHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxpdHlcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBQVVJDSEFTRV9FRElUID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIHB1cmNoYXNlTmFtZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9LFxyXG4gIHByb2R1Y3RJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBnb2xkVHlwZUlkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICB2YWx1ZTogMCxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHVyY2hhc2VRdWFudGl0eToge1xyXG4gICAgdmFsdWU6IDAsXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICB2YWxpZDogZmFsc2UsXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBQVVJDSEFTRV9MSVNUID0ge1xyXG4gIHB1cmNoYXNlczogW10sXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElULFxyXG4gIHB1cmNoYXNlTGlzdDogUFVSQ0hBU0VfTElTVCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlTmFtZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VOYW1lID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZU5hbWU6IHtcclxuICAgICAgLi4uc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZSxcclxuICAgICAgLi4ucHVyY2hhc2VOYW1lLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZU5hbWVDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgcHVyY2hhc2VOYW1lOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2VOYW1lLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VOYW1lLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlUHJvZHVjdElkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQucHJvZHVjdElkLFxyXG4gICAgICAuLi5wcm9kdWN0SWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLnByb2R1Y3RJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLFxyXG4gICAgICAuLi5nb2xkVHlwZUlkLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VFZGl0ID0ge1xyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmdvbGRUeXBlSWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5nb2xkVHlwZUlkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVdlaWdodEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VXZWlnaHQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodCxcclxuICAgICAgLi4ucHVyY2hhc2VXZWlnaHQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcHVyY2hhc2VFZGl0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsIC4uLnB1cmNoYXNlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2VXZWlnaHQsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5wdXJjaGFzZVdlaWdodCwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVF1YW50aXR5Rm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZVF1YW50aXR5ID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZVF1YW50aXR5OiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgICAuLi5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlUXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZVF1YW50aXR5LFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VRdWFudGl0eSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwdXJjaGFzZURlc2NyaXB0aW9uID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uOiB7XHJcbiAgICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgICAuLi5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb246IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZURlc2NyaXB0aW9uLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24ucHVyY2hhc2VEZXNjcmlwdGlvbiwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHB1cmNoYXNlRWRpdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VFZGl0LCAuLi5wdXJjaGFzZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUNyZWF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlQWRkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnByb2R1Y3RJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VOYW1lLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24udG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBwdXJjaGFzZUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5wdXJjaGFzZUVkaXQsXHJcbiAgICB2YWxpZDogYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUFkZFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBwdXJjaGFzZUVkaXQ6IFBVUkNIQVNFX0VESVQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRWRpdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIGlkOiBhY3Rpb24ucHVyY2hhc2UuaWQsXHJcbiAgICBwdXJjaGFzZU5hbWU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5uYW1lLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wdXJjaGFzZS5wcm9kdWN0SWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2UuZ29sZFR5cGVJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1cmNoYXNlV2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHVyY2hhc2Uud2VpZ2h0LFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcHVyY2hhc2VRdWFudGl0eToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLnF1YW50aXR5LFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbjoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnB1cmNoYXNlLmRlc2NyaXB0aW9uLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuICBwdXJjaGFzZUVkaXQgPSB7IC4uLnN0YXRlLnB1cmNoYXNlRWRpdCwgLi4ucHVyY2hhc2VFZGl0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IHB1cmNoYXNlRWRpdDogcHVyY2hhc2VFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUVkaXQ6IHB1cmNoYXNlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlVXBkYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnByb2R1Y3RJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudmFsaWQgJiZcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLnB1cmNoYXNlRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VOYW1lLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUHJvZHVjdC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUdvbGRUeXBlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHB1cmNoYXNlRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnB1cmNoYXNlRWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQsXHJcbiAgICB3YWl0aW5nOiBhY3Rpb24ucHVyY2hhc2VFZGl0VmFsaWQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBwdXJjaGFzZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZVVwZGF0ZVN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIHB1cmNoYXNlRWRpdDogUFVSQ0hBU0VfRURJVCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VFZGl0OiBQVVJDSEFTRV9FRElUIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcHVyY2hhc2VMaXN0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VMaXN0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUxpc3QsIHdhaXRpbmc6IHRydWUgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUxpc3RTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHVyY2hhc2VzID0gW107XHJcbiAgbGV0IGRhdGEgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgcHVyY2hhc2VzLnB1c2goe1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgaWQ6IGtleSxcclxuICAgICAgbmFtZTogZGF0YVtrZXldLm5hbWUsXHJcbiAgICAgIHByb2R1Y3RJZDogZGF0YVtrZXldLnByb2R1Y3RJZCxcclxuICAgICAgZ29sZFR5cGVJZDogZGF0YVtrZXldLmdvbGRUeXBlSWQsXHJcbiAgICAgIHdlaWdodDogZGF0YVtrZXldLndlaWdodCxcclxuICAgICAgcXVhbnRpdHk6IGRhdGFba2V5XS5xdWFudGl0eSxcclxuICAgICAgZGVzY3JpcHRpb246IGRhdGFba2V5XS5kZXNjcmlwdGlvbixcclxuICAgICAgaW1hZ2U6IGRhdGFba2V5XS5pbWFnZSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBsZXQgcHVyY2hhc2VMaXN0ID0ge1xyXG4gICAgLi4uc3RhdGUucHVyY2hhc2VMaXN0LFxyXG4gICAgcHVyY2hhc2VzOiBwdXJjaGFzZXMsXHJcbiAgICB3YWl0aW5nOiBmYWxzZSxcclxuICB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIHB1cmNoYXNlTGlzdDogcHVyY2hhc2VMaXN0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBwdXJjaGFzZUxpc3Q6IHB1cmNoYXNlTGlzdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHB1cmNoYXNlRXJyb3IgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIHB1cmNoYXNlTGlzdCA9IHsgLi4uc3RhdGUucHVyY2hhc2VMaXN0LCAuLi5wdXJjaGFzZUxpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgcHVyY2hhc2VMaXN0OiBwdXJjaGFzZUxpc3QgfSk7XHJcbiAgaWYgKGFjdGlvbi5jYWxsZXIgPT09IGFjdGlvblR5cGVzLlBVUkNIQVNFX0xJU1QpIHtcclxuICAgIHN0YXRlLnB1cmNoYXNlTGlzdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLnB1cmNoYXNlRWRpdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBwdXJjaGFzZUVycm9ySGFuZGxlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gcHVyY2hhc2VMaXN0ID0geyAuLi5zdGF0ZS5wdXJjaGFzZUxpc3QsIC4uLnB1cmNoYXNlTGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBwdXJjaGFzZUxpc3Q6IHB1cmNoYXNlTGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIFB1cmNoYXNlIGluaXRpYWxpemUgLi4uLi5cIlxyXG4gICk7ICovXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9OQU1FX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VOYW1lRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX05BTUVfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlTmFtZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1BST0RVQ1RfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9QUk9EVUNUX0lEX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0dPTERfVFlQRV9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9HT0xEX1RZUEVfSURfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0RFU0NSSVBUSU9OX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9ERVNDUklQVElPTl9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1dFSUdIVF9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlV2VpZ2h0Rm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1dFSUdIVF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VXZWlnaHRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9RVUFOVElUWV9GT0NVUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlUXVhbnRpdHlGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfUVVBTlRJVFlfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUFVSQ0hBU0VfQ1JFQVRFOlxyXG4gICAgICByZXR1cm4gcHVyY2hhc2VDcmVhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0FERDpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlQWRkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9BRERfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlQWRkU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0VESVQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUVkaXQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX1VQREFURTpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlVXBkYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9VUERBVEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlVXBkYXRlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0xJU1Q6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUxpc3Qoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlTGlzdFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5QVVJDSEFTRV9FUlJPUjpcclxuICAgICAgcmV0dXJuIHB1cmNoYXNlRXJyb3Ioc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlBVUkNIQVNFX0VSUk9SX0hBTkRMRUQ6XHJcbiAgICAgIHJldHVybiBwdXJjaGFzZUVycm9ySGFuZGxlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9