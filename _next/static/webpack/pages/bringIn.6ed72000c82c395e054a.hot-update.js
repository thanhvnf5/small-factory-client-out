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
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getEmployeeNameById(data.deptList, data.employeeList, data.purchases[index].employeeId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getProductNameById(data.productTypeList, data.productList, data.purchases[index].productId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldTypeNameById(data.goldTypeList, data.purchases[index].goldTypeId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].weight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldUnitNameById(data.goldUnitList, data.purchases[index].goldUnitId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].quantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: formatInputDate(data.purchases[index].inputDate),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
        lineNumber: 205,
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
        lineNumber: 218,
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
      lineNumber: 223,
      columnNumber: 5
    }
  }, __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_10__["AutoSizer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
        lineNumber: 226,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0LmpzIl0sIm5hbWVzIjpbImxvY2FsZU1hcCIsImVuIiwiZW5Mb2NhbGUiLCJ2aSIsInZpTG9jYWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibGlzdEl0ZW0iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwicm93T2RkIiwicm93RXZlbiIsInJlbmRlclJvdyIsInByb3BzIiwiaW5kZXgiLCJzdHlsZSIsImRhdGEiLCJnZXRFbXBsb3llZU5hbWVCeUlkIiwiZGVwdExpc3QiLCJlbXBsb3llZUxpc3QiLCJpZCIsImVtcGxveWVlIiwiZW1wbG95ZWVzIiwiZmluZCIsImRlcHQiLCJkZXB0cyIsImRlcHRJZCIsIm5hbWUiLCJnZXRQcm9kdWN0TmFtZUJ5SWQiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInByb2R1Y3RUeXBlIiwicHJvZHVjdFR5cGVzIiwicHJvZHVjdFR5cGVJZCIsImdldEdvbGRUeXBlTmFtZUJ5SWQiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZSIsImdvbGRUeXBlcyIsImZvcm1hdElucHV0RGF0ZSIsImlucHV0RGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJwYXJzZSIsImxvY2FsZSIsImNsc3giLCJjbGFzc2VzIiwiZXZlbnQiLCJwdXJjaGFzZUVkaXQiLCJwdXJjaGFzZXMiLCJpc01vYmlsZSIsImVtcGxveWVlSWQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwid2VpZ2h0IiwiZ2V0R29sZFVuaXROYW1lQnlJZCIsImdvbGRVbml0TGlzdCIsImdvbGRVbml0SWQiLCJxdWFudGl0eSIsImRlc2NyaXB0aW9uIiwicHVyY2hhc2VEZWxldGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYW55IiwiUHVyY2hhc2VMaXN0IiwiUEFERElOR19TSVpFIiwiSVRFTV9TSVpFIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldElzTW9iaWxlIiwidXNlRWZmZWN0IiwiaXNNb2JpbGVWaWV3IiwidGVzdCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiQm9vbGVhbiIsImhhbmRsZU9uV2hlZWwiLCJkZWx0YVkiLCJjb25zb2xlIiwibG9nIiwidG9Mb2NhbGVTdHJpbmciLCJpbm5lckVsZW1lbnRUeXBlIiwiZm9yd2FyZFJlZiIsInJlZiIsInJlc3QiLCJ0b3AiLCJwYXJzZUZsb2F0Iiwib3V0ZXJFbGVtZW50VHlwZSIsInByb3BzQXV0b1NpemVyIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRUMsOERBRFk7QUFFaEJDLElBQUUsRUFBRUMsMkRBQU9BO0FBRkssQ0FBbEI7QUFLQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsTUFESDtBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxxQkFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFIdEMsS0FEaUM7QUFNdkNDLFlBQVEsRUFBRTtBQUNSQyxhQUFPLEVBQUUsTUFERDtBQUVSQyxnQkFBVSxFQUFFLFFBRko7QUFHUkMsb0JBQWMsRUFBRTtBQUhSLEtBTjZCO0FBV3ZDQyxVQUFNLEVBQUU7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QkFBYyxFQUFFaEQsS0FBSyxDQUFDZ0QsY0FUZDtBQVVSVixnQkFBUSxFQUFFQSxRQVZGO0FBV1JKLGVBQU8sRUFBRUE7QUFYRCxPQUxaO0FBa0JFLHNCQUFnQixFQUFFd0MsZ0JBbEJwQjtBQW1CRSxzQkFBZ0IsRUFBRU0sZ0JBbkJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BcUJHakYsU0FyQkgsQ0FERDtBQUFBLEdBREgsQ0FERixDQURGO0FBK0JELENBekVEOztHQUFNd0QsWTtVQUdZeEUsUzs7O0tBSFp3RSxZO0FBMkVTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLjZlZDcyMDAwYzgyYzM5NWUwNTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0b1NpemVyIH0gZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkXCI7XHJcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgfSBmcm9tIFwicmVhY3Qtd2luZG93XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICB9LFxyXG4gIHJvd09kZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjFcIixcclxuICB9LFxyXG4gIHJvd0V2ZW46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGYwXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpbmRleCwgc3R5bGUsIGRhdGEgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBnZXRFbXBsb3llZU5hbWVCeUlkID0gKGRlcHRMaXN0LCBlbXBsb3llZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSBlbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgIGxldCBkZXB0ID0gZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PT0gZW1wbG95ZWUuZGVwdElkKTtcclxuICAgICAgaWYgKGRlcHQpIHtcclxuICAgICAgICByZXR1cm4gZGVwdC5uYW1lICsgXCIgLSBcIiArIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3ROYW1lQnlJZCA9IChwcm9kdWN0VHlwZUxpc3QsIHByb2R1Y3RMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBsZXQgcHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PT0gcHJvZHVjdC5wcm9kdWN0VHlwZUlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChwcm9kdWN0VHlwZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0VHlwZS5uYW1lICsgXCIgLSBcIiArIHByb2R1Y3QubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0R29sZFR5cGVOYW1lQnlJZCA9IChnb2xkVHlwZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFR5cGUgPSBnb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0SW5wdXREYXRlID0gKGlucHV0RGF0ZSkgPT4ge1xyXG4gICAgaWYgKCFpbnB1dERhdGUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0KERhdGUucGFyc2UoaW5wdXREYXRlKSwgXCJkZC9NTS95eXl5XCIsIHtcclxuICAgICAgbG9jYWxlOiBsb2NhbGVNYXBbXCJ2aVwiXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIGRhdGEuY2xhc3Nlcy5saXN0SXRlbSxcclxuICAgICAgICBpbmRleCAlIDIgPT09IDAgPyBkYXRhLmNsYXNzZXMucm93RXZlbiA6IGRhdGEuY2xhc3Nlcy5yb3dPZGRcclxuICAgICAgKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgfX1cclxuICAgICAga2V5PXtpbmRleH1cclxuICAgID5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGRhdGEucHVyY2hhc2VFZGl0KGV2ZW50LCBkYXRhLnB1cmNoYXNlc1tpbmRleF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLm5hbWV9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRFbXBsb3llZU5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmRlcHRMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLmVtcGxveWVlTGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmVtcGxveWVlSWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2dldFByb2R1Y3ROYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHJvZHVjdExpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHVyY2hhc2VzW2luZGV4XS5wcm9kdWN0SWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2dldEdvbGRUeXBlTmFtZUJ5SWQoXHJcbiAgICAgICAgICAgIGRhdGEuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLnB1cmNoYXNlc1tpbmRleF0uZ29sZFR5cGVJZFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEucHVyY2hhc2VzW2luZGV4XS53ZWlnaHR9IC8+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLm5hbWV9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRHb2xkVW5pdE5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmdvbGRVbml0TGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmdvbGRVbml0SWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnB1cmNoYXNlc1tpbmRleF0ucXVhbnRpdHl9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtmb3JtYXRJbnB1dERhdGUoZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmlucHV0RGF0ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGVcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkYXRhLnB1cmNoYXNlRGVsZXRlKGV2ZW50LCBkYXRhLnB1cmNoYXNlc1tpbmRleF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgKTtcclxufVxyXG5cclxucmVuZGVyUm93LnByb3BUeXBlcyA9IHtcclxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgZGF0YTogUHJvcFR5cGVzLmFueSxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBQdXJjaGFzZUxpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBQQURESU5HX1NJWkUgPSAxMDtcclxuICBjb25zdCBJVEVNX1NJWkUgPSAyMDtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25XaGVlbCA9ICh7IGRlbHRhWSB9KSA9PiB7XHJcbiAgICAvLyBZb3VyIGhhbmRsZXIgZ29lcyBoZXJlIC4uLlxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBoYW5kbGVPbldoZWVsKClcIixcclxuICAgICAgZGVsdGFZXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IGlubmVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKCh7IHN0eWxlLCAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICB0b3A6IGAke3BhcnNlRmxvYXQoc3R5bGUudG9wKSArIFBBRERJTkdfU0laRX1weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCkgKyBQQURESU5HX1NJWkUgKiAyfXB4YCxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3Qgb3V0ZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBvbldoZWVsPXtoYW5kbGVPbldoZWVsfSB7Li4ucHJvcHN9IC8+O1xyXG4gIH0pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXV0b1NpemVyPlxyXG4gICAgICAgIHsocHJvcHNBdXRvU2l6ZXIpID0+IChcclxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XHJcbiAgICAgICAgICAgIHdpZHRoPXtwcm9wc0F1dG9TaXplci53aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtwcm9wc0F1dG9TaXplci5oZWlnaHR9XHJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtJVEVNX1NJWkV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvcHMucHVyY2hhc2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgaXRlbURhdGE9e3tcclxuICAgICAgICAgICAgICBwdXJjaGFzZXM6IHByb3BzLnB1cmNoYXNlcyxcclxuICAgICAgICAgICAgICBkZXB0TGlzdDogcHJvcHMuZGVwdExpc3QsXHJcbiAgICAgICAgICAgICAgZW1wbG95ZWVMaXN0OiBwcm9wcy5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0OiBwcm9wcy5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdExpc3Q6IHByb3BzLnByb2R1Y3RMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRUeXBlTGlzdDogcHJvcHMuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRVbml0TGlzdDogcHJvcHMuZ29sZFVuaXRMaXN0LFxyXG4gICAgICAgICAgICAgIHB1cmNoYXNlRWRpdDogcHJvcHMucHVyY2hhc2VFZGl0LFxyXG4gICAgICAgICAgICAgIHB1cmNoYXNlRGVsZXRlOiBwcm9wcy5wdXJjaGFzZURlbGV0ZSxcclxuICAgICAgICAgICAgICBpc01vYmlsZTogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW5uZXJFbGVtZW50VHlwZT17aW5uZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZT17b3V0ZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3JlbmRlclJvd31cclxuICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0F1dG9TaXplcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=