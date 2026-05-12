const CACHE_NAME='strainrelief-v93-emergency-scroll-data-restore';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{});
