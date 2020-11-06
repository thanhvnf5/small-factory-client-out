webpackHotUpdate_N_E("pages/catalog",{

/***/ "./src/containers/CatalogContainer.js":
/*!********************************************!*\
  !*** ./src/containers/CatalogContainer.js ***!
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
/* harmony import */ var _hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hocs/Auxiliary/Auxiliary */ "./src/hocs/Auxiliary/Auxiliary.js");
/* harmony import */ var _DeptContainer_DeptContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeptContainer/DeptContainer */ "./src/containers/DeptContainer/DeptContainer.js");
/* harmony import */ var _EmployeeContainer_EmployeeContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EmployeeContainer/EmployeeContainer */ "./src/containers/EmployeeContainer/EmployeeContainer.js");
/* harmony import */ var _GoldTypeContainer_GoldTypeContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GoldTypeContainer/GoldTypeContainer */ "./src/containers/GoldTypeContainer/GoldTypeContainer.js");
/* harmony import */ var _hocs_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hocs/ErrorBoundary/ErrorBoundary */ "./src/hocs/ErrorBoundary/ErrorBoundary.js");







var _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\containers\\CatalogContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








/************************************************** Constructor */

var CatalogContainer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CatalogContainer, _React$Component);

  var _super = _createSuper(CatalogContainer);

  function CatalogContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CatalogContainer);

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
          lineNumber: 20,
          columnNumber: 7
        }
      }, leftDrawerKey === "dept" ? __jsx(_DeptContainer_DeptContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 37
        }
      }) : null, leftDrawerKey === "employee" ? __jsx(_hocs_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, __jsx(_EmployeeContainer_EmployeeContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      })) : null, leftDrawerKey === "goldType" ? __jsx(_GoldTypeContainer_GoldTypeContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 41
        }
      }) : null);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CatalogContainer, [{
    key: "render",

    /************************************************** render */
    value: function render() {
      console.log(new Date().toLocaleString() + " ............ CatalogContainer render");
      return __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 12
        }
      }, this.generateBody());
    }
  }]);

  return CatalogContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    leftDrawerItem: state.common.leftDrawerItem
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(CatalogContainer));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvQ2F0YWxvZ0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nQ29udGFpbmVyIiwibGVmdERyYXdlcktleSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiZ2VuZXJhdGVCb2R5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxlZnREcmF3ZXJJdGVtIiwiY29tbW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFDTUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0ksRTs7dU5BRU8sWUFBTTtBQUNuQixVQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBQ0EsZ0JBQXFCO0FBQ25CQSxxQkFBYSxHQUFHQSxhQUFhLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsQ0FBaEM7QUFDRDs7QUFFRCxhQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFR0gsYUFBYSxLQUFLLE1BQWxCLEdBQTJCLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEzQixHQUErQyxJQUZsRCxFQUdHQSxhQUFhLEtBQUssVUFBbEIsR0FDQyxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURELEdBSUcsSUFQTixFQVFHQSxhQUFhLEtBQUssVUFBbEIsR0FBK0IsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQS9CLEdBQXVELElBUjFELENBREY7QUFZRCxLOzs7Ozs7OztBQUVEOzZCQUNTO0FBQ1BJLGFBQU8sQ0FBQ0MsR0FBUixDQUNFLElBQUlDLElBQUosR0FBV0MsY0FBWCxLQUE4Qix1Q0FEaEM7QUFHQSxhQUFPLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNLEtBQUtDLFlBQUwsRUFBTixDQUFQO0FBQ0Q7Ozs7RUE3QjRCQyw0Q0FBSyxDQUFDQyxTOztBQWdDckMsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMQyxrQkFBYyxFQUFFRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQ7QUFEeEIsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTyxFQUFQO0FBQ0QsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkNoQixnQkFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhbG9nLmFkYzZhNzhiMTQ2NTdjMTQ2YWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEF1eCBmcm9tIFwiLi4vaG9jcy9BdXhpbGlhcnkvQXV4aWxpYXJ5XCI7XHJcbmltcG9ydCBEZXB0Q29udGFpbmVyIGZyb20gXCIuL0RlcHRDb250YWluZXIvRGVwdENvbnRhaW5lclwiO1xyXG5pbXBvcnQgRW1wbG95ZWVDb250YWluZXIgZnJvbSBcIi4vRW1wbG95ZWVDb250YWluZXIvRW1wbG95ZWVDb250YWluZXJcIjtcclxuaW1wb3J0IEdvbGRUeXBlQ29udGFpbmVyIGZyb20gXCIuL0dvbGRUeXBlQ29udGFpbmVyL0dvbGRUeXBlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gXCIuLi9ob2NzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeVwiO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbmNsYXNzIENhdGFsb2dDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge307XHJcblxyXG4gIGdlbmVyYXRlQm9keSA9ICgpID0+IHtcclxuICAgIGxldCBsZWZ0RHJhd2VyS2V5ID0gXCJcIjtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgbGVmdERyYXdlcktleSA9IGxlZnREcmF3ZXJLZXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxlZnRTZWxlY3RlZEtleVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgey8qIHt0aGlzLnByb3BzLmxlZnREcmF3ZXJJdGVtID8gdGhpcy5wcm9wcy5sZWZ0RHJhd2VySXRlbS5sYWJlbCA6IG51bGx9ICovfVxyXG4gICAgICAgIHtsZWZ0RHJhd2VyS2V5ID09PSBcImRlcHRcIiA/IDxEZXB0Q29udGFpbmVyIC8+IDogbnVsbH1cclxuICAgICAgICB7bGVmdERyYXdlcktleSA9PT0gXCJlbXBsb3llZVwiID8gKFxyXG4gICAgICAgICAgPEVycm9yQm91bmRhcnk+XHJcbiAgICAgICAgICAgIDxFbXBsb3llZUNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtsZWZ0RHJhd2VyS2V5ID09PSBcImdvbGRUeXBlXCIgPyA8R29sZFR5cGVDb250YWluZXIgLz4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gQ2F0YWxvZ0NvbnRhaW5lciByZW5kZXJcIlxyXG4gICAgKTtcclxuICAgIHJldHVybiA8QXV4Pnt0aGlzLmdlbmVyYXRlQm9keSgpfTwvQXV4PjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsZWZ0RHJhd2VySXRlbTogc3RhdGUuY29tbW9uLmxlZnREcmF3ZXJJdGVtLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXRhbG9nQ29udGFpbmVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==