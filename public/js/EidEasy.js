/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/eideasy-client/Popup.ts":
/*!**********************************************!*\
  !*** ./resources/js/eideasy-client/Popup.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Popup =
/** @class */
function () {
  function Popup(parentWindow) {
    this.popup = null;
    this.parentWindow = null;
    this.popupWidth = 800;
    this.popupHeight = 600;
    this.parentWindow = parentWindow;
  }

  Popup.prototype.calculatePopupPosition = function (parentWindow, popupWidth, popupHeight) {
    // center the child window relative to the parent window
    return {
      left: parentWindow.outerWidth / 2 - popupWidth / 2 + parentWindow.screenLeft,
      top: parentWindow.outerHeight / 2 - popupHeight / 2 + parentWindow.screenTop
    };
  };

  Popup.prototype.getPopupFeatures = function (width, height, left, top) {
    return ['toolbar=no', 'location=no', 'directories=no', 'status=no', 'menubar=no', 'scrollbars=no', 'resizable=no', 'copyhistory=no', "width=".concat(width), "height=".concat(height), "left=".concat(left), "top=".concat(top)];
  };

  Popup.prototype.open = function (url, onClosed) {
    var _this = this;

    if (this.popup) {
      return;
    }

    var position = this.calculatePopupPosition(this.parentWindow, this.popupWidth, this.popupHeight);
    var features = this.getPopupFeatures(this.popupWidth, this.popupHeight, position.left, position.top);
    this.popup = this.parentWindow.open(url, 'eID Easy', features.join(', '));
    var timer = setInterval(function () {
      if (_this.popup.closed) {
        clearInterval(timer);

        if (onClosed) {
          onClosed();
        }
      }
    }, 300);
  };

  return Popup;
}();

exports["default"] = Popup;

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
/*!************************************************!*\
  !*** ./resources/js/eideasy-client/EidEasy.ts ***!
  \************************************************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Popup_1 = __webpack_require__(/*! ./Popup */ "./resources/js/eideasy-client/Popup.ts");

var EidEasy =
/** @class */
function () {
  function EidEasy(baseUrl) {
    if (baseUrl === void 0) {
      baseUrl = "https://id.eideasy.com";
    }

    this.baseUrl = baseUrl;
  }

  EidEasy.prototype.start = function (clientId, docId, actionType, country) {
    var popup = new Popup_1["default"](window);
    var url = "".concat(this.baseUrl, "/single-method-signature?client_id=").concat(clientId, "&doc_id=").concat(docId, "&method=").concat(actionType, "&country=").concat(country);
    popup.open(url, function () {
      return console.log('POPUP CLOSED');
    });
  };

  return EidEasy;
}();

window.EidEasy = EidEasy;
})();

/******/ })()
;