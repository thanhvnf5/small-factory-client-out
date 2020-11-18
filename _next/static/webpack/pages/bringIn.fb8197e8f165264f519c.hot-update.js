webpackHotUpdate_N_E("pages/bringIn",{

/***/ "./src/containers/BringInContainer.js":
/*!********************************************!*\
  !*** ./src/containers/BringInContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hocs_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hocs/ErrorBoundary/ErrorBoundary */ "./src/hocs/ErrorBoundary/ErrorBoundary.js");
/* harmony import */ var _ProductContainer_ProductContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductContainer/ProductContainer */ "./src/containers/ProductContainer/ProductContainer.js");
/* harmony import */ var _ProductTypeContainer_ProductTypeContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProductTypeContainer/ProductTypeContainer */ "./src/containers/ProductTypeContainer/ProductTypeContainer.js");
/* harmony import */ var _PurchaseContainer_PurchaseContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PurchaseContainer/PurchaseContainer */ "./src/containers/PurchaseContainer/PurchaseContainer.js");







var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\containers\\BringInContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







/************************************************** Constructor */

var BringInContainer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(BringInContainer, _React$Component);

  var _super = _createSuper(BringInContainer);

  function BringInContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BringInContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "generateBody", function () {
      var leftDrawerKey = "";

      if (true) {
        leftDrawerKey = leftDrawerKey = localStorage.getItem("leftSelectedKey");
      }

      return __jsx("div", {
        style: {
          height: "100%"
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      }, leftDrawerKey === "purchase" ? __jsx(_PurchaseContainer_PurchaseContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 41
        }
      }) : null);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BringInContainer, [{
    key: "render",

    /************************************************** render */
    value: function render() {
      console.log(new Date().toLocaleString() + " ............ BringInContainer render");
      return __jsx(_hocs_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 12
        }
      }, this.generateBody());
    }
  }]);

  return BringInContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    leftDrawerItem: state.common.leftDrawerItem
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(BringInContainer));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/bringIn.js":
/*!******************************!*\
  !*** ./src/pages/bringIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_BringInContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/BringInContainer */ "./src/containers/BringInContainer.js");
/* harmony import */ var _hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hocs/Layout/Layout */ "./src/hocs/Layout/Layout.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n */ "./src/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\pages\\bringIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





/************************************************** Constructor */

function BringIn(props) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(startClock());
  // }, [dispatch]);

  /************************************************** render */
  // console.log(new Date().toLocaleString() + " ............ BringIn render");
  return __jsx(_hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    title: "BringIn",
    leftDrawerItems: props.items,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(_containers_BringInContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

_c = BringIn;
BringIn.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
}; // BringIn.defaultProps = {
//   namespacesRequired: ["common", "home"],
// };

BringIn.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {} else {
                /* console.log(
                  new Date().toLocaleString() +
                    " ............ BringIn.getInitialProps: client."
                ); */
              }
            /* console.log(
              new Date().toLocaleString() + " ............ BringIn.getInitialProps."
            ); */
            // const initProps = initialize(ctx);


            return _context.abrupt("return", {
              // ...initProps,
              namespacesRequired: ["common", "home", "layout"],
              currentPage: "/bringIn",
              items: [{
                key: "purchase",
                label: "Nhập mua"
              }]
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withTranslation"])("home")(BringIn));

var _c;

$RefreshReg$(_c, "BringIn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvQnJpbmdJbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2JyaW5nSW4uanMiXSwibmFtZXMiOlsiQnJpbmdJbkNvbnRhaW5lciIsImxlZnREcmF3ZXJLZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImdlbmVyYXRlQm9keSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsZWZ0RHJhd2VySXRlbSIsImNvbW1vbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29ubmVjdCIsIkJyaW5nSW4iLCJwcm9wcyIsIml0ZW1zIiwicHJvcFR5cGVzIiwidCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiY3VycmVudFBhZ2UiLCJrZXkiLCJsYWJlbCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBQ01BLGdCOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJLEU7O3VOQUVPLFlBQU07QUFDbkIsVUFBSUMsYUFBYSxHQUFHLEVBQXBCOztBQUNBLGdCQUFxQjtBQUNuQkEscUJBQWEsR0FBR0EsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWhDO0FBQ0Q7O0FBRUQsYUFDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dILGFBQWEsS0FBSyxVQUFsQixHQUErQixNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBL0IsR0FBdUQsSUFEMUQsQ0FERjtBQUtELEs7Ozs7Ozs7O0FBRUQ7NkJBQ1M7QUFDUEksYUFBTyxDQUFDQyxHQUFSLENBQ0UsSUFBSUMsSUFBSixHQUFXQyxjQUFYLEtBQThCLHVDQURoQztBQUdBLGFBQU8sTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdCLEtBQUtDLFlBQUwsRUFBaEIsQ0FBUDtBQUNEOzs7O0VBdEI0QkMsNENBQUssQ0FBQ0MsUzs7QUF5QnJDLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTEMsa0JBQWMsRUFBRUQsS0FBSyxDQUFDRSxNQUFOLENBQWFEO0FBRHhCLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU8sRUFBUDtBQUNELENBRkQ7O0FBSWVDLDBIQUFPLENBQUNOLGVBQUQsRUFBa0JJLGtCQUFsQixDQUFQLENBQTZDaEIsZ0JBQTdDLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsU0FBU21CLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUNFLE1BQUMsMkRBQUQseUZBQVlBLEtBQVo7QUFBbUIsU0FBSyxFQUFDLFNBQXpCO0FBQW1DLG1CQUFlLEVBQUVBLEtBQUssQ0FBQ0MsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRDs7S0FkUUYsTztBQWdCVEEsT0FBTyxDQUFDRyxTQUFSLEdBQW9CO0FBQ2xCQyxHQUFDLEVBQUVDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEQSxDQUFwQixDLENBSUE7QUFDQTtBQUNBOztBQUVBUCxPQUFPLENBQUNRLGVBQVI7QUFBQSw4TEFBMEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QixnQkFBSSxLQUFKLEVBQXNCLEVBQXRCLE1BZ0JPO0FBQ0w7Ozs7QUFJRDtBQUVEOzs7QUFHQTs7O0FBM0J3Qiw2Q0E0QmpCO0FBQ0w7QUFDQUMsZ0NBQWtCLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixRQUFuQixDQUZmO0FBR0xDLHlCQUFXLEVBQUUsVUFIUjtBQUlMVCxtQkFBSyxFQUFFLENBQUM7QUFBRVUsbUJBQUcsRUFBRSxVQUFQO0FBQW1CQyxxQkFBSyxFQUFFO0FBQTFCLGVBQUQ7QUFKRixhQTVCaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0NlQyw0SEFBZSxDQUFDLE1BQUQsQ0FBZixDQUF3QmQsT0FBeEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLmZiODE5N2U4ZjE2NTI2NGY1MTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSBcIi4uL2hvY3MvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5XCI7XHJcbmltcG9ydCBQcm9kdWN0Q29udGFpbmVyIGZyb20gXCIuL1Byb2R1Y3RDb250YWluZXIvUHJvZHVjdENvbnRhaW5lclwiO1xyXG5pbXBvcnQgUHJvZHVjdFR5cGVDb250YWluZXIgZnJvbSBcIi4vUHJvZHVjdFR5cGVDb250YWluZXIvUHJvZHVjdFR5cGVDb250YWluZXJcIjtcclxuaW1wb3J0IFB1cmNoYXNlQ29udGFpbmVyIGZyb20gXCIuL1B1cmNoYXNlQ29udGFpbmVyL1B1cmNoYXNlQ29udGFpbmVyXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuY2xhc3MgQnJpbmdJbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fTtcclxuXHJcbiAgZ2VuZXJhdGVCb2R5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGxlZnREcmF3ZXJLZXkgPSBcIlwiO1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICBsZWZ0RHJhd2VyS2V5ID0gbGVmdERyYXdlcktleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGVmdFNlbGVjdGVkS2V5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cclxuICAgICAgICB7bGVmdERyYXdlcktleSA9PT0gXCJwdXJjaGFzZVwiID8gPFB1cmNoYXNlQ29udGFpbmVyIC8+IDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEJyaW5nSW5Db250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gPEVycm9yQm91bmRhcnk+e3RoaXMuZ2VuZXJhdGVCb2R5KCl9PC9FcnJvckJvdW5kYXJ5PjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsZWZ0RHJhd2VySXRlbTogc3RhdGUuY29tbW9uLmxlZnREcmF3ZXJJdGVtLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCcmluZ0luQ29udGFpbmVyKTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCcmluZ0luQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL0JyaW5nSW5Db250YWluZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vaG9jcy9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi9pMThuXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuZnVuY3Rpb24gQnJpbmdJbihwcm9wcykge1xyXG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKHN0YXJ0Q2xvY2soKSk7XHJcbiAgLy8gfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICAvLyBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gQnJpbmdJbiByZW5kZXJcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgey4uLnByb3BzfSB0aXRsZT1cIkJyaW5nSW5cIiBsZWZ0RHJhd2VySXRlbXM9e3Byb3BzLml0ZW1zfT5cclxuICAgICAgPEJyaW5nSW5Db250YWluZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbkJyaW5nSW4ucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG4vLyBCcmluZ0luLmRlZmF1bHRQcm9wcyA9IHtcclxuLy8gICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiLCBcImhvbWVcIl0sXHJcbi8vIH07XHJcblxyXG5CcmluZ0luLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgLyogY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArXHJcbiAgICAgICAgXCIgLi4uLi4uLi4uLi4uIEJyaW5nSW4uZ2V0SW5pdGlhbFByb3BzOiBzZXJ2ZXIuXCJcclxuICAgICk7ICovXHJcbiAgICAvLyB0cnkge1xyXG4gICAgLy8gXHRjb25zdCBDb29raWVzID0gcmVxdWlyZSgnY29va2llcycpXHJcbiAgICAvLyBcdGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcylcclxuICAgIC8vIFx0Y29uc3QgYXV0aFRva2VuID0gY29va2llcy5nZXQoJ3Rva2VuJykgfHwgJydcclxuICAgIC8vIFx0Y29uc3QgeyBlbWFpbCB9ID0gYXdhaXQgYXhpb3NcclxuICAgIC8vIFx0XHQuZ2V0KGAke0FQSV9VUkx9L21lYCwgeyBoZWFkZXJzOiB7ICd0b2tlbic6IGF1dGhUb2tlbiB9IH0pXHJcbiAgICAvLyBcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKVxyXG4gICAgLy8gXHRyZXR1cm4geyBpbml0aWFsTG9naW5TdGF0dXM6IGBMb2dnZWQgaW4gYXMgJHtlbWFpbH1gIH1cclxuICAgIC8vIH0gY2F0Y2ggKGVycikge1xyXG4gICAgLy8gXHRyZXR1cm4geyBpbml0aWFsTG9naW5TdGF0dXM6ICdOb3QgbG9nZ2VkIGluJyB9XHJcbiAgICAvLyB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIC4uLi4uLi4uLi4uLiBCcmluZ0luLmdldEluaXRpYWxQcm9wczogY2xpZW50LlwiXHJcbiAgICApOyAqL1xyXG4gIH1cclxuXHJcbiAgLyogY29uc29sZS5sb2coXHJcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gQnJpbmdJbi5nZXRJbml0aWFsUHJvcHMuXCJcclxuICApOyAqL1xyXG4gIC8vIGNvbnN0IGluaXRQcm9wcyA9IGluaXRpYWxpemUoY3R4KTtcclxuICByZXR1cm4ge1xyXG4gICAgLy8gLi4uaW5pdFByb3BzLFxyXG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbXCJjb21tb25cIiwgXCJob21lXCIsIFwibGF5b3V0XCJdLFxyXG4gICAgY3VycmVudFBhZ2U6IFwiL2JyaW5nSW5cIixcclxuICAgIGl0ZW1zOiBbeyBrZXk6IFwicHVyY2hhc2VcIiwgbGFiZWw6IFwiTmjhuq1wIG11YVwiIH1dLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oXCJob21lXCIpKEJyaW5nSW4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9