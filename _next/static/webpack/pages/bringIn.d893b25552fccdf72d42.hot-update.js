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
          lineNumber: 290,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
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
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401 || this.props.deptError && this.props.deptError.response && this.props.deptError.response.status == 401 || this.props.employeeError && this.props.employeeError.response && this.props.employeeError.response.status == 401 || this.props.productTypeError && this.props.productTypeError.response && this.props.productTypeError.response.status == 401 || this.props.productError && this.props.productError.response && this.props.productError.response.status == 401 || (this.props.goldTypeError && this.props.goldTypeError.response && this.props.goldTypeError.response.status == 401)(this.props.goldTypeError && this.props.goldUnitError.response && this.props.goldUnitError.response.status == 401)) {
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
          lineNumber: 311,
          columnNumber: 7
        }
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 9
        }
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 9
        }
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
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
          lineNumber: 326,
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
          lineNumber: 332,
          columnNumber: 11
        }
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 13
        }
      }, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
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
          lineNumber: 339,
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
          lineNumber: 346,
          columnNumber: 13
        }
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 13
        }
      }, "Nh\u1EADp mua")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 19
        }
      }, this.props.purchaseEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
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
          lineNumber: 366,
          columnNumber: 23
        }
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 19
        }
      }, this.props.purchaseList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
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
          lineNumber: 436,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvUHVyY2hhc2VDb250YWluZXIvUHVyY2hhc2VDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiUHVyY2hhc2VDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwicHVyY2hhc2VOYW1lRm9jdXNEaXNwYXRjaCIsInZhbGlkYXRpb24iLCJwdXJjaGFzZU5hbWVDaGFuZ2VkRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzRGlzcGF0Y2giLCJlbXBsb3llZUlkIiwiaWQiLCJwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaCIsInB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCIsInByb2R1Y3RJZCIsInB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoIiwiZ29sZFR5cGVJZCIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZURpc3BhdGNoIiwicHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2giLCJwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZERpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoIiwicHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkRGlzcGF0Y2giLCJwdXJjaGFzZUNyZWF0ZURpc3BhdGNoIiwicHVyY2hhc2UiLCJuYW1lIiwicHVyY2hhc2VFZGl0IiwicHVyY2hhc2VOYW1lIiwid2VpZ2h0IiwicHVyY2hhc2VXZWlnaHQiLCJnb2xkVW5pdElkIiwicXVhbnRpdHkiLCJwdXJjaGFzZVF1YW50aXR5IiwiaW5wdXREYXRlIiwicHVyY2hhc2VJbnB1dERhdGUiLCJkZXNjcmlwdGlvbiIsInB1cmNoYXNlRGVzY3JpcHRpb24iLCJwdXJjaGFzZUFkZERpc3BhdGNoIiwicHVyY2hhc2VVcGRhdGVEaXNwYXRjaCIsInNldFN0YXRlIiwicHVyY2hhc2VFZGl0RGlzcGF0Y2giLCJpc09LIiwicHVyY2hhc2VEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwia2V5IiwiZGVwdExpc3REaXNwYXRjaCIsImVtcGxveWVlTGlzdERpc3BhdGNoIiwicHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2giLCJwcm9kdWN0TGlzdERpc3BhdGNoIiwiZ29sZFR5cGVMaXN0RGlzcGF0Y2giLCJnb2xkVW5pdExpc3REaXNwYXRjaCIsInB1cmNoYXNlTGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlcHRFcnJvciIsImVtcGxveWVlRXJyb3IiLCJwcm9kdWN0VHlwZUVycm9yIiwicHJvZHVjdEVycm9yIiwiZ29sZFR5cGVFcnJvciIsImdvbGRVbml0RXJyb3IiLCJvbkxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjbGFzc2VzIiwiZXJyb3JDb25maXJtZWRIYW5kbGVyIiwibWVzc2FnZSIsImhhbmRsZUNsb3NlQWxlcnQiLCJkaWFsb2dDbG9zZSIsIlBhcGVyQ29tcG9uZW50IiwiY3Vyc29yIiwid2FpdGluZyIsImRlcHRMaXN0IiwiZW1wbG95ZWVMaXN0IiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdExpc3QiLCJnb2xkVHlwZUxpc3QiLCJwdXJjaGFzZU5hbWVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlciIsInB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZUVtcGxveWVlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlciIsInB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIiLCJwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VXZWlnaHRGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyIiwicHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZEhhbmRsZXIiLCJwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyIiwicHVyY2hhc2VRdWFudGl0eUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VJbnB1dERhdGVGb2N1c0hhbmRsZXIiLCJwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyIiwicHVyY2hhc2VDcmVhdGVIYW5kbGVyIiwicHVyY2hhc2VTYXZlSGFuZGxlciIsInB1cmNoYXNlTGlzdCIsInB1cmNoYXNlRWRpdEhhbmRsZXIiLCJwdXJjaGFzZURlbGV0ZUhhbmRsZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJkZXB0IiwiZW1wbG95ZWUiLCJwcm9kdWN0VHlwZSIsInByb2R1Y3QiLCJnb2xkVHlwZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInB1cmNoYXNlRXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJkZXB0QWNpb25zIiwiZW1wbG95ZWVBY2lvbnMiLCJnb2xkVHlwZUFjaW9ucyIsInByb2R1Y3RUeXBlQWNpb25zIiwicHJvZHVjdEFjaW9ucyIsImF1dGhBY3Rpb25zIiwiY29ubmVjdCIsIndpdGhFcnJvckhhbmRsZXIiLCJ3aXRoU3R5bGVzIiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBRG1CO0FBS3pCQyxRQUFJLEVBQUU7QUFDSkQsWUFBTSxFQUFFLE1BRE47QUFFRkUsV0FBSyxFQUFFLE1BRkw7QUFHRkMsZ0JBQVUsRUFBRSxZQUhWO0FBSUZDLG9CQUFjLEVBQUU7QUFKZCxPQUtEUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBTEMsRUFLNEI7QUFDNUJDLGFBQU8sRUFBRSxNQURtQjtBQUU1QkMsY0FBUSxFQUFFLE1BRmtCO0FBRzVCQyxlQUFTLEVBQUU7QUFIaUIsS0FMNUIsQ0FMcUI7QUFnQnpCQyxRQUFJLEVBQUU7QUFDSlYsWUFBTSxFQUFFLE1BRE47QUFFRlcsWUFBTSxFQUFFO0FBRk4sT0FHRGQsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhDLEVBRzRCO0FBQzVCTixZQUFNLEVBQUU7QUFEb0IsS0FINUIsQ0FoQnFCO0FBdUJ6QlksU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRWhCLEtBQUssQ0FBQ2lCLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsZUFBUyxFQUFFLFFBRk47QUFHTEMsV0FBSyxFQUFFbkIsS0FBSyxDQUFDb0IsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUhyQjtBQXZCa0IsR0FBWjtBQUFBLENBQWY7QUE4QkE7OztJQUVNQyxpQjs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxrQkFBWSxFQUFFLEtBRFI7QUFFTkMsbUJBQWEsRUFBRSxJQUZUO0FBR05DLGlCQUFXLEVBQUUsS0FIUDtBQUlOQyxrQkFBWSxFQUFFLElBSlI7QUFLTkMsa0JBQVksRUFBRSxJQUxSO0FBTU5DLHNCQUFnQixFQUFFO0FBTlosSzs7bU9BMERtQixVQUFDQyxLQUFELEVBQVc7QUFDcENBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLQyxLQUFMLENBQVdDLHlCQUFYO0FBQ0QsSzs7cU9BRTRCLFVBQUNILEtBQUQsRUFBUUksVUFBUixFQUF1QjtBQUNsREosV0FBSyxDQUFDQyxjQUFOOztBQUNBLFlBQUtDLEtBQUwsQ0FBV0csMkJBQVgsQ0FBdUNMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxLQUFwRCxFQUEyREgsVUFBM0Q7QUFDRCxLOzt5T0FFZ0MsVUFBQ0osS0FBRCxFQUFXO0FBQzFDQSxXQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBS0MsS0FBTCxDQUFXTSwrQkFBWDtBQUNELEs7OzBPQUVpQyxVQUFDUixLQUFELEVBQVFGLFlBQVIsRUFBc0JNLFVBQXRCLEVBQXFDO0FBQ3JFSixXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJUSxVQUFVLEdBQUcsSUFBakI7O0FBQ0EsVUFBSVgsWUFBSixFQUFrQjtBQUNoQlcsa0JBQVUsR0FBR1gsWUFBWSxDQUFDWSxFQUExQjtBQUNEOztBQUNELFlBQUtSLEtBQUwsQ0FBV1MsZ0NBQVgsQ0FBNENGLFVBQTVDLEVBQXdETCxVQUF4RDtBQUNELEs7O3dPQUUrQixVQUFDSixLQUFELEVBQVc7QUFDekNBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLQyxLQUFMLENBQVdVLDhCQUFYO0FBQ0QsSzs7eU9BRWdDLFVBQUNaLEtBQUQsRUFBUUYsWUFBUixFQUFzQk0sVUFBdEIsRUFBcUM7QUFDcEVKLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQUlZLFNBQVMsR0FBRyxJQUFoQjs7QUFDQSxVQUFJZixZQUFKLEVBQWtCO0FBQ2hCZSxpQkFBUyxHQUFHZixZQUFZLENBQUNZLEVBQXpCO0FBQ0Q7O0FBQ0QsWUFBS1IsS0FBTCxDQUFXWSwrQkFBWCxDQUEyQ0QsU0FBM0MsRUFBc0RULFVBQXREO0FBQ0QsSzs7eU9BRWdDLFVBQUNKLEtBQUQsRUFBVztBQUMxQ0EsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFlBQUtDLEtBQUwsQ0FBV2EsK0JBQVg7QUFDRCxLOzswT0FFaUMsVUFBQ2YsS0FBRCxFQUFRRixZQUFSLEVBQXNCTSxVQUF0QixFQUFxQztBQUNyRUosV0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBSWUsVUFBVSxHQUFHLElBQWpCOztBQUNBLFVBQUlsQixZQUFKLEVBQWtCO0FBQ2hCa0Isa0JBQVUsR0FBR2xCLFlBQVksQ0FBQ1ksRUFBMUI7QUFDRDs7QUFDRCxZQUFLUixLQUFMLENBQVdlLGdDQUFYLENBQTRDRCxVQUE1QyxFQUF3RFosVUFBeEQ7QUFDRCxLOzswT0FFaUMsWUFBTTtBQUN0QyxZQUFLRixLQUFMLENBQVdnQixnQ0FBWDtBQUNELEs7OzRPQUVtQyxVQUFDbEIsS0FBRCxFQUFRSSxVQUFSLEVBQXVCO0FBQ3pESixXQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBS0MsS0FBTCxDQUFXaUIsa0NBQVgsQ0FDRW5CLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxLQURmLEVBRUVILFVBRkY7QUFJRCxLOztxT0FFNEIsWUFBTTtBQUNqQyxZQUFLRixLQUFMLENBQVdrQiwyQkFBWDtBQUNELEs7O3VPQUU4QixVQUFDcEIsS0FBRCxFQUFRSSxVQUFSLEVBQXVCO0FBQ3BEO0FBQ0EsWUFBS0YsS0FBTCxDQUFXbUIsNkJBQVgsQ0FBeUNyQixLQUFLLENBQUNNLE1BQU4sQ0FBYUMsS0FBdEQsRUFBNkRILFVBQTdEO0FBQ0QsSzs7eU9BRWdDLFlBQU07QUFDckMsWUFBS0YsS0FBTCxDQUFXb0IsK0JBQVg7QUFDRCxLOzsyT0FFa0MsVUFBQ3RCLEtBQUQsRUFBUUksVUFBUixFQUF1QjtBQUN4RDtBQUNBLFlBQUtGLEtBQUwsQ0FBV3FCLGlDQUFYLENBQ0V2QixLQUFLLENBQUNNLE1BQU4sQ0FBYUMsS0FEZixFQUVFSCxVQUZGO0FBSUQsSzs7dU9BRThCLFlBQU07QUFDbkMsWUFBS0YsS0FBTCxDQUFXc0IsNkJBQVg7QUFDRCxLOzt5T0FFZ0MsVUFBQ3hCLEtBQUQsRUFBUUksVUFBUixFQUF1QjtBQUN0RDtBQUNBLFlBQUtGLEtBQUwsQ0FBV3VCLCtCQUFYLENBQTJDekIsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQXhELEVBQStESCxVQUEvRDtBQUNELEs7O3dPQUUrQixZQUFNO0FBQ3BDLFlBQUtGLEtBQUwsQ0FBV3dCLDhCQUFYO0FBQ0QsSzs7ME9BRWlDLFVBQUMxQixLQUFELEVBQVFJLFVBQVIsRUFBdUI7QUFDdkQ7QUFDQSxZQUFLRixLQUFMLENBQVd5QixnQ0FBWCxDQUE0QzNCLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxLQUF6RCxFQUFnRUgsVUFBaEU7QUFDRCxLOztnT0FFdUIsVUFBQ0osS0FBRCxFQUFXO0FBQ2pDQSxXQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBS0MsS0FBTCxDQUFXMEIsc0JBQVg7QUFDRCxLOzs4TkFFcUIsVUFBQzVCLEtBQUQsRUFBVztBQUMvQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBSTRCLFFBQVEsR0FBRztBQUNiQyxZQUFJLEVBQUUsTUFBSzVCLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JDLFlBQXhCLENBQXFDekIsS0FEOUI7QUFFYkUsa0JBQVUsRUFBRSxNQUFLUCxLQUFMLENBQVc2QixZQUFYLENBQXdCdEIsVUFBeEIsQ0FBbUNGLEtBRmxDO0FBR2JNLGlCQUFTLEVBQUUsTUFBS1gsS0FBTCxDQUFXNkIsWUFBWCxDQUF3QmxCLFNBQXhCLENBQWtDTixLQUhoQztBQUliUyxrQkFBVSxFQUFFLE1BQUtkLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JmLFVBQXhCLENBQW1DVCxLQUpsQztBQUtiMEIsY0FBTSxFQUFFLE1BQUsvQixLQUFMLENBQVc2QixZQUFYLENBQXdCRyxjQUF4QixDQUF1QzNCLEtBTGxDO0FBTWI0QixrQkFBVSxFQUFFLE1BQUtqQyxLQUFMLENBQVc2QixZQUFYLENBQXdCSSxVQUF4QixDQUFtQzVCLEtBTmxDO0FBT2I2QixnQkFBUSxFQUFFLE1BQUtsQyxLQUFMLENBQVc2QixZQUFYLENBQXdCTSxnQkFBeEIsQ0FBeUM5QixLQVB0QztBQVFiK0IsaUJBQVMsRUFBRSxNQUFLcEMsS0FBTCxDQUFXNkIsWUFBWCxDQUF3QlEsaUJBQXhCLENBQTBDaEMsS0FSeEM7QUFTYmlDLG1CQUFXLEVBQUUsTUFBS3RDLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JVLG1CQUF4QixDQUE0Q2xDO0FBVDVDLE9BQWY7O0FBV0EsVUFBSSxDQUFDLE1BQUtMLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JyQixFQUE3QixFQUFpQztBQUMvQixjQUFLUixLQUFMLENBQVd3QyxtQkFBWCxDQUErQmIsUUFBL0I7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLM0IsS0FBTCxDQUFXeUMsc0JBQVgsQ0FBa0MsTUFBS3pDLEtBQUwsQ0FBVzZCLFlBQVgsQ0FBd0JyQixFQUExRCxFQUE4RG1CLFFBQTlEO0FBQ0Q7O0FBQ0QsWUFBS2UsUUFBTCxDQUFjO0FBQ1o5QyxvQkFBWSxFQUFFLElBREY7QUFFWkMsd0JBQWdCLEVBQUUsSUFGTjtBQUdaO0FBQ0FGLG9CQUFZLEVBQUU7QUFKRixPQUFkO0FBTUQsSzs7OE5BRXFCLFVBQUNHLEtBQUQsRUFBUTZCLFFBQVIsRUFBcUI7QUFDekM3QixXQUFLLENBQUNDLGNBQU4sR0FEeUMsQ0FFekM7O0FBQ0EsWUFBS0MsS0FBTCxDQUFXMkMsb0JBQVgsQ0FBZ0NoQixRQUFoQzs7QUFDQSxZQUFLZSxRQUFMLENBQWM7QUFBRTlDLG9CQUFZLEVBQUUrQixRQUFoQjtBQUEwQjlCLHdCQUFnQixFQUFFO0FBQTVDLE9BQWQ7QUFDRCxLOztnT0FFdUIsVUFBQ0MsS0FBRCxFQUFRNkIsUUFBUixFQUFxQjtBQUMzQzdCLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLMkMsUUFBTCxDQUFjO0FBQ1psRCxvQkFBWSxFQUFFLElBREY7QUFFWkMscUJBQWEsRUFBRWtDLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQixhQUZuQjtBQUdaaEMsb0JBQVksRUFBRStCLFFBSEY7QUFJWjlCLHdCQUFnQixFQUFFO0FBSk4sT0FBZDtBQU1ELEs7O3NOQUVhLFVBQUNDLEtBQUQsRUFBUThDLElBQVIsRUFBaUI7QUFDN0I5QyxXQUFLLENBQUNDLGNBQU47O0FBQ0EsVUFBSTZDLElBQUosRUFBVTtBQUNSLGNBQUs1QyxLQUFMLENBQVc2QyxzQkFBWCxDQUFrQyxNQUFLQyxLQUFMLENBQVdsRCxZQUFYLENBQXdCbUQsR0FBMUQ7O0FBQ0EsY0FBS0wsUUFBTCxDQUFjO0FBQ1psRCxzQkFBWSxFQUFFLEtBREY7QUFFWkksc0JBQVksRUFBRSxJQUZGO0FBR1pDLDBCQUFnQixFQUFFO0FBSE4sU0FBZDtBQUtELE9BUEQsTUFPTztBQUNMLGNBQUs2QyxRQUFMLENBQWM7QUFBRWxELHNCQUFZLEVBQUU7QUFBaEIsU0FBZDtBQUNEO0FBQ0YsSzs7eU5BRWdCLFVBQUNRLEtBQUQsRUFBVztBQUMxQixhQUNFLE1BQUMsdURBQUQ7QUFDRSxjQUFNLEVBQUMseUJBRFQ7QUFFRSxjQUFNLEVBQUUsa0NBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlFLE1BQUMsZ0VBQUQseUZBQVdBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpGLENBREY7QUFRRCxLOzsyTkFFa0IsWUFBTTtBQUN2QixZQUFLMEMsUUFBTCxDQUFjO0FBQUVoRCxtQkFBVyxFQUFFO0FBQWYsT0FBZDtBQUNELEs7Ozs7Ozs7O0FBbk9EO3dDQUNvQjtBQUNsQixXQUFLTSxLQUFMLENBQVdnRCxnQkFBWDtBQUNBLFdBQUtoRCxLQUFMLENBQVdpRCxvQkFBWDtBQUNBLFdBQUtqRCxLQUFMLENBQVdrRCx1QkFBWDtBQUNBLFdBQUtsRCxLQUFMLENBQVdtRCxtQkFBWDtBQUNBLFdBQUtuRCxLQUFMLENBQVdvRCxvQkFBWDtBQUNBLFdBQUtwRCxLQUFMLENBQVdxRCxvQkFBWDtBQUNBLFdBQUtyRCxLQUFMLENBQVdzRCxvQkFBWDtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQ0csS0FBS3RELEtBQUwsQ0FBV3VELEtBQVgsSUFDQyxLQUFLdkQsS0FBTCxDQUFXdUQsS0FBWCxDQUFpQkMsUUFEbEIsSUFFQyxLQUFLeEQsS0FBTCxDQUFXdUQsS0FBWCxDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLElBQW9DLEdBRnRDLElBR0MsS0FBS3pELEtBQUwsQ0FBVzBELFNBQVgsSUFDQyxLQUFLMUQsS0FBTCxDQUFXMEQsU0FBWCxDQUFxQkYsUUFEdEIsSUFFQyxLQUFLeEQsS0FBTCxDQUFXMEQsU0FBWCxDQUFxQkYsUUFBckIsQ0FBOEJDLE1BQTlCLElBQXdDLEdBTDFDLElBTUMsS0FBS3pELEtBQUwsQ0FBVzJELGFBQVgsSUFDQyxLQUFLM0QsS0FBTCxDQUFXMkQsYUFBWCxDQUF5QkgsUUFEMUIsSUFFQyxLQUFLeEQsS0FBTCxDQUFXMkQsYUFBWCxDQUF5QkgsUUFBekIsQ0FBa0NDLE1BQWxDLElBQTRDLEdBUjlDLElBU0MsS0FBS3pELEtBQUwsQ0FBVzRELGdCQUFYLElBQ0MsS0FBSzVELEtBQUwsQ0FBVzRELGdCQUFYLENBQTRCSixRQUQ3QixJQUVDLEtBQUt4RCxLQUFMLENBQVc0RCxnQkFBWCxDQUE0QkosUUFBNUIsQ0FBcUNDLE1BQXJDLElBQStDLEdBWGpELElBWUMsS0FBS3pELEtBQUwsQ0FBVzZELFlBQVgsSUFDQyxLQUFLN0QsS0FBTCxDQUFXNkQsWUFBWCxDQUF3QkwsUUFEekIsSUFFQyxLQUFLeEQsS0FBTCxDQUFXNkQsWUFBWCxDQUF3QkwsUUFBeEIsQ0FBaUNDLE1BQWpDLElBQTJDLEdBZDdDLElBZUEsQ0FDRSxLQUFLekQsS0FBTCxDQUFXOEQsYUFBWCxJQUNBLEtBQUs5RCxLQUFMLENBQVc4RCxhQUFYLENBQXlCTixRQUR6QixJQUVBLEtBQUt4RCxLQUFMLENBQVc4RCxhQUFYLENBQXlCTixRQUF6QixDQUFrQ0MsTUFBbEMsSUFBNEMsR0FIOUMsRUFLRSxLQUFLekQsS0FBTCxDQUFXOEQsYUFBWCxJQUNFLEtBQUs5RCxLQUFMLENBQVcrRCxhQUFYLENBQXlCUCxRQUQzQixJQUVFLEtBQUt4RCxLQUFMLENBQVcrRCxhQUFYLENBQXlCUCxRQUF6QixDQUFrQ0MsTUFBbEMsSUFBNEMsR0FQaEQsQ0FoQkYsRUF5QkU7QUFDQTtBQUNBO0FBQ0EsYUFBS3pELEtBQUwsQ0FBV2dFLFFBQVgsR0FIQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGOzs7O0FBc0xEOzZCQUVTO0FBQUE7O0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUNFLElBQUlDLElBQUosR0FBV0MsY0FBWCxLQUE4Qix3Q0FEaEM7QUFETyxVQUlDQyxPQUpELEdBSWEsS0FBS3JFLEtBSmxCLENBSUNxRSxPQUpEO0FBS1AsYUFDRTtBQUFLLGlCQUFTLEVBQUVBLE9BQU8sQ0FBQ3BHLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRSxNQUFDLG1FQUFEO0FBQU8sWUFBSSxFQUFFLEtBQUsrQixLQUFMLENBQVd1RCxLQUF4QjtBQUErQixtQkFBVyxFQUFFLEtBQUtlLHFCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS3RFLEtBQUwsQ0FBV3VELEtBQVgsR0FBbUIsS0FBS3ZELEtBQUwsQ0FBV3VELEtBQVgsQ0FBaUJnQixPQUFwQyxHQUE4QyxXQURqRCxDQUZGLEVBTUUsTUFBQywwREFBRDtBQUNFLFlBQUksRUFBRSxLQUFLekIsS0FBTCxDQUFXcEQsV0FEbkI7QUFFRSxlQUFPLEVBQUUsS0FBSzhFLGdCQUZoQjtBQUdFLHdCQUFnQixFQUFFLElBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRSxNQUFDLHVEQUFEO0FBQU8sZUFBTyxFQUFFLEtBQUtBLGdCQUFyQjtBQUF1QyxnQkFBUSxFQUFDLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLMUIsS0FBTCxDQUFXbkQsWUFBWCxHQUEwQixjQUQ3QixDQUxGLENBTkYsRUFlRSxNQUFDLGlFQUFEO0FBQ0UsWUFBSSxFQUFFLEtBQUttRCxLQUFMLENBQVd0RCxZQURuQjtBQUVFLGVBQU8sRUFBRSxpQkFBQ00sS0FBRDtBQUFBLGlCQUFXLE1BQUksQ0FBQzJFLFdBQUwsQ0FBaUIzRSxLQUFqQixDQUFYO0FBQUEsU0FGWDtBQUdFLHNCQUFjLEVBQUUsS0FBSzRFLGNBSHZCO0FBSUUsMkJBQWdCLHdCQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUUsTUFBQyxzRUFBRDtBQUFhLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBcEI7QUFBd0MsVUFBRSxFQUFDLHdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQU5GLEVBU0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9CLEtBQUs3QixLQUFMLENBQVdyRCxhQUEvQixDQURGLENBVEYsRUFZRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdFQUFEO0FBQ0UsaUJBQVMsTUFEWDtBQUVFLGVBQU8sRUFBRSxpQkFBQ0ssS0FBRDtBQUFBLGlCQUFXLE1BQUksQ0FBQzJFLFdBQUwsQ0FBaUIzRSxLQUFqQixDQUFYO0FBQUEsU0FGWDtBQUdFLGFBQUssRUFBQyxTQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFRRSxNQUFDLGdFQUFEO0FBQ0UsZUFBTyxFQUFFLGlCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDMkUsV0FBTCxDQUFpQjNFLEtBQWpCLEVBQXdCLElBQXhCLENBQVg7QUFBQSxTQURYO0FBRUUsYUFBSyxFQUFDLFNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFSRixDQVpGLENBZkYsRUEyQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLGlCQUFTLEVBQUV1RSxPQUFPLENBQUNqRyxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUs0QixLQUFMLENBQVc2QixZQUFYLENBQXdCK0MsT0FBeEIsR0FDQyxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxHQUdDLE1BQUMsMEVBQUQseUZBQ00sS0FBSzVFLEtBQUwsQ0FBVzZCLFlBRGpCO0FBRUUsZ0JBQVEsRUFBRSxLQUFLN0IsS0FBTCxDQUFXNkUsUUFGdkI7QUFHRSxvQkFBWSxFQUFFLEtBQUs3RSxLQUFMLENBQVc4RSxZQUgzQjtBQUlFLHVCQUFlLEVBQUUsS0FBSzlFLEtBQUwsQ0FBVytFLGVBSjlCO0FBS0UsbUJBQVcsRUFBRSxLQUFLL0UsS0FBTCxDQUFXZ0YsV0FMMUI7QUFNRSxvQkFBWSxFQUFFLEtBQUtoRixLQUFMLENBQVdpRixZQU4zQjtBQU9FLGdDQUF3QixFQUFFLEtBQUtDLHdCQVBqQztBQVFFLDJCQUFtQixFQUFFLEtBQUtDLDBCQVI1QjtBQVNFLGlDQUF5QixFQUN2QixLQUFLQywrQkFWVDtBQVlFLHNDQUE4QixFQUM1QixLQUFLQyw4QkFiVDtBQWVFLGdDQUF3QixFQUN0QixLQUFLQyw4QkFoQlQ7QUFrQkUscUNBQTZCLEVBQzNCLEtBQUtDLDZCQW5CVDtBQXFCRSxpQ0FBeUIsRUFDdkIsS0FBS0MsK0JBdEJUO0FBd0JFLHNDQUE4QixFQUM1QixLQUFLQyw4QkF6QlQ7QUEyQkUsdUNBQStCLEVBQzdCLEtBQUtDLCtCQTVCVDtBQThCRSxrQ0FBMEIsRUFDeEIsS0FBS0MsaUNBL0JUO0FBaUNFLGtDQUEwQixFQUN4QixLQUFLQywwQkFsQ1Q7QUFvQ0UsNkJBQXFCLEVBQ25CLEtBQUtDLDRCQXJDVDtBQXVDRSxzQ0FBOEIsRUFDNUIsS0FBS0MsOEJBeENUO0FBMENFLGlDQUF5QixFQUN2QixLQUFLQyxnQ0EzQ1Q7QUE2Q0Usb0NBQTRCLEVBQzFCLEtBQUtDLDRCQTlDVDtBQWdERSwrQkFBdUIsRUFDckIsS0FBS0MsOEJBakRUO0FBbURFLHFDQUE2QixFQUMzQixLQUFLQyw2QkFwRFQ7QUFzREUsZ0NBQXdCLEVBQ3RCLEtBQUtDLCtCQXZEVDtBQXlERSw2QkFBcUIsRUFBRSxLQUFLQyxxQkF6RDlCO0FBMERFLDJCQUFtQixFQUFFLEtBQUtDLG1CQTFENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKLENBREYsQ0FERixDQURGLEVBdUVFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLGlCQUFTLEVBQUVoQyxPQUFPLENBQUN4RixJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS21CLEtBQUwsQ0FBV3NHLFlBQVgsQ0FBd0IxQixPQUF4QixHQUNDLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELEdBR0MsTUFBQywwRUFBRCx5RkFDTSxLQUFLNUUsS0FBTCxDQUFXc0csWUFEakI7QUFFRSxnQkFBUSxFQUFFLEtBQUt0RyxLQUFMLENBQVc2RSxRQUZ2QjtBQUdFLG9CQUFZLEVBQUUsS0FBSzdFLEtBQUwsQ0FBVzhFLFlBSDNCO0FBSUUsdUJBQWUsRUFBRSxLQUFLOUUsS0FBTCxDQUFXK0UsZUFKOUI7QUFLRSxtQkFBVyxFQUFFLEtBQUsvRSxLQUFMLENBQVdnRixXQUwxQjtBQU1FLG9CQUFZLEVBQUUsS0FBS2hGLEtBQUwsQ0FBV2lGLFlBTjNCO0FBT0Usb0JBQVksRUFBRSxLQUFLc0IsbUJBUHJCO0FBUUUsc0JBQWMsRUFBRSxLQUFLQyxxQkFSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKLENBREYsQ0FERixDQXZFRixDQURGLENBSkYsQ0EzQ0YsQ0FERjtBQWlKRDs7OztFQXZZNkJDLGdEO0FBMFloQzs7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDNUQsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGpCLGdCQUFZLEVBQUVpQixLQUFLLENBQUNuQixRQUFOLENBQWVFLFlBRHhCO0FBRUx5RSxnQkFBWSxFQUFFeEQsS0FBSyxDQUFDbkIsUUFBTixDQUFlMkUsWUFGeEI7QUFHTHpCLFlBQVEsRUFBRS9CLEtBQUssQ0FBQzZELElBQU4sQ0FBVzlCLFFBSGhCO0FBSUxDLGdCQUFZLEVBQUVoQyxLQUFLLENBQUM4RCxRQUFOLENBQWU5QixZQUp4QjtBQUtMQyxtQkFBZSxFQUFFakMsS0FBSyxDQUFDK0QsV0FBTixDQUFrQjlCLGVBTDlCO0FBTUxDLGVBQVcsRUFBRWxDLEtBQUssQ0FBQ2dFLE9BQU4sQ0FBYzlCLFdBTnRCO0FBT0xDLGdCQUFZLEVBQUVuQyxLQUFLLENBQUNpRSxRQUFOLENBQWU5QixZQVB4QjtBQVFMMUIsU0FBSyxFQUFFVCxLQUFLLENBQUNuQixRQUFOLENBQWU0QixLQVJqQjtBQVNMRyxhQUFTLEVBQUVaLEtBQUssQ0FBQzZELElBQU4sQ0FBV3BELEtBVGpCO0FBVUxJLGlCQUFhLEVBQUViLEtBQUssQ0FBQzhELFFBQU4sQ0FBZXJELEtBVnpCO0FBV0xLLG9CQUFnQixFQUFFZCxLQUFLLENBQUMrRCxXQUFOLENBQWtCdEQsS0FYL0I7QUFZTE0sZ0JBQVksRUFBRWYsS0FBSyxDQUFDZ0UsT0FBTixDQUFjdkQsS0FadkI7QUFhTE8saUJBQWEsRUFBRWhCLEtBQUssQ0FBQ2lFLFFBQU4sQ0FBZXhEO0FBYnpCLEdBQVA7QUFlRCxDQWhCRDs7QUFrQkEsSUFBTXlELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQUE7O0FBQ3ZDO0FBQ0VoSCw2QkFBeUIsRUFBRTtBQUFBLGFBQU1nSCxRQUFRLENBQUNDLGdGQUFBLEVBQUQsQ0FBZDtBQUFBLEtBRDdCO0FBRUUvRywrQkFBMkIsRUFBRSxxQ0FBQ0UsS0FBRCxFQUFRSCxVQUFSO0FBQUEsYUFDM0IrRyxRQUFRLENBQUNDLGtGQUFBLENBQTRCN0csS0FBNUIsRUFBbUNILFVBQW5DLENBQUQsQ0FEbUI7QUFBQSxLQUYvQjtBQUtFSSxtQ0FBK0IsRUFBRTtBQUFBLGFBQy9CMkcsUUFBUSxDQUFDQyxzRkFBQSxFQUFELENBRHVCO0FBQUEsS0FMbkM7QUFPRXpHLG9DQUFnQyxFQUFFLDBDQUFDSixLQUFELEVBQVFILFVBQVI7QUFBQSxhQUNoQytHLFFBQVEsQ0FBQ0Msd0ZBQUEsQ0FBa0M3RyxLQUFsQyxFQUF5Q0gsVUFBekMsQ0FBRCxDQUR3QjtBQUFBLEtBUHBDO0FBVUVRLGtDQUE4QixFQUFFO0FBQUEsYUFDOUJ1RyxRQUFRLENBQUNDLHFGQUFBLEVBQUQsQ0FEc0I7QUFBQSxLQVZsQztBQVlFdEcsbUNBQStCLEVBQUUseUNBQUNQLEtBQUQsRUFBUUgsVUFBUjtBQUFBLGFBQy9CK0csUUFBUSxDQUFDQyx1RkFBQSxDQUFpQzdHLEtBQWpDLEVBQXdDSCxVQUF4QyxDQUFELENBRHVCO0FBQUEsS0FabkM7QUFlRVcsbUNBQStCLEVBQUU7QUFBQSxhQUMvQm9HLFFBQVEsQ0FBQ0Msc0ZBQUEsRUFBRCxDQUR1QjtBQUFBLEtBZm5DO0FBaUJFbkcsb0NBQWdDLEVBQUUsMENBQUNWLEtBQUQsRUFBUUgsVUFBUjtBQUFBLGFBQ2hDK0csUUFBUSxDQUFDQyx3RkFBQSxDQUFrQzdHLEtBQWxDLEVBQXlDSCxVQUF6QyxDQUFELENBRHdCO0FBQUEsS0FqQnBDO0FBb0JFYyxvQ0FBZ0MsRUFBRTtBQUFBLGFBQ2hDaUcsUUFBUSxDQUFDQyx1RkFBQSxFQUFELENBRHdCO0FBQUEsS0FwQnBDO0FBc0JFakcsc0NBQWtDLEVBQUUsNENBQUNaLEtBQUQsRUFBUUgsVUFBUjtBQUFBLGFBQ2xDK0csUUFBUSxDQUFDQyx5RkFBQSxDQUFtQzdHLEtBQW5DLEVBQTBDSCxVQUExQyxDQUFELENBRDBCO0FBQUEsS0F0QnRDO0FBeUJFZ0IsK0JBQTJCLEVBQUU7QUFBQSxhQUFNK0YsUUFBUSxDQUFDQyxrRkFBQSxFQUFELENBQWQ7QUFBQSxLQXpCL0I7QUEwQkUvRixpQ0FBNkIsRUFBRSx1Q0FBQ2QsS0FBRCxFQUFRSCxVQUFSO0FBQUEsYUFDN0IrRyxRQUFRLENBQUNDLG9GQUFBLENBQThCN0csS0FBOUIsRUFBcUNILFVBQXJDLENBQUQsQ0FEcUI7QUFBQSxLQTFCakM7QUE2QkVrQixtQ0FBK0IsRUFBRTtBQUFBLGFBQy9CNkYsUUFBUSxDQUFDQyxzRkFBQSxFQUFELENBRHVCO0FBQUEsS0E3Qm5DO0FBK0JFN0YscUNBQWlDLEVBQUUsMkNBQUNoQixLQUFELEVBQVFILFVBQVI7QUFBQSxhQUNqQytHLFFBQVEsQ0FBQ0Msd0ZBQUEsQ0FBa0M3RyxLQUFsQyxFQUF5Q0gsVUFBekMsQ0FBRCxDQUR5QjtBQUFBLEtBL0JyQztBQWtDRW9CLGlDQUE2QixFQUFFO0FBQUEsYUFDN0IyRixRQUFRLENBQUNDLG9GQUFBLEVBQUQsQ0FEcUI7QUFBQSxLQWxDakM7QUFvQ0UzRixtQ0FBK0IsRUFBRSx5Q0FBQ2xCLEtBQUQsRUFBUUgsVUFBUjtBQUFBLGFBQy9CK0csUUFBUSxDQUFDQyxzRkFBQSxDQUFnQzdHLEtBQWhDLEVBQXVDSCxVQUF2QyxDQUFELENBRHVCO0FBQUEsS0FwQ25DO0FBdUNFc0Isa0NBQThCLEVBQUU7QUFBQSxhQUM5QnlGLFFBQVEsQ0FBQ0MscUZBQUEsRUFBRCxDQURzQjtBQUFBLEtBdkNsQztBQXlDRXpGLG9DQUFnQyxFQUFFLDBDQUFDcEIsS0FBRCxFQUFRSCxVQUFSO0FBQUEsYUFDaEMrRyxRQUFRLENBQUNDLHVGQUFBLENBQWlDN0csS0FBakMsRUFBd0NILFVBQXhDLENBQUQsQ0FEd0I7QUFBQSxLQXpDcEM7QUE0Q0V3QiwwQkFBc0IsRUFBRTtBQUFBLGFBQU11RixRQUFRLENBQUNDLDZFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBNUMxQjtBQTZDRTFFLHVCQUFtQixFQUFFLDZCQUFDYixRQUFEO0FBQUEsYUFBY3NGLFFBQVEsQ0FBQ0MsMEVBQUEsQ0FBb0J2RixRQUFwQixDQUFELENBQXRCO0FBQUEsS0E3Q3ZCO0FBK0NFZ0Isd0JBQW9CLEVBQUUsOEJBQUNoQixRQUFEO0FBQUEsYUFDcEJzRixRQUFRLENBQUNDLDJFQUFBLENBQXFCdkYsUUFBckIsQ0FBRCxDQURZO0FBQUEsS0EvQ3hCO0FBaURFYywwQkFBc0IsRUFBRSxnQ0FBQ2pDLEVBQUQsRUFBS21CLFFBQUw7QUFBQSxhQUN0QnNGLFFBQVEsQ0FBQ0MsNkVBQUEsQ0FBdUIxRyxFQUF2QixFQUEyQm1CLFFBQTNCLENBQUQsQ0FEYztBQUFBLEtBakQxQjtBQW9ERWtCLDBCQUFzQixFQUFFLGdDQUFDckMsRUFBRDtBQUFBLGFBQVF5RyxRQUFRLENBQUNDLDZFQUFBLENBQXVCMUcsRUFBdkIsQ0FBRCxDQUFoQjtBQUFBLEtBcEQxQjtBQXFERThDLHdCQUFvQixFQUFFO0FBQUEsYUFBTTJELFFBQVEsQ0FBQ0MsMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0FyRHhCO0FBdURFQyxnQ0FBNEIsRUFBRTtBQUFBLGFBQzVCRixRQUFRLENBQUNDLG1GQUFBLEVBQUQsQ0FEb0I7QUFBQSxLQXZEaEM7QUEwREVsRSxvQkFBZ0IsRUFBRTtBQUFBLGFBQU1pRSxRQUFRLENBQUNHLG1FQUFBLEVBQUQsQ0FBZDtBQUFBLEtBMURwQjtBQTJERW5FLHdCQUFvQixFQUFFO0FBQUEsYUFBTWdFLFFBQVEsQ0FBQ0ksMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0EzRHhCO0FBNERFakUsd0JBQW9CLEVBQUU7QUFBQSxhQUFNNkQsUUFBUSxDQUFDSywyRUFBQSxFQUFELENBQWQ7QUFBQSxLQTVEeEI7QUE2REVwRSwyQkFBdUIsRUFBRTtBQUFBLGFBQ3ZCK0QsUUFBUSxDQUFDTSxpRkFBQSxFQUFELENBRGU7QUFBQSxLQTdEM0I7QUErREVwRSx1QkFBbUIsRUFBRTtBQUFBLGFBQU04RCxRQUFRLENBQUNPLHlFQUFBLEVBQUQsQ0FBZDtBQUFBO0FBL0R2Qiw2SEFnRXdCO0FBQUEsV0FBTVAsUUFBUSxDQUFDSywyRUFBQSxFQUFELENBQWQ7QUFBQSxHQWhFeEIsK0dBa0VZO0FBQUEsV0FBTUwsUUFBUSxDQUFDUSwyREFBQSxFQUFELENBQWQ7QUFBQSxHQWxFWjtBQW9FRCxDQXJFRDs7QUF1RWVDLDJIQUFPLENBQ3BCaEIsZUFEb0IsRUFFcEJNLGtCQUZvQixDQUFQLENBR2JXLHdGQUFnQixDQUFDQyw0RUFBVSxDQUFDN0osTUFBRCxDQUFWLENBQW1Cd0IsaUJBQW5CLENBQUQsRUFBd0NzSSx3REFBeEMsQ0FISCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JyaW5nSW4uZDg5M2IyNTU1MmZjY2RmNzJkNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFNuYWNrYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQdXJjaGFzZUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VFZGl0XCI7XHJcbmltcG9ydCBQdXJjaGFzZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXJcIjtcclxuaW1wb3J0IHdpdGhFcnJvckhhbmRsZXIgZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEVycm9ySGFuZGxlci93aXRoRXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wdXJjaGFzZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBkZXB0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2RlcHRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZW1wbG95ZWVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZW1wbG95ZWVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRVbml0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRVbml0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWRkZGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIFB1cmNoYXNlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5kZXB0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnByb2R1Y3RUeXBlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnByb2R1Y3RMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZ29sZFVuaXRMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgKHRoaXMucHJvcHMuZXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5kZXB0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmRlcHRFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgIChcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMVxyXG4gICAgICApKFxyXG4gICAgICAgIHRoaXMucHJvcHMuZ29sZFR5cGVFcnJvciAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5nb2xkVW5pdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmdvbGRVbml0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMVxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5wdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5wdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VOYW1lQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlTmFtZUNoYW5nZWREaXNwYXRjaChldmVudC50YXJnZXQudmFsdWUsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbXBsb3llZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZW1wbG95ZWVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlRGlzcGF0Y2goZW1wbG95ZWVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VQcm9kdWN0SWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUHJvZHVjdElkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlSGFuZGxlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHByb2R1Y3RJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VQcm9kdWN0SWRDaGFuZ2VEaXNwYXRjaChwcm9kdWN0SWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBnb2xkVHlwZUlkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgZ29sZFR5cGVJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2goZ29sZFR5cGVJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkRGlzcGF0Y2goXHJcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgdmFsaWRhdGlvblxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VXZWlnaHRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VXZWlnaHRDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUdvbGRVbml0SWRGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlR29sZFVuaXRJZEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZERpc3BhdGNoKFxyXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIHZhbGlkYXRpb25cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VRdWFudGl0eUZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXIgPSAoZXZlbnQsIHZhbGlkYXRpb24pID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucHVyY2hhc2VJbnB1dERhdGVDaGFuZ2VkRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZVNhdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHB1cmNoYXNlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZU5hbWUudmFsdWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmVtcGxveWVlSWQudmFsdWUsXHJcbiAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHJvZHVjdElkLnZhbHVlLFxyXG4gICAgICBnb2xkVHlwZUlkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5nb2xkVHlwZUlkLnZhbHVlLFxyXG4gICAgICB3ZWlnaHQ6IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlV2VpZ2h0LnZhbHVlLFxyXG4gICAgICBnb2xkVW5pdElkOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5nb2xkVW5pdElkLnZhbHVlLFxyXG4gICAgICBxdWFudGl0eTogdGhpcy5wcm9wcy5wdXJjaGFzZUVkaXQucHVyY2hhc2VRdWFudGl0eS52YWx1ZSxcclxuICAgICAgaW5wdXREYXRlOiB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5wdXJjaGFzZUlucHV0RGF0ZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LnB1cmNoYXNlRGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC5pZCkge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlQWRkRGlzcGF0Y2gocHVyY2hhc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5wdXJjaGFzZVVwZGF0ZURpc3BhdGNoKHRoaXMucHJvcHMucHVyY2hhc2VFZGl0LmlkLCBwdXJjaGFzZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICAvLyBpc09wZW5BbGVydDogdHJ1ZSxcclxuICAgICAgYWxlcnRDb250ZW50OiBcIkzGsHVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1cmNoYXNlRWRpdEhhbmRsZXIgPSAoZXZlbnQsIHB1cmNoYXNlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gcHVyY2hhc2UuaWQgPSBwdXJjaGFzZS5rZXk7XHJcbiAgICB0aGlzLnByb3BzLnB1cmNoYXNlRWRpdERpc3BhdGNoKHB1cmNoYXNlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IHB1cmNoYXNlLCBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIiB9KTtcclxuICB9O1xyXG5cclxuICBwdXJjaGFzZURlbGV0ZUhhbmRsZXIgPSAoZXZlbnQsIHB1cmNoYXNlKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgZGlhbG9nQ29udGVudDogcHVyY2hhc2UubmFtZSArIFwiIHPhur0gYuG7iyB4w7NhP1wiLFxyXG4gICAgICBzZWxlY3RlZEl0ZW06IHB1cmNoYXNlLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZGlhbG9nQ2xvc2UgPSAoZXZlbnQsIGlzT0spID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNPSykge1xyXG4gICAgICB0aGlzLnByb3BzLnB1cmNoYXNlRGVsZXRlRGlzcGF0Y2godGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ua2V5KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQYXBlckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgIGhhbmRsZT1cIiNkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBjYW5jZWw9eydbY2xhc3MqPVwiTXVpRGlhbG9nQ29udGVudC1yb290XCJdJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxQYXBlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUFsZXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbkFsZXJ0OiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gUHVyY2hhc2VDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICB7LyogRXJyb3IgUG9wdXAgKi99XHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMucHJvcHMuZXJyb3J9IG1vZGFsQ2xvc2VkPXt0aGlzLmVycm9yQ29uZmlybWVkSGFuZGxlcn0+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciA/IHRoaXMucHJvcHMuZXJyb3IubWVzc2FnZSA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICB7LyogSW5mbyBBbGVydCAqL31cclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNPcGVuQWxlcnR9XHJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9XHJcbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGVydENvbnRlbnQgKyBcIiB0aMOgbmggY8O0bmcuXCJ9XHJcbiAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgQ+G6o25oIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8UGFwZXI+Tmjhuq1wIG11YTwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlRWRpdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRMaXN0PXt0aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q9e3RoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VOYW1lRm9jdXNIYW5kbGVyPXt0aGlzLnB1cmNoYXNlTmFtZUZvY3VzSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VOYW1lQ2hhbmdlZD17dGhpcy5wdXJjaGFzZU5hbWVDaGFuZ2VkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFbXBsb3llZUlkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFbXBsb3llZUlkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVByb2R1Y3RJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFR5cGVJZEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlRGVzY3JpcHRpb25Gb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZURlc2NyaXB0aW9uQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlV2VpZ2h0Q2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVdlaWdodENoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VHb2xkVW5pdElkRm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlR29sZFVuaXRJZEZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlR29sZFVuaXRJZENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VHb2xkVW5pdElkQ2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVF1YW50aXR5Rm9jdXNIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlUXVhbnRpdHlGb2N1c0hhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZVF1YW50aXR5Q2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVF1YW50aXR5Q2hhbmdlZEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUlucHV0RGF0ZUZvY3VzSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VDcmVhdGVIYW5kbGVyPXt0aGlzLnB1cmNoYXNlQ3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VTYXZlSGFuZGxlcj17dGhpcy5wdXJjaGFzZVNhdmVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB1cmNoYXNlTGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wdXJjaGFzZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRMaXN0PXt0aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q9e3RoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VFZGl0PXt0aGlzLnB1cmNoYXNlRWRpdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlRGVsZXRlPXt0aGlzLnB1cmNoYXNlRGVsZXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHVyY2hhc2VFZGl0OiBzdGF0ZS5wdXJjaGFzZS5wdXJjaGFzZUVkaXQsXHJcbiAgICBwdXJjaGFzZUxpc3Q6IHN0YXRlLnB1cmNoYXNlLnB1cmNoYXNlTGlzdCxcclxuICAgIGRlcHRMaXN0OiBzdGF0ZS5kZXB0LmRlcHRMaXN0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBwcm9kdWN0VHlwZUxpc3Q6IHN0YXRlLnByb2R1Y3RUeXBlLnByb2R1Y3RUeXBlTGlzdCxcclxuICAgIHByb2R1Y3RMaXN0OiBzdGF0ZS5wcm9kdWN0LnByb2R1Y3RMaXN0LFxyXG4gICAgZ29sZFR5cGVMaXN0OiBzdGF0ZS5nb2xkVHlwZS5nb2xkVHlwZUxpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUucHVyY2hhc2UuZXJyb3IsXHJcbiAgICBkZXB0RXJyb3I6IHN0YXRlLmRlcHQuZXJyb3IsXHJcbiAgICBlbXBsb3llZUVycm9yOiBzdGF0ZS5lbXBsb3llZS5lcnJvcixcclxuICAgIHByb2R1Y3RUeXBlRXJyb3I6IHN0YXRlLnByb2R1Y3RUeXBlLmVycm9yLFxyXG4gICAgcHJvZHVjdEVycm9yOiBzdGF0ZS5wcm9kdWN0LmVycm9yLFxyXG4gICAgZ29sZFR5cGVFcnJvcjogc3RhdGUuZ29sZFR5cGUuZXJyb3IsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwdXJjaGFzZU5hbWVGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTmFtZUZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VOYW1lQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VOYW1lQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlRW1wbG95ZWVJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VFbXBsb3llZUlkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUVtcGxveWVlSWRDaGFuZ2VEaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRW1wbG95ZWVJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZVByb2R1Y3RJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VQcm9kdWN0SWRGb2N1cygpKSxcclxuICAgIHB1cmNoYXNlUHJvZHVjdElkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVByb2R1Y3RJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuXHJcbiAgICBwdXJjaGFzZUdvbGRUeXBlSWRGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlR29sZFR5cGVJZEZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VHb2xkVHlwZUlkQ2hhbmdlRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRUeXBlSWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZXNjcmlwdGlvbkZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VEZXNjcmlwdGlvbkNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRGVzY3JpcHRpb25DaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VXZWlnaHRGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Rm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZVdlaWdodENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlV2VpZ2h0Q2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlR29sZFVuaXRJZEZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VHb2xkVW5pdElkRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZUdvbGRVbml0SWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VRdWFudGl0eUZvY3VzRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VRdWFudGl0eUZvY3VzKCkpLFxyXG4gICAgcHVyY2hhc2VRdWFudGl0eUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlUXVhbnRpdHlDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgcHVyY2hhc2VJbnB1dERhdGVGb2N1c0Rpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlSW5wdXREYXRlRm9jdXMoKSksXHJcbiAgICBwdXJjaGFzZUlucHV0RGF0ZUNoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlSW5wdXREYXRlQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG5cclxuICAgIHB1cmNoYXNlQ3JlYXRlRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VDcmVhdGUoKSksXHJcbiAgICBwdXJjaGFzZUFkZERpc3BhdGNoOiAocHVyY2hhc2UpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VBZGQocHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVkaXREaXNwYXRjaDogKHB1cmNoYXNlKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRWRpdChwdXJjaGFzZSkpLFxyXG4gICAgcHVyY2hhc2VVcGRhdGVEaXNwYXRjaDogKGlkLCBwdXJjaGFzZSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5wdXJjaGFzZVVwZGF0ZShpZCwgcHVyY2hhc2UpKSxcclxuXHJcbiAgICBwdXJjaGFzZURlbGV0ZURpc3BhdGNoOiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnMucHVyY2hhc2VEZWxldGUoaWQpKSxcclxuICAgIHB1cmNoYXNlTGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlTGlzdCgpKSxcclxuXHJcbiAgICBwdXJjaGFzZUVycm9ySGFuZGxlZERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnB1cmNoYXNlRXJyb3JIYW5kbGVkKCkpLFxyXG5cclxuICAgIGRlcHRMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGRlcHRBY2lvbnMuZGVwdExpc3QoKSksXHJcbiAgICBlbXBsb3llZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZW1wbG95ZWVBY2lvbnMuZW1wbG95ZWVMaXN0KCkpLFxyXG4gICAgZ29sZFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGdvbGRUeXBlQWNpb25zLmdvbGRUeXBlTGlzdCgpKSxcclxuICAgIHByb2R1Y3RUeXBlTGlzdERpc3BhdGNoOiAoKSA9PlxyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0VHlwZUFjaW9ucy5wcm9kdWN0VHlwZUxpc3QoKSksXHJcbiAgICBwcm9kdWN0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChwcm9kdWN0QWNpb25zLnByb2R1Y3RMaXN0KCkpLFxyXG4gICAgZ29sZFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGdvbGRUeXBlQWNpb25zLmdvbGRUeXBlTGlzdCgpKSxcclxuXHJcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nb3V0KCkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKSh3aXRoRXJyb3JIYW5kbGVyKHdpdGhTdHlsZXMoc3R5bGVzKShQdXJjaGFzZUNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=