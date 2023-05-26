import EidEasy from './EidEasy';

const renderResult = function renderResult(container, content) {
  container.innerHTML = `<div>${content.message}</div>`;
  let subContent = null;
  if (content.error) {
    subContent = content.error.message
  } else if (content.response) {
    subContent = content.response;
  }

  const subContentHtml = `<div><pre>${JSON.stringify(subContent, null, 2)}</pre></div>`;
  container.insertAdjacentHTML('beforeend', subContentHtml);
  container.classList.remove('hidden');
};

const clearRenderedResult = function clearRenderedResult(container) {
  container.classList.add('hidden');
};

(function () {
  const {docId, clientId, apiUrl} = window.signingConfig;
  const buttons = Array.from(document.querySelectorAll('[data-action-type]'));
  const resultContainer = document.getElementById('js-result-container');
  console.log(resultContainer);
  const eideasy = new EidEasy({
    baseUrl: apiUrl,
    onSuccess: (response) => {
      console.log('SUCCESS logged in sign.blade.php :')
      console.log(response);
      renderResult(resultContainer, {
        message: 'SUCCESS',
        response,
      });
    },
    onFail: (error) => {
      console.log('ERROR logged in sign.blade.php :')
      console.log(error);
      renderResult(resultContainer, {
        message: 'FAIL',
        error,
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
      clearRenderedResult(resultContainer);
      eideasy.start({
        clientId,
        docId,
        actionType,
        country,
      });
    });
  });
})()
