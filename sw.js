const CACHE_NAME = 'ibeg-planificador-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js'
];

// INSTALL
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Error en cache:', err))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH
self.addEventListener('fetch', event => {
  // Solo cachear GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en cache, devolverlo
        if (response) {
          return response;
        }

        // Si no, intentar obtenerlo de internet
        return fetch(event.request).then(response => {
          // No cachear requests que no sean exitosas
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // Clonar la respuesta
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(err => {
        console.log('Error en fetch:', err);
        // Opcionalmente retornar una página offline
      })
  );
});

// BACKGROUND SYNC (para sincronizar datos cuando vuelva internet)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-cultos') {
    event.waitUntil(syncCultos());
  }
});

async function syncCultos() {
  try {
    console.log('Sincronizando datos...');
    // Aquí iría la lógica para sincronizar con backend en el futuro
  } catch (err) {
    console.log('Error en sincronización:', err);
    throw err;
  }
}
