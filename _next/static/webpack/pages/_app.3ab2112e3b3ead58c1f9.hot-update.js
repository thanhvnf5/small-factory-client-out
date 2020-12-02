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
        if (error && error.response && error.response.status === 401) {
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
        } else {
          return Promise.reject(error);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJyZXFJbnRlcmNlcHRvciIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImhlYWRlcnMiLCJ1cmwiLCJpbmRleE9mIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc0ludGVyY2VwdG9yIiwicmVzcG9uc2UiLCJyZXMiLCJzdGF0dXMiLCJ1c2VyTmFtZSIsImdldCIsInBhcmFtcyIsInJlZnJlc2hUb2tlbiIsInRoZW4iLCJzZXRDb29raWUiLCJkYXRhIiwicmVtb3ZlQ29va2llIiwiZWplY3QiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImNvb2tpZSIsImF1dGhUb2tlbkV4aXN0IiwidGhlbWUiLCJjb250ZXh0IiwiY3R4IiwicmVxIiwiZ2V0SW5pdGlhbFByb3BzIiwiaW5pdFByb3BzIiwiaW5pdGlhbGl6ZSIsIkFwcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7d0NBOEJnQjtB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O0FBQUVWLDJCQUFTLGtDQUFPYSxTQUFQLEdBQXFCYixTQUFyQjtBQUFYLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0JTZSwrQyxHQTBIcEI7QUFDQTtBQUNBOzs7QUFFQWxELEtBQUssQ0FBQ21ELFNBQU4sR0FBa0I7QUFDaEJqQixXQUFTLEVBQUVrQixrREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURqQjtBQUVoQm5CLFdBQVMsRUFBRWlCLGtEQUFTLENBQUNHLE1BQVYsQ0FBaUJEO0FBRlosQ0FBbEI7QUFLZUUsOEdBQU8sQ0FBQ0MsU0FBUixDQUFrQkMsaUVBQWtCLENBQUNDLDREQUFPLEdBQUczRCxLQUFILENBQVIsQ0FBcEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNhYjIxMTJlM2IzZWFkNThjMWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tIFwiLi4vaTE4blwiO1xyXG5cclxuaW1wb3J0IGluaXRpYWxpemUgZnJvbSBcIi4uL3NoYXJlZC9pbml0aWFsaXplXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBhdXRoVG9rZW5FeGlzdCB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZSB9IGZyb20gXCIuLi9zaGFyZWQvY29va2llXCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgLy8gT25seSB1bmNvbW1lbnQgdGhpcyBtZXRob2QgaWYgeW91IGhhdmUgYmxvY2tpbmcgZGF0YSByZXF1aXJlbWVudHMgZm9yXHJcbiAgLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xyXG4gIC8vIHBlcmZvcm0gYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24sIGNhdXNpbmcgZXZlcnkgcGFnZSBpbiB5b3VyIGFwcCB0b1xyXG4gIC8vIGJlIHNlcnZlci1zaWRlIHJlbmRlcmVkLlxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coY29udGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEFwcCBpbml0aWFsaXplIC4uLlwiXHJcbiAgICApO1xyXG4gICAgLy8gaW5pdGlhbGl6ZShjb250ZXh0LmN0eCk7XHJcbiAgICBpZiAoY29udGV4dC5jdHgucmVxKSB7XHJcbiAgICAgIC8qIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArXHJcbiAgICAgICAgICBcIiAuLi4uLi4uLi4uLi4gQXBwLmdldEluaXRpYWxQcm9wczogc2VydmVyLlwiXHJcbiAgICAgICk7ICovXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvKiBjb25zb2xlLmxvZyhcclxuICAgICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgK1xyXG4gICAgICAgICAgXCIgLi4uLi4uLi4uLi4uIEFwcC5nZXRJbml0aWFsUHJvcHM6IGNsaWVudC5cIlxyXG4gICAgICApOyAqL1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFnZVByb3BzID0gY29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgICAgID8gYXdhaXQgY29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQuY3R4KVxyXG4gICAgICA6IHt9O1xyXG4gICAgY29uc3QgaW5pdFByb3BzID0gaW5pdGlhbGl6ZShjb250ZXh0LmN0eCk7XHJcbiAgICAvL0FueXRoaW5nIHJldHVybmVkIGhlcmUgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBjbGllbnRcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wczogeyAuLi5pbml0UHJvcHMsIC4uLnBhZ2VQcm9wcyB9IH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucmVxSW50ZXJjZXB0b3IgPSBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgICAgIChjb25maWcpID0+IHtcclxuICAgICAgICBjb25maWcuaGVhZGVyc1tcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiXSA9IFwiKlwiO1xyXG4gICAgICAgIGlmIChjb25maWcudXJsLmluZGV4T2YoXCJhdXRoZW50aWNhdGVcIikgPiAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICBjb25maWcuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICAgICAgaWYgKHVzZXJJZCkge1xyXG4gICAgICAgICAgY29uZmlnLmhlYWRlcnNbXCJVc2VySW5mb1wiXSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcklkOiB1c2VySWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVzSW50ZXJjZXB0b3IgPSBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgICAocmVzKSA9PiByZXMsXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIFJlamVjdCBwcm9taXNlIGlmIHVzdWFsIGVycm9yXHJcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgICogV2hlbiByZXNwb25zZSBjb2RlIGlzIDQwMSwgdHJ5IHRvIHJlZnJlc2ggdGhlIHRva2VuLlxyXG4gICAgICAgICAgICogRWplY3QgdGhlIGludGVyY2VwdG9yIHNvIGl0IGRvZXNuJ3QgbG9vcCBpbiBjYXNlXHJcbiAgICAgICAgICAgKiB0b2tlbiByZWZyZXNoIGNhdXNlcyB0aGUgNDAxIHJlc3BvbnNlXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIC8vIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS5lamVjdCh0aGlzLnJlc0ludGVyY2VwdG9yKTtcclxuXHJcbiAgICAgICAgICBsZXQgdXNlck5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJOYW1lXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXCIvYXV0aGVudGljYXRlL3JlZnJlc2gtdG9rZW5cIiwge1xyXG4gICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBnZXRDb29raWUoXCJyZWZyZXNoVG9rZW5cIiksXHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgLypzYXZlVG9rZW4oKTsqL1xyXG4gICAgICAgICAgICAgIHNldENvb2tpZShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgIHNldENvb2tpZShcInJlZnJlc2hUb2tlblwiLCByZXNwb25zZS5kYXRhLnJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuY29uZmlnLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID1cclxuICAgICAgICAgICAgICAgIFwiQmVhcmVyIFwiICsgcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgICByZXR1cm4gYXhpb3MoZXJyb3IucmVzcG9uc2UuY29uZmlnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIC8qZGVzdHJveVRva2VuKCk7Ki9cclxuICAgICAgICAgICAgICByZW1vdmVDb29raWUoXCJ0b2tlblwiKTtcclxuICAgICAgICAgICAgICAvLyBSb3V0ZXIucHVzaChcIi9zaWdpblwiKTtcclxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5lamVjdCh0aGlzLnJlcUludGVyY2VwdG9yKTtcclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS5lamVjdCh0aGlzLnJlc0ludGVyY2VwdG9yKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc29sZS5sb2cobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCIgLi4uLi4uLi4uLi4uIEFwcC5yZW5kZXIuXCIpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIik7XHJcbiAgICBkaXNwYXRjaChhdXRoVG9rZW5FeGlzdCh0b2tlbiAhPSBudWxsKSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+S2ltIE5nb2MgVGh1eTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiAoe1xyXG4vLyAgIC4uLihhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpKSxcclxuLy8gfSk7XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KGFwcFdpdGhUcmFuc2xhdGlvbihjb25uZWN0KCkoTXlBcHApKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=