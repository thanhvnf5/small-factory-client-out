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
          lineNumber: 153,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
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
    } // componentDidCatch(error, errorInfo) {
    //   console.log(error);
    // }
    // componentDidUpdate() {
    // }

  }, {
    key: "render",

    /************************************************** render */
    value: function render() {
      var _this2 = this;

      console.log(new Date().toLocaleString() + " ............ EmployeeContainer render");
      var classes = this.props.classes;

      if (this.props.error && this.props.error.response.status == 401) {
        throw new Error("An error has occured in Buggy component!"); // this.props.onLogout();
        // Router.push("/sigin");
        // this.props.employeeErrorHandledDispatch();
        // this.setState({
        //   isDialogOpen: true,
        //   dialogContent: "Lỗi đăng nhập!",
        // });
      }

      return __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
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
          lineNumber: 183,
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
          lineNumber: 189,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
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
          lineNumber: 196,
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
          lineNumber: 203,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }
      }, this.props.employeeEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
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
          lineNumber: 216,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }
      }, this.props.employeeList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
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
          lineNumber: 238,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJFbXBsb3llZUNvbnRhaW5lciIsImlzRGlhbG9nT3BlbiIsImRpYWxvZ0NvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJlbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsImVtcGxveWVlQ3JlYXRlRGlzcGF0Y2giLCJlbXBsb3llZSIsIm5hbWUiLCJlbXBsb3llZUVkaXQiLCJlbXBsb3llZU5hbWUiLCJkZXNjcmlwdGlvbiIsImVtcGxveWVlRGVzY3JpcHRpb24iLCJpZCIsImVtcGxveWVlQWRkRGlzcGF0Y2giLCJlbXBsb3llZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJrZXkiLCJlbXBsb3llZUVkaXREaXNwYXRjaCIsImVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsImlzT0siLCJlbXBsb3llZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc2VzIiwiRXJyb3IiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImVtcGxveWVlTmFtZUZvY3VzSGFuZGxlciIsImVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsImVtcGxveWVlQ3JlYXRlSGFuZGxlciIsImVtcGxveWVlU2F2ZUhhbmRsZXIiLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZUVkaXRIYW5kbGVyIiwiZW1wbG95ZWVEZWxldGVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwib25Mb2dvdXQiLCJhdXRoQWN0aW9ucyIsImNvbm5lY3QiLCJ3aXRoRXJyb3JIYW5kbGVyIiwid2l0aFN0eWxlcyIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNKRCxZQUFNLEVBQUU7QUFESixLQUxtQjtBQVF6QkUsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLFdBQUssRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENB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QyxrQkFGb0IsQ0FBUCxDQUdiTSx3RkFBZ0IsQ0FBQ0MsNEVBQVUsQ0FBQy9FLE1BQUQsQ0FBVixDQUFtQmMsaUJBQW5CLENBQUQsRUFBd0NrRSx3REFBeEMsQ0FISCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGFsb2cuYjcxOTMwNThhNmQyOWJjYzE1NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBFbXBsb3llZUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW1wbG95ZWUvRW1wbG95ZWVFZGl0XCI7XHJcbmltcG9ydCBFbXBsb3llZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW1wbG95ZWUvRW1wbG95ZWVMaXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXJcIjtcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRW1wbG95ZWVDb250YWluZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQXV4IGZyb20gXCIuLi8uLi9ob2NzL0F1eGlsaWFyeS9BdXhpbGlhcnlcIjtcclxuaW1wb3J0IHdpdGhFcnJvckhhbmRsZXIgZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEVycm9ySGFuZGxlci93aXRoRXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgYXV0aEFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2VtcGxveWVlQWN0aW9uXCI7XHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcblxyXG5jbGFzcyBFbXBsb3llZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAvLyB9XHJcblxyXG4gIGVtcGxveWVlTmFtZUZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaChcclxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB2YWxpZGF0aW9uXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmVtcGxveWVlTmFtZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmVtcGxveWVlRGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5pZCkge1xyXG4gICAgICB0aGlzLnByb3BzLmVtcGxveWVlQWRkRGlzcGF0Y2goZW1wbG95ZWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZVVwZGF0ZURpc3BhdGNoKHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmlkLCBlbXBsb3llZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBudWxsLCBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsIH0pO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRWRpdEhhbmRsZXIgPSAoZXZlbnQsIGVtcGxveWVlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZW1wbG95ZWUuaWQgPSBlbXBsb3llZS5rZXk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRWRpdERpc3BhdGNoKGVtcGxveWVlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGVtcGxveWVlLCBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIiB9KTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlbGV0ZUhhbmRsZXIgPSAoZXZlbnQsIGVtcGxveWVlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgZGlhbG9nQ29udGVudDogZW1wbG95ZWUubmFtZSArIFwiIHPhur0gYuG7iyB4w7NhP1wiLFxyXG4gICAgICBzZWxlY3RlZEl0ZW06IGVtcGxveWVlLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXJyb3JDb25maXJtZWRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnZW5lcmF0ZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy90aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZURlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEVtcGxveWVlQ29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLmVycm9yICYmIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBoYXMgb2NjdXJlZCBpbiBCdWdneSBjb21wb25lbnQhXCIpO1xyXG4gICAgICAvLyB0aGlzLnByb3BzLm9uTG9nb3V0KCk7XHJcbiAgICAgIC8vIFJvdXRlci5wdXNoKFwiL3NpZ2luXCIpO1xyXG4gICAgICAvLyB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgVGjDtG5nIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZW1wbG95ZWVFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RW1wbG95ZWVFZGl0XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5lbXBsb3llZUVkaXR9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXI9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZU5hbWVDaGFuZ2VkPXt0aGlzLmVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVDcmVhdGVIYW5kbGVyPXt0aGlzLmVtcGxveWVlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlU2F2ZUhhbmRsZXI9e3RoaXMuZW1wbG95ZWVTYXZlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmVtcGxveWVlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEF1eD5cclxuICAgICAgICAgICAgICAgIDxFbXBsb3llZUxpc3RcclxuICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBlbXBsb3llZUVkaXQ9e3RoaXMuZW1wbG95ZWVFZGl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgZW1wbG95ZWVEZWxldGU9eyhldmVudCwgZW1wbG95ZWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlbGV0ZUhhbmRsZXIoZXZlbnQsIGVtcGxveWVlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQXV4PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZW1wbG95ZWVFZGl0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUVkaXQsXHJcbiAgICBlbXBsb3llZUxpc3Q6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlTGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5lbXBsb3llZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVtcGxveWVlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVOYW1lRm9jdXMoKSksXHJcbiAgICBlbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXMoKSksXHJcbiAgICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGVtcGxveWVlQ3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVDcmVhdGUoKSksXHJcbiAgICBlbXBsb3llZUFkZERpc3BhdGNoOiAoZW1wbG95ZWUpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVBZGQoZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlRWRpdERpc3BhdGNoOiAoZW1wbG95ZWUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVFZGl0KGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZVVwZGF0ZURpc3BhdGNoOiAoaWQsIGVtcGxveWVlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlVXBkYXRlKGlkLCBlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVEZWxldGVEaXNwYXRjaDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVsZXRlKGlkKSksXHJcbiAgICBlbXBsb3llZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUxpc3QoKSksXHJcbiAgICBlbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRXJyb3JIYW5kbGVkKCkpLFxyXG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEVycm9ySGFuZGxlcih3aXRoU3R5bGVzKHN0eWxlcykoRW1wbG95ZWVDb250YWluZXIpLCBheGlvcykpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9