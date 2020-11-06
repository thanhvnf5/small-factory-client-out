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
    } // componentDidCatch(error, errorInfo) {
    //   console.log(error);
    // }

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response.status == 401) {
        throw new Error("An error has occured in Buggy component!"); // this.props.onLogout();
        // Router.push("/sigin");

        this.props.employeeErrorHandledDispatch(); // this.setState({
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
          lineNumber: 181,
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
          lineNumber: 182,
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
          lineNumber: 188,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
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
          lineNumber: 195,
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
          lineNumber: 202,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }
      }, this.props.employeeEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
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
          lineNumber: 215,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }
      }, this.props.employeeList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
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
          lineNumber: 237,
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

/***/ }),

/***/ "./src/hocs/ErrorBoundary/ErrorBoundary.js":
/*!*************************************************!*\
  !*** ./src/hocs/ErrorBoundary/ErrorBoundary.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Auxiliary/Auxiliary */ "./src/hocs/Auxiliary/Auxiliary.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");







var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\hocs\\ErrorBoundary\\ErrorBoundary.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      error: null,
      errorInfo: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "errorConfirmedHandler", function (event) {
      _this.setState({
        error: null,
        errorInfo: null
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return __jsx(_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 9
          }
        }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          show: this.state.error,
          modalClosed: this.errorConfirmedHandler,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }
        }, this.state.error.message ? this.state.error.message : "<<Error>>"), this.props.children);
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob2NzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImhlaWdodCIsImdyaWQiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkVtcGxveWVlQ29udGFpbmVyIiwiaXNEaWFsb2dPcGVuIiwiZGlhbG9nQ29udGVudCIsInNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbVR5cGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJlbXBsb3llZU5hbWVGb2N1c0Rpc3BhdGNoIiwidmFsaWRhdGlvbiIsImVtcGxveWVlTmFtZUNoYW5nZWREaXNwYXRjaCIsInRhcmdldCIsInZhbHVlIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwiZW1wbG95ZWVDcmVhdGVEaXNwYXRjaCIsImVtcGxveWVlIiwibmFtZSIsImVtcGxveWVlRWRpdCIsImVtcGxveWVlTmFtZSIsImRlc2NyaXB0aW9uIiwiZW1wbG95ZWVEZXNjcmlwdGlvbiIsImlkIiwiZW1wbG95ZWVBZGREaXNwYXRjaCIsImVtcGxveWVlVXBkYXRlRGlzcGF0Y2giLCJzZXRTdGF0ZSIsImtleSIsImVtcGxveWVlRWRpdERpc3BhdGNoIiwiZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwiaXNPSyIsImVtcGxveWVlRGVsZXRlRGlzcGF0Y2giLCJzdGF0ZSIsImVtcGxveWVlTGlzdERpc3BhdGNoIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImRpYWxvZ0Nsb3NlIiwiUGFwZXJDb21wb25lbnQiLCJjdXJzb3IiLCJ3YWl0aW5nIiwiZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyIiwiZW1wbG95ZWVOYW1lQ2hhbmdlZEhhbmRsZXIiLCJlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwiZW1wbG95ZWVDcmVhdGVIYW5kbGVyIiwiZW1wbG95ZWVTYXZlSGFuZGxlciIsImVtcGxveWVlTGlzdCIsImVtcGxveWVlRWRpdEhhbmRsZXIiLCJlbXBsb3llZURlbGV0ZUhhbmRsZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJvbkxvZ291dCIsImF1dGhBY3Rpb25zIiwiY29ubmVjdCIsIndpdGhFcnJvckhhbmRsZXIiLCJ3aXRoU3R5bGVzIiwiYXhpb3MiLCJFcnJvckJvdW5kYXJ5IiwiZXJyb3JJbmZvIiwiZXJyb3JDb25maXJtZWRIYW5kbGVyIiwiY2hpbGRyZW4iLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFO0FB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QUwsQ0FBV04sS0FBWCxDQUFpQkcsT0FBakIsR0FBMkIsS0FBS0csS0FBTCxDQUFXTixLQUFYLENBQWlCRyxPQUE1QyxHQUFzRCxXQUp6RCxDQURGLEVBT0csS0FBS3pCLEtBQUwsQ0FBVytELFFBUGQsQ0FERjtBQVdEOztBQUVELGFBQU8sS0FBSy9ELEtBQUwsQ0FBVytELFFBQWxCO0FBQ0Q7Ozs7RUFqQ3lCQyw0Q0FBSyxDQUFDZixTOztBQW9DbkJXLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGFsb2cuNjEwZGQzYWNlYjk4NzRhN2FiZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBFbXBsb3llZUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW1wbG95ZWUvRW1wbG95ZWVFZGl0XCI7XHJcbmltcG9ydCBFbXBsb3llZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW1wbG95ZWUvRW1wbG95ZWVMaXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXJcIjtcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRW1wbG95ZWVDb250YWluZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQXV4IGZyb20gXCIuLi8uLi9ob2NzL0F1eGlsaWFyeS9BdXhpbGlhcnlcIjtcclxuaW1wb3J0IHdpdGhFcnJvckhhbmRsZXIgZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEVycm9ySGFuZGxlci93aXRoRXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgYXV0aEFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2VtcGxveWVlQWN0aW9uXCI7XHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcblxyXG5jbGFzcyBFbXBsb3llZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmVycm9yICYmIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBoYXMgb2NjdXJlZCBpbiBCdWdneSBjb21wb25lbnQhXCIpO1xyXG4gICAgICAvLyB0aGlzLnByb3BzLm9uTG9nb3V0KCk7XHJcbiAgICAgIC8vIFJvdXRlci5wdXNoKFwiL3NpZ2luXCIpO1xyXG4gICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtcGxveWVlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZU5hbWUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZURlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5lbXBsb3llZUVkaXQuaWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZUFkZERpc3BhdGNoKGVtcGxveWVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVVcGRhdGVEaXNwYXRjaCh0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5pZCwgZW1wbG95ZWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogbnVsbCwgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUVkaXRIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGVtcGxveWVlLmlkID0gZW1wbG95ZWUua2V5O1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUVkaXREaXNwYXRjaChlbXBsb3llZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSwgc2VsZWN0ZWRJdGVtVHlwZTogXCJlZGl0XCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZWxldGVIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IGVtcGxveWVlLm5hbWUgKyBcIiBz4bq9IGLhu4sgeMOzYT9cIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGVycm9yQ29uZmlybWVkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2VuZXJhdGVFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgaWYgKCFlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgIC8vIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vdGhpcy5wcm9wcy5lbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBFbXBsb3llZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBUaMO0bmcgYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lbXBsb3llZUVkaXQud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFbXBsb3llZUVkaXRcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmVtcGxveWVlRWRpdH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZUZvY3VzSGFuZGxlcj17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlTmFtZUZvY3VzSGFuZGxlcihldmVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZUNoYW5nZWQ9e3RoaXMuZW1wbG95ZWVOYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZUNyZWF0ZUhhbmRsZXI9e3RoaXMuZW1wbG95ZWVDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVTYXZlSGFuZGxlcj17dGhpcy5lbXBsb3llZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8QXV4PlxyXG4gICAgICAgICAgICAgICAgPEVtcGxveWVlTGlzdFxyXG4gICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRWRpdD17dGhpcy5lbXBsb3llZUVkaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICBlbXBsb3llZURlbGV0ZT17KGV2ZW50LCBlbXBsb3llZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVsZXRlSGFuZGxlcihldmVudCwgZW1wbG95ZWUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9BdXg+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBlbXBsb3llZUVkaXQ6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlRWRpdCxcclxuICAgIGVtcGxveWVlTGlzdDogc3RhdGUuZW1wbG95ZWUuZW1wbG95ZWVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZU5hbWVGb2N1cygpKSxcclxuICAgIGVtcGxveWVlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZW1wbG95ZWVDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUNyZWF0ZSgpKSxcclxuICAgIGVtcGxveWVlQWRkRGlzcGF0Y2g6IChlbXBsb3llZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUFkZChlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVFZGl0RGlzcGF0Y2g6IChlbXBsb3llZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUVkaXQoZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlVXBkYXRlRGlzcGF0Y2g6IChpZCwgZW1wbG95ZWUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVVcGRhdGUoaWQsIGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZWxldGUoaWQpKSxcclxuICAgIGVtcGxveWVlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTGlzdCgpKSxcclxuICAgIGVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVFcnJvckhhbmRsZWQoKSksXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShFbXBsb3llZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiIsImltcG9ydCBBdXggZnJvbSBcIi4uL0F1eGlsaWFyeS9BdXhpbGlhcnlcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcblxyXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHsgZXJyb3I6IG51bGwsIGVycm9ySW5mbzogbnVsbCB9O1xyXG5cclxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICBlcnJvckluZm86IGVycm9ySW5mbyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JDb25maXJtZWRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgIGVycm9ySW5mbzogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1eD5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLmVycm9yfVxyXG4gICAgICAgICAgICBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2UgPyB0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2UgOiBcIjw8RXJyb3I+PlwifVxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQXV4PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==