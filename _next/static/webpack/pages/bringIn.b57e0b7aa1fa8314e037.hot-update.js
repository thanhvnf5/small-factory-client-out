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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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





var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Purchase\\PurchaseEdit.js",
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

var PurchaseEdit = function PurchaseEdit(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
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
    validation: {}
  };
  var purchaseQuantity = {
    elementConfig: {
      type: "text",
      placeholder: "Nhập số lượng",
      onFocus: props.purchaseQuantityFocusHandler,
      autoFocus: props.purchaseQuantity.autoFocus
    },
    validation: {}
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
  var NumberFormatCustom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.forwardRef(function (props, ref) {
    var _extends2;

    var inputRef = props.inputRef,
        onChange = props.onChange,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["inputRef", "onChange"]);

    return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, other, (_extends2 = {
      getInputRef: inputRef,
      onValueChange: function onValueChange(values) {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      },
      thousandSeparator: true,
      isNumericString: true,
      prefix: "",
      decimalScale: 1,
      decimalSeparator: ","
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "thousandSeparator", "."), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "__source", {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }), _extends2)));
  });

  var renderGroup = function renderGroup(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListSubheader"], {
      key: params.group,
      component: "div",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
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
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
      lineNumber: 165,
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
          lineNumber: 221,
          columnNumber: 15
        }
      }, option.name);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
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
          lineNumber: 224,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
          lineNumber: 278,
          columnNumber: 15
        }
      }, option.name);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
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
          lineNumber: 281,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.textField,
    error: !props.purchaseWeight.valid & props.purchaseWeight.touched ? true : false,
    name: "purchaseWeight",
    id: "purchaseWeight",
    InputProps: {
      inputComponent: NumberFormatCustom
    },
    label: "Tr\u1ECDng l\u01B0\u1EE3ng",
    margin: "normal",
    value: props.purchaseWeight.value,
    onChange: function onChange(event) {
      return props.purchaseWeightChanged(event, purchaseWeight.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
      lineNumber: 354,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
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
        lineNumber: 383,
        columnNumber: 24
      }
    }),
    onClick: props.purchaseCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
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
        lineNumber: 392,
        columnNumber: 24
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 11
    }
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

/***/ "./src/containers/PurchaseContainer/PurchaseContainer.js":
/*!***************************************************************!*\
  !*** ./src/containers/PurchaseContainer/PurchaseContainer.js ***!
  \***************************************************************/
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
/* harmony import */ var _components_Purchase_PurchaseEdit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Purchase/PurchaseEdit */ "./src/components/Purchase/PurchaseEdit.js");
/* harmony import */ var _components_Purchase_PurchaseList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/Purchase/PurchaseList */ "./src/components/Purchase/PurchaseList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/purchaseAction */ "./src/store/actions/purchaseAction.js");
/* harmony import */ var _store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/productTypeAction */ "./src/store/actions/productTypeAction.js");
/* harmony import */ var _store_actions_productAction__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../store/actions/productAction */ "./src/store/actions/productAction.js");
/* harmony import */ var _store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../store/actions/goldTypeAction */ "./src/store/actions/goldTypeAction.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");








var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\containers\\PurchaseContainer\\PurchaseContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;

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
      height: "100%",
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


var PurchaseContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PurchaseContainer, _Component);

  var _super = _createSuper(PurchaseContainer);

  function PurchaseContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PurchaseContainer);

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
      selectedItemType: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseNameFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseNameFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseNameChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseNameChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseProductIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseProductIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseProductIdChangeHandler", function (event, selectedItem, validation) {
      event.preventDefault();
      var productId = null;

      if (selectedItem) {
        productId = selectedItem.id;
      }

      _this.props.purchaseProductIdChangeDispatch(productId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldTypeIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseGoldTypeIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldTypeIdChangeHandler", function (event, selectedItem, validation) {
      event.preventDefault();
      var goldTypeId = null;

      if (selectedItem) {
        goldTypeId = selectedItem.id;
      }

      _this.props.purchaseGoldTypeIdChangeDispatch(goldTypeId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDescriptionFocusHandler", function () {
      _this.props.purchaseDescriptionFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDescriptionChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseDescriptionChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseWeightFocusHandler", function () {
      _this.props.purchaseWeightFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseWeightChangedHandler", function (event, validation) {
      // event.preventDefault();
      _this.props.purchaseWeightChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseQuantityFocusHandler", function () {
      _this.props.purchaseQuantityFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseQuantityChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseQuantityChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseCreateHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseCreateDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseSaveHandler", function (event) {
      event.preventDefault();
      var purchase = {
        name: _this.props.purchaseEdit.purchaseName.value,
        productId: _this.props.purchaseEdit.productId.value,
        goldTypeId: _this.props.purchaseEdit.goldTypeId.value,
        weight: _this.props.purchaseEdit.purchaseWeight.value,
        quantity: _this.props.purchaseEdit.purchaseQuantity.value,
        description: _this.props.purchaseEdit.purchaseDescription.value
      };

      if (!_this.props.purchaseEdit.id) {
        _this.props.purchaseAddDispatch(purchase);
      } else {
        _this.props.purchaseUpdateDispatch(_this.props.purchaseEdit.id, purchase);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null,
        // isOpenAlert: true,
        alertContent: "Lưu"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseEditHandler", function (event, purchase) {
      event.preventDefault(); // purchase.id = purchase.key;

      _this.props.purchaseEditDispatch(purchase);

      _this.setState({
        selectedItem: purchase,
        selectedItemType: "edit"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDeleteHandler", function (event, purchase) {
      event.preventDefault();

      _this.setState({
        isDialogOpen: true,
        dialogContent: purchase.name + " sẽ bị xóa?",
        selectedItem: purchase,
        selectedItemType: "delete"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.purchaseDeleteDispatch(_this.state.selectedItem.key);

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
        cancel: '[class*="MuiDialogContent-root"]',
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 9
        }
      })));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCloseAlert", function () {
      _this.setState({
        isOpenAlert: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PurchaseContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.productTypeListDispatch();
      this.props.productListDispatch();
      this.props.goldTypeListDispatch();
      this.props.purchaseListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401 || this.props.productTypeError && this.props.productTypeError.response && this.props.productTypeError.response.status == 401 || this.props.productError && this.props.productError.response && this.props.productError.response.status == 401 || this.props.goldTypeError && this.props.goldTypeError.response && this.props.goldTypeError.response.status == 401) {
        // this.props.purchaseErrorHandledDispatch();
        // throw new Error("An error has occured in Buggy component!");
        this.props.onLogout(); // Router.push("/sigin");
        // this.setState({
        //   isDialogOpen: true,
        //   dialogContent: "Lỗi đăng nhập!",
        // });
      }
    }
  }, {
    key: "render",

    /************************************************** render */
    value: function render() {
      var _this2 = this;

      console.log(new Date().toLocaleString() + " ............ PurchaseContainer render");
      var classes = this.props.classes;
      return __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 7
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 9
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 9
        }
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }
      }, this.state.alertContent + " thành công.")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.isDialogOpen,
        onClose: function onClose(event) {
          return _this2.dialogClose(event);
        },
        PaperComponent: this.PaperComponent,
        "aria-labelledby": "draggable-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          cursor: "move"
        },
        id: "draggable-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        autoFocus: true,
        onClick: function onClick(event) {
          return _this2.dialogClose(event);
        },
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 13
        }
      }, "H\u1EE7y"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick(event) {
          return _this2.dialogClose(event, true);
        },
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 13
        }
      }, "Nh\u1EADp mua")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 19
        }
      }, this.props.purchaseEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseEdit__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseEdit, {
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        purchaseNameFocusHandler: this.purchaseNameFocusHandler,
        purchaseNameChanged: this.purchaseNameChangedHandler,
        purchaseProductIdChanged: this.purchaseProductIdChangeHandler,
        purchaseProductIdFocusHandler: this.purchaseProductIdFocusHandler,
        purchaseGoldTypeIdChanged: this.purchaseGoldTypeIdChangeHandler,
        purchaseGoldTypeIdFocusHandler: this.purchaseGoldTypeIdFocusHandler,
        purchaseDescriptionFocusHandler: this.purchaseDescriptionFocusHandler,
        purchaseDescriptionChanged: this.purchaseDescriptionChangedHandler,
        purchaseWeightFocusHandler: this.purchaseWeightFocusHandler,
        purchaseWeightChanged: this.purchaseWeightChangedHandler,
        purchaseQuantityFocusHandler: this.purchaseQuantityFocusHandler,
        purchaseQuantityChanged: this.purchaseQuantityChangedHandler,
        purchaseCreateHandler: this.purchaseCreateHandler,
        purchaseSaveHandler: this.purchaseSaveHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseList__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseList, {
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        purchaseEdit: this.purchaseEditHandler,
        purchaseDelete: this.purchaseDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 23
        }
      })))))))));
    }
  }]);

  return PurchaseContainer;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    purchaseEdit: state.purchase.purchaseEdit,
    purchaseList: state.purchase.purchaseList,
    productTypeList: state.productType.productTypeList,
    productList: state.product.productList,
    goldTypeList: state.goldType.goldTypeList,
    error: state.purchase.error,
    productTypeError: state.productType.error,
    productError: state.product.error,
    goldTypeError: state.goldType.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    purchaseNameFocusDispatch: function purchaseNameFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseNameFocus"]());
    },
    purchaseNameChangedDispatch: function purchaseNameChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseNameChanged"](value, validation));
    },
    purchaseProductIdFocusDispatch: function purchaseProductIdFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseProductIdFocus"]());
    },
    purchaseProductIdChangeDispatch: function purchaseProductIdChangeDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseProductIdChanged"](value, validation));
    },
    purchaseGoldTypeIdFocusDispatch: function purchaseGoldTypeIdFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldTypeIdFocus"]());
    },
    purchaseGoldTypeIdChangeDispatch: function purchaseGoldTypeIdChangeDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldTypeIdChanged"](value, validation));
    },
    purchaseDescriptionFocusDispatch: function purchaseDescriptionFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDescriptionFocus"]());
    },
    purchaseDescriptionChangedDispatch: function purchaseDescriptionChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDescriptionChanged"](value, validation));
    },
    purchaseWeightFocusDispatch: function purchaseWeightFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseWeightFocus"]());
    },
    purchaseWeightChangedDispatch: function purchaseWeightChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseWeightChanged"](value, validation));
    },
    purchaseQuantityFocusDispatch: function purchaseQuantityFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseQuantityFocus"]());
    },
    purchaseQuantityChangedDispatch: function purchaseQuantityChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseQuantityChanged"](value, validation));
    },
    purchaseCreateDispatch: function purchaseCreateDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseCreate"]());
    },
    purchaseAddDispatch: function purchaseAddDispatch(purchase) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseAdd"](purchase));
    },
    purchaseEditDispatch: function purchaseEditDispatch(purchase) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseEdit"](purchase));
    },
    purchaseUpdateDispatch: function purchaseUpdateDispatch(id, purchase) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseUpdate"](id, purchase));
    },
    purchaseDeleteDispatch: function purchaseDeleteDispatch(id) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDelete"](id));
    },
    purchaseListDispatch: function purchaseListDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseList"]());
    },
    purchaseErrorHandledDispatch: function purchaseErrorHandledDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseErrorHandled"]());
    },
    productTypeListDispatch: function productTypeListDispatch() {
      return dispatch(_store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_28__["productTypeList"]());
    },
    productListDispatch: function productListDispatch() {
      return dispatch(_store_actions_productAction__WEBPACK_IMPORTED_MODULE_29__["productList"]());
    },
    goldTypeListDispatch: function goldTypeListDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_30__["goldTypeList"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_31__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(PurchaseContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9QdXJjaGFzZUNvbnRhaW5lci9QdXJjaGFzZUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwib3B0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwicmVkIiwicG9wcGVyIiwidGV4dEZpZWxkIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJtYXJnaW5SaWdodCIsIlB1cmNoYXNlRWRpdCIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsInB1cmNoYXNlTmFtZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkZvY3VzIiwicHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyIiwiYXV0b0ZvY3VzIiwidmFsaWRhdGlvbiIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwicHJvZHVjdElkIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIiLCJnb2xkVHlwZUlkIiwicHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHQiLCJwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciIsInB1cmNoYXNlUXVhbnRpdHkiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbiIsInB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIiLCJOdW1iZXJGb3JtYXRDdXN0b20iLCJmb3J3YXJkUmVmIiwicmVmIiwiaW5wdXRSZWYiLCJvbkNoYW5nZSIsIm90aGVyIiwidmFsdWVzIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicmVuZGVyR3JvdXAiLCJwYXJhbXMiLCJncm91cCIsInByb2R1Y3RUeXBlTGlzdCIsInByb2R1Y3RUeXBlcyIsImZpbmQiLCJwcm9kdWN0VHlwZSIsImlkIiwiY2hpbGRyZW4iLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwidmFsaWQiLCJ0b3VjaGVkIiwiZXZlbnQiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNlbGVjdGVkSXRlbSIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCIsInByb2R1Y3RUeXBlSWQiLCJkZXNjcmlwdGlvbiIsInByb2R1Y3QiLCJpbnB1dFByb3BzIiwibWluV2lkdGgiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZXMiLCJwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkIiwiZ29sZFR5cGUiLCJpbnB1dENvbXBvbmVudCIsInB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkIiwicHVyY2hhc2VDcmVhdGVIYW5kbGVyIiwic3R5bGVzIiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYnJlYWtwb2ludHMiLCJ1cCIsImJveFNpemluZyIsImxpc3QiLCJib3JkZXIiLCJwYXBlciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW1UeXBlIiwicHJldmVudERlZmF1bHQiLCJwdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlV2VpZ2h0Q2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VDcmVhdGVEaXNwYXRjaCIsInB1cmNoYXNlIiwicHVyY2hhc2VFZGl0Iiwid2VpZ2h0IiwicXVhbnRpdHkiLCJwdXJjaGFzZUFkZERpc3BhdGNoIiwicHVyY2hhc2VVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwicHVyY2hhc2VFZGl0RGlzcGF0Y2giLCJpc09LIiwicHVyY2hhc2VEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwia2V5IiwicHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2giLCJwcm9kdWN0TGlzdERpc3BhdGNoIiwiZ29sZFR5cGVMaXN0RGlzcGF0Y2giLCJwdXJjaGFzZUxpc3REaXNwYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJwcm9kdWN0VHlwZUVycm9yIiwicHJvZHVjdEVycm9yIiwiZ29sZFR5cGVFcnJvciIsIm9uTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VMaXN0IiwicHVyY2hhc2VFZGl0SGFuZGxlciIsInB1cmNoYXNlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJwcm9kdWN0VHlwZUFjaW9ucyIsInByb2R1Y3RBY2lvbnMiLCJnb2xkVHlwZUFjaW9ucyIsImF1dGhBY3Rpb25zIiwiY29ubmVjdCIsIndpdGhFcnJvckhhbmRsZXIiLCJ3aXRoU3R5bGVzIiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBYUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQURpQztBQUt2Q0MsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU4saUJBQVc7QUFDVEEsYUFBSyxFQUFFLE1BREU7QUFFVEMsa0JBQVUsRUFBRUMsNERBQUdBO0FBRk47QUFGTCxLQUwrQjtBQVl2Q0MsVUFBTSxFQUFFO0FBQ05ILFdBQUssRUFBRTtBQURELEtBWitCO0FBZXZDSSxhQUFTLEVBQUU7QUFDVEosV0FBSyxFQUFFLE1BREU7QUFFVEssZ0JBQVUsRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZCxDQUZIO0FBR1RDLGlCQUFXLEVBQUVaLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQ7QUFISjtBQWY0QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7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QjtBQXFDTDZFLHdCQUFvQixFQUFFO0FBQUEsYUFBTStCLFFBQVEsQ0FBQ0MsMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0FyQ2pCO0FBdUNMQyxnQ0FBNEIsRUFBRTtBQUFBLGFBQzVCRixRQUFRLENBQUNDLG1GQUFBLEVBQUQsQ0FEb0I7QUFBQSxLQXZDekI7QUEwQ0xuQywyQkFBdUIsRUFBRTtBQUFBLGFBQ3ZCa0MsUUFBUSxDQUFDRyxpRkFBQSxFQUFELENBRGU7QUFBQSxLQTFDcEI7QUE0Q0xwQyx1QkFBbUIsRUFBRTtBQUFBLGFBQU1pQyxRQUFRLENBQUNJLHlFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBNUNoQjtBQTZDTHBDLHdCQUFvQixFQUFFO0FBQUEsYUFBTWdDLFFBQVEsQ0FBQ0ssMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0E3Q2pCO0FBK0NMN0IsWUFBUSxFQUFFO0FBQUEsYUFBTXdCLFFBQVEsQ0FBQ00sMkRBQUEsRUFBRCxDQUFkO0FBQUE7QUEvQ0wsR0FBUDtBQWlERCxDQWxERDs7QUFvRGVDLDJIQUFPLENBQ3BCVCxlQURvQixFQUVwQkMsa0JBRm9CLENBQVAsQ0FHYlMsd0ZBQWdCLENBQUNDLDRFQUFVLENBQUM3RixNQUFELENBQVYsQ0FBbUJrQixpQkFBbkIsQ0FBRCxFQUF3QzRFLHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi5iNTdlMGI3YWExZmE4MzE0ZTAzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBMaXN0U3ViaGVhZGVyLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbi8vaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBQdXJjaGFzZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwdXJjaGFzZU5hbWUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHTDqm5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlTmFtZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VXZWlnaHQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VRdWFudGl0eSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBz4buRIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VEZXNjcmlwdGlvbiA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcO0IHThuqNcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCBOdW1iZXJGb3JtYXRDdXN0b20gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCB7IGlucHV0UmVmLCBvbkNoYW5nZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgZ2V0SW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcclxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICB0aG91c2FuZFNlcGFyYXRvclxyXG4gICAgICAgIGlzTnVtZXJpY1N0cmluZ1xyXG4gICAgICAgIHByZWZpeD1cIlwiXHJcbiAgICAgICAgZGVjaW1hbFNjYWxlPXsxfVxyXG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9XCIsXCJcclxuICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyR3JvdXAgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkubmFtZVxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMucHVyY2hhc2VTYXZlSGFuZGxlcn0+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkICYgcHJvcHMucHVyY2hhc2VOYW1lLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9eyAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgICBpZDogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUw6puXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlTmFtZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VOYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlTmFtZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLnByb2R1Y3RUeXBlSWR9XHJcbiAgICAgICAgICAgIHJlbmRlckdyb3VwPXtyZW5kZXJHcm91cH1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXsob3B0aW9uLCB2YWx1ZSkgPT4gb3B0aW9uLmlkID09IHZhbHVlfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24uaWQgPT0gdmFsdWV9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb+G6oWkgdsOgbmdcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmdvbGRUeXBlSWQudmFsaWQgJiBwcm9wcy5nb2xkVHlwZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZ29sZFR5cGVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZVdlaWdodC52YWxpZCAmIHByb3BzLnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VXZWlnaHRcIlxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZChldmVudCwgcHVyY2hhc2VXZWlnaHQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICBjdXJyZW5jeVN5bWJvbD1cIlwiXHJcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdD1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXI9XCIsXCJcclxuICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICBtaW5pbXVtVmFsdWU9XCIwXCJcclxuICAgICAgICAgICAgbWF4aW11bVZhbHVlPVwiOTk5OTk5OTk5XCJcclxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlcz17MX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWQoZXZlbnQsIHB1cmNoYXNlV2VpZ2h0LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sPVwiXCJcclxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0PVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVjaW1hbENoYXJhY3Rlcj1cIixcIlxyXG4gICAgICAgICAgICBkaWdpdEdyb3VwU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAgICAgICAgIG1pbmltdW1WYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBtYXhpbXVtVmFsdWU9XCI5OTlcIlxyXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzPXswfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZVF1YW50aXR5LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw7QgdOG6o1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZURlc2NyaXB0aW9uLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VFZGl0O1xyXG4iLCJpbXBvcnQgeyBHcmlkLCBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlRWRpdFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHVyY2hhc2VBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWRkZGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIFB1cmNoYXNlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wcm9kdWN0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICh0aGlzLnByb3BzLmVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSlcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLnB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHByb2R1Y3RJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaChwcm9kdWN0SWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBnb2xkVHlwZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZ29sZFR5cGVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2goZ29sZFR5cGVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHVyY2hhc2UgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWx1ZSxcclxuICAgICAgcHJvZHVjdElkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsdWUsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsdWUsXHJcbiAgICAgIHdlaWdodDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudmFsdWUsXHJcbiAgICAgIHF1YW50aXR5OiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VBZGREaXNwYXRjaChwdXJjaGFzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlVXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuaWQsIHB1cmNoYXNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIC8vIGlzT3BlbkFsZXJ0OiB0cnVlLFxyXG4gICAgICBhbGVydENvbnRlbnQ6IFwiTMawdVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFZGl0SGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBwdXJjaGFzZS5pZCA9IHB1cmNoYXNlLmtleTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFZGl0RGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVsZXRlSGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBwdXJjaGFzZS5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuQWxlcnQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHsvKiBFcnJvciBQb3B1cCAqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn0gbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIHsvKiBJbmZvIEFsZXJ0ICovfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW5BbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0Q29udGVudCArIFwiIHRow6BuaCBjw7RuZy5cIn1cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBD4bqjbmggYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxQYXBlcj5OaOG6rXAgbXVhPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Q9e3RoaXMucHJvcHMucHJvZHVjdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRUeXBlTGlzdD17dGhpcy5wcm9wcy5nb2xkVHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcj17dGhpcy5wdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUNoYW5nZWQ9e3RoaXMucHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VRdWFudGl0eUNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VDcmVhdGVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VTYXZlSGFuZGxlcj17dGhpcy5wdXJjaGFzZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVkaXQ9e3RoaXMucHVyY2hhc2VFZGl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VEZWxldGU9e3RoaXMucHVyY2hhc2VEZWxldGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwdXJjaGFzZUVkaXQ6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlRWRpdCxcclxuICAgIHB1cmNoYXNlTGlzdDogc3RhdGUucHVyY2hhc2UucHVyY2hhc2VMaXN0LFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0OiBzdGF0ZS5wcm9kdWN0VHlwZS5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICBwcm9kdWN0TGlzdDogc3RhdGUucHJvZHVjdC5wcm9kdWN0TGlzdCxcclxuICAgIGdvbGRUeXBlTGlzdDogc3RhdGUuZ29sZFR5cGUuZ29sZFR5cGVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLnB1cmNoYXNlLmVycm9yLFxyXG4gICAgcHJvZHVjdFR5cGVFcnJvcjogc3RhdGUucHJvZHVjdFR5cGUuZXJyb3IsXHJcbiAgICBwcm9kdWN0RXJyb3I6IHN0YXRlLnByb2R1Y3QuZXJyb3IsXHJcbiAgICBnb2xkVHlwZUVycm9yOiBzdGF0ZS5nb2xkVHlwZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VQcm9kdWN0SWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlUXVhbnRpdHlGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUXVhbnRpdHlGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VDcmVhdGUoKSksXHJcbiAgICBwdXJjaGFzZUFkZERpc3BhdGNoOiAocHVyY2hhc2UpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VBZGQocHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVkaXREaXNwYXRjaDogKHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRWRpdChwdXJjaGFzZSkpLFxyXG4gICAgcHVyY2hhc2VVcGRhdGVEaXNwYXRjaDogKGlkLCBwdXJjaGFzZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVVwZGF0ZShpZCwgcHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZWxldGUoaWQpKSxcclxuICAgIHB1cmNoYXNlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTGlzdCgpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRXJyb3JIYW5kbGVkKCkpLFxyXG5cclxuICAgIHByb2R1Y3RUeXBlTGlzdERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0VHlwZUFjaW9ucy5wcm9kdWN0VHlwZUxpc3QoKSksXHJcbiAgICBwcm9kdWN0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChwcm9kdWN0QWNpb25zLnByb2R1Y3RMaXN0KCkpLFxyXG4gICAgZ29sZFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGdvbGRUeXBlQWNpb25zLmdvbGRUeXBlTGlzdCgpKSxcclxuXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShQdXJjaGFzZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=