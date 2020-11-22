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
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401 || this.props.deptError && this.props.deptError.response && this.props.deptError.response.status == 401 || this.props.employeeError && this.props.employeeError.response && this.props.employeeError.response.status == 401 || this.props.productTypeError && this.props.productTypeError.response && this.props.productTypeError.response.status == 401 || this.props.productError && this.props.productError.response && this.props.productError.response.status == 401 || this.props.goldTypeError && this.props.goldTypeError.response && this.props.goldTypeError.response.status == 401 || this.props.goldTypeError && this.props.goldUnitError.response && this.props.goldUnitError.response.status == 401) {
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
          lineNumber: 363,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
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
          lineNumber: 433,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZUlkIiwiaWQiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoIiwiZ29sZFR5cGVJZCIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUNyZWF0ZURpc3BhdGNoIiwicHVyY2hhc2UiLCJuYW1lIiwicHVyY2hhc2VFZGl0IiwicHVyY2hhc2VOYW1lIiwid2VpZ2h0IiwicHVyY2hhc2VXZWlnaHQiLCJnb2xkVW5pdElkIiwicXVhbnRpdHkiLCJwdXJjaGFzZVF1YW50aXR5IiwiaW5wdXREYXRlIiwicHVyY2hhc2VJbnB1dERhdGUiLCJkZXNjcmlwdGlvbiIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJwdXJjaGFzZUFkZERpc3BhdGNoIiwicHVyY2hhc2VVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwicHVyY2hhc2VFZGl0RGlzcGF0Y2giLCJpc09LIiwicHVyY2hhc2VEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwia2V5IiwiZGVwdExpc3REaXNwYXRjaCIsImVtcGxveWVlTGlzdERpc3BhdGNoIiwicHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2giLCJwcm9kdWN0TGlzdERpc3BhdGNoIiwiZ29sZFR5cGVMaXN0RGlzcGF0Y2giLCJnb2xkVW5pdExpc3REaXNwYXRjaCIsInB1cmNoYXNlTGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlcHRFcnJvciIsImVtcGxveWVlRXJyb3IiLCJwcm9kdWN0VHlwZUVycm9yIiwicHJvZHVjdEVycm9yIiwiZ29sZFR5cGVFcnJvciIsImdvbGRVbml0RXJyb3IiLCJvbkxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc2VzIiwiZXJyb3JDb25maXJtZWRIYW5kbGVyIiwibWVzc2FnZSIsImhhbmRsZUNsb3NlQWxlcnQiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImRlcHRMaXN0IiwiZW1wbG95ZWVMaXN0IiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdExpc3QiLCJnb2xkVHlwZUxpc3QiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VJbnB1dERhdGVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VDcmVhdGVIYW5kbGVyIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInB1cmNoYXNlTGlzdCIsInB1cmNoYXNlRWRpdEhhbmRsZXIiLCJwdXJjaGFzZURlbGV0ZUhhbmRsZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJkZXB0IiwiZW1wbG95ZWUiLCJwcm9kdWN0VHlwZSIsInByb2R1Y3QiLCJnb2xkVHlwZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJkZXB0QWNpb25zIiwiZW1wbG95ZWVBY2lvbnMiLCJnb2xkVHlwZUFjaW9ucyIsInByb2R1Y3RUeXBlQWNpb25zIiwicHJvZHVjdEFjaW9ucyIsImF1dGhBY3Rpb25zIiwiY29ubmVjdCIsIndpdGhFcnJvckhhbmRsZXIiLCJ3aXRoU3R5bGVzIiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFLE1BRE47QUFFRkUsV0FBSyxFQUFFLE1BRkw7QUFHRkMsZ0JBQVUsRUFBRSxZQUhWO0FBSUZDLG9CQUFjLEVBQUU7QUFKZCxPQUtEUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBTEMsRUFLNEI7QUFDNUJDLGFBQU8sRUFBRSxNQURtQjtBQUU1QkMsY0FBUSxFQUFFLE1BRmtCO0FBRzVCQyxlQUFTLEVBQUU7QUFIaUIsS0FMNUIsQ0FMcUI7QUFnQnpCQyxRQUFJ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Z0V3QjtBQUFBLFdBQU1QLFFBQVEsQ0FBQ0ssMkVBQUEsRUFBRCxDQUFkO0FBQUEsR0FoRXhCLCtHQWtFWTtBQUFBLFdBQU1MLFFBQVEsQ0FBQ1EsMkRBQUEsRUFBRCxDQUFkO0FBQUEsR0FsRVo7QUFvRUQsQ0FyRUQ7O0FBdUVlQywySEFBTyxDQUNwQmhCLGVBRG9CLEVBRXBCTSxrQkFGb0IsQ0FBUCxDQUdiVyx3RkFBZ0IsQ0FBQ0MsNEVBQVUsQ0FBQzdKLE1BQUQsQ0FBVixDQUFtQndCLGlCQUFuQixDQUFELEVBQXdDc0ksd0RBQXhDLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLmJlODcwMjJiZWQ5NmQzYTcwYTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBTbmFja2JhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlRWRpdFwiO1xyXG5pbXBvcnQgUHVyY2hhc2VMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1B1cmNoYXNlL1B1cmNoYXNlTGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHVyY2hhc2VBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZGVwdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9kZXB0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGVtcGxveWVlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2VtcGxveWVlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBnb2xkVHlwZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9nb2xkVHlwZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBnb2xkVW5pdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9nb2xkVW5pdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcblxyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDlkZGRkXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcblxyXG5jbGFzcyBQdXJjaGFzZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIGlzT3BlbkFsZXJ0OiBmYWxzZSxcclxuICAgIGFsZXJ0Q29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGVwdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wcm9kdWN0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRUeXBlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmdvbGRVbml0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICh0aGlzLnByb3BzLmVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuZGVwdEVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZXB0RXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmRlcHRFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5lbXBsb3llZUVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLnByb2R1Y3RUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RUeXBlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RUeXBlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMucHJvZHVjdEVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5nb2xkVHlwZUVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVHlwZUVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRVbml0RXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRVbml0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSlcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLnB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUVtcGxveWVlSWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtcGxveWVlSWQgPSBudWxsO1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICBlbXBsb3llZUlkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaChlbXBsb3llZUlkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBzZWxlY3RlZEl0ZW0sIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHJvZHVjdElkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgcHJvZHVjdElkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZURpc3BhdGNoKHByb2R1Y3RJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGdvbGRUeXBlSWQgPSBudWxsO1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICBnb2xkVHlwZUlkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VEaXNwYXRjaChnb2xkVHlwZUlkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaChcclxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB2YWxpZGF0aW9uXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFVuaXRJZEZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUlucHV0RGF0ZUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlQ3JlYXRlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VDcmVhdGVEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlU2F2ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcHVyY2hhc2UgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlTmFtZS52YWx1ZSxcclxuICAgICAgZW1wbG95ZWVJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuZW1wbG95ZWVJZC52YWx1ZSxcclxuICAgICAgcHJvZHVjdElkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wcm9kdWN0SWQudmFsdWUsXHJcbiAgICAgIGdvbGRUeXBlSWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRUeXBlSWQudmFsdWUsXHJcbiAgICAgIHdlaWdodDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VXZWlnaHQudmFsdWUsXHJcbiAgICAgIGdvbGRVbml0SWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmdvbGRVbml0SWQudmFsdWUsXHJcbiAgICAgIHF1YW50aXR5OiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVF1YW50aXR5LnZhbHVlLFxyXG4gICAgICBpbnB1dERhdGU6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlSW5wdXREYXRlLnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VBZGREaXNwYXRjaChwdXJjaGFzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlVXBkYXRlRGlzcGF0Y2godGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuaWQsIHB1cmNoYXNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIC8vIGlzT3BlbkFsZXJ0OiB0cnVlLFxyXG4gICAgICBhbGVydENvbnRlbnQ6IFwiTMawdVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VFZGl0SGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBwdXJjaGFzZS5pZCA9IHB1cmNoYXNlLmtleTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFZGl0RGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsIHNlbGVjdGVkSXRlbVR5cGU6IFwiZWRpdFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVsZXRlSGFuZGxlciA9IChldmVudCwgcHVyY2hhc2UpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBwdXJjaGFzZS5uYW1lICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogcHVyY2hhc2UsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZWxldGVEaXNwYXRjaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5rZXkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuQWxlcnQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBQdXJjaGFzZUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHsvKiBFcnJvciBQb3B1cCAqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn0gbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIHsvKiBJbmZvIEFsZXJ0ICovfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW5BbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0Q29udGVudCArIFwiIHRow6BuaCBjw7RuZy5cIn1cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBD4bqjbmggYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxQYXBlcj5OaOG6rXAgbXVhPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VFZGl0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdExpc3Q9e3RoaXMucHJvcHMuZGVwdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTGlzdD17dGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXI9e3RoaXMucHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkPXt0aGlzLnB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUNyZWF0ZUhhbmRsZXI9e3RoaXMucHVyY2hhc2VDcmVhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVNhdmVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlU2F2ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHVyY2hhc2VMaXN0LndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHVyY2hhc2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnB1cmNoYXNlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdExpc3Q9e3RoaXMucHJvcHMuZGVwdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTGlzdD17dGhpcy5wcm9wcy5lbXBsb3llZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0VHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q9e3RoaXMucHJvcHMuZ29sZFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUVkaXQ9e3RoaXMucHVyY2hhc2VFZGl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VEZWxldGU9e3RoaXMucHVyY2hhc2VEZWxldGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwdXJjaGFzZUVkaXQ6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlRWRpdCxcclxuICAgIHB1cmNoYXNlTGlzdDogc3RhdGUucHVyY2hhc2UucHVyY2hhc2VMaXN0LFxyXG4gICAgZGVwdExpc3Q6IHN0YXRlLmRlcHQuZGVwdExpc3QsXHJcbiAgICBlbXBsb3llZUxpc3Q6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlTGlzdCxcclxuICAgIHByb2R1Y3RUeXBlTGlzdDogc3RhdGUucHJvZHVjdFR5cGUucHJvZHVjdFR5cGVMaXN0LFxyXG4gICAgcHJvZHVjdExpc3Q6IHN0YXRlLnByb2R1Y3QucHJvZHVjdExpc3QsXHJcbiAgICBnb2xkVHlwZUxpc3Q6IHN0YXRlLmdvbGRUeXBlLmdvbGRUeXBlTGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5wdXJjaGFzZS5lcnJvcixcclxuICAgIGRlcHRFcnJvcjogc3RhdGUuZGVwdC5lcnJvcixcclxuICAgIGVtcGxveWVlRXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gICAgcHJvZHVjdFR5cGVFcnJvcjogc3RhdGUucHJvZHVjdFR5cGUuZXJyb3IsXHJcbiAgICBwcm9kdWN0RXJyb3I6IHN0YXRlLnByb2R1Y3QuZXJyb3IsXHJcbiAgICBnb2xkVHlwZUVycm9yOiBzdGF0ZS5nb2xkVHlwZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHB1cmNoYXNlTmFtZUZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVtcGxveWVlSWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VXZWlnaHRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VHb2xkVW5pdElkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRVbml0SWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVF1YW50aXR5Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VJbnB1dERhdGVGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUNyZWF0ZSgpKSxcclxuICAgIHB1cmNoYXNlQWRkRGlzcGF0Y2g6IChwdXJjaGFzZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUFkZChwdXJjaGFzZSkpLFxyXG5cclxuICAgIHB1cmNoYXNlRWRpdERpc3BhdGNoOiAocHVyY2hhc2UpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFZGl0KHB1cmNoYXNlKSksXHJcbiAgICBwdXJjaGFzZVVwZGF0ZURpc3BhdGNoOiAoaWQsIHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlVXBkYXRlKGlkLCBwdXJjaGFzZSkpLFxyXG5cclxuICAgIHB1cmNoYXNlRGVsZXRlRGlzcGF0Y2g6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlbGV0ZShpZCkpLFxyXG4gICAgcHVyY2hhc2VMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VMaXN0KCkpLFxyXG5cclxuICAgIHB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFcnJvckhhbmRsZWQoKSksXHJcblxyXG4gICAgZGVwdExpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZGVwdEFjaW9ucy5kZXB0TGlzdCgpKSxcclxuICAgIGVtcGxveWVlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChlbXBsb3llZUFjaW9ucy5lbXBsb3llZUxpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RUeXBlQWNpb25zLnByb2R1Y3RUeXBlTGlzdCgpKSxcclxuICAgIHByb2R1Y3RMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKHByb2R1Y3RBY2lvbnMucHJvZHVjdExpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG5cclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKFB1cmNoYXNlQ29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==