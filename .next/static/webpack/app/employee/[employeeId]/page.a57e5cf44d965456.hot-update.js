"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/employee/[employeeId]/page",{

/***/ "(app-pages-browser)/./src/app/ui/components/CardDetail/index.tsx":
/*!****************************************************!*\
  !*** ./src/app/ui/components/CardDetail/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ \"(app-pages-browser)/./src/app/ui/components/Avatar/index.tsx\");\n/* harmony import */ var _DetailItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DetailItem */ \"(app-pages-browser)/./src/app/ui/components/DetailItem/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 20px;\\n  border: 1px solid #ccc;\\n  border-radius: 8px;\\n  padding: 10px;\\n  margin: 20px;\\n  width:30%;\\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n  margin-top: 10px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-weight: bold;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-left: 5px;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = Container;\nconst DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = DetailContainer;\nconst AvatarContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c2 = AvatarContainer;\nconst Label = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].span(_templateObject3());\nconst Value = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].span(_templateObject4());\nconst CardDetail = (param)=>{\n    let { employeeDetail } = param;\n    const filteredProperties = [\n        \"__typename\",\n        \"imageUrl\"\n    ];\n    console.log(employeeDetail, \"employeeeeee\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DetailContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvatarContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: employeeDetail.imageUrl,\n                        alt: employeeDetail.fullName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dilan\\\\Desktop\\\\vote-employee\\\\src\\\\app\\\\ui\\\\components\\\\CardDetail\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dilan\\\\Desktop\\\\vote-employee\\\\src\\\\app\\\\ui\\\\components\\\\CardDetail\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                Object.entries(employeeDetail).filter((param)=>{\n                    let [key, _] = param;\n                    return !filteredProperties.includes(key);\n                }).map((param)=>{\n                    let [key, value] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DetailItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        label: key,\n                        value: value\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\dilan\\\\Desktop\\\\vote-employee\\\\src\\\\app\\\\ui\\\\components\\\\CardDetail\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dilan\\\\Desktop\\\\vote-employee\\\\src\\\\app\\\\ui\\\\components\\\\CardDetail\\\\index.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dilan\\\\Desktop\\\\vote-employee\\\\src\\\\app\\\\ui\\\\components\\\\CardDetail\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = CardDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardDetail);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"DetailContainer\");\n$RefreshReg$(_c2, \"AvatarContainer\");\n$RefreshReg$(_c3, \"CardDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY29tcG9uZW50cy9DYXJkRGV0YWlsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFFUjtBQUNRO0FBRXZDLE1BQU1JLFlBQVlILHlEQUFNQSxDQUFDSSxHQUFHO0tBQXRCRDtBQVlOLE1BQU1FLGtCQUFrQkwseURBQU1BLENBQUNJLEdBQUc7TUFBNUJDO0FBSU4sTUFBTUMsa0JBQWtCTix5REFBTUEsQ0FBQ0ksR0FBRztNQUE1QkU7QUFPTixNQUFNQyxRQUFRUCx5REFBTUEsQ0FBQ1EsSUFBSTtBQUl6QixNQUFNQyxRQUFRVCx5REFBTUEsQ0FBQ1EsSUFBSTtBQUl6QixNQUFNRSxhQUF5RDtRQUFDLEVBQzlEQyxjQUFjLEVBQ2Y7SUFDQyxNQUFNQyxxQkFBcUI7UUFBQztRQUFjO0tBQVc7SUFDckRDLFFBQVFDLEdBQUcsQ0FBQ0gsZ0JBQWdCO0lBQzVCLHFCQUNFLDhEQUFDUjtrQkFDQyw0RUFBQ0U7OzhCQUNDLDhEQUFDQzs4QkFDQyw0RUFBQ0wsK0NBQU1BO3dCQUFDYyxLQUFLSixlQUFlSyxRQUFRO3dCQUFFQyxLQUFLTixlQUFlTyxRQUFROzs7Ozs7Ozs7OztnQkFFbkVDLE9BQU9DLE9BQU8sQ0FBQ1QsZ0JBQ2ZVLE1BQU0sQ0FBQzt3QkFBQyxDQUFDQyxLQUFLQyxFQUFFOzJCQUFLLENBQUNYLG1CQUFtQlksUUFBUSxDQUFDRjttQkFDbERHLEdBQUcsQ0FBQzt3QkFBQyxDQUFDSCxLQUFLSSxNQUFNO3lDQUNoQiw4REFBQ3hCLG1EQUFVQTt3QkFBV3lCLE9BQU9MO3dCQUFLSSxPQUFPQTt1QkFBeEJKOzs7Ozs7Ozs7Ozs7Ozs7OztBQXNCM0I7TUFwQ01aO0FBc0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvY29tcG9uZW50cy9DYXJkRGV0YWlsL2luZGV4LnRzeD81YTU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEVtcGxveWVlSXRlbSB9IGZyb20gXCIuLi8uLi9wYWdlcy9FbXBsb3llZS90eXBlXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL0F2YXRhclwiO1xyXG5pbXBvcnQgRGV0YWlsSXRlbSBmcm9tIFwiLi4vRGV0YWlsSXRlbVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB3aWR0aDozMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5gO1xyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5jb25zdCBBdmF0YXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5cclxuXHJcbmNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBWYWx1ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkRGV0YWlsOiBSZWFjdC5GQzx7IGVtcGxveWVlRGV0YWlsOiBFbXBsb3llZUl0ZW0gfT4gPSAoe1xyXG4gIGVtcGxveWVlRGV0YWlsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyZWRQcm9wZXJ0aWVzID0gW1wiX190eXBlbmFtZVwiLCBcImltYWdlVXJsXCJdO1xyXG4gIGNvbnNvbGUubG9nKGVtcGxveWVlRGV0YWlsLCBcImVtcGxveWVlZWVlZVwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPERldGFpbENvbnRhaW5lcj5cclxuICAgICAgICA8QXZhdGFyQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2VtcGxveWVlRGV0YWlsLmltYWdlVXJsfSBhbHQ9e2VtcGxveWVlRGV0YWlsLmZ1bGxOYW1lfSAvPlxyXG4gICAgICAgIDwvQXZhdGFyQ29udGFpbmVyPlxyXG4gICAgICAgIHtPYmplY3QuZW50cmllcyhlbXBsb3llZURldGFpbClcclxuICAgICAgICAuZmlsdGVyKChba2V5LCBfXSkgPT4gIWZpbHRlcmVkUHJvcGVydGllcy5pbmNsdWRlcyhrZXkpKSBcclxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IChcclxuICAgICAgICAgIDxEZXRhaWxJdGVtIGtleT17a2V5fSBsYWJlbD17a2V5fSB2YWx1ZT17dmFsdWV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICBcclxuICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxMYWJlbD5GdWxsbmFtZTo8L0xhYmVsPlxyXG4gICAgICAgICAgPFZhbHVlPntlbXBsb3llZURldGFpbC5mdWxsTmFtZX08L1ZhbHVlPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxMYWJlbD5UaXRsZTo8L0xhYmVsPlxyXG4gICAgICAgICAgPFZhbHVlPntlbXBsb3llZURldGFpbC50aXRsZX08L1ZhbHVlPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxMYWJlbD5DaXR5OjwvTGFiZWw+XHJcbiAgICAgICAgICA8VmFsdWU+e2VtcGxveWVlRGV0YWlsLmNpdHl9PC9WYWx1ZT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8TGFiZWw+RW1haWw6PC9MYWJlbD5cclxuICAgICAgICAgIDxWYWx1ZT57ZW1wbG95ZWVEZXRhaWwuZW1haWx9PC9WYWx1ZT5cclxuICAgICAgICA8L3A+ICovfVxyXG4gICAgICA8L0RldGFpbENvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJBdmF0YXIiLCJEZXRhaWxJdGVtIiwiQ29udGFpbmVyIiwiZGl2IiwiRGV0YWlsQ29udGFpbmVyIiwiQXZhdGFyQ29udGFpbmVyIiwiTGFiZWwiLCJzcGFuIiwiVmFsdWUiLCJDYXJkRGV0YWlsIiwiZW1wbG95ZWVEZXRhaWwiLCJmaWx0ZXJlZFByb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJmdWxsTmFtZSIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJrZXkiLCJfIiwiaW5jbHVkZXMiLCJtYXAiLCJ2YWx1ZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/components/CardDetail/index.tsx\n"));

/***/ })

});