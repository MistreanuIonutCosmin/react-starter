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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ \"./node_modules/react-calendar-timeline/lib/Timeline.css\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_6__);\n\n// make sure you include the timeline stylesheet or the timeline will not be styled\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Timeline = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-calendar-timeline_lib_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-calendar-timeline */ \"./node_modules/react-calendar-timeline/lib/index.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"react-calendar-timeline\"\n        ]\n    },\n    ssr: false\n});\n_c = Timeline;\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_6__.GraphQLClient(\"https://cuddly-meerkat-57.hasura.app/v1/graphql\", {\n    headers: {\n        \"content-type\": \"application/json\",\n        \"x-hasura-admin-secret\": \"hYJiMlfjJIIt7TuyHVjFPTN1E1iFeqcDMqlyW0lRDlD01WpDccvuZZBXfnBy76fc\"\n    }\n});\nvar groups = [\n    {\n        id: 1,\n        title: \"group 1\"\n    },\n    {\n        id: 2,\n        title: \"group 2\"\n    }, \n];\nvar items = [\n    {\n        id: 1,\n        group: 1,\n        title: \"item 1\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()(),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, \"hour\")\n    },\n    {\n        id: 2,\n        group: 2,\n        title: \"item 2\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-0.5, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(0.5, \"hour\")\n    },\n    {\n        id: 3,\n        group: 1,\n        title: \"item 3\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(2, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(3, \"hour\")\n    }, \n];\nvar GET_ITEMS = \"\\nquery GET_ITEMS {\\n  items {\\n    group {\\n      id\\n      title\\n    }\\n    id\\n    start_time\\n    end_time\\n    title\\n  }\\n}\\n\";\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), groups = ref1[0], setGroups = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(GET_ITEMS, function(q, v) {\n        return client.request(q, v);\n    }), data = ref2.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (data) {\n            setItems(data.items.map(function(item) {\n                return {\n                    id: item.id,\n                    title: item.title,\n                    start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()(),\n                    end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, \"hour\"),\n                    group: item.group.id\n                };\n            }));\n            setGroups(data.items.map(function(item) {\n                return item.group;\n            }));\n        }\n    }, [\n        data\n    ]);\n    console.log(\"items\", items);\n    console.log(\"groups\", groups);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Timeline, {\n            groups: groups,\n            items: items,\n            defaultTimeStart: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-12, \"hour\"),\n            defaultTimeEnd: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(12, \"hour\")\n        }, void 0, false, {\n            fileName: \"/home/john/Linux/palmo/react-starter/pages/index.tsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HomePage, \"rxloKZnHjW//MXPownsFyg6cSV4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Timeline\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFEQSxtRkFBbUY7QUFDakM7QUFDdEI7QUFDSDtBQUM2RDtBQUNuRDtBQUNhOztBQUNoRCxJQUFNTSxRQUFRLEdBQUdGLG1EQUFPLENBQUM7V0FBTSxvT0FBaUM7Q0FBQTs7Ozs7O0lBQUlHLEdBQUcsRUFBRSxLQUFLO0VBQUc7QUFBM0VELEtBQUFBLFFBQVE7QUFFUCxJQUFNRSxNQUFNLEdBQUcsSUFBSUgsMERBQWEsQ0FBQ0ksaURBQXVDLEVBQUU7SUFDL0VHLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsdUJBQXVCLEVBQUVILGtFQUFxQztLQUMvRDtDQUNGLENBQUMsQ0FBQztBQUVILElBQU1LLE1BQU0sR0FBRztJQUNiO1FBQUVDLEVBQUUsRUFBRSxDQUFDO1FBQUVDLEtBQUssRUFBRSxTQUFTO0tBQUU7SUFDM0I7UUFBRUQsRUFBRSxFQUFFLENBQUM7UUFBRUMsS0FBSyxFQUFFLFNBQVM7S0FBRTtDQUM1QjtBQUVELElBQU1DLEtBQUssR0FBRztJQUNaO1FBQ0VGLEVBQUUsRUFBRSxDQUFDO1FBQ0xHLEtBQUssRUFBRSxDQUFDO1FBQ1JGLEtBQUssRUFBRSxRQUFRO1FBQ2ZHLFVBQVUsRUFBRW5CLDZDQUFNLEVBQUU7UUFDcEJvQixRQUFRLEVBQUVwQiw2Q0FBTSxFQUFFLENBQUNxQixHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztLQUNsQztJQUNEO1FBQ0VOLEVBQUUsRUFBRSxDQUFDO1FBQ0xHLEtBQUssRUFBRSxDQUFDO1FBQ1JGLEtBQUssRUFBRSxRQUFRO1FBQ2ZHLFVBQVUsRUFBRW5CLDZDQUFNLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDdENELFFBQVEsRUFBRXBCLDZDQUFNLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO0tBQ3BDO0lBQ0Q7UUFDRU4sRUFBRSxFQUFFLENBQUM7UUFDTEcsS0FBSyxFQUFFLENBQUM7UUFDUkYsS0FBSyxFQUFFLFFBQVE7UUFDZkcsVUFBVSxFQUFFbkIsNkNBQU0sRUFBRSxDQUFDcUIsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDbkNELFFBQVEsRUFBRXBCLDZDQUFNLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQ2xDO0NBQ0Y7QUFFRCxJQUFNQyxTQUFTLEdBQUksc0lBYW5CO0FBRWUsU0FBU0MsUUFBUSxHQUFHOztJQUNqQyxJQUEwQnBCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JjLEtBQUssR0FBY2QsR0FBWSxHQUExQixFQUFFcUIsUUFBUSxHQUFJckIsR0FBWSxHQUFoQjtJQUN0QixJQUE0QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFqQ1csTUFBTSxHQUFlWCxJQUFZLEdBQTNCLEVBQUVzQixTQUFTLEdBQUl0QixJQUFZLEdBQWhCO0lBRXhCLElBQXVCRixJQUFpRCxHQUFqREEsK0NBQU0sQ0FBQ3FCLFNBQVMsRUFBRSxTQUFDSSxDQUFDLEVBQUVDLENBQUM7ZUFBS25CLE1BQU0sQ0FBQ29CLE9BQU8sQ0FBQ0YsQ0FBQyxFQUFFQyxDQUFDLENBQUM7S0FBQSxDQUFDLEVBQWhFRSxJQUFVLEdBQUs1QixJQUFpRCxDQUFoRTRCLElBQUk7SUFFWjNCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUkyQixJQUFJLEVBQUU7WUFDUkwsUUFBUSxDQUNOSyxJQUFJLENBQUNaLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztnQkFDdkIsT0FBTztvQkFDTGhCLEVBQUUsRUFBRWdCLElBQUksQ0FBQ2hCLEVBQUU7b0JBQ1hDLEtBQUssRUFBRWUsSUFBSSxDQUFDZixLQUFLO29CQUNqQkcsVUFBVSxFQUFFbkIsNkNBQU0sRUFBRTtvQkFDcEJvQixRQUFRLEVBQUVwQiw2Q0FBTSxFQUFFLENBQUNxQixHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztvQkFDakNILEtBQUssRUFBRWEsSUFBSSxDQUFDYixLQUFLLENBQUNILEVBQUU7aUJBQ3JCLENBQUM7YUFDSCxDQUFDLENBQ0gsQ0FBQztZQUNGVSxTQUFTLENBQUNJLElBQUksQ0FBQ1osS0FBSyxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsSUFBSTt1QkFBS0EsSUFBSSxDQUFDYixLQUFLO2FBQUEsQ0FBQyxDQUFDLENBQUM7U0FDakQ7S0FDRixFQUFFO1FBQUNXLElBQUk7S0FBQyxDQUFDLENBQUM7SUFDWEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFaEIsS0FBSyxDQUFDLENBQUM7SUFFNUJlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRW5CLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLHFCQUNFO2tCQUNFLDRFQUFDUixRQUFRO1lBQ1BRLE1BQU0sRUFBRUEsTUFBTTtZQUNkRyxLQUFLLEVBQUVBLEtBQUs7WUFDWmlCLGdCQUFnQixFQUFFbEMsNkNBQU0sRUFBRSxDQUFDcUIsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQztZQUMzQ2MsY0FBYyxFQUFFbkMsNkNBQU0sRUFBRSxDQUFDcUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7Ozs7O2dCQUN4QztxQkFDRCxDQUNIO0NBQ0g7R0FuQ3VCRSxRQUFROztRQUlQdEIsMkNBQU07OztBQUpQc0IsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYWtlIHN1cmUgeW91IGluY2x1ZGUgdGhlIHRpbWVsaW5lIHN0eWxlc2hlZXQgb3IgdGhlIHRpbWVsaW5lIHdpbGwgbm90IGJlIHN0eWxlZFxuaW1wb3J0ICdyZWFjdC1jYWxlbmRhci10aW1lbGluZS9saWIvVGltZWxpbmUuY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5jb25zdCBUaW1lbGluZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1jYWxlbmRhci10aW1lbGluZScpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IQVNVUkFfQkFTRV9VUkwsIHtcbiAgaGVhZGVyczoge1xuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ3gtaGFzdXJhLWFkbWluLXNlY3JldCc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9TRUNSRVQsXG4gIH0sXG59KTtcblxuY29uc3QgZ3JvdXBzID0gW1xuICB7IGlkOiAxLCB0aXRsZTogJ2dyb3VwIDEnIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiAnZ3JvdXAgMicgfSxcbl07XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZ3JvdXA6IDEsXG4gICAgdGl0bGU6ICdpdGVtIDEnLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMSwgJ2hvdXInKSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGdyb3VwOiAyLFxuICAgIHRpdGxlOiAnaXRlbSAyJyxcbiAgICBzdGFydF90aW1lOiBtb21lbnQoKS5hZGQoLTAuNSwgJ2hvdXInKSxcbiAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDAuNSwgJ2hvdXInKSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGdyb3VwOiAxLFxuICAgIHRpdGxlOiAnaXRlbSAzJyxcbiAgICBzdGFydF90aW1lOiBtb21lbnQoKS5hZGQoMiwgJ2hvdXInKSxcbiAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDMsICdob3VyJyksXG4gIH0sXG5dO1xuXG5jb25zdCBHRVRfSVRFTVMgPSBgXG5xdWVyeSBHRVRfSVRFTVMge1xuICBpdGVtcyB7XG4gICAgZ3JvdXAge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgfVxuICAgIGlkXG4gICAgc3RhcnRfdGltZVxuICAgIGVuZF90aW1lXG4gICAgdGl0bGVcbiAgfVxufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZ3JvdXBzLCBzZXRHcm91cHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gdXNlU1dSKEdFVF9JVEVNUywgKHEsIHYpID0+IGNsaWVudC5yZXF1ZXN0KHEsIHYpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRJdGVtcyhcbiAgICAgICAgZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLFxuICAgICAgICAgICAgZW5kX3RpbWU6IG1vbWVudCgpLmFkZCgxLCAnaG91cicpLFxuICAgICAgICAgICAgZ3JvdXA6IGl0ZW0uZ3JvdXAuaWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBzZXRHcm91cHMoZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uZ3JvdXApKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG4gIGNvbnNvbGUubG9nKCdpdGVtcycsIGl0ZW1zKTtcblxuICBjb25zb2xlLmxvZygnZ3JvdXBzJywgZ3JvdXBzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRpbWVsaW5lXG4gICAgICAgIGdyb3Vwcz17Z3JvdXBzfVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIGRlZmF1bHRUaW1lU3RhcnQ9e21vbWVudCgpLmFkZCgtMTIsICdob3VyJyl9XG4gICAgICAgIGRlZmF1bHRUaW1lRW5kPXttb21lbnQoKS5hZGQoMTIsICdob3VyJyl9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vbWVudCIsInVzZVNXUiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIkdyYXBoUUxDbGllbnQiLCJUaW1lbGluZSIsInNzciIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IQVNVUkFfQkFTRV9VUkwiLCJoZWFkZXJzIiwiTkVYVF9QVUJMSUNfSEFTVVJBX1NFQ1JFVCIsImdyb3VwcyIsImlkIiwidGl0bGUiLCJpdGVtcyIsImdyb3VwIiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwiYWRkIiwiR0VUX0lURU1TIiwiSG9tZVBhZ2UiLCJzZXRJdGVtcyIsInNldEdyb3VwcyIsInEiLCJ2IiwicmVxdWVzdCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRUaW1lU3RhcnQiLCJkZWZhdWx0VGltZUVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});