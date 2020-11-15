webpackHotUpdate_N_E("pages/catalog",{

/***/ "./src/components/Employee/EmployeeEdit.js":
/*!*************************************************!*\
  !*** ./src/components/Employee/EmployeeEdit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Employee\\EmployeeEdit.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
 //import Button from '../UI/Button/Button';

 //import { withStyles } from '@material-ui/core/styles';




 //import InputFile from '../UI/InputFile/InputFile';

var EmployeeEdit = function EmployeeEdit(props) {
  _s();

  //let email = localStorage.getItem("email");
  // const [dept, setDept] = React.useState(1);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // const handleChange = (event) => {
  //   setDept(event.target.value);
  // };


  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var employeeName = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập tên",
      onFocus: props.employeeNameFocusHandler,
      autoFocus: props.employeeName.autoFocus
    },
    validation: {
      required: true,
      minLength: 1
    }
  };
  var deptId = {
    elementConfig: {
      type: "select",
      placeholder: "Chọn bộ phận"
    },
    validation: {
      required: true
    }
  };
  var employeeDescription = {
    elementConfig: {
      type: "input",
      placeholder: "Nhập mô tả",
      onFocus: props.employeeDescriptionFocusHandler,
      autoFocus: props.employeeDescription.autoFocus
    },
    validation: {}
  };

  var formBody = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    required: true,
    error: !props.employeeName.valid & props.employeeName.touched ? true : false,
    label: "T\xEAn",
    margin: "normal"
  }, employeeName.elementConfig, {
    value: props.employeeName.value,
    onChange: function onChange(event) {
      return props.employeeNameChanged(event, employeeName.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    required: true,
    error: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
    htmlFor: "dept-select",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, "B\u1ED9 ph\u1EADn"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    required: true,
    "native": true,
    error: !props.deptId.valid ? true : false,
    inputProps: {
      name: "deptId",
      id: "dept-select"
    },
    open: open
  }, deptId.elementConfig, {
    onClose: handleClose,
    onOpen: handleOpen,
    value: props.deptId.value,
    onChange: function onChange(event) {
      return props.employeeDeptIdChanged(event, deptId.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), __jsx("option", {
    value: "-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Ch\u01B0a ch\u1ECDn"), props.deptList.depts.map(function (dept, index) {
    return __jsx("option", {
      key: dept.id,
      value: dept.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }, dept.name);
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    error: !props.employeeDescription.valid & props.employeeDescription.touched ? true : false,
    label: "M\xF4 t\u1EA3",
    margin: "normal"
  }, employeeDescription.elementConfig, {
    value: props.employeeDescription.value,
    onChange: function onChange(event) {
      return props.employeeDescriptionChanged(event, employeeDescription.validation);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 22
      }
    }),
    onClick: props.employeeCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "T\u1EA1o m\u1EDBi"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "primary",
    size: "small",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 22
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, "L\u01B0u")));

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: props.employeeSaveHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, formBody));
};

_s(EmployeeEdit, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");

_c = EmployeeEdit;
/* harmony default export */ __webpack_exports__["default"] = (EmployeeEdit);

var _c;

$RefreshReg$(_c, "EmployeeEdit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRW1wbG95ZWUvRW1wbG95ZWVFZGl0LmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlRWRpdCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwiZW1wbG95ZWVOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJkZXB0SWQiLCJlbXBsb3llZURlc2NyaXB0aW9uIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImZvcm1Cb2R5IiwidmFsaWQiLCJ0b3VjaGVkIiwidmFsdWUiLCJldmVudCIsImVtcGxveWVlTmFtZUNoYW5nZWQiLCJuYW1lIiwiaWQiLCJlbXBsb3llZURlcHRJZENoYW5nZWQiLCJkZXB0TGlzdCIsImRlcHRzIiwibWFwIiwiZGVwdCIsImluZGV4IiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQiLCJlbXBsb3llZUNyZWF0ZUhhbmRsZXIiLCJlbXBsb3llZVNhdmVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FXQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUI7QUFDQTtBQUY4Qix3QkFHTkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FITTtBQUFBO0FBQUEsTUFHdkJDLElBSHVCO0FBQUEsTUFHakJDLE9BSGlCLHdCQUs5QjtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELFdBQU8sQ0FBQyxL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LEtBQUQ7QUFBQSxhQUNSeEIsS0FBSyxDQUFDa0MsMEJBQU4sQ0FDRVYsS0FERixFQUVFTixtQkFBbUIsQ0FBQ0osVUFGdEIsQ0FEUTtBQUFBLEtBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBakRGLENBREYsQ0FERixFQXlFRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsV0FBTyxFQUFFZCxLQUFLLENBQUNtQyxxQkFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQVVFLE1BQUMsZ0VBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLENBekVGLENBREY7O0FBaUdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFbkMsS0FBSyxDQUFDb0MsbUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENoQixRQUE1QyxDQURGLENBREY7QUFLRCxDQXRKRDs7R0FBTXJCLFk7O0tBQUFBLFk7QUF3SlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGFsb2cuMzhlNzY5YjdiOTAwNjU2OGQ0OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG4vL2ltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IElucHV0RmlsZSBmcm9tICcuLi9VSS9JbnB1dEZpbGUvSW5wdXRGaWxlJztcclxuXHJcbmNvbnN0IEVtcGxveWVlRWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIC8vbGV0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAvLyBjb25zdCBbZGVwdCwgc2V0RGVwdF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgc2V0RGVwdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGVtcGxveWVlTmFtZSA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgdMOqblwiLFxyXG4gICAgICBvbkZvY3VzOiBwcm9wcy5lbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZW1wbG95ZWVOYW1lLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGRlcHRJZCA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIGLhu5kgcGjhuq1uXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgZW1wbG95ZWVEZXNjcmlwdGlvbiA9IHtcclxuICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJOaOG6rXAgbcO0IHThuqNcIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcixcclxuICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uLmF1dG9Gb2N1cyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7fSxcclxuICB9O1xyXG5cclxuICBsZXQgZm9ybUJvZHkgPSAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVOYW1lLnZhbGlkICYgcHJvcHMuZW1wbG95ZWVOYW1lLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUw6puXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIHsuLi5lbXBsb3llZU5hbWUuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1wbG95ZWVOYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbXBsb3llZU5hbWVDaGFuZ2VkKGV2ZW50LCBlbXBsb3llZU5hbWUudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkIGVycm9yPlxyXG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJkZXB0LXNlbGVjdFwiPkLhu5kgcGjhuq1uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICAgIGVycm9yPXshcHJvcHMuZGVwdElkLnZhbGlkID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImRlcHRJZFwiLFxyXG4gICAgICAgICAgICAgICAgICBpZDogXCJkZXB0LXNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICB7Li4uZGVwdElkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kZXB0SWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5lbXBsb3llZURlcHRJZENoYW5nZWQoZXZlbnQsIGRlcHRJZC52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPkNoxrBhIGNo4buNbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmRlcHRMaXN0LmRlcHRzLm1hcCgoZGVwdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGVwdC5pZH0gdmFsdWU9e2RlcHQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RlcHQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbi52YWxpZCAmXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNw7QgdOG6o1wiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB7Li4uZW1wbG95ZWVEZXNjcmlwdGlvbi5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb24udmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmVtcGxveWVlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBU4bqhbyBt4bubaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEzGsHVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLmVtcGxveWVlU2F2ZUhhbmRsZXJ9Pntmb3JtQm9keX08L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9