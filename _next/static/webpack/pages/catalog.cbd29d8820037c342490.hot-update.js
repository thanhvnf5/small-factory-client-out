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
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
    htmlFor: "dept-select",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx("option", {
    value: "-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Ch\u01B0a ch\u1ECDn"), props.deptList.depts.map(function (dept, index) {
    return __jsx("option", {
      key: dept.id,
      value: dept.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, dept.name);
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 126,
      columnNumber: 13
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
        lineNumber: 152,
        columnNumber: 22
      }
    }),
    onClick: props.employeeCreateHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
        lineNumber: 161,
        columnNumber: 22
      }
    }),
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, "L\u01B0u")));

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: props.employeeSaveHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRW1wbG95ZWUvRW1wbG95ZWVFZGl0LmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlRWRpdCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwiZW1wbG95ZWVOYW1lIiwiZWxlbWVudENvbmZpZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uRm9jdXMiLCJlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIiLCJhdXRvRm9jdXMiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJkZXB0SWQiLCJlbXBsb3llZURlc2NyaXB0aW9uIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImZvcm1Cb2R5IiwidmFsaWQiLCJ0b3VjaGVkIiwidmFsdWUiLCJldmVudCIsImVtcGxveWVlTmFtZUNoYW5nZWQiLCJuYW1lIiwiaWQiLCJlbXBsb3llZURlcHRJZENoYW5nZWQiLCJkZXB0TGlzdCIsImRlcHRzIiwibWFwIiwiZGVwdCIsImluZGV4IiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQiLCJlbXBsb3llZUNyZWF0ZUhhbmRsZXIiLCJlbXBsb3llZVNhdmVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FVQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUI7QUFDQTtBQUY4Qix3QkFHTkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FITTtBQUFBO0FBQUEsTUFHdkJDLElBSHVCO0FBQUEsTUFHakJDLE9BSGlCLHdCQUs5QjtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELFdBQU8sQ0FBQyxL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LEtBQUssQ0FBQ2tDLDBCQUFOLENBQ0VWLEtBREYsRUFFRU4sbUJBQW1CLENBQUNKLFVBRnRCLENBRFE7QUFBQSxLQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQXRERixDQURGLENBREYsRUE4RUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLGFBQVMsRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKYjtBQUtFLFdBQU8sRUFBRWQsS0FBSyxDQUFDbUMscUJBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFVRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpiO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixDQTlFRixDQURGOztBQXNHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRW5DLEtBQUssQ0FBQ29DLG1CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDaEIsUUFBNUMsQ0FERixDQURGO0FBS0QsQ0EzSkQ7O0dBQU1yQixZOztLQUFBQSxZO0FBNkpTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLmNiZDI5ZDg4MjAwMzdjMzQyNDkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy9pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuLy9pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBJbnB1dEZpbGUgZnJvbSAnLi4vVUkvSW5wdXRGaWxlL0lucHV0RmlsZSc7XHJcblxyXG5jb25zdCBFbXBsb3llZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICAvL2xldCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgLy8gY29uc3QgW2RlcHQsIHNldERlcHRdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIHNldERlcHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBlbXBsb3llZU5hbWUgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIHTDqm5cIixcclxuICAgICAgb25Gb2N1czogcHJvcHMuZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyLFxyXG4gICAgICBhdXRvRm9jdXM6IHByb3BzLmVtcGxveWVlTmFtZS5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBkZXB0SWQgPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBi4buZIHBo4bqtblwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IGVtcGxveWVlRGVzY3JpcHRpb24gPSB7XHJcbiAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiTmjhuq1wIG3DtCB04bqjXCIsXHJcbiAgICAgIG9uRm9jdXM6IHByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIsXHJcbiAgICAgIGF1dG9Gb2N1czogcHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbi5hdXRvRm9jdXMsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge30sXHJcbiAgfTtcclxuXHJcbiAgbGV0IGZvcm1Cb2R5ID0gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmVtcGxveWVlTmFtZS52YWxpZCAmIHByb3BzLmVtcGxveWVlTmFtZS50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVMOqblwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB7Li4uZW1wbG95ZWVOYW1lLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmVtcGxveWVlTmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZW1wbG95ZWVOYW1lQ2hhbmdlZChldmVudCwgZW1wbG95ZWVOYW1lLnZhbGlkYXRpb24pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZD5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZGVwdC1zZWxlY3RcIj5C4buZIHBo4bqtbjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17IXByb3BzLmRlcHRJZC52YWxpZCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZXB0SWRcIixcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZGVwdC1zZWxlY3RcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgey4uLmRlcHRJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGVwdElkLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgcHJvcHMuZW1wbG95ZWVEZXB0SWRDaGFuZ2VkKGV2ZW50LCBkZXB0SWQudmFsaWRhdGlvbilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5DaMawYSBjaOG7jW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kZXB0TGlzdC5kZXB0cy5tYXAoKGRlcHQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RlcHQuaWR9IHZhbHVlPXtkZXB0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkZXB0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIHsvKiA8TWVudUl0ZW0gdmFsdWU9ezF9PlPDoXA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0+xJDDumM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30+Tmd14buZaTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs0fT5I4buZdDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs1fT5YaSBiw7NuZzwvTWVudUl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAhcHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbi52YWxpZCAmXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNw7QgdOG6o1wiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICB7Li4uZW1wbG95ZWVEZXNjcmlwdGlvbi5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZChcclxuICAgICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb24udmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgc3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmVtcGxveWVlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBU4bqhbyBt4bubaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEzGsHVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLmVtcGxveWVlU2F2ZUhhbmRsZXJ9Pntmb3JtQm9keX08L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9