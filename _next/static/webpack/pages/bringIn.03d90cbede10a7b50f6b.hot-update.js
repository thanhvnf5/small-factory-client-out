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





var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Purchase\\PurchaseList.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types */









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

  var getProductNameById = function getProductNameById(productList, id) {
    var product = productList.products.filter(function (product) {
      return product.id === id;
    })[0];

    if (product) {
      return product.name;
    }

    return "";
  };

  var getGoldTypeNameById = function getGoldTypeNameById(goldTypeList, id) {
    var goldType = goldTypeList.goldTypes.filter(function (goldType) {
      return goldType.id === id;
    })[0];

    if (goldType) {
      return goldType.name;
    }

    return "";
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_12__["default"])(data.classes.listItem, index % 2 === 0 ? data.classes.rowEven : data.classes.rowOdd),
    style: _objectSpread({}, style),
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].weight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].quantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getProductNameById(data.productList, data.purchases[index].productId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldTypeNameById(data.goldTypeList, data.purchases[index].goldTypeId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        lineNumber: 145,
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
        lineNumber: 158,
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
      lineNumber: 163,
      columnNumber: 5
    }
  }, __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_10__["AutoSizer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
        productTypeList: props.productTypeList,
        productList: props.productList,
        goldTypeList: props.goldTypeList,
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
        lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJsaXN0SXRlbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJyb3dPZGQiLCJyb3dFdmVuIiwicmVuZGVyUm93IiwicHJvcHMiLCJpbmRleCIsInN0eWxlIiwiZGF0YSIsImdldFByb2R1Y3ROYW1lQnlJZCIsInByb2R1Y3RMaXN0IiwiaWQiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaWx0ZXIiLCJuYW1lIiwiZ2V0R29sZFR5cGVOYW1lQnlJZCIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlIiwiZ29sZFR5cGVzIiwiY2xzeCIsImNsYXNzZXMiLCJldmVudCIsInB1cmNoYXNlRWRpdCIsInB1cmNoYXNlcyIsIndlaWdodCIsInF1YW50aXR5IiwiaXNNb2JpbGUiLCJwcm9kdWN0SWQiLCJnb2xkVHlwZUlkIiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZURlbGV0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJhbnkiLCJQdXJjaGFzZUxpc3QiLCJQQURESU5HX1NJWkUiLCJJVEVNX1NJWkUiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwiaGFuZGxlT25XaGVlbCIsImRlbHRhWSIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJpbm5lckVsZW1lbnRUeXBlIiwiZm9yd2FyZFJlZiIsInJlZiIsInJlc3QiLCJ0b3AiLCJwYXJzZUZsb2F0Iiwib3V0ZXJFbGVtZW50VHlwZSIsInByb3BzQXV0b1NpemVyIiwibGVuZ3RoIiwicHJvZHVjdFR5cGVMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsTUFESDtBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxxQkFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFIdEMsS0FEaUM7QUFNdkNDLFlBQVEsRUFBRTtBQUNSQyxhQUFPLEVBQUUsTUFERDtBQUVSQyxnQkFBVSxFQUFFLFFBRko7QUFHUkMsb0JBQWMsRUFBRTtBQUhSLEtBTjZCO0FBV3ZDQyxVQUFNLEVBQUU7QUFDTlIscUJBQWUsRUFBRTtBQURYLEtBWCtCO0FBY3ZDUyxXQUFPLEVBQUU7QUFDUFQscUJBQWUsRUFBRTtBQURWO0FBZDhCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQW1CQSxTQUFTVSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBLE1BQ2hCQyxLQURnQixHQUNPRCxLQURQLENBQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLEtBRFMsR0FDT0YsS0FEUCxDQUNURSxLQURTO0FBQUEsTUFDRkMsSUFERSxHQUNPSCxLQURQLENBQ0ZHLElBREU7O0FBRXhCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsV0FBRCxFQUFjQyxFQUFkLEVBQXFCO0FBQzlDLFFBQUlDLE9BQU8sR0FBR0YsV0FBVyxDQUFDRyxRQUFaLENBQXFCQyxNQUFyQixDQUNaLFVBQUNGLE9BQUQ7QUFBQSxhQUFhQSxPQUFP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O0FBQ0QsR0FGa0MsQ0FBbkM7QUFJQTs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFZ0IsT0FBTyxDQUFDOUIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLFVBQUMwRSxjQUFEO0FBQUEsV0FDQyxNQUFDLDJEQUFEO0FBQ0UsV0FBSyxFQUFFQSxjQUFjLENBQUN6RSxLQUR4QjtBQUVFLFlBQU0sRUFBRXlFLGNBQWMsQ0FBQ3hFLE1BRnpCO0FBR0UsY0FBUSxFQUFFK0MsU0FIWjtBQUlFLGVBQVMsRUFBRW5DLEtBQUssQ0FBQ21CLFNBQU4sQ0FBZ0IwQyxNQUo3QjtBQUtFLGNBQVEsRUFBRTtBQUNSMUMsaUJBQVMsRUFBRW5CLEtBQUssQ0FBQ21CLFNBRFQ7QUFFUjJDLHVCQUFlLEVBQUU5RCxLQUFLLENBQUM4RCxlQUZmO0FBR1J6RCxtQkFBVyxFQUFFTCxLQUFLLENBQUNLLFdBSFg7QUFJUk8sb0JBQVksRUFBRVosS0FBSyxDQUFDWSxZQUpaO0FBS1JNLG9CQUFZLEVBQUVsQixLQUFLLENBQUNrQixZQUxaO0FBTVJRLHNCQUFjLEVBQUUxQixLQUFLLENBQUMwQixjQU5kO0FBT1JKLGdCQUFRLEVBQUVBLFFBUEY7QUFRUk4sZUFBTyxFQUFFQTtBQVJELE9BTFo7QUFlRSxzQkFBZ0IsRUFBRXFDLGdCQWZwQjtBQWdCRSxzQkFBZ0IsRUFBRU0sZ0JBaEJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9Ba0JHNUQsU0FsQkgsQ0FERDtBQUFBLEdBREgsQ0FERixDQURGO0FBNEJELENBdEVEOztHQUFNa0MsWTtVQUdZbEQsUzs7O0tBSFprRCxZO0FBd0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLjAzZDkwY2JlZGUxMGE3YjUwZjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7XHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0b1NpemVyIH0gZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkXCI7XHJcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgfSBmcm9tIFwicmVhY3Qtd2luZG93XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgfSxcclxuICByb3dPZGQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWYxXCIsXHJcbiAgfSxcclxuICByb3dFdmVuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmMFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHN0eWxlLCBkYXRhIH0gPSBwcm9wcztcclxuICBjb25zdCBnZXRQcm9kdWN0TmFtZUJ5SWQgPSAocHJvZHVjdExpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgcHJvZHVjdCA9IHByb2R1Y3RMaXN0LnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkXHJcbiAgICApWzBdO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgcmV0dXJuIHByb2R1Y3QubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0R29sZFR5cGVOYW1lQnlJZCA9IChnb2xkVHlwZUxpc3QsIGlkKSA9PiB7XHJcbiAgICBsZXQgZ29sZFR5cGUgPSBnb2xkVHlwZUxpc3QuZ29sZFR5cGVzLmZpbHRlcihcclxuICAgICAgKGdvbGRUeXBlKSA9PiBnb2xkVHlwZS5pZCA9PT0gaWRcclxuICAgIClbMF07XHJcbiAgICBpZiAoZ29sZFR5cGUpIHtcclxuICAgICAgcmV0dXJuIGdvbGRUeXBlLm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RJdGVtXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBkYXRhLmNsYXNzZXMubGlzdEl0ZW0sXHJcbiAgICAgICAgaW5kZXggJSAyID09PSAwID8gZGF0YS5jbGFzc2VzLnJvd0V2ZW4gOiBkYXRhLmNsYXNzZXMucm93T2RkXHJcbiAgICAgICl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgIH19XHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXRcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkYXRhLnB1cmNoYXNlRWRpdChldmVudCwgZGF0YS5wdXJjaGFzZXNbaW5kZXhdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEucHVyY2hhc2VzW2luZGV4XS5uYW1lfSAvPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEucHVyY2hhc2VzW2luZGV4XS53ZWlnaHR9IC8+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLnF1YW50aXR5fSAvPlxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Z2V0UHJvZHVjdE5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLnByb2R1Y3RMaXN0LFxyXG4gICAgICAgICAgICBkYXRhLnB1cmNoYXNlc1tpbmRleF0ucHJvZHVjdElkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICBwcmltYXJ5PXtnZXRHb2xkVHlwZU5hbWVCeUlkKFxyXG4gICAgICAgICAgICBkYXRhLmdvbGRUeXBlTGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmdvbGRUeXBlSWRcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGVcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkYXRhLnB1cmNoYXNlRGVsZXRlKGV2ZW50LCBkYXRhLnB1cmNoYXNlc1tpbmRleF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgKTtcclxufVxyXG5cclxucmVuZGVyUm93LnByb3BUeXBlcyA9IHtcclxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgZGF0YTogUHJvcFR5cGVzLmFueSxcclxufTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jb25zdCBQdXJjaGFzZUxpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBQQURESU5HX1NJWkUgPSAxMDtcclxuICBjb25zdCBJVEVNX1NJWkUgPSAyMDtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8qIERldGVjdCBtb2JpbGUgdmlldyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb2JpbGVWaWV3ID0gL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KFxyXG4gICAgICBgJHt3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpfWBcclxuICAgICk7XHJcbiAgICBzZXRJc01vYmlsZShCb29sZWFuKGlzTW9iaWxlVmlldykpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25XaGVlbCA9ICh7IGRlbHRhWSB9KSA9PiB7XHJcbiAgICAvLyBZb3VyIGhhbmRsZXIgZ29lcyBoZXJlIC4uLlxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBoYW5kbGVPbldoZWVsKClcIixcclxuICAgICAgZGVsdGFZXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IGlubmVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKCh7IHN0eWxlLCAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICB0b3A6IGAke3BhcnNlRmxvYXQoc3R5bGUudG9wKSArIFBBRERJTkdfU0laRX1weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCkgKyBQQURESU5HX1NJWkUgKiAyfXB4YCxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgY29uc3Qgb3V0ZXJFbGVtZW50VHlwZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBvbldoZWVsPXtoYW5kbGVPbldoZWVsfSB7Li4ucHJvcHN9IC8+O1xyXG4gIH0pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXV0b1NpemVyPlxyXG4gICAgICAgIHsocHJvcHNBdXRvU2l6ZXIpID0+IChcclxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XHJcbiAgICAgICAgICAgIHdpZHRoPXtwcm9wc0F1dG9TaXplci53aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtwcm9wc0F1dG9TaXplci5oZWlnaHR9XHJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtJVEVNX1NJWkV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvcHMucHVyY2hhc2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgaXRlbURhdGE9e3tcclxuICAgICAgICAgICAgICBwdXJjaGFzZXM6IHByb3BzLnB1cmNoYXNlcyxcclxuICAgICAgICAgICAgICBwcm9kdWN0VHlwZUxpc3Q6IHByb3BzLnByb2R1Y3RUeXBlTGlzdCxcclxuICAgICAgICAgICAgICBwcm9kdWN0TGlzdDogcHJvcHMucHJvZHVjdExpc3QsXHJcbiAgICAgICAgICAgICAgZ29sZFR5cGVMaXN0OiBwcm9wcy5nb2xkVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHVyY2hhc2VFZGl0OiBwcm9wcy5wdXJjaGFzZUVkaXQsXHJcbiAgICAgICAgICAgICAgcHVyY2hhc2VEZWxldGU6IHByb3BzLnB1cmNoYXNlRGVsZXRlLFxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlPXtpbm5lckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlPXtvdXRlckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVuZGVyUm93fVxyXG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQXV0b1NpemVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==