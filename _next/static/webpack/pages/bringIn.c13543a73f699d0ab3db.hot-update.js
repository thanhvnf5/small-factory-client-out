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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvcHRpb24iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJwb3BwZXIiLCJ0ZXh0RmllbGQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiUHVyY2hhc2VFZGl0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwicHVyY2hhc2VOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJwcm9kdWN0SWQiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInZhbGlkIiwidG91Y2hlZCIsIm5hbWUiLCJpZCIsInZhbHVlIiwiZXZlbnQiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNlbGVjdGVkSXRlbSIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCIsImRlc2NyaXB0aW9uIiwicHJvZHVjdCIsImZpbmQiLCJwYXJhbXMiLCJpbnB1dFByb3BzIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBWUE7O0NBRUE7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QUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixDQTNHRixDQURGLENBREY7QUFvSUQsQ0FwTEQ7O0dBQU16QyxZO1VBQ1lkLFM7OztLQURaYyxZO0FBc0xTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLmMxMzU0M2E3M2Y2OTlkMGFiM2RiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgb3B0aW9uOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcG9wcGVyOiB7XHJcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgUHVyY2hhc2VFZGl0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgLy8gICBzZXRQcm9kdWN0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgcHVyY2hhc2VOYW1lID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIk5o4bqtcCB0w6puXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5wdXJjaGFzZU5hbWUuYXV0b0ZvY3VzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgcHJvZHVjdElkID0ge1xyXG4gICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IHB1cmNoYXNlRGVzY3JpcHRpb24gPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3DtCB04bqjXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5wdXJjaGFzZVNhdmVIYW5kbGVyfT5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgJiBwcm9wcy5wdXJjaGFzZU5hbWUudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGVscGVyVGV4dD17ICFwcm9wcy5wdXJjaGFzZU5hbWUudmFsaWQgPyBcIlZ1aSBsw7JuZyBuaOG6rXAgdsOgbyFcIiA6IFwiUGVyZmVjdCFcIiB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGlkOiBcInB1cmNoYXNlTmFtZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlTDqm5cIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VOYW1lLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZU5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgcHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZChldmVudCwgcHVyY2hhc2VOYW1lLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZHVjdElkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgb25PcGVuPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e3Byb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgIC8vICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvcHMucHJvZHVjdElkLnZhbHVlXHJcbiAgICAgICAgICAgIC8vICl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24uaWQgPT0gdmFsdWV9XHJcbiAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvZHVjdElkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJwcm9kdWN0SWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcImF1dG9cIiB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5wcm9kdWN0SWQudmFsaWQgJiBwcm9wcy5wcm9kdWN0SWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0SWQuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICFwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbGlkICZcclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1cmNoYXNlRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBpZDogXCJwdXJjaGFzZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTcO0IHThuqNcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB7Li4ucHVyY2hhc2VEZXNjcmlwdGlvbi5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICBwcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgcHVyY2hhc2VEZXNjcmlwdGlvbi52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wdXJjaGFzZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTMawdVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlRWRpdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==