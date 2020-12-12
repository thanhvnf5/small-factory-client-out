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
      placeholder: "Xuất cho",
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
      placeholder: "Chọn loại vàng",
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
      placeholder: "Chọn nhân viên",
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
      placeholder: "Chọn loại vàng",
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
      placeholder: "Chọn người mua",
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
      placeholder: "Chọn loại vàng",
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
      placeholder: "Chọn người bán",
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
      placeholder: "Chọn loại vàng",
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

/***/ }),

/***/ "./src/containers/FactoryTransferContainer/FactoryTransferContainer.js":
/*!*****************************************************************************!*\
  !*** ./src/containers/FactoryTransferContainer/FactoryTransferContainer.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_ExportToFactory_ExportToFactoryEdit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/ExportToFactory/ExportToFactoryEdit */ "./src/components/ExportToFactory/ExportToFactoryEdit.js");
/* harmony import */ var _components_ExportToFactory_ExportToFactoryList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/ExportToFactory/ExportToFactoryList */ "./src/components/ExportToFactory/ExportToFactoryList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/factoryTransferAction */ "./src/store/actions/factoryTransferAction.js");
/* harmony import */ var _store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/deptAction */ "./src/store/actions/deptAction.js");
/* harmony import */ var _store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../store/actions/employeeAction */ "./src/store/actions/employeeAction.js");
/* harmony import */ var _store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../store/actions/productTypeAction */ "./src/store/actions/productTypeAction.js");
/* harmony import */ var _store_actions_productAction__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../store/actions/productAction */ "./src/store/actions/productAction.js");
/* harmony import */ var _store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../store/actions/goldTypeAction */ "./src/store/actions/goldTypeAction.js");
/* harmony import */ var _store_actions_goldUnitAction__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../store/actions/goldUnitAction */ "./src/store/actions/goldUnitAction.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _components_UI_List_TransferList__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../components/UI/List/TransferList */ "./src/components/UI/List/TransferList.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





























 //import { throws } from 'assert';

/************************************************** styles */

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: "100%"
    },
    grid: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({
      height: "auto",
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "flex-start"
    }, theme.breakpoints.up("sm"), {
      display: "flex",
      flexWrap: "wrap",
      boxSizing: "border-box"
    }),
    list: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({
      height: "50vh",
      border: "1px solid #d9dddd"
    }, theme.breakpoints.up("sm"), {
      height: "90vh"
    }),
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  };
};
/************************************************** Constructor */


var FactoryTransferContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FactoryTransferContainer, _Component);

  var _super = _createSuper(FactoryTransferContainer);

  function FactoryTransferContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FactoryTransferContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isDialogOpen: false,
      dialogContent: null,
      isOpenAlert: false,
      alertContent: null,
      selectedItem: null,
      selectedItemType: null,
      senderId: {
        elementConfig: {
          type: "select",
          placeholder: "Chọn người chuyển",
          onFocus: _this.senderIdFocusHandler
        },
        validation: {
          required: true
        }
      },
      receiverId: {
        elementConfig: {
          type: "select",
          placeholder: "Chọn người nhận",
          onFocus: _this.receiverIdFocusHandler
        },
        validation: {
          required: true
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "senderIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.senderIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "receiverIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.receiverIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "senderIdChangedHander", function (event, selectedItem, validation) {
      event.preventDefault();
      var senderId = null;

      if (selectedItem) {
        senderId = selectedItem.id;
      }

      _this.props.senderIdChangedDispatch(senderId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "receiverIdChangedHander", function (event, selectedItem, validation) {
      event.preventDefault();
      var receiverId = null;

      if (selectedItem) {
        receiverId = selectedItem.id;
      }

      _this.props.receiverIdChangedDispatch(receiverId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "transferListSaveHandler", function (event, left, right) {
      event.preventDefault(); // Get new items in the left list.

      var leftNewItems = _this.props.factoryTransfer.receiverIdList.filter(function (itema) {
        return left.filter(function (itemb) {
          return itema.id == itemb.key;
        }).length > 0;
      }); // Get new items in the right list.


      var rightNewItems = _this.props.factoryTransfer.senderIdList.filter(function (itema) {
        return right.filter(function (itemb) {
          return itema.id == itemb.key;
        }).length > 0;
      });

      var factoryTransfers = []; // Push new items in the left list.

      leftNewItems.forEach(function (item) {
        factoryTransfers.push({
          senderId: item.receiverId,
          receiverId: _this.props.factoryTransfer.senderId.value,
          code: item.code
        });
      }); // Push new items in the right list.

      rightNewItems.forEach(function (item) {
        factoryTransfers.push({
          senderId: item.receiverId,
          receiverId: _this.props.factoryTransfer.receiverId.value,
          code: item.code
        });
      });

      if (factoryTransfers.length > 0) {
        _this.props.factoryTransferAddsDispatch(factoryTransfers);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null,
        // isOpenAlert: true,
        alertContent: "Lưu"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderDept", function (params) {
      return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
        key: params.group,
        component: "div"
      }, _this.props.deptList.depts.find(function (dept) {
        return dept.id == params.group;
      }).name), params.children];
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getOptionSelected", function (option, value) {
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
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.exportToFactoryDeleteDispatch(_this.state.selectedItem.id, _this.state.selectedItem.version);

        _this.setState({
          isDialogOpen: false,
          selectedItem: null,
          selectedItemType: null
        });
      } else {
        _this.setState({
          isDialogOpen: false
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "PaperComponent", function (props) {
      return __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_19___default.a, {
        handle: "#draggable-dialog-title",
        cancel: '[class*="MuiDialogContent-root"]'
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], props));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCloseAlert", function () {
      _this.setState({
        isOpenAlert: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FactoryTransferContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.deptListDispatch();
      this.props.employeeListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error || this.props.deptError || this.props.employeeError) {
        if (this.props.error.response && this.props.error.response.status == 401 || this.props.deptError.response && this.props.deptError.response.status == 401 || this.props.employeeError.response && this.props.employeeError.response.status == 401) {
          // this.props.exportToFactoryErrorHandledDispatch();
          // throw new Error("An error has occured in Buggy component!");
          this.props.onLogout(); // Router.push("/sigin");
          // this.setState({
          //   isDialogOpen: true,
          //   dialogContent: "Lỗi đăng nhập!",
          // });
        }
      }
    }
  }, {
    key: "render",

    /************************************************** render */
    value: function render() {
      var _this2 = this;

      console.log(new Date().toLocaleString() + " ............ ExportToFactoryContainer render");
      var classes = this.props.classes;
      return __jsx("div", {
        className: classes.root
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success"
      }, this.state.alertContent + " thành công.")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.isDialogOpen,
        onClose: function onClose(event) {
          return _this2.dialogClose(event);
        },
        PaperComponent: this.PaperComponent,
        "aria-labelledby": "draggable-dialog-title"
      }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          cursor: "move"
        },
        id: "draggable-dialog-title"
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], null, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        autoFocus: true,
        onClick: function onClick(event) {
          return _this2.dialogClose(event);
        },
        color: "primary"
      }, "H\u1EE7y"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick(event) {
          return _this2.dialogClose(event, true);
        },
        color: "primary"
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], null, "Chuy\u1EC3n \u0111\u1ED5i")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 2,
        justify: "center",
        alignItems: "center",
        className: classes.grid
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 6
      }, this.props.factoryTransfer.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Autocomplete"], {
        id: "senderId-select",
        options: this.props.employeeList.employees,
        classes: {
          option: classes.option
        },
        autoHighlight: true,
        value: this.props.factoryTransfer.senderId.value,
        onChange: function onChange(event, selectedItem) {
          _this2.senderIdChangedHander(event, selectedItem, _this2.state.senderId.validation);
        },
        groupBy: function groupBy(option) {
          return option.deptId;
        },
        renderGroup: this.renderDept,
        getOptionLabel: function getOptionLabel(option) {
          if (option && option.id) {
            return option.name;
          }

          var employee = _this2.props.employeeList.employees.find(function (employee) {
            return employee.id == option;
          });

          if (!employee) {
            return "";
          } else {
            return employee.name;
          }
        },
        getOptionSelected: this.getOptionSelected,
        renderOption: function renderOption(option) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, option.name);
        },
        renderInput: function renderInput(params) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
            inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
              // autoComplete: 'new-password', // disable autocomplete and autofill
              name: "senderId-option",
              id: "senderId-option"
            }),
            style: {
              minWidth: 200
            },
            required: true,
            label: "T\u1EEB",
            margin: "normal",
            error: !_this2.props.factoryTransfer.senderId.valid & _this2.props.factoryTransfer.senderId.touched ? true : false
          }, _this2.state.senderId.elementConfig));
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 6
      }, this.props.factoryTransfer.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Autocomplete"], {
        id: "receiverId-select",
        options: this.props.employeeList.employees,
        classes: {
          option: classes.option
        },
        autoHighlight: true,
        value: this.props.factoryTransfer.receiverId.value,
        onChange: function onChange(event, selectedItem) {
          _this2.receiverIdChangedHander(event, selectedItem, _this2.state.receiverId.validation);
        },
        groupBy: function groupBy(option) {
          return option.deptId;
        },
        renderGroup: this.renderDept,
        getOptionLabel: function getOptionLabel(option) {
          if (option && option.id) {
            return option.name;
          }

          var employee = _this2.props.employeeList.employees.find(function (employee) {
            return employee.id == option;
          });

          if (!employee) {
            return "";
          } else {
            return employee.name;
          }
        },
        getOptionSelected: this.getOptionSelected,
        renderOption: function renderOption(option) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, option.name);
        },
        renderInput: function renderInput(params) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
            inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
              // autoComplete: 'new-password', // disable autocomplete and autofill
              name: "receiverId-option",
              id: "receiverId-option"
            }),
            style: {
              minWidth: 200
            },
            required: true,
            label: "\u0110\u1EBFn",
            margin: "normal",
            error: !_this2.props.factoryTransfer.receiverId.valid & _this2.props.factoryTransfer.receiverId.touched ? true : false
          }, _this2.state.receiverId.elementConfig));
        }
      })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list
      }, this.props.factoryTransfer.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_components_UI_List_TransferList__WEBPACK_IMPORTED_MODULE_35__["default"], {
        left: this.props.factoryTransfer.senderIdList.map(function (item) {
          return {
            key: item.id,
            value: item.code
          };
        }),
        right: this.props.factoryTransfer.receiverIdList.map(function (item) {
          return {
            key: item.id,
            value: item.code
          };
        }),
        transferListSaveHandler: function transferListSaveHandler(event, left, right) {
          return _this2.transferListSaveHandler(event, left, right);
        }
      }))));
    }
  }]);

  return FactoryTransferContainer;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    factoryTransfer: state.factoryTransfer,
    deptList: state.dept.deptList,
    employeeList: state.employee.employeeList,
    error: state.exportToFactory.error,
    deptError: state.dept.error,
    employeeError: state.employee.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deptListDispatch: function deptListDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptList"]());
    },
    employeeListDispatch: function employeeListDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_29__["employeeListInFactory"]());
    },
    senderIdFocusDispatch: function senderIdFocusDispatch() {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["senderIdFocus"]());
    },
    senderIdChangedDispatch: function senderIdChangedDispatch(value, validation) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["senderIdChanged"](value, validation));
    },
    senderIdListDispatch: function senderIdListDispatch(senderId) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["senderIdList"](senderId));
    },
    receiverIdFocusDispatch: function receiverIdFocusDispatch() {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["receiverIdFocus"]());
    },
    receiverIdChangedDispatch: function receiverIdChangedDispatch(value, validation) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["receiverIdChanged"](value, validation));
    },
    receiverIdListDispatch: function receiverIdListDispatch(receiverId) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["receiverIdList"](receiverId));
    },
    factoryTransferAddsDispatch: function factoryTransferAddsDispatch(factoryTrasfers) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["adds"](factoryTrasfers));
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_34__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(FactoryTransferContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUVkaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ltcG9ydEZyb21GYWN0b3J5L0ltcG9ydEZyb21GYWN0b3J5RWRpdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWxsL1NlbGxFZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9GYWN0b3J5VHJhbnNmZXJDb250YWluZXIvRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlZpTG9jYWxpemVkVXRpbHMiLCJkYXRlIiwiZm9ybWF0IiwibG9jYWxlIiwiRGF0ZUZuc1V0aWxzIiwibG9jYWxlTWFwIiwiZW4iLCJlbkxvY2FsZSIsInZpIiwidmlMb2NhbCIsImxvY2FsZVV0aWxzTWFwIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImRldGFpbCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm9wdGlvbiIsInJlZCIsInBvcHBlciIsInRleHRGaWVsZCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJFeHBvcnRUb0ZhY3RvcnlFZGl0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwiZXhwb3J0VG9GYWN0b3J5Q29kZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkZvY3VzIiwiZXhwb3J0VG9GYWN0b3J5Q29kZUZvY3VzSGFuZGxlciIsImF1dG9Gb2N1cyIsInZhbGlkYXRpb24iLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsImVtcGxveWVlSWQiLCJleHBvcnRUb0ZhY3RvcnlFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwicHJvZHVjdElkIiwiZXhwb3J0VG9GYWN0b3J5UHJvZHVjdElkRm9jdXNIYW5kbGVyIiwiZ29sZFR5cGVJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHQiLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRGb2N1c0hhbmRsZXIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiZ29sZFVuaXRJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eSIsImV4cG9ydFRvRmFjdG9yeVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZSIsImV4cG9ydFRvRmFjdG9yeURhdGVGb2N1c0hhbmRsZXIiLCJleHBvcnRUb0ZhY3RvcnlOb3RlIiwiZXhwb3J0VG9GYWN0b3J5Tm90ZUZvY3VzSGFuZGxlciIsInJlbmRlckRlcHQiLCJwYXJhbXMiLCJncm91cCIsImRlcHRMaXN0IiwiZGVwdHMiLCJmaW5kIiwiZGVwdCIsImlkIiwibmFtZSIsImNoaWxkcmVuIiwicmVuZGVyUHJvZHVjdFR5cGUiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0VHlwZXMiLCJwcm9kdWN0VHlwZSIsInJvd0dldHRlciIsImluZGV4IiwicHJvZHVjdCIsInByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJpdGVtIiwiZXhwb3J0VG9GYWN0b3J5RGV0YWlscyIsInByb2R1Y3ROYW1lIiwiZ29sZFR5cGUiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZXMiLCJnb2xkVHlwZU5hbWUiLCJnb2xkVW5pdCIsImdvbGRVbml0TGlzdCIsImdvbGRVbml0cyIsImdvbGRVbml0TmFtZSIsInJvd0NsaWNrIiwiZXZlbnQiLCJleHBvcnRUb0ZhY3RvcnlEZXRhaWxFZGl0Iiwicm93RGF0YSIsImdldE9wdGlvblNlbGVjdGVkIiwidmFsdWUiLCJvcHRpb25JZCIsInZhbHVlSWQiLCJleHBvcnRUb0ZhY3RvcnlTYXZlSGFuZGxlciIsInZhbGlkIiwidG91Y2hlZCIsImV4cG9ydFRvRmFjdG9yeUNvZGVDaGFuZ2VkIiwiZW1wbG95ZWVMaXN0IiwiZW1wbG95ZWVzIiwic2VsZWN0ZWRJdGVtIiwiZXhwb3J0VG9GYWN0b3J5RW1wbG95ZWVJZENoYW5nZWQiLCJkZXB0SWQiLCJlbXBsb3llZSIsImlucHV0UHJvcHMiLCJtaW5XaWR0aCIsImV4cG9ydFRvRmFjdG9yeURhdGVDaGFuZ2VkIiwidGFyZ2V0Iiwid2VpZ2h0VG90YWwiLCJxdWFudGl0eVRvdGFsIiwiZXhwb3J0VG9GYWN0b3J5Tm90ZUNoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkIiwicHJvZHVjdFR5cGVJZCIsImV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkIiwiZGVjaW1hbFNjYWxlIiwiaW5wdXRDb21wb25lbnQiLCJOdW1iZXJGb3JtYXRDdXN0b20iLCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRDaGFuZ2VkIiwiZXhwb3J0VG9GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQiLCJtYXAiLCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eUNoYW5nZWQiLCJleHBvcnRUb0ZhY3RvcnlBZGREZXRhaWxIYW5kbGVyIiwibGVuZ3RoIiwiZmxleEdyb3ciLCJsYWJlbCIsImRhdGFLZXkiLCJudW1lcmljIiwiZXhwb3J0VG9GYWN0b3J5Q3JlYXRlSGFuZGxlciIsIkltcG9ydEZyb21GYWN0b3J5RWRpdCIsImltcG9ydEZyb21GYWN0b3J5Q29kZSIsImltcG9ydEZyb21GYWN0b3J5Q29kZUZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5RW1wbG95ZWVJZEZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQiLCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodEZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZEZvY3VzSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkiLCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlIiwiaW1wb3J0RnJvbUZhY3RvcnlEYXRlRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlRm9jdXNIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxFZGl0IiwiaW1wb3J0RnJvbUZhY3RvcnlDb2RlQ2hhbmdlZCIsImtleSIsImltcG9ydEZyb21GYWN0b3J5Q29kZUVudGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5RGF0ZUNoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeU5vdGVDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkQ2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0Q2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQiLCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5Q2hhbmdlZCIsImltcG9ydEZyb21GYWN0b3J5VXBkYXRlRGV0YWlsSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5Q3JlYXRlSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5U2F2ZUhhbmRsZXIiLCJQdXJjaGFzZUVkaXQiLCJwdXJjaGFzZUNvZGUiLCJwdXJjaGFzZUNvZGVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0IiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5IiwicHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGF0ZSIsInB1cmNoYXNlRGF0ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlTm90ZSIsInB1cmNoYXNlTm90ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGV0YWlscyIsInB1cmNoYXNlRGV0YWlsRWRpdCIsInB1cmNoYXNlU2F2ZUhhbmRsZXIiLCJwdXJjaGFzZUNvZGVDaGFuZ2VkIiwicHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZCIsInB1cmNoYXNlRGF0ZUNoYW5nZWQiLCJwdXJjaGFzZU5vdGVDaGFuZ2VkIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsInB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlQWRkRGV0YWlsSGFuZGxlciIsInB1cmNoYXNlQ3JlYXRlSGFuZGxlciIsIlNlbGxFZGl0Iiwic2VsbENvZGUiLCJzZWxsQ29kZUZvY3VzSGFuZGxlciIsInNlbGxFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwic2VsbFByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInNlbGxHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwic2VsbFdlaWdodCIsInNlbGxXZWlnaHRGb2N1c0hhbmRsZXIiLCJzZWxsR29sZFVuaXRJZEZvY3VzSGFuZGxlciIsInNlbGxRdWFudGl0eSIsInNlbGxRdWFudGl0eUZvY3VzSGFuZGxlciIsInNlbGxEYXRlIiwic2VsbERhdGVGb2N1c0hhbmRsZXIiLCJzZWxsTm90ZSIsInNlbGxOb3RlRm9jdXNIYW5kbGVyIiwic2VsbERldGFpbHMiLCJzZWxsRGV0YWlsRWRpdCIsInNlbGxTYXZlSGFuZGxlciIsInNlbGxDb2RlQ2hhbmdlZCIsInNlbGxFbXBsb3llZUlkQ2hhbmdlZCIsInNlbGxEYXRlQ2hhbmdlZCIsInNlbGxOb3RlQ2hhbmdlZCIsInNlbGxQcm9kdWN0SWRDaGFuZ2VkIiwic2VsbEdvbGRUeXBlSWRDaGFuZ2VkIiwic2VsbFdlaWdodENoYW5nZWQiLCJzZWxsR29sZFVuaXRJZENoYW5nZWQiLCJzZWxsUXVhbnRpdHlDaGFuZ2VkIiwic2VsbEFkZERldGFpbEhhbmRsZXIiLCJzZWxsQ3JlYXRlSGFuZGxlciIsInN0eWxlcyIsImdyaWQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInRleHQiLCJzZWNvbmRhcnkiLCJGYWN0b3J5VHJhbnNmZXJDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW1UeXBlIiwic2VuZGVySWQiLCJzZW5kZXJJZEZvY3VzSGFuZGxlciIsInJlY2VpdmVySWQiLCJyZWNlaXZlcklkRm9jdXNIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJzZW5kZXJJZEZvY3VzRGlzcGF0Y2giLCJyZWNlaXZlcklkRm9jdXNEaXNwYXRjaCIsInNlbmRlcklkQ2hhbmdlZERpc3BhdGNoIiwicmVjZWl2ZXJJZENoYW5nZWREaXNwYXRjaCIsImxlZnQiLCJyaWdodCIsImxlZnROZXdJdGVtcyIsImZhY3RvcnlUcmFuc2ZlciIsInJlY2VpdmVySWRMaXN0IiwiZmlsdGVyIiwiaXRlbWEiLCJpdGVtYiIsInJpZ2h0TmV3SXRlbXMiLCJzZW5kZXJJZExpc3QiLCJmYWN0b3J5VHJhbnNmZXJzIiwiZm9yRWFjaCIsInB1c2giLCJjb2RlIiwiZmFjdG9yeVRyYW5zZmVyQWRkc0Rpc3BhdGNoIiwic2V0U3RhdGUiLCJpc09LIiwiZXhwb3J0VG9GYWN0b3J5RGVsZXRlRGlzcGF0Y2giLCJzdGF0ZSIsInZlcnNpb24iLCJkZXB0TGlzdERpc3BhdGNoIiwiZW1wbG95ZWVMaXN0RGlzcGF0Y2giLCJlcnJvciIsImRlcHRFcnJvciIsImVtcGxveWVlRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsIm9uTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJzZW5kZXJJZENoYW5nZWRIYW5kZXIiLCJyZWNlaXZlcklkQ2hhbmdlZEhhbmRlciIsInRyYW5zZmVyTGlzdFNhdmVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZXhwb3J0VG9GYWN0b3J5IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJkZXB0QWNpb25zIiwiZW1wbG95ZWVBY2lvbnMiLCJhY3Rpb25zIiwic2VuZGVySWRMaXN0RGlzcGF0Y2giLCJyZWNlaXZlcklkTGlzdERpc3BhdGNoIiwiZmFjdG9yeVRyYXNmZXJzIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0lBRU1B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d0ZBQWdCLENBQUNDLDRFQUFVLENBQUNyRixNQUFELENBQVYsQ0FBbUJjLHdCQUFuQixDQUFELEVBQStDd0Usd0RBQS9DLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYW5hZ2VTdG9yZS4zNWZjYTIyMzI3MzY5NDI0YzA4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuaW1wb3J0IE51bWJlckZvcm1hdEN1c3RvbSBmcm9tIFwiLi4vVUkvSW5wdXROdW1iZXIvTnVtYmVyRm9ybWF0Q3VzdG9tXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBFeHBvcnRUb0ZhY3RvcnlFZGl0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgLy8gICBzZXRQcm9kdWN0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5Q29kZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcOjXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeUNvZGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5Q29kZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJYdeG6pXQgY2hvXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeUVtcGxveWVlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeVByb2R1Y3RJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gbG/huqFpIHbDoG5nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5V2VpZ2h0ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeVdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDAuMSxcclxuICAgICAgbWF4VmFsdWU6IDk5OTk5OTk5OS45LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVW5pdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCLEkMahbiB24buLXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeUdvbGRVbml0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHkgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgc+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGV4cG9ydFRvRmFjdG9yeURhdGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOZ8OgeSB4deG6pXRcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGF0ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEYXRlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBleHBvcnRUb0ZhY3RvcnlOb3RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBnaGkgY2jDulwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlOb3RlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeU5vdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHt9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRlcHQgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtwcm9wcy5kZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09IHBhcmFtcy5ncm91cCkubmFtZX1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFR5cGUgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkubmFtZVxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIC8vIHByb2R1Y3ROYW1lLlxyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5wcm9kdWN0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBnb2xkVHlwZU5hbWUuXHJcbiAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRUeXBlSWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFVuaXROYW1lLlxyXG4gICAgbGV0IGdvbGRVbml0ID0gcHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVW5pdElkXHJcbiAgICApO1xyXG4gICAgaWYgKCFnb2xkVW5pdCkge1xyXG4gICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybi5cclxuICAgIHJldHVybiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEZXRhaWxzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3dDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlsRWRpdChldmVudCwgZXZlbnQucm93RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09IHZhbHVlSWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuZXhwb3J0VG9GYWN0b3J5U2F2ZUhhbmRsZXJ9PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmV4cG9ydFRvRmFjdG9yeUNvZGUudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeUNvZGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJleHBvcnRUb0ZhY3RvcnlDb2RlXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwiZXhwb3J0VG9GYWN0b3J5Q29kZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3Do1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5leHBvcnRUb0ZhY3RvcnlDb2RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlDb2RlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeUNvZGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBleHBvcnRUb0ZhY3RvcnlDb2RlLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZW1wbG95ZWVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1wbG95ZWVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBwcm9wcy5lbXBsb3llZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeUVtcGxveWVlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24uZGVwdElkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyRGVwdH1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFlbXBsb3llZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiWHXhuqV0IGNob1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVJZC52YWxpZCAmIHByb3BzLmVtcGxveWVlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5lbXBsb3llZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIHV0aWxzPXtsb2NhbGVVdGlsc01hcFtcInZpXCJdfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZU1hcFtcInZpXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGF0ZS52YWxpZCAmXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEYXRlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImV4cG9ydFRvRmFjdG9yeURhdGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZXhwb3J0VG9GYWN0b3J5RGF0ZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIkjDtG0gbmF5XCJcclxuICAgICAgICAgICAgICBjYW5jZWxMYWJlbD1cIkjhu6d5XCJcclxuICAgICAgICAgICAgICBjbGVhckxhYmVsPVwiWMOzYVwiXHJcbiAgICAgICAgICAgICAgb2tMYWJlbD1cIkNo4buNblwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZ8OgeSBuaOG6rXBcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeURhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgey4uLmV4cG9ydFRvRmFjdG9yeURhdGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlEYXRlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZXhwb3J0VG9GYWN0b3J5RGF0ZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJleHBvcnRUb0ZhY3RvcnlXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZXhwb3J0VG9GYWN0b3J5V2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyB0cuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLndlaWdodFRvdGFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJU4buVbmcgc+G7kSBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5xdWFudGl0eVRvdGFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxyXG4gICAgICAgICAgICByb3dzTWluPXs0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmV4cG9ydFRvRmFjdG9yeU5vdGUudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeU5vdGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZhbHNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwiZXhwb3J0VG9GYWN0b3J5Tm90ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZXhwb3J0VG9GYWN0b3J5Tm90ZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiR2hpIGNow7pcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4uZXhwb3J0VG9GYWN0b3J5Tm90ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZXhwb3J0VG9GYWN0b3J5Tm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlOb3RlQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXhwb3J0VG9GYWN0b3J5Tm90ZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlQcm9kdWN0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9kdWN0VHlwZUlkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyUHJvZHVjdFR5cGV9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IHByb3BzLmdvbGRUeXBlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5R29sZFR5cGVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTG/huqFpIHbDoG5nXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5nb2xkVHlwZUlkLnZhbGlkICYgcHJvcHMuZ29sZFR5cGVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmdvbGRUeXBlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZXhwb3J0VG9GYWN0b3J5V2VpZ2h0LnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlXZWlnaHQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cImV4cG9ydFRvRmFjdG9yeVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwiZXhwb3J0VG9GYWN0b3J5V2VpZ2h0XCJcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBkZWNpbWFsU2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlXZWlnaHQudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5leHBvcnRUb0ZhY3RvcnlXZWlnaHQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlXZWlnaHRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBleHBvcnRUb0ZhY3RvcnlXZWlnaHQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5nb2xkVW5pdElkLnZhbGlkICYgcHJvcHMuZ29sZFVuaXRJZC50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImdvbGRVbml0LXNlbGVjdFwiPsSQxqFuIHbhu4s8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRVbml0SWRcIixcclxuICAgICAgICAgICAgICAgIGlkOiBcImdvbGRVbml0LXNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICB7Li4uZ29sZFVuaXRJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFVuaXRJZC52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZXhwb3J0VG9GYWN0b3J5R29sZFVuaXRJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICBnb2xkVW5pdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMubWFwKChnb2xkVW5pdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtnb2xkVW5pdC5pZCArIGluZGV4fSB2YWx1ZT17Z29sZFVuaXQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnb2xkVW5pdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHkudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJleHBvcnRUb0ZhY3RvcnlRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlkPVwiZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMCB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4uZXhwb3J0VG9GYWN0b3J5UXVhbnRpdHkuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlRdWFudGl0eUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGV4cG9ydFRvRmFjdG9yeVF1YW50aXR5LnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeUFkZERldGFpbEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRow6ptIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgPE11aVZpcnR1YWxpemVkVGFibGVcclxuICAgICAgICAgICAgICByb3dDb3VudD17cHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlscy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgb25Sb3dDbGljaz17cm93Q2xpY2t9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4bqjbiBwaOG6qW1cIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG/huqFpIHbDoG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFR5cGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJ3ZWlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVW5pdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBhcmlhLWxhYmVsPVwic2Vjb25kYXJ5IG1haWxib3ggZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlscy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gaXRlbS5wcm9kdWN0SWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0RGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3REaXNwbGF5ID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IGl0ZW0uZ29sZFR5cGVJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlRGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZURpc3BsYXkgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0Pntwcm9kdWN0RGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0Pntnb2xkVHlwZURpc3BsYXl9PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9MaXN0PiAqL31cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuZXhwb3J0VG9GYWN0b3J5Q3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGV0YWlscy5sZW5ndGggPiAwfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydFRvRmFjdG9yeUVkaXQ7XHJcbiIsImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBEaXZpZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBMaXN0U3ViaGVhZGVyLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG4gIFRleHRhcmVhQXV0b3NpemUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIGltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuLy9pbXBvcnQgSW5wdXRGaWxlIGZyb20gJy4uL1VJL0lucHV0RmlsZS9JbnB1dEZpbGUnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuXHJcbmltcG9ydCBOdW1iZXJGb3JtYXRDdXN0b20gZnJvbSBcIi4uL1VJL0lucHV0TnVtYmVyL051bWJlckZvcm1hdEN1c3RvbVwiO1xyXG5pbXBvcnQgTXVpVmlydHVhbGl6ZWRUYWJsZSBmcm9tIFwiLi4vVUkvVGFibGUvTXVpVmlydHVhbGl6ZWRUYWJsZVwiO1xyXG5pbXBvcnQgeyBFdmVudEJ1c3kgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBJbXBvcnRGcm9tRmFjdG9yeUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeUNvZGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3Do1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGVtcGxveWVlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBuaMOibiB2acOqblwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVtcGxveWVlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5UHJvZHVjdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBsb+G6oWkgdsOgbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlHb2xkVHlwZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5V2VpZ2h0ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHQuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAwLjEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTk5OTk5OTkuOSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFVuaXRJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwixJDGoW4gduG7i1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBz4buRIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGltcG9ydEZyb21GYWN0b3J5RGF0ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5nw6B5IG5o4bqtcFwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURhdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBpbXBvcnRGcm9tRmFjdG9yeU5vdGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIGdoaSBjaMO6XCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5Tm90ZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeU5vdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHt9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRlcHQgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtwcm9wcy5kZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09IHBhcmFtcy5ncm91cCkubmFtZX1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFR5cGUgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkubmFtZVxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIC8vIHByb2R1Y3ROYW1lLlxyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBnb2xkVHlwZU5hbWUuXHJcbiAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFVuaXROYW1lLlxyXG4gICAgbGV0IGdvbGRVbml0ID0gcHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRVbml0KSB7XHJcbiAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybi5cclxuICAgIHJldHVybiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbEVkaXQoZXZlbnQsIGV2ZW50LnJvd0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgdmFsdWUpID0+IHtcclxuICAgIC8qIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgfSAqL1xyXG4gICAgaWYgKCFvcHRpb24gfHwgIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25JZCA9IG9wdGlvbi5pZDtcclxuICAgIGlmICghb3B0aW9uSWQpIHtcclxuICAgICAgb3B0aW9uSWQgPSBvcHRpb247XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVJZCA9IHZhbHVlLmlkO1xyXG4gICAgaWYgKCF2YWx1ZUlkKSB7XHJcbiAgICAgIHZhbHVlSWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25JZCA9PSB2YWx1ZUlkO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDb2RlLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcImltcG9ydEZyb21GYWN0b3J5Q29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcImltcG9ydEZyb21GYWN0b3J5Q29kZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3Do1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5pbXBvcnRGcm9tRmFjdG9yeUNvZGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGUudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZUVudGVyKGV2ZW50KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImVtcGxveWVlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbXBsb3llZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IHByb3BzLmVtcGxveWVlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFbXBsb3llZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5o4bqtcCB04burXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5lbXBsb3llZUlkLnZhbGlkICYgcHJvcHMuZW1wbG95ZWVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmVtcGxveWVlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXJcclxuICAgICAgICAgICAgdXRpbHM9e2xvY2FsZVV0aWxzTWFwW1widmlcIl19XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlTWFwW1widmlcIl19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURhdGUudmFsaWQgJlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEYXRlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImltcG9ydEZyb21GYWN0b3J5RGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbXBvcnRGcm9tRmFjdG9yeURhdGVcIlxyXG4gICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgIHRvZGF5TGFiZWw9XCJIw7RtIG5heVwiXHJcbiAgICAgICAgICAgICAgY2FuY2VsTGFiZWw9XCJI4buneVwiXHJcbiAgICAgICAgICAgICAgY2xlYXJMYWJlbD1cIljDs2FcIlxyXG4gICAgICAgICAgICAgIG9rTGFiZWw9XCJDaOG7jW5cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmfDoHkgbmjhuq1wXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgey4uLmltcG9ydEZyb21GYWN0b3J5RGF0ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGF0ZUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5RGF0ZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodFRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodFRvdGFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJU4buVbmcgdHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy53ZWlnaHRUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuYW1lPVwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJpbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyBz4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnF1YW50aXR5VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXHJcbiAgICAgICAgICAgIHJvd3NNaW49ezR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeU5vdGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgOiBcImZhbHNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlXCJcclxuICAgICAgICAgICAgaWQ9XCJpbXBvcnRGcm9tRmFjdG9yeU5vdGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdoaSBjaMO6XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLmltcG9ydEZyb21GYWN0b3J5Tm90ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5Tm90ZUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5Tm90ZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVByb2R1Y3RJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLnByb2R1Y3RUeXBlSWR9XHJcbiAgICAgICAgICAgIHJlbmRlckdyb3VwPXtyZW5kZXJQcm9kdWN0VHlwZX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJT4bqjbiBwaOG6qW1cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLnByb2R1Y3RJZC52YWxpZCAmIHByb3BzLnByb2R1Y3RJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLnByb2R1Y3RJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImdvbGRUeXBlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRUeXBlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gcHJvcHMuZ29sZFR5cGVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUdvbGRUeXBlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwiaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRcIlxyXG4gICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5V2VpZ2h0XCJcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBkZWNpbWFsU2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC52YWx1ZX1cclxuICAgICAgICAgICAgey4uLmltcG9ydEZyb21GYWN0b3J5V2VpZ2h0LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlXZWlnaHRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeVdlaWdodC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZ29sZFVuaXQtc2VsZWN0XCI+xJDGoW4gduG7izwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hdGl2ZVxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5nb2xkVW5pdElkLnZhbGlkICYgcHJvcHMuZ29sZFVuaXRJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFVuaXRJZFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFVuaXQtc2VsZWN0XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgIHsuLi5nb2xkVW5pdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgb25PcGVuPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVW5pdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUdvbGRVbml0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgZ29sZFVuaXRJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCItMVwiIGFyaWEtbGFiZWw9XCJOb25lXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5nb2xkVW5pdExpc3QuZ29sZFVuaXRzLm1hcCgoZ29sZFVuaXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z29sZFVuaXQuaWQgKyBpbmRleH0gdmFsdWU9e2dvbGRVbml0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z29sZFVuaXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cImltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMCB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5pbXBvcnRGcm9tRmFjdG9yeVF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHkudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVEZXRhaWxIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBD4bqtcCBuaOG6rXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICAgICAgICA8TXVpVmlydHVhbGl6ZWRUYWJsZVxyXG4gICAgICAgICAgICAgIHJvd0NvdW50PXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIHJvd0dldHRlcj17cm93R2V0dGVyfVxyXG4gICAgICAgICAgICAgIG9uUm93Q2xpY2s9e3Jvd0NsaWNrfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxv4bqhaSB2w6BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRUeXBlTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJUcuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLEkMahbiB24buLXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFVuaXROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhu5EgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJxdWFudGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbD1cInNlY29uZGFyeSBtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICAgICAge3Byb3BzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlscy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gaXRlbS5wcm9kdWN0SWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0RGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3REaXNwbGF5ID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IGl0ZW0uZ29sZFR5cGVJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlRGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZURpc3BsYXkgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0Pntwcm9kdWN0RGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0Pntnb2xkVHlwZURpc3BsYXl9PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9MaXN0PiAqL31cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBU4bqhbyBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbHMubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlTYXZlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltcG9ydEZyb21GYWN0b3J5RWRpdDtcclxuIiwiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuaW1wb3J0IE51bWJlckZvcm1hdEN1c3RvbSBmcm9tIFwiLi4vVUkvSW5wdXROdW1iZXIvTnVtYmVyRm9ybWF0Q3VzdG9tXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBQdXJjaGFzZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwdXJjaGFzZUNvZGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3Do1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUNvZGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VDb2RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGVtcGxveWVlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBuZ8aw4budaSBtdWFcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gbG/huqFpIHbDoG5nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZVdlaWdodCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0cuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMC4xLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5OTk5OTk5LjksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRVbml0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlUXVhbnRpdHkgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgc+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHkuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pblZhbHVlOiAxLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZURhdGUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOZ8OgeSBuaOG6rXBcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VEYXRlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlRGF0ZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VOb3RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBnaGkgY2jDulwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZU5vdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VOb3RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7cHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApLm5hbWV9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RUeXBlID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMucHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PSBwYXJhbXMuZ3JvdXBcclxuICAgICAgICApLm5hbWVcclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dHZXR0ZXIgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0TmFtZS5cclxuICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XS5wcm9kdWN0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XS5wcm9kdWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFR5cGVOYW1lLlxyXG4gICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLmdvbGRUeXBlSWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLnB1cmNoYXNlRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRVbml0TmFtZS5cclxuICAgIGxldCBnb2xkVW5pdCA9IHByb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XS5nb2xkVW5pdElkXHJcbiAgICApO1xyXG4gICAgaWYgKCFnb2xkVW5pdCkge1xyXG4gICAgICBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5wdXJjaGFzZURldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4uXHJcbiAgICByZXR1cm4gcHJvcHMucHVyY2hhc2VEZXRhaWxzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3dDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgcHJvcHMucHVyY2hhc2VEZXRhaWxFZGl0KGV2ZW50LCBldmVudC5yb3dEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRPcHRpb25TZWxlY3RlZCA9IChvcHRpb24sIHZhbHVlKSA9PiB7XHJcbiAgICAvKiBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgIH0gKi9cclxuICAgIGlmICghb3B0aW9uIHx8ICF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICBpZiAoIW9wdGlvbklkKSB7XHJcbiAgICAgIG9wdGlvbklkID0gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlSWQgPSB2YWx1ZS5pZDtcclxuICAgIGlmICghdmFsdWVJZCkge1xyXG4gICAgICB2YWx1ZUlkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0aW9uSWQgPT0gdmFsdWVJZDtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5wdXJjaGFzZVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZUNvZGUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZUNvZGUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5wdXJjaGFzZUNvZGUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlQ29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlQ29kZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3Do1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZUNvZGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlQ29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZUNvZGVDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZUNvZGUudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJlbXBsb3llZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbXBsb3llZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IHByb3BzLmVtcGxveWVlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5nxrDhu51pIG5o4bqtblwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVJZC52YWxpZCAmIHByb3BzLmVtcGxveWVlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5lbXBsb3llZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIHV0aWxzPXtsb2NhbGVVdGlsc01hcFtcInZpXCJdfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZU1hcFtcInZpXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VEYXRlLnZhbGlkICYgcHJvcHMucHVyY2hhc2VEYXRlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZURhdGVcIlxyXG4gICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgIHRvZGF5TGFiZWw9XCJIw7RtIG5heVwiXHJcbiAgICAgICAgICAgICAgY2FuY2VsTGFiZWw9XCJI4buneVwiXHJcbiAgICAgICAgICAgICAgY2xlYXJMYWJlbD1cIljDs2FcIlxyXG4gICAgICAgICAgICAgIG9rTGFiZWw9XCJDaOG7jW5cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmfDoHkgbmjhuq1wXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZURhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgey4uLnB1cmNoYXNlRGF0ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGF0ZUNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGF0ZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZVdlaWdodFRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZVdlaWdodFRvdGFsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJU4buVbmcgdHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy53ZWlnaHRUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuYW1lPVwicHVyY2hhc2VRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZVF1YW50aXR5VG90YWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlThu5VuZyBz4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnF1YW50aXR5VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXHJcbiAgICAgICAgICAgIHJvd3NNaW49ezR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VOb3RlLnZhbGlkICYgcHJvcHMucHVyY2hhc2VOb3RlLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlTm90ZVwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VOb3RlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJHaGkgY2jDulwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZU5vdGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlTm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZU5vdGVDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZU5vdGUudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJwcm9kdWN0SWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0SWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgLy8gICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBwcm9wcy5wcm9kdWN0SWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9kdWN0VHlwZUlkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyUHJvZHVjdFR5cGV9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IHByb3BzLmdvbGRUeXBlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb+G6oWkgdsOgbmdcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmdvbGRUeXBlSWQudmFsaWQgJiBwcm9wcy5nb2xkVHlwZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZ29sZFR5cGVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZVdlaWdodC52YWxpZCAmIHByb3BzLnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VXZWlnaHRcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMSB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VXZWlnaHQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWQoZXZlbnQsIHB1cmNoYXNlV2VpZ2h0LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJnb2xkVW5pdC1zZWxlY3RcIj7EkMahbiB24buLPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVW5pdElkXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogXCJnb2xkVW5pdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgey4uLmdvbGRVbml0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRVbml0SWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQoZXZlbnQsIGdvbGRVbml0SWQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMubWFwKChnb2xkVW5pdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtnb2xkVW5pdC5pZCArIGluZGV4fSB2YWx1ZT17Z29sZFVuaXQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnb2xkVW5pdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VRdWFudGl0eS52YWxpZCAmIHByb3BzLnB1cmNoYXNlUXVhbnRpdHkudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMCB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZVF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlUXVhbnRpdHkudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMucHVyY2hhc2VBZGREZXRhaWxIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaMOqbSBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3Byb3BzLnB1cmNoYXNlRGV0YWlscy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgb25Sb3dDbGljaz17cm93Q2xpY2t9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4bqjbiBwaOG6qW1cIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG/huqFpIHbDoG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFR5cGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJ3ZWlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVW5pdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBhcmlhLWxhYmVsPVwic2Vjb25kYXJ5IG1haWxib3ggZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMucHVyY2hhc2VEZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpdGVtLnByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3REaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpc3BsYXkgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gaXRlbS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGVEaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlRGlzcGxheSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e3Byb2R1Y3REaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e2dvbGRUeXBlRGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0xpc3Q+ICovfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLnB1cmNoYXNlRGV0YWlscy5sZW5ndGggPiAwfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlRWRpdDtcclxuIiwiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuaW1wb3J0IE51bWJlckZvcm1hdEN1c3RvbSBmcm9tIFwiLi4vVUkvSW5wdXROdW1iZXIvTnVtYmVyRm9ybWF0Q3VzdG9tXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBTZWxsRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNlbGxDb2RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw6NcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbENvZGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbENvZGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZW1wbG95ZWVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIG5nxrDhu51pIGLDoW5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbEVtcGxveWVlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIGxv4bqhaSB2w6BuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5zZWxsR29sZFR5cGVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsV2VpZ2h0ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbFdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsV2VpZ2h0LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMC4xLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5OTk5OTk5LjksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRVbml0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIsSQxqFuIHbhu4tcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbEdvbGRVbml0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgc2VsbFF1YW50aXR5ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHPhu5EgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbFF1YW50aXR5Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxEYXRlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmfDoHkgeHXhuqV0XCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnNlbGxEYXRlRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxEYXRlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsTm90ZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgZ2hpIGNow7pcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuc2VsbE5vdGVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbE5vdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHt9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRlcHQgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtwcm9wcy5kZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09IHBhcmFtcy5ncm91cCkubmFtZX1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFR5cGUgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkubmFtZVxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIC8vIHByb2R1Y3ROYW1lLlxyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0ucHJvZHVjdElkXHJcbiAgICApO1xyXG4gICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgIHByb3BzLnNlbGxEZXRhaWxzW2luZGV4XS5wcm9kdWN0TmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBnb2xkVHlwZU5hbWUuXHJcbiAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHByb3BzLnNlbGxEZXRhaWxzW2luZGV4XS5nb2xkVHlwZUlkXHJcbiAgICApO1xyXG4gICAgaWYgKCFnb2xkVHlwZSkge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLnNlbGxEZXRhaWxzW2luZGV4XS5nb2xkVHlwZU5hbWUgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFVuaXROYW1lLlxyXG4gICAgbGV0IGdvbGRVbml0ID0gcHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFVuaXRJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFVuaXQpIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFVuaXROYW1lID0gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybi5cclxuICAgIHJldHVybiBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm93Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHByb3BzLnNlbGxEZXRhaWxFZGl0KGV2ZW50LCBldmVudC5yb3dEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRPcHRpb25TZWxlY3RlZCA9IChvcHRpb24sIHZhbHVlKSA9PiB7XHJcbiAgICAvKiBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgIH0gKi9cclxuICAgIGlmICghb3B0aW9uIHx8ICF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICBpZiAoIW9wdGlvbklkKSB7XHJcbiAgICAgIG9wdGlvbklkID0gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlSWQgPSB2YWx1ZS5pZDtcclxuICAgIGlmICghdmFsdWVJZCkge1xyXG4gICAgICB2YWx1ZUlkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0aW9uSWQgPT0gdmFsdWVJZDtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5zZWxsU2F2ZUhhbmRsZXJ9PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnNlbGxDb2RlLnZhbGlkICYgcHJvcHMuc2VsbENvZGUudG91Y2hlZCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9eyAhcHJvcHMuc2VsbENvZGUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInNlbGxDb2RlXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwic2VsbENvZGVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw6NcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4uc2VsbENvZGUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNlbGxDb2RlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxDb2RlQ2hhbmdlZChldmVudCwgc2VsbENvZGUudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJlbXBsb3llZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbXBsb3llZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IHByb3BzLmVtcGxveWVlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuc2VsbEVtcGxveWVlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24uZGVwdElkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyRGVwdH1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFlbXBsb3llZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImVtcGxveWVlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmfGsOG7nWkgeHXhuqV0XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5lbXBsb3llZUlkLnZhbGlkICYgcHJvcHMuZW1wbG95ZWVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmVtcGxveWVlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXJcclxuICAgICAgICAgICAgdXRpbHM9e2xvY2FsZVV0aWxzTWFwW1widmlcIl19XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlTWFwW1widmlcIl19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5zZWxsRGF0ZS52YWxpZCAmIHByb3BzLnNlbGxEYXRlLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInNlbGxEYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cInNlbGxEYXRlXCJcclxuICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICB0b2RheUxhYmVsPVwiSMO0bSBuYXlcIlxyXG4gICAgICAgICAgICAgIGNhbmNlbExhYmVsPVwiSOG7p3lcIlxyXG4gICAgICAgICAgICAgIGNsZWFyTGFiZWw9XCJYw7NhXCJcclxuICAgICAgICAgICAgICBva0xhYmVsPVwiQ2jhu41uXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5nw6B5IG5o4bqtcFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VsbERhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgey4uLnNlbGxEYXRlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsbERhdGVDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBzZWxsRGF0ZS52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsV2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGxXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMud2VpZ2h0VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cInNlbGxRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsUXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucXVhbnRpdHlUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgcm93c01pbj17NH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsTm90ZS52YWxpZCAmIHByb3BzLnNlbGxOb3RlLnRvdWNoZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsTm90ZVwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbE5vdGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdoaSBjaMO6XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnNlbGxOb3RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsTm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsTm90ZUNoYW5nZWQoZXZlbnQsIHNlbGxOb3RlLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxQcm9kdWN0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9kdWN0VHlwZUlkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyUHJvZHVjdFR5cGV9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IHByb3BzLmdvbGRUeXBlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMuc2VsbEdvbGRUeXBlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnNlbGxXZWlnaHQudmFsaWQgJiBwcm9wcy5zZWxsV2VpZ2h0LnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwic2VsbFdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbFdlaWdodFwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VsbFdlaWdodC52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnNlbGxXZWlnaHQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsV2VpZ2h0Q2hhbmdlZChldmVudCwgc2VsbFdlaWdodC52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLmdvbGRVbml0SWQudmFsaWQgJiBwcm9wcy5nb2xkVW5pdElkLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZ29sZFVuaXQtc2VsZWN0XCI+xJDGoW4gduG7izwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hdGl2ZVxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5nb2xkVW5pdElkLnZhbGlkICYgcHJvcHMuZ29sZFVuaXRJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFVuaXRJZFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFVuaXQtc2VsZWN0XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgIHsuLi5nb2xkVW5pdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgb25PcGVuPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVW5pdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZWxsR29sZFVuaXRJZENoYW5nZWQoZXZlbnQsIGdvbGRVbml0SWQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMubWFwKChnb2xkVW5pdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtnb2xkVW5pdC5pZCArIGluZGV4fSB2YWx1ZT17Z29sZFVuaXQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnb2xkVW5pdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMuc2VsbFF1YW50aXR5LnZhbGlkICYgcHJvcHMuc2VsbFF1YW50aXR5LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGxRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAwIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VsbFF1YW50aXR5LnZhbHVlfVxyXG4gICAgICAgICAgICB7Li4uc2VsbFF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMuc2VsbFF1YW50aXR5Q2hhbmdlZChldmVudCwgc2VsbFF1YW50aXR5LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnNlbGxBZGREZXRhaWxIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaMOqbSBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgICAgICAgcm93Q291bnQ9e3Byb3BzLnNlbGxEZXRhaWxzLmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dHZXR0ZXI9e3Jvd0dldHRlcn1cclxuICAgICAgICAgICAgICBvblJvd0NsaWNrPXtyb3dDbGlja31cclxuICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcInByb2R1Y3ROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJMb+G6oWkgdsOgbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJnb2xkVHlwZU5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcIndlaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwixJDGoW4gduG7i1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRVbml0TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJT4buRIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicXVhbnRpdHlcIixcclxuICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiIGFyaWEtbGFiZWw9XCJzZWNvbmRhcnkgbWFpbGJveCBmb2xkZXJzXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zZWxsRGV0YWlscy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gaXRlbS5wcm9kdWN0SWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0RGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3REaXNwbGF5ID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IGl0ZW0uZ29sZFR5cGVJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlRGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZURpc3BsYXkgPSBnb2xkVHlwZS5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0Pntwcm9kdWN0RGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0Pntnb2xkVHlwZURpc3BsYXl9PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9MaXN0PiAqL31cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuc2VsbENyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLnNlbGxEZXRhaWxzLmxlbmd0aCA+IDB9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsbEVkaXQ7XHJcbiIsImltcG9ydCB7IEdyaWQsIExpc3RTdWJoZWFkZXIsIFNuYWNrYmFyLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEV4cG9ydFRvRmFjdG9yeUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUVkaXRcIjtcclxuaW1wb3J0IEV4cG9ydFRvRmFjdG9yeUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2ZhY3RvcnlUcmFuc2ZlckFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBkZXB0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2RlcHRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZW1wbG95ZWVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZW1wbG95ZWVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRVbml0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRVbml0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFRyYW5zZmVyTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9MaXN0L1RyYW5zZmVyTGlzdFwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5cclxuLy9pbXBvcnQgeyB0aHJvd3MgfSBmcm9tICdhc3NlcnQnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q5ZGRkZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGhlaWdodDogXCI5MHZoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgIHNlbmRlcklkOiB7XHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBuZ8aw4budaSBjaHV54buDblwiLFxyXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuc2VuZGVySWRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZWNlaXZlcklkOiB7XHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBuZ8aw4budaSBuaOG6rW5cIixcclxuICAgICAgICBvbkZvY3VzOiB0aGlzLnJlY2VpdmVySWRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGVwdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3IgfHwgdGhpcy5wcm9wcy5kZXB0RXJyb3IgfHwgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9yKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAgICh0aGlzLnByb3BzLmRlcHRFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5kZXB0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgICAodGhpcy5wcm9wcy5lbXBsb3llZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5leHBvcnRUb0ZhY3RvcnlFcnJvckhhbmRsZWREaXNwYXRjaCgpO1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKFwiL3NpZ2luXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAgIC8vICAgZGlhbG9nQ29udGVudDogXCJM4buXaSDEkcSDbmcgbmjhuq1wIVwiLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kZXJJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuc2VuZGVySWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVjZWl2ZXJJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucmVjZWl2ZXJJZEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBzZW5kZXJJZENoYW5nZWRIYW5kZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBzZW5kZXJJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHNlbmRlcklkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5zZW5kZXJJZENoYW5nZWREaXNwYXRjaChzZW5kZXJJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcmVjZWl2ZXJJZENoYW5nZWRIYW5kZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCByZWNlaXZlcklkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgcmVjZWl2ZXJJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucmVjZWl2ZXJJZENoYW5nZWREaXNwYXRjaChyZWNlaXZlcklkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICB0cmFuc2Zlckxpc3RTYXZlSGFuZGxlciA9IChldmVudCwgbGVmdCwgcmlnaHQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBHZXQgbmV3IGl0ZW1zIGluIHRoZSBsZWZ0IGxpc3QuXHJcbiAgICBsZXQgbGVmdE5ld0l0ZW1zID0gdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZExpc3QuZmlsdGVyKFxyXG4gICAgICAoaXRlbWEpID0+IGxlZnQuZmlsdGVyKChpdGVtYikgPT4gaXRlbWEuaWQgPT0gaXRlbWIua2V5KS5sZW5ndGggPiAwXHJcbiAgICApO1xyXG4gICAgLy8gR2V0IG5ldyBpdGVtcyBpbiB0aGUgcmlnaHQgbGlzdC5cclxuICAgIGxldCByaWdodE5ld0l0ZW1zID0gdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWRMaXN0LmZpbHRlcihcclxuICAgICAgKGl0ZW1hKSA9PiByaWdodC5maWx0ZXIoKGl0ZW1iKSA9PiBpdGVtYS5pZCA9PSBpdGVtYi5rZXkpLmxlbmd0aCA+IDBcclxuICAgICk7XHJcbiAgICBsZXQgZmFjdG9yeVRyYW5zZmVycyA9IFtdO1xyXG4gICAgLy8gUHVzaCBuZXcgaXRlbXMgaW4gdGhlIGxlZnQgbGlzdC5cclxuICAgIGxlZnROZXdJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGZhY3RvcnlUcmFuc2ZlcnMucHVzaCh7XHJcbiAgICAgICAgc2VuZGVySWQ6IGl0ZW0ucmVjZWl2ZXJJZCxcclxuICAgICAgICByZWNlaXZlcklkOiB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZC52YWx1ZSxcclxuICAgICAgICBjb2RlOiBpdGVtLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBQdXNoIG5ldyBpdGVtcyBpbiB0aGUgcmlnaHQgbGlzdC5cclxuICAgIHJpZ2h0TmV3SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBmYWN0b3J5VHJhbnNmZXJzLnB1c2goe1xyXG4gICAgICAgIHNlbmRlcklkOiBpdGVtLnJlY2VpdmVySWQsXHJcbiAgICAgICAgcmVjZWl2ZXJJZDogdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC52YWx1ZSxcclxuICAgICAgICBjb2RlOiBpdGVtLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoZmFjdG9yeVRyYW5zZmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyQWRkc0Rpc3BhdGNoKGZhY3RvcnlUcmFuc2ZlcnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgLy8gaXNPcGVuQWxlcnQ6IHRydWUsXHJcbiAgICAgIGFsZXJ0Q29udGVudDogXCJMxrB1XCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7dGhpcy5wcm9wcy5kZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09IHBhcmFtcy5ncm91cCkubmFtZX1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09PSB2YWx1ZUlkO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5leHBvcnRUb0ZhY3RvcnlEZWxldGVEaXNwYXRjaChcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5pZCxcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS52ZXJzaW9uXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VBbGVydCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5BbGVydDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICtcclxuICAgICAgICBcIiAuLi4uLi4uLi4uLi4gRXhwb3J0VG9GYWN0b3J5Q29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgey8qIEVycm9yIFBvcHVwICovfVxyXG4gICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnByb3BzLmVycm9yfSBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuZXJyb3IgPyB0aGlzLnByb3BzLmVycm9yLm1lc3NhZ2UgOiBcIjw8RXJyb3I+PlwifVxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgey8qIEluZm8gQWxlcnQgKi99XHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzT3BlbkFsZXJ0fVxyXG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZUFsZXJ0fVxyXG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWxlcnQgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZUFsZXJ0fSBzZXZlcml0eT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxlcnRDb250ZW50ICsgXCIgdGjDoG5oIGPDtG5nLlwifVxyXG4gICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNEaWFsb2dPcGVufVxyXG4gICAgICAgICAgb25DbG9zZT17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXt0aGlzLlBhcGVyQ29tcG9uZW50fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpYWxvZ1RpdGxlIHN0eWxlPXt7IGN1cnNvcjogXCJtb3ZlXCIgfX0gaWQ9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIEPhuqNuaCBiw6FvXHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD57dGhpcy5zdGF0ZS5kaWFsb2dDb250ZW50fTwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEjhu6d5XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50LCB0cnVlKX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgxJDhu5NuZyDDvVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFBhcGVyPkNodXnhu4NuIMSR4buVaTwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZW5kZXJJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZGVySWRDaGFuZ2VkSGFuZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRlcklkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24uZGVwdElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdyb3VwPXt0aGlzLnJlbmRlckRlcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXt0aGlzLmdldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VuZGVySWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2VuZGVySWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJU4burXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZC52YWxpZCAmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUuc2VuZGVySWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWNlaXZlcklkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5wcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVySWRDaGFuZ2VkSGFuZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlY2VpdmVySWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5kZXB0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3RoaXMucmVuZGVyRGVwdH1cclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gdGhpcy5wcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbXBsb3llZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e3RoaXMuZ2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZWNlaXZlcklkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJlY2VpdmVySWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLEkOG6v25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWQudmFsaWQgJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUucmVjZWl2ZXJJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFRyYW5zZmVyTGlzdFxyXG4gICAgICAgICAgICAgICAgbGVmdD17dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBrZXk6IGl0ZW0uaWQsIHZhbHVlOiBpdGVtLmNvZGUgfTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgcmlnaHQ9e3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBrZXk6IGl0ZW0uaWQsIHZhbHVlOiBpdGVtLmNvZGUgfTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJMaXN0U2F2ZUhhbmRsZXI9eyhldmVudCwgbGVmdCwgcmlnaHQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJMaXN0U2F2ZUhhbmRsZXIoZXZlbnQsIGxlZnQsIHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmYWN0b3J5VHJhbnNmZXI6IHN0YXRlLmZhY3RvcnlUcmFuc2ZlcixcclxuICAgIGRlcHRMaXN0OiBzdGF0ZS5kZXB0LmRlcHRMaXN0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUuZXhwb3J0VG9GYWN0b3J5LmVycm9yLFxyXG4gICAgZGVwdEVycm9yOiBzdGF0ZS5kZXB0LmVycm9yLFxyXG4gICAgZW1wbG95ZWVFcnJvcjogc3RhdGUuZW1wbG95ZWUuZXJyb3IsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXB0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChkZXB0QWNpb25zLmRlcHRMaXN0KCkpLFxyXG4gICAgZW1wbG95ZWVMaXN0RGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGVtcGxveWVlQWNpb25zLmVtcGxveWVlTGlzdEluRmFjdG9yeSgpKSxcclxuXHJcbiAgICBzZW5kZXJJZEZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuc2VuZGVySWRGb2N1cygpKSxcclxuICAgIHNlbmRlcklkQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc2VuZGVySWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBzZW5kZXJJZExpc3REaXNwYXRjaDogKHNlbmRlcklkKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnNlbmRlcklkTGlzdChzZW5kZXJJZCkpLFxyXG5cclxuICAgIHJlY2VpdmVySWRGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnJlY2VpdmVySWRGb2N1cygpKSxcclxuICAgIHJlY2VpdmVySWRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5yZWNlaXZlcklkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgcmVjZWl2ZXJJZExpc3REaXNwYXRjaDogKHJlY2VpdmVySWQpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucmVjZWl2ZXJJZExpc3QocmVjZWl2ZXJJZCkpLFxyXG5cclxuICAgIGZhY3RvcnlUcmFuc2ZlckFkZHNEaXNwYXRjaDogKGZhY3RvcnlUcmFzZmVycykgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hZGRzKGZhY3RvcnlUcmFzZmVycykpLFxyXG5cclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKEZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=