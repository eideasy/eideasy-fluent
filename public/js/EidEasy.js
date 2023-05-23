/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/windowOpen.ts":
/*!************************************!*\
  !*** ./resources/js/windowOpen.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateChildPosition = void 0;

var calculateChildPosition = function calculateChildPosition(_a) {
  var parent = _a.parent,
      child = _a.child; // center the child window relative to the parent window

  return {
    left: parent.width / 2 - child.width / 2 + parent.left,
    top: parent.height / 2 - child.height / 2 + parent.top
  };
};

exports.calculateChildPosition = calculateChildPosition;

var windowOpen = function windowOpen(_a) {
  var url = _a.url,
      onClosed = _a.onClosed;
  var child = {
    width: 800,
    height: 600
  };
  var childPosition = calculateChildPosition({
    parent: {
      width: window.outerWidth,
      height: window.outerHeight,
      left: window.screenLeft,
      top: window.screenTop
    },
    child: child
  });
  var features = ['toolbar=no', 'location=no', 'directories=no', 'status=no', 'menubar=no', 'scrollbars=no', 'resizable=no', 'copyhistory=no', "width=".concat(child.width), "height=".concat(child.height), "left=".concat(childPosition.left), "top=".concat(childPosition.top)];
  var newWindow = window.open(url, 'eID Easy', features.join(', '));
  var timer = setInterval(function () {
    if (newWindow.closed) {
      clearInterval(timer);
      onClosed();
    }
  }, 500);
  return {
    window: newWindow
  };
};

exports["default"] = windowOpen;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************************!*\
  !*** ./resources/js/EidEasy.ts ***!
  \*********************************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var windowOpen_1 = __webpack_require__(/*! ./windowOpen */ "./resources/js/windowOpen.ts");

var EidEasy =
/** @class */
function () {
  function EidEasy(baseUrl, onSuccess, onFail) {
    if (baseUrl === void 0) {
      baseUrl = "https://id.eideasy.com";
    }

    if (onSuccess === void 0) {
      onSuccess = function onSuccess() {};
    }

    if (onFail === void 0) {
      onFail = function onFail() {};
    }

    this.baseUrl = baseUrl;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
  }

  EidEasy.prototype.start = function (_a) {
    var clientId = _a.clientId,
        docId = _a.docId,
        actionType = _a.actionType,
        country = _a.country;

    var _self = this;

    var url = "".concat(this.baseUrl, "/single-method-signature?client_id=").concat(clientId, "&doc_id=").concat(docId, "&method=").concat(actionType, "&country=").concat(country);
    var windowOpenResult = (0, windowOpen_1["default"])({
      url: url,
      onClosed: function onClosed() {
        console.log('closed');
      }
    });
    this.openedWindow = windowOpenResult.window;
    window.addEventListener('message', function (event) {
      console.log('message received');
      console.log(event);
      var data = event.data;

      if (data.sender !== 'EIDEASY_SINGLE_METHOD_SIGNATURE') {
        return;
      }

      if (data.type === 'SUCCESS') {
        _self.handleSuccess(data.result);
      } else if (data.type === 'FAIL') {
        _self.handleFail(data.error);
      }
    });
  };

  EidEasy.prototype.handleSuccess = function (result) {
    console.log('handleSuccess in EidEasy.ts');
    console.log(result);
    this.openedWindow.close();
    this.onSuccess(result);
  };

  EidEasy.prototype.handleFail = function (error) {
    console.log('handleFail in EidEasy.ts');
    console.log(error);
    this.onFail(error);
  };

  return EidEasy;
}();

window.EidEasy = EidEasy;
})();

/******/ })()
;