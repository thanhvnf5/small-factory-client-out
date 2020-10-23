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
      magrinLeft: "0px",
      marginRight: "0px",
      paddingLeft: "0px",
      paddingRight: "0px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aGVtZS5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwib3ZlcnJpZGVzIiwiTXVpQ29udGFpbmVyIiwibWFncmluTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJNdWlUeXBvZ3JhcGh5Iiwicm9vdCIsIk11aUlucHV0QmFzZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk11aUJ1dHRvbkJhc2UiLCJwYWRkaW5nIiwiTXVpSWNvbkJ1dHRvbiIsIk11aVRvb2xiYXIiLCJyZWd1bGFyIiwibWluSGVpZ2h0IiwiTXVpVGFicyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwiTXVpVGFiIiwiTXVpTGlzdEl0ZW0iLCJndXR0ZXJzIiwiTXVpTGlzdEl0ZW1UZXh0IiwiTXVpTGlzdEl0ZW1JY29uIiwibWluV2lkdGgiLCJNdWlNZW51SXRlbSIsIk11aUJhZGdlIiwiYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGUiLCJ0cmFuc2Zvcm0iLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUO0FBQ0FDLGdCQUFZLEVBQUU7QUFDWkMsZ0JBQVUsRUFBRSxLQURBO0FBRVpDLGlCQUFXLEVBQUUsS0FGRDtBQUdaQyxpQkFBVyxFQUFFLEtBSEQ7QUFJWkMsa0JBQVksRUFBRTtBQUpGLEtBRkw7QUFRVDtBQUNBQyxpQkFBYSxFQUFFO0FBQ2JDLFVBQUksRUFBRTtBQUNKO0FBREk7QUFETyxLQVROO0FBY1Q7QUFDQUMsZ0JBQVksRUFBRTtBQUNaRCxVQUFJLEVBQUU7QUFDSkUsaUJBQVMsRUFBRSxNQURQO0FBRUpDLG9CQUFZLEVBQUU7QUFGVjtBQURNLEtBZkw7QUFxQlQ7QUFDQUMsaUJBQWEsRUFBRTtBQUNiSixVQUFJLEVBQUU7QUFDSkssZUFBTyxFQUFFO0FBREw7QUFETyxLQXRCTjtBQTJCVDtBQUNBQyxpQkFBYSxFQUFFO0FBQ2JOLFVBQUksRUFBRTtBQUNKSyxlQUFPLEVBQUU7QUFETDtBQURPLEtBNUJOO0FBaUNUO0FBQ0FFLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUU7QUFDUCxtQ0FBMkI7QUFDekJDLG1CQUFTLEVBQUU7QUFEYztBQURwQjtBQURDLEtBbENIO0FBeUNUO0FBQ0FDLFdBQU8sRUFBRTtBQUNQVixVQUFJLEVBQUU7QUFDSlcsa0JBQVUsRUFBRSxLQURSO0FBRUpDLHFCQUFhLEVBQUUsS0FGWDtBQUdKSCxpQkFBUyxFQUFFLEtBSFA7QUFJSkksY0FBTSxFQUFFO0FBSko7QUFEQyxLQTFDQTtBQWtEVDtBQUNBQyxVQUFNLEVBQUU7QUFDTmQsVUFBSSxFQUFFO0FBQ0pXLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxxQkFBYSxFQUFFLEtBRlg7QUFHSkgsaUJBQVMsRUFBRSxLQUhQO0FBSUpJLGNBQU0sRUFBRTtBQUpKO0FBREEsS0FuREM7QUEyRFQ7QUFDQUUsZUFBVyxFQUFFO0FBQ1hDLGFBQU8sRUFBRTtBQUNQTCxrQkFBVSxFQUFFLEtBREw7QUFFUGIsb0JBQVksRUFBRSxLQUZQO0FBR1BjLHFCQUFhLEVBQUUsS0FIUjtBQUlQZixtQkFBVyxFQUFFO0FBSk4sT0FERTtBQU9YRyxVQUFJLEVBQUU7QUFDSlcsa0JBQVUsRUFBRSxLQURSO0FBRUpiLG9CQUFZLEVBQUUsS0FGVjtBQUdKYyxxQkFBYSxFQUFFLEtBSFg7QUFJSmYsbUJBQVcsRUFBRTtBQUpUO0FBUEssS0E1REo7QUEwRVQ7QUFDQW9CLG1CQUFlLEVBQUU7QUFDZmpCLFVBQUksRUFBRTtBQUNKVyxrQkFBVSxFQUFFLEtBRFI7QUFFSmIsb0JBQVksRUFBRSxLQUZWO0FBR0pjLHFCQUFhLEVBQUUsS0FIWDtBQUlKZixtQkFBVyxFQUFFO0FBSlQ7QUFEUyxLQTNFUjtBQW1GVDtBQUNBcUIsbUJBQWUsRUFBRTtBQUNmbEIsVUFBSSxFQUFFO0FBQ0ptQixnQkFBUSxFQUFFO0FBRE47QUFEUyxLQXBGUjtBQXlGVDtBQUNBQyxlQUFXLEVBQUU7QUFDWHBCLFVBQUksRUFBRTtBQUNKSyxlQUFPLEVBQUUsU0FETDtBQUVKSSxpQkFBUyxFQUFFO0FBRlA7QUFESyxLQTFGSjtBQWdHVDtBQUNBWSxZQUFRLEVBQUU7QUFDUkMsbUNBQTZCLEVBQUU7QUFDN0JDLGlCQUFTLEVBQUU7QUFEa0I7QUFEdkI7QUFqR0QsR0FEZ0I7QUF3RzNCO0FBQ0FDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRSxTQUFLLEVBQUU7QUFDTEYsVUFBSSxFQUFFRyw0REFBRyxDQUFDQztBQURMLEtBUEE7QUFVUEMsY0FBVSxFQUFFO0FBQ1YsaUJBQVM7QUFEQztBQVZMO0FBekdrQixDQUFELENBQTVCO0FBeUhleEMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZjI5NWQyYTEzZGZlMmRlMmE2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIG92ZXJyaWRlczoge1xuICAgIC8vIE11aUNvbnRhaW5lclxuICAgIE11aUNvbnRhaW5lcjoge1xuICAgICAgbWFncmluTGVmdDogXCIwcHhcIixcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgICAgcGFkZGluZ0xlZnQ6IFwiMHB4XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgfSxcbiAgICAvLyBNdWlUeXBvZ3JhcGh5XG4gICAgTXVpVHlwb2dyYXBoeToge1xuICAgICAgcm9vdDoge1xuICAgICAgICAvKiBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnICovXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpSW5wdXRCYXNlXG4gICAgTXVpSW5wdXRCYXNlOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1hcmdpblRvcDogXCItNnB4XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCItNnB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpQnV0dG9uQmFzZVxuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZzogXCIwLjV2aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUljb25CdXR0b25cbiAgICBNdWlJY29uQnV0dG9uOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMC41dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlUb29sYmFyXG4gICAgTXVpVG9vbGJhcjoge1xuICAgICAgcmVndWxhcjoge1xuICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiAwcHgpXCI6IHtcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNXZoXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpVGFic1xuICAgIE11aVRhYnM6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICAgICAgbWluSGVpZ2h0OiBcIjV2aFwiLFxuICAgICAgICBoZWlnaHQ6IFwiNXZoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpVGFiXG4gICAgTXVpVGFiOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMHB4XCIsXG4gICAgICAgIG1pbkhlaWdodDogXCI1dmhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjV2aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtXG4gICAgTXVpTGlzdEl0ZW06IHtcbiAgICAgIGd1dHRlcnM6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nTGVmdDogXCIycHhcIixcbiAgICAgIH0sXG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMnB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpTGlzdEl0ZW1UZXh0XG4gICAgTXVpTGlzdEl0ZW1UZXh0OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMnB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpTGlzdEl0ZW1JY29uXG4gICAgTXVpTGlzdEl0ZW1JY29uOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1pbldpZHRoOiBcIjBweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aU1lbnVJdGVtXG4gICAgTXVpTWVudUl0ZW06IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZzogXCIycHggMnB4XCIsXG4gICAgICAgIG1pbkhlaWdodDogXCI1dmhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlCYWRnZVxuICAgIE11aUJhZGdlOiB7XG4gICAgICBhbmNob3JPcmlnaW5Ub3BSaWdodFJlY3RhbmdsZToge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDMwJSwgMCUpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIC8vIHBhbGV0dGVcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IFwiIzU1NmNkNlwiLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBcIiMxOTg1N2JcIixcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMCxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9