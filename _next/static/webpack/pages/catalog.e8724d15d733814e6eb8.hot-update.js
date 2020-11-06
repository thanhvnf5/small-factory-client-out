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
          lineNumber: 147,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401) {
        // this.props.employeeErrorHandledDispatch();
        // throw new Error("An error has occured in Buggy component!");
        this.props.onLogout(); // Router.push("/sigin");
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
          lineNumber: 164,
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
          lineNumber: 165,
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
          lineNumber: 171,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
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
          lineNumber: 178,
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
          lineNumber: 185,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, this.props.employeeEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 15
        }
      }) : __jsx(_components_Employee_EmployeeEdit__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.employeeEdit, {
        employeeNameFocusHandler: this.employeeNameFocusHandler,
        employeeNameChanged: this.employeeNameChangedHandler,
        employeeDescriptionFocusHandler: this.employeeDescriptionFocusHandler,
        employeeDescriptionChanged: this.employeeDescriptionChangedHandler,
        employeeCreateHandler: this.employeeCreateHandler,
        employeeSaveHandler: this.employeeSaveHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }
      }, this.props.employeeList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 15
        }
      }, __jsx(_components_Employee_EmployeeList__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.employeeList, {
        employeeEdit: this.employeeEditHandler,
        employeeDelete: this.employeeDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
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

/***/ "./src/containers/GoldTypeContainer/GoldTypeContainer.js":
/*!***************************************************************!*\
  !*** ./src/containers/GoldTypeContainer/GoldTypeContainer.js ***!
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
/* harmony import */ var _components_GoldType_GoldTypeEdit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/GoldType/GoldTypeEdit */ "./src/components/GoldType/GoldTypeEdit.js");
/* harmony import */ var _components_GoldType_GoldTypeList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/GoldType/GoldTypeList */ "./src/components/GoldType/GoldTypeList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../hocs/Auxiliary/Auxiliary */ "./src/hocs/Auxiliary/Auxiliary.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/goldTypeAction */ "./src/store/actions/goldTypeAction.js");








var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\containers\\GoldTypeContainer\\GoldTypeContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















 // import classes from "./GoldTypeContainer.module.css";





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


var GoldTypeContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GoldTypeContainer, _Component);

  var _super = _createSuper(GoldTypeContainer);

  function GoldTypeContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GoldTypeContainer);

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeNameFocusHandler", function () {
      _this.props.goldTypeNameFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeNameChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.goldTypeNameChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeDescriptionFocusHandler", function () {
      _this.props.goldTypeDescriptionFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeDescriptionChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.goldTypeDescriptionChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeCreateHandler", function (event) {
      event.preventDefault();

      _this.props.goldTypeCreateDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeSaveHandler", function (event) {
      event.preventDefault();
      var goldType = {
        name: _this.props.goldTypeEdit.goldTypeName.value,
        description: _this.props.goldTypeEdit.goldTypeDescription.value
      };

      if (!_this.props.goldTypeEdit.id) {
        _this.props.goldTypeAddDispatch(goldType);
      } else {
        _this.props.goldTypeUpdateDispatch(_this.props.goldTypeEdit.id, goldType);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeEditHandler", function (event, goldType) {
      event.preventDefault();
      goldType.id = goldType.key;

      _this.props.goldTypeEditDispatch(goldType);

      _this.setState({
        selectedItem: goldType,
        selectedItemType: "edit"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "goldTypeDeleteHandler", function (event, goldType) {
      event.preventDefault();

      _this.setState({
        isDialogOpen: true,
        dialogContent: goldType.name + " sẽ bị xóa?",
        selectedItem: goldType,
        selectedItemType: "delete"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.goldTypeDeleteDispatch(_this.state.selectedItem.key);

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
          lineNumber: 147,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 9
        }
      })));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GoldTypeContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.goldTypeListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401) {
        // this.props.goldTypeErrorHandledDispatch();
        // throw new Error("An error has occured in Buggy component!");
        this.props.onLogout(); // Router.push("/sigin");
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

      console.log(new Date().toLocaleString() + " ............ DeptContainer render");
      var classes = this.props.classes;
      return __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
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
          lineNumber: 165,
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
          lineNumber: 171,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
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
          lineNumber: 178,
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
          lineNumber: 185,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, this.props.goldTypeEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 15
        }
      }) : __jsx(_components_GoldType_GoldTypeEdit__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.goldTypeEdit, {
        goldTypeNameFocusHandler: this.goldTypeNameFocusHandler,
        goldTypeNameChanged: this.goldTypeNameChangedHandler,
        goldTypeDescriptionFocusHandler: this.goldTypeDescriptionFocusHandler,
        goldTypeDescriptionChanged: this.goldTypeDescriptionChangedHandler,
        goldTypeCreateHandler: this.goldTypeCreateHandler,
        goldTypeSaveHandler: function goldTypeSaveHandler(event) {
          return _this2.goldTypeSaveHandler(event);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }
      }, this.props.goldTypeList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 15
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 17
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_components_GoldType_GoldTypeList__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.goldTypeList, {
        goldTypeEdit: this.goldTypeEditHandler,
        goldTypeDelete: this.goldTypeDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 17
        }
      }))))));
    }
  }]);

  return GoldTypeContainer;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    goldTypeEdit: state.goldType.goldTypeEdit,
    goldTypeList: state.goldType.goldTypeList,
    error: state.goldType.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    goldTypeNameFocusDispatch: function goldTypeNameFocusDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeNameFocus"]());
    },
    goldTypeNameChangedDispatch: function goldTypeNameChangedDispatch(value, validation) {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeNameChanged"](value, validation));
    },
    goldTypeDescriptionFocusDispatch: function goldTypeDescriptionFocusDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeDescriptionFocus"]());
    },
    goldTypeDescriptionChangedDispatch: function goldTypeDescriptionChangedDispatch(value, validation) {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeDescriptionChanged"](value, validation));
    },
    goldTypeCreateDispatch: function goldTypeCreateDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeCreate"]());
    },
    goldTypeAddDispatch: function goldTypeAddDispatch(goldType) {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeAdd"](goldType));
    },
    goldTypeEditDispatch: function goldTypeEditDispatch(goldType) {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeEdit"](goldType));
    },
    goldTypeUpdateDispatch: function goldTypeUpdateDispatch(id, goldType) {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeUpdate"](id, goldType));
    },
    goldTypeDeleteDispatch: function goldTypeDeleteDispatch(id) {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeDelete"](id));
    },
    goldTypeListDispatch: function goldTypeListDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeList"]());
    },
    goldTypeErrorHandledDispatch: function goldTypeErrorHandledDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_28__["goldTypeErrorHandled"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_27__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(GoldTypeContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YWluZXJzL0dvbGRUeXBlQ29udGFpbmVyL0dvbGRUeXBlQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiaGVpZ2h0IiwiZ3JpZCIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiRW1wbG95ZWVDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50Iiwic2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtVHlwZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImVtcGxveWVlTmFtZUZvY3VzRGlzcGF0Y2giLCJ2YWxpZGF0aW9uIiwiZW1wbG95ZWVOYW1lQ2hhbmdlZERpc3BhdGNoIiwidGFyZ2V0IiwidmFsdWUiLCJlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCIsImVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2giLCJlbXBsb3llZUNyZWF0ZURpc3BhdGNoIiwiZW1wbG95ZWUiLCJuYW1lIiwiZW1wbG95ZWVFZGl0IiwiZW1wbG95ZWVOYW1lIiwiZGVzY3JpcHRpb24iLCJlbXBsb3llZURlc2NyaXB0aW9uIiwiaWQiLCJlbXBsb3llZUFkZERpc3BhdGNoIiwiZW1wbG95ZWVVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwia2V5IiwiZW1wbG95ZWVFZGl0RGlzcGF0Y2giLCJpc09LIiwiZW1wbG95ZWVEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwiZW1wbG95ZWVMaXN0RGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImRpYWxvZ0Nsb3NlIiwiUGFwZXJDb21wb25lbnQiLCJjdXJzb3IiLCJ3YWl0aW5nIiwiZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyIiwiZW1wbG95ZWVOYW1lQ2hhbmdlZEhhbmRsZXIiLCJlbXBsb3llZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwiZW1wbG95ZWVDcmVhdGVIYW5kbGVyIiwiZW1wbG95ZWVTYXZlSGFuZGxlciIsImVtcGxveWVlTGlzdCIsImVtcGxveWVlRWRpdEhhbmRsZXIiLCJlbXBsb3llZURlbGV0ZUhhbmRsZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJlbXBsb3llZUVycm9ySGFuZGxlZERpc3BhdGNoIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyIsIkdvbGRUeXBlQ29udGFpbmVyIiwiZ29sZFR5cGVOYW1lRm9jdXNEaXNwYXRjaCIsImdvbGRUeXBlTmFtZUNoYW5nZWREaXNwYXRjaCIsImdvbGRUeXBlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwiZ29sZFR5cGVEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsImdvbGRUeXBlQ3JlYXRlRGlzcGF0Y2giLCJnb2xkVHlwZSIsImdvbGRUeXBlRWRpdCIsImdvbGRUeXBlTmFtZSIsImdvbGRUeXBlRGVzY3JpcHRpb24iLCJnb2xkVHlwZUFkZERpc3BhdGNoIiwiZ29sZFR5cGVVcGRhdGVEaXNwYXRjaCIsImdvbGRUeXBlRWRpdERpc3BhdGNoIiwiZ29sZFR5cGVEZWxldGVEaXNwYXRjaCIsImdvbGRUeXBlTGlzdERpc3BhdGNoIiwiZ29sZFR5cGVOYW1lRm9jdXNIYW5kbGVyIiwiZ29sZFR5cGVOYW1lQ2hhbmdlZEhhbmRsZXIiLCJnb2xkVHlwZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwiZ29sZFR5cGVEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwiZ29sZFR5cGVDcmVhdGVIYW5kbGVyIiwiZ29sZFR5cGVTYXZlSGFuZGxlciIsImdvbGRUeXBlTGlzdCIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJnb2xkVHlwZUVkaXRIYW5kbGVyIiwiZ29sZFR5cGVEZWxldGVIYW5kbGVyIiwiZ29sZFR5cGVFcnJvckhhbmRsZWREaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFO0FBREosS0FMbUI7QUFRekJFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxlQUFTLEVBQUUsUUFGTjtBQUdMQyxXQUFLLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUhyQjtBQVJrQixHQUFaO0FBQUEsQ0FBZjtBQWVBOzs7SUFFTUMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsa0JBQVksRUFBRSxLQURSO0FBRU5DLG1CQUFhLEVBQUUsSUFGVDtBQUdOQyxrQkFBWSxFQUFFLElBSFI7QUFJTkMsc0JBQWdCLEVBQUU7QUFKWixLOzttT0E2Qm1CLFVBQUNDLEtBQUQs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Q0FBbUIrRSxpQkFBbkIsQ0FBRCxFQUF3Q0Qsd0RBQXhDLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLmU4NzI0ZDE1ZDczMzgxNGU2ZWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlRWRpdFwiO1xyXG5pbXBvcnQgRW1wbG95ZWVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VtcGxveWVlL0VtcGxveWVlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0VtcGxveWVlQ29udGFpbmVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRW1wbG95ZWVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuZXJyb3IgJiZcclxuICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDFcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtcGxveWVlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZU5hbWUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5lbXBsb3llZURlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5lbXBsb3llZUVkaXQuaWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZUFkZERpc3BhdGNoKGVtcGxveWVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVVcGRhdGVEaXNwYXRjaCh0aGlzLnByb3BzLmVtcGxveWVlRWRpdC5pZCwgZW1wbG95ZWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogbnVsbCwgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICBlbXBsb3llZUVkaXRIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGVtcGxveWVlLmlkID0gZW1wbG95ZWUua2V5O1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUVkaXREaXNwYXRjaChlbXBsb3llZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSwgc2VsZWN0ZWRJdGVtVHlwZTogXCJlZGl0XCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgZW1wbG95ZWVEZWxldGVIYW5kbGVyID0gKGV2ZW50LCBlbXBsb3llZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IGVtcGxveWVlLm5hbWUgKyBcIiBz4bq9IGLhu4sgeMOzYT9cIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBlbXBsb3llZSxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZURlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEVtcGxveWVlQ29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgVGjDtG5nIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZW1wbG95ZWVFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RW1wbG95ZWVFZGl0XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5lbXBsb3llZUVkaXR9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZU5hbWVGb2N1c0hhbmRsZXI9e3RoaXMuZW1wbG95ZWVOYW1lRm9jdXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lQ2hhbmdlZD17dGhpcy5lbXBsb3llZU5hbWVDaGFuZ2VkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVtcGxveWVlQ3JlYXRlSGFuZGxlcj17dGhpcy5lbXBsb3llZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZVNhdmVIYW5kbGVyPXt0aGlzLmVtcGxveWVlU2F2ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lbXBsb3llZUxpc3Qud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxBdXg+XHJcbiAgICAgICAgICAgICAgICA8RW1wbG95ZWVMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmVtcGxveWVlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgZW1wbG95ZWVFZGl0PXt0aGlzLmVtcGxveWVlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGVtcGxveWVlRGVsZXRlPXt0aGlzLmVtcGxveWVlRGVsZXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9BdXg+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBlbXBsb3llZUVkaXQ6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlRWRpdCxcclxuICAgIGVtcGxveWVlTGlzdDogc3RhdGUuZW1wbG95ZWUuZW1wbG95ZWVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZW1wbG95ZWVOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZU5hbWVGb2N1cygpKSxcclxuICAgIGVtcGxveWVlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIGVtcGxveWVlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZW1wbG95ZWVDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUNyZWF0ZSgpKSxcclxuICAgIGVtcGxveWVlQWRkRGlzcGF0Y2g6IChlbXBsb3llZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUFkZChlbXBsb3llZSkpLFxyXG4gICAgZW1wbG95ZWVFZGl0RGlzcGF0Y2g6IChlbXBsb3llZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5lbXBsb3llZUVkaXQoZW1wbG95ZWUpKSxcclxuICAgIGVtcGxveWVlVXBkYXRlRGlzcGF0Y2g6IChpZCwgZW1wbG95ZWUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVVcGRhdGUoaWQsIGVtcGxveWVlKSksXHJcbiAgICBlbXBsb3llZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVEZWxldGUoaWQpKSxcclxuICAgIGVtcGxveWVlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmVtcGxveWVlTGlzdCgpKSxcclxuICAgIGVtcGxveWVlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZW1wbG95ZWVFcnJvckhhbmRsZWQoKSksXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShFbXBsb3llZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiIsImltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBHb2xkVHlwZUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR29sZFR5cGUvR29sZFR5cGVFZGl0XCI7XHJcbmltcG9ydCBHb2xkVHlwZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR29sZFR5cGUvR29sZFR5cGVMaXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXJcIjtcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vR29sZFR5cGVDb250YWluZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQXV4IGZyb20gXCIuLi8uLi9ob2NzL0F1eGlsaWFyeS9BdXhpbGlhcnlcIjtcclxuaW1wb3J0IHdpdGhFcnJvckhhbmRsZXIgZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEVycm9ySGFuZGxlci93aXRoRXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgYXV0aEFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcblxyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgR29sZFR5cGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuZXJyb3IgJiZcclxuICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDFcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnb2xkVHlwZU5hbWVGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGdvbGRUeXBlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmdvbGRUeXBlRWRpdC5nb2xkVHlwZU5hbWUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmdvbGRUeXBlRWRpdC5nb2xkVHlwZURlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5nb2xkVHlwZUVkaXQuaWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZUFkZERpc3BhdGNoKGdvbGRUeXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVVcGRhdGVEaXNwYXRjaCh0aGlzLnByb3BzLmdvbGRUeXBlRWRpdC5pZCwgZ29sZFR5cGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogbnVsbCwgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZUVkaXRIYW5kbGVyID0gKGV2ZW50LCBnb2xkVHlwZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdvbGRUeXBlLmlkID0gZ29sZFR5cGUua2V5O1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVHlwZUVkaXREaXNwYXRjaChnb2xkVHlwZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBnb2xkVHlwZSwgc2VsZWN0ZWRJdGVtVHlwZTogXCJlZGl0XCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgZ29sZFR5cGVEZWxldGVIYW5kbGVyID0gKGV2ZW50LCBnb2xkVHlwZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IGdvbGRUeXBlLm5hbWUgKyBcIiBz4bq9IGLhu4sgeMOzYT9cIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBnb2xkVHlwZSxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZURlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIERlcHRDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBUaMO0bmcgYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5nb2xkVHlwZUVkaXQud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxHb2xkVHlwZUVkaXRcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmdvbGRUeXBlRWRpdH1cclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlTmFtZUZvY3VzSGFuZGxlcj17dGhpcy5nb2xkVHlwZU5hbWVGb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZU5hbWVDaGFuZ2VkPXt0aGlzLmdvbGRUeXBlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEZXNjcmlwdGlvbkNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVDcmVhdGVIYW5kbGVyPXt0aGlzLmdvbGRUeXBlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlU2F2ZUhhbmRsZXI9eyhldmVudCkgPT4gdGhpcy5nb2xkVHlwZVNhdmVIYW5kbGVyKGV2ZW50KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEF1eD5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8R29sZFR5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgZ29sZFR5cGVFZGl0PXt0aGlzLmdvbGRUeXBlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGdvbGRUeXBlRGVsZXRlPXt0aGlzLmdvbGRUeXBlRGVsZXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9BdXg+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBnb2xkVHlwZUVkaXQ6IHN0YXRlLmdvbGRUeXBlLmdvbGRUeXBlRWRpdCxcclxuICAgIGdvbGRUeXBlTGlzdDogc3RhdGUuZ29sZFR5cGUuZ29sZFR5cGVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLmdvbGRUeXBlLmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZ29sZFR5cGVOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZU5hbWVGb2N1cygpKSxcclxuICAgIGdvbGRUeXBlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmdvbGRUeXBlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGdvbGRUeXBlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmdvbGRUeXBlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIGdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZ29sZFR5cGVDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZUNyZWF0ZSgpKSxcclxuICAgIGdvbGRUeXBlQWRkRGlzcGF0Y2g6IChnb2xkVHlwZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZUFkZChnb2xkVHlwZSkpLFxyXG4gICAgZ29sZFR5cGVFZGl0RGlzcGF0Y2g6IChnb2xkVHlwZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZUVkaXQoZ29sZFR5cGUpKSxcclxuICAgIGdvbGRUeXBlVXBkYXRlRGlzcGF0Y2g6IChpZCwgZ29sZFR5cGUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZ29sZFR5cGVVcGRhdGUoaWQsIGdvbGRUeXBlKSksXHJcbiAgICBnb2xkVHlwZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMuZ29sZFR5cGVEZWxldGUoaWQpKSxcclxuICAgIGdvbGRUeXBlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmdvbGRUeXBlTGlzdCgpKSxcclxuICAgIGdvbGRUeXBlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZ29sZFR5cGVFcnJvckhhbmRsZWQoKSksXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShHb2xkVHlwZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=