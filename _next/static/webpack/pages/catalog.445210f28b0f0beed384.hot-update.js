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
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
    htmlFor: "dept-select",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
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
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx("option", {
    value: "-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, "Ch\u01B0a ch\u1ECDn"), props.deptList.depts.map(function (dept, index) {
    return __jsx("option", {
      key: dept.id,
      value: dept.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 19
      }
    }, dept.name);
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 13
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
        lineNumber: 149,
        columnNumber: 22
      }
    }),
    onClick: props.employeeCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
        lineNumber: 158,
        columnNumber: 22
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, "L\u01B0u")));

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: props.employeeSaveHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRW1wbG95ZWUvRW1wbG95ZWVFZGl0LmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlRWRpdCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwiZW1wbG95ZWVOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJkZXB0SWQiLCJlbXBsb3llZURlc2NyaXB0aW9uIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImZvcm1Cb2R5IiwidmFsaWQiLCJ0b3VjaGVkIiwidmFsdWUiLCJldmVudCIsImVtcGxveWVlTmFtZUNoYW5nZWQiLCJuYW1lIiwiaWQiLCJlbXBsb3llZURlcHRJZENoYW5nZWQiLCJkZXB0TGlzdCIsImRlcHRzIiwibWFwIiwiZGVwdCIsImluZGV4IiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQiLCJlbXBsb3llZUNyZWF0ZUhhbmRsZXIiLCJlbXBsb3llZVNhdmVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FTQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUI7QUFDQTtBQUY4Qix3QkFHTkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FITTtBQUFBO0FBQUEsTUFHdkJDLElBSHVCO0FBQUEsTUFHakJDLE9BSGlCLHdCQUs5QjtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELFdBQU8sQ0FBQyxL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQXBERixDQURGLENBREYsRUE0RUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLGFBQVMsRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKYjtBQUtFLFdBQU8sRUFBRWQsS0FBSyxDQUFDbUMscUJBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFVRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixDQTVFRixDQURGOztBQW9HQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRW5DLEtBQUssQ0FBQ29DLG1CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDaEIsUUFBNUMsQ0FERixDQURGO0FBS0QsQ0F6SkQ7O0dBQU1yQixZOztLQUFBQSxZO0FBMkpTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLjQ0NTIxMGYyOGIwZjBiZWVkMzg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcblxyXG5jb25zdCBFbXBsb3llZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICAvL2xldCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgLy8gY29uc3QgW2RlcHQsIHNldERlcHRdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldERlcHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBlbXBsb3llZU5hbWUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHTDqm5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmVtcGxveWVlTmFtZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBkZXB0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBi4buZIHBo4bqtblwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGVtcGxveWVlRGVzY3JpcHRpb24gPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3DtCB04bqjXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbi5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuXHJcbiAgbGV0IGZvcm1Cb2R5ID0gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmVtcGxveWVlTmFtZS52YWxpZCAmIHByb3BzLmVtcGxveWVlTmFtZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVMOqblwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB7Li4uZW1wbG95ZWVOYW1lLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlTmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZW1wbG95ZWVOYW1lQ2hhbmdlZChldmVudCwgZW1wbG95ZWVOYW1lLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJkZXB0LXNlbGVjdFwiPkLhu5kgcGjhuq1uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICBlcnJvcj17IXByb3BzLmRlcHRJZC52YWxpZCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRlcHRJZFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZGVwdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgey4uLmRlcHRJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGVwdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbXBsb3llZURlcHRJZENoYW5nZWQoZXZlbnQsIGRlcHRJZC52YWxpZGF0aW9uKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPkNoxrBhIGNo4buNbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kZXB0TGlzdC5kZXB0cy5tYXAoKGRlcHQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGVwdC5pZH0gdmFsdWU9e2RlcHQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXB0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB7LyogPE1lbnVJdGVtIHZhbHVlPXsxfT5Tw6FwPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9PsSQw7pjPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9Pk5ndeG7mWk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17NH0+SOG7mXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17NX0+WGkgYsOzbmc8L01lbnVJdGVtPiAqL31cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICFwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uLnZhbGlkICZcclxuICAgICAgICAgICAgICAgIHByb3BzLmVtcGxveWVlRGVzY3JpcHRpb24udG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbD1cIk3DtCB04bqjXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIHsuLi5lbXBsb3llZURlc2NyaXB0aW9uLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlRGVzY3JpcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkKFxyXG4gICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgZW1wbG95ZWVEZXNjcmlwdGlvbi52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMuZW1wbG95ZWVDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFThuqFvIG3hu5tpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTMawdVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuZW1wbG95ZWVTYXZlSGFuZGxlcn0+e2Zvcm1Cb2R5fTwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZUVkaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=