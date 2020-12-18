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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsbC9TZWxsRWRpdC5qcyJdLCJuYW1lcyI6WyJWaUxvY2FsaXplZFV0aWxzIiwiZGF0ZSIsImZvcm1hdCIsImxvY2FsZSIsIkRhdGVGbnNVdGlscyIsImxvY2FsZU1hcCIsImVuIiwiZW5Mb2NhbGUiLCJ2aSIsInZpTG9jYWwiLCJsb2NhbGVVdGlsc01hcCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJkZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJvcHRpb24iLCJyZWQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiU2VsbEVkaXQiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJzZWxsQ29kZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJlbXBsb3llZUlkIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsInNlbGxXZWlnaHQiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiZ29sZFVuaXRJZCIsInNlbGxRdWFudGl0eSIsInNlbGxEYXRlIiwic2VsbE5vdGUiLCJyZW5kZXJEZXB0IiwicGFyYW1zIiwiZ3JvdXAiLCJkZXB0TGlzdCIsImRlcHRzIiwiZmluZCIsImRlcHQiLCJpZCIsIm5hbWUiLCJjaGlsZHJlbiIsInJlbmRlclByb2R1Y3RUeXBlIiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdFR5cGVzIiwicHJvZHVjdFR5cGUiLCJyb3dHZXR0ZXIiLCJpbmRleCIsInByb2R1Y3QiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiaXRlbSIsInNlbGxEZXRhaWxzIiwicHJvZHVjdE5hbWUiLCJnb2xkVHlwZSIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlcyIsImdvbGRUeXBlTmFtZSIsImdvbGRVbml0IiwiZ29sZFVuaXRMaXN0IiwiZ29sZFVuaXRzIiwiZ29sZFVuaXROYW1lIiwicm93Q2xpY2siLCJldmVudCIsInNlbGxEZXRhaWxFZGl0Iiwicm93RGF0YSIsImdldE9wdGlvblNlbGVjdGVkIiwidmFsdWUiLCJvcHRpb25JZCIsInZhbHVlSWQiLCJzZWxsU2F2ZUhhbmRsZXIiLCJ2YWxpZCIsInRvdWNoZWQiLCJzZWxsT25Gb2N1cyIsInRhcmdldCIsInNlbGxPbkNoYW5nZWQiLCJrZXkiLCJzZWxsQ29kZUVudGVyIiwiZW1wbG95ZWVMaXN0IiwiZW1wbG95ZWVzIiwic2VsZWN0ZWRJdGVtIiwiZGVwdElkIiwiZW1wbG95ZWUiLCJpbnB1dFByb3BzIiwibWluV2lkdGgiLCJ3ZWlnaHRUb3RhbCIsInF1YW50aXR5VG90YWwiLCJsZW5ndGgiLCJmbGV4R3JvdyIsImxhYmVsIiwiZGF0YUtleSIsIm51bWVyaWMiLCJzZWxsQ3JlYXRlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7OzRDQUNvQkMsSSxFQUFNO0FBQzVCLGFBQU9DLGdFQUFNLENBQUNELElBQUQsRUFBTyxZQUFQLEVBQXFCO0FBQUVFLGNBQU0sRUFBRSxLQUFLQTtBQUFmLE9BQXJCLENBQWI7QUFDRDs7OztFQUg0QkMsMEQ7O0FBTS9CLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFQyw4REFEWTtBQUVo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RFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsK0RBQUQsT0FKYjtBQUtFLFlBQVEsRUFBRSxDQUFDdEYsS0FBSyxDQUFDOEMsV0FBTixDQUFrQm1DLE1BQW5CLEdBQTRCLENBTHhDO0FBTUUsUUFBSSxFQUFDO0FBTlAsZ0JBVkYsQ0E1TkYsQ0FERixDQURGO0FBc1BELENBMWFEOztHQUFNbEYsUTtVQUNZcEIsUzs7O0tBRFpvQixRO0FBNGFTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYW5hZ2VTdG9yZS5jN2I4NzZiOTVlMmJiOTRjNmNiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dGFyZWFBdXRvc2l6ZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuaW1wb3J0IE51bWJlckZvcm1hdEN1c3RvbSBmcm9tIFwiLi4vVUkvSW5wdXROdW1iZXIvTnVtYmVyRm9ybWF0Q3VzdG9tXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jbGFzcyBWaUxvY2FsaXplZFV0aWxzIGV4dGVuZHMgRGF0ZUZuc1V0aWxzIHtcclxuICBnZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIFwiZGQvTU0veXl5eVwiLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxlVXRpbHNNYXAgPSB7XHJcbiAgZW46IERhdGVGbnNVdGlscyxcclxuICB2aTogVmlMb2NhbGl6ZWRVdGlscyxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBkZXRhaWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBTZWxsRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNlbGxDb2RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw6NcIixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsQ29kZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBlbXBsb3llZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gbmfGsOG7nWkgYsOhblwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBsb+G6oWkgdsOgbmdcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsV2VpZ2h0ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5zZWxsV2VpZ2h0LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5WYWx1ZTogMC4xLFxyXG4gICAgICBtYXhWYWx1ZTogOTk5OTk5OTk5LjksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRVbml0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIsSQxqFuIHbhu4tcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBzZWxsUXVhbnRpdHkgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgc+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluVmFsdWU6IDEsXHJcbiAgICAgIG1heFZhbHVlOiA5OTksXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxEYXRlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmfDoHkgeHXhuqV0XCIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuc2VsbERhdGUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHNlbGxOb3RlID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBnaGkgY2jDulwiLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnNlbGxOb3RlLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7cHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApLm5hbWV9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RUeXBlID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMucHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PSBwYXJhbXMuZ3JvdXBcclxuICAgICAgICApLm5hbWVcclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBjb25zdCByb3dHZXR0ZXIgPSAoeyBpbmRleCB9KSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0TmFtZS5cclxuICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgKTtcclxuICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0ucHJvZHVjdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gZ29sZFR5cGVOYW1lLlxyXG4gICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgKTtcclxuICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRUeXBlTmFtZSA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9wcy5zZWxsRGV0YWlsc1tpbmRleF0uZ29sZFR5cGVOYW1lID0gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIC8vIGdvbGRVbml0TmFtZS5cclxuICAgIGxldCBnb2xkVW5pdCA9IHByb3BzLmdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICk7XHJcbiAgICBpZiAoIWdvbGRVbml0KSB7XHJcbiAgICAgIHByb3BzLnNlbGxEZXRhaWxzW2luZGV4XS5nb2xkVW5pdE5hbWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdLmdvbGRVbml0TmFtZSA9IGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4uXHJcbiAgICByZXR1cm4gcHJvcHMuc2VsbERldGFpbHNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5zZWxsRGV0YWlsRWRpdChldmVudCwgZXZlbnQucm93RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09IHZhbHVlSWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuc2VsbFNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsQ29kZS52YWxpZCAmIHByb3BzLnNlbGxDb2RlLnRvdWNoZWQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXsgIXByb3BzLnNlbGxDb2RlLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzZWxsQ29kZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInNlbGxDb2RlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcOjXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnNlbGxDb2RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsQ29kZS52YWx1ZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gcHJvcHMuc2VsbE9uRm9jdXMoXCJzZWxsQ29kZVwiKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFwic2VsbENvZGVcIiwgdmFsdWUsIHNlbGxDb2RlLnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNlbGxDb2RlRW50ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZW1wbG95ZWVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1wbG95ZWVJZC52YWx1ZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gcHJvcHMuc2VsbE9uRm9jdXMoXCJlbXBsb3llZUlkXCIpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFwiZW1wbG95ZWVJZFwiLCB2YWx1ZSwgZW1wbG95ZWVJZC52YWxpZGF0aW9uKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckRlcHR9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gcHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5nxrDhu51pIHh14bqldFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVJZC52YWxpZCAmIHByb3BzLmVtcGxveWVlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5lbXBsb3llZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgIHV0aWxzPXtsb2NhbGVVdGlsc01hcFtcInZpXCJdfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZU1hcFtcInZpXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuc2VsbERhdGUudmFsaWQgJiBwcm9wcy5zZWxsRGF0ZS50b3VjaGVkID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWxsRGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWxsRGF0ZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIkjDtG0gbmF5XCJcclxuICAgICAgICAgICAgICBjYW5jZWxMYWJlbD1cIkjhu6d5XCJcclxuICAgICAgICAgICAgICBjbGVhckxhYmVsPVwiWMOzYVwiXHJcbiAgICAgICAgICAgICAgb2tMYWJlbD1cIkNo4buNblwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZ8OgeSBuaOG6rXBcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNlbGxEYXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHsuLi5zZWxsRGF0ZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHByb3BzLnNlbGxPbkZvY3VzKFwic2VsbERhdGVcIil9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBkYXRlO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsbE9uQ2hhbmdlZChcInNlbGxEYXRlXCIsIHZhbHVlLCBzZWxsRGF0ZS52YWxpZGF0aW9uKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsV2VpZ2h0VG90YWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGxXZWlnaHRUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMud2VpZ2h0VG90YWx9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmFtZT1cInNlbGxRdWFudGl0eVRvdGFsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxsUXVhbnRpdHlUb3RhbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVOG7lW5nIHPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucXVhbnRpdHlUb3RhbH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgcm93c01pbj17NH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5zZWxsTm90ZS52YWxpZCAmIHByb3BzLnNlbGxOb3RlLnRvdWNoZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxsTm90ZVwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsbE5vdGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkdoaSBjaMO6XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnNlbGxOb3RlLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zZWxsTm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gcHJvcHMuc2VsbE9uRm9jdXMoXCJzZWxsTm90ZVwiKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICBwcm9wcy5zZWxsT25DaGFuZ2VkKFwic2VsbE5vdGVcIiwgdmFsdWUsIHNlbGxOb3RlLnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgPE11aVZpcnR1YWxpemVkVGFibGVcclxuICAgICAgICAgICAgICByb3dDb3VudD17cHJvcHMuc2VsbERldGFpbHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIHJvd0dldHRlcj17cm93R2V0dGVyfVxyXG4gICAgICAgICAgICAgIG9uUm93Q2xpY2s9e3Jvd0NsaWNrfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxv4bqhaSB2w6BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5OiBcImdvbGRUeXBlTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJUcuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLEkMahbiB24buLXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IFwiZ29sZFVuaXROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlPhu5EgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YUtleTogXCJxdWFudGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbD1cInNlY29uZGFyeSBtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICAgICAge3Byb3BzLnNlbGxEZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpdGVtLnByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3REaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpc3BsYXkgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gaXRlbS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGVEaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlRGlzcGxheSA9IGdvbGRUeXBlLm5hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e3Byb2R1Y3REaXNwbGF5fTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQ+e2dvbGRUeXBlRGlzcGxheX08L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0xpc3Q+ICovfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZWxsQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshcHJvcHMuc2VsbERldGFpbHMubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEzGsHVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxsRWRpdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==