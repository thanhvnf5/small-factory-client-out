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
      "& div & input": {
        width: "auto",
        background: "red"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiUHVyY2hhc2VFZGl0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwicHVyY2hhc2VOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJwcm9kdWN0SWQiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInZhbGlkIiwidG91Y2hlZCIsIm5hbWUiLCJpZCIsInZhbHVlIiwiZXZlbnQiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNlbGVjdGVkSXRlbSIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCIsImRlc2NyaXB0aW9uIiwicHJvZHVjdCIsImZpbmQiLCJwYXJhbXMiLCJpbnB1dFByb3BzIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBWUE7O0NBRUE7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QUFJLEVBQUMsT0FIUDtBQUlFLGFBQVMsRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKYjtBQUtFLFFBQUksRUFBQyxRQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsQ0EzR0YsQ0FERixDQURGO0FBb0lELENBcExEOztHQUFNekMsWTtVQUNZZCxTOzs7S0FEWmMsWTtBQXNMU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi5iY2ZhNGI4YWNmODc2YTc3OGMzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIG9wdGlvbjoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgXCImIGRpdiAmIGlucHV0XCI6IHtcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFB1cmNoYXNlRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0UHJvZHVjdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHB1cmNoYXNlTmFtZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdMOqblwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VOYW1lLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHByb2R1Y3RJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBwdXJjaGFzZURlc2NyaXB0aW9uID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCBtw7QgdOG6o1wiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24uYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHt9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMucHVyY2hhc2VTYXZlSGFuZGxlcn0+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkICYgcHJvcHMucHVyY2hhc2VOYW1lLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9eyAhcHJvcHMucHVyY2hhc2VOYW1lLnZhbGlkID8gXCJWdWkgbMOybmcgbmjhuq1wIHbDoG8hXCIgOiBcIlBlcmZlY3QhXCIgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgICBpZDogXCJwdXJjaGFzZU5hbWVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJUw6puXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlTmFtZS5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VOYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWQoZXZlbnQsIHB1cmNoYXNlTmFtZS52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBpZD1cInByb2R1Y3RJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RJZC52YWx1ZX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAvLyAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09IHByb3BzLnByb2R1Y3RJZC52YWx1ZVxyXG4gICAgICAgICAgICAvLyApfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXsob3B0aW9uLCB2YWx1ZSkgPT4gb3B0aW9uLmlkID09IHZhbHVlfVxyXG4gICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIC8vIGF1dG9Db21wbGV0ZTogJ25ldy1wYXNzd29yZCcsIC8vIGRpc2FibGUgYXV0b2NvbXBsZXRlIGFuZCBhdXRvZmlsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCJhdXRvXCIgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgICAhcHJvcHMucHJvZHVjdElkLnZhbGlkICYgcHJvcHMucHJvZHVjdElkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAhcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZCAmXHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdXJjaGFzZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgaWQ6IFwicHVyY2hhc2VEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIk3DtCB04bqjXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgey4uLnB1cmNoYXNlRGVzY3JpcHRpb24uZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlRGVzY3JpcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQoXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb24udmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMucHVyY2hhc2VDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBU4bqhbyBt4bubaVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEzGsHVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZUVkaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=