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
        paddingRight: "0px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aGVtZS5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwib3ZlcnJpZGVzIiwiTXVpQ29udGFpbmVyIiwicm9vdCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiTXVpVHlwb2dyYXBoeSIsIk11aUlucHV0QmFzZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk11aUJ1dHRvbkJhc2UiLCJwYWRkaW5nIiwiTXVpSWNvbkJ1dHRvbiIsIk11aVRvb2xiYXIiLCJyZWd1bGFyIiwibWluSGVpZ2h0IiwiTXVpVGFicyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwiTXVpVGFiIiwiTXVpTGlzdEl0ZW0iLCJndXR0ZXJzIiwiTXVpTGlzdEl0ZW1UZXh0IiwiTXVpTGlzdEl0ZW1JY29uIiwibWluV2lkdGgiLCJNdWlNZW51SXRlbSIsIk11aUJhZGdlIiwiYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGUiLCJ0cmFuc2Zvcm0iLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUO0FBQ0FDLGdCQUFZLEVBQUU7QUFDWkMsVUFBSSxFQUFFO0FBQ0pDLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxtQkFBVyxFQUFFLEtBRlQ7QUFHSkMsbUJBQVcsRUFBRSxLQUhUO0FBSUpDLG9CQUFZLEVBQUU7QUFKVjtBQURNLEtBRkw7QUFVVDtBQUNBQyxpQkFBYSxFQUFFO0FBQ2JMLFVBQUksRUFBRTtBQUNKO0FBREk7QUFETyxLQVhOO0FBZ0JUO0FBQ0FNLGdCQUFZLEVBQUU7QUFDWk4sVUFBSSxFQUFFO0FBQ0pPLGlCQUFTLEVBQUUsTUFEUDtBQUVKQyxvQkFBWSxFQUFFO0FBRlY7QUFETSxLQWpCTDtBQXVCVDtBQUNBQyxpQkFBYSxFQUFFO0FBQ2JULFVBQUksRUFBRTtBQUNKVSxlQUFPLEVBQUU7QUFETDtBQURPLEtBeEJOO0FBNkJUO0FBQ0FDLGlCQUFhLEVBQUU7QUFDYlgsVUFBSSxFQUFFO0FBQ0pVLGVBQU8sRUFBRTtBQURMO0FBRE8sS0E5Qk47QUFtQ1Q7QUFDQUUsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRTtBQUNQLG1DQUEyQjtBQUN6QkMsbUJBQVMsRUFBRTtBQURjO0FBRHBCO0FBREMsS0FwQ0g7QUEyQ1Q7QUFDQUMsV0FBTyxFQUFFO0FBQ1BmLFVBQUksRUFBRTtBQUNKZ0Isa0JBQVUsRUFBRSxLQURSO0FBRUpDLHFCQUFhLEVBQUUsS0FGWDtBQUdKSCxpQkFBUyxFQUFFLEtBSFA7QUFJSkksY0FBTSxFQUFFO0FBSko7QUFEQyxLQTVDQTtBQW9EVDtBQUNBQyxVQUFNLEVBQUU7QUFDTm5CLFVBQUksRUFBRTtBQUNKZ0Isa0JBQVUsRUFBRSxLQURSO0FBRUpDLHFCQUFhLEVBQUUsS0FGWDtBQUdKSCxpQkFBUyxFQUFFLEtBSFA7QUFJSkksY0FBTSxFQUFFO0FBSko7QUFEQSxLQXJEQztBQTZEVDtBQUNBRSxlQUFXLEVBQUU7QUFDWEMsYUFBTyxFQUFFO0FBQ1BMLGtCQUFVLEVBQUUsS0FETDtBQUVQWixvQkFBWSxFQUFFLEtBRlA7QUFHUGEscUJBQWEsRUFBRSxLQUhSO0FBSVBkLG1CQUFXLEVBQUU7QUFKTixPQURFO0FBT1hILFVBQUksRUFBRTtBQUNKZ0Isa0JBQVUsRUFBRSxLQURSO0FBRUpaLG9CQUFZLEVBQUUsS0FGVjtBQUdKYSxxQkFBYSxFQUFFLEtBSFg7QUFJSmQsbUJBQVcsRUFBRTtBQUpUO0FBUEssS0E5REo7QUE0RVQ7QUFDQW1CLG1CQUFlLEVBQUU7QUFDZnRCLFVBQUksRUFBRTtBQUNKZ0Isa0JBQVUsRUFBRSxLQURSO0FBRUpaLG9CQUFZLEVBQUUsS0FGVjtBQUdKYSxxQkFBYSxFQUFFLEtBSFg7QUFJSmQsbUJBQVcsRUFBRTtBQUpUO0FBRFMsS0E3RVI7QUFxRlQ7QUFDQW9CLG1CQUFlLEVBQUU7QUFDZnZCLFVBQUksRUFBRTtBQUNKd0IsZ0JBQVEsRUFBRTtBQUROO0FBRFMsS0F0RlI7QUEyRlQ7QUFDQUMsZUFBVyxFQUFFO0FBQ1h6QixVQUFJLEVBQUU7QUFDSlUsZUFBTyxFQUFFLFNBREw7QUFFSkksaUJBQVMsRUFBRTtBQUZQO0FBREssS0E1Rko7QUFrR1Q7QUFDQVksWUFBUSxFQUFFO0FBQ1JDLG1DQUE2QixFQUFFO0FBQzdCQyxpQkFBUyxFQUFFO0FBRGtCO0FBRHZCO0FBbkdELEdBRGdCO0FBMEczQjtBQUNBQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRTtBQURHLEtBSko7QUFPUEUsU0FBSyxFQUFFO0FBQ0xGLFVBQUksRUFBRUcsNERBQUcsQ0FBQ0M7QUFETCxLQVBBO0FBVVBDLGNBQVUsRUFBRTtBQUNWLGlCQUFTO0FBREM7QUFWTDtBQTNHa0IsQ0FBRCxDQUE1QjtBQTJIZXhDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWUxNTY1MzM3ZDkyMmFkNmIzZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBvdmVycmlkZXM6IHtcbiAgICAvLyBNdWlDb250YWluZXJcbiAgICBNdWlDb250YWluZXI6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogXCIwcHhcIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpVHlwb2dyYXBoeVxuICAgIE11aVR5cG9ncmFwaHk6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgLyogYmFja2dyb3VuZENvbG9yOiAncmVkJyAqL1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUlucHV0QmFzZVxuICAgIE11aUlucHV0QmFzZToge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtYXJnaW5Ub3A6IFwiLTZweFwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiLTZweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUJ1dHRvbkJhc2VcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMC41dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlJY29uQnV0dG9uXG4gICAgTXVpSWNvbkJ1dHRvbjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nOiBcIjAuNXZoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpVG9vbGJhclxuICAgIE11aVRvb2xiYXI6IHtcbiAgICAgIHJlZ3VsYXI6IHtcbiAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMHB4KVwiOiB7XG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjV2aFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVRhYnNcbiAgICBNdWlUYWJzOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMHB4XCIsXG4gICAgICAgIG1pbkhlaWdodDogXCI1dmhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjV2aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVRhYlxuICAgIE11aVRhYjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjBweFwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiNXZoXCIsXG4gICAgICAgIGhlaWdodDogXCI1dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlMaXN0SXRlbVxuICAgIE11aUxpc3RJdGVtOiB7XG4gICAgICBndXR0ZXJzOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMnB4XCIsXG4gICAgICB9LFxuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtVGV4dFxuICAgIE11aUxpc3RJdGVtVGV4dDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtSWNvblxuICAgIE11aUxpc3RJdGVtSWNvbjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtaW5XaWR0aDogXCIwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlNZW51SXRlbVxuICAgIE11aU1lbnVJdGVtOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMnB4IDJweFwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiNXZoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpQmFkZ2VcbiAgICBNdWlCYWRnZToge1xuICAgICAgYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGU6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgzMCUsIDAlKVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAvLyBwYWxldHRlXG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcIiM1NTZjZDZcIixcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogXCIjMTk4NTdiXCIsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiBcIiNmZmZcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==