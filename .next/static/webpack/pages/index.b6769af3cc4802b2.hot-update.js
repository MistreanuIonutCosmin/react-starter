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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar-timeline */ \"./node_modules/react-calendar-timeline/lib/index.js\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ \"./node_modules/react-calendar-timeline/lib/Timeline.css\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_6__);\n\n\n// make sure you include the timeline stylesheet or the timeline will not be styled\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_6__.GraphQLClient(\"https://cuddly-meerkat-57.hasura.app/v1/graphql\", {\n    headers: {\n        \"content-type\": \"application/json\",\n        \"x-hasura-admin-secret\": \"hYJiMlfjJIIt7TuyHVjFPTN1E1iFeqcDMqlyW0lRDlD01WpDccvuZZBXfnBy76fc\"\n    }\n});\nvar groups = [\n    {\n        id: 1,\n        title: \"group 1\"\n    },\n    {\n        id: 2,\n        title: \"group 2\"\n    }, \n];\nvar items = [\n    {\n        id: 1,\n        group: 1,\n        title: \"item 1\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(1, \"hour\")\n    },\n    {\n        id: 2,\n        group: 2,\n        title: \"item 2\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-0.5, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(0.5, \"hour\")\n    },\n    {\n        id: 3,\n        group: 1,\n        title: \"item 3\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(2, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(3, \"hour\")\n    }, \n];\nvar GET_ITEMS = \"\\n  query GET_ITEMS {\\n    items {\\n      group {\\n        id\\n        title\\n      }\\n    }\\n  }\";\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), groups = ref1[0], setGroups = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(GET_ITEMS, function(q, v) {\n        return client.request(q, v);\n    }), data = ref2.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (data) {\n            setItems(data.items);\n            setGroups(data.items.map(function(item) {\n                return item.group;\n            }));\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            groups: groups,\n            items: items,\n            defaultTimeStart: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-12, \"hour\"),\n            defaultTimeEnd: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(12, \"hour\")\n        }, void 0, false, {\n            fileName: \"/home/john/Linux/palmo/react-starter/pages/index.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HomePage, \"rxloKZnHjW//MXPownsFyg6cSV4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7WUFDM0NZLGNBQWMsRUFBRTlCLDZDQUFNLEVBQUUsQ0FBQ2tCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDOzs7OztnQkFDeEM7cUJBQ0QsQ0FDSDtDQUNIO0dBeEJ1QkUsUUFBUTs7UUFLUG5CLDJDQUFNOzs7QUFMUG1CLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVsaW5lIGZyb20gJ3JlYWN0LWNhbGVuZGFyLXRpbWVsaW5lJztcbi8vIG1ha2Ugc3VyZSB5b3UgaW5jbHVkZSB0aGUgdGltZWxpbmUgc3R5bGVzaGVldCBvciB0aGUgdGltZWxpbmUgd2lsbCBub3QgYmUgc3R5bGVkXG5pbXBvcnQgJ3JlYWN0LWNhbGVuZGFyLXRpbWVsaW5lL2xpYi9UaW1lbGluZS5jc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IQVNVUkFfQkFTRV9VUkwsIHtcbiAgaGVhZGVyczoge1xuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ3gtaGFzdXJhLWFkbWluLXNlY3JldCc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9TRUNSRVQsXG4gIH0sXG59KTtcblxuY29uc3QgZ3JvdXBzID0gW1xuICB7IGlkOiAxLCB0aXRsZTogJ2dyb3VwIDEnIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiAnZ3JvdXAgMicgfSxcbl07XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZ3JvdXA6IDEsXG4gICAgdGl0bGU6ICdpdGVtIDEnLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMSwgJ2hvdXInKSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGdyb3VwOiAyLFxuICAgIHRpdGxlOiAnaXRlbSAyJyxcbiAgICBzdGFydF90aW1lOiBtb21lbnQoKS5hZGQoLTAuNSwgJ2hvdXInKSxcbiAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDAuNSwgJ2hvdXInKSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGdyb3VwOiAxLFxuICAgIHRpdGxlOiAnaXRlbSAzJyxcbiAgICBzdGFydF90aW1lOiBtb21lbnQoKS5hZGQoMiwgJ2hvdXInKSxcbiAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDMsICdob3VyJyksXG4gIH0sXG5dO1xuXG5jb25zdCBHRVRfSVRFTVMgPSBgXG4gIHF1ZXJ5IEdFVF9JVEVNUyB7XG4gICAgaXRlbXMge1xuICAgICAgZ3JvdXAge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZ3JvdXBzLCBzZXRHcm91cHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gdXNlU1dSKEdFVF9JVEVNUywgKHEsIHYpID0+IGNsaWVudC5yZXF1ZXN0KHEsIHYpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRJdGVtcyhkYXRhLml0ZW1zKTtcbiAgICAgIHNldEdyb3VwcyhkYXRhLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uZ3JvdXApKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRpbWVsaW5lXG4gICAgICAgIGdyb3Vwcz17Z3JvdXBzfVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIGRlZmF1bHRUaW1lU3RhcnQ9e21vbWVudCgpLmFkZCgtMTIsICdob3VyJyl9XG4gICAgICAgIGRlZmF1bHRUaW1lRW5kPXttb21lbnQoKS5hZGQoMTIsICdob3VyJyl9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRpbWVsaW5lIiwibW9tZW50IiwidXNlU1dSIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHcmFwaFFMQ2xpZW50IiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hBU1VSQV9CQVNFX1VSTCIsImhlYWRlcnMiLCJORVhUX1BVQkxJQ19IQVNVUkFfU0VDUkVUIiwiZ3JvdXBzIiwiaWQiLCJ0aXRsZSIsIml0ZW1zIiwiZ3JvdXAiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJhZGQiLCJHRVRfSVRFTVMiLCJIb21lUGFnZSIsInNldEl0ZW1zIiwic2V0R3JvdXBzIiwicSIsInYiLCJyZXF1ZXN0IiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJkZWZhdWx0VGltZVN0YXJ0IiwiZGVmYXVsdFRpbWVFbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});