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
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parse */ "./node_modules/date-fns/esm/parse/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_4__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_5__["default"]
};
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
  detailId: null,
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

var importFromFactoryUpdateDetail = function importFromFactoryUpdateDetail(state, action) {
  var stateNew = state;
  action.importFromFactoryEditValid = state.importFromFactoryEdit.detailId != null && state.importFromFactoryEdit.productId.valid && state.importFromFactoryEdit.goldTypeId.valid && state.importFromFactoryEdit.goldUnitId.valid && state.importFromFactoryEdit.importFromFactoryWeight.valid && state.importFromFactoryEdit.importFromFactoryQuantity.valid;

  if (!action.importFromFactoryEditValid) {
    state.importFromFactoryEdit.productId.touched = true;
    state.importFromFactoryEdit.goldTypeId.touched = true;
    state.importFromFactoryEdit.goldUnitId.touched = true;
    state.importFromFactoryEdit.importFromFactoryWeight.touched = true;
    state.importFromFactoryEdit.importFromFactoryQuantity.touched = true;
  }

  if (action.importFromFactoryEditValid) {
    var importFromFactoryEdit = _objectSpread(_objectSpread(_objectSpread({}, state.importFromFactoryEdit), IMPORT_FROM_FACTORY_DETAIL_EDIT), {}, {
      validDetail: action.importFromFactoryEditValid
    });

    importFromFactoryEdit.importFromFactoryDetails = importFromFactoryEdit.importFromFactoryDetails.filter(function (item) {
      return item.id != action.detail.id;
    });
    importFromFactoryEdit.importFromFactoryDetails.push(action.detail); // Update WeightTotal and QuantityTotal.

    var weightTotal = 0;
    var quantityTotal = 0;
    state.importFromFactoryEdit.importFromFactoryDetails.forEach(function (item) {
      weightTotal += parseFloat(item.weight);
      quantityTotal += parseInt(item.quantity);
    });
    importFromFactoryEdit.weightTotal = weightTotal;
    importFromFactoryEdit.quantityTotal = quantityTotal;
    stateNew = _objectSpread(_objectSpread({}, state), {}, {
      error: null,
      importFromFactoryEdit: importFromFactoryEdit
    });
  }

  return stateNew;
};

var parseDate = function parseDate(dateStr) {
  if (!dateStr) {
    return null;
  }

  var result = Object(date_fns_parse__WEBPACK_IMPORTED_MODULE_3__["default"])(dateStr, "dd/MM/yyyy", new Date(), {
    locale: localeMap["vi"]
  }); // result = parse("2019-11-27 09:45:00", "yyyy-MM-dd HH:mm:ss", new Date());

  return result;
};

var importFromFactoryEditAction = function importFromFactoryEditAction(state, action) {
  var importFromFactoryEdit = _objectSpread(_objectSpread({
    id: null,
    //action.importFromFactory.id,
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
      value: parseDate(action.importFromFactory.importFromFactoryDate),
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

var importFromFactoryDetailEditAction = function importFromFactoryDetailEditAction(state, action) {
  var importFromFactoryEdit = {
    detailId: action.importFromFactoryDetail.id,
    productId: {
      value: action.importFromFactoryDetail.productId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    goldTypeId: {
      value: action.importFromFactoryDetail.goldTypeId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    importFromFactoryWeight: {
      value: action.importFromFactoryDetail.weight,
      valid: true,
      touched: false,
      autoFocus: false
    },
    goldUnitId: {
      value: action.importFromFactoryDetail.goldUnitId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    importFromFactoryQuantity: {
      value: action.importFromFactoryDetail.quantity,
      valid: true,
      touched: false,
      autoFocus: false
    },
    validDetail: true
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
  if (!action.response.data) {
    var _importFromFactoryEdit = _objectSpread(_objectSpread({}, IMPORT_FROM_FACTORY_EDIT), IMPORT_FROM_FACTORY_DETAIL_EDIT);

    _importFromFactoryEdit.importFromFactoryDetails = [];

    var _stateNew = _objectSpread(_objectSpread({}, state), {}, {
      error: null,
      importFromFactoryEdit: _importFromFactoryEdit
    });

    return _stateNew;
  } // let employeeId = localStorage.getItem("employeeId");


  var importFromFactoryEdit = _objectSpread(_objectSpread({
    // id: action.response.data.id,
    version: action.response.data.version,
    importFromFactoryCode: {
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

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_UPDATE_DETAIL"]:
      return importFromFactoryUpdateDetail(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_EDIT"]:
      return importFromFactoryEditAction(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_EDIT_SUCCESS"]:
      return importFromFactoryEditSuccess(state, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["IMPORT_FROM_FACTORY_DETAIL_EDIT"]:
      return importFromFactoryDetailEditAction(state, action);

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

/***/ }),

/***/ "./src/store/sagas/exportToFactorySaga.js":
/*!************************************************!*\
  !*** ./src/store/sagas/exportToFactorySaga.js ***!
  \************************************************/
/*! exports provided: exportToFactoryAdd, exportToFactoryEdit, exportToFactoryUpdate, exportToFactoryDelete, exportToFactoryList, exportToFactoryGetByCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportToFactoryAdd", function() { return exportToFactoryAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportToFactoryEdit", function() { return exportToFactoryEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportToFactoryUpdate", function() { return exportToFactoryUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportToFactoryDelete", function() { return exportToFactoryDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportToFactoryList", function() { return exportToFactoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportToFactoryGetByCode", function() { return exportToFactoryGetByCode; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/exportToFactory */ "./src/services/exportToFactory.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/store/actions/index.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(exportToFactoryAdd),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(exportToFactoryEdit),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(exportToFactoryUpdate),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(exportToFactoryDelete),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(exportToFactoryList),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(exportToFactoryGetByCode);





function exportToFactoryAdd(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function exportToFactoryAdd$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!action.exportToFactoryEditValid) {
            _context.next = 14;
            break;
          }

          _context.next = 4;
          return _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__["exportToFactoryAdd"](action.exportToFactory);

        case 4:
          response = _context.sent;

          if (!(response && response.status === 200)) {
            _context.next = 12;
            break;
          }

          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryAddSuccess"]());

        case 8:
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryList"]());

        case 10:
          _context.next = 14;
          break;

        case 12:
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_ADD"], response));

        case 14:
          _context.next = 21;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          _context.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_ADD"], _context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 16]]);
}
function exportToFactoryEdit(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function exportToFactoryEdit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__["exportToFactoryDetailList"](action.exportToFactory.id);

        case 3:
          response = _context2.sent;

          if (!(response && response.status === 200)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryEditSuccess"](response));

        case 7:
          _context2.next = 11;
          break;

        case 9:
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_EDIT"], response));

        case 11:
          _context2.next = 18;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_EDIT"], _context2.t0));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 13]]);
}
function exportToFactoryUpdate(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function exportToFactoryUpdate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;

          if (!action.exportToFactoryEditValid) {
            _context3.next = 14;
            break;
          }

          _context3.next = 4;
          return _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__["exportToFactoryUpdate"](action.id, action.exportToFactory);

        case 4:
          response = _context3.sent;

          if (!(response && response.status === 200)) {
            _context3.next = 12;
            break;
          }

          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryUpdateSuccess"]());

        case 8:
          _context3.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryList"]());

        case 10:
          _context3.next = 14;
          break;

        case 12:
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_UPDATE"], response));

        case 14:
          _context3.next = 21;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          _context3.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_UPDATE"], _context3.t0));

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 16]]);
}
function exportToFactoryDelete(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function exportToFactoryDelete$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__["exportToFactoryDelete"](action.id, action.version);

        case 3:
          response = _context4.sent;

          if (!(response && response.status === 200)) {
            _context4.next = 11;
            break;
          }

          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryDeleteSuccess"]());

        case 7:
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryList"]());

        case 9:
          _context4.next = 13;
          break;

        case 11:
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_DELETE"], response));

        case 13:
          _context4.next = 20;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          _context4.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_DELETE"], _context4.t0));

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 15]]);
}
function exportToFactoryList(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function exportToFactoryList$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__["exportToFactoryList"]();

        case 3:
          response = _context5.sent;

          if (!(response && response.status === 200)) {
            _context5.next = 9;
            break;
          }

          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryListSuccess"](response));

        case 7:
          _context5.next = 11;
          break;

        case 9:
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_LIST"], response));

        case 11:
          _context5.next = 18;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          _context5.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryError"](_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EXPORT_TO_FACTORY_LIST"], _context5.t0));

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 13]]);
}
function exportToFactoryGetByCode(action) {
  var response, responseDetailList;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function exportToFactoryGetByCode$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__["exportToFactoryGetByCode"](action.code);

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryGetByCodeSuccess"](response, null));

        case 8:
          _context6.next = 20;
          break;

        case 10:
          _context6.next = 12;
          return _services_exportToFactory__WEBPACK_IMPORTED_MODULE_2__["exportToFactoryDetailList"](response.data.id);

        case 12:
          responseDetailList = _context6.sent;

          if (!(responseDetailList && responseDetailList.status === 200)) {
            _context6.next = 18;
            break;
          }

          _context6.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["exportToFactoryGetByCodeSuccess"](response, responseDetailList));

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2ltcG9ydEZyb21GYWN0b3J5UmVkdWNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NhZ2FzL2V4cG9ydFRvRmFjdG9yeVNhZ2EuanMiXSwibmFtZXMiOlsibG9jYWxlTWFwIiwiZW4iLCJlbkxvY2FsZSIsInZpIiwidmlMb2NhbCIsIklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCIsImlkIiwidmVyc2lvbiIsImltcG9ydEZyb21GYWN0b3J5Q29kZSIsInZhbHVlIiwidmFsaWQiLCJ0b3VjaGVkIiwiYXV0b0ZvY3VzIiwiZW1wbG95ZWVJZCIsImltcG9ydEZyb21GYWN0b3J5RGF0ZSIsIkRhdGUiLCJpbXBvcnRGcm9tRmFjdG9yeU5vdGUiLCJ3ZWlnaHRUb3RhbCIsInF1YW50aXR5VG90YWwiLCJpbXBvcnRGcm9tRmFjdG9yeURldGFpbHMiLCJ3YWl0aW5nIiwiSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVCIsImRldGFpbElkIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0IiwiZ29sZFVuaXRJZCIsImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkiLCJ2YWxpZERldGFpbCIsIklNUE9SVF9GUk9NX0ZBQ1RPUllfTElTVCIsImltcG9ydEZyb21GYWN0b3J5cyIsImluaXRpYWxTdGF0ZSIsImltcG9ydEZyb21GYWN0b3J5RWRpdCIsImltcG9ydEZyb21GYWN0b3J5TGlzdCIsImVycm9yIiwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlRm9jdXMiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXRlTmV3IiwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlQ2hhbmdlZCIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0aW9uIiwiaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkRm9jdXMiLCJpbXBvcnRGcm9tRmFjdG9yeUVtcGxveWVlSWRDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRGb2N1cyIsImltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5R29sZFR5cGVJZEZvY3VzIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZEZvY3VzIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVW5pdElkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0Rm9jdXMiLCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodENoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Rm9jdXMiLCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Q2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5RGF0ZUZvY3VzIiwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5Tm90ZUZvY3VzIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5Q3JlYXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlBZGQiLCJpbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCIsImltcG9ydEZyb21GYWN0b3J5QWRkU3VjY2VzcyIsImltcG9ydEZyb21GYWN0b3J5VXBkYXRlRGV0YWlsIiwiZmlsdGVyIiwiaXRlbSIsImRldGFpbCIsInB1c2giLCJmb3JFYWNoIiwicGFyc2VGbG9hdCIsIndlaWdodCIsInBhcnNlSW50IiwicXVhbnRpdHkiLCJwYXJzZURhdGUiLCJkYXRlU3RyIiwicmVzdWx0IiwicGFyc2UiLCJsb2NhbGUiLCJpbXBvcnRGcm9tRmFjdG9yeUVkaXRBY3Rpb24iLCJpbXBvcnRGcm9tRmFjdG9yeSIsImNvZGUiLCJzZW5kZXJJZCIsIm5vdGUiLCJpbXBvcnRGcm9tRmFjdG9yeUVkaXRTdWNjZXNzIiwicmVzcG9uc2UiLCJkYXRhIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxFZGl0QWN0aW9uIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWwiLCJpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZSIsImltcG9ydEZyb21GYWN0b3J5VXBkYXRlU3VjY2VzcyIsImltcG9ydEZyb21GYWN0b3J5TGlzdFN1Y2Nlc3MiLCJpbXBvcnRGcm9tRmFjdG9yeUVycm9yIiwiY2FsbGVyIiwiYWN0aW9uVHlwZXMiLCJpbXBvcnRGcm9tRmFjdG9yeUVycm9ySGFuZGxlZCIsImV4cG9ydFRvRmFjdG9yeUdldEJ5Q29kZVN1Y2Nlc3MiLCJyZWNlaXZlcklkIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZSIsInJlc3BvbnNlRGV0YWlsTGlzdCIsInJlZHVjZXIiLCJ0eXBlIiwiZXhwb3J0VG9GYWN0b3J5QWRkIiwiZXhwb3J0VG9GYWN0b3J5RWRpdCIsImV4cG9ydFRvRmFjdG9yeVVwZGF0ZSIsImV4cG9ydFRvRmFjdG9yeURlbGV0ZSIsImV4cG9ydFRvRmFjdG9yeUxpc3QiLCJleHBvcnRUb0ZhY3RvcnlHZXRCeUNvZGUiLCJleHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQiLCJzZXJ2aWNlIiwiZXhwb3J0VG9GYWN0b3J5Iiwic3RhdHVzIiwicHV0IiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFQyw2REFEWTtBQUVoQkMsSUFBRSxFQUFFQywwREFBT0E7QUFGSyxDQUFsQjtBQUtBLElBQU1DLHdCQUF3QixHQUFHO0FBQy9CQyxJQUFFLEVBQUUsSUFEMkI7QUFFL0JDLFNBQU8sRUFBRSxJQUZzQjtBQUcvQkMsdUJBQXFCLEVBQUU7QUFDckJDLFNBQUssRUFBRSxFQURjO0FBRXJCQyxTQUFLLEVBQUUsS0FGYztBQUdyQkMsV0FBTyxFQUFFLEtBSFk7QUFJckJDLGFBQVMsRUFBRTtBQUpVLEdBSFE7QUFTL0JDLFlBQVUsRUFBRTtBQUNWSixTQUFLLEVBQUUsSUFERztB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dGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhhMTM5MDhiYjQwNDA0NzEyMTdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVja1ZhbGlkaXR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlsaXR5XCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImRhdGUtZm5zL3BhcnNlXCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuXHJcbmNvbnN0IGxvY2FsZU1hcCA9IHtcclxuICBlbjogZW5Mb2NhbGUsXHJcbiAgdmk6IHZpTG9jYWwsXHJcbn07XHJcblxyXG5jb25zdCBJTVBPUlRfRlJPTV9GQUNUT1JZX0VESVQgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgdmVyc2lvbjogbnVsbCxcclxuICBpbXBvcnRGcm9tRmFjdG9yeUNvZGU6IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfSxcclxuICBlbXBsb3llZUlkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGltcG9ydEZyb21GYWN0b3J5RGF0ZToge1xyXG4gICAgdmFsdWU6IG5ldyBEYXRlKCksXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGltcG9ydEZyb21GYWN0b3J5Tm90ZToge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHdlaWdodFRvdGFsOiAwLFxyXG4gIHF1YW50aXR5VG90YWw6IDAsXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzOiBbXSxcclxuICB2YWxpZDogZmFsc2UsXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBJTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElUID0ge1xyXG4gIGRldGFpbElkOiBudWxsLFxyXG4gIHByb2R1Y3RJZDoge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICBnb2xkVHlwZUlkOiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGltcG9ydEZyb21GYWN0b3J5V2VpZ2h0OiB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdvbGRVbml0SWQ6IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eToge1xyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICB2YWxpZERldGFpbDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBJTVBPUlRfRlJPTV9GQUNUT1JZX0xJU1QgPSB7XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlzOiBbXSxcclxuICB3YWl0aW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IHtcclxuICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVCxcclxuICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgfSxcclxuICBpbXBvcnRGcm9tRmFjdG9yeUxpc3Q6IElNUE9SVF9GUk9NX0ZBQ1RPUllfTElTVCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5Q29kZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlDb2RlID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGU6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Q29kZSxcclxuICAgICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlDb2RlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5Q29kZUNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUNvZGUsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUNvZGUsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUVtcGxveWVlSWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGVtcGxveWVlSWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmVtcGxveWVlSWQsXHJcbiAgICAgIC4uLmVtcGxveWVlSWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5lbXBsb3llZUlkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24uZW1wbG95ZWVJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeVByb2R1Y3RJZEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnByb2R1Y3RJZCxcclxuICAgICAgLi4ucHJvZHVjdElkLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLnByb2R1Y3RJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLnByb2R1Y3RJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmdvbGRUeXBlSWQsXHJcbiAgICAgIC4uLmdvbGRUeXBlSWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGdvbGRUeXBlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5nb2xkVHlwZUlkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24uZ29sZFR5cGVJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGdvbGRVbml0SWQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGdvbGRVbml0SWQ6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmdvbGRVbml0SWQsXHJcbiAgICAgIC4uLmdvbGRVbml0SWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlHb2xkVW5pdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGdvbGRVbml0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5nb2xkVW5pdElkLFxyXG4gICAgICB2YWxpZDogISFhY3Rpb24uZ29sZFVuaXRJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodEZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQgPSB7XHJcbiAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5V2VpZ2h0OiB7XHJcbiAgICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodCxcclxuICAgICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodCxcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eToge1xyXG4gICAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSxcclxuICAgICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Q2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHk6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSwgYWN0aW9uLnZhbGlkYXRpb24pLFxyXG4gICAgICB0b3VjaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RGF0ZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlEYXRlID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeURhdGU6IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGF0ZSxcclxuICAgICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlEYXRlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIC4uLmltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RGF0ZUNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeURhdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeURhdGUsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeURhdGUsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeU5vdGVGb2N1cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5Tm90ZSA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlOb3RlOiB7XHJcbiAgICAgIC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeU5vdGUsXHJcbiAgICAgIC4uLmltcG9ydEZyb21GYWN0b3J5Tm90ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeU5vdGVDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlOb3RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlOb3RlID8gYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5Tm90ZSA6IFwiXCIsXHJcbiAgICAgIHZhbGlkOiBjaGVja1ZhbGlkaXR5KGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeU5vdGUsIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUNyZWF0ZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDoge1xyXG4gICAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0VESVQsXHJcbiAgICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlBZGQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZW1wbG95ZWVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGF0ZS52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Tm90ZS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5Q29kZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5lbXBsb3llZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeU5vdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICB2YWxpZDogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUFkZFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0VESVQsXHJcbiAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGV0YWlscyA9IFtdO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5VXBkYXRlRGV0YWlsID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgc3RhdGVOZXcgPSBzdGF0ZTtcclxuICBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlFZGl0VmFsaWQgPVxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmRldGFpbElkICE9IG51bGwgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5wcm9kdWN0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5nb2xkVHlwZUlkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFVuaXRJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnByb2R1Y3RJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5nb2xkVHlwZUlkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmdvbGRVbml0SWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS50b3VjaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCkge1xyXG4gICAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElULFxyXG4gICAgICB2YWxpZERldGFpbDogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkLFxyXG4gICAgfTtcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMgPSBpbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzLmZpbHRlcihcclxuICAgICAgKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCAhPSBhY3Rpb24uZGV0YWlsLmlkO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGV0YWlscy5wdXNoKGFjdGlvbi5kZXRhaWwpO1xyXG4gICAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gICAgbGV0IHdlaWdodFRvdGFsID0gMDtcclxuICAgIGxldCBxdWFudGl0eVRvdGFsID0gMDtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB3ZWlnaHRUb3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0ud2VpZ2h0KTtcclxuICAgICAgcXVhbnRpdHlUb3RhbCArPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICAgIH0pO1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LndlaWdodFRvdGFsID0gd2VpZ2h0VG90YWw7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQucXVhbnRpdHlUb3RhbCA9IHF1YW50aXR5VG90YWw7XHJcbiAgICBzdGF0ZU5ldyA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlRGF0ZSA9IChkYXRlU3RyKSA9PiB7XHJcbiAgaWYgKCFkYXRlU3RyKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgbGV0IHJlc3VsdCA9IHBhcnNlKGRhdGVTdHIsIFwiZGQvTU0veXl5eVwiLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICBsb2NhbGU6IGxvY2FsZU1hcFtcInZpXCJdLFxyXG4gIH0pO1xyXG4gIC8vIHJlc3VsdCA9IHBhcnNlKFwiMjAxOS0xMS0yNyAwOTo0NTowMFwiLCBcInl5eXktTU0tZGQgSEg6bW06c3NcIiwgbmV3IERhdGUoKSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RWRpdEFjdGlvbiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIGlkOiBudWxsLCAvL2FjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeS5pZCxcclxuICAgIHZlcnNpb246IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeS52ZXJzaW9uLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlDb2RlOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnkuY29kZSxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1wbG95ZWVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5LnNlbmRlcklkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlEYXRlOiB7XHJcbiAgICAgIHZhbHVlOiBwYXJzZURhdGUoYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5LmltcG9ydEZyb21GYWN0b3J5RGF0ZSksXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeU5vdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeS5ub3RlID8gYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5Lm5vdGUgOiBcIlwiLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLi4uSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVCxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gIH07XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgLi4uaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQ6IGltcG9ydEZyb21GYWN0b3J5RWRpdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5RWRpdFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzID0gYWN0aW9uLnJlc3BvbnNlLmRhdGE7XHJcbiAgLy8gVXBkYXRlIFdlaWdodFRvdGFsIGFuZCBRdWFudGl0eVRvdGFsLlxyXG4gIGxldCB3ZWlnaHRUb3RhbCA9IDA7XHJcbiAgbGV0IHF1YW50aXR5VG90YWwgPSAwO1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgd2VpZ2h0VG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLndlaWdodCk7XHJcbiAgICBxdWFudGl0eVRvdGFsICs9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH0pO1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC53ZWlnaHRUb3RhbCA9IHdlaWdodFRvdGFsO1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC5xdWFudGl0eVRvdGFsID0gcXVhbnRpdHlUb3RhbDtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeURldGFpbEVkaXRBY3Rpb24gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICBkZXRhaWxJZDogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsLmlkLFxyXG4gICAgcHJvZHVjdElkOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWwucHJvZHVjdElkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZ29sZFR5cGVJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsLmdvbGRUeXBlSWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsLndlaWdodCxcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGdvbGRVbml0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeURldGFpbC5nb2xkVW5pdElkLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eToge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsLnF1YW50aXR5LFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgdmFsaWREZXRhaWw6IHRydWUsXHJcbiAgfTtcclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGUgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5pbXBvcnRGcm9tRmFjdG9yeUVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZW1wbG95ZWVJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnByb2R1Y3RJZC52YWxpZCAmJlxyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmdvbGRUeXBlSWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5nb2xkVW5pdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQudmFsaWQgJiZcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmVtcGxveWVlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQucHJvZHVjdElkLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmdvbGRUeXBlSWQudG91Y2hlZCA9IHRydWU7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFVuaXRJZC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGF0ZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeU5vdGUudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICB2YWxpZDogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLmltcG9ydEZyb21GYWN0b3J5RWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgLi4uSU1QT1JUX0ZST01fRkFDVE9SWV9FRElULFxyXG4gICAgLi4uSU1QT1JUX0ZST01fRkFDVE9SWV9ERVRBSUxfRURJVCxcclxuICB9O1xyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMgPSBbXTtcclxuICBsZXQgc3RhdGVOZXcgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRGcm9tRmFjdG9yeUxpc3QgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUxpc3QgPSB7IC4uLnN0YXRlLmltcG9ydEZyb21GYWN0b3J5TGlzdCwgd2FpdGluZzogdHJ1ZSB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUxpc3Q6IGltcG9ydEZyb21GYWN0b3J5TGlzdCxcclxuICB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGltcG9ydEZyb21GYWN0b3J5TGlzdFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qIGxldCBpbXBvcnRGcm9tRmFjdG9yeXMgPSBbXTtcclxuICBsZXQgZGF0YSA9IGFjdGlvbi5yZXNwb25zZS5kYXRhO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeXMucHVzaCh7XHJcbiAgICAgIGtleToga2V5LFxyXG4gICAgICBpZDoga2V5LFxyXG4gICAgICBuYW1lOiBkYXRhW2tleV0ubmFtZSxcclxuICAgICAgZW1wbG95ZWVJZDogZGF0YVtrZXldLmVtcGxveWVlSWQsXHJcbiAgICAgIHByb2R1Y3RJZDogZGF0YVtrZXldLnByb2R1Y3RJZCxcclxuICAgICAgZ29sZFR5cGVJZDogZGF0YVtrZXldLmdvbGRUeXBlSWQsXHJcbiAgICAgIGdvbGRVbml0SWQ6IGRhdGFba2V5XS5nb2xkVW5pdElkLFxyXG4gICAgICB3ZWlnaHQ6IGRhdGFba2V5XS53ZWlnaHQsXHJcbiAgICAgIHF1YW50aXR5OiBkYXRhW2tleV0ucXVhbnRpdHksXHJcbiAgICAgIGlucHV0RGF0ZTogZGF0YVtrZXldLmlucHV0RGF0ZSxcclxuICAgICAgZGVzY3JpcHRpb246IGRhdGFba2V5XS5kZXNjcmlwdGlvbixcclxuICAgICAgaW1hZ2U6IGRhdGFba2V5XS5pbWFnZSxcclxuICAgIH0pO1xyXG4gIH0gKi9cclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlMaXN0ID0ge1xyXG4gICAgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlMaXN0LFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlzOiBhY3Rpb24ucmVzcG9uc2UuZGF0YSxcclxuICAgIHdhaXRpbmc6IGZhbHNlLFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBudWxsLCAgaW1wb3J0RnJvbUZhY3RvcnlMaXN0OiBpbXBvcnRGcm9tRmFjdG9yeUxpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5TGlzdDogaW1wb3J0RnJvbUZhY3RvcnlMaXN0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlFcnJvciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gaW1wb3J0RnJvbUZhY3RvcnlMaXN0ID0geyAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUxpc3QsIC4uLmltcG9ydEZyb21GYWN0b3J5TGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBpbXBvcnRGcm9tRmFjdG9yeUxpc3Q6IGltcG9ydEZyb21GYWN0b3J5TGlzdCB9KTtcclxuICBpZiAoYWN0aW9uLmNhbGxlciA9PT0gYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9MSVNUKSB7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUxpc3Qud2FpdGluZyA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQud2FpdGluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0RnJvbUZhY3RvcnlFcnJvckhhbmRsZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGltcG9ydEZyb21GYWN0b3J5TGlzdCA9IHsgLi4uc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnlMaXN0LCAuLi5pbXBvcnRGcm9tRmFjdG9yeUxpc3QgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgaW1wb3J0RnJvbUZhY3RvcnlMaXN0OiBpbXBvcnRGcm9tRmFjdG9yeUxpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBleHBvcnRUb0ZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoIWFjdGlvbi5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0ge1xyXG4gICAgICAuLi5JTVBPUlRfRlJPTV9GQUNUT1JZX0VESVQsXHJcbiAgICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgICB9O1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGV0YWlscyA9IFtdO1xyXG4gICAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBzdGF0ZU5ldztcclxuICB9XHJcbiAgLy8gbGV0IGVtcGxveWVlSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtcGxveWVlSWRcIik7XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RWRpdCA9IHtcclxuICAgIC8vIGlkOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS5pZCxcclxuICAgIHZlcnNpb246IGFjdGlvbi5yZXNwb25zZS5kYXRhLnZlcnNpb24sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLmNvZGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlSWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLnJlY2VpdmVySWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeURhdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLmV4cG9ydFRvRmFjdG9yeURhdGUsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeU5vdGU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5yZXNwb25zZS5kYXRhLm5vdGUgPyBhY3Rpb24ucmVzcG9uc2UuZGF0YS5ub3RlIDogXCJcIixcclxuICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC4uLklNUE9SVF9GUk9NX0ZBQ1RPUllfREVUQUlMX0VESVQsXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzID1cclxuICAgIGFjdGlvbi5yZXNwb25zZURldGFpbExpc3QuZGF0YTtcclxuICAvLyBVcGRhdGUgV2VpZ2h0VG90YWwgYW5kIFF1YW50aXR5VG90YWwuXHJcbiAgbGV0IHdlaWdodFRvdGFsID0gMDtcclxuICBsZXQgcXVhbnRpdHlUb3RhbCA9IDA7XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5RGV0YWlscy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB3ZWlnaHRUb3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0ud2VpZ2h0KTtcclxuICAgIHF1YW50aXR5VG90YWwgKz0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgfSk7XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LndlaWdodFRvdGFsID0gd2VpZ2h0VG90YWw7XHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnF1YW50aXR5VG90YWwgPSBxdWFudGl0eVRvdGFsO1xyXG5cclxuICBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAuLi5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBpbXBvcnRGcm9tRmFjdG9yeUVkaXQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5RWRpdDogaW1wb3J0RnJvbUZhY3RvcnlFZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLyogY29uc29sZS5sb2coXHJcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gSW1wb3J0RnJvbUZhY3RvcnkgaW5pdGlhbGl6ZSAuLi4uLlwiXHJcbiAgKTsgKi9cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfQ09ERV9GT0NVUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5Q29kZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0NPREVfQ0hBTkdFRDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5Q29kZUNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRU1QTE9ZRUVfSURfRk9DVVM6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUVtcGxveWVlSWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9FTVBMT1lFRV9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9QUk9EVUNUX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRGb2N1cyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9QUk9EVUNUX0lEX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeVByb2R1Y3RJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfR09MRF9UWVBFX0lEX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfR09MRF9UWVBFX0lEX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0dPTERfVU5JVF9JRF9GT0NVUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0dPTERfVU5JVF9JRF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlHb2xkVW5pdElkQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9XRUlHSFRfRk9DVVM6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodEZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1dFSUdIVF9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1FVQU5USVRZX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1FVQU5USVRZX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Q2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9EQVRFX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlEYXRlRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfREFURV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlEYXRlQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9OT1RFX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlOb3RlRm9jdXMoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfTk9URV9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlOb3RlQ2hhbmdlZChzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfQ1JFQVRFOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlDcmVhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfQUREOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlBZGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfQUREX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUFkZFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1VQREFURV9ERVRBSUw6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURldGFpbChzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLklNUE9SVF9GUk9NX0ZBQ1RPUllfRURJVDpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5RWRpdEFjdGlvbihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9FRElUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiBpbXBvcnRGcm9tRmFjdG9yeUVkaXRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0RFVEFJTF9FRElUOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxFZGl0QWN0aW9uKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1VQREFURTpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5VXBkYXRlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX1VQREFURV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9MSVNUOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlMaXN0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIGltcG9ydEZyb21GYWN0b3J5TGlzdFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5JTVBPUlRfRlJPTV9GQUNUT1JZX0VSUk9SOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU1QT1JUX0ZST01fRkFDVE9SWV9FUlJPUl9IQU5ETEVEOlxyXG4gICAgICByZXR1cm4gaW1wb3J0RnJvbUZhY3RvcnlFcnJvckhhbmRsZWQoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgLy8gRXhwb3J0VG9GYWN0b3J5LlxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9HRVRfQllfQ09ERV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gZXhwb3J0VG9GYWN0b3J5R2V0QnlDb2RlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBwdXQgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2V4cG9ydFRvRmFjdG9yeVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBleHBvcnRUb0ZhY3RvcnlBZGQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBleHBvcnRUb0ZhY3RvcnlBZGQgLi4uXCIpO1xyXG4gICAgaWYgKGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBzZXJ2aWNlLmV4cG9ydFRvRmFjdG9yeUFkZChhY3Rpb24uZXhwb3J0VG9GYWN0b3J5KTtcclxuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuZXhwb3J0VG9GYWN0b3J5QWRkU3VjY2VzcygpKTtcclxuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlMaXN0KCkpO1xyXG4gICAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlFcnJvcihcclxuICAgICAgICAgICAgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfQURELFxyXG4gICAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgeWllbGQgcHV0KFxyXG4gICAgICBhY3Rpb25zLmV4cG9ydFRvRmFjdG9yeUVycm9yKGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0FERCwgZXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBleHBvcnRUb0ZhY3RvcnlFZGl0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuZXhwb3J0VG9GYWN0b3J5RGV0YWlsTGlzdChcclxuICAgICAgYWN0aW9uLmV4cG9ydFRvRmFjdG9yeS5pZFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlFZGl0U3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgIGFjdGlvbnMuZXhwb3J0VG9GYWN0b3J5RXJyb3IoXHJcbiAgICAgICAgICBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9FRElULFxyXG4gICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dChcclxuICAgICAgYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlFcnJvcihhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9FRElULCBlcnJvcilcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGV4cG9ydFRvRmFjdG9yeVVwZGF0ZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgdG9rZW4gPSB5aWVsZCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGFjdGlvbi5leHBvcnRUb0ZhY3RvcnlFZGl0VmFsaWQpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBzZXJ2aWNlLmV4cG9ydFRvRmFjdG9yeVVwZGF0ZShcclxuICAgICAgICBhY3Rpb24uaWQsXHJcbiAgICAgICAgYWN0aW9uLmV4cG9ydFRvRmFjdG9yeVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlVcGRhdGVTdWNjZXNzKCkpO1xyXG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmV4cG9ydFRvRmFjdG9yeUxpc3QoKSk7XHJcbiAgICAgICAgLy95aWVsZCBwdXQoYWN0aW9ucy53ZWJTb2NrZXRBZGRNZXNzYWdlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBhY3Rpb25zLmV4cG9ydFRvRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgICBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9VUERBVEUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB5aWVsZCBwdXQoXHJcbiAgICAgIGFjdGlvbnMuZXhwb3J0VG9GYWN0b3J5RXJyb3IoYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfVVBEQVRFLCBlcnJvcilcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGV4cG9ydFRvRmFjdG9yeURlbGV0ZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBzZXJ2aWNlLmV4cG9ydFRvRmFjdG9yeURlbGV0ZShcclxuICAgICAgYWN0aW9uLmlkLFxyXG4gICAgICBhY3Rpb24udmVyc2lvblxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlEZWxldGVTdWNjZXNzKCkpO1xyXG4gICAgICB5aWVsZCBwdXQoYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlMaXN0KCkpO1xyXG4gICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgIGFjdGlvbnMuZXhwb3J0VG9GYWN0b3J5RXJyb3IoXHJcbiAgICAgICAgICBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9ERUxFVEUsXHJcbiAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgeWllbGQgcHV0KFxyXG4gICAgICBhY3Rpb25zLmV4cG9ydFRvRmFjdG9yeUVycm9yKGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0RFTEVURSwgZXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBleHBvcnRUb0ZhY3RvcnlMaXN0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuZXhwb3J0VG9GYWN0b3J5TGlzdCgpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmV4cG9ydFRvRmFjdG9yeUxpc3RTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICAgIC8veWllbGQgcHV0KGFjdGlvbnMud2ViU29ja2V0QWRkTWVzc2FnZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlFcnJvcihcclxuICAgICAgICAgIGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0xJU1QsXHJcbiAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgeWllbGQgcHV0KFxyXG4gICAgICBhY3Rpb25zLmV4cG9ydFRvRmFjdG9yeUVycm9yKGFjdGlvblR5cGVzLkVYUE9SVF9UT19GQUNUT1JZX0xJU1QsIGVycm9yKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZXhwb3J0VG9GYWN0b3J5R2V0QnlDb2RlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlcnZpY2UuZXhwb3J0VG9GYWN0b3J5R2V0QnlDb2RlKGFjdGlvbi5jb2RlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlHZXRCeUNvZGVTdWNjZXNzKHJlc3BvbnNlLCBudWxsKSk7XHJcbiAgICAgICAgLy95aWVsZCBwdXQoYWN0aW9ucy53ZWJTb2NrZXRBZGRNZXNzYWdlKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBEZXRhaWwgbGlzdC5cclxuICAgICAgICBjb25zdCByZXNwb25zZURldGFpbExpc3QgPSB5aWVsZCBzZXJ2aWNlLmV4cG9ydFRvRmFjdG9yeURldGFpbExpc3QoXHJcbiAgICAgICAgICByZXNwb25zZS5kYXRhLmlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocmVzcG9uc2VEZXRhaWxMaXN0ICYmIHJlc3BvbnNlRGV0YWlsTGlzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBhY3Rpb25zLmV4cG9ydFRvRmFjdG9yeUdldEJ5Q29kZVN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2VEZXRhaWxMaXN0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvcihcclxuICAgICAgICAgICAgICBhY3Rpb25UeXBlcy5FWFBPUlRfVE9fRkFDVE9SWV9HRVRfQllfQ09ERSxcclxuICAgICAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3lpZWxkIHB1dChhY3Rpb25zLndlYlNvY2tldEFkZE1lc3NhZ2UocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVycm9yKFxyXG4gICAgICAgICAgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfR0VUX0JZX0NPREUsXHJcbiAgICAgICAgICByZXNwb25zZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgeWllbGQgcHV0KFxyXG4gICAgICBhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5RXJyb3IoXHJcbiAgICAgICAgYWN0aW9uVHlwZXMuRVhQT1JUX1RPX0ZBQ1RPUllfR0VUX0JZX0NPREUsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==