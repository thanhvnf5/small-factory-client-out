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
    thousandSeparator: true,
    isNumericString: true,
    prefix: "$",
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
        lineNumber: 160,
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
      lineNumber: 171,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 174,
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
          lineNumber: 230,
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
          lineNumber: 233,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
          lineNumber: 287,
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
          lineNumber: 290,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
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
      lineNumber: 312,
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
      lineNumber: 365,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
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
        lineNumber: 394,
        columnNumber: 24
      }
    }),
    onClick: props.purchaseCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
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
        lineNumber: 403,
        columnNumber: 24
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJyZWQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiTnVtYmVyRm9ybWF0Q3VzdG9tIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJpbnB1dFJlZiIsIm9uQ2hhbmdlIiwib3RoZXIiLCJ2YWx1ZXMiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIlB1cmNoYXNlRWRpdCIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwicHVyY2hhc2VOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJwcm9kdWN0SWQiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsImdvbGRUeXBlSWQiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eSIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsInJlbmRlckdyb3VwIiwicGFyYW1zIiwiZ3JvdXAiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0VHlwZXMiLCJmaW5kIiwicHJvZHVjdFR5cGUiLCJpZCIsImNoaWxkcmVuIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInZhbGlkIiwidG91Y2hlZCIsImV2ZW50IiwicHVyY2hhc2VOYW1lQ2hhbmdlZCIsInByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJzZWxlY3RlZEl0ZW0iLCJwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQiLCJwcm9kdWN0VHlwZUlkIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0IiwiaW5wdXRQcm9wcyIsIm1pbldpZHRoIiwiZ29sZFR5cGVMaXN0IiwiZ29sZFR5cGVzIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCIsImdvbGRUeXBlIiwiaW5wdXRDb21wb25lbnQiLCJwdXJjaGFzZVdlaWdodENoYW5nZWQiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCIsInB1cmNoYXNlQ3JlYXRlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FhQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVEsRUFBRTtBQUZOLEtBRGlDO0FBS3ZDQyxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFLE1BREQ7QUFFTixpQkFBVztBQUNUQSxhQUFLLEVBQUUsTUFERTtBQUVUQyxrQkFBVSxFQUFFQyw0REFBR0E7QUFGTjtBQUZMLEtBTCtCO0FBWXZDQyxVQUFNLEVBQUU7QUFDTkgsV0FBSyxFQUFFO0FBREQsS0FaK0I7QUFldkNJLGFBQVMsRUFBRTtBQUNUSixXQUFLLEVBQUUsTUFERTtBQUVUSyxnQkFBVSxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FB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LEtBY01ULG1CQUFtQixDQUFDakIsYUFkMUI7QUFlRSxTQUFLLEVBQUV0QixLQUFLLENBQUN1QyxtQkFBTixDQUEwQi9CLEtBZm5DO0FBZ0JFLFlBQVEsRUFBRSxrQkFBQzZDLEtBQUQ7QUFBQSxhQUNSckQsS0FBSyxDQUFDc0UsMEJBQU4sQ0FDRWpCLEtBREYsRUFFRWQsbUJBQW1CLENBQUNYLFVBRnRCLENBRFE7QUFBQSxLQWhCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaE1GLENBREYsRUF5TkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsV0FBTyxFQUFFNUIsS0FBSyxDQUFDdUUscUJBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFVRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixDQXpORixDQURGLENBREY7QUFrUEQsQ0E3VUQ7O0dBQU16RCxZO1VBQ1loQyxTOzs7TUFEWmdDLFk7QUErVVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JyaW5nSW4uOTI4MDY2MDVmNjkwNWQ5YmYzMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTGlzdFN1YmhlYWRlcixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIG9wdGlvbjoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgXCImIGlucHV0XCI6IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcG9wcGVyOiB7XHJcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTnVtYmVyRm9ybWF0Q3VzdG9tID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOdW1iZXJGb3JtYXRDdXN0b20oXHJcbiAgcHJvcHMsXHJcbiAgcmVmXHJcbikge1xyXG4gIGNvbnN0IHsgaW5wdXRSZWYsIG9uQ2hhbmdlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgZ2V0SW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgICB0aG91c2FuZFNlcGFyYXRvclxyXG4gICAgICBpc051bWVyaWNTdHJpbmdcclxuICAgICAgcHJlZml4PVwiJFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuTnVtYmVyRm9ybWF0Q3VzdG9tLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBQdXJjaGFzZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwdXJjaGFzZU5hbWUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHTDqm5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlTmFtZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VXZWlnaHQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VRdWFudGl0eSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBz4buRIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VEZXNjcmlwdGlvbiA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcO0IHThuqNcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJHcm91cCA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT0gcGFyYW1zLmdyb3VwXHJcbiAgICAgICAgKS5uYW1lXHJcbiAgICAgIH1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5wdXJjaGFzZVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZU5hbWUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlTDqm5cIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VOYW1lLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZU5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZChldmVudCwgcHVyY2hhc2VOYW1lLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24ucHJvZHVjdFR5cGVJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckdyb3VwfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24uaWQgPT0gdmFsdWV9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IHByb3BzLmdvbGRUeXBlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29sZFR5cGUuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17KG9wdGlvbiwgdmFsdWUpID0+IG9wdGlvbi5pZCA9PSB2YWx1ZX1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbGlkICYgcHJvcHMucHVyY2hhc2VXZWlnaHQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlV2VpZ2h0XCJcclxuICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VXZWlnaHQudmFsdWV9XHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZVdlaWdodC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZChldmVudCwgcHVyY2hhc2VXZWlnaHQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICBjdXJyZW5jeVN5bWJvbD1cIlwiXHJcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdD1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXI9XCIsXCJcclxuICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICBtaW5pbXVtVmFsdWU9XCIwXCJcclxuICAgICAgICAgICAgbWF4aW11bVZhbHVlPVwiOTk5OTk5OTk5XCJcclxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlcz17MX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWQoZXZlbnQsIHB1cmNoYXNlV2VpZ2h0LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sPVwiXCJcclxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0PVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVjaW1hbENoYXJhY3Rlcj1cIixcIlxyXG4gICAgICAgICAgICBkaWdpdEdyb3VwU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAgICAgICAgIG1pbmltdW1WYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBtYXhpbXVtVmFsdWU9XCI5OTlcIlxyXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzPXswfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZVF1YW50aXR5LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw7QgdOG6o1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZURlc2NyaXB0aW9uLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9