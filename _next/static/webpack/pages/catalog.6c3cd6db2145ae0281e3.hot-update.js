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
      selectedItemType: null,
      error: null
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
          lineNumber: 164,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
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

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response.status == 401) {
        this.props.employeeErrorHandledDispatch();
        throw new Error("An error has occured in Buggy component!"); // this.props.onLogout();
        // Router.push("/sigin");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJFbXBsb3llZUNvbnRhaW5lciIsImlzRGlhbG9nT3BlbiIsImRpYWxvZ0NvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJlbXBsb3llZU5hbWVGb2N1c0Rpc3BhdGNoIiwidmFsaWRhdGlvbiIsImVtcGxveWVlTmFtZUNoYW5nZWREaXNwYXRjaCIsInRhcmdldCIsInZhbHVlIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwiZW1wbG95ZWVDcmVhdGVEaXNwYXRjaCIsImVtcGxveWVlIiwibmFtZSIsImVtcGxveWVlRWRpdCIsImVtcGxveWVlTmFtZSIsImRlc2NyaXB0aW9uIiwiZW1wbG95ZWVEZXNjcmlwdGlvbiIsImlkIiwiZW1wbG95ZWVBZGREaXNwYXRjaCIsImVtcGxveWVlVXBkYXRlRGlzcGF0Y2giLCJzZXRTdGF0ZSIsImtleSIsImVtcGxveWVlRWRpdERpc3BhdGNoIiwiZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsImlzT0siLCJlbXBsb3llZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImVtcGxveWVlTmFtZUZvY3VzSGFuZGxlciIsImVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsImVtcGxveWVlQ3JlYXRlSGFuZGxlciIsImVtcGxveWVlU2F2ZUhhbmRsZXIiLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZUVkaXRIYW5kbGVyIiwiZW1wbG95ZWVEZWxldGVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwib25Mb2dvdXQiLCJhdXRoQWN0aW9ucyIsImNvbm5lY3QiLCJ3aXRoRXJyb3JIYW5kbGVyIiwid2l0aFN0eWxlcyIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNKRCxZQUFNLEVBQUU7QUFESixLQUxtQjtBQVF6QkUsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLFdBQUssRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENB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QkwsR0FBUDtBQW9CRCxDQXJCRDs7QUF1QmVDLDJIQUFPLENBQ3BCTixlQURvQixFQUVwQkMsa0JBRm9CLENBQVAsQ0FHYk0sd0ZBQWdCLENBQUNDLDRFQUFVLENBQUMvRSxNQUFELENBQVYsQ0FBbUJjLGlCQUFuQixDQUFELEVBQXdDa0Usd0RBQXhDLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLjZjM2NkNmRiMjE0NWFlMDI4MWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlRWRpdFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0VtcGxveWVlQ29udGFpbmVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRW1wbG95ZWVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmVycm9yICYmIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtcGxveWVlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZU5hbWUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZURlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5lbXBsb3llZUVkaXQuaWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZUFkZERpc3BhdGNoKGVtcGxveWVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVVcGRhdGVEaXNwYXRjaCh0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5pZCwgZW1wbG95ZWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogbnVsbCwgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUVkaXRIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGVtcGxveWVlLmlkID0gZW1wbG95ZWUua2V5O1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUVkaXREaXNwYXRjaChlbXBsb3llZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSwgc2VsZWN0ZWRJdGVtVHlwZTogXCJlZGl0XCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZWxldGVIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IGVtcGxveWVlLm5hbWUgKyBcIiBz4bq9IGLhu4sgeMOzYT9cIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGVycm9yQ29uZmlybWVkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2VuZXJhdGVFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgaWYgKCFlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgIC8vIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vdGhpcy5wcm9wcy5lbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBFbXBsb3llZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBUaMO0bmcgYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lbXBsb3llZUVkaXQud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFbXBsb3llZUVkaXRcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmVtcGxveWVlRWRpdH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZUZvY3VzSGFuZGxlcj17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlTmFtZUZvY3VzSGFuZGxlcihldmVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZUNoYW5nZWQ9e3RoaXMuZW1wbG95ZWVOYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZUNyZWF0ZUhhbmRsZXI9e3RoaXMuZW1wbG95ZWVDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVTYXZlSGFuZGxlcj17dGhpcy5lbXBsb3llZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8QXV4PlxyXG4gICAgICAgICAgICAgICAgPEVtcGxveWVlTGlzdFxyXG4gICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRWRpdD17dGhpcy5lbXBsb3llZUVkaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICBlbXBsb3llZURlbGV0ZT17KGV2ZW50LCBlbXBsb3llZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVsZXRlSGFuZGxlcihldmVudCwgZW1wbG95ZWUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9BdXg+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBlbXBsb3llZUVkaXQ6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlRWRpdCxcclxuICAgIGVtcGxveWVlTGlzdDogc3RhdGUuZW1wbG95ZWUuZW1wbG95ZWVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZU5hbWVGb2N1cygpKSxcclxuICAgIGVtcGxveWVlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZW1wbG95ZWVDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUNyZWF0ZSgpKSxcclxuICAgIGVtcGxveWVlQWRkRGlzcGF0Y2g6IChlbXBsb3llZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUFkZChlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVFZGl0RGlzcGF0Y2g6IChlbXBsb3llZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUVkaXQoZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlVXBkYXRlRGlzcGF0Y2g6IChpZCwgZW1wbG95ZWUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVVcGRhdGUoaWQsIGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZWxldGUoaWQpKSxcclxuICAgIGVtcGxveWVlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTGlzdCgpKSxcclxuICAgIGVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVFcnJvckhhbmRsZWQoKSksXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShFbXBsb3llZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=