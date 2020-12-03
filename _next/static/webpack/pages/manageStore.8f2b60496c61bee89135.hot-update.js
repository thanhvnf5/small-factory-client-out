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
    primary: data.sells[index].weightLyTotal
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.sells[index].quantityTotal
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsbC9TZWxsTGlzdC5qcyJdLCJuYW1lcyI6WyJsb2NhbGVNYXAiLCJlbiIsImVuTG9jYWxlIiwidmkiLCJ2aUxvY2FsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImxpc3RJdGVtIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInJvd09kZCIsInJvd0V2ZW4iLCJyZW5kZXJSb3ciLCJwcm9wcyIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiZ2V0RW1wbG95ZWVOYW1lQnlJZCIsImRlcHRMaXN0IiwiZW1wbG95ZWVMaXN0IiwiaWQiLCJlbXBsb3llZSIsImVtcGxveWVlcyIsImZpbmQiLCJuYW1lIiwiZ2V0RW1wbG95ZWVOYW1lQnlJZDExMSIsImRlcHQiLCJkZXB0cyIsImRlcHRJZCIsImdldFByb2R1Y3ROYW1lQnlJZCIsInByb2R1Y3RUeXBlTGlzdCIsInByb2R1Y3RMaXN0IiwicHJvZHVjdCIsInByb2R1Y3RzIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0VHlwZXMiLCJwcm9kdWN0VHlwZUlkIiwiZ2V0R29sZFR5cGVOYW1lQnlJZCIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlIiwiZ29sZFR5cGVzIiwiZ2V0R29sZFVuaXROYW1lQnlJZCIsImdvbGRVbml0TGlzdCIsImdvbGRVbml0IiwiZ29sZFVuaXRzIiwiZm9ybWF0U2VsbERhdGUiLCJzZWxsRGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJsb2NhbGUiLCJjbHN4IiwiY2xhc3NlcyIsInNlbGxzIiwiY29kZSIsImlzTW9iaWxlIiwic2VsbHJJZCIsIndlaWdodEx5VG90YWwiLCJxdWFudGl0eVRvdGFsIiwibm90ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJhbnkiLCJTZWxsTGlzdCIsIlBBRERJTkdfU0laRSIsIklURU1fU0laRSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRJc01vYmlsZSIsInVzZUVmZmVjdCIsImlzTW9iaWxlVmlldyIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIkJvb2xlYW4iLCJoYW5kbGVPbldoZWVsIiwiZGVsdGFZIiwiY29uc29sZSIsImxvZyIsInRvTG9jYWxlU3RyaW5nIiwiaW5uZXJFbGVtZW50VHlwZSIsImZvcndhcmRSZWYiLCJyZWYiLCJyZXN0IiwidG9wIiwicGFyc2VGbG9hdCIsIm91dGVyRWxlbWVudFR5cGUiLCJwcm9wc0F1dG9TaXplciIsImxlbmd0aCIsInNlbGxFZGl0Iiwic2VsbERlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFQyw4REFEWTtBQUVoQkMsSUFBRSxFQUFFQywyREFBT0E7QUFGSyxDQUFsQjtBQUtBOztBQUNBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRSxNQURIO0FBRUpDLFlBQU0sRUFBRSxNQUZKO0FBR0pDLHFCQUFlLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUh0QyxLQURpQztBQU12Q0MsWUFBUSxFQUFFO0FBQ1JDLGFBQU8sRUFBRSxNQUREO0FBRVJDLGdCQUFVLEVBQUUsUUFGSjtBQUdSQyxvQkFBYyxFQUFFO0FBSFIsS0FONkI7QUFXdkNDLFVBQU0sRUFBRTtBQUNOUixxQkFBZSxFQUFFO0FBRFgsS0FY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QUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVzQyxPQUFPLENBQUNwRDtBQUF4QixLQUNFLE1BQUMsNERBQUQsUUFDRyxVQUFDNEYsY0FBRDtBQUFBLFdBQ0MsTUFBQywyREFBRDtBQUNFLFdBQUssRUFBRUEsY0FBYyxDQUFDM0YsS0FEeEI7QUFFRSxZQUFNLEVBQUUyRixjQUFjLENBQUMxRixNQUZ6QjtBQUdFLGNBQVEsRUFBRWtFLFNBSFo7QUFJRSxlQUFTLEVBQUV0RCxLQUFLLENBQUN1QyxLQUFOLENBQVl3QyxNQUp6QjtBQUtFLGNBQVEsRUFBRTtBQUNSeEMsYUFBSyxFQUFFdkMsS0FBSyxDQUFDdUMsS0FETDtBQUVSbEMsZ0JBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQUZSO0FBR1JDLG9CQUFZLEVBQUVOLEtBQUssQ0FBQ00sWUFIWjtBQUlSVyx1QkFBZSxFQUFFakIsS0FBSyxDQUFDaUIsZUFKZjtBQUtSQyxtQkFBVyxFQUFFbEIsS0FBSyxDQUFDa0IsV0FMWDtBQU1STyxvQkFBWSxFQUFFekIsS0FBSyxDQUFDeUIsWUFOWjtBQU9SSSxvQkFBWSxFQUFFN0IsS0FBSyxDQUFDNkIsWUFQWjtBQVFSbUQsZ0JBQVEsRUFBRWhGLEtBQUssQ0FBQ2dGLFFBUlI7QUFTUkMsa0JBQVUsRUFBRWpGLEtBQUssQ0FBQ2lGLFVBVFY7QUFVUnhDLGdCQUFRLEVBQUVBLFFBVkY7QUFXUkgsZUFBTyxFQUFFQTtBQVhELE9BTFo7QUFrQkUsc0JBQWdCLEVBQUVpQyxnQkFsQnBCO0FBbUJFLHNCQUFnQixFQUFFTTtBQW5CcEIsT0FxQkc5RSxTQXJCSCxDQUREO0FBQUEsR0FESCxDQURGLENBREY7QUErQkQsQ0F6RUQ7O0dBQU1xRCxRO1VBR1lyRSxTOzs7S0FIWnFFLFE7QUEyRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hbmFnZVN0b3JlLjhmMmI2MDQ5NmM2MWJlZTg5MTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0b1NpemVyIH0gZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkXCI7XHJcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgfSBmcm9tIFwicmVhY3Qtd2luZG93XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IGVuTG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcclxuaW1wb3J0IHZpTG9jYWwgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS92aVwiO1xyXG5cclxuY29uc3QgbG9jYWxlTWFwID0ge1xyXG4gIGVuOiBlbkxvY2FsZSxcclxuICB2aTogdmlMb2NhbCxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICB9LFxyXG4gIHJvd09kZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjFcIixcclxuICB9LFxyXG4gIHJvd0V2ZW46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGYwXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpbmRleCwgc3R5bGUsIGRhdGEgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBnZXRFbXBsb3llZU5hbWVCeUlkID0gKGRlcHRMaXN0LCBlbXBsb3llZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZW1wbG95ZWUgPSBlbXBsb3llZUxpc3QuZW1wbG95ZWVzLmZpbmQoXHJcbiAgICAgIChlbXBsb3llZSkgPT4gZW1wbG95ZWUuaWQgPT09IGlkXHJcbiAgICApO1xyXG4gICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgIHJldHVybiBlbXBsb3llZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RW1wbG95ZWVOYW1lQnlJZDExMSA9IChkZXB0TGlzdCwgZW1wbG95ZWVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGVtcGxveWVlID0gZW1wbG95ZWVMaXN0LmVtcGxveWVlcy5maW5kKFxyXG4gICAgICAoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChlbXBsb3llZSkge1xyXG4gICAgICBsZXQgZGVwdCA9IGRlcHRMaXN0LmRlcHRzLmZpbmQoKGRlcHQpID0+IGRlcHQuaWQgPT09IGVtcGxveWVlLmRlcHRJZCk7XHJcbiAgICAgIGlmIChkZXB0KSB7XHJcbiAgICAgICAgcmV0dXJuIGRlcHQubmFtZSArIFwiIC0gXCIgKyBlbXBsb3llZS5uYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0TmFtZUJ5SWQgPSAocHJvZHVjdFR5cGVMaXN0LCBwcm9kdWN0TGlzdCwgaWQpID0+IHtcclxuICAgIGxldCBwcm9kdWN0ID0gcHJvZHVjdExpc3QucHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgbGV0IHByb2R1Y3RUeXBlID0gcHJvZHVjdFR5cGVMaXN0LnByb2R1Y3RUeXBlcy5maW5kKFxyXG4gICAgICAgIChwcm9kdWN0VHlwZSkgPT4gcHJvZHVjdFR5cGUuaWQgPT09IHByb2R1Y3QucHJvZHVjdFR5cGVJZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocHJvZHVjdFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdFR5cGUubmFtZSArIFwiIC0gXCIgKyBwcm9kdWN0Lm5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEdvbGRUeXBlTmFtZUJ5SWQgPSAoZ29sZFR5cGVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGdvbGRUeXBlID0gZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maW5kKFxyXG4gICAgICAoZ29sZFR5cGUpID0+IGdvbGRUeXBlLmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChnb2xkVHlwZSkge1xyXG4gICAgICByZXR1cm4gZ29sZFR5cGUubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEdvbGRVbml0TmFtZUJ5SWQgPSAoZ29sZFVuaXRMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGdvbGRVbml0ID0gZ29sZFVuaXRMaXN0LmdvbGRVbml0cy5maW5kKFxyXG4gICAgICAoZ29sZFVuaXQpID0+IGdvbGRVbml0LmlkID09PSBpZFxyXG4gICAgKTtcclxuICAgIGlmIChnb2xkVW5pdCkge1xyXG4gICAgICByZXR1cm4gZ29sZFVuaXQubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFNlbGxEYXRlID0gKHNlbGxEYXRlKSA9PiB7XHJcbiAgICBpZiAoIXNlbGxEYXRlKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShzZWxsRGF0ZSksIFwiZGQvTU0veXl5eVwiLCB7XHJcbiAgICAgIGxvY2FsZTogbG9jYWxlTWFwW1widmlcIl0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RJdGVtXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBkYXRhLmNsYXNzZXMubGlzdEl0ZW0sXHJcbiAgICAgICAgaW5kZXggJSAyID09PSAwID8gZGF0YS5jbGFzc2VzLnJvd0V2ZW4gOiBkYXRhLmNsYXNzZXMucm93T2RkXHJcbiAgICAgICl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgIH19XHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5zZWxsc1tpbmRleF0uY29kZX0gLz5cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2dldEVtcGxveWVlTmFtZUJ5SWQoXHJcbiAgICAgICAgICAgIGRhdGEuZGVwdExpc3QsXHJcbiAgICAgICAgICAgIGRhdGEuZW1wbG95ZWVMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLnNlbGxzW2luZGV4XS5zZWxscklkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5zZWxsc1tpbmRleF0ud2VpZ2h0THlUb3RhbH0gLz5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnNlbGxzW2luZGV4XS5xdWFudGl0eVRvdGFsfSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtmb3JtYXRTZWxsRGF0ZShkYXRhLnNlbGxzW2luZGV4XS5zZWxsRGF0ZSl9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5zZWxsc1tpbmRleF0ubm90ZX0gLz59XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbnJlbmRlclJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgU2VsbExpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBQQURESU5HX1NJWkUgPSAxMDtcclxuICBjb25zdCBJVEVNX1NJWkUgPSAyMDtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25XaGVlbCA9ICh7IGRlbHRhWSB9KSA9PiB7XHJcbiAgICAvLyBZb3VyIGhhbmRsZXIgZ29lcyBoZXJlIC4uLlxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBoYW5kbGVPbldoZWVsKClcIixcclxuICAgICAgZGVsdGFZXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IGlubmVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKCh7IHN0eWxlLCAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICB0b3A6IGAke3BhcnNlRmxvYXQoc3R5bGUudG9wKSArIFBBRERJTkdfU0laRX1weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCkgKyBQQURESU5HX1NJWkUgKiAyfXB4YCxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3Qgb3V0ZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBvbldoZWVsPXtoYW5kbGVPbldoZWVsfSB7Li4ucHJvcHN9IC8+O1xyXG4gIH0pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXV0b1NpemVyPlxyXG4gICAgICAgIHsocHJvcHNBdXRvU2l6ZXIpID0+IChcclxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XHJcbiAgICAgICAgICAgIHdpZHRoPXtwcm9wc0F1dG9TaXplci53aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtwcm9wc0F1dG9TaXplci5oZWlnaHR9XHJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtJVEVNX1NJWkV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvcHMuc2VsbHMubGVuZ3RofVxyXG4gICAgICAgICAgICBpdGVtRGF0YT17e1xyXG4gICAgICAgICAgICAgIHNlbGxzOiBwcm9wcy5zZWxscyxcclxuICAgICAgICAgICAgICBkZXB0TGlzdDogcHJvcHMuZGVwdExpc3QsXHJcbiAgICAgICAgICAgICAgZW1wbG95ZWVMaXN0OiBwcm9wcy5lbXBsb3llZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0OiBwcm9wcy5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdExpc3Q6IHByb3BzLnByb2R1Y3RMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRUeXBlTGlzdDogcHJvcHMuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRVbml0TGlzdDogcHJvcHMuZ29sZFVuaXRMaXN0LFxyXG4gICAgICAgICAgICAgIHNlbGxFZGl0OiBwcm9wcy5zZWxsRWRpdCxcclxuICAgICAgICAgICAgICBzZWxsRGVsZXRlOiBwcm9wcy5zZWxsRGVsZXRlLFxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlPXtpbm5lckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlPXtvdXRlckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVuZGVyUm93fVxyXG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQXV0b1NpemVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGxMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9