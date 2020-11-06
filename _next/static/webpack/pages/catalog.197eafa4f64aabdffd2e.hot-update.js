webpackHotUpdate_N_E("pages/catalog",{

/***/ "./src/containers/DeptContainer/DeptContainer.js":
/*!*******************************************************!*\
  !*** ./src/containers/DeptContainer/DeptContainer.js ***!
  \*******************************************************/
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
/* harmony import */ var _components_Dept_DeptEdit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Dept/DeptEdit */ "./src/components/Dept/DeptEdit.js");
/* harmony import */ var _components_Dept_DeptList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Dept/DeptList */ "./src/components/Dept/DeptList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../hocs/Auxiliary/Auxiliary */ "./src/hocs/Auxiliary/Auxiliary.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/deptAction */ "./src/store/actions/deptAction.js");








var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\containers\\DeptContainer\\DeptContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















 // import classes from "./DeptContainer.module.css";





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


var DeptContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DeptContainer, _Component);

  var _super = _createSuper(DeptContainer);

  function DeptContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DeptContainer);

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptNameFocusHandler", function () {
      _this.props.deptNameFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptNameChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.deptNameChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptDescriptionFocusHandler", function () {
      _this.props.deptDescriptionFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptDescriptionChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.deptDescriptionChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptCreateHandler", function (event) {
      event.preventDefault();

      _this.props.deptCreateDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptSaveHandler", function (event) {
      event.preventDefault();
      var dept = {
        name: _this.props.deptEdit.deptName.value,
        description: _this.props.deptEdit.deptDescription.value
      };

      if (!_this.props.deptEdit.id) {
        _this.props.deptAddDispatch(dept);
      } else {
        _this.props.deptUpdateDispatch(_this.props.deptEdit.id, dept);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptEditHandler", function (event, dept) {
      event.preventDefault();
      dept.id = dept.key;

      _this.props.deptEditDispatch(dept);

      _this.setState({
        selectedItem: dept,
        selectedItemType: "edit"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deptDeleteHandler", function (event, dept) {
      event.preventDefault();

      _this.setState({
        isDialogOpen: true,
        dialogContent: dept.name + " sẽ bị xóa?",
        selectedItem: dept,
        selectedItemType: "delete"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.deptDeleteDispatch(_this.state.selectedItem.key);

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
          lineNumber: 140,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      })));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DeptContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.deptListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response.status == 401) {
        // this.props.deptErrorHandledDispatch();
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
          lineNumber: 157,
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
          lineNumber: 158,
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
          lineNumber: 164,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
          lineNumber: 171,
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
          lineNumber: 178,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, this.props.deptEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 15
        }
      }) : __jsx(_components_Dept_DeptEdit__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.deptEdit, {
        deptNameFocusHandler: this.deptNameFocusHandler,
        deptNameChanged: this.deptNameChangedHandler,
        deptDescriptionFocusHandler: this.deptDescriptionFocusHandler,
        deptDescriptionChanged: this.deptDescriptionChangedHandler,
        deptCreateHandler: this.deptCreateHandler,
        deptSaveHandler: function deptSaveHandler(event) {
          return _this2.deptSaveHandler(event);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }
      }, this.props.deptList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 15
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_components_Dept_DeptList__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.deptList, {
        deptEdit: this.deptEditHandler,
        deptDelete: this.deptDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 17
        }
      }))))));
    }
  }]);

  return DeptContainer;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    deptEdit: state.dept.deptEdit,
    deptList: state.dept.deptList,
    error: state.dept.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deptNameFocusDispatch: function deptNameFocusDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptNameFocus"]());
    },
    deptNameChangedDispatch: function deptNameChangedDispatch(value, validation) {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptNameChanged"](value, validation));
    },
    deptDescriptionFocusDispatch: function deptDescriptionFocusDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptDescriptionFocus"]());
    },
    deptDescriptionChangedDispatch: function deptDescriptionChangedDispatch(value, validation) {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptDescriptionChanged"](value, validation));
    },
    deptCreateDispatch: function deptCreateDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptCreate"]());
    },
    deptAddDispatch: function deptAddDispatch(dept) {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptAdd"](dept));
    },
    deptEditDispatch: function deptEditDispatch(dept) {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptEdit"](dept));
    },
    deptUpdateDispatch: function deptUpdateDispatch(id, dept) {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptUpdate"](id, dept));
    },
    deptDeleteDispatch: function deptDeleteDispatch(id) {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptDelete"](id));
    },
    deptListDispatch: function deptListDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptList"]());
    },
    deptErrorHandledDispatch: function deptErrorHandledDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptErrorHandled"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_27__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(DeptContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
          lineNumber: 143,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
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
      if (this.props.error && this.props.error.response.status == 401) {
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
          lineNumber: 160,
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
          lineNumber: 161,
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
          lineNumber: 167,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
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
          lineNumber: 174,
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
          lineNumber: 181,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }
      }, this.props.goldTypeEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
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
          lineNumber: 194,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }
      }, this.props.goldTypeList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 15
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 17
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_components_GoldType_GoldTypeList__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.goldTypeList, {
        goldTypeEdit: this.goldTypeEditHandler,
        goldTypeDelete: this.goldTypeDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRGVwdENvbnRhaW5lci9EZXB0Q29udGFpbmVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9Hb2xkVHlwZUNvbnRhaW5lci9Hb2xkVHlwZUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImhlaWdodCIsImdyaWQiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkRlcHRDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50Iiwic2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtVHlwZSIsInByb3BzIiwiZGVwdE5hbWVGb2N1c0Rpc3BhdGNoIiwiZXZlbnQiLCJ2YWxpZGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJkZXB0TmFtZUNoYW5nZWREaXNwYXRjaCIsInRhcmdldCIsInZhbHVlIiwiZGVwdERlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCIsImRlcHREZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaCIsImRlcHRDcmVhdGVEaXNwYXRjaCIsImRlcHQiLCJuYW1lIiwiZGVwdEVkaXQiLCJkZXB0TmFtZSIsImRlc2NyaXB0aW9uIiwiZGVwdERlc2NyaXB0aW9uIiwiaWQiLCJkZXB0QWRkRGlzcGF0Y2giLCJkZXB0VXBkYXRlRGlzcGF0Y2giLCJzZXRTdGF0ZSIsImtleSIsImRlcHRFZGl0RGlzcGF0Y2giLCJpc09LIiwiZGVwdERlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJkZXB0TGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsIm9uTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImRlcHROYW1lRm9jdXNIYW5kbGVyIiwiZGVwdE5hbWVDaGFuZ2VkSGFuZGxlciIsImRlcHREZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImRlcHREZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwiZGVwdENyZWF0ZUhhbmRsZXIiLCJkZXB0U2F2ZUhhbmRsZXIiLCJkZXB0TGlzdCIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJkZXB0RWRpdEhhbmRsZXIiLCJkZXB0RGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsImRlcHRFcnJvckhhbmRsZWREaXNwYXRjaCIsImF1dGhBY3Rpb25zIiwiY29ubmVjdCIsIndpdGhFcnJvckhhbmRsZXIiLCJ3aXRoU3R5bGVzIiwiYXhpb3MiLCJHb2xkVHlwZUNvbnRhaW5lciIsImdvbGRUeXBlTmFtZUZvY3VzRGlzcGF0Y2giLCJnb2xkVHlwZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJnb2xkVHlwZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCIsImdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2giLCJnb2xkVHlwZUNyZWF0ZURpc3BhdGNoIiwiZ29sZFR5cGUiLCJnb2xkVHlwZUVkaXQiLCJnb2xkVHlwZU5hbWUiLCJnb2xkVHlwZURlc2NyaXB0aW9uIiwiZ29sZFR5cGVBZGREaXNwYXRjaCIsImdvbGRUeXBlVXBkYXRlRGlzcGF0Y2giLCJnb2xkVHlwZUVkaXREaXNwYXRjaCIsImdvbGRUeXBlRGVsZXRlRGlzcGF0Y2giLCJnb2xkVHlwZUxpc3REaXNwYXRjaCIsImdvbGRUeXBlTmFtZUZvY3VzSGFuZGxlciIsImdvbGRUeXBlTmFtZUNoYW5nZWRIYW5kbGVyIiwiZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsImdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsImdvbGRUeXBlQ3JlYXRlSGFuZGxlciIsImdvbGRUeXBlU2F2ZUhhbmRsZXIiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZUVkaXRIYW5kbGVyIiwiZ29sZFR5cGVEZWxldGVIYW5kbGVyIiwiZ29sZFR5cGVFcnJvckhhbmRsZWREaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFO0FBREosS0FMbUI7QUFRekJFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxlQUFTLEVBQUUsUUFGTjtBQUdMQyxXQUFLLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUhyQjtBQVJrQixHQUFaO0FBQUEsQ0FBZjtBQWVBOzs7SUFFTUMsYTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxrQkFBWSxFQUFFLEtBRFI7QUFFTkMsbUJBQWEsRUFBRSxJQUZUO0FBR05DLGtCQUFZLEVBQUUsSUFIUjtBQUlOQyxzQkFBZ0IsRUFBRTtBQUpaLEs7OytOQXlCZSxZQUFNO0FBQzNCLFlBQUtDLEtBQUwsQ0FBV0MscUJBQVg7QUFDRCxLOztpT0FFd0IsVUFBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQXVCO0FBQzlDRCxXQUFLLENBQUNFLGNBQU47O0FBQ0EsWUFBS0osS0FBTCxDQUFX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QUFDQyw0RUFBVSxDQUFDL0UsTUFBRCxDQUFWLENBQW1CaUYsaUJBQW5CLENBQUQsRUFBd0NELHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0YWxvZy4xOTdlYWZhNGY2NGFhYmRmZmQyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERlcHRFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RlcHQvRGVwdEVkaXRcIjtcclxuaW1wb3J0IERlcHRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RlcHQvRGVwdExpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9EZXB0Q29udGFpbmVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9kZXB0QWN0aW9uXCI7XHJcblxyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRGVwdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGVwdExpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3IgJiYgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgIC8vIHRoaXMucHJvcHMuZGVwdEVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVwdE5hbWVGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRlcHROYW1lRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGRlcHROYW1lQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmRlcHROYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZGVwdERlc2NyaXB0aW9uRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5kZXB0RGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZGVwdERlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmRlcHREZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIGRlcHRDcmVhdGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5kZXB0Q3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBkZXB0U2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZGVwdCA9IHtcclxuICAgICAgbmFtZTogdGhpcy5wcm9wcy5kZXB0RWRpdC5kZXB0TmFtZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVwdEVkaXQuZGVwdERlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5kZXB0RWRpdC5pZCkge1xyXG4gICAgICB0aGlzLnByb3BzLmRlcHRBZGREaXNwYXRjaChkZXB0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGVwdFVwZGF0ZURpc3BhdGNoKHRoaXMucHJvcHMuZGVwdEVkaXQuaWQsIGRlcHQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogbnVsbCwgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICBkZXB0RWRpdEhhbmRsZXIgPSAoZXZlbnQsIGRlcHQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkZXB0LmlkID0gZGVwdC5rZXk7XHJcbiAgICB0aGlzLnByb3BzLmRlcHRFZGl0RGlzcGF0Y2goZGVwdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBkZXB0LCBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIiB9KTtcclxuICB9O1xyXG5cclxuICBkZXB0RGVsZXRlSGFuZGxlciA9IChldmVudCwgZGVwdCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IGRlcHQubmFtZSArIFwiIHPhur0gYuG7iyB4w7NhP1wiLFxyXG4gICAgICBzZWxlY3RlZEl0ZW06IGRlcHQsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGVwdERlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIERlcHRDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBUaMO0bmcgYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXB0RWRpdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPERlcHRFZGl0XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5kZXB0RWRpdH1cclxuICAgICAgICAgICAgICAgIGRlcHROYW1lRm9jdXNIYW5kbGVyPXt0aGlzLmRlcHROYW1lRm9jdXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGVwdE5hbWVDaGFuZ2VkPXt0aGlzLmRlcHROYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkZXB0RGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e3RoaXMuZGVwdERlc2NyaXB0aW9uRm9jdXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGVwdERlc2NyaXB0aW9uQ2hhbmdlZD17dGhpcy5kZXB0RGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRlcHRDcmVhdGVIYW5kbGVyPXt0aGlzLmRlcHRDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGVwdFNhdmVIYW5kbGVyPXsoZXZlbnQpID0+IHRoaXMuZGVwdFNhdmVIYW5kbGVyKGV2ZW50KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcHRMaXN0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8QXV4PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMucHJvcHMuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgIG1vZGFsQ2xvc2VkPXt0aGlzLmVycm9yQ29uZmlybWVkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXJyb3IgPyB0aGlzLnByb3BzLmVycm9yLm1lc3NhZ2UgOiBcIjw8RXJyb3I+PlwifVxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDxEZXB0TGlzdFxyXG4gICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5kZXB0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgZGVwdEVkaXQ9e3RoaXMuZGVwdEVkaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICBkZXB0RGVsZXRlPXt0aGlzLmRlcHREZWxldGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0F1eD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlcHRFZGl0OiBzdGF0ZS5kZXB0LmRlcHRFZGl0LFxyXG4gICAgZGVwdExpc3Q6IHN0YXRlLmRlcHQuZGVwdExpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUuZGVwdC5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlcHROYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5kZXB0TmFtZUZvY3VzKCkpLFxyXG4gICAgZGVwdE5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5kZXB0TmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGRlcHREZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZGVwdERlc2NyaXB0aW9uRm9jdXMoKSksXHJcbiAgICBkZXB0RGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5kZXB0RGVzY3JpcHRpb25DaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBkZXB0Q3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZGVwdENyZWF0ZSgpKSxcclxuICAgIGRlcHRBZGREaXNwYXRjaDogKGRlcHQpID0+IGRpc3BhdGNoKGFjdGlvbnMuZGVwdEFkZChkZXB0KSksXHJcbiAgICBkZXB0RWRpdERpc3BhdGNoOiAoZGVwdCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5kZXB0RWRpdChkZXB0KSksXHJcbiAgICBkZXB0VXBkYXRlRGlzcGF0Y2g6IChpZCwgZGVwdCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5kZXB0VXBkYXRlKGlkLCBkZXB0KSksXHJcbiAgICBkZXB0RGVsZXRlRGlzcGF0Y2g6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5kZXB0RGVsZXRlKGlkKSksXHJcbiAgICBkZXB0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlcHRMaXN0KCkpLFxyXG4gICAgZGVwdEVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlcHRFcnJvckhhbmRsZWQoKSksXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShEZXB0Q29udGFpbmVyKSwgYXhpb3MpKTtcclxuIiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEdvbGRUeXBlRWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Hb2xkVHlwZS9Hb2xkVHlwZUVkaXRcIjtcclxuaW1wb3J0IEdvbGRUeXBlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Hb2xkVHlwZS9Hb2xkVHlwZUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Hb2xkVHlwZUNvbnRhaW5lci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBdXggZnJvbSBcIi4uLy4uL2hvY3MvQXV4aWxpYXJ5L0F1eGlsaWFyeVwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFR5cGVBY3Rpb25cIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcblxyXG5jbGFzcyBHb2xkVHlwZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmVycm9yICYmIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnb2xkVHlwZU5hbWVGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGdvbGRUeXBlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmdvbGRUeXBlRWRpdC5nb2xkVHlwZU5hbWUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmdvbGRUeXBlRWRpdC5nb2xkVHlwZURlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5nb2xkVHlwZUVkaXQuaWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZUFkZERpc3BhdGNoKGdvbGRUeXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVVcGRhdGVEaXNwYXRjaCh0aGlzLnByb3BzLmdvbGRUeXBlRWRpdC5pZCwgZ29sZFR5cGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogbnVsbCwgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICBnb2xkVHlwZUVkaXRIYW5kbGVyID0gKGV2ZW50LCBnb2xkVHlwZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdvbGRUeXBlLmlkID0gZ29sZFR5cGUua2V5O1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVHlwZUVkaXREaXNwYXRjaChnb2xkVHlwZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBnb2xkVHlwZSwgc2VsZWN0ZWRJdGVtVHlwZTogXCJlZGl0XCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgZ29sZFR5cGVEZWxldGVIYW5kbGVyID0gKGV2ZW50LCBnb2xkVHlwZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IGdvbGRUeXBlLm5hbWUgKyBcIiBz4bq9IGLhu4sgeMOzYT9cIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBnb2xkVHlwZSxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZURlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIERlcHRDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBUaMO0bmcgYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5nb2xkVHlwZUVkaXQud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxHb2xkVHlwZUVkaXRcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmdvbGRUeXBlRWRpdH1cclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlTmFtZUZvY3VzSGFuZGxlcj17dGhpcy5nb2xkVHlwZU5hbWVGb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBnb2xkVHlwZU5hbWVDaGFuZ2VkPXt0aGlzLmdvbGRUeXBlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ29sZFR5cGVEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVEZXNjcmlwdGlvbkNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ29sZFR5cGVDcmVhdGVIYW5kbGVyPXt0aGlzLmdvbGRUeXBlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGdvbGRUeXBlU2F2ZUhhbmRsZXI9eyhldmVudCkgPT4gdGhpcy5nb2xkVHlwZVNhdmVIYW5kbGVyKGV2ZW50KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEF1eD5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnByb3BzLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8R29sZFR5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgZ29sZFR5cGVFZGl0PXt0aGlzLmdvbGRUeXBlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGdvbGRUeXBlRGVsZXRlPXt0aGlzLmdvbGRUeXBlRGVsZXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9BdXg+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBnb2xkVHlwZUVkaXQ6IHN0YXRlLmdvbGRUeXBlLmdvbGRUeXBlRWRpdCxcclxuICAgIGdvbGRUeXBlTGlzdDogc3RhdGUuZ29sZFR5cGUuZ29sZFR5cGVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLmdvbGRUeXBlLmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZ29sZFR5cGVOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZU5hbWVGb2N1cygpKSxcclxuICAgIGdvbGRUeXBlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmdvbGRUeXBlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGdvbGRUeXBlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmdvbGRUeXBlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIGdvbGRUeXBlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZ29sZFR5cGVDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZUNyZWF0ZSgpKSxcclxuICAgIGdvbGRUeXBlQWRkRGlzcGF0Y2g6IChnb2xkVHlwZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZUFkZChnb2xkVHlwZSkpLFxyXG4gICAgZ29sZFR5cGVFZGl0RGlzcGF0Y2g6IChnb2xkVHlwZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5nb2xkVHlwZUVkaXQoZ29sZFR5cGUpKSxcclxuICAgIGdvbGRUeXBlVXBkYXRlRGlzcGF0Y2g6IChpZCwgZ29sZFR5cGUpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZ29sZFR5cGVVcGRhdGUoaWQsIGdvbGRUeXBlKSksXHJcbiAgICBnb2xkVHlwZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMuZ29sZFR5cGVEZWxldGUoaWQpKSxcclxuICAgIGdvbGRUeXBlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmdvbGRUeXBlTGlzdCgpKSxcclxuICAgIGdvbGRUeXBlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZ29sZFR5cGVFcnJvckhhbmRsZWQoKSksXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShHb2xkVHlwZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=