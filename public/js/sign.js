/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/EidEasy.ts":
/*!*********************************!*\
  !*** ./resources/js/EidEasy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var windowOpen_1 = __webpack_require__(/*! ./windowOpen */ "./resources/js/windowOpen.ts");

var EidEasy =
/** @class */
function () {
  function EidEasy(_a) {
    var _b = _a.baseUrl,
        baseUrl = _b === void 0 ? "https://id.eideasy.com" : _b,
        _c = _a.onSuccess,
        onSuccess = _c === void 0 ? function () {} : _c,
        _d = _a.onFail,
        onFail = _d === void 0 ? function () {} : _d,
        _e = _a.onPopupWindowClosed,
        onPopupWindowClosed = _e === void 0 ? function () {} : _e;
    this.baseUrl = baseUrl;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
    this.onPopupWindowClosed = onPopupWindowClosed;
    this.messageHandler = this.handleMessage.bind(this);
    window.addEventListener('message', this.messageHandler);
  }

  EidEasy.prototype.handleMessage = function (event) {
    var data = event.data;

    if (data.sender !== 'EIDEASY_SINGLE_METHOD_SIGNATURE') {
      return;
    }

    if (data.type === 'SUCCESS') {
      this.handleSuccess(data.result);
    } else if (data.type === 'FAIL') {
      this.handleFail(data.error);
    }
  };

  EidEasy.prototype.start = function (_a) {
    var clientId = _a.clientId,
        docId = _a.docId,
        actionType = _a.actionType,
        country = _a.country;

    var _self = this;

    var url = "".concat(this.baseUrl, "/single-method-signature?client_id=").concat(clientId, "&doc_id=").concat(docId, "&method=").concat(actionType, "&country=").concat(country);
    var windowOpenResult = (0, windowOpen_1["default"])({
      url: url,
      onClosed: _self.onPopupWindowClosed
    });
    _self.openedWindow = windowOpenResult.window;
  };

  EidEasy.prototype.handleSuccess = function (result) {
    this.openedWindow.close();
    this.onSuccess(result);
  };

  EidEasy.prototype.handleFail = function (error) {
    this.onFail(error);
  };

  EidEasy.prototype.destroy = function () {
    window.removeEventListener('message', this.messageHandler);
  };

  return EidEasy;
}();

exports["default"] = EidEasy;

/***/ }),

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/sign.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EidEasy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EidEasy */ "./resources/js/EidEasy.ts");


var renderResult = function renderResult(container, content) {
  container.innerHTML = "<div>".concat(content.message, "</div>");
  var subContent = null;

  if (content.error) {
    subContent = content.error.message;
  } else if (content.response) {
    subContent = content.response;
  }

  var subContentHtml = "<div><pre>".concat(JSON.stringify(subContent, null, 2), "</pre></div>");
  container.insertAdjacentHTML('beforeend', subContentHtml);
  container.classList.remove('hidden');
};

var clearRenderedResult = function clearRenderedResult(container) {
  container.classList.add('hidden');
};

(function () {
  var _window$signingConfig = window.signingConfig,
      docId = _window$signingConfig.docId,
      clientId = _window$signingConfig.clientId,
      apiUrl = _window$signingConfig.apiUrl;
  var buttons = Array.from(document.querySelectorAll('[data-action-type]'));
  var resultContainer = document.getElementById('js-result-container');
  console.log(resultContainer);
  var eideasy = new _EidEasy__WEBPACK_IMPORTED_MODULE_0__["default"]({
    baseUrl: apiUrl,
    onSuccess: function onSuccess(response) {
      console.log('SUCCESS logged in sign.blade.php :');
      console.log(response);
      renderResult(resultContainer, {
        message: 'SUCCESS',
        response: response
      });
    },
    onFail: function onFail(error) {
      console.log('ERROR logged in sign.blade.php :');
      console.log(error);
      renderResult(resultContainer, {
        message: 'FAIL',
        error: error
      });
    },
    onPopupWindowClosed: function onPopupWindowClosed() {
      console.log('POPUP WINDOW CLOSED logged in sign.blade.php');
    }
  });
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      var actionType = button.dataset.actionType;
      var country = document.getElementById('countrySelect').value;
      clearRenderedResult(resultContainer);
      eideasy.start({
        clientId: clientId,
        docId: docId,
        actionType: actionType,
        country: country
      });
    });
  });
})();
})();

/******/ })()
;