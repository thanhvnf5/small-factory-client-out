webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../i18n */ "./src/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_initialize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/initialize */ "./src/shared/initialize.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _shared_cookie__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/cookie */ "./src/shared/cookie.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/axios */ "./src/services/axios.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




















var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reqInterceptor = _services_axios__WEBPACK_IMPORTED_MODULE_24__["default"].interceptors.request.use(function (config) {
        config.headers["Access-Control-Allow-Origin"] = "*";

        if (config.url.indexOf("authenticate") > -1) {
          return config;
        }

        var token = Object(_shared_cookie__WEBPACK_IMPORTED_MODULE_23__["getCookie"])("token");

        if (token) {
          config.headers["Authorization"] = "Bearer " + token;
        }

        var userId = localStorage.getItem("userId");

        if (userId) {
          config.headers["UserInfo"] = JSON.stringify({
            userId: userId
          });
        }

        return config;
      }, function (error) {
        Promise.reject(error);
      });
      this.resInterceptor = _services_axios__WEBPACK_IMPORTED_MODULE_24__["default"].interceptors.response.use(function (res) {
        return res;
      }, function (error) {
        // Reject promise if usual error
        if (error && error.response && error.response.status !== 401) {
          return Promise.reject(error);
        }
        /*
         * When response code is 401, try to refresh the token.
         * Eject the interceptor so it doesn't loop in case
         * token refresh causes the 401 response
         */
        // axios.interceptors.response.eject(this.resInterceptor);


        var userName = localStorage.getItem("userName");
        return _services_axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("/authenticate/refresh-token", {
          params: {
            refreshToken: Object(_shared_cookie__WEBPACK_IMPORTED_MODULE_23__["getCookie"])("refreshToken"),
            userName: userName
          }
        }).then(function (response) {
          /*saveToken();*/
          Object(_shared_cookie__WEBPACK_IMPORTED_MODULE_23__["setCookie"])("token", response.data.token);
          Object(_shared_cookie__WEBPACK_IMPORTED_MODULE_23__["setCookie"])("refreshToken", response.data.refreshToken);
          error.response.config.headers["Authorization"] = "Bearer " + response.data.token;
          return Object(_services_axios__WEBPACK_IMPORTED_MODULE_24__["default"])(error.response.config);
        })["catch"](function (error) {
          /*destroyToken();*/
          Object(_shared_cookie__WEBPACK_IMPORTED_MODULE_23__["removeCookie"])("token"); // Router.push("/sigin");

          return Promise.reject(error);
        })["finally"](function () {});
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _services_axios__WEBPACK_IMPORTED_MODULE_24__["default"].interceptors.request.eject(this.reqInterceptor);
      _services_axios__WEBPACK_IMPORTED_MODULE_24__["default"].interceptors.response.eject(this.resInterceptor);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          dispatch = _this$props.dispatch;
      console.log(new Date().toLocaleString() + " ............ App.render.");
      var token = js_cookie__WEBPACK_IMPORTED_MODULE_19___default.a.get("token");
      dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_20__["authTokenExist"])(token != null));
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, __jsx("title", null, "Kim Ngoc Thuy"), __jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["ThemeProvider"], {
        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_22__["default"]
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_15__["default"], null), __jsx(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var pageProps, initProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(context);
                console.log(new Date().toLocaleString() + " ............ App initialize ..."); // initialize(context.ctx);

                if (context.ctx.req) {
                  /* console.log(
                    new Date().toLocaleString() +
                      " ............ App.getInitialProps: server."
                  ); */
                } else {
                    /* console.log(
                      new Date().toLocaleString() +
                        " ............ App.getInitialProps: client."
                    ); */
                  }

                if (!context.Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return context.Component.getInitialProps(context.ctx);

              case 5:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 8:
                _context.t0 = {};

              case 9:
                pageProps = _context.t0;
                initProps = Object(_shared_initialize__WEBPACK_IMPORTED_MODULE_18__["default"])(context.ctx); //Anything returned here can be accessed by the client

                return _context.abrupt("return", {
                  pageProps: _objectSpread(_objectSpread({}, initProps), pageProps)
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a); // MyApp.getInitialProps = async (appContext) => ({
//   ...(await App.getInitialProps(appContext)),
// });


MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_16__["wrapper"].withRedux(Object(_i18n__WEBPACK_IMPORTED_MODULE_17__["appWithTranslation"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])()(MyApp))));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJyZXFJbnRlcmNlcHRvciIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImhlYWRlcnMiLCJ1cmwiLCJpbmRleE9mIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc0ludGVyY2VwdG9yIiwicmVzcG9uc2UiLCJyZXMiLCJzdGF0dXMiLCJ1c2VyTmFtZSIsImdldCIsInBhcmFtcyIsInJlZnJlc2hUb2tlbiIsInRoZW4iLCJzZXRDb29raWUiLCJkYXRhIiwicmVtb3ZlQ29va2llIiwiZWplY3QiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNvb2tpZSIsImF1dGhUb2tlbkV4aXN0IiwidGhlbWUiLCJjb250ZXh0IiwiY3R4IiwicmVxIiwiZ2V0SW5pdGlhbFByb3BzIiwiaW5pdFByb3BzIiwiaW5pdGlhbGl6ZSIsIkFwcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7d0NBOEJnQjtB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T2EsU0FBUCxHQUFxQmIsU0FBckI7QUFBWCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNCU2UsK0MsR0EwSHBCO0FBQ0E7QUFDQTs7O0FBRUFsRCxLQUFLLENBQUNtRCxTQUFOLEdBQWtCO0FBQ2hCakIsV0FBUyxFQUFFa0Isa0RBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEakI7QUFFaEJuQixXQUFTLEVBQUVpQixrREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZaLENBQWxCO0FBS2VFLDhHQUFPLENBQUNDLFNBQVIsQ0FBa0JDLGlFQUFrQixDQUFDQyw0REFBTyxHQUFHM0QsS0FBSCxDQUFSLENBQXBDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hYTRiOGE4MDA0Y2EzZmJiYjkxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uL2kxOG5cIjtcclxuXHJcbmltcG9ydCBpbml0aWFsaXplIGZyb20gXCIuLi9zaGFyZWQvaW5pdGlhbGl6ZVwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgYXV0aFRva2VuRXhpc3QgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldENvb2tpZSwgc2V0Q29va2llLCByZW1vdmVDb29raWUgfSBmcm9tIFwiLi4vc2hhcmVkL2Nvb2tpZVwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi9zZXJ2aWNlcy9heGlvc1wiO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIC8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxyXG4gIC8vIGV2ZXJ5IHNpbmdsZSBwYWdlIGluIHlvdXIgYXBwbGljYXRpb24uIFRoaXMgZGlzYWJsZXMgdGhlIGFiaWxpdHkgdG9cclxuICAvLyBwZXJmb3JtIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLCBjYXVzaW5nIGV2ZXJ5IHBhZ2UgaW4geW91ciBhcHAgdG9cclxuICAvLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArIFwiIC4uLi4uLi4uLi4uLiBBcHAgaW5pdGlhbGl6ZSAuLi5cIlxyXG4gICAgKTtcclxuICAgIC8vIGluaXRpYWxpemUoY29udGV4dC5jdHgpO1xyXG4gICAgaWYgKGNvbnRleHQuY3R4LnJlcSkge1xyXG4gICAgICAvKiBjb25zb2xlLmxvZyhcclxuICAgICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgK1xyXG4gICAgICAgICAgXCIgLi4uLi4uLi4uLi4uIEFwcC5nZXRJbml0aWFsUHJvcHM6IHNlcnZlci5cIlxyXG4gICAgICApOyAqL1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLyogY29uc29sZS5sb2coXHJcbiAgICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICtcclxuICAgICAgICAgIFwiIC4uLi4uLi4uLi4uLiBBcHAuZ2V0SW5pdGlhbFByb3BzOiBjbGllbnQuXCJcclxuICAgICAgKTsgKi9cclxuICAgIH1cclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IGNvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICA/IGF3YWl0IGNvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjb250ZXh0LmN0eClcclxuICAgICAgOiB7fTtcclxuICAgIGNvbnN0IGluaXRQcm9wcyA9IGluaXRpYWxpemUoY29udGV4dC5jdHgpO1xyXG4gICAgLy9Bbnl0aGluZyByZXR1cm5lZCBoZXJlIGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgY2xpZW50XHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHM6IHsgLi4uaW5pdFByb3BzLCAuLi5wYWdlUHJvcHMgfSB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJlcUludGVyY2VwdG9yID0gYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgICAoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uZmlnLmhlYWRlcnNbXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIl0gPSBcIipcIjtcclxuICAgICAgICBpZiAoY29uZmlnLnVybC5pbmRleE9mKFwiYXV0aGVudGljYXRlXCIpID4gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgY29uZmlnLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xyXG4gICAgICAgIGlmICh1c2VySWQpIHtcclxuICAgICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiVXNlckluZm9cIl0gPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJJZDogdXNlcklkIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnJlc0ludGVyY2VwdG9yID0gYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgICAgKHJlcykgPT4gcmVzLFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBSZWplY3QgcHJvbWlzZSBpZiB1c3VhbCBlcnJvclxyXG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQwMSkge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogV2hlbiByZXNwb25zZSBjb2RlIGlzIDQwMSwgdHJ5IHRvIHJlZnJlc2ggdGhlIHRva2VuLlxyXG4gICAgICAgICAqIEVqZWN0IHRoZSBpbnRlcmNlcHRvciBzbyBpdCBkb2Vzbid0IGxvb3AgaW4gY2FzZVxyXG4gICAgICAgICAqIHRva2VuIHJlZnJlc2ggY2F1c2VzIHRoZSA0MDEgcmVzcG9uc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZWplY3QodGhpcy5yZXNJbnRlcmNlcHRvcik7XHJcblxyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIik7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgICAuZ2V0KFwiL2F1dGhlbnRpY2F0ZS9yZWZyZXNoLXRva2VuXCIsIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBnZXRDb29raWUoXCJyZWZyZXNoVG9rZW5cIiksXHJcbiAgICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvKnNhdmVUb2tlbigpOyovXHJcbiAgICAgICAgICAgIHNldENvb2tpZShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICBzZXRDb29raWUoXCJyZWZyZXNoVG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZS5jb25maWcuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPVxyXG4gICAgICAgICAgICAgIFwiQmVhcmVyIFwiICsgcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zKGVycm9yLnJlc3BvbnNlLmNvbmZpZyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvKmRlc3Ryb3lUb2tlbigpOyovXHJcbiAgICAgICAgICAgIHJlbW92ZUNvb2tpZShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB7fSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LmVqZWN0KHRoaXMucmVxSW50ZXJjZXB0b3IpO1xyXG4gICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmVqZWN0KHRoaXMucmVzSW50ZXJjZXB0b3IpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gQXBwLnJlbmRlci5cIik7XHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcclxuICAgIGRpc3BhdGNoKGF1dGhUb2tlbkV4aXN0KHRva2VuICE9IG51bGwpKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5LaW0gTmdvYyBUaHV5PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XHJcbiAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+ICh7XHJcbi8vICAgLi4uKGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkpLFxyXG4vLyB9KTtcclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoYXBwV2l0aFRyYW5zbGF0aW9uKGNvbm5lY3QoKShNeUFwcCkpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==