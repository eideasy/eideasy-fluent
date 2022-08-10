/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/EidEasy.ts ***!
  \*********************************/
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
    window.location.href = "".concat(this.baseUrl, "/single-method-signature?client_id=").concat(clientId, "&doc_id=").concat(docId, "&method=").concat(actionType, "&country=").concat(country);
  };

  return EidEasy;
}();

window.EidEasy = EidEasy;
/******/ })()
;