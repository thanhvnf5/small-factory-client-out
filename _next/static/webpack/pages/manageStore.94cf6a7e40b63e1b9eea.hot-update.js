webpackHotUpdate_N_E("pages/manageStore",{

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
      placeholder: "Chọn người bán"
    },
    validation: {
      required: true
    }
  };
  var productId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn sản phẩm"
    },
    validation: {
      required: true
    }
  };
  var goldTypeId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn loại vàng"
    },
    validation: {
      required: true
    }
  };
  var sellWeight = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập trọng lượng",
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
      placeholder: "Đơn vị"
    },
    validation: {
      required: true
    }
  };
  var sellQuantity = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập số lượng",
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
    onFocus: function onFocus() {
      return props.sellOnFocus("sellCode");
    },
    onChange: function onChange(event) {
      var value = event.target.value;
      props.sellOnChanged("sellCode", value, sellCode.validation);
    },
    onKeyPress: function onKeyPress(event) {
      if (event.key === "Enter") {
        props.sellCodeEnter(event);
      }
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_14__["Autocomplete"], {
    id: "employeeId-select",
    options: props.employeeList.employees,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    value: props.employeeId.value,
    onFocus: function onFocus() {
      return props.sellOnFocus("employeeId");
    },
    onChange: function onChange(event, selectedItem) {
      var value = null;

      if (selectedItem) {
        value = selectedItem.id;
      }

      props.sellOnChanged("employeeId", value, employeeId.validation);
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
    onFocus: function onFocus() {
      return props.sellOnFocus("sellDate");
    },
    onChange: function onChange(date) {
      var value = date;
      props.sellOnChanged("sellDate", value, sellDate.validation);
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
    onFocus: function onFocus() {
      return props.sellOnFocus("sellNote");
    },
    onChange: function onChange(event) {
      var value = event.target.value;
      props.sellOnChanged("sellNote", value, sellNote.validation);
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
    value: props.productId.value,
    onFocus: function onFocus() {
      return props.sellOnFocus("productId");
    },
    onChange: function onChange(event, selectedItem) {
      var value = null;

      if (selectedItem) {
        value = selectedItem.id;
      }

      props.sellOnChanged("productId", value, productId.validation);
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
    value: props.goldTypeId.value,
    onFocus: function onFocus() {
      return props.sellOnFocus("goldTypeId");
    },
    onChange: function onChange(event, selectedItem) {
      var value = null;

      if (selectedItem) {
        value = selectedItem.id;
      }

      props.sellOnChanged("goldTypeId", value, goldTypeId.validation);
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
    onFocus: function onFocus() {
      return props.sellOnFocus("sellWeight");
    },
    onChange: function onChange(event) {
      var value = event.target.value;
      props.sellOnChanged("sellWeight", value, sellWeight.validation);
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
    onFocus: function onFocus() {
      return props.sellOnFocus("goldUnitId");
    },
    onChange: function onChange(event) {
      var value = event.target.value;
      props.sellOnChanged("goldUnitId", value, goldUnitId.validation);
    }
  }), __jsx("option", {
    key: "-1",
    "aria-label": "None",
    value: ""
  }), props.goldUnitList.goldUnits.map(function (goldUnit, index) {
    return __jsx("option", {
      key: goldUnit.id + "-" + index,
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
    onFocus: function onFocus() {
      return props.sellOnFocus("sellQuantity");
    },
    onChange: function onChange(event) {
      var value = event.target.value;
      props.sellOnChanged("sellQuantity", value, sellQuantity.validation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsbC9TZWxsRWRpdC5qcyJdLCJuYW1lcyI6WyJWaUxvY2FsaXplZFV0aWxzIiwiZGF0ZSIsImZvcm1hdCIsImxvY2FsZSIsIkRhdGVGbnNVdGlscyIsImxvY2FsZU1hcCIsImVuIiwiZW5Mb2NhbGUiLCJ2aSIsInZpTG9jYWwiLCJsb2NhbGVVdGlsc01hcCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJkZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJvcHRpb24iLCJyZWQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiU2VsbEVkaXQiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJzZWxsQ29kZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJlbXBsb3llZUlkIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsInNlbGxXZWlnaHQiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiZ29sZFVuaXRJZCIsInNlbGxRdWFudGl0eSIsInNlbGxEYXRlIiwic2VsbE5vdGUiLCJyZW5kZXJEZXB0IiwicGFyYW1zIiwiZ3JvdXAiLCJkZXB0TGlzdCIsImRlcHRzIiwiZmluZCIsImRlcHQiLCJpZCIsIm5hbWUiLCJjaGlsZHJlbiIsInJlbmRlclByb2R1Y3RUeXBlIiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdFR5cGVzIiwicHJvZHVjdFR5cGUiLCJyb3dHZXR0ZXIiLCJpbmRleCIsInByb2R1Y3QiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiaXRlbSIsInNlbGxEZXRhaWxzIiwicHJvZHVjdE5hbWUiLCJnb2xkVHlwZSIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlcyIsImdvbGRUeXBlTmFtZSIsImdvbGRVbml0IiwiZ29sZFVuaXRMaXN0IiwiZ29sZFVuaXRzIiwiZ29sZFVuaXROYW1lIiwicm93Q2xpY2siLCJldmVudCIsInNlbGxEZXRhaWxFZGl0Iiwicm93RGF0YSIsImdldE9wdGlvblNlbGVjdGVkIiwidmFsdWUiLCJvcHRpb25JZCIsInZhbHVlSWQiLCJzZWxsU2F2ZUhhbmRsZXIiLCJ2YWxpZCIsInRvdWNoZWQiLCJzZWxsT25Gb2N1cyIsInRhcmdldCIsInNlbGxPbkNoYW5nZWQiLCJrZXkiLCJzZWxsQ29kZUVudGVyIiwiZW1wbG95ZWVMaXN0IiwiZW1wbG95ZWVzIiwic2VsZWN0ZWRJdGVtIiwiZGVwdElkIiwiZW1wbG95ZWUiLCJpbnB1dFByb3BzIiwibWluV2lkdGgiLCJ3ZWlnaHRUb3RhbCIsInF1YW50aXR5VG90YWwiLCJwcm9kdWN0VHlwZUlkIiwiZGVjaW1hbFNjYWxlIiwiaW5wdXRDb21wb25lbnQiLCJOdW1iZXJGb3JtYXRDdXN0b20iLCJtYXAiLCJzZWxsQWRkRGV0YWlsSGFuZGxlciIsImxlbmd0aCIsImZsZXhHcm93IiwibGFiZWwiLCJkYXRhS2V5IiwibnVtZXJpYyIsInNlbGxDcmVhdGVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTs7SUFFTUEsZ0I7Ozs7Ozs7Ozs7Ozs7NENBQ29CQyxJLEVBQU07QUFDNUIsYUFBT0MsZ0VBQU0sQ0FBQ0QsSUFBRCxFQUFPLFlBQVAsRUFBcUI7QUFBRUUsY0FB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Q0FERixDQTdXRixFQWliRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFO0FBQWYsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQsT0FKYjtBQUtFLFdBQU8sRUFBRTNGLEtBQUssQ0FBQzRGO0FBTGpCLHlCQURGLEVBVUUsTUFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLGFBQVMsRUFBRSxNQUFDLCtEQUFELE9BSmI7QUFLRSxZQUFRLEVBQUUsQ0FBQzVGLEtBQUssQ0FBQzhDLFdBQU4sQ0FBa0J5QyxNQUFuQixHQUE0QixDQUx4QztBQU1FLFFBQUksRUFBQztBQU5QLGdCQVZGLENBamJGLENBREYsQ0FERjtBQTJjRCxDQS9uQkQ7O0dBQU14RixRO1VBQ1lwQixTOzs7S0FEWm9CLFE7QUFpb0JTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYW5hZ2VTdG9yZS45NGNmNmE3ZTQwYjYzZTFiOWVlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuaW1wb3J0IE51bWJlckZvcm1hdEN1c3RvbSBmcm9tIFwiLi4vVUkvSW5wdXROdW1iZXIvTnVtYmVyRm9ybWF0Q3VzdG9tXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBTZWxsRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNlbGxDb2RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw6NcIixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsQ29kZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gbmfGsOG7nWkgYsOhblwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBsb+G6oWkgdsOgbmdcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsV2VpZ2h0ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsV2VpZ2h0LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMC4xLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5OTk5OTk5LjksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRVbml0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIsSQxqFuIHbhu4tcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsUXVhbnRpdHkgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgc+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxEYXRlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmfDoHkgeHXhuqV0XCIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbERhdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxOb3RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBnaGkgY2jDulwiLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxOb3RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7cHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApLm5hbWV9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RUeXBlID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMucHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PSBwYXJhbXMuZ3JvdXBcclxuICAgICAgICApLm5hbWVcclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dHZXR0ZXIgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0TmFtZS5cclxuICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFR5cGVOYW1lLlxyXG4gICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRVbml0TmFtZS5cclxuICAgIGxldCBnb2xkVW5pdCA9IHByb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRVbml0KSB7XHJcbiAgICAgIHByb3BzLnNlbGxEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4uXHJcbiAgICByZXR1cm4gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5zZWxsRGV0YWlsRWRpdChldmVudCwgZXZlbnQucm93RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09IHZhbHVlSWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuc2VsbFNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsQ29kZS52YWxpZCAmIHByb3BzLnNlbGxDb2RlLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXsgIXByb3BzLnNlbGxDb2RlLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzZWxsQ29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInNlbGxDb2RlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcOjXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnNlbGxDb2RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsQ29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gcHJvcHMuc2VsbE9uRm9jdXMoXCJzZWxsQ29kZVwiKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFwic2VsbENvZGVcIiwgdmFsdWUsIHNlbGxDb2RlLnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNlbGxDb2RlRW50ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZW1wbG95ZWVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1wbG95ZWVJZC52YWx1ZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gcHJvcHMuc2VsbE9uRm9jdXMoXCJlbXBsb3llZUlkXCIpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFwiZW1wbG95ZWVJZFwiLCB2YWx1ZSwgZW1wbG95ZWVJZC52YWxpZGF0aW9uKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5nxrDhu51pIHh14bqldFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVJZC52YWxpZCAmIHByb3BzLmVtcGxveWVlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5lbXBsb3llZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIHV0aWxzPXtsb2NhbGVVdGlsc01hcFtcInZpXCJdfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZU1hcFtcInZpXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuc2VsbERhdGUudmFsaWQgJiBwcm9wcy5zZWxsRGF0ZS50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWxsRGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWxsRGF0ZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIkjDtG0gbmF5XCJcclxuICAgICAgICAgICAgICBjYW5jZWxMYWJlbD1cIkjhu6d5XCJcclxuICAgICAgICAgICAgICBjbGVhckxhYmVsPVwiWMOzYVwiXHJcbiAgICAgICAgICAgICAgb2tMYWJlbD1cIkNo4buNblwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZ8OgeSBuaOG6rXBcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNlbGxEYXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHsuLi5zZWxsRGF0ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHByb3BzLnNlbGxPbkZvY3VzKFwic2VsbERhdGVcIil9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBkYXRlO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsbE9uQ2hhbmdlZChcInNlbGxEYXRlXCIsIHZhbHVlLCBzZWxsRGF0ZS52YWxpZGF0aW9uKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsV2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGxXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMud2VpZ2h0VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cInNlbGxRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsUXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucXVhbnRpdHlUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgcm93c01pbj17NH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsTm90ZS52YWxpZCAmIHByb3BzLnNlbGxOb3RlLnRvdWNoZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsTm90ZVwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbE5vdGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdoaSBjaMO6XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnNlbGxOb3RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsTm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gcHJvcHMuc2VsbE9uRm9jdXMoXCJzZWxsTm90ZVwiKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFwic2VsbE5vdGVcIiwgdmFsdWUsIHNlbGxOb3RlLnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJwcm9kdWN0SWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0SWQudmFsdWV9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHByb3BzLnNlbGxPbkZvY3VzKFwicHJvZHVjdElkXCIpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFwicHJvZHVjdElkXCIsIHZhbHVlLCBwcm9kdWN0SWQudmFsaWRhdGlvbik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9kdWN0VHlwZUlkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyUHJvZHVjdFR5cGV9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBwcm9wcy5zZWxsT25Gb2N1cyhcImdvbGRUeXBlSWRcIil9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZEl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxPbkNoYW5nZWQoXCJnb2xkVHlwZUlkXCIsIHZhbHVlLCBnb2xkVHlwZUlkLnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnNlbGxXZWlnaHQudmFsaWQgJiBwcm9wcy5zZWxsV2VpZ2h0LnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwic2VsbFdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbFdlaWdodFwiXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgZGVjaW1hbFNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VsbFdlaWdodC52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnNlbGxXZWlnaHQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gcHJvcHMuc2VsbE9uRm9jdXMoXCJzZWxsV2VpZ2h0XCIpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgIHByb3BzLnNlbGxPbkNoYW5nZWQoXCJzZWxsV2VpZ2h0XCIsIHZhbHVlLCBzZWxsV2VpZ2h0LnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5nb2xkVW5pdElkLnZhbGlkICYgcHJvcHMuZ29sZFVuaXRJZC50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImdvbGRVbml0LXNlbGVjdFwiPsSQxqFuIHbhu4s8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFVuaXRJZC52YWxpZCAmIHByb3BzLmdvbGRVbml0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRVbml0SWRcIixcclxuICAgICAgICAgICAgICAgIGlkOiBcImdvbGRVbml0LXNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICB7Li4uZ29sZFVuaXRJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFVuaXRJZC52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBwcm9wcy5zZWxsT25Gb2N1cyhcImdvbGRVbml0SWRcIil9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsbE9uQ2hhbmdlZChcImdvbGRVbml0SWRcIiwgdmFsdWUsIGdvbGRVbml0SWQudmFsaWRhdGlvbik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PVwiLTFcIiBhcmlhLWxhYmVsPVwiTm9uZVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICB7cHJvcHMuZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5tYXAoKGdvbGRVbml0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2dvbGRVbml0LmlkICsgXCItXCIgKyBpbmRleH0gdmFsdWU9e2dvbGRVbml0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z29sZFVuaXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnNlbGxRdWFudGl0eS52YWxpZCAmIHByb3BzLnNlbGxRdWFudGl0eS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwic2VsbFF1YW50aXR5XCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IGRlY2ltYWxTY2FsZTogMCB9fVxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNlbGxRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnNlbGxRdWFudGl0eS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBwcm9wcy5zZWxsT25Gb2N1cyhcInNlbGxRdWFudGl0eVwiKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgXCJzZWxsUXVhbnRpdHlcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2VsbFF1YW50aXR5LnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuc2VsbEFkZERldGFpbEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRow6ptIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgPE11aVZpcnR1YWxpemVkVGFibGVcclxuICAgICAgICAgICAgICByb3dDb3VudD17cHJvcHMuc2VsbERldGFpbHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIHJvd0dldHRlcj17cm93R2V0dGVyfVxyXG4gICAgICAgICAgICAgIG9uUm93Q2xpY2s9e3Jvd0NsaWNrfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxv4bqhaSB2w6BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRUeXBlTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJUcuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLEkMahbiB24buLXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFVuaXROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhu5EgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJxdWFudGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbD1cInNlY29uZGFyeSBtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICAgICAge3Byb3BzLnNlbGxEZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpdGVtLnByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3REaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpc3BsYXkgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gaXRlbS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGVEaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlRGlzcGxheSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e3Byb2R1Y3REaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e2dvbGRUeXBlRGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0xpc3Q+ICovfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZWxsQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshcHJvcHMuc2VsbERldGFpbHMubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEzGsHVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxsRWRpdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==