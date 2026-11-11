const CACHE_NAME = 'bg-emprestimos-v1';

// O Android Chrome exige um Service Worker com evento 'fetch' para liberar o botão Instalar
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Apenas repassa a requisição. Suficiente para enganar a verificação do Android.
    event.respondWith(fetch(event.request).catch(() => new Response("Sem conexão")));
});
