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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldUnitFocusHandler", function () {
      _this.props.purchaseGoldUnitFocusDispatch();
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
          lineNumber: 287,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
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
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401 || this.props.deptError && this.props.deptError.response && this.props.deptError.response.status == 401 || this.props.employeeError && this.props.employeeError.response && this.props.employeeError.response.status == 401 || this.props.productTypeError && this.props.productTypeError.response && this.props.productTypeError.response.status == 401 || this.props.productError && this.props.productError.response && this.props.productError.response.status == 401 || this.props.goldTypeError && this.props.goldTypeError.response && this.props.goldTypeError.response.status == 401 || this.props.goldUnitError && this.props.goldUnitError.response && this.props.goldUnitError.response.status == 401) {
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
          lineNumber: 308,
          columnNumber: 7
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 9
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 9
        }
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
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
          lineNumber: 323,
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
          lineNumber: 329,
          columnNumber: 11
        }
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
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
          lineNumber: 336,
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
          lineNumber: 343,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 13
        }
      }, "Nh\u1EADp mua")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 19
        }
      }, this.props.purchaseEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseEdit__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseEdit, {
        deptList: this.props.deptList,
        employeeList: this.props.employeeList,
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        goldUnitList: this.props.goldUnitList,
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
        purchaseGoldUnitFocusHandler: this.purchaseGoldUnitFocusHandler,
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
          lineNumber: 363,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 23
        }
      }) : __jsx(_components_Purchase_PurchaseList__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.purchaseList, {
        deptList: this.props.deptList,
        employeeList: this.props.employeeList,
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        goldUnitList: this.props.goldUnitList,
        purchaseEdit: this.purchaseEditHandler,
        purchaseDelete: this.purchaseDeleteHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
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
    goldUnitList: state.goldUnit.goldUnitList,
    error: state.purchase.error,
    deptError: state.dept.error,
    employeeError: state.employee.error,
    productTypeError: state.productType.error,
    productError: state.product.error,
    goldTypeError: state.goldType.error,
    goldUnitError: state.goldUnit.error
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
    purchaseGoldUnitIdFocusDispatch: function purchaseGoldUnitIdFocusDispatch() {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldUnitIdFocus"]());
    },
    purchaseGoldUnitIdChangeDispatch: function purchaseGoldUnitIdChangeDispatch(value, validation) {
      return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldUnitIdChanged"](value, validation));
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
    productTypeListDispatch: function productTypeListDispatch() {
      return dispatch(_store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_30__["productTypeList"]());
    },
    productListDispatch: function productListDispatch() {
      return dispatch(_store_actions_productAction__WEBPACK_IMPORTED_MODULE_31__["productList"]());
    },
    goldTypeListDispatch: function goldTypeListDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_32__["goldTypeList"]());
    },
    goldUnitListDispatch: function goldUnitListDispatch() {
      return dispatch(_store_actions_goldUnitAction__WEBPACK_IMPORTED_MODULE_33__["goldUnitList"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_34__["logout"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZUlkIiwiaWQiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoIiwiZ29sZFR5cGVJZCIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRVbml0Rm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlSW5wdXREYXRlRm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VDcmVhdGVEaXNwYXRjaCIsInB1cmNoYXNlIiwibmFtZSIsInB1cmNoYXNlRWRpdCIsInB1cmNoYXNlTmFtZSIsIndlaWdodCIsInB1cmNoYXNlV2VpZ2h0IiwiZ29sZFVuaXRJZCIsInF1YW50aXR5IiwicHVyY2hhc2VRdWFudGl0eSIsImlucHV0RGF0ZSIsInB1cmNoYXNlSW5wdXREYXRlIiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZURlc2NyaXB0aW9uIiwicHVyY2hhc2VBZGREaXNwYXRjaCIsInB1cmNoYXNlVXBkYXRlRGlzcGF0Y2giLCJzZXRTdGF0ZSIsInB1cmNoYXNlRWRpdERpc3BhdGNoIiwiaXNPSyIsInB1cmNoYXNlRGVsZXRlRGlzcGF0Y2giLCJzdGF0ZSIsImtleSIsImRlcHRMaXN0RGlzcGF0Y2giLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsInByb2R1Y3RUeXBlTGlzdERpc3BhdGNoIiwicHJvZHVjdExpc3REaXNwYXRjaCIsImdvbGRUeXBlTGlzdERpc3BhdGNoIiwiZ29sZFVuaXRMaXN0RGlzcGF0Y2giLCJwdXJjaGFzZUxpc3REaXNwYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkZXB0RXJyb3IiLCJlbXBsb3llZUVycm9yIiwicHJvZHVjdFR5cGVFcnJvciIsInByb2R1Y3RFcnJvciIsImdvbGRUeXBlRXJyb3IiLCJnb2xkVW5pdEVycm9yIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJkZXB0TGlzdCIsImVtcGxveWVlTGlzdCIsInByb2R1Y3RUeXBlTGlzdCIsInByb2R1Y3RMaXN0IiwiZ29sZFR5cGVMaXN0IiwiZ29sZFVuaXRMaXN0IiwicHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VIYW5kbGVyIiwicHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyIiwicHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VIYW5kbGVyIiwicHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciIsInB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlR29sZFVuaXRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZUNyZWF0ZUhhbmRsZXIiLCJwdXJjaGFzZVNhdmVIYW5kbGVyIiwicHVyY2hhc2VMaXN0IiwicHVyY2hhc2VFZGl0SGFuZGxlciIsInB1cmNoYXNlRGVsZXRlSGFuZGxlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImRlcHQiLCJlbXBsb3llZSIsInByb2R1Y3RUeXBlIiwicHJvZHVjdCIsImdvbGRUeXBlIiwiZ29sZFVuaXQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoIiwiZGVwdEFjaW9ucyIsImVtcGxveWVlQWNpb25zIiwicHJvZHVjdFR5cGVBY2lvbnMiLCJwcm9kdWN0QWNpb25zIiwiZ29sZFR5cGVBY2lvbnMiLCJnb2xkVW5pdEFjaW9ucyIsImF1dGhBY3Rpb25zIiwiY29ubmVjdCIsIndpdGhFcnJvckhhbmRsZXIiLCJ3aXRoU3R5bGVzIiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFLE1BRE47QUFFRkUsV0FBSyxFQUFFLE1BRkw7QUFHRkMsZ0JBQVUsRUFBRSxZQUhWO0FBSUZDLG9CQUFjLEVBQUU7QUFKZCxPQUtEUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElB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MkRMdkUsd0JBQW9CLEVBQUU7QUFBQSxhQUFNa0UsUUFBUSxDQUFDTSwyRUFBQSxFQUFELENBQWQ7QUFBQSxLQTNEakI7QUE0REx2RSwyQkFBdUIsRUFBRTtBQUFBLGFBQ3ZCaUUsUUFBUSxDQUFDTyxpRkFBQSxFQUFELENBRGU7QUFBQSxLQTVEcEI7QUE4REx2RSx1QkFBbUIsRUFBRTtBQUFBLGFBQU1nRSxRQUFRLENBQUNRLHlFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBOURoQjtBQStETHZFLHdCQUFvQixFQUFFO0FBQUEsYUFBTStELFFBQVEsQ0FBQ1MsMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0EvRGpCO0FBZ0VMdkUsd0JBQW9CLEVBQUU7QUFBQSxhQUFNOEQsUUFBUSxDQUFDVSwyRUFBQSxFQUFELENBQWQ7QUFBQSxLQWhFakI7QUFrRUw3RCxZQUFRLEVBQUU7QUFBQSxhQUFNbUQsUUFBUSxDQUFDVywyREFBQSxFQUFELENBQWQ7QUFBQTtBQWxFTCxHQUFQO0FBb0VELENBckVEOztBQXVFZUMsMkhBQU8sQ0FDcEJwQixlQURvQixFQUVwQk8sa0JBRm9CLENBQVAsQ0FHYmMsd0ZBQWdCLENBQUNDLDRFQUFVLENBQUNsSyxNQUFELENBQVYsQ0FBbUJ3QixpQkFBbkIsQ0FBRCxFQUF3QzJJLHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi5kMWU0MmU4ZTRmYTdjM2QxODZlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFB1cmNoYXNlRWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUVkaXRcIjtcclxuaW1wb3J0IFB1cmNoYXNlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3B1cmNoYXNlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGRlcHRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZGVwdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBlbXBsb3llZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0VHlwZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0VHlwZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFVuaXRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFVuaXRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgYXV0aEFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuLy9pbXBvcnQgeyB0aHJvd3MgfSBmcm9tICdhc3NlcnQnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q5ZGRkZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGhlaWdodDogXCI5MHZoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgUHVyY2hhc2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBpc09wZW5BbGVydDogZmFsc2UsXHJcbiAgICBhbGVydENvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRlcHRMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVHlwZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVW5pdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5wcm9wcy5lcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmRlcHRFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZXB0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLnByb2R1Y3RFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpXHJcbiAgICApIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5wdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbXBsb3llZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZW1wbG95ZWVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlRGlzcGF0Y2goZW1wbG95ZWVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHByb2R1Y3RJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaChwcm9kdWN0SWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBnb2xkVHlwZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZ29sZFR5cGVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2goZ29sZFR5cGVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUdvbGRVbml0Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRVbml0Rm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUlucHV0RGF0ZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHVyY2hhc2UgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWx1ZSxcclxuICAgICAgZW1wbG95ZWVJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuZW1wbG95ZWVJZC52YWx1ZSxcclxuICAgICAgcHJvZHVjdElkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsdWUsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsdWUsXHJcbiAgICAgIHdlaWdodDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudmFsdWUsXHJcbiAgICAgIGdvbGRVbml0SWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudmFsdWUsXHJcbiAgICAgIHF1YW50aXR5OiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LnZhbHVlLFxyXG4gICAgICBpbnB1dERhdGU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VBZGREaXNwYXRjaChwdXJjaGFzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlVXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuaWQsIHB1cmNoYXNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIC8vIGlzT3BlbkFsZXJ0OiB0cnVlLFxyXG4gICAgICBhbGVydENvbnRlbnQ6IFwiTMawdVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFZGl0SGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBwdXJjaGFzZS5pZCA9IHB1cmNoYXNlLmtleTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFZGl0RGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVsZXRlSGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBwdXJjaGFzZS5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuQWxlcnQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHsvKiBFcnJvciBQb3B1cCAqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn0gbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIHsvKiBJbmZvIEFsZXJ0ICovfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW5BbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0Q29udGVudCArIFwiIHRow6BuaCBjw7RuZy5cIn1cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBD4bqjbmggYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxQYXBlcj5OaOG6rXAgbXVhPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdExpc3Q9e3RoaXMucHJvcHMuZGVwdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTGlzdD17dGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVW5pdExpc3Q9e3RoaXMucHJvcHMuZ29sZFVuaXRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXI9e3RoaXMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkPXt0aGlzLnB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRVbml0Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFVuaXRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VRdWFudGl0eUNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VJbnB1dERhdGVGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VJbnB1dERhdGVGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlQ3JlYXRlSGFuZGxlcj17dGhpcy5wdXJjaGFzZUNyZWF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlU2F2ZUhhbmRsZXI9e3RoaXMucHVyY2hhc2VTYXZlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wdXJjaGFzZUxpc3Qud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxQdXJjaGFzZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMucHVyY2hhc2VMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0TGlzdD17dGhpcy5wcm9wcy5kZXB0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVMaXN0PXt0aGlzLnByb3BzLmVtcGxveWVlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Q9e3RoaXMucHJvcHMucHJvZHVjdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRUeXBlTGlzdD17dGhpcy5wcm9wcy5nb2xkVHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRVbml0TGlzdD17dGhpcy5wcm9wcy5nb2xkVW5pdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRWRpdD17dGhpcy5wdXJjaGFzZUVkaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlbGV0ZT17dGhpcy5wdXJjaGFzZURlbGV0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlRWRpdDogc3RhdGUucHVyY2hhc2UucHVyY2hhc2VFZGl0LFxyXG4gICAgcHVyY2hhc2VMaXN0OiBzdGF0ZS5wdXJjaGFzZS5wdXJjaGFzZUxpc3QsXHJcbiAgICBkZXB0TGlzdDogc3RhdGUuZGVwdC5kZXB0TGlzdCxcclxuICAgIGVtcGxveWVlTGlzdDogc3RhdGUuZW1wbG95ZWUuZW1wbG95ZWVMaXN0LFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0OiBzdGF0ZS5wcm9kdWN0VHlwZS5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICBwcm9kdWN0TGlzdDogc3RhdGUucHJvZHVjdC5wcm9kdWN0TGlzdCxcclxuICAgIGdvbGRUeXBlTGlzdDogc3RhdGUuZ29sZFR5cGUuZ29sZFR5cGVMaXN0LFxyXG4gICAgZ29sZFVuaXRMaXN0OiBzdGF0ZS5nb2xkVW5pdC5nb2xkVW5pdExpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUucHVyY2hhc2UuZXJyb3IsXHJcbiAgICBkZXB0RXJyb3I6IHN0YXRlLmRlcHQuZXJyb3IsXHJcbiAgICBlbXBsb3llZUVycm9yOiBzdGF0ZS5lbXBsb3llZS5lcnJvcixcclxuICAgIHByb2R1Y3RUeXBlRXJyb3I6IHN0YXRlLnByb2R1Y3RUeXBlLmVycm9yLFxyXG4gICAgcHJvZHVjdEVycm9yOiBzdGF0ZS5wcm9kdWN0LmVycm9yLFxyXG4gICAgZ29sZFR5cGVFcnJvcjogc3RhdGUuZ29sZFR5cGUuZXJyb3IsXHJcbiAgICBnb2xkVW5pdEVycm9yOiBzdGF0ZS5nb2xkVW5pdC5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVtcGxveWVlSWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFVuaXRJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlUXVhbnRpdHlGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUXVhbnRpdHlGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlSW5wdXREYXRlRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUlucHV0RGF0ZUZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUNyZWF0ZURpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlQ3JlYXRlKCkpLFxyXG4gICAgcHVyY2hhc2VBZGREaXNwYXRjaDogKHB1cmNoYXNlKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlQWRkKHB1cmNoYXNlKSksXHJcblxyXG4gICAgcHVyY2hhc2VFZGl0RGlzcGF0Y2g6IChwdXJjaGFzZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVkaXQocHVyY2hhc2UpKSxcclxuICAgIHB1cmNoYXNlVXBkYXRlRGlzcGF0Y2g6IChpZCwgcHVyY2hhc2UpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VVcGRhdGUoaWQsIHB1cmNoYXNlKSksXHJcblxyXG4gICAgcHVyY2hhc2VEZWxldGVEaXNwYXRjaDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVsZXRlKGlkKSksXHJcbiAgICBwdXJjaGFzZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUxpc3QoKSksXHJcblxyXG4gICAgcHVyY2hhc2VFcnJvckhhbmRsZWREaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVycm9ySGFuZGxlZCgpKSxcclxuXHJcbiAgICBkZXB0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChkZXB0QWNpb25zLmRlcHRMaXN0KCkpLFxyXG4gICAgZW1wbG95ZWVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGVtcGxveWVlQWNpb25zLmVtcGxveWVlTGlzdCgpKSxcclxuICAgIHByb2R1Y3RUeXBlTGlzdERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0VHlwZUFjaW9ucy5wcm9kdWN0VHlwZUxpc3QoKSksXHJcbiAgICBwcm9kdWN0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChwcm9kdWN0QWNpb25zLnByb2R1Y3RMaXN0KCkpLFxyXG4gICAgZ29sZFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGdvbGRUeXBlQWNpb25zLmdvbGRUeXBlTGlzdCgpKSxcclxuICAgIGdvbGRVbml0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChnb2xkVW5pdEFjaW9ucy5nb2xkVW5pdExpc3QoKSksXHJcblxyXG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEVycm9ySGFuZGxlcih3aXRoU3R5bGVzKHN0eWxlcykoUHVyY2hhc2VDb250YWluZXIpLCBheGlvcykpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9