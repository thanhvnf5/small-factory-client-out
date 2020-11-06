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
          lineNumber: 144,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
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
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401) {
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
          lineNumber: 161,
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
          lineNumber: 162,
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
          lineNumber: 168,
          columnNumber: 11
        }
      }, "Th\xF4ng b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
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
          lineNumber: 175,
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
          lineNumber: 182,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }
      }, this.props.deptEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
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
          lineNumber: 195,
          columnNumber: 15
        }
      }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }
      }, this.props.deptList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 15
        }
      }) : __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 15
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_components_Dept_DeptList__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.deptList, {
        deptEdit: this.deptEditHandler,
        deptDelete: this.deptDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRGVwdENvbnRhaW5lci9EZXB0Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiaGVpZ2h0IiwiZ3JpZCIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiRGVwdENvbnRhaW5lciIsImlzRGlhbG9nT3BlbiIsImRpYWxvZ0NvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwicHJvcHMiLCJkZXB0TmFtZUZvY3VzRGlzcGF0Y2giLCJldmVudCIsInZhbGlkYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRlcHROYW1lQ2hhbmdlZERpc3BhdGNoIiwidGFyZ2V0IiwidmFsdWUiLCJkZXB0RGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoIiwiZGVwdERlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwiZGVwdENyZWF0ZURpc3BhdGNoIiwiZGVwdCIsIm5hbWUiLCJkZXB0RWRpdCIsImRlcHROYW1lIiwiZGVzY3JpcHRpb24iLCJkZXB0RGVzY3JpcHRpb24iLCJpZCIsImRlcHRBZGREaXNwYXRjaCIsImRlcHRVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwia2V5IiwiZGVwdEVkaXREaXNwYXRjaCIsImlzT0siLCJkZXB0RGVsZXRlRGlzcGF0Y2giLCJzdGF0ZSIsImRlcHRMaXN0RGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImRpYWxvZ0Nsb3NlIiwiUGFwZXJDb21wb25lbnQiLCJjdXJzb3IiLCJ3YWl0aW5nIiwiZGVwdE5hbWVGb2N1c0hhbmRsZXIiLCJkZXB0TmFtZUNoYW5nZWRIYW5kbGVyIiwiZGVwdERlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwiZGVwdERlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIiLCJkZXB0Q3JlYXRlSGFuZGxlciIsImRlcHRTYXZlSGFuZGxlciIsImRlcHRMaXN0IiwiZXJyb3JDb25maXJtZWRIYW5kbGVyIiwibWVzc2FnZSIsImRlcHRFZGl0SGFuZGxlciIsImRlcHREZWxldGVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwiZGVwdEVycm9ySGFuZGxlZERpc3BhdGNoIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFO0FBREosS0FMbUI7QUFRekJFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxlQUFTLEVBQUUsUUFGTjtBQUdMQyxXQUFLLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUhyQjtBQVJrQixHQUFaO0FBQUEsQ0FBZjtBQWVBOzs7SUFFTUMsYTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxrQkFBWSxF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QWUsRUFBRSx5QkFBQ1AsSUFBRDtBQUFBLGFBQVUyQyxRQUFRLENBQUNDLGtFQUFBLENBQWdCNUMsSUFBaEIsQ0FBRCxDQUFsQjtBQUFBLEtBVFo7QUFVTFcsb0JBQWdCLEVBQUUsMEJBQUNYLElBQUQ7QUFBQSxhQUFVMkMsUUFBUSxDQUFDQyxtRUFBQSxDQUFpQjVDLElBQWpCLENBQUQsQ0FBbEI7QUFBQSxLQVZiO0FBV0xRLHNCQUFrQixFQUFFLDRCQUFDRixFQUFELEVBQUtOLElBQUw7QUFBQSxhQUFjMkMsUUFBUSxDQUFDQyxxRUFBQSxDQUFtQnRDLEVBQW5CLEVBQXVCTixJQUF2QixDQUFELENBQXRCO0FBQUEsS0FYZjtBQVlMYSxzQkFBa0IsRUFBRSw0QkFBQ1AsRUFBRDtBQUFBLGFBQVFxQyxRQUFRLENBQUNDLHFFQUFBLENBQW1CdEMsRUFBbkIsQ0FBRCxDQUFoQjtBQUFBLEtBWmY7QUFhTFMsb0JBQWdCLEVBQUU7QUFBQSxhQUFNNEIsUUFBUSxDQUFDQyxtRUFBQSxFQUFELENBQWQ7QUFBQSxLQWJiO0FBY0xDLDRCQUF3QixFQUFFO0FBQUEsYUFBTUYsUUFBUSxDQUFDQywyRUFBQSxFQUFELENBQWQ7QUFBQSxLQWRyQjtBQWVMekIsWUFBUSxFQUFFO0FBQUEsYUFBTXdCLFFBQVEsQ0FBQ0csMkRBQUEsRUFBRCxDQUFkO0FBQUE7QUFmTCxHQUFQO0FBaUJELENBbEJEOztBQW9CZUMsMkhBQU8sQ0FDcEJOLGVBRG9CLEVBRXBCQyxrQkFGb0IsQ0FBUCxDQUdiTSx3RkFBZ0IsQ0FBQ0MsNEVBQVUsQ0FBQy9FLE1BQUQsQ0FBVixDQUFtQmMsYUFBbkIsQ0FBRCxFQUFvQ2tFLHdEQUFwQyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0YWxvZy5kOThlNjBlYjYwZjM5ODRlNTVjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERlcHRFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RlcHQvRGVwdEVkaXRcIjtcclxuaW1wb3J0IERlcHRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RlcHQvRGVwdExpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9EZXB0Q29udGFpbmVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9kZXB0QWN0aW9uXCI7XHJcblxyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRGVwdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGVwdExpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByb3BzLmVycm9yICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxXHJcbiAgICApIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5kZXB0RXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXB0TmFtZUZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZGVwdE5hbWVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgZGVwdE5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZGVwdE5hbWVDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBkZXB0RGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRlcHREZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBkZXB0RGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuZGVwdERlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgZGVwdENyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmRlcHRDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIGRlcHRTYXZlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBkZXB0ID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmRlcHRFZGl0LmRlcHROYW1lLnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXB0RWRpdC5kZXB0RGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmRlcHRFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGVwdEFkZERpc3BhdGNoKGRlcHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXB0VXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5kZXB0RWRpdC5pZCwgZGVwdCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBudWxsLCBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsIH0pO1xyXG4gIH07XHJcblxyXG4gIGRlcHRFZGl0SGFuZGxlciA9IChldmVudCwgZGVwdCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRlcHQuaWQgPSBkZXB0LmtleTtcclxuICAgIHRoaXMucHJvcHMuZGVwdEVkaXREaXNwYXRjaChkZXB0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGRlcHQsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGRlcHREZWxldGVIYW5kbGVyID0gKGV2ZW50LCBkZXB0KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgZGlhbG9nQ29udGVudDogZGVwdC5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogZGVwdCxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXB0RGVsZXRlRGlzcGF0Y2godGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ua2V5KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQYXBlckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgIGhhbmRsZT1cIiNkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBjYW5jZWw9eydbY2xhc3MqPVwiTXVpRGlhbG9nQ29udGVudC1yb290XCJdJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxQYXBlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gRGVwdENvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNEaWFsb2dPcGVufVxyXG4gICAgICAgICAgb25DbG9zZT17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXt0aGlzLlBhcGVyQ29tcG9uZW50fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpYWxvZ1RpdGxlIHN0eWxlPXt7IGN1cnNvcjogXCJtb3ZlXCIgfX0gaWQ9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIFRow7RuZyBiw6FvXHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD57dGhpcy5zdGF0ZS5kaWFsb2dDb250ZW50fTwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEjhu6d5XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50LCB0cnVlKX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgxJDhu5NuZyDDvVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBzbT17Nn0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcHRFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RGVwdEVkaXRcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmRlcHRFZGl0fVxyXG4gICAgICAgICAgICAgICAgZGVwdE5hbWVGb2N1c0hhbmRsZXI9e3RoaXMuZGVwdE5hbWVGb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkZXB0TmFtZUNoYW5nZWQ9e3RoaXMuZGVwdE5hbWVDaGFuZ2VkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRlcHREZXNjcmlwdGlvbkZvY3VzSGFuZGxlcj17dGhpcy5kZXB0RGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkZXB0RGVzY3JpcHRpb25DaGFuZ2VkPXt0aGlzLmRlcHREZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGVwdENyZWF0ZUhhbmRsZXI9e3RoaXMuZGVwdENyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkZXB0U2F2ZUhhbmRsZXI9eyhldmVudCkgPT4gdGhpcy5kZXB0U2F2ZUhhbmRsZXIoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHNtPXs2fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwdExpc3Qud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxBdXg+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciA/IHRoaXMucHJvcHMuZXJyb3IubWVzc2FnZSA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPERlcHRMaXN0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBkZXB0RWRpdD17dGhpcy5kZXB0RWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGRlcHREZWxldGU9e3RoaXMuZGVwdERlbGV0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQXV4PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVwdEVkaXQ6IHN0YXRlLmRlcHQuZGVwdEVkaXQsXHJcbiAgICBkZXB0TGlzdDogc3RhdGUuZGVwdC5kZXB0TGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5kZXB0LmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVwdE5hbWVGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlcHROYW1lRm9jdXMoKSksXHJcbiAgICBkZXB0TmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmRlcHROYW1lQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgZGVwdERlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5kZXB0RGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIGRlcHREZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmRlcHREZXNjcmlwdGlvbkNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIGRlcHRDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5kZXB0Q3JlYXRlKCkpLFxyXG4gICAgZGVwdEFkZERpc3BhdGNoOiAoZGVwdCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5kZXB0QWRkKGRlcHQpKSxcclxuICAgIGRlcHRFZGl0RGlzcGF0Y2g6IChkZXB0KSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlcHRFZGl0KGRlcHQpKSxcclxuICAgIGRlcHRVcGRhdGVEaXNwYXRjaDogKGlkLCBkZXB0KSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlcHRVcGRhdGUoaWQsIGRlcHQpKSxcclxuICAgIGRlcHREZWxldGVEaXNwYXRjaDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlcHREZWxldGUoaWQpKSxcclxuICAgIGRlcHRMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZGVwdExpc3QoKSksXHJcbiAgICBkZXB0RXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZGVwdEVycm9ySGFuZGxlZCgpKSxcclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKERlcHRDb250YWluZXIpLCBheGlvcykpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9