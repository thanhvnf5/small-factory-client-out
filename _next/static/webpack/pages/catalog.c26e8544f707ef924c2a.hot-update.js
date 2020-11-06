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
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        // return <h1>Something went wrong.</h1>;
        return __jsx(_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }
        }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          show: this.state.error,
          modalClosed: this.errorConfirmedHandler,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
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
    } // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   console.log(error);
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbIkVycm9yQm91bmRhcnkiLCJlcnJvciIsImV2ZW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImhhc0Vycm9yIiwiZXJyb3JDb25maXJtZWRIYW5kbGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsYTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLOztnT0FZZ0IsVUFBQ0MsS0FBRCxFQUFXO0FBQ2pDLFlBQUtDLFFBQUwsQ0FBYyxVQUFDQyxLQUFELEVBQVc7QUFDdkI7QUFDQSxlQUFPO0FBQUVILGVBQUssRUFBRTtBQUFULFNBQVA7QUFDRCxPQUhEO0FBSUQsSzs7Ozs7Ozs2QkFFUTtBQUNQLFVBQUksS0FBS0csS0FBTCxDQUFXQyxRQUFmLEVBQXlCO0FBQ3ZCO0FBQ0E7QUFDQSxlQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsa0VBQUQ7QUFDRSxjQUFJLEVBQUUsS0FBS0QsS0FBTCxDQUFXSCxLQURuQjtBQUVFLHFCQUFXLEVBQUUsS0FBS0sscUJBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJRyxLQUFLRixLQUFMLENBQVdILEtBQVgsR0FBbUIsS0FBS0csS0FBTCxDQUFXSCxLQUE5QixHQUFzQyxXQUp6QyxDQURGLEVBT0csS0FBS00sS0FBTCxDQUFXQyxRQVBkLENBREY7QUFXRDs7QUFFRCxhQUFPLEtBQUtELEtBQUwsQ0FBV0MsUUFBbEI7QUFDRDs7OzZDQW5DK0JQLEssRUFBTztBQUNyQztBQUNBLGFBQU87QUFBRUEsYUFBSyxFQUFFQTtBQUFULE9BQVA7QUFDRCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7O0VBWDBCUSw0Q0FBSyxDQUFDQyxTOztBQXlDbkJWLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGFsb2cuYzI2ZTg1NDRmNzA3ZWY5MjRjMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXggZnJvbSBcIi4uL0F1eGlsaWFyeS9BdXhpbGlhcnlcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL01vZGFsL01vZGFsXCI7XHJcblxyXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHsgZXJyb3I6IG51bGwgfTtcclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xyXG4gICAgLy8gVXBkYXRlIHN0YXRlIHNvIHRoZSBuZXh0IHJlbmRlciB3aWxsIHNob3cgdGhlIGZhbGxiYWNrIFVJLlxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yIH07XHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgLy8gICAvLyBZb3UgY2FuIGFsc28gbG9nIHRoZSBlcnJvciB0byBhbiBlcnJvciByZXBvcnRpbmcgc2VydmljZVxyXG4gIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIC8vIH1cclxuXHJcbiAgZXJyb3JDb25maXJtZWRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAvLyBJbXBvcnRhbnQ6IHJlYWQgYHN0YXRlYCBpbnN0ZWFkIG9mIGB0aGlzLnN0YXRlYCB3aGVuIHVwZGF0aW5nLlxyXG4gICAgICByZXR1cm4geyBlcnJvcjogbnVsbCB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcclxuICAgICAgLy8gWW91IGNhbiByZW5kZXIgYW55IGN1c3RvbSBmYWxsYmFjayBVSVxyXG4gICAgICAvLyByZXR1cm4gPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nLjwvaDE+O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXg+XHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5lcnJvcn1cclxuICAgICAgICAgICAgbW9kYWxDbG9zZWQ9e3RoaXMuZXJyb3JDb25maXJtZWRIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciA/IHRoaXMuc3RhdGUuZXJyb3IgOiBcIjw8RXJyb3I+PlwifVxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQXV4PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==