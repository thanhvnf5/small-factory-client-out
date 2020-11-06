webpackHotUpdate_N_E("pages/catalog",{

/***/ "./src/containers/EmployeeContainer/EmployeeContainer.js":
/*!***************************************************************!*\
  !*** ./src/containers/EmployeeContainer/EmployeeContainer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Employee_EmployeeEdit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Employee/EmployeeEdit */ "./src/components/Employee/EmployeeEdit.js");
/* harmony import */ var _components_Employee_EmployeeList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Employee/EmployeeList */ "./src/components/Employee/EmployeeList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../hocs/Auxiliary/Auxiliary */ "./src/hocs/Auxiliary/Auxiliary.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/employeeAction */ "./src/store/actions/employeeAction.js");








var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\containers\\EmployeeContainer\\EmployeeContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















 // import classes from "./EmployeeContainer.module.css";





 //import { throws } from 'assert';

/************************************************** styles */

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: "100%"
    },
    grid: {
      height: "100%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  };
};
/************************************************** Constructor */


var EmployeeContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EmployeeContainer, _Component);

  var _super = _createSuper(EmployeeContainer);

  function EmployeeContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EmployeeContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isDialogOpen: false,
      dialogContent: null,
      selectedItem: null,
      selectedItemType: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeNameFocusHandler", function (event) {
      event.preventDefault();

      _this.props.employeeNameFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeNameChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.employeeNameChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeDescriptionFocusHandler", function () {
      _this.props.employeeDescriptionFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeDescriptionChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.employeeDescriptionChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeCreateHandler", function (event) {
      event.preventDefault();

      _this.props.employeeCreateDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeSaveHandler", function (event) {
      event.preventDefault();
      var employee = {
        name: _this.props.employeeEdit.employeeName.value,
        description: _this.props.employeeEdit.employeeDescription.value
      };

      if (!_this.props.employeeEdit.id) {
        _this.props.employeeAddDispatch(employee);
      } else {
        _this.props.employeeUpdateDispatch(_this.props.employeeEdit.id, employee);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeEditHandler", function (event, employee) {
      event.preventDefault();
      employee.id = employee.key;

      _this.props.employeeEditDispatch(employee);

      _this.setState({
        selectedItem: employee,
        selectedItemType: "edit"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "employeeDeleteHandler", function (event, employee) {
      event.preventDefault();

      _this.setState({
        isDialogOpen: true,
        dialogContent: employee.name + " sẽ bị xóa?",
        selectedItem: employee,
        selectedItemType: "delete"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "errorConfirmedHandler", function (event) {
      _this.props.employeeErrorHandledDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "generateError", function (error) {
      if (!error) {
        return null;
      }

      if (error.response.status == 401) {// this.props.onLogout();
        // Router.push("/sigin");
        //this.props.employeeErrorHandledDispatch();
      }

      return error.message;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.employeeDeleteDispatch(_this.state.selectedItem.key);

        _this.setState({
          isDialogOpen: false,
          selectedItem: null,
          selectedItemType: null
        });
      } else {
        _this.setState({
          isDialogOpen: false
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "PaperComponent", function (props) {
      return __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_18___default.a, {
        handle: "#draggable-dialog-title",
        cancel: '[class*="MuiDialogContent-root"]',
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 9
        }
      })));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EmployeeContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.employeeListDispatch();
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.log(error);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response.status == 401) {
        throw new Error("An error has occured in Buggy component!"); // this.props.onLogout();
        // Router.push("/sigin");
        // this.props.employeeErrorHandledDispatch();
        // this.setState({
        //   isDialogOpen: true,
        //   dialogContent: "Lỗi đăng nhập!",
        // });
      }
    }
  }, {
    key: "render",

    /************************************************** render */
    value: function render() {
      var _this2 = this;

      console.log(new Date().toLocaleString() + " ............ EmployeeContainer render");
      var classes = this.props.classes;
      return __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.isDialogOpen,
        onClose: function onClose(event) {
          return _this2.dialogClose(event);
        },
        PaperComponent: this.PaperComponent,
        "aria-labelledby": "draggable-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          cursor: "move"
        },
        id: "draggable-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        autoFocus: true,
        onClick: function onClick(event) {
          return _this2.dialogClose(event);
        },
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }
      }, "H\u1EE7y"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick(event) {
          return _this2.dialogClose(event, true);
        },
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }
      }, this.props.employeeEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 15
        }
      }) : __jsx(_components_Employee_EmployeeEdit__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.employeeEdit, {
        employeeNameFocusHandler: function employeeNameFocusHandler(event) {
          return _this2.employeeNameFocusHandler(event);
        },
        employeeNameChanged: this.employeeNameChangedHandler,
        employeeDescriptionFocusHandler: this.employeeDescriptionFocusHandler,
        employeeDescriptionChanged: this.employeeDescriptionChangedHandler,
        employeeCreateHandler: this.employeeCreateHandler,
        employeeSaveHandler: this.employeeSaveHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }
      }, this.props.employeeList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      }, __jsx(_components_Employee_EmployeeList__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.employeeList, {
        employeeEdit: this.employeeEditHandler,
        employeeDelete: function employeeDelete(event, employee) {
          return _this2.employeeDeleteHandler(event, employee);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 17
        }
      }))))));
    }
  }]);

  return EmployeeContainer;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    employeeEdit: state.employee.employeeEdit,
    employeeList: state.employee.employeeList,
    error: state.employee.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    employeeNameFocusDispatch: function employeeNameFocusDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeNameFocus"]());
    },
    employeeNameChangedDispatch: function employeeNameChangedDispatch(value, validation) {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeNameChanged"](value, validation));
    },
    employeeDescriptionFocusDispatch: function employeeDescriptionFocusDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeDescriptionFocus"]());
    },
    employeeDescriptionChangedDispatch: function employeeDescriptionChangedDispatch(value, validation) {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeDescriptionChanged"](value, validation));
    },
    employeeCreateDispatch: function employeeCreateDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeCreate"]());
    },
    employeeAddDispatch: function employeeAddDispatch(employee) {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeAdd"](employee));
    },
    employeeEditDispatch: function employeeEditDispatch(employee) {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeEdit"](employee));
    },
    employeeUpdateDispatch: function employeeUpdateDispatch(id, employee) {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeUpdate"](id, employee));
    },
    employeeDeleteDispatch: function employeeDeleteDispatch(id) {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeDelete"](id));
    },
    employeeListDispatch: function employeeListDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeList"]());
    },
    employeeErrorHandledDispatch: function employeeErrorHandledDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_28__["employeeErrorHandled"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_27__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(EmployeeContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJFbXBsb3llZUNvbnRhaW5lciIsImlzRGlhbG9nT3BlbiIsImRpYWxvZ0NvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJlbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsImVtcGxveWVlQ3JlYXRlRGlzcGF0Y2giLCJlbXBsb3llZSIsIm5hbWUiLCJlbXBsb3llZUVkaXQiLCJlbXBsb3llZU5hbWUiLCJkZXNjcmlwdGlvbiIsImVtcGxveWVlRGVzY3JpcHRpb24iLCJpZCIsImVtcGxveWVlQWRkRGlzcGF0Y2giLCJlbXBsb3llZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJrZXkiLCJlbXBsb3llZUVkaXREaXNwYXRjaCIsImVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsImlzT0siLCJlbXBsb3llZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImVtcGxveWVlTmFtZUZvY3VzSGFuZGxlciIsImVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsImVtcGxveWVlQ3JlYXRlSGFuZGxlciIsImVtcGxveWVlU2F2ZUhhbmRsZXIiLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZUVkaXRIYW5kbGVyIiwiZW1wbG95ZWVEZWxldGVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwib25Mb2dvdXQiLCJhdXRoQWN0aW9ucyIsImNvbm5lY3QiLCJ3aXRoRXJyb3JIYW5kbGVyIiwid2l0aFN0eWxlcyIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNKRCxZQUFNLEVBQUU7QUFESixLQUxtQjtBQVF6QkUsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLFdBQUssRUFBRVQsS0FBSyxD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O0FBQUE7QUFsQkwsR0FBUDtBQW9CRCxDQXJCRDs7QUF1QmVDLDJIQUFPLENBQ3BCTixlQURvQixFQUVwQkMsa0JBRm9CLENBQVAsQ0FHYk0sd0ZBQWdCLENBQUNDLDRFQUFVLENBQUNoRixNQUFELENBQVYsQ0FBbUJjLGlCQUFuQixDQUFELEVBQXdDbUUsd0RBQXhDLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLmI1Nzg0NjkxNDBkM2UyMzhhYWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlRWRpdFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0VtcGxveWVlQ29udGFpbmVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRW1wbG95ZWVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvciAmJiB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5lbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZU5hbWVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVOYW1lQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTmFtZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoKFxyXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIHZhbGlkYXRpb25cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVDcmVhdGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUNyZWF0ZURpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVTYXZlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbXBsb3llZSA9IHtcclxuICAgICAgbmFtZTogdGhpcy5wcm9wcy5lbXBsb3llZUVkaXQuZW1wbG95ZWVOYW1lLnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5lbXBsb3llZUVkaXQuZW1wbG95ZWVEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVBZGREaXNwYXRjaChlbXBsb3llZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLmVtcGxveWVlVXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5lbXBsb3llZUVkaXQuaWQsIGVtcGxveWVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IG51bGwsIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwgfSk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVFZGl0SGFuZGxlciA9IChldmVudCwgZW1wbG95ZWUpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlbXBsb3llZS5pZCA9IGVtcGxveWVlLmtleTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0RGlzcGF0Y2goZW1wbG95ZWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogZW1wbG95ZWUsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRGVsZXRlSGFuZGxlciA9IChldmVudCwgZW1wbG95ZWUpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBlbXBsb3llZS5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogZW1wbG95ZWUsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBlcnJvckNvbmZpcm1lZEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGdlbmVyYXRlRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLm9uTG9nb3V0KCk7XHJcbiAgICAgIC8vIFJvdXRlci5wdXNoKFwiL3NpZ2luXCIpO1xyXG4gICAgICAvL3RoaXMucHJvcHMuZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XHJcbiAgfTtcclxuXHJcbiAgZGlhbG9nQ2xvc2UgPSAoZXZlbnQsIGlzT0spID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNPSykge1xyXG4gICAgICB0aGlzLnByb3BzLmVtcGxveWVlRGVsZXRlRGlzcGF0Y2godGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ua2V5KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQYXBlckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgIGhhbmRsZT1cIiNkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBjYW5jZWw9eydbY2xhc3MqPVwiTXVpRGlhbG9nQ29udGVudC1yb290XCJdJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxQYXBlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gRW1wbG95ZWVDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBUaMO0bmcgYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lbXBsb3llZUVkaXQud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFbXBsb3llZUVkaXRcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmVtcGxveWVlRWRpdH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZUZvY3VzSGFuZGxlcj17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlTmFtZUZvY3VzSGFuZGxlcihldmVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZUNoYW5nZWQ9e3RoaXMuZW1wbG95ZWVOYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZUNyZWF0ZUhhbmRsZXI9e3RoaXMuZW1wbG95ZWVDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVTYXZlSGFuZGxlcj17dGhpcy5lbXBsb3llZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8QXV4PlxyXG4gICAgICAgICAgICAgICAgPEVtcGxveWVlTGlzdFxyXG4gICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRWRpdD17dGhpcy5lbXBsb3llZUVkaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICBlbXBsb3llZURlbGV0ZT17KGV2ZW50LCBlbXBsb3llZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVsZXRlSGFuZGxlcihldmVudCwgZW1wbG95ZWUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9BdXg+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBlbXBsb3llZUVkaXQ6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlRWRpdCxcclxuICAgIGVtcGxveWVlTGlzdDogc3RhdGUuZW1wbG95ZWUuZW1wbG95ZWVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZU5hbWVGb2N1cygpKSxcclxuICAgIGVtcGxveWVlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZW1wbG95ZWVDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUNyZWF0ZSgpKSxcclxuICAgIGVtcGxveWVlQWRkRGlzcGF0Y2g6IChlbXBsb3llZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUFkZChlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVFZGl0RGlzcGF0Y2g6IChlbXBsb3llZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUVkaXQoZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlVXBkYXRlRGlzcGF0Y2g6IChpZCwgZW1wbG95ZWUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVVcGRhdGUoaWQsIGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZWxldGUoaWQpKSxcclxuICAgIGVtcGxveWVlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTGlzdCgpKSxcclxuICAgIGVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVFcnJvckhhbmRsZWQoKSksXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShFbXBsb3llZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=