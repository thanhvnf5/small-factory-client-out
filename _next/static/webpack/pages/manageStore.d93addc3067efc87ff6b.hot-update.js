webpackHotUpdate_N_E("pages/manageStore",{

/***/ "./src/containers/ManageStoreContainer.js":
/*!************************************************!*\
  !*** ./src/containers/ManageStoreContainer.js ***!
  \************************************************/
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
/* harmony import */ var _ExportToFactoryContainer_ExportToFactoryContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExportToFactoryContainer/ExportToFactoryContainer */ "./src/containers/ExportToFactoryContainer/ExportToFactoryContainer.js");
/* harmony import */ var _FactoryTransferContainer_FactoryTransferContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FactoryTransferContainer/FactoryTransferContainer */ "./src/containers/FactoryTransferContainer/FactoryTransferContainer.js");
/* harmony import */ var _ImportFromFactoryContainer_ImportFromFactoryContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImportFromFactoryContainer/ImportFromFactoryContainer */ "./src/containers/ImportFromFactoryContainer/ImportFromFactoryContainer.js");
/* harmony import */ var _PurchaseContainer_PurchaseContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PurchaseContainer/PurchaseContainer */ "./src/containers/PurchaseContainer/PurchaseContainer.js");
/* harmony import */ var _SellContainer_SellContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SellContainer/SellContainer */ "./src/containers/SellContainer/SellContainer.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









/************************************************** Constructor */

var ManageStoreContainer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ManageStoreContainer, _React$Component);

  var _super = _createSuper(ManageStoreContainer);

  function ManageStoreContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ManageStoreContainer);

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
        }
      }, leftDrawerKey === "purchase" ? __jsx(_PurchaseContainer_PurchaseContainer__WEBPACK_IMPORTED_MODULE_13__["default"], null) : null, leftDrawerKey === "exportToFactory" ? __jsx(_ExportToFactoryContainer_ExportToFactoryContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        exportTypeId: 1
      }) : null, leftDrawerKey === "factoryTransfer" ? __jsx(_FactoryTransferContainer_FactoryTransferContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null) : null, leftDrawerKey === "importFromFactory" ? __jsx(_ImportFromFactoryContainer_ImportFromFactoryContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        importTypeId: 1
      }) : null, leftDrawerKey === "importErrorFromFactory" ? __jsx(_ImportFromFactoryContainer_ImportFromFactoryContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        importTypeId: 2
      }) : null, leftDrawerKey === "sell" ? __jsx(_SellContainer_SellContainer__WEBPACK_IMPORTED_MODULE_14__["default"], null) : null);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ManageStoreContainer, [{
    key: "render",

    /************************************************** render */
    value: function render() {
      console.log(new Date().toLocaleString() + " ............ ManageStoreContainer render");
      return __jsx(_hocs_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__["default"], null, this.generateBody());
    }
  }]);

  return ManageStoreContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    leftDrawerItem: state.common.leftDrawerItem
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(ManageStoreContainer));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvTWFuYWdlU3RvcmVDb250YWluZXIuanMiXSwibmFtZXMiOlsiTWFuYWdlU3RvcmVDb250YWluZXIiLCJsZWZ0RHJhd2VyS2V5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJnZW5lcmF0ZUJvZHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGVmdERyYXdlckl0ZW0iLCJjb21tb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBQ01BLG9COzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJLEU7O3VOQUVPLFlBQU07QUFDbkIsVUFBSUMsYUFBYSxHQUFHLEVBQXBCOztBQUNBLGdCQUFxQjtBQUNuQkEscUJBQWEsR0FBR0EsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWhDO0FBQ0Q7O0FBRUQsYUFDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVY7QUFBWixTQUNHSCxhQUFhLEtBQUssVUFBbEIsR0FBK0IsTUFBQyw2RUFBRCxPQUEvQixHQUF1RCxJQUQxRCxFQUVHQSxhQUFhLEtBQUssaUJBQWxCLEdBQ0MsTUFBQywyRkFBRDtBQUEwQixvQkFBWSxFQUFFO0FBQXhDLFFBREQsR0FFRyxJQUpOLEVBS0dBLGFBQWEsS0FBSyxpQkFBbEIsR0FDQyxNQUFDLDJGQUFELE9BREQsR0FFRyxJQVBOLEVBUUdBLGFBQWEsS0FBSyxtQkFBbEIsR0FDQyxNQUFDLCtGQUFEO0FBQTRCLG9CQUFZLEVBQUU7QUFBMUMsUUFERCxHQUVHLElBVk4sRUFXR0EsYUFBYSxLQUFLLHdCQUFsQixHQUNDLE1BQUMsK0ZBQUQ7QUFBNEIsb0JBQVksRUFBRTtBQUExQyxRQURELEdBRUcsSUFiTixFQWNHQSxhQUFhLEtBQUssTUFBbEIsR0FBMkIsTUFBQyxxRUFBRCxPQUEzQixHQUErQyxJQWRsRCxDQURGO0FBa0JELEs7Ozs7Ozs7O0FBRUQ7NkJBQ1M7QUFDUEksYUFBTyxDQUFDQyxHQUFSLENBQ0UsSUFBSUMsSUFBSixHQUFXQyxjQUFYLEtBQThCLDJDQURoQztBQUdBLGFBQU8sTUFBQyx5RUFBRCxRQUFnQixLQUFLQyxZQUFMLEVBQWhCLENBQVA7QUFDRDs7OztFQW5DZ0NDLDRDQUFLLENBQUNDLFM7O0FBc0N6QyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xDLGtCQUFjLEVBQUVELEtBQUssQ0FBQ0UsTUFBTixDQUFhRDtBQUR4QixHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPLEVBQVA7QUFDRCxDQUZEOztBQUllQywwSEFBTyxDQUNwQk4sZUFEb0IsRUFFcEJJLGtCQUZvQixDQUFQLENBR2JoQixvQkFIYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hbmFnZVN0b3JlLmQ5M2FkZGMzMDY3ZWZjODdmZjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSBcIi4uL2hvY3MvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5XCI7XHJcbmltcG9ydCBFeHBvcnRUb0ZhY3RvcnlDb250YWluZXIgZnJvbSBcIi4vRXhwb3J0VG9GYWN0b3J5Q29udGFpbmVyL0V4cG9ydFRvRmFjdG9yeUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgRmFjdG9yeVRyYW5zZmVyQ29udGFpbmVyIGZyb20gXCIuL0ZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lci9GYWN0b3J5VHJhbnNmZXJDb250YWluZXJcIjtcclxuaW1wb3J0IEltcG9ydEZyb21GYWN0b3J5Q29udGFpbmVyIGZyb20gXCIuL0ltcG9ydEZyb21GYWN0b3J5Q29udGFpbmVyL0ltcG9ydEZyb21GYWN0b3J5Q29udGFpbmVyXCI7XHJcbmltcG9ydCBQdXJjaGFzZUNvbnRhaW5lciBmcm9tIFwiLi9QdXJjaGFzZUNvbnRhaW5lci9QdXJjaGFzZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgU2VsbENvbnRhaW5lciBmcm9tIFwiLi9TZWxsQ29udGFpbmVyL1NlbGxDb250YWluZXJcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG5jbGFzcyBNYW5hZ2VTdG9yZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fTtcclxuXHJcbiAgZ2VuZXJhdGVCb2R5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGxlZnREcmF3ZXJLZXkgPSBcIlwiO1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICBsZWZ0RHJhd2VyS2V5ID0gbGVmdERyYXdlcktleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGVmdFNlbGVjdGVkS2V5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cclxuICAgICAgICB7bGVmdERyYXdlcktleSA9PT0gXCJwdXJjaGFzZVwiID8gPFB1cmNoYXNlQ29udGFpbmVyIC8+IDogbnVsbH1cclxuICAgICAgICB7bGVmdERyYXdlcktleSA9PT0gXCJleHBvcnRUb0ZhY3RvcnlcIiA/IChcclxuICAgICAgICAgIDxFeHBvcnRUb0ZhY3RvcnlDb250YWluZXIgZXhwb3J0VHlwZUlkPXsxfSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtsZWZ0RHJhd2VyS2V5ID09PSBcImZhY3RvcnlUcmFuc2ZlclwiID8gKFxyXG4gICAgICAgICAgPEZhY3RvcnlUcmFuc2ZlckNvbnRhaW5lciAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtsZWZ0RHJhd2VyS2V5ID09PSBcImltcG9ydEZyb21GYWN0b3J5XCIgPyAoXHJcbiAgICAgICAgICA8SW1wb3J0RnJvbUZhY3RvcnlDb250YWluZXIgaW1wb3J0VHlwZUlkPXsxfSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtsZWZ0RHJhd2VyS2V5ID09PSBcImltcG9ydEVycm9yRnJvbUZhY3RvcnlcIiA/IChcclxuICAgICAgICAgIDxJbXBvcnRGcm9tRmFjdG9yeUNvbnRhaW5lciBpbXBvcnRUeXBlSWQ9ezJ9IC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge2xlZnREcmF3ZXJLZXkgPT09IFwic2VsbFwiID8gPFNlbGxDb250YWluZXIgLz4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gTWFuYWdlU3RvcmVDb250YWluZXIgcmVuZGVyXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gPEVycm9yQm91bmRhcnk+e3RoaXMuZ2VuZXJhdGVCb2R5KCl9PC9FcnJvckJvdW5kYXJ5PjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsZWZ0RHJhd2VySXRlbTogc3RhdGUuY29tbW9uLmxlZnREcmF3ZXJJdGVtLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShNYW5hZ2VTdG9yZUNvbnRhaW5lcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=