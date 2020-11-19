webpackHotUpdate_N_E("pages/bringIn",{

/***/ "./src/components/Purchase/PurchaseEdit.js":
/*!*************************************************!*\
  !*** ./src/components/Purchase/PurchaseEdit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");





var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Purchase\\PurchaseEdit.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //import Button from '../UI/Button/Button';


 //import { withStyles } from '@material-ui/core/styles';







 //import InputFile from '../UI/InputFile/InputFile';

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    option: {
      width: "auto",
      "& input": {
        width: "auto",
        background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["red"]
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
var NumberFormatCustom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.forwardRef(_c = function NumberFormatCustom(props, ref) {
  var inputRef = props.inputRef,
      onChange = props.onChange,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["inputRef", "onChange"]);

  return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, other, {
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          name: props.name,
          value: values.value
        }
      });
    },
    isNumericString: true,
    prefix: "",
    decimalScale: 1,
    decimalSeparator: ",",
    thousandSeparator: ".",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }));
});
_c2 = NumberFormatCustom;
NumberFormatCustom.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired
};

var PurchaseEdit = function PurchaseEdit(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
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

  var purchaseName = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập tên",
      onFocus: props.purchaseNameFocusHandler,
      autoFocus: props.purchaseName.autoFocus
    },
    validation: {
      required: true,
      minLength: 1
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
      required: true
    }
  };
  var purchaseDescription = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập mô tả",
      onFocus: props.purchaseDescriptionFocusHandler,
      autoFocus: props.purchaseDescription.autoFocus
    },
    validation: {}
  };

  var renderGroup = function renderGroup(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListSubheader"], {
      key: params.group,
      component: "div",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 5
      }
    }, props.productTypeList.productTypes.find(function (productType) {
      return productType.id == params.group;
    }).name), params.children];
  };

  return __jsx("form", {
    onSubmit: props.purchaseSaveHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.textField,
    required: true,
    error: !props.purchaseName.valid & props.purchaseName.touched ? true : false // helperText={ !props.purchaseName.valid ? "Vui lòng nhập vào!" : "Perfect!" }
    ,
    inputProps: {
      name: "purchaseName",
      id: "purchaseName"
    },
    label: "T\xEAn",
    margin: "normal"
  }, purchaseName.elementConfig, {
    value: props.purchaseName.value,
    onChange: function onChange(event) {
      return props.purchaseNameChanged(event, purchaseName.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_10__["Autocomplete"], {
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
    renderGroup: renderGroup,
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.id) {
        return option.description;
      }

      var product = props.productList.products.find(function (product) {
        return product.id == option;
      });

      if (!product) {
        return "";
      } else {
        return product.description;
      }
    },
    getOptionSelected: function getOptionSelected(option, value) {
      return option.id == value;
    },
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 15
        }
      }, option.name);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "productId-option",
          id: "productId-option"
        }),
        style: {
          minWidth: 200
        },
        required: true,
        label: "S\u1EA3n ph\u1EA9m",
        margin: "normal",
        error: !props.productId.valid & props.productId.touched ? true : false
      }, productId.elementConfig, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_10__["Autocomplete"], {
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
        return option.description;
      }

      var goldType = props.goldTypeList.goldTypes.find(function (goldType) {
        return goldType.id == option;
      });

      if (!goldType) {
        return "";
      } else {
        return goldType.description;
      }
    },
    getOptionSelected: function getOptionSelected(option, value) {
      return option.id == value;
    },
    renderOption: function renderOption(option) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 15
        }
      }, option.name);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "goldTypeId-option",
          id: "goldTypeId-option"
        }),
        style: {
          minWidth: 200
        },
        required: true,
        label: "Lo\u1EA1i v\xE0ng",
        margin: "normal",
        error: !props.goldTypeId.valid & props.goldTypeId.touched ? true : false
      }, goldTypeId.elementConfig, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.textField,
    required: true,
    error: !props.purchaseWeight.valid & props.purchaseWeight.touched ? true : false,
    name: "purchaseWeight",
    id: "purchaseWeight",
    InputProps: {
      inputComponent: NumberFormatCustom
    },
    label: "Tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.purchaseWeight.value
  }, purchaseWeight.elementConfig, {
    onChange: function onChange(event) {
      return props.purchaseWeightChanged(event, purchaseWeight.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.textField,
    required: true,
    error: !props.purchaseQuantity.valid & props.purchaseQuantity.touched ? true : false,
    name: "purchaseQuantity",
    id: "purchaseQuantity",
    InputProps: {
      inputComponent: NumberFormatCustom
    },
    label: "S\u1ED1 l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.purchaseQuantity.value
  }, purchaseQuantity.elementConfig, {
    onChange: function onChange(event) {
      return props.purchaseQuantityChanged(event, purchaseQuantity.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.textField,
    error: !props.purchaseDescription.valid & props.purchaseDescription.touched ? true : false,
    inputProps: {
      name: "purchaseDescription",
      id: "purchaseDescription"
    },
    label: "M\xF4 t\u1EA3",
    margin: "normal"
  }, purchaseDescription.elementConfig, {
    value: props.purchaseDescription.value,
    onChange: function onChange(event) {
      return props.purchaseDescriptionChanged(event, purchaseDescription.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 24
      }
    }),
    onClick: props.purchaseCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }, "T\u1EA1o m\u1EDBi"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 24
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 11
    }
  }, "L\u01B0u"))));
};

_s(PurchaseEdit, "TsAExMDA6yuxA58uE+YzDgG8Jdg=", false, function () {
  return [useStyles];
});

_c3 = PurchaseEdit;
/* harmony default export */ __webpack_exports__["default"] = (PurchaseEdit);

var _c, _c2, _c3;

$RefreshReg$(_c, "NumberFormatCustom$React.forwardRef");
$RefreshReg$(_c2, "NumberFormatCustom");
$RefreshReg$(_c3, "PurchaseEdit");

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

/***/ "./src/components/Purchase/PurchaseList.js":
/*!*************************************************!*\
  !*** ./src/components/Purchase/PurchaseList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");





var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Purchase\\PurchaseList.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types */









/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.paper
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    rowOdd: {
      backgroundColor: "#f1f1f1"
    },
    rowEven: {
      backgroundColor: "#f8f8f0"
    }
  };
});

function renderRow(props) {
  var index = props.index,
      style = props.style,
      data = props.data;

  var getProductNameById = function getProductNameById(productList, id) {
    var product = productList.products.filter(function (product) {
      return product.id === id;
    })[0];

    if (product) {
      return product.name;
    }

    return "";
  };

  var getGoldTypeNameById = function getGoldTypeNameById(goldTypeList, id) {
    var goldType = goldTypeList.goldTypes.filter(function (goldType) {
      return goldType.id === id;
    })[0];

    if (goldType) {
      return goldType.name;
    }

    return "";
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_12__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    edge: "end",
    "aria-label": "edit",
    onClick: function onClick(event) {
      return data.purchaseEdit(event, data.purchases[index]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].weight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].quantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getProductNameById(data.productList, data.purchases[index].productId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldTypeNameById(data.goldTypeList, data.purchases[index].goldTypeId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    edge: "end",
    "aria-label": "delete",
    onClick: function onClick(event) {
      return data.purchaseDelete(event, data.purchases[index]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }))));
}

renderRow.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};
/************************************************** Constructor */

var PurchaseList = function PurchaseList(props) {
  _s();

  var PADDING_SIZE = 10;
  var ITEM_SIZE = 20;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];
  /* Detect mobile view */


  react__WEBPACK_IMPORTED_MODULE_9___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);

  var handleOnWheel = function handleOnWheel(_ref) {
    var deltaY = _ref.deltaY;
    // Your handler goes here ...
    console.log(new Date().toLocaleString() + " ............ handleOnWheel()", deltaY);
  }; // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/display-name


  var innerElementType = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function (_ref2, ref) {
    var style = _ref2.style,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["style"]);

    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      style: _objectSpread(_objectSpread({}, style), {}, {
        top: "".concat(parseFloat(style.top) + PADDING_SIZE, "px"),
        height: "".concat(parseFloat(style.height) + PADDING_SIZE * 2, "px")
      })
    }, rest, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 5
      }
    }));
  }); // eslint-disable-next-line react/display-name

  var outerElementType = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function (props, ref) {
    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      onWheel: handleOnWheel
    }, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 12
      }
    }));
  });
  /************************************************** render */

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_10__["AutoSizer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, function (propsAutoSizer) {
    return __jsx(react_window__WEBPACK_IMPORTED_MODULE_11__["FixedSizeList"], {
      width: propsAutoSizer.width,
      height: propsAutoSizer.height,
      itemSize: ITEM_SIZE,
      itemCount: props.purchases.length,
      itemData: {
        purchases: props.purchases,
        productList: props.productList,
        purchaseEdit: props.purchaseEdit,
        purchaseDelete: props.purchaseDelete,
        isMobile: isMobile,
        classes: classes
      },
      innerElementType: innerElementType,
      outerElementType: outerElementType,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }
    }, renderRow);
  }));
};

_s(PurchaseList, "kHeIdq+y+2b0bGY4N56B+1LbC8A=", false, function () {
  return [useStyles];
});

_c = PurchaseList;
/* harmony default export */ __webpack_exports__["default"] = (PurchaseList);

var _c;

$RefreshReg$(_c, "PurchaseList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUxpc3QuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm9wdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZCIsInJlZCIsInBvcHBlciIsInRleHRGaWVsZCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJOdW1iZXJGb3JtYXRDdXN0b20iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImlucHV0UmVmIiwib25DaGFuZ2UiLCJvdGhlciIsInZhbHVlcyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiUHVyY2hhc2VFZGl0IiwiY2xhc3NlcyIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJwdXJjaGFzZU5hbWUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25Gb2N1cyIsInB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlciIsImF1dG9Gb2N1cyIsInZhbGlkYXRpb24iLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyIiwiZ29sZFR5cGVJZCIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0IiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5IiwicHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwicmVuZGVyR3JvdXAiLCJwYXJhbXMiLCJncm91cCIsInByb2R1Y3RUeXBlTGlzdCIsInByb2R1Y3RUeXBlcyIsImZpbmQiLCJwcm9kdWN0VHlwZSIsImlkIiwiY2hpbGRyZW4iLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwidmFsaWQiLCJ0b3VjaGVkIiwiZXZlbnQiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNlbGVjdGVkSXRlbSIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCIsInByb2R1Y3RUeXBlSWQiLCJkZXNjcmlwdGlvbiIsInByb2R1Y3QiLCJpbnB1dFByb3BzIiwibWluV2lkdGgiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZXMiLCJwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkIiwiZ29sZFR5cGUiLCJpbnB1dENvbXBvbmVudCIsInB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCIsInB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicGFwZXIiLCJsaXN0SXRlbSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInJvd09kZCIsInJvd0V2ZW4iLCJyZW5kZXJSb3ciLCJpbmRleCIsInN0eWxlIiwiZGF0YSIsImdldFByb2R1Y3ROYW1lQnlJZCIsImZpbHRlciIsImdldEdvbGRUeXBlTmFtZUJ5SWQiLCJjbHN4IiwicHVyY2hhc2VFZGl0IiwicHVyY2hhc2VzIiwid2VpZ2h0IiwicXVhbnRpdHkiLCJpc01vYmlsZSIsInB1cmNoYXNlRGVsZXRlIiwibnVtYmVyIiwib2JqZWN0IiwiYW55IiwiUHVyY2hhc2VMaXN0IiwiUEFERElOR19TSVpFIiwiSVRFTV9TSVpFIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwiaGFuZGxlT25XaGVlbCIsImRlbHRhWSIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJpbm5lckVsZW1lbnRUeXBlIiwicmVzdCIsInRvcCIsInBhcnNlRmxvYXQiLCJvdXRlckVsZW1lbnRUeXBlIiwicHJvcHNBdXRvU2l6ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBYUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQURpQztBQUt2Q0MsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU4saUJBQVc7QUFDVEEsYUFBSyxFQUFFLE1BREU7QUFFVEMsa0JBQVUsRUFBRUMsNERBQUdBO0FBRk47QUFGTCxLQUwrQjtBQVl2Q0MsVUFBTSxFQUFFO0FBQ05ILFdBQUssRUFBRTtBQURELEtBWitCO0FBZXZDSSxhQUFTLEVBQUU7QUFDVEosV0FBSyxFQUFFLE1BREU7QUFFVEssZ0JBQVUsRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZCxDQUZIO0FBR1RDLGlCQUFXLEVBQUVaLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQ7QUFISjtBQWY0QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQXNCQSxJQUFNRSxrQkFBa0IsZ0JBQUdDLDZDQUFLLENBQUNDLFVBQU4sTUFBaUIsU0FBU0Ysa0JBQVQsQ0FDMUNHLEtBRDBDLEVBRTFDQyxHQUYwQyxFQUcxQztBQUFBLE1BQ1FDLFFBRFIsR0FDeUNGLEtBRHpDLENBQ1FF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QWhCSCxDQUREO0FBQUEsR0FESCxDQURGLENBREY7QUEwQkQsQ0FwRUQ7O0dBQU1pQixZO1VBR1lySCxTOzs7S0FIWnFILFk7QUFzRVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JyaW5nSW4uODRmNTg3MGIxMWFiZjdkOWY2NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTGlzdFN1YmhlYWRlcixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIG9wdGlvbjoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgXCImIGlucHV0XCI6IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcG9wcGVyOiB7XHJcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTnVtYmVyRm9ybWF0Q3VzdG9tID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOdW1iZXJGb3JtYXRDdXN0b20oXHJcbiAgcHJvcHMsXHJcbiAgcmVmXHJcbikge1xyXG4gIGNvbnN0IHsgaW5wdXRSZWYsIG9uQ2hhbmdlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgZ2V0SW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgICBpc051bWVyaWNTdHJpbmdcclxuICAgICAgcHJlZml4PVwiXCJcclxuICAgICAgZGVjaW1hbFNjYWxlPXsxfVxyXG4gICAgICBkZWNpbWFsU2VwYXJhdG9yPVwiLFwiXHJcbiAgICAgIHRob3VzYW5kU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuTnVtYmVyRm9ybWF0Q3VzdG9tLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBQdXJjaGFzZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwdXJjaGFzZU5hbWUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHTDqm5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlTmFtZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VXZWlnaHQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VRdWFudGl0eSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBz4buRIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VEZXNjcmlwdGlvbiA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcO0IHThuqNcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJHcm91cCA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT0gcGFyYW1zLmdyb3VwXHJcbiAgICAgICAgKS5uYW1lXHJcbiAgICAgIH1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5wdXJjaGFzZVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZU5hbWUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlTDqm5cIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VOYW1lLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZU5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZChldmVudCwgcHVyY2hhc2VOYW1lLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24ucHJvZHVjdFR5cGVJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckdyb3VwfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24uaWQgPT0gdmFsdWV9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IHByb3BzLmdvbGRUeXBlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29sZFR5cGUuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17KG9wdGlvbiwgdmFsdWUpID0+IG9wdGlvbi5pZCA9PSB2YWx1ZX1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbGlkICYgcHJvcHMucHVyY2hhc2VXZWlnaHQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlV2VpZ2h0XCJcclxuICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VXZWlnaHQudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZVdlaWdodC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZChldmVudCwgcHVyY2hhc2VXZWlnaHQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VRdWFudGl0eS52YWxpZCAmIHByb3BzLnB1cmNoYXNlUXVhbnRpdHkudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZVF1YW50aXR5LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlUXVhbnRpdHkudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZCAmXHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdXJjaGFzZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwicHVyY2hhc2VEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3DtCB04bqjXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlRGVzY3JpcHRpb24uZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMucHVyY2hhc2VDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBU4bqhbyBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEzGsHVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZUVkaXQ7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRvU2l6ZXIgfSBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWRcIjtcclxuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCB9IGZyb20gXCJyZWFjdC13aW5kb3dcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICB9LFxyXG4gIHJvd09kZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjFcIixcclxuICB9LFxyXG4gIHJvd0V2ZW46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGYwXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpbmRleCwgc3R5bGUsIGRhdGEgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGdldFByb2R1Y3ROYW1lQnlJZCA9IChwcm9kdWN0TGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBwcm9kdWN0ID0gcHJvZHVjdExpc3QucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWRcclxuICAgIClbMF07XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICByZXR1cm4gcHJvZHVjdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuICBjb25zdCBnZXRHb2xkVHlwZU5hbWVCeUlkID0gKGdvbGRUeXBlTGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBnb2xkVHlwZSA9IGdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmlsdGVyKFxyXG4gICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09PSBpZFxyXG4gICAgKVswXTtcclxuICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIGRhdGEuY2xhc3Nlcy5saXN0SXRlbSxcclxuICAgICAgICBpbmRleCAlIDIgPT09IDAgPyBkYXRhLmNsYXNzZXMucm93RXZlbiA6IGRhdGEuY2xhc3Nlcy5yb3dPZGRcclxuICAgICAgKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgfX1cclxuICAgICAga2V5PXtpbmRleH1cclxuICAgID5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGRhdGEucHVyY2hhc2VFZGl0KGV2ZW50LCBkYXRhLnB1cmNoYXNlc1tpbmRleF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLm5hbWV9IC8+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLndlaWdodH0gLz5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnB1cmNoYXNlc1tpbmRleF0ucXVhbnRpdHl9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRQcm9kdWN0TmFtZUJ5SWQoXHJcbiAgICAgICAgICAgIGRhdGEucHJvZHVjdExpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHVyY2hhc2VzW2luZGV4XS5wcm9kdWN0SWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2dldEdvbGRUeXBlTmFtZUJ5SWQoXHJcbiAgICAgICAgICAgIGRhdGEuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLnB1cmNoYXNlc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnB1cmNoYXNlc1tpbmRleF0uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGRhdGEucHVyY2hhc2VEZWxldGUoZXZlbnQsIGRhdGEucHVyY2hhc2VzW2luZGV4XSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICApO1xyXG59XHJcblxyXG5yZW5kZXJSb3cucHJvcFR5cGVzID0ge1xyXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBkYXRhOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNvbnN0IFB1cmNoYXNlTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFBBRERJTkdfU0laRSA9IDEwO1xyXG4gIGNvbnN0IElURU1fU0laRSA9IDIwO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLyogRGV0ZWN0IG1vYmlsZSB2aWV3ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vYmlsZVZpZXcgPSAvYW5kcm9pZHx3ZWJvc3xpcGhvbmV8aXBhZHxpcG9kfGJsYWNrYmVycnl8aWVtb2JpbGV8b3BlcmEgbWluaS9pLnRlc3QoXHJcbiAgICAgIGAke3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgKTtcclxuICAgIHNldElzTW9iaWxlKEJvb2xlYW4oaXNNb2JpbGVWaWV3KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbldoZWVsID0gKHsgZGVsdGFZIH0pID0+IHtcclxuICAgIC8vIFlvdXIgaGFuZGxlciBnb2VzIGhlcmUgLi4uXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIGhhbmRsZU9uV2hlZWwoKVwiLFxyXG4gICAgICBkZWx0YVlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3QgaW5uZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHsgc3R5bGUsIC4uLnJlc3QgfSwgcmVmKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgIHRvcDogYCR7cGFyc2VGbG9hdChzdHlsZS50b3ApICsgUEFERElOR19TSVpFfXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke3BhcnNlRmxvYXQoc3R5bGUuaGVpZ2h0KSArIFBBRERJTkdfU0laRSAqIDJ9cHhgLFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICBjb25zdCBvdXRlckVsZW1lbnRUeXBlID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IG9uV2hlZWw9e2hhbmRsZU9uV2hlZWx9IHsuLi5wcm9wc30gLz47XHJcbiAgfSk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBdXRvU2l6ZXI+XHJcbiAgICAgICAgeyhwcm9wc0F1dG9TaXplcikgPT4gKFxyXG4gICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcclxuICAgICAgICAgICAgd2lkdGg9e3Byb3BzQXV0b1NpemVyLndpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e3Byb3BzQXV0b1NpemVyLmhlaWdodH1cclxuICAgICAgICAgICAgaXRlbVNpemU9e0lURU1fU0laRX1cclxuICAgICAgICAgICAgaXRlbUNvdW50PXtwcm9wcy5wdXJjaGFzZXMubGVuZ3RofVxyXG4gICAgICAgICAgICBpdGVtRGF0YT17e1xyXG4gICAgICAgICAgICAgIHB1cmNoYXNlczogcHJvcHMucHVyY2hhc2VzLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RMaXN0OiBwcm9wcy5wcm9kdWN0TGlzdCxcclxuICAgICAgICAgICAgICBwdXJjaGFzZUVkaXQ6IHByb3BzLnB1cmNoYXNlRWRpdCxcclxuICAgICAgICAgICAgICBwdXJjaGFzZURlbGV0ZTogcHJvcHMucHVyY2hhc2VEZWxldGUsXHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlubmVyRWxlbWVudFR5cGU9e2lubmVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgIG91dGVyRWxlbWVudFR5cGU9e291dGVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtyZW5kZXJSb3d9XHJcbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9BdXRvU2l6ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9