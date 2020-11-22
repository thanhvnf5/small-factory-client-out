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
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "purchaseGoldUnitIdFocusDispatch", function purchaseGoldUnitIdFocusDispatch() {
    return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldUnitIdFocus"]());
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "purchaseGoldUnitIdChangedDispatch", function purchaseGoldUnitIdChangedDispatch(value, validation) {
    return dispatch(_store_actions_purchaseAction__WEBPACK_IMPORTED_MODULE_27__["purchaseGoldUnitIdChanged"](value, validation));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZUlkIiwiaWQiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoIiwiZ29sZFR5cGVJZCIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUNyZWF0ZURpc3BhdGNoIiwicHVyY2hhc2UiLCJuYW1lIiwicHVyY2hhc2VFZGl0IiwicHVyY2hhc2VOYW1lIiwid2VpZ2h0IiwicHVyY2hhc2VXZWlnaHQiLCJnb2xkVW5pdElkIiwicXVhbnRpdHkiLCJwdXJjaGFzZVF1YW50aXR5IiwiaW5wdXREYXRlIiwicHVyY2hhc2VJbnB1dERhdGUiLCJkZXNjcmlwdGlvbiIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJwdXJjaGFzZUFkZERpc3BhdGNoIiwicHVyY2hhc2VVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwicHVyY2hhc2VFZGl0RGlzcGF0Y2giLCJpc09LIiwicHVyY2hhc2VEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwia2V5IiwiZGVwdExpc3REaXNwYXRjaCIsImVtcGxveWVlTGlzdERpc3BhdGNoIiwicHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2giLCJwcm9kdWN0TGlzdERpc3BhdGNoIiwiZ29sZFR5cGVMaXN0RGlzcGF0Y2giLCJnb2xkVW5pdExpc3REaXNwYXRjaCIsInB1cmNoYXNlTGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlcHRFcnJvciIsImVtcGxveWVlRXJyb3IiLCJwcm9kdWN0VHlwZUVycm9yIiwicHJvZHVjdEVycm9yIiwiZ29sZFR5cGVFcnJvciIsImdvbGRVbml0RXJyb3IiLCJvbkxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc2VzIiwiZXJyb3JDb25maXJtZWRIYW5kbGVyIiwibWVzc2FnZSIsImhhbmRsZUNsb3NlQWxlcnQiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImRlcHRMaXN0IiwiZW1wbG95ZWVMaXN0IiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdExpc3QiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVW5pdExpc3QiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VJbnB1dERhdGVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VDcmVhdGVIYW5kbGVyIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInB1cmNoYXNlTGlzdCIsInB1cmNoYXNlRWRpdEhhbmRsZXIiLCJwdXJjaGFzZURlbGV0ZUhhbmRsZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJkZXB0IiwiZW1wbG95ZWUiLCJwcm9kdWN0VHlwZSIsInByb2R1Y3QiLCJnb2xkVHlwZSIsImdvbGRVbml0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwicHVyY2hhc2VFcnJvckhhbmRsZWREaXNwYXRjaCIsImRlcHRBY2lvbnMiLCJlbXBsb3llZUFjaW9ucyIsImdvbGRUeXBlQWNpb25zIiwicHJvZHVjdFR5cGVBY2lvbnMiLCJwcm9kdWN0QWNpb25zIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNKRCxZQUFNLEVBQUUsTUFETjtBQUVGRSxXQUFLLEVBQUUsTUFGTDtBQUdGQyxnQkFBVSxFQUFFLFlBSFY7QUFJRkMsb0JBQWMsRUFBRTtBQUpkLE9BS0RQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FMQyxFQUs0QjtBQUM1QkMsYUFBTyxFQUFFLE1BRG1CO0FBRTVCQyxjQUFRLEVBQUUsTUFGa0I7QUFHNUJDLGVBQVMsRUFBRTtBQUhpQixLQUw1QixDQUxxQjtBQWdCekJDLFFBQUksRUFBRTtBQUNKVixZQUFNLEVBQUUsTUFETjtBQUVGVyxZQUFNLEVBQUU7QUFGTixPQUdEZCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEMsRUFHNEI7QUFDNUJOLFlBQU0sRUFBRTtBQURvQixLQUg1QixDQWhCcUI7QUF1QnpCWSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFaEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjLENBQWQsQ0FESjtBQUVMQyxlQUFTLEVBQUUsUUFGTjtBQUdMQyxXQUFLLEVBQUVuQixLQUFLLENBQUNvQixPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBSHJCO0FBdkJrQixHQUFaO0FBQUEsQ0FBZjtBQThCQTs7O0lBRU1DLGlCOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGtCQUFZLEVBQUUsS0FEUjtBQUVOQyxtQkFBYSxFQUFFLElBRlQ7QUFHTkMsaUJBQVcsRUFBRSxLQUhQO0FBSU5DLGtCQUFZLEVBQUUsSUFKUjtBQUtOQyxrQkFBWSxFQUFFLElBTFI7QUFNTkMsc0JBQWdCLEVBQUU7QUFOWixLOzttT0F1RG1CLFVBQUNDLEtBQUQsRUFBVztBQUNwQ0EsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFlBQUtDLEtBQUwsQ0FBV0MseUJBQVg7QUFDRCxLOztxT0FFNEIsVUFBQ0gsS0FBRCxFQUFRSSxVQUFSLEVBQXVCO0FBQ2xESixXQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBS0MsS0FBTCxDQUFXRywyQkFBWCxDQUF1Q0wsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQXBELEVBQTJESCxVQUEzRDtBQUNELEs7O3lPQUVnQyxVQUFDSixLQUFELEVBQVc7QUFDMUNBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLQyxLQUFMLENBQVdNLCtCQUFYO0FBQ0QsSzs7ME9BRWlDLFVBQUNSLEtBQUQsRUFBUUYsWUFBUixFQUFzQk0sVUFBdEIsRUFBcUM7QUFDckVKLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQUlRLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxVQUFJWCxZQUFKLEVBQWtCO0FBQ2hCVyxrQkFBVSxHQUFHWCxZQUFZLENBQUNZLEVBQTFCO0FBQ0Q7O0FBQ0QsWUFBS1IsS0FBTCxDQUFXUyxnQ0FBWCxDQUE0Q0YsVUFBNUMsRUFBd0RMLFVBQXhEO0FBQ0QsSzs7d09BRStCLFVBQUNKLEtBQUQsRUFBVztBQUN6Q0EsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFlBQUtDLEtBQUwsQ0FBV1UsOEJBQVg7QUFDRCxLOzt5T0FFZ0MsVUFBQ1osS0FBRCxFQUFRRixZQUFSLEVBQXNCTSxVQUF0QixFQUFxQztBQUNwRUosV0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBSVksU0FBUyxHQUFHLElBQWhCOztBQUNBLFVBQUlmLFlBQUosRUFBa0I7QUFDaEJlLGlCQUFTLEdBQUdmLFlBQVksQ0FBQ1ksRUFBekI7QUFDRDs7QUFDRCxZQUFLUixLQUFMLENBQVdZLCtCQUFYLENBQTJDRCxTQUEzQyxFQUFzRFQsVUFBdEQ7QUFDRCxLOzt5T0FFZ0MsVUFBQ0osS0FBRCxFQUFXO0FBQzFDQSxXQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBS0MsS0FBTCxDQUFXYSwrQkFBWDtBQUNELEs7OzBPQUVpQyxVQUFDZixLQUFELEVBQVFGLFlBQVIsRUFBc0JNLFVBQXRCLEVBQXFDO0FBQ3JFSixXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJZSxVQUFVLEdBQUcsSUFBakI7O0FBQ0EsVUFBSWxCLFlBQUosRUFBa0I7QUFDaEJrQixrQkFBVSxHQUFHbEIsWUFBWSxDQUFDWSxFQUExQjtBQUNEOztBQUNELFlBQUtSLEtBQUwsQ0FBV2UsZ0NBQVgsQ0FBNENELFVBQTVDLEVBQXdEWixVQUF4RDtBQUNELEs7OzBPQUVpQyxZQUFNO0FBQ3RDLFlBQUtGLEtBQUwsQ0FBV2dCLGdDQUFYO0FBQ0QsSzs7NE9BRW1DLFVBQUNsQixLQUFELEVBQVFJLFVBQVIsRUFBdUI7QUFDekRKLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLQyxLQUFMLENBQVdpQixrQ0FBWCxDQUNFbkIsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBRGYsRUFFRUgsVUFGRjtBQUlELEs7O3FPQUU0QixZQUFNO0FBQ2pDLFlBQUtGLEtBQUwsQ0FBV2tCLDJCQUFYO0FBQ0QsSzs7dU9BRThCLFVBQUNwQixLQUFELEVBQVFJLFVBQVIsRUFBdUI7QUFDcEQ7QUFDQSxZQUFLRixLQUFMLENBQVdtQiw2QkFBWCxDQUF5Q3JCLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxLQUF0RCxFQUE2REgsVUFBN0Q7QUFDRCxLOzt5T0FFZ0MsWUFBTTtBQUNyQyxZQUFLRixLQUFMLENBQVdvQiwrQkFBWDtBQUNELEs7OzJPQUVrQyxVQUFDdEIsS0FBRCxFQUFRSSxVQUFSLEVBQXVCO0FBQ3hEO0FBQ0EsWUFBS0YsS0FBTCxDQUFXcUIsaUNBQVgsQ0FDRXZCLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxLQURmLEVBRUVILFVBRkY7QUFJRCxLOzt1T0FFOEIsWUFBTTtBQUNuQyxZQUFLRixLQUFMLENBQVdzQiw2QkFBWDtBQUNELEs7O3lPQUVnQyxVQUFDeEIsS0FBRCxFQUFRSSxVQUFSLEVBQXVCO0FBQ3REO0FBQ0EsWUFBS0YsS0FBTCxDQUFXdUIsK0JBQVgsQ0FBMkN6QixLQUFLLENBQUNNLE1BQU4sQ0FBYUMsS0FBeEQsRUFBK0RILFVBQS9EO0FBQ0QsSzs7d09BRStCLFlBQU07QUFDcEMsWUFBS0YsS0FBTCxDQUFXd0IsOEJBQVg7QUFDRCxLOzswT0FFaUMsVUFBQzFCLEtBQUQsRUFBUUksVUFBUixFQUF1QjtBQUN2RDtBQUNBLFlBQUtGLEtBQUwsQ0FBV3lCLGdDQUFYLENBQTRDM0IsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQXpELEVBQWdFSCxVQUFoRTtBQUNELEs7O2dPQUV1QixVQUFDSixLQUFELEVBQVc7QUFDakNBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLQyxLQUFMLENBQVcwQixzQkFBWDtBQUNELEs7OzhOQUVxQixVQUFDNUIsS0FBRCxFQUFXO0FBQy9CQSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJNEIsUUFBUSxHQUFHO0FBQ2JDLFlBQUksRUFBRSxNQUFLNUIsS0FBTCxDQUFXNkIsWUFBWCxDQUF3QkMsWUFBeEIsQ0FBcUN6QixLQUQ5QjtBQUViRSxrQkFBVSxFQUFFLE1BQUtQLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0J0QixVQUF4QixDQUFtQ0YsS0FGbEM7QUFHYk0saUJBQVMsRUFBRSxNQUFLWCxLQUFMLENBQVc2QixZQUFYLENBQXdCbEIsU0FBeEIsQ0FBa0NOLEtBSGhDO0FBSWJTLGtCQUFVLEVBQUUsTUFBS2QsS0FBTCxDQUFXNkIsWUFBWCxDQUF3QmYsVUFBeEIsQ0FBbUNULEtBSmxDO0FBS2IwQixjQUFNLEVBQUUsTUFBSy9CLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JHLGNBQXhCLENBQXVDM0IsS0FMbEM7QUFNYjRCLGtCQUFVLEVBQUUsTUFBS2pDLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JJLFVBQXhCLENBQW1DNUIsS0FObEM7QUFPYjZCLGdCQUFRLEVBQUUsTUFBS2xDLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JNLGdCQUF4QixDQUF5QzlCLEtBUHRDO0FBUWIrQixpQkFBUyxFQUFFLE1BQUtwQyxLQUFMLENBQVc2QixZQUFYLENBQXdCUSxpQkFBeEIsQ0FBMENoQyxLQVJ4QztBQVNiaUMsbUJBQVcsRUFBRSxNQUFLdEMsS0FBTCxDQUFXNkIsWUFBWCxDQUF3QlUsbUJBQXhCLENBQTRDbEM7QUFUNUMsT0FBZjs7QUFXQSxVQUFJLENBQUMsTUFBS0wsS0FBTCxDQUFXNkIsWUFBWCxDQUF3QnJCLEVBQTdCLEVBQWlDO0FBQy9CLGNBQUtSLEtBQUwsQ0FBV3dDLG1CQUFYLENBQStCYixRQUEvQjtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUszQixLQUFMLENBQVd5QyxzQkFBWCxDQUFrQyxNQUFLekMsS0FBTCxDQUFXNkIsWUFBWCxDQUF3QnJCLEVBQTFELEVBQThEbUIsUUFBOUQ7QUFDRDs7QUFDRCxZQUFLZSxRQUFMLENBQWM7QUFDWjlDLG9CQUFZLEVBQUUsSUFERjtBQUVaQyx3QkFBZ0IsRUFBRSxJQUZOO0FBR1o7QUFDQUYsb0JBQVksRUFBRTtBQUpGLE9BQWQ7QUFNRCxLOzs4TkFFcUIsVUFBQ0csS0FBRCxFQUFRNkIsUUFBUixFQUFxQjtBQUN6QzdCLFdBQUssQ0FBQ0MsY0FBTixHQUR5QyxDQUV6Qzs7QUFDQSxZQUFLQyxLQUFMLENBQVcyQyxvQkFBWCxDQUFnQ2hCLFFBQWhDOztBQUNBLFlBQUtlLFFBQUwsQ0FBYztBQUFFOUMsb0JBQVksRUFBRStCLFFBQWhCO0FBQTBCOUIsd0JBQWdCLEVBQUU7QUFBNUMsT0FBZDtBQUNELEs7O2dPQUV1QixVQUFDQyxLQUFELEVBQVE2QixRQUFSLEVBQXFCO0FBQzNDN0IsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFlBQUsyQyxRQUFMLENBQWM7QUFDWmxELG9CQUFZLEVBQUUsSUFERjtBQUVaQyxxQkFBYSxFQUFFa0MsUUFBUSxDQUFDQyxJQUFULEdBQWdCLGFBRm5CO0FBR1poQyxvQkFBWSxFQUFFK0IsUUFIRjtBQUlaOUIsd0JBQWdCLEVBQUU7QUFKTixPQUFkO0FBTUQsSzs7c05BRWEsVUFBQ0MsS0FBRCxFQUFROEMsSUFBUixFQUFpQjtBQUM3QjlDLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxVQUFJNkMsSUFBSixFQUFVO0FBQ1IsY0FBSzVDLEtBQUwsQ0FBVzZDLHNCQUFYLENBQWtDLE1BQUtDLEtBQUwsQ0FBV2xELFlBQVgsQ0FBd0JtRCxHQUExRDs7QUFDQSxjQUFLTCxRQUFMLENBQWM7QUFDWmxELHNCQUFZLEVBQUUsS0FERjtBQUVaSSxzQkFBWSxFQUFFLElBRkY7QUFHWkMsMEJBQWdCLEVBQUU7QUFITixTQUFkO0FBS0QsT0FQRCxNQU9PO0FBQ0wsY0FBSzZDLFFBQUwsQ0FBYztBQUFFbEQsc0JBQVksRUFBRTtBQUFoQixTQUFkO0FBQ0Q7QUFDRixLOzt5TkFFZ0IsVUFBQ1EsS0FBRCxFQUFXO0FBQzFCLGFBQ0UsTUFBQyx1REFBRDtBQUNFLGNBQU0sRUFBQyx5QkFEVDtBQUVFLGNBQU0sRUFBRSxrQ0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUUsTUFBQyxnRUFBRCx5RkFBV0EsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkYsQ0FERjtBQVFELEs7OzJOQUVrQixZQUFNO0FBQ3ZCLFlBQUswQyxRQUFMLENBQWM7QUFBRWhELG1CQUFXLEVBQUU7QUFBZixPQUFkO0FBQ0QsSzs7Ozs7Ozs7QUFoT0Q7d0NBQ29CO0FBQ2xCLFdBQUtNLEtBQUwsQ0FBV2dELGdCQUFYO0FBQ0EsV0FBS2hELEtBQUwsQ0FBV2lELG9CQUFYO0FBQ0EsV0FBS2pELEtBQUwsQ0FBV2tELHVCQUFYO0FBQ0EsV0FBS2xELEtBQUwsQ0FBV21ELG1CQUFYO0FBQ0EsV0FBS25ELEtBQUwsQ0FBV29ELG9CQUFYO0FBQ0EsV0FBS3BELEtBQUwsQ0FBV3FELG9CQUFYO0FBQ0EsV0FBS3JELEtBQUwsQ0FBV3NELG9CQUFYO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFDRyxLQUFLdEQsS0FBTCxDQUFXdUQsS0FBWCxJQUNDLEtBQUt2RCxLQUFMLENBQVd1RCxLQUFYLENBQWlCQyxRQURsQixJQUVDLEtBQUt4RCxLQUFMLENBQVd1RCxLQUFYLENBQWlCQyxRQUFqQixDQUEwQkMsTUFBMUIsSUFBb0MsR0FGdEMsSUFHQyxLQUFLekQsS0FBTCxDQUFXMEQsU0FBWCxJQUNDLEtBQUsxRCxLQUFMLENBQVcwRCxTQUFYLENBQXFCRixRQUR0QixJQUVDLEtBQUt4RCxLQUFMLENBQVcwRCxTQUFYLENBQXFCRixRQUFyQixDQUE4QkMsTUFBOUIsSUFBd0MsR0FMMUMsSUFNQyxLQUFLekQsS0FBTCxDQUFXMkQsYUFBWCxJQUNDLEtBQUszRCxLQUFMLENBQVcyRCxhQUFYLENBQXlCSCxRQUQxQixJQUVDLEtBQUt4RCxLQUFMLENBQVcyRCxhQUFYLENBQXlCSCxRQUF6QixDQUFrQ0MsTUFBbEMsSUFBNEMsR0FSOUMsSUFTQyxLQUFLekQsS0FBTCxDQUFXNEQsZ0JBQVgsSUFDQyxLQUFLNUQsS0FBTCxDQUFXNEQsZ0JBQVgsQ0FBNEJKLFFBRDdCLElBRUMsS0FBS3hELEtBQUwsQ0FBVzRELGdCQUFYLENBQTRCSixRQUE1QixDQUFxQ0MsTUFBckMsSUFBK0MsR0FYakQsSUFZQyxLQUFLekQsS0FBTCxDQUFXNkQsWUFBWCxJQUNDLEtBQUs3RCxLQUFMLENBQVc2RCxZQUFYLENBQXdCTCxRQUR6QixJQUVDLEtBQUt4RCxLQUFMLENBQVc2RCxZQUFYLENBQXdCTCxRQUF4QixDQUFpQ0MsTUFBakMsSUFBMkMsR0FkN0MsSUFlQyxLQUFLekQsS0FBTCxDQUFXOEQsYUFBWCxJQUNDLEtBQUs5RCxLQUFMLENBQVc4RCxhQUFYLENBQXlCTixRQUQxQixJQUVDLEtBQUt4RCxLQUFMLENBQVc4RCxhQUFYLENBQXlCTixRQUF6QixDQUFrQ0MsTUFBbEMsSUFBNEMsR0FqQjlDLElBa0JDLEtBQUt6RCxLQUFMLENBQVc4RCxhQUFYLElBQ0MsS0FBSzlELEtBQUwsQ0FBVytELGFBQVgsQ0FBeUJQLFFBRDFCLElBRUMsS0FBS3hELEtBQUwsQ0FBVytELGFBQVgsQ0FBeUJQLFFBQXpCLENBQWtDQyxNQUFsQyxJQUE0QyxHQXJCaEQsRUFzQkU7QUFDQTtBQUNBO0FBQ0EsYUFBS3pELEtBQUwsQ0FBV2dFLFFBQVgsR0FIQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGOzs7O0FBc0xEOzZCQUVTO0FBQUE7O0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUNFLElBQUlDLElBQUosR0FBV0MsY0FBWCxLQUE4Qix3Q0FEaEM7QUFETyxVQUlDQyxPQUpELEdBSWEsS0FBS3JFLEtBSmxCLENBSUNxRSxPQUpEO0FBS1AsYUFDRTtBQUFLLGlCQUFTLEVBQUVBLE9BQU8sQ0FBQ3BHLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRSxNQUFDLG1FQUFEO0FBQU8sWUFBSSxFQUFFLEtBQUsrQixLQUFMLENBQVd1RCxLQUF4QjtBQUErQixtQkFBVyxFQUFFLEtBQUtlLHFCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS3RFLEtBQUwsQ0FBV3VELEtBQVgsR0FBbUIsS0FBS3ZELEtBQUwsQ0FBV3VELEtBQVgsQ0FBaUJnQixPQUFwQyxHQUE4QyxXQURqRCxDQUZGLEVBTUUsTUFBQywwREFBRDtBQUNFLFlBQUksRUFBRSxLQUFLekIsS0FBTCxDQUFXcEQsV0FEbkI7QUFFRSxlQUFPLEVBQUUsS0FBSzhFLGdCQUZoQjtBQUdFLHdCQUFnQixFQUFFLElBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRSxNQUFDLHVEQUFEO0FBQU8sZUFBTyxFQUFFLEtBQUtBLGdCQUFyQjtBQUF1QyxnQkFBUSxFQUFDLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLMUIsS0FBTCxDQUFXbkQsWUFBWCxHQUEwQixjQUQ3QixDQUxGLENBTkYsRUFlRSxNQUFDLGlFQUFEO0FBQ0UsWUFBSSxFQUFFLEtBQUttRCxLQUFMLENBQVd0RCxZQURuQjtBQUVFLGVBQU8sRUFBRSxpQkFBQ00sS0FBRDtBQUFBLGlCQUFXLE1BQUksQ0FBQzJFLFdBQUwsQ0FBaUIzRSxLQUFqQixDQUFYO0FBQUEsU0FGWDtBQUdFLHNCQUFjLEVBQUUsS0FBSzRFLGNBSHZCO0FBSUUsMkJBQWdCLHdCQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUUsTUFBQyxzRUFBRDtBQUFhLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBcEI7QUFBd0MsVUFBRSxFQUFDLHdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQU5GLEVBU0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9CLEtBQUs3QixLQUFMLENBQVdyRCxhQUEvQixDQURGLENBVEYsRUFZRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdFQUFEO0FBQ0UsaUJBQVMsTUFEWDtBQUVFLGVBQU8sRUFBRSxpQkFBQ0ssS0FBRDtBQUFBLGlCQUFXLE1BQUksQ0FBQzJFLFdBQUwsQ0FBaUIzRSxLQUFqQixDQUFYO0FBQUEsU0FGWDtBQUdFLGFBQUssRUFBQyxTQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFRRSxNQUFDLGdFQUFEO0FBQ0UsZUFBTyxFQUFFLGlCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDMkUsV0FBTCxDQUFpQjNFLEtBQWpCLEVBQXdCLElBQXhCLENBQVg7QUFBQSxTQURYO0FBRUUsYUFBSyxFQUFDLFNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFSRixDQVpGLENBZkYsRUEyQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLGlCQUFTLEVBQUV1RSxPQUFPLENBQUNqRyxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUs0QixLQUFMLENBQVc2QixZQUFYLENBQXdCK0MsT0FBeEIsR0FDQyxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxHQUdDLE1BQUMsMEVBQUQseUZBQ00sS0FBSzVFLEtBQUwsQ0FBVzZCLFlBRGpCO0FBRUUsZ0JBQVEsRUFBRSxLQUFLN0IsS0FBTCxDQUFXNkUsUUFGdkI7QUFHRSxvQkFBWSxFQUFFLEtBQUs3RSxLQUFMLENBQVc4RSxZQUgzQjtBQUlFLHVCQUFlLEVBQUUsS0FBSzlFLEtBQUwsQ0FBVytFLGVBSjlCO0FBS0UsbUJBQVcsRUFBRSxLQUFLL0UsS0FBTCxDQUFXZ0YsV0FMMUI7QUFNRSxvQkFBWSxFQUFFLEtBQUtoRixLQUFMLENBQVdpRixZQU4zQjtBQU9FLG9CQUFZLEVBQUUsS0FBS2pGLEtBQUwsQ0FBV2tGLFlBUDNCO0FBUUUsZ0NBQXdCLEVBQUUsS0FBS0Msd0JBUmpDO0FBU0UsMkJBQW1CLEVBQUUsS0FBS0MsMEJBVDVCO0FBVUUsaUNBQXlCLEVBQ3ZCLEtBQUtDLCtCQVhUO0FBYUUsc0NBQThCLEVBQzVCLEtBQUtDLDhCQWRUO0FBZ0JFLGdDQUF3QixFQUN0QixLQUFLQyw4QkFqQlQ7QUFtQkUscUNBQTZCLEVBQzNCLEtBQUtDLDZCQXBCVDtBQXNCRSxpQ0FBeUIsRUFDdkIsS0FBS0MsK0JBdkJUO0FBeUJFLHNDQUE4QixFQUM1QixLQUFLQyw4QkExQlQ7QUE0QkUsdUNBQStCLEVBQzdCLEtBQUtDLCtCQTdCVDtBQStCRSxrQ0FBMEIsRUFDeEIsS0FBS0MsaUNBaENUO0FBa0NFLGtDQUEwQixFQUN4QixLQUFLQywwQkFuQ1Q7QUFxQ0UsNkJBQXFCLEVBQ25CLEtBQUtDLDRCQXRDVDtBQXdDRSxzQ0FBOEIsRUFDNUIsS0FBS0MsOEJBekNUO0FBMkNFLGlDQUF5QixFQUN2QixLQUFLQyxnQ0E1Q1Q7QUE4Q0Usb0NBQTRCLEVBQzFCLEtBQUtDLDRCQS9DVDtBQWlERSwrQkFBdUIsRUFDckIsS0FBS0MsOEJBbERUO0FBb0RFLHFDQUE2QixFQUMzQixLQUFLQyw2QkFyRFQ7QUF1REUsZ0NBQXdCLEVBQ3RCLEtBQUtDLCtCQXhEVDtBQTBERSw2QkFBcUIsRUFBRSxLQUFLQyxxQkExRDlCO0FBMkRFLDJCQUFtQixFQUFFLEtBQUtDLG1CQTNENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKLENBREYsQ0FERixDQURGLEVBd0VFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLGlCQUFTLEVBQUVqQyxPQUFPLENBQUN4RixJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS21CLEtBQUwsQ0FBV3VHLFlBQVgsQ0FBd0IzQixPQUF4QixHQUNDLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELEdBR0MsTUFBQywwRUFBRCx5RkFDTSxLQUFLNUUsS0FBTCxDQUFXdUcsWUFEakI7QUFFRSxnQkFBUSxFQUFFLEtBQUt2RyxLQUFMLENBQVc2RSxRQUZ2QjtBQUdFLG9CQUFZLEVBQUUsS0FBSzdFLEtBQUwsQ0FBVzhFLFlBSDNCO0FBSUUsdUJBQWUsRUFBRSxLQUFLOUUsS0FBTCxDQUFXK0UsZUFKOUI7QUFLRSxtQkFBVyxFQUFFLEtBQUsvRSxLQUFMLENBQVdnRixXQUwxQjtBQU1FLG9CQUFZLEVBQUUsS0FBS2hGLEtBQUwsQ0FBV2lGLFlBTjNCO0FBT0Usb0JBQVksRUFBRSxLQUFLakYsS0FBTCxDQUFXa0YsWUFQM0I7QUFRRSxvQkFBWSxFQUFFLEtBQUtzQixtQkFSckI7QUFTRSxzQkFBYyxFQUFFLEtBQUtDLHFCQVR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkosQ0FERixDQURGLENBeEVGLENBREYsQ0FKRixDQTNDRixDQURGO0FBbUpEOzs7O0VBdFk2QkMsZ0Q7QUF5WWhDOzs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUM3RCxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMakIsZ0JBQVksRUFBRWlCLEtBQUssQ0FBQ25CLFFBQU4sQ0FBZUUsWUFEeEI7QUFFTDBFLGdCQUFZLEVBQUV6RCxLQUFLLENBQUNuQixRQUFOLENBQWU0RSxZQUZ4QjtBQUdMMUIsWUFBUSxFQUFFL0IsS0FBSyxDQUFDOEQsSUFBTixDQUFXL0IsUUFIaEI7QUFJTEMsZ0JBQVksRUFBRWhDLEtBQUssQ0FBQytELFFBQU4sQ0FBZS9CLFlBSnhCO0FBS0xDLG1CQUFlLEVBQUVqQyxLQUFLLENBQUNnRSxXQUFOLENBQWtCL0IsZUFMOUI7QUFNTEMsZUFBVyxFQUFFbEMsS0FBSyxDQUFDaUUsT0FBTixDQUFjL0IsV0FOdEI7QUFPTEMsZ0JBQVksRUFBRW5DLEtBQUssQ0FBQ2tFLFFBQU4sQ0FBZS9CLFlBUHhCO0FBUUxDLGdCQUFZLEVBQUVwQyxLQUFLLENBQUNtRSxRQUFOLENBQWUvQixZQVJ4QjtBQVNMM0IsU0FBSyxFQUFFVCxLQUFLLENBQUNuQixRQUFOLENBQWU0QixLQVRqQjtBQVVMRyxhQUFTLEVBQUVaLEtBQUssQ0FBQzhELElBQU4sQ0FBV3JELEtBVmpCO0FBV0xJLGlCQUFhLEVBQUViLEtBQUssQ0FBQytELFFBQU4sQ0FBZXRELEtBWHpCO0FBWUxLLG9CQUFnQixFQUFFZCxLQUFLLENBQUNnRSxXQUFOLENBQWtCdkQsS0FaL0I7QUFhTE0sZ0JBQVksRUFBRWYsS0FBSyxDQUFDaUUsT0FBTixDQUFjeEQsS0FidkI7QUFjTE8saUJBQWEsRUFBRWhCLEtBQUssQ0FBQ2tFLFFBQU4sQ0FBZXpELEtBZHpCO0FBZUxRLGlCQUFhLEVBQUVqQixLQUFLLENBQUNtRSxRQUFOLENBQWUxRDtBQWZ6QixHQUFQO0FBaUJELENBbEJEOztBQW9CQSxJQUFNMkQsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFBQTs7QUFDdkM7QUFDRWxILDZCQUF5QixFQUFFO0FBQUEsYUFBTWtILFFBQVEsQ0FBQ0MsZ0ZBQUEsRUFBRCxDQUFkO0FBQUEsS0FEN0I7QUFFRWpILCtCQUEyQixFQUFFLHFDQUFDRSxLQUFELEVBQVFILFVBQVI7QUFBQSxhQUMzQmlILFFBQVEsQ0FBQ0Msa0ZBQUEsQ0FBNEIvRyxLQUE1QixFQUFtQ0gsVUFBbkMsQ0FBRCxDQURtQjtBQUFBLEtBRi9CO0FBS0VJLG1DQUErQixFQUFFO0FBQUEsYUFDL0I2RyxRQUFRLENBQUNDLHNGQUFBLEVBQUQsQ0FEdUI7QUFBQSxLQUxuQztBQU9FM0csb0NBQWdDLEVBQUUsMENBQUNKLEtBQUQsRUFBUUgsVUFBUjtBQUFBLGFBQ2hDaUgsUUFBUSxDQUFDQyx3RkFBQSxDQUFrQy9HLEtBQWxDLEVBQXlDSCxVQUF6QyxDQUFELENBRHdCO0FBQUEsS0FQcEM7QUFVRVEsa0NBQThCLEVBQUU7QUFBQSxhQUM5QnlHLFFBQVEsQ0FBQ0MscUZBQUEsRUFBRCxDQURzQjtBQUFBLEtBVmxDO0FBWUV4RyxtQ0FBK0IsRUFBRSx5Q0FBQ1AsS0FBRCxFQUFRSCxVQUFSO0FBQUEsYUFDL0JpSCxRQUFRLENBQUNDLHVGQUFBLENBQWlDL0csS0FBakMsRUFBd0NILFVBQXhDLENBQUQsQ0FEdUI7QUFBQSxLQVpuQztBQWVFVyxtQ0FBK0IsRUFBRTtBQUFBLGFBQy9Cc0csUUFBUSxDQUFDQyxzRkFBQSxFQUFELENBRHVCO0FBQUEsS0FmbkM7QUFpQkVyRyxvQ0FBZ0MsRUFBRSwwQ0FBQ1YsS0FBRCxFQUFRSCxVQUFSO0FBQUEsYUFDaENpSCxRQUFRLENBQUNDLHdGQUFBLENBQWtDL0csS0FBbEMsRUFBeUNILFVBQXpDLENBQUQsQ0FEd0I7QUFBQSxLQWpCcEM7QUFvQkVjLG9DQUFnQyxFQUFFO0FBQUEsYUFDaENtRyxRQUFRLENBQUNDLHVGQUFBLEVBQUQsQ0FEd0I7QUFBQSxLQXBCcEM7QUFzQkVuRyxzQ0FBa0MsRUFBRSw0Q0FBQ1osS0FBRCxFQUFRSCxVQUFSO0FBQUEsYUFDbENpSCxRQUFRLENBQUNDLHlGQUFBLENBQW1DL0csS0FBbkMsRUFBMENILFVBQTFDLENBQUQsQ0FEMEI7QUFBQSxLQXRCdEM7QUF5QkVnQiwrQkFBMkIsRUFBRTtBQUFBLGFBQU1pRyxRQUFRLENBQUNDLGtGQUFBLEVBQUQsQ0FBZDtBQUFBLEtBekIvQjtBQTBCRWpHLGlDQUE2QixFQUFFLHVDQUFDZCxLQUFELEVBQVFILFVBQVI7QUFBQSxhQUM3QmlILFFBQVEsQ0FBQ0Msb0ZBQUEsQ0FBOEIvRyxLQUE5QixFQUFxQ0gsVUFBckMsQ0FBRCxDQURxQjtBQUFBLEtBMUJqQztBQTZCRW9CLGlDQUE2QixFQUFFO0FBQUEsYUFDN0I2RixRQUFRLENBQUNDLG9GQUFBLEVBQUQsQ0FEcUI7QUFBQSxLQTdCakM7QUErQkU3RixtQ0FBK0IsRUFBRSx5Q0FBQ2xCLEtBQUQsRUFBUUgsVUFBUjtBQUFBLGFBQy9CaUgsUUFBUSxDQUFDQyxzRkFBQSxDQUFnQy9HLEtBQWhDLEVBQXVDSCxVQUF2QyxDQUFELENBRHVCO0FBQUEsS0EvQm5DO0FBa0NFc0Isa0NBQThCLEVBQUU7QUFBQSxhQUM5QjJGLFFBQVEsQ0FBQ0MscUZBQUEsRUFBRCxDQURzQjtBQUFBLEtBbENsQztBQW9DRTNGLG9DQUFnQyxFQUFFLDBDQUFDcEIsS0FBRCxFQUFRSCxVQUFSO0FBQUEsYUFDaENpSCxRQUFRLENBQUNDLHVGQUFBLENBQWlDL0csS0FBakMsRUFBd0NILFVBQXhDLENBQUQsQ0FEd0I7QUFBQSxLQXBDcEM7QUF1Q0V3QiwwQkFBc0IsRUFBRTtBQUFBLGFBQU15RixRQUFRLENBQUNDLDZFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBdkMxQjtBQXdDRTVFLHVCQUFtQixFQUFFLDZCQUFDYixRQUFEO0FBQUEsYUFBY3dGLFFBQVEsQ0FBQ0MsMEVBQUEsQ0FBb0J6RixRQUFwQixDQUFELENBQXRCO0FBQUEsS0F4Q3ZCO0FBMENFZ0Isd0JBQW9CLEVBQUUsOEJBQUNoQixRQUFEO0FBQUEsYUFDcEJ3RixRQUFRLENBQUNDLDJFQUFBLENBQXFCekYsUUFBckIsQ0FBRCxDQURZO0FBQUEsS0ExQ3hCO0FBNENFYywwQkFBc0IsRUFBRSxnQ0FBQ2pDLEVBQUQsRUFBS21CLFFBQUw7QUFBQSxhQUN0QndGLFFBQVEsQ0FBQ0MsNkVBQUEsQ0FBdUI1RyxFQUF2QixFQUEyQm1CLFFBQTNCLENBQUQsQ0FEYztBQUFBLEtBNUMxQjtBQStDRWtCLDBCQUFzQixFQUFFLGdDQUFDckMsRUFBRDtBQUFBLGFBQVEyRyxRQUFRLENBQUNDLDZFQUFBLENBQXVCNUcsRUFBdkIsQ0FBRCxDQUFoQjtBQUFBLEtBL0MxQjtBQWdERThDLHdCQUFvQixFQUFFO0FBQUEsYUFBTTZELFFBQVEsQ0FBQ0MsMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0FoRHhCO0FBa0RFQyxnQ0FBNEIsRUFBRTtBQUFBLGFBQzVCRixRQUFRLENBQUNDLG1GQUFBLEVBQUQsQ0FEb0I7QUFBQSxLQWxEaEM7QUFxREVwRSxvQkFBZ0IsRUFBRTtBQUFBLGFBQU1tRSxRQUFRLENBQUNHLG1FQUFBLEVBQUQsQ0FBZDtBQUFBLEtBckRwQjtBQXNERXJFLHdCQUFvQixFQUFFO0FBQUEsYUFBTWtFLFFBQVEsQ0FBQ0ksMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0F0RHhCO0FBdURFbkUsd0JBQW9CLEVBQUU7QUFBQSxhQUFNK0QsUUFBUSxDQUFDSywyRUFBQSxFQUFELENBQWQ7QUFBQSxLQXZEeEI7QUF3REV0RSwyQkFBdUIsRUFBRTtBQUFBLGFBQ3ZCaUUsUUFBUSxDQUFDTSxpRkFBQSxFQUFELENBRGU7QUFBQSxLQXhEM0I7QUEwREV0RSx1QkFBbUIsRUFBRTtBQUFBLGFBQU1nRSxRQUFRLENBQUNPLHlFQUFBLEVBQUQsQ0FBZDtBQUFBO0FBMUR2Qiw2SEEyRHdCO0FBQUEsV0FBTVAsUUFBUSxDQUFDSywyRUFBQSxFQUFELENBQWQ7QUFBQSxHQTNEeEIsc0lBNkRtQztBQUFBLFdBQy9CTCxRQUFRLENBQUNDLHNGQUFBLEVBQUQsQ0FEdUI7QUFBQSxHQTdEbkMsd0lBK0RxQywyQ0FBQy9HLEtBQUQsRUFBUUgsVUFBUjtBQUFBLFdBQ2pDaUgsUUFBUSxDQUFDQyx3RkFBQSxDQUFrQy9HLEtBQWxDLEVBQXlDSCxVQUF6QyxDQUFELENBRHlCO0FBQUEsR0EvRHJDLCtHQWtFWTtBQUFBLFdBQU1pSCxRQUFRLENBQUNRLDJEQUFBLEVBQUQsQ0FBZDtBQUFBLEdBbEVaO0FBb0VELENBckVEOztBQXVFZUMsMkhBQU8sQ0FDcEJqQixlQURvQixFQUVwQk8sa0JBRm9CLENBQVAsQ0FHYlcsd0ZBQWdCLENBQUNDLDRFQUFVLENBQUMvSixNQUFELENBQVYsQ0FBbUJ3QixpQkFBbkIsQ0FBRCxFQUF3Q3dJLHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi5jODRlYTZhYjAwOTkzN2Y4MjY4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFB1cmNoYXNlRWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUVkaXRcIjtcclxuaW1wb3J0IFB1cmNoYXNlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3B1cmNoYXNlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGRlcHRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZGVwdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBlbXBsb3llZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0VHlwZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0VHlwZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFVuaXRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFVuaXRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgYXV0aEFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuLy9pbXBvcnQgeyB0aHJvd3MgfSBmcm9tICdhc3NlcnQnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q5ZGRkZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGhlaWdodDogXCI5MHZoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgUHVyY2hhc2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBpc09wZW5BbGVydDogZmFsc2UsXHJcbiAgICBhbGVydENvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRlcHRMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVHlwZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVW5pdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5wcm9wcy5lcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmRlcHRFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZXB0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLnByb2R1Y3RFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5nb2xkVHlwZUVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpXHJcbiAgICApIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5wdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbXBsb3llZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZW1wbG95ZWVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlRGlzcGF0Y2goZW1wbG95ZWVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHByb2R1Y3RJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaChwcm9kdWN0SWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBnb2xkVHlwZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZ29sZFR5cGVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2goZ29sZFR5cGVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlR29sZFVuaXRJZEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZERpc3BhdGNoKFxyXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIHZhbGlkYXRpb25cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHB1cmNoYXNlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudmFsdWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmVtcGxveWVlSWQudmFsdWUsXHJcbiAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHJvZHVjdElkLnZhbHVlLFxyXG4gICAgICBnb2xkVHlwZUlkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnZhbHVlLFxyXG4gICAgICB3ZWlnaHQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnZhbHVlLFxyXG4gICAgICBnb2xkVW5pdElkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5nb2xkVW5pdElkLnZhbHVlLFxyXG4gICAgICBxdWFudGl0eTogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS52YWx1ZSxcclxuICAgICAgaW5wdXREYXRlOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5pZCkge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlQWRkRGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5wdXJjaGFzZVVwZGF0ZURpc3BhdGNoKHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkLCBwdXJjaGFzZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICAvLyBpc09wZW5BbGVydDogdHJ1ZSxcclxuICAgICAgYWxlcnRDb250ZW50OiBcIkzGsHVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRWRpdEhhbmRsZXIgPSAoZXZlbnQsIHB1cmNoYXNlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gcHVyY2hhc2UuaWQgPSBwdXJjaGFzZS5rZXk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdERpc3BhdGNoKHB1cmNoYXNlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IHB1cmNoYXNlLCBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIiB9KTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlbGV0ZUhhbmRsZXIgPSAoZXZlbnQsIHB1cmNoYXNlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgZGlhbG9nQ29udGVudDogcHVyY2hhc2UubmFtZSArIFwiIHPhur0gYuG7iyB4w7NhP1wiLFxyXG4gICAgICBzZWxlY3RlZEl0ZW06IHB1cmNoYXNlLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZGlhbG9nQ2xvc2UgPSAoZXZlbnQsIGlzT0spID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNPSykge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVsZXRlRGlzcGF0Y2godGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ua2V5KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQYXBlckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgIGhhbmRsZT1cIiNkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBjYW5jZWw9eydbY2xhc3MqPVwiTXVpRGlhbG9nQ29udGVudC1yb290XCJdJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxQYXBlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUFsZXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbkFsZXJ0OiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gUHVyY2hhc2VDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICB7LyogRXJyb3IgUG9wdXAgKi99XHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMucHJvcHMuZXJyb3J9IG1vZGFsQ2xvc2VkPXt0aGlzLmVycm9yQ29uZmlybWVkSGFuZGxlcn0+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciA/IHRoaXMucHJvcHMuZXJyb3IubWVzc2FnZSA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICB7LyogSW5mbyBBbGVydCAqL31cclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNPcGVuQWxlcnR9XHJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9XHJcbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGVydENvbnRlbnQgKyBcIiB0aMOgbmggY8O0bmcuXCJ9XHJcbiAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgQ+G6o25oIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8UGFwZXI+Tmjhuq1wIG11YTwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRMaXN0PXt0aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q9e3RoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFVuaXRMaXN0PXt0aGlzLnByb3BzLmdvbGRVbml0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyPXt0aGlzLnB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VOYW1lQ2hhbmdlZD17dGhpcy5wdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFVuaXRJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VDcmVhdGVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VTYXZlSGFuZGxlcj17dGhpcy5wdXJjaGFzZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRMaXN0PXt0aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q9e3RoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFVuaXRMaXN0PXt0aGlzLnByb3BzLmdvbGRVbml0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFZGl0PXt0aGlzLnB1cmNoYXNlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVsZXRlPXt0aGlzLnB1cmNoYXNlRGVsZXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHVyY2hhc2VFZGl0OiBzdGF0ZS5wdXJjaGFzZS5wdXJjaGFzZUVkaXQsXHJcbiAgICBwdXJjaGFzZUxpc3Q6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlTGlzdCxcclxuICAgIGRlcHRMaXN0OiBzdGF0ZS5kZXB0LmRlcHRMaXN0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBwcm9kdWN0VHlwZUxpc3Q6IHN0YXRlLnByb2R1Y3RUeXBlLnByb2R1Y3RUeXBlTGlzdCxcclxuICAgIHByb2R1Y3RMaXN0OiBzdGF0ZS5wcm9kdWN0LnByb2R1Y3RMaXN0LFxyXG4gICAgZ29sZFR5cGVMaXN0OiBzdGF0ZS5nb2xkVHlwZS5nb2xkVHlwZUxpc3QsXHJcbiAgICBnb2xkVW5pdExpc3Q6IHN0YXRlLmdvbGRVbml0LmdvbGRVbml0TGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5wdXJjaGFzZS5lcnJvcixcclxuICAgIGRlcHRFcnJvcjogc3RhdGUuZGVwdC5lcnJvcixcclxuICAgIGVtcGxveWVlRXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gICAgcHJvZHVjdFR5cGVFcnJvcjogc3RhdGUucHJvZHVjdFR5cGUuZXJyb3IsXHJcbiAgICBwcm9kdWN0RXJyb3I6IHN0YXRlLnByb2R1Y3QuZXJyb3IsXHJcbiAgICBnb2xkVHlwZUVycm9yOiBzdGF0ZS5nb2xkVHlwZS5lcnJvcixcclxuICAgIGdvbGRVbml0RXJyb3I6IHN0YXRlLmdvbGRVbml0LmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUHJvZHVjdElkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1cygpKSxcclxuICAgIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlV2VpZ2h0Rm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVdlaWdodEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVdlaWdodENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVF1YW50aXR5Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VRdWFudGl0eUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VJbnB1dERhdGVGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VDcmVhdGVEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUNyZWF0ZSgpKSxcclxuICAgIHB1cmNoYXNlQWRkRGlzcGF0Y2g6IChwdXJjaGFzZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUFkZChwdXJjaGFzZSkpLFxyXG5cclxuICAgIHB1cmNoYXNlRWRpdERpc3BhdGNoOiAocHVyY2hhc2UpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFZGl0KHB1cmNoYXNlKSksXHJcbiAgICBwdXJjaGFzZVVwZGF0ZURpc3BhdGNoOiAoaWQsIHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlVXBkYXRlKGlkLCBwdXJjaGFzZSkpLFxyXG5cclxuICAgIHB1cmNoYXNlRGVsZXRlRGlzcGF0Y2g6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlbGV0ZShpZCkpLFxyXG4gICAgcHVyY2hhc2VMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VMaXN0KCkpLFxyXG5cclxuICAgIHB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFcnJvckhhbmRsZWQoKSksXHJcblxyXG4gICAgZGVwdExpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZGVwdEFjaW9ucy5kZXB0TGlzdCgpKSxcclxuICAgIGVtcGxveWVlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChlbXBsb3llZUFjaW9ucy5lbXBsb3llZUxpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RUeXBlQWNpb25zLnByb2R1Y3RUeXBlTGlzdCgpKSxcclxuICAgIHByb2R1Y3RMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKHByb2R1Y3RBY2lvbnMucHJvZHVjdExpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG5cclxuICAgIHB1cmNoYXNlR29sZFVuaXRJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEVycm9ySGFuZGxlcih3aXRoU3R5bGVzKHN0eWxlcykoUHVyY2hhc2VDb250YWluZXIpLCBheGlvcykpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9