const CACHE='hydropool-v5-20261028';
const ASSETS=['./','./index.html','./styles.css','./script.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(async cache=>{await Promise.allSettled(ASSETS.map(url=>cache.add(url)));}).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('hydropool-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy)).catch(()=>{});}return response}).catch(()=>caches.match(request).then(hit=>hit||caches.match('./index.html'))))});
