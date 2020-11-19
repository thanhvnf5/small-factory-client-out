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
/* harmony import */ var _store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/productTypeAction */ "./src/store/actions/productTypeAction.js");
/* harmony import */ var _store_actions_productAction__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../store/actions/productAction */ "./src/store/actions/productAction.js");
/* harmony import */ var _store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../store/actions/goldTypeAction */ "./src/store/actions/goldTypeAction.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");








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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseProductIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseProductIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseProductIdChangeHandler", function (event, selectedItem, validation) {
      event.preventDefault();
      var productId = null;

      if (selectedItem) {
        productId = selectedItem.id;
      }

      _this.props.purchaseProductIdChangeDispatch(productId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldTypeIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseGoldTypeIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldTypeIdChangeHandler", function (event, selectedItem, validation) {
      event.preventDefault();
      var goldTypeId = null;

      if (selectedItem) {
        goldTypeId = selectedItem.id;
      }

      _this.props.purchaseGoldTypeIdChangeDispatch(goldTypeId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDescriptionFocusHandler", function () {
      _this.props.purchaseDescriptionFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseDescriptionChangedHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseDescriptionChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseWeightFocusHandler", function () {
      _this.props.purchaseWeightFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseWeightChangedHandler", function (event, validation) {
      // event.preventDefault();
      _this.props.purchaseWeightChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseQuantityFocusHandler", function () {
      _this.props.purchaseQuantityFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseQuantityChangedHandler", function (event, validation) {
      // event.preventDefault();
      _this.props.purchaseQuantityChangedDispatch(event.target.value, validation);
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
        goldTypeId: _this.props.purchaseEdit.goldTypeId.value,
        weight: _this.props.purchaseEdit.purchaseWeight.value,
        quantity: _this.props.purchaseEdit.purchaseQuantity.value,
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
          lineNumber: 234,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
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
      this.props.productTypeListDispatch();
      this.props.productListDispatch();
      this.props.goldTypeListDispatch();
      this.props.purchaseListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401 || this.props.productTypeError && this.props.productTypeError.response && this.props.productTypeError.response.status == 401 || this.props.productError && this.props.productError.response && this.props.productError.response.status == 401 || this.props.goldTypeError && this.props.goldTypeError.response && this.props.goldTypeError.response.status == 401) {
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
          lineNumber: 255,
          columnNumber: 7
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 9
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 9
        }
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
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
          lineNumber: 270,
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
          lineNumber: 276,
          columnNumber: 11
        }
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
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
          lineNumber: 283,
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
          lineNumber: 290,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 13
        }
      }, "Nh\u1EADp mua")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 19
        }
      }, this.props.purchaseEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseEdit__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseEdit, {
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        purchaseNameFocusHandler: this.purchaseNameFocusHandler,
        purchaseNameChanged: this.purchaseNameChangedHandler,
        purchaseProductIdChanged: this.purchaseProductIdChangeHandler,
        purchaseProductIdFocusHandler: this.purchaseProductIdFocusHandler,
        purchaseGoldTypeIdChanged: this.purchaseGoldTypeIdChangeHandler,
        purchaseGoldTypeIdFocusHandler: this.purchaseGoldTypeIdFocusHandler,
        purchaseDescriptionFocusHandler: this.purchaseDescriptionFocusHandler,
        purchaseDescriptionChanged: this.purchaseDescriptionChangedHandler,
        purchaseWeightFocusHandler: this.purchaseWeightFocusHandler,
        purchaseWeightChanged: this.purchaseWeightChangedHandler,
        purchaseQuantityFocusHandler: this.purchaseQuantityFocusHandler,
        purchaseQuantityChanged: this.purchaseQuantityChangedHandler,
        purchaseCreateHandler: this.purchaseCreateHandler,
        purchaseSaveHandler: this.purchaseSaveHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseList__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseList, {
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        purchaseEdit: this.purchaseEditHandler,
        purchaseDelete: this.purchaseDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
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
    productTypeList: state.productType.productTypeList,
    productList: state.product.productList,
    goldTypeList: state.goldType.goldTypeList,
    error: state.purchase.error,
    productTypeError: state.productType.error,
    productError: state.product.error,
    goldTypeError: state.goldType.error
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
    purchaseProductIdFocusDispatch: function purchaseProductIdFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseProductIdFocus"]());
    },
    purchaseProductIdChangeDispatch: function purchaseProductIdChangeDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseProductIdChanged"](value, validation));
    },
    purchaseGoldTypeIdFocusDispatch: function purchaseGoldTypeIdFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldTypeIdFocus"]());
    },
    purchaseGoldTypeIdChangeDispatch: function purchaseGoldTypeIdChangeDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldTypeIdChanged"](value, validation));
    },
    purchaseDescriptionFocusDispatch: function purchaseDescriptionFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDescriptionFocus"]());
    },
    purchaseDescriptionChangedDispatch: function purchaseDescriptionChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseDescriptionChanged"](value, validation));
    },
    purchaseWeightFocusDispatch: function purchaseWeightFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseWeightFocus"]());
    },
    purchaseWeightChangedDispatch: function purchaseWeightChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseWeightChanged"](value, validation));
    },
    purchaseQuantityFocusDispatch: function purchaseQuantityFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseQuantityFocus"]());
    },
    purchaseQuantityChangedDispatch: function purchaseQuantityChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseQuantityChanged"](value, validation));
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
    productTypeListDispatch: function productTypeListDispatch() {
      return dispatch(_store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_28__["productTypeList"]());
    },
    productListDispatch: function productListDispatch() {
      return dispatch(_store_actions_productAction__WEBPACK_IMPORTED_MODULE_29__["productList"]());
    },
    goldTypeListDispatch: function goldTypeListDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_30__["goldTypeList"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_31__["logout"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsImlkIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzRGlzcGF0Y2giLCJnb2xkVHlwZUlkIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2giLCJwdXJjaGFzZSIsIm5hbWUiLCJwdXJjaGFzZUVkaXQiLCJwdXJjaGFzZU5hbWUiLCJ3ZWlnaHQiLCJwdXJjaGFzZVdlaWdodCIsInF1YW50aXR5IiwicHVyY2hhc2VRdWFudGl0eSIsImRlc2NyaXB0aW9uIiwicHVyY2hhc2VEZXNjcmlwdGlvbiIsInB1cmNoYXNlQWRkRGlzcGF0Y2giLCJwdXJjaGFzZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJwdXJjaGFzZUVkaXREaXNwYXRjaCIsImlzT0siLCJwdXJjaGFzZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJrZXkiLCJwcm9kdWN0VHlwZUxpc3REaXNwYXRjaCIsInByb2R1Y3RMaXN0RGlzcGF0Y2giLCJnb2xkVHlwZUxpc3REaXNwYXRjaCIsInB1cmNoYXNlTGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsInByb2R1Y3RUeXBlRXJyb3IiLCJwcm9kdWN0RXJyb3IiLCJnb2xkVHlwZUVycm9yIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsImdvbGRUeXBlTGlzdCIsInB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VIYW5kbGVyIiwicHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwicHVyY2hhc2VMaXN0IiwicHVyY2hhc2VFZGl0SGFuZGxlciIsInB1cmNoYXNlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb2R1Y3RUeXBlIiwicHJvZHVjdCIsImdvbGRUeXBlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwicHVyY2hhc2VFcnJvckhhbmRsZWREaXNwYXRjaCIsInByb2R1Y3RUeXBlQWNpb25zIiwicHJvZHVjdEFjaW9ucyIsImdvbGRUeXBlQWNpb25zIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNK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Q0FBQ0MsbUZBQUEsRUFBRCxDQURvQjtBQUFBLEtBdkN6QjtBQTBDTGxELDJCQUF1QixFQUFFO0FBQUEsYUFDdkJpRCxRQUFRLENBQUNHLGlGQUFBLEVBQUQsQ0FEZTtBQUFBLEtBMUNwQjtBQTRDTG5ELHVCQUFtQixFQUFFO0FBQUEsYUFBTWdELFFBQVEsQ0FBQ0kseUVBQUEsRUFBRCxDQUFkO0FBQUEsS0E1Q2hCO0FBNkNMbkQsd0JBQW9CLEVBQUU7QUFBQSxhQUFNK0MsUUFBUSxDQUFDSywyRUFBQSxFQUFELENBQWQ7QUFBQSxLQTdDakI7QUErQ0w1QyxZQUFRLEVBQUU7QUFBQSxhQUFNdUMsUUFBUSxDQUFDTSwyREFBQSxFQUFELENBQWQ7QUFBQTtBQS9DTCxHQUFQO0FBaURELENBbEREOztBQW9EZUMsMkhBQU8sQ0FDcEJaLGVBRG9CLEVBRXBCSSxrQkFGb0IsQ0FBUCxDQUdiUyx3RkFBZ0IsQ0FBQ0MsNEVBQVUsQ0FBQ2pJLE1BQUQsQ0FBVixDQUFtQndCLGlCQUFuQixDQUFELEVBQXdDMEcsd0RBQXhDLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLmJiNjQ4YjUzMjEyNjM5ZjQ0NjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlRWRpdFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHVyY2hhc2VBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWRkZGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIFB1cmNoYXNlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wcm9kdWN0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICh0aGlzLnByb3BzLmVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSlcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLnB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHByb2R1Y3RJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaChwcm9kdWN0SWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBnb2xkVHlwZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZ29sZFR5cGVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2goZ29sZFR5cGVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHVyY2hhc2UgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWx1ZSxcclxuICAgICAgcHJvZHVjdElkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsdWUsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsdWUsXHJcbiAgICAgIHdlaWdodDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudmFsdWUsXHJcbiAgICAgIHF1YW50aXR5OiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VBZGREaXNwYXRjaChwdXJjaGFzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlVXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuaWQsIHB1cmNoYXNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIC8vIGlzT3BlbkFsZXJ0OiB0cnVlLFxyXG4gICAgICBhbGVydENvbnRlbnQ6IFwiTMawdVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFZGl0SGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBwdXJjaGFzZS5pZCA9IHB1cmNoYXNlLmtleTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFZGl0RGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVsZXRlSGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBwdXJjaGFzZS5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuQWxlcnQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHsvKiBFcnJvciBQb3B1cCAqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn0gbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIHsvKiBJbmZvIEFsZXJ0ICovfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW5BbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0Q29udGVudCArIFwiIHRow6BuaCBjw7RuZy5cIn1cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBD4bqjbmggYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxQYXBlcj5OaOG6rXAgbXVhPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Q9e3RoaXMucHJvcHMucHJvZHVjdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRUeXBlTGlzdD17dGhpcy5wcm9wcy5nb2xkVHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcj17dGhpcy5wdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUNoYW5nZWQ9e3RoaXMucHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VRdWFudGl0eUNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VDcmVhdGVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VTYXZlSGFuZGxlcj17dGhpcy5wdXJjaGFzZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVkaXQ9e3RoaXMucHVyY2hhc2VFZGl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VEZWxldGU9e3RoaXMucHVyY2hhc2VEZWxldGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwdXJjaGFzZUVkaXQ6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlRWRpdCxcclxuICAgIHB1cmNoYXNlTGlzdDogc3RhdGUucHVyY2hhc2UucHVyY2hhc2VMaXN0LFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0OiBzdGF0ZS5wcm9kdWN0VHlwZS5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICBwcm9kdWN0TGlzdDogc3RhdGUucHJvZHVjdC5wcm9kdWN0TGlzdCxcclxuICAgIGdvbGRUeXBlTGlzdDogc3RhdGUuZ29sZFR5cGUuZ29sZFR5cGVMaXN0LFxyXG4gICAgZXJyb3I6IHN0YXRlLnB1cmNoYXNlLmVycm9yLFxyXG4gICAgcHJvZHVjdFR5cGVFcnJvcjogc3RhdGUucHJvZHVjdFR5cGUuZXJyb3IsXHJcbiAgICBwcm9kdWN0RXJyb3I6IHN0YXRlLnByb2R1Y3QuZXJyb3IsXHJcbiAgICBnb2xkVHlwZUVycm9yOiBzdGF0ZS5nb2xkVHlwZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VQcm9kdWN0SWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlUXVhbnRpdHlGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUXVhbnRpdHlGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VDcmVhdGUoKSksXHJcbiAgICBwdXJjaGFzZUFkZERpc3BhdGNoOiAocHVyY2hhc2UpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VBZGQocHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVkaXREaXNwYXRjaDogKHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRWRpdChwdXJjaGFzZSkpLFxyXG4gICAgcHVyY2hhc2VVcGRhdGVEaXNwYXRjaDogKGlkLCBwdXJjaGFzZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVVwZGF0ZShpZCwgcHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZWxldGUoaWQpKSxcclxuICAgIHB1cmNoYXNlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTGlzdCgpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRXJyb3JIYW5kbGVkKCkpLFxyXG5cclxuICAgIHByb2R1Y3RUeXBlTGlzdERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0VHlwZUFjaW9ucy5wcm9kdWN0VHlwZUxpc3QoKSksXHJcbiAgICBwcm9kdWN0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChwcm9kdWN0QWNpb25zLnByb2R1Y3RMaXN0KCkpLFxyXG4gICAgZ29sZFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGdvbGRUeXBlQWNpb25zLmdvbGRUeXBlTGlzdCgpKSxcclxuXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShQdXJjaGFzZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=