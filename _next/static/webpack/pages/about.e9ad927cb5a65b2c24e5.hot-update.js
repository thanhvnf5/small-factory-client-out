webpackHotUpdate_N_E("pages/about",{

/***/ "./src/components/Navigation/SideDrawer/LeftDrawer.js":
/*!************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/LeftDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");



var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\SideDrawer\\LeftDrawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var drawerWidth = 200;
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
      top: "5vh",
      whiteSpace: "nowrap",
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
      top: "5vh",
      whiteSpace: "nowrap"
    },
    drawerContainer: {
      overflow: "auto"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, theme.breakpoints.up("sm"), {
      width: theme.spacing(9) + 1
    })
  };
});
/************************************************** Constructor */

/**
 * Description:
 * - Show list of menu on the left side.
 * @param {*} props
 */

var LeftDrawer = function LeftDrawer(props) {
  _s();

  var _clsx, _clsx2;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(1),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selectedIndex = _React$useState2[0],
      setSelectedIndex = _React$useState2[1];

  var handleListItemClick = function handleListItemClick(event, index) {
    setSelectedIndex(index);
  };
  /************************************************** render */


  console.log("LeftDrawer render");
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawer, (_clsx = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.drawerOpen, props.openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.drawerClose, !props.openDrawer), _clsx)),
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawerPaper, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.drawerOpen, props.openDrawer), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.drawerClose, !props.openDrawer), _clsx2))
    },
    variant: "permanent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.drawerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, ["Inbox", "Starred", "Send email", "Drafts"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, ["All mail", "Trash", "Spam"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }));
  }))));
};
/************************************************** propTypes */


_s(LeftDrawer, "SZ7qzv4KiU3jS5aDCWf98tgow18=", false, function () {
  return [useStyles];
});

_c = LeftDrawer;
LeftDrawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  menuItemClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (LeftDrawer);

var _c;

$RefreshReg$(_c, "LeftDrawer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsInRvcCIsIndoaXRlU3BhY2UiLCJmbGV4U2hyaW5rIiwiZHJhd2VyUGFwZXIiLCJkcmF3ZXJDb250YWluZXIiLCJvdmVyZmxvdyIsImRyYXdlck9wZW4iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwiZW50ZXJpbmdTY3JlZW4iLCJkcmF3ZXJDbG9zZSIsImxlYXZpbmdTY3JlZW4iLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkxlZnREcmF3ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJoYW5kbGVMaXN0SXRlbUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJjbHN4Iiwib3BlbkRyYXdlciIsInBhcGVyIiwibWFwIiwidGV4dCIsInByb3BUeXBlcyIsImlzTW9iaWxlIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9wZW4iLCJvbkNsb3NlIiwiZnVuYyIsIm1lbnVJdGVtQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFBTixD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QUFPUCxLQUFQO0FBQUEsV0FDakMsTUFBQywwREFBRDtBQUNFLFlBQU0sTUFEUjtBQUVFLFNBQUcsRUFBRU8sSUFGUDtBQUdFLGNBQVEsRUFBRVgsYUFBYSxLQUFLSSxLQUg5QjtBQUlFLGFBQU8sRUFBRSxpQkFBQ0QsS0FBRDtBQUFBLGVBQVdELG1CQUFtQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBOUI7QUFBQSxPQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFsQixHQUFrQyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEckMsQ0FORixFQVNFLE1BQUMsOERBQUQ7QUFBYyxhQUFPLEVBQUVPLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixDQURpQztBQUFBLEdBQWxDLENBREgsQ0FqQkYsQ0FiRixDQURGO0FBaURELENBM0REO0FBNkRBOzs7R0E3RE1oQixVO1VBQ1kzQixTOzs7S0FEWjJCLFU7QUE4RE5BLFVBQVUsQ0FBQ2lCLFNBQVgsR0FBdUI7QUFDckJDLFVBQVEsRUFBRUMsaURBQVMsQ0FBQ0MsSUFEQztBQUVyQkMsTUFBSSxFQUFFRixpREFBUyxDQUFDQyxJQUZLO0FBR3JCRSxTQUFPLEVBQUVILGlEQUFTLENBQUNJLElBSEU7QUFJckJDLGVBQWEsRUFBRUwsaURBQVMsQ0FBQ0k7QUFKSixDQUF2QjtBQU9ldkIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZTlhZDkyN2NiNWE2NWIyYzI0ZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGl2aWRlcixcclxuICBEcmF3ZXIsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIG1ha2VTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyMDA7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxyXG4gICAgdG9wOiBcIjV2aFwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgfSxcclxuICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxyXG4gICAgdG9wOiBcIjV2aFwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICB9LFxyXG4gIGRyYXdlckNvbnRhaW5lcjoge1xyXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgZHJhd2VyT3Blbjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBkcmF3ZXJDbG9zZToge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpICsgMSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSArIDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY3JpcHRpb246XHJcbiAqIC0gU2hvdyBsaXN0IG9mIG1lbnUgb24gdGhlIGxlZnQgc2lkZS5cclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTGVmdERyYXdlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGlzdEl0ZW1DbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiByZW5kZXIgKi9cclxuICBjb25zb2xlLmxvZyhcIkxlZnREcmF3ZXIgcmVuZGVyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRyYXdlciwge1xyXG4gICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBwcm9wcy5vcGVuRHJhd2VyLFxyXG4gICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIXByb3BzLm9wZW5EcmF3ZXIsXHJcbiAgICAgIH0pfVxyXG4gICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgcGFwZXI6IGNsc3goY2xhc3Nlcy5kcmF3ZXJQYXBlciwge1xyXG4gICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IHByb3BzLm9wZW5EcmF3ZXIsXHJcbiAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFwcm9wcy5vcGVuRHJhd2VyLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyQ29udGFpbmVyfT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJJbmJveFwiLCBcIlN0YXJyZWRcIiwgXCJTZW5kIGVtYWlsXCIsIFwiRHJhZnRzXCJdLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSBpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZXZlbnQsIGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJBbGwgbWFpbFwiLCBcIlRyYXNoXCIsIFwiU3BhbVwiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVMaXN0SXRlbUNsaWNrKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkxlZnREcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBtZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnREcmF3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=