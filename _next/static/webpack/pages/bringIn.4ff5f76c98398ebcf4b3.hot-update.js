webpackHotUpdate_N_E("pages/bringIn",{

/***/ "./src/components/Purchase/PurchaseList.js":
/*!*************************************************!*\
  !*** ./src/components/Purchase/PurchaseList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");





var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Purchase\\PurchaseList.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types */












var localeMap = {
  en: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_14__["default"],
  vi: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_15__["default"]
};
/************************************************** styles */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
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

  var formatInputDate = function formatInputDate(inputDate) {
    if (!inputDate) {
      return "";
    }

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_13__["default"])(Date.parse(inputDate), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_12__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    edge: "end",
    "aria-label": "edit",
    onClick: function onClick(event) {
      return data.purchaseEdit(event, data.purchases[index]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getEmployeeNameById(data.deptList, data.employeeList, data.purchases[index].employeeId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getProductNameById(data.productTypeList, data.productList, data.purchases[index].productId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldTypeNameById(data.goldTypeList, data.purchases[index].goldTypeId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].weight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldUnitNameById(data.goldUnitList, data.purchases[index].goldUnitId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].quantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: formatInputDate(data.purchases[index].inputDate),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    edge: "end",
    "aria-label": "delete",
    onClick: function onClick(event) {
      return data.purchaseDelete(event, data.purchases[index]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }))));
}

renderRow.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};
/************************************************** Constructor */

var PurchaseList = function PurchaseList(props) {
  _s();

  var PADDING_SIZE = 10;
  var ITEM_SIZE = 20;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setIsMobile = _React$useState2[1];
  /* Detect mobile view */


  react__WEBPACK_IMPORTED_MODULE_9___default.a.useEffect(function () {
    var isMobileView = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test("".concat(window.navigator.userAgent.toLowerCase()));
    setIsMobile(Boolean(isMobileView));
  }, []);

  var handleOnWheel = function handleOnWheel(_ref) {
    var deltaY = _ref.deltaY;
    // Your handler goes here ...
    console.log(new Date().toLocaleString() + " ............ handleOnWheel()", deltaY);
  }; // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/display-name


  var innerElementType = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function (_ref2, ref) {
    var style = _ref2.style,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["style"]);

    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      style: _objectSpread(_objectSpread({}, style), {}, {
        top: "".concat(parseFloat(style.top) + PADDING_SIZE, "px"),
        height: "".concat(parseFloat(style.height) + PADDING_SIZE * 2, "px")
      })
    }, rest, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 5
      }
    }));
  }); // eslint-disable-next-line react/display-name

  var outerElementType = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function (props, ref) {
    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      onWheel: handleOnWheel
    }, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 12
      }
    }));
  });
  /************************************************** render */

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_10__["AutoSizer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, function (propsAutoSizer) {
    return __jsx(react_window__WEBPACK_IMPORTED_MODULE_11__["FixedSizeList"], {
      width: propsAutoSizer.width,
      height: propsAutoSizer.height,
      itemSize: ITEM_SIZE,
      itemCount: props.purchases.length,
      itemData: {
        purchases: props.purchases,
        deptList: props.deptList,
        employeeList: props.employeeList,
        productTypeList: props.productTypeList,
        productList: props.productList,
        goldTypeList: props.goldTypeList,
        goldUnitList: props.goldUnitList,
        purchaseEdit: props.purchaseEdit,
        purchaseDelete: props.purchaseDelete,
        isMobile: isMobile,
        classes: classes
      },
      innerElementType: innerElementType,
      outerElementType: outerElementType,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }
    }, renderRow);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0LmpzIl0sIm5hbWVzIjpbImxvY2FsZU1hcCIsImVuIiwiZW5Mb2NhbGUiLCJ2aSIsInZpTG9jYWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibGlzdEl0ZW0iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwicm93T2RkIiwicm93RXZlbiIsInJlbmRlclJvdyIsInByb3BzIiwiaW5kZXgiLCJzdHlsZSIsImRhdGEiLCJnZXRFbXBsb3llZU5hbWVCeUlkIiwiZGVwdExpc3QiLCJlbXBsb3llZUxpc3QiLCJpZCIsImVtcGxveWVlIiwiZW1wbG95ZWVzIiwiZmluZCIsImRlcHQiLCJkZXB0cyIsImRlcHRJZCIsIm5hbWUiLCJnZXRQcm9kdWN0TmFtZUJ5SWQiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInByb2R1Y3RUeXBlIiwicHJvZHVjdFR5cGVzIiwicHJvZHVjdFR5cGVJZCIsImdldEdvbGRUeXBlTmFtZUJ5SWQiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZSIsImdvbGRUeXBlcyIsImdldEdvbGRVbml0TmFtZUJ5SWQiLCJnb2xkVW5pdExpc3QiLCJnb2xkVW5pdCIsImdvbGRVbml0cyIsImZvcm1hdElucHV0RGF0ZSIsImlucHV0RGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJwYXJzZSIsImxvY2FsZSIsImNsc3giLCJjbGFzc2VzIiwiZXZlbnQiLCJwdXJjaGFzZUVkaXQiLCJwdXJjaGFzZXMiLCJpc01vYmlsZSIsImVtcGxveWVlSWQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwid2VpZ2h0IiwiZ29sZFVuaXRJZCIsInF1YW50aXR5IiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZURlbGV0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJhbnkiLCJQdXJjaGFzZUxpc3QiLCJQQURESU5HX1NJWkUiLCJJVEVNX1NJWkUiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwiaGFuZGxlT25XaGVlbCIsImRlbHRhWSIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvY2FsZVN0cmluZyIsImlubmVyRWxlbWVudFR5cGUiLCJmb3J3YXJkUmVmIiwicmVmIiwicmVzdCIsInRvcCIsInBhcnNlRmxvYXQiLCJvdXRlckVsZW1lbnRUeXBlIiwicHJvcHNBdXRvU2l6ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFQyw4REFEWTtBQUVoQkMsSUFBRSxFQUFFQywyREFBT0E7QUFGSyxDQUFsQjtBQUtBOztBQUNBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRSxNQURIO0FBRUpDLFlBQU0sRUFBRSxNQUZKO0FBR0pDLHFCQUFlLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUh0QyxLQURpQztBQU12Q0MsWUFBUSxFQUFFO0FBQ1JDLGFBQU8sRUFBRSxNQUREO0FBRVJDLGdCQUFVLEVBQUUsUUFGSjtBQUdSQyxvQkFBYyxFQUFFO0FBSFIs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USxFQUFFO0FBQ1IzQyxpQkFBUyxFQUFFekMsS0FBSyxDQUFDeUMsU0FEVDtBQUVScEMsZ0JBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQUZSO0FBR1JDLG9CQUFZLEVBQUVOLEtBQUssQ0FBQ00sWUFIWjtBQUlSVSx1QkFBZSxFQUFFaEIsS0FBSyxDQUFDZ0IsZUFKZjtBQUtSQyxtQkFBVyxFQUFFakIsS0FBSyxDQUFDaUIsV0FMWDtBQU1STyxvQkFBWSxFQUFFeEIsS0FBSyxDQUFDd0IsWUFOWjtBQU9SSSxvQkFBWSxFQUFFNUIsS0FBSyxDQUFDNEIsWUFQWjtBQVFSWSxvQkFBWSxFQUFFeEMsS0FBSyxDQUFDd0MsWUFSWjtBQVNSVSxzQkFBYyxFQUFFbEQsS0FBSyxDQUFDa0QsY0FUZDtBQVVSUixnQkFBUSxFQUFFQSxRQVZGO0FBV1JKLGVBQU8sRUFBRUE7QUFYRCxPQUxaO0FBa0JFLHNCQUFnQixFQUFFc0MsZ0JBbEJwQjtBQW1CRSxzQkFBZ0IsRUFBRU0sZ0JBbkJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BcUJHbkYsU0FyQkgsQ0FERDtBQUFBLEdBREgsQ0FERixDQURGO0FBK0JELENBekVEOztHQUFNMEQsWTtVQUdZMUUsUzs7O0tBSFowRSxZO0FBMkVTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLjRmZjVmNzZjOTgzOThlYmNmNGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0b1NpemVyIH0gZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkXCI7XHJcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgfSBmcm9tIFwicmVhY3Qtd2luZG93XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICB9LFxyXG4gIHJvd09kZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjFcIixcclxuICB9LFxyXG4gIHJvd0V2ZW46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGYwXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpbmRleCwgc3R5bGUsIGRhdGEgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBnZXRFbXBsb3llZU5hbWVCeUlkID0gKGRlcHRMaXN0LCBlbXBsb3llZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSBlbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgIGxldCBkZXB0ID0gZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PT0gZW1wbG95ZWUuZGVwdElkKTtcclxuICAgICAgaWYgKGRlcHQpIHtcclxuICAgICAgICByZXR1cm4gZGVwdC5uYW1lICsgXCIgLSBcIiArIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3ROYW1lQnlJZCA9IChwcm9kdWN0VHlwZUxpc3QsIHByb2R1Y3RMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBsZXQgcHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PT0gcHJvZHVjdC5wcm9kdWN0VHlwZUlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChwcm9kdWN0VHlwZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0VHlwZS5uYW1lICsgXCIgLSBcIiArIHByb2R1Y3QubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0R29sZFR5cGVOYW1lQnlJZCA9IChnb2xkVHlwZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFR5cGUgPSBnb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0R29sZFVuaXROYW1lQnlJZCA9IChnb2xkVW5pdExpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFVuaXQgPSBnb2xkVW5pdExpc3QuZ29sZFVuaXRzLmZpbmQoXHJcbiAgICAgIChnb2xkVW5pdCkgPT4gZ29sZFVuaXQuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGdvbGRVbml0KSB7XHJcbiAgICAgIHJldHVybiBnb2xkVW5pdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0SW5wdXREYXRlID0gKGlucHV0RGF0ZSkgPT4ge1xyXG4gICAgaWYgKCFpbnB1dERhdGUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0KERhdGUucGFyc2UoaW5wdXREYXRlKSwgXCJkZC9NTS95eXl5XCIsIHtcclxuICAgICAgbG9jYWxlOiBsb2NhbGVNYXBbXCJ2aVwiXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIGRhdGEuY2xhc3Nlcy5saXN0SXRlbSxcclxuICAgICAgICBpbmRleCAlIDIgPT09IDAgPyBkYXRhLmNsYXNzZXMucm93RXZlbiA6IGRhdGEuY2xhc3Nlcy5yb3dPZGRcclxuICAgICAgKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgfX1cclxuICAgICAga2V5PXtpbmRleH1cclxuICAgID5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGRhdGEucHVyY2hhc2VFZGl0KGV2ZW50LCBkYXRhLnB1cmNoYXNlc1tpbmRleF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLm5hbWV9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRFbXBsb3llZU5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmRlcHRMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLmVtcGxveWVlTGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmVtcGxveWVlSWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2dldFByb2R1Y3ROYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHJvZHVjdExpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHVyY2hhc2VzW2luZGV4XS5wcm9kdWN0SWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2dldEdvbGRUeXBlTmFtZUJ5SWQoXHJcbiAgICAgICAgICAgIGRhdGEuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLnB1cmNoYXNlc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEucHVyY2hhc2VzW2luZGV4XS53ZWlnaHR9IC8+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLm5hbWV9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRHb2xkVW5pdE5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmdvbGRVbml0TGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnB1cmNoYXNlc1tpbmRleF0ucXVhbnRpdHl9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtmb3JtYXRJbnB1dERhdGUoZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmlucHV0RGF0ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGVcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkYXRhLnB1cmNoYXNlRGVsZXRlKGV2ZW50LCBkYXRhLnB1cmNoYXNlc1tpbmRleF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgKTtcclxufVxyXG5cclxucmVuZGVyUm93LnByb3BUeXBlcyA9IHtcclxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgZGF0YTogUHJvcFR5cGVzLmFueSxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBQdXJjaGFzZUxpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBQQURESU5HX1NJWkUgPSAxMDtcclxuICBjb25zdCBJVEVNX1NJWkUgPSAyMDtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25XaGVlbCA9ICh7IGRlbHRhWSB9KSA9PiB7XHJcbiAgICAvLyBZb3VyIGhhbmRsZXIgZ29lcyBoZXJlIC4uLlxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBoYW5kbGVPbldoZWVsKClcIixcclxuICAgICAgZGVsdGFZXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IGlubmVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKCh7IHN0eWxlLCAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICB0b3A6IGAke3BhcnNlRmxvYXQoc3R5bGUudG9wKSArIFBBRERJTkdfU0laRX1weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCkgKyBQQURESU5HX1NJWkUgKiAyfXB4YCxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3Qgb3V0ZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBvbldoZWVsPXtoYW5kbGVPbldoZWVsfSB7Li4ucHJvcHN9IC8+O1xyXG4gIH0pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXV0b1NpemVyPlxyXG4gICAgICAgIHsocHJvcHNBdXRvU2l6ZXIpID0+IChcclxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XHJcbiAgICAgICAgICAgIHdpZHRoPXtwcm9wc0F1dG9TaXplci53aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtwcm9wc0F1dG9TaXplci5oZWlnaHR9XHJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtJVEVNX1NJWkV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvcHMucHVyY2hhc2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgaXRlbURhdGE9e3tcclxuICAgICAgICAgICAgICBwdXJjaGFzZXM6IHByb3BzLnB1cmNoYXNlcyxcclxuICAgICAgICAgICAgICBkZXB0TGlzdDogcHJvcHMuZGVwdExpc3QsXHJcbiAgICAgICAgICAgICAgZW1wbG95ZWVMaXN0OiBwcm9wcy5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0OiBwcm9wcy5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdExpc3Q6IHByb3BzLnByb2R1Y3RMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRUeXBlTGlzdDogcHJvcHMuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRVbml0TGlzdDogcHJvcHMuZ29sZFVuaXRMaXN0LFxyXG4gICAgICAgICAgICAgIHB1cmNoYXNlRWRpdDogcHJvcHMucHVyY2hhc2VFZGl0LFxyXG4gICAgICAgICAgICAgIHB1cmNoYXNlRGVsZXRlOiBwcm9wcy5wdXJjaGFzZURlbGV0ZSxcclxuICAgICAgICAgICAgICBpc01vYmlsZTogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW5uZXJFbGVtZW50VHlwZT17aW5uZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZT17b3V0ZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3JlbmRlclJvd31cclxuICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0F1dG9TaXplcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=