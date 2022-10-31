/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar randomSentence = __webpack_require__(/*! random-sentence */ \"../node_modules/random-sentence/index.js\");\nvar CLASS_ATTRIBUTE_NAME = \"class\";\nvar P_TAG_NAME = \"p\";\nvar DIV_TAG_NAME = \"div\";\nvar SPAN_TAG_NAME = \"span\";\nvar I_TAG_NAME = \"i\";\nvar IMG_TAG_NAME = \"img\";\nvar LAST_MESSAGE_SELECTOR = \".dialog-data div:nth-last-child(1)\";\nvar INPUT_MESSAGE_CONTAINER_SELECTOR = \".input-message-container\";\nvar INPUT_MESSAGE_INPUT_SELECTOR = \".input-message-input\";\nvar DIALOG_DATA_SELECTOR = \".dialog-data\";\nvar DIALOG_HEADER_SELECTOR = \".dialog-header\";\nvar CHAT_SELECTOR = \".chat\";\nvar MESSAGE_TIME_CLASS = \"message-time\";\nvar DONE_ALL_CLASS = \"done-all\";\nfunction getDateTimeNow() {\n  return new Date().toLocaleTimeString().substr(0, 5);\n}\nvar form = document.querySelector(INPUT_MESSAGE_CONTAINER_SELECTOR);\nvar input = document.querySelector(INPUT_MESSAGE_INPUT_SELECTOR);\nvar chat = document.querySelectorAll(CHAT_SELECTOR);\nform.addEventListener('submit', handleSubmit.bind(undefined));\nform.addEventListener('keypress', handleKeyPress.bind(undefined));\nchat.forEach(function (el) {\n  return el.addEventListener(\"click\", showDialog);\n});\nfunction generateMessages() {\n  var messagesAmount = Math.floor(Math.random() * 10) % 10;\n  var messages = [];\n  for (var i = 0; i < messagesAmount; i++) {\n    var wordsAmount = Math.floor(Math.random() * 20) % 20;\n    var sentence = randomSentence({\n      words: wordsAmount\n    });\n    var sender = ['me', 'user'][Math.floor(Math.random() * 2)];\n    messages.push(JSON.parse(\"{\\\"datetime\\\":\\\"\".concat(getDateTimeNow(), \"\\\", \\\"name\\\":\\\"\").concat(sender, \"\\\", \\\"data\\\":\\\"\").concat(sentence, \"\\\"}\")));\n  }\n  return messages;\n}\nfunction activeDialogName() {\n  if (!localStorage.getItem(\"activeDialog\")) {\n    var firstChatName = getFirstChatName();\n    prepareLocalStorage(firstChatName + \"LocalStorage\");\n    localStorage.setItem(\"activeDialog\", firstChatName);\n  }\n  console.log(localStorage.getItem(\"activeDialog\"));\n  return localStorage.getItem(\"activeDialog\");\n}\nfunction getFirstChatName() {\n  return document.getElementsByClassName(\"chat\")[0].getAttribute(\"id\");\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  if (input.value === \"\") return;\n  var key = activeDialogName() + \"LocalStorage\";\n  var dialog = new Dialog(activeDialogName());\n  dialog.sendMessage(input.value, key);\n  input.value = \"\";\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    if (input.value === \"\") return;\n    var dialog = new Dialog(activeDialogName());\n    var key = activeDialogName() + \"LocalStorage\";\n    dialog.sendMessage(input.value, key);\n    input.value = \"\";\n  }\n}\n\n//todo Каждому пользаку сделать айди и брать историю сообщений по userID\nfunction prepareLocalStorage(key) {\n  if (!localStorage.getItem(key)) {\n    localStorage.setItem(key, JSON.stringify(generateMessages()));\n  }\n}\nfunction showDialog(event) {\n  var actionDialog;\n  if (event == null) actionDialog = activeDialogName();else actionDialog = event.currentTarget.querySelector(\".dialog-title\").textContent.trim();\n  localStorage.setItem(\"activeDialog\", actionDialog);\n  var dialog = new Dialog(activeDialogName());\n  prepareLocalStorage(dialog.localStorageKey);\n  dialog.showHeader();\n  dialog.showMessages();\n}\nvar Dialog = /*#__PURE__*/function () {\n  function Dialog(name) {\n    _classCallCheck(this, Dialog);\n    this.name = name;\n    this.dialogHeader = document.querySelector(DIALOG_HEADER_SELECTOR);\n    this.localStorageKey = this.name + \"LocalStorage\";\n  }\n  _createClass(Dialog, [{\n    key: \"showHeader\",\n    value: function showHeader() {\n      this.dialogHeader.replaceChildren([]);\n      var dialogHeaderAttr = this.getDialogAttr();\n      var dialogHeaderAvatar = document.createElement(IMG_TAG_NAME);\n      dialogHeaderAvatar.setAttribute(\"src\", dialogHeaderAttr.avatar);\n      dialogHeaderAvatar.setAttribute(CLASS_ATTRIBUTE_NAME, \"dialog-header-avatar\");\n      this.dialogHeader.insertBefore(dialogHeaderAvatar, null);\n      var dialogHeaderName = document.createElement(\"div\");\n      dialogHeaderName.setAttribute(CLASS_ATTRIBUTE_NAME, \"dialog-header-title\");\n      dialogHeaderName.appendChild(document.createTextNode(dialogHeaderAttr.name));\n      this.dialogHeader.insertBefore(dialogHeaderName, null);\n    }\n  }, {\n    key: \"showMessages\",\n    value: function showMessages() {\n      while (document.getElementsByClassName(\"me\").length > 0) {\n        document.getElementsByClassName(\"me\")[0].remove();\n      }\n      while (document.getElementsByClassName(\"user\").length > 0) {\n        document.getElementsByClassName(\"user\")[0].remove();\n      }\n      var history = JSON.parse(localStorage.getItem(this.localStorageKey));\n      if (!history) return;\n      var lastMessage = document.querySelector(LAST_MESSAGE_SELECTOR);\n      if (lastMessage == null) {\n        lastMessage = document.querySelector(\".input-message-container\");\n      }\n      history.forEach(function (h) {\n        //todo divide to separate func\n        var newDivContainer = document.createElement(DIV_TAG_NAME);\n        newDivContainer.setAttribute(CLASS_ATTRIBUTE_NAME, h.name + \"-message-container\");\n        var newDiv = document.createElement(P_TAG_NAME);\n        newDiv.setAttribute(CLASS_ATTRIBUTE_NAME, h.name);\n        newDiv.appendChild(document.createTextNode(h.data));\n        var newMessageTime = document.createElement(SPAN_TAG_NAME);\n        newMessageTime.setAttribute(CLASS_ATTRIBUTE_NAME, MESSAGE_TIME_CLASS);\n        newMessageTime.appendChild(document.createTextNode(h.datetime));\n        var newDoneAll = document.createElement(I_TAG_NAME);\n        newDoneAll.setAttribute(CLASS_ATTRIBUTE_NAME, \"material-symbols-outlined \" + DONE_ALL_CLASS);\n        newDiv.appendChild(newMessageTime);\n        newDoneAll.appendChild(document.createTextNode(\"Done_All\"));\n        newDiv.appendChild(newDoneAll);\n        newDivContainer.appendChild(newDiv);\n        lastMessage.parentNode.insertBefore(newDivContainer, lastMessage.previousSibling);\n      });\n      var dialogData = document.querySelector(DIALOG_DATA_SELECTOR);\n      dialogData.scrollTop = dialogData.scrollHeight;\n    }\n  }, {\n    key: \"sendMessage\",\n    value: function sendMessage(text) {\n      var currentHistory = JSON.parse(localStorage.getItem(this.localStorageKey));\n      if (!currentHistory) {\n        currentHistory = [];\n      }\n      var message = JSON.parse(\"{\\\"datetime\\\":\\\"\".concat(getDateTimeNow(), \"\\\", \\\"name\\\":\\\"me\\\", \\\"data\\\":\\\"\").concat(text, \"\\\"}\"));\n      currentHistory.push(message);\n      localStorage.setItem(this.localStorageKey, JSON.stringify(currentHistory));\n      this.showMessages();\n    }\n  }, {\n    key: \"getDialogAttr\",\n    value: function getDialogAttr() {\n      var div = document.getElementById(this.name);\n      console.log(this.name);\n      console.log(\"!!!\");\n      console.log(div);\n      return {\n        \"avatar\": this.getDialogAvatar(div),\n        \"name\": this.getDialogName(div)\n      };\n    }\n  }, {\n    key: \"getDialogAvatar\",\n    value: function getDialogAvatar(dialogDiv) {\n      return dialogDiv.querySelector(\"img\").getAttribute(\"src\");\n    }\n  }, {\n    key: \"getDialogName\",\n    value: function getDialogName(dialogDiv) {\n      return dialogDiv.querySelector(\".dialog-title\").textContent.trim();\n    }\n  }]);\n  return Dialog;\n}();\nshowDialog();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../node_modules/clamp/index.js":
/*!**************************************!*\
  !*** ../node_modules/clamp/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = clamp\n\nfunction clamp(value, min, max) {\n  return min < max\n    ? (value < min ? min : value > max ? max : value)\n    : (value < max ? max : value > min ? min : value)\n}\n\n\n//# sourceURL=webpack:///../node_modules/clamp/index.js?");

/***/ }),

/***/ "../node_modules/has-symbols/index.js":
/*!********************************************!*\
  !*** ../node_modules/has-symbols/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar origSymbol = typeof Symbol !== 'undefined' && Symbol;\nvar hasSymbolSham = __webpack_require__(/*! ./shams */ \"../node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasNativeSymbols() {\n\tif (typeof origSymbol !== 'function') { return false; }\n\tif (typeof Symbol !== 'function') { return false; }\n\tif (typeof origSymbol('foo') !== 'symbol') { return false; }\n\tif (typeof Symbol('bar') !== 'symbol') { return false; }\n\n\treturn hasSymbolSham();\n};\n\n\n//# sourceURL=webpack:///../node_modules/has-symbols/index.js?");

/***/ }),

/***/ "../node_modules/has-symbols/shams.js":
/*!********************************************!*\
  !*** ../node_modules/has-symbols/shams.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* eslint complexity: [2, 18], max-statements: [2, 33] */\nmodule.exports = function hasSymbols() {\n\tif (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }\n\tif (typeof Symbol.iterator === 'symbol') { return true; }\n\n\tvar obj = {};\n\tvar sym = Symbol('test');\n\tvar symObj = Object(sym);\n\tif (typeof sym === 'string') { return false; }\n\n\tif (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }\n\tif (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }\n\n\t// temp disabled per https://github.com/ljharb/object.assign/issues/17\n\t// if (sym instanceof Symbol) { return false; }\n\t// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4\n\t// if (!(symObj instanceof Symbol)) { return false; }\n\n\t// if (typeof Symbol.prototype.toString !== 'function') { return false; }\n\t// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }\n\n\tvar symVal = 42;\n\tobj[sym] = symVal;\n\tfor (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop\n\tif (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }\n\n\tif (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }\n\n\tvar syms = Object.getOwnPropertySymbols(obj);\n\tif (syms.length !== 1 || syms[0] !== sym) { return false; }\n\n\tif (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }\n\n\tif (typeof Object.getOwnPropertyDescriptor === 'function') {\n\t\tvar descriptor = Object.getOwnPropertyDescriptor(obj, sym);\n\t\tif (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack:///../node_modules/has-symbols/shams.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./static/valeron.jpg */ \"./static/valeron.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./static/lera-gif.gif */ \"./static/lera-gif.gif\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./static/tink.jpg */ \"./static/tink.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./static/vyazma.jpg */ \"./static/vyazma.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./static/deusops.jpg */ \"./static/deusops.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./static/icpc.jpg */ \"./static/icpc.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./static/front.jpg */ \"./static/front.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./static/denis.jpg */ \"./static/denis.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./static/sns.jpg */ \"./static/sns.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./static/back.jpg */ \"./static/back.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./static/clickhouse.jpg */ \"./static/clickhouse.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<!DOCTYPE html>\\n<html>\\n<head lang=\\\"en\\\">\\n    <meta charset=\\\"UTF-8\\\">\\n    <title>Send a message</title>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\\\" rel=\\\"stylesheet\\\"/>\\n</head>\\n<body>\\n<div class=\\\"sidebar\\\">\\n    <div class=\\\"sidebar-header header\\\">\\n        <i class=\\\"material-symbols-outlined burger\\\">Dehaze</i>\\n        <div class=\\\"search-box\\\">\\n            <i class=\\\"material-symbols-outlined\\\" style=\\\"position: absolute; left: 30px; top: 10px\\\">\\n                Search\\n            </i>\\n            <input placeholder=\\\"Search\\\" class=\\\"search\\\">\\n        </div>\\n    </div>\\n    <div class=\\\"chat-list\\\">\\n        <div class=\\\"create-chat-container\\\">\\n            <i class=\\\"material-symbols-outlined\\\" id=\\\"create-chat\\\">Create</i>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"Валерон\\\">\\n            <img class=\\\"dialog-avatar\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"/>\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Валерон\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    удачи\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"Это я\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"http://cm1.narvii.com/8402/169a9567143a9fca54e9e114838ed4497c858b69_00.jpg\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Это я\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Это мои сообщения\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"Lera Fedorova\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Lera Fedorova\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Ваау\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"Тинькофф Старт: Чат\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Тинькофф Старт: Чат\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Если ещё актуально, то нап...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"ВЯЗЬМА-ФЛУД\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    ВЯЗЬМА-ФЛУД\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    В видео такой посыл\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"DeusOps\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    DeusOps\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    На старте знаний языка особо не требуется, ...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"ITMO ICPC\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    ITMO ICPC\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Да, извините. Я добавил в группу новую тренировку\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"Frontend - VK Fullstack\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Frontend - VK Fullstack\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    спасибо в теории есть шанс не умереть, но это ...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"Денис жирный\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Денис жирный\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    тогда не займу\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"sns_interships\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    sns_interships\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Ребят, а какие есть ещё ...\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"Backend - VK Fullstack\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    Backend - VK Fullstack\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    спасибо!\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat\\\" id=\\\"ClickHouse не тормозит\\\">\\n            <img class=\\\"dialog-avatar\\\"\\n                 src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\">\\n            <div class=\\\"message-data\\\">\\n                <div class=\\\"dialog-title\\\">\\n                    ClickHouse не тормозит\\n                </div>\\n                <div class=\\\"dialog-subtitle\\\">\\n                    Да\\n                </div>\\n            </div>\\n        </div>\\n\\n    </div>\\n</div>\\n<div class=\\\"main-column\\\">\\n    <div class=\\\"dialog-header header\\\">\\n    </div>\\n    <div class=\\\"dialog-data\\\">\\n        <div class=\\\"input-message-container\\\">\\n            <input class=\\\"input-message-input\\\" placeholder=\\\"Messsage\\\"/>\\n        </div>\\n    </div>\\n</div>\\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/is-function/index.js":
/*!********************************************!*\
  !*** ../node_modules/is-function/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = isFunction\n\nvar toString = Object.prototype.toString\n\nfunction isFunction (fn) {\n  if (!fn) {\n    return false\n  }\n  var string = toString.call(fn)\n  return string === '[object Function]' ||\n    (typeof fn === 'function' && string !== '[object RegExp]') ||\n    (typeof window !== 'undefined' &&\n     // IE8 and below\n     (fn === window.setTimeout ||\n      fn === window.alert ||\n      fn === window.confirm ||\n      fn === window.prompt))\n};\n\n\n//# sourceURL=webpack:///../node_modules/is-function/index.js?");

/***/ }),

/***/ "../node_modules/is-nil/index.js":
/*!***************************************!*\
  !*** ../node_modules/is-nil/index.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (obj) {\n\n  return obj == null;\n};\n\n\n//# sourceURL=webpack:///../node_modules/is-nil/index.js?");

/***/ }),

/***/ "../node_modules/is-object/index.js":
/*!******************************************!*\
  !*** ../node_modules/is-object/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isObject(x) {\n\treturn typeof x === 'object' && x !== null;\n};\n\n\n//# sourceURL=webpack:///../node_modules/is-object/index.js?");

/***/ }),

/***/ "../node_modules/is-symbol/index.js":
/*!******************************************!*\
  !*** ../node_modules/is-symbol/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar toStr = Object.prototype.toString;\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"../node_modules/has-symbols/index.js\")();\n\nif (hasSymbols) {\n\tvar symToStr = Symbol.prototype.toString;\n\tvar symStringRegex = /^Symbol\\(.*\\)$/;\n\tvar isSymbolObject = function isRealSymbolObject(value) {\n\t\tif (typeof value.valueOf() !== 'symbol') {\n\t\t\treturn false;\n\t\t}\n\t\treturn symStringRegex.test(symToStr.call(value));\n\t};\n\n\tmodule.exports = function isSymbol(value) {\n\t\tif (typeof value === 'symbol') {\n\t\t\treturn true;\n\t\t}\n\t\tif (toStr.call(value) !== '[object Symbol]') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\treturn isSymbolObject(value);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n} else {\n\n\tmodule.exports = function isSymbol(value) {\n\t\t// this environment does not support Symbols.\n\t\treturn  false && 0;\n\t};\n}\n\n\n//# sourceURL=webpack:///../node_modules/is-symbol/index.js?");

/***/ }),

/***/ "../node_modules/max-safe-int/index.js":
/*!*********************************************!*\
  !*** ../node_modules/max-safe-int/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = 9007199254740991;\n\n\n//# sourceURL=webpack:///../node_modules/max-safe-int/index.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "../node_modules/random-char/index.js":
/*!********************************************!*\
  !*** ../node_modules/random-char/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isNil         = __webpack_require__(/*! is-nil */ \"../node_modules/is-nil/index.js\");\nvar isObject      = __webpack_require__(/*! is-object */ \"../node_modules/is-object/index.js\");\nvar toString      = __webpack_require__(/*! to-str */ \"../node_modules/to-str/index.js\");\nvar randomNatural = __webpack_require__(/*! random-natural */ \"../node_modules/random-natural/index.js\");\n\nvar pools = {\n  lower: 'abcdefghijklmnopqrstuvwxyz',\n  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\n  number: '0123456789',\n  symbol: '~!@#$%^&()*_+-={}[]'\n};\n\npools.alpha  = pools.lower + pools.upper;\npools['all'] = pools.lower + pools.upper + pools.number + pools.symbol;\n\nmodule.exports = function (options) {\n\n  if (!isObject(options)) {\n    if (isNil(options)) {\n      options = { pool: pools.all };\n    } else {\n      options = toString(options);\n      options = { pool: pools[options] || options };\n    }\n  }\n\n  var pool;\n\n  if (options.pool) {\n    pool = options.pool;\n  } else if (options.lower) {\n    pool = pools.lower;\n  } else if (options.upper) {\n    pool = pools.upper;\n  } else if (options.alpha) {\n    pool = pools.alpha;\n  } else if (options.number) {\n    pool = pools.number;\n  } else if (options.symbol) {\n    pool = pools.symbol;\n  } else {\n    pool = pools.all;\n  }\n\n  pool = toString(pool);\n\n  return pool.charAt(randomNatural({\n    min: 0,\n    max: pool.length - 1,\n    inspected: true\n  }));\n};\n\n\n//# sourceURL=webpack:///../node_modules/random-char/index.js?");

/***/ }),

/***/ "../node_modules/random-integral/index.js":
/*!************************************************!*\
  !*** ../node_modules/random-integral/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar clamp        = __webpack_require__(/*! clamp */ \"../node_modules/clamp/index.js\");\nvar toInteger    = __webpack_require__(/*! to-integer */ \"../node_modules/to-integer/index.js\");\nvar MAX_SAFE_INT = __webpack_require__(/*! max-safe-int */ \"../node_modules/max-safe-int/index.js\");\nvar MIN_SAFE_INT = -MAX_SAFE_INT;\n\nfunction fixme(val, min, max, isMin) {\n\n  if (typeof val !== 'number') {\n    val = toInteger(val);\n  }\n\n  if (isNaN(val) || !isFinite(val)) {\n    return isMin ? min : max;\n  }\n\n  return clamp(val, min, max);\n}\n\nmodule.exports = function (options) {\n\n  if (options) {\n    // for speed up\n    if (!options.inspected) {\n      options.min = fixme(options.min, MIN_SAFE_INT, MAX_SAFE_INT, true);\n      options.max = fixme(options.max, MIN_SAFE_INT, MAX_SAFE_INT, false);\n    }\n  } else {\n    options = {\n      min: MIN_SAFE_INT,\n      max: MAX_SAFE_INT\n    };\n  }\n\n  var min = options.min;\n  var max = options.max;\n\n  // swap to variables\n  // ref: http://stackoverflow.com/a/16201688\n  if (min > max) {\n    min = min ^ max;\n    max = min ^ max;\n    min = min ^ max;\n  }\n\n  return Math.round(Math.random() * (max - min)) + min;\n};\n\nmodule.exports.fixme = fixme;\n\n\n//# sourceURL=webpack:///../node_modules/random-integral/index.js?");

/***/ }),

/***/ "../node_modules/random-lorem/index.js":
/*!*********************************************!*\
  !*** ../node_modules/random-lorem/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar clamp          = __webpack_require__(/*! clamp */ \"../node_modules/clamp/index.js\");\nvar randomNatural  = __webpack_require__(/*! random-natural */ \"../node_modules/random-natural/index.js\");\nvar randomSyllable = __webpack_require__(/*! random-syllable */ \"../node_modules/random-syllable/index.js\");\n\nvar MIN_LEN = 2;\nvar MAX_LEN = 18;\n\nmodule.exports = function (options) {\n\n  options = options || {\n      syllables: randomNatural({\n        min: 1,\n        max: 3,\n        inspected: true\n      })\n    };\n\n  var length    = options.length;\n  var syllables = options.syllables;\n\n  var result = '';\n\n  if (syllables) {\n    for (var i = 0; i < syllables; i++) {\n      result += randomSyllable();\n    }\n\n    return result.substring(0, MAX_LEN);\n  }\n\n\n  if (!length && ( options.min || options.max)) {\n    length = randomNatural({\n      min: options.min || MIN_LEN,\n      max: options.max || MAX_LEN\n    });\n  }\n\n  length = length || randomNatural({\n      min: MIN_LEN,\n      max: MAX_LEN,\n      inspected: true\n    });\n\n\n  length = clamp(length, MIN_LEN, MAX_LEN);\n\n\n  while (result.length < length) {\n    result += randomSyllable();\n  }\n\n  return result.substring(0, length);\n};\n\n\n//# sourceURL=webpack:///../node_modules/random-lorem/index.js?");

/***/ }),

/***/ "../node_modules/random-natural/index.js":
/*!***********************************************!*\
  !*** ../node_modules/random-natural/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar randomInt    = __webpack_require__(/*! random-integral */ \"../node_modules/random-integral/index.js\");\nvar MAX_SAFE_INT = __webpack_require__(/*! max-safe-int */ \"../node_modules/max-safe-int/index.js\");\n\nmodule.exports = function (options) {\n\n  if (options) {\n    if (!options.inspected) {\n      options.min = randomInt.fixme(options.min, 0, MAX_SAFE_INT, true);\n      options.max = randomInt.fixme(options.max, 0, MAX_SAFE_INT, false);\n    }\n  } else {\n    options = {\n      min: 0,\n      max: MAX_SAFE_INT\n    };\n  }\n\n  options.inspected = true;\n\n  return randomInt(options);\n};\n\nmodule.exports.fixme = randomInt.fixme;\n\n\n//# sourceURL=webpack:///../node_modules/random-natural/index.js?");

/***/ }),

/***/ "../node_modules/random-sentence/index.js":
/*!************************************************!*\
  !*** ../node_modules/random-sentence/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar clamp         = __webpack_require__(/*! clamp */ \"../node_modules/clamp/index.js\");\nvar randomLorem   = __webpack_require__(/*! random-lorem */ \"../node_modules/random-lorem/index.js\");\nvar randomNatural = __webpack_require__(/*! random-natural */ \"../node_modules/random-natural/index.js\");\n\nvar MIN_LEN = 2;\nvar MAX_LEN = 18;\n\nmodule.exports = function (options) {\n\n  options = options || {\n      words: randomNatural({\n        min: 12,\n        max: 18,\n        inspected: true\n      })\n    };\n\n  var length = options.words;\n\n  if (!length && (options.min || options.max)) {\n    length = randomNatural({\n      min: options.min || MIN_LEN,\n      max: options.max || MAX_LEN\n    });\n  }\n\n  length = length || randomNatural({\n      min: MIN_LEN,\n      max: MAX_LEN,\n      inspected: true\n    });\n\n  length = clamp(length, MIN_LEN, MAX_LEN);\n\n  var words = [];\n\n  while (length--) {\n    words.push(randomLorem());\n  }\n\n  var firstWorld = words[0];\n\n  words[0] = firstWorld[0].toUpperCase() + firstWorld.substr(1);\n\n  return words.join(' ') + '.';\n};\n\n\n//# sourceURL=webpack:///../node_modules/random-sentence/index.js?");

/***/ }),

/***/ "../node_modules/random-syllable/index.js":
/*!************************************************!*\
  !*** ../node_modules/random-syllable/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar clamp         = __webpack_require__(/*! clamp */ \"../node_modules/clamp/index.js\");\nvar isObject      = __webpack_require__(/*! is-object */ \"../node_modules/is-object/index.js\");\nvar toInteger     = __webpack_require__(/*! to-integer */ \"../node_modules/to-integer/index.js\");\nvar randomChar    = __webpack_require__(/*! random-char */ \"../node_modules/random-char/index.js\");\nvar randomNatural = __webpack_require__(/*! random-natural */ \"../node_modules/random-natural/index.js\");\n\nmodule.exports = function (options) {\n\n  var length = isObject(options)\n    ? options.length\n    : options;\n\n  if (length) {\n    length = toInteger(length);\n    length = clamp(length, 2, 3);\n  } else {\n    length = randomNatural({ min: 2, max: 3 });\n  }\n\n  var consonants = 'bcdfghjklmnprstvwz'; // consonants except hard to speak ones\n  var vowels = 'aeiou';                  // vowels\n  var all = consonants + vowels;         // all\n\n  var text = '';\n  var char;\n\n  for (var i = 0; i < length; i++) {\n    if (i === 0) {\n      // First character can be anything\n      char = randomChar({ pool: all });\n    } else if (consonants.indexOf(char) === -1) {\n      // Last character was a vowel, now we want a consonant\n      char = randomChar({ pool: consonants });\n    } else {\n      // Last character was a consonant, now we want a vowel\n      char = randomChar({ pool: vowels });\n    }\n\n    text += char;\n  }\n\n  return text;\n};\n\n\n//# sourceURL=webpack:///../node_modules/random-syllable/index.js?");

/***/ }),

/***/ "../node_modules/to-integer/index.js":
/*!*******************************************!*\
  !*** ../node_modules/to-integer/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isNil      = __webpack_require__(/*! is-nil */ \"../node_modules/is-nil/index.js\");\nvar isSymbol   = __webpack_require__(/*! is-symbol */ \"../node_modules/is-symbol/index.js\");\nvar isObject   = __webpack_require__(/*! is-object */ \"../node_modules/is-object/index.js\");\nvar isFunction = __webpack_require__(/*! is-function */ \"../node_modules/is-function/index.js\");\n\nvar NAN = 0 / 0;\n\nmodule.exports = function (value) {\n\n  if (isNil(value)) {\n    return 0;\n  }\n\n  var type = typeof value;\n\n  if (type === 'number') {\n    return value;\n  } else if (type === 'boolean') {\n    return value ? 1 : 0;\n  }\n\n  if (isSymbol(value)) {\n    return NAN;\n  }\n\n  if (isObject(value)) {\n\n    var raw = isFunction(value.valueOf) ? value.valueOf() : value;\n\n    value = isObject(raw) ? (raw + '') : raw;\n  }\n\n\n  type = typeof value;\n  if (type !== 'string') {\n    return type === 'number' ? value : parseInt(value, 10);\n  }\n\n\n  // trim\n  value = value.replace(/^\\s+|\\s+$/g, '');\n\n\n  if (/^0b[01]+$/i.test(value)) {\n    return parseInt(value.slice(2), 2);\n  } else if (/^0o[0-7]+$/i.test(value)) {\n    return parseInt(value.slice(2), 8);\n  } else if (/^0x[0-9a-f]+$/i.test(value)) {\n    return parseInt(value.slice(2), 16);\n  }\n\n  if(/^0b/i.test(value)||/^0o/i.test(value)||/^[\\+\\-]?0x/i.test(value)){\n    return NAN;\n  }\n\n  return parseInt(value, 10);\n};\n\n\n//# sourceURL=webpack:///../node_modules/to-integer/index.js?");

/***/ }),

/***/ "../node_modules/to-str/index.js":
/*!***************************************!*\
  !*** ../node_modules/to-str/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* global Symbol */\n\nvar isNil      = __webpack_require__(/*! is-nil */ \"../node_modules/is-nil/index.js\");\nvar isSymbol   = __webpack_require__(/*! is-symbol */ \"../node_modules/is-symbol/index.js\");\nvar isObject   = __webpack_require__(/*! is-object */ \"../node_modules/is-object/index.js\");\nvar isFunction = __webpack_require__(/*! is-function */ \"../node_modules/is-function/index.js\");\n\nmodule.exports = function (value) {\n\n  if (typeof value === 'string') {\n    return value;\n  }\n\n  if (isNil(value)) {\n    return '';\n  }\n\n  if (isSymbol(value)) {\n    return Symbol.prototype.toString.call(value);\n  }\n\n  if (isObject(value) && isFunction(value.toString)) {\n    return value.toString();\n  }\n\n  var result = '' + value;\n\n  return (result === '0' && (1 / value) === -1 / 0) ? '-0' : result;\n};\n\n\n//# sourceURL=webpack:///../node_modules/to-str/index.js?");

/***/ }),

/***/ "./static/back.jpg":
/*!*************************!*\
  !*** ./static/back.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/back.jpg\";\n\n//# sourceURL=webpack:///./static/back.jpg?");

/***/ }),

/***/ "./static/clickhouse.jpg":
/*!*******************************!*\
  !*** ./static/clickhouse.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/clickhouse.jpg\";\n\n//# sourceURL=webpack:///./static/clickhouse.jpg?");

/***/ }),

/***/ "./static/denis.jpg":
/*!**************************!*\
  !*** ./static/denis.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/denis.jpg\";\n\n//# sourceURL=webpack:///./static/denis.jpg?");

/***/ }),

/***/ "./static/deusops.jpg":
/*!****************************!*\
  !*** ./static/deusops.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/deusops.jpg\";\n\n//# sourceURL=webpack:///./static/deusops.jpg?");

/***/ }),

/***/ "./static/front.jpg":
/*!**************************!*\
  !*** ./static/front.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/front.jpg\";\n\n//# sourceURL=webpack:///./static/front.jpg?");

/***/ }),

/***/ "./static/icpc.jpg":
/*!*************************!*\
  !*** ./static/icpc.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/icpc.jpg\";\n\n//# sourceURL=webpack:///./static/icpc.jpg?");

/***/ }),

/***/ "./static/lera-gif.gif":
/*!*****************************!*\
  !*** ./static/lera-gif.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/lera-gif.gif\";\n\n//# sourceURL=webpack:///./static/lera-gif.gif?");

/***/ }),

/***/ "./static/sns.jpg":
/*!************************!*\
  !*** ./static/sns.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/sns.jpg\";\n\n//# sourceURL=webpack:///./static/sns.jpg?");

/***/ }),

/***/ "./static/tink.jpg":
/*!*************************!*\
  !*** ./static/tink.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/tink.jpg\";\n\n//# sourceURL=webpack:///./static/tink.jpg?");

/***/ }),

/***/ "./static/valeron.jpg":
/*!****************************!*\
  !*** ./static/valeron.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/valeron.jpg\";\n\n//# sourceURL=webpack:///./static/valeron.jpg?");

/***/ }),

/***/ "./static/vyazma.jpg":
/*!***************************!*\
  !*** ./static/vyazma.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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