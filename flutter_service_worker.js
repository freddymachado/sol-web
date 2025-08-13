'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6ec7aa8e9b51250364bd0d6197d78d24",
"assets/AssetManifest.bin.json": "c7b43d77314306d3cf3a20eb1c64b979",
"assets/AssetManifest.json": "36f9aba9549df672764323e9b29cf083",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "76753cec5be4f098a6a2d98e39fe6c69",
"assets/lib/images/6572585.jpg": "f2ba9f9b7c7f1c08a77dc7de94c16ab2",
"assets/lib/images/767038091b7f27b6c38b4700ace0c515.jpg": "8a5febe11c99f71d2fec271bb0b8ae06",
"assets/lib/images/7e2fcd7f203788a28a7c492717ed9a5b.jpg": "22848b390423b7582cfefd05f251bb9c",
"assets/lib/images/autoridades0.jpg": "f8a50bb02b5e9c31002aeef91565b0ff",
"assets/lib/images/autoridades1.jpg": "f9a2ab0293c01ad70cef1abe98d4f73e",
"assets/lib/images/autoridades2.jpg": "9641c50cc82dff429a2d198581bfbb31",
"assets/lib/images/autoridades3.jpg": "8e3b8a470d09263cc7cf46fad8ced322",
"assets/lib/images/autoridades4.jpg": "f265ccd444162c7f77e1cbe734dffad7",
"assets/lib/images/autoridades5.jpg": "145127dd4a2142ec9a99e959f318d7f8",
"assets/lib/images/autoridades6.jpg": "cce1497803d0a017fe97f4486e633e08",
"assets/lib/images/avatar.png": "0c03c6ca371c9c1c18a3d6bb5bf947e7",
"assets/lib/images/bola.png": "304a342ea8c3353bfc693f112e985fde",
"assets/lib/images/carousel0.jpg": "148913e0a92e40ea2773c9e4a24d69fb",
"assets/lib/images/carousel1.jpg": "87d434e4900077c7eaea2077b536afb1",
"assets/lib/images/carousel2.jpg": "feb731243df7fa93cb83f622d93630bb",
"assets/lib/images/carousel3.jpg": "e37cbcc4d61eaeb36575501191a456b8",
"assets/lib/images/carousel4.jpg": "11ef37752199c2320c876277244b1276",
"assets/lib/images/categories_escanear.png": "11a4b4aa4d390a53def5591147ef9f0a",
"assets/lib/images/codigo_qr_agua.png": "1a7209708d10343be11a5e4574fe99d9",
"assets/lib/images/codigo_qr_naranja.png": "1f524043b0d8501c9d67d1cbf9be3a9a",
"assets/lib/images/costes.png": "795a1ddc6ffd3b9f529e12bff9f995d0",
"assets/lib/images/deploy.ps1": "eab963ab7c01c4bc8f31ebde852ce0cd",
"assets/lib/images/escaner.png": "6eee0a5c7cad31728462b778220c2238",
"assets/lib/images/eye.jpg": "f42b0529f79cfb270418c62db00d7450",
"assets/lib/images/Home.png": "8f734883f05079d53049500fcf92ff4f",
"assets/lib/images/horarios.png": "7e2b63e0b160da241fa275ae807860b7",
"assets/lib/images/images.jpeg": "4d2d53f70c4813999416458c53c9403d",
"assets/lib/images/inntro.gif": "7743fbcb77d6872ce574ebe0aa74618f",
"assets/lib/images/kundera.jpg": "d04913504fa3e5e2dea902adaa97b711",
"assets/lib/images/logo.png": "1e3b9b2b8748cd5b7a2bbfc2ab317abd",
"assets/lib/images/logo_animado.gif": "02b5e306d70f9b7c8f428a6efe6a155f",
"assets/lib/images/mantener.png": "c9d404dc7bedcf8a8801de0381af458c",
"assets/lib/images/master.jpg": "846d08e4c51b68502583bff1220c813a",
"assets/lib/images/qr1.png": "6362f027032d6391694a2407f0d41767",
"assets/lib/images/qr2.png": "857f5ff3610ddcd16358f6c4908c4a91",
"assets/lib/images/qr_page1.JPG": "834ee0e2d47bc2d9199fd91556748c62",
"assets/lib/images/splash.jpg": "d90a71bf9a372ea8bafa4e37f57f7aaa",
"assets/lib/images/splash512.png": "d6e27b457f70aea0508f49212d32ec7a",
"assets/lib/images/wallpaper.jpg": "7700e047d67fff814b861dc1ad347788",
"assets/lib/images/wallpaper.png": "e7c06eeca44838e3eba4b2d3f101335d",
"assets/lib/images/wallpaper1.jpg": "670407a9ac1405b485130195c31c4260",
"assets/lib/images/wallpaper2.jpg": "9bc532b19ffb5d462407ca10faf89e83",
"assets/lib/images/wallpaper3.jpg": "04e3072bd48e2fb082fbe6ed49a307d9",
"assets/NOTICES": "80d262762bc575f45315a104785d037c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/syncfusion_flutter_calendar/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_calendar/assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
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
"favicon.png": "1e3b9b2b8748cd5b7a2bbfc2ab317abd",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2aac902ca96ece562c471af33a019dc4",
"icons/Icon-512.png": "1e3b9b2b8748cd5b7a2bbfc2ab317abd",
"icons/LargeTile.scale-100.png": "72793d8209b253405c1c6be81aaebbf9",
"icons/LargeTile.scale-125.png": "8cf221401dc0d6320f721fa527b19f49",
"icons/LargeTile.scale-150.png": "c7b63931691f17bfe893e981cebccc1b",
"icons/LargeTile.scale-200.png": "a79f2f530dd6def3b61d62f6f1c48f4c",
"icons/LargeTile.scale-400.png": "3be9fc455d0a08990f1a6fd4be1b1a9d",
"icons/SmallTile.scale-100.png": "c639955ab294f9acd81a172b0a40fea3",
"icons/SmallTile.scale-125.png": "276245f6f2e2f9baea85af585742088b",
"icons/SmallTile.scale-150.png": "4de254dfbbaf1a9311994cf77acce7fa",
"icons/SmallTile.scale-200.png": "6b1de3c973284a1321b5283003bf53e5",
"icons/SmallTile.scale-400.png": "1dfcf6b99bade30d86395ec7564f459d",
"icons/SplashScreen.scale-100.png": "5e667bd3145ad8b20681486799715692",
"icons/SplashScreen.scale-125.png": "aee6b4a6af34992076ea680c7f99e7c4",
"icons/SplashScreen.scale-150.png": "50042c38a3667bb9bfe194bf11cbd70e",
"icons/SplashScreen.scale-200.png": "9dac4ba80c8690a365ae27742ded5f5a",
"icons/SplashScreen.scale-400.png": "ae5345569de74de90165500ff419ed0d",
"icons/splash_foreground.png": "98b3d617fc5c20ee183ce87018698681",
"icons/splash_round.png": "69401f065c6d77aceaa9d772c28c3193",
"icons/Square150x150Logo.scale-100.png": "83cc8ae33da156be50a94ec6599b3bc9",
"icons/Square150x150Logo.scale-125.png": "475004f978e0d9e9a9e01cc2ff915cf3",
"icons/Square150x150Logo.scale-150.png": "05bd9c7619b6cb68af35e16cd80b1122",
"icons/Square150x150Logo.scale-200.png": "50fbfc50b2ff11c68625d2a25a907eb8",
"icons/Square150x150Logo.scale-400.png": "e2b620b50d7fccca24908e58a2cc5190",
"icons/Square44x44Logo.altform-lightunplated_targetsize-16.png": "703dbb504417fe8ee602c38907b1eae1",
"icons/Square44x44Logo.altform-lightunplated_targetsize-20.png": "3a98787df601cc5d324e8fbdd3f107f5",
"icons/Square44x44Logo.altform-lightunplated_targetsize-24.png": "fb6cd688776ae65e75a374de33a7662b",
"icons/Square44x44Logo.altform-lightunplated_targetsize-256.png": "0f80d22c88c1fab87ee44a36d8a84ad4",
"icons/Square44x44Logo.altform-lightunplated_targetsize-30.png": "a49aa5c195968f2e6e52ce8fcabe7c67",
"icons/Square44x44Logo.altform-lightunplated_targetsize-32.png": "3e15d524ac6af6c187d2d169b4a6a320",
"icons/Square44x44Logo.altform-lightunplated_targetsize-36.png": "161aedfdffe46f5bae0d72c3346c8b96",
"icons/Square44x44Logo.altform-lightunplated_targetsize-40.png": "c07df804e0ada1019981bc945707d3ac",
"icons/Square44x44Logo.altform-lightunplated_targetsize-44.png": "a9481559fb82b7a9141ec56f47d4fb57",
"icons/Square44x44Logo.altform-lightunplated_targetsize-48.png": "4077f7f84e4d510cce978970ca8d7288",
"icons/Square44x44Logo.altform-lightunplated_targetsize-60.png": "9f5cb31ef6116326228353a695427b03",
"icons/Square44x44Logo.altform-lightunplated_targetsize-64.png": "b6da96766cf237004ca297975ca94b1d",
"icons/Square44x44Logo.altform-lightunplated_targetsize-72.png": "e41d560ff9377551e73d6060186c5435",
"icons/Square44x44Logo.altform-lightunplated_targetsize-80.png": "357821e37faf83c979bf8e04b18a0131",
"icons/Square44x44Logo.altform-lightunplated_targetsize-96.png": "dfdef52a3e27ccb9b80dc1ba908d451d",
"icons/Square44x44Logo.altform-unplated_targetsize-16.png": "703dbb504417fe8ee602c38907b1eae1",
"icons/Square44x44Logo.altform-unplated_targetsize-20.png": "3a98787df601cc5d324e8fbdd3f107f5",
"icons/Square44x44Logo.altform-unplated_targetsize-24.png": "fb6cd688776ae65e75a374de33a7662b",
"icons/Square44x44Logo.altform-unplated_targetsize-256.png": "0f80d22c88c1fab87ee44a36d8a84ad4",
"icons/Square44x44Logo.altform-unplated_targetsize-30.png": "a49aa5c195968f2e6e52ce8fcabe7c67",
"icons/Square44x44Logo.altform-unplated_targetsize-32.png": "3e15d524ac6af6c187d2d169b4a6a320",
"icons/Square44x44Logo.altform-unplated_targetsize-36.png": "161aedfdffe46f5bae0d72c3346c8b96",
"icons/Square44x44Logo.altform-unplated_targetsize-40.png": "c07df804e0ada1019981bc945707d3ac",
"icons/Square44x44Logo.altform-unplated_targetsize-44.png": "a9481559fb82b7a9141ec56f47d4fb57",
"icons/Square44x44Logo.altform-unplated_targetsize-48.png": "4077f7f84e4d510cce978970ca8d7288",
"icons/Square44x44Logo.altform-unplated_targetsize-60.png": "9f5cb31ef6116326228353a695427b03",
"icons/Square44x44Logo.altform-unplated_targetsize-64.png": "b6da96766cf237004ca297975ca94b1d",
"icons/Square44x44Logo.altform-unplated_targetsize-72.png": "e41d560ff9377551e73d6060186c5435",
"icons/Square44x44Logo.altform-unplated_targetsize-80.png": "357821e37faf83c979bf8e04b18a0131",
"icons/Square44x44Logo.altform-unplated_targetsize-96.png": "dfdef52a3e27ccb9b80dc1ba908d451d",
"icons/Square44x44Logo.scale-100.png": "a9481559fb82b7a9141ec56f47d4fb57",
"icons/Square44x44Logo.scale-125.png": "c15df5ee54e42c5666f2683ad5af9034",
"icons/Square44x44Logo.scale-150.png": "31ca16c5776eae5e89b14b9e460ac9ee",
"icons/Square44x44Logo.scale-200.png": "7213f4cf49151101255368636ff73eed",
"icons/Square44x44Logo.scale-400.png": "e363b163b62a23b4b360b0469af18bfe",
"icons/Square44x44Logo.targetsize-16.png": "703dbb504417fe8ee602c38907b1eae1",
"icons/Square44x44Logo.targetsize-20.png": "3a98787df601cc5d324e8fbdd3f107f5",
"icons/Square44x44Logo.targetsize-24.png": "fb6cd688776ae65e75a374de33a7662b",
"icons/Square44x44Logo.targetsize-256.png": "0f80d22c88c1fab87ee44a36d8a84ad4",
"icons/Square44x44Logo.targetsize-30.png": "a49aa5c195968f2e6e52ce8fcabe7c67",
"icons/Square44x44Logo.targetsize-32.png": "3e15d524ac6af6c187d2d169b4a6a320",
"icons/Square44x44Logo.targetsize-36.png": "161aedfdffe46f5bae0d72c3346c8b96",
"icons/Square44x44Logo.targetsize-40.png": "c07df804e0ada1019981bc945707d3ac",
"icons/Square44x44Logo.targetsize-44.png": "a9481559fb82b7a9141ec56f47d4fb57",
"icons/Square44x44Logo.targetsize-48.png": "4077f7f84e4d510cce978970ca8d7288",
"icons/Square44x44Logo.targetsize-60.png": "9f5cb31ef6116326228353a695427b03",
"icons/Square44x44Logo.targetsize-64.png": "b6da96766cf237004ca297975ca94b1d",
"icons/Square44x44Logo.targetsize-72.png": "e41d560ff9377551e73d6060186c5435",
"icons/Square44x44Logo.targetsize-80.png": "357821e37faf83c979bf8e04b18a0131",
"icons/Square44x44Logo.targetsize-96.png": "dfdef52a3e27ccb9b80dc1ba908d451d",
"icons/StoreLogo.scale-100.png": "f79e52c869ce235bc5130dba2e785b3a",
"icons/StoreLogo.scale-125.png": "8db67bd926374d3fb45e26c1387c5372",
"icons/StoreLogo.scale-150.png": "e9ff4650c5c8f3a6ac5f03adea7eff20",
"icons/StoreLogo.scale-200.png": "c7d58450ef73d03be728ebf7d13040ac",
"icons/StoreLogo.scale-400.png": "7bd315d7ded12e227b8b239cb3779995",
"icons/Wide310x150Logo.scale-100.png": "27a4673bec5a84cbbf3c64478e99e372",
"icons/Wide310x150Logo.scale-125.png": "b2665c82d4e8c74f414ae4a5064d738f",
"icons/Wide310x150Logo.scale-150.png": "25bca3ed4cb95dbc4e319313f0949837",
"icons/Wide310x150Logo.scale-200.png": "5e667bd3145ad8b20681486799715692",
"icons/Wide310x150Logo.scale-400.png": "9dac4ba80c8690a365ae27742ded5f5a",
"index.html": "e69e742596f537f3b636eaf2f325c544",
"/": "e69e742596f537f3b636eaf2f325c544",
"main.dart.js": "6165f474cad2c4f0cb17ef549f1c1786",
"manifest.json": "7a13a899d5fd5150cd5be7b2a660c594",
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
