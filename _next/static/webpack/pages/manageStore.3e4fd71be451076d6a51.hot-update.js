webpackHotUpdate_N_E("pages/manageStore",{

/***/ "./src/components/ExportToFactory/ExportToFactoryEdit.js":
/*!***************************************************************!*\
  !*** ./src/components/ExportToFactory/ExportToFactoryEdit.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../UI/InputNumber/NumberFormatCustom */ "./src/components/UI/InputNumber/NumberFormatCustom.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");









var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 //import Button from '../UI/Button/Button';


 //import { withStyles } from '@material-ui/core/styles';






 // import NumberFormat from "react-number-format";
//import InputFile from '../UI/InputFile/InputFile';









var ViLocalizedUtils = /*#__PURE__*/function (_DateFnsUtils) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ViLocalizedUtils, _DateFnsUtils);

  var _super = _createSuper(ViLocalizedUtils);

  function ViLocalizedUtils() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ViLocalizedUtils);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ViLocalizedUtils, [{
    key: "getDatePickerHeaderText",
    value: function getDatePickerHeaderText(date) {
      return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_17__["default"])(date, "dd/MM/yyyy", {
        locale: this.locale
      });
    }
  }]);

  return ViLocalizedUtils;
}(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"]);

var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__["default"]
};
var localeUtilsMap = {
  en: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"],
  vi: ViLocalizedUtils
};
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    detail: {
      width: "100%",
      height: "300px",
      backgroundColor: theme.palette.background.paper
    },
    option: {
      width: "auto",
      "& input": {
        width: "auto",
        background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["red"]
      }
    },
    popper: {
      width: "fit-content"
    },
    textField: {
      width: "auto",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  };
});
/************************************************** Constructor */

var ExportToFactoryEdit = function ExportToFactoryEdit(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // const handleChange = (event) => {
  //   setProduct(event.target.value);
  // };


  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var exportToFactoryCode = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập mã",
      onFocus: props.exportToFactoryCodeFocusHandler,
      autoFocus: props.exportToFactoryCode.autoFocus
    },
    validation: {
      required: true,
      minLength: 1
    }
  };
  var employeeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.exportToFactoryEmployeeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var productId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.exportToFactoryProductIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var goldTypeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.exportToFactoryGoldTypeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var exportToFactoryWeight = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập trọng lượng",
      onFocus: props.exportToFactoryWeightFocusHandler,
      autoFocus: props.exportToFactoryWeight.autoFocus
    },
    validation: {
      required: true,
      minValue: 0.1,
      maxValue: 999999999.9
    }
  };
  var goldUnitId = {
    elementConfig: {
      type: "select",
      placeholder: "Đơn vị",
      onFocus: props.exportToFactoryGoldUnitIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var exportToFactoryQuantity = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập số lượng",
      onFocus: props.exportToFactoryQuantityFocusHandler,
      autoFocus: props.exportToFactoryQuantity.autoFocus
    },
    validation: {
      required: true,
      minValue: 1,
      maxValue: 999
    }
  };
  var exportToFactoryDate = {
    elementConfig: {
      type: "text",
      placeholder: "Ngày xuất",
      onFocus: props.exportToFactoryDateFocusHandler,
      autoFocus: props.exportToFactoryDate.autoFocus
    },
    validation: {
      required: true
    }
  };
  var exportToFactoryNote = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập ghi chú",
      onFocus: props.exportToFactoryNoteFocusHandler,
      autoFocus: props.exportToFactoryNote.autoFocus
    },
    validation: {}
  };

  var renderDept = function renderDept(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.deptList.depts.find(function (dept) {
      return dept.id == params.group;
    }).description), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).description), params.children];
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    // productName.
    var product = props.productList.products.find(function (item) {
      return item.id == props.exportToFactoryDetails[index].productId;
    });

    if (!product) {
      props.exportToFactoryDetails[index].productName = "";
    } else {
      props.exportToFactoryDetails[index].productName = product.name;
    } // goldTypeName.


    var goldType = props.goldTypeList.goldTypes.find(function (item) {
      return item.id == props.exportToFactoryDetails[index].goldTypeId;
    });

    if (!goldType) {
      props.exportToFactoryDetails[index].goldTypeName = "";
    } else {
      props.exportToFactoryDetails[index].goldTypeName = goldType.name;
    } // goldUnitName.


    var goldUnit = props.goldUnitList.goldUnits.find(function (item) {
      return item.id == props.exportToFactoryDetails[index].goldUnitId;
    });

    if (!goldUnit) {
      props.exportToFactoryDetails[index].goldUnitName = "";
    } else {
      props.exportToFactoryDetails[index].goldUnitName = goldUnit.name;
    } // return.


    return props.exportToFactoryDetails[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.exportToFactoryDetailEdit(event, event.rowData);
  };

  var getOptionSelected = function getOptionSelected(option, value) {
    /* if (typeof value === "undefined") {
      value = null;
    } */
    if (!option || !value) {
      return false;
    }

    var optionId = option.id;

    if (!optionId) {
      optionId = option;
    }

    var valueId = value.id;

    if (!valueId) {
      valueId = value;
    }

    return optionId === valueId;
  };
  /************************************************** render */


  return __jsx("form", {
    onSubmit: props.exportToFactorySaveHandler
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    required: true,
    error: !props.exportToFactoryCode.valid & props.exportToFactoryCode.touched ? true : false // helperText={ !props.exportToFactoryCode.valid ? "Vui lòng nhập vào!" : "Perfect!" }
    ,
    inputProps: {
      name: "exportToFactoryCode",
      id: "exportToFactoryCode"
    },
    label: "M\xE3",
    margin: "normal"
  }, exportToFactoryCode.elementConfig, {
    value: props.exportToFactoryCode.value,
    onChange: function onChange(event) {
      return props.exportToFactoryCodeChanged(event, exportToFactoryCode.validation);
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "employeeId-select",
    options: props.employeeList.employees,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.employeeId.value // defaultValue={props.employeeList.employees.find(
    //   (employee) => employee.id == props.employeeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.exportToFactoryEmployeeIdChanged(event, selectedItem, employeeId.validation);
    },
    groupBy: function groupBy(option) {
      return option.deptId;
    },
    renderGroup: renderDept,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var employee = props.employeeList.employees.find(function (employee) {
        return employee.id == option;
      });

      if (!employee) {
        return "";
      } else {
        return employee.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "employeeId-option",
          id: "employeeId-option"
        }),
        style: {
          minWidth: 200
        },
        required: true,
        label: "Xu\u1EA5t cho",
        margin: "normal",
        error: !props.employeeId.valid & props.employeeId.touched ? true : false
      }, employeeId.elementConfig));
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["MuiPickersUtilsProvider"], {
    utils: localeUtilsMap["vi"],
    locale: localeMap["vi"]
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["KeyboardDatePicker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    clearable: true,
    required: true,
    error: !props.exportToFactoryDate.valid & props.exportToFactoryDate.touched ? true : false,
    name: "exportToFactoryDate",
    id: "exportToFactoryDate",
    format: "dd/MM/yyyy",
    todayLabel: "H\xF4m nay",
    cancelLabel: "H\u1EE7y",
    clearLabel: "X\xF3a",
    okLabel: "Ch\u1ECDn",
    label: "Ng\xE0y nh\u1EADp",
    margin: "normal",
    value: props.exportToFactoryDate.value
  }, exportToFactoryDate.elementConfig, {
    onChange: function onChange(date) {
      return props.exportToFactoryDateChanged({
        target: {
          value: date
        }
      }, exportToFactoryDate.validation);
    }
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "exportToFactoryWeightTotal",
    id: "exportToFactoryWeightTotal",
    label: "T\u1ED5ng tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.weightTotal
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "exportToFactoryQuantityTotal",
    id: "exportToFactoryQuantityTotal",
    label: "T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.quantityTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextareaAutosize"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    rowsMin: 4,
    className: classes.textField,
    error: !props.exportToFactoryNote.valid & props.exportToFactoryNote.touched ? "true" : "false",
    name: "exportToFactoryNote",
    id: "exportToFactoryNote",
    label: "Ghi ch\xFA",
    margin: "normal"
  }, exportToFactoryNote.elementConfig, {
    value: props.exportToFactoryNote.value,
    onChange: function onChange(event) {
      return props.exportToFactoryNoteChanged(event, exportToFactoryNote.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "productId-select",
    options: props.productList.products,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.productId.value // defaultValue={props.productList.products.find(
    //   (product) => product.id == props.productId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.exportToFactoryProductIdChanged(event, selectedItem, productId.validation);
    },
    groupBy: function groupBy(option) {
      return option.productTypeId;
    },
    renderGroup: renderProductType,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var product = props.productList.products.find(function (product) {
        return product.id == option;
      });

      if (!product) {
        return "";
      } else {
        return product.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "productId-option",
          id: "productId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "S\u1EA3n ph\u1EA9m",
        margin: "normal",
        error: !props.productId.valid & props.productId.touched ? true : false
      }, productId.elementConfig));
    }
  }), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "goldTypeId-select",
    options: props.goldTypeList.goldTypes,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.goldTypeId.value // defaultValue={props.goldTypeList.goldTypes.find(
    //   (goldType) => goldType.id == props.goldTypeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.exportToFactoryGoldTypeIdChanged(event, selectedItem, goldTypeId.validation);
    },
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var goldType = props.goldTypeList.goldTypes.find(function (goldType) {
        return goldType.id == option;
      });

      if (!goldType) {
        return "";
      } else {
        return goldType.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "goldTypeId-option",
          id: "goldTypeId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "Lo\u1EA1i v\xE0ng",
        margin: "normal",
        error: !props.goldTypeId.valid & props.goldTypeId.touched ? true : false
      }, goldTypeId.elementConfig));
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.exportToFactoryWeight.valid & props.exportToFactoryWeight.touched ? true : false,
    name: "exportToFactoryWeight",
    id: "exportToFactoryWeight",
    inputProps: {
      decimalScale: 1
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "Tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.exportToFactoryWeight.value
  }, exportToFactoryWeight.elementConfig, {
    onChange: function onChange(event) {
      return props.exportToFactoryWeightChanged(event, exportToFactoryWeight.validation);
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
    margin: "normal",
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    htmlFor: "goldUnit-select"
  }, "\u0110\u01A1n v\u1ECB"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "native": true,
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false,
    inputProps: {
      name: "goldUnitId",
      id: "goldUnit-select"
    },
    open: open
  }, goldUnitId.elementConfig, {
    onClose: handleClose,
    onOpen: handleOpen,
    value: props.goldUnitId.value,
    onChange: function onChange(event) {
      return props.exportToFactoryGoldUnitIdChanged(event, goldUnitId.validation);
    }
  }), __jsx("option", {
    key: "-1",
    "aria-label": "None",
    value: ""
  }), props.goldUnitList.goldUnits.map(function (goldUnit, index) {
    return __jsx("option", {
      key: goldUnit.id + index,
      value: goldUnit.id
    }, goldUnit.name);
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.exportToFactoryQuantity.valid & props.exportToFactoryQuantity.touched ? true : false,
    name: "exportToFactoryQuantity",
    id: "exportToFactoryQuantity",
    inputProps: {
      decimalScale: 0
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "S\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.exportToFactoryQuantity.value
  }, exportToFactoryQuantity.elementConfig, {
    onChange: function onChange(event) {
      return props.exportToFactoryQuantityChanged(event, exportToFactoryQuantity.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.exportToFactoryAddDetailHandler
  }, "Th\xEAm m\u1EDBi")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx("div", {
    className: classes.detail
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
    rowCount: props.exportToFactoryDetails.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Sản phẩm",
      dataKey: "productName"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Loại vàng",
      dataKey: "goldTypeName"
    }, {
      width: 90,
      label: "Trọng lượng",
      dataKey: "weight",
      numeric: true
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Đơn vị",
      dataKey: "goldUnitName"
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantity",
      numeric: true
    }]
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.exportToFactoryCreateHandler
  }, "T\u1EA1o m\u1EDBi"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default.a, null),
    type: "submit"
  }, "L\u01B0u"))));
};

_s(ExportToFactoryEdit, "TsAExMDA6yuxA58uE+YzDgG8Jdg=", false, function () {
  return [useStyles];
});

_c = ExportToFactoryEdit;
/* harmony default export */ __webpack_exports__["default"] = (ExportToFactoryEdit);

var _c;

$RefreshReg$(_c, "ExportToFactoryEdit");

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

/***/ "./src/components/ImportFromFactory/ImportFromFactoryEdit.js":
/*!*******************************************************************!*\
  !*** ./src/components/ImportFromFactory/ImportFromFactoryEdit.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../UI/InputNumber/NumberFormatCustom */ "./src/components/UI/InputNumber/NumberFormatCustom.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");









var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 //import Button from '../UI/Button/Button';


 //import { withStyles } from '@material-ui/core/styles';






 // import NumberFormat from "react-number-format";
//import InputFile from '../UI/InputFile/InputFile';









var ViLocalizedUtils = /*#__PURE__*/function (_DateFnsUtils) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ViLocalizedUtils, _DateFnsUtils);

  var _super = _createSuper(ViLocalizedUtils);

  function ViLocalizedUtils() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ViLocalizedUtils);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ViLocalizedUtils, [{
    key: "getDatePickerHeaderText",
    value: function getDatePickerHeaderText(date) {
      return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_17__["default"])(date, "dd/MM/yyyy", {
        locale: this.locale
      });
    }
  }]);

  return ViLocalizedUtils;
}(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"]);

var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__["default"]
};
var localeUtilsMap = {
  en: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"],
  vi: ViLocalizedUtils
};
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    detail: {
      width: "100%",
      height: "300px",
      backgroundColor: theme.palette.background.paper
    },
    option: {
      width: "auto",
      "& input": {
        width: "auto",
        background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["red"]
      }
    },
    popper: {
      width: "fit-content"
    },
    textField: {
      width: "auto",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  };
});
/************************************************** Constructor */

var ImportFromFactoryEdit = function ImportFromFactoryEdit(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // const handleChange = (event) => {
  //   setProduct(event.target.value);
  // };


  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var importFromFactoryCode = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập mã",
      onFocus: props.importFromFactoryCodeFocusHandler,
      autoFocus: props.importFromFactoryCode.autoFocus
    },
    validation: {
      required: true,
      minLength: 1
    }
  };
  var employeeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.importFromFactoryEmployeeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var productId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.importFromFactoryProductIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var goldTypeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.importFromFactoryGoldTypeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var importFromFactoryWeight = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập trọng lượng",
      onFocus: props.importFromFactoryWeightFocusHandler,
      autoFocus: props.importFromFactoryWeight.autoFocus
    },
    validation: {
      required: true,
      minValue: 0.1,
      maxValue: 999999999.9
    }
  };
  var goldUnitId = {
    elementConfig: {
      type: "select",
      placeholder: "Đơn vị",
      onFocus: props.importFromFactoryGoldUnitIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var importFromFactoryQuantity = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập số lượng",
      onFocus: props.importFromFactoryQuantityFocusHandler,
      autoFocus: props.importFromFactoryQuantity.autoFocus
    },
    validation: {
      required: true,
      minValue: 1,
      maxValue: 999
    }
  };
  var importFromFactoryDate = {
    elementConfig: {
      type: "text",
      placeholder: "Ngày nhập",
      onFocus: props.importFromFactoryDateFocusHandler,
      autoFocus: props.importFromFactoryDate.autoFocus
    },
    validation: {
      required: true
    }
  };
  var importFromFactoryNote = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập ghi chú",
      onFocus: props.importFromFactoryNoteFocusHandler,
      autoFocus: props.importFromFactoryNote.autoFocus
    },
    validation: {}
  };

  var renderDept = function renderDept(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.deptList.depts.find(function (dept) {
      return dept.id == params.group;
    }).description), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).description), params.children];
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    // productName.
    var product = props.productList.products.find(function (item) {
      return item.id == props.importFromFactoryDetails[index].productId;
    });

    if (!product) {
      props.importFromFactoryDetails[index].productName = "";
    } else {
      props.importFromFactoryDetails[index].productName = product.name;
    } // goldTypeName.


    var goldType = props.goldTypeList.goldTypes.find(function (item) {
      return item.id == props.importFromFactoryDetails[index].goldTypeId;
    });

    if (!goldType) {
      props.importFromFactoryDetails[index].goldTypeName = "";
    } else {
      props.importFromFactoryDetails[index].goldTypeName = goldType.name;
    } // goldUnitName.


    var goldUnit = props.goldUnitList.goldUnits.find(function (item) {
      return item.id == props.importFromFactoryDetails[index].goldUnitId;
    });

    if (!goldUnit) {
      props.importFromFactoryDetails[index].goldUnitName = "";
    } else {
      props.importFromFactoryDetails[index].goldUnitName = goldUnit.name;
    } // return.


    return props.importFromFactoryDetails[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.importFromFactoryDetailEdit(event, event.rowData);
  };

  var getOptionSelected = function getOptionSelected(option, value) {
    /* if (typeof value === "undefined") {
      value = null;
    } */
    if (!option || !value) {
      return false;
    }

    var optionId = option.id;

    if (!optionId) {
      optionId = option;
    }

    var valueId = value.id;

    if (!valueId) {
      valueId = value;
    }

    return optionId === valueId;
  };
  /************************************************** render */


  return __jsx("form", {
    onSubmit: props.importFromFactorySaveHandler
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    required: true,
    error: !props.importFromFactoryCode.valid & props.importFromFactoryCode.touched ? true : false // helperText={ !props.importFromFactoryCode.valid ? "Vui lòng nhập vào!" : "Perfect!" }
    ,
    inputProps: {
      name: "importFromFactoryCode",
      id: "importFromFactoryCode"
    },
    label: "M\xE3",
    margin: "normal"
  }, importFromFactoryCode.elementConfig, {
    value: props.importFromFactoryCode.value,
    onChange: function onChange(event) {
      return props.importFromFactoryCodeChanged(event, importFromFactoryCode.validation);
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "employeeId-select",
    options: props.employeeList.employees,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.employeeId.value // defaultValue={props.employeeList.employees.find(
    //   (employee) => employee.id == props.employeeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.importFromFactoryEmployeeIdChanged(event, selectedItem, employeeId.validation);
    },
    groupBy: function groupBy(option) {
      return option.deptId;
    },
    renderGroup: renderDept,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var employee = props.employeeList.employees.find(function (employee) {
        return employee.id == option;
      });

      if (!employee) {
        return "";
      } else {
        return employee.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "employeeId-option",
          id: "employeeId-option"
        }),
        style: {
          minWidth: 200
        },
        required: true,
        label: "Nh\u1EADp t\u1EEB",
        margin: "normal",
        error: !props.employeeId.valid & props.employeeId.touched ? true : false
      }, employeeId.elementConfig));
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["MuiPickersUtilsProvider"], {
    utils: localeUtilsMap["vi"],
    locale: localeMap["vi"]
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["KeyboardDatePicker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    clearable: true,
    required: true,
    error: !props.importFromFactoryDate.valid & props.importFromFactoryDate.touched ? true : false,
    name: "importFromFactoryDate",
    id: "importFromFactoryDate",
    format: "dd/MM/yyyy",
    todayLabel: "H\xF4m nay",
    cancelLabel: "H\u1EE7y",
    clearLabel: "X\xF3a",
    okLabel: "Ch\u1ECDn",
    label: "Ng\xE0y nh\u1EADp",
    margin: "normal",
    value: props.importFromFactoryDate.value
  }, importFromFactoryDate.elementConfig, {
    onChange: function onChange(date) {
      return props.importFromFactoryDateChanged({
        target: {
          value: date
        }
      }, importFromFactoryDate.validation);
    }
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "importFromFactoryWeightTotal",
    id: "importFromFactoryWeightTotal",
    label: "T\u1ED5ng tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.weightTotal
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "importFromFactoryQuantityTotal",
    id: "importFromFactoryQuantityTotal",
    label: "T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.quantityTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextareaAutosize"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    rowsMin: 4,
    className: classes.textField,
    error: !props.importFromFactoryNote.valid & props.importFromFactoryNote.touched ? "true" : "false",
    name: "importFromFactoryNote",
    id: "importFromFactoryNote",
    label: "Ghi ch\xFA",
    margin: "normal"
  }, importFromFactoryNote.elementConfig, {
    value: props.importFromFactoryNote.value,
    onChange: function onChange(event) {
      return props.importFromFactoryNoteChanged(event, importFromFactoryNote.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "productId-select",
    options: props.productList.products,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.productId.value // defaultValue={props.productList.products.find(
    //   (product) => product.id == props.productId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.importFromFactoryProductIdChanged(event, selectedItem, productId.validation);
    },
    groupBy: function groupBy(option) {
      return option.productTypeId;
    },
    renderGroup: renderProductType,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var product = props.productList.products.find(function (product) {
        return product.id == option;
      });

      if (!product) {
        return "";
      } else {
        return product.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "productId-option",
          id: "productId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "S\u1EA3n ph\u1EA9m",
        margin: "normal",
        error: !props.productId.valid & props.productId.touched ? true : false
      }, productId.elementConfig));
    }
  }), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "goldTypeId-select",
    options: props.goldTypeList.goldTypes,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.goldTypeId.value // defaultValue={props.goldTypeList.goldTypes.find(
    //   (goldType) => goldType.id == props.goldTypeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.importFromFactoryGoldTypeIdChanged(event, selectedItem, goldTypeId.validation);
    },
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var goldType = props.goldTypeList.goldTypes.find(function (goldType) {
        return goldType.id == option;
      });

      if (!goldType) {
        return "";
      } else {
        return goldType.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "goldTypeId-option",
          id: "goldTypeId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "Lo\u1EA1i v\xE0ng",
        margin: "normal",
        error: !props.goldTypeId.valid & props.goldTypeId.touched ? true : false
      }, goldTypeId.elementConfig));
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.importFromFactoryWeight.valid & props.importFromFactoryWeight.touched ? true : false,
    name: "importFromFactoryWeight",
    id: "importFromFactoryWeight",
    inputProps: {
      decimalScale: 1
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "Tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.importFromFactoryWeight.value
  }, importFromFactoryWeight.elementConfig, {
    onChange: function onChange(event) {
      return props.importFromFactoryWeightChanged(event, importFromFactoryWeight.validation);
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
    margin: "normal",
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    htmlFor: "goldUnit-select"
  }, "\u0110\u01A1n v\u1ECB"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "native": true,
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false,
    inputProps: {
      name: "goldUnitId",
      id: "goldUnit-select"
    },
    open: open
  }, goldUnitId.elementConfig, {
    onClose: handleClose,
    onOpen: handleOpen,
    value: props.goldUnitId.value,
    onChange: function onChange(event) {
      return props.importFromFactoryGoldUnitIdChanged(event, goldUnitId.validation);
    }
  }), __jsx("option", {
    key: "-1",
    "aria-label": "None",
    value: ""
  }), props.goldUnitList.goldUnits.map(function (goldUnit, index) {
    return __jsx("option", {
      key: goldUnit.id + index,
      value: goldUnit.id
    }, goldUnit.name);
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.importFromFactoryQuantity.valid & props.importFromFactoryQuantity.touched ? true : false,
    name: "importFromFactoryQuantity",
    id: "importFromFactoryQuantity",
    inputProps: {
      decimalScale: 0
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "S\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.importFromFactoryQuantity.value
  }, importFromFactoryQuantity.elementConfig, {
    onChange: function onChange(event) {
      return props.importFromFactoryQuantityChanged(event, importFromFactoryQuantity.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.importFromFactoryAddDetailHandler
  }, "Th\xEAm m\u1EDBi")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx("div", {
    className: classes.detail
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
    rowCount: props.importFromFactoryDetails.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Sản phẩm",
      dataKey: "productName"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Loại vàng",
      dataKey: "goldTypeName"
    }, {
      width: 90,
      label: "Trọng lượng",
      dataKey: "weight",
      numeric: true
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Đơn vị",
      dataKey: "goldUnitName"
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantity",
      numeric: true
    }]
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.importFromFactoryCreateHandler
  }, "T\u1EA1o m\u1EDBi"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default.a, null),
    type: "submit"
  }, "L\u01B0u"))));
};

_s(ImportFromFactoryEdit, "TsAExMDA6yuxA58uE+YzDgG8Jdg=", false, function () {
  return [useStyles];
});

_c = ImportFromFactoryEdit;
/* harmony default export */ __webpack_exports__["default"] = (ImportFromFactoryEdit);

var _c;

$RefreshReg$(_c, "ImportFromFactoryEdit");

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

/***/ "./src/components/Purchase/PurchaseEdit.js":
/*!*************************************************!*\
  !*** ./src/components/Purchase/PurchaseEdit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../UI/InputNumber/NumberFormatCustom */ "./src/components/UI/InputNumber/NumberFormatCustom.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");









var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 //import Button from '../UI/Button/Button';


 //import { withStyles } from '@material-ui/core/styles';






 // import NumberFormat from "react-number-format";
//import InputFile from '../UI/InputFile/InputFile';









var ViLocalizedUtils = /*#__PURE__*/function (_DateFnsUtils) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ViLocalizedUtils, _DateFnsUtils);

  var _super = _createSuper(ViLocalizedUtils);

  function ViLocalizedUtils() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ViLocalizedUtils);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ViLocalizedUtils, [{
    key: "getDatePickerHeaderText",
    value: function getDatePickerHeaderText(date) {
      return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_17__["default"])(date, "dd/MM/yyyy", {
        locale: this.locale
      });
    }
  }]);

  return ViLocalizedUtils;
}(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"]);

var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__["default"]
};
var localeUtilsMap = {
  en: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"],
  vi: ViLocalizedUtils
};
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    detail: {
      width: "100%",
      height: "300px",
      backgroundColor: theme.palette.background.paper
    },
    option: {
      width: "auto",
      "& input": {
        width: "auto",
        background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["red"]
      }
    },
    popper: {
      width: "fit-content"
    },
    textField: {
      width: "auto",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  };
});
/************************************************** Constructor */

var PurchaseEdit = function PurchaseEdit(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // const handleChange = (event) => {
  //   setProduct(event.target.value);
  // };


  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var purchaseCode = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập mã",
      onFocus: props.purchaseCodeFocusHandler,
      autoFocus: props.purchaseCode.autoFocus
    },
    validation: {
      required: true,
      minLength: 1
    }
  };
  var employeeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.purchaseEmployeeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var productId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.purchaseProductIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var goldTypeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.purchaseGoldTypeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var purchaseWeight = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập trọng lượng",
      onFocus: props.purchaseWeightFocusHandler,
      autoFocus: props.purchaseWeight.autoFocus
    },
    validation: {
      required: true,
      minValue: 0.1,
      maxValue: 999999999.9
    }
  };
  var goldUnitId = {
    elementConfig: {
      type: "select",
      placeholder: "Đơn vị",
      onFocus: props.purchaseGoldUnitIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var purchaseQuantity = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập số lượng",
      onFocus: props.purchaseQuantityFocusHandler,
      autoFocus: props.purchaseQuantity.autoFocus
    },
    validation: {
      required: true,
      minValue: 1,
      maxValue: 999
    }
  };
  var purchaseDate = {
    elementConfig: {
      type: "text",
      placeholder: "Ngày nhập",
      onFocus: props.purchaseDateFocusHandler,
      autoFocus: props.purchaseDate.autoFocus
    },
    validation: {
      required: true
    }
  };
  var purchaseNote = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập ghi chú",
      onFocus: props.purchaseNoteFocusHandler,
      autoFocus: props.purchaseNote.autoFocus
    },
    validation: {}
  };

  var renderDept = function renderDept(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.deptList.depts.find(function (dept) {
      return dept.id == params.group;
    }).description), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).description), params.children];
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    // productName.
    var product = props.productList.products.find(function (item) {
      return item.id == props.purchaseDetails[index].productId;
    });

    if (!product) {
      props.purchaseDetails[index].productName = "";
    } else {
      props.purchaseDetails[index].productName = product.name;
    } // goldTypeName.


    var goldType = props.goldTypeList.goldTypes.find(function (item) {
      return item.id == props.purchaseDetails[index].goldTypeId;
    });

    if (!goldType) {
      props.purchaseDetails[index].goldTypeName = "";
    } else {
      props.purchaseDetails[index].goldTypeName = goldType.name;
    } // goldUnitName.


    var goldUnit = props.goldUnitList.goldUnits.find(function (item) {
      return item.id == props.purchaseDetails[index].goldUnitId;
    });

    if (!goldUnit) {
      props.purchaseDetails[index].goldUnitName = "";
    } else {
      props.purchaseDetails[index].goldUnitName = goldUnit.name;
    } // return.


    return props.purchaseDetails[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.purchaseDetailEdit(event, event.rowData);
  };

  var getOptionSelected = function getOptionSelected(option, value) {
    /* if (typeof value === "undefined") {
      value = null;
    } */
    if (!option || !value) {
      return false;
    }

    var optionId = option.id;

    if (!optionId) {
      optionId = option;
    }

    var valueId = value.id;

    if (!valueId) {
      valueId = value;
    }

    return optionId === valueId;
  };
  /************************************************** render */


  return __jsx("form", {
    onSubmit: props.purchaseSaveHandler
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    required: true,
    error: !props.purchaseCode.valid & props.purchaseCode.touched ? true : false // helperText={ !props.purchaseCode.valid ? "Vui lòng nhập vào!" : "Perfect!" }
    ,
    inputProps: {
      name: "purchaseCode",
      id: "purchaseCode"
    },
    label: "M\xE3",
    margin: "normal"
  }, purchaseCode.elementConfig, {
    value: props.purchaseCode.value,
    onChange: function onChange(event) {
      return props.purchaseCodeChanged(event, purchaseCode.validation);
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "employeeId-select",
    options: props.employeeList.employees,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.employeeId.value // defaultValue={props.employeeList.employees.find(
    //   (employee) => employee.id == props.employeeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.purchaseEmployeeIdChanged(event, selectedItem, employeeId.validation);
    },
    groupBy: function groupBy(option) {
      return option.deptId;
    },
    renderGroup: renderDept,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var employee = props.employeeList.employees.find(function (employee) {
        return employee.id == option;
      });

      if (!employee) {
        return "";
      } else {
        return employee.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "employeeId-option",
          id: "employeeId-option"
        }),
        style: {
          minWidth: 200
        },
        required: true,
        label: "Ng\u01B0\u1EDDi nh\u1EADn",
        margin: "normal",
        error: !props.employeeId.valid & props.employeeId.touched ? true : false
      }, employeeId.elementConfig));
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["MuiPickersUtilsProvider"], {
    utils: localeUtilsMap["vi"],
    locale: localeMap["vi"]
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["KeyboardDatePicker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    clearable: true,
    required: true,
    error: !props.purchaseDate.valid & props.purchaseDate.touched ? true : false,
    name: "purchaseDate",
    id: "purchaseDate",
    format: "dd/MM/yyyy",
    todayLabel: "H\xF4m nay",
    cancelLabel: "H\u1EE7y",
    clearLabel: "X\xF3a",
    okLabel: "Ch\u1ECDn",
    label: "Ng\xE0y nh\u1EADp",
    margin: "normal",
    value: props.purchaseDate.value
  }, purchaseDate.elementConfig, {
    onChange: function onChange(date) {
      return props.purchaseDateChanged({
        target: {
          value: date
        }
      }, purchaseDate.validation);
    }
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "purchaseWeightTotal",
    id: "purchaseWeightTotal",
    label: "T\u1ED5ng tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.weightTotal
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "purchaseQuantityTotal",
    id: "purchaseQuantityTotal",
    label: "T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.quantityTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextareaAutosize"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    rowsMin: 4,
    className: classes.textField,
    error: !props.purchaseNote.valid & props.purchaseNote.touched ? "true" : "false",
    name: "purchaseNote",
    id: "purchaseNote",
    label: "Ghi ch\xFA",
    margin: "normal"
  }, purchaseNote.elementConfig, {
    value: props.purchaseNote.value,
    onChange: function onChange(event) {
      return props.purchaseNoteChanged(event, purchaseNote.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "productId-select",
    options: props.productList.products,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.productId.value // defaultValue={props.productList.products.find(
    //   (product) => product.id == props.productId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.purchaseProductIdChanged(event, selectedItem, productId.validation);
    },
    groupBy: function groupBy(option) {
      return option.productTypeId;
    },
    renderGroup: renderProductType,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var product = props.productList.products.find(function (product) {
        return product.id == option;
      });

      if (!product) {
        return "";
      } else {
        return product.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "productId-option",
          id: "productId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "S\u1EA3n ph\u1EA9m",
        margin: "normal",
        error: !props.productId.valid & props.productId.touched ? true : false
      }, productId.elementConfig));
    }
  }), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "goldTypeId-select",
    options: props.goldTypeList.goldTypes,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.goldTypeId.value // defaultValue={props.goldTypeList.goldTypes.find(
    //   (goldType) => goldType.id == props.goldTypeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.purchaseGoldTypeIdChanged(event, selectedItem, goldTypeId.validation);
    },
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var goldType = props.goldTypeList.goldTypes.find(function (goldType) {
        return goldType.id == option;
      });

      if (!goldType) {
        return "";
      } else {
        return goldType.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "goldTypeId-option",
          id: "goldTypeId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "Lo\u1EA1i v\xE0ng",
        margin: "normal",
        error: !props.goldTypeId.valid & props.goldTypeId.touched ? true : false
      }, goldTypeId.elementConfig));
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.purchaseWeight.valid & props.purchaseWeight.touched ? true : false,
    name: "purchaseWeight",
    id: "purchaseWeight",
    inputProps: {
      decimalScale: 1
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "Tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.purchaseWeight.value
  }, purchaseWeight.elementConfig, {
    onChange: function onChange(event) {
      return props.purchaseWeightChanged(event, purchaseWeight.validation);
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
    margin: "normal",
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    htmlFor: "goldUnit-select"
  }, "\u0110\u01A1n v\u1ECB"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "native": true,
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false,
    inputProps: {
      name: "goldUnitId",
      id: "goldUnit-select"
    },
    open: open
  }, goldUnitId.elementConfig, {
    onClose: handleClose,
    onOpen: handleOpen,
    value: props.goldUnitId.value,
    onChange: function onChange(event) {
      return props.purchaseGoldUnitIdChanged(event, goldUnitId.validation);
    }
  }), __jsx("option", {
    key: "-1",
    "aria-label": "None",
    value: ""
  }), props.goldUnitList.goldUnits.map(function (goldUnit, index) {
    return __jsx("option", {
      key: goldUnit.id + index,
      value: goldUnit.id
    }, goldUnit.name);
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.purchaseQuantity.valid & props.purchaseQuantity.touched ? true : false,
    name: "purchaseQuantity",
    id: "purchaseQuantity",
    inputProps: {
      decimalScale: 0
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "S\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.purchaseQuantity.value
  }, purchaseQuantity.elementConfig, {
    onChange: function onChange(event) {
      return props.purchaseQuantityChanged(event, purchaseQuantity.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.purchaseAddDetailHandler
  }, "Th\xEAm m\u1EDBi")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx("div", {
    className: classes.detail
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
    rowCount: props.purchaseDetails.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Sản phẩm",
      dataKey: "productName"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Loại vàng",
      dataKey: "goldTypeName"
    }, {
      width: 90,
      label: "Trọng lượng",
      dataKey: "weight",
      numeric: true
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Đơn vị",
      dataKey: "goldUnitName"
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantity",
      numeric: true
    }]
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.purchaseCreateHandler
  }, "T\u1EA1o m\u1EDBi"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default.a, null),
    disabled: !props.purchaseDetails.length > 0,
    type: "submit"
  }, "L\u01B0u"))));
};

_s(PurchaseEdit, "TsAExMDA6yuxA58uE+YzDgG8Jdg=", false, function () {
  return [useStyles];
});

_c = PurchaseEdit;
/* harmony default export */ __webpack_exports__["default"] = (PurchaseEdit);

var _c;

$RefreshReg$(_c, "PurchaseEdit");

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

/***/ "./src/components/Sell/SellEdit.js":
/*!*****************************************!*\
  !*** ./src/components/Sell/SellEdit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../UI/InputNumber/NumberFormatCustom */ "./src/components/UI/InputNumber/NumberFormatCustom.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");









var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 //import Button from '../UI/Button/Button';


 //import { withStyles } from '@material-ui/core/styles';






 // import NumberFormat from "react-number-format";
//import InputFile from '../UI/InputFile/InputFile';









var ViLocalizedUtils = /*#__PURE__*/function (_DateFnsUtils) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ViLocalizedUtils, _DateFnsUtils);

  var _super = _createSuper(ViLocalizedUtils);

  function ViLocalizedUtils() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ViLocalizedUtils);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ViLocalizedUtils, [{
    key: "getDatePickerHeaderText",
    value: function getDatePickerHeaderText(date) {
      return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_17__["default"])(date, "dd/MM/yyyy", {
        locale: this.locale
      });
    }
  }]);

  return ViLocalizedUtils;
}(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"]);

var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_20__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_21__["default"]
};
var localeUtilsMap = {
  en: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_18__["default"],
  vi: ViLocalizedUtils
};
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    detail: {
      width: "100%",
      height: "300px",
      backgroundColor: theme.palette.background.paper
    },
    option: {
      width: "auto",
      "& input": {
        width: "auto",
        background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["red"]
      }
    },
    popper: {
      width: "fit-content"
    },
    textField: {
      width: "auto",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  };
});
/************************************************** Constructor */

var SellEdit = function SellEdit(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // const handleChange = (event) => {
  //   setProduct(event.target.value);
  // };


  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var sellCode = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập mã",
      onFocus: props.sellCodeFocusHandler,
      autoFocus: props.sellCode.autoFocus
    },
    validation: {
      required: true,
      minLength: 1
    }
  };
  var employeeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.sellEmployeeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var productId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.sellProductIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var goldTypeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm",
      onFocus: props.sellGoldTypeIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var sellWeight = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập trọng lượng",
      onFocus: props.sellWeightFocusHandler,
      autoFocus: props.sellWeight.autoFocus
    },
    validation: {
      required: true,
      minValue: 0.1,
      maxValue: 999999999.9
    }
  };
  var goldUnitId = {
    elementConfig: {
      type: "select",
      placeholder: "Đơn vị",
      onFocus: props.sellGoldUnitIdFocusHandler
    },
    validation: {
      required: true
    }
  };
  var sellQuantity = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập số lượng",
      onFocus: props.sellQuantityFocusHandler,
      autoFocus: props.sellQuantity.autoFocus
    },
    validation: {
      required: true,
      minValue: 1,
      maxValue: 999
    }
  };
  var sellDate = {
    elementConfig: {
      type: "text",
      placeholder: "Ngày xuất",
      onFocus: props.sellDateFocusHandler,
      autoFocus: props.sellDate.autoFocus
    },
    validation: {
      required: true
    }
  };
  var sellNote = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập ghi chú",
      onFocus: props.sellNoteFocusHandler,
      autoFocus: props.sellNote.autoFocus
    },
    validation: {}
  };

  var renderDept = function renderDept(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.deptList.depts.find(function (dept) {
      return dept.id == params.group;
    }).description), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).description), params.children];
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    // productName.
    var product = props.productList.products.find(function (item) {
      return item.id == props.sellDetails[index].productId;
    });

    if (!product) {
      props.sellDetails[index].productName = "";
    } else {
      props.sellDetails[index].productName = product.name;
    } // goldTypeName.


    var goldType = props.goldTypeList.goldTypes.find(function (item) {
      return item.id == props.sellDetails[index].goldTypeId;
    });

    if (!goldType) {
      props.sellDetails[index].goldTypeName = "";
    } else {
      props.sellDetails[index].goldTypeName = goldType.name;
    } // goldUnitName.


    var goldUnit = props.goldUnitList.goldUnits.find(function (item) {
      return item.id == props.sellDetails[index].goldUnitId;
    });

    if (!goldUnit) {
      props.sellDetails[index].goldUnitName = "";
    } else {
      props.sellDetails[index].goldUnitName = goldUnit.name;
    } // return.


    return props.sellDetails[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.sellDetailEdit(event, event.rowData);
  };

  var getOptionSelected = function getOptionSelected(option, value) {
    /* if (typeof value === "undefined") {
      value = null;
    } */
    if (!option || !value) {
      return false;
    }

    var optionId = option.id;

    if (!optionId) {
      optionId = option;
    }

    var valueId = value.id;

    if (!valueId) {
      valueId = value;
    }

    return optionId === valueId;
  };
  /************************************************** render */


  return __jsx("form", {
    onSubmit: props.sellSaveHandler
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    required: true,
    error: !props.sellCode.valid & props.sellCode.touched ? true : false // helperText={ !props.sellCode.valid ? "Vui lòng nhập vào!" : "Perfect!" }
    ,
    inputProps: {
      name: "sellCode",
      id: "sellCode"
    },
    label: "M\xE3",
    margin: "normal"
  }, sellCode.elementConfig, {
    value: props.sellCode.value,
    onChange: function onChange(event) {
      return props.sellCodeChanged(event, sellCode.validation);
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "employeeId-select",
    options: props.employeeList.employees,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.employeeId.value // defaultValue={props.employeeList.employees.find(
    //   (employee) => employee.id == props.employeeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.sellEmployeeIdChanged(event, selectedItem, employeeId.validation);
    },
    groupBy: function groupBy(option) {
      return option.deptId;
    },
    renderGroup: renderDept,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var employee = props.employeeList.employees.find(function (employee) {
        return employee.id == option;
      });

      if (!employee) {
        return "";
      } else {
        return employee.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "employeeId-option",
          id: "employeeId-option"
        }),
        style: {
          minWidth: 200
        },
        required: true,
        label: "Ng\u01B0\u1EDDi xu\u1EA5t",
        margin: "normal",
        error: !props.employeeId.valid & props.employeeId.touched ? true : false
      }, employeeId.elementConfig));
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["MuiPickersUtilsProvider"], {
    utils: localeUtilsMap["vi"],
    locale: localeMap["vi"]
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_19__["KeyboardDatePicker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    clearable: true,
    required: true,
    error: !props.sellDate.valid & props.sellDate.touched ? true : false,
    name: "sellDate",
    id: "sellDate",
    format: "dd/MM/yyyy",
    todayLabel: "H\xF4m nay",
    cancelLabel: "H\u1EE7y",
    clearLabel: "X\xF3a",
    okLabel: "Ch\u1ECDn",
    label: "Ng\xE0y nh\u1EADp",
    margin: "normal",
    value: props.sellDate.value
  }, sellDate.elementConfig, {
    onChange: function onChange(date) {
      return props.sellDateChanged({
        target: {
          value: date
        }
      }, sellDate.validation);
    }
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "sellWeightTotal",
    id: "sellWeightTotal",
    label: "T\u1ED5ng tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.weightTotal
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "sellQuantityTotal",
    id: "sellQuantityTotal",
    label: "T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.quantityTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextareaAutosize"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    rowsMin: 4,
    className: classes.textField,
    error: !props.sellNote.valid & props.sellNote.touched ? "true" : "false",
    name: "sellNote",
    id: "sellNote",
    label: "Ghi ch\xFA",
    margin: "normal"
  }, sellNote.elementConfig, {
    value: props.sellNote.value,
    onChange: function onChange(event) {
      return props.sellNoteChanged(event, sellNote.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root
  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "productId-select",
    options: props.productList.products,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.productId.value // defaultValue={props.productList.products.find(
    //   (product) => product.id == props.productId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.sellProductIdChanged(event, selectedItem, productId.validation);
    },
    groupBy: function groupBy(option) {
      return option.productTypeId;
    },
    renderGroup: renderProductType,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var product = props.productList.products.find(function (product) {
        return product.id == option;
      });

      if (!product) {
        return "";
      } else {
        return product.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "productId-option",
          id: "productId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "S\u1EA3n ph\u1EA9m",
        margin: "normal",
        error: !props.productId.valid & props.productId.touched ? true : false
      }, productId.elementConfig));
    }
  }), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "goldTypeId-select",
    options: props.goldTypeList.goldTypes,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.goldTypeId.value // defaultValue={props.goldTypeList.goldTypes.find(
    //   (goldType) => goldType.id == props.goldTypeId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.sellGoldTypeIdChanged(event, selectedItem, goldTypeId.validation);
    },
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.name;
      }

      var goldType = props.goldTypeList.goldTypes.find(function (goldType) {
        return goldType.id == option;
      });

      if (!goldType) {
        return "";
      } else {
        return goldType.name;
      }
    },
    getOptionSelected: getOptionSelected,
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.description);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "goldTypeId-option",
          id: "goldTypeId-option"
        }),
        style: {
          minWidth: 200
        },
        label: "Lo\u1EA1i v\xE0ng",
        margin: "normal",
        error: !props.goldTypeId.valid & props.goldTypeId.touched ? true : false
      }, goldTypeId.elementConfig));
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.sellWeight.valid & props.sellWeight.touched ? true : false,
    name: "sellWeight",
    id: "sellWeight",
    inputProps: {
      decimalScale: 1
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "Tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.sellWeight.value
  }, sellWeight.elementConfig, {
    onChange: function onChange(event) {
      return props.sellWeightChanged(event, sellWeight.validation);
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
    margin: "normal",
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["InputLabel"], {
    htmlFor: "goldUnit-select"
  }, "\u0110\u01A1n v\u1ECB"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "native": true,
    error: !props.goldUnitId.valid & props.goldUnitId.touched ? true : false,
    inputProps: {
      name: "goldUnitId",
      id: "goldUnit-select"
    },
    open: open
  }, goldUnitId.elementConfig, {
    onClose: handleClose,
    onOpen: handleOpen,
    value: props.goldUnitId.value,
    onChange: function onChange(event) {
      return props.sellGoldUnitIdChanged(event, goldUnitId.validation);
    }
  }), __jsx("option", {
    key: "-1",
    "aria-label": "None",
    value: ""
  }), props.goldUnitList.goldUnits.map(function (goldUnit, index) {
    return __jsx("option", {
      key: goldUnit.id + index,
      value: goldUnit.id
    }, goldUnit.name);
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.textField,
    error: !props.sellQuantity.valid & props.sellQuantity.touched ? true : false,
    name: "sellQuantity",
    id: "sellQuantity",
    inputProps: {
      decimalScale: 0
    },
    InputProps: {
      inputComponent: _UI_InputNumber_NumberFormatCustom__WEBPACK_IMPORTED_MODULE_22__["default"]
    },
    label: "S\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.sellQuantity.value
  }, sellQuantity.elementConfig, {
    onChange: function onChange(event) {
      return props.sellQuantityChanged(event, sellQuantity.validation);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.sellAddDetailHandler
  }, "Th\xEAm m\u1EDBi")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx("div", {
    className: classes.detail
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
    rowCount: props.sellDetails.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Sản phẩm",
      dataKey: "productName"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Loại vàng",
      dataKey: "goldTypeName"
    }, {
      width: 90,
      label: "Trọng lượng",
      dataKey: "weight",
      numeric: true
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Đơn vị",
      dataKey: "goldUnitName"
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantity",
      numeric: true
    }]
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null),
    onClick: props.sellCreateHandler
  }, "T\u1EA1o m\u1EDBi"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default.a, null),
    type: "submit"
  }, "L\u01B0u"))));
};

_s(SellEdit, "TsAExMDA6yuxA58uE+YzDgG8Jdg=", false, function () {
  return [useStyles];
});

_c = SellEdit;
/* harmony default export */ __webpack_exports__["default"] = (SellEdit);

var _c;

$RefreshReg$(_c, "SellEdit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUVkaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ltcG9ydEZyb21GYWN0b3J5L0ltcG9ydEZyb21GYWN0b3J5RWRpdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWxsL1NlbGxFZGl0LmpzIl0sIm5hbWVzIjpbIlZpTG9jYWxpemVkVXRpbHMiLCJkYXRlIiwiZm9ybWF0IiwibG9jYWxlIiwiRGF0ZUZuc1V0aWxzIiwibG9jYWxlTWFwIiwiZW4iLCJlbkxvY2FsZSIsInZpIiwidmlMb2NhbCIsImxvY2FsZVV0aWxzTWFwIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImRldGFpbCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm9wdGlvbiIsInJlZCIsInBvcHBlciIsInRleHRGaWVsZCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJFeHBvcnRUb0ZhY3RvcnlFZGl0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwiZXhwb3J0VG9GYWN0b3J5Q29kZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkZvY3VzIiwiZXhwb3J0VG9GYWN0b3J5Q29kZUZvY3VzSGFuZGxlciIsImF1dG9Gb2N1cyIsInZhbGlkYXRpb24iLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsImVtcGxveWVlSWQiLCJleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwicHJvZHVjdElkIiwiZXhwb3J0VG9GYWN0b3J5UHJvZHVjdElkRm9jdXNIYW5kbGVyIiwiZ29sZFR5cGVJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHQiLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRGb2N1c0hhbmRsZXIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiZ29sZFVuaXRJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eSIsImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZSIsImV4cG9ydFRvRmFjdG9yeURhdGVGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlOb3RlIiwiZXhwb3J0VG9GYWN0b3J5Tm90ZUZvY3VzSGFuZGxlciIsInJlbmRlckRlcHQiLCJwYXJhbXMiLCJncm91cCIsImRlcHRMaXN0IiwiZGVwdHMiLCJmaW5kIiwiZGVwdCIsImlkIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiIsInJlbmRlclByb2R1Y3RUeXBlIiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdFR5cGVzIiwicHJvZHVjdFR5cGUiLCJyb3dHZXR0ZXIiLCJpbmRleCIsInByb2R1Y3QiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiaXRlbSIsImV4cG9ydFRvRmFjdG9yeURldGFpbHMiLCJwcm9kdWN0TmFtZSIsIm5hbWUiLCJnb2xkVHlwZSIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlcyIsImdvbGRUeXBlTmFtZSIsImdvbGRVbml0IiwiZ29sZFVuaXRMaXN0IiwiZ29sZFVuaXRzIiwiZ29sZFVuaXROYW1lIiwicm93Q2xpY2siLCJldmVudCIsImV4cG9ydFRvRmFjdG9yeURldGFpbEVkaXQiLCJyb3dEYXRhIiwiZ2V0T3B0aW9uU2VsZWN0ZWQiLCJ2YWx1ZSIsIm9wdGlvbklkIiwidmFsdWVJZCIsImV4cG9ydFRvRmFjdG9yeVNhdmVIYW5kbGVyIiwidmFsaWQiLCJ0b3VjaGVkIiwiZXhwb3J0VG9GYWN0b3J5Q29kZUNoYW5nZWQiLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZXMiLCJzZWxlY3RlZEl0ZW0iLCJleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZCIsImRlcHRJZCIsImVtcGxveWVlIiwiaW5wdXRQcm9wcyIsIm1pbldpZHRoIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZUNoYW5nZWQiLCJ0YXJnZXQiLCJ3ZWlnaHRUb3RhbCIsInF1YW50aXR5VG90YWwiLCJleHBvcnRUb0ZhY3RvcnlOb3RlQ2hhbmdlZCIsImV4cG9ydFRvRmFjdG9yeVByb2R1Y3RJZENoYW5nZWQiLCJwcm9kdWN0VHlwZUlkIiwiZXhwb3J0VG9GYWN0b3J5R29sZFR5cGVJZENoYW5nZWQiLCJkZWNpbWFsU2NhbGUiLCJpbnB1dENvbXBvbmVudCIsIk51bWJlckZvcm1hdEN1c3RvbSIsImV4cG9ydFRvRmFjdG9yeVdlaWdodENoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlHb2xkVW5pdElkQ2hhbmdlZCIsIm1hcCIsImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5Q2hhbmdlZCIsImV4cG9ydFRvRmFjdG9yeUFkZERldGFpbEhhbmRsZXIiLCJsZW5ndGgiLCJmbGV4R3JvdyIsImxhYmVsIiwiZGF0YUtleSIsIm51bWVyaWMiLCJleHBvcnRUb0ZhY3RvcnlDcmVhdGVIYW5kbGVyIiwiSW1wb3J0RnJvbUZhY3RvcnlFZGl0IiwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlIiwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRGb2N1c0hhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodCIsImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0Rm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVW5pdElkRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSIsImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeURhdGUiLCJpbXBvcnRGcm9tRmFjdG9yeURhdGVGb2N1c0hhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeU5vdGUiLCJpbXBvcnRGcm9tRmFjdG9yeU5vdGVGb2N1c0hhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeURldGFpbHMiLCJpbXBvcnRGcm9tRmFjdG9yeURldGFpbEVkaXQiLCJpbXBvcnRGcm9tRmFjdG9yeVNhdmVIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZENoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeURhdGVDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5R29sZFR5cGVJZENoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodENoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUNoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeUFkZERldGFpbEhhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeUNyZWF0ZUhhbmRsZXIiLCJQdXJjaGFzZUVkaXQiLCJwdXJjaGFzZUNvZGUiLCJwdXJjaGFzZUNvZGVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0IiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5IiwicHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGF0ZSIsInB1cmNoYXNlRGF0ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlTm90ZSIsInB1cmNoYXNlTm90ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGV0YWlscyIsInB1cmNoYXNlRGV0YWlsRWRpdCIsInB1cmNoYXNlU2F2ZUhhbmRsZXIiLCJwdXJjaGFzZUNvZGVDaGFuZ2VkIiwicHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZCIsInB1cmNoYXNlRGF0ZUNoYW5nZWQiLCJwdXJjaGFzZU5vdGVDaGFuZ2VkIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsInB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlQWRkRGV0YWlsSGFuZGxlciIsInB1cmNoYXNlQ3JlYXRlSGFuZGxlciIsIlNlbGxFZGl0Iiwic2VsbENvZGUiLCJzZWxsQ29kZUZvY3VzSGFuZGxlciIsInNlbGxFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwic2VsbFByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInNlbGxHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwic2VsbFdlaWdodCIsInNlbGxXZWlnaHRGb2N1c0hhbmRsZXIiLCJzZWxsR29sZFVuaXRJZEZvY3VzSGFuZGxlciIsInNlbGxRdWFudGl0eSIsInNlbGxRdWFudGl0eUZvY3VzSGFuZGxlciIsInNlbGxEYXRlIiwic2VsbERhdGVGb2N1c0hhbmRsZXIiLCJzZWxsTm90ZSIsInNlbGxOb3RlRm9jdXNIYW5kbGVyIiwic2VsbERldGFpbHMiLCJzZWxsRGV0YWlsRWRpdCIsInNlbGxTYXZlSGFuZGxlciIsInNlbGxDb2RlQ2hhbmdlZCIsInNlbGxFbXBsb3llZUlkQ2hhbmdlZCIsInNlbGxEYXRlQ2hhbmdlZCIsInNlbGxOb3RlQ2hhbmdlZCIsInNlbGxQcm9kdWN0SWRDaGFuZ2VkIiwic2VsbEdvbGRUeXBlSWRDaGFuZ2VkIiwic2VsbFdlaWdodENoYW5nZWQiLCJzZWxsR29sZFVuaXRJZENoYW5nZWQiLCJzZWxsUXVhbnRpdHlDaGFuZ2VkIiwic2VsbEFkZERldGFpbEhhbmRsZXIiLCJzZWxsQ3JlYXRlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7OzRDQUNvQkMsSSxFQUFNO0FBQzVCLGFBQU9DLGdFQUFNLENBQUNELElBQUQsRUFBTyxZQUFQLEVBQXFCO0FBQUVFLGNBQU0sRUFBRSxLQUFLQTtBQUFmLE9BQXJCLENBQWI7QUFDRDs7OztFQUg0QkMsMEQ7O0FBTS9CLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFQyw4REFEWTtBQUVoQkMsSUFBRSxFQUFFQywyREFBT0E7QUFGSyxDQUFsQjtBQUtBLElBQU1DLGNBQWMsR0FBRztBQUNyQkosSUFBRSxFQUFFRiwwREFEaUI7QUFFckJJLElBQUUsRUFBRVI7QUFGaUIsQ0FBdkI7QUFLQTs7QUFDQSxJQUFNVyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQURpQztBQUt2Q0MsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU5DLFlBQU0sRUFBRSxPQUZGO0FBR05DLHFCQUFlLEVBQUVQ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QUFFO0FBSlgsS0FuQk8sRUF5QlA7QUFDRXhILFdBQUssRUFBRSxFQURUO0FBRUV1SCxXQUFLLEVBQUUsVUFGVDtBQUdFQyxhQUFPLEVBQUUsVUFIWDtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQXpCTztBQUpYLElBREYsQ0FERixDQXJXRixFQXlhRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFO0FBQWYsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQsT0FKYjtBQUtFLFdBQU8sRUFBRTNHLEtBQUssQ0FBQ21NO0FBTGpCLHlCQURGLEVBVUUsTUFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLGFBQVMsRUFBRSxNQUFDLCtEQUFELE9BSmI7QUFLRSxRQUFJLEVBQUM7QUFMUCxnQkFWRixDQXphRixDQURGLENBREY7QUFrY0QsQ0EvbkJEOztHQUFNNUIsUTtVQUNZNUwsUzs7O0tBRFo0TCxRO0FBaW9CU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFuYWdlU3RvcmUuM2U0ZmQ3MWJlNDUxMDc2ZDZhNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBMaXN0U3ViaGVhZGVyLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG4gIFRleHRhcmVhQXV0b3NpemUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIGltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuLy9pbXBvcnQgSW5wdXRGaWxlIGZyb20gJy4uL1VJL0lucHV0RmlsZS9JbnB1dEZpbGUnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuXHJcbmltcG9ydCBOdW1iZXJGb3JtYXRDdXN0b20gZnJvbSBcIi4uL1VJL0lucHV0TnVtYmVyL051bWJlckZvcm1hdEN1c3RvbVwiO1xyXG5pbXBvcnQgTXVpVmlydHVhbGl6ZWRUYWJsZSBmcm9tIFwiLi4vVUkvVGFibGUvTXVpVmlydHVhbGl6ZWRUYWJsZVwiO1xyXG5cclxuY2xhc3MgVmlMb2NhbGl6ZWRVdGlscyBleHRlbmRzIERhdGVGbnNVdGlscyB7XHJcbiAgZ2V0RGF0ZVBpY2tlckhlYWRlclRleHQoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBcImRkL01NL3l5eXlcIiwgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsZVV0aWxzTWFwID0ge1xyXG4gIGVuOiBEYXRlRm5zVXRpbHMsXHJcbiAgdmk6IFZpTG9jYWxpemVkVXRpbHMsXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgZGV0YWlsOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgRXhwb3J0VG9GYWN0b3J5RWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUNvZGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3Do1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeUNvZGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZW1wbG95ZWVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlHb2xkVHlwZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeVdlaWdodCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0cuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlXZWlnaHQuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAwLjEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTk5OTk5OTkuOSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFVuaXRJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwixJDGoW4gduG7i1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlHb2xkVW5pdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeVF1YW50aXR5ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHPhu5EgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHkuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAxLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlEYXRlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmfDoHkgeHXhuqV0XCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeURhdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGF0ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5Tm90ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgZ2hpIGNow7pcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5Tm90ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlOb3RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7cHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApLmRlc2NyaXB0aW9ufVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9kdWN0VHlwZSA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT0gcGFyYW1zLmdyb3VwXHJcbiAgICAgICAgKS5kZXNjcmlwdGlvblxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIC8vIHByb2R1Y3ROYW1lLlxyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5wcm9kdWN0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBnb2xkVHlwZU5hbWUuXHJcbiAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRUeXBlSWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFVuaXROYW1lLlxyXG4gICAgbGV0IGdvbGRVbml0ID0gcHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVW5pdElkXHJcbiAgICApO1xyXG4gICAgaWYgKCFnb2xkVW5pdCkge1xyXG4gICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybi5cclxuICAgIHJldHVybiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3dDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsRWRpdChldmVudCwgZXZlbnQucm93RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09PSB2YWx1ZUlkO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9eyAhcHJvcHMuZXhwb3J0VG9GYWN0b3J5Q29kZS52YWxpZCA/IFwiVnVpIGzDsm5nIG5o4bqtcCB2w6BvIVwiIDogXCJQZXJmZWN0IVwiIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXhwb3J0VG9GYWN0b3J5Q29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcImV4cG9ydFRvRmFjdG9yeUNvZGVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw6NcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4uZXhwb3J0VG9GYWN0b3J5Q29kZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZXhwb3J0VG9GYWN0b3J5Q29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXhwb3J0VG9GYWN0b3J5Q29kZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImVtcGxveWVlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gcHJvcHMuZW1wbG95ZWVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1wbG95ZWVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJYdeG6pXQgY2hvXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5lbXBsb3llZUlkLnZhbGlkICYgcHJvcHMuZW1wbG95ZWVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmVtcGxveWVlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXJcclxuICAgICAgICAgICAgdXRpbHM9e2xvY2FsZVV0aWxzTWFwW1widmlcIl19XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlTWFwW1widmlcIl19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5leHBvcnRUb0ZhY3RvcnlEYXRlLnZhbGlkICZcclxuICAgICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURhdGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lPVwiZXhwb3J0VG9GYWN0b3J5RGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJleHBvcnRUb0ZhY3RvcnlEYXRlXCJcclxuICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICB0b2RheUxhYmVsPVwiSMO0bSBuYXlcIlxyXG4gICAgICAgICAgICAgIGNhbmNlbExhYmVsPVwiSOG7p3lcIlxyXG4gICAgICAgICAgICAgIGNsZWFyTGFiZWw9XCJYw7NhXCJcclxuICAgICAgICAgICAgICBva0xhYmVsPVwiQ2jhu41uXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5nw6B5IG5o4bqtcFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZXhwb3J0VG9GYWN0b3J5RGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICB7Li4uZXhwb3J0VG9GYWN0b3J5RGF0ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURhdGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBleHBvcnRUb0ZhY3RvcnlEYXRlLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cImV4cG9ydFRvRmFjdG9yeVdlaWdodFRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMud2VpZ2h0VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyBz4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnF1YW50aXR5VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXHJcbiAgICAgICAgICAgIHJvd3NNaW49ezR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZXhwb3J0VG9GYWN0b3J5Tm90ZS52YWxpZCAmXHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5Tm90ZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiZmFsc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJleHBvcnRUb0ZhY3RvcnlOb3RlXCJcclxuICAgICAgICAgICAgaWQ9XCJleHBvcnRUb0ZhY3RvcnlOb3RlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJHaGkgY2jDulwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5leHBvcnRUb0ZhY3RvcnlOb3RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlOb3RlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeU5vdGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBleHBvcnRUb0ZhY3RvcnlOb3RlLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeVByb2R1Y3RJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLnByb2R1Y3RUeXBlSWR9XHJcbiAgICAgICAgICAgIHJlbmRlckdyb3VwPXtyZW5kZXJQcm9kdWN0VHlwZX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLmRlc2NyaXB0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IHByb3BzLmdvbGRUeXBlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5R29sZFR5cGVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmV4cG9ydFRvRmFjdG9yeVdlaWdodC52YWxpZCAmXHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRcIlxyXG4gICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4uZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0Q2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJnb2xkVW5pdC1zZWxlY3RcIj7EkMahbiB24buLPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVW5pdElkXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJnb2xkVW5pdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgey4uLmdvbGRVbml0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRVbml0SWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeUdvbGRVbml0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgZ29sZFVuaXRJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCItMVwiIGFyaWEtbGFiZWw9XCJOb25lXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5nb2xkVW5pdExpc3QuZ29sZFVuaXRzLm1hcCgoZ29sZFVuaXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z29sZFVuaXQuaWQgKyBpbmRleH0gdmFsdWU9e2dvbGRVbml0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z29sZFVuaXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwiZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5XCJcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBkZWNpbWFsU2NhbGU6IDAgfX1cclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiU+G7kSBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBleHBvcnRUb0ZhY3RvcnlRdWFudGl0eS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlBZGREZXRhaWxIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaMOqbSBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIHJvd0dldHRlcj17cm93R2V0dGVyfVxyXG4gICAgICAgICAgICAgIG9uUm93Q2xpY2s9e3Jvd0NsaWNrfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxv4bqhaSB2w6BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRUeXBlTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJUcuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLEkMahbiB24buLXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFVuaXROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhu5EgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJxdWFudGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbD1cInNlY29uZGFyeSBtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICAgICAge3Byb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IGl0ZW0ucHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdERpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGlzcGxheSA9IHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBpdGVtLmdvbGRUeXBlSWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZURpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEaXNwbGF5ID0gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57cHJvZHVjdERpc3BsYXl9PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57Z29sZFR5cGVEaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTGlzdD4gKi99XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydFRvRmFjdG9yeUVkaXQ7XHJcbiIsImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBMaXN0U3ViaGVhZGVyLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG4gIFRleHRhcmVhQXV0b3NpemUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIGltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuLy9pbXBvcnQgSW5wdXRGaWxlIGZyb20gJy4uL1VJL0lucHV0RmlsZS9JbnB1dEZpbGUnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuXHJcbmltcG9ydCBOdW1iZXJGb3JtYXRDdXN0b20gZnJvbSBcIi4uL1VJL0lucHV0TnVtYmVyL051bWJlckZvcm1hdEN1c3RvbVwiO1xyXG5pbXBvcnQgTXVpVmlydHVhbGl6ZWRUYWJsZSBmcm9tIFwiLi4vVUkvVGFibGUvTXVpVmlydHVhbGl6ZWRUYWJsZVwiO1xyXG5cclxuY2xhc3MgVmlMb2NhbGl6ZWRVdGlscyBleHRlbmRzIERhdGVGbnNVdGlscyB7XHJcbiAgZ2V0RGF0ZVBpY2tlckhlYWRlclRleHQoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBcImRkL01NL3l5eXlcIiwgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsZVV0aWxzTWFwID0ge1xyXG4gIGVuOiBEYXRlRm5zVXRpbHMsXHJcbiAgdmk6IFZpTG9jYWxpemVkVXRpbHMsXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgZGV0YWlsOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgSW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgLy8gICBzZXRQcm9kdWN0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlDb2RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw6NcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDb2RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDAuMSxcclxuICAgICAgbWF4VmFsdWU6IDk5OTk5OTk5OS45LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVW5pdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCLEkMahbiB24buLXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHPhu5EgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMSxcclxuICAgICAgbWF4VmFsdWU6IDk5OSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlEYXRlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmfDoHkgbmjhuq1wXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGF0ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURhdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5Tm90ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgZ2hpIGNow7pcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlOb3RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5Tm90ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGVwdCA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge3Byb3BzLmRlcHRMaXN0LmRlcHRzLmZpbmQoKGRlcHQpID0+IGRlcHQuaWQgPT0gcGFyYW1zLmdyb3VwKS5kZXNjcmlwdGlvbn1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFR5cGUgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkuZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dHZXR0ZXIgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0TmFtZS5cclxuICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5wcm9kdWN0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5wcm9kdWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFR5cGVOYW1lLlxyXG4gICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRUeXBlSWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRVbml0TmFtZS5cclxuICAgIGxldCBnb2xkVW5pdCA9IHByb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVW5pdElkXHJcbiAgICApO1xyXG4gICAgaWYgKCFnb2xkVW5pdCkge1xyXG4gICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4uXHJcbiAgICByZXR1cm4gcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3dDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxFZGl0KGV2ZW50LCBldmVudC5yb3dEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRPcHRpb25TZWxlY3RlZCA9IChvcHRpb24sIHZhbHVlKSA9PiB7XHJcbiAgICAvKiBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgIH0gKi9cclxuICAgIGlmICghb3B0aW9uIHx8ICF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICBpZiAoIW9wdGlvbklkKSB7XHJcbiAgICAgIG9wdGlvbklkID0gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlSWQgPSB2YWx1ZS5pZDtcclxuICAgIGlmICghdmFsdWVJZCkge1xyXG4gICAgICB2YWx1ZUlkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0aW9uSWQgPT09IHZhbHVlSWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlTYXZlSGFuZGxlcn0+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcImltcG9ydEZyb21GYWN0b3J5Q29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcImltcG9ydEZyb21GYWN0b3J5Q29kZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3Do1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5pbXBvcnRGcm9tRmFjdG9yeUNvZGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJlbXBsb3llZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbXBsb3llZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IHByb3BzLmVtcGxveWVlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1wbG95ZWVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOaOG6rXAgdOG7q1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVJZC52YWxpZCAmIHByb3BzLmVtcGxveWVlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5lbXBsb3llZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIHV0aWxzPXtsb2NhbGVVdGlsc01hcFtcInZpXCJdfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZU1hcFtcInZpXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLnZhbGlkICZcclxuICAgICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGF0ZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbXBvcnRGcm9tRmFjdG9yeURhdGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlXCJcclxuICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICB0b2RheUxhYmVsPVwiSMO0bSBuYXlcIlxyXG4gICAgICAgICAgICAgIGNhbmNlbExhYmVsPVwiSOG7p3lcIlxyXG4gICAgICAgICAgICAgIGNsZWFyTGFiZWw9XCJYw7NhXCJcclxuICAgICAgICAgICAgICBva0xhYmVsPVwiQ2jhu41uXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5nw6B5IG5o4bqtcFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHsuLi5pbXBvcnRGcm9tRmFjdG9yeURhdGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURhdGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeURhdGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuYW1lPVwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMud2VpZ2h0VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJU4buVbmcgc+G7kSBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5xdWFudGl0eVRvdGFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxyXG4gICAgICAgICAgICByb3dzTWluPXs0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmltcG9ydEZyb21GYWN0b3J5Tm90ZS52YWxpZCAmXHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cImltcG9ydEZyb21GYWN0b3J5Tm90ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJHaGkgY2jDulwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5pbXBvcnRGcm9tRmFjdG9yeU5vdGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5Tm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeU5vdGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeU5vdGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJwcm9kdWN0SWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0SWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgLy8gICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBwcm9wcy5wcm9kdWN0SWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9kdWN0VHlwZUlkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyUHJvZHVjdFR5cGV9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5kZXNjcmlwdGlvbn08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5R29sZFR5cGVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRcIlxyXG4gICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0XCJcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBkZWNpbWFsU2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC52YWx1ZX1cclxuICAgICAgICAgICAgey4uLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZ29sZFVuaXQtc2VsZWN0XCI+xJDGoW4gduG7izwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hdGl2ZVxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5nb2xkVW5pdElkLnZhbGlkICYgcHJvcHMuZ29sZFVuaXRJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFVuaXRJZFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFVuaXQtc2VsZWN0XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgIHsuLi5nb2xkVW5pdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgb25PcGVuPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVW5pdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgZ29sZFVuaXRJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCItMVwiIGFyaWEtbGFiZWw9XCJOb25lXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5nb2xkVW5pdExpc3QuZ29sZFVuaXRzLm1hcCgoZ29sZFVuaXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z29sZFVuaXQuaWQgKyBpbmRleH0gdmFsdWU9e2dvbGRVbml0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z29sZFVuaXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMCB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlBZGREZXRhaWxIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaMOqbSBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlscy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgb25Sb3dDbGljaz17cm93Q2xpY2t9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4bqjbiBwaOG6qW1cIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG/huqFpIHbDoG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFR5cGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJ3ZWlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVW5pdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBhcmlhLWxhYmVsPVwic2Vjb25kYXJ5IG1haWxib3ggZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpdGVtLnByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3REaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpc3BsYXkgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gaXRlbS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGVEaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlRGlzcGxheSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e3Byb2R1Y3REaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e2dvbGRUeXBlRGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0xpc3Q+ICovfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltcG9ydEZyb21GYWN0b3J5RWRpdDtcclxuIiwiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuaW1wb3J0IE51bWJlckZvcm1hdEN1c3RvbSBmcm9tIFwiLi4vVUkvSW5wdXROdW1iZXIvTnVtYmVyRm9ybWF0Q3VzdG9tXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBQdXJjaGFzZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwdXJjaGFzZUNvZGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3Do1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUNvZGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VDb2RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGVtcGxveWVlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZVdlaWdodCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0cuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMC4xLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5OTk5OTk5LjksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRVbml0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlUXVhbnRpdHkgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgc+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHkuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAxLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZURhdGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOZ8OgeSBuaOG6rXBcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VEYXRlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlRGF0ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VOb3RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBnaGkgY2jDulwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZU5vdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VOb3RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7cHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApLmRlc2NyaXB0aW9ufVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9kdWN0VHlwZSA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT0gcGFyYW1zLmdyb3VwXHJcbiAgICAgICAgKS5kZXNjcmlwdGlvblxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIC8vIHByb2R1Y3ROYW1lLlxyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBnb2xkVHlwZU5hbWUuXHJcbiAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFVuaXROYW1lLlxyXG4gICAgbGV0IGdvbGRVbml0ID0gcHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRVbml0KSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybi5cclxuICAgIHJldHVybiBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5wdXJjaGFzZURldGFpbEVkaXQoZXZlbnQsIGV2ZW50LnJvd0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgdmFsdWUpID0+IHtcclxuICAgIC8qIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgfSAqL1xyXG4gICAgaWYgKCFvcHRpb24gfHwgIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25JZCA9IG9wdGlvbi5pZDtcclxuICAgIGlmICghb3B0aW9uSWQpIHtcclxuICAgICAgb3B0aW9uSWQgPSBvcHRpb247XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVJZCA9IHZhbHVlLmlkO1xyXG4gICAgaWYgKCF2YWx1ZUlkKSB7XHJcbiAgICAgIHZhbHVlSWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25JZCA9PT0gdmFsdWVJZDtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5wdXJjaGFzZVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZUNvZGUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZUNvZGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5wdXJjaGFzZUNvZGUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlQ29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlQ29kZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3Do1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZUNvZGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlQ29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZUNvZGVDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZUNvZGUudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJlbXBsb3llZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbXBsb3llZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IHByb3BzLmVtcGxveWVlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1wbG95ZWVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOZ8aw4budaSBuaOG6rW5cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmVtcGxveWVlSWQudmFsaWQgJiBwcm9wcy5lbXBsb3llZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZW1wbG95ZWVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlclxyXG4gICAgICAgICAgICB1dGlscz17bG9jYWxlVXRpbHNNYXBbXCJ2aVwiXX1cclxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGVNYXBbXCJ2aVwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlRGF0ZS52YWxpZCAmIHByb3BzLnB1cmNoYXNlRGF0ZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZURhdGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwicHVyY2hhc2VEYXRlXCJcclxuICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICB0b2RheUxhYmVsPVwiSMO0bSBuYXlcIlxyXG4gICAgICAgICAgICAgIGNhbmNlbExhYmVsPVwiSOG7p3lcIlxyXG4gICAgICAgICAgICAgIGNsZWFyTGFiZWw9XCJYw7NhXCJcclxuICAgICAgICAgICAgICBva0xhYmVsPVwiQ2jhu41uXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5nw6B5IG5o4bqtcFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VEYXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHsuLi5wdXJjaGFzZURhdGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZURhdGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBwdXJjaGFzZURhdGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuYW1lPVwicHVyY2hhc2VXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMud2VpZ2h0VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlUXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJU4buVbmcgc+G7kSBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5xdWFudGl0eVRvdGFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxyXG4gICAgICAgICAgICByb3dzTWluPXs0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlTm90ZS52YWxpZCAmIHByb3BzLnB1cmNoYXNlTm90ZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiZmFsc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZU5vdGVcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlTm90ZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiR2hpIGNow7pcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VOb3RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZU5vdGUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VOb3RlQ2hhbmdlZChldmVudCwgcHVyY2hhc2VOb3RlLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24ucHJvZHVjdFR5cGVJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlclByb2R1Y3RUeXBlfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJT4bqjbiBwaOG6qW1cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLnByb2R1Y3RJZC52YWxpZCAmIHByb3BzLnByb2R1Y3RJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLnByb2R1Y3RJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImdvbGRUeXBlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRUeXBlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gcHJvcHMuZ29sZFR5cGVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLmRlc2NyaXB0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb+G6oWkgdsOgbmdcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmdvbGRUeXBlSWQudmFsaWQgJiBwcm9wcy5nb2xkVHlwZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZ29sZFR5cGVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZVdlaWdodC52YWxpZCAmIHByb3BzLnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VXZWlnaHRcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMSB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VXZWlnaHQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWQoZXZlbnQsIHB1cmNoYXNlV2VpZ2h0LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJnb2xkVW5pdC1zZWxlY3RcIj7EkMahbiB24buLPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVW5pdElkXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJnb2xkVW5pdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgey4uLmdvbGRVbml0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRVbml0SWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQoZXZlbnQsIGdvbGRVbml0SWQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMubWFwKChnb2xkVW5pdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtnb2xkVW5pdC5pZCArIGluZGV4fSB2YWx1ZT17Z29sZFVuaXQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnb2xkVW5pdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VRdWFudGl0eS52YWxpZCAmIHByb3BzLnB1cmNoYXNlUXVhbnRpdHkudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMCB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZVF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlUXVhbnRpdHkudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMucHVyY2hhc2VBZGREZXRhaWxIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaMOqbSBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3Byb3BzLnB1cmNoYXNlRGV0YWlscy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgb25Sb3dDbGljaz17cm93Q2xpY2t9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4bqjbiBwaOG6qW1cIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG/huqFpIHbDoG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFR5cGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJ3ZWlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVW5pdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBhcmlhLWxhYmVsPVwic2Vjb25kYXJ5IG1haWxib3ggZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMucHVyY2hhc2VEZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpdGVtLnByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3REaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpc3BsYXkgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gaXRlbS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGVEaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlRGlzcGxheSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e3Byb2R1Y3REaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e2dvbGRUeXBlRGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0xpc3Q+ICovfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLnB1cmNoYXNlRGV0YWlscy5sZW5ndGggPiAwfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlRWRpdDtcclxuIiwiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuaW1wb3J0IE51bWJlckZvcm1hdEN1c3RvbSBmcm9tIFwiLi4vVUkvSW5wdXROdW1iZXIvTnVtYmVyRm9ybWF0Q3VzdG9tXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBTZWxsRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNlbGxDb2RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw6NcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbENvZGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbENvZGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZW1wbG95ZWVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsRW1wbG95ZWVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbFByb2R1Y3RJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxHb2xkVHlwZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxXZWlnaHQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsV2VpZ2h0Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxXZWlnaHQuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAwLjEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTk5OTk5OTkuOSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFVuaXRJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwixJDGoW4gduG7i1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsR29sZFVuaXRJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsUXVhbnRpdHkgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgc+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsUXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbFF1YW50aXR5LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMSxcclxuICAgICAgbWF4VmFsdWU6IDk5OSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgc2VsbERhdGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOZ8OgeSB4deG6pXRcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbERhdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbERhdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxOb3RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBnaGkgY2jDulwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsTm90ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsTm90ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGVwdCA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge3Byb3BzLmRlcHRMaXN0LmRlcHRzLmZpbmQoKGRlcHQpID0+IGRlcHQuaWQgPT0gcGFyYW1zLmdyb3VwKS5kZXNjcmlwdGlvbn1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFR5cGUgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkuZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dHZXR0ZXIgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0TmFtZS5cclxuICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFR5cGVOYW1lLlxyXG4gICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRVbml0TmFtZS5cclxuICAgIGxldCBnb2xkVW5pdCA9IHByb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRVbml0KSB7XHJcbiAgICAgIHByb3BzLnNlbGxEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4uXHJcbiAgICByZXR1cm4gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5zZWxsRGV0YWlsRWRpdChldmVudCwgZXZlbnQucm93RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09PSB2YWx1ZUlkO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLnNlbGxTYXZlSGFuZGxlcn0+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuc2VsbENvZGUudmFsaWQgJiBwcm9wcy5zZWxsQ29kZS50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5zZWxsQ29kZS52YWxpZCA/IFwiVnVpIGzDsm5nIG5o4bqtcCB2w6BvIVwiIDogXCJQZXJmZWN0IVwiIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwic2VsbENvZGVcIixcclxuICAgICAgICAgICAgICBpZDogXCJzZWxsQ29kZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3Do1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5zZWxsQ29kZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VsbENvZGUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuc2VsbENvZGVDaGFuZ2VkKGV2ZW50LCBzZWxsQ29kZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImVtcGxveWVlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gcHJvcHMuZW1wbG95ZWVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsRW1wbG95ZWVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGVtcGxveWVlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5kZXB0SWR9XHJcbiAgICAgICAgICAgIHJlbmRlckdyb3VwPXtyZW5kZXJEZXB0fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IHByb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWVtcGxveWVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLmRlc2NyaXB0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmfGsOG7nWkgeHXhuqV0XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5lbXBsb3llZUlkLnZhbGlkICYgcHJvcHMuZW1wbG95ZWVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmVtcGxveWVlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXJcclxuICAgICAgICAgICAgdXRpbHM9e2xvY2FsZVV0aWxzTWFwW1widmlcIl19XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlTWFwW1widmlcIl19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5zZWxsRGF0ZS52YWxpZCAmIHByb3BzLnNlbGxEYXRlLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInNlbGxEYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cInNlbGxEYXRlXCJcclxuICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICB0b2RheUxhYmVsPVwiSMO0bSBuYXlcIlxyXG4gICAgICAgICAgICAgIGNhbmNlbExhYmVsPVwiSOG7p3lcIlxyXG4gICAgICAgICAgICAgIGNsZWFyTGFiZWw9XCJYw7NhXCJcclxuICAgICAgICAgICAgICBva0xhYmVsPVwiQ2jhu41uXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5nw6B5IG5o4bqtcFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VsbERhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgey4uLnNlbGxEYXRlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsbERhdGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBzZWxsRGF0ZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsV2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGxXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMud2VpZ2h0VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cInNlbGxRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsUXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucXVhbnRpdHlUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgcm93c01pbj17NH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsTm90ZS52YWxpZCAmIHByb3BzLnNlbGxOb3RlLnRvdWNoZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsTm90ZVwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbE5vdGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdoaSBjaMO6XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnNlbGxOb3RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsTm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsTm90ZUNoYW5nZWQoZXZlbnQsIHNlbGxOb3RlLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxQcm9kdWN0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9kdWN0VHlwZUlkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyUHJvZHVjdFR5cGV9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5kZXNjcmlwdGlvbn08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxHb2xkVHlwZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5kZXNjcmlwdGlvbn08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTG/huqFpIHbDoG5nXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5nb2xkVHlwZUlkLnZhbGlkICYgcHJvcHMuZ29sZFR5cGVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmdvbGRUeXBlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuc2VsbFdlaWdodC52YWxpZCAmIHByb3BzLnNlbGxXZWlnaHQudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsV2VpZ2h0XCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsV2VpZ2h0XCJcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBkZWNpbWFsU2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4uc2VsbFdlaWdodC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxXZWlnaHRDaGFuZ2VkKGV2ZW50LCBzZWxsV2VpZ2h0LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJnb2xkVW5pdC1zZWxlY3RcIj7EkMahbiB24buLPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVW5pdElkXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJnb2xkVW5pdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgey4uLmdvbGRVbml0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRVbml0SWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLnNlbGxHb2xkVW5pdElkQ2hhbmdlZChldmVudCwgZ29sZFVuaXRJZC52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PVwiLTFcIiBhcmlhLWxhYmVsPVwiTm9uZVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICB7cHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5tYXAoKGdvbGRVbml0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2dvbGRVbml0LmlkICsgaW5kZXh9IHZhbHVlPXtnb2xkVW5pdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2dvbGRVbml0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsUXVhbnRpdHkudmFsaWQgJiBwcm9wcy5zZWxsUXVhbnRpdHkudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInNlbGxRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbFF1YW50aXR5XCJcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBkZWNpbWFsU2NhbGU6IDAgfX1cclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiU+G7kSBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5zZWxsUXVhbnRpdHkuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsUXVhbnRpdHlDaGFuZ2VkKGV2ZW50LCBzZWxsUXVhbnRpdHkudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuc2VsbEFkZERldGFpbEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRow6ptIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgPE11aVZpcnR1YWxpemVkVGFibGVcclxuICAgICAgICAgICAgICByb3dDb3VudD17cHJvcHMuc2VsbERldGFpbHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIHJvd0dldHRlcj17cm93R2V0dGVyfVxyXG4gICAgICAgICAgICAgIG9uUm93Q2xpY2s9e3Jvd0NsaWNrfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxv4bqhaSB2w6BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRUeXBlTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJUcuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLEkMahbiB24buLXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFVuaXROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhu5EgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJxdWFudGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbD1cInNlY29uZGFyeSBtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICAgICAge3Byb3BzLnNlbGxEZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpdGVtLnByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3REaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpc3BsYXkgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gaXRlbS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGVEaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlRGlzcGxheSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e3Byb2R1Y3REaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e2dvbGRUeXBlRGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0xpc3Q+ICovfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZWxsQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsbEVkaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=