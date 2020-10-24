webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");

 // Create a theme instance.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    // MuiContainer
    MuiContainer: {
      root: {
        marginLeft: "0px",
        marginRight: "0px",
        "@media (min-width: 0px)": {
          paddingLeft: "0px",
          paddingRight: "0px"
        }
      }
    },
    // MuiTypography
    MuiTypography: {
      root: {
        /* backgroundColor: 'red' */
      }
    },
    // MuiInputBase
    MuiInputBase: {
      root: {
        marginTop: "-6px",
        marginBottom: "-6px"
      }
    },
    // MuiButtonBase
    MuiButtonBase: {
      root: {
        padding: "0.5vh"
      }
    },
    // MuiIconButton
    MuiIconButton: {
      root: {
        padding: "0.5vh"
      }
    },
    // MuiToolbar
    MuiToolbar: {
      regular: {
        "@media (min-width: 0px)": {
          minHeight: "auto"
        }
      }
    },
    // MuiTabs
    MuiTabs: {
      root: {
        paddingTop: "2px",
        paddingBottom: "0px",
        minHeight: "5vh",
        height: "5vh"
      }
    },
    // MuiTab
    MuiTab: {
      root: {
        paddingTop: "2px",
        paddingBottom: "0px",
        minHeight: "5vh",
        height: "5vh"
      }
    },
    // MuiListItem
    MuiListItem: {
      gutters: {
        paddingTop: "2px",
        paddingRight: "2px",
        paddingBottom: "2px",
        paddingLeft: "2px"
      },
      root: {
        paddingTop: "2px",
        paddingRight: "2px",
        paddingBottom: "2px",
        paddingLeft: "2px"
      }
    },
    // MuiListItemText
    MuiListItemText: {
      root: {
        paddingTop: "2px",
        paddingRight: "2px",
        paddingBottom: "2px",
        paddingLeft: "2px"
      }
    },
    // MuiListItemIcon
    MuiListItemIcon: {
      root: {
        minWidth: "0px"
      }
    },
    // MuiMenuItem
    MuiMenuItem: {
      root: {
        padding: "2px 2px",
        minHeight: "5vh"
      }
    },
    // MuiBadge
    MuiBadge: {
      anchorOriginTopRightRectangle: {
        transform: "translate(30%, 0%)"
      }
    }
  },
  // palette
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      "default": "#fff"
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aGVtZS5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwib3ZlcnJpZGVzIiwiTXVpQ29udGFpbmVyIiwicm9vdCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiTXVpVHlwb2dyYXBoeSIsIk11aUlucHV0QmFzZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk11aUJ1dHRvbkJhc2UiLCJwYWRkaW5nIiwiTXVpSWNvbkJ1dHRvbiIsIk11aVRvb2xiYXIiLCJyZWd1bGFyIiwibWluSGVpZ2h0IiwiTXVpVGFicyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwiTXVpVGFiIiwiTXVpTGlzdEl0ZW0iLCJndXR0ZXJzIiwiTXVpTGlzdEl0ZW1UZXh0IiwiTXVpTGlzdEl0ZW1JY29uIiwibWluV2lkdGgiLCJNdWlNZW51SXRlbSIsIk11aUJhZGdlIiwiYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGUiLCJ0cmFuc2Zvcm0iLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwibWFpbiIsImRhcmsiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJlcnJvciIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUO0FBQ0FDLGdCQUFZLEVBQUU7QUFDWkMsVUFBSSxFQUFFO0FBQ0pDLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxtQkFBVyxFQUFFLEtBRlQ7QUFHSixtQ0FBMkI7QUFDekJDLHFCQUFXLEVBQUUsS0FEWTtBQUV6QkMsc0JBQVksRUFBRTtBQUZXO0FBSHZCO0FBRE0sS0FGTDtBQVlUO0FBQ0FDLGlCQUFhLEVBQUU7QUFDYkwsVUFBSSxFQUFFO0FBQ0o7QUFESTtBQURPLEtBYk47QUFrQlQ7QUFDQU0sZ0JBQVksRUFBRTtBQUNaTixVQUFJLEVBQUU7QUFDSk8saUJBQVMsRUFBRSxNQURQO0FBRUpDLG9CQUFZLEVBQUU7QUFGVjtBQURNLEtBbkJMO0FBeUJUO0FBQ0FDLGlCQUFhLEVBQUU7QUFDYlQsVUFBSSxFQUFFO0FBQ0pVLGVBQU8sRUFBRTtBQURMO0FBRE8sS0ExQk47QUErQlQ7QUFDQUMsaUJBQWEsRUFBRTtBQUNiWCxVQUFJLEVBQUU7QUFDSlUsZUFBTyxFQUFFO0FBREw7QUFETyxLQWhDTjtBQXFDVDtBQUNBRSxjQUFVLEVBQUU7QUFDVkMsYUFBTyxFQUFFO0FBQ1AsbUNBQTJCO0FBQ3pCQyxtQkFBUyxFQUFFO0FBRGM7QUFEcEI7QUFEQyxLQXRDSDtBQTZDVDtBQUNBQyxXQUFPLEVBQUU7QUFDUGYsVUFBSSxFQUFFO0FBQ0pnQixrQkFBVSxFQUFFLEtBRFI7QUFFSkMscUJBQWEsRUFBRSxLQUZYO0FBR0pILGlCQUFTLEVBQUUsS0FIUDtBQUlKSSxjQUFNLEVBQUU7QUFKSjtBQURDLEtBOUNBO0FBc0RUO0FBQ0FDLFVBQU0sRUFBRTtBQUNObkIsVUFBSSxFQUFFO0FBQ0pnQixrQkFBVSxFQUFFLEtBRFI7QUFFSkMscUJBQWEsRUFBRSxLQUZYO0FBR0pILGlCQUFTLEVBQUUsS0FIUDtBQUlKSSxjQUFNLEVBQUU7QUFKSjtBQURBLEtBdkRDO0FBK0RUO0FBQ0FFLGVBQVcsRUFBRTtBQUNYQyxhQUFPLEVBQUU7QUFDUEwsa0JBQVUsRUFBRSxLQURMO0FBRVBaLG9CQUFZLEVBQUUsS0FGUDtBQUdQYSxxQkFBYSxFQUFFLEtBSFI7QUFJUGQsbUJBQVcsRUFBRTtBQUpOLE9BREU7QUFPWEgsVUFBSSxFQUFFO0FBQ0pnQixrQkFBVSxFQUFFLEtBRFI7QUFFSlosb0JBQVksRUFBRSxLQUZWO0FBR0phLHFCQUFhLEVBQUUsS0FIWDtBQUlKZCxtQkFBVyxFQUFFO0FBSlQ7QUFQSyxLQWhFSjtBQThFVDtBQUNBbUIsbUJBQWUsRUFBRTtBQUNmdEIsVUFBSSxFQUFFO0FBQ0pnQixrQkFBVSxFQUFFLEtBRFI7QUFFSlosb0JBQVksRUFBRSxLQUZWO0FBR0phLHFCQUFhLEVBQUUsS0FIWDtBQUlKZCxtQkFBVyxFQUFFO0FBSlQ7QUFEUyxLQS9FUjtBQXVGVDtBQUNBb0IsbUJBQWUsRUFBRTtBQUNmdkIsVUFBSSxFQUFFO0FBQ0p3QixnQkFBUSxFQUFFO0FBRE47QUFEUyxLQXhGUjtBQTZGVDtBQUNBQyxlQUFXLEVBQUU7QUFDWHpCLFVBQUksRUFBRTtBQUNKVSxlQUFPLEVBQUUsU0FETDtBQUVKSSxpQkFBUyxFQUFFO0FBRlA7QUFESyxLQTlGSjtBQW9HVDtBQUNBWSxZQUFRLEVBQUU7QUFDUkMsbUNBQTZCLEVBQUU7QUFDN0JDLGlCQUFTLEVBQUU7QUFEa0I7QUFEdkI7QUFyR0QsR0FEZ0I7QUE0RzNCO0FBQ0FDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLFNBREE7QUFFUEMsVUFBSSxFQUFFLFNBRkM7QUFHUEMsVUFBSSxFQUFFLFNBSEM7QUFJUEMsa0JBQVksRUFBRTtBQUpQLEtBREY7QUFPUEMsYUFBUyxFQUFFO0FBQ1RKLFdBQUssRUFBRSxTQURFO0FBRVRDLFVBQUksRUFBRSxTQUZHO0FBR1RDLFVBQUksRUFBRSxTQUhHO0FBSVRDLGtCQUFZLEVBQUU7QUFKTCxLQVBKO0FBYVBFLFNBQUssRUFBRTtBQUNMSixVQUFJLEVBQUVLLDREQUFHLENBQUNDO0FBREwsS0FiQTtBQWdCUEMsY0FBVSxFQUFFO0FBQ1YsaUJBQVM7QUFEQztBQWhCTDtBQTdHa0IsQ0FBRCxDQUE1QjtBQW1JZTNDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGQ5M2Y4OTk1NDQ4YzU2YTI1OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBvdmVycmlkZXM6IHtcbiAgICAvLyBNdWlDb250YWluZXJcbiAgICBNdWlDb250YWluZXI6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogXCIwcHhcIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDBweClcIjoge1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBweFwiLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlUeXBvZ3JhcGh5XG4gICAgTXVpVHlwb2dyYXBoeToge1xuICAgICAgcm9vdDoge1xuICAgICAgICAvKiBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnICovXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpSW5wdXRCYXNlXG4gICAgTXVpSW5wdXRCYXNlOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1hcmdpblRvcDogXCItNnB4XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCItNnB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpQnV0dG9uQmFzZVxuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZzogXCIwLjV2aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUljb25CdXR0b25cbiAgICBNdWlJY29uQnV0dG9uOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMC41dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlUb29sYmFyXG4gICAgTXVpVG9vbGJhcjoge1xuICAgICAgcmVndWxhcjoge1xuICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAwcHgpXCI6IHtcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVRhYnNcbiAgICBNdWlUYWJzOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMHB4XCIsXG4gICAgICAgIG1pbkhlaWdodDogXCI1dmhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjV2aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVRhYlxuICAgIE11aVRhYjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjBweFwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiNXZoXCIsXG4gICAgICAgIGhlaWdodDogXCI1dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlMaXN0SXRlbVxuICAgIE11aUxpc3RJdGVtOiB7XG4gICAgICBndXR0ZXJzOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMnB4XCIsXG4gICAgICB9LFxuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtVGV4dFxuICAgIE11aUxpc3RJdGVtVGV4dDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtSWNvblxuICAgIE11aUxpc3RJdGVtSWNvbjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtaW5XaWR0aDogXCIwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlNZW51SXRlbVxuICAgIE11aU1lbnVJdGVtOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMnB4IDJweFwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiNXZoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpQmFkZ2VcbiAgICBNdWlCYWRnZToge1xuICAgICAgYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGU6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgzMCUsIDAlKVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAvLyBwYWxldHRlXG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBsaWdodDogXCIjNzU3Y2U4XCIsXG4gICAgICBtYWluOiBcIiMzZjUwYjVcIixcbiAgICAgIGRhcms6IFwiIzAwMjg4NFwiLFxuICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmZcIixcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbGlnaHQ6IFwiI2ZmNzk2MVwiLFxuICAgICAgbWFpbjogXCIjZjQ0MzM2XCIsXG4gICAgICBkYXJrOiBcIiNiYTAwMGRcIixcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjMDAwXCIsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiBcIiNmZmZcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==