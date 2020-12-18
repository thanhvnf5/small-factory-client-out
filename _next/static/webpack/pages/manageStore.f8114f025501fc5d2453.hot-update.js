webpackHotUpdate_N_E("pages/manageStore",{

/***/ "./src/containers/ImportFromFactoryContainer/ImportFromFactoryContainer.js":
/*!*********************************************************************************!*\
  !*** ./src/containers/ImportFromFactoryContainer/ImportFromFactoryContainer.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _components_ImportFromFactory_ImportFromFactoryEdit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/ImportFromFactory/ImportFromFactoryEdit */ "./src/components/ImportFromFactory/ImportFromFactoryEdit.js");
/* harmony import */ var _components_ImportFromFactory_ImportFromFactoryList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/ImportFromFactory/ImportFromFactoryList */ "./src/components/ImportFromFactory/ImportFromFactoryList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/importFromFactoryAction */ "./src/store/actions/importFromFactoryAction.js");
/* harmony import */ var _store_actions_exportToFactoryAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/exportToFactoryAction */ "./src/store/actions/exportToFactoryAction.js");
/* harmony import */ var _store_actions_deptAction__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../store/actions/deptAction */ "./src/store/actions/deptAction.js");
/* harmony import */ var _store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../store/actions/employeeAction */ "./src/store/actions/employeeAction.js");
/* harmony import */ var _store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../store/actions/productTypeAction */ "./src/store/actions/productTypeAction.js");
/* harmony import */ var _store_actions_productAction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../store/actions/productAction */ "./src/store/actions/productAction.js");
/* harmony import */ var _store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../store/actions/goldTypeAction */ "./src/store/actions/goldTypeAction.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");








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


var ImportFromFactoryContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ImportFromFactoryContainer, _Component);

  var _super = _createSuper(ImportFromFactoryContainer);

  function ImportFromFactoryContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ImportFromFactoryContainer);

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactoryCreateHandler", function (event) {
      event.preventDefault();

      _this.props.importFromFactoryCreateDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactoryCodeEnterHandler", function (event) {
      event.preventDefault();

      _this.props.importFromFactoryCodeEnterDispatch(event.target.value);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactoryDetailEditHandler", function (event, importFromFactoryDetail) {
      // event.preventDefault();
      if (!importFromFactoryDetail.importTypeId) {
        importFromFactoryDetail.importTypeId = _this.props.importTypeId;
      }

      _this.props.importFromFactoryDetailEditDispatch(importFromFactoryDetail);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactoryAddDetailHandler", function (event) {
      event.preventDefault();
      var detail = {
        id: _this.props.importFromFactoryEdit.detailId,
        productId: _this.props.importFromFactoryEdit.productId.value,
        goldTypeId: _this.props.importFromFactoryEdit.goldTypeId.value,
        goldUnitId: 1,
        importTypeId: _this.props.importTypeId,
        weight: _this.props.importFromFactoryEdit.importFromFactoryWeight.value,
        quantity: _this.props.importFromFactoryEdit.importFromFactoryQuantity.value
      };

      _this.props.importFromFactoryAddDetailDispatch(detail);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactoryUpdateDetailHandler", function (event) {
      event.preventDefault();
      var detail = {
        id: _this.props.importFromFactoryEdit.detailId,
        productId: _this.props.importFromFactoryEdit.productId.value,
        goldTypeId: _this.props.importFromFactoryEdit.goldTypeId.value,
        goldUnitId: 1,
        importTypeId: _this.props.importTypeId,
        weight: _this.props.importFromFactoryEdit.importFromFactoryWeight.value,
        quantity: _this.props.importFromFactoryEdit.importFromFactoryQuantity.value
      };

      _this.props.importFromFactoryUpdateDetailDispatch(detail);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactorySaveHandler", function (event) {
      event.preventDefault();
      var employeeId = localStorage.getItem("employeeId");
      var importFromFactory = {
        importTypeId: _this.props.importTypeId,
        code: _this.props.importFromFactoryEdit.importFromFactoryCode.value,
        senderId: _this.props.importFromFactoryEdit.employeeId.value,
        receiverId: employeeId,
        importFromFactoryDate: _this.props.importFromFactoryEdit.importFromFactoryDate.value,
        note: _this.props.importFromFactoryEdit.importFromFactoryNote.value,
        importFromFactoryDetails: _this.props.importFromFactoryEdit.importFromFactoryDetails
      };

      if (!_this.props.importFromFactoryEdit.id) {
        _this.props.importFromFactoryAddDispatch(importFromFactory);
      } else {
        importFromFactory.id = _this.props.importFromFactoryEdit.id;
        importFromFactory.version = _this.props.importFromFactoryEdit.version;

        _this.props.importFromFactoryUpdateDispatch(_this.props.importFromFactoryEdit.id, importFromFactory);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null,
        // isOpenAlert: true,
        alertContent: "Lưu"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactoryEditHandler", function (event, importFromFactory) {
      // event.preventDefault();
      // importFromFactory.id = importFromFactory.key;
      _this.props.importFromFactoryEditDispatch(importFromFactory);

      _this.setState({
        selectedItem: importFromFactory,
        selectedItemType: "edit"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "importFromFactoryDeleteHandler", function (event, importFromFactory) {
      event.preventDefault();

      _this.setState({
        isDialogOpen: true,
        dialogContent: importFromFactory.code + " sẽ bị xóa?",
        selectedItem: importFromFactory,
        selectedItemType: "delete"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.importFromFactoryDeleteDispatch(_this.state.selectedItem.id, _this.state.selectedItem.version);

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
        cancel: '[class*="MuiDialogContent-root"]'
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], props));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCloseAlert", function () {
      _this.setState({
        isOpenAlert: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ImportFromFactoryContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.deptListDispatch();
      this.props.employeeListDispatch();
      this.props.productTypeListDispatch();
      this.props.productListDispatch();
      this.props.goldTypeListDispatch();
      this.props.importFromFactoryListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error && this.props.error.response && this.props.error.response.status == 401 || this.props.deptError && this.props.deptError.response && this.props.deptError.response.status == 401 || this.props.employeeError && this.props.employeeError.response && this.props.employeeError.response.status == 401 || this.props.productTypeError && this.props.productTypeError.response && this.props.productTypeError.response.status == 401 || this.props.productError && this.props.productError.response && this.props.productError.response.status == 401 || this.props.goldTypeError && this.props.goldTypeError.response && this.props.goldTypeError.response.status == 401) {
        // this.props.importFromFactoryErrorHandledDispatch();
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

      console.log(new Date().toLocaleString() + " ............ ImportFromFactoryContainer render");
      var classes = this.props.classes;
      return __jsx("div", {
        className: classes.root
      }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        show: this.props.error,
        modalClosed: this.errorConfirmedHandler
      }, this.props.error ? this.props.error.message : "<<Error>>"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
        open: this.state.isOpenAlert,
        onClose: this.handleCloseAlert,
        autoHideDuration: 3000
      }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Alert"], {
        onClose: this.handleCloseAlert,
        severity: "success"
      }, this.state.alertContent + " thành công.")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.isDialogOpen,
        onClose: function onClose(event) {
          return _this2.dialogClose(event);
        },
        PaperComponent: this.PaperComponent,
        "aria-labelledby": "draggable-dialog-title"
      }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          cursor: "move"
        },
        id: "draggable-dialog-title"
      }, "C\u1EA3nh b\xE1o"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__["default"], null, this.state.dialogContent)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        autoFocus: true,
        onClick: function onClick(event) {
          return _this2.dialogClose(event);
        },
        color: "primary"
      }, "H\u1EE7y"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick(event) {
          return _this2.dialogClose(event, true);
        },
        color: "primary"
      }, "\u0110\u1ED3ng \xFD"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], null, "Nh\u1EADp t\u1EEB th\u1EE3")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: classes.grid
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, this.props.importFromFactoryEdit.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_components_ImportFromFactory_ImportFromFactoryEdit__WEBPACK_IMPORTED_MODULE_21__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.importFromFactoryEdit, {
        selectedItemType: this.state.selectedItemType,
        deptList: this.props.deptList,
        employeeList: this.props.employeeList,
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        importFromFactoryOnFocus: this.props.importFromFactoryOnFocus,
        importFromFactoryOnChanged: this.props.importFromFactoryOnChanged,
        importFromFactoryCreateHandler: this.importFromFactoryCreateHandler,
        importFromFactoryAddDetailHandler: this.importFromFactoryAddDetailHandler,
        importFromFactoryUpdateDetailHandler: this.importFromFactoryUpdateDetailHandler,
        importFromFactorySaveHandler: this.importFromFactorySaveHandler,
        importFromFactoryDetailEdit: this.importFromFactoryDetailEditHandler,
        importFromFactoryCodeEnter: this.importFromFactoryCodeEnterHandler
      }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list
      }, this.props.importFromFactoryList.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_components_ImportFromFactory_ImportFromFactoryList__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.importFromFactoryList, {
        deptList: this.props.deptList,
        employeeList: this.props.employeeList,
        productTypeList: this.props.productTypeList,
        productList: this.props.productList,
        goldTypeList: this.props.goldTypeList,
        importFromFactoryEditHandler: this.importFromFactoryEditHandler,
        importFromFactoryDelete: this.importFromFactoryDeleteHandler
      })))))))));
    }
  }]);

  return ImportFromFactoryContainer;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    importFromFactoryEdit: state.importFromFactory.importFromFactoryEdit,
    importFromFactoryList: state.importFromFactory.importFromFactoryList,
    deptList: state.dept.deptList,
    employeeList: state.employee.employeeList,
    productTypeList: state.productType.productTypeList,
    productList: state.product.productList,
    goldTypeList: state.goldType.goldTypeList,
    error: state.importFromFactory.error,
    deptError: state.dept.error,
    employeeError: state.employee.error,
    productTypeError: state.productType.error,
    productError: state.product.error,
    goldTypeError: state.goldType.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    importFromFactoryOnFocus: function importFromFactoryOnFocus(name) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryOnFocus"](name));
    },
    importFromFactoryOnChanged: function importFromFactoryOnChanged(name, value, validation) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryOnChanged"](name, value, validation));
    },
    importFromFactoryCreateDispatch: function importFromFactoryCreateDispatch() {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryCreate"]());
    },
    importFromFactoryAddDetailDispatch: function importFromFactoryAddDetailDispatch(detail) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryAddDetail"](detail));
    },
    importFromFactoryUpdateDetailDispatch: function importFromFactoryUpdateDetailDispatch(detail) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryUpdateDetail"](detail));
    },
    importFromFactoryAddDispatch: function importFromFactoryAddDispatch(importFromFactory) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryAdd"](importFromFactory));
    },
    importFromFactoryEditDispatch: function importFromFactoryEditDispatch(importFromFactory) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryEdit"](importFromFactory));
    },
    importFromFactoryUpdateDispatch: function importFromFactoryUpdateDispatch(id, importFromFactory) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryUpdate"](id, importFromFactory));
    },
    importFromFactoryDetailEditDispatch: function importFromFactoryDetailEditDispatch(importFromFactoryDetail) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryDetailEdit"](importFromFactoryDetail));
    },
    importFromFactoryDeleteDispatch: function importFromFactoryDeleteDispatch(id, version) {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryDelete"](id, version));
    },
    importFromFactoryListDispatch: function importFromFactoryListDispatch() {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryList"]());
    },
    importFromFactoryErrorHandledDispatch: function importFromFactoryErrorHandledDispatch() {
      return dispatch(_store_actions_importFromFactoryAction__WEBPACK_IMPORTED_MODULE_27__["importFromFactoryErrorHandled"]());
    },
    // ExportToFactory.
    importFromFactoryCodeEnterDispatch: function importFromFactoryCodeEnterDispatch(code) {
      return dispatch(_store_actions_exportToFactoryAction__WEBPACK_IMPORTED_MODULE_28__["exportToFactoryGetByCode"](code));
    },
    deptListDispatch: function deptListDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_29__["deptList"]());
    },
    employeeListDispatch: function employeeListDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_30__["employeeList"]());
    },
    productTypeListDispatch: function productTypeListDispatch() {
      return dispatch(_store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_31__["productTypeList"]());
    },
    productListDispatch: function productListDispatch() {
      return dispatch(_store_actions_productAction__WEBPACK_IMPORTED_MODULE_32__["productList"]());
    },
    goldTypeListDispatch: function goldTypeListDispatch() {
      return dispatch(_store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_33__["goldTypeList"]());
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_34__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(ImportFromFactoryContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSW1wb3J0RnJvbUZhY3RvcnlDb250YWluZXIvSW1wb3J0RnJvbUZhY3RvcnlDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJncmlkIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm94U2l6aW5nIiwibGlzdCIsImJvcmRlciIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiSW1wb3J0RnJvbUZhY3RvcnlDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiaW1wb3J0RnJvbUZhY3RvcnlDcmVhdGVEaXNwYXRjaCIsImltcG9ydEZyb21GYWN0b3J5Q29kZUVudGVyRGlzcGF0Y2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImltcG9ydEZyb21GYWN0b3J5RGV0YWlsIiwiaW1wb3J0VHlwZUlkIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxFZGl0RGlzcGF0Y2giLCJkZXRhaWwiLCJpZCIsImltcG9ydEZyb21GYWN0b3J5RWRpdCIsImRldGFpbElkIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsImdvbGRVbml0SWQiLCJ3ZWlnaHQiLCJpbXBvcnRGcm9tRmFjdG9yeVdlaWdodCIsInF1YW50aXR5IiwiaW1wb3J0RnJvbUZhY3RvcnlRdWFudGl0eSIsImltcG9ydEZyb21GYWN0b3J5QWRkRGV0YWlsRGlzcGF0Y2giLCJpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURldGFpbERpc3BhdGNoIiwiZW1wbG95ZWVJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbXBvcnRGcm9tRmFjdG9yeSIsImNvZGUiLCJpbXBvcnRGcm9tRmFjdG9yeUNvZGUiLCJzZW5kZXJJZCIsInJlY2VpdmVySWQiLCJpbXBvcnRGcm9tRmFjdG9yeURhdGUiLCJub3RlIiwiaW1wb3J0RnJvbUZhY3RvcnlOb3RlIiwiaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxzIiwiaW1wb3J0RnJvbUZhY3RvcnlBZGREaXNwYXRjaCIsInZlcnNpb24iLCJpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURpc3BhdGNoIiwic2V0U3RhdGUiLCJpbXBvcnRGcm9tRmFjdG9yeUVkaXREaXNwYXRjaCIsImlzT0siLCJpbXBvcnRGcm9tRmFjdG9yeURlbGV0ZURpc3BhdGNoIiwic3RhdGUiLCJkZXB0TGlzdERpc3BhdGNoIiwiZW1wbG95ZWVMaXN0RGlzcGF0Y2giLCJwcm9kdWN0VHlwZUxpc3REaXNwYXRjaCIsInByb2R1Y3RMaXN0RGlzcGF0Y2giLCJnb2xkVHlwZUxpc3REaXNwYXRjaCIsImltcG9ydEZyb21GYWN0b3J5TGlzdERpc3BhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRlcHRFcnJvciIsImVtcGxveWVlRXJyb3IiLCJwcm9kdWN0VHlwZUVycm9yIiwicHJvZHVjdEVycm9yIiwiZ29sZFR5cGVFcnJvciIsIm9uTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNsYXNzZXMiLCJlcnJvckNvbmZpcm1lZEhhbmRsZXIiLCJtZXNzYWdlIiwiaGFuZGxlQ2xvc2VBbGVydCIsImRpYWxvZ0Nsb3NlIiwiUGFwZXJDb21wb25lbnQiLCJjdXJzb3IiLCJ3YWl0aW5nIiwiZGVwdExpc3QiLCJlbXBsb3llZUxpc3QiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsImdvbGRUeXBlTGlzdCIsImltcG9ydEZyb21GYWN0b3J5T25Gb2N1cyIsImltcG9ydEZyb21GYWN0b3J5T25DaGFuZ2VkIiwiaW1wb3J0RnJvbUZhY3RvcnlDcmVhdGVIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlBZGREZXRhaWxIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVEZXRhaWxIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlTYXZlSGFuZGxlciIsImltcG9ydEZyb21GYWN0b3J5RGV0YWlsRWRpdEhhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeUNvZGVFbnRlckhhbmRsZXIiLCJpbXBvcnRGcm9tRmFjdG9yeUxpc3QiLCJpbXBvcnRGcm9tRmFjdG9yeUVkaXRIYW5kbGVyIiwiaW1wb3J0RnJvbUZhY3RvcnlEZWxldGVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZGVwdCIsImVtcGxveWVlIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0IiwiZ29sZFR5cGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm5hbWUiLCJhY3Rpb25zIiwidmFsaWRhdGlvbiIsImltcG9ydEZyb21GYWN0b3J5RXJyb3JIYW5kbGVkRGlzcGF0Y2giLCJleHBvcnRUb0ZhY3RvcnlBY3Rpb25zIiwiZGVwdEFjaW9ucyIsImVtcGxveWVlQWNpb25zIiwicHJvZHVjdFR5cGVBY2lvbnMiLCJwcm9kdWN0QWNpb25zIiwiZ29sZFR5cGVBY2lvbnMiLCJhdXRoQWN0aW9ucyIsImNvbm5lY3QiLCJ3aXRoRXJyb3JIYW5kbGVyIiwid2l0aFN0eWxlcyIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTs7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RCxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFuYWdlU3RvcmUuZjgxMTRmMDI1NTAxZmM1ZDI0NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFNuYWNrYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBJbXBvcnRGcm9tRmFjdG9yeUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW1wb3J0RnJvbUZhY3RvcnkvSW1wb3J0RnJvbUZhY3RvcnlFZGl0XCI7XHJcbmltcG9ydCBJbXBvcnRGcm9tRmFjdG9yeUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW1wb3J0RnJvbUZhY3RvcnkvSW1wb3J0RnJvbUZhY3RvcnlMaXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXJcIjtcclxuaW1wb3J0IHdpdGhFcnJvckhhbmRsZXIgZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEVycm9ySGFuZGxlci93aXRoRXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbXBvcnRGcm9tRmFjdG9yeUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBleHBvcnRUb0ZhY3RvcnlBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2V4cG9ydFRvRmFjdG9yeUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBkZXB0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2RlcHRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZW1wbG95ZWVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZW1wbG95ZWVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWRkZGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIEltcG9ydEZyb21GYWN0b3J5Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5kZXB0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnByb2R1Y3RUeXBlTGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLnByb2R1Y3RMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZ29sZFR5cGVMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgKHRoaXMucHJvcHMuZXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5kZXB0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmRlcHRFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgKHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvciAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdFR5cGVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5wcm9kdWN0RXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnByb2R1Y3RFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMucHJvZHVjdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmdvbGRUeXBlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSlcclxuICAgICkge1xyXG4gICAgICAvLyB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5RXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbXBvcnRGcm9tRmFjdG9yeUNyZWF0ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5Q3JlYXRlRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBpbXBvcnRGcm9tRmFjdG9yeUNvZGVFbnRlckhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5Q29kZUVudGVyRGlzcGF0Y2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBpbXBvcnRGcm9tRmFjdG9yeURldGFpbEVkaXRIYW5kbGVyID0gKGV2ZW50LCBpbXBvcnRGcm9tRmFjdG9yeURldGFpbCkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWwuaW1wb3J0VHlwZUlkKSB7XHJcbiAgICAgIGltcG9ydEZyb21GYWN0b3J5RGV0YWlsLmltcG9ydFR5cGVJZCA9IHRoaXMucHJvcHMuaW1wb3J0VHlwZUlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeURldGFpbEVkaXREaXNwYXRjaChpbXBvcnRGcm9tRmFjdG9yeURldGFpbCk7XHJcbiAgfTtcclxuXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlBZGREZXRhaWxIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGRldGFpbCA9IHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmRldGFpbElkLFxyXG4gICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnByb2R1Y3RJZC52YWx1ZSxcclxuICAgICAgZ29sZFR5cGVJZDogdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFR5cGVJZC52YWx1ZSxcclxuICAgICAgZ29sZFVuaXRJZDogMSxcclxuICAgICAgaW1wb3J0VHlwZUlkOiB0aGlzLnByb3BzLmltcG9ydFR5cGVJZCxcclxuICAgICAgd2VpZ2h0OiB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC52YWx1ZSxcclxuICAgICAgcXVhbnRpdHk6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlcclxuICAgICAgICAudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUFkZERldGFpbERpc3BhdGNoKGRldGFpbCk7XHJcbiAgfTtcclxuXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVEZXRhaWxIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGRldGFpbCA9IHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmRldGFpbElkLFxyXG4gICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LnByb2R1Y3RJZC52YWx1ZSxcclxuICAgICAgZ29sZFR5cGVJZDogdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuZ29sZFR5cGVJZC52YWx1ZSxcclxuICAgICAgZ29sZFVuaXRJZDogMSxcclxuICAgICAgaW1wb3J0VHlwZUlkOiB0aGlzLnByb3BzLmltcG9ydFR5cGVJZCxcclxuICAgICAgd2VpZ2h0OiB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeVdlaWdodC52YWx1ZSxcclxuICAgICAgcXVhbnRpdHk6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmltcG9ydEZyb21GYWN0b3J5UXVhbnRpdHlcclxuICAgICAgICAudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURldGFpbERpc3BhdGNoKGRldGFpbCk7XHJcbiAgfTtcclxuXHJcbiAgaW1wb3J0RnJvbUZhY3RvcnlTYXZlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbXBsb3llZUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbXBsb3llZUlkXCIpO1xyXG4gICAgbGV0IGltcG9ydEZyb21GYWN0b3J5ID0ge1xyXG4gICAgICBpbXBvcnRUeXBlSWQ6IHRoaXMucHJvcHMuaW1wb3J0VHlwZUlkLFxyXG4gICAgICBjb2RlOiB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5RWRpdC5pbXBvcnRGcm9tRmFjdG9yeUNvZGUudmFsdWUsXHJcbiAgICAgIHNlbmRlcklkOiB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5RWRpdC5lbXBsb3llZUlkLnZhbHVlLFxyXG4gICAgICByZWNlaXZlcklkOiBlbXBsb3llZUlkLFxyXG4gICAgICBpbXBvcnRGcm9tRmFjdG9yeURhdGU6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0XHJcbiAgICAgICAgLmltcG9ydEZyb21GYWN0b3J5RGF0ZS52YWx1ZSxcclxuICAgICAgbm90ZTogdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVkaXQuaW1wb3J0RnJvbUZhY3RvcnlOb3RlLnZhbHVlLFxyXG4gICAgICBpbXBvcnRGcm9tRmFjdG9yeURldGFpbHM6IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0XHJcbiAgICAgICAgLmltcG9ydEZyb21GYWN0b3J5RGV0YWlscyxcclxuICAgIH07XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmlkKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlBZGREaXNwYXRjaChpbXBvcnRGcm9tRmFjdG9yeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbXBvcnRGcm9tRmFjdG9yeS5pZCA9IHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmlkO1xyXG4gICAgICBpbXBvcnRGcm9tRmFjdG9yeS52ZXJzaW9uID0gdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVkaXQudmVyc2lvbjtcclxuICAgICAgdGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0LmlkLFxyXG4gICAgICAgIGltcG9ydEZyb21GYWN0b3J5XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICAvLyBpc09wZW5BbGVydDogdHJ1ZSxcclxuICAgICAgYWxlcnRDb250ZW50OiBcIkzGsHVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGltcG9ydEZyb21GYWN0b3J5RWRpdEhhbmRsZXIgPSAoZXZlbnQsIGltcG9ydEZyb21GYWN0b3J5KSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gaW1wb3J0RnJvbUZhY3RvcnkuaWQgPSBpbXBvcnRGcm9tRmFjdG9yeS5rZXk7XHJcbiAgICB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5RWRpdERpc3BhdGNoKGltcG9ydEZyb21GYWN0b3J5KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IGltcG9ydEZyb21GYWN0b3J5LFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBcImVkaXRcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGltcG9ydEZyb21GYWN0b3J5RGVsZXRlSGFuZGxlciA9IChldmVudCwgaW1wb3J0RnJvbUZhY3RvcnkpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICBkaWFsb2dDb250ZW50OiBpbXBvcnRGcm9tRmFjdG9yeS5jb2RlICsgXCIgc+G6vSBi4buLIHjDs2E/XCIsXHJcbiAgICAgIHNlbGVjdGVkSXRlbTogaW1wb3J0RnJvbUZhY3RvcnksXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlEZWxldGVEaXNwYXRjaChcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5pZCxcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS52ZXJzaW9uXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VBbGVydCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5BbGVydDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICtcclxuICAgICAgICBcIiAuLi4uLi4uLi4uLi4gSW1wb3J0RnJvbUZhY3RvcnlDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICB7LyogRXJyb3IgUG9wdXAgKi99XHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMucHJvcHMuZXJyb3J9IG1vZGFsQ2xvc2VkPXt0aGlzLmVycm9yQ29uZmlybWVkSGFuZGxlcn0+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciA/IHRoaXMucHJvcHMuZXJyb3IubWVzc2FnZSA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICB7LyogSW5mbyBBbGVydCAqL31cclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNPcGVuQWxlcnR9XHJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9XHJcbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGVydENvbnRlbnQgKyBcIiB0aMOgbmggY8O0bmcuXCJ9XHJcbiAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgQ+G6o25oIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8UGFwZXI+Tmjhuq1wIHThu6sgdGjhu6M8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVkaXQud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxJbXBvcnRGcm9tRmFjdG9yeUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRMaXN0PXt0aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q9e3RoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlPbkZvY3VzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5T25Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5T25DaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5T25DaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlDcmVhdGVIYW5kbGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydEZyb21GYWN0b3J5Q3JlYXRlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5QWRkRGV0YWlsSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRGcm9tRmFjdG9yeUFkZERldGFpbEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURldGFpbEhhbmRsZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGVEZXRhaWxIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlTYXZlSGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRGcm9tRmFjdG9yeVNhdmVIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlEZXRhaWxFZGl0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsRWRpdEhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGVFbnRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRGcm9tRmFjdG9yeUNvZGVFbnRlckhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmltcG9ydEZyb21GYWN0b3J5TGlzdC53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltcG9ydEZyb21GYWN0b3J5TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRMaXN0PXt0aGlzLnByb3BzLmRlcHRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q9e3RoaXMucHJvcHMucHJvZHVjdFR5cGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdD17dGhpcy5wcm9wcy5wcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0PXt0aGlzLnByb3BzLmdvbGRUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0SGFuZGxlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRGcm9tRmFjdG9yeUVkaXRIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlEZWxldGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0RnJvbUZhY3RvcnlEZWxldGVIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0b3JlICovXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBzdGF0ZS5pbXBvcnRGcm9tRmFjdG9yeS5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUxpc3Q6IHN0YXRlLmltcG9ydEZyb21GYWN0b3J5LmltcG9ydEZyb21GYWN0b3J5TGlzdCxcclxuICAgIGRlcHRMaXN0OiBzdGF0ZS5kZXB0LmRlcHRMaXN0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBwcm9kdWN0VHlwZUxpc3Q6IHN0YXRlLnByb2R1Y3RUeXBlLnByb2R1Y3RUeXBlTGlzdCxcclxuICAgIHByb2R1Y3RMaXN0OiBzdGF0ZS5wcm9kdWN0LnByb2R1Y3RMaXN0LFxyXG4gICAgZ29sZFR5cGVMaXN0OiBzdGF0ZS5nb2xkVHlwZS5nb2xkVHlwZUxpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUuaW1wb3J0RnJvbUZhY3RvcnkuZXJyb3IsXHJcbiAgICBkZXB0RXJyb3I6IHN0YXRlLmRlcHQuZXJyb3IsXHJcbiAgICBlbXBsb3llZUVycm9yOiBzdGF0ZS5lbXBsb3llZS5lcnJvcixcclxuICAgIHByb2R1Y3RUeXBlRXJyb3I6IHN0YXRlLnByb2R1Y3RUeXBlLmVycm9yLFxyXG4gICAgcHJvZHVjdEVycm9yOiBzdGF0ZS5wcm9kdWN0LmVycm9yLFxyXG4gICAgZ29sZFR5cGVFcnJvcjogc3RhdGUuZ29sZFR5cGUuZXJyb3IsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeU9uRm9jdXM6IChuYW1lKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5T25Gb2N1cyhuYW1lKSksXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeU9uQ2hhbmdlZDogKG5hbWUsIHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5T25DaGFuZ2VkKG5hbWUsIHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcblxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlDcmVhdGVEaXNwYXRjaDogKCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUNyZWF0ZSgpKSxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5QWRkRGV0YWlsRGlzcGF0Y2g6IChkZXRhaWwpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlBZGREZXRhaWwoZGV0YWlsKSksXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeVVwZGF0ZURldGFpbERpc3BhdGNoOiAoZGV0YWlsKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5VXBkYXRlRGV0YWlsKGRldGFpbCkpLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlBZGREaXNwYXRjaDogKGltcG9ydEZyb21GYWN0b3J5KSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5QWRkKGltcG9ydEZyb21GYWN0b3J5KSksXHJcblxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0RGlzcGF0Y2g6IChpbXBvcnRGcm9tRmFjdG9yeSkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeUVkaXQoaW1wb3J0RnJvbUZhY3RvcnkpKSxcclxuICAgIGltcG9ydEZyb21GYWN0b3J5VXBkYXRlRGlzcGF0Y2g6IChpZCwgaW1wb3J0RnJvbUZhY3RvcnkpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlVcGRhdGUoaWQsIGltcG9ydEZyb21GYWN0b3J5KSksXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeURldGFpbEVkaXREaXNwYXRjaDogKGltcG9ydEZyb21GYWN0b3J5RGV0YWlsKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmltcG9ydEZyb21GYWN0b3J5RGV0YWlsRWRpdChpbXBvcnRGcm9tRmFjdG9yeURldGFpbCkpLFxyXG5cclxuICAgIGltcG9ydEZyb21GYWN0b3J5RGVsZXRlRGlzcGF0Y2g6IChpZCwgdmVyc2lvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5pbXBvcnRGcm9tRmFjdG9yeURlbGV0ZShpZCwgdmVyc2lvbikpLFxyXG4gICAgaW1wb3J0RnJvbUZhY3RvcnlMaXN0RGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlMaXN0KCkpLFxyXG5cclxuICAgIGltcG9ydEZyb21GYWN0b3J5RXJyb3JIYW5kbGVkRGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuaW1wb3J0RnJvbUZhY3RvcnlFcnJvckhhbmRsZWQoKSksXHJcbiAgICAvLyBFeHBvcnRUb0ZhY3RvcnkuXHJcbiAgICBpbXBvcnRGcm9tRmFjdG9yeUNvZGVFbnRlckRpc3BhdGNoOiAoY29kZSkgPT5cclxuICAgICAgZGlzcGF0Y2goZXhwb3J0VG9GYWN0b3J5QWN0aW9ucy5leHBvcnRUb0ZhY3RvcnlHZXRCeUNvZGUoY29kZSkpLFxyXG5cclxuICAgIGRlcHRMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGRlcHRBY2lvbnMuZGVwdExpc3QoKSksXHJcbiAgICBlbXBsb3llZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZW1wbG95ZWVBY2lvbnMuZW1wbG95ZWVMaXN0KCkpLFxyXG4gICAgcHJvZHVjdFR5cGVMaXN0RGlzcGF0Y2g6ICgpID0+XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RUeXBlQWNpb25zLnByb2R1Y3RUeXBlTGlzdCgpKSxcclxuICAgIHByb2R1Y3RMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKHByb2R1Y3RBY2lvbnMucHJvZHVjdExpc3QoKSksXHJcbiAgICBnb2xkVHlwZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZ29sZFR5cGVBY2lvbnMuZ29sZFR5cGVMaXN0KCkpLFxyXG5cclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKEltcG9ydEZyb21GYWN0b3J5Q29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==