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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar-timeline */ \"./node_modules/react-calendar-timeline/lib/index.js\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ \"./node_modules/react-calendar-timeline/lib/Timeline.css\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n// make sure you include the timeline stylesheet or the timeline will not be styled\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_6__.GraphQLClient(\"https://cuddly-meerkat-57.hasura.app/v1/graphql\", {\n    headers: {\n        \"content-type\": \"application/json\",\n        \"x-hasura-admin-secret\": \"hYJiMlfjJIIt7TuyHVjFPTN1E1iFeqcDMqlyW0lRDlD01WpDccvuZZBXfnBy76fc\"\n    }\n});\nvar groups = [\n    {\n        id: 1,\n        title: \"group 1\"\n    },\n    {\n        id: 2,\n        title: \"group 2\"\n    }, \n];\nvar items = [\n    {\n        id: 1,\n        group: 1,\n        title: \"item 1\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(1, \"hour\")\n    },\n    {\n        id: 2,\n        group: 2,\n        title: \"item 2\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-0.5, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(0.5, \"hour\")\n    },\n    {\n        id: 3,\n        group: 1,\n        title: \"item 3\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(2, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(3, \"hour\")\n    }, \n];\nvar GET_ITEMS = \"\\nquery GET_ITEMS {\\n  items {\\n    group {\\n      id\\n      title\\n    }\\n    id\\n    start_time\\n    end_time\\n    title\\n  }\\n}\\n\";\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), groups = ref1[0], setGroups = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(GET_ITEMS, function(q, v) {\n        return client.request(q, v);\n    }), data = ref2.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (data) {\n            setItems(data.items.map(function(item) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, item.group), {\n                    start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()(item.start_time),\n                    end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()(item.end_time).add(1, \"hour\")\n                });\n            }));\n            setGroups(data.items.map(function(item) {\n                return item.group;\n            }));\n        }\n    }, [\n        data\n    ]);\n    console.log(\"items\", items);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            groups: groups,\n            items: items,\n            defaultTimeStart: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-12, \"hour\"),\n            defaultTimeEnd: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(12, \"hour\")\n        }, void 0, false, {\n            fileName: \"/home/john/Linux/palmo/react-starter/pages/index.tsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HomePage, \"rxloKZnHjW//MXPownsFyg6cSV4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNhLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3VCQUFLQSxJQUFJLENBQUNiLEtBQUs7YUFBQSxDQUFDLENBQUMsQ0FBQztTQUNqRDtLQUNGLEVBQUU7UUFBQ1csSUFBSTtLQUFDLENBQUMsQ0FBQztJQUVYRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVoQixLQUFLLENBQUMsQ0FBQztJQUM1QixxQkFDRTtrQkFDRSw0RUFBQ2YsK0RBQVE7WUFDUFksTUFBTSxFQUFFQSxNQUFNO1lBQ2RHLEtBQUssRUFBRUEsS0FBSztZQUNaaUIsZ0JBQWdCLEVBQUUvQiw2Q0FBTSxFQUFFLENBQUNrQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO1lBQzNDYyxjQUFjLEVBQUVoQyw2Q0FBTSxFQUFFLENBQUNrQixHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQzs7Ozs7Z0JBQ3hDO3FCQUNELENBQ0g7Q0FDSDtHQWhDdUJFLFFBQVE7O1FBSVBuQiwyQ0FBTTs7O0FBSlBtQixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lbGluZSBmcm9tICdyZWFjdC1jYWxlbmRhci10aW1lbGluZSc7XG4vLyBtYWtlIHN1cmUgeW91IGluY2x1ZGUgdGhlIHRpbWVsaW5lIHN0eWxlc2hlZXQgb3IgdGhlIHRpbWVsaW5lIHdpbGwgbm90IGJlIHN0eWxlZFxuaW1wb3J0ICdyZWFjdC1jYWxlbmRhci10aW1lbGluZS9saWIvVGltZWxpbmUuY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEFTVVJBX0JBU0VfVVJMLCB7XG4gIGhlYWRlcnM6IHtcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICd4LWhhc3VyYS1hZG1pbi1zZWNyZXQnOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IQVNVUkFfU0VDUkVULFxuICB9LFxufSk7XG5cbmNvbnN0IGdyb3VwcyA9IFtcbiAgeyBpZDogMSwgdGl0bGU6ICdncm91cCAxJyB9LFxuICB7IGlkOiAyLCB0aXRsZTogJ2dyb3VwIDInIH0sXG5dO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGdyb3VwOiAxLFxuICAgIHRpdGxlOiAnaXRlbSAxJyxcbiAgICBzdGFydF90aW1lOiBtb21lbnQoKSxcbiAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDEsICdob3VyJyksXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBncm91cDogMixcbiAgICB0aXRsZTogJ2l0ZW0gMicsXG4gICAgc3RhcnRfdGltZTogbW9tZW50KCkuYWRkKC0wLjUsICdob3VyJyksXG4gICAgZW5kX3RpbWU6IG1vbWVudCgpLmFkZCgwLjUsICdob3VyJyksXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBncm91cDogMSxcbiAgICB0aXRsZTogJ2l0ZW0gMycsXG4gICAgc3RhcnRfdGltZTogbW9tZW50KCkuYWRkKDIsICdob3VyJyksXG4gICAgZW5kX3RpbWU6IG1vbWVudCgpLmFkZCgzLCAnaG91cicpLFxuICB9LFxuXTtcblxuY29uc3QgR0VUX0lURU1TID0gYFxucXVlcnkgR0VUX0lURU1TIHtcbiAgaXRlbXMge1xuICAgIGdyb3VwIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgIH1cbiAgICBpZFxuICAgIHN0YXJ0X3RpbWVcbiAgICBlbmRfdGltZVxuICAgIHRpdGxlXG4gIH1cbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2dyb3Vwcywgc2V0R3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7IGRhdGE6IGRhdGEgfSA9IHVzZVNXUihHRVRfSVRFTVMsIChxLCB2KSA9PiBjbGllbnQucmVxdWVzdChxLCB2KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgc2V0SXRlbXMoXG4gICAgICAgIGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLml0ZW0uZ3JvdXAsXG4gICAgICAgICAgICBzdGFydF90aW1lOiBtb21lbnQoaXRlbS5zdGFydF90aW1lKSxcbiAgICAgICAgICAgIGVuZF90aW1lOiBtb21lbnQoaXRlbS5lbmRfdGltZSkuYWRkKDEsICdob3VyJyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBzZXRHcm91cHMoZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uZ3JvdXApKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgY29uc29sZS5sb2coJ2l0ZW1zJywgaXRlbXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGltZWxpbmVcbiAgICAgICAgZ3JvdXBzPXtncm91cHN9XG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgZGVmYXVsdFRpbWVTdGFydD17bW9tZW50KCkuYWRkKC0xMiwgJ2hvdXInKX1cbiAgICAgICAgZGVmYXVsdFRpbWVFbmQ9e21vbWVudCgpLmFkZCgxMiwgJ2hvdXInKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGltZWxpbmUiLCJtb21lbnQiLCJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdyYXBoUUxDbGllbnQiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSEFTVVJBX0JBU0VfVVJMIiwiaGVhZGVycyIsIk5FWFRfUFVCTElDX0hBU1VSQV9TRUNSRVQiLCJncm91cHMiLCJpZCIsInRpdGxlIiwiaXRlbXMiLCJncm91cCIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsImFkZCIsIkdFVF9JVEVNUyIsIkhvbWVQYWdlIiwic2V0SXRlbXMiLCJzZXRHcm91cHMiLCJxIiwidiIsInJlcXVlc3QiLCJkYXRhIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0VGltZVN0YXJ0IiwiZGVmYXVsdFRpbWVFbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});