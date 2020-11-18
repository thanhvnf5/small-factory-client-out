webpackHotUpdate_N_E("pages/bringIn",{

/***/ "./src/components/Product/ProductEdit.js":
false,

/***/ "./src/components/Product/ProductList.js":
false,

/***/ "./src/components/ProductType/ProductTypeEdit.js":
false,

/***/ "./src/components/ProductType/ProductTypeList.js":
false,

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
/* harmony import */ var _PurchaseContainer_PurchaseContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PurchaseContainer/PurchaseContainer */ "./src/containers/PurchaseContainer/PurchaseContainer.js");







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
          lineNumber: 17,
          columnNumber: 7
        }
      }, leftDrawerKey === "purchase" ? __jsx(_PurchaseContainer_PurchaseContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
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
          lineNumber: 28,
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

/***/ "./src/containers/ProductContainer/ProductContainer.js":
false,

/***/ "./src/containers/ProductTypeContainer/ProductTypeContainer.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvQnJpbmdJbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJCcmluZ0luQ29udGFpbmVyIiwibGVmdERyYXdlcktleSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiZ2VuZXJhdGVCb2R5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxlZnREcmF3ZXJJdGVtIiwiY29tbW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFDTUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0ksRTs7dU5BRU8sWUFBTTtBQUNuQixVQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBQ0EsZ0JBQXFCO0FBQ25CQSxxQkFBYSxHQUFHQSxhQUFhLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsQ0FBaEM7QUFDRDs7QUFFRCxhQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0gsYUFBYSxLQUFLLFVBQWxCLEdBQStCLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEvQixHQUF1RCxJQUQxRCxDQURGO0FBS0QsSzs7Ozs7Ozs7QUFFRDs2QkFDUztBQUNQSSxhQUFPLENBQUNDLEdBQVIsQ0FDRSxJQUFJQyxJQUFKLEdBQVdDLGNBQVgsS0FBOEIsdUNBRGhDO0FBR0EsYUFBTyxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZ0IsS0FBS0MsWUFBTCxFQUFoQixDQUFQO0FBQ0Q7Ozs7RUF0QjRCQyw0Q0FBSyxDQUFDQyxTOztBQXlCckMsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMQyxrQkFBYyxFQUFFRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQ7QUFEeEIsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTyxFQUFQO0FBQ0QsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkNoQixnQkFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9icmluZ0luLjg5YTA5YWE2NjQyMDc0YWE5NjUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSBcIi4uL2hvY3MvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5XCI7XHJcbmltcG9ydCBQdXJjaGFzZUNvbnRhaW5lciBmcm9tIFwiLi9QdXJjaGFzZUNvbnRhaW5lci9QdXJjaGFzZUNvbnRhaW5lclwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNsYXNzIEJyaW5nSW5Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge307XHJcblxyXG4gIGdlbmVyYXRlQm9keSA9ICgpID0+IHtcclxuICAgIGxldCBsZWZ0RHJhd2VyS2V5ID0gXCJcIjtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgbGVmdERyYXdlcktleSA9IGxlZnREcmF3ZXJLZXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxlZnRTZWxlY3RlZEtleVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAge2xlZnREcmF3ZXJLZXkgPT09IFwicHVyY2hhc2VcIiA/IDxQdXJjaGFzZUNvbnRhaW5lciAvPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBCcmluZ0luQ29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxFcnJvckJvdW5kYXJ5Pnt0aGlzLmdlbmVyYXRlQm9keSgpfTwvRXJyb3JCb3VuZGFyeT47XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbGVmdERyYXdlckl0ZW06IHN0YXRlLmNvbW1vbi5sZWZ0RHJhd2VySXRlbSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQnJpbmdJbkNvbnRhaW5lcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=