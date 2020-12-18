webpackHotUpdate_N_E("pages/manageStore",{

/***/ "./src/pages/manageStore.js":
/*!**********************************!*\
  !*** ./src/pages/manageStore.js ***!
  \**********************************/
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
/* harmony import */ var _containers_ManageStoreContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/ManageStoreContainer */ "./src/containers/ManageStoreContainer.js");
/* harmony import */ var _hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hocs/Layout/Layout */ "./src/hocs/Layout/Layout.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n */ "./src/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_7__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





/************************************************** Constructor */

function ManageStore(props) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(startClock());
  // }, [dispatch]);

  /************************************************** render */
  // console.log(new Date().toLocaleString() + " ............ ManageStore render");
  return __jsx(_hocs_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    title: "ManageStore",
    leftDrawerItems: props.items
  }), __jsx(_containers_ManageStoreContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

_c = ManageStore;
ManageStore.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
}; // ManageStore.defaultProps = {
//   namespacesRequired: ["common", "home"],
// };

ManageStore.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {} else {
                /* console.log(
                  new Date().toLocaleString() +
                    " ............ ManageStore.getInitialProps: client."
                ); */
              }
            /* console.log(
              new Date().toLocaleString() + " ............ ManageStore.getInitialProps."
            ); */
            // const initProps = initialize(ctx);


            return _context.abrupt("return", {
              // ...initProps,
              namespacesRequired: ["common", "home", "layout"],
              currentPage: "/manageStore",
              items: [{
                key: "purchase",
                label: "Nhập mua"
              }, {
                key: "exportToFactory",
                label: "Xuất cho thợ"
              }, {
                key: "factoryTransfer",
                label: "Chuyển đổi"
              }, {
                key: "importErrorFromFactory",
                label: "Nhập hư"
              }, {
                key: "importFromFactory",
                label: "Nhập từ thợ"
              }, {
                key: "sell",
                label: "Xuất bán"
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withTranslation"])("home")(ManageStore));

var _c;

$RefreshReg$(_c, "ManageStore");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21hbmFnZVN0b3JlLmpzIl0sIm5hbWVzIjpbIk1hbmFnZVN0b3JlIiwicHJvcHMiLCJpdGVtcyIsInByb3BUeXBlcyIsInQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsImN1cnJlbnRQYWdlIiwia2V5IiwibGFiZWwiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQjtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FDRSxNQUFDLDJEQUFELHlGQUFZQSxLQUFaO0FBQW1CLFNBQUssRUFBQyxhQUF6QjtBQUF1QyxtQkFBZSxFQUFFQSxLQUFLLENBQUNDO0FBQTlELE1BQ0UsTUFBQyx3RUFBRCxPQURGLENBREY7QUFLRDs7S0FkUUYsVztBQWdCVEEsV0FBVyxDQUFDRyxTQUFaLEdBQXdCO0FBQ3RCQyxHQUFDLEVBQUVDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESSxDQUF4QixDLENBSUE7QUFDQTtBQUNBOztBQUVBUCxXQUFXLENBQUNRLGVBQVo7QUFBQSw4TEFBOEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1QixnQkFBSSxLQUFKLEVBQXNCLEVBQXRCLE1BZ0JPO0FBQ0w7Ozs7QUFJRDtBQUVEOzs7QUFHQTs7O0FBM0I0Qiw2Q0E0QnJCO0FBQ0w7QUFDQUMsZ0NBQWtCLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixRQUFuQixDQUZmO0FBR0xDLHlCQUFXLEVBQUUsY0FIUjtBQUlMVCxtQkFBSyxFQUFFLENBQ0w7QUFBRVUsbUJBQUcsRUFBRSxVQUFQO0FBQW1CQyxxQkFBSyxFQUFFO0FBQTFCLGVBREssRUFFTDtBQUFFRCxtQkFBRyxFQUFFLGlCQUFQO0FBQTBCQyxxQkFBSyxFQUFFO0FBQWpDLGVBRkssRUFHTDtBQUFFRCxtQkFBRyxFQUFFLGlCQUFQO0FBQTBCQyxxQkFBSyxFQUFFO0FBQWpDLGVBSEssRUFJTDtBQUFFRCxtQkFBRyxFQUFFLHdCQUFQO0FBQWlDQyxxQkFBSyxFQUFFO0FBQXhDLGVBSkssRUFLTDtBQUFFRCxtQkFBRyxFQUFFLG1CQUFQO0FBQTRCQyxxQkFBSyxFQUFFO0FBQW5DLGVBTEssRUFNTDtBQUFFRCxtQkFBRyxFQUFFLE1BQVA7QUFBZUMscUJBQUssRUFBRTtBQUF0QixlQU5LO0FBSkYsYUE1QnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTJDZUMsNEhBQWUsQ0FBQyxNQUFELENBQWYsQ0FBd0JkLFdBQXhCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFuYWdlU3RvcmUuOWJiNjgzYTg0MmJiYzllYzlhMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFuYWdlU3RvcmVDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTWFuYWdlU3RvcmVDb250YWluZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vaG9jcy9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi9pMThuXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuZnVuY3Rpb24gTWFuYWdlU3RvcmUocHJvcHMpIHtcclxuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChzdGFydENsb2NrKCkpO1xyXG4gIC8vIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIE1hbmFnZVN0b3JlIHJlbmRlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB7Li4ucHJvcHN9IHRpdGxlPVwiTWFuYWdlU3RvcmVcIiBsZWZ0RHJhd2VySXRlbXM9e3Byb3BzLml0ZW1zfT5cclxuICAgICAgPE1hbmFnZVN0b3JlQ29udGFpbmVyIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5NYW5hZ2VTdG9yZS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbi8vIE1hbmFnZVN0b3JlLmRlZmF1bHRQcm9wcyA9IHtcclxuLy8gICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiLCBcImhvbWVcIl0sXHJcbi8vIH07XHJcblxyXG5NYW5hZ2VTdG9yZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIC4uLi4uLi4uLi4uLiBNYW5hZ2VTdG9yZS5nZXRJbml0aWFsUHJvcHM6IHNlcnZlci5cIlxyXG4gICAgKTsgKi9cclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyBcdGNvbnN0IENvb2tpZXMgPSByZXF1aXJlKCdjb29raWVzJylcclxuICAgIC8vIFx0Y29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSwgcmVzKVxyXG4gICAgLy8gXHRjb25zdCBhdXRoVG9rZW4gPSBjb29raWVzLmdldCgndG9rZW4nKSB8fCAnJ1xyXG4gICAgLy8gXHRjb25zdCB7IGVtYWlsIH0gPSBhd2FpdCBheGlvc1xyXG4gICAgLy8gXHRcdC5nZXQoYCR7QVBJX1VSTH0vbWVgLCB7IGhlYWRlcnM6IHsgJ3Rva2VuJzogYXV0aFRva2VuIH0gfSlcclxuICAgIC8vIFx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpXHJcbiAgICAvLyBcdHJldHVybiB7IGluaXRpYWxMb2dpblN0YXR1czogYExvZ2dlZCBpbiBhcyAke2VtYWlsfWAgfVxyXG4gICAgLy8gfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAvLyBcdHJldHVybiB7IGluaXRpYWxMb2dpblN0YXR1czogJ05vdCBsb2dnZWQgaW4nIH1cclxuICAgIC8vIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLyogY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArXHJcbiAgICAgICAgXCIgLi4uLi4uLi4uLi4uIE1hbmFnZVN0b3JlLmdldEluaXRpYWxQcm9wczogY2xpZW50LlwiXHJcbiAgICApOyAqL1xyXG4gIH1cclxuXHJcbiAgLyogY29uc29sZS5sb2coXHJcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gTWFuYWdlU3RvcmUuZ2V0SW5pdGlhbFByb3BzLlwiXHJcbiAgKTsgKi9cclxuICAvLyBjb25zdCBpbml0UHJvcHMgPSBpbml0aWFsaXplKGN0eCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIC4uLmluaXRQcm9wcyxcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogW1wiY29tbW9uXCIsIFwiaG9tZVwiLCBcImxheW91dFwiXSxcclxuICAgIGN1cnJlbnRQYWdlOiBcIi9tYW5hZ2VTdG9yZVwiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBrZXk6IFwicHVyY2hhc2VcIiwgbGFiZWw6IFwiTmjhuq1wIG11YVwiIH0sXHJcbiAgICAgIHsga2V5OiBcImV4cG9ydFRvRmFjdG9yeVwiLCBsYWJlbDogXCJYdeG6pXQgY2hvIHRo4bujXCIgfSxcclxuICAgICAgeyBrZXk6IFwiZmFjdG9yeVRyYW5zZmVyXCIsIGxhYmVsOiBcIkNodXnhu4NuIMSR4buVaVwiIH0sXHJcbiAgICAgIHsga2V5OiBcImltcG9ydEVycm9yRnJvbUZhY3RvcnlcIiwgbGFiZWw6IFwiTmjhuq1wIGjGsFwiIH0sXHJcbiAgICAgIHsga2V5OiBcImltcG9ydEZyb21GYWN0b3J5XCIsIGxhYmVsOiBcIk5o4bqtcCB04burIHRo4bujXCIgfSxcclxuICAgICAgeyBrZXk6IFwic2VsbFwiLCBsYWJlbDogXCJYdeG6pXQgYsOhblwiIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oXCJob21lXCIpKE1hbmFnZVN0b3JlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==