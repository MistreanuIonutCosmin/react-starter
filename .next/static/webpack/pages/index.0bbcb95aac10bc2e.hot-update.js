"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar-timeline */ \"./node_modules/react-calendar-timeline/lib/index.js\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ \"./node_modules/react-calendar-timeline/lib/Timeline.css\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n// make sure you include the timeline stylesheet or the timeline will not be styled\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_6__.GraphQLClient(\"https://cuddly-meerkat-57.hasura.app/v1/graphql\", {\n    headers: {\n        \"content-type\": \"application/json\",\n        \"x-hasura-admin-secret\": \"hYJiMlfjJIIt7TuyHVjFPTN1E1iFeqcDMqlyW0lRDlD01WpDccvuZZBXfnBy76fc\"\n    }\n});\nvar groups = [\n    {\n        id: 1,\n        title: \"group 1\"\n    },\n    {\n        id: 2,\n        title: \"group 2\"\n    }, \n];\nvar items = [\n    {\n        id: 1,\n        group: 1,\n        title: \"item 1\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(1, \"hour\")\n    },\n    {\n        id: 2,\n        group: 2,\n        title: \"item 2\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-0.5, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(0.5, \"hour\")\n    },\n    {\n        id: 3,\n        group: 1,\n        title: \"item 3\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(2, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(3, \"hour\")\n    }, \n];\nvar GET_ITEMS = \"\\n  query GET_ITEMS {\\n    items {\\n      group {\\n        id\\n        title\\n      }\\n    }\\n  }\";\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), groups = ref1[0], setGroups = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(GET_ITEMS, function(q, v) {\n        return client.request(q, v);\n    }), data = ref2.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (data) {\n            setItems(data.items);\n            setGroups(data.items.map(function(item) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, item.group), {\n                    start_: start_\n                });\n            }));\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            groups: groups,\n            items: items,\n            defaultTimeStart: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-12, \"hour\"),\n            defaultTimeEnd: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(12, \"hour\")\n        }, void 0, false, {\n            fileName: \"/home/john/Linux/palmo/react-starter/pages/index.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HomePage, \"rxloKZnHjW//MXPownsFyg6cSV4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDWmdCLGdCQUFnQixFQUFFOUIsNkNBQU0sRUFBRSxDQUFDa0IsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQztZQUMzQ2EsY0FBYyxFQUFFL0IsNkNBQU0sRUFBRSxDQUFDa0IsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7Ozs7O2dCQUN4QztxQkFDRCxDQUNIO0NBQ0g7R0F4QnVCRSxRQUFROztRQUtQbkIsMkNBQU07OztBQUxQbUIsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZWxpbmUgZnJvbSAncmVhY3QtY2FsZW5kYXItdGltZWxpbmUnO1xuLy8gbWFrZSBzdXJlIHlvdSBpbmNsdWRlIHRoZSB0aW1lbGluZSBzdHlsZXNoZWV0IG9yIHRoZSB0aW1lbGluZSB3aWxsIG5vdCBiZSBzdHlsZWRcbmltcG9ydCAncmVhY3QtY2FsZW5kYXItdGltZWxpbmUvbGliL1RpbWVsaW5lLmNzcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9CQVNFX1VSTCwge1xuICBoZWFkZXJzOiB7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAneC1oYXN1cmEtYWRtaW4tc2VjcmV0JzogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEFTVVJBX1NFQ1JFVCxcbiAgfSxcbn0pO1xuXG5jb25zdCBncm91cHMgPSBbXG4gIHsgaWQ6IDEsIHRpdGxlOiAnZ3JvdXAgMScgfSxcbiAgeyBpZDogMiwgdGl0bGU6ICdncm91cCAyJyB9LFxuXTtcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBncm91cDogMSxcbiAgICB0aXRsZTogJ2l0ZW0gMScsXG4gICAgc3RhcnRfdGltZTogbW9tZW50KCksXG4gICAgZW5kX3RpbWU6IG1vbWVudCgpLmFkZCgxLCAnaG91cicpLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZ3JvdXA6IDIsXG4gICAgdGl0bGU6ICdpdGVtIDInLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLmFkZCgtMC41LCAnaG91cicpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMC41LCAnaG91cicpLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZ3JvdXA6IDEsXG4gICAgdGl0bGU6ICdpdGVtIDMnLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLmFkZCgyLCAnaG91cicpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMywgJ2hvdXInKSxcbiAgfSxcbl07XG5cbmNvbnN0IEdFVF9JVEVNUyA9IGBcbiAgcXVlcnkgR0VUX0lURU1TIHtcbiAgICBpdGVtcyB7XG4gICAgICBncm91cCB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICB9XG4gICAgfVxuICB9YDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtncm91cHMsIHNldEdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSB1c2VTV1IoR0VUX0lURU1TLCAocSwgdikgPT4gY2xpZW50LnJlcXVlc3QocSwgdikpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHNldEl0ZW1zKGRhdGEuaXRlbXMpO1xuICAgICAgc2V0R3JvdXBzKGRhdGEuaXRlbXMubWFwKGl0ZW0gPT4geyByZXR1cm4gey4uLml0ZW0uZ3JvdXAsIHN0YXJ0X30gfSkpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGltZWxpbmVcbiAgICAgICAgZ3JvdXBzPXtncm91cHN9XG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgZGVmYXVsdFRpbWVTdGFydD17bW9tZW50KCkuYWRkKC0xMiwgJ2hvdXInKX1cbiAgICAgICAgZGVmYXVsdFRpbWVFbmQ9e21vbWVudCgpLmFkZCgxMiwgJ2hvdXInKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGltZWxpbmUiLCJtb21lbnQiLCJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdyYXBoUUxDbGllbnQiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSEFTVVJBX0JBU0VfVVJMIiwiaGVhZGVycyIsIk5FWFRfUFVCTElDX0hBU1VSQV9TRUNSRVQiLCJncm91cHMiLCJpZCIsInRpdGxlIiwiaXRlbXMiLCJncm91cCIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsImFkZCIsIkdFVF9JVEVNUyIsIkhvbWVQYWdlIiwic2V0SXRlbXMiLCJzZXRHcm91cHMiLCJxIiwidiIsInJlcXVlc3QiLCJkYXRhIiwibWFwIiwiaXRlbSIsInN0YXJ0XyIsImRlZmF1bHRUaW1lU3RhcnQiLCJkZWZhdWx0VGltZUVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_object_spread_props.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_object_spread_props.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectSpreadProps; }\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n    keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\n\nfunction _objectSpreadProps(target, source) {\n  source = source != null ? source : {}\n  if (Object.getOwnPropertyDescriptors) {\n    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n  } else {\n    ownKeys(Object(source)).forEach(function (key) {\n      Object.defineProperty(\n        target,\n        key,\n        Object.getOwnPropertyDescriptor(source, key)\n      );\n    });\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fb2JqZWN0X3NwcmVhZF9wcm9wcy5tanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX29iamVjdF9zcHJlYWRfcHJvcHMubWpzPzc5YWYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZFByb3BzKHRhcmdldCwgc291cmNlKSB7XG4gIHNvdXJjZSA9IHNvdXJjZSAhPSBudWxsID8gc291cmNlIDoge31cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgfSBlbHNlIHtcbiAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBrZXksXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_object_spread_props.mjs\n"));

/***/ })

});