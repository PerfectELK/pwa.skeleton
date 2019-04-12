importScripts('/pwa.skeleton/sw-toolbox.js');

toolbox.precache(["/index.html","/pwa.skeleton/style/style.css"]);
toolbox.router.get('/pwa.skeleton/src/images/*', toolbox.cacheFirst);
toolbox.router.get('/pwa.skeleton/*', toolbox.networkFirst, {networkTimeoutSeconds: 5});