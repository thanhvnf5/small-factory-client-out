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
    fixedDecimalScale: true,
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
        lineNumber: 163,
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
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 177,
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
          lineNumber: 233,
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
          lineNumber: 236,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
          lineNumber: 290,
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
          lineNumber: 293,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.textField,
    required: true,
    error: !props.purchaseWeight.valid & props.purchaseWeight.touched ? true : false,
    name: "purchaseWeight",
    id: "purchaseWeight",
    decimalScale: 1,
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
      lineNumber: 315,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.textField,
    required: true,
    error: !props.purchaseQuantity.valid & props.purchaseQuantity.touched ? true : false,
    name: "purchaseQuantity",
    id: "purchaseQuantity",
    decimalScale: 0,
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
      lineNumber: 338,
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
      lineNumber: 361,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
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
        lineNumber: 390,
        columnNumber: 24
      }
    }),
    onClick: props.purchaseCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
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
        lineNumber: 399,
        columnNumber: 24
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJyZWQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiTnVtYmVyRm9ybWF0Q3VzdG9tIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJpbnB1dFJlZiIsIm9uQ2hhbmdlIiwib3RoZXIiLCJ2YWx1ZXMiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIlB1cmNoYXNlRWRpdCIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwicHVyY2hhc2VOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJwcm9kdWN0SWQiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsImdvbGRUeXBlSWQiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eSIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsInJlbmRlckdyb3VwIiwicGFyYW1zIiwiZ3JvdXAiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0VHlwZXMiLCJmaW5kIiwicHJvZHVjdFR5cGUiLCJpZCIsImNoaWxkcmVuIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInZhbGlkIiwidG91Y2hlZCIsImV2ZW50IiwicHVyY2hhc2VOYW1lQ2hhbmdlZCIsInByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJzZWxlY3RlZEl0ZW0iLCJwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQiLCJwcm9kdWN0VHlwZUlkIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0IiwiaW5wdXRQcm9wcyIsIm1pbldpZHRoIiwiZ29sZFR5cGVMaXN0IiwiZ29sZFR5cGVzIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsImdvbGRUeXBlIiwiaW5wdXRDb21wb25lbnQiLCJwdXJjaGFzZVdlaWdodENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkIiwicHVyY2hhc2VDcmVhdGVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWFBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsY0FBUSxFQUFFO0FBRk4sS0FEaUM7QUFLdkNDLFVBQU0sRUFBRTtBQUNOQyxXQUFLLEVBQUUsTUFERDtBQUVOLGlCQUFXO0FBQ1RBLGFBQUssRUFBRSxNQURFO0FBRVRDLGtCQUFVLEVBQUVDLDREQUFHQTtBQUZOO0FBRkwsS0FMK0I7QUFZdkNDLFVBQU0sRUFBRTtBQUNOSCxXQUFLLEVBQUU7QUFERCxLQVorQjtBQWV2Q0ksYUFBUyxFQUFFO0FBQ1RKLFdBQUssRUFBRSxNQURFO0FBRVRLLGdCQUFV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QUFBQTtBQUFBLEtBekxGLENBREYsRUFrTkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsV0FBTyxFQUFFNUIsS0FBSyxDQUFDd0UscUJBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFVRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixDQWxORixDQURGLENBREY7QUEyT0QsQ0F0VUQ7O0dBQU0xRCxZO1VBQ1loQyxTOzs7TUFEWmdDLFk7QUF3VVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JyaW5nSW4uYmEyNTFjZjc3MjM0OTY1ZTk4YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTGlzdFN1YmhlYWRlcixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIG9wdGlvbjoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgXCImIGlucHV0XCI6IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcG9wcGVyOiB7XHJcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTnVtYmVyRm9ybWF0Q3VzdG9tID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOdW1iZXJGb3JtYXRDdXN0b20oXHJcbiAgcHJvcHMsXHJcbiAgcmVmXHJcbikge1xyXG4gIGNvbnN0IHsgaW5wdXRSZWYsIG9uQ2hhbmdlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgZ2V0SW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgICBpc051bWVyaWNTdHJpbmdcclxuICAgICAgcHJlZml4PVwiXCJcclxuICAgICAgZml4ZWREZWNpbWFsU2NhbGU9e3RydWV9XHJcbiAgICAgIGRlY2ltYWxTY2FsZT17MX1cclxuICAgICAgZGVjaW1hbFNlcGFyYXRvcj1cIixcIlxyXG4gICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgLz5cclxuICApO1xyXG59KTtcclxuXHJcbk51bWJlckZvcm1hdEN1c3RvbS5wcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuY29uc3QgUHVyY2hhc2VFZGl0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgLy8gICBzZXRQcm9kdWN0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgcHVyY2hhc2VOYW1lID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0w6puXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZU5hbWUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGdvbGRUeXBlSWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlV2VpZ2h0ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHRy4buNbmcgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VXZWlnaHQuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlUXVhbnRpdHkgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgc+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHkuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRGVzY3JpcHRpb24gPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3DtCB04bqjXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyR3JvdXAgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkubmFtZVxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMucHVyY2hhc2VTYXZlSGFuZGxlcn0+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkICYgcHJvcHMucHVyY2hhc2VOYW1lLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9eyAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgICBpZDogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUw6puXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlTmFtZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VOYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlTmFtZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLnByb2R1Y3RUeXBlSWR9XHJcbiAgICAgICAgICAgIHJlbmRlckdyb3VwPXtyZW5kZXJHcm91cH1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXsob3B0aW9uLCB2YWx1ZSkgPT4gb3B0aW9uLmlkID09IHZhbHVlfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24uaWQgPT0gdmFsdWV9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb+G6oWkgdsOgbmdcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmdvbGRUeXBlSWQudmFsaWQgJiBwcm9wcy5nb2xkVHlwZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZ29sZFR5cGVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZVdlaWdodC52YWxpZCAmIHByb3BzLnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VXZWlnaHRcIlxyXG4gICAgICAgICAgICBkZWNpbWFsU2NhbGU9ezF9XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VXZWlnaHQudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZVdlaWdodC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZChldmVudCwgcHVyY2hhc2VXZWlnaHQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VRdWFudGl0eS52YWxpZCAmIHByb3BzLnB1cmNoYXNlUXVhbnRpdHkudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICBkZWNpbWFsU2NhbGU9ezB9XHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlPhu5EgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlUXVhbnRpdHkuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZChldmVudCwgcHVyY2hhc2VRdWFudGl0eS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBpZDogXCJwdXJjaGFzZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcO0IHThuqNcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VEZXNjcmlwdGlvbi5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgcHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlRWRpdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==