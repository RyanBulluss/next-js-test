"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/pages/Main.tsx":
/*!****************************!*\
  !*** ./app/pages/Main.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GameArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameArea */ \"(app-pages-browser)/./app/components/GameArea.tsx\");\n/* harmony import */ var _components_Leaderboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Leaderboard */ \"(app-pages-browser)/./app/components/Leaderboard.tsx\");\n/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Comments */ \"(app-pages-browser)/./app/components/Comments.tsx\");\n\n\n\n\n\nconst Main = (param)=>{\n    let { currentGame, setCurrentGame } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameArea__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ryan/code/minigames/client/app/pages/Main.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Leaderboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ryan/code/minigames/client/app/pages/Main.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Comments__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ryan/code/minigames/client/app/pages/Main.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ryan/code/minigames/client/app/pages/Main.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9NYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNxQjtBQUNNO0FBQ047QUFPNUMsTUFBTUksT0FBd0I7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRTtJQUM5RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNQLDREQUFRQTs7Ozs7MEJBQ1QsOERBQUNDLCtEQUFXQTs7Ozs7MEJBQ1osOERBQUNDLDREQUFRQTs7Ozs7Ozs7Ozs7QUFHakI7S0FSUUM7QUFVUiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvTWFpbi50c3g/NGRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR2FtZUFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9HYW1lQXJlYSc7XG5pbXBvcnQgTGVhZGVyYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9MZWFkZXJib2FyZCc7XG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY3VycmVudEdhbWU6IHN0cmluZztcbiAgICBzZXRDdXJyZW50R2FtZTogYW55O1xuICB9XG4gIFxuICBjb25zdCBNYWluOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjdXJyZW50R2FtZSwgc2V0Q3VycmVudEdhbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICA8R2FtZUFyZWEgLz5cbiAgICAgICAgPExlYWRlcmJvYXJkIC8+XG4gICAgICAgIDxDb21tZW50cyAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW4iXSwibmFtZXMiOlsiUmVhY3QiLCJHYW1lQXJlYSIsIkxlYWRlcmJvYXJkIiwiQ29tbWVudHMiLCJNYWluIiwiY3VycmVudEdhbWUiLCJzZXRDdXJyZW50R2FtZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/Main.tsx\n"));

/***/ })

});