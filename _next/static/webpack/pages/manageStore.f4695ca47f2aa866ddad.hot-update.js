webpackHotUpdate_N_E("pages/manageStore",{

/***/ "./src/containers/FactoryTransferContainer/FactoryTransferContainer.js":
/*!*****************************************************************************!*\
  !*** ./src/containers/FactoryTransferContainer/FactoryTransferContainer.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _components_ExportToFactory_ExportToFactoryEdit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/ExportToFactory/ExportToFactoryEdit */ "./src/components/ExportToFactory/ExportToFactoryEdit.js");
/* harmony import */ var _components_ExportToFactory_ExportToFactoryList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/ExportToFactory/ExportToFactoryList */ "./src/components/ExportToFactory/ExportToFactoryList.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hocs/withErrorHandler/withErrorHandler */ "./src/hocs/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/axios */ "./src/services/axios.js");
/* harmony import */ var _store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../store/actions/factoryTransferAction */ "./src/store/actions/factoryTransferAction.js");
/* harmony import */ var _store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/actions/deptAction */ "./src/store/actions/deptAction.js");
/* harmony import */ var _store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../store/actions/employeeAction */ "./src/store/actions/employeeAction.js");
/* harmony import */ var _store_actions_productTypeAction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../store/actions/productTypeAction */ "./src/store/actions/productTypeAction.js");
/* harmony import */ var _store_actions_productAction__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../store/actions/productAction */ "./src/store/actions/productAction.js");
/* harmony import */ var _store_actions_goldTypeAction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../store/actions/goldTypeAction */ "./src/store/actions/goldTypeAction.js");
/* harmony import */ var _store_actions_goldUnitAction__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../store/actions/goldUnitAction */ "./src/store/actions/goldUnitAction.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _components_UI_List_TransferList__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../components/UI/List/TransferList */ "./src/components/UI/List/TransferList.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      height: "auto",
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


var FactoryTransferContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FactoryTransferContainer, _Component);

  var _super = _createSuper(FactoryTransferContainer);

  function FactoryTransferContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FactoryTransferContainer);

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
      selectedItemType: null,
      senderId: {
        elementConfig: {
          type: "select",
          placeholder: "Chọn sản phẩm",
          onFocus: _this.senderIdFocusHandler
        },
        validation: {
          required: true
        }
      },
      receiverId: {
        elementConfig: {
          type: "select",
          placeholder: "Chọn sản phẩm",
          onFocus: _this.receiverIdFocusHandler
        },
        validation: {
          required: true
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "senderIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.senderIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "receiverIdFocusHandler", function (event) {
      event.preventDefault();

      _this.props.receiverIdFocusDispatch();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "senderIdChangedHander", function (event, selectedItem, validation) {
      event.preventDefault();
      var senderId = null;

      if (selectedItem) {
        senderId = selectedItem.id;
      }

      _this.props.senderIdChangedDispatch(senderId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "receiverIdChangedHander", function (event, selectedItem, validation) {
      event.preventDefault();
      var receiverId = null;

      if (selectedItem) {
        receiverId = selectedItem.id;
      }

      _this.props.receiverIdChangedDispatch(receiverId, validation);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "transferListSaveHandler", function (event, left, right) {
      event.preventDefault(); // Get new items in the left list.

      var leftNewItems = _this.props.factoryTransfer.receiverIdList.filter(function (itema) {
        return left.filter(function (itemb) {
          return itema.id == itemb.key;
        }).length > 0;
      }); // Get new items in the right list.


      var rightNewItems = _this.props.factoryTransfer.senderIdList.filter(function (itema) {
        return right.filter(function (itemb) {
          return itema.id == itemb.key;
        }).length > 0;
      });

      var factoryTransfers = []; // Push new items in the left list.

      leftNewItems.forEach(function (item) {
        factoryTransfers.push({
          senderId: item.receiverId,
          receiverId: _this.props.factoryTransfer.senderId.value,
          code: item.code
        });
      }); // Push new items in the right list.

      rightNewItems.forEach(function (item) {
        factoryTransfers.push({
          senderId: item.receiverId,
          receiverId: _this.props.factoryTransfer.receiverId.value,
          code: item.code
        });
      });

      if (factoryTransfers.length > 0) {
        _this.props.factoryTransferAddsDispatch(factoryTransfers);
      }

      _this.setState({
        selectedItem: null,
        selectedItemType: null,
        // isOpenAlert: true,
        alertContent: "Lưu"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderDept", function (params) {
      return [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
        key: params.group,
        component: "div"
      }, _this.props.deptList.depts.find(function (dept) {
        return dept.id == params.group;
      }).description), params.children];
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getOptionSelected", function (option, value) {
      /* if (typeof value === "undefined") {
        value = null;
      } */
      if (!option || !value) {
        return false;
      }

      var optionId = option.id;

      if (!optionId) {
        optionId = option;
      }

      var valueId = value.id;

      if (!valueId) {
        valueId = value;
      }

      return optionId === valueId;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dialogClose", function (event, isOK) {
      event.preventDefault();

      if (isOK) {
        _this.props.exportToFactoryDeleteDispatch(_this.state.selectedItem.id, _this.state.selectedItem.version);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FactoryTransferContainer, [{
    key: "componentDidMount",

    /************************************************** methods */
    value: function componentDidMount() {
      this.props.deptListDispatch();
      this.props.employeeListDispatch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.error || this.props.deptError || this.props.employeeError) {
        if (this.props.error.response && this.props.error.response.status == 401 || this.props.deptError.response && this.props.deptError.response.status == 401 || this.props.employeeError.response && this.props.employeeError.response.status == 401) {
          // this.props.exportToFactoryErrorHandledDispatch();
          // throw new Error("An error has occured in Buggy component!");
          this.props.onLogout(); // Router.push("/sigin");
          // this.setState({
          //   isDialogOpen: true,
          //   dialogContent: "Lỗi đăng nhập!",
          // });
        }
      }
    }
  }, {
    key: "render",

    /************************************************** render */
    value: function render() {
      var _this2 = this;

      console.log(new Date().toLocaleString() + " ............ ExportToFactoryContainer render");
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
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], null, "Chuy\u1EC3n \u0111\u1ED5i")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 2,
        justify: "center",
        alignItems: "center",
        className: classes.grid
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 6
      }, this.props.factoryTransfer.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Autocomplete"], {
        id: "senderId-select",
        options: this.props.employeeList.employees,
        classes: {
          option: classes.option
        },
        autoHighlight: true,
        value: this.props.factoryTransfer.senderId.value,
        onChange: function onChange(event, selectedItem) {
          _this2.senderIdChangedHander(event, selectedItem, _this2.state.senderId.validation);
        },
        groupBy: function groupBy(option) {
          return option.deptId;
        },
        renderGroup: this.renderDept,
        getOptionLabel: function getOptionLabel(option) {
          if (option && option.id) {
            return option.name;
          }

          var employee = _this2.props.employeeList.employees.find(function (employee) {
            return employee.id == option;
          });

          if (!employee) {
            return "";
          } else {
            return employee.name;
          }
        },
        getOptionSelected: this.getOptionSelected,
        renderOption: function renderOption(option) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, option.name);
        },
        renderInput: function renderInput(params) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
            inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
              // autoComplete: 'new-password', // disable autocomplete and autofill
              name: "senderId-option",
              id: "senderId-option"
            }),
            style: {
              minWidth: 200
            },
            required: true,
            label: "T\u1EEB",
            margin: "normal",
            error: !_this2.props.factoryTransfer.senderId.valid & _this2.props.factoryTransfer.senderId.touched ? true : false
          }, _this2.state.senderId.elementConfig));
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 6
      }, this.props.factoryTransfer.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_17__["Autocomplete"], {
        id: "receiverId-select",
        options: this.props.employeeList.employees,
        classes: {
          option: classes.option
        },
        autoHighlight: true,
        value: this.props.factoryTransfer.receiverId.value,
        onChange: function onChange(event, selectedItem) {
          _this2.receiverIdChangedHander(event, selectedItem, _this2.state.receiverId.validation);
        },
        groupBy: function groupBy(option) {
          return option.deptId;
        },
        renderGroup: this.renderDept,
        getOptionLabel: function getOptionLabel(option) {
          if (option && option.id) {
            return option.name;
          }

          var employee = _this2.props.employeeList.employees.find(function (employee) {
            return employee.id == option;
          });

          if (!employee) {
            return "";
          } else {
            return employee.name;
          }
        },
        getOptionSelected: this.getOptionSelected,
        renderOption: function renderOption(option) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, option.name);
        },
        renderInput: function renderInput(params) {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
            inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
              // autoComplete: 'new-password', // disable autocomplete and autofill
              name: "receiverId-option",
              id: "receiverId-option"
            }),
            style: {
              minWidth: 200
            },
            required: true,
            label: "\u0110\u1EBFn",
            margin: "normal",
            error: !_this2.props.factoryTransfer.receiverId.valid & _this2.props.factoryTransfer.receiverId.touched ? true : false
          }, _this2.state.receiverId.elementConfig));
        }
      })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12,
        className: classes.list
      }, this.props.factoryTransfer.waiting ? __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_24__["default"], null) : __jsx(_components_UI_List_TransferList__WEBPACK_IMPORTED_MODULE_35__["default"], {
        left: this.props.factoryTransfer.senderIdList.map(function (item) {
          return {
            key: item.id,
            value: item.code
          };
        }),
        right: this.props.factoryTransfer.receiverIdList.map(function (item) {
          return {
            key: item.id,
            value: item.code
          };
        }),
        transferListSaveHandler: function transferListSaveHandler(event, left, right) {
          return _this2.transferListSaveHandler(event, left, right);
        }
      }))));
    }
  }]);

  return FactoryTransferContainer;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);
/************************************************** store */


var mapStateToProps = function mapStateToProps(state) {
  return {
    factoryTransfer: state.factoryTransfer,
    deptList: state.dept.deptList,
    employeeList: state.employee.employeeList,
    error: state.exportToFactory.error,
    deptError: state.dept.error,
    employeeError: state.employee.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deptListDispatch: function deptListDispatch() {
      return dispatch(_store_actions_deptAction__WEBPACK_IMPORTED_MODULE_28__["deptList"]());
    },
    employeeListDispatch: function employeeListDispatch() {
      return dispatch(_store_actions_employeeAction__WEBPACK_IMPORTED_MODULE_29__["employeeList"]());
    },
    senderIdFocusDispatch: function senderIdFocusDispatch() {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["senderIdFocus"]());
    },
    senderIdChangedDispatch: function senderIdChangedDispatch(value, validation) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["senderIdChanged"](value, validation));
    },
    senderIdListDispatch: function senderIdListDispatch(senderId) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["senderIdList"](senderId));
    },
    receiverIdFocusDispatch: function receiverIdFocusDispatch() {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["receiverIdFocus"]());
    },
    receiverIdChangedDispatch: function receiverIdChangedDispatch(value, validation) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["receiverIdChanged"](value, validation));
    },
    receiverIdListDispatch: function receiverIdListDispatch(receiverId) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["receiverIdList"](receiverId));
    },
    factoryTransferAddsDispatch: function factoryTransferAddsDispatch(factoryTrasfers) {
      return dispatch(_store_actions_factoryTransferAction__WEBPACK_IMPORTED_MODULE_27__["adds"](factoryTrasfers));
    },
    onLogout: function onLogout() {
      return dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_34__["logout"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(FactoryTransferContainer), _services_axios__WEBPACK_IMPORTED_MODULE_26__["default"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyL0ZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImhlaWdodCIsImdyaWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJyZWFrcG9pbnRzIiwidXAiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJib3hTaXppbmciLCJsaXN0IiwiYm9yZGVyIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJGYWN0b3J5VHJhbnNmZXJDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwic2VuZGVySWQiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25Gb2N1cyIsInNlbmRlcklkRm9jdXNIYW5kbGVyIiwidmFsaWRhdGlvbiIsInJlcXVpcmVkIiwicmVjZWl2ZXJJZCIsInJlY2VpdmVySWRGb2N1c0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzZW5kZXJJZEZvY3VzRGlzcGF0Y2giLCJyZWNlaXZlcklkRm9jdXNEaXNwYXRjaCIsImlkIiwic2VuZGVySWRDaGFuZ2VkRGlzcGF0Y2giLCJyZWNlaXZlcklkQ2hhbmdlZERpc3BhdGNoIiwibGVmdCIsInJpZ2h0IiwibGVmdE5ld0l0ZW1zIiwiZmFjdG9yeVRyYW5zZmVyIiwicmVjZWl2ZXJJZExpc3QiLCJmaWx0ZXIiLCJpdGVtYSIsIml0ZW1iIiwia2V5IiwibGVuZ3RoIiwicmlnaHROZXdJdGVtcyIsInNlbmRlcklkTGlzdCIsImZhY3RvcnlUcmFuc2ZlcnMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJ2YWx1ZSIsImNvZGUiLCJmYWN0b3J5VHJhbnNmZXJBZGRzRGlzcGF0Y2giLCJzZXRTdGF0ZSIsInBhcmFtcyIsImdyb3VwIiwiZGVwdExpc3QiLCJkZXB0cyIsImZpbmQiLCJkZXB0IiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiIsIm9wdGlvbiIsIm9wdGlvbklkIiwidmFsdWVJZCIsImlzT0siLCJleHBvcnRUb0ZhY3RvcnlEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwidmVyc2lvbiIsImRlcHRMaXN0RGlzcGF0Y2giLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsImVycm9yIiwiZGVwdEVycm9yIiwiZW1wbG95ZWVFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZXMiLCJzZW5kZXJJZENoYW5nZWRIYW5kZXIiLCJkZXB0SWQiLCJyZW5kZXJEZXB0IiwibmFtZSIsImVtcGxveWVlIiwiZ2V0T3B0aW9uU2VsZWN0ZWQiLCJpbnB1dFByb3BzIiwibWluV2lkdGgiLCJ2YWxpZCIsInRvdWNoZWQiLCJyZWNlaXZlcklkQ2hhbmdlZEhhbmRlciIsIm1hcCIsInRyYW5zZmVyTGlzdFNhdmVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZXhwb3J0VG9GYWN0b3J5IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJkZXB0QWNpb25zIiwiZW1wbG95ZWVBY2lvbnMiLCJhY3Rpb25zIiwic2VuZGVySWRMaXN0RGlzcGF0Y2giLCJyZWNlaXZlcklkTGlzdERpc3BhdGNoIiwiZmFjdG9yeVRyYXNmZXJzIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKQyxZQUFNLEVBQUU7QUFGSixLQURtQjtBQUt6QkMsUUFBSSxFQUFFO0FBQ0pELFlBQU0sRUFBRSxNQUROO0FBRUZFLFdBQUssRUFBRSxNQUZMO0FBR0ZDLGdCQUFVLEVBQUUsWUFIVjtBQUlGQyxvQkFBYyxFQUFFO0FBSmQsT0FLRFAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUxDLEVBSzRCO0FBQzVCQyxhQUFPLEVBQUUsTUFEbUI7QUFFNUJDLGNBQVEsRUFBRSxNQUZrQjtBQUc1QkMsZUFBUyxFQUFFO0FBSGlCLEtBTDVCLENBTHFCO0FBZ0J6QkMsUUFBSSxFQUFFO0FBQ0pWLFlBQU0sRUFBRSxNQUROO0FBRUZXLFlBQU0sRUFBRTtBQUZOLE9BR0RkLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FIQyxFQUc0QjtBQUM1Qk4sWUFBTSxFQUFFO0FBRG9CLEtBSDVCLENBaEJxQjtBQXVCekJZLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVoQixLQUFLLENBQUNpQixPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxD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QixFQUFFLGdDQUFDekYsVUFBRDtBQUFBLGFBQ3RCb0YsUUFBUSxDQUFDRyxvRkFBQSxDQUF1QnZGLFVBQXZCLENBQUQsQ0FEYztBQUFBLEtBYm5CO0FBZ0JMNEIsK0JBQTJCLEVBQUUscUNBQUM4RCxlQUFEO0FBQUEsYUFDM0JOLFFBQVEsQ0FBQ0csMEVBQUEsQ0FBYUcsZUFBYixDQUFELENBRG1CO0FBQUEsS0FoQnhCO0FBbUJMdEMsWUFBUSxFQUFFO0FBQUEsYUFBTWdDLFFBQVEsQ0FBQ08sMkRBQUEsRUFBRCxDQUFkO0FBQUE7QUFuQkwsR0FBUDtBQXFCRCxDQXRCRDs7QUF3QmVDLDJIQUFPLENBQ3BCWCxlQURvQixFQUVwQkUsa0JBRm9CLENBQVAsQ0FHYlUsd0ZBQWdCLENBQUNDLDRFQUFVLENBQUNySSxNQUFELENBQVYsQ0FBbUJ3Qix3QkFBbkIsQ0FBRCxFQUErQzhHLHdEQUEvQyxDQUhILENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFuYWdlU3RvcmUuZjQ2OTVjYTQ3ZjJhYTg2NmRkYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIExpc3RTdWJoZWFkZXIsIFNuYWNrYmFyLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEV4cG9ydFRvRmFjdG9yeUVkaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUVkaXRcIjtcclxuaW1wb3J0IEV4cG9ydFRvRmFjdG9yeUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUxpc3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lclwiO1xyXG5pbXBvcnQgd2l0aEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vaG9jcy93aXRoRXJyb3JIYW5kbGVyL3dpdGhFcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2ZhY3RvcnlUcmFuc2ZlckFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBkZXB0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2RlcHRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZW1wbG95ZWVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZW1wbG95ZWVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGdvbGRVbml0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2dvbGRVbml0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGF1dGhBY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFRyYW5zZmVyTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9MaXN0L1RyYW5zZmVyTGlzdFwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5cclxuLy9pbXBvcnQgeyB0aHJvd3MgfSBmcm9tICdhc3NlcnQnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q5ZGRkZFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGhlaWdodDogXCI5MHZoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5cclxuY2xhc3MgRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICBkaWFsb2dDb250ZW50OiBudWxsLFxyXG4gICAgaXNPcGVuQWxlcnQ6IGZhbHNlLFxyXG4gICAgYWxlcnRDb250ZW50OiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgIHNlbmRlcklkOiB7XHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgICBvbkZvY3VzOiB0aGlzLnNlbmRlcklkRm9jdXNIYW5kbGVyLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcmVjZWl2ZXJJZDoge1xyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgb25Gb2N1czogdGhpcy5yZWNlaXZlcklkRm9jdXNIYW5kbGVyLFxyXG4gICAgICB9LFxyXG4gICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBtZXRob2RzICovXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRlcHRMaXN0RGlzcGF0Y2goKTtcclxuICAgIHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0RGlzcGF0Y2goKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmVycm9yIHx8IHRoaXMucHJvcHMuZGVwdEVycm9yIHx8IHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvcikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgICAodGhpcy5wcm9wcy5kZXB0RXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICAgKHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZXhwb3J0VG9GYWN0b3J5RXJyb3JIYW5kbGVkRGlzcGF0Y2goKTtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBoYXMgb2NjdXJlZCBpbiBCdWdneSBjb21wb25lbnQhXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcclxuICAgICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgIGlzRGlhbG9nT3BlbjogdHJ1ZSxcclxuICAgICAgICAvLyAgIGRpYWxvZ0NvbnRlbnQ6IFwiTOG7l2kgxJHEg25nIG5o4bqtcCFcIixcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZGVySWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnNlbmRlcklkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHJlY2VpdmVySWRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnJlY2VpdmVySWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgc2VuZGVySWRDaGFuZ2VkSGFuZGVyID0gKGV2ZW50LCBzZWxlY3RlZEl0ZW0sIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgc2VuZGVySWQgPSBudWxsO1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICBzZW5kZXJJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMuc2VuZGVySWRDaGFuZ2VkRGlzcGF0Y2goc2VuZGVySWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHJlY2VpdmVySWRDaGFuZ2VkSGFuZGVyID0gKGV2ZW50LCBzZWxlY3RlZEl0ZW0sIHZhbGlkYXRpb24pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcmVjZWl2ZXJJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHJlY2VpdmVySWQgPSBzZWxlY3RlZEl0ZW0uaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLnJlY2VpdmVySWRDaGFuZ2VkRGlzcGF0Y2gocmVjZWl2ZXJJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgdHJhbnNmZXJMaXN0U2F2ZUhhbmRsZXIgPSAoZXZlbnQsIGxlZnQsIHJpZ2h0KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gR2V0IG5ldyBpdGVtcyBpbiB0aGUgbGVmdCBsaXN0LlxyXG4gICAgbGV0IGxlZnROZXdJdGVtcyA9IHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWRMaXN0LmZpbHRlcihcclxuICAgICAgKGl0ZW1hKSA9PiBsZWZ0LmZpbHRlcigoaXRlbWIpID0+IGl0ZW1hLmlkID09IGl0ZW1iLmtleSkubGVuZ3RoID4gMFxyXG4gICAgKTtcclxuICAgIC8vIEdldCBuZXcgaXRlbXMgaW4gdGhlIHJpZ2h0IGxpc3QuXHJcbiAgICBsZXQgcmlnaHROZXdJdGVtcyA9IHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnNlbmRlcklkTGlzdC5maWx0ZXIoXHJcbiAgICAgIChpdGVtYSkgPT4gcmlnaHQuZmlsdGVyKChpdGVtYikgPT4gaXRlbWEuaWQgPT0gaXRlbWIua2V5KS5sZW5ndGggPiAwXHJcbiAgICApO1xyXG4gICAgbGV0IGZhY3RvcnlUcmFuc2ZlcnMgPSBbXTtcclxuICAgIC8vIFB1c2ggbmV3IGl0ZW1zIGluIHRoZSBsZWZ0IGxpc3QuXHJcbiAgICBsZWZ0TmV3SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBmYWN0b3J5VHJhbnNmZXJzLnB1c2goe1xyXG4gICAgICAgIHNlbmRlcklkOiBpdGVtLnJlY2VpdmVySWQsXHJcbiAgICAgICAgcmVjZWl2ZXJJZDogdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWQudmFsdWUsXHJcbiAgICAgICAgY29kZTogaXRlbS5jb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gUHVzaCBuZXcgaXRlbXMgaW4gdGhlIHJpZ2h0IGxpc3QuXHJcbiAgICByaWdodE5ld0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgZmFjdG9yeVRyYW5zZmVycy5wdXNoKHtcclxuICAgICAgICBzZW5kZXJJZDogaXRlbS5yZWNlaXZlcklkLFxyXG4gICAgICAgIHJlY2VpdmVySWQ6IHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWQudmFsdWUsXHJcbiAgICAgICAgY29kZTogaXRlbS5jb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGZhY3RvcnlUcmFuc2ZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2ZlckFkZHNEaXNwYXRjaChmYWN0b3J5VHJhbnNmZXJzKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIC8vIGlzT3BlbkFsZXJ0OiB0cnVlLFxyXG4gICAgICBhbGVydENvbnRlbnQ6IFwiTMawdVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyRGVwdCA9IChwYXJhbXMpID0+IFtcclxuICAgIDxMaXN0U3ViaGVhZGVyIGtleT17cGFyYW1zLmdyb3VwfSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PSBwYXJhbXMuZ3JvdXApXHJcbiAgICAgICAgICAuZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgPC9MaXN0U3ViaGVhZGVyPixcclxuICAgIHBhcmFtcy5jaGlsZHJlbixcclxuICBdO1xyXG5cclxuICBnZXRPcHRpb25TZWxlY3RlZCA9IChvcHRpb24sIHZhbHVlKSA9PiB7XHJcbiAgICAvKiBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgIH0gKi9cclxuICAgIGlmICghb3B0aW9uIHx8ICF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICBpZiAoIW9wdGlvbklkKSB7XHJcbiAgICAgIG9wdGlvbklkID0gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlSWQgPSB2YWx1ZS5pZDtcclxuICAgIGlmICghdmFsdWVJZCkge1xyXG4gICAgICB2YWx1ZUlkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0aW9uSWQgPT09IHZhbHVlSWQ7XHJcbiAgfTtcclxuXHJcbiAgZGlhbG9nQ2xvc2UgPSAoZXZlbnQsIGlzT0spID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNPSykge1xyXG4gICAgICB0aGlzLnByb3BzLmV4cG9ydFRvRmFjdG9yeURlbGV0ZURpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmlkLFxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLnZlcnNpb25cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQYXBlckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgIGhhbmRsZT1cIiNkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBjYW5jZWw9eydbY2xhc3MqPVwiTXVpRGlhbG9nQ29udGVudC1yb290XCJdJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxQYXBlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUFsZXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbkFsZXJ0OiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIC4uLi4uLi4uLi4uLiBFeHBvcnRUb0ZhY3RvcnlDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICB7LyogRXJyb3IgUG9wdXAgKi99XHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMucHJvcHMuZXJyb3J9IG1vZGFsQ2xvc2VkPXt0aGlzLmVycm9yQ29uZmlybWVkSGFuZGxlcn0+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciA/IHRoaXMucHJvcHMuZXJyb3IubWVzc2FnZSA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICB7LyogSW5mbyBBbGVydCAqL31cclxuICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNPcGVuQWxlcnR9XHJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9XHJcbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlQWxlcnR9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGVydENvbnRlbnQgKyBcIiB0aMOgbmggY8O0bmcuXCJ9XHJcbiAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc0RpYWxvZ09wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgUGFwZXJDb21wb25lbnQ9e3RoaXMuUGFwZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgc3R5bGU9e3sgY3Vyc29yOiBcIm1vdmVcIiB9fSBpZD1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgQ+G6o25oIGLDoW9cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pnt0aGlzLnN0YXRlLmRpYWxvZ0NvbnRlbnR9PC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSOG7p3lcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQsIHRydWUpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDEkOG7k25nIMO9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8UGFwZXI+Q2h1eeG7g24gxJHhu5VpPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlbmRlcklkLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5wcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvSGlnaGxpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnNlbmRlcklkLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kZXJJZENoYW5nZWRIYW5kZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VuZGVySWQudmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5kZXB0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyR3JvdXA9e3RoaXMucmVuZGVyRGVwdH1cclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gdGhpcy5wcm9wcy5lbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbXBsb3llZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e3RoaXMuZ2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+e29wdGlvbi5uYW1lfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZW5kZXJJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kZXJJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlThu6tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnNlbmRlcklkLnZhbGlkICZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5zZW5kZXJJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlY2VpdmVySWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZXJJZENoYW5nZWRIYW5kZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVjZWl2ZXJJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJHcm91cD17dGhpcy5yZW5kZXJEZXB0fVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSB0aGlzLnByb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcGxveWVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17dGhpcy5nZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLm5hbWV9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlY2VpdmVySWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVjZWl2ZXJJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIsSQ4bq/blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC52YWxpZCAmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5yZWNlaXZlcklkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VHJhbnNmZXJMaXN0XHJcbiAgICAgICAgICAgICAgICBsZWZ0PXt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IGtleTogaXRlbS5pZCwgdmFsdWU6IGl0ZW0uY29kZSB9O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICByaWdodD17dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IGtleTogaXRlbS5pZCwgdmFsdWU6IGl0ZW0uY29kZSB9O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zlckxpc3RTYXZlSGFuZGxlcj17KGV2ZW50LCBsZWZ0LCByaWdodCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zlckxpc3RTYXZlSGFuZGxlcihldmVudCwgbGVmdCwgcmlnaHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZhY3RvcnlUcmFuc2Zlcjogc3RhdGUuZmFjdG9yeVRyYW5zZmVyLFxyXG4gICAgZGVwdExpc3Q6IHN0YXRlLmRlcHQuZGVwdExpc3QsXHJcbiAgICBlbXBsb3llZUxpc3Q6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlTGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5leHBvcnRUb0ZhY3RvcnkuZXJyb3IsXHJcbiAgICBkZXB0RXJyb3I6IHN0YXRlLmRlcHQuZXJyb3IsXHJcbiAgICBlbXBsb3llZUVycm9yOiBzdGF0ZS5lbXBsb3llZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlcHRMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGRlcHRBY2lvbnMuZGVwdExpc3QoKSksXHJcbiAgICBlbXBsb3llZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZW1wbG95ZWVBY2lvbnMuZW1wbG95ZWVMaXN0KCkpLFxyXG5cclxuICAgIHNlbmRlcklkRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5zZW5kZXJJZEZvY3VzKCkpLFxyXG4gICAgc2VuZGVySWRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5zZW5kZXJJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIHNlbmRlcklkTGlzdERpc3BhdGNoOiAoc2VuZGVySWQpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc2VuZGVySWRMaXN0KHNlbmRlcklkKSksXHJcblxyXG4gICAgcmVjZWl2ZXJJZEZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucmVjZWl2ZXJJZEZvY3VzKCkpLFxyXG4gICAgcmVjZWl2ZXJJZENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnJlY2VpdmVySWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICByZWNlaXZlcklkTGlzdERpc3BhdGNoOiAocmVjZWl2ZXJJZCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5yZWNlaXZlcklkTGlzdChyZWNlaXZlcklkKSksXHJcblxyXG4gICAgZmFjdG9yeVRyYW5zZmVyQWRkc0Rpc3BhdGNoOiAoZmFjdG9yeVRyYXNmZXJzKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmFkZHMoZmFjdG9yeVRyYXNmZXJzKSksXHJcblxyXG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEVycm9ySGFuZGxlcih3aXRoU3R5bGVzKHN0eWxlcykoRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==