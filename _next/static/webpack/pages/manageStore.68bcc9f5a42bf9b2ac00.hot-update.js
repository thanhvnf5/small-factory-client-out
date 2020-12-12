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
          return __jsx(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, option.description);
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
          return __jsx(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, option.description);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyL0ZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImhlaWdodCIsImdyaWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJyZWFrcG9pbnRzIiwidXAiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJib3hTaXppbmciLCJsaXN0IiwiYm9yZGVyIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJGYWN0b3J5VHJhbnNmZXJDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwic2VuZGVySWQiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25Gb2N1cyIsInNlbmRlcklkRm9jdXNIYW5kbGVyIiwidmFsaWRhdGlvbiIsInJlcXVpcmVkIiwicmVjZWl2ZXJJZCIsInJlY2VpdmVySWRGb2N1c0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzZW5kZXJJZEZvY3VzRGlzcGF0Y2giLCJyZWNlaXZlcklkRm9jdXNEaXNwYXRjaCIsImlkIiwic2VuZGVySWRDaGFuZ2VkRGlzcGF0Y2giLCJyZWNlaXZlcklkQ2hhbmdlZERpc3BhdGNoIiwibGVmdCIsInJpZ2h0IiwibGVmdE5ld0l0ZW1zIiwiZmFjdG9yeVRyYW5zZmVyIiwicmVjZWl2ZXJJZExpc3QiLCJmaWx0ZXIiLCJpdGVtYSIsIml0ZW1iIiwia2V5IiwibGVuZ3RoIiwicmlnaHROZXdJdGVtcyIsInNlbmRlcklkTGlzdCIsImZhY3RvcnlUcmFuc2ZlcnMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJ2YWx1ZSIsImNvZGUiLCJmYWN0b3J5VHJhbnNmZXJBZGRzRGlzcGF0Y2giLCJzZXRTdGF0ZSIsInBhcmFtcyIsImdyb3VwIiwiZGVwdExpc3QiLCJkZXB0cyIsImZpbmQiLCJkZXB0IiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiIsIm9wdGlvbiIsIm9wdGlvbklkIiwidmFsdWVJZCIsImlzT0siLCJleHBvcnRUb0ZhY3RvcnlEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwidmVyc2lvbiIsImRlcHRMaXN0RGlzcGF0Y2giLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsImVycm9yIiwiZGVwdEVycm9yIiwiZW1wbG95ZWVFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZXMiLCJzZW5kZXJJZENoYW5nZWRIYW5kZXIiLCJkZXB0SWQiLCJyZW5kZXJEZXB0IiwibmFtZSIsImVtcGxveWVlIiwiZ2V0T3B0aW9uU2VsZWN0ZWQiLCJpbnB1dFByb3BzIiwibWluV2lkdGgiLCJ2YWxpZCIsInRvdWNoZWQiLCJyZWNlaXZlcklkQ2hhbmdlZEhhbmRlciIsIm1hcCIsInRyYW5zZmVyTGlzdFNhdmVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZXhwb3J0VG9GYWN0b3J5IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJkZXB0QWNpb25zIiwiZW1wbG95ZWVBY2lvbnMiLCJhY3Rpb25zIiwic2VuZGVySWRMaXN0RGlzcGF0Y2giLCJyZWNlaXZlcklkTGlzdERpc3BhdGNoIiwiZmFjdG9yeVRyYXNmZXJzIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKQyxZQUFNLEVBQUU7QUFGSixLQURtQjtBQUt6QkMsUUFBSSxFQUFFO0FBQ0pELFlBQU0sRUFBRSxNQUROO0FBRUZFLFdBQUssRUFBRSxNQUZMO0FBR0ZDLGdCQUFVLEVBQUUsWUFIVjtBQUlGQyxvQkFBYyxFQUFFO0FBSmQsT0FLRFAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUxDLEVBSzRCO0FBQzVCQyxhQUFPLEVBQUUsTUFEbUI7QUFFNUJDLGNBQVEsRUFBRSxNQUZrQjtBQUc1QkMsZUFBUyxFQUFFO0FBSGlCLEtBTDVCLENBTHFCO0FBZ0J6QkMsUUFBSSxFQUFFO0FBQ0pWLFlBQU0sRUFBRSxNQUROO0FBRUZXLFlBQU0sRUFBRTtBQUZOLE9BR0RkLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FIQyxFQUc0QjtBQUM1Qk4sWUFBTSxFQUFFO0FBRG9CLEtBSDVCLENBaEJxQjtBQXVCekJZLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVoQixLQUFLLENBQUNpQixPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLFdBQUssRUFBRW5CLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFIckI7QUF2QmtCLEdBQVo7QUFBQSxDQUFmO0FBOEJBOzs7SUFFTUMsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsa0JBQVksRUFBRSxLQURSO0FBRU5DLG1CQUFhLEVBQUUsSUFGVDtBQUdOQyxpQkFBVyxFQUFFLEtBSFA7QUFJTkMsa0JBQVksRUFBRSxJQUpSO0FBS05DLGtCQUFZLEVBQUUsSUFMUjtBQU1OQyxzQkFBZ0IsRUFBRSxJQU5aO0FBT05DLGNBQVEsRUFBRTtBQUNSQyxxQkFBYSxFQUFFO0FBQ2JDLGNBQUksRUFBRSxRQURPO0FBRWJDLHFCQUFXLEVBQUUsZUFGQTtBQUdiQyxpQkFBTyxFQUFFLE1BQUtDO0FBSEQsU0FEUDtBQU1SQyxrQkFBVSxFQUFFO0FBQ1ZDLGtCQUFRLEVBQUU7QUFEQTtBQU5KLE9BUEo7QUFpQk5DLGdCQUFVLEVBQUU7QUFDVlAscUJBQWEsRUFBRTtBQUNiQyxjQUFJLEVBQUUsUUFETztBQUViQyxxQkFBVyxFQUFFLGVBRkE7QUFHYkMsaUJBQU8sRUFBRSxNQUFLSztBQUhELFNBREw7QUFNVkgsa0JBQVUsRUFBRTtBQUNWQyxrQkFBUSxFQUFFO0FBREE7QUFORjtBQWpCTixLOzsrTkF5RGUsVUFBQ0csS0FBRCxFQUFXO0FBQ2hDQSxXQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBS0MsS0FBTCxDQUFXQyxxQkFBWDtBQUNELEs7O2lPQUV3QixVQUFDSCxLQUFELEVBQVc7QUFDbENBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLQyxLQUFMLENBQVdFLHVCQUFYO0FBQ0QsSzs7Z09BRXVCLFVBQUNKLEtBQUQsRUFBUVosWUFBUixFQUFzQlEsVUFBdEIsRUFBcUM7QUFDM0RJLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQUlYLFFBQVEsR0FBRyxJQUFmOztBQUNBLFVBQUlGLFlBQUosRUFBa0I7QUFDaEJFLGdCQUFRLEdBQUdGLFlBQVksQ0FBQ2lCLEVBQXhCO0FBQ0Q7O0FBQ0QsWUFBS0gsS0FBTCxDQUFXSSx1QkFBWCxDQUFtQ2hCLFFBQW5DLEVBQTZDTSxVQUE3QztBQUNELEs7O2tPQUV5QixVQUFDSSxLQUFELEVBQVFaLFlBQVIsRUFBc0JRLFVBQXRCLEVBQXFDO0FBQzdESSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJSCxVQUFVLEdBQUcsSUFBakI7O0FBQ0EsVUFBSVYsWUFBSixFQUFrQjtBQUNoQlUsa0JBQVUsR0FBR1YsWUFBWSxDQUFDaUIsRUFBMUI7QUFDRDs7QUFDRCxZQUFLSCxLQUFMLENBQVdLLHlCQUFYLENBQXFDVCxVQUFyQyxFQUFpREYsVUFBakQ7QUFDRCxLOztrT0FFeUIsVUFBQ0ksS0FBRCxFQUFRUSxJQUFSLEVBQWNDLEtBQWQsRUFBd0I7QUFDaERULFdBQUssQ0FBQ0MsY0FBTixHQURnRCxDQUVoRDs7QUFDQSxVQUFJUyxZQUFZLEdBQUcsTUFBS1IsS0FBTCxDQUFXUyxlQUFYLENBQTJCQyxjQUEzQixDQUEwQ0MsTUFBMUMsQ0FDakIsVUFBQ0MsS0FBRDtBQUFBLGVBQVdOLElBQUksQ0FBQ0ssTUFBTCxDQUFZLFVBQUNFLEtBQUQ7QUFBQSxpQkFBV0QsS0FBSyxDQUFDVCxFQUFOLElBQVlVLEtBQUssQ0FBQ0MsR0FBN0I7QUFBQSxTQUFaLEVBQThDQyxNQUE5QyxHQUF1RCxDQUFsRTtBQUFBLE9BRGlCLENBQW5CLENBSGdELENBTWhEOzs7QUFDQSxVQUFJQyxhQUFhLEdBQUcsTUFBS2hCLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQlEsWUFBM0IsQ0FBd0NOLE1BQXhDLENBQ2xCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXTCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxVQUFDRSxLQUFEO0FBQUEsaUJBQVdELEtBQUssQ0FBQ1QsRUFBTixJQUFZVSxLQUFLLENBQUNDLEdBQTdCO0FBQUEsU0FBYixFQUErQ0MsTUFBL0MsR0FBd0QsQ0FBbkU7QUFBQSxPQURrQixDQUFwQjs7QUFHQSxVQUFJRyxnQkFBZ0IsR0FBRyxFQUF2QixDQVZnRCxDQVdoRDs7QUFDQVYsa0JBQVksQ0FBQ1csT0FBYixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDN0JGLHdCQUFnQixDQUFDRyxJQUFqQixDQUFzQjtBQUNwQmpDLGtCQUFRLEVBQUVnQyxJQUFJLENBQUN4QixVQURLO0FBRXBCQSxvQkFBVSxFQUFFLE1BQUtJLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQnJCLFFBQTNCLENBQW9Da0MsS0FGNUI7QUFHcEJDLGNBQUksRUFBRUgsSUFBSSxDQUFDRztBQUhTLFNBQXRCO0FBS0QsT0FORCxFQVpnRCxDQW1CaEQ7O0FBQ0FQLG1CQUFhLENBQUNHLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCRix3QkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0I7QUFDcEJqQyxrQkFBUSxFQUFFZ0MsSUFBSSxDQUFDeEIsVUFESztBQUVwQkEsb0JBQVUsRUFBRSxNQUFLSSxLQUFMLENBQVdTLGVBQVgsQ0FBMkJiLFVBQTNCLENBQXNDMEIsS0FGOUI7QUFHcEJDLGNBQUksRUFBRUgsSUFBSSxDQUFDRztBQUhTLFNBQXRCO0FBS0QsT0FORDs7QUFPQSxVQUFJTCxnQkFBZ0IsQ0FBQ0gsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsY0FBS2YsS0FBTCxDQUFXd0IsMkJBQVgsQ0FBdUNOLGdCQUF2QztBQUNEOztBQUNELFlBQUtPLFFBQUwsQ0FBYztBQUNadkMsb0JBQVksRUFBRSxJQURGO0FBRVpDLHdCQUFnQixFQUFFLElBRk47QUFHWjtBQUNBRixvQkFBWSxFQUFFO0FBSkYsT0FBZDtBQU1ELEs7O3FOQUVZLFVBQUN5QyxNQUFEO0FBQUEsYUFBWSxDQUN2QixNQUFDLCtEQUFEO0FBQWUsV0FBRyxFQUFFQSxNQUFNLENBQUNDLEtBQTNCO0FBQWtDLGlCQUFTLEVBQUM7QUFBNUMsU0FFSSxNQUFLM0IsS0FBTCxDQUFXNEIsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEJDLElBQTFCLENBQStCLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUM1QixFQUFMLElBQVd1QixNQUFNLENBQUNDLEtBQTVCO0FBQUEsT0FBL0IsRUFDR0ssV0FIUCxDQUR1QixFQU92Qk4sTUFBTSxDQUFDTyxRQVBnQixDQUFaO0FBQUEsSzs7NE5BVU8sVUFBQ0MsTUFBRCxFQUFTWixLQUFULEVBQW1CO0FBQ3JDOzs7QUFHQSxVQUFJLENBQUNZLE1BQUQsSUFBVyxDQUFDWixLQUFoQixFQUF1QjtBQUNyQixlQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFJYSxRQUFRLEdBQUdELE1BQU0sQ0FBQy9CLEVBQXRCOztBQUNBLFVBQUksQ0FBQ2dDLFFBQUwsRUFBZTtBQUNiQSxnQkFBUSxHQUFHRCxNQUFYO0FBQ0Q7O0FBQ0QsVUFBSUUsT0FBTyxHQUFHZCxLQUFLLENBQUNuQixFQUFwQjs7QUFDQSxVQUFJLENBQUNpQyxPQUFMLEVBQWM7QUFDWkEsZUFBTyxHQUFHZCxLQUFWO0FBQ0Q7O0FBQ0QsYUFBT2EsUUFBUSxLQUFLQyxPQUFwQjtBQUNELEs7O3NOQUVhLFVBQUN0QyxLQUFELEVBQVF1QyxJQUFSLEVBQWlCO0FBQzdCdkMsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUlzQyxJQUFKLEVBQVU7QUFDUixjQUFLckMsS0FBTCxDQUFXc0MsNkJBQVgsQ0FDRSxNQUFLQyxLQUFMLENBQVdyRCxZQUFYLENBQXdCaUIsRUFEMUIsRUFFRSxNQUFLb0MsS0FBTCxDQUFXckQsWUFBWCxDQUF3QnNELE9BRjFCOztBQUlBLGNBQUtmLFFBQUwsQ0FBYztBQUNaM0Msc0JBQVksRUFBRSxLQURGO0FBRVpJLHNCQUFZLEVBQUUsSUFGRjtBQUdaQywwQkFBZ0IsRUFBRTtBQUhOLFNBQWQ7QUFLRCxPQVZELE1BVU87QUFDTCxjQUFLc0MsUUFBTCxDQUFjO0FBQUUzQyxzQkFBWSxFQUFFO0FBQWhCLFNBQWQ7QUFDRDtBQUNGLEs7O3lOQUVnQixVQUFDa0IsS0FBRCxFQUFXO0FBQzFCLGFBQ0UsTUFBQyx1REFBRDtBQUNFLGNBQU0sRUFBQyx5QkFEVDtBQUVFLGNBQU0sRUFBRTtBQUZWLFNBSUUsTUFBQyxnRUFBRCxFQUFXQSxLQUFYLENBSkYsQ0FERjtBQVFELEs7OzJOQUVrQixZQUFNO0FBQ3ZCLFlBQUt5QixRQUFMLENBQWM7QUFBRXpDLG1CQUFXLEVBQUU7QUFBZixPQUFkO0FBQ0QsSzs7Ozs7Ozs7QUF4SkQ7d0NBQ29CO0FBQ2xCLFdBQUtnQixLQUFMLENBQVd5QyxnQkFBWDtBQUNBLFdBQUt6QyxLQUFMLENBQVcwQyxvQkFBWDtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQUksS0FBSzFDLEtBQUwsQ0FBVzJDLEtBQVgsSUFBb0IsS0FBSzNDLEtBQUwsQ0FBVzRDLFNBQS9CLElBQTRDLEtBQUs1QyxLQUFMLENBQVc2QyxhQUEzRCxFQUEwRTtBQUN4RSxZQUNHLEtBQUs3QyxLQUFMLENBQVcyQyxLQUFYLENBQWlCRyxRQUFqQixJQUNDLEtBQUs5QyxLQUFMLENBQVcyQyxLQUFYLENBQWlCRyxRQUFqQixDQUEwQkMsTUFBMUIsSUFBb0MsR0FEdEMsSUFFQyxLQUFLL0MsS0FBTCxDQUFXNEMsU0FBWCxDQUFxQkUsUUFBckIsSUFDQyxLQUFLOUMsS0FBTCxDQUFXNEMsU0FBWCxDQUFxQkUsUUFBckIsQ0FBOEJDLE1BQTlCLElBQXdDLEdBSDFDLElBSUMsS0FBSy9DLEtBQUwsQ0FBVzZDLGFBQVgsQ0FBeUJDLFFBQXpCLElBQ0MsS0FBSzlDLEtBQUwsQ0FBVzZDLGFBQVgsQ0FBeUJDLFFBQXpCLENBQWtDQyxNQUFsQyxJQUE0QyxHQU5oRCxFQU9FO0FBQ0E7QUFDQTtBQUNBLGVBQUsvQyxLQUFMLENBQVdnRCxRQUFYLEdBSEEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRjtBQUNGOzs7O0FBZ0lEOzZCQUVTO0FBQUE7O0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUNFLElBQUlDLElBQUosR0FBV0MsY0FBWCxLQUNFLCtDQUZKO0FBRE8sVUFLQ0MsT0FMRCxHQUthLEtBQUtyRCxLQUxsQixDQUtDcUQsT0FMRDtBQU1QLGFBQ0U7QUFBSyxpQkFBUyxFQUFFQSxPQUFPLENBQUM5RjtBQUF4QixTQUVFLE1BQUMsbUVBQUQ7QUFBTyxZQUFJLEVBQUUsS0FBS3lDLEtBQUwsQ0FBVzJDLEtBQXhCO0FBQStCLG1CQUFXLEVBQUUsS0FBS1c7QUFBakQsU0FDRyxLQUFLdEQsS0FBTCxDQUFXMkMsS0FBWCxHQUFtQixLQUFLM0MsS0FBTCxDQUFXMkMsS0FBWCxDQUFpQlksT0FBcEMsR0FBOEMsV0FEakQsQ0FGRixFQU1FLE1BQUMsMERBQUQ7QUFDRSxZQUFJLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV3ZELFdBRG5CO0FBRUUsZUFBTyxFQUFFLEtBQUt3RSxnQkFGaEI7QUFHRSx3QkFBZ0IsRUFBRTtBQUhwQixTQUtFLE1BQUMsdURBQUQ7QUFBTyxlQUFPLEVBQUUsS0FBS0EsZ0JBQXJCO0FBQXVDLGdCQUFRLEVBQUM7QUFBaEQsU0FDRyxLQUFLakIsS0FBTCxDQUFXdEQsWUFBWCxHQUEwQixjQUQ3QixDQUxGLENBTkYsRUFlRSxNQUFDLGlFQUFEO0FBQ0UsWUFBSSxFQUFFLEtBQUtzRCxLQUFMLENBQVd6RCxZQURuQjtBQUVFLGVBQU8sRUFBRSxpQkFBQ2dCLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUMyRCxXQUFMLENBQWlCM0QsS0FBakIsQ0FBWDtBQUFBLFNBRlg7QUFHRSxzQkFBYyxFQUFFLEtBQUs0RCxjQUh2QjtBQUlFLDJCQUFnQjtBQUpsQixTQU1FLE1BQUMsc0VBQUQ7QUFBYSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQXBCO0FBQXdDLFVBQUUsRUFBQztBQUEzQyw0QkFORixFQVNFLE1BQUMsd0VBQUQsUUFDRSxNQUFDLDRFQUFELFFBQW9CLEtBQUtwQixLQUFMLENBQVd4RCxhQUEvQixDQURGLENBVEYsRUFZRSxNQUFDLHdFQUFELFFBQ0UsTUFBQyxnRUFBRDtBQUNFLGlCQUFTLE1BRFg7QUFFRSxlQUFPLEVBQUUsaUJBQUNlLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUMyRCxXQUFMLENBQWlCM0QsS0FBakIsQ0FBWDtBQUFBLFNBRlg7QUFHRSxhQUFLLEVBQUM7QUFIUixvQkFERixFQVFFLE1BQUMsZ0VBQUQ7QUFDRSxlQUFPLEVBQUUsaUJBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUMyRCxXQUFMLENBQWlCM0QsS0FBakIsRUFBd0IsSUFBeEIsQ0FBWDtBQUFBLFNBRFg7QUFFRSxhQUFLLEVBQUM7QUFGUiwrQkFSRixDQVpGLENBZkYsRUEyQ0UsTUFBQyxzREFBRCxRQUNFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUU7QUFBZixTQUNFLE1BQUMsZ0VBQUQsb0NBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUU7QUFBZixTQUNFLE1BQUMsc0RBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsZUFBTyxFQUFFLENBRlg7QUFHRSxlQUFPLEVBQUMsUUFIVjtBQUlFLGtCQUFVLEVBQUMsUUFKYjtBQUtFLGlCQUFTLEVBQUV1RCxPQUFPLENBQUMzRjtBQUxyQixTQU9FLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUU7QUFBZixTQUNHLEtBQUtzQyxLQUFMLENBQVdTLGVBQVgsQ0FBMkJtRCxPQUEzQixHQUNDLE1BQUMsdUVBQUQsT0FERCxHQUdDLE1BQUMsOERBQUQ7QUFDRSxVQUFFLEVBQUMsaUJBREw7QUFFRSxlQUFPLEVBQUUsS0FBSzVELEtBQUwsQ0FBVzZELFlBQVgsQ0FBd0JDLFNBRm5DO0FBR0UsZUFBTyxFQUFFO0FBQ1A1QixnQkFBTSxFQUFFbUIsT0FBTyxDQUFDbkI7QUFEVCxTQUhYO0FBTUUscUJBQWEsTUFOZjtBQU9FLGFBQUssRUFBRSxLQUFLbEMsS0FBTCxDQUFXUyxlQUFYLENBQTJCckIsUUFBM0IsQ0FBb0NrQyxLQVA3QztBQVFFLGdCQUFRLEVBQUUsa0JBQUN4QixLQUFELEVBQVFaLFlBQVIsRUFBeUI7QUFDakMsZ0JBQUksQ0FBQzZFLHFCQUFMLENBQ0VqRSxLQURGLEVBRUVaLFlBRkYsRUFHRSxNQUFJLENBQUNxRCxLQUFMLENBQVduRCxRQUFYLENBQW9CTSxVQUh0QjtBQUtELFNBZEg7QUFlRSxlQUFPLEVBQUUsaUJBQUN3QyxNQUFEO0FBQUEsaUJBQVlBLE1BQU0sQ0FBQzhCLE1BQW5CO0FBQUEsU0FmWDtBQWdCRSxtQkFBVyxFQUFFLEtBQUtDLFVBaEJwQjtBQWlCRSxzQkFBYyxFQUFFLHdCQUFDL0IsTUFBRCxFQUFZO0FBQzFCLGNBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDL0IsRUFBckIsRUFBeUI7QUFDdkIsbUJBQU8rQixNQUFNLENBQUNnQyxJQUFkO0FBQ0Q7O0FBQ0QsY0FBSUMsUUFBUSxHQUFHLE1BQUksQ0FBQ25FLEtBQUwsQ0FBVzZELFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDaEMsSUFBbEMsQ0FDYixVQUFDcUMsUUFBRDtBQUFBLG1CQUFjQSxRQUFRLENBQUNoRSxFQUFULElBQWUrQixNQUE3QjtBQUFBLFdBRGEsQ0FBZjs7QUFHQSxjQUFJLENBQUNpQyxRQUFMLEVBQWU7QUFDYixtQkFBTyxFQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU9BLFFBQVEsQ0FBQ0QsSUFBaEI7QUFDRDtBQUNGLFNBN0JIO0FBOEJFLHlCQUFpQixFQUFFLEtBQUtFLGlCQTlCMUI7QUErQkUsb0JBQVksRUFBRSxzQkFBQ2xDLE1BQUQ7QUFBQSxpQkFDWixNQUFDLDZDQUFELENBQU8sUUFBUCxRQUFpQkEsTUFBTSxDQUFDRixXQUF4QixDQURZO0FBQUEsU0EvQmhCO0FBa0NFLG1CQUFXLEVBQUUscUJBQUNOLE1BQUQ7QUFBQSxpQkFDWCxNQUFDLDJEQUFELHlGQUNNQSxNQUROO0FBRUUsc0JBQVUsa0NBQ0xBLE1BQU0sQ0FBQzJDLFVBREY7QUFFUjtBQUNBSCxrQkFBSSxFQUFFLGlCQUhFO0FBSVIvRCxnQkFBRSxFQUFFO0FBSkksY0FGWjtBQVFFLGlCQUFLLEVBQUU7QUFBRW1FLHNCQUFRLEVBQUU7QUFBWixhQVJUO0FBU0Usb0JBQVEsTUFUVjtBQVVFLGlCQUFLLEVBQUMsU0FWUjtBQVdFLGtCQUFNLEVBQUMsUUFYVDtBQVlFLGlCQUFLLEVBQ0gsQ0FBQyxNQUFJLENBQUN0RSxLQUFMLENBQVdTLGVBQVgsQ0FBMkJyQixRQUEzQixDQUFvQ21GLEtBQXJDLEdBQ0EsTUFBSSxDQUFDdkUsS0FBTCxDQUFXUyxlQUFYLENBQTJCckIsUUFBM0IsQ0FBb0NvRixPQURwQyxHQUVJLElBRkosR0FHSTtBQWhCUixhQWtCTSxNQUFJLENBQUNqQyxLQUFMLENBQVduRCxRQUFYLENBQW9CQyxhQWxCMUIsRUFEVztBQUFBO0FBbENmLFFBSkosQ0FQRixFQXNFRSxNQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFO0FBQWYsU0FDRyxLQUFLVyxLQUFMLENBQVdTLGVBQVgsQ0FBMkJtRCxPQUEzQixHQUNDLE1BQUMsdUVBQUQsT0FERCxHQUdDLE1BQUMsOERBQUQ7QUFDRSxVQUFFLEVBQUMsbUJBREw7QUFFRSxlQUFPLEVBQUUsS0FBSzVELEtBQUwsQ0FBVzZELFlBQVgsQ0FBd0JDLFNBRm5DO0FBR0UsZUFBTyxFQUFFO0FBQ1A1QixnQkFBTSxFQUFFbUIsT0FBTyxDQUFDbkI7QUFEVCxTQUhYO0FBTUUscUJBQWEsTUFOZjtBQU9FLGFBQUssRUFBRSxLQUFLbEMsS0FBTCxDQUFXUyxlQUFYLENBQTJCYixVQUEzQixDQUFzQzBCLEtBUC9DO0FBUUUsZ0JBQVEsRUFBRSxrQkFBQ3hCLEtBQUQsRUFBUVosWUFBUixFQUF5QjtBQUNqQyxnQkFBSSxDQUFDdUYsdUJBQUwsQ0FDRTNFLEtBREYsRUFFRVosWUFGRixFQUdFLE1BQUksQ0FBQ3FELEtBQUwsQ0FBVzNDLFVBQVgsQ0FBc0JGLFVBSHhCO0FBS0QsU0FkSDtBQWVFLGVBQU8sRUFBRSxpQkFBQ3dDLE1BQUQ7QUFBQSxpQkFBWUEsTUFBTSxDQUFDOEIsTUFBbkI7QUFBQSxTQWZYO0FBZ0JFLG1CQUFXLEVBQUUsS0FBS0MsVUFoQnBCO0FBaUJFLHNCQUFjLEVBQUUsd0JBQUMvQixNQUFELEVBQVk7QUFDMUIsY0FBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUMvQixFQUFyQixFQUF5QjtBQUN2QixtQkFBTytCLE1BQU0sQ0FBQ2dDLElBQWQ7QUFDRDs7QUFDRCxjQUFJQyxRQUFRLEdBQUcsTUFBSSxDQUFDbkUsS0FBTCxDQUFXNkQsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NoQyxJQUFsQyxDQUNiLFVBQUNxQyxRQUFEO0FBQUEsbUJBQWNBLFFBQVEsQ0FBQ2hFLEVBQVQsSUFBZStCLE1BQTdCO0FBQUEsV0FEYSxDQUFmOztBQUdBLGNBQUksQ0FBQ2lDLFFBQUwsRUFBZTtBQUNiLG1CQUFPLEVBQVA7QUFDRCxXQUZELE1BRU87QUFDTCxtQkFBT0EsUUFBUSxDQUFDRCxJQUFoQjtBQUNEO0FBQ0YsU0E3Qkg7QUE4QkUseUJBQWlCLEVBQUUsS0FBS0UsaUJBOUIxQjtBQStCRSxvQkFBWSxFQUFFLHNCQUFDbEMsTUFBRDtBQUFBLGlCQUNaLE1BQUMsNkNBQUQsQ0FBTyxRQUFQLFFBQWlCQSxNQUFNLENBQUNGLFdBQXhCLENBRFk7QUFBQSxTQS9CaEI7QUFrQ0UsbUJBQVcsRUFBRSxxQkFBQ04sTUFBRDtBQUFBLGlCQUNYLE1BQUMsMkRBQUQseUZBQ01BLE1BRE47QUFFRSxzQkFBVSxrQ0FDTEEsTUFBTSxDQUFDMkMsVUFERjtBQUVSO0FBQ0FILGtCQUFJLEVBQUUsbUJBSEU7QUFJUi9ELGdCQUFFLEVBQUU7QUFKSSxjQUZaO0FBUUUsaUJBQUssRUFBRTtBQUFFbUUsc0JBQVEsRUFBRTtBQUFaLGFBUlQ7QUFTRSxvQkFBUSxNQVRWO0FBVUUsaUJBQUssRUFBQyxlQVZSO0FBV0Usa0JBQU0sRUFBQyxRQVhUO0FBWUUsaUJBQUssRUFDSCxDQUFDLE1BQUksQ0FBQ3RFLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQmIsVUFBM0IsQ0FBc0MyRSxLQUF2QyxHQUNBLE1BQUksQ0FBQ3ZFLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQmIsVUFBM0IsQ0FBc0M0RSxPQUR0QyxHQUVJLElBRkosR0FHSTtBQWhCUixhQWtCTSxNQUFJLENBQUNqQyxLQUFMLENBQVczQyxVQUFYLENBQXNCUCxhQWxCNUIsRUFEVztBQUFBO0FBbENmLFFBSkosQ0F0RUYsQ0FERixDQUpGLEVBNElFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixpQkFBUyxFQUFFZ0UsT0FBTyxDQUFDbEY7QUFBdEMsU0FDRyxLQUFLNkIsS0FBTCxDQUFXUyxlQUFYLENBQTJCbUQsT0FBM0IsR0FDQyxNQUFDLHVFQUFELE9BREQsR0FHQyxNQUFDLHlFQUFEO0FBQ0UsWUFBSSxFQUFFLEtBQUs1RCxLQUFMLENBQVdTLGVBQVgsQ0FBMkJRLFlBQTNCLENBQXdDeUQsR0FBeEMsQ0FBNEMsVUFBQ3RELElBQUQsRUFBVTtBQUMxRCxpQkFBTztBQUFFTixlQUFHLEVBQUVNLElBQUksQ0FBQ2pCLEVBQVo7QUFBZ0JtQixpQkFBSyxFQUFFRixJQUFJLENBQUNHO0FBQTVCLFdBQVA7QUFDRCxTQUZLLENBRFI7QUFJRSxhQUFLLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQkMsY0FBM0IsQ0FBMENnRSxHQUExQyxDQUE4QyxVQUFDdEQsSUFBRCxFQUFVO0FBQzdELGlCQUFPO0FBQUVOLGVBQUcsRUFBRU0sSUFBSSxDQUFDakIsRUFBWjtBQUFnQm1CLGlCQUFLLEVBQUVGLElBQUksQ0FBQ0c7QUFBNUIsV0FBUDtBQUNELFNBRk0sQ0FKVDtBQU9FLCtCQUF1QixFQUFFLGlDQUFDekIsS0FBRCxFQUFRUSxJQUFSLEVBQWNDLEtBQWQ7QUFBQSxpQkFDdkIsTUFBSSxDQUFDb0UsdUJBQUwsQ0FBNkI3RSxLQUE3QixFQUFvQ1EsSUFBcEMsRUFBMENDLEtBQTFDLENBRHVCO0FBQUE7QUFQM0IsUUFKSixDQTVJRixDQTNDRixDQURGO0FBNE1EOzs7O0VBNVlvQ3FFLGdEO0FBK1l2Qzs7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdEMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTDlCLG1CQUFlLEVBQUU4QixLQUFLLENBQUM5QixlQURsQjtBQUVMbUIsWUFBUSxFQUFFVyxLQUFLLENBQUNSLElBQU4sQ0FBV0gsUUFGaEI7QUFHTGlDLGdCQUFZLEVBQUV0QixLQUFLLENBQUM0QixRQUFOLENBQWVOLFlBSHhCO0FBSUxsQixTQUFLLEVBQUVKLEtBQUssQ0FBQ3VDLGVBQU4sQ0FBc0JuQyxLQUp4QjtBQUtMQyxhQUFTLEVBQUVMLEtBQUssQ0FBQ1IsSUFBTixDQUFXWSxLQUxqQjtBQU1MRSxpQkFBYSxFQUFFTixLQUFLLENBQUM0QixRQUFOLENBQWV4QjtBQU56QixHQUFQO0FBUUQsQ0FURDs7QUFXQSxJQUFNb0Msa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMdkMsb0JBQWdCLEVBQUU7QUFBQSxhQUFNdUMsUUFBUSxDQUFDQyxtRUFBQSxFQUFELENBQWQ7QUFBQSxLQURiO0FBRUx2Qyx3QkFBb0IsRUFBRTtBQUFBLGFBQU1zQyxRQUFRLENBQUNFLDJFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBRmpCO0FBSUxqRix5QkFBcUIsRUFBRTtBQUFBLGFBQU0rRSxRQUFRLENBQUNHLG1GQUFBLEVBQUQsQ0FBZDtBQUFBLEtBSmxCO0FBS0wvRSwyQkFBdUIsRUFBRSxpQ0FBQ2tCLEtBQUQsRUFBUTVCLFVBQVI7QUFBQSxhQUN2QnNGLFFBQVEsQ0FBQ0cscUZBQUEsQ0FBd0I3RCxLQUF4QixFQUErQjVCLFVBQS9CLENBQUQsQ0FEZTtBQUFBLEtBTHBCO0FBT0wwRix3QkFBb0IsRUFBRSw4QkFBQ2hHLFFBQUQ7QUFBQSxhQUNwQjRGLFFBQVEsQ0FBQ0csa0ZBQUEsQ0FBcUIvRixRQUFyQixDQUFELENBRFk7QUFBQSxLQVBqQjtBQVVMYywyQkFBdUIsRUFBRTtBQUFBLGFBQU04RSxRQUFRLENBQUNHLHFGQUFBLEVBQUQsQ0FBZDtBQUFBLEtBVnBCO0FBV0w5RSw2QkFBeUIsRUFBRSxtQ0FBQ2lCLEtBQUQsRUFBUTVCLFVBQVI7QUFBQSxhQUN6QnNGLFFBQVEsQ0FBQ0csdUZBQUEsQ0FBMEI3RCxLQUExQixFQUFpQzVCLFVBQWpDLENBQUQsQ0FEaUI7QUFBQSxLQVh0QjtBQWFMMkYsMEJBQXNCLEVBQUUsZ0NBQUN6RixVQUFEO0FBQUEsYUFDdEJvRixRQUFRLENBQUNHLG9GQUFBLENBQXVCdkYsVUFBdkIsQ0FBRCxDQURjO0FBQUEsS0FibkI7QUFnQkw0QiwrQkFBMkIsRUFBRSxxQ0FBQzhELGVBQUQ7QUFBQSxhQUMzQk4sUUFBUSxDQUFDRywwRUFBQSxDQUFhRyxlQUFiLENBQUQsQ0FEbUI7QUFBQSxLQWhCeEI7QUFtQkx0QyxZQUFRLEVBQUU7QUFBQSxhQUFNZ0MsUUFBUSxDQUFDTywyREFBQSxFQUFELENBQWQ7QUFBQTtBQW5CTCxHQUFQO0FBcUJELENBdEJEOztBQXdCZUMsMkhBQU8sQ0FDcEJYLGVBRG9CLEVBRXBCRSxrQkFGb0IsQ0FBUCxDQUdiVSx3RkFBZ0IsQ0FBQ0MsNEVBQVUsQ0FBQ3JJLE1BQUQsQ0FBVixDQUFtQndCLHdCQUFuQixDQUFELEVBQStDOEcsd0RBQS9DLENBSEgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYW5hZ2VTdG9yZS42OGJjYzlmNWE0MmJmOWIyYWMwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgTGlzdFN1YmhlYWRlciwgU25hY2tiYXIsIFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRXhwb3J0VG9GYWN0b3J5RWRpdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FeHBvcnRUb0ZhY3RvcnkvRXhwb3J0VG9GYWN0b3J5RWRpdFwiO1xyXG5pbXBvcnQgRXhwb3J0VG9GYWN0b3J5TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FeHBvcnRUb0ZhY3RvcnkvRXhwb3J0VG9GYWN0b3J5TGlzdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyXCI7XHJcbmltcG9ydCB3aXRoRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhFcnJvckhhbmRsZXIvd2l0aEVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZmFjdG9yeVRyYW5zZmVyQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGRlcHRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZGVwdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBlbXBsb3llZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0VHlwZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0VHlwZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0QWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFR5cGVBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFR5cGVBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZ29sZFVuaXRBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvZ29sZFVuaXRBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgYXV0aEFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgVHJhbnNmZXJMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0xpc3QvVHJhbnNmZXJMaXN0XCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcblxyXG4vL2ltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDlkZGRkXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcblxyXG5jbGFzcyBGYWN0b3J5VHJhbnNmZXJDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IG51bGwsXHJcbiAgICBpc09wZW5BbGVydDogZmFsc2UsXHJcbiAgICBhbGVydENvbnRlbnQ6IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXHJcbiAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgc2VuZGVySWQ6IHtcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuc2VuZGVySWRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZWNlaXZlcklkOiB7XHJcbiAgICAgIGVsZW1lbnRDb25maWc6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNo4buNbiBz4bqjbiBwaOG6qW1cIixcclxuICAgICAgICBvbkZvY3VzOiB0aGlzLnJlY2VpdmVySWRGb2N1c0hhbmRsZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIG1ldGhvZHMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGVwdExpc3REaXNwYXRjaCgpO1xyXG4gICAgdGhpcy5wcm9wcy5lbXBsb3llZUxpc3REaXNwYXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3IgfHwgdGhpcy5wcm9wcy5kZXB0RXJyb3IgfHwgdGhpcy5wcm9wcy5lbXBsb3llZUVycm9yKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAodGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAgICh0aGlzLnByb3BzLmRlcHRFcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5kZXB0RXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgfHxcclxuICAgICAgICAodGhpcy5wcm9wcy5lbXBsb3llZUVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5leHBvcnRUb0ZhY3RvcnlFcnJvckhhbmRsZWREaXNwYXRjaCgpO1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIGhhcyBvY2N1cmVkIGluIEJ1Z2d5IGNvbXBvbmVudCFcIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpO1xyXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKFwiL3NpZ2luXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgaXNEaWFsb2dPcGVuOiB0cnVlLFxyXG4gICAgICAgIC8vICAgZGlhbG9nQ29udGVudDogXCJM4buXaSDEkcSDbmcgbmjhuq1wIVwiLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kZXJJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuc2VuZGVySWRGb2N1c0Rpc3BhdGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVjZWl2ZXJJZEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMucmVjZWl2ZXJJZEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICBzZW5kZXJJZENoYW5nZWRIYW5kZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBzZW5kZXJJZCA9IG51bGw7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIHNlbmRlcklkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5zZW5kZXJJZENoYW5nZWREaXNwYXRjaChzZW5kZXJJZCwgdmFsaWRhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcmVjZWl2ZXJJZENoYW5nZWRIYW5kZXIgPSAoZXZlbnQsIHNlbGVjdGVkSXRlbSwgdmFsaWRhdGlvbikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCByZWNlaXZlcklkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgcmVjZWl2ZXJJZCA9IHNlbGVjdGVkSXRlbS5pZDtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMucmVjZWl2ZXJJZENoYW5nZWREaXNwYXRjaChyZWNlaXZlcklkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICB0cmFuc2Zlckxpc3RTYXZlSGFuZGxlciA9IChldmVudCwgbGVmdCwgcmlnaHQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBHZXQgbmV3IGl0ZW1zIGluIHRoZSBsZWZ0IGxpc3QuXHJcbiAgICBsZXQgbGVmdE5ld0l0ZW1zID0gdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZExpc3QuZmlsdGVyKFxyXG4gICAgICAoaXRlbWEpID0+IGxlZnQuZmlsdGVyKChpdGVtYikgPT4gaXRlbWEuaWQgPT0gaXRlbWIua2V5KS5sZW5ndGggPiAwXHJcbiAgICApO1xyXG4gICAgLy8gR2V0IG5ldyBpdGVtcyBpbiB0aGUgcmlnaHQgbGlzdC5cclxuICAgIGxldCByaWdodE5ld0l0ZW1zID0gdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWRMaXN0LmZpbHRlcihcclxuICAgICAgKGl0ZW1hKSA9PiByaWdodC5maWx0ZXIoKGl0ZW1iKSA9PiBpdGVtYS5pZCA9PSBpdGVtYi5rZXkpLmxlbmd0aCA+IDBcclxuICAgICk7XHJcbiAgICBsZXQgZmFjdG9yeVRyYW5zZmVycyA9IFtdO1xyXG4gICAgLy8gUHVzaCBuZXcgaXRlbXMgaW4gdGhlIGxlZnQgbGlzdC5cclxuICAgIGxlZnROZXdJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGZhY3RvcnlUcmFuc2ZlcnMucHVzaCh7XHJcbiAgICAgICAgc2VuZGVySWQ6IGl0ZW0ucmVjZWl2ZXJJZCxcclxuICAgICAgICByZWNlaXZlcklkOiB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZC52YWx1ZSxcclxuICAgICAgICBjb2RlOiBpdGVtLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBQdXNoIG5ldyBpdGVtcyBpbiB0aGUgcmlnaHQgbGlzdC5cclxuICAgIHJpZ2h0TmV3SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBmYWN0b3J5VHJhbnNmZXJzLnB1c2goe1xyXG4gICAgICAgIHNlbmRlcklkOiBpdGVtLnJlY2VpdmVySWQsXHJcbiAgICAgICAgcmVjZWl2ZXJJZDogdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC52YWx1ZSxcclxuICAgICAgICBjb2RlOiBpdGVtLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoZmFjdG9yeVRyYW5zZmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyQWRkc0Rpc3BhdGNoKGZhY3RvcnlUcmFuc2ZlcnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgc2VsZWN0ZWRJdGVtVHlwZTogbnVsbCxcclxuICAgICAgLy8gaXNPcGVuQWxlcnQ6IHRydWUsXHJcbiAgICAgIGFsZXJ0Q29udGVudDogXCJMxrB1XCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXJEZXB0ID0gKHBhcmFtcykgPT4gW1xyXG4gICAgPExpc3RTdWJoZWFkZXIga2V5PXtwYXJhbXMuZ3JvdXB9IGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09IHBhcmFtcy5ncm91cClcclxuICAgICAgICAgIC5kZXNjcmlwdGlvblxyXG4gICAgICB9XHJcbiAgICA8L0xpc3RTdWJoZWFkZXI+LFxyXG4gICAgcGFyYW1zLmNoaWxkcmVuLFxyXG4gIF07XHJcblxyXG4gIGdldE9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgdmFsdWUpID0+IHtcclxuICAgIC8qIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgfSAqL1xyXG4gICAgaWYgKCFvcHRpb24gfHwgIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25JZCA9IG9wdGlvbi5pZDtcclxuICAgIGlmICghb3B0aW9uSWQpIHtcclxuICAgICAgb3B0aW9uSWQgPSBvcHRpb247XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVJZCA9IHZhbHVlLmlkO1xyXG4gICAgaWYgKCF2YWx1ZUlkKSB7XHJcbiAgICAgIHZhbHVlSWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25JZCA9PT0gdmFsdWVJZDtcclxuICB9O1xyXG5cclxuICBkaWFsb2dDbG9zZSA9IChldmVudCwgaXNPSykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc09LKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZXhwb3J0VG9GYWN0b3J5RGVsZXRlRGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0uaWQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0udmVyc2lvblxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RpYWxvZ09wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBhcGVyQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgaGFuZGxlPVwiI2RyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGNhbmNlbD17J1tjbGFzcyo9XCJNdWlEaWFsb2dDb250ZW50LXJvb3RcIl0nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuQWxlcnQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArXHJcbiAgICAgICAgXCIgLi4uLi4uLi4uLi4uIEV4cG9ydFRvRmFjdG9yeUNvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHsvKiBFcnJvciBQb3B1cCAqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5lcnJvcn0gbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yID8gdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlIDogXCI8PEVycm9yPj5cIn1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIHsvKiBJbmZvIEFsZXJ0ICovfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pc09wZW5BbGVydH1cclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VBbGVydH0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsZXJ0Q29udGVudCArIFwiIHRow6BuaCBjw7RuZy5cIn1cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzRGlhbG9nT3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICBQYXBlckNvbXBvbmVudD17dGhpcy5QYXBlckNvbXBvbmVudH1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyYWdnYWJsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17eyBjdXJzb3I6IFwibW92ZVwiIH19IGlkPVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICBD4bqjbmggYsOhb1xyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+e3RoaXMuc3RhdGUuZGlhbG9nQ29udGVudH08L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuZGlhbG9nQ2xvc2UoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBI4buneVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIMSQ4buTbmcgw71cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxQYXBlcj5DaHV54buDbiDEkeG7lWk8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VuZGVySWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRlcklkQ2hhbmdlZEhhbmRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZW5kZXJJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJHcm91cD17dGhpcy5yZW5kZXJEZXB0fVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSB0aGlzLnByb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcGxveWVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17dGhpcy5nZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLmRlc2NyaXB0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZW5kZXJJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kZXJJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlThu6tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnNlbmRlcklkLnZhbGlkICZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5zZW5kZXJJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIud2FpdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlY2VpdmVySWQtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9IaWdobGlnaHRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZXJJZENoYW5nZWRIYW5kZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVjZWl2ZXJJZC52YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLmRlcHRJZH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJHcm91cD17dGhpcy5yZW5kZXJEZXB0fVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSB0aGlzLnByb3BzLmVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcGxveWVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25TZWxlY3RlZD17dGhpcy5nZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57b3B0aW9uLmRlc2NyaXB0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmlucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlOiAnbmV3LXBhc3N3b3JkJywgLy8gZGlzYWJsZSBhdXRvY29tcGxldGUgYW5kIGF1dG9maWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZWNlaXZlcklkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJlY2VpdmVySWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLEkOG6v25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWQudmFsaWQgJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWQudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUucmVjZWl2ZXJJZC5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFRyYW5zZmVyTGlzdFxyXG4gICAgICAgICAgICAgICAgbGVmdD17dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBrZXk6IGl0ZW0uaWQsIHZhbHVlOiBpdGVtLmNvZGUgfTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgcmlnaHQ9e3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnJlY2VpdmVySWRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBrZXk6IGl0ZW0uaWQsIHZhbHVlOiBpdGVtLmNvZGUgfTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJMaXN0U2F2ZUhhbmRsZXI9eyhldmVudCwgbGVmdCwgcmlnaHQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJMaXN0U2F2ZUhhbmRsZXIoZXZlbnQsIGxlZnQsIHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3RvcmUgKi9cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmYWN0b3J5VHJhbnNmZXI6IHN0YXRlLmZhY3RvcnlUcmFuc2ZlcixcclxuICAgIGRlcHRMaXN0OiBzdGF0ZS5kZXB0LmRlcHRMaXN0LFxyXG4gICAgZW1wbG95ZWVMaXN0OiBzdGF0ZS5lbXBsb3llZS5lbXBsb3llZUxpc3QsXHJcbiAgICBlcnJvcjogc3RhdGUuZXhwb3J0VG9GYWN0b3J5LmVycm9yLFxyXG4gICAgZGVwdEVycm9yOiBzdGF0ZS5kZXB0LmVycm9yLFxyXG4gICAgZW1wbG95ZWVFcnJvcjogc3RhdGUuZW1wbG95ZWUuZXJyb3IsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXB0TGlzdERpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChkZXB0QWNpb25zLmRlcHRMaXN0KCkpLFxyXG4gICAgZW1wbG95ZWVMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGVtcGxveWVlQWNpb25zLmVtcGxveWVlTGlzdCgpKSxcclxuXHJcbiAgICBzZW5kZXJJZEZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuc2VuZGVySWRGb2N1cygpKSxcclxuICAgIHNlbmRlcklkQ2hhbmdlZERpc3BhdGNoOiAodmFsdWUsIHZhbGlkYXRpb24pID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc2VuZGVySWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICBzZW5kZXJJZExpc3REaXNwYXRjaDogKHNlbmRlcklkKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnNlbmRlcklkTGlzdChzZW5kZXJJZCkpLFxyXG5cclxuICAgIHJlY2VpdmVySWRGb2N1c0Rpc3BhdGNoOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnJlY2VpdmVySWRGb2N1cygpKSxcclxuICAgIHJlY2VpdmVySWRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5yZWNlaXZlcklkQ2hhbmdlZCh2YWx1ZSwgdmFsaWRhdGlvbikpLFxyXG4gICAgcmVjZWl2ZXJJZExpc3REaXNwYXRjaDogKHJlY2VpdmVySWQpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMucmVjZWl2ZXJJZExpc3QocmVjZWl2ZXJJZCkpLFxyXG5cclxuICAgIGZhY3RvcnlUcmFuc2ZlckFkZHNEaXNwYXRjaDogKGZhY3RvcnlUcmFzZmVycykgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hZGRzKGZhY3RvcnlUcmFzZmVycykpLFxyXG5cclxuICAgIG9uTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKHdpdGhFcnJvckhhbmRsZXIod2l0aFN0eWxlcyhzdHlsZXMpKEZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lciksIGF4aW9zKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=