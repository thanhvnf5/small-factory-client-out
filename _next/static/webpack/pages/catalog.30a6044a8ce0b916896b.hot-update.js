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
          lineNumber: 165,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
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
        setTimeout(function () {
          throw new Error("An error has occured in Buggy component!");
        }, 0); // this.props.onLogout();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJFbXBsb3llZUNvbnRhaW5lciIsImlzRGlhbG9nT3BlbiIsImRpYWxvZ0NvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJlbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsImVtcGxveWVlQ3JlYXRlRGlzcGF0Y2giLCJlbXBsb3llZSIsIm5hbWUiLCJlbXBsb3llZUVkaXQiLCJlbXBsb3llZU5hbWUiLCJkZXNjcmlwdGlvbiIsImVtcGxveWVlRGVzY3JpcHRpb24iLCJpZCIsImVtcGxveWVlQWRkRGlzcGF0Y2giLCJlbXBsb3llZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJrZXkiLCJlbXBsb3llZUVkaXREaXNwYXRjaCIsImVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsImlzT0siLCJlbXBsb3llZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsInNldFRpbWVvdXQiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc2VzIiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIiLCJlbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlciIsImVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIiLCJlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIiLCJlbXBsb3llZUNyZWF0ZUhhbmRsZXIiLCJlbXBsb3llZVNhdmVIYW5kbGVyIiwiZW1wbG95ZWVMaXN0IiwiZW1wbG95ZWVFZGl0SGFuZGxlciIsImVtcGxveWVlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsIm9uTG9nb3V0IiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFO0FBREosS0FMbUI7QUFRekJFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxlQUFTLEVBQUUsUUFGTjtBQUdMQyxXQUFLLEVBQUVULEtBQUss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QUFkO0FBQUE7QUFsQkwsR0FBUDtBQW9CRCxDQXJCRDs7QUF1QmVDLDJIQUFPLENBQ3BCTixlQURvQixFQUVwQkMsa0JBRm9CLENBQVAsQ0FHYk0sd0ZBQWdCLENBQUNDLDRFQUFVLENBQUNoRixNQUFELENBQVYsQ0FBbUJjLGlCQUFuQixDQUFELEVBQXdDbUUsd0RBQXhDLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLjMwYTYwNDRhOGNlMGI5MTY4OTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlRWRpdFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0VtcGxveWVlQ29udGFpbmVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRW1wbG95ZWVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgLy8gfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvciAmJiB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICAgIC8vIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaCgpO1xyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLy8gICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIC8vICAgZGlhbG9nQ29udGVudDogXCJM4buXaSDEkcSDbmcgbmjhuq1wIVwiLFxyXG4gICAgICAvLyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtcGxveWVlTmFtZUZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaChcclxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB2YWxpZGF0aW9uXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmVtcGxveWVlTmFtZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmVtcGxveWVlRGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5pZCkge1xyXG4gICAgICB0aGlzLnByb3BzLmVtcGxveWVlQWRkRGlzcGF0Y2goZW1wbG95ZWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZVVwZGF0ZURpc3BhdGNoKHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmlkLCBlbXBsb3llZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBudWxsLCBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsIH0pO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRWRpdEhhbmRsZXIgPSAoZXZlbnQsIGVtcGxveWVlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZW1wbG95ZWUuaWQgPSBlbXBsb3llZS5rZXk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRWRpdERpc3BhdGNoKGVtcGxveWVlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGVtcGxveWVlLCBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIiB9KTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlbGV0ZUhhbmRsZXIgPSAoZXZlbnQsIGVtcGxveWVlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgZGlhbG9nQ29udGVudDogZW1wbG95ZWUubmFtZSArIFwiIHPhur0gYuG7iyB4w7NhP1wiLFxyXG4gICAgICBzZWxlY3RlZEl0ZW06IGVtcGxveWVlLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXJyb3JDb25maXJtZWRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnZW5lcmF0ZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy90aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZURlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEVtcGxveWVlQ29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgVGjDtG5nIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZW1wbG95ZWVFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RW1wbG95ZWVFZGl0XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5lbXBsb3llZUVkaXR9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXI9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZU5hbWVDaGFuZ2VkPXt0aGlzLmVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVDcmVhdGVIYW5kbGVyPXt0aGlzLmVtcGxveWVlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlU2F2ZUhhbmRsZXI9e3RoaXMuZW1wbG95ZWVTYXZlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmVtcGxveWVlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEF1eD5cclxuICAgICAgICAgICAgICAgIDxFbXBsb3llZUxpc3RcclxuICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBlbXBsb3llZUVkaXQ9e3RoaXMuZW1wbG95ZWVFZGl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgZW1wbG95ZWVEZWxldGU9eyhldmVudCwgZW1wbG95ZWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlbGV0ZUhhbmRsZXIoZXZlbnQsIGVtcGxveWVlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQXV4PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZW1wbG95ZWVFZGl0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUVkaXQsXHJcbiAgICBlbXBsb3llZUxpc3Q6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlTGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5lbXBsb3llZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVtcGxveWVlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVOYW1lRm9jdXMoKSksXHJcbiAgICBlbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXMoKSksXHJcbiAgICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGVtcGxveWVlQ3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVDcmVhdGUoKSksXHJcbiAgICBlbXBsb3llZUFkZERpc3BhdGNoOiAoZW1wbG95ZWUpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVBZGQoZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlRWRpdERpc3BhdGNoOiAoZW1wbG95ZWUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVFZGl0KGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZVVwZGF0ZURpc3BhdGNoOiAoaWQsIGVtcGxveWVlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlVXBkYXRlKGlkLCBlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVEZWxldGVEaXNwYXRjaDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVsZXRlKGlkKSksXHJcbiAgICBlbXBsb3llZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUxpc3QoKSksXHJcbiAgICBlbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRXJyb3JIYW5kbGVkKCkpLFxyXG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEVycm9ySGFuZGxlcih3aXRoU3R5bGVzKHN0eWxlcykoRW1wbG95ZWVDb250YWluZXIpLCBheGlvcykpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9