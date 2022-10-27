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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n\n\nvar CLASS_ATTRIBUTE_NAME = \"class\";\nvar P_TAG_NAME = \"p\";\nvar CHAT_HISTORY_KEY = \"chatHistory\";\nvar LAST_MESSAGE_SELECTOR = \".dialog-data p:nth-last-child(1)\";\nvar INPUT_MESSAGE_CONTAINER_SELECTOR = \".input-message-container\";\nvar INPUT_MESSAGE_INPUT_SELECTOR = \".input-message-input\";\nvar form = document.querySelector(INPUT_MESSAGE_CONTAINER_SELECTOR);\nvar input = document.querySelector(INPUT_MESSAGE_INPUT_SELECTOR);\nvar ex = [{\n  \"datetime\": \"\",\n  \"name\": \"me\",\n  \"data\": \" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto dolorem facilis inventore laboriosam laborum laudantium, mollitia nemo nostrum officia quae qui repellat voluptatum? Ad architecto est, incidunt maxime qui sed. Accusamus consectetur cumque cupiditate debitis dignissimos facere id in minus necessitatibus, nobis odit quos repellendus sint tempora, temporibus. Deserunt!\"\n}, {\n  \"datetime\": \"\",\n  \"name\": \"user\",\n  \"data\": \"sadlsadl zc zxklz klxczx c\"\n}, {\n  \"datetime\": \"\",\n  \"name\": \"user\",\n  \"data\": \"lorem123 aseqwe \"\n}];\nform.addEventListener('submit', handleSubmit.bind(undefined));\nform.addEventListener('keypress', handleKeyPress.bind(undefined));\nfunction handleSubmit(event) {\n  event.preventDefault();\n  if (input.value === \"\") return;\n  sendMessage(input.value, CHAT_HISTORY_KEY);\n  reloadMessages(CHAT_HISTORY_KEY);\n  input.value = \"\";\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    if (input.value === \"\") return;\n    sendMessage(input.value, CHAT_HISTORY_KEY);\n    reloadMessages(CHAT_HISTORY_KEY);\n    input.value = \"\";\n  }\n}\n\n//todo Каждому пользаку сделать айди и брать историю сообщений по userID\nfunction prepareLocalStorage() {\n  if (!localStorage.getItem(CHAT_HISTORY_KEY)) localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(\"\"));\n}\nfunction reloadMessages(localStorageKey) {\n  while (document.getElementsByClassName(\"me\").length > 0) {\n    document.getElementsByClassName(\"me\")[0].remove();\n  }\n  while (document.getElementsByClassName(\"user\").length > 0) {\n    document.getElementsByClassName(\"user\")[0].remove();\n  }\n  showMessages(localStorageKey);\n}\nfunction showMessages(localStorageKey) {\n  var history = JSON.parse(localStorage.getItem(localStorageKey));\n  if (!history) return;\n  var lastMessage = document.querySelector(LAST_MESSAGE_SELECTOR);\n  if (lastMessage == null) {\n    lastMessage = document.querySelector(\".input-message-container\");\n  }\n  history.forEach(function (h) {\n    var newDiv = document.createElement(P_TAG_NAME);\n    newDiv.setAttribute(CLASS_ATTRIBUTE_NAME, h.name);\n    newDiv.appendChild(document.createTextNode(h.data));\n    lastMessage.parentNode.insertBefore(newDiv, lastMessage.previousSibling);\n  });\n}\nfunction sendMessage(text, localStorageKey) {\n  var currentHistory = JSON.parse(localStorage.getItem(localStorageKey));\n  if (!currentHistory) {\n    currentHistory = [];\n  }\n  var message = JSON.parse(\"{\\\"datetime\\\":\\\"\".concat(Date.now(), \"\\\", \\\"name\\\":\\\"me\\\", \\\"data\\\":\\\"\").concat(text, \"\\\"}\"));\n  currentHistory.push(message);\n  localStorage.setItem(localStorageKey, JSON.stringify(currentHistory));\n}\nprepareLocalStorage();\nshowMessages(CHAT_HISTORY_KEY);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./static/valeron.jpg */ \"./static/valeron.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./static/lera-gif.gif */ \"./static/lera-gif.gif\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./static/tink.jpg */ \"./static/tink.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./static/vyazma.jpg */ \"./static/vyazma.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./static/deusops.jpg */ \"./static/deusops.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./static/icpc.jpg */ \"./static/icpc.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./static/front.jpg */ \"./static/front.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./static/denis.jpg */ \"./static/denis.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./static/sns.jpg */ \"./static/sns.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./static/back.jpg */ \"./static/back.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./static/clickhouse.jpg */ \"./static/clickhouse.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<!DOCTYPE html>\\n<html>\\n<head lang=\\\"en\\\">\\n    <meta charset=\\\"UTF-8\\\">\\n    <title>Send a message</title>\\n</head>\\n<body>\\n<div class=\\\"sidebar\\\">\\n    <div class=\\\"sidebar-header header\\\">\\n        Sidebar\\n        <span>Messenger</span>\\n        <div class=\\\"search\\\">\\n            Search\\n        </div>\\n    </div>\\n    <div class=\\\"chat-list\\\">\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"/>\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Валерон\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    удачи\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"http://cm1.narvii.com/8402/169a9567143a9fca54e9e114838ed4497c858b69_00.jpg\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Это я\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Это мои сообщения\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Lera Fedorova\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Ваау\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Тинькофф Старт: Чат\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Если ещё актуально, то нап...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    ВЯЗЬМА-ФЛУД\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    В видео такой посыл\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    DeusOps\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    На старте знаний языка особо не требуется, ...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    ITMO ICPC\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Да, извините. Я добавил в группу новую тренировку\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Frontend - VK Fullstack\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    спасибо в теории есть шанс не умереть, но это ...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Денис жирный\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    тогда не займу\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    sns_interships\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Ребят, а какие есть ещё ...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Backend - VK Fullstack\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    спасибо!\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    ClickHouse не тормозит\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Да\\n                </div>\\n            </div>\\n        </div>\\n\\n    </div>\\n</div>\\n<div class=\\\"main-column\\\">\\n    <div class=\\\"dialog-header header\\\">\\n    </div>\\n    <div class=\\\"dialog-data\\\">\\n        <div class=\\\"input-message-container\\\">\\n            <input class=\\\"input-message-input\\\" placeholder=\\\"Messsage\\\"/>\\n        </div>\\n    </div>\\n</div>\\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./static/back.jpg":
/*!*************************!*\
  !*** ./static/back.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/back.jpg\";\n\n//# sourceURL=webpack:///./static/back.jpg?");

/***/ }),

/***/ "./static/clickhouse.jpg":
/*!*******************************!*\
  !*** ./static/clickhouse.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/clickhouse.jpg\";\n\n//# sourceURL=webpack:///./static/clickhouse.jpg?");

/***/ }),

/***/ "./static/denis.jpg":
/*!**************************!*\
  !*** ./static/denis.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/denis.jpg\";\n\n//# sourceURL=webpack:///./static/denis.jpg?");

/***/ }),

/***/ "./static/deusops.jpg":
/*!****************************!*\
  !*** ./static/deusops.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/deusops.jpg\";\n\n//# sourceURL=webpack:///./static/deusops.jpg?");

/***/ }),

/***/ "./static/front.jpg":
/*!**************************!*\
  !*** ./static/front.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/front.jpg\";\n\n//# sourceURL=webpack:///./static/front.jpg?");

/***/ }),

/***/ "./static/icpc.jpg":
/*!*************************!*\
  !*** ./static/icpc.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icpc.jpg\";\n\n//# sourceURL=webpack:///./static/icpc.jpg?");

/***/ }),

/***/ "./static/lera-gif.gif":
/*!*****************************!*\
  !*** ./static/lera-gif.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/lera-gif.gif\";\n\n//# sourceURL=webpack:///./static/lera-gif.gif?");

/***/ }),

/***/ "./static/sns.jpg":
/*!************************!*\
  !*** ./static/sns.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sns.jpg\";\n\n//# sourceURL=webpack:///./static/sns.jpg?");

/***/ }),

/***/ "./static/tink.jpg":
/*!*************************!*\
  !*** ./static/tink.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/tink.jpg\";\n\n//# sourceURL=webpack:///./static/tink.jpg?");

/***/ }),

/***/ "./static/valeron.jpg":
/*!****************************!*\
  !*** ./static/valeron.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/valeron.jpg\";\n\n//# sourceURL=webpack:///./static/valeron.jpg?");

/***/ }),

/***/ "./static/vyazma.jpg":
/*!***************************!*\
  !*** ./static/vyazma.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/vyazma.jpg\";\n\n//# sourceURL=webpack:///./static/vyazma.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;