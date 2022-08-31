import Popup from "./Popup";

class EidEasy {
  baseUrl: string;

  constructor(baseUrl: string = "https://id.eideasy.com") {
    this.baseUrl = baseUrl;
  }
  
  start(clientId: string, docId: string, actionType: string, country: string): void {
    const popup = new Popup(window);
    const url = `${this.baseUrl}/single-method-signature?client_id=${clientId}&doc_id=${docId}&method=${actionType}&country=${country}`;
    popup.open(url, () => console.log('POPUP CLOSED'));
  }
}

window.EidEasy = EidEasy;
