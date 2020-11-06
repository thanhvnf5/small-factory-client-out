webpackHotUpdate_N_E("pages/catalog",{

/***/ "./src/hocs/ErrorBoundary/ErrorBoundary.js":
/*!*************************************************!*\
  !*** ./src/hocs/ErrorBoundary/ErrorBoundary.js ***!
  \*************************************************/
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
/* harmony import */ var _Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Auxiliary/Auxiliary */ "./src/hocs/Auxiliary/Auxiliary.js");
/* harmony import */ var _components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UI/Modal/Modal */ "./src/components/UI/Modal/Modal.js");







var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\hocs\\ErrorBoundary\\ErrorBoundary.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      error: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "errorConfirmedHandler", function (event) {
      _this.setState(function (state) {
        // Important: read `state` instead of `this.state` when updating.
        return {
          error: null
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log("11111111111111111111111");
      console.log(error);
      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        // return <h1>Something went wrong.</h1>;
        return __jsx(_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }
        }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          show: this.state.error,
          modalClosed: this.errorConfirmedHandler,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }
        }, this.state.error ? this.state.error : "<<Error>>"), this.props.children);
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbIkVycm9yQm91bmRhcnkiLCJlcnJvciIsImV2ZW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJoYXNFcnJvciIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFBRUMsV0FBSyxFQUFFO0FBQVQsSzs7Z09BY2dCLFVBQUNDLEtBQUQsRUFBVztBQUNqQyxZQUFLQyxRQUFMLENBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZCO0FBQ0EsZUFBTztBQUFFSCxlQUFLLEVBQUU7QUFBVCxTQUFQO0FBQ0QsT0FIRDtBQUlELEs7Ozs7Ozs7c0NBWmlCQSxLLEVBQU9JLFMsRUFBVztBQUNsQztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBWjtBQUNBLFdBQUtFLFFBQUwsQ0FBYztBQUFDRixhQUFLLEVBQUVBO0FBQVIsT0FBZDtBQUNEOzs7NkJBU1E7QUFDUCxVQUFJLEtBQUtHLEtBQUwsQ0FBV0ksUUFBZixFQUF5QjtBQUN2QjtBQUNBO0FBQ0EsZUFDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLGtFQUFEO0FBQ0UsY0FBSSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0gsS0FEbkI7QUFFRSxxQkFBVyxFQUFFLEtBQUtRLHFCQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUcsS0FBS0wsS0FBTCxDQUFXSCxLQUFYLEdBQW1CLEtBQUtHLEtBQUwsQ0FBV0gsS0FBOUIsR0FBc0MsV0FKekMsQ0FERixFQU9HLEtBQUtTLEtBQUwsQ0FBV0MsUUFQZCxDQURGO0FBV0Q7O0FBRUQsYUFBTyxLQUFLRCxLQUFMLENBQVdDLFFBQWxCO0FBQ0Q7Ozs2Q0FyQytCVixLLEVBQU87QUFDckM7QUFDQSxhQUFPO0FBQUVBLGFBQUssRUFBRUE7QUFBVCxPQUFQO0FBQ0Q7Ozs7RUFOeUJXLDRDQUFLLENBQUNDLFM7O0FBMkNuQmIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0YWxvZy5hNTE0ZjljZTg2NzQ5ZGUwMGU1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1eCBmcm9tIFwiLi4vQXV4aWxpYXJ5L0F1eGlsaWFyeVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTW9kYWwvTW9kYWxcIjtcclxuXHJcbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0geyBlcnJvcjogbnVsbCB9O1xyXG5cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XHJcbiAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUkuXHJcbiAgICByZXR1cm4geyBlcnJvcjogZXJyb3IgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgIC8vIFlvdSBjYW4gYWxzbyBsb2cgdGhlIGVycm9yIHRvIGFuIGVycm9yIHJlcG9ydGluZyBzZXJ2aWNlXHJcbiAgICBjb25zb2xlLmxvZyhcIjExMTExMTExMTExMTExMTExMTExMTExXCIpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IGVycm9yfSk7XHJcbiAgfVxyXG5cclxuICBlcnJvckNvbmZpcm1lZEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgIC8vIEltcG9ydGFudDogcmVhZCBgc3RhdGVgIGluc3RlYWQgb2YgYHRoaXMuc3RhdGVgIHdoZW4gdXBkYXRpbmcuXHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBudWxsIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICAvLyBZb3UgY2FuIHJlbmRlciBhbnkgY3VzdG9tIGZhbGxiYWNrIFVJXHJcbiAgICAgIC8vIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcuPC9oMT47XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1eD5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLmVycm9yfVxyXG4gICAgICAgICAgICBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yID8gdGhpcy5zdGF0ZS5lcnJvciA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXg+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9