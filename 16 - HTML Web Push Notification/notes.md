https://tests.peter.sh/notification-generator/

https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications

1 server side script , subscribe endpoint
client send subscription object to server

2. install web push , body parser, express

- start script

3. import all modules

4. setup vapid keys with commands
   web-push generate-vapid-keys [--json] / ./node_modules/.bin/web-push
   identify who is sending notification

   save in public and private key

5. webpush setVapidDetails

6. set subscribe route

- get req.body
- send 201
- create payload
- pass object into send notification

7. set static path for client folder
   set up static folders

8. clients.js
   -publicvapid key

- check service worker

9. client.js create send function

- register sw with const register
- register push create subscription
- fetch push json

10. sw.js updated push event
