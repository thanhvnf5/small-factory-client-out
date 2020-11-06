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
        throw new Error(); // this.props.onLogout();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJFbXBsb3llZUNvbnRhaW5lciIsImlzRGlhbG9nT3BlbiIsImRpYWxvZ0NvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJlbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsImVtcGxveWVlQ3JlYXRlRGlzcGF0Y2giLCJlbXBsb3llZSIsIm5hbWUiLCJlbXBsb3llZUVkaXQiLCJlbXBsb3llZU5hbWUiLCJkZXNjcmlwdGlvbiIsImVtcGxveWVlRGVzY3JpcHRpb24iLCJpZCIsImVtcGxveWVlQWRkRGlzcGF0Y2giLCJlbXBsb3llZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJrZXkiLCJlbXBsb3llZUVkaXREaXNwYXRjaCIsImVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsImlzT0siLCJlbXBsb3llZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImVtcGxveWVlTmFtZUZvY3VzSGFuZGxlciIsImVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsImVtcGxveWVlQ3JlYXRlSGFuZGxlciIsImVtcGxveWVlU2F2ZUhhbmRsZXIiLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZUVkaXRIYW5kbGVyIiwiZW1wbG95ZWVEZWxldGVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwib25Mb2dvdXQiLCJhdXRoQWN0aW9ucyIsImNvbm5lY3QiLCJ3aXRoRXJyb3JIYW5kbGVyIiwid2l0aFN0eWxlcyIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNKRCxZQUFNLEVBQUU7QUFESixLQUxtQjtBQVF6QkUsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLFdBQUssRUFBRVQsS0FBSyxD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LEdBQVA7QUFvQkQsQ0FyQkQ7O0FBdUJlQywySEFBTyxDQUNwQk4sZUFEb0IsRUFFcEJDLGtCQUZvQixDQUFQLENBR2JNLHdGQUFnQixDQUFDQyw0RUFBVSxDQUFDaEYsTUFBRCxDQUFWLENBQW1CYyxpQkFBbkIsQ0FBRCxFQUF3Q21FLHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0YWxvZy4yM2U5ZWE3OTM1MDRiM2ZjZDQ3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEVtcGxveWVlRWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FbXBsb3llZS9FbXBsb3llZUVkaXRcIjtcclxuaW1wb3J0IEVtcGxveWVlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FbXBsb3llZS9FbXBsb3llZUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9FbXBsb3llZUNvbnRhaW5lci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBdXggZnJvbSBcIi4uLy4uL2hvY3MvQXV4aWxpYXJ5L0F1eGlsaWFyeVwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZW1wbG95ZWVBY3Rpb25cIjtcclxuLy9pbXBvcnQgeyB0aHJvd3MgfSBmcm9tICdhc3NlcnQnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIEVtcGxveWVlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3IgJiYgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAvLyB0aGlzLnByb3BzLm9uTG9nb3V0KCk7XHJcbiAgICAgIC8vIFJvdXRlci5wdXNoKFwiL3NpZ2luXCIpO1xyXG4gICAgICAvLyB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtcGxveWVlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZU5hbWUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZURlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5lbXBsb3llZUVkaXQuaWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZUFkZERpc3BhdGNoKGVtcGxveWVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVVcGRhdGVEaXNwYXRjaCh0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5pZCwgZW1wbG95ZWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogbnVsbCwgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUVkaXRIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGVtcGxveWVlLmlkID0gZW1wbG95ZWUua2V5O1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUVkaXREaXNwYXRjaChlbXBsb3llZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSwgc2VsZWN0ZWRJdGVtVHlwZTogXCJlZGl0XCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZWxldGVIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IGVtcGxveWVlLm5hbWUgKyBcIiBz4bq9IGLhu4sgeMOzYT9cIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGVycm9yQ29uZmlybWVkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2VuZXJhdGVFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgaWYgKCFlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgIC8vIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vdGhpcy5wcm9wcy5lbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBFbXBsb3llZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNEaWFsb2dPcGVufVxyXG4gICAgICAgICAgb25DbG9zZT17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXt0aGlzLlBhcGVyQ29tcG9uZW50fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpYWxvZ1RpdGxlIHN0eWxlPXt7IGN1cnNvcjogXCJtb3ZlXCIgfX0gaWQ9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIFRow7RuZyBiw6FvXHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD57dGhpcy5zdGF0ZS5kaWFsb2dDb250ZW50fTwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEjhu6d5XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50LCB0cnVlKX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgxJDhu5NuZyDDvVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmVtcGxveWVlRWRpdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEVtcGxveWVlRWRpdFxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuZW1wbG95ZWVFZGl0fVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lQ2hhbmdlZD17dGhpcy5lbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlQ3JlYXRlSGFuZGxlcj17dGhpcy5lbXBsb3llZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZVNhdmVIYW5kbGVyPXt0aGlzLmVtcGxveWVlU2F2ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lbXBsb3llZUxpc3Qud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxBdXg+XHJcbiAgICAgICAgICAgICAgICA8RW1wbG95ZWVMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmVtcGxveWVlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgZW1wbG95ZWVFZGl0PXt0aGlzLmVtcGxveWVlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRGVsZXRlPXsoZXZlbnQsIGVtcGxveWVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVEZWxldGVIYW5kbGVyKGV2ZW50LCBlbXBsb3llZSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0F1eD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVtcGxveWVlRWRpdDogc3RhdGUuZW1wbG95ZWUuZW1wbG95ZWVFZGl0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUuZW1wbG95ZWUuZXJyb3IsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBlbXBsb3llZU5hbWVGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTmFtZUZvY3VzKCkpLFxyXG4gICAgZW1wbG95ZWVOYW1lQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVOYW1lQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzKCkpLFxyXG4gICAgZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBlbXBsb3llZUNyZWF0ZURpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlQ3JlYXRlKCkpLFxyXG4gICAgZW1wbG95ZWVBZGREaXNwYXRjaDogKGVtcGxveWVlKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlQWRkKGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZUVkaXREaXNwYXRjaDogKGVtcGxveWVlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRWRpdChlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVVcGRhdGVEaXNwYXRjaDogKGlkLCBlbXBsb3llZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZVVwZGF0ZShpZCwgZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlRGVsZXRlRGlzcGF0Y2g6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlbGV0ZShpZCkpLFxyXG4gICAgZW1wbG95ZWVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVMaXN0KCkpLFxyXG4gICAgZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUVycm9ySGFuZGxlZCgpKSxcclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKEVtcGxveWVlQ29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==