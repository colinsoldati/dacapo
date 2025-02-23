const cacheName = 'dacapo-cache-v1';
const assets = [
  'index.html',
  'login.html',
  'signup.html',
  'styles.css',
  'manifest.json',
  // Ajoute ici tous les fichiers statiques nécessaires
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
