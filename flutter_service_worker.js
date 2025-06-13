'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1679ad0e185827af513948025a468fc2",
"assets/AssetManifest.bin.json": "afabcb736ac6c94ba1a7e0a4c28c0ec9",
"assets/AssetManifest.json": "42466db926be82c2ea53d5804809b073",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f19115ee7d959cff80418e98ffafd583",
"assets/lib/images/19841-039a8c5f61dee95ec316324958058653-640-0.png": "23b64101492c8cdd618d22f23bd83f3f",
"assets/lib/images/6572585.jpg": "f2ba9f9b7c7f1c08a77dc7de94c16ab2",
"assets/lib/images/71ASLjQvWLL._AC_UF1000,1000_QL80_.jpg": "2ff07141c6ad366a0c0bedabb5025e67",
"assets/lib/images/767038091b7f27b6c38b4700ace0c515.jpg": "8a5febe11c99f71d2fec271bb0b8ae06",
"assets/lib/images/7e2fcd7f203788a28a7c492717ed9a5b.jpg": "22848b390423b7582cfefd05f251bb9c",
"assets/lib/images/avatar.png": "0c03c6ca371c9c1c18a3d6bb5bf947e7",
"assets/lib/images/bola.png": "304a342ea8c3353bfc693f112e985fde",
"assets/lib/images/carousel0.jpg": "148913e0a92e40ea2773c9e4a24d69fb",
"assets/lib/images/carousel1.jpg": "87d434e4900077c7eaea2077b536afb1",
"assets/lib/images/carousel2.jpg": "feb731243df7fa93cb83f622d93630bb",
"assets/lib/images/carousel3.jpg": "e37cbcc4d61eaeb36575501191a456b8",
"assets/lib/images/carousel4.jpg": "11ef37752199c2320c876277244b1276",
"assets/lib/images/ce3f7069-0fe3-4496-a318-5b5ba005495d_cover.jpg": "c30eb0189eb76ec167cca2793831db77",
"assets/lib/images/escaner.png": "6eee0a5c7cad31728462b778220c2238",
"assets/lib/images/eye.jpg": "f42b0529f79cfb270418c62db00d7450",
"assets/lib/images/Home.png": "8f734883f05079d53049500fcf92ff4f",
"assets/lib/images/images.jpeg": "4d2d53f70c4813999416458c53c9403d",
"assets/lib/images/kundera.jpg": "d04913504fa3e5e2dea902adaa97b711",
"assets/lib/images/logo.png": "1e3b9b2b8748cd5b7a2bbfc2ab317abd",
"assets/lib/images/qr1.png": "6362f027032d6391694a2407f0d41767",
"assets/lib/images/qr2.png": "857f5ff3610ddcd16358f6c4908c4a91",
"assets/lib/images/splash.jpg": "d90a71bf9a372ea8bafa4e37f57f7aaa",
"assets/lib/images/splash512.png": "d6e27b457f70aea0508f49212d32ec7a",
"assets/lib/images/wallpaper.jpg": "7700e047d67fff814b861dc1ad347788",
"assets/lib/images/wallpaper.png": "e7c06eeca44838e3eba4b2d3f101335d",
"assets/lib/images/wallpaper1.jpg": "670407a9ac1405b485130195c31c4260",
"assets/lib/images/wallpaper2.jpg": "9bc532b19ffb5d462407ca10faf89e83",
"assets/lib/images/wallpaper3.jpg": "04e3072bd48e2fb082fbe6ed49a307d9",
"assets/NOTICES": "7b7bee3212de1ffc27e44e02302aac5c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.jpg": "d90a71bf9a372ea8bafa4e37f57f7aaa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e8f7a9b5b37cf7c297abf4b7207d7274",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e2892d1ca96328a3d8e4bf1eab44fa3e",
"/": "e2892d1ca96328a3d8e4bf1eab44fa3e",
"main.dart.js": "1187b1a68067a1fc8368c2f6bd8b0462",
"manifest.json": "2d30e47a796a2f48a3f936e41290e7de",
"version.json": "18e550ffd60ca982e5ce27eed778346e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
