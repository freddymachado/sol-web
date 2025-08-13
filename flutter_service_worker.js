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
"flutter_bootstrap.js": "b8325971c7cc9df6dc72e5145fd8cba1",
"icons/Icon-512.png": "1e3b9b2b8748cd5b7a2bbfc2ab317abd",
"icons/LargeTile.scale-100.png": "d3ffb70adf7846790ec63e38c371ec79",
"icons/LargeTile.scale-125.png": "3d5d9e8c49bc8342a708433a001a1b27",
"icons/LargeTile.scale-150.png": "7bdd2d63065e0adaad3a24540f555c80",
"icons/LargeTile.scale-200.png": "b58e8f1944b709ca50bec41b5fafce07",
"icons/LargeTile.scale-400.png": "be051f749e763f959a0abd6a021f1c23",
"icons/SmallTile.scale-100.png": "d8aec22e71238fc1f6958a45d9348ffc",
"icons/SmallTile.scale-125.png": "474ca548a466a1ebcf40a55d50c3bd93",
"icons/SmallTile.scale-150.png": "51d7bfe1fa915d05a7f07438e472143f",
"icons/SmallTile.scale-200.png": "0d2ed7abff17182818a2439f7638f46c",
"icons/SmallTile.scale-400.png": "f450ad4e073b89461fff0c194e22833d",
"icons/SplashScreen.scale-100.png": "f686497e1a604834d3973acbb11472ba",
"icons/SplashScreen.scale-125.png": "7ffb0a5759acde5b0cd63fab6756ec3f",
"icons/SplashScreen.scale-150.png": "976ccb301385abf79e76435dd2462a20",
"icons/SplashScreen.scale-200.png": "c2474ae7265e303f6f094389d350da41",
"icons/SplashScreen.scale-400.png": "e24c37f9da51731f42a10f37ab4ccabd",
"icons/splash_foreground.png": "98b3d617fc5c20ee183ce87018698681",
"icons/splash_round.png": "69401f065c6d77aceaa9d772c28c3193",
"icons/Square150x150Logo.scale-100.png": "f7e34105f829e2c25dd5fccc3d03385d",
"icons/Square150x150Logo.scale-125.png": "ee4a71ee8ce8703d873177ef3f24e394",
"icons/Square150x150Logo.scale-150.png": "7e050e86970c76ae523b3f692da1732c",
"icons/Square150x150Logo.scale-200.png": "7e64becb7dcba41e0da527ee98d93e28",
"icons/Square150x150Logo.scale-400.png": "410f4767dc67cce9cc677b9ca7273049",
"icons/Square44x44Logo.altform-lightunplated_targetsize-16.png": "ff984255d531bc73dbf2be8a5944765b",
"icons/Square44x44Logo.altform-lightunplated_targetsize-20.png": "d2a324a0b06c8ea8c40b46161370f18a",
"icons/Square44x44Logo.altform-lightunplated_targetsize-24.png": "a86adf41376e13c70df8b6741ba271be",
"icons/Square44x44Logo.altform-lightunplated_targetsize-256.png": "77fcc9a381754010eb6ad6f90e731314",
"icons/Square44x44Logo.altform-lightunplated_targetsize-30.png": "06dfeb366dde56ade25e21c19ecaba6f",
"icons/Square44x44Logo.altform-lightunplated_targetsize-32.png": "9bf397287370d7a8aba1ab2565435812",
"icons/Square44x44Logo.altform-lightunplated_targetsize-36.png": "d31ae7b79330774a5acc8ecc28615aa9",
"icons/Square44x44Logo.altform-lightunplated_targetsize-40.png": "752406c2bd1d72a4c57e50f20dfd63ae",
"icons/Square44x44Logo.altform-lightunplated_targetsize-44.png": "f137e4fad234f7c6f5a07c37b8d2bee2",
"icons/Square44x44Logo.altform-lightunplated_targetsize-48.png": "84a8ed1c1a4efad554a55f669abd717a",
"icons/Square44x44Logo.altform-lightunplated_targetsize-60.png": "52a647ac2a800eb64f5bb0e3d2c97397",
"icons/Square44x44Logo.altform-lightunplated_targetsize-64.png": "c0eeb06168027f9a0ec07db8457538ab",
"icons/Square44x44Logo.altform-lightunplated_targetsize-72.png": "73ebdc64f5dbd6ab3733612710eb88ea",
"icons/Square44x44Logo.altform-lightunplated_targetsize-80.png": "fceb3daf7e7092e4c477ee3bf2f5c9d4",
"icons/Square44x44Logo.altform-lightunplated_targetsize-96.png": "dbbff883e860398bb492402acae7be05",
"icons/Square44x44Logo.altform-unplated_targetsize-16.png": "ff984255d531bc73dbf2be8a5944765b",
"icons/Square44x44Logo.altform-unplated_targetsize-20.png": "d2a324a0b06c8ea8c40b46161370f18a",
"icons/Square44x44Logo.altform-unplated_targetsize-24.png": "a86adf41376e13c70df8b6741ba271be",
"icons/Square44x44Logo.altform-unplated_targetsize-256.png": "77fcc9a381754010eb6ad6f90e731314",
"icons/Square44x44Logo.altform-unplated_targetsize-30.png": "06dfeb366dde56ade25e21c19ecaba6f",
"icons/Square44x44Logo.altform-unplated_targetsize-32.png": "9bf397287370d7a8aba1ab2565435812",
"icons/Square44x44Logo.altform-unplated_targetsize-36.png": "d31ae7b79330774a5acc8ecc28615aa9",
"icons/Square44x44Logo.altform-unplated_targetsize-40.png": "752406c2bd1d72a4c57e50f20dfd63ae",
"icons/Square44x44Logo.altform-unplated_targetsize-44.png": "f137e4fad234f7c6f5a07c37b8d2bee2",
"icons/Square44x44Logo.altform-unplated_targetsize-48.png": "84a8ed1c1a4efad554a55f669abd717a",
"icons/Square44x44Logo.altform-unplated_targetsize-60.png": "52a647ac2a800eb64f5bb0e3d2c97397",
"icons/Square44x44Logo.altform-unplated_targetsize-64.png": "c0eeb06168027f9a0ec07db8457538ab",
"icons/Square44x44Logo.altform-unplated_targetsize-72.png": "73ebdc64f5dbd6ab3733612710eb88ea",
"icons/Square44x44Logo.altform-unplated_targetsize-80.png": "fceb3daf7e7092e4c477ee3bf2f5c9d4",
"icons/Square44x44Logo.altform-unplated_targetsize-96.png": "dbbff883e860398bb492402acae7be05",
"icons/Square44x44Logo.scale-100.png": "f137e4fad234f7c6f5a07c37b8d2bee2",
"icons/Square44x44Logo.scale-125.png": "ba8df6e8189264590c452952c5e43e87",
"icons/Square44x44Logo.scale-150.png": "bb54bd2ca181c3d2b4291c1e36e29eb3",
"icons/Square44x44Logo.scale-200.png": "252c284caf138ec978c989fe78bc0cca",
"icons/Square44x44Logo.scale-400.png": "6e7ddbcf280288e795f2c3de7e0c6b16",
"icons/Square44x44Logo.targetsize-16.png": "ff984255d531bc73dbf2be8a5944765b",
"icons/Square44x44Logo.targetsize-20.png": "d2a324a0b06c8ea8c40b46161370f18a",
"icons/Square44x44Logo.targetsize-24.png": "a86adf41376e13c70df8b6741ba271be",
"icons/Square44x44Logo.targetsize-256.png": "77fcc9a381754010eb6ad6f90e731314",
"icons/Square44x44Logo.targetsize-30.png": "06dfeb366dde56ade25e21c19ecaba6f",
"icons/Square44x44Logo.targetsize-32.png": "9bf397287370d7a8aba1ab2565435812",
"icons/Square44x44Logo.targetsize-36.png": "d31ae7b79330774a5acc8ecc28615aa9",
"icons/Square44x44Logo.targetsize-40.png": "752406c2bd1d72a4c57e50f20dfd63ae",
"icons/Square44x44Logo.targetsize-44.png": "f137e4fad234f7c6f5a07c37b8d2bee2",
"icons/Square44x44Logo.targetsize-48.png": "84a8ed1c1a4efad554a55f669abd717a",
"icons/Square44x44Logo.targetsize-60.png": "52a647ac2a800eb64f5bb0e3d2c97397",
"icons/Square44x44Logo.targetsize-64.png": "c0eeb06168027f9a0ec07db8457538ab",
"icons/Square44x44Logo.targetsize-72.png": "73ebdc64f5dbd6ab3733612710eb88ea",
"icons/Square44x44Logo.targetsize-80.png": "fceb3daf7e7092e4c477ee3bf2f5c9d4",
"icons/Square44x44Logo.targetsize-96.png": "dbbff883e860398bb492402acae7be05",
"icons/StoreLogo.scale-100.png": "2713efacb696afacfc15d3e1bcf1082b",
"icons/StoreLogo.scale-125.png": "20794cee3e173950dce51e9d44d6993d",
"icons/StoreLogo.scale-150.png": "ff2fa6b0d259d07521bf5ec41a7939cb",
"icons/StoreLogo.scale-200.png": "692318d66c252008be0c6b71af569069",
"icons/StoreLogo.scale-400.png": "ac880654624ffbf0fae4c7831e89ac01",
"icons/Wide310x150Logo.scale-100.png": "e2e68c0401350885b2d50fc332e2b6c1",
"icons/Wide310x150Logo.scale-125.png": "a3accc4fe04041bd8388c928c4636020",
"icons/Wide310x150Logo.scale-150.png": "d3293c8ace34fe4bd26300c9d225f96e",
"icons/Wide310x150Logo.scale-200.png": "f686497e1a604834d3973acbb11472ba",
"icons/Wide310x150Logo.scale-400.png": "c2474ae7265e303f6f094389d350da41",
"index.html": "a25da214e8e508e8227bf64d37655357",
"/": "a25da214e8e508e8227bf64d37655357",
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
