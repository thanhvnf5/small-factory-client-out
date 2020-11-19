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
    var inputRef = props.inputRef,
        onChange = props.onChange,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["inputRef", "onChange"]);

    return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, other, {
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 7
      }
    }));
  });

  var renderGroup = function renderGroup(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListSubheader"], {
      key: params.group,
      component: "div",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
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
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 164,
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
          lineNumber: 220,
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
          lineNumber: 223,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
          lineNumber: 277,
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
          lineNumber: 280,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
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
      lineNumber: 302,
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
      lineNumber: 353,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
        lineNumber: 382,
        columnNumber: 24
      }
    }),
    onClick: props.purchaseCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
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
        lineNumber: 391,
        columnNumber: 24
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJyZWQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiUHVyY2hhc2VFZGl0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwicHVyY2hhc2VOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJwcm9kdWN0SWQiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsImdvbGRUeXBlSWQiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodCIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eSIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsIk51bWJlckZvcm1hdEN1c3RvbSIsImZvcndhcmRSZWYiLCJyZWYiLCJpbnB1dFJlZiIsIm9uQ2hhbmdlIiwib3RoZXIiLCJ2YWx1ZXMiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJyZW5kZXJHcm91cCIsInBhcmFtcyIsImdyb3VwIiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdFR5cGVzIiwiZmluZCIsInByb2R1Y3RUeXBlIiwiaWQiLCJjaGlsZHJlbiIsInB1cmNoYXNlU2F2ZUhhbmRsZXIiLCJ2YWxpZCIsInRvdWNoZWQiLCJldmVudCIsInB1cmNoYXNlTmFtZUNoYW5nZWQiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic2VsZWN0ZWRJdGVtIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkIiwicHJvZHVjdFR5cGVJZCIsImRlc2NyaXB0aW9uIiwicHJvZHVjdCIsImlucHV0UHJvcHMiLCJtaW5XaWR0aCIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlcyIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQiLCJnb2xkVHlwZSIsImlucHV0Q29tcG9uZW50IiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBYUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQURpQztBQUt2Q0MsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU4saUJBQVc7QUFDVEEsYUFBSyxFQUFFLE1BREU7QUFFVEMsa0JBQVUsRUFBRUMsNERBQUdBO0FBRk47QUFGTCxLQUwrQjtBQVl2Q0MsVUFBTSxFQUFFO0FBQ05ILFdBQUssRUFBRTtBQURELEtBWitCO0FBZXZDSSxhQUFTLEVBQUU7QUFDVEosV0FBSyxFQUFFLE1BREU7QUFFVEssZ0JBQVUsRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZCxDQUZIO0FBR1RDLGlCQUFXLEVBQUVaLEtBQUssQ0FBQ1csT0FBTixDQUFjLENB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QVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLGFBQVMsRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKYjtBQUtFLFdBQU8sRUFBRWYsS0FBSyxDQUFDb0UscUJBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFVRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixDQXZORixDQURGLENBREY7QUFnUEQsQ0EvVkQ7O0dBQU1yRSxZO1VBQ1lmLFM7OztLQURaZSxZO0FBaVdTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLjYwYmVlM2Y3YzAyYzE5Yzc4YmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIExpc3RTdWJoZWFkZXIsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuLy9pbXBvcnQgSW5wdXRGaWxlIGZyb20gJy4uL1VJL0lucHV0RmlsZS9JbnB1dEZpbGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogcmVkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFB1cmNoYXNlRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHB1cmNoYXNlTmFtZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdMOqblwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBnb2xkVHlwZUlkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZVdlaWdodCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0cuG7jW5nIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlV2VpZ2h0LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZVF1YW50aXR5ID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHPhu5EgbMaw4bujbmdcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZVF1YW50aXR5LmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZURlc2NyaXB0aW9uID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw7QgdOG6o1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24uYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHt9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IE51bWJlckZvcm1hdEN1c3RvbSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IHsgaW5wdXRSZWYsIG9uQ2hhbmdlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICBnZXRJbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGlzTnVtZXJpY1N0cmluZ1xyXG4gICAgICAgIHByZWZpeD1cIlwiXHJcbiAgICAgICAgZGVjaW1hbFNjYWxlPXsxfVxyXG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9XCIsXCJcclxuICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyR3JvdXAgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09IHBhcmFtcy5ncm91cFxyXG4gICAgICAgICkubmFtZVxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMucHVyY2hhc2VTYXZlSGFuZGxlcn0+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkICYgcHJvcHMucHVyY2hhc2VOYW1lLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9eyAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgICBpZDogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUw6puXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlTmFtZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VOYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlTmFtZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLnByb2R1Y3RUeXBlSWR9XHJcbiAgICAgICAgICAgIHJlbmRlckdyb3VwPXtyZW5kZXJHcm91cH1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXsob3B0aW9uLCB2YWx1ZSkgPT4gb3B0aW9uLmlkID09IHZhbHVlfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwiZ29sZFR5cGVJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZ29sZFR5cGVJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5nb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBwcm9wcy5nb2xkVHlwZUlkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlSWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBnb2xkVHlwZSA9IHByb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIWdvbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvbGRUeXBlLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24uaWQgPT0gdmFsdWV9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZFR5cGVJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb+G6oWkgdsOgbmdcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLmdvbGRUeXBlSWQudmFsaWQgJiBwcm9wcy5nb2xkVHlwZUlkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4uZ29sZFR5cGVJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZVdlaWdodC52YWxpZCAmIHByb3BzLnB1cmNoYXNlV2VpZ2h0LnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWU9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIGlkPVwicHVyY2hhc2VXZWlnaHRcIlxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQ6IE51bWJlckZvcm1hdEN1c3RvbSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZChldmVudCwgcHVyY2hhc2VXZWlnaHQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICBjdXJyZW5jeVN5bWJvbD1cIlwiXHJcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdD1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXI9XCIsXCJcclxuICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICBtaW5pbXVtVmFsdWU9XCIwXCJcclxuICAgICAgICAgICAgbWF4aW11bVZhbHVlPVwiOTk5OTk5OTk5XCJcclxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlcz17MX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWQoZXZlbnQsIHB1cmNoYXNlV2VpZ2h0LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sPVwiXCJcclxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0PVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVjaW1hbENoYXJhY3Rlcj1cIixcIlxyXG4gICAgICAgICAgICBkaWdpdEdyb3VwU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAgICAgICAgIG1pbmltdW1WYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBtYXhpbXVtVmFsdWU9XCI5OTlcIlxyXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzPXswfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZVF1YW50aXR5LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw7QgdOG6o1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZURlc2NyaXB0aW9uLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9