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
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getProductNameById(data.productList, data.purchases[index].productId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), data.isMobile ? null : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: getGoldTypeNameById(data.goldTypeList, data.purchases[index].goldTypeId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].weight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: data.purchases[index].quantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHVyY2hhc2UvUHVyY2hhc2VMaXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJsaXN0SXRlbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJyb3dPZGQiLCJyb3dFdmVuIiwicmVuZGVyUm93IiwicHJvcHMiLCJpbmRleCIsInN0eWxlIiwiZGF0YSIsImdldFByb2R1Y3ROYW1lQnlJZCIsInByb2R1Y3RMaXN0IiwiaWQiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaWx0ZXIiLCJuYW1lIiwiZ2V0R29sZFR5cGVOYW1lQnlJZCIsImdvbGRUeXBlTGlzdCIsImdvbGRUeXBlIiwiZ29sZFR5cGVzIiwiY2xzeCIsImNsYXNzZXMiLCJldmVudCIsInB1cmNoYXNlRWRpdCIsInB1cmNoYXNlcyIsImlzTW9iaWxlIiwicHJvZHVjdElkIiwiZ29sZFR5cGVJZCIsIndlaWdodCIsInF1YW50aXR5IiwiZGVzY3JpcHRpb24iLCJwdXJjaGFzZURlbGV0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJhbnkiLCJQdXJjaGFzZUxpc3QiLCJQQURESU5HX1NJWkUiLCJJVEVNX1NJWkUiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZVZpZXciLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJCb29sZWFuIiwiaGFuZGxlT25XaGVlbCIsImRlbHRhWSIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJpbm5lckVsZW1lbnRUeXBlIiwiZm9yd2FyZFJlZiIsInJlZiIsInJlc3QiLCJ0b3AiLCJwYXJzZUZsb2F0Iiwib3V0ZXJFbGVtZW50VHlwZSIsInByb3BzQXV0b1NpemVyIiwibGVuZ3RoIiwicHJvZHVjdFR5cGVMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsTUFESDtBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxxQkFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFIdEMsS0FEaUM7QUFNdkNDLFlBQVEsRUFBRTtBQUNSQyxhQUFPLEVBQUUsTUFERDtBQUVSQyxnQkFBVSxFQUFFLFFBRko7QUFHUkMsb0JBQWMsRUFBRTtBQUhSLEtBTjZCO0FBV3ZDQyxVQUFNLEVBQUU7QUFDTlIscUJBQWUsRUFBRTtBQURYLEtBWCtCO0FBY3ZDUyxXQUFPLEVBQUU7QUFDUFQscUJBQWUsRUFBRTtBQURWO0FBZDhCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQW1CQSxTQUFTVSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBLE1BQ2hCQyxLQURnQixHQUNPRCxLQURQLENBQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLEtBRFMsR0FDT0YsS0FEUCxDQUNURSxLQURTO0FBQUEsTUFDRkMsSUFERSxHQUNPSCxLQURQLENBQ0ZHLElBREU7O0FBRXhCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsV0FBRCxFQUFjQyxFQUFkLEVBQXFCO0FBQzlDLFFBQUlDLE9BQU8sR0FBR0YsV0FBVyxDQUFDRyxRQUFaLENBQXFCQyxNQUFyQixDQUNaLFVBQUNGLE9BQUQ7QUFBQSxhQUFhQSxPQUFP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UDtBQUNELEdBRmtDLENBQW5DO0FBSUE7O0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRWdCLE9BQU8sQ0FBQzlCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxVQUFDMEUsY0FBRDtBQUFBLFdBQ0MsTUFBQywyREFBRDtBQUNFLFdBQUssRUFBRUEsY0FBYyxDQUFDekUsS0FEeEI7QUFFRSxZQUFNLEVBQUV5RSxjQUFjLENBQUN4RSxNQUZ6QjtBQUdFLGNBQVEsRUFBRStDLFNBSFo7QUFJRSxlQUFTLEVBQUVuQyxLQUFLLENBQUNtQixTQUFOLENBQWdCMEMsTUFKN0I7QUFLRSxjQUFRLEVBQUU7QUFDUjFDLGlCQUFTLEVBQUVuQixLQUFLLENBQUNtQixTQURUO0FBRVIyQyx1QkFBZSxFQUFFOUQsS0FBSyxDQUFDOEQsZUFGZjtBQUdSekQsbUJBQVcsRUFBRUwsS0FBSyxDQUFDSyxXQUhYO0FBSVJPLG9CQUFZLEVBQUVaLEtBQUssQ0FBQ1ksWUFKWjtBQUtSTSxvQkFBWSxFQUFFbEIsS0FBSyxDQUFDa0IsWUFMWjtBQU1SUSxzQkFBYyxFQUFFMUIsS0FBSyxDQUFDMEIsY0FOZDtBQU9STixnQkFBUSxFQUFFQSxRQVBGO0FBUVJKLGVBQU8sRUFBRUE7QUFSRCxPQUxaO0FBZUUsc0JBQWdCLEVBQUVxQyxnQkFmcEI7QUFnQkUsc0JBQWdCLEVBQUVNLGdCQWhCcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWtCRzVELFNBbEJILENBREQ7QUFBQSxHQURILENBREYsQ0FERjtBQTRCRCxDQXRFRDs7R0FBTWtDLFk7VUFHWWxELFM7OztLQUhaa0QsWTtBQXdFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJpbmdJbi44NGFjOWM0N2Q0ZDA2NjcwY2ZmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dG9TaXplciB9IGZyb20gXCJyZWFjdC12aXJ0dWFsaXplZFwiO1xyXG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSBcInJlYWN0LXdpbmRvd1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gIH0sXHJcbiAgcm93T2RkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmMVwiLFxyXG4gIH0sXHJcbiAgcm93RXZlbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjBcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJSb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGluZGV4LCBzdHlsZSwgZGF0YSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZ2V0UHJvZHVjdE5hbWVCeUlkID0gKHByb2R1Y3RMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0TGlzdC5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpZFxyXG4gICAgKVswXTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0Lm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9O1xyXG4gIGNvbnN0IGdldEdvbGRUeXBlTmFtZUJ5SWQgPSAoZ29sZFR5cGVMaXN0LCBpZCkgPT4ge1xyXG4gICAgbGV0IGdvbGRUeXBlID0gZ29sZFR5cGVMaXN0LmdvbGRUeXBlcy5maWx0ZXIoXHJcbiAgICAgIChnb2xkVHlwZSkgPT4gZ29sZFR5cGUuaWQgPT09IGlkXHJcbiAgICApWzBdO1xyXG4gICAgaWYgKGdvbGRUeXBlKSB7XHJcbiAgICAgIHJldHVybiBnb2xkVHlwZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgZGF0YS5jbGFzc2VzLmxpc3RJdGVtLFxyXG4gICAgICAgIGluZGV4ICUgMiA9PT0gMCA/IGRhdGEuY2xhc3Nlcy5yb3dFdmVuIDogZGF0YS5jbGFzc2VzLnJvd09kZFxyXG4gICAgICApfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICB9fVxyXG4gICAgICBrZXk9e2luZGV4fVxyXG4gICAgPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJlZGl0XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZGF0YS5wdXJjaGFzZUVkaXQoZXZlbnQsIGRhdGEucHVyY2hhc2VzW2luZGV4XSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnB1cmNoYXNlc1tpbmRleF0ubmFtZX0gLz5cclxuICAgICAge2RhdGEuaXNNb2JpbGUgPyBudWxsIDogKFxyXG4gICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgIHByaW1hcnk9e2dldFByb2R1Y3ROYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5wcm9kdWN0TGlzdCxcclxuICAgICAgICAgICAgZGF0YS5wdXJjaGFzZXNbaW5kZXhdLnByb2R1Y3RJZFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5pc01vYmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgcHJpbWFyeT17Z2V0R29sZFR5cGVOYW1lQnlJZChcclxuICAgICAgICAgICAgZGF0YS5nb2xkVHlwZUxpc3QsXHJcbiAgICAgICAgICAgIGRhdGEucHVyY2hhc2VzW2luZGV4XS5nb2xkVHlwZUlkXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZGF0YS5wdXJjaGFzZXNbaW5kZXhdLndlaWdodH0gLz5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkYXRhLnB1cmNoYXNlc1tpbmRleF0ucXVhbnRpdHl9IC8+XHJcbiAgICAgIHtkYXRhLmlzTW9iaWxlID8gbnVsbCA6IChcclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2RhdGEucHVyY2hhc2VzW2luZGV4XS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgKX1cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZGF0YS5wdXJjaGFzZURlbGV0ZShldmVudCwgZGF0YS5wdXJjaGFzZXNbaW5kZXhdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbnJlbmRlclJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY29uc3QgUHVyY2hhc2VMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgUEFERElOR19TSVpFID0gMTA7XHJcbiAgY29uc3QgSVRFTV9TSVpFID0gMjA7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvKiBEZXRlY3QgbW9iaWxlIHZpZXcgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW9iaWxlVmlldyA9IC9hbmRyb2lkfHdlYm9zfGlwaG9uZXxpcGFkfGlwb2R8YmxhY2tiZXJyeXxpZW1vYmlsZXxvcGVyYSBtaW5pL2kudGVzdChcclxuICAgICAgYCR7d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKX1gXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2JpbGUoQm9vbGVhbihpc01vYmlsZVZpZXcpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uV2hlZWwgPSAoeyBkZWx0YVkgfSkgPT4ge1xyXG4gICAgLy8gWW91ciBoYW5kbGVyIGdvZXMgaGVyZSAuLi5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gaGFuZGxlT25XaGVlbCgpXCIsXHJcbiAgICAgIGRlbHRhWVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuICBjb25zdCBpbm5lckVsZW1lbnRUeXBlID0gZm9yd2FyZFJlZigoeyBzdHlsZSwgLi4ucmVzdCB9LCByZWYpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgdG9wOiBgJHtwYXJzZUZsb2F0KHN0eWxlLnRvcCkgKyBQQURESU5HX1NJWkV9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7cGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpICsgUEFERElOR19TSVpFICogMn1weGAsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxyXG4gIGNvbnN0IG91dGVyRWxlbWVudFR5cGUgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiByZWY9e3JlZn0gb25XaGVlbD17aGFuZGxlT25XaGVlbH0gey4uLnByb3BzfSAvPjtcclxuICB9KTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEF1dG9TaXplcj5cclxuICAgICAgICB7KHByb3BzQXV0b1NpemVyKSA9PiAoXHJcbiAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxyXG4gICAgICAgICAgICB3aWR0aD17cHJvcHNBdXRvU2l6ZXIud2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17cHJvcHNBdXRvU2l6ZXIuaGVpZ2h0fVxyXG4gICAgICAgICAgICBpdGVtU2l6ZT17SVRFTV9TSVpFfVxyXG4gICAgICAgICAgICBpdGVtQ291bnQ9e3Byb3BzLnB1cmNoYXNlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhPXt7XHJcbiAgICAgICAgICAgICAgcHVyY2hhc2VzOiBwcm9wcy5wdXJjaGFzZXMsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdFR5cGVMaXN0OiBwcm9wcy5wcm9kdWN0VHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdExpc3Q6IHByb3BzLnByb2R1Y3RMaXN0LFxyXG4gICAgICAgICAgICAgIGdvbGRUeXBlTGlzdDogcHJvcHMuZ29sZFR5cGVMaXN0LFxyXG4gICAgICAgICAgICAgIHB1cmNoYXNlRWRpdDogcHJvcHMucHVyY2hhc2VFZGl0LFxyXG4gICAgICAgICAgICAgIHB1cmNoYXNlRGVsZXRlOiBwcm9wcy5wdXJjaGFzZURlbGV0ZSxcclxuICAgICAgICAgICAgICBpc01vYmlsZTogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW5uZXJFbGVtZW50VHlwZT17aW5uZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZT17b3V0ZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3JlbmRlclJvd31cclxuICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0F1dG9TaXplcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=