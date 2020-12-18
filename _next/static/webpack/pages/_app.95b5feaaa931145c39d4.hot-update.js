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

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_GET_BY_CODE"]:
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

/***/ }),

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_GET_BY_CODE"], response));

        case 20:
          _context6.next = 24;
          break;

        case 22:
          _context6.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_GET_BY_CODE"], response));

        case 24:
          _context6.next = 31;
          break;

        case 26:
          _context6.prev = 26;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          _context6.next = 31;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["importFromFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_GET_BY_CODE"], _context6.t0));

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

/***/ }),

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
/* harmony import */ var _goldUnitSaga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./goldUnitSaga */ "./src/store/sagas/goldUnitSaga.js");
/* harmony import */ var _productTypeSaga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productTypeSaga */ "./src/store/sagas/productTypeSaga.js");
/* harmony import */ var _productSaga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productSaga */ "./src/store/sagas/productSaga.js");
/* harmony import */ var _purchaseSaga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./purchaseSaga */ "./src/store/sagas/purchaseSaga.js");
/* harmony import */ var _sellSaga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sellSaga */ "./src/store/sagas/sellSaga.js");
/* harmony import */ var _exportToFactorySaga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exportToFactorySaga */ "./src/store/sagas/exportToFactorySaga.js");
/* harmony import */ var _importFromFactorySaga__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./importFromFactorySaga */ "./src/store/sagas/importFromFactorySaga.js");
/* harmony import */ var _factoryTransferSaga__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./factoryTransferSaga */ "./src/store/sagas/factoryTransferSaga.js");


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
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_CHECK_TIMEOUT"], _auth__WEBPACK_IMPORTED_MODULE_4__["checkAuthTimeoutSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_LOGOUT"], _auth__WEBPACK_IMPORTED_MODULE_4__["logoutSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_USER"], _auth__WEBPACK_IMPORTED_MODULE_4__["authUserSaga"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_CHECK_STATE"], _auth__WEBPACK_IMPORTED_MODULE_4__["authCheckStateSaga"]),
          /* Common */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_common__WEBPACK_IMPORTED_MODULE_5__["runClockSaga"]),
          /* Dept */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_ADD"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_UPDATE"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_DELETE"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DEPT_LIST"], _deptSaga__WEBPACK_IMPORTED_MODULE_6__["deptList"]),
          /* Employee */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_ADD"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_UPDATE"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_DELETE"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_LIST"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeList"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EMPLOYEE_LIST_IN_FACTORY"], _employeeSaga__WEBPACK_IMPORTED_MODULE_7__["employeeListInFactory"]),
          /* GoldType */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_ADD"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_UPDATE"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_DELETE"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_TYPE_LIST"], _goldTypeSaga__WEBPACK_IMPORTED_MODULE_8__["goldTypeList"]),
          /* GoldUnit */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_UNIT_ADD"], _goldUnitSaga__WEBPACK_IMPORTED_MODULE_9__["goldUnitAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_UNIT_UPDATE"], _goldUnitSaga__WEBPACK_IMPORTED_MODULE_9__["goldUnitUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_UNIT_DELETE"], _goldUnitSaga__WEBPACK_IMPORTED_MODULE_9__["goldUnitDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["GOLD_UNIT_LIST"], _goldUnitSaga__WEBPACK_IMPORTED_MODULE_9__["goldUnitList"]),
          /* ProductType */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_ADD"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_10__["productTypeAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_UPDATE"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_10__["productTypeUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_DELETE"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_10__["productTypeDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_TYPE_LIST"], _productTypeSaga__WEBPACK_IMPORTED_MODULE_10__["productTypeList"]),
          /* Product */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_ADD"], _productSaga__WEBPACK_IMPORTED_MODULE_11__["productAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_UPDATE"], _productSaga__WEBPACK_IMPORTED_MODULE_11__["productUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_DELETE"], _productSaga__WEBPACK_IMPORTED_MODULE_11__["productDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_LIST"], _productSaga__WEBPACK_IMPORTED_MODULE_11__["productList"]),
          /* Purchase */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_ADD"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_12__["purchaseAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_EDIT"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_12__["purchaseEdit"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_UPDATE"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_12__["purchaseUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_DELETE"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_12__["purchaseDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_LIST"], _purchaseSaga__WEBPACK_IMPORTED_MODULE_12__["purchaseList"]),
          /* Sell */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SELL_ADD"], _sellSaga__WEBPACK_IMPORTED_MODULE_13__["sellAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SELL_EDIT"], _sellSaga__WEBPACK_IMPORTED_MODULE_13__["sellEdit"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SELL_UPDATE"], _sellSaga__WEBPACK_IMPORTED_MODULE_13__["sellUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SELL_DELETE"], _sellSaga__WEBPACK_IMPORTED_MODULE_13__["sellDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["SELL_LIST"], _sellSaga__WEBPACK_IMPORTED_MODULE_13__["sellList"]),
          /* ExportToFactory */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_ADD"], _exportToFactorySaga__WEBPACK_IMPORTED_MODULE_14__["exportToFactoryAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_EDIT"], _exportToFactorySaga__WEBPACK_IMPORTED_MODULE_14__["exportToFactoryEdit"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_UPDATE"], _exportToFactorySaga__WEBPACK_IMPORTED_MODULE_14__["exportToFactoryUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_DELETE"], _exportToFactorySaga__WEBPACK_IMPORTED_MODULE_14__["exportToFactoryDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_LIST"], _exportToFactorySaga__WEBPACK_IMPORTED_MODULE_14__["exportToFactoryList"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_GET_BY_CODE"], _exportToFactorySaga__WEBPACK_IMPORTED_MODULE_14__["exportToFactoryGetByCode"]),
          /* ImportFromFactory */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_ADD"], _importFromFactorySaga__WEBPACK_IMPORTED_MODULE_15__["importFromFactoryAdd"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_EDIT"], _importFromFactorySaga__WEBPACK_IMPORTED_MODULE_15__["importFromFactoryEdit"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_UPDATE"], _importFromFactorySaga__WEBPACK_IMPORTED_MODULE_15__["importFromFactoryUpdate"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_DELETE"], _importFromFactorySaga__WEBPACK_IMPORTED_MODULE_15__["importFromFactoryDelete"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_LIST"], _importFromFactorySaga__WEBPACK_IMPORTED_MODULE_15__["importFromFactoryList"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["IMPORT_FROM_FACTORY_GET_BY_CODE"], _importFromFactorySaga__WEBPACK_IMPORTED_MODULE_15__["importFromFactoryGetByCode"]),
          /* FactoryTransfer */
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["FACTORY_TRANSFER_ADDS"], _factoryTransferSaga__WEBPACK_IMPORTED_MODULE_16__["adds"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["FACTORY_TRANSFER_LOAD_LIST_SENDER"], _factoryTransferSaga__WEBPACK_IMPORTED_MODULE_16__["senderIdList"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_3__["FACTORY_TRANSFER_LOAD_LIST_RECEIVER"], _factoryTransferSaga__WEBPACK_IMPORTED_MODULE_16__["receiverIdList"])]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3NlbGxSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2FnYXMvaW1wb3J0RnJvbUZhY3RvcnlTYWdhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsiU0VMTF9FRElUIiwiaWQiLCJ2ZXJzaW9uIiwic2VsbENvZGUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImVtcGxveWVlSWQiLCJzZWxsRGF0ZSIsIkRhdGUiLCJzZWxsTm90ZSIsIndlaWdodFRvdGFsIiwicXVhbnRpdHlUb3RhbCIsInNlbGxEZXRhaWxzIiwid2FpdGluZyIsIlNFTExfREVUQUlMX0VESVQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwic2VsbFdlaWdodCIsImdvbGRVbml0SWQiLCJzZWxsUXVhbnRpdHkiLCJ2YWxpZERldGFpbCIsIlNFTExfTElTVCIsInNlbGxzIiwiaW5pdGlhbFN0YXRlIiwic2VsbEVkaXQiLCJzZWxsTGlzdCIsImVycm9yIiwidXBkYXRlU2VsbEVkaXQiLCJzdGF0ZSIsIm5hbWUiLCJuZXdTdGF0ZSIsInNlbGxPbkZvY3VzIiwiYWN0aW9uIiwibmV3VmFsdWUiLCJzZWxsT25DaGFuZ2VkIiwiZGF0YSIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0aW9uIiwic2VsbENyZWF0ZSIsInN0YXRlTmV3Iiwic2VsbEFkZCIsInNlbGxFZGl0VmFsaWQiLCJzZWxsQWRkU3VjY2VzcyIsInNlbGxBZGREZXRhaWwiLCJwdXNoIiwiZGV0YWlsIiwiZm9yRWFjaCIsIml0ZW0iLCJwYXJzZUZsb2F0Iiwid2VpZ2h0IiwicGFyc2VJbnQiLCJxdWFudGl0eSIsInNlbGxFZGl0QWN0aW9uIiwic2VsbCIsImNvZGUiLCJzZWxsZXJJZCIsIm5vdGUiLCJzZWxsRWRpdFN1Y2Nlc3MiLCJyZXNwb25zZSIsInNlbGxEZXRhaWxFZGl0QWN0aW9uIiwic2VsbERldGFpbCIsInNlbGxVcGRhdGUiLCJzZWxsVXBkYXRlU3VjY2VzcyIsInNlbGxMaXN0U3VjY2VzcyIsInNlbGxFcnJvciIsImNhbGxlciIsImFjdGlvblR5cGVzIiwic2VsbEVycm9ySGFuZGxlZCIsImltcG9ydEZyb21GYWN0b3J5R2V0QnlDb2RlU3VjY2VzcyIsInJlY2VpdmVySWQiLCJJTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElUIiwicmVzcG9uc2VEZXRhaWxMaXN0IiwicmVkdWNlciIsInR5cGUiLCJpbXBvcnRGcm9tRmFjdG9yeUFkZCIsImltcG9ydEZyb21GYWN0b3J5RWRpdCIsImltcG9ydEZyb21GYWN0b3J5VXBkYXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlEZWxldGUiLCJpbXBvcnRGcm9tRmFjdG9yeUxpc3QiLCJpbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZSIsImltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkIiwic2VydmljZSIsImltcG9ydEZyb21GYWN0b3J5Iiwic3RhdHVzIiwicHV0IiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJyb290U2FnYSIsImFsbCIsInRha2VFdmVyeSIsIndlYlNvY2tldFNhZ2EiLCJwYXJhbXMiLCJ0YWtlTGF0ZXN0IiwiYXV0aCIsImNhbGwiLCJjb21tb24iLCJkZXB0IiwiZW1wbG95ZWUiLCJnb2xkVHlwZSIsImdvbGRVbml0IiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0IiwicHVyY2hhc2UiLCJleHBvcnRUb0ZhY3RvcnkiLCJmYWN0b3J5VHJhbnNmZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFLElBRFk7QUFFaEJDLFNBQU8sRUFBRSxJQUZPO0FBR2hCQyxVQUFRLEVBQUU7QUFDUkMsU0FBSyxFQUFFLEVBREM7QUFFUkMsU0FBSyxFQUFFLEtBRkM7QUFHUkMsV0FBTyxFQUFFLEtBSEQ7QUFJ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UyxDQUFDeEIsc0RBQUQsRUFBd0JiLG1EQUF4QixDQXpERDtBQTBEUjtBQUNBcUMsOEVBQVMsQ0FDUHhCLGtFQURPLEVBRVBzQyx3RUFGTyxDQTNERCxFQStEUmQsb0VBQVMsQ0FDUHhCLG1FQURPLEVBRVBzQyx5RUFGTyxDQS9ERCxFQW1FUmQsb0VBQVMsQ0FDUHhCLHFFQURPLEVBRVBzQywyRUFGTyxDQW5FRCxFQXVFUmQsb0VBQVMsQ0FDUHhCLHFFQURPLEVBRVBzQywyRUFGTyxDQXZFRCxFQTJFUmQsb0VBQVMsQ0FDUHhCLG1FQURPLEVBRVBzQyx5RUFGTyxDQTNFRCxFQStFUmQsb0VBQVMsQ0FDUHhCLDBFQURPLEVBRVBzQyw4RUFGTyxDQS9FRDtBQW1GUjtBQUNBZCw4RUFBUyxDQUNQeEIsb0VBRE8sRUFFUGdCLDRFQUZPLENBcEZELEVBd0ZSUSxvRUFBUyxDQUNQeEIscUVBRE8sRUFFUGdCLDZFQUZPLENBeEZELEVBNEZSUSxvRUFBUyxDQUNQeEIsdUVBRE8sRUFFUGdCLCtFQUZPLENBNUZELEVBZ0dSUSxvRUFBUyxDQUNQeEIsdUVBRE8sRUFFUGdCLCtFQUZPLENBaEdELEVBb0dSUSxvRUFBUyxDQUNQeEIscUVBRE8sRUFFUGdCLDZFQUZPLENBcEdELEVBd0dSUSxvRUFBUyxDQUNQeEIsNEVBRE8sRUFFUGdCLGtGQUZPLENBeEdEO0FBNEdSO0FBQ0FRLDhFQUFTLENBQUN4QixrRUFBRCxFQUFvQ3VDLDBEQUFwQyxDQTdHRCxFQThHUmYsb0VBQVMsQ0FDUHhCLDhFQURPLEVBRVB1QyxrRUFGTyxDQTlHRCxFQWtIUmYsb0VBQVMsQ0FDUHhCLGdGQURPLEVBRVB1QyxvRUFGTyxDQWxIRCxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NWI1ZmVhYWE5MzExNDVjMzlkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tWYWxpZGl0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbGl0eVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IFNFTExfRURJVCA9IHtcclxuICBpZDogbnVsbCxcclxuICB2ZXJzaW9uOiBudWxsLFxyXG4gIHNlbGxDb2RlOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1wbG95ZWVJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBzZWxsRGF0ZToge1xyXG4gICAgdmFsdWU6IG5ldyBEYXRlKCksXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHNlbGxOb3RlOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgd2VpZ2h0VG90YWw6IDAsXHJcbiAgcXVhbnRpdHlUb3RhbDogMCxcclxuICBzZWxsRGV0YWlsczogW10sXHJcbiAgdmFsaWQ6IGZhbHNlLFxyXG4gIHdhaXRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgU0VMTF9ERVRBSUxfRURJVCA9IHtcclxuICBpZDogbnVsbCxcclxuICBwcm9kdWN0SWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZ29sZFR5cGVJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBzZWxsV2VpZ2h0OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRVbml0SWQ6IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgc2VsbFF1YW50aXR5OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHZhbGlkRGV0YWlsOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IFNFTExfTElTVCA9IHtcclxuICBzZWxsczogW10sXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc2VsbEVkaXQ6IHsgLi4uU0VMTF9FRElULCAuLi5TRUxMX0RFVEFJTF9FRElUIH0sXHJcbiAgc2VsbExpc3Q6IFNFTExfTElTVCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVNlbGxFZGl0ID0gKHN0YXRlLCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHsgLi4uc3RhdGUuc2VsbEVkaXQgfTtcclxuICBzZWxsRWRpdFtuYW1lXSA9IHsgLi4uc2VsbEVkaXRbbmFtZV0sIC4uLnZhbHVlIH07XHJcbiAgbGV0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IHNlbGxPbkZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgbmV3VmFsdWUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IG5ld1N0YXRlID0gdXBkYXRlU2VsbEVkaXQoc3RhdGUsIGFjdGlvbi5uYW1lLCBuZXdWYWx1ZSk7XHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbE9uQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IG5ld1ZhbHVlID0ge1xyXG4gICAgdmFsdWU6IGFjdGlvbi5kYXRhLnZhbHVlLFxyXG4gICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLmRhdGEudmFsdWUsIGFjdGlvbi5kYXRhLnZhbGlkYXRpb24pLFxyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBuZXdTdGF0ZSA9IHVwZGF0ZVNlbGxFZGl0KHN0YXRlLCBhY3Rpb24ubmFtZSwgbmV3VmFsdWUpO1xyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IHNlbGxDcmVhdGUgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBzZWxsRWRpdDogeyAuLi5TRUxMX0VESVQsIC4uLlNFTExfREVUQUlMX0VESVQgfSxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxBZGQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5zZWxsRWRpdFZhbGlkID1cclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxDb2RlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5lbXBsb3llZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsRGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbE5vdGUudmFsaWQ7XHJcbiAgaWYgKCFhY3Rpb24uc2VsbEVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbENvZGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbERhdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5zZWxsTm90ZS50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuc2VsbEVkaXQsXHJcbiAgICB2YWxpZDogYWN0aW9uLnNlbGxFZGl0VmFsaWQsXHJcbiAgICB3YWl0aW5nOiBhY3Rpb24uc2VsbEVkaXRWYWxpZCxcclxuICB9O1xyXG4gIHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxBZGRTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7IC4uLlNFTExfRURJVCwgLi4uU0VMTF9ERVRBSUxfRURJVCB9O1xyXG4gIHNlbGxFZGl0LnNlbGxEZXRhaWxzID0gW107XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHNlbGxFZGl0OiBzZWxsRWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxBZGREZXRhaWwgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5zZWxsRWRpdFZhbGlkID1cclxuICAgIHN0YXRlLnNlbGxFZGl0LnByb2R1Y3RJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFR5cGVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuZ29sZFVuaXRJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFF1YW50aXR5LnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLnNlbGxFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRUeXBlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVW5pdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFdlaWdodC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuc2VsbEVkaXQsXHJcbiAgICAuLi5TRUxMX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWREZXRhaWw6IGFjdGlvbi5zZWxsRWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgLy8gQWRkIGRldGFpbC5cclxuICBpZiAoYWN0aW9uLnNlbGxFZGl0VmFsaWQpIHtcclxuICAgIHNlbGxFZGl0LnNlbGxEZXRhaWxzLnB1c2goYWN0aW9uLmRldGFpbCk7XHJcbiAgICAvLyBVcGRhdGUgV2VpZ2h0VG90YWwgYW5kIFF1YW50aXR5VG90YWwuXHJcbiAgICBsZXQgd2VpZ2h0VG90YWwgPSAwO1xyXG4gICAgbGV0IHF1YW50aXR5VG90YWwgPSAwO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbERldGFpbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB3ZWlnaHRUb3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0ud2VpZ2h0KTtcclxuICAgICAgcXVhbnRpdHlUb3RhbCArPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICAgIH0pO1xyXG4gICAgc2VsbEVkaXQud2VpZ2h0VG90YWwgPSB3ZWlnaHRUb3RhbDtcclxuICAgIHNlbGxFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG4gIH1cclxuICBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBzZWxsRWRpdDogc2VsbEVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsRWRpdEFjdGlvbiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgaWQ6IG51bGwsIC8vYWN0aW9uLnNlbGwuaWQsXHJcbiAgICB2ZXJzaW9uOiBhY3Rpb24uc2VsbC52ZXJzaW9uLFxyXG4gICAgc2VsbENvZGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLmNvZGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLnNlbGxlcklkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2VsbERhdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLnNlbGxEYXRlLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2VsbE5vdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsLm5vdGUgPyBhY3Rpb24uc2VsbC5ub3RlIDogXCJcIixcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC4uLlNFTExfREVUQUlMX0VESVQsXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICB9O1xyXG4gIHNlbGxFZGl0ID0geyAuLi5zdGF0ZS5zZWxsRWRpdCwgLi4uc2VsbEVkaXQgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgc2VsbEVkaXQ6IHNlbGxFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBzZWxsRWRpdDogc2VsbEVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsRWRpdFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxFZGl0LFxyXG4gIH07XHJcbiAgc2VsbEVkaXQuc2VsbERldGFpbHMgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICAvLyBVcGRhdGUgV2VpZ2h0VG90YWwgYW5kIFF1YW50aXR5VG90YWwuXHJcbiAgbGV0IHdlaWdodFRvdGFsID0gMDtcclxuICBsZXQgcXVhbnRpdHlUb3RhbCA9IDA7XHJcbiAgc2VsbEVkaXQuc2VsbERldGFpbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgd2VpZ2h0VG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLndlaWdodCk7XHJcbiAgICBxdWFudGl0eVRvdGFsICs9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH0pO1xyXG4gIHNlbGxFZGl0LndlaWdodFRvdGFsID0gd2VpZ2h0VG90YWw7XHJcbiAgc2VsbEVkaXQucXVhbnRpdHlUb3RhbCA9IHF1YW50aXR5VG90YWw7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHNlbGxFZGl0OiBzZWxsRWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxEZXRhaWxFZGl0QWN0aW9uID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICBpZDogYWN0aW9uLnNlbGxEZXRhaWwuaWQsXHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsRGV0YWlsLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbERldGFpbC5nb2xkVHlwZUlkLFxyXG4gICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxXZWlnaHQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5zZWxsRGV0YWlsLndlaWdodCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uc2VsbERldGFpbC5nb2xkVW5pdElkLFxyXG4gICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNlbGxRdWFudGl0eToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnNlbGxEZXRhaWwucXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgdmFsaWREZXRhaWw6IGZhbHNlLFxyXG4gIH07XHJcbiAgc2VsbEVkaXQgPSB7IC4uLnN0YXRlLnNlbGxFZGl0LCAuLi5zZWxsRWRpdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBzZWxsRWRpdDogc2VsbEVkaXQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxFZGl0OiBzZWxsRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxVcGRhdGUgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5zZWxsRWRpdFZhbGlkID1cclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxDb2RlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5lbXBsb3llZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRVbml0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxXZWlnaHQudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxRdWFudGl0eS52YWxpZCAmJlxyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbERhdGUudmFsaWQgJiZcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxOb3RlLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLnNlbGxFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxDb2RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuZW1wbG95ZWVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LmdvbGRUeXBlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC5nb2xkVW5pdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbFdlaWdodC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLnNlbGxFZGl0LnNlbGxEYXRlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2VsbEVkaXQuc2VsbE5vdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBzZWxsRWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5zZWxsRWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLnNlbGxFZGl0VmFsaWQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbEVkaXQ6IHNlbGxFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbFVwZGF0ZVN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsRWRpdCA9IHsgLi4uU0VMTF9FRElULCAuLi5TRUxMX0RFVEFJTF9FRElUIH07XHJcbiAgc2VsbEVkaXQuc2VsbERldGFpbHMgPSBbXTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgc2VsbEVkaXQ6IHNlbGxFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbExpc3QgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzZWxsTGlzdCA9IHsgLi4uc3RhdGUuc2VsbExpc3QsIHdhaXRpbmc6IHRydWUgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgc2VsbExpc3Q6IHNlbGxMaXN0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsbExpc3RTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvKiBsZXQgc2VsbHMgPSBbXTtcclxuICBsZXQgZGF0YSA9IGFjdGlvbi5yZXNwb25zZS5kYXRhO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICBzZWxscy5wdXNoKHtcclxuICAgICAga2V5OiBrZXksXHJcbiAgICAgIGlkOiBrZXksXHJcbiAgICAgIG5hbWU6IGRhdGFba2V5XS5uYW1lLFxyXG4gICAgICBlbXBsb3llZUlkOiBkYXRhW2tleV0uZW1wbG95ZWVJZCxcclxuICAgICAgcHJvZHVjdElkOiBkYXRhW2tleV0ucHJvZHVjdElkLFxyXG4gICAgICBnb2xkVHlwZUlkOiBkYXRhW2tleV0uZ29sZFR5cGVJZCxcclxuICAgICAgZ29sZFVuaXRJZDogZGF0YVtrZXldLmdvbGRVbml0SWQsXHJcbiAgICAgIHdlaWdodDogZGF0YVtrZXldLndlaWdodCxcclxuICAgICAgcXVhbnRpdHk6IGRhdGFba2V5XS5xdWFudGl0eSxcclxuICAgICAgaW5wdXREYXRlOiBkYXRhW2tleV0uaW5wdXREYXRlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YVtrZXldLmRlc2NyaXB0aW9uLFxyXG4gICAgICBpbWFnZTogZGF0YVtrZXldLmltYWdlLFxyXG4gICAgfSk7XHJcbiAgfSAqL1xyXG4gIGxldCBzZWxsTGlzdCA9IHtcclxuICAgIC4uLnN0YXRlLnNlbGxMaXN0LFxyXG4gICAgc2VsbHM6IGFjdGlvbi5yZXNwb25zZS5kYXRhLFxyXG4gICAgd2FpdGluZzogZmFsc2UsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IG51bGwsICBzZWxsTGlzdDogc2VsbExpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIHNlbGxMaXN0OiBzZWxsTGlzdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHNlbGxFcnJvciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gc2VsbExpc3QgPSB7IC4uLnN0YXRlLnNlbGxMaXN0LCAuLi5zZWxsTGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBzZWxsTGlzdDogc2VsbExpc3QgfSk7XHJcbiAgaWYgKGFjdGlvbi5jYWxsZXIgPT09IGFjdGlvblR5cGVzLlNFTExfTElTVCkge1xyXG4gICAgc3RhdGUuc2VsbExpc3Qud2FpdGluZyA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5zZWxsRWRpdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBzZWxsRXJyb3JIYW5kbGVkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBzZWxsTGlzdCA9IHsgLi4uc3RhdGUuc2VsbExpc3QsIC4uLnNlbGxMaXN0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBhY3Rpb24uZXJyb3IsIHNlbGxMaXN0OiBzZWxsTGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5R2V0QnlDb2RlU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgaWYgKCFhY3Rpb24ucmVzcG9uc2UuZGF0YSkge1xyXG4gICAgbGV0IHNlbGxFZGl0ID0ge1xyXG4gICAgICAuLi5TRUxMX0VESVQsXHJcbiAgICAgIC4uLlNFTExfREVUQUlMX0VESVQsXHJcbiAgICB9O1xyXG4gICAgc2VsbEVkaXQuc2VsbERldGFpbHMgPSBbXTtcclxuICAgIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICBzZWxsRWRpdDogc2VsbEVkaXQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHN0YXRlTmV3O1xyXG4gIH1cclxuICAvLyBsZXQgZW1wbG95ZWVJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1wbG95ZWVJZFwiKTtcclxuICBsZXQgc2VsbEVkaXQgPSB7XHJcbiAgICAvLyBpZDogYWN0aW9uLnJlc3BvbnNlLmRhdGEuaWQsXHJcbiAgICB2ZXJzaW9uOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS52ZXJzaW9uLFxyXG4gICAgc2VsbENvZGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLmNvZGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLnJlY2VpdmVySWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzZWxsRGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnJlc3BvbnNlLmRhdGEuc2VsbERhdGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzZWxsTm90ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnJlc3BvbnNlLmRhdGEubm90ZSA/IGFjdGlvbi5yZXNwb25zZS5kYXRhLm5vdGUgOiBcIlwiLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLi4uSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVCxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHNlbGxFZGl0LnNlbGxEZXRhaWxzID0gYWN0aW9uLnJlc3BvbnNlRGV0YWlsTGlzdC5kYXRhO1xyXG4gIC8vIFVwZGF0ZSBXZWlnaHRUb3RhbCBhbmQgUXVhbnRpdHlUb3RhbC5cclxuICBsZXQgd2VpZ2h0VG90YWwgPSAwO1xyXG4gIGxldCBxdWFudGl0eVRvdGFsID0gMDtcclxuICBzZWxsRWRpdC5zZWxsRGV0YWlscy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB3ZWlnaHRUb3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0ud2VpZ2h0KTtcclxuICAgIHF1YW50aXR5VG90YWwgKz0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgfSk7XHJcbiAgc2VsbEVkaXQud2VpZ2h0VG90YWwgPSB3ZWlnaHRUb3RhbDtcclxuICBzZWxsRWRpdC5xdWFudGl0eVRvdGFsID0gcXVhbnRpdHlUb3RhbDtcclxuXHJcbiAgc2VsbEVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5zZWxsRWRpdCxcclxuICAgIC4uLnNlbGxFZGl0LFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IHNlbGxFZGl0OiBzZWxsRWRpdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgc2VsbEVkaXQ6IHNlbGxFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLyogY29uc29sZS5sb2coXHJcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gU2VsbCBpbml0aWFsaXplIC4uLi4uXCJcclxuICApOyAqL1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9PTl9GT0NVUzpcclxuICAgICAgcmV0dXJuIHNlbGxPbkZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX09OX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBzZWxsT25DaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9DUkVBVEU6XHJcbiAgICAgIHJldHVybiBzZWxsQ3JlYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0FERDpcclxuICAgICAgcmV0dXJuIHNlbGxBZGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfQUREX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBzZWxsQWRkU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfQUREX0RFVEFJTDpcclxuICAgICAgcmV0dXJuIHNlbGxBZGREZXRhaWwoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0VESVQ6XHJcbiAgICAgIHJldHVybiBzZWxsRWRpdEFjdGlvbihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9FRElUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBzZWxsRWRpdFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFTExfREVUQUlMX0VESVQ6XHJcbiAgICAgIHJldHVybiBzZWxsRGV0YWlsRWRpdEFjdGlvbihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9VUERBVEU6XHJcbiAgICAgIHJldHVybiBzZWxsVXBkYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX1VQREFURV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gc2VsbFVwZGF0ZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0xJU1Q6XHJcbiAgICAgIHJldHVybiBzZWxsTGlzdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VMTF9MSVNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBzZWxsTGlzdFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgLy8gSW1wb3J0RnJvbUZhY3RvcnkuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfR0VUX0JZX0NPREU6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0VSUk9SOlxyXG4gICAgICByZXR1cm4gc2VsbEVycm9yKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRUxMX0VSUk9SX0hBTkRMRUQ6XHJcbiAgICAgIHJldHVybiBzZWxsRXJyb3JIYW5kbGVkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgc2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaW1wb3J0RnJvbUZhY3RvcnlcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogaW1wb3J0RnJvbUZhY3RvcnlBZGQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBpbXBvcnRGcm9tRmFjdG9yeUFkZCAuLi5cIik7XHJcbiAgICBpZiAoYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VydmljZS5pbXBvcnRGcm9tRmFjdG9yeUFkZChcclxuICAgICAgICBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlBZGRTdWNjZXNzKCkpO1xyXG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5TGlzdCgpKTtcclxuICAgICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9BREQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB5aWVsZCBwdXQoXHJcbiAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0FERCwgZXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VydmljZS5pbXBvcnRGcm9tRmFjdG9yeURldGFpbExpc3QoXHJcbiAgICAgIGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeS5pZFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVkaXRTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9FRElULFxyXG4gICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dChcclxuICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCxcclxuICAgICAgICBlcnJvclxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgdG9rZW4gPSB5aWVsZCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGUoXHJcbiAgICAgICAgYWN0aW9uLmlkLFxyXG4gICAgICAgIGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZVN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlMaXN0KCkpO1xyXG4gICAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgICBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1VQREFURSxcclxuICAgICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dChcclxuICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfVVBEQVRFLFxyXG4gICAgICAgIGVycm9yXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGltcG9ydEZyb21GYWN0b3J5RGVsZXRlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuaW1wb3J0RnJvbUZhY3RvcnlEZWxldGUoXHJcbiAgICAgIGFjdGlvbi5pZCxcclxuICAgICAgYWN0aW9uLnZlcnNpb25cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlEZWxldGVTdWNjZXNzKCkpO1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUxpc3QoKSk7XHJcbiAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9ERUxFVEUsXHJcbiAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgeWllbGQgcHV0KFxyXG4gICAgICBhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5RXJyb3IoXHJcbiAgICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9ERUxFVEUsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogaW1wb3J0RnJvbUZhY3RvcnlMaXN0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuaW1wb3J0RnJvbUZhY3RvcnlMaXN0KCk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlMaXN0U3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfTElTVCxcclxuICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB5aWVsZCBwdXQoXHJcbiAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0xJU1QsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VydmljZS5pbXBvcnRGcm9tRmFjdG9yeUdldEJ5Q29kZShhY3Rpb24uY29kZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzKHJlc3BvbnNlLCBudWxsKSk7XHJcbiAgICAgICAgLy95aWVsZCBwdXQoYWN0aW9ucy53ZWJTb2NrZXRBZGRNZXNzYWdlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBEZXRhaWwgbGlzdC5cclxuICAgICAgICBjb25zdCByZXNwb25zZURldGFpbExpc3QgPSB5aWVsZCBzZXJ2aWNlLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsTGlzdChcclxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChyZXNwb25zZURldGFpbExpc3QgJiYgcmVzcG9uc2VEZXRhaWxMaXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzKFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlRGV0YWlsTGlzdFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy95aWVsZCBwdXQoYWN0aW9ucy53ZWJTb2NrZXRBZGRNZXNzYWdlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5RXJyb3IoXHJcbiAgICAgICAgICAgICAgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfR0VUX0JZX0NPREUsXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy95aWVsZCBwdXQoYWN0aW9ucy53ZWJTb2NrZXRBZGRNZXNzYWdlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICAgIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0dFVF9CWV9DT0RFLFxyXG4gICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dChcclxuICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0dFVF9CWV9DT0RFLFxyXG4gICAgICAgIGVycm9yXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHdlYlNvY2tldFNhZ2EgZnJvbSBcIi4vd2ViU29ja2V0U2FnYVwiO1xyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIGF1dGggZnJvbSBcIi4vYXV0aFwiO1xyXG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIGRlcHQgZnJvbSBcIi4vZGVwdFNhZ2FcIjtcclxuaW1wb3J0ICogYXMgZW1wbG95ZWUgZnJvbSBcIi4vZW1wbG95ZWVTYWdhXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlIGZyb20gXCIuL2dvbGRUeXBlU2FnYVwiO1xyXG5pbXBvcnQgKiBhcyBnb2xkVW5pdCBmcm9tIFwiLi9nb2xkVW5pdFNhZ2FcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGUgZnJvbSBcIi4vcHJvZHVjdFR5cGVTYWdhXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3QgZnJvbSBcIi4vcHJvZHVjdFNhZ2FcIjtcclxuaW1wb3J0ICogYXMgcHVyY2hhc2UgZnJvbSBcIi4vcHVyY2hhc2VTYWdhXCI7XHJcbmltcG9ydCAqIGFzIHNlbGwgZnJvbSBcIi4vc2VsbFNhZ2FcIjtcclxuaW1wb3J0ICogYXMgZXhwb3J0VG9GYWN0b3J5IGZyb20gXCIuL2V4cG9ydFRvRmFjdG9yeVNhZ2FcIjtcclxuaW1wb3J0ICogYXMgaW1wb3J0RnJvbUZhY3RvcnkgZnJvbSBcIi4vaW1wb3J0RnJvbUZhY3RvcnlTYWdhXCI7XHJcbmltcG9ydCAqIGFzIGZhY3RvcnlUcmFuc2ZlciBmcm9tIFwiLi9mYWN0b3J5VHJhbnNmZXJTYWdhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIC8qIFdlYlNvY2tldCAqL1xyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLldFQlNPQ0tFVF9BRERfTUVTU0FHRSwgKGFjdGlvbikgPT5cclxuICAgICAgd2ViU29ja2V0U2FnYS53ZWJTb2NrZXRBZGRNZXNzYWdlKGFjdGlvbiwgcGFyYW1zKVxyXG4gICAgKSxcclxuICAgIC8qIEF1dGhlbiAqL1xyXG4gICAgdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5BVVRIX0NIRUNLX1RJTUVPVVQsIGF1dGguY2hlY2tBdXRoVGltZW91dFNhZ2EpLFxyXG4gICAgdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5BVVRIX0xPR09VVCwgYXV0aC5sb2dvdXRTYWdhKSxcclxuICAgIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuQVVUSF9VU0VSLCBhdXRoLmF1dGhVc2VyU2FnYSksXHJcbiAgICB0YWtlTGF0ZXN0KGFjdGlvblR5cGVzLkFVVEhfQ0hFQ0tfU1RBVEUsIGF1dGguYXV0aENoZWNrU3RhdGVTYWdhKSxcclxuICAgIC8qIENvbW1vbiAqL1xyXG4gICAgY2FsbChjb21tb24ucnVuQ2xvY2tTYWdhKSxcclxuICAgIC8qIERlcHQgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX0FERCwgZGVwdC5kZXB0QWRkKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX1VQREFURSwgZGVwdC5kZXB0VXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX0RFTEVURSwgZGVwdC5kZXB0RGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5ERVBUX0xJU1QsIGRlcHQuZGVwdExpc3QpLFxyXG4gICAgLyogRW1wbG95ZWUgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9BREQsIGVtcGxveWVlLmVtcGxveWVlQWRkKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9VUERBVEUsIGVtcGxveWVlLmVtcGxveWVlVXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9ERUxFVEUsIGVtcGxveWVlLmVtcGxveWVlRGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5FTVBMT1lFRV9MSVNULCBlbXBsb3llZS5lbXBsb3llZUxpc3QpLFxyXG4gICAgdGFrZUV2ZXJ5KFxyXG4gICAgICBhY3Rpb25UeXBlcy5FTVBMT1lFRV9MSVNUX0lOX0ZBQ1RPUlksXHJcbiAgICAgIGVtcGxveWVlLmVtcGxveWVlTGlzdEluRmFjdG9yeVxyXG4gICAgKSxcclxuICAgIC8qIEdvbGRUeXBlICovXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR09MRF9UWVBFX0FERCwgZ29sZFR5cGUuZ29sZFR5cGVBZGQpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdPTERfVFlQRV9VUERBVEUsIGdvbGRUeXBlLmdvbGRUeXBlVXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5HT0xEX1RZUEVfREVMRVRFLCBnb2xkVHlwZS5nb2xkVHlwZURlbGV0ZSksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR09MRF9UWVBFX0xJU1QsIGdvbGRUeXBlLmdvbGRUeXBlTGlzdCksXHJcbiAgICAvKiBHb2xkVW5pdCAqL1xyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdPTERfVU5JVF9BREQsIGdvbGRVbml0LmdvbGRVbml0QWRkKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5HT0xEX1VOSVRfVVBEQVRFLCBnb2xkVW5pdC5nb2xkVW5pdFVwZGF0ZSksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR09MRF9VTklUX0RFTEVURSwgZ29sZFVuaXQuZ29sZFVuaXREZWxldGUpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdPTERfVU5JVF9MSVNULCBnb2xkVW5pdC5nb2xkVW5pdExpc3QpLFxyXG4gICAgLyogUHJvZHVjdFR5cGUgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX1RZUEVfQURELCBwcm9kdWN0VHlwZS5wcm9kdWN0VHlwZUFkZCksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9UWVBFX1VQREFURSwgcHJvZHVjdFR5cGUucHJvZHVjdFR5cGVVcGRhdGUpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBST0RVQ1RfVFlQRV9ERUxFVEUsIHByb2R1Y3RUeXBlLnByb2R1Y3RUeXBlRGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX1RZUEVfTElTVCwgcHJvZHVjdFR5cGUucHJvZHVjdFR5cGVMaXN0KSxcclxuICAgIC8qIFByb2R1Y3QgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX0FERCwgcHJvZHVjdC5wcm9kdWN0QWRkKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX1VQREFURSwgcHJvZHVjdC5wcm9kdWN0VXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX0RFTEVURSwgcHJvZHVjdC5wcm9kdWN0RGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX0xJU1QsIHByb2R1Y3QucHJvZHVjdExpc3QpLFxyXG4gICAgLyogUHVyY2hhc2UgKi9cclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QVVJDSEFTRV9BREQsIHB1cmNoYXNlLnB1cmNoYXNlQWRkKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QVVJDSEFTRV9FRElULCBwdXJjaGFzZS5wdXJjaGFzZUVkaXQpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBVUkNIQVNFX1VQREFURSwgcHVyY2hhc2UucHVyY2hhc2VVcGRhdGUpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBVUkNIQVNFX0RFTEVURSwgcHVyY2hhc2UucHVyY2hhc2VEZWxldGUpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBVUkNIQVNFX0xJU1QsIHB1cmNoYXNlLnB1cmNoYXNlTGlzdCksXHJcbiAgICAvKiBTZWxsICovXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuU0VMTF9BREQsIHNlbGwuc2VsbEFkZCksXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuU0VMTF9FRElULCBzZWxsLnNlbGxFZGl0KSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5TRUxMX1VQREFURSwgc2VsbC5zZWxsVXBkYXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5TRUxMX0RFTEVURSwgc2VsbC5zZWxsRGVsZXRlKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5TRUxMX0xJU1QsIHNlbGwuc2VsbExpc3QpLFxyXG4gICAgLyogRXhwb3J0VG9GYWN0b3J5ICovXHJcbiAgICB0YWtlRXZlcnkoXHJcbiAgICAgIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0FERCxcclxuICAgICAgZXhwb3J0VG9GYWN0b3J5LmV4cG9ydFRvRmFjdG9yeUFkZFxyXG4gICAgKSxcclxuICAgIHRha2VFdmVyeShcclxuICAgICAgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfRURJVCxcclxuICAgICAgZXhwb3J0VG9GYWN0b3J5LmV4cG9ydFRvRmFjdG9yeUVkaXRcclxuICAgICksXHJcbiAgICB0YWtlRXZlcnkoXHJcbiAgICAgIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX1VQREFURSxcclxuICAgICAgZXhwb3J0VG9GYWN0b3J5LmV4cG9ydFRvRmFjdG9yeVVwZGF0ZVxyXG4gICAgKSxcclxuICAgIHRha2VFdmVyeShcclxuICAgICAgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfREVMRVRFLFxyXG4gICAgICBleHBvcnRUb0ZhY3RvcnkuZXhwb3J0VG9GYWN0b3J5RGVsZXRlXHJcbiAgICApLFxyXG4gICAgdGFrZUV2ZXJ5KFxyXG4gICAgICBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9MSVNULFxyXG4gICAgICBleHBvcnRUb0ZhY3RvcnkuZXhwb3J0VG9GYWN0b3J5TGlzdFxyXG4gICAgKSxcclxuICAgIHRha2VFdmVyeShcclxuICAgICAgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfR0VUX0JZX0NPREUsXHJcbiAgICAgIGV4cG9ydFRvRmFjdG9yeS5leHBvcnRUb0ZhY3RvcnlHZXRCeUNvZGVcclxuICAgICksXHJcbiAgICAvKiBJbXBvcnRGcm9tRmFjdG9yeSAqL1xyXG4gICAgdGFrZUV2ZXJ5KFxyXG4gICAgICBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0FERCxcclxuICAgICAgaW1wb3J0RnJvbUZhY3RvcnkuaW1wb3J0RnJvbUZhY3RvcnlBZGRcclxuICAgICksXHJcbiAgICB0YWtlRXZlcnkoXHJcbiAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCxcclxuICAgICAgaW1wb3J0RnJvbUZhY3RvcnkuaW1wb3J0RnJvbUZhY3RvcnlFZGl0XHJcbiAgICApLFxyXG4gICAgdGFrZUV2ZXJ5KFxyXG4gICAgICBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1VQREFURSxcclxuICAgICAgaW1wb3J0RnJvbUZhY3RvcnkuaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVcclxuICAgICksXHJcbiAgICB0YWtlRXZlcnkoXHJcbiAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfREVMRVRFLFxyXG4gICAgICBpbXBvcnRGcm9tRmFjdG9yeS5pbXBvcnRGcm9tRmFjdG9yeURlbGV0ZVxyXG4gICAgKSxcclxuICAgIHRha2VFdmVyeShcclxuICAgICAgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9MSVNULFxyXG4gICAgICBpbXBvcnRGcm9tRmFjdG9yeS5pbXBvcnRGcm9tRmFjdG9yeUxpc3RcclxuICAgICksXHJcbiAgICB0YWtlRXZlcnkoXHJcbiAgICAgIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfR0VUX0JZX0NPREUsXHJcbiAgICAgIGltcG9ydEZyb21GYWN0b3J5LmltcG9ydEZyb21GYWN0b3J5R2V0QnlDb2RlXHJcbiAgICApLFxyXG4gICAgLyogRmFjdG9yeVRyYW5zZmVyICovXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuRkFDVE9SWV9UUkFOU0ZFUl9BRERTLCBmYWN0b3J5VHJhbnNmZXIuYWRkcyksXHJcbiAgICB0YWtlRXZlcnkoXHJcbiAgICAgIGFjdGlvblR5cGVzLkZBQ1RPUllfVFJBTlNGRVJfTE9BRF9MSVNUX1NFTkRFUixcclxuICAgICAgZmFjdG9yeVRyYW5zZmVyLnNlbmRlcklkTGlzdFxyXG4gICAgKSxcclxuICAgIHRha2VFdmVyeShcclxuICAgICAgYWN0aW9uVHlwZXMuRkFDVE9SWV9UUkFOU0ZFUl9MT0FEX0xJU1RfUkVDRUlWRVIsXHJcbiAgICAgIGZhY3RvcnlUcmFuc2Zlci5yZWNlaXZlcklkTGlzdFxyXG4gICAgKSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9