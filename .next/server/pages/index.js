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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = dynamic;\nexports.noSSR = noSSR;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = _extends({}, loadableOptions, dynamicOptions);\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = _extends({}, loadableOptions, options);\n    // Error if Fizz rendering is not enabled and `suspense` option is set to true\n    if (false) {}\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = _extends({}, loadableOptions, loadableOptions.loadableGenerated);\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false}).\n    // skip `ssr` for suspense mode and opt-in React.lazy directly\n    if (typeof loadableOptions.ssr === \"boolean\" && !loadableOptions.suspense) {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === \"undefined\";\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        });\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUdHLE9BQU8sQ0FBQztBQUMxQkgsYUFBYSxHQUFHSSxLQUFLLENBQUM7QUFDdEIsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsU0FBUyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDLENBQUM7QUFDN0QsU0FBU0osT0FBTyxDQUFDTSxjQUFjLEVBQUVDLE9BQU8sRUFBRTtJQUN0QyxJQUFJQyxVQUFVLEdBQUdILFNBQVMsQ0FBQ04sT0FBTztJQUNsQyxJQUFJVSxlQUFlLEdBQUc7UUFDbEIsd0RBQXdEO1FBQ3hEQyxPQUFPLEVBQUUsQ0FBQyxFQUFFQyxLQUFLLEdBQUdDLFNBQVMsR0FBR0MsU0FBUyxHQUFHLEdBQUc7WUFDM0MsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUM7WUFDNUIsSUFBSUMsSUFBc0MsRUFBRTtnQkFDeEMsSUFBSUYsU0FBUyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELElBQUlELEtBQUssRUFBRTtvQkFDUCxPQUFPLGFBQWEsQ0FBQ1QsTUFBTSxDQUFDSCxPQUFPLENBQUNnQixhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRUosS0FBSyxDQUFDSyxPQUFPLEVBQUUsYUFBYSxDQUFDZCxNQUFNLENBQUNILE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUVKLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUM7aUJBQ3BKO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxxRUFBcUU7SUFDckUsd0dBQXdH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QWUsQ0FBQyxDQUFDO0tBQy9DO0lBQ0QsTUFBTW1DLE9BQU8sR0FBR25DLGVBQWUsQ0FBQ0MsT0FBTztJQUN2QyxnREFBZ0Q7SUFDaEQsT0FBTyxJQUFJLGFBQWEsQ0FBQ1IsTUFBTSxDQUFDSCxPQUFPLENBQUNnQixhQUFhLENBQUM2QixPQUFPLEVBQUU7WUFDdkRqQyxLQUFLLEVBQUUsSUFBSTtZQUNYQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxTQUFTLEVBQUUsS0FBSztZQUNoQmdDLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztDQUNWO0FBRUQsSUFBSSxDQUFDLE9BQU9oRCxPQUFPLENBQUNFLE9BQU8sS0FBSyxVQUFVLElBQUssT0FBT0YsT0FBTyxDQUFDRSxPQUFPLEtBQUssUUFBUSxJQUFJRixPQUFPLENBQUNFLE9BQU8sS0FBSyxJQUFJLENBQUUsSUFBSSxPQUFPRixPQUFPLENBQUNFLE9BQU8sQ0FBQ3dDLFVBQVUsS0FBSyxXQUFXLEVBQUU7SUFDcks1QyxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1FBQUVELEtBQUssRUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0lBQ3RFSCxNQUFNLENBQUNnQyxNQUFNLENBQUM5QixPQUFPLENBQUNFLE9BQU8sRUFBRUYsT0FBTyxDQUFDLENBQUM7SUFDeENpRCxNQUFNLENBQUNqRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDO0NBQ2xDLENBRUQsbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFudGluZS1uZXh0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanM/ZTI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0gX2V4dGVuZHMoe30sIGxvYWRhYmxlT3B0aW9ucywgZHluYW1pY09wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0gX2V4dGVuZHMoe30sIGxvYWRhYmxlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgLy8gRXJyb3IgaWYgRml6eiByZW5kZXJpbmcgaXMgbm90IGVuYWJsZWQgYW5kIGBzdXNwZW5zZWAgb3B0aW9uIGlzIHNldCB0byB0cnVlXG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBsb2FkYWJsZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1c3BlbnNlIG9wdGlvbiB1c2FnZSBpbiBuZXh0L2R5bmFtaWMuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1keW5hbWljLXN1c3BlbnNlYCk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgbG9hZGFibGVPcHRpb25zLCBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpO1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSkuXG4gICAgLy8gc2tpcCBgc3NyYCBmb3Igc3VzcGVuc2UgbW9kZSBhbmQgb3B0LWluIFJlYWN0LmxhenkgZGlyZWN0bHlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJyAmJiAhbG9hZGFibGVPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gc291cmNlKXtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSk7XG59XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJub1NTUiIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsImxvYWRhYmxlT3B0aW9ucyIsImxvYWRpbmciLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInByb2Nlc3MiLCJjcmVhdGVFbGVtZW50IiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsIl9leHRlbmRzIiwiZW52IiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsInRpbWVkT3V0IiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ \"./node_modules/react-calendar-timeline/lib/Timeline.css\");\n/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);\nswr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// make sure you include the timeline stylesheet or the timeline will not be styled\n\n\n\n\n\n\nconst Timeline = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"react-calendar-timeline\"\n        ]\n    },\n    ssr: false\n});\nconst client = new graphql_request__WEBPACK_IMPORTED_MODULE_6__.GraphQLClient(\"https://cuddly-meerkat-57.hasura.app/v1/graphql\", {\n    headers: {\n        \"content-type\": \"application/json\",\n        \"x-hasura-admin-secret\": \"hYJiMlfjJIIt7TuyHVjFPTN1E1iFeqcDMqlyW0lRDlD01WpDccvuZZBXfnBy76fc\"\n    }\n});\nconst groups = [\n    {\n        id: 1,\n        title: \"group 1\"\n    },\n    {\n        id: 2,\n        title: \"group 2\"\n    }, \n];\nconst items = [\n    {\n        id: 1,\n        group: 1,\n        title: \"item 1\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()(),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, \"hour\")\n    },\n    {\n        id: 2,\n        group: 2,\n        title: \"item 2\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-0.5, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(0.5, \"hour\")\n    },\n    {\n        id: 3,\n        group: 1,\n        title: \"item 3\",\n        start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(2, \"hour\"),\n        end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(3, \"hour\")\n    }, \n];\nconst GET_ITEMS = `\nquery GET_ITEMS {\n  items {\n    group {\n      id\n      title\n    }\n    id\n    start_time\n    end_time\n    title\n  }\n}\n`;\nfunction HomePage() {\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { 0: groups , 1: setGroups  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { data: data  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(GET_ITEMS, (q, v)=>client.request(q, v));\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data) {\n            setGroups(data.items.map((obj)=>obj.group));\n            setItems(data.items.map((item)=>{\n                return {\n                    id: item.id,\n                    title: item.title,\n                    start_time: moment__WEBPACK_IMPORTED_MODULE_2___default()(),\n                    end_time: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, \"hour\"),\n                    group: item.group.id\n                };\n            }));\n        }\n    }, [\n        data\n    ]);\n    {\n        console.log(\"items\", {\n            items,\n            groups\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: groups.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Timeline, {\n            groups: groups,\n            items: items,\n            defaultTimeStart: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-12, \"hour\"),\n            defaultTimeEnd: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(12, \"hour\")\n        }, void 0, false, {\n            fileName: \"/home/john/Linux/palmo/react-starter/pages/index.tsx\",\n            lineNumber: 88,\n            columnNumber: 25\n        }, this)\n    }, void 0, false);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQztvQkFDakNILEtBQUssRUFBRWMsSUFBSSxDQUFDZCxLQUFLLENBQUNILEVBQUU7aUJBQ3JCLENBQUM7YUFDSCxDQUFDLENBQ0gsQ0FBQztTQUNIO0tBQ0YsRUFBRTtRQUFDVyxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBQ1g7UUFBQ08sT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQUNqQixLQUFLO1lBQUVILE1BQU07U0FBQyxDQUFDO0tBQUM7SUFFdkMscUJBQ0U7a0JBQ0dBLE1BQU0sQ0FBQ3FCLE1BQU0sa0JBQUksOERBQUM3QixRQUFRO1lBQ3pCUSxNQUFNLEVBQUVBLE1BQU07WUFDZEcsS0FBSyxFQUFFQSxLQUFLO1lBQ1ptQixnQkFBZ0IsRUFBRXBDLDZDQUFNLEVBQUUsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7WUFDM0NnQixjQUFjLEVBQUVyQyw2Q0FBTSxFQUFFLENBQUNxQixHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQzs7Ozs7Z0JBQ3hDO3FCQUNELENBQ0g7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnRpbmUtbmV4dC10ZW1wbGF0ZS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1ha2Ugc3VyZSB5b3UgaW5jbHVkZSB0aGUgdGltZWxpbmUgc3R5bGVzaGVldCBvciB0aGUgdGltZWxpbmUgd2lsbCBub3QgYmUgc3R5bGVkXG5pbXBvcnQgJ3JlYWN0LWNhbGVuZGFyLXRpbWVsaW5lL2xpYi9UaW1lbGluZS5jc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcbmNvbnN0IFRpbWVsaW5lID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWNhbGVuZGFyLXRpbWVsaW5lJyksIHsgc3NyOiBmYWxzZSB9KTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9CQVNFX1VSTCwge1xuICBoZWFkZXJzOiB7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAneC1oYXN1cmEtYWRtaW4tc2VjcmV0JzogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEFTVVJBX1NFQ1JFVCxcbiAgfSxcbn0pO1xuXG5jb25zdCBncm91cHMgPSBbXG4gIHsgaWQ6IDEsIHRpdGxlOiAnZ3JvdXAgMScgfSxcbiAgeyBpZDogMiwgdGl0bGU6ICdncm91cCAyJyB9LFxuXTtcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBncm91cDogMSxcbiAgICB0aXRsZTogJ2l0ZW0gMScsXG4gICAgc3RhcnRfdGltZTogbW9tZW50KCksXG4gICAgZW5kX3RpbWU6IG1vbWVudCgpLmFkZCgxLCAnaG91cicpLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZ3JvdXA6IDIsXG4gICAgdGl0bGU6ICdpdGVtIDInLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLmFkZCgtMC41LCAnaG91cicpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMC41LCAnaG91cicpLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZ3JvdXA6IDEsXG4gICAgdGl0bGU6ICdpdGVtIDMnLFxuICAgIHN0YXJ0X3RpbWU6IG1vbWVudCgpLmFkZCgyLCAnaG91cicpLFxuICAgIGVuZF90aW1lOiBtb21lbnQoKS5hZGQoMywgJ2hvdXInKSxcbiAgfSxcbl07XG5cbmNvbnN0IEdFVF9JVEVNUyA9IGBcbnF1ZXJ5IEdFVF9JVEVNUyB7XG4gIGl0ZW1zIHtcbiAgICBncm91cCB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICB9XG4gICAgaWRcbiAgICBzdGFydF90aW1lXG4gICAgZW5kX3RpbWVcbiAgICB0aXRsZVxuICB9XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtncm91cHMsIHNldEdyb3Vwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSB1c2VTV1IoR0VUX0lURU1TLCAocSwgdikgPT4gY2xpZW50LnJlcXVlc3QocSwgdikpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHNldEdyb3VwcyhkYXRhLml0ZW1zLm1hcChvYmogPT4gb2JqLmdyb3VwKSk7XG5cbiAgICAgIHNldEl0ZW1zKFxuICAgICAgICBkYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgc3RhcnRfdGltZTogbW9tZW50KCksXG4gICAgICAgICAgICBlbmRfdGltZTogbW9tZW50KCkuYWRkKDEsICdob3VyJyksXG4gICAgICAgICAgICBncm91cDogaXRlbS5ncm91cC5pZCxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG4gIHtjb25zb2xlLmxvZygnaXRlbXMnLCB7aXRlbXMsIGdyb3Vwc30pfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtncm91cHMubGVuZ3RoICYmIDxUaW1lbGluZVxuICAgICAgICBncm91cHM9e2dyb3Vwc31cbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICBkZWZhdWx0VGltZVN0YXJ0PXttb21lbnQoKS5hZGQoLTEyLCAnaG91cicpfVxuICAgICAgICBkZWZhdWx0VGltZUVuZD17bW9tZW50KCkuYWRkKDEyLCAnaG91cicpfVxuICAgICAgLz59XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW9tZW50IiwidXNlU1dSIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkeW5hbWljIiwiR3JhcGhRTENsaWVudCIsIlRpbWVsaW5lIiwic3NyIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hBU1VSQV9CQVNFX1VSTCIsImhlYWRlcnMiLCJORVhUX1BVQkxJQ19IQVNVUkFfU0VDUkVUIiwiZ3JvdXBzIiwiaWQiLCJ0aXRsZSIsIml0ZW1zIiwiZ3JvdXAiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJhZGQiLCJHRVRfSVRFTVMiLCJIb21lUGFnZSIsInNldEl0ZW1zIiwic2V0R3JvdXBzIiwiZGF0YSIsInEiLCJ2IiwicmVxdWVzdCIsIm1hcCIsIm9iaiIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZGVmYXVsdFRpbWVTdGFydCIsImRlZmF1bHRUaW1lRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/react-calendar-timeline/lib/Timeline.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-calendar-timeline/lib/Timeline.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnRpbmUtbmV4dC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanM/NzNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();