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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ \"./node_modules/react-calendar-timeline/lib/Timeline.css\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_6__);\n\n\n// make sure you include the timeline stylesheet or the timeline will not be styled\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Timeline = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-calendar-timeline_lib_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-calendar-timeline */ \"./node_modules/react-calendar-timeline/lib/index.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"react-calendar-timeline\"\n        ]\n    },\n    ssr: false\n});\n_c = Timeline;\nvar client = new graphql_request__WEBPACK_IMPORTED_MODULE_6__.GraphQLClient(\"https://cuddly-meerkat-57.hasura.app/v1/graphql\", {\n    headers: {\n        \"content-type\": \"application/json\",\n        \"x-hasura-admin-secret\": \"hYJiMlfjJIIt7TuyHVjFPTN1E1iFeqcDMqlyW0lRDlD01WpDccvuZZBXfnBy76fc\"\n    }\n});\nvar groups = [\n    {\n        id: 1,\n        title: \"group 1\"\n    },\n    {\n        id: 2,\n        title: \"group 2\"\n    }, \n];\nvar items = [\n    {\n        id: 1,\n        group: 1,\n        title: \"item 1\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()(),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, \"hour\")\n    },\n    {\n        id: 2,\n        group: 2,\n        title: \"item 2\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-0.5, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(0.5, \"hour\")\n    },\n    {\n        id: 3,\n        group: 1,\n        title: \"item 3\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(2, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(3, \"hour\")\n    }, \n];\nvar GET_ITEMS = \"\\nquery GET_ITEMS {\\n  items {\\n    group {\\n      id\\n      title\\n    }\\n    id\\n    start_time\\n    end_time\\n    title\\n  }\\n}\\n\";\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), items = ref[0], setItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), groups = ref1[0], setGroups = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(GET_ITEMS, function(q, v) {\n        return client.request(q, v);\n    }), data = ref2.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (data) {\n            setGroups((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(new Set(data.items.map(function(obj) {\n                return obj.group;\n            }))));\n            setItems(data.items.map(function(item) {\n                return {\n                    id: item.id,\n                    title: item.title,\n                    start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()(),\n                    end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, \"hour\"),\n                    group: item.group.id\n                };\n            }));\n        }\n    }, [\n        data\n    ]);\n    console.log(\"items\", items);\n    console.log(\"groups\", groups);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Timeline, {\n            groups: groups,\n            items: items,\n            defaultTimeStart: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-12, \"hour\"),\n            defaultTimeEnd: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(12, \"hour\")\n        }, void 0, false, {\n            fileName: \"/home/john/Linux/palmo/react-starter/pages/index.tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HomePage, \"rxloKZnHjW//MXPownsFyg6cSV4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Timeline\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQURBLG1GQUFtRjtBQUNqQztBQUN0QjtBQUNIO0FBQzZEO0FBQ25EO0FBQ2E7O0FBQ2hELElBQU1NLFFBQVEsR0FBR0YsbURBQU8sQ0FBQztXQUFNLG9PQUFpQztDQUFBOzs7Ozs7SUFBSUcsR0FBRyxFQUFFLEtBQUs7RUFBRztBQUEzRUQsS0FBQUEsUUFBUTtBQUVQLElBQU1FLE1BQU0sR0FBRyxJQUFJSCwwREFBYSxDQUFDSSxpREFBdUMsRUFBRTtJQUMvRUcsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGtCQUFrQjtRQUNsQyx1QkFBdUIsRUFBRUgsa0VBQXFDO0tBQy9EO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsSUFBTUssTUFBTSxHQUFHO0lBQ2I7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsS0FBSyxFQUFFLFNBQVM7S0FBRTtJQUMzQjtRQUFFRCxFQUFFLEVBQUUsQ0FBQztRQUFFQyxLQUFLLEVBQUUsU0FBUztLQUFFO0NBQzVCO0FBRUQsSUFBTUMsS0FBSyxHQUFHO0lBQ1o7UUFDRUYsRUFBRSxFQUFFLENBQUM7UUFDTEcsS0FBSyxFQUFFLENBQUM7UUFDUkYsS0FBSyxFQUFFLFFBQVE7UUFDZkcsVUFBVSxFQUFFbkIsNkNBQU0sRUFBRTtRQUNwQm9CLFFBQVEsRUFBRXBCLDZDQUFNLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQ2xDO0lBQ0Q7UUFDRU4sRUFBRSxFQUFFLENBQUM7UUFDTEcsS0FBSyxFQUFFLENBQUM7UUFDUkYsS0FBSyxFQUFFLFFBQVE7UUFDZkcsVUFBVSxFQUFFbkIsNkNBQU0sRUFBRSxDQUFDcUIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztRQUN0Q0QsUUFBUSxFQUFFcEIsNkNBQU0sRUFBRSxDQUFDcUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7S0FDcEM7SUFDRDtRQUNFTixFQUFFLEVBQUUsQ0FBQztRQUNMRyxLQUFLLEVBQUUsQ0FBQztRQUNSRixLQUFLLEVBQUUsUUFBUTtRQUNmRyxVQUFVLEVBQUVuQiw2Q0FBTSxFQUFFLENBQUNxQixHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUNuQ0QsUUFBUSxFQUFFcEIsNkNBQU0sRUFBRSxDQUFDcUIsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7S0FDbEM7Q0FDRjtBQUVELElBQU1DLFNBQVMsR0FBSSxzSUFhbkI7QUFFZSxTQUFTQyxRQUFRLEdBQUc7O0lBQ2pDLElBQTBCcEIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQmMsS0FBSyxHQUFjZCxHQUFZLEdBQTFCLEVBQUVxQixRQUFRLEdBQUlyQixHQUFZLEdBQWhCO0lBQ3RCLElBQTRCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWpDVyxNQUFNLEdBQWVYLElBQVksR0FBM0IsRUFBRXNCLFNBQVMsR0FBSXRCLElBQVksR0FBaEI7SUFFeEIsSUFBdUJGLElBQWlELEdBQWpEQSwrQ0FBTSxDQUFDcUIsU0FBUyxFQUFFLFNBQUNJLENBQUMsRUFBRUMsQ0FBQztlQUFLbkIsTUFBTSxDQUFDb0IsT0FBTyxDQUFDRixDQUFDLEVBQUVDLENBQUMsQ0FBQztLQUFBLENBQUMsRUFBaEVFLElBQVUsR0FBSzVCLElBQWlELENBQWhFNEIsSUFBSTtJQUVaM0IsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSTJCLElBQUksRUFBRTtZQUNSSixTQUFTLENBQUUscUZBQUcsSUFBSUssR0FBRyxDQUFFRCxJQUFJLENBQUNaLEtBQUssQ0FBQ2MsR0FBRyxDQUFDQyxTQUFBQSxHQUFHO3VCQUFJQSxHQUFHLENBQUNkLEtBQUs7YUFBQSxDQUFDLENBQUMsQ0FBMUMsQ0FBOEMsQ0FBQztZQUU3RE0sUUFBUSxDQUNOSyxJQUFJLENBQUNaLEtBQUssQ0FBQ2MsR0FBRyxDQUFDLFNBQUNFLElBQUksRUFBSztnQkFDdkIsT0FBTztvQkFDTGxCLEVBQUUsRUFBRWtCLElBQUksQ0FBQ2xCLEVBQUU7b0JBQ1hDLEtBQUssRUFBRWlCLElBQUksQ0FBQ2pCLEtBQUs7b0JBQ2pCRyxVQUFVLEVBQUVuQiw2Q0FBTSxFQUFFO29CQUNwQm9CLFFBQVEsRUFBRXBCLDZDQUFNLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO29CQUNqQ0gsS0FBSyxFQUFFZSxJQUFJLENBQUNmLEtBQUssQ0FBQ0gsRUFBRTtpQkFDckIsQ0FBQzthQUNILENBQUMsQ0FDSCxDQUFDO1NBQ0g7S0FDRixFQUFFO1FBQUNjLElBQUk7S0FBQyxDQUFDLENBQUM7SUFDWEssT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFbEIsS0FBSyxDQUFDLENBQUM7SUFFNUJpQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVyQixNQUFNLENBQUMsQ0FBQztJQUM5QixxQkFDRTtrQkFDRSw0RUFBQ1IsUUFBUTtZQUNQUSxNQUFNLEVBQUVBLE1BQU07WUFDZEcsS0FBSyxFQUFFQSxLQUFLO1lBQ1ptQixnQkFBZ0IsRUFBRXBDLDZDQUFNLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7WUFDM0NnQixjQUFjLEVBQUVyQyw2Q0FBTSxFQUFFLENBQUNxQixHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQzs7Ozs7Z0JBQ3hDO3FCQUNELENBQ0g7Q0FDSDtHQXBDdUJFLFFBQVE7O1FBSVB0QiwyQ0FBTTs7O0FBSlBzQixNQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1ha2Ugc3VyZSB5b3UgaW5jbHVkZSB0aGUgdGltZWxpbmUgc3R5bGVzaGVldCBvciB0aGUgdGltZWxpbmUgd2lsbCBub3QgYmUgc3R5bGVkXG5pbXBvcnQgJ3JlYWN0LWNhbGVuZGFyLXRpbWVsaW5lL2xpYi9UaW1lbGluZS5jc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcbmNvbnN0IFRpbWVsaW5lID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWNhbGVuZGFyLXRpbWVsaW5lJyksIHsgc3NyOiBmYWxzZSB9KTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9CQVNFX1VSTCwge1xuICBoZWFkZXJzOiB7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAneC1oYXN1cmEtYWRtaW4tc2VjcmV0JzogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEFTVVJBX1NFQ1JFVCxcbiAgfSxcbn0pO1xuXG5jb25zdCBncm91cHMgPSBbXG4gIHsgaWQ6IDEsIHRpdGxlOiAnZ3JvdXAgMScgfSxcbiAgeyBpZDogMiwgdGl0bGU6ICdncm91cCAyJyB9LFxuXTtcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBncm91cDogMSxcbiAgICB0aXRsZTogJ2l0ZW0gMScsXG4gICAgc3RhcnRfdGltZTogbW9tZW50KCksXG4gICAgZW5kX3RpbWU6IG1vbWVudCgpLmFkZCgxLCAnaG91cicpLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZ3JvdXA6IDIsXG4gICAgdGl0bGU6ICdpdGVtIDInLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLmFkZCgtMC41LCAnaG91cicpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMC41LCAnaG91cicpLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZ3JvdXA6IDEsXG4gICAgdGl0bGU6ICdpdGVtIDMnLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLmFkZCgyLCAnaG91cicpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMywgJ2hvdXInKSxcbiAgfSxcbl07XG5cbmNvbnN0IEdFVF9JVEVNUyA9IGBcbnF1ZXJ5IEdFVF9JVEVNUyB7XG4gIGl0ZW1zIHtcbiAgICBncm91cCB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICB9XG4gICAgaWRcbiAgICBzdGFydF90aW1lXG4gICAgZW5kX3RpbWVcbiAgICB0aXRsZVxuICB9XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtncm91cHMsIHNldEdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSB1c2VTV1IoR0VUX0lURU1TLCAocSwgdikgPT4gY2xpZW50LnJlcXVlc3QocSwgdikpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHNldEdyb3VwcyhbLi4ubmV3IFNldCggZGF0YS5pdGVtcy5tYXAob2JqID0+IG9iai5ncm91cCkpIF0gKTtcblxuICAgICAgc2V0SXRlbXMoXG4gICAgICAgIGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICBzdGFydF90aW1lOiBtb21lbnQoKSxcbiAgICAgICAgICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMSwgJ2hvdXInKSxcbiAgICAgICAgICAgIGdyb3VwOiBpdGVtLmdyb3VwLmlkLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcbiAgY29uc29sZS5sb2coJ2l0ZW1zJywgaXRlbXMpO1xuXG4gIGNvbnNvbGUubG9nKCdncm91cHMnLCBncm91cHMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGltZWxpbmVcbiAgICAgICAgZ3JvdXBzPXtncm91cHN9XG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgZGVmYXVsdFRpbWVTdGFydD17bW9tZW50KCkuYWRkKC0xMiwgJ2hvdXInKX1cbiAgICAgICAgZGVmYXVsdFRpbWVFbmQ9e21vbWVudCgpLmFkZCgxMiwgJ2hvdXInKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW9tZW50IiwidXNlU1dSIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkeW5hbWljIiwiR3JhcGhRTENsaWVudCIsIlRpbWVsaW5lIiwic3NyIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hBU1VSQV9CQVNFX1VSTCIsImhlYWRlcnMiLCJORVhUX1BVQkxJQ19IQVNVUkFfU0VDUkVUIiwiZ3JvdXBzIiwiaWQiLCJ0aXRsZSIsIml0ZW1zIiwiZ3JvdXAiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJhZGQiLCJHRVRfSVRFTVMiLCJIb21lUGFnZSIsInNldEl0ZW1zIiwic2V0R3JvdXBzIiwicSIsInYiLCJyZXF1ZXN0IiwiZGF0YSIsIlNldCIsIm1hcCIsIm9iaiIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFRpbWVTdGFydCIsImRlZmF1bHRUaW1lRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});