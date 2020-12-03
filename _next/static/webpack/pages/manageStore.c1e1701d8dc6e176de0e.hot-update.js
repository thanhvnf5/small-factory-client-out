webpackHotUpdate_N_E("pages/manageStore",{

/***/ "./src/components/Sell/SellList.js":
/*!*****************************************!*\
  !*** ./src/components/Sell/SellList.js ***!
  \*****************************************/
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





var _s = $RefreshSig$();

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

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(sellDate), "dd/MM/yyyy", {
      locale: localeMap["vi"]
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_12__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.sells[index].code
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getEmployeeNameById(data.deptList, data.employeeList, data.sells[index].sellrId)
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.sell[index].weightLyTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.sell[index].quantityTotal
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: formatSellDate(data.sells[index].sellDate)
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.sells[index].note
  }));
}

renderRow.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};
/************************************************** Constructor */

var SellList = function SellList(props) {
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
    }, rest));
  }); // eslint-disable-next-line react/display-name

  var outerElementType = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function (props, ref) {
    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      onWheel: handleOnWheel
    }, props));
  });
  /************************************************** render */

  return __jsx("div", {
    className: classes.root
  }, __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_10__["AutoSizer"], null, function (propsAutoSizer) {
    return __jsx(react_window__WEBPACK_IMPORTED_MODULE_11__["FixedSizeList"], {
      width: propsAutoSizer.width,
      height: propsAutoSizer.height,
      itemSize: ITEM_SIZE,
      itemCount: props.sells.length,
      itemData: {
        sells: props.sells,
        deptList: props.deptList,
        employeeList: props.employeeList,
        productTypeList: props.productTypeList,
        productList: props.productList,
        goldTypeList: props.goldTypeList,
        goldUnitList: props.goldUnitList,
        sellEdit: props.sellEdit,
        sellDelete: props.sellDelete,
        isMobile: isMobile,
        classes: classes
      },
      innerElementType: innerElementType,
      outerElementType: outerElementType
    }, renderRow);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsbC9TZWxsTGlzdC5qcyJdLCJuYW1lcyI6WyJsb2NhbGVNYXAiLCJlbiIsImVuTG9jYWxlIiwidmkiLCJ2aUxvY2FsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImxpc3RJdGVtIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInJvd09kZCIsInJvd0V2ZW4iLCJyZW5kZXJSb3ciLCJwcm9wcyIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiZ2V0RW1wbG95ZWVOYW1lQnlJZCIsImRlcHRMaXN0IiwiZW1wbG95ZWVMaXN0IiwiaWQiLCJlbXBsb3llZSIsImVtcGxveWVlcyIsImZpbmQiLCJuYW1lIiwiZ2V0RW1wbG95ZWVOYW1lQnlJZDExMSIsImRlcHQiLCJkZXB0cyIsImRlcHRJZCIsImdldFByb2R1Y3ROYW1lQnlJZCIsInByb2R1Y3RUeXBlTGlzdCIsInByb2R1Y3RMaXN0IiwicHJvZHVjdCIsInByb2R1Y3RzIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0VHlwZXMiLCJwcm9kdWN0VHlwZUlkIiwiZ2V0R29sZFR5cGVOYW1lQnlJZCIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlIiwiZ29sZFR5cGVzIiwiZ2V0R29sZFVuaXROYW1lQnlJZCIsImdvbGRVbml0TGlzdCIsImdvbGRVbml0IiwiZ29sZFVuaXRzIiwiZm9ybWF0U2VsbERhdGUiLCJzZWxsRGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJsb2NhbGUiLCJjbHN4IiwiY2xhc3NlcyIsInNlbGxzIiwiY29kZSIsImlzTW9iaWxlIiwic2VsbHJJZCIsInNlbGwiLCJ3ZWlnaHRMeVRvdGFsIiwicXVhbnRpdHlUb3RhbCIsIm5vdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYW55IiwiU2VsbExpc3QiLCJQQURESU5HX1NJWkUiLCJJVEVNX1NJWkUiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwiaGFuZGxlT25XaGVlbCIsImRlbHRhWSIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvY2FsZVN0cmluZyIsImlubmVyRWxlbWVudFR5cGUiLCJmb3J3YXJkUmVmIiwicmVmIiwicmVzdCIsInRvcCIsInBhcnNlRmxvYXQiLCJvdXRlckVsZW1lbnRUeXBlIiwicHJvcHNBdXRvU2l6ZXIiLCJsZW5ndGgiLCJzZWxsRWRpdCIsInNlbGxEZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLElBQUUsRUFBRUMsOERBRFk7QUFFaEJDLElBQUUsRUFBRUMsMkRBQU9BO0FBRkssQ0FBbEI7QUFLQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsTUFESDtBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxxQkFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFIdEMsS0FEaUM7QUFNdkNDLFlBQVEsRUFBRTtBQUNSQyxhQUFPLEVBQUUsTUFERDtBQUVSQyxnQkFBVSxFQUFFLFFBRko7QUFHUkMsb0JBQWMsRUFBRTtBQUhSLEtBTjZCO0FBV3ZDQyxVQUFNLEVBQUU7QUFDTlIscUJBQWUsRUFBRTtB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O0FBSUE7O0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRXNDLE9BQU8sQ0FBQ3BEO0FBQXhCLEtBQ0UsTUFBQyw0REFBRCxRQUNHLFVBQUM2RixjQUFEO0FBQUEsV0FDQyxNQUFDLDJEQUFEO0FBQ0UsV0FBSyxFQUFFQSxjQUFjLENBQUM1RixLQUR4QjtBQUVFLFlBQU0sRUFBRTRGLGNBQWMsQ0FBQzNGLE1BRnpCO0FBR0UsY0FBUSxFQUFFbUUsU0FIWjtBQUlFLGVBQVMsRUFBRXZELEtBQUssQ0FBQ3VDLEtBQU4sQ0FBWXlDLE1BSnpCO0FBS0UsY0FBUSxFQUFFO0FBQ1J6QyxhQUFLLEVBQUV2QyxLQUFLLENBQUN1QyxLQURMO0FBRVJsQyxnQkFBUSxFQUFFTCxLQUFLLENBQUNLLFFBRlI7QUFHUkMsb0JBQVksRUFBRU4sS0FBSyxDQUFDTSxZQUhaO0FBSVJXLHVCQUFlLEVBQUVqQixLQUFLLENBQUNpQixlQUpmO0FBS1JDLG1CQUFXLEVBQUVsQixLQUFLLENBQUNrQixXQUxYO0FBTVJPLG9CQUFZLEVBQUV6QixLQUFLLENBQUN5QixZQU5aO0FBT1JJLG9CQUFZLEVBQUU3QixLQUFLLENBQUM2QixZQVBaO0FBUVJvRCxnQkFBUSxFQUFFakYsS0FBSyxDQUFDaUYsUUFSUjtBQVNSQyxrQkFBVSxFQUFFbEYsS0FBSyxDQUFDa0YsVUFUVjtBQVVSekMsZ0JBQVEsRUFBRUEsUUFWRjtBQVdSSCxlQUFPLEVBQUVBO0FBWEQsT0FMWjtBQWtCRSxzQkFBZ0IsRUFBRWtDLGdCQWxCcEI7QUFtQkUsc0JBQWdCLEVBQUVNO0FBbkJwQixPQXFCRy9FLFNBckJILENBREQ7QUFBQSxHQURILENBREYsQ0FERjtBQStCRCxDQXpFRDs7R0FBTXNELFE7VUFHWXRFLFM7OztLQUhac0UsUTtBQTJFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFuYWdlU3RvcmUuYzFlMTcwMWQ4ZGM2ZTE3NmRlMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IHtcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRvU2l6ZXIgfSBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWRcIjtcclxuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCB9IGZyb20gXCJyZWFjdC13aW5kb3dcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgZW5Mb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xyXG5pbXBvcnQgdmlMb2NhbCBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL3ZpXCI7XHJcblxyXG5jb25zdCBsb2NhbGVNYXAgPSB7XHJcbiAgZW46IGVuTG9jYWxlLFxyXG4gIHZpOiB2aUxvY2FsLFxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gIH0sXHJcbiAgcm93T2RkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmMVwiLFxyXG4gIH0sXHJcbiAgcm93RXZlbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjBcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJSb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGluZGV4LCBzdHlsZSwgZGF0YSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGdldEVtcGxveWVlTmFtZUJ5SWQgPSAoZGVwdExpc3QsIGVtcGxveWVlTGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBlbXBsb3llZSA9IGVtcGxveWVlTGlzdC5lbXBsb3llZXMuZmluZChcclxuICAgICAgKGVtcGxveWVlKSA9PiBlbXBsb3llZS5pZCA9PT0gaWRcclxuICAgICk7XHJcbiAgICBpZiAoZW1wbG95ZWUpIHtcclxuICAgICAgcmV0dXJuIGVtcGxveWVlLm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRFbXBsb3llZU5hbWVCeUlkMTExID0gKGRlcHRMaXN0LCBlbXBsb3llZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSBlbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgIGxldCBkZXB0ID0gZGVwdExpc3QuZGVwdHMuZmluZCgoZGVwdCkgPT4gZGVwdC5pZCA9PT0gZW1wbG95ZWUuZGVwdElkKTtcclxuICAgICAgaWYgKGRlcHQpIHtcclxuICAgICAgICByZXR1cm4gZGVwdC5uYW1lICsgXCIgLSBcIiArIGVtcGxveWVlLm5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3ROYW1lQnlJZCA9IChwcm9kdWN0VHlwZUxpc3QsIHByb2R1Y3RMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0TGlzdC5wcm9kdWN0cy5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBsZXQgcHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZUxpc3QucHJvZHVjdFR5cGVzLmZpbmQoXHJcbiAgICAgICAgKHByb2R1Y3RUeXBlKSA9PiBwcm9kdWN0VHlwZS5pZCA9PT0gcHJvZHVjdC5wcm9kdWN0VHlwZUlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChwcm9kdWN0VHlwZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0VHlwZS5uYW1lICsgXCIgLSBcIiArIHByb2R1Y3QubmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0R29sZFR5cGVOYW1lQnlJZCA9IChnb2xkVHlwZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFR5cGUgPSBnb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbmQoXHJcbiAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0R29sZFVuaXROYW1lQnlJZCA9IChnb2xkVW5pdExpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFVuaXQgPSBnb2xkVW5pdExpc3QuZ29sZFVuaXRzLmZpbmQoXHJcbiAgICAgIChnb2xkVW5pdCkgPT4gZ29sZFVuaXQuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGdvbGRVbml0KSB7XHJcbiAgICAgIHJldHVybiBnb2xkVW5pdC5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0U2VsbERhdGUgPSAoc2VsbERhdGUpID0+IHtcclxuICAgIGlmICghc2VsbERhdGUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKHNlbGxEYXRlKSwgXCJkZC9NTS95eXl5XCIsIHtcclxuICAgICAgbG9jYWxlOiBsb2NhbGVNYXBbXCJ2aVwiXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIGRhdGEuY2xhc3Nlcy5saXN0SXRlbSxcclxuICAgICAgICBpbmRleCAlIDIgPT09IDAgPyBkYXRhLmNsYXNzZXMucm93RXZlbiA6IGRhdGEuY2xhc3Nlcy5yb3dPZGRcclxuICAgICAgKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgfX1cclxuICAgICAga2V5PXtpbmRleH1cclxuICAgID5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnNlbGxzW2luZGV4XS5jb2RlfSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Z2V0RW1wbG95ZWVOYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5kZXB0TGlzdCxcclxuICAgICAgICAgICAgZGF0YS5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgIGRhdGEuc2VsbHNbaW5kZXhdLnNlbGxySWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnNlbGxbaW5kZXhdLndlaWdodEx5VG90YWx9IC8+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5zZWxsW2luZGV4XS5xdWFudGl0eVRvdGFsfSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtmb3JtYXRTZWxsRGF0ZShkYXRhLnNlbGxzW2luZGV4XS5zZWxsRGF0ZSl9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5zZWxsc1tpbmRleF0ubm90ZX0gLz59XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbnJlbmRlclJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgU2VsbExpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBQQURESU5HX1NJWkUgPSAxMDtcclxuICBjb25zdCBJVEVNX1NJWkUgPSAyMDtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25XaGVlbCA9ICh7IGRlbHRhWSB9KSA9PiB7XHJcbiAgICAvLyBZb3VyIGhhbmRsZXIgZ29lcyBoZXJlIC4uLlxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBoYW5kbGVPbldoZWVsKClcIixcclxuICAgICAgZGVsdGFZXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IGlubmVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKCh7IHN0eWxlLCAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICB0b3A6IGAke3BhcnNlRmxvYXQoc3R5bGUudG9wKSArIFBBRERJTkdfU0laRX1weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCkgKyBQQURESU5HX1NJWkUgKiAyfXB4YCxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3Qgb3V0ZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBvbldoZWVsPXtoYW5kbGVPbldoZWVsfSB7Li4ucHJvcHN9IC8+O1xyXG4gIH0pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXV0b1NpemVyPlxyXG4gICAgICAgIHsocHJvcHNBdXRvU2l6ZXIpID0+IChcclxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XHJcbiAgICAgICAgICAgIHdpZHRoPXtwcm9wc0F1dG9TaXplci53aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtwcm9wc0F1dG9TaXplci5oZWlnaHR9XHJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtJVEVNX1NJWkV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvcHMuc2VsbHMubGVuZ3RofVxyXG4gICAgICAgICAgICBpdGVtRGF0YT17e1xyXG4gICAgICAgICAgICAgIHNlbGxzOiBwcm9wcy5zZWxscyxcclxuICAgICAgICAgICAgICBkZXB0TGlzdDogcHJvcHMuZGVwdExpc3QsXHJcbiAgICAgICAgICAgICAgZW1wbG95ZWVMaXN0OiBwcm9wcy5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0OiBwcm9wcy5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdExpc3Q6IHByb3BzLnByb2R1Y3RMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRUeXBlTGlzdDogcHJvcHMuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRVbml0TGlzdDogcHJvcHMuZ29sZFVuaXRMaXN0LFxyXG4gICAgICAgICAgICAgIHNlbGxFZGl0OiBwcm9wcy5zZWxsRWRpdCxcclxuICAgICAgICAgICAgICBzZWxsRGVsZXRlOiBwcm9wcy5zZWxsRGVsZXRlLFxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlPXtpbm5lckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlPXtvdXRlckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVuZGVyUm93fVxyXG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQXV0b1NpemVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGxMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9