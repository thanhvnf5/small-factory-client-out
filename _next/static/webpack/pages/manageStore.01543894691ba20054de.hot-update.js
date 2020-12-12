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
            label: "T\u1EEB nh\xE2n vi\xEAn",
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
            label: "\u0110\u1EBFn nh\xE2n vi\xEAn",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyL0ZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImhlaWdodCIsImdyaWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJyZWFrcG9pbnRzIiwidXAiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJib3hTaXppbmciLCJsaXN0IiwiYm9yZGVyIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJGYWN0b3J5VHJhbnNmZXJDb250YWluZXIiLCJpc0RpYWxvZ09wZW4iLCJkaWFsb2dDb250ZW50IiwiaXNPcGVuQWxlcnQiLCJhbGVydENvbnRlbnQiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UeXBlIiwic2VuZGVySWQiLCJlbGVtZW50Q29uZmlnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25Gb2N1cyIsInNlbmRlcklkRm9jdXNIYW5kbGVyIiwidmFsaWRhdGlvbiIsInJlcXVpcmVkIiwicmVjZWl2ZXJJZCIsInJlY2VpdmVySWRGb2N1c0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzZW5kZXJJZEZvY3VzRGlzcGF0Y2giLCJyZWNlaXZlcklkRm9jdXNEaXNwYXRjaCIsImlkIiwic2VuZGVySWRDaGFuZ2VkRGlzcGF0Y2giLCJyZWNlaXZlcklkQ2hhbmdlZERpc3BhdGNoIiwibGVmdCIsInJpZ2h0IiwibGVmdE5ld0l0ZW1zIiwiZmFjdG9yeVRyYW5zZmVyIiwicmVjZWl2ZXJJZExpc3QiLCJmaWx0ZXIiLCJpdGVtYSIsIml0ZW1iIiwia2V5IiwibGVuZ3RoIiwicmlnaHROZXdJdGVtcyIsInNlbmRlcklkTGlzdCIsImZhY3RvcnlUcmFuc2ZlcnMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJ2YWx1ZSIsImNvZGUiLCJmYWN0b3J5VHJhbnNmZXJBZGRzRGlzcGF0Y2giLCJzZXRTdGF0ZSIsInBhcmFtcyIsImdyb3VwIiwiZGVwdExpc3QiLCJkZXB0cyIsImZpbmQiLCJkZXB0IiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiIsIm9wdGlvbiIsIm9wdGlvbklkIiwidmFsdWVJZCIsImlzT0siLCJleHBvcnRUb0ZhY3RvcnlEZWxldGVEaXNwYXRjaCIsInN0YXRlIiwidmVyc2lvbiIsImRlcHRMaXN0RGlzcGF0Y2giLCJlbXBsb3llZUxpc3REaXNwYXRjaCIsImVycm9yIiwiZGVwdEVycm9yIiwiZW1wbG95ZWVFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwib25Mb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NlcyIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsIm1lc3NhZ2UiLCJoYW5kbGVDbG9zZUFsZXJ0IiwiZGlhbG9nQ2xvc2UiLCJQYXBlckNvbXBvbmVudCIsImN1cnNvciIsIndhaXRpbmciLCJlbXBsb3llZUxpc3QiLCJlbXBsb3llZXMiLCJzZW5kZXJJZENoYW5nZWRIYW5kZXIiLCJkZXB0SWQiLCJyZW5kZXJEZXB0IiwibmFtZSIsImVtcGxveWVlIiwiZ2V0T3B0aW9uU2VsZWN0ZWQiLCJpbnB1dFByb3BzIiwibWluV2lkdGgiLCJ2YWxpZCIsInRvdWNoZWQiLCJyZWNlaXZlcklkQ2hhbmdlZEhhbmRlciIsIm1hcCIsInRyYW5zZmVyTGlzdFNhdmVIYW5kbGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZXhwb3J0VG9GYWN0b3J5IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJkZXB0QWNpb25zIiwiZW1wbG95ZWVBY2lvbnMiLCJhY3Rpb25zIiwic2VuZGVySWRMaXN0RGlzcGF0Y2giLCJyZWNlaXZlcklkTGlzdERpc3BhdGNoIiwiZmFjdG9yeVRyYXNmZXJzIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Iiwid2l0aEVycm9ySGFuZGxlciIsIndpdGhTdHlsZXMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKQyxZQUFNLEVBQUU7QUFGSixLQURtQjtBQUt6QkMsUUFBSSxFQUFFO0FBQ0pELFlBQU0sRUFBRSxNQUROO0FBRUZFLFdBQUssRUFBRSxNQUZMO0FBR0ZDLGdCQUFVLEVBQUUsWUFIVjtBQUlGQyxvQkFBYyxFQUFFO0FBSmQsT0FLRFAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUxDLEVBSzRCO0FBQzVCQyxhQUFPLEVBQUUsTUFEbUI7QUFFNUJDLGNBQVEsRUFBRSxNQUZrQjtBQUc1QkMsZUFBUyxFQUFFO0FBSGlCLEtBTDVCLENBTHFCO0FBZ0J6QkMsUUFBSSxFQUFFO0FBQ0pWLFlBQU0sRUFBRSxNQUROO0FBRUZXLFlBQU0sRUFBRTtBQUZOLE9BR0RkLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FIQyxFQUc0QjtBQUM1Qk4sWUFBTSxFQUFFO0FBRG9CLEtBSDVCLENBaEJxQjtBQXVCekJZLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVoQixLQUFLLENBQUNpQixPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLFdBQUssRUFBRW5CLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFIckI7QUF2QmtCLEdBQVo7QUFBQSxDQUFmO0FBOEJBOzs7SUFFTUMsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsa0JBQVksRUFBRSxLQURSO0FBRU5DLG1CQUFhLEVBQUUsSUFGVDtBQUdOQyxpQkFBVyxFQUFFLEtBSFA7QUFJTkMsa0JBQVksRUFBRSxJQUpSO0FBS05DLGtCQUFZLEVBQUUsSUFMUjtBQU1OQyxzQkFBZ0IsRUFBRSxJQU5aO0FBT05DLGNBQVEsRUFBRTtBQUNSQyxxQkFBYSxFQUFFO0FBQ2JDLGNBQUksRUFBRSxRQURPO0FBRWJDLHFCQUFXLEVBQUUsZUFGQTtBQUdiQyxpQkFBTyxFQUFFLE1BQUtDO0FBSEQsU0FEUDtBQU1SQyxrQkFBVSxFQUFFO0FBQ1ZDLGtCQUFRLEVBQUU7QUFEQTtBQU5KLE9BUEo7QUFpQk5DLGdCQUFVLEVBQUU7QUFDVlAscUJBQWEsRUFBRTtBQUNiQyxjQUFJLEVBQUUsUUFETztBQUViQyxxQkFBVyxFQUFFLGVBRkE7QUFHYkMsaUJBQU8sRUFBRSxNQUFLSztBQUhELFNBREw7QUFNVkgsa0JBQVUsRUFBRTtBQUNWQyxrQkFBUSxFQUFFO0FBREE7QUFORjtBQWpCTixLOzsrTkF5RGUsVUFBQ0csS0FBRCxFQUFXO0FBQ2hDQSxXQUFLLENBQUNDLGNBQU47O0FBQ0EsWUFBS0MsS0FBTCxDQUFXQyxxQkFBWDtBQUNELEs7O2lPQUV3QixVQUFDSCxLQUFELEVBQVc7QUFDbENBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFLQyxLQUFMLENBQVdFLHVCQUFYO0FBQ0QsSzs7Z09BRXVCLFVBQUNKLEtBQUQsRUFBUVosWUFBUixFQUFzQlEsVUFBdEIsRUFBcUM7QUFDM0RJLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQUlYLFFBQVEsR0FBRyxJQUFmOztBQUNBLFVBQUlGLFlBQUosRUFBa0I7QUFDaEJFLGdCQUFRLEdBQUdGLFlBQVksQ0FBQ2lCLEVBQXhCO0FBQ0Q7O0FBQ0QsWUFBS0gsS0FBTCxDQUFXSSx1QkFBWCxDQUFtQ2hCLFFBQW5DLEVBQTZDTSxVQUE3QztBQUNELEs7O2tPQUV5QixVQUFDSSxLQUFELEVBQVFaLFlBQVIsRUFBc0JRLFVBQXRCLEVBQXFDO0FBQzdESSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJSCxVQUFVLEdBQUcsSUFBakI7O0FBQ0EsVUFBSVYsWUFBSixFQUFrQjtBQUNoQlUsa0JBQVUsR0FBR1YsWUFBWSxDQUFDaUIsRUFBMUI7QUFDRDs7QUFDRCxZQUFLSCxLQUFMLENBQVdLLHlCQUFYLENBQXFDVCxVQUFyQyxFQUFpREYsVUFBakQ7QUFDRCxLOztrT0FFeUIsVUFBQ0ksS0FBRCxFQUFRUSxJQUFSLEVBQWNDLEtBQWQsRUFBd0I7QUFDaERULFdBQUssQ0FBQ0MsY0FBTixHQURnRCxDQUVoRDs7QUFDQSxVQUFJUyxZQUFZLEdBQUcsTUFBS1IsS0FBTCxDQUFXUyxlQUFYLENBQTJCQyxjQUEzQixDQUEwQ0MsTUFBMUMsQ0FDakIsVUFBQ0MsS0FBRDtBQUFBLGVBQVdOLElBQUksQ0FBQ0ssTUFBTCxDQUFZLFVBQUNFLEtBQUQ7QUFBQSxpQkFBV0QsS0FBSyxDQUFDVCxFQUFOLElBQVlVLEtBQUssQ0FBQ0MsR0FBN0I7QUFBQSxTQUFaLEVBQThDQyxNQUE5QyxHQUF1RCxDQUFsRTtBQUFBLE9BRGlCLENBQW5CLENBSGdELENBTWhEOzs7QUFDQSxVQUFJQyxhQUFhLEdBQUcsTUFBS2hCLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQlEsWUFBM0IsQ0FBd0NOLE1BQXhDLENBQ2xCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXTCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxVQUFDRSxLQUFEO0FBQUEsaUJBQVdELEtBQUssQ0FBQ1QsRUFBTixJQUFZVSxLQUFLLENBQUNDLEdBQTdCO0FBQUEsU0FBYixFQUErQ0MsTUFBL0MsR0FBd0QsQ0FBbkU7QUFBQSxPQURrQixDQUFwQjs7QUFHQSxVQUFJRyxnQkFBZ0IsR0FBRyxFQUF2QixDQVZnRCxDQVdoRDs7QUFDQVYsa0JBQVksQ0FBQ1csT0FBYixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDN0JGLHdCQUFnQixDQUFDRyxJQUFqQixDQUFzQjtBQUNwQmpDLGtCQUFRLEVBQUVnQyxJQUFJLENBQUN4QixVQURLO0FBRXBCQSxvQkFBVSxFQUFFLE1BQUtJLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQnJCLFFBQTNCLENBQW9Da0MsS0FGNUI7QUFHcEJDLGNBQUksRUFBRUgsSUFBSSxDQUFDRztBQUhTLFNBQXRCO0FBS0QsT0FORCxFQVpnRCxDQW1CaEQ7O0FBQ0FQLG1CQUFhLENBQUNHLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCRix3QkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0I7QUFDcEJqQyxrQkFBUSxFQUFFZ0MsSUFBSSxDQUFDeEIsVUFESztBQUVwQkEsb0JBQVUsRUFBRSxNQUFLSSxLQUFMLENBQVdTLGVBQVgsQ0FBMkJiLFVBQTNCLENBQXNDMEIsS0FGOUI7QUFHcEJDLGNBQUksRUFBRUgsSUFBSSxDQUFDRztBQUhTLFNBQXRCO0FBS0QsT0FORDs7QUFPQSxVQUFJTCxnQkFBZ0IsQ0FBQ0gsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsY0FBS2YsS0FBTCxDQUFXd0IsMkJBQVgsQ0FBdUNOLGdCQUF2QztBQUNEOztBQUNELFlBQUtPLFFBQUwsQ0FBYztBQUNadkMsb0JBQVksRUFBRSxJQURGO0FBRVpDLHdCQUFnQixFQUFFLElBRk47QUFHWjtBQUNBRixvQkFBWSxFQUFFO0FBSkYsT0FBZDtBQU1ELEs7O3FOQUVZLFVBQUN5QyxNQUFEO0FBQUEsYUFBWSxDQUN2QixNQUFDLCtEQUFEO0FBQWUsV0FBRyxFQUFFQSxNQUFNLENBQUNDLEtBQTNCO0FBQWtDLGlCQUFTLEVBQUM7QUFBNUMsU0FFSSxNQUFLM0IsS0FBTCxDQUFXNEIsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEJDLElBQTFCLENBQStCLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUM1QixFQUFMLElBQVd1QixNQUFNLENBQUNDLEtBQTVCO0FBQUEsT0FBL0IsRUFDR0ssV0FIUCxDQUR1QixFQU92Qk4sTUFBTSxDQUFDTyxRQVBnQixDQUFaO0FBQUEsSzs7NE5BVU8sVUFBQ0MsTUFBRCxFQUFTWixLQUFULEVBQW1CO0FBQ3JDOzs7QUFHQSxVQUFJLENBQUNZLE1BQUQsSUFBVyxDQUFDWixLQUFoQixFQUF1QjtBQUNyQixlQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFJYSxRQUFRLEdBQUdELE1BQU0sQ0FBQy9CLEVBQXRCOztBQUNBLFVBQUksQ0FBQ2dDLFFBQUwsRUFBZTtBQUNiQSxnQkFBUSxHQUFHRCxNQUFYO0FBQ0Q7O0FBQ0QsVUFBSUUsT0FBTyxHQUFHZCxLQUFLLENBQUNuQixFQUFwQjs7QUFDQSxVQUFJLENBQUNpQyxPQUFMLEVBQWM7QUFDWkEsZUFBTyxHQUFHZCxLQUFWO0FBQ0Q7O0FBQ0QsYUFBT2EsUUFBUSxLQUFLQyxPQUFwQjtBQUNELEs7O3NOQUVhLFVBQUN0QyxLQUFELEVBQVF1QyxJQUFSLEVBQWlCO0FBQzdCdkMsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUlzQyxJQUFKLEVBQVU7QUFDUixjQUFLckMsS0FBTCxDQUFXc0MsNkJBQVgsQ0FDRSxNQUFLQyxLQUFMLENBQVdyRCxZQUFYLENBQXdCaUIsRUFEMUIsRUFFRSxNQUFLb0MsS0FBTCxDQUFXckQsWUFBWCxDQUF3QnNELE9BRjFCOztBQUlBLGNBQUtmLFFBQUwsQ0FBYztBQUNaM0Msc0JBQVksRUFBRSxLQURGO0FBRVpJLHNCQUFZLEVBQUUsSUFGRjtBQUdaQywwQkFBZ0IsRUFBRTtBQUhOLFNBQWQ7QUFLRCxPQVZELE1BVU87QUFDTCxjQUFLc0MsUUFBTCxDQUFjO0FBQUUzQyxzQkFBWSxFQUFFO0FBQWhCLFNBQWQ7QUFDRDtBQUNGLEs7O3lOQUVnQixVQUFDa0IsS0FBRCxFQUFXO0FBQzFCLGFBQ0UsTUFBQyx1REFBRDtBQUNFLGNBQU0sRUFBQyx5QkFEVDtBQUVFLGNBQU0sRUFBRTtBQUZWLFNBSUUsTUFBQyxnRUFBRCxFQUFXQSxLQUFYLENBSkYsQ0FERjtBQVFELEs7OzJOQUVrQixZQUFNO0FBQ3ZCLFlBQUt5QixRQUFMLENBQWM7QUFBRXpDLG1CQUFXLEVBQUU7QUFBZixPQUFkO0FBQ0QsSzs7Ozs7Ozs7QUF4SkQ7d0NBQ29CO0FBQ2xCLFdBQUtnQixLQUFMLENBQVd5QyxnQkFBWDtBQUNBLFdBQUt6QyxLQUFMLENBQVcwQyxvQkFBWDtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQUksS0FBSzFDLEtBQUwsQ0FBVzJDLEtBQVgsSUFBb0IsS0FBSzNDLEtBQUwsQ0FBVzRDLFNBQS9CLElBQTRDLEtBQUs1QyxLQUFMLENBQVc2QyxhQUEzRCxFQUEwRTtBQUN4RSxZQUNHLEtBQUs3QyxLQUFMLENBQVcyQyxLQUFYLENBQWlCRyxRQUFqQixJQUNDLEtBQUs5QyxLQUFMLENBQVcyQyxLQUFYLENBQWlCRyxRQUFqQixDQUEwQkMsTUFBMUIsSUFBb0MsR0FEdEMsSUFFQyxLQUFLL0MsS0FBTCxDQUFXNEMsU0FBWCxDQUFxQkUsUUFBckIsSUFDQyxLQUFLOUMsS0FBTCxDQUFXNEMsU0FBWCxDQUFxQkUsUUFBckIsQ0FBOEJDLE1BQTlCLElBQXdDLEdBSDFDLElBSUMsS0FBSy9DLEtBQUwsQ0FBVzZDLGFBQVgsQ0FBeUJDLFFBQXpCLElBQ0MsS0FBSzlDLEtBQUwsQ0FBVzZDLGFBQVgsQ0FBeUJDLFFBQXpCLENBQWtDQyxNQUFsQyxJQUE0QyxHQU5oRCxFQU9FO0FBQ0E7QUFDQTtBQUNBLGVBQUsvQyxLQUFMLENBQVdnRCxRQUFYLEdBSEEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRjtBQUNGOzs7O0FBZ0lEOzZCQUVTO0FBQUE7O0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUNFLElBQUlDLElBQUosR0FBV0MsY0FBWCxLQUNFLCtDQUZKO0FBRE8sVUFLQ0MsT0FMRCxHQUthLEtBQUtyRCxLQUxsQixDQUtDcUQsT0FMRDtBQU1QLGFBQ0U7QUFBSyxpQkFBUyxFQUFFQSxPQUFPLENBQUM5RjtBQUF4QixTQUVFLE1BQUMsbUVBQUQ7QUFBTyxZQUFJLEVBQUUsS0FBS3lDLEtBQUwsQ0FBVzJDLEtBQXhCO0FBQStCLG1CQUFXLEVBQUUsS0FBS1c7QUFBakQsU0FDRyxLQUFLdEQsS0FBTCxDQUFXMkMsS0FBWCxHQUFtQixLQUFLM0MsS0FBTCxDQUFXMkMsS0FBWCxDQUFpQlksT0FBcEMsR0FBOEMsV0FEakQsQ0FGRixFQU1FLE1BQUMsMERBQUQ7QUFDRSxZQUFJLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV3ZELFdBRG5CO0FBRUUsZUFBTyxFQUFFLEtBQUt3RSxnQkFGaEI7QUFHRSx3QkFBZ0IsRUFBRTtBQUhwQixTQUtFLE1BQUMsdURBQUQ7QUFBTyxlQUFPLEVBQUUsS0FBS0EsZ0JBQXJCO0FBQXVDLGdCQUFRLEVBQUM7QUFBaEQsU0FDRyxLQUFLakIsS0FBTCxDQUFXdEQsWUFBWCxHQUEwQixjQUQ3QixDQUxGLENBTkYsRUFlRSxNQUFDLGlFQUFEO0FBQ0UsWUFBSSxFQUFFLEtBQUtzRCxLQUFMLENBQVd6RCxZQURuQjtBQUVFLGVBQU8sRUFBRSxpQkFBQ2dCLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUMyRCxXQUFMLENBQWlCM0QsS0FBakIsQ0FBWDtBQUFBLFNBRlg7QUFHRSxzQkFBYyxFQUFFLEtBQUs0RCxjQUh2QjtBQUlFLDJCQUFnQjtBQUpsQixTQU1FLE1BQUMsc0VBQUQ7QUFBYSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQXBCO0FBQXdDLFVBQUUsRUFBQztBQUEzQyw0QkFORixFQVNFLE1BQUMsd0VBQUQsUUFDRSxNQUFDLDRFQUFELFFBQW9CLEtBQUtwQixLQUFMLENBQVd4RCxhQUEvQixDQURGLENBVEYsRUFZRSxNQUFDLHdFQUFELFFBQ0UsTUFBQyxnRUFBRDtBQUNFLGlCQUFTLE1BRFg7QUFFRSxlQUFPLEVBQUUsaUJBQUNlLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUMyRCxXQUFMLENBQWlCM0QsS0FBakIsQ0FBWDtBQUFBLFNBRlg7QUFHRSxhQUFLLEVBQUM7QUFIUixvQkFERixFQVFFLE1BQUMsZ0VBQUQ7QUFDRSxlQUFPLEVBQUUsaUJBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUMyRCxXQUFMLENBQWlCM0QsS0FBakIsRUFBd0IsSUFBeEIsQ0FBWDtBQUFBLFNBRFg7QUFFRSxhQUFLLEVBQUM7QUFGUiwrQkFSRixDQVpGLENBZkYsRUEyQ0UsTUFBQyxzREFBRCxRQUNFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUU7QUFBZixTQUNFLE1BQUMsZ0VBQUQsb0NBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUU7QUFBZixTQUNFLE1BQUMsc0RBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsZUFBTyxFQUFFLENBRlg7QUFHRSxlQUFPLEVBQUMsUUFIVjtBQUlFLGtCQUFVLEVBQUMsUUFKYjtBQUtFLGlCQUFTLEVBQUV1RCxPQUFPLENBQUMzRjtBQUxyQixTQU9FLE1BQUMsc0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUU7QUFBZixTQUNHLEtBQUtzQyxLQUFMLENBQVdTLGVBQVgsQ0FBMkJtRCxPQUEzQixHQUNDLE1BQUMsdUVBQUQsT0FERCxHQUdDLE1BQUMsOERBQUQ7QUFDRSxVQUFFLEVBQUMsaUJBREw7QUFFRSxlQUFPLEVBQUUsS0FBSzVELEtBQUwsQ0FBVzZELFlBQVgsQ0FBd0JDLFNBRm5DO0FBR0UsZUFBTyxFQUFFO0FBQ1A1QixnQkFBTSxFQUFFbUIsT0FBTyxDQUFDbkI7QUFEVCxTQUhYO0FBTUUscUJBQWEsTUFOZjtBQU9FLGFBQUssRUFBRSxLQUFLbEMsS0FBTCxDQUFXUyxlQUFYLENBQTJCckIsUUFBM0IsQ0FBb0NrQyxLQVA3QztBQVFFLGdCQUFRLEVBQUUsa0JBQUN4QixLQUFELEVBQVFaLFlBQVIsRUFBeUI7QUFDakMsZ0JBQUksQ0FBQzZFLHFCQUFMLENBQ0VqRSxLQURGLEVBRUVaLFlBRkYsRUFHRSxNQUFJLENBQUNxRCxLQUFMLENBQVduRCxRQUFYLENBQW9CTSxVQUh0QjtBQUtELFNBZEg7QUFlRSxlQUFPLEVBQUUsaUJBQUN3QyxNQUFEO0FBQUEsaUJBQVlBLE1BQU0sQ0FBQzhCLE1BQW5CO0FBQUEsU0FmWDtBQWdCRSxtQkFBVyxFQUFFLEtBQUtDLFVBaEJwQjtBQWlCRSxzQkFBYyxFQUFFLHdCQUFDL0IsTUFBRCxFQUFZO0FBQzFCLGNBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDL0IsRUFBckIsRUFBeUI7QUFDdkIsbUJBQU8rQixNQUFNLENBQUNnQyxJQUFkO0FBQ0Q7O0FBQ0QsY0FBSUMsUUFBUSxHQUFHLE1BQUksQ0FBQ25FLEtBQUwsQ0FBVzZELFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDaEMsSUFBbEMsQ0FDYixVQUFDcUMsUUFBRDtBQUFBLG1CQUFjQSxRQUFRLENBQUNoRSxFQUFULElBQWUrQixNQUE3QjtBQUFBLFdBRGEsQ0FBZjs7QUFHQSxjQUFJLENBQUNpQyxRQUFMLEVBQWU7QUFDYixtQkFBTyxFQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU9BLFFBQVEsQ0FBQ0QsSUFBaEI7QUFDRDtBQUNGLFNBN0JIO0FBOEJFLHlCQUFpQixFQUFFLEtBQUtFLGlCQTlCMUI7QUErQkUsb0JBQVksRUFBRSxzQkFBQ2xDLE1BQUQ7QUFBQSxpQkFDWixNQUFDLDZDQUFELENBQU8sUUFBUCxRQUFpQkEsTUFBTSxDQUFDRixXQUF4QixDQURZO0FBQUEsU0EvQmhCO0FBa0NFLG1CQUFXLEVBQUUscUJBQUNOLE1BQUQ7QUFBQSxpQkFDWCxNQUFDLDJEQUFELHlGQUNNQSxNQUROO0FBRUUsc0JBQVUsa0NBQ0xBLE1BQU0sQ0FBQzJDLFVBREY7QUFFUjtBQUNBSCxrQkFBSSxFQUFFLGlCQUhFO0FBSVIvRCxnQkFBRSxFQUFFO0FBSkksY0FGWjtBQVFFLGlCQUFLLEVBQUU7QUFBRW1FLHNCQUFRLEVBQUU7QUFBWixhQVJUO0FBU0Usb0JBQVEsTUFUVjtBQVVFLGlCQUFLLEVBQUMseUJBVlI7QUFXRSxrQkFBTSxFQUFDLFFBWFQ7QUFZRSxpQkFBSyxFQUNILENBQUMsTUFBSSxDQUFDdEUsS0FBTCxDQUFXUyxlQUFYLENBQTJCckIsUUFBM0IsQ0FBb0NtRixLQUFyQyxHQUNBLE1BQUksQ0FBQ3ZFLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQnJCLFFBQTNCLENBQW9Db0YsT0FEcEMsR0FFSSxJQUZKLEdBR0k7QUFoQlIsYUFrQk0sTUFBSSxDQUFDakMsS0FBTCxDQUFXbkQsUUFBWCxDQUFvQkMsYUFsQjFCLEVBRFc7QUFBQTtBQWxDZixRQUpKLENBUEYsRUFzRUUsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRTtBQUFmLFNBQ0csS0FBS1csS0FBTCxDQUFXUyxlQUFYLENBQTJCbUQsT0FBM0IsR0FDQyxNQUFDLHVFQUFELE9BREQsR0FHQyxNQUFDLDhEQUFEO0FBQ0UsVUFBRSxFQUFDLG1CQURMO0FBRUUsZUFBTyxFQUFFLEtBQUs1RCxLQUFMLENBQVc2RCxZQUFYLENBQXdCQyxTQUZuQztBQUdFLGVBQU8sRUFBRTtBQUNQNUIsZ0JBQU0sRUFBRW1CLE9BQU8sQ0FBQ25CO0FBRFQsU0FIWDtBQU1FLHFCQUFhLE1BTmY7QUFPRSxhQUFLLEVBQUUsS0FBS2xDLEtBQUwsQ0FBV1MsZUFBWCxDQUEyQmIsVUFBM0IsQ0FBc0MwQixLQVAvQztBQVFFLGdCQUFRLEVBQUUsa0JBQUN4QixLQUFELEVBQVFaLFlBQVIsRUFBeUI7QUFDakMsZ0JBQUksQ0FBQ3VGLHVCQUFMLENBQ0UzRSxLQURGLEVBRUVaLFlBRkYsRUFHRSxNQUFJLENBQUNxRCxLQUFMLENBQVczQyxVQUFYLENBQXNCRixVQUh4QjtBQUtELFNBZEg7QUFlRSxlQUFPLEVBQUUsaUJBQUN3QyxNQUFEO0FBQUEsaUJBQVlBLE1BQU0sQ0FBQzhCLE1BQW5CO0FBQUEsU0FmWDtBQWdCRSxtQkFBVyxFQUFFLEtBQUtDLFVBaEJwQjtBQWlCRSxzQkFBYyxFQUFFLHdCQUFDL0IsTUFBRCxFQUFZO0FBQzFCLGNBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDL0IsRUFBckIsRUFBeUI7QUFDdkIsbUJBQU8rQixNQUFNLENBQUNnQyxJQUFkO0FBQ0Q7O0FBQ0QsY0FBSUMsUUFBUSxHQUFHLE1BQUksQ0FBQ25FLEtBQUwsQ0FBVzZELFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDaEMsSUFBbEMsQ0FDYixVQUFDcUMsUUFBRDtBQUFBLG1CQUFjQSxRQUFRLENBQUNoRSxFQUFULElBQWUrQixNQUE3QjtBQUFBLFdBRGEsQ0FBZjs7QUFHQSxjQUFJLENBQUNpQyxRQUFMLEVBQWU7QUFDYixtQkFBTyxFQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU9BLFFBQVEsQ0FBQ0QsSUFBaEI7QUFDRDtBQUNGLFNBN0JIO0FBOEJFLHlCQUFpQixFQUFFLEtBQUtFLGlCQTlCMUI7QUErQkUsb0JBQVksRUFBRSxzQkFBQ2xDLE1BQUQ7QUFBQSxpQkFDWixNQUFDLDZDQUFELENBQU8sUUFBUCxRQUFpQkEsTUFBTSxDQUFDRixXQUF4QixDQURZO0FBQUEsU0EvQmhCO0FBa0NFLG1CQUFXLEVBQUUscUJBQUNOLE1BQUQ7QUFBQSxpQkFDWCxNQUFDLDJEQUFELHlGQUNNQSxNQUROO0FBRUUsc0JBQVUsa0NBQ0xBLE1BQU0sQ0FBQzJDLFVBREY7QUFFUjtBQUNBSCxrQkFBSSxFQUFFLG1CQUhFO0FBSVIvRCxnQkFBRSxFQUFFO0FBSkksY0FGWjtBQVFFLGlCQUFLLEVBQUU7QUFBRW1FLHNCQUFRLEVBQUU7QUFBWixhQVJUO0FBU0Usb0JBQVEsTUFUVjtBQVVFLGlCQUFLLEVBQUMsK0JBVlI7QUFXRSxrQkFBTSxFQUFDLFFBWFQ7QUFZRSxpQkFBSyxFQUNILENBQUMsTUFBSSxDQUFDdEUsS0FBTCxDQUFXUyxlQUFYLENBQTJCYixVQUEzQixDQUFzQzJFLEtBQXZDLEdBQ0EsTUFBSSxDQUFDdkUsS0FBTCxDQUFXUyxlQUFYLENBQTJCYixVQUEzQixDQUFzQzRFLE9BRHRDLEdBRUksSUFGSixHQUdJO0FBaEJSLGFBa0JNLE1BQUksQ0FBQ2pDLEtBQUwsQ0FBVzNDLFVBQVgsQ0FBc0JQLGFBbEI1QixFQURXO0FBQUE7QUFsQ2YsUUFKSixDQXRFRixDQURGLENBSkYsRUE0SUUsTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLGlCQUFTLEVBQUVnRSxPQUFPLENBQUNsRjtBQUF0QyxTQUNHLEtBQUs2QixLQUFMLENBQVdTLGVBQVgsQ0FBMkJtRCxPQUEzQixHQUNDLE1BQUMsdUVBQUQsT0FERCxHQUdDLE1BQUMseUVBQUQ7QUFDRSxZQUFJLEVBQUUsS0FBSzVELEtBQUwsQ0FBV1MsZUFBWCxDQUEyQlEsWUFBM0IsQ0FBd0N5RCxHQUF4QyxDQUE0QyxVQUFDdEQsSUFBRCxFQUFVO0FBQzFELGlCQUFPO0FBQUVOLGVBQUcsRUFBRU0sSUFBSSxDQUFDakIsRUFBWjtBQUFnQm1CLGlCQUFLLEVBQUVGLElBQUksQ0FBQ0c7QUFBNUIsV0FBUDtBQUNELFNBRkssQ0FEUjtBQUlFLGFBQUssRUFBRSxLQUFLdkIsS0FBTCxDQUFXUyxlQUFYLENBQTJCQyxjQUEzQixDQUEwQ2dFLEdBQTFDLENBQThDLFVBQUN0RCxJQUFELEVBQVU7QUFDN0QsaUJBQU87QUFBRU4sZUFBRyxFQUFFTSxJQUFJLENBQUNqQixFQUFaO0FBQWdCbUIsaUJBQUssRUFBRUYsSUFBSSxDQUFDRztBQUE1QixXQUFQO0FBQ0QsU0FGTSxDQUpUO0FBT0UsK0JBQXVCLEVBQUUsaUNBQUN6QixLQUFELEVBQVFRLElBQVIsRUFBY0MsS0FBZDtBQUFBLGlCQUN2QixNQUFJLENBQUNvRSx1QkFBTCxDQUE2QjdFLEtBQTdCLEVBQW9DUSxJQUFwQyxFQUEwQ0MsS0FBMUMsQ0FEdUI7QUFBQTtBQVAzQixRQUpKLENBNUlGLENBM0NGLENBREY7QUE0TUQ7Ozs7RUE1WW9DcUUsZ0Q7QUErWXZDOzs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN0QyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMOUIsbUJBQWUsRUFBRThCLEtBQUssQ0FBQzlCLGVBRGxCO0FBRUxtQixZQUFRLEVBQUVXLEtBQUssQ0FBQ1IsSUFBTixDQUFXSCxRQUZoQjtBQUdMaUMsZ0JBQVksRUFBRXRCLEtBQUssQ0FBQzRCLFFBQU4sQ0FBZU4sWUFIeEI7QUFJTGxCLFNBQUssRUFBRUosS0FBSyxDQUFDdUMsZUFBTixDQUFzQm5DLEtBSnhCO0FBS0xDLGFBQVMsRUFBRUwsS0FBSyxDQUFDUixJQUFOLENBQVdZLEtBTGpCO0FBTUxFLGlCQUFhLEVBQUVOLEtBQUssQ0FBQzRCLFFBQU4sQ0FBZXhCO0FBTnpCLEdBQVA7QUFRRCxDQVREOztBQVdBLElBQU1vQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0x2QyxvQkFBZ0IsRUFBRTtBQUFBLGFBQU11QyxRQUFRLENBQUNDLG1FQUFBLEVBQUQsQ0FBZDtBQUFBLEtBRGI7QUFFTHZDLHdCQUFvQixFQUFFO0FBQUEsYUFBTXNDLFFBQVEsQ0FBQ0UsMkVBQUEsRUFBRCxDQUFkO0FBQUEsS0FGakI7QUFJTGpGLHlCQUFxQixFQUFFO0FBQUEsYUFBTStFLFFBQVEsQ0FBQ0csbUZBQUEsRUFBRCxDQUFkO0FBQUEsS0FKbEI7QUFLTC9FLDJCQUF1QixFQUFFLGlDQUFDa0IsS0FBRCxFQUFRNUIsVUFBUjtBQUFBLGFBQ3ZCc0YsUUFBUSxDQUFDRyxxRkFBQSxDQUF3QjdELEtBQXhCLEVBQStCNUIsVUFBL0IsQ0FBRCxDQURlO0FBQUEsS0FMcEI7QUFPTDBGLHdCQUFvQixFQUFFLDhCQUFDaEcsUUFBRDtBQUFBLGFBQ3BCNEYsUUFBUSxDQUFDRyxrRkFBQSxDQUFxQi9GLFFBQXJCLENBQUQsQ0FEWTtBQUFBLEtBUGpCO0FBVUxjLDJCQUF1QixFQUFFO0FBQUEsYUFBTThFLFFBQVEsQ0FBQ0cscUZBQUEsRUFBRCxDQUFkO0FBQUEsS0FWcEI7QUFXTDlFLDZCQUF5QixFQUFFLG1DQUFDaUIsS0FBRCxFQUFRNUIsVUFBUjtBQUFBLGFBQ3pCc0YsUUFBUSxDQUFDRyx1RkFBQSxDQUEwQjdELEtBQTFCLEVBQWlDNUIsVUFBakMsQ0FBRCxDQURpQjtBQUFBLEtBWHRCO0FBYUwyRiwwQkFBc0IsRUFBRSxnQ0FBQ3pGLFVBQUQ7QUFBQSxhQUN0Qm9GLFFBQVEsQ0FBQ0csb0ZBQUEsQ0FBdUJ2RixVQUF2QixDQUFELENBRGM7QUFBQSxLQWJuQjtBQWdCTDRCLCtCQUEyQixFQUFFLHFDQUFDOEQsZUFBRDtBQUFBLGFBQzNCTixRQUFRLENBQUNHLDBFQUFBLENBQWFHLGVBQWIsQ0FBRCxDQURtQjtBQUFBLEtBaEJ4QjtBQW1CTHRDLFlBQVEsRUFBRTtBQUFBLGFBQU1nQyxRQUFRLENBQUNPLDJEQUFBLEVBQUQsQ0FBZDtBQUFBO0FBbkJMLEdBQVA7QUFxQkQsQ0F0QkQ7O0FBd0JlQywySEFBTyxDQUNwQlgsZUFEb0IsRUFFcEJFLGtCQUZvQixDQUFQLENBR2JVLHdGQUFnQixDQUFDQyw0RUFBVSxDQUFDckksTUFBRCxDQUFWLENBQW1Cd0Isd0JBQW5CLENBQUQsRUFBK0M4Ryx3REFBL0MsQ0FISCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hbmFnZVN0b3JlLjAxNTQzODk0NjkxYmEyMDA1NGRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBMaXN0U3ViaGVhZGVyLCBTbmFja2JhciwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBFeHBvcnRUb0ZhY3RvcnlFZGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0V4cG9ydFRvRmFjdG9yeS9FeHBvcnRUb0ZhY3RvcnlFZGl0XCI7XHJcbmltcG9ydCBFeHBvcnRUb0ZhY3RvcnlMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0V4cG9ydFRvRmFjdG9yeS9FeHBvcnRUb0ZhY3RvcnlMaXN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXJcIjtcclxuaW1wb3J0IHdpdGhFcnJvckhhbmRsZXIgZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEVycm9ySGFuZGxlci93aXRoRXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9mYWN0b3J5VHJhbnNmZXJBY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgZGVwdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9kZXB0QWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGVtcGxveWVlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2VtcGxveWVlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RUeXBlQWNpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RUeXBlQWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RBY2lvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBnb2xkVHlwZUFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9nb2xkVHlwZUFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBnb2xkVW5pdEFjaW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9nb2xkVW5pdEFjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBhdXRoQWN0aW9ucyBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBUcmFuc2Zlckxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTGlzdC9UcmFuc2Zlckxpc3RcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuXHJcbi8vaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSAnYXNzZXJ0JztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGhlaWdodDogXCI1MHZoXCIsXHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWRkZGRcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuXHJcbmNsYXNzIEZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxyXG4gICAgZGlhbG9nQ29udGVudDogbnVsbCxcclxuICAgIGlzT3BlbkFsZXJ0OiBmYWxzZSxcclxuICAgIGFsZXJ0Q29udGVudDogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcclxuICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICBzZW5kZXJJZDoge1xyXG4gICAgICBlbGVtZW50Q29uZmlnOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJDaOG7jW4gc+G6o24gcGjhuqltXCIsXHJcbiAgICAgICAgb25Gb2N1czogdGhpcy5zZW5kZXJJZEZvY3VzSGFuZGxlcixcclxuICAgICAgfSxcclxuICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHJlY2VpdmVySWQ6IHtcclxuICAgICAgZWxlbWVudENvbmZpZzoge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2jhu41uIHPhuqNuIHBo4bqpbVwiLFxyXG4gICAgICAgIG9uRm9jdXM6IHRoaXMucmVjZWl2ZXJJZEZvY3VzSGFuZGxlcixcclxuICAgICAgfSxcclxuICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogbWV0aG9kcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5kZXB0TGlzdERpc3BhdGNoKCk7XHJcbiAgICB0aGlzLnByb3BzLmVtcGxveWVlTGlzdERpc3BhdGNoKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvciB8fCB0aGlzLnByb3BzLmRlcHRFcnJvciB8fCB0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHx8XHJcbiAgICAgICAgKHRoaXMucHJvcHMuZGVwdEVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmRlcHRFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB8fFxyXG4gICAgICAgICh0aGlzLnByb3BzLmVtcGxveWVlRXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuZW1wbG95ZWVFcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKVxyXG4gICAgICApIHtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmV4cG9ydFRvRmFjdG9yeUVycm9ySGFuZGxlZERpc3BhdGNoKCk7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQgaW4gQnVnZ3kgY29tcG9uZW50IVwiKTtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTG9nb3V0KCk7XHJcbiAgICAgICAgLy8gUm91dGVyLnB1c2goXCIvc2lnaW5cIik7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICBpc0RpYWxvZ09wZW46IHRydWUsXHJcbiAgICAgICAgLy8gICBkaWFsb2dDb250ZW50OiBcIkzhu5dpIMSRxINuZyBuaOG6rXAhXCIsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRlcklkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5zZW5kZXJJZEZvY3VzRGlzcGF0Y2goKTtcclxuICB9O1xyXG5cclxuICByZWNlaXZlcklkRm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5yZWNlaXZlcklkRm9jdXNEaXNwYXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHNlbmRlcklkQ2hhbmdlZEhhbmRlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHNlbmRlcklkID0gbnVsbDtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgc2VuZGVySWQgPSBzZWxlY3RlZEl0ZW0uaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLnNlbmRlcklkQ2hhbmdlZERpc3BhdGNoKHNlbmRlcklkLCB2YWxpZGF0aW9uKTtcclxuICB9O1xyXG5cclxuICByZWNlaXZlcklkQ2hhbmdlZEhhbmRlciA9IChldmVudCwgc2VsZWN0ZWRJdGVtLCB2YWxpZGF0aW9uKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHJlY2VpdmVySWQgPSBudWxsO1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICByZWNlaXZlcklkID0gc2VsZWN0ZWRJdGVtLmlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5yZWNlaXZlcklkQ2hhbmdlZERpc3BhdGNoKHJlY2VpdmVySWQsIHZhbGlkYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHRyYW5zZmVyTGlzdFNhdmVIYW5kbGVyID0gKGV2ZW50LCBsZWZ0LCByaWdodCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIEdldCBuZXcgaXRlbXMgaW4gdGhlIGxlZnQgbGlzdC5cclxuICAgIGxldCBsZWZ0TmV3SXRlbXMgPSB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5yZWNlaXZlcklkTGlzdC5maWx0ZXIoXHJcbiAgICAgIChpdGVtYSkgPT4gbGVmdC5maWx0ZXIoKGl0ZW1iKSA9PiBpdGVtYS5pZCA9PSBpdGVtYi5rZXkpLmxlbmd0aCA+IDBcclxuICAgICk7XHJcbiAgICAvLyBHZXQgbmV3IGl0ZW1zIGluIHRoZSByaWdodCBsaXN0LlxyXG4gICAgbGV0IHJpZ2h0TmV3SXRlbXMgPSB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZExpc3QuZmlsdGVyKFxyXG4gICAgICAoaXRlbWEpID0+IHJpZ2h0LmZpbHRlcigoaXRlbWIpID0+IGl0ZW1hLmlkID09IGl0ZW1iLmtleSkubGVuZ3RoID4gMFxyXG4gICAgKTtcclxuICAgIGxldCBmYWN0b3J5VHJhbnNmZXJzID0gW107XHJcbiAgICAvLyBQdXNoIG5ldyBpdGVtcyBpbiB0aGUgbGVmdCBsaXN0LlxyXG4gICAgbGVmdE5ld0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgZmFjdG9yeVRyYW5zZmVycy5wdXNoKHtcclxuICAgICAgICBzZW5kZXJJZDogaXRlbS5yZWNlaXZlcklkLFxyXG4gICAgICAgIHJlY2VpdmVySWQ6IHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnNlbmRlcklkLnZhbHVlLFxyXG4gICAgICAgIGNvZGU6IGl0ZW0uY29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIFB1c2ggbmV3IGl0ZW1zIGluIHRoZSByaWdodCBsaXN0LlxyXG4gICAgcmlnaHROZXdJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGZhY3RvcnlUcmFuc2ZlcnMucHVzaCh7XHJcbiAgICAgICAgc2VuZGVySWQ6IGl0ZW0ucmVjZWl2ZXJJZCxcclxuICAgICAgICByZWNlaXZlcklkOiB0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5yZWNlaXZlcklkLnZhbHVlLFxyXG4gICAgICAgIGNvZGU6IGl0ZW0uY29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChmYWN0b3J5VHJhbnNmZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXJBZGRzRGlzcGF0Y2goZmFjdG9yeVRyYW5zZmVycyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZEl0ZW1UeXBlOiBudWxsLFxyXG4gICAgICAvLyBpc09wZW5BbGVydDogdHJ1ZSxcclxuICAgICAgYWxlcnRDb250ZW50OiBcIkzGsHVcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlckRlcHQgPSAocGFyYW1zKSA9PiBbXHJcbiAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3BhcmFtcy5ncm91cH0gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlcHRMaXN0LmRlcHRzLmZpbmQoKGRlcHQpID0+IGRlcHQuaWQgPT0gcGFyYW1zLmdyb3VwKVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgIDwvTGlzdFN1YmhlYWRlcj4sXHJcbiAgICBwYXJhbXMuY2hpbGRyZW4sXHJcbiAgXTtcclxuXHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQgPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xyXG4gICAgLyogaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICB9ICovXHJcbiAgICBpZiAoIW9wdGlvbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgaWYgKCFvcHRpb25JZCkge1xyXG4gICAgICBvcHRpb25JZCA9IG9wdGlvbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUlkID0gdmFsdWUuaWQ7XHJcbiAgICBpZiAoIXZhbHVlSWQpIHtcclxuICAgICAgdmFsdWVJZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbklkID09PSB2YWx1ZUlkO1xyXG4gIH07XHJcblxyXG4gIGRpYWxvZ0Nsb3NlID0gKGV2ZW50LCBpc09LKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzT0spIHtcclxuICAgICAgdGhpcy5wcm9wcy5leHBvcnRUb0ZhY3RvcnlEZWxldGVEaXNwYXRjaChcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5pZCxcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS52ZXJzaW9uXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUGFwZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICBoYW5kbGU9XCIjZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgY2FuY2VsPXsnW2NsYXNzKj1cIk11aURpYWxvZ0NvbnRlbnQtcm9vdFwiXSd9XHJcbiAgICAgID5cclxuICAgICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYWdnYWJsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VBbGVydCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5BbGVydDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICtcclxuICAgICAgICBcIiAuLi4uLi4uLi4uLi4gRXhwb3J0VG9GYWN0b3J5Q29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgey8qIEVycm9yIFBvcHVwICovfVxyXG4gICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnByb3BzLmVycm9yfSBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuZXJyb3IgPyB0aGlzLnByb3BzLmVycm9yLm1lc3NhZ2UgOiBcIjw8RXJyb3I+PlwifVxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgey8qIEluZm8gQWxlcnQgKi99XHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzT3BlbkFsZXJ0fVxyXG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZUFsZXJ0fVxyXG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWxlcnQgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZUFsZXJ0fSBzZXZlcml0eT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxlcnRDb250ZW50ICsgXCIgdGjDoG5oIGPDtG5nLlwifVxyXG4gICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuaXNEaWFsb2dPcGVufVxyXG4gICAgICAgICAgb25DbG9zZT17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50KX1cclxuICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXt0aGlzLlBhcGVyQ29tcG9uZW50fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJhZ2dhYmxlLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpYWxvZ1RpdGxlIHN0eWxlPXt7IGN1cnNvcjogXCJtb3ZlXCIgfX0gaWQ9XCJkcmFnZ2FibGUtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIEPhuqNuaCBiw6FvXHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD57dGhpcy5zdGF0ZS5kaWFsb2dDb250ZW50fTwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kaWFsb2dDbG9zZShldmVudCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEjhu6d5XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKGV2ZW50LCB0cnVlKX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgxJDhu5NuZyDDvVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFBhcGVyPkNodXnhu4NuIMSR4buVaTwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZW5kZXJJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBzZWxlY3RlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZGVySWRDaGFuZ2VkSGFuZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRlcklkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24uZGVwdElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdyb3VwPXt0aGlzLnJlbmRlckRlcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXt0aGlzLmdldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlbmRlcklkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNlbmRlcklkLW9wdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVOG7qyBuaMOibiB2acOqblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIuc2VuZGVySWQudmFsaWQgJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLnNlbmRlcklkLnRvdWNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLnNlbmRlcklkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci53YWl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVjZWl2ZXJJZC1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0hpZ2hsaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5yZWNlaXZlcklkLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlcklkQ2hhbmdlZEhhbmRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWNlaXZlcklkLnZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBncm91cEJ5PXsob3B0aW9uKSA9PiBvcHRpb24uZGVwdElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdyb3VwPXt0aGlzLnJlbmRlckRlcHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IHRoaXMucHJvcHMuZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICghZW1wbG95ZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvblNlbGVjdGVkPXt0aGlzLmdldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PntvcHRpb24uZGVzY3JpcHRpb259PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuaW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU6ICduZXctcGFzc3dvcmQnLCAvLyBkaXNhYmxlIGF1dG9jb21wbGV0ZSBhbmQgYXV0b2ZpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlY2VpdmVySWQtb3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVjZWl2ZXJJZC1vcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIsSQ4bq/biBuaMOibiB2acOqblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC52YWxpZCAmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5yZWNlaXZlcklkLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZmFjdG9yeVRyYW5zZmVyLndhaXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VHJhbnNmZXJMaXN0XHJcbiAgICAgICAgICAgICAgICBsZWZ0PXt0aGlzLnByb3BzLmZhY3RvcnlUcmFuc2Zlci5zZW5kZXJJZExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IGtleTogaXRlbS5pZCwgdmFsdWU6IGl0ZW0uY29kZSB9O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICByaWdodD17dGhpcy5wcm9wcy5mYWN0b3J5VHJhbnNmZXIucmVjZWl2ZXJJZExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IGtleTogaXRlbS5pZCwgdmFsdWU6IGl0ZW0uY29kZSB9O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zlckxpc3RTYXZlSGFuZGxlcj17KGV2ZW50LCBsZWZ0LCByaWdodCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zlckxpc3RTYXZlSGFuZGxlcihldmVudCwgbGVmdCwgcmlnaHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdG9yZSAqL1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZhY3RvcnlUcmFuc2Zlcjogc3RhdGUuZmFjdG9yeVRyYW5zZmVyLFxyXG4gICAgZGVwdExpc3Q6IHN0YXRlLmRlcHQuZGVwdExpc3QsXHJcbiAgICBlbXBsb3llZUxpc3Q6IHN0YXRlLmVtcGxveWVlLmVtcGxveWVlTGlzdCxcclxuICAgIGVycm9yOiBzdGF0ZS5leHBvcnRUb0ZhY3RvcnkuZXJyb3IsXHJcbiAgICBkZXB0RXJyb3I6IHN0YXRlLmRlcHQuZXJyb3IsXHJcbiAgICBlbXBsb3llZUVycm9yOiBzdGF0ZS5lbXBsb3llZS5lcnJvcixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlcHRMaXN0RGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGRlcHRBY2lvbnMuZGVwdExpc3QoKSksXHJcbiAgICBlbXBsb3llZUxpc3REaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goZW1wbG95ZWVBY2lvbnMuZW1wbG95ZWVMaXN0KCkpLFxyXG5cclxuICAgIHNlbmRlcklkRm9jdXNEaXNwYXRjaDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5zZW5kZXJJZEZvY3VzKCkpLFxyXG4gICAgc2VuZGVySWRDaGFuZ2VkRGlzcGF0Y2g6ICh2YWx1ZSwgdmFsaWRhdGlvbikgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5zZW5kZXJJZENoYW5nZWQodmFsdWUsIHZhbGlkYXRpb24pKSxcclxuICAgIHNlbmRlcklkTGlzdERpc3BhdGNoOiAoc2VuZGVySWQpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc2VuZGVySWRMaXN0KHNlbmRlcklkKSksXHJcblxyXG4gICAgcmVjZWl2ZXJJZEZvY3VzRGlzcGF0Y2g6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucmVjZWl2ZXJJZEZvY3VzKCkpLFxyXG4gICAgcmVjZWl2ZXJJZENoYW5nZWREaXNwYXRjaDogKHZhbHVlLCB2YWxpZGF0aW9uKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnJlY2VpdmVySWRDaGFuZ2VkKHZhbHVlLCB2YWxpZGF0aW9uKSksXHJcbiAgICByZWNlaXZlcklkTGlzdERpc3BhdGNoOiAocmVjZWl2ZXJJZCkgPT5cclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5yZWNlaXZlcklkTGlzdChyZWNlaXZlcklkKSksXHJcblxyXG4gICAgZmFjdG9yeVRyYW5zZmVyQWRkc0Rpc3BhdGNoOiAoZmFjdG9yeVRyYXNmZXJzKSA9PlxyXG4gICAgICBkaXNwYXRjaChhY3Rpb25zLmFkZHMoZmFjdG9yeVRyYXNmZXJzKSksXHJcblxyXG4gICAgb25Mb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEVycm9ySGFuZGxlcih3aXRoU3R5bGVzKHN0eWxlcykoRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyKSwgYXhpb3MpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==