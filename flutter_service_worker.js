'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "469e32825d131b1cdfd572c5b83a5a55",
"index.html": "73bad876172f51ba5849522b42ccad22",
"/": "73bad876172f51ba5849522b42ccad22",
"main.dart.js": "1a0b8260a18d36797dbaebd62533d028",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6987ad8dbf5fee67899778f8ad2b033c",
"assets/database/gear.json": "9318277386a78639059cfaa8f6302ee7",
"assets/database/headGear.json": "8af6a00bfa1334c2a664a88b7ee1340e",
"assets/database/shoes.json": "7a7b5554f8935eefb737bed843596e90",
"assets/database/clothing.json": "625cb5154fea07ba4f97087e194e0d94",
"assets/images/brand/rockenberg.png": "9bb179bdd94ce23b6ed18a53da2f0c24",
"assets/images/brand/grizzco.png": "48c86c89ec9d0d51273dc62608590f5f",
"assets/images/brand/zink.png": "4bd8f62098232f1906ecf78fd17ff06d",
"assets/images/brand/cuttlegear.png": "bd2398c4a81964c1361a4322c6c6ff87",
"assets/images/brand/zekko.png": "abb54ade3a620bfe4ea4b0434d9efc22",
"assets/images/brand/inkline.png": "d0f0abc5e7587ee11e5f542bb353da0a",
"assets/images/brand/skalop.png": "19d24210785fc8fd47830f4392f2379e",
"assets/images/brand/amiibo.png": "49aa5b88254129678bd7e22db50b651e",
"assets/images/brand/enperry.png": "d977e6f20f86494a41c47637fbf31eea",
"assets/images/brand/takoroka.png": "284f2c541c05f45066c9860b63cd5b8a",
"assets/images/brand/tentatek.png": "eb409f5885a9b08466ddf0a99cf8cc12",
"assets/images/brand/annaki.png": "634acb5087a79049c5cd079ac9e657b9",
"assets/images/brand/toni_kensa.png": "9d15db0a3b1388504f33b441b84d2d05",
"assets/images/brand/forge.png": "4da7f514361089de569cfd18d2384a17",
"assets/images/brand/splash_mob.png": "c082e8d0863ee11e37185909d74669f2",
"assets/images/brand/firefin.png": "ec77a587cd29a7c020091e4d7708cd49",
"assets/images/brand/krak_on.png": "515815a798f6596bd41d475c2bcac50c",
"assets/images/brand/squidforce.png": "34ae6892e34a0dc6865ecd791c745dc4",
"assets/images/gearPower/ink_resistance_up.png": "41af523bbb728d91cc728832d7562142",
"assets/images/gearPower/thermal_ink.png": "df2511090f9974e06248076c263f816d",
"assets/images/gearPower/special_power_up.png": "3f8bb9fb7e02fb7c4369092ffe877812",
"assets/images/gearPower/tenacity.png": "92a92970260009312f70554d03ee7079",
"assets/images/gearPower/ability_doubler.png": "b6420385e48e8a2e22bc3bb04ccba112",
"assets/images/gearPower/run_speed_up.png": "c6d652d21c2930ed842abe95e3a67019",
"assets/images/gearPower/ink_saver_sub.png": "c15fa269dfa83a5861bf4da348b481a3",
"assets/images/gearPower/ink_recovery_up.png": "7f1b45fb42f3443e53b6d35895f676a5",
"assets/images/gearPower/comeback.png": "b525705d95be1bd006061a44a26e4766",
"assets/images/gearPower/special_charge_up.png": "49b58ebd7a8f2b1c6390746ae6aa20f7",
"assets/images/gearPower/special_saver.png": "9119dc729c42d31234c86afa4e887614",
"assets/images/gearPower/stealth_jump.png": "0c1854517678bf2d9bfa1c8011a267cc",
"assets/images/gearPower/ninja_squid.png": "a57c0f0e9153d8778436a498a79b9fb3",
"assets/images/gearPower/ink_saver_main.png": "fb8bf63c6d8f560922ddf4d46b350a7e",
"assets/images/gearPower/random.png": "485e303d33c45423beecbe070085bd6b",
"assets/images/gearPower/sub_power_up.png": "da1da1bb4b5b8a0e6e653eb227df4837",
"assets/images/gearPower/respawn_punisher.png": "12565d3d640bf1bcd75afb8dd040096c",
"assets/images/gearPower/opening_gambit.png": "8fed10ba056cf5639a77171c4211d1cd",
"assets/images/gearPower/drop_roller.png": "0b69bbbde86b44fdc02882e018504cfa",
"assets/images/gearPower/swim_speed_up.png": "58d3a25bc6011e084651707a0a4105f2",
"assets/images/gearPower/object_shredder.png": "22c9c8a5dbe189326f0e81a7b2b7647c",
"assets/images/gearPower/quick_respawn.png": "f1790943e47f083778e2103335b48827",
"assets/images/gearPower/bomb_defense_up_dx.png": "62825cc72b735d58485366158bc309d6",
"assets/images/gearPower/haunt.png": "f0717e79401f0bf87c65e66d8e56d392",
"assets/images/gearPower/main_power_up.png": "c66ea222c36bb0ce9f07e7d4d1db41ea",
"assets/images/gearPower/quick_super_jump.png": "e2100a1dc42efa89881cdabf09ea948d",
"assets/images/gearPower/last_ditch_effort.png": "03a2d7b4226c57d98e40479599d34ecb",
"assets/AssetManifest.json": "9886cd67ee83ee390f4e60320adf5e92",
"assets/NOTICES": "9a94d4dc79302ef0b433a654424fcb6d",
"assets/FontManifest.json": "0c5ddb8ea34e14a0339344e35468637a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/NotoSansJP-Regular.otf": "ecfed48e463db4e31d1691c8af367730",
"assets/fonts/NotoSansJP-Bold.otf": "e463c4b3a2d7fbfb917831767da8c24f",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
