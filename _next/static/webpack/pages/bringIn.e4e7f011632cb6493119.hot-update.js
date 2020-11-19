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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsImlkIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzRGlzcGF0Y2giLCJnb2xkVHlwZUlkIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2giLCJwdXJjaGFzZSIsIm5hbWUiLCJwdXJjaGFzZUVkaXQiLCJwdXJjaGFzZU5hbWUiLCJ3ZWlnaHQiLCJwdXJjaGFzZVdlaWdodCIsInF1YW50aXR5IiwicHVyY2hhc2VRdWFudGl0eSIsImRlc2NyaXB0aW9uIiwicHVyY2hhc2VEZXNjcmlwdGlvbiIsInB1cmNoYXNlQWRkRGlzcGF0Y2giLCJwdXJjaGFzZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJwdXJjaGFzZUVkaXREaXNwYXRjaCIsImlzT0siLCJwdXJjaGFzZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJrZXkiLCJwcm9kdWN0VHlwZUxpc3REaXNwYXRjaCIsInByb2R1Y3RMaXN0RGlzcGF0Y2giLCJnb2xkVHlwZUxpc3REaXNwYXRjaCIsInB1cmNoYXNlTGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsInByb2R1Y3RUeXBlRXJyb3IiLCJwcm9kdWN0RXJyb3IiLCJnb2xkVHlwZUVycm9yIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsImdvbGRUeXBlTGlzdCIsInB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VIYW5kbGVyIiwicHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwicHVyY2hhc2VMaXN0IiwicHVyY2hhc2VFZGl0SGFuZGxlciIsInB1cmNoYXNlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb2R1Y3RUeXBlIiwicHJvZHVjdCIsImdvbGRUeXBlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwicHVyY2hhc2VFcnJvckhhbmRsZWREaXNwYXRjaCIsInByb2R1Y3RUeXBlQWNpb25zIiwicHJvZHVjdEFjaW9ucyIsImdvbGRUeXBlQWNpb25zIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNK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RCwyQkFBdUIsRUFBRTtBQUFBLGFBQ3ZCaUQsUUFBUSxDQUFDRyxpRkFBQSxFQUFELENBRGU7QUFBQSxLQTFDcEI7QUE0Q0xuRCx1QkFBbUIsRUFBRTtBQUFBLGFBQU1nRCxRQUFRLENBQUNJLHlFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBNUNoQjtBQTZDTG5ELHdCQUFvQixFQUFFO0FBQUEsYUFBTStDLFFBQVEsQ0FBQ0ssMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0E3Q2pCO0FBK0NMNUMsWUFBUSxFQUFFO0FBQUEsYUFBTXVDLFFBQVEsQ0FBQ00sMkRBQUEsRUFBRCxDQUFkO0FBQUE7QUEvQ0wsR0FBUDtBQWlERCxDQWxERDs7QUFvRGVDLDJIQUFPLENBQ3BCWixlQURvQixFQUVwQkksa0JBRm9CLENBQVAsQ0FHYlMsd0ZBQWdCLENBQUNDLDRFQUFVLENBQUNqSSxNQUFELENBQVYsQ0FBbUJ3QixpQkFBbkIsQ0FBRCxFQUF3QzBHLHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi5lNGU3ZjAxMTYzMmNiNjQ5MzExOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFB1cmNoYXNlRWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUVkaXRcIjtcclxuaW1wb3J0IFB1cmNoYXNlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3B1cmNoYXNlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBnb2xkVHlwZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9nb2xkVHlwZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcblxyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDlkZGRkXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcblxyXG5jbGFzcyBQdXJjaGFzZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIGlzT3BlbkFsZXJ0OiBmYWxzZSxcclxuICAgIGFsZXJ0Q29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVHlwZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5wcm9wcy5lcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLnByb2R1Y3RUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RUeXBlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RUeXBlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMucHJvZHVjdEVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5nb2xkVHlwZUVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZUVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpXHJcbiAgICApIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5wdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBwcm9kdWN0SWQgPSBudWxsO1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICBwcm9kdWN0SWQgPSBzZWxlY3RlZEl0ZW0uaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2gocHJvZHVjdElkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBzZWxlY3RlZEl0ZW0sIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZ29sZFR5cGVJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIGdvbGRUeXBlSWQgPSBzZWxlY3RlZEl0ZW0uaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoKGdvbGRUeXBlSWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoKFxyXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIHZhbGlkYXRpb25cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHB1cmNoYXNlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudmFsdWUsXHJcbiAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHJvZHVjdElkLnZhbHVlLFxyXG4gICAgICBnb2xkVHlwZUlkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnZhbHVlLFxyXG4gICAgICB3ZWlnaHQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnZhbHVlLFxyXG4gICAgICBxdWFudGl0eTogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5pZCkge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlQWRkRGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5wdXJjaGFzZVVwZGF0ZURpc3BhdGNoKHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkLCBwdXJjaGFzZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICAvLyBpc09wZW5BbGVydDogdHJ1ZSxcclxuICAgICAgYWxlcnRDb250ZW50OiBcIkzGsHVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRWRpdEhhbmRsZXIgPSAoZXZlbnQsIHB1cmNoYXNlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gcHVyY2hhc2UuaWQgPSBwdXJjaGFzZS5rZXk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdERpc3BhdGNoKHB1cmNoYXNlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IHB1cmNoYXNlLCBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIiB9KTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlbGV0ZUhhbmRsZXIgPSAoZXZlbnQsIHB1cmNoYXNlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgZGlhbG9nQ29udGVudDogcHVyY2hhc2UubmFtZSArIFwiIHPhur0gYuG7iyB4w7NhP1wiLFxyXG4gICAgICBzZWxlY3RlZEl0ZW06IHB1cmNoYXNlLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZGlhbG9nQ2xvc2UgPSAoZXZlbnQsIGlzT0spID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNPSykge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVsZXRlRGlzcGF0Y2godGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ua2V5KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQYXBlckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgIGhhbmRsZT1cIiNkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBjYW5jZWw9eydbY2xhc3MqPVwiTXVpRGlhbG9nQ29udGVudC1yb290XCJdJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxQYXBlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUFsZXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbkFsZXJ0OiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gUHVyY2hhc2VDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICB7LyogRXJyb3IgUG9wdXAgKi99XHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMucHJvcHMuZXJyb3J9IG1vZGFsQ2xvc2VkPXt0aGlzLmVycm9yQ29uZmlybWVkSGFuZGxlcn0+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciA/IHRoaXMucHJvcHMuZXJyb3IubWVzc2FnZSA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICB7LyogSW5mbyBBbGVydCAqL31cclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNPcGVuQWxlcnR9XHJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9XHJcbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGVydENvbnRlbnQgKyBcIiB0aMOgbmggY8O0bmcuXCJ9XHJcbiAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgQ+G6o25oIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8UGFwZXI+Tmjhuq1wIG11YTwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXI9e3RoaXMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkPXt0aGlzLnB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVdlaWdodENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlQ3JlYXRlSGFuZGxlcj17dGhpcy5wdXJjaGFzZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlU2F2ZUhhbmRsZXI9e3RoaXMucHVyY2hhc2VTYXZlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wdXJjaGFzZUxpc3Qud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxQdXJjaGFzZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMucHVyY2hhc2VMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFZGl0PXt0aGlzLnB1cmNoYXNlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVsZXRlPXt0aGlzLnB1cmNoYXNlRGVsZXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHVyY2hhc2VFZGl0OiBzdGF0ZS5wdXJjaGFzZS5wdXJjaGFzZUVkaXQsXHJcbiAgICBwdXJjaGFzZUxpc3Q6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlTGlzdCxcclxuICAgIHByb2R1Y3RUeXBlTGlzdDogc3RhdGUucHJvZHVjdFR5cGUucHJvZHVjdFR5cGVMaXN0LFxyXG4gICAgcHJvZHVjdExpc3Q6IHN0YXRlLnByb2R1Y3QucHJvZHVjdExpc3QsXHJcbiAgICBnb2xkVHlwZUxpc3Q6IHN0YXRlLmdvbGRUeXBlLmdvbGRUeXBlTGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5wdXJjaGFzZS5lcnJvcixcclxuICAgIHByb2R1Y3RUeXBlRXJyb3I6IHN0YXRlLnByb2R1Y3RUeXBlLmVycm9yLFxyXG4gICAgcHJvZHVjdEVycm9yOiBzdGF0ZS5wcm9kdWN0LmVycm9yLFxyXG4gICAgZ29sZFR5cGVFcnJvcjogc3RhdGUuZ29sZFR5cGUuZXJyb3IsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTmFtZUZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUHJvZHVjdElkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlV2VpZ2h0Rm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVdlaWdodEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVdlaWdodENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVF1YW50aXR5Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUNyZWF0ZURpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlQ3JlYXRlKCkpLFxyXG4gICAgcHVyY2hhc2VBZGREaXNwYXRjaDogKHB1cmNoYXNlKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlQWRkKHB1cmNoYXNlKSksXHJcblxyXG4gICAgcHVyY2hhc2VFZGl0RGlzcGF0Y2g6IChwdXJjaGFzZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVkaXQocHVyY2hhc2UpKSxcclxuICAgIHB1cmNoYXNlVXBkYXRlRGlzcGF0Y2g6IChpZCwgcHVyY2hhc2UpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VVcGRhdGUoaWQsIHB1cmNoYXNlKSksXHJcblxyXG4gICAgcHVyY2hhc2VEZWxldGVEaXNwYXRjaDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVsZXRlKGlkKSksXHJcbiAgICBwdXJjaGFzZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUxpc3QoKSksXHJcblxyXG4gICAgcHVyY2hhc2VFcnJvckhhbmRsZWREaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVycm9ySGFuZGxlZCgpKSxcclxuXHJcbiAgICBwcm9kdWN0VHlwZUxpc3REaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2gocHJvZHVjdFR5cGVBY2lvbnMucHJvZHVjdFR5cGVMaXN0KCkpLFxyXG4gICAgcHJvZHVjdExpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2gocHJvZHVjdEFjaW9ucy5wcm9kdWN0TGlzdCgpKSxcclxuICAgIGdvbGRUeXBlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChnb2xkVHlwZUFjaW9ucy5nb2xkVHlwZUxpc3QoKSksXHJcblxyXG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEVycm9ySGFuZGxlcih3aXRoU3R5bGVzKHN0eWxlcykoUHVyY2hhc2VDb250YWluZXIpLCBheGlvcykpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9