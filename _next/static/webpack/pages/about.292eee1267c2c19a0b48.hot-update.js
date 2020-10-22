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
    component: "nav",
    "aria-label": "main mailbox folders",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlRHJhd2VyL0xlZnREcmF3ZXIuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ3aWR0aCIsInRvcCIsImZsZXhTaHJpbmsiLCJkcmF3ZXJQYXBlciIsImRyYXdlckNvbnRhaW5lciIsIm92ZXJmbG93IiwiTGVmdERyYXdlciIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsImhhbmRsZUxpc3RJdGVtQ2xpY2siLCJldmVudCIsImluZGV4IiwicGFwZXIiLCJtYXAiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiaXNNb2JpbGUiLCJQcm9wVHlwZXMiLCJib29sIiwib3BlbiIsIm9uQ2xvc2UiLCJmdW5jIiwibWVudUl0ZW1DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxNQUFiLEdBQXNCO0FBRHhCLEtBRCtCO0FBSXZDQSxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFUCxXQUREO0FBRU5LLFlBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BRmY7QUFHTkUsU0FBRyxFQUFFLEtBSEM7QUFJTkMsZ0JBQVUsRUFBRTtBQUpOLEtBSitCO0FBVXZDQyxlQUFXLEVBQUU7QUFDWEgsV0FBSyxFQUFFUCxXQURJO0FBRVhLLFlBQU0sRUFBRUYsS0FBSyxD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QSxPQUNHQSxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0IsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWxCLEdBQWtDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURyQyxDQU5GLEVBU0UsTUFBQyw4REFBRDtBQUFjLGFBQU8sRUFBRUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRGLENBRGlDO0FBQUEsR0FBbEMsQ0FESCxDQWpCRixDQVBGLENBREY7QUEyQ0QsQ0FwREQ7QUFzREE7OztHQXRETVosVTtVQUNZWixTOzs7S0FEWlksVTtBQXVETkEsVUFBVSxDQUFDYSxTQUFYLEdBQXVCO0FBQ3JCQyxVQUFRLEVBQUVDLGlEQUFTLENBQUNDLElBREM7QUFFckJDLE1BQUksRUFBRUYsaURBQVMsQ0FBQ0MsSUFGSztBQUdyQkUsU0FBTyxFQUFFSCxpREFBUyxDQUFDSSxJQUhFO0FBSXJCQyxlQUFhLEVBQUVMLGlEQUFTLENBQUNJO0FBSkosQ0FBdkI7QUFPZW5CLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjI5MmVlZTEyNjdjMmMxOWEwYjQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpdmlkZXIsXHJcbiAgRHJhd2VyLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBtYWtlU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHN0eWxlcyAqL1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcclxuICAgIHRvcDogXCI1dmhcIixcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgfSxcclxuICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxyXG4gICAgdG9wOiBcIjV2aFwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyQ29udGFpbmVyOiB7XHJcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnN0cnVjdG9yICovXHJcbi8qKlxyXG4gKiBEZXNjcmlwdGlvbjpcclxuICogLSBTaG93IGxpc3Qgb2YgbWVudSBvbiB0aGUgbGVmdCBzaWRlLlxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBMZWZ0RHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMaXN0SXRlbUNsaWNrID0gKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHJlbmRlciAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcbiAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgfX1cclxuICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCIgYXJpYS1sYWJlbD1cIm1haW4gbWFpbGJveCBmb2xkZXJzXCI+XHJcbiAgICAgICAgICB7W1wiSW5ib3hcIiwgXCJTdGFycmVkXCIsIFwiU2VuZCBlbWFpbFwiLCBcIkRyYWZ0c1wiXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVMaXN0SXRlbUNsaWNrKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7W1wiQWxsIG1haWxcIiwgXCJUcmFzaFwiLCBcIlNwYW1cIl0ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e3RleHR9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhldmVudCwgaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHByb3BUeXBlcyAqL1xyXG5MZWZ0RHJhd2VyLnByb3BUeXBlcyA9IHtcclxuICBpc01vYmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbWVudUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0RHJhd2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9