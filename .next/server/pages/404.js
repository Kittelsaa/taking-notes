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
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./components/Page.tsx":
/*!*****************************!*\
  !*** ./components/Page.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/formatDate */ \"./lib/formatDate.ts\");\n/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Prose */ \"./components/Prose.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_4__]);\n_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Page = ({ date , title , description , children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cx)(\"mt-12 mb-8 pb-8 border-b\", \"border-gray-200\", \"dark:border-gray-700\"),\n                children: [\n                    date ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cx)(\"block mb-2\", \"text-gray-500\", \"dark:text-gray-400\"),\n                        children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-5xl\",\n                        style: {\n                            fontFamily: \"Syne Mono, monospace\"\n                        },\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    description ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Prose__WEBPACK_IMPORTED_MODULE_3__.Prose, {\n                            children: typeof description === \"string\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined) : description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNpQjtBQUNIO0FBQ1Y7QUFVMUIsTUFBTUksT0FBNEIsQ0FBQyxFQUN4Q0MsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLFlBQVcsRUFDWEMsU0FBUSxFQUNULEdBQUs7SUFDSixxQkFDRTs7MEJBQ0UsOERBQUNSLGtEQUFJQTs7a0NBQ0gsOERBQUNTO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUNDRSxNQUFLO3dCQUNMRCxLQUFJOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNHO2dCQUNDQyxXQUFXWCw4Q0FBRUEsQ0FDWCw0QkFDQSxtQkFDQTs7b0JBR0RFLHFCQUNDLDhEQUFDVTt3QkFDQ0QsV0FBV1gsOENBQUVBLENBQUMsY0FBYyxpQkFBaUI7a0NBRTVDRiwyREFBVUEsQ0FBQ0k7Ozs7O29DQUVaLElBQUk7a0NBQ1IsOERBQUNXO3dCQUNDRixXQUFVO3dCQUNWRyxPQUFPOzRCQUFFQyxZQUFZO3dCQUF1QjtrQ0FFM0NaOzs7Ozs7b0JBRUZDLDRCQUNDLDhEQUFDWTt3QkFBSUwsV0FBVTtrQ0FDYiw0RUFBQ1osb0RBQUtBO3NDQUNILE9BQU9LLGdCQUFnQix5QkFDdEIsOERBQUNhOzBDQUFHYjs7Ozs7NENBRUpBLFdBQ0Q7Ozs7Ozs7Ozs7b0NBR0gsSUFBSTs7Ozs7OztZQUVUQzs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tZHgtYmxvZy10aGVtZS8uL2NvbXBvbmVudHMvUGFnZS50c3g/ZjdjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiQC9saWIvZm9ybWF0RGF0ZVwiO1xyXG5pbXBvcnQgeyBQcm9zZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvc2VcIjtcclxuaW1wb3J0IHsgY3ggfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBQYWdlUHJvcHMge1xyXG4gIGRhdGU/OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB0aHVtYm5haWw/OiBzdHJpbmc7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlOiBSZWFjdC5GQzxQYWdlUHJvcHM+ID0gKHtcclxuICBkYXRlLFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGNoaWxkcmVuLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJcIiAvPlxyXG4gICAgICAgIDxsaW5rIFxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3luZStNb25vJmRpc3BsYXk9c3dhcFwiIFxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3goXHJcbiAgICAgICAgICBcIm10LTEyIG1iLTggcGItOCBib3JkZXItYlwiLFxyXG4gICAgICAgICAgXCJib3JkZXItZ3JheS0yMDBcIixcclxuICAgICAgICAgIFwiZGFyazpib3JkZXItZ3JheS03MDBcIlxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0ZSA/IChcclxuICAgICAgICAgIDx0aW1lXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJibG9jayBtYi0yXCIsIFwidGV4dC1ncmF5LTUwMFwiLCBcImRhcms6dGV4dC1ncmF5LTQwMFwiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Zvcm1hdERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICA8L3RpbWU+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGgxIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNXhsXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdTeW5lIE1vbm8sIG1vbm9zcGFjZScgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICB7ZGVzY3JpcHRpb24gPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgPFByb3NlPlxyXG4gICAgICAgICAgICAgIHt0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUHJvc2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbIkhlYWQiLCJmb3JtYXREYXRlIiwiUHJvc2UiLCJjeCIsIlBhZ2UiLCJkYXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc09yaWdpbiIsImhlYWRlciIsImNsYXNzTmFtZSIsInRpbWUiLCJoMSIsInN0eWxlIiwiZm9udEZhbWlseSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Page.tsx\n");

/***/ }),

/***/ "./components/Prose.tsx":
/*!******************************!*\
  !*** ./components/Prose.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Prose\": () => (/* binding */ Prose)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Prose = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-none prose prose-a:text-pink-600 dark:prose-invert\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\components\\\\Prose.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb3NlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsUUFFUixDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ3JCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaRjs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tZHgtYmxvZy10aGVtZS8uL2NvbXBvbmVudHMvUHJvc2UudHN4PzQyODQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFByb3NlOiBSZWFjdC5GQzx7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbm9uZSBwcm9zZSBwcm9zZS1hOnRleHQtcGluay02MDAgZGFyazpwcm9zZS1pbnZlcnRcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTsiXSwibmFtZXMiOlsiUHJvc2UiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Prose.tsx\n");

/***/ }),

/***/ "./lib/formatDate.ts":
/*!***************************!*\
  !*** ./lib/formatDate.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatDate\": () => (/* binding */ formatDate)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);\n\nconst formatDate = (date)=>{\n    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parseISO)(date), \"MMMM dd, yyyy\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZm9ybWF0RGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFFckMsTUFBTUUsYUFBYSxDQUFDQyxPQUF5QjtJQUNsRCxPQUFPRixnREFBTUEsQ0FBQ0Qsa0RBQVFBLENBQUNHLE9BQU87QUFDaEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tZHgtYmxvZy10aGVtZS8uL2xpYi9mb3JtYXREYXRlLnRzPzczMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICByZXR1cm4gZm9ybWF0KHBhcnNlSVNPKGRhdGUpLCBcIk1NTU0gZGQsIHl5eXlcIik7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJwYXJzZUlTTyIsImZvcm1hdCIsImZvcm1hdERhdGUiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/formatDate.ts\n");

/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cx\": () => (/* reexport default from dynamic */ clsx__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   \"slugify\": () => (/* reexport safe */ _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sindresorhus/slugify */ \"@sindresorhus/slugify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__]);\n_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDb0I7QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tZHgtYmxvZy10aGVtZS8uL2xpYi91dGlscy50cz9mNzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gXCJAc2luZHJlc29yaHVzL3NsdWdpZnlcIjtcclxuZXhwb3J0IHsgc2x1Z2lmeSwgY2xzeCBhcyBjeCB9O1xyXG4iXSwibmFtZXMiOlsiY2xzeCIsInNsdWdpZnkiLCJjeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/utils.ts\n");

/***/ }),

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Page */ \"./components/Page.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Page__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Custom404 = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_1__.Page, {\n        title: \"404\",\n        description: \"Page not found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kittelsaa\\\\kprojects\\\\open-source\\\\taking-notes-guide\\\\pages\\\\404.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Custom404);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBR3pDLE1BQU1DLFlBQXNCLElBQU07SUFDaEMscUJBQU8sOERBQUNELGtEQUFJQTtRQUFDRSxPQUFNO1FBQU1DLGFBQVk7Ozs7OztBQUN2QztBQUVBLGlFQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1keC1ibG9nLXRoZW1lLy4vcGFnZXMvNDA0LnRzeD9jYTY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5jb25zdCBDdXN0b200MDQ6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiA8UGFnZSB0aXRsZT1cIjQwNFwiIGRlc2NyaXB0aW9uPVwiUGFnZSBub3QgZm91bmRcIiAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbTQwNDsiXSwibmFtZXMiOlsiUGFnZSIsIkN1c3RvbTQwNCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/404.tsx\n");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@sindresorhus/slugify":
/*!****************************************!*\
  !*** external "@sindresorhus/slugify" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@sindresorhus/slugify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.tsx"));
module.exports = __webpack_exports__;

})();