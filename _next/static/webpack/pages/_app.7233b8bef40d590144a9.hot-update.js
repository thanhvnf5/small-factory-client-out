webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/reducers/importFromFactoryReducer.js":
/*!********************************************************!*\
  !*** ./src/store/reducers/importFromFactoryReducer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var IMPORT_FROM_FACTORY_EDIT = {
  id: null,
  version: null,
  importFromFactoryCode: {
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
  importFromFactoryDate: {
    value: new Date(),
    valid: true,
    touched: false,
    autoFocus: false
  },
  importFromFactoryNote: {
    value: "",
    valid: true,
    touched: false,
    autoFocus: false
  },
  weightTotal: 0,
  quantityTotal: 0,
  importFromFactoryDetails: [],
  valid: false,
  waiting: false
};
var IMPORT_FROM_FACTORY_DETAIL_EDIT = {
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
  importFromFactoryWeight: {
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
  importFromFactoryQuantity: {
    value: null,
    valid: false,
    touched: false,
    autoFocus: false
  },
  validDetail: false
};
var IMPORT_FROM_FACTORY_LIST = {
  importFromFactorys: [],
  waiting: false
};
var initialState = {
  importFromFactoryEdit: _objectSpread(_objectSpread({}, IMPORT_FROM_FACTORY_EDIT), IMPORT_FROM_FACTORY_DETAIL_EDIT),
  importFromFactoryList: IMPORT_FROM_FACTORY_LIST,
  error: null
};

var importFromFactoryCodeFocus = function importFromFactoryCodeFocus(state, action) {
  var importFromFactoryCode = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    importFromFactoryCode: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.importFromFactoryCode), importFromFactoryCode)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryCodeChanged = function importFromFactoryCodeChanged(state, action) {
  var importFromFactoryEdit = {
    importFromFactoryCode: {
      value: action.importFromFactoryCode,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.importFromFactoryCode, action.validation),
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryEmployeeIdFocus = function importFromFactoryEmployeeIdFocus(state, action) {
  var employeeId = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    employeeId: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.employeeId), employeeId)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryEmployeeIdChanged = function importFromFactoryEmployeeIdChanged(state, action) {
  var importFromFactoryEdit = {
    employeeId: {
      value: action.employeeId,
      valid: !!action.employeeId,
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryProductIdFocus = function importFromFactoryProductIdFocus(state, action) {
  var productId = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    productId: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.productId), productId)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryProductIdChanged = function importFromFactoryProductIdChanged(state, action) {
  var importFromFactoryEdit = {
    productId: {
      value: action.productId,
      valid: !!action.productId,
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryGoldTypeIdFocus = function importFromFactoryGoldTypeIdFocus(state, action) {
  var goldTypeId = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    goldTypeId: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.goldTypeId), goldTypeId)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryGoldTypeIdChanged = function importFromFactoryGoldTypeIdChanged(state, action) {
  var importFromFactoryEdit = {
    goldTypeId: {
      value: action.goldTypeId,
      valid: !!action.goldTypeId,
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryGoldUnitIdFocus = function importFromFactoryGoldUnitIdFocus(state, action) {
  var goldUnitId = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    goldUnitId: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.goldUnitId), goldUnitId)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryGoldUnitIdChanged = function importFromFactoryGoldUnitIdChanged(state, action) {
  var importFromFactoryEdit = {
    goldUnitId: {
      value: action.goldUnitId,
      valid: !!action.goldUnitId,
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryWeightFocus = function importFromFactoryWeightFocus(state, action) {
  var importFromFactoryWeight = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    importFromFactoryWeight: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.importFromFactoryWeight), importFromFactoryWeight)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryWeightChanged = function importFromFactoryWeightChanged(state, action) {
  var importFromFactoryEdit = {
    importFromFactoryWeight: {
      value: action.importFromFactoryWeight,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.importFromFactoryWeight, action.validation),
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryQuantityFocus = function importFromFactoryQuantityFocus(state, action) {
  var importFromFactoryQuantity = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    importFromFactoryQuantity: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.importFromFactoryQuantity), importFromFactoryQuantity)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryQuantityChanged = function importFromFactoryQuantityChanged(state, action) {
  var importFromFactoryEdit = {
    importFromFactoryQuantity: {
      value: action.importFromFactoryQuantity,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.importFromFactoryQuantity, action.validation),
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryDateFocus = function importFromFactoryDateFocus(state, action) {
  var importFromFactoryDate = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    importFromFactoryDate: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.importFromFactoryDate), importFromFactoryDate)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryDateChanged = function importFromFactoryDateChanged(state, action) {
  var importFromFactoryEdit = {
    importFromFactoryDate: {
      value: action.importFromFactoryDate,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.importFromFactoryDate, action.validation),
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryNoteFocus = function importFromFactoryNoteFocus(state, action) {
  var importFromFactoryNote = {
    touched: true,
    autoFocus: true
  };
  var importFromFactoryEdit = {
    importFromFactoryNote: _objectSpread(_objectSpread({}, state.importFromFactoryEdit.importFromFactoryNote), importFromFactoryNote)
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryNoteChanged = function importFromFactoryNoteChanged(state, action) {
  var importFromFactoryEdit = {
    importFromFactoryNote: {
      value: action.importFromFactoryNote ? action.importFromFactoryNote : "",
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.importFromFactoryNote, action.validation),
      touched: true
    }
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryCreate = function importFromFactoryCreate(state, action) {
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: _objectSpread(_objectSpread({}, IMPORT_FROM_FACTORY_EDIT), IMPORT_FROM_FACTORY_DETAIL_EDIT)
  });

  return stateNew;
};

var importFromFactoryAdd = function importFromFactoryAdd(state, action) {
  var stateNew = state;
  action.importFromFactoryEditValid = state.importFromFactoryEdit.importFromFactoryCode.valid && state.importFromFactoryEdit.employeeId.valid && state.importFromFactoryEdit.importFromFactoryDate.valid && state.importFromFactoryEdit.importFromFactoryNote.valid;

  if (!action.importFromFactoryEditValid) {
    state.importFromFactoryEdit.importFromFactoryCode.touched = true;
    state.importFromFactoryEdit.employeeId.touched = true;
    state.importFromFactoryEdit.importFromFactoryDate.touched = true;
    state.importFromFactoryEdit.importFromFactoryNote.touched = true;
  }

  var importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), {}, {
    valid: action.importFromFactoryEditValid,
    waiting: action.importFromFactoryEditValid
  });

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });
  return stateNew;
};

var importFromFactoryAddSuccess = function importFromFactoryAddSuccess(state, action) {
  var importFromFactoryEdit = _objectSpread(_objectSpread({}, IMPORT_FROM_FACTORY_EDIT), IMPORT_FROM_FACTORY_DETAIL_EDIT);

  importFromFactoryEdit.importFromFactoryDetails = [];

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryAddDetail = function importFromFactoryAddDetail(state, action) {
  var stateNew = state;
  action.importFromFactoryEditValid = state.importFromFactoryEdit.productId.valid && state.importFromFactoryEdit.goldTypeId.valid && state.importFromFactoryEdit.goldUnitId.valid && state.importFromFactoryEdit.importFromFactoryWeight.valid && state.importFromFactoryEdit.importFromFactoryQuantity.valid;

  if (!action.importFromFactoryEditValid) {
    state.importFromFactoryEdit.productId.touched = true;
    state.importFromFactoryEdit.goldTypeId.touched = true;
    state.importFromFactoryEdit.goldUnitId.touched = true;
    state.importFromFactoryEdit.importFromFactoryWeight.touched = true;
    state.importFromFactoryEdit.importFromFactoryQuantity.touched = true;
  }

  var importFromFactoryEdit = _objectSpread(_objectSpread(_objectSpread({}, state.importFromFactoryEdit), IMPORT_FROM_FACTORY_DETAIL_EDIT), {}, {
    validDetail: action.importFromFactoryEditValid
  });

  if (action.importFromFactoryEditValid) {
    importFromFactoryEdit.importFromFactoryDetails.push(action.detail); // Update WeightTotal and QuantityTotal.

    var weightTotal = 0;
    var quantityTotal = 0;
    state.importFromFactoryEdit.importFromFactoryDetails.forEach(function (item) {
      weightTotal += parseFloat(item.weight);
      quantityTotal += parseInt(item.quantity);
    });
    importFromFactoryEdit.weightTotal = weightTotal;
    importFromFactoryEdit.quantityTotal = quantityTotal;
  }

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });
  return stateNew;
};

var importFromFactoryEdit = function importFromFactoryEdit(state, action) {
  var importFromFactoryEdit = _objectSpread(_objectSpread({
    id: action.importFromFactory.id,
    version: action.importFromFactory.version,
    importFromFactoryCode: {
      value: action.importFromFactory.code,
      valid: true,
      touched: false,
      autoFocus: true
    },
    employeeId: {
      value: action.importFromFactory.senderId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    importFromFactoryDate: {
      value: action.importFromFactory.importFromFactoryDate,
      valid: true,
      touched: false,
      autoFocus: false
    },
    importFromFactoryNote: {
      value: action.importFromFactory.note ? action.importFromFactory.note : "",
      valid: true,
      touched: false,
      autoFocus: false
    }
  }, IMPORT_FROM_FACTORY_DETAIL_EDIT), {}, {
    valid: true
  });

  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit); // let stateNew = updateObject(state, { importFromFactoryEdit: importFromFactoryEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryEditSuccess = function importFromFactoryEditSuccess(state, action) {
  var importFromFactoryEdit = _objectSpread({}, state.importFromFactoryEdit);

  importFromFactoryEdit.importFromFactoryDetails = action.response.data; // Update WeightTotal and QuantityTotal.

  var weightTotal = 0;
  var quantityTotal = 0;
  importFromFactoryEdit.importFromFactoryDetails.forEach(function (item) {
    weightTotal += parseFloat(item.weight);
    quantityTotal += parseInt(item.quantity);
  });
  importFromFactoryEdit.weightTotal = weightTotal;
  importFromFactoryEdit.quantityTotal = quantityTotal;

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryDetailEdit = function importFromFactoryDetailEdit(state, action) {
  var importFromFactoryEdit = {
    productId: {
      value: action.importFromFactoryDetail.productId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    goldTypeId: {
      value: action.importFromFactoryDetail.goldTypeId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    importFromFactoryWeight: {
      value: action.importFromFactoryDetail.weight,
      valid: false,
      touched: false,
      autoFocus: false
    },
    goldUnitId: {
      value: action.importFromFactoryDetail.goldUnitId,
      valid: false,
      touched: false,
      autoFocus: false
    },
    importFromFactoryQuantity: {
      value: action.importFromFactoryDetail.quantity,
      valid: false,
      touched: false,
      autoFocus: false
    },
    validDetail: false
  };
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit); // let stateNew = updateObject(state, { importFromFactoryEdit: importFromFactoryEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryUpdate = function importFromFactoryUpdate(state, action) {
  // let stateNew = state;
  action.importFromFactoryEditValid = state.importFromFactoryEdit.importFromFactoryCode.valid && state.importFromFactoryEdit.employeeId.valid && state.importFromFactoryEdit.productId.valid && state.importFromFactoryEdit.goldTypeId.valid && state.importFromFactoryEdit.goldUnitId.valid && state.importFromFactoryEdit.importFromFactoryWeight.valid && state.importFromFactoryEdit.importFromFactoryQuantity.valid && state.importFromFactoryEdit.importFromFactoryDate.valid && state.importFromFactoryEdit.importFromFactoryNote.valid;

  if (!action.importFromFactoryEditValid) {
    state.importFromFactoryEdit.importFromFactoryCode.touched = true;
    state.importFromFactoryEdit.employeeId.touched = true;
    state.importFromFactoryEdit.productId.touched = true;
    state.importFromFactoryEdit.goldTypeId.touched = true;
    state.importFromFactoryEdit.goldUnitId.touched = true;
    state.importFromFactoryEdit.importFromFactoryWeight.touched = true;
    state.importFromFactoryEdit.importFromFactoryQuantity.touched = true;
    state.importFromFactoryEdit.importFromFactoryDate.touched = true;
    state.importFromFactoryEdit.importFromFactoryNote.touched = true;
  }

  var importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), {}, {
    valid: action.importFromFactoryEditValid,
    waiting: action.importFromFactoryEditValid
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryUpdateSuccess = function importFromFactoryUpdateSuccess(state, action) {
  var importFromFactoryEdit = _objectSpread(_objectSpread({}, IMPORT_FROM_FACTORY_EDIT), IMPORT_FROM_FACTORY_DETAIL_EDIT);

  importFromFactoryEdit.importFromFactoryDetails = [];

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var importFromFactoryList = function importFromFactoryList(state, action) {
  var importFromFactoryList = _objectSpread(_objectSpread({}, state.importFromFactoryList), {}, {
    waiting: true
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryList: importFromFactoryList
  });

  return stateNew;
};

var importFromFactoryListSuccess = function importFromFactoryListSuccess(state, action) {
  /* let importFromFactorys = [];
  let data = action.response.data;
  for (let key in data) {
    importFromFactorys.push({
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
  var importFromFactoryList = _objectSpread(_objectSpread({}, state.importFromFactoryList), {}, {
    importFromFactorys: action.response.data,
    waiting: false
  }); // let stateNew = updateObject(state, { error: null,  importFromFactoryList: importFromFactoryList });


  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryList: importFromFactoryList
  });

  return stateNew;
};

var importFromFactoryError = function importFromFactoryError(state, action) {
  // importFromFactoryList = { ...state.importFromFactoryList, ...importFromFactoryList };
  // let stateNew = updateObject(state, { error: action.error, importFromFactoryList: importFromFactoryList });
  if (action.caller === _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_LIST"]) {
    state.importFromFactoryList.waiting = false;
  } else {
    state.importFromFactoryEdit.waiting = false;
  }

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: action.error
  });

  return stateNew;
};

var importFromFactoryErrorHandled = function importFromFactoryErrorHandled(state, action) {
  // importFromFactoryList = { ...state.importFromFactoryList, ...importFromFactoryList };
  // let stateNew = updateObject(state, { error: action.error, importFromFactoryList: importFromFactoryList });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null
  });

  return stateNew;
};

var exportToFactoryGetByCodeSuccess = function exportToFactoryGetByCodeSuccess(state, action) {
  var importFromFactoryEdit = _objectSpread(_objectSpread({
    id: action.response.data.id,
    version: action.response.data.version,
    importFromFactoryCode: {
      value: action.response.data.code,
      valid: true,
      touched: false,
      autoFocus: true
    },
    employeeId: {
      value: action.response.data.senderId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    importFromFactoryDate: {
      value: action.response.data.exportToFactoryDate,
      valid: true,
      touched: false,
      autoFocus: false
    },
    importFromFactoryNote: {
      value: action.response.data.note ? action.response.data.note : "",
      valid: true,
      touched: false,
      autoFocus: false
    }
  }, IMPORT_FROM_FACTORY_DETAIL_EDIT), {}, {
    valid: true
  });

  importFromFactoryEdit.importFromFactoryDetails = action.responseDetailList.data; // Update WeightTotal and QuantityTotal.

  var weightTotal = 0;
  var quantityTotal = 0;
  importFromFactoryEdit.importFromFactoryDetails.forEach(function (item) {
    weightTotal += parseFloat(item.weight);
    quantityTotal += parseInt(item.quantity);
  });
  importFromFactoryEdit.weightTotal = weightTotal;
  importFromFactoryEdit.quantityTotal = quantityTotal;
  importFromFactoryEdit = _objectSpread(_objectSpread({}, state.importFromFactoryEdit), importFromFactoryEdit); // let stateNew = updateObject(state, { importFromFactoryEdit: importFromFactoryEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    importFromFactoryEdit: importFromFactoryEdit
  });

  return stateNew;
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* console.log(
    new Date().toLocaleString() + " ............ ImportFromFactory initialize ....."
  ); */
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_CODE_FOCUS"]:
      return importFromFactoryCodeFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_CODE_CHANGED"]:
      return importFromFactoryCodeChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_EMPLOYEE_ID_FOCUS"]:
      return importFromFactoryEmployeeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_EMPLOYEE_ID_CHANGED"]:
      return importFromFactoryEmployeeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_PRODUCT_ID_FOCUS"]:
      return importFromFactoryProductIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_PRODUCT_ID_CHANGED"]:
      return importFromFactoryProductIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_GOLD_TYPE_ID_FOCUS"]:
      return importFromFactoryGoldTypeIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_GOLD_TYPE_ID_CHANGED"]:
      return importFromFactoryGoldTypeIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_GOLD_UNIT_ID_FOCUS"]:
      return importFromFactoryGoldUnitIdFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_GOLD_UNIT_ID_CHANGED"]:
      return importFromFactoryGoldUnitIdChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_WEIGHT_FOCUS"]:
      return importFromFactoryWeightFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_WEIGHT_CHANGED"]:
      return importFromFactoryWeightChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_QUANTITY_FOCUS"]:
      return importFromFactoryQuantityFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_QUANTITY_CHANGED"]:
      return importFromFactoryQuantityChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_DATE_FOCUS"]:
      return importFromFactoryDateFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_DATE_CHANGED"]:
      return importFromFactoryDateChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_NOTE_FOCUS"]:
      return importFromFactoryNoteFocus(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_NOTE_CHANGED"]:
      return importFromFactoryNoteChanged(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_CREATE"]:
      return importFromFactoryCreate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_ADD"]:
      return importFromFactoryAdd(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_ADD_SUCCESS"]:
      return importFromFactoryAddSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_ADD_DETAIL"]:
      return importFromFactoryAddDetail(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_EDIT"]:
      return importFromFactoryEdit(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_EDIT_SUCCESS"]:
      return importFromFactoryEditSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_DETAIL_EDIT"]:
      return importFromFactoryDetailEdit(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_UPDATE"]:
      return importFromFactoryUpdate(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_UPDATE_SUCCESS"]:
      return importFromFactoryUpdateSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_LIST"]:
      return importFromFactoryList(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_LIST_SUCCESS"]:
      return importFromFactoryListSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_ERROR"]:
      return importFromFactoryError(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_ERROR_HANDLED"]:
      return importFromFactoryErrorHandled(state, action);
    // ExportToFactory.

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["EXPORT_TO_FACTORY_GET_BY_CODE_SUCCESS"]:
      return exportToFactoryGetByCodeSuccess(state, action);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2ltcG9ydEZyb21GYWN0b3J5UmVkdWNlci5qcyJdLCJuYW1lcyI6WyJJTVBPUlRfRlJPTV9GQUNUT1JZX0VESVQiLCJpZCIsInZlcnNpb24iLCJpbXBvcnRGcm9tRmFjdG9yeUNvZGUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImVtcGxveWVlSWQiLCJpbXBvcnRGcm9tRmFjdG9yeURhdGUiLCJEYXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlIiwid2VpZ2h0VG90YWwiLCJxdWFudGl0eVRvdGFsIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzIiwid2FpdGluZyIsIklNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQiLCJnb2xkVW5pdElkIiwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSIsInZhbGlkRGV0YWlsIiwiSU1QT1JUX0ZST01fRkFDVE9SWV9MSVNUIiwiaW1wb3J0RnJvbUZhY3RvcnlzIiwiaW5pdGlhbFN0YXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlFZGl0IiwiaW1wb3J0RnJvbUZhY3RvcnlMaXN0IiwiZXJyb3IiLCJpbXBvcnRGcm9tRmFjdG9yeUNvZGVGb2N1cyIsInN0YXRlIiwiYWN0aW9uIiwic3RhdGVOZXciLCJpbXBvcnRGcm9tRmFjdG9yeUNvZGVDaGFuZ2VkIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRpb24iLCJpbXBvcnRGcm9tRmFjdG9yeUVtcGxveWVlSWRGb2N1cyIsImltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZENoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeVByb2R1Y3RJZEZvY3VzIiwiaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkRm9jdXMiLCJpbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVW5pdElkRm9jdXMiLCJpbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRGb2N1cyIsImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0Q2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlGb2N1cyIsImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlRm9jdXMiLCJpbXBvcnRGcm9tRmFjdG9yeURhdGVDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlRm9jdXMiLCJpbXBvcnRGcm9tRmFjdG9yeU5vdGVDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlDcmVhdGUiLCJpbXBvcnRGcm9tRmFjdG9yeUFkZCIsImltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkIiwiaW1wb3J0RnJvbUZhY3RvcnlBZGRTdWNjZXNzIiwiaW1wb3J0RnJvbUZhY3RvcnlBZGREZXRhaWwiLCJwdXNoIiwiZGV0YWlsIiwiZm9yRWFjaCIsIml0ZW0iLCJwYXJzZUZsb2F0Iiwid2VpZ2h0IiwicGFyc2VJbnQiLCJxdWFudGl0eSIsImltcG9ydEZyb21GYWN0b3J5IiwiY29kZSIsInNlbmRlcklkIiwibm90ZSIsImltcG9ydEZyb21GYWN0b3J5RWRpdFN1Y2Nlc3MiLCJyZXNwb25zZSIsImRhdGEiLCJpbXBvcnRGcm9tRmFjdG9yeURldGFpbEVkaXQiLCJpbXBvcnRGcm9tRmFjdG9yeURldGFpbCIsImltcG9ydEZyb21GYWN0b3J5VXBkYXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVTdWNjZXNzIiwiaW1wb3J0RnJvbUZhY3RvcnlMaXN0U3VjY2VzcyIsImltcG9ydEZyb21GYWN0b3J5RXJyb3IiLCJjYWxsZXIiLCJhY3Rpb25UeXBlcyIsImltcG9ydEZyb21GYWN0b3J5RXJyb3JIYW5kbGVkIiwiZXhwb3J0VG9GYWN0b3J5R2V0QnlDb2RlU3VjY2VzcyIsImV4cG9ydFRvRmFjdG9yeURhdGUiLCJyZXNwb25zZURldGFpbExpc3QiLCJyZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsd0JBQXdCLEdBQUc7QUFDL0JDLElBQUUsRUFBRSxJQUQyQjtBQUUvQkMsU0FBTyxFQUFFLElBRnNCO0FBRy9CQyx1QkFBcUIsRUFBRTtBQUNyQkMsU0FBSyxFQUFFLEVBRGM7QUFFckJDLFNBQUssRUFBRSxLQUZjO0FBR3JCQyxXQUFPLEVBQUUsS0FIWTtBQUlyQkMsYUFBUyxFQUFFO0FBSlUsR0FIUTtBQVMvQkMsWUFBVSxFQUFFO0FBQ1ZKLFNBQUssRUFBRSxJQURHO0FBRVZDLFNBQUssRUFBRSxLQUZHO0FBR1ZDLFdBQU8sRUFBRSxLQUhDO0FBSVZDLGFBQVMsRUFBRTtBQUpELEdBVG1CO0FBZS9CRSx1QkFBcUIsRUFBRTtBQUNyQkwsU0FBSyxFQUFFLElBQUlNLElBQUosRUFEYztBQUVyQkwsU0FBSyxFQUFFLElBRmM7QUFHckJDLFdBQU8sRUFBRSxLQUhZO0FBSXJCQyxhQUFTLEVBQUU7QUFKVSxHQWZRO0FBcUIvQkksdUJBQXFCLEVBQUU7QUFDckJQLFNBQUssRUFBRSxFQURjO0FBRXJCQyxTQUFLLEVBQUUsSUFGYztBQUdyQkMsV0FBTyxFQUFFLEtBSFk7QUFJckJDLGFBQVMsRUFBRTtBQUpVLEdBckJRO0FBMkIvQkssYUFBVyxFQUFFLENBM0JrQjtBQTRCL0JDLGVBQWEsRUFBRSxDQTVCZ0I7QUE2Qi9CQywwQkFBd0IsRUFBRSxFQTdCSztBQThCL0JULE9BQUssRUFBRSxLQTlCd0I7QUErQi9CVSxTQUFPLEVBQUU7QUEvQnNCLENBQWpDO0FBa0NBLElBQU1DLCtCQUErQixHQUFHO0FBQ3RDQyxXQUFTLEVBQUU7QUFDVGIsU0FBSyxFQUFFLElBREU7QUFFVEMsU0FBSyxFQUFFLEtBRkU7QUFHVEMsV0FBTyxFQUFFLEtBSEE7QUFJVEMsYUFBUyxFQUFF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QUNsRCxLQUFELEVBQVFDLE1BQVIsQ0FBcEM7QUFFRjs7QUFDQSxTQUFLZ0Qsa0ZBQUw7QUFDRSxhQUFPRSwrQkFBK0IsQ0FBQ25ELEtBQUQsRUFBUUMsTUFBUixDQUF0Qzs7QUFDRjtBQUNFLGFBQU9ELEtBQVA7QUF6RUo7QUEyRUQsQ0EvRUQ7O0FBaUZlc0Qsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MjMzYjhiZWY0MGQ1OTAxNDRhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tWYWxpZGl0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXRpbGl0eVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IElNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCA9IHtcclxuICBpZDogbnVsbCxcclxuICB2ZXJzaW9uOiBudWxsLFxyXG4gIGltcG9ydEZyb21GYWN0b3J5Q29kZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9LFxyXG4gIGVtcGxveWVlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlEYXRlOiB7XHJcbiAgICB2YWx1ZTogbmV3IERhdGUoKSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlOb3RlOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgd2VpZ2h0VG90YWw6IDAsXHJcbiAgcXVhbnRpdHlUb3RhbDogMCxcclxuICBpbXBvcnRGcm9tRmFjdG9yeURldGFpbHM6IFtdLFxyXG4gIHZhbGlkOiBmYWxzZSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IElNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQgPSB7XHJcbiAgcHJvZHVjdElkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRUeXBlSWQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQ6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZ29sZFVuaXRJZDoge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHZhbGlkRGV0YWlsOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IElNUE9SVF9GUk9NX0ZBQ1RPUllfTElTVCA9IHtcclxuICBpbXBvcnRGcm9tRmFjdG9yeXM6IFtdLFxyXG4gIHdhaXRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdDoge1xyXG4gICAgLi4uSU1QT1JUX0ZST01fRkFDVE9SWV9FRElULFxyXG4gICAgLi4uSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVCxcclxuICB9LFxyXG4gIGltcG9ydEZyb21GYWN0b3J5TGlzdDogSU1QT1JUX0ZST01fRkFDVE9SWV9MSVNULFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlDb2RlRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUNvZGUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5Q29kZToge1xyXG4gICAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLFxyXG4gICAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUNvZGUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlDb2RlQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5Q29kZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5Q29kZSxcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5Q29kZSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZW1wbG95ZWVJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZW1wbG95ZWVJZCxcclxuICAgICAgLi4uZW1wbG95ZWVJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUVtcGxveWVlSWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmVtcGxveWVlSWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5lbXBsb3llZUlkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQucHJvZHVjdElkLFxyXG4gICAgICAuLi5wcm9kdWN0SWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgcHJvZHVjdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucHJvZHVjdElkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24ucHJvZHVjdElkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5R29sZFR5cGVJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFR5cGVJZCxcclxuICAgICAgLi4uZ29sZFR5cGVJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmdvbGRUeXBlSWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5nb2xkVHlwZUlkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZ29sZFVuaXRJZCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFVuaXRJZCxcclxuICAgICAgLi4uZ29sZFVuaXRJZCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgZ29sZFVuaXRJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmdvbGRVbml0SWQsXHJcbiAgICAgIHZhbGlkOiAhIWFjdGlvbi5nb2xkVW5pdElkLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5V2VpZ2h0Rm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodCA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQ6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LFxyXG4gICAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodCxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodENoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Rm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5ID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5OiB7XHJcbiAgICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LFxyXG4gICAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlEYXRlRm9jdXMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeURhdGUgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RGF0ZToge1xyXG4gICAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLFxyXG4gICAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeURhdGUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlEYXRlQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGF0ZSxcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGF0ZSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5Tm90ZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlOb3RlID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeU5vdGU6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Tm90ZSxcclxuICAgICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlOb3RlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5Tm90ZUNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeU5vdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeU5vdGUgPyBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlOb3RlIDogXCJcIixcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5Tm90ZSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5Q3JlYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiB7XHJcbiAgICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCxcclxuICAgICAgLi4uSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVCxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUFkZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0gc3RhdGU7XHJcbiAgYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkID1cclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeUNvZGUudmFsaWQgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5lbXBsb3llZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmVtcGxveWVlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Tm90ZS50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIHZhbGlkOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlFZGl0VmFsaWQsXHJcbiAgICB3YWl0aW5nOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlFZGl0VmFsaWQsXHJcbiAgfTtcclxuICBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5QWRkU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCxcclxuICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzID0gW107XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlBZGREZXRhaWwgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQucHJvZHVjdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFR5cGVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmdvbGRVbml0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudmFsaWQ7XHJcbiAgaWYgKCFhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlFZGl0VmFsaWQpIHtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5wcm9kdWN0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFR5cGVJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5nb2xkVW5pdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWREZXRhaWw6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCxcclxuICB9O1xyXG4gIGlmIChhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlFZGl0VmFsaWQpIHtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMucHVzaChhY3Rpb24uZGV0YWlsKTtcclxuICAgIC8vIFVwZGF0ZSBXZWlnaHRUb3RhbCBhbmQgUXVhbnRpdHlUb3RhbC5cclxuICAgIGxldCB3ZWlnaHRUb3RhbCA9IDA7XHJcbiAgICBsZXQgcXVhbnRpdHlUb3RhbCA9IDA7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgd2VpZ2h0VG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLndlaWdodCk7XHJcbiAgICAgIHF1YW50aXR5VG90YWwgKz0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgICB9KTtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdC53ZWlnaHRUb3RhbCA9IHdlaWdodFRvdGFsO1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG4gIH1cclxuICBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGlkOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnkuaWQsXHJcbiAgICB2ZXJzaW9uOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnkudmVyc2lvbixcclxuICAgIGltcG9ydEZyb21GYWN0b3J5Q29kZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5LmNvZGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeS5zZW5kZXJJZCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RGF0ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5LmltcG9ydEZyb21GYWN0b3J5RGF0ZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5Tm90ZToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5Lm5vdGUgPyBhY3Rpb24uaW1wb3J0RnJvbUZhY3Rvcnkubm90ZSA6IFwiXCIsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlFZGl0U3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICAvLyBVcGRhdGUgV2VpZ2h0VG90YWwgYW5kIFF1YW50aXR5VG90YWwuXHJcbiAgbGV0IHdlaWdodFRvdGFsID0gMDtcclxuICBsZXQgcXVhbnRpdHlUb3RhbCA9IDA7XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGV0YWlscy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB3ZWlnaHRUb3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0ud2VpZ2h0KTtcclxuICAgIHF1YW50aXR5VG90YWwgKz0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgfSk7XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LndlaWdodFRvdGFsID0gd2VpZ2h0VG90YWw7XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RGV0YWlsRWRpdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVHlwZUlkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWwuZ29sZFR5cGVJZCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsLndlaWdodCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBnb2xkVW5pdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWwuZ29sZFVuaXRJZCxcclxuICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5OiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWwucXVhbnRpdHksXHJcbiAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgdmFsaWREZXRhaWw6IGZhbHNlLFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5VXBkYXRlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Q29kZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmVtcGxveWVlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFVuaXRJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Tm90ZS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Q29kZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURhdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5VXBkYXRlU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCxcclxuICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzID0gW107XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlMaXN0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlMaXN0ID0geyAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUxpc3QsIHdhaXRpbmc6IHRydWUgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlMaXN0OiBpbXBvcnRGcm9tRmFjdG9yeUxpc3QsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUxpc3RTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvKiBsZXQgaW1wb3J0RnJvbUZhY3RvcnlzID0gW107XHJcbiAgbGV0IGRhdGEgPSBhY3Rpb24ucmVzcG9uc2UuZGF0YTtcclxuICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlzLnB1c2goe1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgaWQ6IGtleSxcclxuICAgICAgbmFtZTogZGF0YVtrZXldLm5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGRhdGFba2V5XS5lbXBsb3llZUlkLFxyXG4gICAgICBwcm9kdWN0SWQ6IGRhdGFba2V5XS5wcm9kdWN0SWQsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IGRhdGFba2V5XS5nb2xkVHlwZUlkLFxyXG4gICAgICBnb2xkVW5pdElkOiBkYXRhW2tleV0uZ29sZFVuaXRJZCxcclxuICAgICAgd2VpZ2h0OiBkYXRhW2tleV0ud2VpZ2h0LFxyXG4gICAgICBxdWFudGl0eTogZGF0YVtrZXldLnF1YW50aXR5LFxyXG4gICAgICBpbnB1dERhdGU6IGRhdGFba2V5XS5pbnB1dERhdGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhW2tleV0uZGVzY3JpcHRpb24sXHJcbiAgICAgIGltYWdlOiBkYXRhW2tleV0uaW1hZ2UsXHJcbiAgICB9KTtcclxuICB9ICovXHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5TGlzdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5TGlzdCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5czogYWN0aW9uLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB3YWl0aW5nOiBmYWxzZSxcclxuICB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogbnVsbCwgIGltcG9ydEZyb21GYWN0b3J5TGlzdDogaW1wb3J0RnJvbUZhY3RvcnlMaXN0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUxpc3Q6IGltcG9ydEZyb21GYWN0b3J5TGlzdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RXJyb3IgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGltcG9ydEZyb21GYWN0b3J5TGlzdCA9IHsgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlMaXN0LCAuLi5pbXBvcnRGcm9tRmFjdG9yeUxpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgaW1wb3J0RnJvbUZhY3RvcnlMaXN0OiBpbXBvcnRGcm9tRmFjdG9yeUxpc3QgfSk7XHJcbiAgaWYgKGFjdGlvbi5jYWxsZXIgPT09IGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfTElTVCkge1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlMaXN0LndhaXRpbmcgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LndhaXRpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RXJyb3JIYW5kbGVkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBpbXBvcnRGcm9tRmFjdG9yeUxpc3QgPSB7IC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5TGlzdCwgLi4uaW1wb3J0RnJvbUZhY3RvcnlMaXN0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBhY3Rpb24uZXJyb3IsIGltcG9ydEZyb21GYWN0b3J5TGlzdDogaW1wb3J0RnJvbUZhY3RvcnlMaXN0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZXhwb3J0VG9GYWN0b3J5R2V0QnlDb2RlU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGlkOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5pZCxcclxuICAgIHZlcnNpb246IGFjdGlvbi5yZXNwb25zZS5kYXRhLnZlcnNpb24sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLmNvZGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLnNlbmRlcklkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlEYXRlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5leHBvcnRUb0ZhY3RvcnlEYXRlLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlOb3RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5ub3RlID8gYWN0aW9uLnJlc3BvbnNlLmRhdGEubm90ZSA6IFwiXCIsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGV0YWlscyA9XHJcbiAgICBhY3Rpb24ucmVzcG9uc2VEZXRhaWxMaXN0LmRhdGE7XHJcbiAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gIGxldCB3ZWlnaHRUb3RhbCA9IDA7XHJcbiAgbGV0IHF1YW50aXR5VG90YWwgPSAwO1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgd2VpZ2h0VG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLndlaWdodCk7XHJcbiAgICBxdWFudGl0eVRvdGFsICs9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH0pO1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC53ZWlnaHRUb3RhbCA9IHdlaWdodFRvdGFsO1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC5xdWFudGl0eVRvdGFsID0gcXVhbnRpdHlUb3RhbDtcclxuXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEltcG9ydEZyb21GYWN0b3J5IGluaXRpYWxpemUgLi4uLi5cIlxyXG4gICk7ICovXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0NPREVfRk9DVVM6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUNvZGVGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9DT0RFX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUNvZGVDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0VNUExPWUVFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRU1QTE9ZRUVfSURfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfUFJPRFVDVF9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfUFJPRFVDVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0dPTERfVFlQRV9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5R29sZFR5cGVJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0dPTERfVFlQRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9HT0xEX1VOSVRfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9HT0xEX1VOSVRfSURfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfV0VJR0hUX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9XRUlHSFRfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5V2VpZ2h0Q2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9RVUFOVElUWV9GT0NVUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9RVUFOVElUWV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfREFURV9GT0NVUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5RGF0ZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0RBVEVfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5RGF0ZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfTk9URV9GT0NVUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5Tm90ZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX05PVEVfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5Tm90ZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0NSRUFURTpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5Q3JlYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0FERDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5QWRkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0FERF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlBZGRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9BRERfREVUQUlMOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlBZGREZXRhaWwoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0VESVQ6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlFZGl0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5RGV0YWlsRWRpdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9VUERBVEU6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9VUERBVEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5VXBkYXRlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfTElTVDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5TGlzdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9MSVNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUxpc3RTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9FUlJPUjpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5RXJyb3Ioc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRVJST1JfSEFORExFRDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5RXJyb3JIYW5kbGVkKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIC8vIEV4cG9ydFRvRmFjdG9yeS5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfR0VUX0JZX0NPREVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIGV4cG9ydFRvRmFjdG9yeUdldEJ5Q29kZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==