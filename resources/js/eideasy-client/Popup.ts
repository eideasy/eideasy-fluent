import {PopupPosition} from "./PopupPosition";

class Popup {
  private popup = null;
  private readonly parentWindow = null;
  private popupWidth = 800;
  private popupHeight = 600;

  constructor(parentWindow: Window) {
    this.parentWindow = parentWindow;
  }

  private calculatePopupPosition(parentWindow: Window, popupWidth: number, popupHeight: number): PopupPosition {
    // center the child window relative to the parent window
    return {
      left: (parentWindow.outerWidth / 2) - (popupWidth / 2) + parentWindow.screenLeft,
      top: (parentWindow.outerHeight / 2) - (popupHeight / 2) + parentWindow.screenTop,
    };
  }

  private getPopupFeatures(width: number, height: number, left: number, top: number): Array<string> {
    return [
      'toolbar=no',
      'location=no',
      'directories=no',
      'status=no',
      'menubar=no',
      'scrollbars=no',
      'resizable=no',
      'copyhistory=no',
      `width=${width}`,
      `height=${height}`,
      `left=${left}`,
      `top=${top}`,
    ];
  }

  public open(url: string, onClosed: Function): void {
    if (this.popup) {
      return;
    }

    const position: PopupPosition = this.calculatePopupPosition(this.parentWindow, this.popupWidth, this.popupHeight);
    const features: Array<string> = this.getPopupFeatures(this.popupWidth, this.popupHeight, position.left, position.top);

    this.popup = this.parentWindow.open(url, 'eID Easy', features.join((', ')));

    const timer = setInterval(() => {
      if (this.popup.closed) {
        clearInterval(timer);
        if (onClosed) {
          onClosed();
        }
      }
    }, 300);
  }
}

export default Popup;
