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
    }).name), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).name), params.children];
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

    return optionId == valueId;
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
    disabled: !props.exportToFactoryDetails.length > 0,
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
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");









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
    }).name), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).name), params.children];
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

    return optionId == valueId;
  };
  /************************************************** render */


  return __jsx("form", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
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
    },
    onKeyPress: function onKeyPress(event) {
      if (event.key === "Enter") {
        props.importFromFactoryCodeEnter(event);
      }
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "employeeId-select",
    disabled: true,
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
    onClick: props.importFromFactoryUpdateDetailHandler
  }, "C\u1EADp nh\u1EADt")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
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
    disabled: !props.importFromFactoryDetails.length > 0,
    onClick: props.importFromFactorySaveHandler
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
    }).name), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).name), params.children];
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

    return optionId == valueId;
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
    }).name), params.children];
  };

  var renderProductType = function renderProductType(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      key: params.group,
      component: "div"
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).name), params.children];
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

    return optionId == valueId;
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, option.name);
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
    disabled: !props.sellDetails.length > 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUVkaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ltcG9ydEZyb21GYWN0b3J5L0ltcG9ydEZyb21GYWN0b3J5RWRpdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWxsL1NlbGxFZGl0LmpzIl0sIm5hbWVzIjpbIlZpTG9jYWxpemVkVXRpbHMiLCJkYXRlIiwiZm9ybWF0IiwibG9jYWxlIiwiRGF0ZUZuc1V0aWxzIiwibG9jYWxlTWFwIiwiZW4iLCJlbkxvY2FsZSIsInZpIiwidmlMb2NhbCIsImxvY2FsZVV0aWxzTWFwIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImRldGFpbCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm9wdGlvbiIsInJlZCIsInBvcHBlciIsInRleHRGaWVsZCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJFeHBvcnRUb0ZhY3RvcnlFZGl0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwiZXhwb3J0VG9GYWN0b3J5Q29kZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkZvY3VzIiwiZXhwb3J0VG9GYWN0b3J5Q29kZUZvY3VzSGFuZGxlciIsImF1dG9Gb2N1cyIsInZhbGlkYXRpb24iLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsImVtcGxveWVlSWQiLCJleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwicHJvZHVjdElkIiwiZXhwb3J0VG9GYWN0b3J5UHJvZHVjdElkRm9jdXNIYW5kbGVyIiwiZ29sZFR5cGVJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHQiLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRGb2N1c0hhbmRsZXIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiZ29sZFVuaXRJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eSIsImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZSIsImV4cG9ydFRvRmFjdG9yeURhdGVGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlOb3RlIiwiZXhwb3J0VG9GYWN0b3J5Tm90ZUZvY3VzSGFuZGxlciIsInJlbmRlckRlcHQiLCJwYXJhbXMiLCJncm91cCIsImRlcHRMaXN0IiwiZGVwdHMiLCJmaW5kIiwiZGVwdCIsImlkIiwibmFtZSIsImNoaWxkcmVuIiwicmVuZGVyUHJvZHVjdFR5cGUiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0VHlwZXMiLCJwcm9kdWN0VHlwZSIsInJvd0dldHRlciIsImluZGV4IiwicHJvZHVjdCIsInByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJpdGVtIiwiZXhwb3J0VG9GYWN0b3J5RGV0YWlscyIsInByb2R1Y3ROYW1lIiwiZ29sZFR5cGUiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZXMiLCJnb2xkVHlwZU5hbWUiLCJnb2xkVW5pdCIsImdvbGRVbml0TGlzdCIsImdvbGRVbml0cyIsImdvbGRVbml0TmFtZSIsInJvd0NsaWNrIiwiZXZlbnQiLCJleHBvcnRUb0ZhY3RvcnlEZXRhaWxFZGl0Iiwicm93RGF0YSIsImdldE9wdGlvblNlbGVjdGVkIiwidmFsdWUiLCJvcHRpb25JZCIsInZhbHVlSWQiLCJleHBvcnRUb0ZhY3RvcnlTYXZlSGFuZGxlciIsInZhbGlkIiwidG91Y2hlZCIsImV4cG9ydFRvRmFjdG9yeUNvZGVDaGFuZ2VkIiwiZW1wbG95ZWVMaXN0IiwiZW1wbG95ZWVzIiwic2VsZWN0ZWRJdGVtIiwiZXhwb3J0VG9GYWN0b3J5RW1wbG95ZWVJZENoYW5nZWQiLCJkZXB0SWQiLCJlbXBsb3llZSIsImlucHV0UHJvcHMiLCJtaW5XaWR0aCIsImV4cG9ydFRvRmFjdG9yeURhdGVDaGFuZ2VkIiwidGFyZ2V0Iiwid2VpZ2h0VG90YWwiLCJxdWFudGl0eVRvdGFsIiwiZXhwb3J0VG9GYWN0b3J5Tm90ZUNoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkIiwicHJvZHVjdFR5cGVJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkIiwiZGVjaW1hbFNjYWxlIiwiaW5wdXRDb21wb25lbnQiLCJOdW1iZXJGb3JtYXRDdXN0b20iLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRDaGFuZ2VkIiwiZXhwb3J0VG9GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQiLCJtYXAiLCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eUNoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlBZGREZXRhaWxIYW5kbGVyIiwibGVuZ3RoIiwiZmxleEdyb3ciLCJsYWJlbCIsImRhdGFLZXkiLCJudW1lcmljIiwiZXhwb3J0VG9GYWN0b3J5Q3JlYXRlSGFuZGxlciIsIkltcG9ydEZyb21GYWN0b3J5RWRpdCIsImltcG9ydEZyb21GYWN0b3J5Q29kZSIsImltcG9ydEZyb21GYWN0b3J5Q29kZUZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZEZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQiLCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodEZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZEZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkiLCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxFZGl0IiwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlQ2hhbmdlZCIsImtleSIsImltcG9ydEZyb21GYWN0b3J5Q29kZUVudGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5RGF0ZUNoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeU5vdGVDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0Q2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Q2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5VXBkYXRlRGV0YWlsSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5Q3JlYXRlSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5U2F2ZUhhbmRsZXIiLCJQdXJjaGFzZUVkaXQiLCJwdXJjaGFzZUNvZGUiLCJwdXJjaGFzZUNvZGVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0IiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5IiwicHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGF0ZSIsInB1cmNoYXNlRGF0ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlTm90ZSIsInB1cmNoYXNlTm90ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGV0YWlscyIsInB1cmNoYXNlRGV0YWlsRWRpdCIsInB1cmNoYXNlU2F2ZUhhbmRsZXIiLCJwdXJjaGFzZUNvZGVDaGFuZ2VkIiwicHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZCIsInB1cmNoYXNlRGF0ZUNoYW5nZWQiLCJwdXJjaGFzZU5vdGVDaGFuZ2VkIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsInB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlQWRkRGV0YWlsSGFuZGxlciIsInB1cmNoYXNlQ3JlYXRlSGFuZGxlciIsIlNlbGxFZGl0Iiwic2VsbENvZGUiLCJzZWxsQ29kZUZvY3VzSGFuZGxlciIsInNlbGxFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwic2VsbFByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInNlbGxHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwic2VsbFdlaWdodCIsInNlbGxXZWlnaHRGb2N1c0hhbmRsZXIiLCJzZWxsR29sZFVuaXRJZEZvY3VzSGFuZGxlciIsInNlbGxRdWFudGl0eSIsInNlbGxRdWFudGl0eUZvY3VzSGFuZGxlciIsInNlbGxEYXRlIiwic2VsbERhdGVGb2N1c0hhbmRsZXIiLCJzZWxsTm90ZSIsInNlbGxOb3RlRm9jdXNIYW5kbGVyIiwic2VsbERldGFpbHMiLCJzZWxsRGV0YWlsRWRpdCIsInNlbGxTYXZlSGFuZGxlciIsInNlbGxDb2RlQ2hhbmdlZCIsInNlbGxFbXBsb3llZUlkQ2hhbmdlZCIsInNlbGxEYXRlQ2hhbmdlZCIsInNlbGxOb3RlQ2hhbmdlZCIsInNlbGxQcm9kdWN0SWRDaGFuZ2VkIiwic2VsbEdvbGRUeXBlSWRDaGFuZ2VkIiwic2VsbFdlaWdodENoYW5nZWQiLCJzZWxsR29sZFVuaXRJZENoYW5nZWQiLCJzZWxsUXVhbnRpdHlDaGFuZ2VkIiwic2VsbEFkZERldGFpbEhhbmRsZXIiLCJzZWxsQ3JlYXRlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7OzRDQUNvQkMsSSxFQUFNO0FBQzVCLGFBQU9DLGdFQUFNLENBQUNELElBQUQsRUFBTyxZQUFQLEVBQXFCO0FBQUVFLGNBQU0sRUFBRSxLQUFLQTtBQUFmLE9BQXJCLENBQWI7QUFDRDs7OztFQUg0QkMsMEQ7O0FBTS9CLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFQyw4REFEWTtBQUVoQkMsSUFBRSxFQUFFQywyREFBT0E7QUFGSyxDQUFsQjtBQUtBLElBQU1DLGNBQWMsR0FBRztBQUNyQkosSUFBRSxFQUFFRiwwREFEaUI7QUFFckJJLElBQUUsRUFBRVI7QUFGaUIsQ0FBdkI7QUFLQTs7QUFDQSxJQUFNVyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQURpQztBQUt2Q0MsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU5DLFlBQU0sRUFB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RFo2TCxRO0FBa29CU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFuYWdlU3RvcmUuODNkOTZhMjA0MzNkODIxZmI3M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBMaXN0U3ViaGVhZGVyLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG4gIFRleHRhcmVhQXV0b3NpemUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIGltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuLy9pbXBvcnQgSW5wdXRGaWxlIGZyb20gJy4uL1VJL0lucHV0RmlsZS9JbnB1dEZpbGUnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuXHJcbmltcG9ydCBOdW1iZXJGb3JtYXRDdXN0b20gZnJvbSBcIi4uL1VJL0lucHV0TnVtYmVyL051bWJlckZvcm1hdEN1c3RvbVwiO1xyXG5pbXBvcnQgTXVpVmlydHVhbGl6ZWRUYWJsZSBmcm9tIFwiLi4vVUkvVGFibGUvTXVpVmlydHVhbGl6ZWRUYWJsZVwiO1xyXG5cclxuY2xhc3MgVmlMb2NhbGl6ZWRVdGlscyBleHRlbmRzIERhdGVGbnNVdGlscyB7XHJcbiAgZ2V0RGF0ZVBpY2tlckhlYWRlclRleHQoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBcImRkL01NL3l5eXlcIiwgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsZVV0aWxzTWFwID0ge1xyXG4gIGVuOiBEYXRlRm5zVXRpbHMsXHJcbiAgdmk6IFZpTG9jYWxpemVkVXRpbHMsXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgZGV0YWlsOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgRXhwb3J0VG9GYWN0b3J5RWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeUNvZGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3Do1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeUNvZGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZW1wbG95ZWVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlHb2xkVHlwZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeVdlaWdodCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0cuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlXZWlnaHQuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAwLjEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTk5OTk5OTkuOSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFVuaXRJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwixJDGoW4gduG7i1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlHb2xkVW5pdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeVF1YW50aXR5ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHPhu5EgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHkuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAxLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlEYXRlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmfDoHkgeHXhuqV0XCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeURhdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGF0ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5Tm90ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgZ2hpIGNow7pcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5Tm90ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlOb3RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7cHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApLm5hbWV9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RUeXBlID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMucHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PSBwYXJhbXMuZ3JvdXBcclxuICAgICAgICApLm5hbWVcclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dHZXR0ZXIgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0TmFtZS5cclxuICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdElkXHJcbiAgICApO1xyXG4gICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFR5cGVOYW1lLlxyXG4gICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVHlwZUlkXHJcbiAgICApO1xyXG4gICAgaWYgKCFnb2xkVHlwZSkge1xyXG4gICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRVbml0TmFtZS5cclxuICAgIGxldCBnb2xkVW5pdCA9IHByb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFVuaXRJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFVuaXQpIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4uXHJcbiAgICByZXR1cm4gcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm93Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbEVkaXQoZXZlbnQsIGV2ZW50LnJvd0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgdmFsdWUpID0+IHtcclxuICAgIC8qIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgfSAqL1xyXG4gICAgaWYgKCFvcHRpb24gfHwgIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25JZCA9IG9wdGlvbi5pZDtcclxuICAgIGlmICghb3B0aW9uSWQpIHtcclxuICAgICAgb3B0aW9uSWQgPSBvcHRpb247XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVJZCA9IHZhbHVlLmlkO1xyXG4gICAgaWYgKCF2YWx1ZUlkKSB7XHJcbiAgICAgIHZhbHVlSWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25JZCA9PSB2YWx1ZUlkO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9eyAhcHJvcHMuZXhwb3J0VG9GYWN0b3J5Q29kZS52YWxpZCA/IFwiVnVpIGzDsm5nIG5o4bqtcCB2w6BvIVwiIDogXCJQZXJmZWN0IVwiIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXhwb3J0VG9GYWN0b3J5Q29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcImV4cG9ydFRvRmFjdG9yeUNvZGVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw6NcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4uZXhwb3J0VG9GYWN0b3J5Q29kZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZXhwb3J0VG9GYWN0b3J5Q29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXhwb3J0VG9GYWN0b3J5Q29kZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImVtcGxveWVlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gcHJvcHMuZW1wbG95ZWVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlh14bqldCBjaG9cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmVtcGxveWVlSWQudmFsaWQgJiBwcm9wcy5lbXBsb3llZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZW1wbG95ZWVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlclxyXG4gICAgICAgICAgICB1dGlscz17bG9jYWxlVXRpbHNNYXBbXCJ2aVwiXX1cclxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGVNYXBbXCJ2aVwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmV4cG9ydFRvRmFjdG9yeURhdGUudmFsaWQgJlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGF0ZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJleHBvcnRUb0ZhY3RvcnlEYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeURhdGVcIlxyXG4gICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgIHRvZGF5TGFiZWw9XCJIw7RtIG5heVwiXHJcbiAgICAgICAgICAgICAgY2FuY2VsTGFiZWw9XCJI4buneVwiXHJcbiAgICAgICAgICAgICAgY2xlYXJMYWJlbD1cIljDs2FcIlxyXG4gICAgICAgICAgICAgIG9rTGFiZWw9XCJDaOG7jW5cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmfDoHkgbmjhuq1wXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlEYXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHsuLi5leHBvcnRUb0ZhY3RvcnlEYXRlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGF0ZUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGV4cG9ydFRvRmFjdG9yeURhdGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuYW1lPVwiZXhwb3J0VG9GYWN0b3J5V2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeVdlaWdodFRvdGFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJU4buVbmcgdHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy53ZWlnaHRUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuYW1lPVwiZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucXVhbnRpdHlUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgcm93c01pbj17NH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5leHBvcnRUb0ZhY3RvcnlOb3RlLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlOb3RlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cImV4cG9ydFRvRmFjdG9yeU5vdGVcIlxyXG4gICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeU5vdGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdoaSBjaMO6XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLmV4cG9ydFRvRmFjdG9yeU5vdGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeU5vdGUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5Tm90ZUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGV4cG9ydFRvRmFjdG9yeU5vdGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJwcm9kdWN0SWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0SWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgLy8gICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBwcm9wcy5wcm9kdWN0SWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24ucHJvZHVjdFR5cGVJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlclByb2R1Y3RUeXBlfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmV4cG9ydFRvRmFjdG9yeVdlaWdodC52YWxpZCAmXHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRcIlxyXG4gICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4uZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0Q2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJnb2xkVW5pdC1zZWxlY3RcIj7EkMahbiB24buLPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVW5pdElkXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJnb2xkVW5pdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgey4uLmdvbGRVbml0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRVbml0SWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeUdvbGRVbml0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgZ29sZFVuaXRJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCItMVwiIGFyaWEtbGFiZWw9XCJOb25lXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5nb2xkVW5pdExpc3QuZ29sZFVuaXRzLm1hcCgoZ29sZFVuaXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z29sZFVuaXQuaWQgKyBpbmRleH0gdmFsdWU9e2dvbGRVbml0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z29sZFVuaXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwiZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5XCJcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBkZWNpbWFsU2NhbGU6IDAgfX1cclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiU+G7kSBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBleHBvcnRUb0ZhY3RvcnlRdWFudGl0eS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlBZGREZXRhaWxIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaMOqbSBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIHJvd0dldHRlcj17cm93R2V0dGVyfVxyXG4gICAgICAgICAgICAgIG9uUm93Q2xpY2s9e3Jvd0NsaWNrfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxv4bqhaSB2w6BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRUeXBlTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJUcuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLEkMahbiB24buLXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFVuaXROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhu5EgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJxdWFudGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbD1cInNlY29uZGFyeSBtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICAgICAge3Byb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IGl0ZW0ucHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdERpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGlzcGxheSA9IHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBpdGVtLmdvbGRUeXBlSWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZURpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEaXNwbGF5ID0gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57cHJvZHVjdERpc3BsYXl9PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57Z29sZFR5cGVEaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTGlzdD4gKi99XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHMubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEzGsHVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRUb0ZhY3RvcnlFZGl0O1xyXG4iLCJpbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgTGlzdFN1YmhlYWRlcixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUZXh0YXJlYUF1dG9zaXplLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbi8vaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBpbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSBcIkBkYXRlLWlvL2RhdGUtZm5zXCI7XHJcbmltcG9ydCB7XHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xyXG5pbXBvcnQgZW5Mb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xyXG5pbXBvcnQgdmlMb2NhbCBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL3ZpXCI7XHJcblxyXG5pbXBvcnQgTnVtYmVyRm9ybWF0Q3VzdG9tIGZyb20gXCIuLi9VSS9JbnB1dE51bWJlci9OdW1iZXJGb3JtYXRDdXN0b21cIjtcclxuaW1wb3J0IE11aVZpcnR1YWxpemVkVGFibGUgZnJvbSBcIi4uL1VJL1RhYmxlL011aVZpcnR1YWxpemVkVGFibGVcIjtcclxuaW1wb3J0IHsgRXZlbnRCdXN5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY2xhc3MgVmlMb2NhbGl6ZWRVdGlscyBleHRlbmRzIERhdGVGbnNVdGlscyB7XHJcbiAgZ2V0RGF0ZVBpY2tlckhlYWRlclRleHQoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBcImRkL01NL3l5eXlcIiwgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsZVV0aWxzTWFwID0ge1xyXG4gIGVuOiBEYXRlRm5zVXRpbHMsXHJcbiAgdmk6IFZpTG9jYWxpemVkVXRpbHMsXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgZGV0YWlsOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgSW1wb3J0RnJvbUZhY3RvcnlFZGl0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgLy8gICBzZXRQcm9kdWN0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlDb2RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw6NcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDb2RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDAuMSxcclxuICAgICAgbWF4VmFsdWU6IDk5OTk5OTk5OS45LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVW5pdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCLEkMahbiB24buLXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHPhu5EgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMSxcclxuICAgICAgbWF4VmFsdWU6IDk5OSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlEYXRlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmfDoHkgbmjhuq1wXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGF0ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURhdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5Tm90ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgZ2hpIGNow7pcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlOb3RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5Tm90ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGVwdCA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge3Byb3BzLmRlcHRMaXN0LmRlcHRzLmZpbmQoKGRlcHQpID0+IGRlcHQuaWQgPT0gcGFyYW1zLmdyb3VwKS5uYW1lfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9kdWN0VHlwZSA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT0gcGFyYW1zLmdyb3VwXHJcbiAgICAgICAgKS5uYW1lXHJcbiAgICAgIH1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgcm93R2V0dGVyID0gKHsgaW5kZXggfSkgPT4ge1xyXG4gICAgLy8gcHJvZHVjdE5hbWUuXHJcbiAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdElkXHJcbiAgICApO1xyXG4gICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5wcm9kdWN0TmFtZSA9IHByb2R1Y3QubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRUeXBlTmFtZS5cclxuICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVHlwZUlkXHJcbiAgICApO1xyXG4gICAgaWYgKCFnb2xkVHlwZSkge1xyXG4gICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBnb2xkVW5pdE5hbWUuXHJcbiAgICBsZXQgZ29sZFVuaXQgPSBwcm9wcy5nb2xkVW5pdExpc3QuZ29sZFVuaXRzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFVuaXRJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFVuaXQpIHtcclxuICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBnb2xkVW5pdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuLlxyXG4gICAgcmV0dXJuIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm93Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsRWRpdChldmVudCwgZXZlbnQucm93RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09IHZhbHVlSWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGUudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXsgIXByb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZS52YWxpZCA/IFwiVnVpIGzDsm5nIG5o4bqtcCB2w6BvIVwiIDogXCJQZXJmZWN0IVwiIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcOjXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLmltcG9ydEZyb21GYWN0b3J5Q29kZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5Q29kZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDb2RlRW50ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZW1wbG95ZWVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gcHJvcHMuZW1wbG95ZWVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVtcGxveWVlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24uZGVwdElkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyRGVwdH1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFlbXBsb3llZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmjhuq1wIHThu6tcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmVtcGxveWVlSWQudmFsaWQgJiBwcm9wcy5lbXBsb3llZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZW1wbG95ZWVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlclxyXG4gICAgICAgICAgICB1dGlscz17bG9jYWxlVXRpbHNNYXBbXCJ2aVwiXX1cclxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGVNYXBbXCJ2aVwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmltcG9ydEZyb21GYWN0b3J5RGF0ZS52YWxpZCAmXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURhdGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lPVwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5RGF0ZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIkjDtG0gbmF5XCJcclxuICAgICAgICAgICAgICBjYW5jZWxMYWJlbD1cIkjhu6d5XCJcclxuICAgICAgICAgICAgICBjbGVhckxhYmVsPVwiWMOzYVwiXHJcbiAgICAgICAgICAgICAgb2tMYWJlbD1cIkNo4buNblwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZ8OgeSBuaOG6rXBcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5RGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICB7Li4uaW1wb3J0RnJvbUZhY3RvcnlEYXRlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEYXRlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlEYXRlLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyB0cuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLndlaWdodFRvdGFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucXVhbnRpdHlUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgcm93c01pbj17NH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeU5vdGUudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5Tm90ZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiZmFsc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJpbXBvcnRGcm9tRmFjdG9yeU5vdGVcIlxyXG4gICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5Tm90ZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiR2hpIGNow7pcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4uaW1wb3J0RnJvbUZhY3RvcnlOb3RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeU5vdGUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlOb3RlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24ucHJvZHVjdFR5cGVJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlclByb2R1Y3RUeXBlfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5R29sZFR5cGVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTG/huqFpIHbDoG5nXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5nb2xkVHlwZUlkLnZhbGlkICYgcHJvcHMuZ29sZFR5cGVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmdvbGRUeXBlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMSB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4uaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJnb2xkVW5pdC1zZWxlY3RcIj7EkMahbiB24buLPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVW5pdElkXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJnb2xkVW5pdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgey4uLmdvbGRVbml0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRVbml0SWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICBnb2xkVW5pdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMubWFwKChnb2xkVW5pdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtnb2xkVW5pdC5pZCArIGluZGV4fSB2YWx1ZT17Z29sZFVuaXQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnb2xkVW5pdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS52YWxpZCAmXHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAwIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Q2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURldGFpbEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEPhuq1wIG5o4bqtdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlscy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgb25Sb3dDbGljaz17cm93Q2xpY2t9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4bqjbiBwaOG6qW1cIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG/huqFpIHbDoG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFR5cGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJ3ZWlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVW5pdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBhcmlhLWxhYmVsPVwic2Vjb25kYXJ5IG1haWxib3ggZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpdGVtLnByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3REaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpc3BsYXkgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gaXRlbS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGVEaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlRGlzcGxheSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e3Byb2R1Y3REaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e2dvbGRUeXBlRGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0xpc3Q+ICovfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlscy5sZW5ndGggPiAwfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0RnJvbUZhY3RvcnlFZGl0O1xyXG4iLCJpbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgTGlzdFN1YmhlYWRlcixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUZXh0YXJlYUF1dG9zaXplLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbi8vaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBpbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSBcIkBkYXRlLWlvL2RhdGUtZm5zXCI7XHJcbmltcG9ydCB7XHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xyXG5pbXBvcnQgZW5Mb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xyXG5pbXBvcnQgdmlMb2NhbCBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL3ZpXCI7XHJcblxyXG5pbXBvcnQgTnVtYmVyRm9ybWF0Q3VzdG9tIGZyb20gXCIuLi9VSS9JbnB1dE51bWJlci9OdW1iZXJGb3JtYXRDdXN0b21cIjtcclxuaW1wb3J0IE11aVZpcnR1YWxpemVkVGFibGUgZnJvbSBcIi4uL1VJL1RhYmxlL011aVZpcnR1YWxpemVkVGFibGVcIjtcclxuXHJcbmNsYXNzIFZpTG9jYWxpemVkVXRpbHMgZXh0ZW5kcyBEYXRlRm5zVXRpbHMge1xyXG4gIGdldERhdGVQaWNrZXJIZWFkZXJUZXh0KGRhdGUpIHtcclxuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgXCJkZC9NTS95eXl5XCIsIHsgbG9jYWxlOiB0aGlzLmxvY2FsZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvY2FsZU1hcCA9IHtcclxuICBlbjogZW5Mb2NhbGUsXHJcbiAgdmk6IHZpTG9jYWwsXHJcbn07XHJcblxyXG5jb25zdCBsb2NhbGVVdGlsc01hcCA9IHtcclxuICBlbjogRGF0ZUZuc1V0aWxzLFxyXG4gIHZpOiBWaUxvY2FsaXplZFV0aWxzLFxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIGRldGFpbDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIG9wdGlvbjoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgXCImIGlucHV0XCI6IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcG9wcGVyOiB7XHJcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNvbnN0IFB1cmNoYXNlRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHB1cmNoYXNlQ29kZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcOjXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlQ29kZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZUNvZGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZW1wbG95ZWVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlV2VpZ2h0ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VXZWlnaHQuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAwLjEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTk5OTk5OTkuOSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFVuaXRJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwixJDGoW4gduG7i1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VRdWFudGl0eSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBz4buRIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRGF0ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5nw6B5IG5o4bqtcFwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZURhdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VEYXRlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZU5vdGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIGdoaSBjaMO6XCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlTm90ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZU5vdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHt9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRlcHQgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtwcm9wcy5kZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09IHBhcmFtcy5ncm91cCkubmFtZX1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFR5cGUgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkubmFtZVxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIC8vIHByb2R1Y3ROYW1lLlxyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBnb2xkVHlwZU5hbWUuXHJcbiAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFVuaXROYW1lLlxyXG4gICAgbGV0IGdvbGRVbml0ID0gcHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRVbml0KSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybi5cclxuICAgIHJldHVybiBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5wdXJjaGFzZURldGFpbEVkaXQoZXZlbnQsIGV2ZW50LnJvd0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgdmFsdWUpID0+IHtcclxuICAgIC8qIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgfSAqL1xyXG4gICAgaWYgKCFvcHRpb24gfHwgIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25JZCA9IG9wdGlvbi5pZDtcclxuICAgIGlmICghb3B0aW9uSWQpIHtcclxuICAgICAgb3B0aW9uSWQgPSBvcHRpb247XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVJZCA9IHZhbHVlLmlkO1xyXG4gICAgaWYgKCF2YWx1ZUlkKSB7XHJcbiAgICAgIHZhbHVlSWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25JZCA9PSB2YWx1ZUlkO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLnB1cmNoYXNlU2F2ZUhhbmRsZXJ9PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlQ29kZS52YWxpZCAmIHByb3BzLnB1cmNoYXNlQ29kZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXsgIXByb3BzLnB1cmNoYXNlQ29kZS52YWxpZCA/IFwiVnVpIGzDsm5nIG5o4bqtcCB2w6BvIVwiIDogXCJQZXJmZWN0IVwiIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VDb2RlXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwicHVyY2hhc2VDb2RlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcOjXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlQ29kZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VDb2RlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlQ29kZUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlQ29kZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImVtcGxveWVlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gcHJvcHMuZW1wbG95ZWVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24uZGVwdElkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyRGVwdH1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFlbXBsb3llZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmfGsOG7nWkgbmjhuq1uXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5lbXBsb3llZUlkLnZhbGlkICYgcHJvcHMuZW1wbG95ZWVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmVtcGxveWVlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXJcclxuICAgICAgICAgICAgdXRpbHM9e2xvY2FsZVV0aWxzTWFwW1widmlcIl19XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlTWFwW1widmlcIl19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZURhdGUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZURhdGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lPVwicHVyY2hhc2VEYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cInB1cmNoYXNlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIkjDtG0gbmF5XCJcclxuICAgICAgICAgICAgICBjYW5jZWxMYWJlbD1cIkjhu6d5XCJcclxuICAgICAgICAgICAgICBjbGVhckxhYmVsPVwiWMOzYVwiXHJcbiAgICAgICAgICAgICAgb2tMYWJlbD1cIkNo4buNblwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZ8OgeSBuaOG6rXBcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlRGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICB7Li4ucHVyY2hhc2VEYXRlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VEYXRlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcHVyY2hhc2VEYXRlLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlV2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlV2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyB0cuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLndlaWdodFRvdGFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZVF1YW50aXR5VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlUXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucXVhbnRpdHlUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgcm93c01pbj17NH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZU5vdGUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZU5vdGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZhbHNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwicHVyY2hhc2VOb3RlXCJcclxuICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZU5vdGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdoaSBjaMO6XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlTm90ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VOb3RlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlTm90ZUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlTm90ZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLnByb2R1Y3RUeXBlSWR9XHJcbiAgICAgICAgICAgIHJlbmRlckdyb3VwPXtyZW5kZXJQcm9kdWN0VHlwZX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJT4bqjbiBwaOG6qW1cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLnByb2R1Y3RJZC52YWxpZCAmIHByb3BzLnByb2R1Y3RJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLnByb2R1Y3RJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImdvbGRUeXBlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRUeXBlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gcHJvcHMuZ29sZFR5cGVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbGlkICYgcHJvcHMucHVyY2hhc2VXZWlnaHQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlV2VpZ2h0XCJcclxuICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VXZWlnaHQudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZVdlaWdodC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZChldmVudCwgcHVyY2hhc2VXZWlnaHQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5nb2xkVW5pdElkLnZhbGlkICYgcHJvcHMuZ29sZFVuaXRJZC50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImdvbGRVbml0LXNlbGVjdFwiPsSQxqFuIHbhu4s8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRVbml0SWRcIixcclxuICAgICAgICAgICAgICAgIGlkOiBcImdvbGRVbml0LXNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICB7Li4uZ29sZFVuaXRJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFVuaXRJZC52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZChldmVudCwgZ29sZFVuaXRJZC52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PVwiLTFcIiBhcmlhLWxhYmVsPVwiTm9uZVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICB7cHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5tYXAoKGdvbGRVbml0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2dvbGRVbml0LmlkICsgaW5kZXh9IHZhbHVlPXtnb2xkVW5pdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2dvbGRVbml0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZVF1YW50aXR5LnZhbGlkICYgcHJvcHMucHVyY2hhc2VRdWFudGl0eS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwicHVyY2hhc2VRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAwIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlUXVhbnRpdHkuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZChldmVudCwgcHVyY2hhc2VRdWFudGl0eS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZUFkZERldGFpbEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRow6ptIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgPE11aVZpcnR1YWxpemVkVGFibGVcclxuICAgICAgICAgICAgICByb3dDb3VudD17cHJvcHMucHVyY2hhc2VEZXRhaWxzLmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dHZXR0ZXI9e3Jvd0dldHRlcn1cclxuICAgICAgICAgICAgICBvblJvd0NsaWNrPXtyb3dDbGlja31cclxuICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInByb2R1Y3ROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJMb+G6oWkgdsOgbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVHlwZU5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcIndlaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwixJDGoW4gduG7i1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRVbml0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4buRIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicXVhbnRpdHlcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiIGFyaWEtbGFiZWw9XCJzZWNvbmRhcnkgbWFpbGJveCBmb2xkZXJzXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5wdXJjaGFzZURldGFpbHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IGl0ZW0ucHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdERpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGlzcGxheSA9IHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBpdGVtLmdvbGRUeXBlSWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZURpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEaXNwbGF5ID0gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57cHJvZHVjdERpc3BsYXl9PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57Z29sZFR5cGVEaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTGlzdD4gKi99XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshcHJvcHMucHVyY2hhc2VEZXRhaWxzLmxlbmd0aCA+IDB9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VFZGl0O1xyXG4iLCJpbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRGl2aWRlcixcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgTGlzdFN1YmhlYWRlcixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUZXh0YXJlYUF1dG9zaXplLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbi8vaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBpbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSBcIkBkYXRlLWlvL2RhdGUtZm5zXCI7XHJcbmltcG9ydCB7XHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xyXG5pbXBvcnQgZW5Mb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xyXG5pbXBvcnQgdmlMb2NhbCBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL3ZpXCI7XHJcblxyXG5pbXBvcnQgTnVtYmVyRm9ybWF0Q3VzdG9tIGZyb20gXCIuLi9VSS9JbnB1dE51bWJlci9OdW1iZXJGb3JtYXRDdXN0b21cIjtcclxuaW1wb3J0IE11aVZpcnR1YWxpemVkVGFibGUgZnJvbSBcIi4uL1VJL1RhYmxlL011aVZpcnR1YWxpemVkVGFibGVcIjtcclxuXHJcbmNsYXNzIFZpTG9jYWxpemVkVXRpbHMgZXh0ZW5kcyBEYXRlRm5zVXRpbHMge1xyXG4gIGdldERhdGVQaWNrZXJIZWFkZXJUZXh0KGRhdGUpIHtcclxuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgXCJkZC9NTS95eXl5XCIsIHsgbG9jYWxlOiB0aGlzLmxvY2FsZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvY2FsZU1hcCA9IHtcclxuICBlbjogZW5Mb2NhbGUsXHJcbiAgdmk6IHZpTG9jYWwsXHJcbn07XHJcblxyXG5jb25zdCBsb2NhbGVVdGlsc01hcCA9IHtcclxuICBlbjogRGF0ZUZuc1V0aWxzLFxyXG4gIHZpOiBWaUxvY2FsaXplZFV0aWxzLFxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIGRldGFpbDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIG9wdGlvbjoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgXCImIGlucHV0XCI6IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcG9wcGVyOiB7XHJcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNvbnN0IFNlbGxFZGl0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgLy8gICBzZXRQcm9kdWN0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgc2VsbENvZGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3Do1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsQ29kZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsQ29kZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxFbXBsb3llZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsUHJvZHVjdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbEdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgc2VsbFdlaWdodCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0cuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxXZWlnaHRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbFdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDAuMSxcclxuICAgICAgbWF4VmFsdWU6IDk5OTk5OTk5OS45LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVW5pdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCLEkMahbiB24buLXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxHb2xkVW5pdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxRdWFudGl0eSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBz4buRIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxRdWFudGl0eUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsUXVhbnRpdHkuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAxLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsRGF0ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5nw6B5IHh14bqldFwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsRGF0ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsRGF0ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgc2VsbE5vdGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIGdoaSBjaMO6XCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxOb3RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxOb3RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7cHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApLm5hbWV9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RUeXBlID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMucHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PSBwYXJhbXMuZ3JvdXBcclxuICAgICAgICApLm5hbWVcclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dHZXR0ZXIgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0TmFtZS5cclxuICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFR5cGVOYW1lLlxyXG4gICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRVbml0TmFtZS5cclxuICAgIGxldCBnb2xkVW5pdCA9IHByb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRVbml0KSB7XHJcbiAgICAgIHByb3BzLnNlbGxEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4uXHJcbiAgICByZXR1cm4gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5zZWxsRGV0YWlsRWRpdChldmVudCwgZXZlbnQucm93RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09IHZhbHVlSWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuc2VsbFNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsQ29kZS52YWxpZCAmIHByb3BzLnNlbGxDb2RlLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXsgIXByb3BzLnNlbGxDb2RlLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzZWxsQ29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInNlbGxDb2RlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcOjXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnNlbGxDb2RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsQ29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsQ29kZUNoYW5nZWQoZXZlbnQsIHNlbGxDb2RlLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZW1wbG95ZWVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1wbG95ZWVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBwcm9wcy5lbXBsb3llZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxFbXBsb3llZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5nxrDhu51pIHh14bqldFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVJZC52YWxpZCAmIHByb3BzLmVtcGxveWVlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5lbXBsb3llZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIHV0aWxzPXtsb2NhbGVVdGlsc01hcFtcInZpXCJdfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZU1hcFtcInZpXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuc2VsbERhdGUudmFsaWQgJiBwcm9wcy5zZWxsRGF0ZS50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWxsRGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWxsRGF0ZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIkjDtG0gbmF5XCJcclxuICAgICAgICAgICAgICBjYW5jZWxMYWJlbD1cIkjhu6d5XCJcclxuICAgICAgICAgICAgICBjbGVhckxhYmVsPVwiWMOzYVwiXHJcbiAgICAgICAgICAgICAgb2tMYWJlbD1cIkNo4buNblwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZ8OgeSBuaOG6rXBcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNlbGxEYXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHsuLi5zZWxsRGF0ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLnNlbGxEYXRlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgc2VsbERhdGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuYW1lPVwic2VsbFdlaWdodFRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsV2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyB0cuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLndlaWdodFRvdGFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsUXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbFF1YW50aXR5VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyBz4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnF1YW50aXR5VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXHJcbiAgICAgICAgICAgIHJvd3NNaW49ezR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuc2VsbE5vdGUudmFsaWQgJiBwcm9wcy5zZWxsTm90ZS50b3VjaGVkID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwic2VsbE5vdGVcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGxOb3RlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJHaGkgY2jDulwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5zZWxsTm90ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VsbE5vdGUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuc2VsbE5vdGVDaGFuZ2VkKGV2ZW50LCBzZWxsTm90ZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsUHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24ucHJvZHVjdFR5cGVJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlclByb2R1Y3RUeXBlfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxHb2xkVHlwZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb+G6oWkgdsOgbmdcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmdvbGRUeXBlSWQudmFsaWQgJiBwcm9wcy5nb2xkVHlwZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZ29sZFR5cGVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsV2VpZ2h0LnZhbGlkICYgcHJvcHMuc2VsbFdlaWdodC50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInNlbGxXZWlnaHRcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGxXZWlnaHRcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMSB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNlbGxXZWlnaHQudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5zZWxsV2VpZ2h0LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuc2VsbFdlaWdodENoYW5nZWQoZXZlbnQsIHNlbGxXZWlnaHQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5nb2xkVW5pdElkLnZhbGlkICYgcHJvcHMuZ29sZFVuaXRJZC50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImdvbGRVbml0LXNlbGVjdFwiPsSQxqFuIHbhu4s8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRVbml0SWRcIixcclxuICAgICAgICAgICAgICAgIGlkOiBcImdvbGRVbml0LXNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICB7Li4uZ29sZFVuaXRJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFVuaXRJZC52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsbEdvbGRVbml0SWRDaGFuZ2VkKGV2ZW50LCBnb2xkVW5pdElkLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCItMVwiIGFyaWEtbGFiZWw9XCJOb25lXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5nb2xkVW5pdExpc3QuZ29sZFVuaXRzLm1hcCgoZ29sZFVuaXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z29sZFVuaXQuaWQgKyBpbmRleH0gdmFsdWU9e2dvbGRVbml0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z29sZFVuaXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnNlbGxRdWFudGl0eS52YWxpZCAmIHByb3BzLnNlbGxRdWFudGl0eS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwic2VsbFF1YW50aXR5XCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMCB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNlbGxRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnNlbGxRdWFudGl0eS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxRdWFudGl0eUNoYW5nZWQoZXZlbnQsIHNlbGxRdWFudGl0eS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZWxsQWRkRGV0YWlsSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGjDqm0gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICAgICAgICA8TXVpVmlydHVhbGl6ZWRUYWJsZVxyXG4gICAgICAgICAgICAgIHJvd0NvdW50PXtwcm9wcy5zZWxsRGV0YWlscy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgb25Sb3dDbGljaz17cm93Q2xpY2t9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4bqjbiBwaOG6qW1cIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG/huqFpIHbDoG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFR5cGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJ3ZWlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVW5pdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBhcmlhLWxhYmVsPVwic2Vjb25kYXJ5IG1haWxib3ggZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMuc2VsbERldGFpbHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IGl0ZW0ucHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdERpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGlzcGxheSA9IHByb2R1Y3QubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBpdGVtLmdvbGRUeXBlSWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZURpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEaXNwbGF5ID0gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57cHJvZHVjdERpc3BsYXl9PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dD57Z29sZFR5cGVEaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTGlzdD4gKi99XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnNlbGxDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBU4bqhbyBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5zZWxsRGV0YWlscy5sZW5ndGggPiAwfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGxFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9