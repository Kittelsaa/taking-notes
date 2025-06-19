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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "(pages-dir-node)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cx: () => (/* reexport default from dynamic */ clsx__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   slugify: () => (/* reexport safe */ _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sindresorhus/slugify */ \"@sindresorhus/slugify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__]);\n_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi91dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNvQjtBQUNiIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGtpdHRlbHNhYVxca3Byb2plY3RzXFxvcGVuLXNvdXJjZVxcdGFraW5nLW5vdGVzXFxsaWJcXHV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gXCJAc2luZHJlc29yaHVzL3NsdWdpZnlcIjtcclxuZXhwb3J0IHsgc2x1Z2lmeSwgY2xzeCBhcyBjeCB9O1xyXG4iXSwibmFtZXMiOlsiY2xzeCIsInNsdWdpZnkiLCJjeCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/utils.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(pages-dir-node)/./lib/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        return initialProps;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes\\\\pages\\\\_document.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cx)(\"bg-gray-50 text-gray-800\", \"dark:bg-gray-900 dark:text-gray-50\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes\\\\pages\\\\_document.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes\\\\pages\\\\_document.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes\\\\pages\\\\_document.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes\\\\pages\\\\_document.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUNIO0FBQ3pCO0FBRWpDLE1BQU1NLG1CQUFtQkYsc0RBQVFBO0lBQy9CLGFBQWFHLGdCQUFnQkMsR0FBb0IsRUFBRTtRQUNqRCxNQUFNQyxlQUFlLE1BQU1MLG9FQUF3QixDQUFDSTtRQUNwRCxPQUFPQztJQUNUO0lBRUFDLFNBQVM7UUFDUCxxQkFDRSw4REFBQ1YsK0NBQUlBO1lBQUNXLE1BQUs7OzhCQUNULDhEQUFDViwrQ0FBSUE7Ozs7OzhCQUNMLDhEQUFDVztvQkFDQ0MsV0FBV1IsOENBQUVBLENBQ1gsNEJBQ0E7O3NDQUdGLDhEQUFDSCwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQSxpRUFBZUcsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxraXR0ZWxzYWFcXGtwcm9qZWN0c1xcb3Blbi1zb3VyY2VcXHRha2luZy1ub3Rlc1xccGFnZXNcXF9kb2N1bWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcbmltcG9ydCBEb2N1bWVudCwgeyBEb2N1bWVudENvbnRleHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xyXG5pbXBvcnQgeyBjeCB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eDogRG9jdW1lbnRDb250ZXh0KSB7XHJcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIHJldHVybiBpbml0aWFsUHJvcHM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8SGVhZCAvPlxyXG4gICAgICAgIDxib2R5XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KFxyXG4gICAgICAgICAgICBcImJnLWdyYXktNTAgdGV4dC1ncmF5LTgwMFwiLFxyXG4gICAgICAgICAgICBcImRhcms6YmctZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktNTBcIlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xyXG4iXSwibmFtZXMiOlsiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkRvY3VtZW50IiwiY3giLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiaW5pdGlhbFByb3BzIiwicmVuZGVyIiwibGFuZyIsImJvZHkiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.tsx\n");

/***/ }),

/***/ "@sindresorhus/slugify":
/*!****************************************!*\
  !*** external "@sindresorhus/slugify" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@sindresorhus/slugify");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();