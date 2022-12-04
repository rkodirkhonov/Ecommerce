"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].jsx":
/*!**********************************!*\
  !*** ./pages/product/[slug].jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { product , products  } = param;\n    _s();\n    const { image , name , details , price  } = product;\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { decQty , incQty , qty , onAdd  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(image && image[index]),\n                                    className: \"product-detail-image\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 16,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image === null || image === void 0 ? void 0 : image.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(item),\n                                        className: i === index ? \"small-image selected-image\" : \"small-image\",\n                                        onMouseEnter: ()=>setIndex(i)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 29\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"(20)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: details\n                            }, void 0, false, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \"$\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantity: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onClick: decQty,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 70\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                children: qty\n                                            }, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onClick: incQty,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 69\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: onAdd,\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        onClick: \"\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"You may also like\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Product, {\n                                    product: item\n                                }, item._id, false, {\n                                    fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eldoralikuvatov/Desktop/Web Dev/ecommerce/pages/product/[slug].jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductDetails, \"VX0hyRkS2rwEtJpPJGHjEoZY1Gg=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext\n    ];\n});\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qc3g/NWZkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGllbnQsIHVybEZvciB9IGZyb20gJy4uLy4uL2xpYi9jbGllbnQnO1xuaW1wb3J0IHsgQWlPdXRsaW5lTWludXMsIEFpT3V0bGluZVBsdXMsIEFpRmlsbFN0YXIsIEFpT3V0bGluZVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMgfSkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2UsIG5hbWUsIGRldGFpbHMsIHByaWNlIH0gPSBwcm9kdWN0O1xuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgeyBkZWNRdHksIGluY1F0eSwgcXR5LCBvbkFkZCB9ID0gdXNlU3RhdGVDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihpbWFnZSAmJiBpbWFnZVtpbmRleF0pfSBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWltYWdlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZT8ubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBpbmRleCA/IFwic21hbGwtaW1hZ2Ugc2VsZWN0ZWQtaW1hZ2VcIiA6IFwic21hbGwtaW1hZ2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJbmRleChpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDIwKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PkRldGFpbHM6IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwPntkZXRhaWxzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlF1YW50aXR5OiA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicXVhbnRpdHktZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pbnVzXCIgb25DbGljaz17ZGVjUXR5fT48QWlPdXRsaW5lTWludXMgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtXCI+e3F0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGx1c1wiIG9uQ2xpY2s9e2luY1F0eX0+PEFpT3V0bGluZVBsdXMgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnRcIiBvbkNsaWNrPXtvbkFkZH0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV5LW5vd1wiIG9uQ2xpY2s9XCJcIj5CdXkgTm93PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+WW91IG1heSBhbHNvIGxpa2U8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtY29udGFpbmVyIHRyYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGtleT17aXRlbS5faWR9IHByb2R1Y3Q9e2l0ZW19IC8+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInByb2R1Y3RcIl0ge1xuICAgICAgc2x1ZyB7XG4gICAgICAgIGN1cnJlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcblxuICAgIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1Zy5jdXJyZW50XG4gICAgICAgIH1cbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICcke3NsdWd9J11bMF1gO1xuICAgIGNvbnN0IHByb2R1Y3RzUXVlcnkgPSAnKltfdHlwZSA9PSBcInByb2R1Y3RcIl0nXG5cbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KTtcblxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgcHJvZHVjdHMsIHByb2R1Y3QgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVybEZvciIsIkFpT3V0bGluZU1pbnVzIiwiQWlPdXRsaW5lUGx1cyIsIkFpRmlsbFN0YXIiLCJBaU91dGxpbmVTdGFyIiwiUHJvZHVjdCIsInVzZVN0YXRlQ29udGV4dCIsIlByb2R1Y3REZXRhaWxzIiwicHJvZHVjdCIsInByb2R1Y3RzIiwiaW1hZ2UiLCJuYW1lIiwiZGV0YWlscyIsInByaWNlIiwiaW5kZXgiLCJzZXRJbmRleCIsImRlY1F0eSIsImluY1F0eSIsInF0eSIsIm9uQWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwibWFwIiwiaXRlbSIsImkiLCJvbk1vdXNlRW50ZXIiLCJoMSIsInAiLCJoNCIsImgzIiwic3BhbiIsIm9uQ2xpY2siLCJidXR0b24iLCJ0eXBlIiwiaDIiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].jsx\n"));

/***/ })

});