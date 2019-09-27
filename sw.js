const VERSION = "v1";

// self is like this, but for service workers
self.addEventListener("install", event => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", event => {
  const request = event.request;

  //use only GET request
  if (request.method !== "GET") {
    return;
  }

  //search on cache
  event.respondWith(cachedResponse(request));

  //update cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    // "/"
    // "/index.html",
    // "/assets/index.css",
    // "/assets/index.js",
    // "/assets/MediaPlayer.js",
    // "/assets/plugins/AutoPause.js",
    // "/assets/plugins/AutoPlay.js"
    // "/assets/BigBuckBunny.mp4"
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);

  const response = await cache.match(request);

  //if response is not cached, so fetch request to networkƒ
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
