// import Signature from '../../../../laragon/www/signature-js/dist/eideasy-signature.js';
import Signature from '@eid-easy/signature-js';

(function () {

  const resultContainer = document.getElementById('js-result-container');

  let state = {
    messages: [],
  };

  const renderState = function renderState(state) {
    resultContainer.innerHTML = '';
    state.messages.forEach((message) => {
      const htmlString = `<div><pre>${JSON.stringify(message, null, 2)}</pre></div>`
      resultContainer.insertAdjacentHTML('beforeend', htmlString);
    });
    resultContainer.classList.remove('hidden');
  };

  const createStateUpdater = function createStateUpdater(state) {
    return function (updater) {
      state = updater(state);
      renderState(state);
    };
  }

  const updateState = createStateUpdater(state);


  const {docId, clientId, apiUrl} = window.signingConfig;
  const buttons = Array.from(document.querySelectorAll('[data-action-type]'));

  const signature = new Signature({
    baseUrl: apiUrl,
    onSuccess: (response) => {
      console.log('SUCCESS logged in sign.blade.php :')
      console.log(response);
      updateState((state) => {
        state.messages.push({
          timestamp: new Date().toISOString(),
          message: 'SUCCESS',
        });
        return state;
      });
    },
    onFail: (error) => {
      console.log('ERROR logged in sign.blade.php :')
      console.log(error);
      updateState((state) => {
        state.messages.push({
          timestamp: new Date().toISOString(),
          message: 'FAIL',
          error,
        });
        return state;
      });
    },
    onPopupWindowClosed: () => {
      console.log('POPUP WINDOW CLOSED logged in sign.blade.php')
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const actionType = button.dataset.actionType;
      const country = document.getElementById('countrySelect').value;

      signature.start({
        clientId,
        docId,
        actionType,
        country,
      });
    });
  });
})()
