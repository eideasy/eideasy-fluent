import windowOpen from "./windowOpen";

class EidEasy {
  baseUrl: string;
  openedWindow: Window;
  onSuccess: Function;
  onFail: Function;

  constructor(
    baseUrl: string = "https://id.eideasy.com",
    onSuccess: Function = () => {},
    onFail: Function = () => {},
  ) {
    this.baseUrl = baseUrl;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
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

    window.addEventListener('message', (event) => {
      console.log('message received');
      console.log(event);
      const {data} = event;

      if (data.sender !== 'EIDEASY_SINGLE_METHOD_SIGNATURE') {
        return;
      }

      if (data.type === 'SUCCESS') {
        _self.handleSuccess(data.result);
      } else if (data.type === 'FAIL') {
        _self.handleFail(data.error);
      }
    });
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
}

window.EidEasy = EidEasy;
