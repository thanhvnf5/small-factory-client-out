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
/* harmony import */ var _store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/deptAction */ "./src/store/actions/deptAction.js");
/* harmony import */ var _store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../store/actions/employeeAction */ "./src/store/actions/employeeAction.js");
/* harmony import */ var _store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../store/actions/productTypeAction */ "./src/store/actions/productTypeAction.js");
/* harmony import */ var _store_actions_productAction__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../store/actions/productAction */ "./src/store/actions/productAction.js");
/* harmony import */ var _store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../store/actions/goldTypeAction */ "./src/store/actions/goldTypeAction.js");
/* harmony import */ var _store_actions_goldUnitAction__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../store/actions/goldUnitAction */ "./src/store/actions/goldUnitAction.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");








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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseEmployeeIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseEmployeeIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseEmployeeIdChangeHandler", function (event, selectedItem, validation) {
      event.preventDefault();
      var employeeId = null;

      if (selectedItem) {
        employeeId = selectedItem.id;
      }

      _this.props.purchaseEmployeeIdChangeDispatch(employeeId, validation);
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldUnitIdFocusHandler", function () {
      _this.props.purchaseGoldUnitIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldUnitIdChangedHandler", function (event, validation) {
      // event.preventDefault();
      _this.props.purchaseGoldUnitIdChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseQuantityFocusHandler", function () {
      _this.props.purchaseQuantityFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseQuantityChangedHandler", function (event, validation) {
      // event.preventDefault();
      _this.props.purchaseQuantityChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseInputDateFocusHandler", function () {
      _this.props.purchaseInputDateFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseInputDateChangedHandler", function (event, validation) {
      // event.preventDefault();
      _this.props.purchaseInputDateChangedDispatch(event.target.value, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseCreateHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseCreateDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseSaveHandler", function (event) {
      event.preventDefault();
      var purchase = {
        name: _this.props.purchaseEdit.purchaseName.value,
        employeeId: _this.props.purchaseEdit.employeeId.value,
        productId: _this.props.purchaseEdit.productId.value,
        goldTypeId: _this.props.purchaseEdit.goldTypeId.value,
        weight: _this.props.purchaseEdit.purchaseWeight.value,
        goldUnitId: _this.props.purchaseEdit.goldUnitId.value,
        quantity: _this.props.purchaseEdit.purchaseQuantity.value,
        inputDate: _this.props.purchaseEdit.purchaseInputDate.value,
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
          lineNumber: 284,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
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
      this.props.deptListDispatch();
      this.props.employeeListDispatch();
      this.props.productTypeListDispatch();
      this.props.productListDispatch();
      this.props.goldTypeListDispatch();
      this.props.goldUnitListDispatch();
      this.props.purchaseListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401 || this.props.deptError && this.props.deptError.response && this.props.deptError.response.status == 401 || this.props.employeeError && this.props.employeeError.response && this.props.employeeError.response.status == 401 || this.props.productTypeError && this.props.productTypeError.response && this.props.productTypeError.response.status == 401 || this.props.productError && this.props.productError.response && this.props.productError.response.status == 401 || this.props.goldTypeError && this.props.goldTypeError.response && this.props.goldTypeError.response.status == 401) {
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
          lineNumber: 305,
          columnNumber: 7
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 9
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 9
        }
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
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
          lineNumber: 320,
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
          lineNumber: 326,
          columnNumber: 11
        }
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
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
          lineNumber: 333,
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
          lineNumber: 340,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 13
        }
      }, "Nh\u1EADp mua")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 19
        }
      }, this.props.purchaseEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseEdit__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseEdit, {
        deptList: this.props.deptList,
        employeeList: this.props.employeeList,
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        purchaseNameFocusHandler: this.purchaseNameFocusHandler,
        purchaseNameChanged: this.purchaseNameChangedHandler,
        purchaseEmployeeIdChanged: this.purchaseEmployeeIdChangeHandler,
        purchaseEmployeeIdFocusHandler: this.purchaseEmployeeIdFocusHandler,
        purchaseProductIdChanged: this.purchaseProductIdChangeHandler,
        purchaseProductIdFocusHandler: this.purchaseProductIdFocusHandler,
        purchaseGoldTypeIdChanged: this.purchaseGoldTypeIdChangeHandler,
        purchaseGoldTypeIdFocusHandler: this.purchaseGoldTypeIdFocusHandler,
        purchaseDescriptionFocusHandler: this.purchaseDescriptionFocusHandler,
        purchaseDescriptionChanged: this.purchaseDescriptionChangedHandler,
        purchaseWeightFocusHandler: this.purchaseWeightFocusHandler,
        purchaseWeightChanged: this.purchaseWeightChangedHandler,
        purchaseGoldUnitIdFocusHandler: this.purchaseGoldUnitIdFocusHandler,
        purchaseGoldUnitIdChanged: this.purchaseGoldUnitIdChangedHandler,
        purchaseQuantityFocusHandler: this.purchaseQuantityFocusHandler,
        purchaseQuantityChanged: this.purchaseQuantityChangedHandler,
        purchaseInputDateFocusHandler: this.purchaseInputDateFocusHandler,
        purchaseInputDateChanged: this.purchaseInputDateChangedHandler,
        purchaseCreateHandler: this.purchaseCreateHandler,
        purchaseSaveHandler: this.purchaseSaveHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseList__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseList, {
        deptList: this.props.deptList,
        employeeList: this.props.employeeList,
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        purchaseEdit: this.purchaseEditHandler,
        purchaseDelete: this.purchaseDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
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
    deptList: state.dept.deptList,
    employeeList: state.employee.employeeList,
    productTypeList: state.productType.productTypeList,
    productList: state.product.productList,
    goldTypeList: state.goldType.goldTypeList,
    error: state.purchase.error,
    deptError: state.dept.error,
    employeeError: state.employee.error,
    productTypeError: state.productType.error,
    productError: state.product.error,
    goldTypeError: state.goldType.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var _ref;

  return _ref = {
    purchaseNameFocusDispatch: function purchaseNameFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseNameFocus"]());
    },
    purchaseNameChangedDispatch: function purchaseNameChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseNameChanged"](value, validation));
    },
    purchaseEmployeeIdFocusDispatch: function purchaseEmployeeIdFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseEmployeeIdFocus"]());
    },
    purchaseEmployeeIdChangeDispatch: function purchaseEmployeeIdChangeDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseEmployeeIdChanged"](value, validation));
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
    purchaseGoldUnitIdFocusDispatch: function purchaseGoldUnitIdFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldUnitIdFocus"]());
    },
    purchaseGoldUnitIdChangedDispatch: function purchaseGoldUnitIdChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldUnitIdChanged"](value, validation));
    },
    purchaseQuantityFocusDispatch: function purchaseQuantityFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseQuantityFocus"]());
    },
    purchaseQuantityChangedDispatch: function purchaseQuantityChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseQuantityChanged"](value, validation));
    },
    purchaseInputDateFocusDispatch: function purchaseInputDateFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseInputDateFocus"]());
    },
    purchaseInputDateChangedDispatch: function purchaseInputDateChangedDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseInputDateChanged"](value, validation));
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
    deptListDispatch: function deptListDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptList"]());
    },
    employeeListDispatch: function employeeListDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_29__["employeeList"]());
    },
    goldTypeListDispatch: function goldTypeListDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_32__["goldTypeList"]());
    },
    productTypeListDispatch: function productTypeListDispatch() {
      return dispatch(_store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_30__["productTypeList"]());
    },
    productListDispatch: function productListDispatch() {
      return dispatch(_store_actions_productAction__WEBPACK_IMPORTED_MODULE_31__["productList"]());
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "goldTypeListDispatch", function goldTypeListDispatch() {
    return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_32__["goldTypeList"]());
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "onLogout", function onLogout() {
    return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_34__["logout"]());
  }), _ref;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZUlkIiwiaWQiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoIiwiZ29sZFR5cGVJZCIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUNyZWF0ZURpc3BhdGNoIiwicHVyY2hhc2UiLCJuYW1lIiwicHVyY2hhc2VFZGl0IiwicHVyY2hhc2VOYW1lIiwid2VpZ2h0IiwicHVyY2hhc2VXZWlnaHQiLCJnb2xkVW5pdElkIiwicXVhbnRpdHkiLCJwdXJjaGFzZVF1YW50aXR5IiwiaW5wdXREYXRlIiwicHVyY2hhc2VJbnB1dERhdGUiLCJkZXNjcmlwdGlvbiIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJwdXJjaGFzZUFkZERpc3BhdGNoIiwicHVyY2hhc2VVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwicHVyY2hhc2VFZGl0RGlzcGF0Y2giLCJpc09LIiwicHVyY2hhc2VEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwia2V5IiwiZGVwdExpc3REaXNwYXRjaCIsImVtcGxveWVlTGlzdERpc3BhdGNoIiwicHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2giLCJwcm9kdWN0TGlzdERpc3BhdGNoIiwiZ29sZFR5cGVMaXN0RGlzcGF0Y2giLCJnb2xkVW5pdExpc3REaXNwYXRjaCIsInB1cmNoYXNlTGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlcHRFcnJvciIsImVtcGxveWVlRXJyb3IiLCJwcm9kdWN0VHlwZUVycm9yIiwicHJvZHVjdEVycm9yIiwiZ29sZFR5cGVFcnJvciIsIm9uTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJlcnJvckNvbmZpcm1lZEhhbmRsZXIiLCJtZXNzYWdlIiwiaGFuZGxlQ2xvc2VBbGVydCIsImRpYWxvZ0Nsb3NlIiwiUGFwZXJDb21wb25lbnQiLCJjdXJzb3IiLCJ3YWl0aW5nIiwiZGVwdExpc3QiLCJlbXBsb3llZUxpc3QiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsImdvbGRUeXBlTGlzdCIsInB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0Q2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwicHVyY2hhc2VMaXN0IiwicHVyY2hhc2VFZGl0SGFuZGxlciIsInB1cmNoYXNlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImRlcHQiLCJlbXBsb3llZSIsInByb2R1Y3RUeXBlIiwicHJvZHVjdCIsImdvbGRUeXBlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwicHVyY2hhc2VFcnJvckhhbmRsZWREaXNwYXRjaCIsImRlcHRBY2lvbnMiLCJlbXBsb3llZUFjaW9ucyIsImdvbGRUeXBlQWNpb25zIiwicHJvZHVjdFR5cGVBY2lvbnMiLCJwcm9kdWN0QWNpb25zIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNKRCxZQUFNLEVBQUUsTUFETjtBQUVGRSxXQUFLLEVBQUUsTUFGTDtBQUdGQyxnQkFBVSxFQUFFLFlBSFY7QUFJRkMsb0JBQWMsRUFBRTtBQUpkLE9BS0RQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FMQyxFQUs0QjtBQUM1QkMsYUFBTyxFQUFFLE1BRG1CO0FBRTVCQyxjQUFRLEVBQUUsTUFGa0I7QUFHNUJDLGVBQVMsRUFBRTtBQUhpQixLQUw1QixDQUxxQjtBQWdCekJDLFFBQUksRUFBRTtBQUNKVixZQUFN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LGtCQUZvQixDQUFQLENBR2JXLHdGQUFnQixDQUFDQyw0RUFBVSxDQUFDNUosTUFBRCxDQUFWLENBQW1Cd0IsaUJBQW5CLENBQUQsRUFBd0NxSSx3REFBeEMsQ0FISCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JyaW5nSW4uZTQ4Y2QxMzI2Zjg3YjkzNzdkYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFNuYWNrYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQdXJjaGFzZUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0XCI7XHJcbmltcG9ydCBQdXJjaGFzZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXJcIjtcclxuaW1wb3J0IHdpdGhFcnJvckhhbmRsZXIgZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEVycm9ySGFuZGxlci93aXRoRXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wdXJjaGFzZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBkZXB0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2RlcHRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZW1wbG95ZWVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZW1wbG95ZWVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRVbml0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRVbml0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWRkZGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIFB1cmNoYXNlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5kZXB0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnByb2R1Y3RUeXBlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnByb2R1Y3RMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZ29sZFVuaXRMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgKHRoaXMucHJvcHMuZXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5kZXB0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmRlcHRFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSlcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLnB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUVtcGxveWVlSWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtcGxveWVlSWQgPSBudWxsO1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICBlbXBsb3llZUlkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaChlbXBsb3llZUlkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBzZWxlY3RlZEl0ZW0sIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHJvZHVjdElkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgcHJvZHVjdElkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZURpc3BhdGNoKHByb2R1Y3RJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGdvbGRUeXBlSWQgPSBudWxsO1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICBnb2xkVHlwZUlkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VEaXNwYXRjaChnb2xkVHlwZUlkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaChcclxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB2YWxpZGF0aW9uXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFVuaXRJZEZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUlucHV0RGF0ZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHVyY2hhc2UgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWx1ZSxcclxuICAgICAgZW1wbG95ZWVJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuZW1wbG95ZWVJZC52YWx1ZSxcclxuICAgICAgcHJvZHVjdElkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsdWUsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsdWUsXHJcbiAgICAgIHdlaWdodDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudmFsdWUsXHJcbiAgICAgIGdvbGRVbml0SWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudmFsdWUsXHJcbiAgICAgIHF1YW50aXR5OiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LnZhbHVlLFxyXG4gICAgICBpbnB1dERhdGU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VBZGREaXNwYXRjaChwdXJjaGFzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlVXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuaWQsIHB1cmNoYXNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIC8vIGlzT3BlbkFsZXJ0OiB0cnVlLFxyXG4gICAgICBhbGVydENvbnRlbnQ6IFwiTMawdVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFZGl0SGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBwdXJjaGFzZS5pZCA9IHB1cmNoYXNlLmtleTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFZGl0RGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVsZXRlSGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBwdXJjaGFzZS5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuQWxlcnQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHsvKiBFcnJvciBQb3B1cCAqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn0gbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIHsvKiBJbmZvIEFsZXJ0ICovfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW5BbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0Q29udGVudCArIFwiIHRow6BuaCBjw7RuZy5cIn1cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBD4bqjbmggYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxQYXBlcj5OaOG6rXAgbXVhPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdExpc3Q9e3RoaXMucHJvcHMuZGVwdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTGlzdD17dGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXI9e3RoaXMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkPXt0aGlzLnB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUNyZWF0ZUhhbmRsZXI9e3RoaXMucHVyY2hhc2VDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVNhdmVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlU2F2ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VMaXN0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdExpc3Q9e3RoaXMucHJvcHMuZGVwdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTGlzdD17dGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVkaXQ9e3RoaXMucHVyY2hhc2VFZGl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VEZWxldGU9e3RoaXMucHVyY2hhc2VEZWxldGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwdXJjaGFzZUVkaXQ6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlRWRpdCxcclxuICAgIHB1cmNoYXNlTGlzdDogc3RhdGUucHVyY2hhc2UucHVyY2hhc2VMaXN0LFxyXG4gICAgZGVwdExpc3Q6IHN0YXRlLmRlcHQuZGVwdExpc3QsXHJcbiAgICBlbXBsb3llZUxpc3Q6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlTGlzdCxcclxuICAgIHByb2R1Y3RUeXBlTGlzdDogc3RhdGUucHJvZHVjdFR5cGUucHJvZHVjdFR5cGVMaXN0LFxyXG4gICAgcHJvZHVjdExpc3Q6IHN0YXRlLnByb2R1Y3QucHJvZHVjdExpc3QsXHJcbiAgICBnb2xkVHlwZUxpc3Q6IHN0YXRlLmdvbGRUeXBlLmdvbGRUeXBlTGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5wdXJjaGFzZS5lcnJvcixcclxuICAgIGRlcHRFcnJvcjogc3RhdGUuZGVwdC5lcnJvcixcclxuICAgIGVtcGxveWVlRXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gICAgcHJvZHVjdFR5cGVFcnJvcjogc3RhdGUucHJvZHVjdFR5cGUuZXJyb3IsXHJcbiAgICBwcm9kdWN0RXJyb3I6IHN0YXRlLnByb2R1Y3QuZXJyb3IsXHJcbiAgICBnb2xkVHlwZUVycm9yOiBzdGF0ZS5nb2xkVHlwZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVtcGxveWVlSWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VXZWlnaHRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VHb2xkVW5pdElkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRVbml0SWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVF1YW50aXR5Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VJbnB1dERhdGVGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUNyZWF0ZSgpKSxcclxuICAgIHB1cmNoYXNlQWRkRGlzcGF0Y2g6IChwdXJjaGFzZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUFkZChwdXJjaGFzZSkpLFxyXG5cclxuICAgIHB1cmNoYXNlRWRpdERpc3BhdGNoOiAocHVyY2hhc2UpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFZGl0KHB1cmNoYXNlKSksXHJcbiAgICBwdXJjaGFzZVVwZGF0ZURpc3BhdGNoOiAoaWQsIHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlVXBkYXRlKGlkLCBwdXJjaGFzZSkpLFxyXG5cclxuICAgIHB1cmNoYXNlRGVsZXRlRGlzcGF0Y2g6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlbGV0ZShpZCkpLFxyXG4gICAgcHVyY2hhc2VMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VMaXN0KCkpLFxyXG5cclxuICAgIHB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFcnJvckhhbmRsZWQoKSksXHJcblxyXG4gICAgZGVwdExpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZGVwdEFjaW9ucy5kZXB0TGlzdCgpKSxcclxuICAgIGVtcGxveWVlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChlbXBsb3llZUFjaW9ucy5lbXBsb3llZUxpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RUeXBlQWNpb25zLnByb2R1Y3RUeXBlTGlzdCgpKSxcclxuICAgIHByb2R1Y3RMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKHByb2R1Y3RBY2lvbnMucHJvZHVjdExpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG5cclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKFB1cmNoYXNlQ29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==