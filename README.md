
# eID Easy simple integration demo in PHP/Laravel
This is a demo to show how easy it is to use eID Easy to collect strong electronic signatures in your own web app.
But don't take our word on it - see for yourself: [SignatureController.php](https://github.com/eideasy/simple-demo-php/blob/master/app/Http/Controllers/SignatureController.php)

## Would you like to run this app on your own infrastructure?
1. Get eID Easy API credentials by following this short guide
2. Use the API credentials for `EID_CLIENT_ID` and `EID_SECRET` env values in the following steps
   1. Run this app via `docker-compose up`, or
   2. one-click deploy to Google Cloud Run:

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?git_repo=https://github.com/eideasy/simple-demo-php&revision=master)

PS! And don't forget to check out our extensive [documentation](https://eideasy-docs.netlify.app/)!
