webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/reducers/exportToFactoryReducer.js":
/*!******************************************************!*\
  !*** ./src/store/reducers/exportToFactoryReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var EXPORT_TO_FACTORY_EDIT = {
  id: null,
  version: null,
  exportToFactoryCode: {
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
  exportToFactoryDate: {
    value: new Date(),
    valid: true,
    touched: false,
    autoFocus: false
  },
  exportToFactoryNote: {
    value: "",
    valid: true,
    touched: false,
    autoFocus: false
  },
  weightTotal: 0,
  quantityTotal: 0,
  exportToFactoryDetails: [],
  valid: false,
  waiting: false
};
var EXPORT_TO_FACTORY_DETAIL_EDIT = {
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
  exportToFactoryWeight: {
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
  exportToFactoryQuantity: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  validDetail: false
};
var EXPORT_TO_FACTORY_LIST = {
  exportToFactorys: [],
  waiting: false
};
var initialState = {
  exportToFactoryEdit: _objectSpread(_objectSpread({}, EXPORT_TO_FACTORY_EDIT), EXPORT_TO_FACTORY_DETAIL_EDIT),
  exportToFactoryList: EXPORT_TO_FACTORY_LIST,
  error: null
};

var exportToFactoryCodeFocus = function exportToFactoryCodeFocus(state, action) {
  var exportToFactoryCode = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    exportToFactoryCode: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.exportToFactoryCode), exportToFactoryCode)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryCodeChanged = function exportToFactoryCodeChanged(state, action) {
  var exportToFactoryEdit = {
    exportToFactoryCode: {
      value: action.exportToFactoryCode,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.exportToFactoryCode, action.validation),
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryEmployeeIdFocus = function exportToFactoryEmployeeIdFocus(state, action) {
  var employeeId = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    employeeId: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.employeeId), employeeId)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryEmployeeIdChanged = function exportToFactoryEmployeeIdChanged(state, action) {
  var exportToFactoryEdit = {
    employeeId: {
      value: action.employeeId,
      valid: !!action.employeeId,
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryProductIdFocus = function exportToFactoryProductIdFocus(state, action) {
  var productId = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    productId: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.productId), productId)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryProductIdChanged = function exportToFactoryProductIdChanged(state, action) {
  var exportToFactoryEdit = {
    productId: {
      value: action.productId,
      valid: !!action.productId,
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryGoldTypeIdFocus = function exportToFactoryGoldTypeIdFocus(state, action) {
  var goldTypeId = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    goldTypeId: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.goldTypeId), goldTypeId)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryGoldTypeIdChanged = function exportToFactoryGoldTypeIdChanged(state, action) {
  var exportToFactoryEdit = {
    goldTypeId: {
      value: action.goldTypeId,
      valid: !!action.goldTypeId,
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryGoldUnitIdFocus = function exportToFactoryGoldUnitIdFocus(state, action) {
  var goldUnitId = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    goldUnitId: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.goldUnitId), goldUnitId)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryGoldUnitIdChanged = function exportToFactoryGoldUnitIdChanged(state, action) {
  var exportToFactoryEdit = {
    goldUnitId: {
      value: action.goldUnitId,
      valid: !!action.goldUnitId,
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryWeightFocus = function exportToFactoryWeightFocus(state, action) {
  var exportToFactoryWeight = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    exportToFactoryWeight: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.exportToFactoryWeight), exportToFactoryWeight)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryWeightChanged = function exportToFactoryWeightChanged(state, action) {
  var exportToFactoryEdit = {
    exportToFactoryWeight: {
      value: action.exportToFactoryWeight,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.exportToFactoryWeight, action.validation),
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryQuantityFocus = function exportToFactoryQuantityFocus(state, action) {
  var exportToFactoryQuantity = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    exportToFactoryQuantity: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.exportToFactoryQuantity), exportToFactoryQuantity)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryQuantityChanged = function exportToFactoryQuantityChanged(state, action) {
  var exportToFactoryEdit = {
    exportToFactoryQuantity: {
      value: action.exportToFactoryQuantity,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.exportToFactoryQuantity, action.validation),
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryDateFocus = function exportToFactoryDateFocus(state, action) {
  var exportToFactoryDate = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    exportToFactoryDate: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.exportToFactoryDate), exportToFactoryDate)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryDateChanged = function exportToFactoryDateChanged(state, action) {
  var exportToFactoryEdit = {
    exportToFactoryDate: {
      value: action.exportToFactoryDate,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.exportToFactoryDate, action.validation),
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryNoteFocus = function exportToFactoryNoteFocus(state, action) {
  var exportToFactoryNote = {
    touched: true,
    autoFocus: true
  };
  var exportToFactoryEdit = {
    exportToFactoryNote: _objectSpread(_objectSpread({}, state.exportToFactoryEdit.exportToFactoryNote), exportToFactoryNote)
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryNoteChanged = function exportToFactoryNoteChanged(state, action) {
  var exportToFactoryEdit = {
    exportToFactoryNote: {
      value: action.exportToFactoryNote ? action.exportToFactoryNote : "",
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.exportToFactoryNote, action.validation),
      touched: true
    }
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryCreate = function exportToFactoryCreate(state, action) {
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: _objectSpread(_objectSpread({}, EXPORT_TO_FACTORY_EDIT), EXPORT_TO_FACTORY_DETAIL_EDIT)
  });

  return stateNew;
};

var exportToFactoryAdd = function exportToFactoryAdd(state, action) {
  var stateNew = state;
  action.exportToFactoryEditValid = state.exportToFactoryEdit.exportToFactoryCode.valid && state.exportToFactoryEdit.employeeId.valid && state.exportToFactoryEdit.exportToFactoryDate.valid && state.exportToFactoryEdit.exportToFactoryNote.valid;

  if (!action.exportToFactoryEditValid) {
    state.exportToFactoryEdit.exportToFactoryCode.touched = true;
    state.exportToFactoryEdit.employeeId.touched = true;
    state.exportToFactoryEdit.exportToFactoryDate.touched = true;
    state.exportToFactoryEdit.exportToFactoryNote.touched = true;
  }

  var exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), {}, {
    valid: action.exportToFactoryEditValid,
    waiting: action.exportToFactoryEditValid
  });

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });
  return stateNew;
};

var exportToFactoryAddSuccess = function exportToFactoryAddSuccess(state, action) {
  var exportToFactoryEdit = _objectSpread(_objectSpread({}, EXPORT_TO_FACTORY_EDIT), EXPORT_TO_FACTORY_DETAIL_EDIT);

  exportToFactoryEdit.exportToFactoryDetails = [];

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryAddDetail = function exportToFactoryAddDetail(state, action) {
  var stateNew = state;
  action.exportToFactoryEditValid = state.exportToFactoryEdit.productId.valid && state.exportToFactoryEdit.goldTypeId.valid && state.exportToFactoryEdit.goldUnitId.valid && state.exportToFactoryEdit.exportToFactoryWeight.valid && state.exportToFactoryEdit.exportToFactoryQuantity.valid;

  if (!action.exportToFactoryEditValid) {
    state.exportToFactoryEdit.productId.touched = true;
    state.exportToFactoryEdit.goldTypeId.touched = true;
    state.exportToFactoryEdit.goldUnitId.touched = true;
    state.exportToFactoryEdit.exportToFactoryWeight.touched = true;
    state.exportToFactoryEdit.exportToFactoryQuantity.touched = true;
  }

  var exportToFactoryEdit = _objectSpread(_objectSpread(_objectSpread({}, state.exportToFactoryEdit), EXPORT_TO_FACTORY_DETAIL_EDIT), {}, {
    validDetail: action.exportToFactoryEditValid
  });

  if (action.exportToFactoryEditValid) {
    exportToFactoryEdit.exportToFactoryDetails.push(action.detail); // Update WeightTotal and QuantityTotal.

    var weightTotal = 0;
    var quantityTotal = 0;
    state.exportToFactoryEdit.exportToFactoryDetails.forEach(function (item) {
      weightTotal += parseFloat(item.weight);
      quantityTotal += parseInt(item.quantity);
    });
    exportToFactoryEdit.weightTotal = weightTotal;
    exportToFactoryEdit.quantityTotal = quantityTotal;
  }

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });
  return stateNew;
};

var exportToFactoryEdit = function exportToFactoryEdit(state, action) {
  var exportToFactoryEdit = _objectSpread(_objectSpread({
    id: action.exportToFactory.id,
    version: action.exportToFactory.version,
    exportToFactoryCode: {
      value: action.exportToFactory.code,
      valid: true,
      touched: false,
      autoFocus: true
    },
    employeeId: {
      value: action.exportToFactory.receiverId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    exportToFactoryDate: {
      value: action.exportToFactory.exportToFactoryDate,
      valid: true,
      touched: false,
      autoFocus: false
    },
    exportToFactoryNote: {
      value: action.exportToFactory.note ? action.exportToFactory.note : "",
      valid: true,
      touched: false,
      autoFocus: false
    }
  }, EXPORT_TO_FACTORY_DETAIL_EDIT), {}, {
    valid: true
  });

  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit); // let stateNew = updateObject(state, { exportToFactoryEdit: exportToFactoryEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryEditSuccess = function exportToFactoryEditSuccess(state, action) {
  var exportToFactoryEdit = _objectSpread({}, state.exportToFactoryEdit);

  exportToFactoryEdit.exportToFactoryDetails = action.response.data; // Update WeightTotal and QuantityTotal.

  var weightTotal = 0;
  var quantityTotal = 0;
  exportToFactoryEdit.exportToFactoryDetails.forEach(function (item) {
    weightTotal += parseFloat(item.weight);
    quantityTotal += parseInt(item.quantity);
  });
  exportToFactoryEdit.weightTotal = weightTotal;
  exportToFactoryEdit.quantityTotal = quantityTotal;

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryDetailEdit = function exportToFactoryDetailEdit(state, action) {
  var exportToFactoryEdit = {
    productId: {
      value: action.exportToFactoryDetail.productId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    goldTypeId: {
      value: action.exportToFactoryDetail.goldTypeId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    exportToFactoryWeight: {
      value: action.exportToFactoryDetail.weight,
      valid: false,
      touched: false,
      autoFocus: false
    },
    goldUnitId: {
      value: action.exportToFactoryDetail.goldUnitId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    exportToFactoryQuantity: {
      value: action.exportToFactoryDetail.quantity,
      valid: false,
      touched: false,
      autoFocus: false
    },
    validDetail: false
  };
  exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), exportToFactoryEdit); // let stateNew = updateObject(state, { exportToFactoryEdit: exportToFactoryEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryUpdate = function exportToFactoryUpdate(state, action) {
  // let stateNew = state;
  action.exportToFactoryEditValid = state.exportToFactoryEdit.exportToFactoryCode.valid && state.exportToFactoryEdit.employeeId.valid && state.exportToFactoryEdit.productId.valid && state.exportToFactoryEdit.goldTypeId.valid && state.exportToFactoryEdit.goldUnitId.valid && state.exportToFactoryEdit.exportToFactoryWeight.valid && state.exportToFactoryEdit.exportToFactoryQuantity.valid && state.exportToFactoryEdit.exportToFactoryDate.valid && state.exportToFactoryEdit.exportToFactoryNote.valid;

  if (!action.exportToFactoryEditValid) {
    state.exportToFactoryEdit.exportToFactoryCode.touched = true;
    state.exportToFactoryEdit.employeeId.touched = true;
    state.exportToFactoryEdit.productId.touched = true;
    state.exportToFactoryEdit.goldTypeId.touched = true;
    state.exportToFactoryEdit.goldUnitId.touched = true;
    state.exportToFactoryEdit.exportToFactoryWeight.touched = true;
    state.exportToFactoryEdit.exportToFactoryQuantity.touched = true;
    state.exportToFactoryEdit.exportToFactoryDate.touched = true;
    state.exportToFactoryEdit.exportToFactoryNote.touched = true;
  }

  var exportToFactoryEdit = _objectSpread(_objectSpread({}, state.exportToFactoryEdit), {}, {
    valid: action.exportToFactoryEditValid,
    waiting: action.exportToFactoryEditValid
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryUpdateSuccess = function exportToFactoryUpdateSuccess(state, action) {
  var exportToFactoryEdit = _objectSpread(_objectSpread({}, EXPORT_TO_FACTORY_EDIT), EXPORT_TO_FACTORY_DETAIL_EDIT);

  exportToFactoryEdit.exportToFactoryDetails = [];

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryEdit: exportToFactoryEdit
  });

  return stateNew;
};

var exportToFactoryList = function exportToFactoryList(state, action) {
  var exportToFactoryList = _objectSpread(_objectSpread({}, state.exportToFactoryList), {}, {
    waiting: true
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryList: exportToFactoryList
  });

  return stateNew;
};

var exportToFactoryListSuccess = function exportToFactoryListSuccess(state, action) {
  /* let exportToFactorys = [];
  let data = action.response.data;
  for (let key in data) {
    exportToFactorys.push({
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
  var exportToFactoryList = _objectSpread(_objectSpread({}, state.exportToFactoryList), {}, {
    exportToFactorys: action.response.data,
    waiting: false
  }); // let stateNew = updateObject(state, { error: null,  exportToFactoryList: exportToFactoryList });


  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    exportToFactoryList: exportToFactoryList
  });

  return stateNew;
};

var exportToFactoryError = function exportToFactoryError(state, action) {
  // exportToFactoryList = { ...state.exportToFactoryList, ...exportToFactoryList };
  // let stateNew = updateObject(state, { error: action.error, exportToFactoryList: exportToFactoryList });
  if (action.caller === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_LIST"]) {
    state.exportToFactoryList.waiting = false;
  } else {
    state.exportToFactoryEdit.waiting = false;
  }

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: action.error
  });

  return stateNew;
};

var exportToFactoryErrorHandled = function exportToFactoryErrorHandled(state, action) {
  // exportToFactoryList = { ...state.exportToFactoryList, ...exportToFactoryList };
  // let stateNew = updateObject(state, { error: action.error, exportToFactoryList: exportToFactoryList });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null
  });

  return stateNew;
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* console.log(
    new Date().toLocaleString() + " ............ ExportToFactory initialize ....."
  ); */
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_CODE_FOCUS"]:
      return exportToFactoryCodeFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_CODE_CHANGED"]:
      return exportToFactoryCodeChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_EMPLOYEE_ID_FOCUS"]:
      return exportToFactoryEmployeeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_EMPLOYEE_ID_CHANGED"]:
      return exportToFactoryEmployeeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_PRODUCT_ID_FOCUS"]:
      return exportToFactoryProductIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_PRODUCT_ID_CHANGED"]:
      return exportToFactoryProductIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_GOLD_TYPE_ID_FOCUS"]:
      return exportToFactoryGoldTypeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_GOLD_TYPE_ID_CHANGED"]:
      return exportToFactoryGoldTypeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_GOLD_UNIT_ID_FOCUS"]:
      return exportToFactoryGoldUnitIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_GOLD_UNIT_ID_CHANGED"]:
      return exportToFactoryGoldUnitIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_WEIGHT_FOCUS"]:
      return exportToFactoryWeightFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_WEIGHT_CHANGED"]:
      return exportToFactoryWeightChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_QUANTITY_FOCUS"]:
      return exportToFactoryQuantityFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_QUANTITY_CHANGED"]:
      return exportToFactoryQuantityChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_DATE_FOCUS"]:
      return exportToFactoryDateFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_DATE_CHANGED"]:
      return exportToFactoryDateChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_NOTE_FOCUS"]:
      return exportToFactoryNoteFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_NOTE_CHANGED"]:
      return exportToFactoryNoteChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_CREATE"]:
      return exportToFactoryCreate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_ADD"]:
      return exportToFactoryAdd(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_ADD_SUCCESS"]:
      return exportToFactoryAddSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_ADD_DETAIL"]:
      return exportToFactoryAddDetail(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_EDIT"]:
      return exportToFactoryEdit(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_EDIT_SUCCESS"]:
      return exportToFactoryEditSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_DETAIL_EDIT"]:
      return exportToFactoryDetailEdit(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_UPDATE"]:
      return exportToFactoryUpdate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_UPDATE_SUCCESS"]:
      return exportToFactoryUpdateSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_LIST"]:
      return exportToFactoryList(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_LIST_SUCCESS"]:
      return exportToFactoryListSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_ERROR"]:
      return exportToFactoryError(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_ERROR_HANDLED"]:
      return exportToFactoryErrorHandled(state, action);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2V4cG9ydFRvRmFjdG9yeVJlZHVjZXIuanMiXSwibmFtZXMiOlsiRVhQT1JUX1RPX0ZBQ1RPUllfRURJVCIsImlkIiwidmVyc2lvbiIsImV4cG9ydFRvRmFjdG9yeUNvZGUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImVtcGxveWVlSWQiLCJleHBvcnRUb0ZhY3RvcnlEYXRlIiwiRGF0ZSIsImV4cG9ydFRvRmFjdG9yeU5vdGUiLCJ3ZWlnaHRUb3RhbCIsInF1YW50aXR5VG90YWwiLCJleHBvcnRUb0ZhY3RvcnlEZXRhaWxzIiwid2FpdGluZyIsIkVYUE9SVF9UT19GQUNUT1JZX0RFVEFJTF9FRElUIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsImV4cG9ydFRvRmFjdG9yeVdlaWdodCIsImdvbGRVbml0SWQiLCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eSIsInZhbGlkRGV0YWlsIiwiRVhQT1JUX1RPX0ZBQ1RPUllfTElTVCIsImV4cG9ydFRvRmFjdG9yeXMiLCJpbml0aWFsU3RhdGUiLCJleHBvcnRUb0ZhY3RvcnlFZGl0IiwiZXhwb3J0VG9GYWN0b3J5TGlzdCIsImVycm9yIiwiZXhwb3J0VG9GYWN0b3J5Q29kZUZvY3VzIiwic3RhdGUiLCJhY3Rpb24iLCJzdGF0ZU5ldyIsImV4cG9ydFRvRmFjdG9yeUNvZGVDaGFuZ2VkIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRpb24iLCJleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkRm9jdXMiLCJleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZCIsImV4cG9ydFRvRmFjdG9yeVByb2R1Y3RJZEZvY3VzIiwiZXhwb3J0VG9GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRGb2N1cyIsImV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkIiwiZXhwb3J0VG9GYWN0b3J5R29sZFVuaXRJZEZvY3VzIiwiZXhwb3J0VG9GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRGb2N1cyIsImV4cG9ydFRvRmFjdG9yeVdlaWdodENoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eUZvY3VzIiwiZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlDaGFuZ2VkIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZUZvY3VzIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZUNoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlOb3RlRm9jdXMiLCJleHBvcnRUb0ZhY3RvcnlOb3RlQ2hhbmdlZCIsImV4cG9ydFRvRmFjdG9yeUNyZWF0ZSIsImV4cG9ydFRvRmFjdG9yeUFkZCIsImV4cG9ydFRvRmFjdG9yeUVkaXRWYWxpZCIsImV4cG9ydFRvRmFjdG9yeUFkZFN1Y2Nlc3MiLCJleHBvcnRUb0ZhY3RvcnlBZGREZXRhaWwiLCJwdXNoIiwiZGV0YWlsIiwiZm9yRWFjaCIsIml0ZW0iLCJwYXJzZUZsb2F0Iiwid2VpZ2h0IiwicGFyc2VJbnQiLCJxdWFudGl0eSIsImV4cG9ydFRvRmFjdG9yeSIsImNvZGUiLCJyZWNlaXZlcklkIiwibm90ZSIsImV4cG9ydFRvRmFjdG9yeUVkaXRTdWNjZXNzIiwicmVzcG9uc2UiLCJkYXRhIiwiZXhwb3J0VG9GYWN0b3J5RGV0YWlsRWRpdCIsImV4cG9ydFRvRmFjdG9yeURldGFpbCIsImV4cG9ydFRvRmFjdG9yeVVwZGF0ZSIsImV4cG9ydFRvRmFjdG9yeVVwZGF0ZVN1Y2Nlc3MiLCJleHBvcnRUb0ZhY3RvcnlMaXN0U3VjY2VzcyIsImV4cG9ydFRvRmFjdG9yeUVycm9yIiwiY2FsbGVyIiwiYWN0aW9uVHlwZXMiLCJleHBvcnRUb0ZhY3RvcnlFcnJvckhhbmRsZWQiLCJyZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsc0JBQXNCLEdBQUc7QUFDN0JDLElBQUUsRUFBRSxJQUR5QjtBQUU3QkMsU0FBTyxFQUFFLElBRm9CO0FBRzdCQyxxQkFBbUIsRUFBRTtBQUNuQkMsU0FBSyxFQUFFLEVBRFk7QUFFbkJDLFNBQUssRUFBRSxLQUZZO0FBR25CQyxXQUFPLEVBQUUsS0FIVTtBQUluQkMsYUFBUyxFQUFFO0FBSlEsR0FIUTtBQVM3QkMsWUFBVSxFQUFFO0FBQ1ZKLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBVGlCO0FBZTdCRSxxQkFBbUIsRUFBRTtBQUNuQkwsU0FBSyxFQUFFLElBQUlNLElBQUosRUFEWTtBQUVuQkwsU0FBSyxFQUFFLElBRlk7QUFHbkJDLFdBQU8sRUFBRSxLQUhVO0FBSW5CQyxhQUFTLEVBQUU7QUFKUSxHQWZRO0FBcUI3QkkscUJBQW1CLEVBQUU7QUFDbkJQLFNBQUssRUFBRSxFQURZO0FBRW5CQyxTQUFLLEVBQUUsSUFGWTtBQUduQkMsV0FBTyxFQUFFLEtBSFU7QUFJbkJDLGFBQVMsRUFBRTtBQUpRLEdBckJRO0FBMkI3QkssYUFBVyxFQUFFLENBM0JnQjtBQTRCN0JDLGVBQWEsRUFBRSxDQTVCYztBQTZCN0JDLHdCQUFzQixFQUFFLEVBN0JLO0FBOEI3QlQsT0FBSyxFQUFFLEtBOUJzQjtBQStCN0JVLFNBQU8sRUFBRTtBQS9Cb0IsQ0FBL0I7QUFrQ0EsSUFBTUMsNkJBQTZCLEdBQUc7QUFDcENDLFdBQVMsRUFBRTtBQUNUYixTQUFLLEVBQUUsSUFERTtBQUVUQyxTQUFLLEVBQUUsS0FGRTtBQUdUQyxXQUFPLEVBQUUsS0FIQTtBQUlUQyxhQUFTLEVBQUU7QUFKRixHQUR5QjtBQU9wQ1csWUFBVSxFQUFFO0FBQ1ZkLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBUHdCO0FBYXBDWSx1QkFBcUIsRUFBRTtBQUNyQmYsU0FBSyxFQUFFLElBRGM7QUFFckJDLFNBQUssRUFBRSxLQUZjO0FBR3JCQyxXQUFPLEVBQUUsS0FIWTtBQUlyQkMsYUFBUyxFQUFFO0FBSlUsR0FiYTtBQW1CcENhLFlBQVUsRUFBRTtBQUNWaEIsU0FBSyxFQUFFLEVBREc7QUFFVkMsU0FBSyxFQUFFLEtBRkc7QUFHVkMsV0FBTyxFQUFFLEtBSEM7QUFJVkMsYUFBUyxFQUFFO0FBSkQsR0FuQndCO0FBeUJwQ2MseUJBQXVCLEVBQUU7QUFDdkJqQixTQUFLLEVBQUUsSUFEZ0I7QUFFdkJDLFNBQUssRUFBRSxLQUZnQjtBQUd2QkMsV0FBTyxFQUFFLEtBSGM7QUFJdkJDLGFBQVMsRUFBRTtBQUpZLEdBekJXO0FBK0JwQ2UsYUFBVyxFQUFFO0FBL0J1QixDQUF0QztBQWtDQSxJQUFNQyxzQkFBc0IsR0FBRztBQUM3QkMsa0JBQWdCLEVBQUUsRUFEVztBQUU3QlQsU0FBTyxFQUFFO0FBRm9CLENBQS9CO0FBS0EsSUFBTVUsWUFBWSxHQUFHO0FBQ25CQyxxQkFBbUIsa0NBQ2QxQixzQkFEYyxHQUVkZ0IsNkJBRmMsQ0FEQTtBQUtuQlcscUJBQW1CLEVBQUVKLHNCQUxGO0FBTW5CSyxPQUFLLEVBQUU7QUFOWSxDQUFyQjs7QUFTQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNsRCxNQUFJNUIsbUJBQW1CLEdBQUc7QUFDeEJHLFdBQU8sRUFBRSxJQURlO0FBRXhCQyxhQUFTLEVBQUU7QUFGYSxHQUExQjtBQUlBLE1BQUltQixtQkFBbUIsR0FBRztBQUN4QnZCLHVCQUFtQixrQ0FDZDJCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJ2QixtQkFEWixHQUVkQSxtQkFGYztBQURLLEdBQTFCO0FBTUF1QixxQkFBbUIsbUNBQ2RJLEtBQUssQ0FBQ0osbUJBRFEsR0FFZEEsbUJBRmMsQ0FBbkI7O0FBSUEsTUFBSU0sUUFBUSxtQ0FDUEYsS0FETztBQUVWRixTQUFLLEVBQUUsSUFGRztBQUdWRix1QkFBbUIsRUFBRUE7QUFIWCxJQUFaOztBQUtBLFNBQU9NLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsSUFBTUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFDSCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDcEQsTUFBSUwsbUJBQW1CLEdBQUc7QUFDeEJ2Qix1QkFBbUIsRUFBRTtBQUNuQkMsV0FBSyxFQUFFMkIsTUFBTSxDQUFDNUIsbUJBREs7QUFFbkJFLFdBQUssRUFBRTZCLHFFQUFhLENBQUNILE1BQU0sQ0FBQzVCLG1CQUFSLEVBQTZCNEIsTUFBTSxDQUFDSSxVQUFwQyxDQUZEO0FBR25CN0IsYUFBTyxFQUFFO0FBSFU7QUFERyxHQUExQjtBQU9Bb0IscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBLElBQU1JLDhCQUE4QixHQUFHLFNBQWpDQSw4QkFBaUMsQ0FBQ04sS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hELE1BQUl2QixVQUFVLEdBQUc7QUFDZkYsV0FBTyxFQUFFLElBRE07QUFFZkMsYUFBUyxFQUFFO0FBRkksR0FBakI7QUFJQSxNQUFJbUIsbUJBQW1CLEdBQUc7QUFDeEJsQixjQUFVLGtDQUNMc0IsS0FBSyxDQUFDSixtQkFBTixDQUEwQmxCLFVBRHJCLEdBRUxBLFVBRks7QUFEYyxHQUExQjtBQU1Ba0IscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBLElBQU1LLGdDQUFnQyxHQUFHLFNBQW5DQSxnQ0FBbUMsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzFELE1BQUlMLG1CQUFtQixHQUFHO0FBQ3hCbEIsY0FBVSxFQUFFO0FBQ1ZKLFdBQUssRUFBRTJCLE1BQU0sQ0FBQ3ZCLFVBREo7QUFFVkgsV0FBSyxFQUFFLENBQUMsQ0FBQzBCLE1BQU0sQ0FBQ3ZCLFVBRk47QUFHVkYsYUFBTyxFQUFFO0FBSEM7QUFEWSxHQUExQjtBQU9Bb0IscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBLElBQU1NLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsQ0FBQ1IsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3ZELE1BQUlkLFNBQVMsR0FBRztBQUNkWCxXQUFPLEVBQUUsSUFESztBQUVkQyxhQUFTLEVBQUU7QUFGRyxHQUFoQjtBQUlBLE1BQUltQixtQkFBbUIsR0FBRztBQUN4QlQsYUFBUyxrQ0FDSmEsS0FBSyxDQUFDSixtQkFBTixDQUEwQlQsU0FEdEIsR0FFSkEsU0FGSTtBQURlLEdBQTFCO0FBTUFTLHFCQUFtQixtQ0FDZEksS0FBSyxDQUFDSixtQkFEUSxHQUVkQSxtQkFGYyxDQUFuQjs7QUFJQSxNQUFJTSxRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBckJEOztBQXVCQSxJQUFNTywrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQWtDLENBQUNULEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6RCxNQUFJTCxtQkFBbUIsR0FBRztBQUN4QlQsYUFBUyxFQUFFO0FBQ1RiLFdBQUssRUFBRTJCLE1BQU0sQ0FBQ2QsU0FETDtBQUVUWixXQUFLLEVBQUUsQ0FBQyxDQUFDMEIsTUFBTSxDQUFDZCxTQUZQO0FBR1RYLGFBQU8sRUFBRTtBQUhBO0FBRGEsR0FBMUI7QUFPQW9CLHFCQUFtQixtQ0FDZEksS0FBSyxDQUFDSixtQkFEUSxHQUVkQSxtQkFGYyxDQUFuQjs7QUFJQSxNQUFJTSxRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBbEJEOztBQW9CQSxJQUFNUSw4QkFBOEIsR0FBRyxTQUFqQ0EsOEJBQWlDLENBQUNWLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4RCxNQUFJYixVQUFVLEdBQUc7QUFDZlosV0FBTyxFQUFFLElBRE07QUFFZkMsYUFBUyxFQUFFO0FBRkksR0FBakI7QUFJQSxNQUFJbUIsbUJBQW1CLEdBQUc7QUFDeEJSLGNBQVUsa0NBQ0xZLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJSLFVBRHJCLEdBRUxBLFVBRks7QUFEYyxHQUExQjtBQU1BUSxxQkFBbUIsbUNBQ2RJLEtBQUssQ0FBQ0osbUJBRFEsR0FFZEEsbUJBRmMsQ0FBbkI7O0FBSUEsTUFBSU0sUUFBUSxtQ0FDUEYsS0FETztBQUVWRixTQUFLLEVBQUUsSUFGRztBQUdWRix1QkFBbUIsRUFBRUE7QUFIWCxJQUFaOztBQUtBLFNBQU9NLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsSUFBTVMsZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFtQyxDQUFDWCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDMUQsTUFBSUwsbUJBQW1CLEdBQUc7QUFDeEJSLGNBQVUsRUFBRTtBQUNWZCxXQUFLLEVBQUUyQixNQUFNLENBQUNiLFVBREo7QUFFVmIsV0FBSyxFQUFFLENBQUMsQ0FBQzBCLE1BQU0sQ0FBQ2IsVUFGTjtBQUdWWixhQUFPLEVBQUU7QUFIQztBQURZLEdBQTFCO0FBT0FvQixxQkFBbUIsbUNBQ2RJLEtBQUssQ0FBQ0osbUJBRFEsR0FFZEEsbUJBRmMsQ0FBbkI7O0FBSUEsTUFBSU0sUUFBUSxtQ0FDUEYsS0FETztBQUVWRixTQUFLLEVBQUUsSUFGRztBQUdWRix1QkFBbUIsRUFBRUE7QUFIWCxJQUFaOztBQUtBLFNBQU9NLFFBQVA7QUFDRCxDQWxCRDs7QUFvQkEsSUFBTVUsOEJBQThCLEdBQUcsU0FBakNBLDhCQUFpQyxDQUFDWixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDeEQsTUFBSVgsVUFBVSxHQUFHO0FBQ2ZkLFdBQU8sRUFBRSxJQURNO0FBRWZDLGFBQVMsRUFBRTtBQUZJLEdBQWpCO0FBSUEsTUFBSW1CLG1CQUFtQixHQUFHO0FBQ3hCTixjQUFVLGtDQUNMVSxLQUFLLENBQUNKLG1CQUFOLENBQTBCTixVQURyQixHQUVMQSxVQUZLO0FBRGMsR0FBMUI7QUFNQU0scUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBLElBQU1XLGdDQUFnQyxHQUFHLFNBQW5DQSxnQ0FBbUMsQ0FBQ2IsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzFELE1BQUlMLG1CQUFtQixHQUFHO0FBQ3hCTixjQUFVLEVBQUU7QUFDVmhCLFdBQUssRUFBRTJCLE1BQU0sQ0FBQ1gsVUFESjtBQUVWZixXQUFLLEVBQUUsQ0FBQyxDQUFDMEIsTUFBTSxDQUFDWCxVQUZOO0FBR1ZkLGFBQU8sRUFBRTtBQUhDO0FBRFksR0FBMUI7QUFPQW9CLHFCQUFtQixtQ0FDZEksS0FBSyxDQUFDSixtQkFEUSxHQUVkQSxtQkFGYyxDQUFuQjs7QUFJQSxNQUFJTSxRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBbEJEOztBQW9CQSxJQUFNWSwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNkLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNwRCxNQUFJWixxQkFBcUIsR0FBRztBQUMxQmIsV0FBTyxFQUFFLElBRGlCO0FBRTFCQyxhQUFTLEVBQUU7QUFGZSxHQUE1QjtBQUlBLE1BQUltQixtQkFBbUIsR0FBRztBQUN4QlAseUJBQXFCLGtDQUNoQlcsS0FBSyxDQUFDSixtQkFBTixDQUEwQlAscUJBRFYsR0FFaEJBLHFCQUZnQjtBQURHLEdBQTFCO0FBTUFPLHFCQUFtQixtQ0FDZEksS0FBSyxDQUFDSixtQkFEUSxHQUVkQSxtQkFGYyxDQUFuQjs7QUFJQSxNQUFJTSxRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBckJEOztBQXVCQSxJQUFNYSw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNmLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN0RCxNQUFJTCxtQkFBbUIsR0FBRztBQUN4QlAseUJBQXFCLEVBQUU7QUFDckJmLFdBQUssRUFBRTJCLE1BQU0sQ0FBQ1oscUJBRE87QUFFckJkLFdBQUssRUFBRTZCLHFFQUFhLENBQUNILE1BQU0sQ0FBQ1oscUJBQVIsRUFBK0JZLE1BQU0sQ0FBQ0ksVUFBdEMsQ0FGQztBQUdyQjdCLGFBQU8sRUFBRTtBQUhZO0FBREMsR0FBMUI7QUFPQW9CLHFCQUFtQixtQ0FDZEksS0FBSyxDQUFDSixtQkFEUSxHQUVkQSxtQkFGYyxDQUFuQjs7QUFJQSxNQUFJTSxRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBbEJEOztBQW9CQSxJQUFNYyw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNoQixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDdEQsTUFBSVYsdUJBQXVCLEdBQUc7QUFDNUJmLFdBQU8sRUFBRSxJQURtQjtBQUU1QkMsYUFBUyxFQUFFO0FBRmlCLEdBQTlCO0FBSUEsTUFBSW1CLG1CQUFtQixHQUFHO0FBQ3hCTCwyQkFBdUIsa0NBQ2xCUyxLQUFLLENBQUNKLG1CQUFOLENBQTBCTCx1QkFEUixHQUVsQkEsdUJBRmtCO0FBREMsR0FBMUI7QUFNQUsscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBLElBQU1lLDhCQUE4QixHQUFHLFNBQWpDQSw4QkFBaUMsQ0FBQ2pCLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4RCxNQUFJTCxtQkFBbUIsR0FBRztBQUN4QkwsMkJBQXVCLEVBQUU7QUFDdkJqQixXQUFLLEVBQUUyQixNQUFNLENBQUNWLHVCQURTO0FBRXZCaEIsV0FBSyxFQUFFNkIscUVBQWEsQ0FBQ0gsTUFBTSxDQUFDVix1QkFBUixFQUFpQ1UsTUFBTSxDQUFDSSxVQUF4QyxDQUZHO0FBR3ZCN0IsYUFBTyxFQUFFO0FBSGM7QUFERCxHQUExQjtBQU9Bb0IscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBLElBQU1nQix3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNsQixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDbEQsTUFBSXRCLG1CQUFtQixHQUFHO0FBQ3hCSCxXQUFPLEVBQUUsSUFEZTtBQUV4QkMsYUFBUyxFQUFFO0FBRmEsR0FBMUI7QUFJQSxNQUFJbUIsbUJBQW1CLEdBQUc7QUFDeEJqQix1QkFBbUIsa0NBQ2RxQixLQUFLLENBQUNKLG1CQUFOLENBQTBCakIsbUJBRFosR0FFZEEsbUJBRmM7QUFESyxHQUExQjtBQU1BaUIscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBLElBQU1pQiwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNuQixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDcEQsTUFBSUwsbUJBQW1CLEdBQUc7QUFDeEJqQix1QkFBbUIsRUFBRTtBQUNuQkwsV0FBSyxFQUFFMkIsTUFBTSxDQUFDdEIsbUJBREs7QUFFbkJKLFdBQUssRUFBRTZCLHFFQUFhLENBQUNILE1BQU0sQ0FBQ3RCLG1CQUFSLEVBQTZCc0IsTUFBTSxDQUFDSSxVQUFwQyxDQUZEO0FBR25CN0IsYUFBTyxFQUFFO0FBSFU7QUFERyxHQUExQjtBQU9Bb0IscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBLElBQU1rQix3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNwQixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDbEQsTUFBSXBCLG1CQUFtQixHQUFHO0FBQ3hCTCxXQUFPLEVBQUUsSUFEZTtBQUV4QkMsYUFBUyxFQUFFO0FBRmEsR0FBMUI7QUFJQSxNQUFJbUIsbUJBQW1CLEdBQUc7QUFDeEJmLHVCQUFtQixrQ0FDZG1CLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJmLG1CQURaLEdBRWRBLG1CQUZjO0FBREssR0FBMUI7QUFNQWUscUJBQW1CLG1DQUNkSSxLQUFLLENBQUNKLG1CQURRLEdBRWRBLG1CQUZjLENBQW5COztBQUlBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBLElBQU1tQiwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNyQixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDcEQsTUFBSUwsbUJBQW1CLEdBQUc7QUFDeEJmLHVCQUFtQixFQUFFO0FBQ25CUCxXQUFLLEVBQUUyQixNQUFNLENBQUNwQixtQkFBUCxHQUE2Qm9CLE1BQU0sQ0FBQ3BCLG1CQUFwQyxHQUEwRCxFQUQ5QztBQUVuQk4sV0FBSyxFQUFFNkIscUVBQWEsQ0FBQ0gsTUFBTSxDQUFDcEIsbUJBQVIsRUFBNkJvQixNQUFNLENBQUNJLFVBQXBDLENBRkQ7QUFHbkI3QixhQUFPLEVBQUU7QUFIVTtBQURHLEdBQTFCO0FBT0FvQixxQkFBbUIsbUNBQ2RJLEtBQUssQ0FBQ0osbUJBRFEsR0FFZEEsbUJBRmMsQ0FBbkI7O0FBSUEsTUFBSU0sUUFBUSxtQ0FDUEYsS0FETztBQUVWRixTQUFLLEVBQUUsSUFGRztBQUdWRix1QkFBbUIsRUFBRUE7QUFIWCxJQUFaOztBQUtBLFNBQU9NLFFBQVA7QUFDRCxDQWxCRDs7QUFvQkEsSUFBTW9CLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ3RCLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQyxNQUFJQyxRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixrQ0FDZDFCLHNCQURjLEdBRWRnQiw2QkFGYztBQUhULElBQVo7O0FBUUEsU0FBT2dCLFFBQVA7QUFDRCxDQVZEOztBQVlBLElBQU1xQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUN2QixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDNUMsTUFBSUMsUUFBUSxHQUFHRixLQUFmO0FBQ0FDLFFBQU0sQ0FBQ3VCLHdCQUFQLEdBQ0V4QixLQUFLLENBQUNKLG1CQUFOLENBQTBCdkIsbUJBQTFCLENBQThDRSxLQUE5QyxJQUNBeUIsS0FBSyxDQUFDSixtQkFBTixDQUEwQmxCLFVBQTFCLENBQXFDSCxLQURyQyxJQUVBeUIsS0FBSyxDQUFDSixtQkFBTixDQUEwQmpCLG1CQUExQixDQUE4Q0osS0FGOUMsSUFHQXlCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJmLG1CQUExQixDQUE4Q04sS0FKaEQ7O0FBS0EsTUFBSSxDQUFDMEIsTUFBTSxDQUFDdUIsd0JBQVosRUFBc0M7QUFDcEN4QixTQUFLLENBQUNKLG1CQUFOLENBQTBCdkIsbUJBQTFCLENBQThDRyxPQUE5QyxHQUF3RCxJQUF4RDtBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQmxCLFVBQTFCLENBQXFDRixPQUFyQyxHQUErQyxJQUEvQztBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQmpCLG1CQUExQixDQUE4Q0gsT0FBOUMsR0FBd0QsSUFBeEQ7QUFDQXdCLFNBQUssQ0FBQ0osbUJBQU4sQ0FBMEJmLG1CQUExQixDQUE4Q0wsT0FBOUMsR0FBd0QsSUFBeEQ7QUFDRDs7QUFDRCxNQUFJb0IsbUJBQW1CLG1DQUNsQkksS0FBSyxDQUFDSixtQkFEWTtBQUVyQnJCLFNBQUssRUFBRTBCLE1BQU0sQ0FBQ3VCLHdCQUZPO0FBR3JCdkMsV0FBTyxFQUFFZ0IsTUFBTSxDQUFDdUI7QUFISyxJQUF2Qjs7QUFLQXRCLFVBQVEsbUNBQ0hGLEtBREc7QUFFTkYsU0FBSyxFQUFFLElBRkQ7QUFHTkYsdUJBQW1CLEVBQUVBO0FBSGYsSUFBUjtBQUtBLFNBQU9NLFFBQVA7QUFDRCxDQXhCRDs7QUEwQkEsSUFBTXVCLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ3pCLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuRCxNQUFJTCxtQkFBbUIsbUNBQ2xCMUIsc0JBRGtCLEdBRWxCZ0IsNkJBRmtCLENBQXZCOztBQUlBVSxxQkFBbUIsQ0FBQ1osc0JBQXBCLEdBQTZDLEVBQTdDOztBQUNBLE1BQUlrQixRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBWkQ7O0FBY0EsSUFBTXdCLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQzFCLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNsRCxNQUFJQyxRQUFRLEdBQUdGLEtBQWY7QUFDQUMsUUFBTSxDQUFDdUIsd0JBQVAsR0FDRXhCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJULFNBQTFCLENBQW9DWixLQUFwQyxJQUNBeUIsS0FBSyxDQUFDSixtQkFBTixDQUEwQlIsVUFBMUIsQ0FBcUNiLEtBRHJDLElBRUF5QixLQUFLLENBQUNKLG1CQUFOLENBQTBCTixVQUExQixDQUFxQ2YsS0FGckMsSUFHQXlCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJQLHFCQUExQixDQUFnRGQsS0FIaEQsSUFJQXlCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJMLHVCQUExQixDQUFrRGhCLEtBTHBEOztBQU1BLE1BQUksQ0FBQzBCLE1BQU0sQ0FBQ3VCLHdCQUFaLEVBQXNDO0FBQ3BDeEIsU0FBSyxDQUFDSixtQkFBTixDQUEwQlQsU0FBMUIsQ0FBb0NYLE9BQXBDLEdBQThDLElBQTlDO0FBQ0F3QixTQUFLLENBQUNKLG1CQUFOLENBQTBCUixVQUExQixDQUFxQ1osT0FBckMsR0FBK0MsSUFBL0M7QUFDQXdCLFNBQUssQ0FBQ0osbUJBQU4sQ0FBMEJOLFVBQTFCLENBQXFDZCxPQUFyQyxHQUErQyxJQUEvQztBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQlAscUJBQTFCLENBQWdEYixPQUFoRCxHQUEwRCxJQUExRDtBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQkwsdUJBQTFCLENBQWtEZixPQUFsRCxHQUE0RCxJQUE1RDtBQUNEOztBQUNELE1BQUlvQixtQkFBbUIsaURBQ2xCSSxLQUFLLENBQUNKLG1CQURZLEdBRWxCViw2QkFGa0I7QUFHckJNLGVBQVcsRUFBRVMsTUFBTSxDQUFDdUI7QUFIQyxJQUF2Qjs7QUFLQSxNQUFJdkIsTUFBTSxDQUFDdUIsd0JBQVgsRUFBcUM7QUFDbkM1Qix1QkFBbUIsQ0FBQ1osc0JBQXBCLENBQTJDMkMsSUFBM0MsQ0FBZ0QxQixNQUFNLENBQUMyQixNQUF2RCxFQURtQyxDQUVuQzs7QUFDQSxRQUFJOUMsV0FBVyxHQUFHLENBQWxCO0FBQ0EsUUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0FpQixTQUFLLENBQUNKLG1CQUFOLENBQTBCWixzQkFBMUIsQ0FBaUQ2QyxPQUFqRCxDQUF5RCxVQUFDQyxJQUFELEVBQVU7QUFDakVoRCxpQkFBVyxJQUFJaUQsVUFBVSxDQUFDRCxJQUFJLENBQUNFLE1BQU4sQ0FBekI7QUFDQWpELG1CQUFhLElBQUlrRCxRQUFRLENBQUNILElBQUksQ0FBQ0ksUUFBTixDQUF6QjtBQUNELEtBSEQ7QUFJQXRDLHVCQUFtQixDQUFDZCxXQUFwQixHQUFrQ0EsV0FBbEM7QUFDQWMsdUJBQW1CLENBQUNiLGFBQXBCLEdBQW9DQSxhQUFwQztBQUNEOztBQUNEbUIsVUFBUSxtQ0FDSEYsS0FERztBQUVORixTQUFLLEVBQUUsSUFGRDtBQUdORix1QkFBbUIsRUFBRUE7QUFIZixJQUFSO0FBS0EsU0FBT00sUUFBUDtBQUNELENBdENEOztBQXdDQSxJQUFNTixtQkFBbUIsR0FBRyw2QkFBQ0ksS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzdDLE1BQUlMLG1CQUFtQjtBQUNyQnpCLE1BQUUsRUFBRThCLE1BQU0sQ0FBQ2tDLGVBQVAsQ0FBdUJoRSxFQUROO0FBRXJCQyxXQUFPLEVBQUU2QixNQUFNLENBQUNrQyxlQUFQLENBQXVCL0QsT0FGWDtBQUdyQkMsdUJBQW1CLEVBQUU7QUFDbkJDLFdBQUssRUFBRTJCLE1BQU0sQ0FBQ2tDLGVBQVAsQ0FBdUJDLElBRFg7QUFFbkI3RCxXQUFLLEVBQUUsSUFGWTtBQUduQkMsYUFBTyxFQUFFLEtBSFU7QUFJbkJDLGVBQVMsRUFBRTtBQUpRLEtBSEE7QUFTckJDLGNBQVUsRUFBRTtBQUNWSixXQUFLLEVBQUUyQixNQUFNLENBQUNrQyxlQUFQLENBQXVCRSxVQURwQjtBQUVWOUQsV0FBSyxFQUFFLElBRkc7QUFHVkMsYUFBTyxFQUFFLEtBSEM7QUFJVkMsZUFBUyxFQUFFO0FBSkQsS0FUUztBQWVyQkUsdUJBQW1CLEVBQUU7QUFDbkJMLFdBQUssRUFBRTJCLE1BQU0sQ0FBQ2tDLGVBQVAsQ0FBdUJ4RCxtQkFEWDtBQUVuQkosV0FBSyxFQUFFLElBRlk7QUFHbkJDLGFBQU8sRUFBRSxLQUhVO0FBSW5CQyxlQUFTLEVBQUU7QUFKUSxLQWZBO0FBcUJyQkksdUJBQW1CLEVBQUU7QUFDbkJQLFdBQUssRUFBRTJCLE1BQU0sQ0FBQ2tDLGVBQVAsQ0FBdUJHLElBQXZCLEdBQThCckMsTUFBTSxDQUFDa0MsZUFBUCxDQUF1QkcsSUFBckQsR0FBNEQsRUFEaEQ7QUFFbkIvRCxXQUFLLEVBQUUsSUFGWTtBQUduQkMsYUFBTyxFQUFFLEtBSFU7QUFJbkJDLGVBQVMsRUFBRTtBQUpRO0FBckJBLEtBMkJsQlMsNkJBM0JrQjtBQTRCckJYLFNBQUssRUFBRTtBQTVCYyxJQUF2Qjs7QUE4QkFxQixxQkFBbUIsbUNBQ2RJLEtBQUssQ0FBQ0osbUJBRFEsR0FFZEEsbUJBRmMsQ0FBbkIsQ0EvQjZDLENBbUM3Qzs7QUFDQSxNQUFJTSxRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBMUNEOztBQTRDQSxJQUFNcUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFDdkMsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3BELE1BQUlMLG1CQUFtQixxQkFDbEJJLEtBQUssQ0FBQ0osbUJBRFksQ0FBdkI7O0FBR0FBLHFCQUFtQixDQUFDWixzQkFBcEIsR0FBNkNpQixNQUFNLENBQUN1QyxRQUFQLENBQWdCQyxJQUE3RCxDQUpvRCxDQUtwRDs7QUFDQSxNQUFJM0QsV0FBVyxHQUFHLENBQWxCO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0FhLHFCQUFtQixDQUFDWixzQkFBcEIsQ0FBMkM2QyxPQUEzQyxDQUFtRCxVQUFDQyxJQUFELEVBQVU7QUFDM0RoRCxlQUFXLElBQUlpRCxVQUFVLENBQUNELElBQUksQ0FBQ0UsTUFBTixDQUF6QjtBQUNBakQsaUJBQWEsSUFBSWtELFFBQVEsQ0FBQ0gsSUFBSSxDQUFDSSxRQUFOLENBQXpCO0FBQ0QsR0FIRDtBQUlBdEMscUJBQW1CLENBQUNkLFdBQXBCLEdBQWtDQSxXQUFsQztBQUNBYyxxQkFBbUIsQ0FBQ2IsYUFBcEIsR0FBb0NBLGFBQXBDOztBQUNBLE1BQUltQixRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBcEJEOztBQXNCQSxJQUFNd0MseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDMUMsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25ELE1BQUlMLG1CQUFtQixHQUFHO0FBQ3hCVCxhQUFTLEVBQUU7QUFDVGIsV0FBSyxFQUFFMkIsTUFBTSxDQUFDMEMscUJBQVAsQ0FBNkJ4RCxTQUQzQjtBQUVUWixXQUFLLEVBQUUsS0FGRTtBQUdUQyxhQUFPLEVBQUUsS0FIQTtBQUlUQyxlQUFTLEVBQUU7QUFKRixLQURhO0FBT3hCVyxjQUFVLEVBQUU7QUFDVmQsV0FBSyxFQUFFMkIsTUFBTSxDQUFDMEMscUJBQVAsQ0FBNkJ2RCxVQUQxQjtBQUVWYixXQUFLLEVBQUUsS0FGRztBQUdWQyxhQUFPLEVBQUUsS0FIQztBQUlWQyxlQUFTLEVBQUU7QUFKRCxLQVBZO0FBYXhCWSx5QkFBcUIsRUFBRTtBQUNyQmYsV0FBSyxFQUFFMkIsTUFBTSxDQUFDMEMscUJBQVAsQ0FBNkJYLE1BRGY7QUFFckJ6RCxXQUFLLEVBQUUsS0FGYztBQUdyQkMsYUFBTyxFQUFFLEtBSFk7QUFJckJDLGVBQVMsRUFBRTtBQUpVLEtBYkM7QUFtQnhCYSxjQUFVLEVBQUU7QUFDVmhCLFdBQUssRUFBRTJCLE1BQU0sQ0FBQzBDLHFCQUFQLENBQTZCckQsVUFEMUI7QUFFVmYsV0FBSyxFQUFFLEtBRkc7QUFHVkMsYUFBTyxFQUFFLEtBSEM7QUFJVkMsZUFBUyxFQUFFO0FBSkQsS0FuQlk7QUF5QnhCYywyQkFBdUIsRUFBRTtBQUN2QmpCLFdBQUssRUFBRTJCLE1BQU0sQ0FBQzBDLHFCQUFQLENBQTZCVCxRQURiO0FBRXZCM0QsV0FBSyxFQUFFLEtBRmdCO0FBR3ZCQyxhQUFPLEVBQUUsS0FIYztBQUl2QkMsZUFBUyxFQUFFO0FBSlksS0F6QkQ7QUErQnhCZSxlQUFXLEVBQUU7QUEvQlcsR0FBMUI7QUFpQ0FJLHFCQUFtQixtQ0FDZEksS0FBSyxDQUFDSixtQkFEUSxHQUVkQSxtQkFGYyxDQUFuQixDQWxDbUQsQ0FzQ25EOztBQUNBLE1BQUlNLFFBQVEsbUNBQ1BGLEtBRE87QUFFVkYsU0FBSyxFQUFFLElBRkc7QUFHVkYsdUJBQW1CLEVBQUVBO0FBSFgsSUFBWjs7QUFLQSxTQUFPTSxRQUFQO0FBQ0QsQ0E3Q0Q7O0FBK0NBLElBQU0wQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUM1QyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDL0M7QUFDQUEsUUFBTSxDQUFDdUIsd0JBQVAsR0FDRXhCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJ2QixtQkFBMUIsQ0FBOENFLEtBQTlDLElBQ0F5QixLQUFLLENBQUNKLG1CQUFOLENBQTBCbEIsVUFBMUIsQ0FBcUNILEtBRHJDLElBRUF5QixLQUFLLENBQUNKLG1CQUFOLENBQTBCVCxTQUExQixDQUFvQ1osS0FGcEMsSUFHQXlCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJSLFVBQTFCLENBQXFDYixLQUhyQyxJQUlBeUIsS0FBSyxDQUFDSixtQkFBTixDQUEwQk4sVUFBMUIsQ0FBcUNmLEtBSnJDLElBS0F5QixLQUFLLENBQUNKLG1CQUFOLENBQTBCUCxxQkFBMUIsQ0FBZ0RkLEtBTGhELElBTUF5QixLQUFLLENBQUNKLG1CQUFOLENBQTBCTCx1QkFBMUIsQ0FBa0RoQixLQU5sRCxJQU9BeUIsS0FBSyxDQUFDSixtQkFBTixDQUEwQmpCLG1CQUExQixDQUE4Q0osS0FQOUMsSUFRQXlCLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJmLG1CQUExQixDQUE4Q04sS0FUaEQ7O0FBVUEsTUFBSSxDQUFDMEIsTUFBTSxDQUFDdUIsd0JBQVosRUFBc0M7QUFDcEN4QixTQUFLLENBQUNKLG1CQUFOLENBQTBCdkIsbUJBQTFCLENBQThDRyxPQUE5QyxHQUF3RCxJQUF4RDtBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQmxCLFVBQTFCLENBQXFDRixPQUFyQyxHQUErQyxJQUEvQztBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQlQsU0FBMUIsQ0FBb0NYLE9BQXBDLEdBQThDLElBQTlDO0FBQ0F3QixTQUFLLENBQUNKLG1CQUFOLENBQTBCUixVQUExQixDQUFxQ1osT0FBckMsR0FBK0MsSUFBL0M7QUFDQXdCLFNBQUssQ0FBQ0osbUJBQU4sQ0FBMEJOLFVBQTFCLENBQXFDZCxPQUFyQyxHQUErQyxJQUEvQztBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQlAscUJBQTFCLENBQWdEYixPQUFoRCxHQUEwRCxJQUExRDtBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQkwsdUJBQTFCLENBQWtEZixPQUFsRCxHQUE0RCxJQUE1RDtBQUNBd0IsU0FBSyxDQUFDSixtQkFBTixDQUEwQmpCLG1CQUExQixDQUE4Q0gsT0FBOUMsR0FBd0QsSUFBeEQ7QUFDQXdCLFNBQUssQ0FBQ0osbUJBQU4sQ0FBMEJmLG1CQUExQixDQUE4Q0wsT0FBOUMsR0FBd0QsSUFBeEQ7QUFDRDs7QUFDRCxNQUFJb0IsbUJBQW1CLG1DQUNsQkksS0FBSyxDQUFDSixtQkFEWTtBQUVyQnJCLFNBQUssRUFBRTBCLE1BQU0sQ0FBQ3VCLHdCQUZPO0FBR3JCdkMsV0FBTyxFQUFFZ0IsTUFBTSxDQUFDdUI7QUFISyxJQUF2Qjs7QUFLQSxNQUFJdEIsUUFBUSxtQ0FDUEYsS0FETztBQUVWRixTQUFLLEVBQUUsSUFGRztBQUdWRix1QkFBbUIsRUFBRUE7QUFIWCxJQUFaOztBQUtBLFNBQU9NLFFBQVA7QUFDRCxDQWxDRDs7QUFvQ0EsSUFBTTJDLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsQ0FBQzdDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN0RCxNQUFJTCxtQkFBbUIsbUNBQ2xCMUIsc0JBRGtCLEdBRWxCZ0IsNkJBRmtCLENBQXZCOztBQUlBVSxxQkFBbUIsQ0FBQ1osc0JBQXBCLEdBQTZDLEVBQTdDOztBQUNBLE1BQUlrQixRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZGLHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT00sUUFBUDtBQUNELENBWkQ7O0FBY0EsSUFBTUwsbUJBQW1CLEdBQUcsNkJBQUNHLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM3QyxNQUFJSixtQkFBbUIsbUNBQVFHLEtBQUssQ0FBQ0gsbUJBQWQ7QUFBbUNaLFdBQU8sRUFBRTtBQUE1QyxJQUF2Qjs7QUFDQSxNQUFJaUIsUUFBUSxtQ0FDUEYsS0FETztBQUVWRixTQUFLLEVBQUUsSUFGRztBQUdWRCx1QkFBbUIsRUFBRUE7QUFIWCxJQUFaOztBQUtBLFNBQU9LLFFBQVA7QUFDRCxDQVJEOztBQVVBLElBQU00QywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUM5QyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxNQUFJSixtQkFBbUIsbUNBQ2xCRyxLQUFLLENBQUNILG1CQURZO0FBRXJCSCxvQkFBZ0IsRUFBRU8sTUFBTSxDQUFDdUMsUUFBUCxDQUFnQkMsSUFGYjtBQUdyQnhELFdBQU8sRUFBRTtBQUhZLElBQXZCLENBbkJvRCxDQXdCcEQ7OztBQUNBLE1BQUlpQixRQUFRLG1DQUNQRixLQURPO0FBRVZGLFNBQUssRUFBRSxJQUZHO0FBR1ZELHVCQUFtQixFQUFFQTtBQUhYLElBQVo7O0FBS0EsU0FBT0ssUUFBUDtBQUNELENBL0JEOztBQWlDQSxJQUFNNkMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDL0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzlDO0FBQ0E7QUFDQSxNQUFJQSxNQUFNLENBQUMrQyxNQUFQLEtBQWtCQyxtRUFBdEIsRUFBMEQ7QUFDeERqRCxTQUFLLENBQUNILG1CQUFOLENBQTBCWixPQUExQixHQUFvQyxLQUFwQztBQUNELEdBRkQsTUFFTztBQUNMZSxTQUFLLENBQUNKLG1CQUFOLENBQTBCWCxPQUExQixHQUFvQyxLQUFwQztBQUNEOztBQUNELE1BQUlpQixRQUFRLG1DQUFRRixLQUFSO0FBQWVGLFNBQUssRUFBRUcsTUFBTSxDQUFDSDtBQUE3QixJQUFaOztBQUNBLFNBQU9JLFFBQVA7QUFDRCxDQVZEOztBQVlBLElBQU1nRCwyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCLENBQUNsRCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDckQ7QUFDQTtBQUNBLE1BQUlDLFFBQVEsbUNBQVFGLEtBQVI7QUFBZUYsU0FBSyxFQUFFO0FBQXRCLElBQVo7O0FBQ0EsU0FBT0ksUUFBUDtBQUNELENBTEQ7O0FBT0EsSUFBTWlELE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNuRCxLQUFpQyx1RUFBekJMLFlBQXlCO0FBQUEsTUFBWE0sTUFBVzs7QUFDaEQ7OztBQUdBLFVBQVFBLE1BQU0sQ0FBQ21ELElBQWY7QUFDRSxTQUFLSCx5RUFBTDtBQUNFLGFBQU9sRCx3QkFBd0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLENBQS9COztBQUNGLFNBQUtnRCwyRUFBTDtBQUNFLGFBQU85QywwQkFBMEIsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLENBQWpDOztBQUNGLFNBQUtnRCxnRkFBTDtBQUNFLGFBQU8zQyw4QkFBOEIsQ0FBQ04sS0FBRCxFQUFRQyxNQUFSLENBQXJDOztBQUNGLFNBQUtnRCxrRkFBTDtBQUNFLGFBQU8xQyxnQ0FBZ0MsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLENBQXZDOztBQUNGLFNBQUtnRCwrRUFBTDtBQUNFLGFBQU96Qyw2QkFBNkIsQ0FBQ1IsS0FBRCxFQUFRQyxNQUFSLENBQXBDOztBQUNGLFNBQUtnRCxpRkFBTDtBQUNFLGFBQU94QywrQkFBK0IsQ0FBQ1QsS0FBRCxFQUFRQyxNQUFSLENBQXRDOztBQUNGLFNBQUtnRCxpRkFBTDtBQUNFLGFBQU92Qyw4QkFBOEIsQ0FBQ1YsS0FBRCxFQUFRQyxNQUFSLENBQXJDOztBQUNGLFNBQUtnRCxtRkFBTDtBQUNFLGFBQU90QyxnQ0FBZ0MsQ0FBQ1gsS0FBRCxFQUFRQyxNQUFSLENBQXZDOztBQUNGLFNBQUtnRCxpRkFBTDtBQUNFLGFBQU9yQyw4QkFBOEIsQ0FBQ1osS0FBRCxFQUFRQyxNQUFSLENBQXJDOztBQUNGLFNBQUtnRCxtRkFBTDtBQUNFLGFBQU9wQyxnQ0FBZ0MsQ0FBQ2IsS0FBRCxFQUFRQyxNQUFSLENBQXZDOztBQUNGLFNBQUtnRCwyRUFBTDtBQUNFLGFBQU9uQywwQkFBMEIsQ0FBQ2QsS0FBRCxFQUFRQyxNQUFSLENBQWpDOztBQUNGLFNBQUtnRCw2RUFBTDtBQUNFLGFBQU9sQyw0QkFBNEIsQ0FBQ2YsS0FBRCxFQUFRQyxNQUFSLENBQW5DOztBQUNGLFNBQUtnRCw2RUFBTDtBQUNFLGFBQU9qQyw0QkFBNEIsQ0FBQ2hCLEtBQUQsRUFBUUMsTUFBUixDQUFuQzs7QUFDRixTQUFLZ0QsK0VBQUw7QUFDRSxhQUFPaEMsOEJBQThCLENBQUNqQixLQUFELEVBQVFDLE1BQVIsQ0FBckM7O0FBQ0YsU0FBS2dELHlFQUFMO0FBQ0UsYUFBTy9CLHdCQUF3QixDQUFDbEIsS0FBRCxFQUFRQyxNQUFSLENBQS9COztBQUNGLFNBQUtnRCwyRUFBTDtBQUNFLGFBQU85QiwwQkFBMEIsQ0FBQ25CLEtBQUQsRUFBUUMsTUFBUixDQUFqQzs7QUFDRixTQUFLZ0QseUVBQUw7QUFDRSxhQUFPN0Isd0JBQXdCLENBQUNwQixLQUFELEVBQVFDLE1BQVIsQ0FBL0I7O0FBQ0YsU0FBS2dELDJFQUFMO0FBQ0UsYUFBTzVCLDBCQUEwQixDQUFDckIsS0FBRCxFQUFRQyxNQUFSLENBQWpDOztBQUVGLFNBQUtnRCxxRUFBTDtBQUNFLGFBQU8zQixxQkFBcUIsQ0FBQ3RCLEtBQUQsRUFBUUMsTUFBUixDQUE1Qjs7QUFDRixTQUFLZ0Qsa0VBQUw7QUFDRSxhQUFPMUIsa0JBQWtCLENBQUN2QixLQUFELEVBQVFDLE1BQVIsQ0FBekI7O0FBQ0YsU0FBS2dELDBFQUFMO0FBQ0UsYUFBT3hCLHlCQUF5QixDQUFDekIsS0FBRCxFQUFRQyxNQUFSLENBQWhDOztBQUVGLFNBQUtnRCx5RUFBTDtBQUNFLGFBQU92Qix3QkFBd0IsQ0FBQzFCLEtBQUQsRUFBUUMsTUFBUixDQUEvQjs7QUFFRixTQUFLZ0QsbUVBQUw7QUFDRSxhQUFPckQsbUJBQW1CLENBQUNJLEtBQUQsRUFBUUMsTUFBUixDQUExQjs7QUFDRixTQUFLZ0QsMkVBQUw7QUFDRSxhQUFPViwwQkFBMEIsQ0FBQ3ZDLEtBQUQsRUFBUUMsTUFBUixDQUFqQzs7QUFDRixTQUFLZ0QsMEVBQUw7QUFDRSxhQUFPUCx5QkFBeUIsQ0FBQzFDLEtBQUQsRUFBUUMsTUFBUixDQUFoQzs7QUFDRixTQUFLZ0QscUVBQUw7QUFDRSxhQUFPTCxxQkFBcUIsQ0FBQzVDLEtBQUQsRUFBUUMsTUFBUixDQUE1Qjs7QUFDRixTQUFLZ0QsNkVBQUw7QUFDRSxhQUFPSiw0QkFBNEIsQ0FBQzdDLEtBQUQsRUFBUUMsTUFBUixDQUFuQzs7QUFFRixTQUFLZ0QsbUVBQUw7QUFDRSxhQUFPcEQsbUJBQW1CLENBQUNHLEtBQUQsRUFBUUMsTUFBUixDQUExQjs7QUFDRixTQUFLZ0QsMkVBQUw7QUFDRSxhQUFPSCwwQkFBMEIsQ0FBQzlDLEtBQUQsRUFBUUMsTUFBUixDQUFqQzs7QUFFRixTQUFLZ0Qsb0VBQUw7QUFDRSxhQUFPRixvQkFBb0IsQ0FBQy9DLEtBQUQsRUFBUUMsTUFBUixDQUEzQjs7QUFDRixTQUFLZ0QsNEVBQUw7QUFDRSxhQUFPQywyQkFBMkIsQ0FBQ2xELEtBQUQsRUFBUUMsTUFBUixDQUFsQzs7QUFDRjtBQUNFLGFBQU9ELEtBQVA7QUFyRUo7QUF1RUQsQ0EzRUQ7O0FBNkVlbUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMDdjZmZhNDkwNTgwZTM1MGQ4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tWYWxpZGl0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbGl0eVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IEVYUE9SVF9UT19GQUNUT1JZX0VESVQgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgdmVyc2lvbjogbnVsbCxcclxuICBleHBvcnRUb0ZhY3RvcnlDb2RlOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1wbG95ZWVJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBleHBvcnRUb0ZhY3RvcnlEYXRlOiB7XHJcbiAgICB2YWx1ZTogbmV3IERhdGUoKSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZXhwb3J0VG9GYWN0b3J5Tm90ZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHdlaWdodFRvdGFsOiAwLFxyXG4gIHF1YW50aXR5VG90YWw6IDAsXHJcbiAgZXhwb3J0VG9GYWN0b3J5RGV0YWlsczogW10sXHJcbiAgdmFsaWQ6IGZhbHNlLFxyXG4gIHdhaXRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgRVhQT1JUX1RPX0ZBQ1RPUllfREVUQUlMX0VESVQgPSB7XHJcbiAgcHJvZHVjdElkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRUeXBlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZXhwb3J0VG9GYWN0b3J5V2VpZ2h0OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRVbml0SWQ6IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHk6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdmFsaWREZXRhaWw6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgRVhQT1JUX1RPX0ZBQ1RPUllfTElTVCA9IHtcclxuICBleHBvcnRUb0ZhY3RvcnlzOiBbXSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBleHBvcnRUb0ZhY3RvcnlFZGl0OiB7XHJcbiAgICAuLi5FWFBPUlRfVE9fRkFDVE9SWV9FRElULFxyXG4gICAgLi4uRVhQT1JUX1RPX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgfSxcclxuICBleHBvcnRUb0ZhY3RvcnlMaXN0OiBFWFBPUlRfVE9fRkFDVE9SWV9MSVNULFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5Q29kZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5Q29kZSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIGV4cG9ydFRvRmFjdG9yeUNvZGU6IHtcclxuICAgICAgLi4uc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlDb2RlLFxyXG4gICAgICAuLi5leHBvcnRUb0ZhY3RvcnlDb2RlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgLi4uZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5Q29kZUNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZXhwb3J0VG9GYWN0b3J5Q29kZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmV4cG9ydFRvRmFjdG9yeUNvZGUsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlDb2RlLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmVtcGxveWVlSWQsXHJcbiAgICAgIC4uLmVtcGxveWVlSWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBlbXBsb3llZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZW1wbG95ZWVJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLmVtcGxveWVlSWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlQcm9kdWN0SWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LnByb2R1Y3RJZCxcclxuICAgICAgLi4ucHJvZHVjdElkLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgLi4uZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5wcm9kdWN0SWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5wcm9kdWN0SWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlHb2xkVHlwZUlkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmdvbGRUeXBlSWQsXHJcbiAgICAgIC4uLmdvbGRUeXBlSWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlHb2xkVHlwZUlkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZ29sZFR5cGVJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLmdvbGRUeXBlSWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlHb2xkVW5pdElkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBnb2xkVW5pdElkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmdvbGRVbml0SWQsXHJcbiAgICAgIC4uLmdvbGRVbml0SWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlHb2xkVW5pdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZ29sZFVuaXRJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLmdvbGRVbml0SWQsXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlXZWlnaHRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeVdlaWdodCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIGV4cG9ydFRvRmFjdG9yeVdlaWdodDoge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeVdlaWdodCxcclxuICAgICAgLi4uZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgLi4uZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5V2VpZ2h0Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBleHBvcnRUb0ZhY3RvcnlXZWlnaHQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlXZWlnaHQsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlXZWlnaHQsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICAgIC4uLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5RWRpdDogZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGV4cG9ydFRvRmFjdG9yeVF1YW50aXR5Rm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlRdWFudGl0eSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIGV4cG9ydFRvRmFjdG9yeVF1YW50aXR5OiB7XHJcbiAgICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHksXHJcbiAgICAgIC4uLmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgLi4uZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIGV4cG9ydFRvRmFjdG9yeVF1YW50aXR5OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgLi4uZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5RGF0ZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RGF0ZSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIGV4cG9ydFRvRmFjdG9yeURhdGU6IHtcclxuICAgICAgLi4uc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlEYXRlLFxyXG4gICAgICAuLi5leHBvcnRUb0ZhY3RvcnlEYXRlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgLi4uZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5RGF0ZUNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZXhwb3J0VG9GYWN0b3J5RGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmV4cG9ydFRvRmFjdG9yeURhdGUsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlEYXRlLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlOb3RlRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlOb3RlID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZXhwb3J0VG9GYWN0b3J5Tm90ZToge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeU5vdGUsXHJcbiAgICAgIC4uLmV4cG9ydFRvRmFjdG9yeU5vdGUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlOb3RlQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBleHBvcnRUb0ZhY3RvcnlOb3RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5Tm90ZSA/IGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlOb3RlIDogXCJcIixcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLmV4cG9ydFRvRmFjdG9yeU5vdGUsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICAgIC4uLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5RWRpdDogZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGV4cG9ydFRvRmFjdG9yeUNyZWF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IHtcclxuICAgICAgLi4uRVhQT1JUX1RPX0ZBQ1RPUllfRURJVCxcclxuICAgICAgLi4uRVhQT1JUX1RPX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5QWRkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RWRpdFZhbGlkID1cclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5Q29kZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5lbXBsb3llZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeURhdGUudmFsaWQgJiZcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5Tm90ZS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5Q29kZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZW1wbG95ZWVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5RGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5Tm90ZS50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQsXHJcbiAgICB3YWl0aW5nOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5RWRpdDogZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGV4cG9ydFRvRmFjdG9yeUFkZFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uRVhQT1JUX1RPX0ZBQ1RPUllfRURJVCxcclxuICAgIC4uLkVYUE9SVF9UT19GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzID0gW107XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlBZGREZXRhaWwgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZ29sZFR5cGVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5nb2xkVW5pdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeVdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQucHJvZHVjdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5nb2xkVW5pdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5FWFBPUlRfVE9fRkFDVE9SWV9ERVRBSUxfRURJVCxcclxuICAgIHZhbGlkRGV0YWlsOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgaWYgKGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQpIHtcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5RGV0YWlscy5wdXNoKGFjdGlvbi5kZXRhaWwpO1xyXG4gICAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gICAgbGV0IHdlaWdodFRvdGFsID0gMDtcclxuICAgIGxldCBxdWFudGl0eVRvdGFsID0gMDtcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5RGV0YWlscy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHdlaWdodFRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS53ZWlnaHQpO1xyXG4gICAgICBxdWFudGl0eVRvdGFsICs9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgfSk7XHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0LndlaWdodFRvdGFsID0gd2VpZ2h0VG90YWw7XHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG4gIH1cclxuICBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpZDogYWN0aW9uLmV4cG9ydFRvRmFjdG9yeS5pZCxcclxuICAgIHZlcnNpb246IGFjdGlvbi5leHBvcnRUb0ZhY3RvcnkudmVyc2lvbixcclxuICAgIGV4cG9ydFRvRmFjdG9yeUNvZGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5leHBvcnRUb0ZhY3RvcnkuY29kZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmV4cG9ydFRvRmFjdG9yeS5yZWNlaXZlcklkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5RGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmV4cG9ydFRvRmFjdG9yeS5leHBvcnRUb0ZhY3RvcnlEYXRlLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5Tm90ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmV4cG9ydFRvRmFjdG9yeS5ub3RlID8gYWN0aW9uLmV4cG9ydFRvRmFjdG9yeS5ub3RlIDogXCJcIixcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC4uLkVYUE9SVF9UT19GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuICBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICAgIC4uLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXhwb3J0VG9GYWN0b3J5RWRpdDogZXhwb3J0VG9GYWN0b3J5RWRpdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5RWRpdDogZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGV4cG9ydFRvRmFjdG9yeUVkaXRTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBleHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeURldGFpbHMgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICAvLyBVcGRhdGUgV2VpZ2h0VG90YWwgYW5kIFF1YW50aXR5VG90YWwuXHJcbiAgbGV0IHdlaWdodFRvdGFsID0gMDtcclxuICBsZXQgcXVhbnRpdHlUb3RhbCA9IDA7XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHdlaWdodFRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS53ZWlnaHQpO1xyXG4gICAgcXVhbnRpdHlUb3RhbCArPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICB9KTtcclxuICBleHBvcnRUb0ZhY3RvcnlFZGl0LndlaWdodFRvdGFsID0gd2VpZ2h0VG90YWw7XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdC5xdWFudGl0eVRvdGFsID0gcXVhbnRpdHlUb3RhbDtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5RWRpdDogZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGV4cG9ydFRvRmFjdG9yeURldGFpbEVkaXQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgcHJvZHVjdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RGV0YWlsLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RGV0YWlsLmdvbGRUeXBlSWQsXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5V2VpZ2h0OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RGV0YWlsLndlaWdodCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RGV0YWlsLmdvbGRVbml0SWQsXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlEZXRhaWwucXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgdmFsaWREZXRhaWw6IGZhbHNlLFxyXG4gIH07XHJcbiAgZXhwb3J0VG9GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUVkaXQ6IGV4cG9ydFRvRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlVcGRhdGUgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlDb2RlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmVtcGxveWVlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQucHJvZHVjdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZ29sZFVuaXRJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlXZWlnaHQudmFsaWQgJiZcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHkudmFsaWQgJiZcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5RGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlOb3RlLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLmV4cG9ydFRvRmFjdG9yeUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5leHBvcnRUb0ZhY3RvcnlDb2RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC5wcm9kdWN0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmdvbGRUeXBlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeVdlaWdodC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmV4cG9ydFRvRmFjdG9yeUVkaXQuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeURhdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeU5vdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24uZXhwb3J0VG9GYWN0b3J5RWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLmV4cG9ydFRvRmFjdG9yeUVkaXRWYWxpZCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBleHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5VXBkYXRlU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5FWFBPUlRfVE9fRkFDVE9SWV9FRElULFxyXG4gICAgLi4uRVhQT1JUX1RPX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgfTtcclxuICBleHBvcnRUb0ZhY3RvcnlFZGl0LmV4cG9ydFRvRmFjdG9yeURldGFpbHMgPSBbXTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5RWRpdDogZXhwb3J0VG9GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGV4cG9ydFRvRmFjdG9yeUxpc3QgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlMaXN0ID0geyAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlMaXN0LCB3YWl0aW5nOiB0cnVlIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUxpc3Q6IGV4cG9ydFRvRmFjdG9yeUxpc3QsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlMaXN0U3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLyogbGV0IGV4cG9ydFRvRmFjdG9yeXMgPSBbXTtcclxuICBsZXQgZGF0YSA9IGFjdGlvbi5yZXNwb25zZS5kYXRhO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICBleHBvcnRUb0ZhY3RvcnlzLnB1c2goe1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgaWQ6IGtleSxcclxuICAgICAgbmFtZTogZGF0YVtrZXldLm5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGRhdGFba2V5XS5lbXBsb3llZUlkLFxyXG4gICAgICBwcm9kdWN0SWQ6IGRhdGFba2V5XS5wcm9kdWN0SWQsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IGRhdGFba2V5XS5nb2xkVHlwZUlkLFxyXG4gICAgICBnb2xkVW5pdElkOiBkYXRhW2tleV0uZ29sZFVuaXRJZCxcclxuICAgICAgd2VpZ2h0OiBkYXRhW2tleV0ud2VpZ2h0LFxyXG4gICAgICBxdWFudGl0eTogZGF0YVtrZXldLnF1YW50aXR5LFxyXG4gICAgICBpbnB1dERhdGU6IGRhdGFba2V5XS5pbnB1dERhdGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhW2tleV0uZGVzY3JpcHRpb24sXHJcbiAgICAgIGltYWdlOiBkYXRhW2tleV0uaW1hZ2UsXHJcbiAgICB9KTtcclxuICB9ICovXHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUxpc3QgPSB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRUb0ZhY3RvcnlMaXN0LFxyXG4gICAgZXhwb3J0VG9GYWN0b3J5czogYWN0aW9uLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB3YWl0aW5nOiBmYWxzZSxcclxuICB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIGV4cG9ydFRvRmFjdG9yeUxpc3Q6IGV4cG9ydFRvRmFjdG9yeUxpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGV4cG9ydFRvRmFjdG9yeUxpc3Q6IGV4cG9ydFRvRmFjdG9yeUxpc3QsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlFcnJvciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gZXhwb3J0VG9GYWN0b3J5TGlzdCA9IHsgLi4uc3RhdGUuZXhwb3J0VG9GYWN0b3J5TGlzdCwgLi4uZXhwb3J0VG9GYWN0b3J5TGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBleHBvcnRUb0ZhY3RvcnlMaXN0OiBleHBvcnRUb0ZhY3RvcnlMaXN0IH0pO1xyXG4gIGlmIChhY3Rpb24uY2FsbGVyID09PSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9MSVNUKSB7XHJcbiAgICBzdGF0ZS5leHBvcnRUb0ZhY3RvcnlMaXN0LndhaXRpbmcgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdGUuZXhwb3J0VG9GYWN0b3J5RWRpdC53YWl0aW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlFcnJvckhhbmRsZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGV4cG9ydFRvRmFjdG9yeUxpc3QgPSB7IC4uLnN0YXRlLmV4cG9ydFRvRmFjdG9yeUxpc3QsIC4uLmV4cG9ydFRvRmFjdG9yeUxpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgZXhwb3J0VG9GYWN0b3J5TGlzdDogZXhwb3J0VG9GYWN0b3J5TGlzdCB9KTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEV4cG9ydFRvRmFjdG9yeSBpbml0aWFsaXplIC4uLi4uXCJcclxuICApOyAqL1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfQ09ERV9GT0NVUzpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeUNvZGVGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfQ09ERV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5Q29kZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0VNUExPWUVFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5RW1wbG95ZWVJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9FTVBMT1lFRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5RW1wbG95ZWVJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX1BST0RVQ1RfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBleHBvcnRUb0ZhY3RvcnlQcm9kdWN0SWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfUFJPRFVDVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfR09MRF9UWVBFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5R29sZFR5cGVJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9HT0xEX1RZUEVfSURfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9HT0xEX1VOSVRfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBleHBvcnRUb0ZhY3RvcnlHb2xkVW5pdElkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0dPTERfVU5JVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX1dFSUdIVF9GT0NVUzpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeVdlaWdodEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9XRUlHSFRfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeVdlaWdodENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX1FVQU5USVRZX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfUVVBTlRJVFlfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeVF1YW50aXR5Q2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfREFURV9GT0NVUzpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeURhdGVGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfREFURV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5RGF0ZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX05PVEVfRk9DVVM6XHJcbiAgICAgIHJldHVybiBleHBvcnRUb0ZhY3RvcnlOb3RlRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX05PVEVfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeU5vdGVDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfQ1JFQVRFOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5Q3JlYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9BREQ6XHJcbiAgICAgIHJldHVybiBleHBvcnRUb0ZhY3RvcnlBZGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0FERF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5QWRkU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0FERF9ERVRBSUw6XHJcbiAgICAgIHJldHVybiBleHBvcnRUb0ZhY3RvcnlBZGREZXRhaWwoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9FRElUOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5RWRpdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfRURJVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5RWRpdFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0RFVEFJTF9FRElUOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5RGV0YWlsRWRpdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfVVBEQVRFOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5VXBkYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9VUERBVEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeVVwZGF0ZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9MSVNUOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5TGlzdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5TGlzdFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9FUlJPUjpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeUVycm9yKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9FUlJPUl9IQU5ETEVEOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5RXJyb3JIYW5kbGVkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=