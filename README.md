
# eID Easy simple integration demo in PHP/Laravel
This is a demo to show how easy it is to use eID Easy to collect strong electronic signatures in your own web app.

## Run for development
### On Windows
`docker build -t eideasy-fluent-image .`
`docker run --name fluent-container -p 8089:8080 -v %cd%:/var/www eideasy-fluent-image`

## Would you like to run this app on your own infrastructure?
1. Get eID Easy API credentials by following this [short guide](https://eideasy-docs.netlify.app/guide/api-credentials.html)
2. Use the API credentials for `EID_CLIENT_ID` and `EID_SECRET` env values
3. Run this app via `docker-compose up`


