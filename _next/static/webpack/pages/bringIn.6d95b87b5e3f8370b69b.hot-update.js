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
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldUnitNameById(data.goldUnitList, data.purchases[index].goldUnitId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].quantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: formatInputDate(data.purchases[index].inputDate),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
        lineNumber: 214,
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
        lineNumber: 227,
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
      lineNumber: 232,
      columnNumber: 5
    }
  }, __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_10__["AutoSizer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
        lineNumber: 235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0LmpzIl0sIm5hbWVzIjpbImxvY2FsZU1hcCIsImVuIiwiZW5Mb2NhbGUiLCJ2aSIsInZpTG9jYWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibGlzdEl0ZW0iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwicm93T2RkIiwicm93RXZlbiIsInJlbmRlclJvdyIsInByb3BzIiwiaW5kZXgiLCJzdHlsZSIsImRhdGEiLCJnZXRFbXBsb3llZU5hbWVCeUlkIiwiZGVwdExpc3QiLCJlbXBsb3llZUxpc3QiLCJpZCIsImVtcGxveWVlIiwiZW1wbG95ZWVzIiwiZmluZCIsImRlcHQiLCJkZXB0cyIsImRlcHRJZCIsIm5hbWUiLCJnZXRQcm9kdWN0TmFtZUJ5SWQiLCJwcm9kdWN0VHlwZUxpc3QiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInByb2R1Y3RUeXBlIiwicHJvZHVjdFR5cGVzIiwicHJvZHVjdFR5cGVJZCIsImdldEdvbGRUeXBlTmFtZUJ5SWQiLCJnb2xkVHlwZUxpc3QiLCJnb2xkVHlwZSIsImdvbGRUeXBlcyIsImdldEdvbGRVbml0TmFtZUJ5SWQiLCJnb2xkVW5pdExpc3QiLCJnb2xkVW5pdCIsImdvbGRVbml0cyIsImZvcm1hdElucHV0RGF0ZSIsImlucHV0RGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJwYXJzZSIsImxvY2FsZSIsImNsc3giLCJjbGFzc2VzIiwiZXZlbnQiLCJwdXJjaGFzZUVkaXQiLCJwdXJjaGFzZXMiLCJpc01vYmlsZSIsImVtcGxveWVlSWQiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwid2VpZ2h0IiwiZ29sZFVuaXRJZCIsInF1YW50aXR5IiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZURlbGV0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJhbnkiLCJQdXJjaGFzZUxpc3QiLCJQQURESU5HX1NJWkUiLCJJVEVNX1NJWkUiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwiaGFuZGxlT25XaGVlbCIsImRlbHRhWSIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvY2FsZVN0cmluZyIsImlubmVyRWxlbWVudFR5cGUiLCJmb3J3YXJkUmVmIiwicmVmIiwicmVzdCIsInRvcCIsInBhcnNlRmxvYXQiLCJvdXRlckVsZW1lbnRUeXBlIiwicHJvcHNBdXRvU2l6ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFQyw4REFEWTtBQUVoQkMsSUFBRSxFQUFFQywyREFBT0E7QUFGSyxDQUFsQjtBQUtBOztBQUNBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRSxNQURIO0FBRUpDLFlBQU0sRUFBRSxNQUZKO0FBR0pDLHFCQUFlLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUh0QyxLQURpQztBQU12Q0MsWUFBUSxFQUFFO0FBQ1JDLGFBQU8sRUFBRSxNQUREO0FBRVJDLGdCQUFVLEVBQUUsUUFGSjtBQUdSQyxvQkFBYyxFQUFFO0FBSFIs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UlUsdUJBQWUsRUFBRWhCLEtBQUssQ0FBQ2dCLGVBSmY7QUFLUkMsbUJBQVcsRUFBRWpCLEtBQUssQ0FBQ2lCLFdBTFg7QUFNUk8sb0JBQVksRUFBRXhCLEtBQUssQ0FBQ3dCLFlBTlo7QUFPUkksb0JBQVksRUFBRTVCLEtBQUssQ0FBQzRCLFlBUFo7QUFRUlksb0JBQVksRUFBRXhDLEtBQUssQ0FBQ3dDLFlBUlo7QUFTUlUsc0JBQWMsRUFBRWxELEtBQUssQ0FBQ2tELGNBVGQ7QUFVUlIsZ0JBQVEsRUFBRUEsUUFWRjtBQVdSSixlQUFPLEVBQUVBO0FBWEQsT0FMWjtBQWtCRSxzQkFBZ0IsRUFBRXNDLGdCQWxCcEI7QUFtQkUsc0JBQWdCLEVBQUVNLGdCQW5CcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXFCR25GLFNBckJILENBREQ7QUFBQSxHQURILENBREYsQ0FERjtBQStCRCxDQXpFRDs7R0FBTTBELFk7VUFHWTFFLFM7OztLQUhaMEUsWTtBQTJFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi42ZDk1Yjg3YjVlM2Y4MzcwYjY5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dG9TaXplciB9IGZyb20gXCJyZWFjdC12aXJ0dWFsaXplZFwiO1xyXG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSBcInJlYWN0LXdpbmRvd1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBlbkxvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XHJcbmltcG9ydCB2aUxvY2FsIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvdmlcIjtcclxuXHJcbmNvbnN0IGxvY2FsZU1hcCA9IHtcclxuICBlbjogZW5Mb2NhbGUsXHJcbiAgdmk6IHZpTG9jYWwsXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgfSxcclxuICByb3dPZGQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWYxXCIsXHJcbiAgfSxcclxuICByb3dFdmVuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmMFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHN0eWxlLCBkYXRhIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgZ2V0RW1wbG95ZWVOYW1lQnlJZCA9IChkZXB0TGlzdCwgZW1wbG95ZWVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGVtcGxveWVlID0gZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChlbXBsb3llZSkge1xyXG4gICAgICBsZXQgZGVwdCA9IGRlcHRMaXN0LmRlcHRzLmZpbmQoKGRlcHQpID0+IGRlcHQuaWQgPT09IGVtcGxveWVlLmRlcHRJZCk7XHJcbiAgICAgIGlmIChkZXB0KSB7XHJcbiAgICAgICAgcmV0dXJuIGRlcHQubmFtZSArIFwiIC0gXCIgKyBlbXBsb3llZS5uYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0TmFtZUJ5SWQgPSAocHJvZHVjdFR5cGVMaXN0LCBwcm9kdWN0TGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBwcm9kdWN0ID0gcHJvZHVjdExpc3QucHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgbGV0IHByb2R1Y3RUeXBlID0gcHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT09IHByb2R1Y3QucHJvZHVjdFR5cGVJZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocHJvZHVjdFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdFR5cGUubmFtZSArIFwiIC0gXCIgKyBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEdvbGRUeXBlTmFtZUJ5SWQgPSAoZ29sZFR5cGVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGdvbGRUeXBlID0gZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEdvbGRVbml0TmFtZUJ5SWQgPSAoZ29sZFVuaXRMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGdvbGRVbml0ID0gZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoZ29sZFVuaXQpID0+IGdvbGRVbml0LmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChnb2xkVW5pdCkge1xyXG4gICAgICByZXR1cm4gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdElucHV0RGF0ZSA9IChpbnB1dERhdGUpID0+IHtcclxuICAgIGlmICghaW5wdXREYXRlKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdChEYXRlLnBhcnNlKGlucHV0RGF0ZSksIFwiZGQvTU0veXl5eVwiLCB7XHJcbiAgICAgIGxvY2FsZTogbG9jYWxlTWFwW1widmlcIl0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RJdGVtXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBkYXRhLmNsYXNzZXMubGlzdEl0ZW0sXHJcbiAgICAgICAgaW5kZXggJSAyID09PSAwID8gZGF0YS5jbGFzc2VzLnJvd0V2ZW4gOiBkYXRhLmNsYXNzZXMucm93T2RkXHJcbiAgICAgICl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgIH19XHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXRcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkYXRhLnB1cmNoYXNlRWRpdChldmVudCwgZGF0YS5wdXJjaGFzZXNbaW5kZXhdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEucHVyY2hhc2VzW2luZGV4XS5uYW1lfSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Z2V0RW1wbG95ZWVOYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5kZXB0TGlzdCxcclxuICAgICAgICAgICAgZGF0YS5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHVyY2hhc2VzW2luZGV4XS5lbXBsb3llZUlkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRQcm9kdWN0TmFtZUJ5SWQoXHJcbiAgICAgICAgICAgIGRhdGEucHJvZHVjdFR5cGVMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLnByb2R1Y3RMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLnB1cmNoYXNlc1tpbmRleF0ucHJvZHVjdElkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRHb2xkVHlwZU5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmdvbGRUeXBlTGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmdvbGRUeXBlSWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnB1cmNoYXNlc1tpbmRleF0ud2VpZ2h0fSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Z2V0R29sZFVuaXROYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5nb2xkVW5pdExpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHVyY2hhc2VzW2luZGV4XS5nb2xkVW5pdElkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLnF1YW50aXR5fSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Zm9ybWF0SW5wdXREYXRlKGRhdGEucHVyY2hhc2VzW2luZGV4XS5pbnB1dERhdGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEucHVyY2hhc2VzW2luZGV4XS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgKX1cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZGF0YS5wdXJjaGFzZURlbGV0ZShldmVudCwgZGF0YS5wdXJjaGFzZXNbaW5kZXhdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbnJlbmRlclJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgUHVyY2hhc2VMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgUEFERElOR19TSVpFID0gMTA7XHJcbiAgY29uc3QgSVRFTV9TSVpFID0gMjA7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvKiBEZXRlY3QgbW9iaWxlIHZpZXcgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW9iaWxlVmlldyA9IC9hbmRyb2lkfHdlYm9zfGlwaG9uZXxpcGFkfGlwb2R8YmxhY2tiZXJyeXxpZW1vYmlsZXxvcGVyYSBtaW5pL2kudGVzdChcclxuICAgICAgYCR7d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKX1gXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2JpbGUoQm9vbGVhbihpc01vYmlsZVZpZXcpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uV2hlZWwgPSAoeyBkZWx0YVkgfSkgPT4ge1xyXG4gICAgLy8gWW91ciBoYW5kbGVyIGdvZXMgaGVyZSAuLi5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gaGFuZGxlT25XaGVlbCgpXCIsXHJcbiAgICAgIGRlbHRhWVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICBjb25zdCBpbm5lckVsZW1lbnRUeXBlID0gZm9yd2FyZFJlZigoeyBzdHlsZSwgLi4ucmVzdCB9LCByZWYpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgdG9wOiBgJHtwYXJzZUZsb2F0KHN0eWxlLnRvcCkgKyBQQURESU5HX1NJWkV9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7cGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpICsgUEFERElOR19TSVpFICogMn1weGAsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IG91dGVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiByZWY9e3JlZn0gb25XaGVlbD17aGFuZGxlT25XaGVlbH0gey4uLnByb3BzfSAvPjtcclxuICB9KTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEF1dG9TaXplcj5cclxuICAgICAgICB7KHByb3BzQXV0b1NpemVyKSA9PiAoXHJcbiAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxyXG4gICAgICAgICAgICB3aWR0aD17cHJvcHNBdXRvU2l6ZXIud2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17cHJvcHNBdXRvU2l6ZXIuaGVpZ2h0fVxyXG4gICAgICAgICAgICBpdGVtU2l6ZT17SVRFTV9TSVpFfVxyXG4gICAgICAgICAgICBpdGVtQ291bnQ9e3Byb3BzLnB1cmNoYXNlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhPXt7XHJcbiAgICAgICAgICAgICAgcHVyY2hhc2VzOiBwcm9wcy5wdXJjaGFzZXMsXHJcbiAgICAgICAgICAgICAgZGVwdExpc3Q6IHByb3BzLmRlcHRMaXN0LFxyXG4gICAgICAgICAgICAgIGVtcGxveWVlTGlzdDogcHJvcHMuZW1wbG95ZWVMaXN0LFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RUeXBlTGlzdDogcHJvcHMucHJvZHVjdFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RMaXN0OiBwcm9wcy5wcm9kdWN0TGlzdCxcclxuICAgICAgICAgICAgICBnb2xkVHlwZUxpc3Q6IHByb3BzLmdvbGRUeXBlTGlzdCxcclxuICAgICAgICAgICAgICBnb2xkVW5pdExpc3Q6IHByb3BzLmdvbGRVbml0TGlzdCxcclxuICAgICAgICAgICAgICBwdXJjaGFzZUVkaXQ6IHByb3BzLnB1cmNoYXNlRWRpdCxcclxuICAgICAgICAgICAgICBwdXJjaGFzZURlbGV0ZTogcHJvcHMucHVyY2hhc2VEZWxldGUsXHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlubmVyRWxlbWVudFR5cGU9e2lubmVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgIG91dGVyRWxlbWVudFR5cGU9e291dGVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtyZW5kZXJSb3d9XHJcbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9BdXRvU2l6ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9