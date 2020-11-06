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
          lineNumber: 162,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
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
    value: function componentDidUpdate() {// if (this.props.error && this.props.error.response.status == 401) {
      //   // this.props.onLogout();
      //   // Router.push("/sigin");
      //   // this.props.employeeErrorHandledDispatch();
      //   this.setState({
      //     isDialogOpen: true,
      //     dialogContent: "Lỗi đăng nhập!",
      //   });
      // }
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
          lineNumber: 179,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.isDialogOpen,
        onClose: function onClose(event) {
          return _this2.dialogClose(event);
        },
        PaperComponent: function PaperComponent(event) {
          return _this2.PaperComponent();
        },
        "aria-labelledby": "draggable-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
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
          lineNumber: 186,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
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
          lineNumber: 193,
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
          lineNumber: 200,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }
      }, this.props.employeeEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
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
          lineNumber: 213,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }
      }, this.props.employeeList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
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
          lineNumber: 235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJFbXBsb3llZUNvbnRhaW5lciIsImlzRGlhbG9nT3BlbiIsImRpYWxvZ0NvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJlbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsImVtcGxveWVlQ3JlYXRlRGlzcGF0Y2giLCJlbXBsb3llZSIsIm5hbWUiLCJlbXBsb3llZUVkaXQiLCJlbXBsb3llZU5hbWUiLCJkZXNjcmlwdGlvbiIsImVtcGxveWVlRGVzY3JpcHRpb24iLCJpZCIsImVtcGxveWVlQWRkRGlzcGF0Y2giLCJlbXBsb3llZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJrZXkiLCJlbXBsb3llZUVkaXREaXNwYXRjaCIsImVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsImlzT0siLCJlbXBsb3llZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc2VzIiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIiLCJlbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlciIsImVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIiLCJlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIiLCJlbXBsb3llZUNyZWF0ZUhhbmRsZXIiLCJlbXBsb3llZVNhdmVIYW5kbGVyIiwiZW1wbG95ZWVMaXN0IiwiZW1wbG95ZWVFZGl0SGFuZGxlciIsImVtcGxveWVlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsIm9uTG9nb3V0IiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFO0FBREosS0FMbUI7QUFRekJFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxlQUFTLEVBQUUsUUFGTjtBQUdMQyxXQUFLLEVBQUVULEtBQUssQ0FBQ1UsT0FB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QUFWLENBQW1CYyxpQkFBbkIsQ0FBRCxFQUF3Q2tFLHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0YWxvZy44M2QxYTA0NjdjNzA3YmI3NDIyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEVtcGxveWVlRWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FbXBsb3llZS9FbXBsb3llZUVkaXRcIjtcclxuaW1wb3J0IEVtcGxveWVlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FbXBsb3llZS9FbXBsb3llZUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9FbXBsb3llZUNvbnRhaW5lci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBdXggZnJvbSBcIi4uLy4uL2hvY3MvQXV4aWxpYXJ5L0F1eGlsaWFyeVwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZW1wbG95ZWVBY3Rpb25cIjtcclxuLy9pbXBvcnQgeyB0aHJvd3MgfSBmcm9tICdhc3NlcnQnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIEVtcGxveWVlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgLy8gaWYgKHRoaXMucHJvcHMuZXJyb3IgJiYgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAvLyAgIC8vIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgIC8vICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAvLyAgIC8vIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaCgpO1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAvLyAgICAgZGlhbG9nQ29udGVudDogXCJM4buXaSDEkcSDbmcgbmjhuq1wIVwiLFxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGVtcGxveWVlTmFtZUZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlTmFtZUNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZU5hbWVDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaChcclxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB2YWxpZGF0aW9uXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmVtcGxveWVlTmFtZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmVtcGxveWVlRGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5pZCkge1xyXG4gICAgICB0aGlzLnByb3BzLmVtcGxveWVlQWRkRGlzcGF0Y2goZW1wbG95ZWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZVVwZGF0ZURpc3BhdGNoKHRoaXMucHJvcHMuZW1wbG95ZWVFZGl0LmlkLCBlbXBsb3llZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBudWxsLCBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsIH0pO1xyXG4gIH07XHJcblxyXG4gIGVtcGxveWVlRWRpdEhhbmRsZXIgPSAoZXZlbnQsIGVtcGxveWVlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZW1wbG95ZWUuaWQgPSBlbXBsb3llZS5rZXk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRWRpdERpc3BhdGNoKGVtcGxveWVlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGVtcGxveWVlLCBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIiB9KTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlbGV0ZUhhbmRsZXIgPSAoZXZlbnQsIGVtcGxveWVlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgZGlhbG9nQ29udGVudDogZW1wbG95ZWUubmFtZSArIFwiIHPhur0gYuG7iyB4w7NhP1wiLFxyXG4gICAgICBzZWxlY3RlZEl0ZW06IGVtcGxveWVlLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXJyb3JDb25maXJtZWRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnZW5lcmF0ZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy90aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZURlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEVtcGxveWVlQ29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyhldmVudCkgPT4gdGhpcy5QYXBlckNvbXBvbmVudCgpfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpYWxvZ1RpdGxlIHN0eWxlPXt7IGN1cnNvcjogXCJtb3ZlXCIgfX0gaWQ9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIFRow7RuZyBiw6FvXHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD57dGhpcy5zdGF0ZS5kaWFsb2dDb250ZW50fTwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEjhu6d5XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50LCB0cnVlKX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgxJDhu5NuZyDDvVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmVtcGxveWVlRWRpdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEVtcGxveWVlRWRpdFxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuZW1wbG95ZWVFZGl0fVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lQ2hhbmdlZD17dGhpcy5lbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlQ3JlYXRlSGFuZGxlcj17dGhpcy5lbXBsb3llZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZVNhdmVIYW5kbGVyPXt0aGlzLmVtcGxveWVlU2F2ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lbXBsb3llZUxpc3Qud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxBdXg+XHJcbiAgICAgICAgICAgICAgICA8RW1wbG95ZWVMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmVtcGxveWVlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgZW1wbG95ZWVFZGl0PXt0aGlzLmVtcGxveWVlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRGVsZXRlPXsoZXZlbnQsIGVtcGxveWVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVEZWxldGVIYW5kbGVyKGV2ZW50LCBlbXBsb3llZSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0F1eD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVtcGxveWVlRWRpdDogc3RhdGUuZW1wbG95ZWUuZW1wbG95ZWVFZGl0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUuZW1wbG95ZWUuZXJyb3IsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBlbXBsb3llZU5hbWVGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTmFtZUZvY3VzKCkpLFxyXG4gICAgZW1wbG95ZWVOYW1lQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVOYW1lQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzKCkpLFxyXG4gICAgZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBlbXBsb3llZUNyZWF0ZURpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlQ3JlYXRlKCkpLFxyXG4gICAgZW1wbG95ZWVBZGREaXNwYXRjaDogKGVtcGxveWVlKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlQWRkKGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZUVkaXREaXNwYXRjaDogKGVtcGxveWVlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRWRpdChlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVVcGRhdGVEaXNwYXRjaDogKGlkLCBlbXBsb3llZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZVVwZGF0ZShpZCwgZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlRGVsZXRlRGlzcGF0Y2g6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlbGV0ZShpZCkpLFxyXG4gICAgZW1wbG95ZWVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVMaXN0KCkpLFxyXG4gICAgZW1wbG95ZWVFcnJvckhhbmRsZWREaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUVycm9ySGFuZGxlZCgpKSxcclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKEVtcGxveWVlQ29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==