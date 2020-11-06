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
      error: null,
      errorInfo: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "errorConfirmedHandler", function (event) {
      _this.setState({
        error: null,
        errorInfo: null
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo) {
        return __jsx(_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 9
          }
        }, __jsx(_components_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          show: this.state.errorInfo,
          modalClosed: this.errorConfirmedHandler,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }
        }, this.state.error ? this.state.error : "<<Error>>"), this.props.children);
      }

      return this.props.children;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvY3MvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbIkVycm9yQm91bmRhcnkiLCJlcnJvciIsImVycm9ySW5mbyIsImV2ZW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImVycm9yQ29uZmlybWVkSGFuZGxlciIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFBRUMsV0FBSyxFQUFFLElBQVQ7QUFBZUMsZUFBUyxFQUFFO0FBQTFCLEs7O2dPQVNnQixVQUFDQyxLQUFELEVBQVc7QUFDakMsWUFBS0MsUUFBTCxDQUFjO0FBQ1pILGFBQUssRUFBRSxJQURLO0FBRVpDLGlCQUFTLEVBQUU7QUFGQyxPQUFkO0FBSUQsSzs7Ozs7OztzQ0FaaUJELEssRUFBT0MsUyxFQUFXO0FBQ2xDLFdBQUtFLFFBQUwsQ0FBYztBQUNaSCxhQUFLLEVBQUVBLEtBREs7QUFFWkMsaUJBQVMsRUFBRUE7QUFGQyxPQUFkO0FBSUQ7Ozs2QkFTUTtBQUNQLFVBQUksS0FBS0csS0FBTCxDQUFXSCxTQUFmLEVBQTBCO0FBQ3hCLGVBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxrRUFBRDtBQUNFLGNBQUksRUFBRSxLQUFLRyxLQUFMLENBQVdILFNBRG5CO0FBRUUscUJBQVcsRUFBRSxLQUFLSSxxQkFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlHLEtBQUtELEtBQUwsQ0FBV0osS0FBWCxHQUFtQixLQUFLSSxLQUFMLENBQVdKLEtBQTlCLEdBQXNDLFdBSnpDLENBREYsRUFPRyxLQUFLTSxLQUFMLENBQVdDLFFBUGQsQ0FERjtBQVdEOztBQUVELGFBQU8sS0FBS0QsS0FBTCxDQUFXQyxRQUFsQjtBQUNEOzs7O0VBakN5QkMsNENBQUssQ0FBQ0MsUzs7QUFvQ25CViw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLmZhNzA2Yjk4NDUyODY0ZTA3NjNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV4IGZyb20gXCIuLi9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Nb2RhbC9Nb2RhbFwiO1xyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7IGVycm9yOiBudWxsLCBlcnJvckluZm86IG51bGwgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVycm9yOiBlcnJvcixcclxuICAgICAgZXJyb3JJbmZvOiBlcnJvckluZm8sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVycm9yQ29uZmlybWVkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICBlcnJvckluZm86IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvckluZm8pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QXV4PlxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuZXJyb3JJbmZvfVxyXG4gICAgICAgICAgICBtb2RhbENsb3NlZD17dGhpcy5lcnJvckNvbmZpcm1lZEhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yID8gdGhpcy5zdGF0ZS5lcnJvciA6IFwiPDxFcnJvcj4+XCJ9XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXg+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9