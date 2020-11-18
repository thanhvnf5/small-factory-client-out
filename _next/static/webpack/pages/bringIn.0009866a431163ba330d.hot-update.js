webpackHotUpdate_N_E("pages/bringIn",{

/***/ "./src/containers/PurchaseContainer/PurchaseContainer.js":
/*!***************************************************************!*\
  !*** ./src/containers/PurchaseContainer/PurchaseContainer.js ***!
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
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Purchase_PurchaseEdit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Purchase/PurchaseEdit */ "./src/components/Purchase/PurchaseEdit.js");
/* harmony import */ var _components_Purchase_PurchaseList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/Purchase/PurchaseList */ "./src/components/Purchase/PurchaseList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/purchaseAction */ "./src/store/actions/purchaseAction.js");
/* harmony import */ var _store_actions_productAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/productAction */ "./src/store/actions/productAction.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");








var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\containers\\PurchaseContainer\\PurchaseContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






















 //import { throws } from 'assert';

/************************************************** styles */

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: "100%"
    },
    grid: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({
      height: "100%",
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "flex-start"
    }, theme.breakpoints.up("sm"), {
      display: "flex",
      flexWrap: "wrap",
      boxSizing: "border-box"
    }),
    list: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({
      height: "50vh",
      border: "1px solid #d9dddd"
    }, theme.breakpoints.up("sm"), {
      height: "90vh"
    }),
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  };
};
/************************************************** Constructor */


var PurchaseContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PurchaseContainer, _Component);

  var _super = _createSuper(PurchaseContainer);

  function PurchaseContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PurchaseContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isDialogOpen: false,
      dialogContent: null,
      isOpenAlert: false,
      alertContent: null,
      selectedItem: null,
      selectedItemType: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseNameFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseNameFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseNameChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseNameChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseProductIdChangeHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseProductIdChangeDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDescriptionFocusHandler", function () {
      _this.props.purchaseDescriptionFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDescriptionChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseDescriptionChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseCreateHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseCreateDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseSaveHandler", function (event) {
      event.preventDefault();
      var purchase = {
        name: _this.props.purchaseEdit.purchaseName.value,
        productId: _this.props.purchaseEdit.productId.value,
        description: _this.props.purchaseEdit.purchaseDescription.value
      };

      if (!_this.props.purchaseEdit.id) {
        _this.props.purchaseAddDispatch(purchase);
      } else {
        _this.props.purchaseUpdateDispatch(_this.props.purchaseEdit.id, purchase);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null,
        // isOpenAlert: true,
        alertContent: "Lưu"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseEditHandler", function (event, purchase) {
      event.preventDefault(); // purchase.id = purchase.key;

      _this.props.purchaseEditDispatch(purchase);

      _this.setState({
        selectedItem: purchase,
        selectedItemType: "edit"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDeleteHandler", function (event, purchase) {
      event.preventDefault();

      _this.setState({
        isDialogOpen: true,
        dialogContent: purchase.name + " sẽ bị xóa?",
        selectedItem: purchase,
        selectedItemType: "delete"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.purchaseDeleteDispatch(_this.state.selectedItem.key);

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
      return __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_19___default.a, {
        handle: "#draggable-dialog-title",
        cancel: '[class*="MuiDialogContent-root"]',
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      })));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCloseAlert", function () {
      _this.setState({
        isOpenAlert: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PurchaseContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.productListDispatch();
      this.props.purchaseListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401) {
        // this.props.purchaseErrorHandledDispatch();
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

      console.log(new Date().toLocaleString() + " ............ PurchaseContainer render");
      var classes = this.props.classes;
      return __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 7
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 9
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 9
        }
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }
      }, this.state.alertContent + " thành công.")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.isDialogOpen,
        onClose: function onClose(event) {
          return _this2.dialogClose(event);
        },
        PaperComponent: this.PaperComponent,
        "aria-labelledby": "draggable-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
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
          lineNumber: 219,
          columnNumber: 11
        }
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
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
          lineNumber: 226,
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
          lineNumber: 233,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 13
        }
      }, "Nh\u1EADp mua")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 19
        }
      }, this.props.purchaseEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseEdit__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseEdit, {
        productList: this.props.productList,
        purchaseNameFocusHandler: this.purchaseNameFocusHandler,
        purchaseNameChanged: this.purchaseNameChangedHandler,
        purchaseProductIdChanged: this.purchaseProductIdChangeHandler,
        purchaseDescriptionFocusHandler: this.purchaseDescriptionFocusHandler,
        purchaseDescriptionChanged: this.purchaseDescriptionChangedHandler,
        purchaseCreateHandler: this.purchaseCreateHandler,
        purchaseSaveHandler: this.purchaseSaveHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseList__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseList, {
        productList: this.props.productList,
        purchaseEdit: this.purchaseEditHandler,
        purchaseDelete: this.purchaseDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 23
        }
      })))))))));
    }
  }]);

  return PurchaseContainer;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    purchaseEdit: state.purchase.purchaseEdit,
    purchaseList: state.purchase.purchaseList,
    productList: state.product.productList,
    error: state.purchase.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    purchaseNameFocusDispatch: function purchaseNameFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseNameFocus"]());
    },
    purchaseNameChangedDispatch: function purchaseNameChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseNameChanged"](value, validation));
    },
    purchaseProductIdChangeDispatch: function purchaseProductIdChangeDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseProductIdChanged"](value, validation));
    },
    purchaseDescriptionFocusDispatch: function purchaseDescriptionFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDescriptionFocus"]());
    },
    purchaseDescriptionChangedDispatch: function purchaseDescriptionChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDescriptionChanged"](value, validation));
    },
    purchaseCreateDispatch: function purchaseCreateDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseCreate"]());
    },
    purchaseAddDispatch: function purchaseAddDispatch(purchase) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseAdd"](purchase));
    },
    purchaseEditDispatch: function purchaseEditDispatch(purchase) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseEdit"](purchase));
    },
    purchaseUpdateDispatch: function purchaseUpdateDispatch(id, purchase) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseUpdate"](id, purchase));
    },
    purchaseDeleteDispatch: function purchaseDeleteDispatch(id) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDelete"](id));
    },
    purchaseListDispatch: function purchaseListDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseList"]());
    },
    purchaseErrorHandledDispatch: function purchaseErrorHandledDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseErrorHandled"]());
    },
    productListDispatch: function productListDispatch() {
      return dispatch(_store_actions_productAction__WEBPACK_IMPORTED_MODULE_28__["productList"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_29__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(PurchaseContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUNyZWF0ZURpc3BhdGNoIiwicHVyY2hhc2UiLCJuYW1lIiwicHVyY2hhc2VFZGl0IiwicHVyY2hhc2VOYW1lIiwicHJvZHVjdElkIiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZURlc2NyaXB0aW9uIiwiaWQiLCJwdXJjaGFzZUFkZERpc3BhdGNoIiwicHVyY2hhc2VVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwicHVyY2hhc2VFZGl0RGlzcGF0Y2giLCJpc09LIiwicHVyY2hhc2VEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwia2V5IiwicHJvZHVjdExpc3REaXNwYXRjaCIsInB1cmNoYXNlTGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsIm9uTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJlcnJvckNvbmZpcm1lZEhhbmRsZXIiLCJtZXNzYWdlIiwiaGFuZGxlQ2xvc2VBbGVydCIsImRpYWxvZ0Nsb3NlIiwiUGFwZXJDb21wb25lbnQiLCJjdXJzb3IiLCJ3YWl0aW5nIiwicHJvZHVjdExpc3QiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwicHVyY2hhc2VMaXN0IiwicHVyY2hhc2VFZGl0SGFuZGxlciIsInB1cmNoYXNlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb2R1Y3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJwdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoIiwicHJvZHVjdEFjaW9ucyIsImF1dGhBY3Rpb25zIiwiY29ubmVjdCIsIndpdGhFcnJvckhhbmRsZXIiLCJ3aXRoU3R5bGVzIiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTRCLEVBQUU7QUFBQSxhQUM1QkYsUUFBUSxDQUFDQyxtRkFBQSxFQUFELENBRG9CO0FBQUEsS0FsQnpCO0FBb0JMbEMsdUJBQW1CLEVBQUU7QUFBQSxhQUFNaUMsUUFBUSxDQUFDRyx5RUFBQSxFQUFELENBQWQ7QUFBQSxLQXBCaEI7QUFxQkwvQixZQUFRLEVBQUU7QUFBQSxhQUFNNEIsUUFBUSxDQUFDSSwyREFBQSxFQUFELENBQWQ7QUFBQTtBQXJCTCxHQUFQO0FBdUJELENBeEJEOztBQTBCZUMsMkhBQU8sQ0FDcEJSLGVBRG9CLEVBRXBCRSxrQkFGb0IsQ0FBUCxDQUdiTyx3RkFBZ0IsQ0FBQ0MsNEVBQVUsQ0FBQ25HLE1BQUQsQ0FBVixDQUFtQndCLGlCQUFuQixDQUFELEVBQXdDNEUsd0RBQXhDLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLjAwMDk4NjZhNDMxMTYzYmEzMzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlRWRpdFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHVyY2hhc2VBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWRkZGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIFB1cmNoYXNlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5wcm9kdWN0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuZXJyb3IgJiZcclxuICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDFcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLnB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZURpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHB1cmNoYXNlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudmFsdWUsXHJcbiAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHJvZHVjdElkLnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VBZGREaXNwYXRjaChwdXJjaGFzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlVXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuaWQsIHB1cmNoYXNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIC8vIGlzT3BlbkFsZXJ0OiB0cnVlLFxyXG4gICAgICBhbGVydENvbnRlbnQ6IFwiTMawdVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFZGl0SGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBwdXJjaGFzZS5pZCA9IHB1cmNoYXNlLmtleTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFZGl0RGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVsZXRlSGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBwdXJjaGFzZS5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuQWxlcnQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHsvKiBFcnJvciBQb3B1cCAqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn0gbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIHsvKiBJbmZvIEFsZXJ0ICovfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW5BbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0Q29udGVudCArIFwiIHRow6BuaCBjw7RuZy5cIn1cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBD4bqjbmggYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxQYXBlcj5OaOG6rXAgbXVhPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Q9e3RoaXMucHJvcHMucHJvZHVjdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcj17dGhpcy5wdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUNoYW5nZWQ9e3RoaXMucHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUNyZWF0ZUhhbmRsZXI9e3RoaXMucHVyY2hhc2VDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVNhdmVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlU2F2ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VMaXN0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Q9e3RoaXMucHJvcHMucHJvZHVjdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRWRpdD17dGhpcy5wdXJjaGFzZUVkaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlbGV0ZT17dGhpcy5wdXJjaGFzZURlbGV0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlRWRpdDogc3RhdGUucHVyY2hhc2UucHVyY2hhc2VFZGl0LFxyXG4gICAgcHVyY2hhc2VMaXN0OiBzdGF0ZS5wdXJjaGFzZS5wdXJjaGFzZUxpc3QsXHJcbiAgICBwcm9kdWN0TGlzdDogc3RhdGUucHJvZHVjdC5wcm9kdWN0TGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5wdXJjaGFzZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIHB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VDcmVhdGUoKSksXHJcbiAgICBwdXJjaGFzZUFkZERpc3BhdGNoOiAocHVyY2hhc2UpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VBZGQocHVyY2hhc2UpKSxcclxuICAgIHB1cmNoYXNlRWRpdERpc3BhdGNoOiAocHVyY2hhc2UpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFZGl0KHB1cmNoYXNlKSksXHJcbiAgICBwdXJjaGFzZVVwZGF0ZURpc3BhdGNoOiAoaWQsIHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlVXBkYXRlKGlkLCBwdXJjaGFzZSkpLFxyXG4gICAgcHVyY2hhc2VEZWxldGVEaXNwYXRjaDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVsZXRlKGlkKSksXHJcbiAgICBwdXJjaGFzZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUxpc3QoKSksXHJcbiAgICBwdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRXJyb3JIYW5kbGVkKCkpLFxyXG4gICAgcHJvZHVjdExpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2gocHJvZHVjdEFjaW9ucy5wcm9kdWN0TGlzdCgpKSxcclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKFB1cmNoYXNlQ29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==