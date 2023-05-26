import windowOpen from "./windowOpen";

class EidEasy {
  baseUrl: string;
  openedWindow: Window;
  onSuccess: Function;
  onFail: Function;
  messageHandler: EventListenerOrEventListenerObject;

  constructor(
    baseUrl: string = "https://id.eideasy.com",
    onSuccess: Function = () => {},
    onFail: Function = () => {},
  ) {
    this.baseUrl = baseUrl;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
    this.messageHandler = this.handleMessage.bind(this);

    window.addEventListener('message', this.messageHandler);
  }

  handleMessage(event) {
    console.log('message received');
    console.log(event);
    const {data} = event;

    if (data.sender !== 'EIDEASY_SINGLE_METHOD_SIGNATURE') {
      return;
    }

    if (data.type === 'SUCCESS') {
      this.handleSuccess(data.result);
    } else if (data.type === 'FAIL') {
      this.handleFail(data.error);
    }
  }

  start({
    clientId,
    docId,
    actionType,
    country
  }) {
    const _self = this;
    const url = `${this.baseUrl}/single-method-signature?client_id=${clientId}&doc_id=${docId}&method=${actionType}&country=${country}`;
    const windowOpenResult = windowOpen({
      url,
      onClosed: () => {
        console.log('closed');
      }
    });

    this.openedWindow = windowOpenResult.window;
  }

  handleSuccess(result) {
    console.log('handleSuccess in EidEasy.ts');
    console.log(result);
    this.openedWindow.close();
    this.onSuccess(result);
  }

  handleFail(error) {
    console.log('handleFail in EidEasy.ts');
    console.log(error);
    this.onFail(error);
  }

  destroy() {
    window.removeEventListener('message', this.messageHandler);
  }
}

export default EidEasy;
