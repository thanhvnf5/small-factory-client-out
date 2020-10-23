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
        paddingBottom: "0px"
      }
    },
    // MuiTab
    MuiTab: {
      root: {
        paddingTop: "2px",
        paddingBottom: "0px"
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
        padding: "2px 2px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aGVtZS5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwib3ZlcnJpZGVzIiwiTXVpQ29udGFpbmVyIiwicm9vdCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiTXVpVHlwb2dyYXBoeSIsIk11aUlucHV0QmFzZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk11aUJ1dHRvbkJhc2UiLCJwYWRkaW5nIiwiTXVpSWNvbkJ1dHRvbiIsIk11aVRvb2xiYXIiLCJyZWd1bGFyIiwibWluSGVpZ2h0IiwiTXVpVGFicyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiTXVpVGFiIiwiTXVpTGlzdEl0ZW0iLCJndXR0ZXJzIiwiTXVpTGlzdEl0ZW1UZXh0IiwiTXVpTGlzdEl0ZW1JY29uIiwibWluV2lkdGgiLCJNdWlNZW51SXRlbSIsIk11aUJhZGdlIiwiYW5jaG9yT3JpZ2luVG9wUmlnaHRSZWN0YW5nbGUiLCJ0cmFuc2Zvcm0iLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUO0FBQ0FDLGdCQUFZLEVBQUU7QUFDWkMsVUFBSSxFQUFFO0FBQ0pDLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxtQkFBVyxFQUFFLEtBRlQ7QUFHSixtQ0FBMkI7QUFDekJDLHFCQUFXLEVBQUUsS0FEWTtBQUV6QkMsc0JBQVksRUFBRTtBQUZXO0FBSHZCO0FBRE0sS0FGTDtBQVlUO0FBQ0FDLGlCQUFhLEVBQUU7QUFDYkwsVUFBSSxFQUFFO0FBQ0o7QUFESTtBQURPLEtBYk47QUFrQlQ7QUFDQU0sZ0JBQVksRUFBRTtBQUNaTixVQUFJLEVBQUU7QUFDSk8saUJBQVMsRUFBRSxNQURQO0FBRUpDLG9CQUFZLEVBQUU7QUFGVjtBQURNLEtBbkJMO0FBeUJUO0FBQ0FDLGlCQUFhLEVBQUU7QUFDYlQsVUFBSSxFQUFFO0FBQ0pVLGVBQU8sRUFBRTtBQURMO0FBRE8sS0ExQk47QUErQlQ7QUFDQUMsaUJBQWEsRUFBRTtBQUNiWCxVQUFJLEVBQUU7QUFDSlUsZUFBTyxFQUFFO0FBREw7QUFETyxLQWhDTjtBQXFDVDtBQUNBRSxjQUFVLEVBQUU7QUFDVkMsYUFBTyxFQUFFO0FBQ1AsbUNBQTJCO0FBQ3pCQyxtQkFBUyxFQUFFO0FBRGM7QUFEcEI7QUFEQyxLQXRDSDtBQTZDVDtBQUNBQyxXQUFPLEVBQUU7QUFDUGYsVUFBSSxFQUFFO0FBQ0pnQixrQkFBVSxFQUFFLEtBRFI7QUFFSkMscUJBQWEsRUFBRTtBQUZYO0FBREMsS0E5Q0E7QUFvRFQ7QUFDQUMsVUFBTSxFQUFFO0FBQ05sQixVQUFJLEVBQUU7QUFDSmdCLGtCQUFVLEVBQUUsS0FEUjtBQUVKQyxxQkFBYSxFQUFFO0FBRlg7QUFEQSxLQXJEQztBQTJEVDtBQUNBRSxlQUFXLEVBQUU7QUFDWEMsYUFBTyxFQUFFO0FBQ1BKLGtCQUFVLEVBQUUsS0FETDtBQUVQWixvQkFBWSxFQUFFLEtBRlA7QUFHUGEscUJBQWEsRUFBRSxLQUhSO0FBSVBkLG1CQUFXLEVBQUU7QUFKTixPQURFO0FBT1hILFVBQUksRUFBRTtBQUNKZ0Isa0JBQVUsRUFBRSxLQURSO0FBRUpaLG9CQUFZLEVBQUUsS0FGVjtBQUdKYSxxQkFBYSxFQUFFLEtBSFg7QUFJSmQsbUJBQVcsRUFBRTtBQUpUO0FBUEssS0E1REo7QUEwRVQ7QUFDQWtCLG1CQUFlLEVBQUU7QUFDZnJCLFVBQUksRUFBRTtBQUNKZ0Isa0JBQVUsRUFBRSxLQURSO0FBRUpaLG9CQUFZLEVBQUUsS0FGVjtBQUdKYSxxQkFBYSxFQUFFLEtBSFg7QUFJSmQsbUJBQVcsRUFBRTtBQUpUO0FBRFMsS0EzRVI7QUFtRlQ7QUFDQW1CLG1CQUFlLEVBQUU7QUFDZnRCLFVBQUksRUFBRTtBQUNKdUIsZ0JBQVEsRUFBRTtBQUROO0FBRFMsS0FwRlI7QUF5RlQ7QUFDQUMsZUFBVyxFQUFFO0FBQ1h4QixVQUFJLEVBQUU7QUFDSlUsZUFBTyxFQUFFO0FBREw7QUFESyxLQTFGSjtBQStGVDtBQUNBZSxZQUFRLEVBQUU7QUFDUkMsbUNBQTZCLEVBQUU7QUFDN0JDLGlCQUFTLEVBQUU7QUFEa0I7QUFEdkI7QUFoR0QsR0FEZ0I7QUF1RzNCO0FBQ0FDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRSxTQUFLLEVBQUU7QUFDTEYsVUFBSSxFQUFFRyw0REFBRyxDQUFDQztBQURMLEtBUEE7QUFVUEMsY0FBVSxFQUFFO0FBQ1YsaUJBQVM7QUFEQztBQVZMO0FBeEdrQixDQUFELENBQTVCO0FBd0hldkMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYzk2MDAzMzAyMzY4MWM0ODFmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIG92ZXJyaWRlczoge1xuICAgIC8vIE11aUNvbnRhaW5lclxuICAgIE11aUNvbnRhaW5lcjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtYXJnaW5MZWZ0OiBcIjBweFwiLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMHB4KVwiOiB7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMHB4XCIsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVR5cG9ncmFwaHlcbiAgICBNdWlUeXBvZ3JhcGh5OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIC8qIGJhY2tncm91bmRDb2xvcjogJ3JlZCcgKi9cbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlJbnB1dEJhc2VcbiAgICBNdWlJbnB1dEJhc2U6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbWFyZ2luVG9wOiBcIi02cHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIi02cHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlCdXR0b25CYXNlXG4gICAgTXVpQnV0dG9uQmFzZToge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nOiBcIjAuNXZoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpSWNvbkJ1dHRvblxuICAgIE11aUljb25CdXR0b246IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZzogXCIwLjV2aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aVRvb2xiYXJcbiAgICBNdWlUb29sYmFyOiB7XG4gICAgICByZWd1bGFyOiB7XG4gICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDBweClcIjoge1xuICAgICAgICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gTXVpVGFic1xuICAgIE11aVRhYnM6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlUYWJcbiAgICBNdWlUYWI6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlMaXN0SXRlbVxuICAgIE11aUxpc3RJdGVtOiB7XG4gICAgICBndXR0ZXJzOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIycHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMnB4XCIsXG4gICAgICB9LFxuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtVGV4dFxuICAgIE11aUxpc3RJdGVtVGV4dDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjJweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUxpc3RJdGVtSWNvblxuICAgIE11aUxpc3RJdGVtSWNvbjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBtaW5XaWR0aDogXCIwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBNdWlNZW51SXRlbVxuICAgIE11aU1lbnVJdGVtOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMnB4IDJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE11aUJhZGdlXG4gICAgTXVpQmFkZ2U6IHtcbiAgICAgIGFuY2hvck9yaWdpblRvcFJpZ2h0UmVjdGFuZ2xlOiB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMzAlLCAwJSlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgLy8gcGFsZXR0ZVxuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCIjNTU2Y2Q2XCIsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46IFwiIzE5ODU3YlwiLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IHJlZC5BNDAwLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=