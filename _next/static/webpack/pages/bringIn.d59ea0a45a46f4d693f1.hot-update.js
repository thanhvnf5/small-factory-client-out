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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldUnitIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.purchaseGoldUnitIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "purchaseGoldUnitIdChangeHandler", function (event, validation) {
      event.preventDefault();

      _this.props.purchaseGoldUnitIdChangeDispatch(event.target.value, validation);
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
        goldUnitId: _this.props.purchaseEdit.goldUnitId.value,
        weight: _this.props.purchaseEdit.purchaseWeight.value,
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
          lineNumber: 285,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
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
          lineNumber: 306,
          columnNumber: 7
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 9
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 9
        }
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
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
          lineNumber: 321,
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
          lineNumber: 327,
          columnNumber: 11
        }
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
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
          lineNumber: 334,
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
          lineNumber: 341,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 13
        }
      }, "Nh\u1EADp mua")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 19
        }
      }, this.props.purchaseEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
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
        purchaseGoldUnitIdChanged: this.purchaseGoldUnitIdChangeHandler,
        purchaseGoldUnitIdFocusHandler: this.purchaseGoldUnitIdFocusHandler,
        purchaseDescriptionFocusHandler: this.purchaseDescriptionFocusHandler,
        purchaseDescriptionChanged: this.purchaseDescriptionChangedHandler,
        purchaseWeightFocusHandler: this.purchaseWeightFocusHandler,
        purchaseWeightChanged: this.purchaseWeightChangedHandler,
        purchaseQuantityFocusHandler: this.purchaseQuantityFocusHandler,
        purchaseQuantityChanged: this.purchaseQuantityChangedHandler,
        purchaseInputDateFocusHandler: this.purchaseInputDateFocusHandler,
        purchaseInputDateChanged: this.purchaseInputDateChangedHandler,
        purchaseCreateHandler: this.purchaseCreateHandler,
        purchaseSaveHandler: this.purchaseSaveHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
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
          lineNumber: 432,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZUlkIiwiaWQiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoIiwiZ29sZFR5cGVJZCIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoIiwicHVyY2hhc2VHb2xkVW5pdElkRm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZURpc3BhdGNoIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXNEaXNwYXRjaCIsInB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUlucHV0RGF0ZUZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWREaXNwYXRjaCIsInB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2giLCJwdXJjaGFzZSIsIm5hbWUiLCJwdXJjaGFzZUVkaXQiLCJwdXJjaGFzZU5hbWUiLCJnb2xkVW5pdElkIiwid2VpZ2h0IiwicHVyY2hhc2VXZWlnaHQiLCJxdWFudGl0eSIsInB1cmNoYXNlUXVhbnRpdHkiLCJpbnB1dERhdGUiLCJwdXJjaGFzZUlucHV0RGF0ZSIsImRlc2NyaXB0aW9uIiwicHVyY2hhc2VEZXNjcmlwdGlvbiIsInB1cmNoYXNlQWRkRGlzcGF0Y2giLCJwdXJjaGFzZVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJwdXJjaGFzZUVkaXREaXNwYXRjaCIsImlzT0siLCJwdXJjaGFzZURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJrZXkiLCJkZXB0TGlzdERpc3BhdGNoIiwiZW1wbG95ZWVMaXN0RGlzcGF0Y2giLCJwcm9kdWN0VHlwZUxpc3REaXNwYXRjaCIsInByb2R1Y3RMaXN0RGlzcGF0Y2giLCJnb2xkVHlwZUxpc3REaXNwYXRjaCIsImdvbGRVbml0TGlzdERpc3BhdGNoIiwicHVyY2hhc2VMaXN0RGlzcGF0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGVwdEVycm9yIiwiZW1wbG95ZWVFcnJvciIsInByb2R1Y3RUeXBlRXJyb3IiLCJwcm9kdWN0RXJyb3IiLCJnb2xkVHlwZUVycm9yIiwiZ29sZFVuaXRFcnJvciIsIm9uTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJlcnJvckNvbmZpcm1lZEhhbmRsZXIiLCJtZXNzYWdlIiwiaGFuZGxlQ2xvc2VBbGVydCIsImRpYWxvZ0Nsb3NlIiwiUGFwZXJDb21wb25lbnQiLCJjdXJzb3IiLCJ3YWl0aW5nIiwiZGVwdExpc3QiLCJlbXBsb3llZUxpc3QiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsImdvbGRUeXBlTGlzdCIsImdvbGRVbml0TGlzdCIsInB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlciIsInB1cmNoYXNlTmFtZUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlR29sZFVuaXRJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciIsInB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlSW5wdXREYXRlRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlQ3JlYXRlSGFuZGxlciIsInB1cmNoYXNlU2F2ZUhhbmRsZXIiLCJwdXJjaGFzZUxpc3QiLCJwdXJjaGFzZUVkaXRIYW5kbGVyIiwicHVyY2hhc2VEZWxldGVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZGVwdCIsImVtcGxveWVlIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0IiwiZ29sZFR5cGUiLCJnb2xkVW5pdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJkZXB0QWNpb25zIiwiZW1wbG95ZWVBY2lvbnMiLCJwcm9kdWN0VHlwZUFjaW9ucyIsInByb2R1Y3RBY2lvbnMiLCJnb2xkVHlwZUFjaW9ucyIsImdvbGRVbml0QWNpb25zIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEbUI7QUFLekJDLFFBQUksRUFBRTtBQUNKRCxZQUFNLEVBQUUsTUFETjtBQUVGRSxXQUFLLEVBQUUsTUFGTDtBQUdGQyxnQkFBVSxFQUFFLFlBSFY7QUFJRkMsb0JBQWMsRUFBRTtBQUpkLE9BS0RQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FMQyxFQUs0QjtBQUM1QkMsYUFBTyxFQUFFLE1BRG1CO0FBRTVCQyxjQUFRLEVBQUUsTUFGa0I7QUFHNUJD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QW9CLEVBQUU7QUFBQSxhQUFNa0UsUUFBUSxDQUFDSSwyRUFBQSxFQUFELENBQWQ7QUFBQSxLQTNEakI7QUE0RExyRSwyQkFBdUIsRUFBRTtBQUFBLGFBQ3ZCaUUsUUFBUSxDQUFDSyxpRkFBQSxFQUFELENBRGU7QUFBQSxLQTVEcEI7QUE4RExyRSx1QkFBbUIsRUFBRTtBQUFBLGFBQU1nRSxRQUFRLENBQUNNLHlFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBOURoQjtBQStETHJFLHdCQUFvQixFQUFFO0FBQUEsYUFBTStELFFBQVEsQ0FBQ08sMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0EvRGpCO0FBZ0VMckUsd0JBQW9CLEVBQUU7QUFBQSxhQUFNOEQsUUFBUSxDQUFDUSwyRUFBQSxFQUFELENBQWQ7QUFBQSxLQWhFakI7QUFrRUwzRCxZQUFRLEVBQUU7QUFBQSxhQUFNbUQsUUFBUSxDQUFDUywyREFBQSxFQUFELENBQWQ7QUFBQTtBQWxFTCxHQUFQO0FBb0VELENBckVEOztBQXVFZUMsMkhBQU8sQ0FDcEJsQixlQURvQixFQUVwQk8sa0JBRm9CLENBQVAsQ0FHYlksd0ZBQWdCLENBQUNDLDRFQUFVLENBQUNoSyxNQUFELENBQVYsQ0FBbUJ3QixpQkFBbkIsQ0FBRCxFQUF3Q3lJLHdEQUF4QyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi5kNTllYTBhNDVhNDZmNGQ2OTNmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgU25hY2tiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFB1cmNoYXNlRWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUVkaXRcIjtcclxuaW1wb3J0IFB1cmNoYXNlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZS9QdXJjaGFzZUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3B1cmNoYXNlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGRlcHRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZGVwdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBlbXBsb3llZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0VHlwZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0VHlwZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFVuaXRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFVuaXRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgYXV0aEFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuLy9pbXBvcnQgeyB0aHJvd3MgfSBmcm9tICdhc3NlcnQnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q5ZGRkZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGhlaWdodDogXCI5MHZoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgUHVyY2hhc2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBpc09wZW5BbGVydDogZmFsc2UsXHJcbiAgICBhbGVydENvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRlcHRMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHJvZHVjdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVHlwZUxpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nb2xkVW5pdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5wcm9wcy5lcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmRlcHRFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZXB0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0VHlwZUVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLnByb2R1Y3RFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpXHJcbiAgICApIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5wdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbXBsb3llZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZW1wbG95ZWVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlRGlzcGF0Y2goZW1wbG95ZWVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHByb2R1Y3RJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaChwcm9kdWN0SWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBnb2xkVHlwZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZ29sZFR5cGVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2goZ29sZFR5cGVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUdvbGRVbml0SWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaChcclxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB2YWxpZGF0aW9uXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyID0gKGV2ZW50LCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VJbnB1dERhdGVGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlSW5wdXREYXRlRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZERpc3BhdGNoKGV2ZW50LnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VDcmVhdGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUNyZWF0ZURpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VTYXZlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBwdXJjaGFzZSA9IHtcclxuICAgICAgbmFtZTogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VOYW1lLnZhbHVlLFxyXG4gICAgICBlbXBsb3llZUlkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5lbXBsb3llZUlkLnZhbHVlLFxyXG4gICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnByb2R1Y3RJZC52YWx1ZSxcclxuICAgICAgZ29sZFR5cGVJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuZ29sZFR5cGVJZC52YWx1ZSxcclxuICAgICAgZ29sZFVuaXRJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuZ29sZFVuaXRJZC52YWx1ZSxcclxuICAgICAgd2VpZ2h0OiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZVdlaWdodC52YWx1ZSxcclxuICAgICAgcXVhbnRpdHk6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlUXVhbnRpdHkudmFsdWUsXHJcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VJbnB1dERhdGUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZURlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICghdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQuaWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5wdXJjaGFzZUFkZERpc3BhdGNoKHB1cmNoYXNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMucHVyY2hhc2VVcGRhdGVEaXNwYXRjaCh0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5pZCwgcHVyY2hhc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgLy8gaXNPcGVuQWxlcnQ6IHRydWUsXHJcbiAgICAgIGFsZXJ0Q29udGVudDogXCJMxrB1XCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUVkaXRIYW5kbGVyID0gKGV2ZW50LCBwdXJjaGFzZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIHB1cmNoYXNlLmlkID0gcHVyY2hhc2Uua2V5O1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXREaXNwYXRjaChwdXJjaGFzZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBwdXJjaGFzZSwgc2VsZWN0ZWRJdGVtVHlwZTogXCJlZGl0XCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZWxldGVIYW5kbGVyID0gKGV2ZW50LCBwdXJjaGFzZSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IHB1cmNoYXNlLm5hbWUgKyBcIiBz4bq9IGLhu4sgeMOzYT9cIixcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBwdXJjaGFzZSxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogXCJkZWxldGVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5wdXJjaGFzZURlbGV0ZURpc3BhdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmtleSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VBbGVydCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5BbGVydDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIFB1cmNoYXNlQ29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgey8qIEVycm9yIFBvcHVwICovfVxyXG4gICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnByb3BzLmVycm9yfSBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuZXJyb3IgPyB0aGlzLnByb3BzLmVycm9yLm1lc3NhZ2UgOiBcIjw8RXJyb3I+PlwifVxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgey8qIEluZm8gQWxlcnQgKi99XHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzT3BlbkFsZXJ0fVxyXG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZUFsZXJ0fVxyXG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWxlcnQgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZUFsZXJ0fSBzZXZlcml0eT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxlcnRDb250ZW50ICsgXCIgdGjDoG5oIGPDtG5nLlwifVxyXG4gICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNEaWFsb2dPcGVufVxyXG4gICAgICAgICAgb25DbG9zZT17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXt0aGlzLlBhcGVyQ29tcG9uZW50fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpYWxvZ1RpdGxlIHN0eWxlPXt7IGN1cnNvcjogXCJtb3ZlXCIgfX0gaWQ9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIEPhuqNuaCBiw6FvXHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD57dGhpcy5zdGF0ZS5kaWFsb2dDb250ZW50fTwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEjhu6d5XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50LCB0cnVlKX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgxJDhu5NuZyDDvVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFBhcGVyPk5o4bqtcCBtdWE8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxQdXJjaGFzZUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMucHVyY2hhc2VFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0TGlzdD17dGhpcy5wcm9wcy5kZXB0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVMaXN0PXt0aGlzLnByb3BzLmVtcGxveWVlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0PXt0aGlzLnByb3BzLnByb2R1Y3RUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Q9e3RoaXMucHJvcHMucHJvZHVjdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRUeXBlTGlzdD17dGhpcy5wcm9wcy5nb2xkVHlwZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRVbml0TGlzdD17dGhpcy5wcm9wcy5nb2xkVW5pdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcj17dGhpcy5wdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlTmFtZUNoYW5nZWQ9e3RoaXMucHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFVuaXRJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Rm9jdXNIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VDcmVhdGVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VTYXZlSGFuZGxlcj17dGhpcy5wdXJjaGFzZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRMaXN0PXt0aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q9e3RoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFVuaXRMaXN0PXt0aGlzLnByb3BzLmdvbGRVbml0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFZGl0PXt0aGlzLnB1cmNoYXNlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVsZXRlPXt0aGlzLnB1cmNoYXNlRGVsZXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHVyY2hhc2VFZGl0OiBzdGF0ZS5wdXJjaGFzZS5wdXJjaGFzZUVkaXQsXHJcbiAgICBwdXJjaGFzZUxpc3Q6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlTGlzdCxcclxuICAgIGRlcHRMaXN0OiBzdGF0ZS5kZXB0LmRlcHRMaXN0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBwcm9kdWN0VHlwZUxpc3Q6IHN0YXRlLnByb2R1Y3RUeXBlLnByb2R1Y3RUeXBlTGlzdCxcclxuICAgIHByb2R1Y3RMaXN0OiBzdGF0ZS5wcm9kdWN0LnByb2R1Y3RMaXN0LFxyXG4gICAgZ29sZFR5cGVMaXN0OiBzdGF0ZS5nb2xkVHlwZS5nb2xkVHlwZUxpc3QsXHJcbiAgICBnb2xkVW5pdExpc3Q6IHN0YXRlLmdvbGRVbml0LmdvbGRVbml0TGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5wdXJjaGFzZS5lcnJvcixcclxuICAgIGRlcHRFcnJvcjogc3RhdGUuZGVwdC5lcnJvcixcclxuICAgIGVtcGxveWVlRXJyb3I6IHN0YXRlLmVtcGxveWVlLmVycm9yLFxyXG4gICAgcHJvZHVjdFR5cGVFcnJvcjogc3RhdGUucHJvZHVjdFR5cGUuZXJyb3IsXHJcbiAgICBwcm9kdWN0RXJyb3I6IHN0YXRlLnByb2R1Y3QuZXJyb3IsXHJcbiAgICBnb2xkVHlwZUVycm9yOiBzdGF0ZS5nb2xkVHlwZS5lcnJvcixcclxuICAgIGdvbGRVbml0RXJyb3I6IHN0YXRlLmdvbGRVbml0LmVycm9yLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZU5hbWVGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlTmFtZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTmFtZUNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUHJvZHVjdElkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVByb2R1Y3RJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlR29sZFVuaXRJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZURlc2NyaXB0aW9uRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVdlaWdodEZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VXZWlnaHRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VRdWFudGl0eUZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlSW5wdXREYXRlRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VDcmVhdGUoKSksXHJcbiAgICBwdXJjaGFzZUFkZERpc3BhdGNoOiAocHVyY2hhc2UpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VBZGQocHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVkaXREaXNwYXRjaDogKHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRWRpdChwdXJjaGFzZSkpLFxyXG4gICAgcHVyY2hhc2VVcGRhdGVEaXNwYXRjaDogKGlkLCBwdXJjaGFzZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVVwZGF0ZShpZCwgcHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZWxldGUoaWQpKSxcclxuICAgIHB1cmNoYXNlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTGlzdCgpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRXJyb3JIYW5kbGVkKCkpLFxyXG5cclxuICAgIGRlcHRMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGRlcHRBY2lvbnMuZGVwdExpc3QoKSksXHJcbiAgICBlbXBsb3llZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZW1wbG95ZWVBY2lvbnMuZW1wbG95ZWVMaXN0KCkpLFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RUeXBlQWNpb25zLnByb2R1Y3RUeXBlTGlzdCgpKSxcclxuICAgIHByb2R1Y3RMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKHByb2R1Y3RBY2lvbnMucHJvZHVjdExpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG4gICAgZ29sZFVuaXRMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGdvbGRVbml0QWNpb25zLmdvbGRVbml0TGlzdCgpKSxcclxuXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShQdXJjaGFzZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=