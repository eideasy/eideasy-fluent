import EidEasy from './EidEasy';

(function () {
  const {docId, clientId, apiUrl} = window.signingConfig;
  const buttons = Array.from(document.querySelectorAll('[data-action-type]'));
  const eideasy = new EidEasy(
    apiUrl,
    (response) => {
      console.log('SUCCESS logged in sign.blade.php :')
      console.log(response);
      alert('SUCCESS, SIGNATURE DONE');
    },
    (error) => {
      console.log('ERROR logged in sign.blade.php :')
      console.log(error);
    },
  );

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const actionType = button.dataset.actionType;
      const country = document.getElementById('countrySelect').value;
      eideasy.start({
        clientId,
        docId,
        actionType,
        country,
      });
    });
  });
})()
