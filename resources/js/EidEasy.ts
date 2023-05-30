import windowOpen from "./windowOpen";

class EidEasy {
  baseUrl: string;
  openedWindow: Window;
  onSuccess: Function;
  onFail: Function;
  onPopupWindowClosed: Function;
  messageHandler: EventListenerOrEventListenerObject;

  constructor({
    baseUrl = "https://id.eideasy.com",
    onSuccess = () => {},
    onFail = () => {},
    onPopupWindowClosed = () => {},
  }: {
    baseUrl: string,
    onSuccess: Function,
    onFail: Function,
    onPopupWindowClosed: Function,
  }) {
    this.baseUrl = baseUrl;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
    this.onPopupWindowClosed = onPopupWindowClosed;
    this.messageHandler = this.handleMessage.bind(this);

    window.addEventListener('message', this.messageHandler);
  }

  handleMessage(event) {
    const {data} = event;

    if (data.sender !== 'EIDEASY_SINGLE_METHOD_SIGNATURE') {
      return;
    }

    if (data.type === 'SUCCESS') {
      this.handleSuccess(data.result);
    } else if (data.type === 'FAIL') {
      this.handleFail(data.error, data.isRetryAllowed);
    }
  }

  start({
    clientId,
    docId,
    actionType,
    country
  }) {
    const _self = this;
    const url: string = `${this.baseUrl}/single-method-signature?client_id=${clientId}&doc_id=${docId}&method=${actionType}&country=${country}`;
    const windowOpenResult = windowOpen({
      url,
      onClosed: _self.onPopupWindowClosed,
    });

    _self.openedWindow = windowOpenResult.window;
  }

  handleSuccess(result) {
    this.openedWindow.close();
    this.onSuccess(result);
  }

  handleFail(error, isRetryAllowed) {
    if (!isRetryAllowed) {
      this.openedWindow.close();
    }
    this.onFail(error);
  }

  destroy() {
    window.removeEventListener('message', this.messageHandler);
  }
}

export default EidEasy;
