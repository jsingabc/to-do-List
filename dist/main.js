/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n\n\n#createButtonDiv{\n    margin-top: 15%;\n}\n\n#modalForm {\n    display: flex;\n    flex-direction: column;\n}\n\n#checklist {\n    background-color: white;\n    border: 1px solid black;\n}\n\n.cards {\n    margin-top: 10%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeButton: () => (/* binding */ makeButton),\n/* harmony export */   renderModal: () => (/* binding */ renderModal)\n/* harmony export */ });\n\n//Funtion the create list button\nlet makeButton = function(){\n    //grab main div\nlet mainDiv = document.getElementById(\"content\")\n//mainDiv.innerText = \"\";\n//create a button div and button added to it\nlet createButtonDiv = document.createElement(\"div\");\ncreateButtonDiv.setAttribute(\"id\", \"createButtonDiv\");\n\nlet createButton = document.createElement(\"button\");\ncreateButton.setAttribute(\"id\", \"createButton\")\ncreateButton.innerText = \"Create Project\"\n\n// add button to button div and button div to main\ncreateButtonDiv.appendChild(createButton)\nmainDiv.appendChild(createButtonDiv)\n\nlet tabDiv = document.getElementById(\"tabs\")\ntabDiv.appendChild(createButton);\n\n//listen to button click, stop bubble and render\ncreateButton.addEventListener(\"click\", renderModal)\n\n}\n\n//creates dialog, form and inputs Study this later\nlet renderModal = function(){\n    let mainDiv = document.getElementById(\"content\")\n    mainDiv.innerText = \"\";\n    document.getElementById(\"myDialog\").showModal(); \n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/create.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeMainFunction: () => (/* binding */ homeMainFunction),\n/* harmony export */   listofTodos: () => (/* binding */ listofTodos),\n/* harmony export */   mainFactory: () => (/* binding */ mainFactory),\n/* harmony export */   tabs: () => (/* binding */ tabs)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit */ \"./src/submit.js\");\n\n\n\n\n\n// where all of the created list stored in a array\nlet listofTodos = [];\n\n//creates a home button on submit page after first card created\nlet tabs = function() {\n    let tabDiv = document.getElementById(\"tabs\")\n    let homeButton = document.createElement(\"button\")\n    homeButton.setAttribute(\"id\", \"homebtn\")\n    homeButton.innerText = \"Home\"\n    tabDiv.appendChild(homeButton)\n    homeButton.addEventListener(\"click\", _submit__WEBPACK_IMPORTED_MODULE_2__.createCard)\n}\n\n//main factory function to create list\nconst mainFactory = function(name, title, description, dueDate) {\n    \n    return { \n        name: name,\n        title: title,  \n        description: description,\n        dueDate: dueDate, \n        priority: (0,_submit__WEBPACK_IMPORTED_MODULE_2__.getPriority)(),\n        \n    }\n}\n\n                        \nconst newFactory = function(name, title, description, duedate){\n    const { } = mainFactory(name, title, description, duedate);\n    return {\n        id: {},\n        name: document.getElementById(\"name\").value,\n        funct: obj[(name)] = new Array(),\n        myFactory() { return id }    \n            \n        }\n\n}\n\n\n//main function that homes the create project button and submit\nlet homeMainFunction = () => {\n    \n    ;(0,_create__WEBPACK_IMPORTED_MODULE_1__.makeButton)()\n    ;(0,_submit__WEBPACK_IMPORTED_MODULE_2__.submit)()\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n// starts my app\nlet initTodo = () => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.homeMainFunction)();\n}\n\ninitTodo()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainFactory: () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.mainFactory),\n/* harmony export */   notes: () => (/* binding */ notes),\n/* harmony export */   notesMain: () => (/* binding */ notesMain)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit */ \"./src/submit.js\");\n\n\n\n\n\nfunction myFactory(){\n    let obj = {}\n    //Name var to use for the obj name newUser\n    let name = document.getElementById(\"name\").value\n    \n    obj[(name)] = new Array()\n\n    return obj\n}\n\nlet notes = [];\nfunction notesMain(){    \n    \n        \n    let mainDiv = document.getElementById(\"content\");\n    mainDiv.innerText = \"\";\n\n    let name = document.getElementById(\"name\").value\n    console.log(name)\n    \n    let formDiv = document.createElement(\"div\")\n    formDiv.setAttribute(\"id\", \"div\")\n    mainDiv.appendChild(formDiv);\n\n    let form = document.createElement(\"form\")\n    form.setAttribute(\"id\", \"form\");\n    formDiv.appendChild(form)\n    form.setAttribute(\"method\", \"post\");\n\n    // Create an input element for the name.\n    var notesInput = document.createElement(\"input\");\n    notesInput.setAttribute(\"type\", \"text\");\n    notesInput.setAttribute(\"notes\", \"notes\");\n    notesInput.setAttribute(\"id\", \"notes\")\n    form.appendChild(notesInput)\n\n    var addButton = document.createElement(\"input\");\n    addButton.setAttribute(\"type\", \"submit\");\n    addButton.setAttribute(\"id\", \"submit\");\n    addButton.setAttribute(\"value\", \"Add a note\");\n    form.appendChild(addButton)\n\n\n    //creates a ul for the list to be in\n    let listDiv = document.createElement('ul')\n    listDiv.setAttribute(\"id\", \"ul\")\n    mainDiv.appendChild(listDiv)\n\n    //button on todoList Note page to add a note\n    let submit = document.getElementById(\"submit\");\n    let newUser = myFactory()\n    \n    submit.addEventListener(\"click\", (event) => {\n        event.preventDefault()\n        console.log(newUser)\n    \n\n        \n\n        let checkNote = document.getElementById(\"notes\").value\n        let n = document.createTextNode(checkNote);\n\n        let li = document.createElement(\"li\")\n        li.setAttribute(\"class\", \"li\")\n        li.appendChild(n)\n        \n        if (checkNote == '') {\n            alert(\"add something first\")\n        } else {\n            document.getElementById(\"ul\").appendChild(li)\n        }\n            newUser[(name)].push(checkNote)\n            \n            \n    let removeNote = document.querySelectorAll(\".li\")\n    removeNote.forEach(button => {\n    button.addEventListener(\"click\", () => {\n        let removeTarget = Array.prototype.indexOf.call(removeNote, button);\n\n            newUser[(name)].splice(removeTarget, 1)\n            removeNote[removeTarget].remove()   \n        })\n    })\n})\n    \n}\n    \n\n\n//# sourceURL=webpack://to-do-list/./src/notes.js?");

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit */ \"./src/submit.js\");\n\n\n\n\n//target the dynamically created remove button\nlet removeCard = function (){\nlet remove = document.querySelectorAll(\".removeBtn\")\n\nremove.forEach(button => {\n    \n    button.addEventListener(\"click\", () => {\n        \n        //function gets the index of the clicked button\n        let removeTarget = Array.prototype.indexOf.call(remove, button);\n\n        //Splice the index in array list that matches var\n        _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos.splice(removeTarget, 1)\n\n        remove[removeTarget].remove()\n        //event.target.closest('div').remove()\n\n        //target the main div and remove all\n        let main = document.getElementById(\"content\")\n        main.innerText = \"\";\n\n        //rebuild the main div and show list\n        //createCard()\n        //makeButton()\n        })\n    })\n}\n\n// the export default was causing me a issue\n\n\n\n//# sourceURL=webpack://to-do-list/./src/remove.js?");

/***/ }),

/***/ "./src/submit.js":
/*!***********************!*\
  !*** ./src/submit.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   getPriority: () => (/* binding */ getPriority),\n/* harmony export */   submit: () => (/* binding */ submit)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ \"./src/remove.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n \n\n\n\n\n\n//this function handles submit, pushes to list, updates html\nfunction submit(){\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.tabs)()\n    \n    let submit = document.getElementById(\"submit\");\n    submit.addEventListener(\"click\", () => {\n    //set variables to doms values\n    let name = document.getElementById(\"name\").value\n    let title = document.getElementById(\"title\").value;\n    let description = document.getElementById(\"description\").value;\n    let duedate = document.getElementById(\"duedate\").value;\n    let priority = getPriority()\n\n    \n    //create a object instance of main Factory\n    let newTodo = (0,_home__WEBPACK_IMPORTED_MODULE_1__.mainFactory)(name, title, description, \n        duedate, priority)\n\n    _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos.push(newTodo)\n    \n    let mainDiv = document.getElementById(\"content\");\n    mainDiv.innerText = \"\"\n\n    createCard()\n    \n    })\n}\n\n\n//radio button prioroty function\nlet getPriority = () => {\n    let ele = document.getElementsByName('priority')\n    for (let i = 0; i < ele.length; i++)\n        if (ele[i].checked === true){\n            return ele[i].value\n    }\n}\n\nlet p;\n\nlet createCard = function () {\n    //talk to main div\n    let mainDiv = document.getElementById(\"content\")\n    mainDiv.innerText = \"\";\n    //create card div\n    let newDiv = document.createElement(\"div\")\n    newDiv.setAttribute(\"class\", \"newDiv\")\n    mainDiv.appendChild(newDiv)\n\n    //loop list to create a array\n    for (let i = 0; i < _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos.length; i++){\n        \n        //create card div\n        let cardDiv = document.createElement(\"div\")\n        cardDiv.setAttribute(\"class\", \"cards\")\n        //get the property values from the obj and index of\n        let textName = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[i].name\n        let textTitle = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[i].title\n        let textDescription = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[i].description\n        let duedate = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[i].dueDate\n        let priority = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[i].priority\n        //sets var for index\n        p = i;\n\n        let noteBtn = document.createElement(\"button\")\n        noteBtn.setAttribute(\"class\", \"noteBtn\")\n        noteBtn.innerText = \"Todo List\"\n        noteBtn.addEventListener(\"click\", loadNotes)\n\n        let viewBtn = document.createElement(\"button\")\n        viewBtn.setAttribute(\"class\", \"viewBtn\")\n        viewBtn.innerText = \"View Card\"\n        viewBtn.addEventListener(\"click\", viewCard)\n        \n        let removeBtn = document.createElement(\"button\")\n        removeBtn.setAttribute(\"class\", \"removeBtn\")\n        removeBtn.innerText = \"remove card\"\n        removeBtn.addEventListener(\"click\", _remove__WEBPACK_IMPORTED_MODULE_2__.removeCard)\n        //layout of cards project\n        cardDiv.innerText += \n        textName + \"\\n\" + \n        textTitle + \"\\n\" + \n        textDescription + \"\\n\" + \n        duedate + \"\\n\" + \n        priority + \"\\n\" \n        //adds elements to divs\n        cardDiv.appendChild(noteBtn)\n        cardDiv.appendChild(viewBtn)\n        cardDiv.appendChild(removeBtn)\n        newDiv.appendChild(cardDiv)\n\n    }\n}\n\n//creates a card view solo\nlet viewCard = () => {\n    let mainDiv = document.getElementById(\"content\")\n    mainDiv.innerText = \"\";\n    mainDiv.setAttribute('style','font-size:36px')\n    \n    let textName = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[p].name\n    let textTitle = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[p].title\n    let textDescription = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[p].description\n    let duedate = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[p].dueDate\n    let priority = _home__WEBPACK_IMPORTED_MODULE_1__.listofTodos[p].priority\n    \n\n    let html = \"\"\n\n    html += \n    \"\\n\" + \n    \"Name: \" + textName + \"\\n\" + \n    \"Title: \" + textTitle + \"\\n\" + \n    \"Description: \" + textDescription + \"\\n\" + \n    \"Due Date: \" + duedate + \"\\n\" + \n    \"Priority: \" + priority + \"\\n\" \n\n    mainDiv.innerText += html\n\n}\n\n//loads notes page\nlet loadNotes = () => {\n    let mainDiv = document.getElementById(\"content\")\n    mainDiv.innerText = \"\";\n    //creates dialog, form and inputs Study this later\n    (0,_notes__WEBPACK_IMPORTED_MODULE_3__.notesMain)()\n}\n    \n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/submit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;