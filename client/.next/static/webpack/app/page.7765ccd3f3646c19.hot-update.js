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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalConstants */ \"(app-pages-browser)/./app/globalConstants.ts\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sidebar */ \"(app-pages-browser)/./app/components/Sidebar.tsx\");\n/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Main */ \"(app-pages-browser)/./app/pages/Main.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_globalConstants__WEBPACK_IMPORTED_MODULE_2__.allGames);\n    const [currentGame, setCurrentGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                games: games,\n                setCurrentGame: setCurrentGame\n            }, void 0, false, {\n                fileName: \"/home/ryan/code/minigames/client/app/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_Main__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                currentGame: currentGame,\n                setCurrentGame: setCurrentGame\n            }, void 0, false, {\n                fileName: \"/home/ryan/code/minigames/client/app/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ryan/code/minigames/client/app/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, this);\n}\n_s(Home, \"cO/NnC28GcUl7gVSGriIALRkLHA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFFTjtBQUNGO0FBQ1g7QUFFakIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQ0Msc0RBQVFBO0lBQzNDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvQyxxQkFBTyw4REFBQ1M7UUFBS0MsV0FBVTs7MEJBQ25CLDhEQUFDUiwyREFBT0E7Z0JBQUNHLE9BQU9BO2dCQUFPRyxnQkFBZ0JBOzs7Ozs7MEJBQ3ZDLDhEQUFDTCxtREFBSUE7Z0JBQUNJLGFBQWFBO2dCQUFhQyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7QUFFdEQ7R0FSd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgYWxsR2FtZXMgfSBmcm9tIFwiLi9nbG9iYWxDb25zdGFudHNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4vcGFnZXMvTWFpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKGFsbEdhbWVzKTtcbiAgY29uc3QgW2N1cnJlbnRHYW1lLCBzZXRDdXJyZW50R2FtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1bMTAwdmhdXCI+XG4gICAgICA8U2lkZWJhciBnYW1lcz17Z2FtZXN9IHNldEN1cnJlbnRHYW1lPXtzZXRDdXJyZW50R2FtZX0gLz5cbiAgICAgIDxNYWluIGN1cnJlbnRHYW1lPXtjdXJyZW50R2FtZX0gc2V0Q3VycmVudEdhbWU9e3NldEN1cnJlbnRHYW1lfSAvPlxuICAgIDwvbWFpbj47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImFsbEdhbWVzIiwiU2lkZWJhciIsIk1haW4iLCJIb21lIiwiZ2FtZXMiLCJzZXRHYW1lcyIsImN1cnJlbnRHYW1lIiwic2V0Q3VycmVudEdhbWUiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});