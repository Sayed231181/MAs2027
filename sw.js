const C="mas2027-v1";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.json","firebase-config.js"])))});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);
 if(e.request.method!="GET"||(u.hostname.endsWith("googleapis.com")&&!u.pathname.includes("/firebasejs/")))return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok&&(u.origin==location.origin||u.hostname=="www.gstatic.com")){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request)))});
