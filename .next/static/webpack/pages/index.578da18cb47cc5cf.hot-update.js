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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar-timeline */ \"./node_modules/react-calendar-timeline/lib/index.js\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ \"./node_modules/react-calendar-timeline/lib/Timeline.css\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_5__);\n\n\n// make sure you include the timeline stylesheet or the timeline will not be styled\n\n\n\n\nvar _s = $RefreshSig$();\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_5__.GraphQLClient(\"https://cuddly-meerkat-57.hasura.app/v1/graphql\", {\n    headers: {\n        \"x-hasura-admin-secret\": \"hYJiMlfjJIIt7TuyHVjFPTN1E1iFeqcDMqlyW0lRDlD01WpDccvuZZBXfnBy76fc\"\n    }\n});\nvar groups = [\n    {\n        id: 1,\n        title: \"group 1\"\n    },\n    {\n        id: 2,\n        title: \"group 2\"\n    }, \n];\nvar items = [\n    {\n        id: 1,\n        group: 1,\n        title: \"item 1\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()(),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(1, \"hour\")\n    },\n    {\n        id: 2,\n        group: 2,\n        title: \"item 2\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-0.5, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(0.5, \"hour\")\n    },\n    {\n        id: 3,\n        group: 1,\n        title: \"item 3\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(2, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(3, \"hour\")\n    }, \n];\nfunction HomePage() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"{\\n      query GET_ITEMS {\\n        items {\\n          group {\\n            id\\n            title\\n          }\\n        }\\n      }\\n    }\", function(q, v) {\n        return client.request(q, v);\n    }), items2 = ref.data, ceva = ref.error;\n    console.log(\"items2\", items2);\n    console.log(\"ceva\", ceva);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar_timeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            groups: groups,\n            items: items,\n            defaultTimeStart: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-12, \"hour\"),\n            defaultTimeEnd: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(12, \"hour\")\n        }, void 0, false, {\n            fileName: \"/home/john/Linux/palmo/react-starter/pages/index.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HomePage, \"1+/jlYAE/2HC8CNuhPu+TZBQ3Pk=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0M7QUFDL0MsbUZBQW1GO0FBQ2pDO0FBQ3RCO0FBQ0g7QUFHdUI7O0FBRXpDLElBQU1JLE1BQU0sR0FBRyxJQUFJRCwwREFBYSxDQUFDRSxpREFBdUMsRUFBRTtJQUMvRUcsT0FBTyxFQUFFO1FBQ1AsdUJBQXVCLEVBQUVILGtFQUFxQztLQUMvRDtDQUNGLENBQUMsQ0FBQztBQUVILElBQU1LLE1BQU0sR0FBRztJQUNiO1FBQUVDLEVBQUUsRUFBRSxDQUFDO1FBQUVDLEtBQUssRUFBRSxTQUFTO0tBQUU7SUFDM0I7UUFBRUQsRUFBRSxFQUFFLENBQUM7UUFBRUMsS0FBSyxFQUFFLFNBQVM7S0FBRTtDQUM1QjtBQUVELElBQU1DLEtBQUssR0FBRztJQUNaO1FBQ0VGLEVBQUUsRUFBRSxDQUFDO1FBQ0xHLEtBQUssRUFBRSxDQUFDO1FBQ1JGLEtBQUssRUFBRSxRQUFRO1FBQ2ZHLFVBQVUsRUFBRWQsNkNBQU0sRUFBRTtRQUNwQmUsUUFBUSxFQUFFZiw2Q0FBTSxFQUFFLENBQUNnQixHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztLQUNsQztJQUNEO1FBQ0VOLEVBQUUsRUFBRSxDQUFDO1FBQ0xHLEtBQUssRUFBRSxDQUFDO1FBQ1JGLEtBQUssRUFBRSxRQUFRO1FBQ2ZHLFVBQVUsRUFBRWQsNkNBQU0sRUFBRSxDQUFDZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztRQUN0Q0QsUUFBUSxFQUFFZiw2Q0FBTSxFQUFFLENBQUNnQixHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztLQUNwQztJQUNEO1FBQ0VOLEVBQUUsRUFBRSxDQUFDO1FBQ0xHLEtBQUssRUFBRSxDQUFDO1FBQ1JGLEtBQUssRUFBRSxRQUFRO1FBQ2ZHLFVBQVUsRUFBRWQsNkNBQU0sRUFBRSxDQUFDZ0IsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDbkNELFFBQVEsRUFBRWYsNkNBQU0sRUFBRSxDQUFDZ0IsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7S0FDbEM7Q0FDRjtBQUVjLFNBQVNDLFFBQVEsR0FBRzs7SUFDakMsSUFBc0NoQixHQVlyQyxHQVpxQ0EsK0NBQU0sQ0FDM0MsMklBU0UsRUFDRCxTQUFDaUIsQ0FBQyxFQUFFQyxDQUFDO2VBQUtoQixNQUFNLENBQUNpQixPQUFPLENBQUNGLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0tBQUEsQ0FDL0IsRUFaT0UsTUFBWSxHQUFrQnBCLEdBWXJDLENBWk9vQixJQUFJLEVBQVVFLElBQVcsR0FBS3RCLEdBWXJDLENBWnFCc0IsS0FBSztJQWMzQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFSixNQUFNLENBQUMsQ0FBQztJQUM5QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFRixJQUFJLENBQUMsQ0FBQztJQUUxQixxQkFDRTtrQkFDRSw0RUFBQ3pCLCtEQUFRO1lBQ1BVLE1BQU0sRUFBRUEsTUFBTTtZQUNkRyxLQUFLLEVBQUVBLEtBQUs7WUFDWmUsZ0JBQWdCLEVBQUUzQiw2Q0FBTSxFQUFFLENBQUNnQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO1lBQzNDWSxjQUFjLEVBQUU1Qiw2Q0FBTSxFQUFFLENBQUNnQixHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQzs7Ozs7Z0JBQ3hDO3FCQUNELENBQ0g7Q0FDSDtHQTVCdUJDLFFBQVE7O1FBQ1FoQiwyQ0FBTTs7O0FBRHRCZ0IsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZWxpbmUgZnJvbSAncmVhY3QtY2FsZW5kYXItdGltZWxpbmUnO1xuLy8gbWFrZSBzdXJlIHlvdSBpbmNsdWRlIHRoZSB0aW1lbGluZSBzdHlsZXNoZWV0IG9yIHRoZSB0aW1lbGluZSB3aWxsIG5vdCBiZSBzdHlsZWRcbmltcG9ydCAncmVhY3QtY2FsZW5kYXItdGltZWxpbmUvbGliL1RpbWVsaW5lLmNzcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9CQVNFX1VSTCwge1xuICBoZWFkZXJzOiB7XG4gICAgJ3gtaGFzdXJhLWFkbWluLXNlY3JldCc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9TRUNSRVQsXG4gIH0sXG59KTtcblxuY29uc3QgZ3JvdXBzID0gW1xuICB7IGlkOiAxLCB0aXRsZTogJ2dyb3VwIDEnIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiAnZ3JvdXAgMicgfSxcbl07XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZ3JvdXA6IDEsXG4gICAgdGl0bGU6ICdpdGVtIDEnLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMSwgJ2hvdXInKSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGdyb3VwOiAyLFxuICAgIHRpdGxlOiAnaXRlbSAyJyxcbiAgICBzdGFydF90aW1lOiBtb21lbnQoKS5hZGQoLTAuNSwgJ2hvdXInKSxcbiAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDAuNSwgJ2hvdXInKSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGdyb3VwOiAxLFxuICAgIHRpdGxlOiAnaXRlbSAzJyxcbiAgICBzdGFydF90aW1lOiBtb21lbnQoKS5hZGQoMiwgJ2hvdXInKSxcbiAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDMsICdob3VyJyksXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhOiBpdGVtczIsIGVycm9yOiBjZXZhIH0gPSB1c2VTV1IoXG4gIGB7XG4gICAgICBxdWVyeSBHRVRfSVRFTVMge1xuICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgZ3JvdXAge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWAsXG4gICAgKHEsIHYpID0+IGNsaWVudC5yZXF1ZXN0KHEsIHYpXG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJpdGVtczJcIiwgaXRlbXMyKTtcbiAgY29uc29sZS5sb2coXCJjZXZhXCIsIGNldmEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaW1lbGluZVxuICAgICAgICBncm91cHM9e2dyb3Vwc31cbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICBkZWZhdWx0VGltZVN0YXJ0PXttb21lbnQoKS5hZGQoLTEyLCAnaG91cicpfVxuICAgICAgICBkZWZhdWx0VGltZUVuZD17bW9tZW50KCkuYWRkKDEyLCAnaG91cicpfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUaW1lbGluZSIsIm1vbWVudCIsInVzZVNXUiIsIkdyYXBoUUxDbGllbnQiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSEFTVVJBX0JBU0VfVVJMIiwiaGVhZGVycyIsIk5FWFRfUFVCTElDX0hBU1VSQV9TRUNSRVQiLCJncm91cHMiLCJpZCIsInRpdGxlIiwiaXRlbXMiLCJncm91cCIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsImFkZCIsIkhvbWVQYWdlIiwicSIsInYiLCJyZXF1ZXN0IiwiZGF0YSIsIml0ZW1zMiIsImVycm9yIiwiY2V2YSIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0VGltZVN0YXJ0IiwiZGVmYXVsdFRpbWVFbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});