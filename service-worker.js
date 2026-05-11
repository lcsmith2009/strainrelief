const CACHE_NAME="v50-first-screen-fit";
const APP_SHELL=["./","./index.html","./style.css","./app.js","./manifest.json","./logo.png","./logo-hero.png","./logo-mark.png","./icon-192.png","./icon-512.png","./images/strains/fallback.webp"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).catch(()=>null));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy)).catch(()=>{});return r}).catch(()=>caches.match(e.request).then(c=>c||caches.match("./index.html"))))});
