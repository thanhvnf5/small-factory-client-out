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

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CatalogContainer, [{
    key: "render",

    /************************************************** render */
    value: function render() {
      /* console.log(
        new Date().toLocaleString() + " ............ CatalogContainer render"
      ); */
      return __jsx(_hocs_Auxiliary_Auxiliary__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          height: "100%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }, this.props.leftDrawerItem && this.props.leftDrawerItem.key === "dept" ? __jsx(_DeptContainer_DeptContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }) : null, this.props.leftDrawerItem && this.props.leftDrawerItem.key === "employee" ? __jsx(_EmployeeContainer_EmployeeContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }) : null, this.props.leftDrawerItem && this.props.leftDrawerItem.key === "goldType" ? __jsx(_GoldTypeContainer_GoldTypeContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }) : null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvQ2F0YWxvZ0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nQ29udGFpbmVyIiwiaGVpZ2h0IiwicHJvcHMiLCJsZWZ0RHJhd2VySXRlbSIsImtleSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUNNQSxnQjs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSSxFOzs7Ozs7OztBQUVSOzZCQUNTO0FBQ1A7OztBQUdBLGFBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVHLEtBQUtDLEtBQUwsQ0FBV0MsY0FBWCxJQUNELEtBQUtELEtBQUwsQ0FBV0MsY0FBWCxDQUEwQkMsR0FBMUIsS0FBa0MsTUFEakMsR0FFQyxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRCxHQUdHLElBTE4sRUFNRyxLQUFLRixLQUFMLENBQVdDLGNBQVgsSUFDRCxLQUFLRCxLQUFMLENBQVdDLGNBQVgsQ0FBMEJDLEdBQTFCLEtBQWtDLFVBRGpDLEdBRUMsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkQsR0FHRyxJQVROLEVBVUcsS0FBS0YsS0FBTCxDQUFXQyxjQUFYLElBQ0QsS0FBS0QsS0FBTCxDQUFXQyxjQUFYLENBQTBCQyxHQUExQixLQUFrQyxVQURqQyxHQUVDLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZELEdBR0csSUFiTixDQURGLENBREY7QUFtQkQ7Ozs7RUEzQjRCQyw0Q0FBSyxDQUFDQyxTOztBQThCckMsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMTCxrQkFBYyxFQUFFSyxLQUFLLENBQUNDLE1BQU4sQ0FBYU47QUFEeEIsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTU8sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTyxFQUFQO0FBQ0QsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNWLGdCQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGFsb2cuMzJlNzAzMzk3MmRhNTQyZGMwNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQXV4IGZyb20gXCIuLi9ob2NzL0F1eGlsaWFyeS9BdXhpbGlhcnlcIjtcclxuaW1wb3J0IERlcHRDb250YWluZXIgZnJvbSBcIi4vRGVwdENvbnRhaW5lci9EZXB0Q29udGFpbmVyXCI7XHJcbmltcG9ydCBFbXBsb3llZUNvbnRhaW5lciBmcm9tIFwiLi9FbXBsb3llZUNvbnRhaW5lci9FbXBsb3llZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgR29sZFR5cGVDb250YWluZXIgZnJvbSBcIi4vR29sZFR5cGVDb250YWluZXIvR29sZFR5cGVDb250YWluZXJcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jbGFzcyBDYXRhbG9nQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLyogY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBDYXRhbG9nQ29udGFpbmVyIHJlbmRlclwiXHJcbiAgICApOyAqL1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEF1eD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICB7Lyoge3RoaXMucHJvcHMubGVmdERyYXdlckl0ZW0gPyB0aGlzLnByb3BzLmxlZnREcmF3ZXJJdGVtLmxhYmVsIDogbnVsbH0gKi99XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5sZWZ0RHJhd2VySXRlbSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5sZWZ0RHJhd2VySXRlbS5rZXkgPT09IFwiZGVwdFwiID8gKFxyXG4gICAgICAgICAgICA8RGVwdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5sZWZ0RHJhd2VySXRlbSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5sZWZ0RHJhd2VySXRlbS5rZXkgPT09IFwiZW1wbG95ZWVcIiA/IChcclxuICAgICAgICAgICAgPEVtcGxveWVlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmxlZnREcmF3ZXJJdGVtICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmxlZnREcmF3ZXJJdGVtLmtleSA9PT0gXCJnb2xkVHlwZVwiID8gKFxyXG4gICAgICAgICAgICA8R29sZFR5cGVDb250YWluZXIgLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0F1eD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbGVmdERyYXdlckl0ZW06IHN0YXRlLmNvbW1vbi5sZWZ0RHJhd2VySXRlbSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2F0YWxvZ0NvbnRhaW5lcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=