webpackHotUpdate_N_E("pages/manageStore",{

/***/ "./src/components/ExportToFactory/ExportToFactoryList.js":
/*!***************************************************************!*\
  !*** ./src/components/ExportToFactory/ExportToFactoryList.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types */













var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__["default"]
};
/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.paper
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    rowOdd: {
      backgroundColor: "#f1f1f1"
    },
    rowEven: {
      backgroundColor: "#f8f8f0"
    }
  };
});

function renderRow(props) {
  var index = props.index,
      style = props.style,
      data = props.data;

  var getEmployeeNameById = function getEmployeeNameById(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      return employee.name;
    }

    return "";
  };

  var getEmployeeNameById111 = function getEmployeeNameById111(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      var dept = deptList.depts.find(function (dept) {
        return dept.id === employee.deptId;
      });

      if (dept) {
        return dept.name + " - " + employee.name;
      }
    }

    return "";
  };

  var getProductNameById = function getProductNameById(productTypeList, productList, id) {
    var product = productList.products.find(function (product) {
      return product.id === id;
    });

    if (product) {
      var productType = productTypeList.productTypes.find(function (productType) {
        return productType.id === product.productTypeId;
      });

      if (productType) {
        return productType.name + " - " + product.name;
      }
    }

    return "";
  };

  var getGoldTypeNameById = function getGoldTypeNameById(goldTypeList, id) {
    var goldType = goldTypeList.goldTypes.find(function (goldType) {
      return goldType.id === id;
    });

    if (goldType) {
      return goldType.name;
    }

    return "";
  };

  var getGoldUnitNameById = function getGoldUnitNameById(goldUnitList, id) {
    var goldUnit = goldUnitList.goldUnits.find(function (goldUnit) {
      return goldUnit.id === id;
    });

    if (goldUnit) {
      return goldUnit.name;
    }

    return "";
  };

  var formatExportToFactoryDate = function formatExportToFactoryDate(exportToFactoryDate) {
    if (!exportToFactoryDate) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(exportToFactoryDate), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.exportToFactorys[index].code
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: getEmployeeNameById(data.deptList, data.employeeList, data.exportToFactorys[index].exportToFactoryrId)
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.exportToFactorys[index].weightLyTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.exportToFactorys[index].quantityTotal
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: formatExportToFactoryDate(data.exportToFactorys[index].exportToFactoryDate)
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.exportToFactorys[index].note
  }));
}

renderRow.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/************************************************** Constructor */

var ExportToFactoryList = function ExportToFactoryList(props) {
  _s();

  var PADDING_SIZE = 10;
  var ITEM_SIZE = 20;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];
  /* Detect mobile view */


  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  /* const handleOnWheel = ({ deltaY }) => {
    // Your handler goes here ...
    console.log(
      new Date().toLocaleString() + " ............ handleOnWheel()",
      deltaY
    );
  };
    // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/display-name
  const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`,
        height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`,
      }}
      {...rest}
    />
  ));
    // eslint-disable-next-line react/display-name
  const outerElementType = forwardRef((props, ref) => {
    return <div ref={ref} onWheel={handleOnWheel} {...props} />;
  }); */

  var formatDate = function formatDate(date) {
    if (!date) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(date), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    props.exportToFactorys[index].exportToFactoryDate = formatDate(props.exportToFactorys[index].exportToFactoryDate);
    return props.exportToFactorys[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.exportToFactoryEdit(event, event.rowData);
  };
  /************************************************** render */


  return __jsx("div", {
    className: classes.root
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
    rowCount: props.exportToFactorys.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Mã",
      dataKey: "code"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Mô tả",
      dataKey: "description"
    }, {
      width: 90,
      label: "Trọng lượng (ly)",
      dataKey: "weightLyTotal",
      numeric: true
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantityTotal",
      numeric: true
    }, {
      width: 120,
      flexGrow: 0.5,
      label: "Ngày mua",
      dataKey: "exportToFactoryDate"
    }]
  }));
};

_s(ExportToFactoryList, "kHeIdq+y+2b0bGY4N56B+1LbC8A=", false, function () {
  return [useStyles];
});

_c = ExportToFactoryList;
/* harmony default export */ __webpack_exports__["default"] = (ExportToFactoryList);

var _c;

$RefreshReg$(_c, "ExportToFactoryList");

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

/***/ }),

/***/ "./src/components/ImportFromFactory/ImportFromFactoryList.js":
/*!*******************************************************************!*\
  !*** ./src/components/ImportFromFactory/ImportFromFactoryList.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types */













var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__["default"]
};
/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.paper
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    rowOdd: {
      backgroundColor: "#f1f1f1"
    },
    rowEven: {
      backgroundColor: "#f8f8f0"
    }
  };
});

function renderRow(props) {
  var index = props.index,
      style = props.style,
      data = props.data;

  var getEmployeeNameById = function getEmployeeNameById(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      return employee.name;
    }

    return "";
  };

  var getEmployeeNameById111 = function getEmployeeNameById111(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      var dept = deptList.depts.find(function (dept) {
        return dept.id === employee.deptId;
      });

      if (dept) {
        return dept.name + " - " + employee.name;
      }
    }

    return "";
  };

  var getProductNameById = function getProductNameById(productTypeList, productList, id) {
    var product = productList.products.find(function (product) {
      return product.id === id;
    });

    if (product) {
      var productType = productTypeList.productTypes.find(function (productType) {
        return productType.id === product.productTypeId;
      });

      if (productType) {
        return productType.name + " - " + product.name;
      }
    }

    return "";
  };

  var getGoldTypeNameById = function getGoldTypeNameById(goldTypeList, id) {
    var goldType = goldTypeList.goldTypes.find(function (goldType) {
      return goldType.id === id;
    });

    if (goldType) {
      return goldType.name;
    }

    return "";
  };

  var getGoldUnitNameById = function getGoldUnitNameById(goldUnitList, id) {
    var goldUnit = goldUnitList.goldUnits.find(function (goldUnit) {
      return goldUnit.id === id;
    });

    if (goldUnit) {
      return goldUnit.name;
    }

    return "";
  };

  var formatImportFromFactoryDate = function formatImportFromFactoryDate(importFromFactoryDate) {
    if (!importFromFactoryDate) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(importFromFactoryDate), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.importFromFactorys[index].code
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: getEmployeeNameById(data.deptList, data.employeeList, data.importFromFactorys[index].importFromFactoryrId)
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.importFromFactorys[index].weightLyTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.importFromFactorys[index].quantityTotal
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: formatImportFromFactoryDate(data.importFromFactorys[index].importFromFactoryDate)
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.importFromFactorys[index].note
  }));
}

renderRow.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/************************************************** Constructor */

var ImportFromFactoryList = function ImportFromFactoryList(props) {
  _s();

  var PADDING_SIZE = 10;
  var ITEM_SIZE = 20;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];
  /* Detect mobile view */


  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  /* const handleOnWheel = ({ deltaY }) => {
    // Your handler goes here ...
    console.log(
      new Date().toLocaleString() + " ............ handleOnWheel()",
      deltaY
    );
  };
    // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/display-name
  const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`,
        height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`,
      }}
      {...rest}
    />
  ));
    // eslint-disable-next-line react/display-name
  const outerElementType = forwardRef((props, ref) => {
    return <div ref={ref} onWheel={handleOnWheel} {...props} />;
  }); */

  var formatDate = function formatDate(date) {
    if (!date) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(date), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    props.importFromFactorys[index].importFromFactoryDate = formatDate(props.importFromFactorys[index].importFromFactoryDate);
    return props.importFromFactorys[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.importFromFactoryEdit(event, event.rowData);
  };
  /************************************************** render */


  return __jsx("div", {
    className: classes.root
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
    rowCount: props.importFromFactorys.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Mã",
      dataKey: "code"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Mô tả",
      dataKey: "description"
    }, {
      width: 90,
      label: "Trọng lượng (ly)",
      dataKey: "weightLyTotal",
      numeric: true
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantityTotal",
      numeric: true
    }, {
      width: 120,
      flexGrow: 0.5,
      label: "Ngày mua",
      dataKey: "importFromFactoryDate"
    }]
  }));
};

_s(ImportFromFactoryList, "kHeIdq+y+2b0bGY4N56B+1LbC8A=", false, function () {
  return [useStyles];
});

_c = ImportFromFactoryList;
/* harmony default export */ __webpack_exports__["default"] = (ImportFromFactoryList);

var _c;

$RefreshReg$(_c, "ImportFromFactoryList");

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

/***/ }),

/***/ "./src/components/Purchase/PurchaseList.js":
/*!*************************************************!*\
  !*** ./src/components/Purchase/PurchaseList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types */













var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__["default"]
};
/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.paper
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    rowOdd: {
      backgroundColor: "#f1f1f1"
    },
    rowEven: {
      backgroundColor: "#f8f8f0"
    }
  };
});

function renderRow(props) {
  var index = props.index,
      style = props.style,
      data = props.data;

  var getEmployeeNameById = function getEmployeeNameById(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      return employee.name;
    }

    return "";
  };

  var getEmployeeNameById111 = function getEmployeeNameById111(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      var dept = deptList.depts.find(function (dept) {
        return dept.id === employee.deptId;
      });

      if (dept) {
        return dept.name + " - " + employee.name;
      }
    }

    return "";
  };

  var getProductNameById = function getProductNameById(productTypeList, productList, id) {
    var product = productList.products.find(function (product) {
      return product.id === id;
    });

    if (product) {
      var productType = productTypeList.productTypes.find(function (productType) {
        return productType.id === product.productTypeId;
      });

      if (productType) {
        return productType.name + " - " + product.name;
      }
    }

    return "";
  };

  var getGoldTypeNameById = function getGoldTypeNameById(goldTypeList, id) {
    var goldType = goldTypeList.goldTypes.find(function (goldType) {
      return goldType.id === id;
    });

    if (goldType) {
      return goldType.name;
    }

    return "";
  };

  var getGoldUnitNameById = function getGoldUnitNameById(goldUnitList, id) {
    var goldUnit = goldUnitList.goldUnits.find(function (goldUnit) {
      return goldUnit.id === id;
    });

    if (goldUnit) {
      return goldUnit.name;
    }

    return "";
  };

  var formatPurchaseDate = function formatPurchaseDate(purchaseDate) {
    if (!purchaseDate) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(purchaseDate), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.purchases[index].code
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: getEmployeeNameById(data.deptList, data.employeeList, data.purchases[index].purchaserId)
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.purchases[index].weightLyTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.purchases[index].quantityTotal
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: formatPurchaseDate(data.purchases[index].purchaseDate)
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.purchases[index].note
  }));
}

renderRow.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/************************************************** Constructor */

var PurchaseList = function PurchaseList(props) {
  _s();

  var PADDING_SIZE = 10;
  var ITEM_SIZE = 20;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];
  /* Detect mobile view */


  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  /* const handleOnWheel = ({ deltaY }) => {
    // Your handler goes here ...
    console.log(
      new Date().toLocaleString() + " ............ handleOnWheel()",
      deltaY
    );
  };
    // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/display-name
  const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`,
        height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`,
      }}
      {...rest}
    />
  ));
    // eslint-disable-next-line react/display-name
  const outerElementType = forwardRef((props, ref) => {
    return <div ref={ref} onWheel={handleOnWheel} {...props} />;
  }); */

  var formatDate = function formatDate(date) {
    if (!date) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(date), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    props.purchases[index].purchaseDate = formatDate(props.purchases[index].purchaseDate);
    return props.purchases[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.purchaseEdit(event, event.rowData);
  };
  /************************************************** render */


  return __jsx("div", {
    className: classes.root
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
    rowCount: props.purchases.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Mã",
      dataKey: "code"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Mô tả",
      dataKey: "description"
    }, {
      width: 90,
      label: "Trọng lượng (ly)",
      dataKey: "weightLyTotal",
      numeric: true
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantityTotal",
      numeric: true
    }, {
      width: 120,
      flexGrow: 0.5,
      label: "Ngày mua",
      dataKey: "purchaseDate"
    }]
  }));
};

_s(PurchaseList, "kHeIdq+y+2b0bGY4N56B+1LbC8A=", false, function () {
  return [useStyles];
});

_c = PurchaseList;
/* harmony default export */ __webpack_exports__["default"] = (PurchaseList);

var _c;

$RefreshReg$(_c, "PurchaseList");

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

/***/ }),

/***/ "./src/components/Sell/SellList.js":
/*!*****************************************!*\
  !*** ./src/components/Sell/SellList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
/* harmony import */ var _UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../UI/Table/MuiVirtualizedTable */ "./src/components/UI/Table/MuiVirtualizedTable.js");



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types */













var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_12__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_13__["default"]
};
/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.paper
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    rowOdd: {
      backgroundColor: "#f1f1f1"
    },
    rowEven: {
      backgroundColor: "#f8f8f0"
    }
  };
});

function renderRow(props) {
  var index = props.index,
      style = props.style,
      data = props.data;

  var getEmployeeNameById = function getEmployeeNameById(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      return employee.name;
    }

    return "";
  };

  var getEmployeeNameById111 = function getEmployeeNameById111(deptList, employeeList, id) {
    var employee = employeeList.employees.find(function (employee) {
      return employee.id === id;
    });

    if (employee) {
      var dept = deptList.depts.find(function (dept) {
        return dept.id === employee.deptId;
      });

      if (dept) {
        return dept.name + " - " + employee.name;
      }
    }

    return "";
  };

  var getProductNameById = function getProductNameById(productTypeList, productList, id) {
    var product = productList.products.find(function (product) {
      return product.id === id;
    });

    if (product) {
      var productType = productTypeList.productTypes.find(function (productType) {
        return productType.id === product.productTypeId;
      });

      if (productType) {
        return productType.name + " - " + product.name;
      }
    }

    return "";
  };

  var getGoldTypeNameById = function getGoldTypeNameById(goldTypeList, id) {
    var goldType = goldTypeList.goldTypes.find(function (goldType) {
      return goldType.id === id;
    });

    if (goldType) {
      return goldType.name;
    }

    return "";
  };

  var getGoldUnitNameById = function getGoldUnitNameById(goldUnitList, id) {
    var goldUnit = goldUnitList.goldUnits.find(function (goldUnit) {
      return goldUnit.id === id;
    });

    if (goldUnit) {
      return goldUnit.name;
    }

    return "";
  };

  var formatSellDate = function formatSellDate(sellDate) {
    if (!sellDate) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(sellDate), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.sells[index].code
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: getEmployeeNameById(data.deptList, data.employeeList, data.sells[index].sellrId)
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.sells[index].weightLyTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.sells[index].quantityTotal
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: formatSellDate(data.sells[index].sellDate)
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: data.sells[index].note
  }));
}

renderRow.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/************************************************** Constructor */

var SellList = function SellList(props) {
  _s();

  var PADDING_SIZE = 10;
  var ITEM_SIZE = 20;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];
  /* Detect mobile view */


  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);
  /* const handleOnWheel = ({ deltaY }) => {
    // Your handler goes here ...
    console.log(
      new Date().toLocaleString() + " ............ handleOnWheel()",
      deltaY
    );
  };
    // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/display-name
  const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`,
        height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`,
      }}
      {...rest}
    />
  ));
    // eslint-disable-next-line react/display-name
  const outerElementType = forwardRef((props, ref) => {
    return <div ref={ref} onWheel={handleOnWheel} {...props} />;
  }); */

  var formatDate = function formatDate(date) {
    if (!date) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(date), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  var rowGetter = function rowGetter(_ref) {
    var index = _ref.index;
    props.sells[index].sellDate = formatDate(props.sells[index].sellDate);
    return props.sells[index];
  };

  var rowClick = function rowClick(event) {
    // console.log(event);
    props.sellEdit(event, event.rowData);
  };
  /************************************************** render */


  return __jsx("div", {
    className: classes.root
  }, __jsx(_UI_Table_MuiVirtualizedTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
    rowCount: props.sells.length,
    rowGetter: rowGetter,
    onRowClick: rowClick,
    columns: [{
      width: 200,
      flexGrow: 1.0,
      label: "Mã",
      dataKey: "code"
    }, {
      width: 200,
      flexGrow: 1.0,
      label: "Mô tả",
      dataKey: "description"
    }, {
      width: 90,
      label: "Trọng lượng (ly)",
      dataKey: "weightLyTotal",
      numeric: true
    }, {
      width: 90,
      label: "Số lượng",
      dataKey: "quantityTotal",
      numeric: true
    }, {
      width: 120,
      flexGrow: 0.5,
      label: "Ngày mua",
      dataKey: "sellDate"
    }]
  }));
};

_s(SellList, "kHeIdq+y+2b0bGY4N56B+1LbC8A=", false, function () {
  return [useStyles];
});

_c = SellList;
/* harmony default export */ __webpack_exports__["default"] = (SellList);

var _c;

$RefreshReg$(_c, "SellList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwb3J0VG9GYWN0b3J5L0V4cG9ydFRvRmFjdG9yeUxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ltcG9ydEZyb21GYWN0b3J5L0ltcG9ydEZyb21GYWN0b3J5TGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWxsL1NlbGxMaXN0LmpzIl0sIm5hbWVzIjpbImxvY2FsZU1hcCIsImVuIiwiZW5Mb2NhbGUiLCJ2aSIsInZpTG9jYWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibGlzdEl0ZW0iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwicm93T2RkIiwicm93RXZlbiIsInJlbmRlclJvdyIsInByb3BzIiwiaW5kZXgiLCJzdHlsZSIsImRhdGEiLCJnZXRFbXBsb3llZU5hbWVCeUlkIiwiZGVwdExpc3QiLCJlbXBsb3llZUxpc3QiLCJpZCIsImVtcGxveWVlIiwiZW1wbG95ZWVzIiwiZmluZCIsIm5hbWUiLCJnZXRFbXBsb3llZU5hbWVCeUlkMTExIiwiZGVwdCIsImRlcHRzIiwiZGVwdElkIiwiZ2V0UHJvZHVjdE5hbWVCeUlkIiwicHJvZHVjdFR5cGVMaXN0IiwicHJvZHVjdExpc3QiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJwcm9kdWN0VHlwZSIsInByb2R1Y3RUeXBlcyIsInByb2R1Y3RUeXBlSWQiLCJnZXRHb2xkVHlwZU5hbWVCeUlkIiwiZ29sZFR5cGVMaXN0IiwiZ29sZFR5cGUiLCJnb2xkVHlwZXMiLCJnZXRHb2xkVW5pdE5hbWVCeUlkIiwiZ29sZFVuaXRMaXN0IiwiZ29sZFVuaXQiLCJnb2xkVW5pdHMiLCJmb3JtYXRFeHBvcnRUb0ZhY3RvcnlEYXRlIiwiZXhwb3J0VG9GYWN0b3J5RGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJsb2NhbGUiLCJjbHN4IiwiY2xhc3NlcyIsImV4cG9ydFRvRmFjdG9yeXMiLCJjb2RlIiwiaXNNb2JpbGUiLCJleHBvcnRUb0ZhY3RvcnlySWQiLCJ3ZWlnaHRMeVRvdGFsIiwicXVhbnRpdHlUb3RhbCIsIm5vdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYW55IiwiRXhwb3J0VG9GYWN0b3J5TGlzdCIsIlBBRERJTkdfU0laRSIsIklURU1fU0laRSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRJc01vYmlsZSIsInVzZUVmZmVjdCIsImlzTW9iaWxlVmlldyIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIkJvb2xlYW4iLCJmb3JtYXREYXRlIiwiZGF0ZSIsInJvd0dldHRlciIsInJvd0NsaWNrIiwiZXZlbnQiLCJleHBvcnRUb0ZhY3RvcnlFZGl0Iiwicm93RGF0YSIsImxlbmd0aCIsImZsZXhHcm93IiwibGFiZWwiLCJkYXRhS2V5IiwibnVtZXJpYyIsImZvcm1hdEltcG9ydEZyb21GYWN0b3J5RGF0ZSIsImltcG9ydEZyb21GYWN0b3J5RGF0ZSIsImltcG9ydEZyb21GYWN0b3J5cyIsImltcG9ydEZyb21GYWN0b3J5cklkIiwiSW1wb3J0RnJvbUZhY3RvcnlMaXN0IiwiaW1wb3J0RnJvbUZhY3RvcnlFZGl0IiwiZm9ybWF0UHVyY2hhc2VEYXRlIiwicHVyY2hhc2VEYXRlIiwicHVyY2hhc2VzIiwicHVyY2hhc2VySWQiLCJQdXJjaGFzZUxpc3QiLCJwdXJjaGFzZUVkaXQiLCJmb3JtYXRTZWxsRGF0ZSIsInNlbGxEYXRlIiwic2VsbHMiLCJzZWxscklkIiwiU2VsbExpc3QiLCJzZWxsRWRpdCJdLCJtYXBw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TyxFQU9QO0FBQ0V6RixXQUFLLEVBQUUsR0FEVDtBQUVFdUYsY0FBUSxFQUFFLEdBRlo7QUFHRUMsV0FBSyxFQUFFLE9BSFQ7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FQTyxFQWFQO0FBQ0V6RixXQUFLLEVBQUUsRUFEVDtBQUVFd0YsV0FBSyxFQUFFLGtCQUZUO0FBR0VDLGFBQU8sRUFBRSxlQUhYO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBYk8sRUFtQlA7QUFDRTFGLFdBQUssRUFBRSxFQURUO0FBRUV3RixXQUFLLEVBQUUsVUFGVDtBQUdFQyxhQUFPLEVBQUUsZUFIWDtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQW5CTyxFQXlCUDtBQUNFMUYsV0FBSyxFQUFFLEdBRFQ7QUFFRXVGLGNBQVEsRUFBRSxHQUZaO0FBR0VDLFdBQUssRUFBRSxVQUhUO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBekJPO0FBSlgsSUFERixDQURGO0FBb0VELENBaklEOztHQUFNa0IsUTtVQUdZL0csUzs7O0tBSForRyxRO0FBbUlTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYW5hZ2VTdG9yZS4zNzVjYzBhZDk3OTc1NWUzOWMwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dG9TaXplciB9IGZyb20gXCJyZWFjdC12aXJ0dWFsaXplZFwiO1xyXG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSBcInJlYWN0LXdpbmRvd1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuaW1wb3J0IE11aVZpcnR1YWxpemVkVGFibGUgZnJvbSBcIi4uL1VJL1RhYmxlL011aVZpcnR1YWxpemVkVGFibGVcIjtcclxuXHJcbmNvbnN0IGxvY2FsZU1hcCA9IHtcclxuICBlbjogZW5Mb2NhbGUsXHJcbiAgdmk6IHZpTG9jYWwsXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgfSxcclxuICByb3dPZGQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWYxXCIsXHJcbiAgfSxcclxuICByb3dFdmVuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmMFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHN0eWxlLCBkYXRhIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgZ2V0RW1wbG95ZWVOYW1lQnlJZCA9IChkZXB0TGlzdCwgZW1wbG95ZWVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGVtcGxveWVlID0gZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChlbXBsb3llZSkge1xyXG4gICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEVtcGxveWVlTmFtZUJ5SWQxMTEgPSAoZGVwdExpc3QsIGVtcGxveWVlTGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBlbXBsb3llZSA9IGVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZW1wbG95ZWUpIHtcclxuICAgICAgbGV0IGRlcHQgPSBkZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09PSBlbXBsb3llZS5kZXB0SWQpO1xyXG4gICAgICBpZiAoZGVwdCkge1xyXG4gICAgICAgIHJldHVybiBkZXB0Lm5hbWUgKyBcIiAtIFwiICsgZW1wbG95ZWUubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdE5hbWVCeUlkID0gKHByb2R1Y3RUeXBlTGlzdCwgcHJvZHVjdExpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgcHJvZHVjdCA9IHByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIGxldCBwcm9kdWN0VHlwZSA9IHByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09PSBwcm9kdWN0LnByb2R1Y3RUeXBlSWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHByb2R1Y3RUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RUeXBlLm5hbWUgKyBcIiAtIFwiICsgcHJvZHVjdC5uYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRHb2xkVHlwZU5hbWVCeUlkID0gKGdvbGRUeXBlTGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBnb2xkVHlwZSA9IGdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRHb2xkVW5pdE5hbWVCeUlkID0gKGdvbGRVbml0TGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBnb2xkVW5pdCA9IGdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGdvbGRVbml0KSA9PiBnb2xkVW5pdC5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZ29sZFVuaXQpIHtcclxuICAgICAgcmV0dXJuIGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRFeHBvcnRUb0ZhY3RvcnlEYXRlID0gKGV4cG9ydFRvRmFjdG9yeURhdGUpID0+IHtcclxuICAgIGlmICghZXhwb3J0VG9GYWN0b3J5RGF0ZSkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZXhwb3J0VG9GYWN0b3J5RGF0ZSksIFwiZGQvTU0veXl5eVwiLCB7XHJcbiAgICAgIGxvY2FsZTogbG9jYWxlTWFwW1widmlcIl0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RJdGVtXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBkYXRhLmNsYXNzZXMubGlzdEl0ZW0sXHJcbiAgICAgICAgaW5kZXggJSAyID09PSAwID8gZGF0YS5jbGFzc2VzLnJvd0V2ZW4gOiBkYXRhLmNsYXNzZXMucm93T2RkXHJcbiAgICAgICl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgIH19XHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5leHBvcnRUb0ZhY3RvcnlzW2luZGV4XS5jb2RlfSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Z2V0RW1wbG95ZWVOYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5kZXB0TGlzdCxcclxuICAgICAgICAgICAgZGF0YS5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgIGRhdGEuZXhwb3J0VG9GYWN0b3J5c1tpbmRleF0uZXhwb3J0VG9GYWN0b3J5cklkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5leHBvcnRUb0ZhY3RvcnlzW2luZGV4XS53ZWlnaHRMeVRvdGFsfSAvPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuZXhwb3J0VG9GYWN0b3J5c1tpbmRleF0ucXVhbnRpdHlUb3RhbH0gLz5cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2Zvcm1hdEV4cG9ydFRvRmFjdG9yeURhdGUoXHJcbiAgICAgICAgICAgIGRhdGEuZXhwb3J0VG9GYWN0b3J5c1tpbmRleF0uZXhwb3J0VG9GYWN0b3J5RGF0ZVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLmV4cG9ydFRvRmFjdG9yeXNbaW5kZXhdLm5vdGV9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbnJlbmRlclJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgRXhwb3J0VG9GYWN0b3J5TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFBBRERJTkdfU0laRSA9IDEwO1xyXG4gIGNvbnN0IElURU1fU0laRSA9IDIwO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLyogRGV0ZWN0IG1vYmlsZSB2aWV3ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vYmlsZVZpZXcgPSAvYW5kcm9pZHx3ZWJvc3xpcGhvbmV8aXBhZHxpcG9kfGJsYWNrYmVycnl8aWVtb2JpbGV8b3BlcmEgbWluaS9pLnRlc3QoXHJcbiAgICAgIGAke3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgKTtcclxuICAgIHNldElzTW9iaWxlKEJvb2xlYW4oaXNNb2JpbGVWaWV3KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvKiBjb25zdCBoYW5kbGVPbldoZWVsID0gKHsgZGVsdGFZIH0pID0+IHtcclxuICAgIC8vIFlvdXIgaGFuZGxlciBnb2VzIGhlcmUgLi4uXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIGhhbmRsZU9uV2hlZWwoKVwiLFxyXG4gICAgICBkZWx0YVlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3QgaW5uZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHsgc3R5bGUsIC4uLnJlc3QgfSwgcmVmKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgIHRvcDogYCR7cGFyc2VGbG9hdChzdHlsZS50b3ApICsgUEFERElOR19TSVpFfXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke3BhcnNlRmxvYXQoc3R5bGUuaGVpZ2h0KSArIFBBRERJTkdfU0laRSAqIDJ9cHhgLFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICBjb25zdCBvdXRlckVsZW1lbnRUeXBlID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IG9uV2hlZWw9e2hhbmRsZU9uV2hlZWx9IHsuLi5wcm9wc30gLz47XHJcbiAgfSk7ICovXHJcblxyXG4gIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJkZC9NTS95eXl5XCIsIHtcclxuICAgICAgbG9jYWxlOiBsb2NhbGVNYXBbXCJ2aVwiXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIHByb3BzLmV4cG9ydFRvRmFjdG9yeXNbaW5kZXhdLmV4cG9ydFRvRmFjdG9yeURhdGUgPSBmb3JtYXREYXRlKFxyXG4gICAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlzW2luZGV4XS5leHBvcnRUb0ZhY3RvcnlEYXRlXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHByb3BzLmV4cG9ydFRvRmFjdG9yeXNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5leHBvcnRUb0ZhY3RvcnlFZGl0KGV2ZW50LCBldmVudC5yb3dEYXRhKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8TXVpVmlydHVhbGl6ZWRUYWJsZVxyXG4gICAgICAgIHJvd0NvdW50PXtwcm9wcy5leHBvcnRUb0ZhY3RvcnlzLmxlbmd0aH1cclxuICAgICAgICByb3dHZXR0ZXI9e3Jvd0dldHRlcn1cclxuICAgICAgICBvblJvd0NsaWNrPXtyb3dDbGlja31cclxuICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk3Do1wiLFxyXG4gICAgICAgICAgICBkYXRhS2V5OiBcImNvZGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk3DtCB04bqjXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwiZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiVHLhu41uZyBsxrDhu6NuZyAobHkpXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0THlUb3RhbFwiLFxyXG4gICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJT4buRIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwicXVhbnRpdHlUb3RhbFwiLFxyXG4gICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDAuNSxcclxuICAgICAgICAgICAgbGFiZWw6IFwiTmfDoHkgbXVhXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwiZXhwb3J0VG9GYWN0b3J5RGF0ZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPEF1dG9TaXplcj5cclxuICAgICAgICB7KHByb3BzQXV0b1NpemVyKSA9PiAoXHJcbiAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxyXG4gICAgICAgICAgICB3aWR0aD17cHJvcHNBdXRvU2l6ZXIud2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17cHJvcHNBdXRvU2l6ZXIuaGVpZ2h0fVxyXG4gICAgICAgICAgICBpdGVtU2l6ZT17SVRFTV9TSVpFfVxyXG4gICAgICAgICAgICBpdGVtQ291bnQ9e3Byb3BzLmV4cG9ydFRvRmFjdG9yeXMubGVuZ3RofVxyXG4gICAgICAgICAgICBpdGVtRGF0YT17e1xyXG4gICAgICAgICAgICAgIGV4cG9ydFRvRmFjdG9yeXM6IHByb3BzLmV4cG9ydFRvRmFjdG9yeXMsXHJcbiAgICAgICAgICAgICAgZGVwdExpc3Q6IHByb3BzLmRlcHRMaXN0LFxyXG4gICAgICAgICAgICAgIGVtcGxveWVlTGlzdDogcHJvcHMuZW1wbG95ZWVMaXN0LFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdDogcHJvcHMucHJvZHVjdFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RMaXN0OiBwcm9wcy5wcm9kdWN0TGlzdCxcclxuICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q6IHByb3BzLmdvbGRUeXBlTGlzdCxcclxuICAgICAgICAgICAgICBnb2xkVW5pdExpc3Q6IHByb3BzLmdvbGRVbml0TGlzdCxcclxuICAgICAgICAgICAgICBleHBvcnRUb0ZhY3RvcnlFZGl0OiBwcm9wcy5leHBvcnRUb0ZhY3RvcnlFZGl0LFxyXG4gICAgICAgICAgICAgIGV4cG9ydFRvRmFjdG9yeURlbGV0ZTogcHJvcHMuZXhwb3J0VG9GYWN0b3J5RGVsZXRlLFxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlPXtpbm5lckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlPXtvdXRlckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVuZGVyUm93fVxyXG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQXV0b1NpemVyPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRUb0ZhY3RvcnlMaXN0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0b1NpemVyIH0gZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkXCI7XHJcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgfSBmcm9tIFwicmVhY3Qtd2luZG93XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5pbXBvcnQgTXVpVmlydHVhbGl6ZWRUYWJsZSBmcm9tIFwiLi4vVUkvVGFibGUvTXVpVmlydHVhbGl6ZWRUYWJsZVwiO1xyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICB9LFxyXG4gIHJvd09kZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjFcIixcclxuICB9LFxyXG4gIHJvd0V2ZW46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGYwXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpbmRleCwgc3R5bGUsIGRhdGEgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBnZXRFbXBsb3llZU5hbWVCeUlkID0gKGRlcHRMaXN0LCBlbXBsb3llZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSBlbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RW1wbG95ZWVOYW1lQnlJZDExMSA9IChkZXB0TGlzdCwgZW1wbG95ZWVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGVtcGxveWVlID0gZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChlbXBsb3llZSkge1xyXG4gICAgICBsZXQgZGVwdCA9IGRlcHRMaXN0LmRlcHRzLmZpbmQoKGRlcHQpID0+IGRlcHQuaWQgPT09IGVtcGxveWVlLmRlcHRJZCk7XHJcbiAgICAgIGlmIChkZXB0KSB7XHJcbiAgICAgICAgcmV0dXJuIGRlcHQubmFtZSArIFwiIC0gXCIgKyBlbXBsb3llZS5uYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0TmFtZUJ5SWQgPSAocHJvZHVjdFR5cGVMaXN0LCBwcm9kdWN0TGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBwcm9kdWN0ID0gcHJvZHVjdExpc3QucHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgbGV0IHByb2R1Y3RUeXBlID0gcHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT09IHByb2R1Y3QucHJvZHVjdFR5cGVJZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocHJvZHVjdFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdFR5cGUubmFtZSArIFwiIC0gXCIgKyBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEdvbGRUeXBlTmFtZUJ5SWQgPSAoZ29sZFR5cGVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGdvbGRUeXBlID0gZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEdvbGRVbml0TmFtZUJ5SWQgPSAoZ29sZFVuaXRMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGdvbGRVbml0ID0gZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoZ29sZFVuaXQpID0+IGdvbGRVbml0LmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChnb2xkVW5pdCkge1xyXG4gICAgICByZXR1cm4gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdEltcG9ydEZyb21GYWN0b3J5RGF0ZSA9IChpbXBvcnRGcm9tRmFjdG9yeURhdGUpID0+IHtcclxuICAgIGlmICghaW1wb3J0RnJvbUZhY3RvcnlEYXRlKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShpbXBvcnRGcm9tRmFjdG9yeURhdGUpLCBcImRkL01NL3l5eXlcIiwge1xyXG4gICAgICBsb2NhbGU6IGxvY2FsZU1hcFtcInZpXCJdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgZGF0YS5jbGFzc2VzLmxpc3RJdGVtLFxyXG4gICAgICAgIGluZGV4ICUgMiA9PT0gMCA/IGRhdGEuY2xhc3Nlcy5yb3dFdmVuIDogZGF0YS5jbGFzc2VzLnJvd09kZFxyXG4gICAgICApfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICB9fVxyXG4gICAgICBrZXk9e2luZGV4fVxyXG4gICAgPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuaW1wb3J0RnJvbUZhY3RvcnlzW2luZGV4XS5jb2RlfSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Z2V0RW1wbG95ZWVOYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5kZXB0TGlzdCxcclxuICAgICAgICAgICAgZGF0YS5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgIGRhdGEuaW1wb3J0RnJvbUZhY3RvcnlzW2luZGV4XS5pbXBvcnRGcm9tRmFjdG9yeXJJZFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuaW1wb3J0RnJvbUZhY3RvcnlzW2luZGV4XS53ZWlnaHRMeVRvdGFsfSAvPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuaW1wb3J0RnJvbUZhY3RvcnlzW2luZGV4XS5xdWFudGl0eVRvdGFsfSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Zm9ybWF0SW1wb3J0RnJvbUZhY3RvcnlEYXRlKFxyXG4gICAgICAgICAgICBkYXRhLmltcG9ydEZyb21GYWN0b3J5c1tpbmRleF0uaW1wb3J0RnJvbUZhY3RvcnlEYXRlXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuaW1wb3J0RnJvbUZhY3RvcnlzW2luZGV4XS5ub3RlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9MaXN0SXRlbT5cclxuICApO1xyXG59XHJcblxyXG5yZW5kZXJSb3cucHJvcFR5cGVzID0ge1xyXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBkYXRhOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNvbnN0IEltcG9ydEZyb21GYWN0b3J5TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFBBRERJTkdfU0laRSA9IDEwO1xyXG4gIGNvbnN0IElURU1fU0laRSA9IDIwO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLyogRGV0ZWN0IG1vYmlsZSB2aWV3ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vYmlsZVZpZXcgPSAvYW5kcm9pZHx3ZWJvc3xpcGhvbmV8aXBhZHxpcG9kfGJsYWNrYmVycnl8aWVtb2JpbGV8b3BlcmEgbWluaS9pLnRlc3QoXHJcbiAgICAgIGAke3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgKTtcclxuICAgIHNldElzTW9iaWxlKEJvb2xlYW4oaXNNb2JpbGVWaWV3KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvKiBjb25zdCBoYW5kbGVPbldoZWVsID0gKHsgZGVsdGFZIH0pID0+IHtcclxuICAgIC8vIFlvdXIgaGFuZGxlciBnb2VzIGhlcmUgLi4uXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIGhhbmRsZU9uV2hlZWwoKVwiLFxyXG4gICAgICBkZWx0YVlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3QgaW5uZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHsgc3R5bGUsIC4uLnJlc3QgfSwgcmVmKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgIHRvcDogYCR7cGFyc2VGbG9hdChzdHlsZS50b3ApICsgUEFERElOR19TSVpFfXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke3BhcnNlRmxvYXQoc3R5bGUuaGVpZ2h0KSArIFBBRERJTkdfU0laRSAqIDJ9cHhgLFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKSk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICBjb25zdCBvdXRlckVsZW1lbnRUeXBlID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IG9uV2hlZWw9e2hhbmRsZU9uV2hlZWx9IHsuLi5wcm9wc30gLz47XHJcbiAgfSk7ICovXHJcblxyXG4gIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJkZC9NTS95eXl5XCIsIHtcclxuICAgICAgbG9jYWxlOiBsb2NhbGVNYXBbXCJ2aVwiXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0dldHRlciA9ICh7IGluZGV4IH0pID0+IHtcclxuICAgIHByb3BzLmltcG9ydEZyb21GYWN0b3J5c1tpbmRleF0uaW1wb3J0RnJvbUZhY3RvcnlEYXRlID0gZm9ybWF0RGF0ZShcclxuICAgICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlzW2luZGV4XS5pbXBvcnRGcm9tRmFjdG9yeURhdGVcclxuICAgICk7XHJcbiAgICByZXR1cm4gcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3dDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlFZGl0KGV2ZW50LCBldmVudC5yb3dEYXRhKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8TXVpVmlydHVhbGl6ZWRUYWJsZVxyXG4gICAgICAgIHJvd0NvdW50PXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeXMubGVuZ3RofVxyXG4gICAgICAgIHJvd0dldHRlcj17cm93R2V0dGVyfVxyXG4gICAgICAgIG9uUm93Q2xpY2s9e3Jvd0NsaWNrfVxyXG4gICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiTcOjXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwiY29kZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEuMCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiTcO0IHThuqNcIixcclxuICAgICAgICAgICAgZGF0YUtleTogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJUcuG7jW5nIGzGsOG7o25nIChseSlcIixcclxuICAgICAgICAgICAgZGF0YUtleTogXCJ3ZWlnaHRMeVRvdGFsXCIsXHJcbiAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlPhu5EgbMaw4bujbmdcIixcclxuICAgICAgICAgICAgZGF0YUtleTogXCJxdWFudGl0eVRvdGFsXCIsXHJcbiAgICAgICAgICAgIG51bWVyaWM6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMC41LFxyXG4gICAgICAgICAgICBsYWJlbDogXCJOZ8OgeSBtdWFcIixcclxuICAgICAgICAgICAgZGF0YUtleTogXCJpbXBvcnRGcm9tRmFjdG9yeURhdGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgICAgey8qIDxBdXRvU2l6ZXI+XHJcbiAgICAgICAgeyhwcm9wc0F1dG9TaXplcikgPT4gKFxyXG4gICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcclxuICAgICAgICAgICAgd2lkdGg9e3Byb3BzQXV0b1NpemVyLndpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e3Byb3BzQXV0b1NpemVyLmhlaWdodH1cclxuICAgICAgICAgICAgaXRlbVNpemU9e0lURU1fU0laRX1cclxuICAgICAgICAgICAgaXRlbUNvdW50PXtwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeXMubGVuZ3RofVxyXG4gICAgICAgICAgICBpdGVtRGF0YT17e1xyXG4gICAgICAgICAgICAgIGltcG9ydEZyb21GYWN0b3J5czogcHJvcHMuaW1wb3J0RnJvbUZhY3RvcnlzLFxyXG4gICAgICAgICAgICAgIGRlcHRMaXN0OiBwcm9wcy5kZXB0TGlzdCxcclxuICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q6IHByb3BzLmVtcGxveWVlTGlzdCxcclxuICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q6IHByb3BzLnByb2R1Y3RUeXBlTGlzdCxcclxuICAgICAgICAgICAgICBwcm9kdWN0TGlzdDogcHJvcHMucHJvZHVjdExpc3QsXHJcbiAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0OiBwcm9wcy5nb2xkVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgZ29sZFVuaXRMaXN0OiBwcm9wcy5nb2xkVW5pdExpc3QsXHJcbiAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlFZGl0OiBwcm9wcy5pbXBvcnRGcm9tRmFjdG9yeUVkaXQsXHJcbiAgICAgICAgICAgICAgaW1wb3J0RnJvbUZhY3RvcnlEZWxldGU6IHByb3BzLmltcG9ydEZyb21GYWN0b3J5RGVsZXRlLFxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlPXtpbm5lckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlPXtvdXRlckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVuZGVyUm93fVxyXG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQXV0b1NpemVyPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRGcm9tRmFjdG9yeUxpc3Q7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRvU2l6ZXIgfSBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWRcIjtcclxuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCB9IGZyb20gXCJyZWFjdC13aW5kb3dcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgZW5Mb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xyXG5pbXBvcnQgdmlMb2NhbCBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL3ZpXCI7XHJcbmltcG9ydCBNdWlWaXJ0dWFsaXplZFRhYmxlIGZyb20gXCIuLi9VSS9UYWJsZS9NdWlWaXJ0dWFsaXplZFRhYmxlXCI7XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gIH0sXHJcbiAgcm93T2RkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmMVwiLFxyXG4gIH0sXHJcbiAgcm93RXZlbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjBcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJSb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGluZGV4LCBzdHlsZSwgZGF0YSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGdldEVtcGxveWVlTmFtZUJ5SWQgPSAoZGVwdExpc3QsIGVtcGxveWVlTGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBlbXBsb3llZSA9IGVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZW1wbG95ZWUpIHtcclxuICAgICAgcmV0dXJuIGVtcGxveWVlLm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRFbXBsb3llZU5hbWVCeUlkMTExID0gKGRlcHRMaXN0LCBlbXBsb3llZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSBlbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgIGxldCBkZXB0ID0gZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PT0gZW1wbG95ZWUuZGVwdElkKTtcclxuICAgICAgaWYgKGRlcHQpIHtcclxuICAgICAgICByZXR1cm4gZGVwdC5uYW1lICsgXCIgLSBcIiArIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3ROYW1lQnlJZCA9IChwcm9kdWN0VHlwZUxpc3QsIHByb2R1Y3RMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBsZXQgcHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PT0gcHJvZHVjdC5wcm9kdWN0VHlwZUlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChwcm9kdWN0VHlwZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0VHlwZS5uYW1lICsgXCIgLSBcIiArIHByb2R1Y3QubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0R29sZFR5cGVOYW1lQnlJZCA9IChnb2xkVHlwZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFR5cGUgPSBnb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0R29sZFVuaXROYW1lQnlJZCA9IChnb2xkVW5pdExpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFVuaXQgPSBnb2xkVW5pdExpc3QuZ29sZFVuaXRzLmZpbmQoXHJcbiAgICAgIChnb2xkVW5pdCkgPT4gZ29sZFVuaXQuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGdvbGRVbml0KSB7XHJcbiAgICAgIHJldHVybiBnb2xkVW5pdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0UHVyY2hhc2VEYXRlID0gKHB1cmNoYXNlRGF0ZSkgPT4ge1xyXG4gICAgaWYgKCFwdXJjaGFzZURhdGUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKHB1cmNoYXNlRGF0ZSksIFwiZGQvTU0veXl5eVwiLCB7XHJcbiAgICAgIGxvY2FsZTogbG9jYWxlTWFwW1widmlcIl0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RJdGVtXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBkYXRhLmNsYXNzZXMubGlzdEl0ZW0sXHJcbiAgICAgICAgaW5kZXggJSAyID09PSAwID8gZGF0YS5jbGFzc2VzLnJvd0V2ZW4gOiBkYXRhLmNsYXNzZXMucm93T2RkXHJcbiAgICAgICl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgIH19XHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmNvZGV9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRFbXBsb3llZU5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmRlcHRMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLmVtcGxveWVlTGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLnB1cmNoYXNlcklkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLndlaWdodEx5VG90YWx9IC8+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLnF1YW50aXR5VG90YWx9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtmb3JtYXRQdXJjaGFzZURhdGUoZGF0YS5wdXJjaGFzZXNbaW5kZXhdLnB1cmNoYXNlRGF0ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLm5vdGV9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbnJlbmRlclJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgUHVyY2hhc2VMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgUEFERElOR19TSVpFID0gMTA7XHJcbiAgY29uc3QgSVRFTV9TSVpFID0gMjA7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvKiBEZXRlY3QgbW9iaWxlIHZpZXcgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW9iaWxlVmlldyA9IC9hbmRyb2lkfHdlYm9zfGlwaG9uZXxpcGFkfGlwb2R8YmxhY2tiZXJyeXxpZW1vYmlsZXxvcGVyYSBtaW5pL2kudGVzdChcclxuICAgICAgYCR7d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKX1gXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2JpbGUoQm9vbGVhbihpc01vYmlsZVZpZXcpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qIGNvbnN0IGhhbmRsZU9uV2hlZWwgPSAoeyBkZWx0YVkgfSkgPT4ge1xyXG4gICAgLy8gWW91ciBoYW5kbGVyIGdvZXMgaGVyZSAuLi5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gaGFuZGxlT25XaGVlbCgpXCIsXHJcbiAgICAgIGRlbHRhWVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICBjb25zdCBpbm5lckVsZW1lbnRUeXBlID0gZm9yd2FyZFJlZigoeyBzdHlsZSwgLi4ucmVzdCB9LCByZWYpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgdG9wOiBgJHtwYXJzZUZsb2F0KHN0eWxlLnRvcCkgKyBQQURESU5HX1NJWkV9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7cGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpICsgUEFERElOR19TSVpFICogMn1weGAsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IG91dGVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiByZWY9e3JlZn0gb25XaGVlbD17aGFuZGxlT25XaGVlbH0gey4uLnByb3BzfSAvPjtcclxuICB9KTsgKi9cclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKGRhdGUpLCBcImRkL01NL3l5eXlcIiwge1xyXG4gICAgICBsb2NhbGU6IGxvY2FsZU1hcFtcInZpXCJdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm93R2V0dGVyID0gKHsgaW5kZXggfSkgPT4ge1xyXG4gICAgcHJvcHMucHVyY2hhc2VzW2luZGV4XS5wdXJjaGFzZURhdGUgPSBmb3JtYXREYXRlKFxyXG4gICAgICBwcm9wcy5wdXJjaGFzZXNbaW5kZXhdLnB1cmNoYXNlRGF0ZVxyXG4gICAgKTtcclxuICAgIHJldHVybiBwcm9wcy5wdXJjaGFzZXNbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd0NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBwcm9wcy5wdXJjaGFzZUVkaXQoZXZlbnQsIGV2ZW50LnJvd0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgcm93Q291bnQ9e3Byb3BzLnB1cmNoYXNlcy5sZW5ndGh9XHJcbiAgICAgICAgcm93R2V0dGVyPXtyb3dHZXR0ZXJ9XHJcbiAgICAgICAgb25Sb3dDbGljaz17cm93Q2xpY2t9XHJcbiAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJNw6NcIixcclxuICAgICAgICAgICAgZGF0YUtleTogXCJjb2RlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMS4wLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJNw7QgdOG6o1wiLFxyXG4gICAgICAgICAgICBkYXRhS2V5OiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlRy4buNbmcgbMaw4bujbmcgKGx5KVwiLFxyXG4gICAgICAgICAgICBkYXRhS2V5OiBcIndlaWdodEx5VG90YWxcIixcclxuICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiU+G7kSBsxrDhu6NuZ1wiLFxyXG4gICAgICAgICAgICBkYXRhS2V5OiBcInF1YW50aXR5VG90YWxcIixcclxuICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAwLjUsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk5nw6B5IG11YVwiLFxyXG4gICAgICAgICAgICBkYXRhS2V5OiBcInB1cmNoYXNlRGF0ZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPEF1dG9TaXplcj5cclxuICAgICAgICB7KHByb3BzQXV0b1NpemVyKSA9PiAoXHJcbiAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxyXG4gICAgICAgICAgICB3aWR0aD17cHJvcHNBdXRvU2l6ZXIud2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17cHJvcHNBdXRvU2l6ZXIuaGVpZ2h0fVxyXG4gICAgICAgICAgICBpdGVtU2l6ZT17SVRFTV9TSVpFfVxyXG4gICAgICAgICAgICBpdGVtQ291bnQ9e3Byb3BzLnB1cmNoYXNlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhPXt7XHJcbiAgICAgICAgICAgICAgcHVyY2hhc2VzOiBwcm9wcy5wdXJjaGFzZXMsXHJcbiAgICAgICAgICAgICAgZGVwdExpc3Q6IHByb3BzLmRlcHRMaXN0LFxyXG4gICAgICAgICAgICAgIGVtcGxveWVlTGlzdDogcHJvcHMuZW1wbG95ZWVMaXN0LFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdDogcHJvcHMucHJvZHVjdFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RMaXN0OiBwcm9wcy5wcm9kdWN0TGlzdCxcclxuICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q6IHByb3BzLmdvbGRUeXBlTGlzdCxcclxuICAgICAgICAgICAgICBnb2xkVW5pdExpc3Q6IHByb3BzLmdvbGRVbml0TGlzdCxcclxuICAgICAgICAgICAgICBwdXJjaGFzZUVkaXQ6IHByb3BzLnB1cmNoYXNlRWRpdCxcclxuICAgICAgICAgICAgICBwdXJjaGFzZURlbGV0ZTogcHJvcHMucHVyY2hhc2VEZWxldGUsXHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlubmVyRWxlbWVudFR5cGU9e2lubmVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgIG91dGVyRWxlbWVudFR5cGU9e291dGVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtyZW5kZXJSb3d9XHJcbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9BdXRvU2l6ZXI+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlTGlzdDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dG9TaXplciB9IGZyb20gXCJyZWFjdC12aXJ0dWFsaXplZFwiO1xyXG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSBcInJlYWN0LXdpbmRvd1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuaW1wb3J0IE11aVZpcnR1YWxpemVkVGFibGUgZnJvbSBcIi4uL1VJL1RhYmxlL011aVZpcnR1YWxpemVkVGFibGVcIjtcclxuXHJcbmNvbnN0IGxvY2FsZU1hcCA9IHtcclxuICBlbjogZW5Mb2NhbGUsXHJcbiAgdmk6IHZpTG9jYWwsXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgfSxcclxuICByb3dPZGQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWYxXCIsXHJcbiAgfSxcclxuICByb3dFdmVuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmMFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHN0eWxlLCBkYXRhIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgZ2V0RW1wbG95ZWVOYW1lQnlJZCA9IChkZXB0TGlzdCwgZW1wbG95ZWVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGVtcGxveWVlID0gZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChlbXBsb3llZSkge1xyXG4gICAgICByZXR1cm4gZW1wbG95ZWUubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEVtcGxveWVlTmFtZUJ5SWQxMTEgPSAoZGVwdExpc3QsIGVtcGxveWVlTGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBlbXBsb3llZSA9IGVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZW1wbG95ZWUpIHtcclxuICAgICAgbGV0IGRlcHQgPSBkZXB0TGlzdC5kZXB0cy5maW5kKChkZXB0KSA9PiBkZXB0LmlkID09PSBlbXBsb3llZS5kZXB0SWQpO1xyXG4gICAgICBpZiAoZGVwdCkge1xyXG4gICAgICAgIHJldHVybiBkZXB0Lm5hbWUgKyBcIiAtIFwiICsgZW1wbG95ZWUubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdE5hbWVCeUlkID0gKHByb2R1Y3RUeXBlTGlzdCwgcHJvZHVjdExpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgcHJvZHVjdCA9IHByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIGxldCBwcm9kdWN0VHlwZSA9IHByb2R1Y3RUeXBlTGlzdC5wcm9kdWN0VHlwZXMuZmluZChcclxuICAgICAgICAocHJvZHVjdFR5cGUpID0+IHByb2R1Y3RUeXBlLmlkID09PSBwcm9kdWN0LnByb2R1Y3RUeXBlSWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHByb2R1Y3RUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RUeXBlLm5hbWUgKyBcIiAtIFwiICsgcHJvZHVjdC5uYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRHb2xkVHlwZU5hbWVCeUlkID0gKGdvbGRUeXBlTGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBnb2xkVHlwZSA9IGdvbGRUeXBlTGlzdC5nb2xkVHlwZXMuZmluZChcclxuICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRHb2xkVW5pdE5hbWVCeUlkID0gKGdvbGRVbml0TGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBnb2xkVW5pdCA9IGdvbGRVbml0TGlzdC5nb2xkVW5pdHMuZmluZChcclxuICAgICAgKGdvbGRVbml0KSA9PiBnb2xkVW5pdC5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZ29sZFVuaXQpIHtcclxuICAgICAgcmV0dXJuIGdvbGRVbml0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRTZWxsRGF0ZSA9IChzZWxsRGF0ZSkgPT4ge1xyXG4gICAgaWYgKCFzZWxsRGF0ZSkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoc2VsbERhdGUpLCBcImRkL01NL3l5eXlcIiwge1xyXG4gICAgICBsb2NhbGU6IGxvY2FsZU1hcFtcInZpXCJdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgZGF0YS5jbGFzc2VzLmxpc3RJdGVtLFxyXG4gICAgICAgIGluZGV4ICUgMiA9PT0gMCA/IGRhdGEuY2xhc3Nlcy5yb3dFdmVuIDogZGF0YS5jbGFzc2VzLnJvd09kZFxyXG4gICAgICApfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICB9fVxyXG4gICAgICBrZXk9e2luZGV4fVxyXG4gICAgPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuc2VsbHNbaW5kZXhdLmNvZGV9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRFbXBsb3llZU5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmRlcHRMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLmVtcGxveWVlTGlzdCxcclxuICAgICAgICAgICAgZGF0YS5zZWxsc1tpbmRleF0uc2VsbHJJZFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuc2VsbHNbaW5kZXhdLndlaWdodEx5VG90YWx9IC8+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5zZWxsc1tpbmRleF0ucXVhbnRpdHlUb3RhbH0gLz5cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17Zm9ybWF0U2VsbERhdGUoZGF0YS5zZWxsc1tpbmRleF0uc2VsbERhdGUpfSAvPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEuc2VsbHNbaW5kZXhdLm5vdGV9IC8+fVxyXG4gICAgPC9MaXN0SXRlbT5cclxuICApO1xyXG59XHJcblxyXG5yZW5kZXJSb3cucHJvcFR5cGVzID0ge1xyXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBkYXRhOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNvbnN0IFNlbGxMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgUEFERElOR19TSVpFID0gMTA7XHJcbiAgY29uc3QgSVRFTV9TSVpFID0gMjA7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvKiBEZXRlY3QgbW9iaWxlIHZpZXcgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW9iaWxlVmlldyA9IC9hbmRyb2lkfHdlYm9zfGlwaG9uZXxpcGFkfGlwb2R8YmxhY2tiZXJyeXxpZW1vYmlsZXxvcGVyYSBtaW5pL2kudGVzdChcclxuICAgICAgYCR7d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKX1gXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2JpbGUoQm9vbGVhbihpc01vYmlsZVZpZXcpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8qIGNvbnN0IGhhbmRsZU9uV2hlZWwgPSAoeyBkZWx0YVkgfSkgPT4ge1xyXG4gICAgLy8gWW91ciBoYW5kbGVyIGdvZXMgaGVyZSAuLi5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gaGFuZGxlT25XaGVlbCgpXCIsXHJcbiAgICAgIGRlbHRhWVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICBjb25zdCBpbm5lckVsZW1lbnRUeXBlID0gZm9yd2FyZFJlZigoeyBzdHlsZSwgLi4ucmVzdCB9LCByZWYpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgdG9wOiBgJHtwYXJzZUZsb2F0KHN0eWxlLnRvcCkgKyBQQURESU5HX1NJWkV9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7cGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpICsgUEFERElOR19TSVpFICogMn1weGAsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IG91dGVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiByZWY9e3JlZn0gb25XaGVlbD17aGFuZGxlT25XaGVlbH0gey4uLnByb3BzfSAvPjtcclxuICB9KTsgKi9cclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKGRhdGUpLCBcImRkL01NL3l5eXlcIiwge1xyXG4gICAgICBsb2NhbGU6IGxvY2FsZU1hcFtcInZpXCJdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm93R2V0dGVyID0gKHsgaW5kZXggfSkgPT4ge1xyXG4gICAgcHJvcHMuc2VsbHNbaW5kZXhdLnNlbGxEYXRlID0gZm9ybWF0RGF0ZShwcm9wcy5zZWxsc1tpbmRleF0uc2VsbERhdGUpO1xyXG4gICAgcmV0dXJuIHByb3BzLnNlbGxzW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBjb25zdCByb3dDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgcHJvcHMuc2VsbEVkaXQoZXZlbnQsIGV2ZW50LnJvd0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxNdWlWaXJ0dWFsaXplZFRhYmxlXHJcbiAgICAgICAgcm93Q291bnQ9e3Byb3BzLnNlbGxzLmxlbmd0aH1cclxuICAgICAgICByb3dHZXR0ZXI9e3Jvd0dldHRlcn1cclxuICAgICAgICBvblJvd0NsaWNrPXtyb3dDbGlja31cclxuICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk3Do1wiLFxyXG4gICAgICAgICAgICBkYXRhS2V5OiBcImNvZGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLjAsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk3DtCB04bqjXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwiZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiVHLhu41uZyBsxrDhu6NuZyAobHkpXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwid2VpZ2h0THlUb3RhbFwiLFxyXG4gICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJT4buRIGzGsOG7o25nXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwicXVhbnRpdHlUb3RhbFwiLFxyXG4gICAgICAgICAgICBudW1lcmljOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDAuNSxcclxuICAgICAgICAgICAgbGFiZWw6IFwiTmfDoHkgbXVhXCIsXHJcbiAgICAgICAgICAgIGRhdGFLZXk6IFwic2VsbERhdGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgICAgey8qIDxBdXRvU2l6ZXI+XHJcbiAgICAgICAgeyhwcm9wc0F1dG9TaXplcikgPT4gKFxyXG4gICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcclxuICAgICAgICAgICAgd2lkdGg9e3Byb3BzQXV0b1NpemVyLndpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e3Byb3BzQXV0b1NpemVyLmhlaWdodH1cclxuICAgICAgICAgICAgaXRlbVNpemU9e0lURU1fU0laRX1cclxuICAgICAgICAgICAgaXRlbUNvdW50PXtwcm9wcy5zZWxscy5sZW5ndGh9XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhPXt7XHJcbiAgICAgICAgICAgICAgc2VsbHM6IHByb3BzLnNlbGxzLFxyXG4gICAgICAgICAgICAgIGRlcHRMaXN0OiBwcm9wcy5kZXB0TGlzdCxcclxuICAgICAgICAgICAgICBlbXBsb3llZUxpc3Q6IHByb3BzLmVtcGxveWVlTGlzdCxcclxuICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q6IHByb3BzLnByb2R1Y3RUeXBlTGlzdCxcclxuICAgICAgICAgICAgICBwcm9kdWN0TGlzdDogcHJvcHMucHJvZHVjdExpc3QsXHJcbiAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0OiBwcm9wcy5nb2xkVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgZ29sZFVuaXRMaXN0OiBwcm9wcy5nb2xkVW5pdExpc3QsXHJcbiAgICAgICAgICAgICAgc2VsbEVkaXQ6IHByb3BzLnNlbGxFZGl0LFxyXG4gICAgICAgICAgICAgIHNlbGxEZWxldGU6IHByb3BzLnNlbGxEZWxldGUsXHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlubmVyRWxlbWVudFR5cGU9e2lubmVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgIG91dGVyRWxlbWVudFR5cGU9e291dGVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtyZW5kZXJSb3d9XHJcbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9BdXRvU2l6ZXI+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGxMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9