const cacheName = "v1";
const cacheAssets = [
  "index.html",
  "about.html",
  "/css/style.css",
  "/js/main.js"
];

// Call Install Event
self.addEventListener("install", e => {
  console.log("Service Worker Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log("service worker: caching files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", e => {
  console.log("Service Worker Activate");
  // Remove unwanted caches

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
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
self.addEventListener("fetch", e => {
  console.log("sw fetching only");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
