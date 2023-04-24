import windowOpen from "./windowOpen";

class EidEasy {
  baseUrl: string;

  constructor(baseUrl: string = "https://id.eideasy.com") {
    this.baseUrl = baseUrl;
  }

  private createOverlay(src: string) {
    const div = document.createElement('div');
    div.innerHTML = `<div id="overlay" style="z-index: 9999999; width: 100vw; height: 100%; overflow: auto; background: rgba(0, 0, 0, 0.6); position: fixed !important; inset: 0px !important; display: block !important; margin: 0px !important; padding: 0px !important;"><iframe src="${src}" allow="autoplay; camera; microphone" id="veriffFrame" style="width: 100vw; max-width: 600px; height: 700px;  background: none; border: none; position: absolute !important; inset: 0px !important; margin: 30px auto !important; padding: 0px !important;"></iframe></div>`.trim();
    return div.firstChild;
  }

  start(clientId: string, docId: string, actionType: string, country: string) {
    const url = `${this.baseUrl}/single-method-signature?client_id=${clientId}&doc_id=${docId}&method=${actionType}&country=${country}`;
    windowOpen({
      url,
      onClosed: () => {
        console.log('closed');
      }
    })
  }
}

window.EidEasy = EidEasy;
