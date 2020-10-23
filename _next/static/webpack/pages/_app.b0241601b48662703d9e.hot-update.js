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
        paddingLeft: "0px",
        paddingRight: "0px",
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
          minHeight: "5vh"
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
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aGVtZS5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwib3ZlcnJpZGVzIiwiTXVpQ29udGFpbmVyIiwicm9vdCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiTXVpVHlwb2dyYXBoeSIsIk11aUlucHV0QmFzZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk11aUJ1dHRvbkJhc2UiLCJwYWRkaW5nIiwiTXVpSWNvbkJ1dHRvbiIsIk11aVRvb2xiYXIiLCJyZWd1bGFyIiwibWluSGVpZ2h0IiwiTXVpVGFicyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwiTXVpVGFiIiwiTXVpTGlzdEl0ZW0iLCJndXR0ZXJzIiwiTXVpTGlzdEl0ZW1UZXh0IiwiTXVpTGlzdEl0ZW1JY29uIiwibWluV2lkdGgiLCJNdWlNZW51SXRlbSIsIk11aUJhZGdlIiwiYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGUiLCJ0cmFuc2Zvcm0iLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUO0FBQ0FDLGdCQUFZLEVBQUU7QUFDWkMsVUFBSSxFQUFFO0FBQ0pDLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxtQkFBVyxFQUFFLEtBRlQ7QUFHSkMsbUJBQVcsRUFBRSxLQUhUO0FBSUpDLG9CQUFZLEVBQUUsS0FKVjtBQUtKLG1DQUEyQjtBQUN6QkQscUJBQVcsRUFBRSxLQURZO0FBRXpCQyxzQkFBWSxFQUFFO0FBRlc7QUFMdkI7QUFETSxLQUZMO0FBY1Q7QUFDQUMsaUJBQWEsRUFBRTtBQUNiTCxVQUFJLEVBQUU7QUFDSjtBQURJO0FBRE8sS0FmTjtBQW9CVDtBQUNBTSxnQkFBWSxFQUFFO0FBQ1pOLFVBQUksRUFBRTtBQUNKTyxpQkFBUyxFQUFFLE1BRFA7QUFFSkMsb0JBQVksRUFBRTtBQUZWO0FBRE0sS0FyQkw7QUEyQlQ7QUFDQUMsaUJBQWEsRUFBRTtBQUNiVCxVQUFJLEVBQUU7QUFDSlUsZUFBTyxFQUFFO0FBREw7QUFETyxLQTVCTjtBQWlDVDtBQUNBQyxpQkFBYSxFQUFFO0FBQ2JYLFVBQUksRUFBRTtBQUNKVSxlQUFPLEVBQUU7QUFETDtBQURPLEtBbENOO0FBdUNUO0FBQ0FFLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUU7QUFDUCxtQ0FBMkI7QUFDekJDLG1CQUFTLEVBQUU7QUFEYztBQURwQjtBQURDLEtBeENIO0FBK0NUO0FBQ0FDLFdBQU8sRUFBRTtBQUNQZixVQUFJLEVBQUU7QUFDSmdCLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxxQkFBYSxFQUFFLEtBRlg7QUFHSkgsaUJBQVMsRUFBRSxLQUhQO0FBSUpJLGNBQU0sRUFBRTtBQUpKO0FBREMsS0FoREE7QUF3RFQ7QUFDQUMsVUFBTSxFQUFFO0FBQ05uQixVQUFJLEVBQUU7QUFDSmdCLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxxQkFBYSxFQUFFLEtBRlg7QUFHSkgsaUJBQVMsRUFBRSxLQUhQO0FBSUpJLGNBQU0sRUFBRTtBQUpKO0FBREEsS0F6REM7QUFpRVQ7QUFDQUUsZUFBVyxFQUFFO0FBQ1hDLGFBQU8sRUFBRTtBQUNQTCxrQkFBVSxFQUFFLEtBREw7QUFFUFosb0JBQVksRUFBRSxLQUZQO0FBR1BhLHFCQUFhLEVBQUUsS0FIUjtBQUlQZCxtQkFBVyxFQUFFO0FBSk4sT0FERTtBQU9YSCxVQUFJLEVBQUU7QUFDSmdCLGtCQUFVLEVBQUUsS0FEUjtBQUVKWixvQkFBWSxFQUFFLEtBRlY7QUFHSmEscUJBQWEsRUFBRSxLQUhYO0FBSUpkLG1CQUFXLEVBQUU7QUFKVDtBQVBLLEtBbEVKO0FBZ0ZUO0FBQ0FtQixtQkFBZSxFQUFFO0FBQ2Z0QixVQUFJLEVBQUU7QUFDSmdCLGtCQUFVLEVBQUUsS0FEUjtBQUVKWixvQkFBWSxFQUFFLEtBRlY7QUFHSmEscUJBQWEsRUFBRSxLQUhYO0FBSUpkLG1CQUFXLEVBQUU7QUFKVDtBQURTLEtBakZSO0FBeUZUO0FBQ0FvQixtQkFBZSxFQUFFO0FBQ2Z2QixVQUFJLEVBQUU7QUFDSndCLGdCQUFRLEVBQUU7QUFETjtBQURTLEtBMUZSO0FBK0ZUO0FBQ0FDLGVBQVcsRUFBRTtBQUNYekIsVUFBSSxFQUFFO0FBQ0pVLGVBQU8sRUFBRSxTQURMO0FBRUpJLGlCQUFTLEVBQUU7QUFGUDtBQURLLEtBaEdKO0FBc0dUO0FBQ0FZLFlBQVEsRUFBRTtBQUNSQyxtQ0FBNkIsRUFBRTtBQUM3QkMsaUJBQVMsRUFBRTtBQURrQjtBQUR2QjtBQXZHRCxHQURnQjtBQThHM0I7QUFDQUMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQURGO0FBSVBDLGFBQVMsRUFBRTtBQUNURCxVQUFJLEVBQUU7QUFERyxLQUpKO0FBT1BFLFNBQUssRUFBRTtBQUNMRixVQUFJLEVBQUVHLDREQUFHLENBQUNDO0FBREwsS0FQQTtBQVVQQyxjQUFVLEVBQUU7QUFDVixpQkFBUztBQURDO0FBVkw7QUEvR2tCLENBQUQsQ0FBNUI7QUErSGV4QyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIwMjQxNjAxYjQ4NjYyNzAzZDllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgb3ZlcnJpZGVzOiB7XG4gICAgLy8gTXVpQ29udGFpbmVyXG4gICAgTXVpQ29udGFpbmVyOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMHB4XCIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgICAgICBwYWRkaW5nTGVmdDogXCIwcHhcIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAwcHgpXCI6IHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogXCIwcHhcIixcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpVHlwb2dyYXBoeVxuICAgIE11aVR5cG9ncmFwaHk6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgLyogYmFja2dyb3VuZENvbG9yOiAncmVkJyAqL1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUlucHV0QmFzZVxuICAgIE11aUlucHV0QmFzZToge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtYXJnaW5Ub3A6IFwiLTZweFwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiLTZweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUJ1dHRvbkJhc2VcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMC41dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlJY29uQnV0dG9uXG4gICAgTXVpSWNvbkJ1dHRvbjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nOiBcIjAuNXZoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpVG9vbGJhclxuICAgIE11aVRvb2xiYXI6IHtcbiAgICAgIHJlZ3VsYXI6IHtcbiAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMHB4KVwiOiB7XG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjV2aFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVRhYnNcbiAgICBNdWlUYWJzOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMHB4XCIsXG4gICAgICAgIG1pbkhlaWdodDogXCI1dmhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjV2aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVRhYlxuICAgIE11aVRhYjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjBweFwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiNXZoXCIsXG4gICAgICAgIGhlaWdodDogXCI1dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlMaXN0SXRlbVxuICAgIE11aUxpc3RJdGVtOiB7XG4gICAgICBndXR0ZXJzOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMnB4XCIsXG4gICAgICB9LFxuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtVGV4dFxuICAgIE11aUxpc3RJdGVtVGV4dDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtSWNvblxuICAgIE11aUxpc3RJdGVtSWNvbjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtaW5XaWR0aDogXCIwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlNZW51SXRlbVxuICAgIE11aU1lbnVJdGVtOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMnB4IDJweFwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiNXZoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpQmFkZ2VcbiAgICBNdWlCYWRnZToge1xuICAgICAgYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGU6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgzMCUsIDAlKVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAvLyBwYWxldHRlXG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcIiM1NTZjZDZcIixcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogXCIjMTk4NTdiXCIsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiBcIiNmZmZcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==