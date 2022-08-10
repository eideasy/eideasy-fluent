class EidEasy {
  baseUrl: string;

  constructor(baseUrl: string = "https://id.eideasy.com") {
    this.baseUrl = baseUrl;
  }

  start(clientId: string, docId: string, actionType: string, country: string) {
    window.location.href = `${this.baseUrl}/single-method-signature?client_id=${clientId}&doc_id=${docId}&method=${actionType}&country=${country}`;
  }
}

window.EidEasy = EidEasy;
