main.js

1. check if server worker is supported

2. Register SW Worker in main.js

- Make sure update on reload is checked

sw.js

3. Add Install Events

- preserve console log

4. caching

- cache individual pages, good for small websites

  - 5.create cachename, cacheassets
  - 6.install event handle this
    waitUntil promise is over
    skipwaiting
  - 7. Delete Old Cache
  - 8. Show files when offline, Fetch Event

- cache whole response
  - copy first file
  - remove cachename
  - clear sw install function
  - let fetch do the caching work
