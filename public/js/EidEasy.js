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

  EidEasy.prototype.createOverlay = function (src) {
    var div = document.createElement('div');
    div.innerHTML = "<div id=\"overlay\" style=\"z-index: 9999999; width: 100vw; height: 100%; overflow: auto; background: rgba(0, 0, 0, 0.6); position: fixed !important; inset: 0px !important; display: block !important; margin: 0px !important; padding: 0px !important;\"><iframe src=\"".concat(src, "\" allow=\"autoplay; camera; microphone\" id=\"veriffFrame\" style=\"width: 100vw; max-width: 600px; height: 700px;  background: none; border: none; position: absolute !important; inset: 0px !important; margin: 30px auto !important; padding: 0px !important;\"></iframe></div>").trim();
    return div.firstChild;
  };

  EidEasy.prototype.start = function (clientId, docId, actionType, country) {
    var iframeSrc = "".concat(this.baseUrl, "/single-method-signature?client_id=").concat(clientId, "&doc_id=").concat(docId, "&method=").concat(actionType, "&country=").concat(country);
    var overlay = this.createOverlay(iframeSrc);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) {
      e.preventDefault();
      overlay.remove();
    });
  };

  return EidEasy;
}();

window.EidEasy = EidEasy;
/******/ })()
;