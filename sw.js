const CACHE_NAME = 'retrocam-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Navigation requests: try network first, fall back to cache
    if (event.request.mode === 'navigate') {
      try {
        const networkResponse = await fetch(event.request);
        cache.put('./index.html', networkResponse.clone());
        return networkResponse;
      } catch (err) {
        const cachedPage = await cache.match('./index.html');
        if (cachedPage) return cachedPage;
        throw err;
      }
    }

    // Static assets: cache-first, then network
    const cached = await cache.match(event.request);
    if (cached) return cached;

    try {
      const networkResponse = await fetch(event.request);
      if (networkResponse && networkResponse.status === 200) {
        cache.put(event.request, networkResponse.clone());
      }
      return networkResponse;
    } catch (err) {
      return cache.match('./index.html');
    }
  })());
});
