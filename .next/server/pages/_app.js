"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/notifications */ \"@mantine/notifications\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App(props) {\n    const { Component , pageProps  } = props;\n    const { 0: colorScheme , 1: setColorScheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.colorScheme);\n    const toggleColorScheme = (value)=>{\n        const nextColorScheme = value || (colorScheme === \"dark\" ? \"light\" : \"dark\");\n        setColorScheme(nextColorScheme);\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)(\"mantine-color-scheme\", nextColorScheme, {\n            maxAge: 60 * 60 * 24 * 30\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mantine next example\"\n                    }, void 0, false, {\n                        fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.ColorSchemeProvider, {\n                colorScheme: colorScheme,\n                toggleColorScheme: toggleColorScheme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.MantineProvider, {\n                    theme: {\n                        colorScheme\n                    },\n                    withGlobalStyles: true,\n                    withNormalizeCSS: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_notifications__WEBPACK_IMPORTED_MODULE_5__.NotificationsProvider, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/john/Linux/palmo/react-starter/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nApp.getInitialProps = ({ ctx  })=>({\n        colorScheme: (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)(\"mantine-color-scheme\", ctx) || \"light\"\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUM7QUFFbUI7QUFDdkI7QUFDcUQ7QUFDbkI7QUFFaEQsU0FBU08sR0FBRyxDQUFDQyxLQUE4QyxFQUFFO0lBQzFFLE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBR0YsS0FBSztJQUN0QyxNQUFNLEtBQUNHLFdBQVcsTUFBRUMsY0FBYyxNQUFJWiwrQ0FBUSxDQUFjUSxLQUFLLENBQUNHLFdBQVcsQ0FBQztJQUU5RSxNQUFNRSxpQkFBaUIsR0FBRyxDQUFDQyxLQUFtQixHQUFLO1FBQ2pELE1BQU1DLGVBQWUsR0FBR0QsS0FBSyxJQUFJLENBQUNILFdBQVcsS0FBSyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM1RUMsY0FBYyxDQUFDRyxlQUFlLENBQUMsQ0FBQztRQUNoQ2IsdURBQVMsQ0FBQyxzQkFBc0IsRUFBRWEsZUFBZSxFQUFFO1lBQUVDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1NBQUUsQ0FBQyxDQUFDO0tBQ25GO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDYixrREFBSTs7a0NBQ0gsOERBQUNjLE9BQUs7a0NBQUMsc0JBQW9COzs7Ozs0QkFBUTtrQ0FDbkMsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsc0RBQXNEOzs7Ozs0QkFBRztrQ0FDdkYsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxlQUFlO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NEJBQUc7Ozs7OztvQkFDM0M7MEJBRVAsOERBQUNsQiw4REFBbUI7Z0JBQUNNLFdBQVcsRUFBRUEsV0FBVztnQkFBRUUsaUJBQWlCLEVBQUVBLGlCQUFpQjswQkFDakYsNEVBQUNULDBEQUFlO29CQUFDb0IsS0FBSyxFQUFFO3dCQUFFYixXQUFXO3FCQUFFO29CQUFFYyxnQkFBZ0I7b0JBQUNDLGdCQUFnQjs4QkFDeEUsNEVBQUNwQix5RUFBcUI7a0NBQ3BCLDRFQUFDRyxTQUFTOzRCQUFFLEdBQUdDLFNBQVM7Ozs7O2dDQUFJOzs7Ozs0QkFDTjs7Ozs7d0JBQ1I7Ozs7O29CQUNFOztvQkFDckIsQ0FDSDtDQUNIO0FBRURILEdBQUcsQ0FBQ29CLGVBQWUsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBc0MsR0FBSyxDQUFDO1FBQ3RFakIsV0FBVyxFQUFFVix1REFBUyxDQUFDLHNCQUFzQixFQUFFMkIsR0FBRyxDQUFDLElBQUksT0FBTztLQUMvRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW50aW5lLW5leHQtdGVtcGxhdGUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBnZXRDb29raWUsIHNldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgTWFudGluZVByb3ZpZGVyLCBDb2xvclNjaGVtZSwgQ29sb3JTY2hlbWVQcm92aWRlciB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnQG1hbnRpbmUvbm90aWZpY2F0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wczogQXBwUHJvcHMgJiB7IGNvbG9yU2NoZW1lOiBDb2xvclNjaGVtZSB9KSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCBbY29sb3JTY2hlbWUsIHNldENvbG9yU2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPihwcm9wcy5jb2xvclNjaGVtZSk7XG5cbiAgY29uc3QgdG9nZ2xlQ29sb3JTY2hlbWUgPSAodmFsdWU/OiBDb2xvclNjaGVtZSkgPT4ge1xuICAgIGNvbnN0IG5leHRDb2xvclNjaGVtZSA9IHZhbHVlIHx8IChjb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyk7XG4gICAgc2V0Q29sb3JTY2hlbWUobmV4dENvbG9yU2NoZW1lKTtcbiAgICBzZXRDb29raWUoJ21hbnRpbmUtY29sb3Itc2NoZW1lJywgbmV4dENvbG9yU2NoZW1lLCB7IG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYW50aW5lIG5leHQgZXhhbXBsZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5zdmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Q29sb3JTY2hlbWVQcm92aWRlciBjb2xvclNjaGVtZT17Y29sb3JTY2hlbWV9IHRvZ2dsZUNvbG9yU2NoZW1lPXt0b2dnbGVDb2xvclNjaGVtZX0+XG4gICAgICAgIDxNYW50aW5lUHJvdmlkZXIgdGhlbWU9e3sgY29sb3JTY2hlbWUgfX0gd2l0aEdsb2JhbFN0eWxlcyB3aXRoTm9ybWFsaXplQ1NTPlxuICAgICAgICAgIDxOb3RpZmljYXRpb25zUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9Ob3RpZmljYXRpb25zUHJvdmlkZXI+XG4gICAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICAgICAgPC9Db2xvclNjaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gKHsgY3R4IH06IHsgY3R4OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0pID0+ICh7XG4gIGNvbG9yU2NoZW1lOiBnZXRDb29raWUoJ21hbnRpbmUtY29sb3Itc2NoZW1lJywgY3R4KSB8fCAnbGlnaHQnLFxufSk7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJnZXRDb29raWUiLCJzZXRDb29raWUiLCJIZWFkIiwiTWFudGluZVByb3ZpZGVyIiwiQ29sb3JTY2hlbWVQcm92aWRlciIsIk5vdGlmaWNhdGlvbnNQcm92aWRlciIsIkFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29sb3JTY2hlbWUiLCJzZXRDb2xvclNjaGVtZSIsInRvZ2dsZUNvbG9yU2NoZW1lIiwidmFsdWUiLCJuZXh0Q29sb3JTY2hlbWUiLCJtYXhBZ2UiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidGhlbWUiLCJ3aXRoR2xvYmFsU3R5bGVzIiwid2l0aE5vcm1hbGl6ZUNTUyIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ "@mantine/notifications":
/*!*****************************************!*\
  !*** external "@mantine/notifications" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mantine/notifications");

/***/ }),

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();