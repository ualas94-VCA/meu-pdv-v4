const CACHE_NAME = 'contingencia-v1';
// Lista de arquivos que devem ser salvos para funcionar offline
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instalação: Salva os arquivos no cache do navegador
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Interceptação: Se estiver offline, busca do cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});