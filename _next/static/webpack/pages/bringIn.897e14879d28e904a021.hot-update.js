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
  var onChange = props.onChange,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["onChange"]);

  return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, other, {
    ref: ref,
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

  var renderGroup = function renderGroup(params) {
    return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListSubheader"], {
      key: params.group,
      component: "div",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
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
      lineNumber: 167,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 170,
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
          lineNumber: 226,
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
          lineNumber: 229,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
          lineNumber: 283,
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
          lineNumber: 286,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
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
      lineNumber: 355,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
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
        lineNumber: 384,
        columnNumber: 24
      }
    }),
    onClick: props.purchaseCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
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
        lineNumber: 393,
        columnNumber: 24
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJyZWQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiTnVtYmVyRm9ybWF0Q3VzdG9tIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJvbkNoYW5nZSIsIm90aGVyIiwidmFsdWVzIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJQdXJjaGFzZUVkaXQiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsInB1cmNoYXNlTmFtZSIsImVsZW1lbnRDb25maWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkZvY3VzIiwicHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyIiwiYXV0b0ZvY3VzIiwidmFsaWRhdGlvbiIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwicHJvZHVjdElkIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIiLCJnb2xkVHlwZUlkIiwicHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHQiLCJwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciIsInB1cmNoYXNlUXVhbnRpdHkiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbiIsInB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIiLCJyZW5kZXJHcm91cCIsInBhcmFtcyIsImdyb3VwIiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdFR5cGVzIiwiZmluZCIsInByb2R1Y3RUeXBlIiwiaWQiLCJjaGlsZHJlbiIsInB1cmNoYXNlU2F2ZUhhbmRsZXIiLCJ2YWxpZCIsInRvdWNoZWQiLCJldmVudCIsInB1cmNoYXNlTmFtZUNoYW5nZWQiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic2VsZWN0ZWRJdGVtIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkIiwicHJvZHVjdFR5cGVJZCIsImRlc2NyaXB0aW9uIiwicHJvZHVjdCIsImlucHV0UHJvcHMiLCJtaW5XaWR0aCIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlcyIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQiLCJnb2xkVHlwZSIsImlucHV0Q29tcG9uZW50IiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBYUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQURpQztBQUt2Q0MsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU4saUJBQVc7QUFDVEEsYUFBSyxFQUFFLE1BREU7QUFFVEMsa0JBQVUsRUFBRUMsNERBQUdBO0FBRk47QUFGTCxLQUwrQjtBQVl2Q0MsVUFBTSxFQUFFO0FBQ05ILFdBQUssRUFBRTtBQURELEtBWitCO0FBZXZDSSxhQUFTLEVBQUU7QUFDVEosV0FBSyxFQUFFLE1BREU7QUFFVEssZ0JBQVUsRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZCxDQUZIO0FBR1RDLGlCQUFXLEVBQUVaLEtBQUss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QUNFLE1BQUMsZ0VBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxXQUFPLEVBQUUzQixLQUFLLENBQUNxRSxxQkFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQVVFLE1BQUMsZ0VBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLENBbk5GLENBREYsQ0FERjtBQTRPRCxDQW5VRDs7R0FBTXhELFk7VUFDWS9CLFM7OztNQURaK0IsWTtBQXFVU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi44OTdlMTQ4NzlkMjhlOTA0YTAyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBMaXN0U3ViaGVhZGVyLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbi8vaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBOdW1iZXJGb3JtYXRDdXN0b20gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE51bWJlckZvcm1hdEN1c3RvbShcclxuICBwcm9wcyxcclxuICByZWZcclxuKSB7XHJcbiAgY29uc3QgeyBvbkNoYW5nZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE51bWJlckZvcm1hdFxyXG4gICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgICB0aG91c2FuZFNlcGFyYXRvclxyXG4gICAgICBpc051bWVyaWNTdHJpbmdcclxuICAgICAgcHJlZml4PVwiJFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuTnVtYmVyRm9ybWF0Q3VzdG9tLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBQdXJjaGFzZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwdXJjaGFzZU5hbWUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHTDqm5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlTmFtZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZ29sZFR5cGVJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VXZWlnaHQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdHLhu41uZyBsxrDhu6NuZ1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZVdlaWdodC5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VRdWFudGl0eSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBz4buRIGzGsOG7o25nXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VRdWFudGl0eS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VEZXNjcmlwdGlvbiA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcO0IHThuqNcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJHcm91cCA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT0gcGFyYW1zLmdyb3VwXHJcbiAgICAgICAgKS5uYW1lXHJcbiAgICAgIH1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5wdXJjaGFzZVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZU5hbWUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlTDqm5cIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VOYW1lLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZU5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZChldmVudCwgcHVyY2hhc2VOYW1lLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24ucHJvZHVjdFR5cGVJZH1cclxuICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3JlbmRlckdyb3VwfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24uaWQgPT0gdmFsdWV9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJnb2xkVHlwZUlkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5nb2xkVHlwZUlkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLmdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgICAgICAgLy8gICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09IHByb3BzLmdvbGRUeXBlSWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IGdvbGRUeXBlID0gcHJvcHMuZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghZ29sZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ29sZFR5cGUuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17KG9wdGlvbiwgdmFsdWUpID0+IG9wdGlvbi5pZCA9PSB2YWx1ZX1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJnb2xkVHlwZUlkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxv4bqhaSB2w6BuZ1wiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMuZ29sZFR5cGVJZC52YWxpZCAmIHByb3BzLmdvbGRUeXBlSWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5nb2xkVHlwZUlkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbGlkICYgcHJvcHMucHVyY2hhc2VXZWlnaHQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlV2VpZ2h0XCJcclxuICAgICAgICAgICAgaWQ9XCJwdXJjaGFzZVdlaWdodFwiXHJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudDogTnVtYmVyRm9ybWF0Q3VzdG9tLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlRy4buNbmcgbMaw4bujbmdcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJUcuG7jW5nIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlV2VpZ2h0LnZhbHVlfVxyXG4gICAgICAgICAgICBjdXJyZW5jeVN5bWJvbD1cIlwiXHJcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdD1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXI9XCIsXCJcclxuICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvcj1cIi5cIlxyXG4gICAgICAgICAgICBtaW5pbXVtVmFsdWU9XCIwXCJcclxuICAgICAgICAgICAgbWF4aW11bVZhbHVlPVwiOTk5OTk5OTk5XCJcclxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlcz17MX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWQoZXZlbnQsIHB1cmNoYXNlV2VpZ2h0LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q3VycmVuY3lUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJT4buRIGzGsOG7o25nXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlUXVhbnRpdHkudmFsdWV9XHJcbiAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sPVwiXCJcclxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0PVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVjaW1hbENoYXJhY3Rlcj1cIixcIlxyXG4gICAgICAgICAgICBkaWdpdEdyb3VwU2VwYXJhdG9yPVwiLlwiXHJcbiAgICAgICAgICAgIG1pbmltdW1WYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBtYXhpbXVtVmFsdWU9XCI5OTlcIlxyXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzPXswfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZVF1YW50aXR5LnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw7QgdOG6o1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZURlc2NyaXB0aW9uLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9