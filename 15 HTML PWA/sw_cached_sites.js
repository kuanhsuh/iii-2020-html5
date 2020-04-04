const cacheName = "v2";

// Call Install Event
self.addEventListener("install", (e) => {
  console.log("Service Worker Installed");
});

// Call Activate Event
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activate");
  // Remove unwanted caches

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("sw clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
// Load Cache Files Off Line
self.addEventListener("fetch", (e) => {
  console.log("sw fetching only");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Make copy of response
        const resClone = res.clone();
        // Open cache
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      // if connection drops
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
