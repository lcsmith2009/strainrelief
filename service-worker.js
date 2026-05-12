const CACHE_NAME = "strainrelief-v91-full-app-stability-reset";
const APP_SHELL = ["./", "./index.html", "./style.css", "./app.js", "./manifest.json"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).catch(()=>null)); self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key === CACHE_NAME ? null : caches.delete(key))))); self.clients.claim(); });
self.addEventListener("fetch", event => { if(event.request.method !== "GET") return; event.respondWith(fetch(event.request, {cache:"no-store"}).then(response => { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request, copy)).catch(()=>{}); return response; }).catch(() => caches.match(event.request).then(cached => cached || caches.match("./index.html")))); });
