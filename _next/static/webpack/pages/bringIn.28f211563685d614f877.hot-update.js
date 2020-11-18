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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);




var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Purchase\\PurchaseEdit.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //import Button from '../UI/Button/Button';

 //import { withStyles } from '@material-ui/core/styles';





 //import InputFile from '../UI/InputFile/InputFile';

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    option: {
      width: "auto",
      "& input": {
        width: "auto",
        backgroundColor: "#364150"
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false),
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
  var purchaseDescription = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập mô tả",
      onFocus: props.purchaseDescriptionFocusHandler,
      autoFocus: props.purchaseDescription.autoFocus
    },
    validation: {}
  };
  return __jsx("form", {
    onSubmit: props.purchaseSaveHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
      lineNumber: 97,
      columnNumber: 11
    }
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_8__["Autocomplete"], {
    id: "productId-select",
    options: props.productList.products,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    open: open,
    onClose: handleClose,
    onOpen: handleOpen,
    value: props.productId.value // defaultValue={props.productList.products.find(
    //   (product) => product.id == props.productId.value
    // )}
    ,
    onChange: function onChange(event, selectedItem) {
      props.purchaseProductIdChanged(event, selectedItem, productId.validation);
    },
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 15
        }
      }, option.name);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          // autoComplete: 'new-password', // disable autocomplete and autofill
          name: "productId-option",
          id: "productId-option"
        }),
        className: classes.textField,
        style: {
          width: "auto"
        },
        required: true,
        label: "S\u1EA3n ph\u1EA9m",
        margin: "normal",
        error: !props.productId.valid & props.productId.touched ? true : false
      }, productId.elementConfig, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
      lineNumber: 179,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 24
      }
    }),
    onClick: props.purchaseCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, "T\u1EA1o m\u1EDBi"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 24
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInBvcHBlciIsInRleHRGaWVsZCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJQdXJjaGFzZUVkaXQiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJwdXJjaGFzZU5hbWUiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25Gb2N1cyIsInB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlciIsImF1dG9Gb2N1cyIsInZhbGlkYXRpb24iLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbiIsInB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwidmFsaWQiLCJ0b3VjaGVkIiwibmFtZSIsImlkIiwidmFsdWUiLCJldmVudCIsInB1cmNoYXNlTmFtZUNoYW5nZWQiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic2VsZWN0ZWRJdGVtIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0IiwiZmluZCIsInBhcmFtcyIsImlucHV0UHJvcHMiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCIsInB1cmNoYXNlQ3JlYXRlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FZQTs7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R0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLENBM0dGLENBREYsQ0FERjtBQW9JRCxDQXBMRDs7R0FBTXpDLFk7VUFDWWQsUzs7O0tBRFpjLFk7QUFzTFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JyaW5nSW4uMjhmMjExNTYzNjg1ZDYxNGY4NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbi8vaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgSW5wdXRGaWxlIGZyb20gJy4uL1VJL0lucHV0RmlsZS9JbnB1dEZpbGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICBvcHRpb246IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNjQxNTBcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwb3BwZXI6IHtcclxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBQdXJjaGFzZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldFByb2R1Y3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwdXJjaGFzZU5hbWUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHTDqm5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlTmFtZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwcm9kdWN0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHVyY2hhc2VEZXNjcmlwdGlvbiA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcO0IHThuqNcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLnB1cmNoYXNlU2F2ZUhhbmRsZXJ9PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlTmFtZS52YWxpZCAmIHByb3BzLnB1cmNoYXNlTmFtZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoZWxwZXJUZXh0PXsgIXByb3BzLnB1cmNoYXNlTmFtZS52YWxpZCA/IFwiVnVpIGzDsm5nIG5o4bqtcCB2w6BvIVwiIDogXCJQZXJmZWN0IVwiIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VOYW1lXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwicHVyY2hhc2VOYW1lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVMOqblwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZU5hbWUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlTmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZU5hbWVDaGFuZ2VkKGV2ZW50LCBwdXJjaGFzZU5hbWUudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgaWQ9XCJwcm9kdWN0SWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgb3B0aW9ucz17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0SWQudmFsdWV9XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17cHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgLy8gICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBwcm9wcy5wcm9kdWN0SWQudmFsdWVcclxuICAgICAgICAgICAgLy8gKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdExpc3QucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17KG9wdGlvbiwgdmFsdWUpID0+IG9wdGlvbi5pZCA9PSB2YWx1ZX1cclxuICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24ubmFtZX08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5pbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJT4bqjbiBwaOG6qW1cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgIXByb3BzLnByb2R1Y3RJZC52YWxpZCAmIHByb3BzLnByb2R1Y3RJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey4uLnByb2R1Y3RJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgIXByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWQgJlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVyY2hhc2VEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJNw7QgdOG6o1wiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHsuLi5wdXJjaGFzZURlc2NyaXB0aW9uLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG6oW8gbeG7m2lcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMxrB1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9