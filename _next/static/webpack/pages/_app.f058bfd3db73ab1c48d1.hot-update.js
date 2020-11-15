webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/reducers/employeeReducer.js":
/*!***********************************************!*\
  !*** ./src/store/reducers/employeeReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var EMPLOYEE_EDIT = {
  id: null,
  employeeName: {
    value: "",
    valid: false,
    touched: false,
    autoFocus: true
  },
  deptId: {
    value: "",
    valid: false,
    touched: false,
    autoFocus: false
  },
  employeeDescription: {
    value: "",
    valid: true,
    touched: false,
    autoFocus: false
  },
  valid: false,
  waiting: false
};
var EMPLOYEE_LIST = {
  employees: [],
  waiting: false
};
var initialState = {
  employeeEdit: EMPLOYEE_EDIT,
  employeeList: EMPLOYEE_LIST,
  error: null
};

var employeeNameFocus = function employeeNameFocus(state, action) {
  var employeeName = {
    touched: true,
    autoFocus: true
  };
  var employeeEdit = {
    employeeName: _objectSpread(_objectSpread({}, state.employeeEdit.employeeName), employeeName)
  };
  employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), employeeEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });

  return stateNew;
};

var employeeNameChanged = function employeeNameChanged(state, action) {
  var employeeEdit = {
    employeeName: {
      value: action.employeeName,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.employeeName, action.validation),
      touched: true
    }
  };
  employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), employeeEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });

  return stateNew;
};

var employeeDeptIdChanged = function employeeDeptIdChanged(state, action) {
  var employeeEdit = {
    deptId: {
      value: action.deptId,
      valid: !!action.deptId,
      touched: true
    }
  };
  employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), employeeEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });

  return stateNew;
};

var employeeDescriptionFocus = function employeeDescriptionFocus(state, action) {
  var employeeDescription = {
    touched: true,
    autoFocus: true
  };
  var employeeEdit = {
    employeeDescription: _objectSpread(_objectSpread({}, state.employeeEdit.employeeDescription), employeeDescription)
  };
  employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), employeeEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });

  return stateNew;
};

var employeeDescriptionChanged = function employeeDescriptionChanged(state, action) {
  var employeeEdit = {
    employeeDescription: {
      value: action.employeeDescription,
      valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_1__["checkValidity"])(action.employeeDescription, action.validation),
      touched: true
    }
  };
  employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), employeeEdit);

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });

  return stateNew;
};

var employeeCreate = function employeeCreate(state, action) {
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: EMPLOYEE_EDIT
  });

  return stateNew;
};

var employeeAdd = function employeeAdd(state, action) {
  var stateNew = state;
  action.employeeEditValid = state.employeeEdit.employeeName.valid && state.employeeEdit.deptId.valid && state.employeeEdit.employeeDescription.valid;

  if (!action.employeeEditValid) {
    state.employeeEdit.employeeName.touched = true;
    state.employeeEdit.employeeDescription.touched = true;
  }

  var employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), {}, {
    valid: action.employeeEditValid,
    waiting: action.employeeEditValid
  });

  stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });
  return stateNew;
};

var employeeAddSuccess = function employeeAddSuccess(state, action) {
  // let stateNew = updateObject(state, { employeeEdit: EMPLOYEE_EDIT });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: EMPLOYEE_EDIT
  });

  return stateNew;
};

var employeeEdit = function employeeEdit(state, action) {
  var employeeEdit = {
    id: action.employee.id,
    employeeName: {
      value: action.employee.name,
      valid: true,
      touched: false,
      autoFocus: true
    },
    deptId: {
      value: action.employee.deptId,
      valid: true,
      touched: false,
      autoFocus: false
    },
    employeeDescription: {
      value: action.employee.description,
      valid: true,
      touched: false,
      autoFocus: false
    },
    valid: true
  };
  employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), employeeEdit); // let stateNew = updateObject(state, { employeeEdit: employeeEdit });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });

  return stateNew;
};

var employeeUpdate = function employeeUpdate(state, action) {
  // let stateNew = state;
  action.employeeEditValid = state.employeeEdit.employeeName.valid && state.employeeEdit.deptId.valid && state.employeeEdit.employeeDescription.valid;

  if (!action.employeeEditValid) {
    state.employeeEdit.employeeName.touched = true;
    state.employeeEdit.employeeDescription.touched = true;
  }

  var employeeEdit = _objectSpread(_objectSpread({}, state.employeeEdit), {}, {
    valid: action.employeeEditValid,
    waiting: action.employeeEditValid
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: employeeEdit
  });

  return stateNew;
};

var employeeUpdateSuccess = function employeeUpdateSuccess(state, action) {
  // let stateNew = updateObject(state, { error: null,  employeeEdit: EMPLOYEE_EDIT });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeEdit: EMPLOYEE_EDIT
  });

  return stateNew;
};

var employeeList = function employeeList(state, action) {
  var employeeList = _objectSpread(_objectSpread({}, state.employeeList), {}, {
    waiting: true
  });

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeList: employeeList
  });

  return stateNew;
};

var employeeListSuccess = function employeeListSuccess(state, action) {
  var employees = [];
  var data = action.response.data;

  for (var key in data) {
    employees.push({
      key: key,
      id: key,
      name: data[key].name,
      deptId: data[key].deptId,
      description: data[key].description,
      image: data[key].image
    });
  }

  var employeeList = _objectSpread(_objectSpread({}, state.employeeList), {}, {
    employees: employees,
    waiting: false
  }); // let stateNew = updateObject(state, { error: null,  employeeList: employeeList });


  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    employeeList: employeeList
  });

  return stateNew;
};

var employeeError = function employeeError(state, action) {
  // employeeList = { ...state.employeeList, ...employeeList };
  // let stateNew = updateObject(state, { error: action.error, employeeList: employeeList });
  if (action.caller === _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_LIST"]) {
    state.employeeList.waiting = false;
  } else {
    state.employeeEdit.waiting = false;
  }

  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: action.error
  });

  return stateNew;
};

var employeeErrorHandled = function employeeErrorHandled(state, action) {
  // employeeList = { ...state.employeeList, ...employeeList };
  // let stateNew = updateObject(state, { error: action.error, employeeList: employeeList });
  var stateNew = _objectSpread(_objectSpread({}, state), {}, {
    error: null
  });

  return stateNew;
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* console.log(
    new Date().toLocaleString() + " ............ Dept initialize ....."
  ); */
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_NAME_FOCUS"]:
      return employeeNameFocus(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_NAME_CHANGED"]:
      return employeeNameChanged(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_DEPT_ID_CHANGED"]:
      return employeeDeptIdChanged(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_DESCRIPTION_FOCUS"]:
      return employeeDescriptionFocus(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_DESCRIPTION_CHANGED"]:
      return employeeDescriptionChanged(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_CREATE"]:
      return employeeCreate(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_ADD"]:
      return employeeAdd(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_ADD_SUCCESS"]:
      return employeeAddSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_EDIT"]:
      return employeeEdit(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_UPDATE"]:
      return employeeUpdate(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_UPDATE_SUCCESS"]:
      return employeeUpdateSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_LIST"]:
      return employeeList(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_LIST_SUCCESS"]:
      return employeeListSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_ERROR"]:
      return employeeError(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE_ERROR_HANDLED"]:
      return employeeErrorHandled(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2VtcGxveWVlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJFTVBMT1lFRV9FRElUIiwiaWQiLCJlbXBsb3llZU5hbWUiLCJ2YWx1ZSIsInZhbGlkIiwidG91Y2hlZCIsImF1dG9Gb2N1cyIsImRlcHRJZCIsImVtcGxveWVlRGVzY3JpcHRpb24iLCJ3YWl0aW5nIiwiRU1QTE9ZRUVfTElTVCIsImVtcGxveWVlcyIsImluaXRpYWxTdGF0ZSIsImVtcGxveWVlRWRpdCIsImVtcGxveWVlTGlzdCIsImVycm9yIiwiZW1wbG95ZWVOYW1lRm9jdXMiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXRlTmV3IiwiZW1wbG95ZWVOYW1lQ2hhbmdlZCIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0aW9uIiwiZW1wbG95ZWVEZXB0SWRDaGFuZ2VkIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzIiwiZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQiLCJlbXBsb3llZUNyZWF0ZSIsImVtcGxveWVlQWRkIiwiZW1wbG95ZWVFZGl0VmFsaWQiLCJlbXBsb3llZUFkZFN1Y2Nlc3MiLCJlbXBsb3llZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImVtcGxveWVlVXBkYXRlIiwiZW1wbG95ZWVVcGRhdGVTdWNjZXNzIiwiZW1wbG95ZWVMaXN0U3VjY2VzcyIsImRhdGEiLCJyZXNwb25zZSIsImtleSIsInB1c2giLCJpbWFnZSIsImVtcGxveWVlRXJyb3IiLCJjYWxsZXIiLCJhY3Rpb25UeXBlcyIsImVtcGxveWVlRXJyb3JIYW5kbGVkIiwicmVkdWNlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsSUFBRSxFQUFFLElBRGdCO0FBRXBCQyxjQUFZLEVBQUU7QUFDWkMsU0FBSyxFQUFFLEVBREs7QUFFWkMsU0FBSyxFQUFFLEtBRks7QUFH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Qiw0RUFBTDtBQUNFLGFBQU9ULHFCQUFxQixDQUFDakIsS0FBRCxFQUFRQyxNQUFSLENBQTVCOztBQUVGLFNBQUt5QixrRUFBTDtBQUNFLGFBQU83QixZQUFZLENBQUNHLEtBQUQsRUFBUUMsTUFBUixDQUFuQjs7QUFDRixTQUFLeUIsMEVBQUw7QUFDRSxhQUFPUixtQkFBbUIsQ0FBQ2xCLEtBQUQsRUFBUUMsTUFBUixDQUExQjs7QUFFRixTQUFLeUIsbUVBQUw7QUFDRSxhQUFPRixhQUFhLENBQUN4QixLQUFELEVBQVFDLE1BQVIsQ0FBcEI7O0FBQ0YsU0FBS3lCLDJFQUFMO0FBQ0UsYUFBT0Msb0JBQW9CLENBQUMzQixLQUFELEVBQVFDLE1BQVIsQ0FBM0I7O0FBQ0Y7QUFDRSxhQUFPRCxLQUFQO0FBcENKO0FBc0NELENBMUNEOztBQTRDZTRCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjA1OGJmZDNkYjczYWIxYzQ4ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrVmFsaWRpdHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3V0aWxpdHlcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IEVNUExPWUVFX0VESVQgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgZW1wbG95ZWVOYW1lOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gIH0sXHJcbiAgZGVwdElkOiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIGVtcGxveWVlRGVzY3JpcHRpb246IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgfSxcclxuICB2YWxpZDogZmFsc2UsXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBFTVBMT1lFRV9MSVNUID0ge1xyXG4gIGVtcGxveWVlczogW10sXHJcbiAgd2FpdGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZW1wbG95ZWVFZGl0OiBFTVBMT1lFRV9FRElULFxyXG4gIGVtcGxveWVlTGlzdDogRU1QTE9ZRUVfTElTVCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGVtcGxveWVlTmFtZUZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZW1wbG95ZWVOYW1lID0ge1xyXG4gICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICB9O1xyXG4gIGxldCBlbXBsb3llZUVkaXQgPSB7XHJcbiAgICBlbXBsb3llZU5hbWU6IHtcclxuICAgICAgLi4uc3RhdGUuZW1wbG95ZWVFZGl0LmVtcGxveWVlTmFtZSxcclxuICAgICAgLi4uZW1wbG95ZWVOYW1lLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGVtcGxveWVlRWRpdCA9IHsgLi4uc3RhdGUuZW1wbG95ZWVFZGl0LCAuLi5lbXBsb3llZUVkaXQgfTtcclxuICBsZXQgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgZW1wbG95ZWVFZGl0OiBlbXBsb3llZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBlbXBsb3llZU5hbWVDaGFuZ2VkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZW1wbG95ZWVFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVOYW1lOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZW1wbG95ZWVOYW1lLFxyXG4gICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShhY3Rpb24uZW1wbG95ZWVOYW1lLCBhY3Rpb24udmFsaWRhdGlvbiksXHJcbiAgICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgZW1wbG95ZWVFZGl0ID0geyAuLi5zdGF0ZS5lbXBsb3llZUVkaXQsIC4uLmVtcGxveWVlRWRpdCB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBlbXBsb3llZUVkaXQ6IGVtcGxveWVlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGVtcGxveWVlRGVwdElkQ2hhbmdlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGVtcGxveWVlRWRpdCA9IHtcclxuICAgIGRlcHRJZDoge1xyXG4gICAgICB2YWx1ZTogYWN0aW9uLmRlcHRJZCxcclxuICAgICAgdmFsaWQ6ICEhYWN0aW9uLmRlcHRJZCxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBlbXBsb3llZUVkaXQgPSB7IC4uLnN0YXRlLmVtcGxveWVlRWRpdCwgLi4uZW1wbG95ZWVFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIGVtcGxveWVlRWRpdDogZW1wbG95ZWVFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBsZXQgZW1wbG95ZWVEZXNjcmlwdGlvbiA9IHtcclxuICAgIHRvdWNoZWQ6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IHRydWUsXHJcbiAgfTtcclxuICBsZXQgZW1wbG95ZWVFZGl0ID0ge1xyXG4gICAgZW1wbG95ZWVEZXNjcmlwdGlvbjoge1xyXG4gICAgICAuLi5zdGF0ZS5lbXBsb3llZUVkaXQuZW1wbG95ZWVEZXNjcmlwdGlvbixcclxuICAgICAgLi4uZW1wbG95ZWVEZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgfTtcclxuICBlbXBsb3llZUVkaXQgPSB7IC4uLnN0YXRlLmVtcGxveWVlRWRpdCwgLi4uZW1wbG95ZWVFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIGVtcGxveWVlRWRpdDogZW1wbG95ZWVFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBlbXBsb3llZUVkaXQgPSB7XHJcbiAgICBlbXBsb3llZURlc2NyaXB0aW9uOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZW1wbG95ZWVEZXNjcmlwdGlvbixcclxuICAgICAgdmFsaWQ6IGNoZWNrVmFsaWRpdHkoYWN0aW9uLmVtcGxveWVlRGVzY3JpcHRpb24sIGFjdGlvbi52YWxpZGF0aW9uKSxcclxuICAgICAgdG91Y2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBlbXBsb3llZUVkaXQgPSB7IC4uLnN0YXRlLmVtcGxveWVlRWRpdCwgLi4uZW1wbG95ZWVFZGl0IH07XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIGVtcGxveWVlRWRpdDogZW1wbG95ZWVFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZW1wbG95ZWVDcmVhdGUgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBlbXBsb3llZUVkaXQ6IEVNUExPWUVFX0VESVQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBlbXBsb3llZUFkZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IHN0YXRlTmV3ID0gc3RhdGU7XHJcbiAgYWN0aW9uLmVtcGxveWVlRWRpdFZhbGlkID1cclxuICAgIHN0YXRlLmVtcGxveWVlRWRpdC5lbXBsb3llZU5hbWUudmFsaWQgJiZcclxuICAgIHN0YXRlLmVtcGxveWVlRWRpdC5kZXB0SWQudmFsaWQgJiZcclxuICAgIHN0YXRlLmVtcGxveWVlRWRpdC5lbXBsb3llZURlc2NyaXB0aW9uLnZhbGlkO1xyXG4gIGlmICghYWN0aW9uLmVtcGxveWVlRWRpdFZhbGlkKSB7XHJcbiAgICBzdGF0ZS5lbXBsb3llZUVkaXQuZW1wbG95ZWVOYW1lLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgc3RhdGUuZW1wbG95ZWVFZGl0LmVtcGxveWVlRGVzY3JpcHRpb24udG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGxldCBlbXBsb3llZUVkaXQgPSB7XHJcbiAgICAuLi5zdGF0ZS5lbXBsb3llZUVkaXQsXHJcbiAgICB2YWxpZDogYWN0aW9uLmVtcGxveWVlRWRpdFZhbGlkLFxyXG4gICAgd2FpdGluZzogYWN0aW9uLmVtcGxveWVlRWRpdFZhbGlkLFxyXG4gIH07XHJcbiAgc3RhdGVOZXcgPSB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCwgZW1wbG95ZWVFZGl0OiBlbXBsb3llZUVkaXQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBlbXBsb3llZUFkZFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlbXBsb3llZUVkaXQ6IEVNUExPWUVFX0VESVQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIGVtcGxveWVlRWRpdDogRU1QTE9ZRUVfRURJVCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGVtcGxveWVlRWRpdCA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgbGV0IGVtcGxveWVlRWRpdCA9IHtcclxuICAgIGlkOiBhY3Rpb24uZW1wbG95ZWUuaWQsXHJcbiAgICBlbXBsb3llZU5hbWU6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5lbXBsb3llZS5uYW1lLFxyXG4gICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkZXB0SWQ6IHtcclxuICAgICAgdmFsdWU6IGFjdGlvbi5lbXBsb3llZS5kZXB0SWQsXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBlbXBsb3llZURlc2NyaXB0aW9uOiB7XHJcbiAgICAgIHZhbHVlOiBhY3Rpb24uZW1wbG95ZWUuZGVzY3JpcHRpb24sXHJcbiAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICB9O1xyXG4gIGVtcGxveWVlRWRpdCA9IHsgLi4uc3RhdGUuZW1wbG95ZWVFZGl0LCAuLi5lbXBsb3llZUVkaXQgfTtcclxuICAvLyBsZXQgc3RhdGVOZXcgPSB1cGRhdGVPYmplY3Qoc3RhdGUsIHsgZW1wbG95ZWVFZGl0OiBlbXBsb3llZUVkaXQgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIGVtcGxveWVlRWRpdDogZW1wbG95ZWVFZGl0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZW1wbG95ZWVVcGRhdGUgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHN0YXRlO1xyXG4gIGFjdGlvbi5lbXBsb3llZUVkaXRWYWxpZCA9XHJcbiAgICBzdGF0ZS5lbXBsb3llZUVkaXQuZW1wbG95ZWVOYW1lLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5lbXBsb3llZUVkaXQuZGVwdElkLnZhbGlkICYmXHJcbiAgICBzdGF0ZS5lbXBsb3llZUVkaXQuZW1wbG95ZWVEZXNjcmlwdGlvbi52YWxpZDtcclxuICBpZiAoIWFjdGlvbi5lbXBsb3llZUVkaXRWYWxpZCkge1xyXG4gICAgc3RhdGUuZW1wbG95ZWVFZGl0LmVtcGxveWVlTmFtZS50b3VjaGVkID0gdHJ1ZTtcclxuICAgIHN0YXRlLmVtcGxveWVlRWRpdC5lbXBsb3llZURlc2NyaXB0aW9uLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsZXQgZW1wbG95ZWVFZGl0ID0ge1xyXG4gICAgLi4uc3RhdGUuZW1wbG95ZWVFZGl0LFxyXG4gICAgdmFsaWQ6IGFjdGlvbi5lbXBsb3llZUVkaXRWYWxpZCxcclxuICAgIHdhaXRpbmc6IGFjdGlvbi5lbXBsb3llZUVkaXRWYWxpZCxcclxuICB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBlbXBsb3llZUVkaXQ6IGVtcGxveWVlRWRpdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGVtcGxveWVlVXBkYXRlU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBudWxsLCAgZW1wbG95ZWVFZGl0OiBFTVBMT1lFRV9FRElUIH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBlbXBsb3llZUVkaXQ6IEVNUExPWUVFX0VESVQgfTtcclxuICByZXR1cm4gc3RhdGVOZXc7XHJcbn07XHJcblxyXG5jb25zdCBlbXBsb3llZUxpc3QgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBlbXBsb3llZUxpc3QgPSB7IC4uLnN0YXRlLmVtcGxveWVlTGlzdCwgd2FpdGluZzogdHJ1ZSB9O1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsLCBlbXBsb3llZUxpc3Q6IGVtcGxveWVlTGlzdCB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGVtcGxveWVlTGlzdFN1Y2Nlc3MgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGxldCBlbXBsb3llZXMgPSBbXTtcclxuICBsZXQgZGF0YSA9IGFjdGlvbi5yZXNwb25zZS5kYXRhO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICBlbXBsb3llZXMucHVzaCh7XHJcbiAgICAgIGtleToga2V5LFxyXG4gICAgICBpZDoga2V5LFxyXG4gICAgICBuYW1lOiBkYXRhW2tleV0ubmFtZSxcclxuICAgICAgZGVwdElkOiBkYXRhW2tleV0uZGVwdElkLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YVtrZXldLmRlc2NyaXB0aW9uLFxyXG4gICAgICBpbWFnZTogZGF0YVtrZXldLmltYWdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxldCBlbXBsb3llZUxpc3QgPSB7XHJcbiAgICAuLi5zdGF0ZS5lbXBsb3llZUxpc3QsXHJcbiAgICBlbXBsb3llZXM6IGVtcGxveWVlcyxcclxuICAgIHdhaXRpbmc6IGZhbHNlLFxyXG4gIH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBudWxsLCAgZW1wbG95ZWVMaXN0OiBlbXBsb3llZUxpc3QgfSk7XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IG51bGwsIGVtcGxveWVlTGlzdDogZW1wbG95ZWVMaXN0IH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgZW1wbG95ZWVFcnJvciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gZW1wbG95ZWVMaXN0ID0geyAuLi5zdGF0ZS5lbXBsb3llZUxpc3QsIC4uLmVtcGxveWVlTGlzdCB9O1xyXG4gIC8vIGxldCBzdGF0ZU5ldyA9IHVwZGF0ZU9iamVjdChzdGF0ZSwgeyBlcnJvcjogYWN0aW9uLmVycm9yLCBlbXBsb3llZUxpc3Q6IGVtcGxveWVlTGlzdCB9KTtcclxuICBpZiAoYWN0aW9uLmNhbGxlciA9PT0gYWN0aW9uVHlwZXMuRU1QTE9ZRUVfTElTVCkge1xyXG4gICAgc3RhdGUuZW1wbG95ZWVMaXN0LndhaXRpbmcgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdGUuZW1wbG95ZWVFZGl0LndhaXRpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgbGV0IHN0YXRlTmV3ID0geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gIHJldHVybiBzdGF0ZU5ldztcclxufTtcclxuXHJcbmNvbnN0IGVtcGxveWVlRXJyb3JIYW5kbGVkID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBlbXBsb3llZUxpc3QgPSB7IC4uLnN0YXRlLmVtcGxveWVlTGlzdCwgLi4uZW1wbG95ZWVMaXN0IH07XHJcbiAgLy8gbGV0IHN0YXRlTmV3ID0gdXBkYXRlT2JqZWN0KHN0YXRlLCB7IGVycm9yOiBhY3Rpb24uZXJyb3IsIGVtcGxveWVlTGlzdDogZW1wbG95ZWVMaXN0IH0pO1xyXG4gIGxldCBzdGF0ZU5ldyA9IHsgLi4uc3RhdGUsIGVycm9yOiBudWxsIH07XHJcbiAgcmV0dXJuIHN0YXRlTmV3O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLyogY29uc29sZS5sb2coXHJcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIiAuLi4uLi4uLi4uLi4gRGVwdCBpbml0aWFsaXplIC4uLi4uXCJcclxuICApOyAqL1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU1QTE9ZRUVfTkFNRV9GT0NVUzpcclxuICAgICAgcmV0dXJuIGVtcGxveWVlTmFtZUZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FTVBMT1lFRV9OQU1FX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBlbXBsb3llZU5hbWVDaGFuZ2VkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FTVBMT1lFRV9ERVBUX0lEX0NIQU5HRUQ6XHJcbiAgICAgIHJldHVybiBlbXBsb3llZURlcHRJZENoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVNUExPWUVFX0RFU0NSSVBUSU9OX0ZPQ1VTOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVEZXNjcmlwdGlvbkZvY3VzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FTVBMT1lFRV9ERVNDUklQVElPTl9DSEFOR0VEOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVEZXNjcmlwdGlvbkNoYW5nZWQoc3RhdGUsIGFjdGlvbik7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FTVBMT1lFRV9DUkVBVEU6XHJcbiAgICAgIHJldHVybiBlbXBsb3llZUNyZWF0ZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU1QTE9ZRUVfQUREOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVBZGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVNUExPWUVFX0FERF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVBZGRTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU1QTE9ZRUVfRURJVDpcclxuICAgICAgcmV0dXJuIGVtcGxveWVlRWRpdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU1QTE9ZRUVfVVBEQVRFOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVVcGRhdGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVNUExPWUVFX1VQREFURV9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVVcGRhdGVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU1QTE9ZRUVfTElTVDpcclxuICAgICAgcmV0dXJuIGVtcGxveWVlTGlzdChzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU1QTE9ZRUVfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVMaXN0U3VjY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVNUExPWUVFX0VSUk9SOlxyXG4gICAgICByZXR1cm4gZW1wbG95ZWVFcnJvcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU1QTE9ZRUVfRVJST1JfSEFORExFRDpcclxuICAgICAgcmV0dXJuIGVtcGxveWVlRXJyb3JIYW5kbGVkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=