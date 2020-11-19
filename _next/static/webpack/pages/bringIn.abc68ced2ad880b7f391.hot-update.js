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
    label: "Tr\u1ECDng l\u01B0\u1EE3ng",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJyZWQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiTnVtYmVyRm9ybWF0Q3VzdG9tIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJpbnB1dFJlZiIsIm9uQ2hhbmdlIiwib3RoZXIiLCJ2YWx1ZXMiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIlB1cmNoYXNlRWRpdCIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwicHVyY2hhc2VOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJwcm9kdWN0SWQiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsImdvbGRUeXBlSWQiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eSIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsInJlbmRlckdyb3VwIiwicGFyYW1zIiwiZ3JvdXAiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0VHlwZXMiLCJmaW5kIiwicHJvZHVjdFR5cGUiLCJpZCIsImNoaWxkcmVuIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInZhbGlkIiwidG91Y2hlZCIsImV2ZW50IiwicHVyY2hhc2VOYW1lQ2hhbmdlZCIsInByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJzZWxlY3RlZEl0ZW0iLCJwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQiLCJwcm9kdWN0VHlwZUlkIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0IiwiaW5wdXRQcm9wcyIsIm1pbldpZHRoIiwiZ29sZFR5cGVMaXN0IiwiZ29sZFR5cGVzIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsImdvbGRUeXBlIiwiaW5wdXRDb21wb25lbnQiLCJwdXJjaGFzZVdlaWdodENoYW5nZWQiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkIiwicHVyY2hhc2VDcmVhdGVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWFBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsY0FBUSxFQUFFO0FBRk4sS0FEaUM7QUFLdkNDLFVBQU0sRUFBRTtBQUNOQyxXQUFLLEVBQUUsTUFERDtBQUVOLGlCQUFXO0FBQ1RBLGFBQUssRUFBRSxNQURFO0FBRVRDLGtCQUFVLEVBQUVDLDREQUFHQTtBQUZOO0FBRkwsS0FMK0I7QUFZdkNDLFVBQU0sRUFBRTtBQUNOSCxXQUFLLEVBQUU7QUFERCxLQVorQjtBQWV2Q0ksYUFBUyxFQUFFO0FBQ1RKLFdBQUssRUFBRSxNQURFO0FBRVRLLGdCQUFV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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxXQUFPLEVBQUU1QixLQUFLLENBQUN3RSxxQkFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQVVFLE1BQUMsZ0VBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLENBaE5GLENBREYsQ0FERjtBQXlPRCxDQXBVRDs7R0FBTTFELFk7VUFDWWhDLFM7OztNQURaZ0MsWTtBQXNVU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi5hYmM2OGNlZDJhZDg4MGI3ZjM5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBMaXN0U3ViaGVhZGVyLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbi8vaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBOdW1iZXJGb3JtYXRDdXN0b20gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE51bWJlckZvcm1hdEN1c3RvbShcclxuICBwcm9wcyxcclxuICByZWZcclxuKSB7XHJcbiAgY29uc3QgeyBpbnB1dFJlZiwgb25DaGFuZ2UsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgICBnZXRJbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy52YWx1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH19XHJcbiAgICAgIGlzTnVtZXJpY1N0cmluZ1xyXG4gICAgICBwcmVmaXg9XCJcIlxyXG4gICAgICBkZWNpbWFsU2NhbGU9ezF9XHJcbiAgICAgIGRlY2ltYWxTZXBhcmF0b3I9XCIsXCJcclxuICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9XCIuXCJcclxuICAgIC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5OdW1iZXJGb3JtYXRDdXN0b20ucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IFB1cmNoYXNlRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHB1cmNoYXNlTmFtZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdMOqblwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZVdlaWdodCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0cuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZVF1YW50aXR5ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHPhu5EgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZVF1YW50aXR5LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZURlc2NyaXB0aW9uID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw7QgdOG6o1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24uYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHt9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckdyb3VwID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcHMucHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PSBwYXJhbXMuZ3JvdXBcclxuICAgICAgICApLm5hbWVcclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLnB1cmNoYXNlU2F2ZUhhbmRsZXJ9PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlTmFtZS52YWxpZCAmIHByb3BzLnB1cmNoYXNlTmFtZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXsgIXByb3BzLnB1cmNoYXNlTmFtZS52YWxpZCA/IFwiVnVpIGzDsm5nIG5o4bqtcCB2w6BvIVwiIDogXCJQZXJmZWN0IVwiIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VOYW1lXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwicHVyY2hhc2VOYW1lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVMOqblwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZU5hbWUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlTmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZU5hbWVDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZU5hbWUudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJwcm9kdWN0SWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0SWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgLy8gICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBwcm9wcy5wcm9kdWN0SWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9kdWN0VHlwZUlkfVxyXG4gICAgICAgICAgICByZW5kZXJHcm91cD17cmVuZGVyR3JvdXB9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17KG9wdGlvbiwgdmFsdWUpID0+IG9wdGlvbi5pZCA9PSB2YWx1ZX1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJT4bqjbiBwaOG6qW1cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLnByb2R1Y3RJZC52YWxpZCAmIHByb3BzLnByb2R1Y3RJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLnByb2R1Y3RJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cImdvbGRUeXBlSWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlc31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmdvbGRUeXBlSWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gcHJvcHMuZ29sZFR5cGVJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZUlkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgZ29sZFR5cGUgPSBwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFnb2xkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnb2xkVHlwZS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXsob3B0aW9uLCB2YWx1ZSkgPT4gb3B0aW9uLmlkID09IHZhbHVlfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImdvbGRUeXBlSWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTG/huqFpIHbDoG5nXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5nb2xkVHlwZUlkLnZhbGlkICYgcHJvcHMuZ29sZFR5cGVJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLmdvbGRUeXBlSWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VXZWlnaHQudmFsaWQgJiBwcm9wcy5wdXJjaGFzZVdlaWdodC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwicHVyY2hhc2VXZWlnaHRcIlxyXG4gICAgICAgICAgICBpZD1cInB1cmNoYXNlV2VpZ2h0XCJcclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGlucHV0Q29tcG9uZW50OiBOdW1iZXJGb3JtYXRDdXN0b20sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVHLhu41uZyBsxrDhu6NuZ1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZVdlaWdodC52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlV2VpZ2h0LmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZVdlaWdodC52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZVF1YW50aXR5LnZhbGlkICYgcHJvcHMucHVyY2hhc2VRdWFudGl0eS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lPVwicHVyY2hhc2VRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VRdWFudGl0eVwiXHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VRdWFudGl0eS52YWx1ZX1cclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlUXVhbnRpdHkuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZChldmVudCwgcHVyY2hhc2VRdWFudGl0eS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBpZDogXCJwdXJjaGFzZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcO0IHThuqNcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VEZXNjcmlwdGlvbi5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgcHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlRWRpdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==