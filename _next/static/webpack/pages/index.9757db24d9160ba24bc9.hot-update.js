webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/SideDrawer/LeftDrawer.js":
/*!************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/LeftDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\SideDrawer\\LeftDrawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var drawerWidth = 200;
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
      top: "5vh",
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer,
      top: "5vh"
    },
    drawerContainer: {
      overflow: "auto"
    }
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

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(1),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selectedIndex = _React$useState2[0],
      setSelectedIndex = _React$useState2[1];

  var handleListItemClick = function handleListItemClick(event, index) {
    setSelectedIndex(index);
  };
  /************************************************** render */


  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    className: classes.drawer,
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.drawerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, ["Inbox", "Starred", "Send email", "Drafts"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, ["All mail", "Trash", "Spam"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      button: true,
      key: text,
      selected: selectedIndex === index,
      onClick: function onClick(event) {
        return handleListItemClick(event, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
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
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  menuItemClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsInRvcCIsImZsZXhTaHJpbmsiLCJkcmF3ZXJQYXBlciIsImRyYXdlckNvbnRhaW5lciIsIm92ZXJmbG93IiwiTGVmdERyYXdlciIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsImhhbmRsZUxpc3RJdGVtQ2xpY2siLCJldmVudCIsImluZGV4IiwicGFwZXIiLCJtYXAiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiaXNNb2JpbGUiLCJQcm9wVHlwZXMiLCJib29sIiwib3BlbiIsIm9uQ2xvc2UiLCJmdW5jIiwibWVudUl0ZW1DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxNQUFiLEdBQXNCO0FBRHhCLEtBRCtCO0FBSXZDQSxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFUCxXQUREO0FBRU5LLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BRmY7QUFHTkUsU0FBRyxFQUFFLEtBSEM7QUFJTkMsZ0JBQVUsRUFBRTtBQUpOLEtBSitCO0FBVXZDQyxlQUFXLEVBQUU7QUFDWEgsV0FBSyxFQUFFUCxXQURJO0FBRVhLLFlBQU0sRUFBRUYsS0FBSyxD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QUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbEIsR0FBa0MsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHJDLENBTkYsRUFTRSxNQUFDLDhEQUFEO0FBQWMsYUFBTyxFQUFFRyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsQ0FEaUM7QUFBQSxHQUFsQyxDQURILENBakJGLENBUEYsQ0FERjtBQTJDRCxDQXBERDtBQXNEQTs7O0dBdERNWixVO1VBQ1laLFM7OztLQURaWSxVO0FBdUROQSxVQUFVLENBQUNhLFNBQVgsR0FBdUI7QUFDckJDLFVBQVEsRUFBRUMsaURBQVMsQ0FBQ0MsSUFEQztBQUVyQkMsTUFBSSxFQUFFRixpREFBUyxDQUFDQyxJQUZLO0FBR3JCRSxTQUFPLEVBQUVILGlEQUFTLENBQUNJLElBSEU7QUFJckJDLGVBQWEsRUFBRUwsaURBQVMsQ0FBQ0k7QUFKSixDQUF2QjtBQU9lbkIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTc1N2RiMjRkOTE2MGJhMjRiYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGl2aWRlcixcclxuICBEcmF3ZXIsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIG1ha2VTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyMDA7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc3R5bGVzICovXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxyXG4gICAgdG9wOiBcIjV2aFwiLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGRyYXdlclBhcGVyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIsXHJcbiAgICB0b3A6IFwiNXZoXCIsXHJcbiAgfSxcclxuICBkcmF3ZXJDb250YWluZXI6IHtcclxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29uc3RydWN0b3IgKi9cclxuLyoqXHJcbiAqIERlc2NyaXB0aW9uOlxyXG4gKiAtIFNob3cgbGlzdCBvZiBtZW51IG9uIHRoZSBsZWZ0IHNpZGUuXHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcclxuICovXHJcbmNvbnN0IExlZnREcmF3ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcmVuZGVyICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICB9fVxyXG4gICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyQ29udGFpbmVyfT5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJJbmJveFwiLCBcIlN0YXJyZWRcIiwgXCJTZW5kIGVtYWlsXCIsIFwiRHJhZnRzXCJdLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSBpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZXZlbnQsIGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbXCJBbGwgbWFpbFwiLCBcIlRyYXNoXCIsIFwiU3BhbVwiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVMaXN0SXRlbUNsaWNrKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogcHJvcFR5cGVzICovXHJcbkxlZnREcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBtZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnREcmF3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=