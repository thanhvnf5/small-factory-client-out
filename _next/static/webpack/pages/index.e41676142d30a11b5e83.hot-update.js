webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navigation/SideDrawer/LeftDrawer.js":
/*!************************************************************!*\
  !*** ./src/components/Navigation/SideDrawer/LeftDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "D:\\Personal\\Project\\SmallFactory\\small-factory-client\\src\\components\\Navigation\\SideDrawer\\LeftDrawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var drawerWidth = 200;
/************************************************** styles */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
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
  /************************************************** render */

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Drawer"], {
    className: classes.drawer,
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.drawerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, ["Inbox", "Starred", "Send email", "Drafts"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
      button: true,
      key: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, ["All mail", "Trash", "Spam"].map(function (text, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
      button: true,
      key: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 36
      }
    }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 52
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }));
  }))));
};
/************************************************** propTypes */


_s(LeftDrawer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = LeftDrawer;
LeftDrawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  menuItemClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsInRvcCIsImZsZXhTaHJpbmsiLCJkcmF3ZXJQYXBlciIsImRyYXdlckNvbnRhaW5lciIsIm92ZXJmbG93IiwiTGVmdERyYXdlciIsInByb3BzIiwiY2xhc3NlcyIsInBhcGVyIiwibWFwIiwidGV4dCIsImluZGV4IiwicHJvcFR5cGVzIiwiaXNNb2JpbGUiLCJQcm9wVHlwZXMiLCJib29sIiwib3BlbiIsIm9uQ2xvc2UiLCJmdW5jIiwibWVudUl0ZW1DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxNQUFiLEdBQXNCO0FBRHhCLEtBRCtCO0FBSXZDQSxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFUCxXQUREO0FBRU5LLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BRmY7QUFHTkUsU0FBRyxFQUFFLEtBSEM7QUFJTkMsZ0JBQVUsRUFBRTtBQUpOLEtBSitCO0FBVXZDQyxlQUFXLEVBQUU7QUFDWEgsV0FBSyxFQUFFUCxXQURJO0FBRVhLLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BRlY7QUFHWEUsU0FBRyxFQUFFO0FBSE0sS0FWMEI7QUFldkNHLG1CQUFlLEVBQUU7QUFDZkMsY0FBUSxFQUFFO0FBREs7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MTFiNWU4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXZpZGVyLFxyXG4gIERyYXdlcixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgbWFrZVN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDIwMDtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzdHlsZXMgKi9cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIsXHJcbiAgICB0b3A6IFwiNXZoXCIsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcclxuICAgIHRvcDogXCI1dmhcIixcclxuICB9LFxyXG4gIGRyYXdlckNvbnRhaW5lcjoge1xyXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb25zdHJ1Y3RvciAqL1xyXG4vKipcclxuICogRGVzY3JpcHRpb246XHJcbiAqIC0gU2hvdyBsaXN0IG9mIG1lbnUgb24gdGhlIGxlZnQgc2lkZS5cclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKi9cclxuY29uc3QgTGVmdERyYXdlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgfX1cclxuICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7W1wiSW5ib3hcIiwgXCJTdGFycmVkXCIsIFwiU2VuZCBlbWFpbFwiLCBcIkRyYWZ0c1wiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7W1wiQWxsIG1haWxcIiwgXCJUcmFzaFwiLCBcIlNwYW1cIl0ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17dGV4dH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5MZWZ0RHJhd2VyLnByb3BUeXBlcyA9IHtcclxuICBpc01vYmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbWVudUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0RHJhd2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9