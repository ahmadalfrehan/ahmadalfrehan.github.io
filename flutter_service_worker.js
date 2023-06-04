'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e985a3b0d66cc23e85b6e4d32e885e99",
"assets/assets/fonts/Karla-Bold.ttf": "b45be274b8b65fc9c72b038d72486edd",
"assets/assets/fonts/Karla-BoldItalic.ttf": "17f8a645015756768592e12b12219220",
"assets/assets/fonts/Karla-Italic.ttf": "363d3c4ec8cb40d863cdacfc0049eb12",
"assets/assets/fonts/Karla-Regular.ttf": "fd3f938a23d57da8894c8aa0e85adf3f",
"assets/assets/images/%257B%2520%257D.png": "c37ac5a06e629c87947fe7531e753fae",
"assets/assets/images/ahmad.jpg": "ce1b1c712e88665cb3ea9d494b9c8eaa",
"assets/assets/images/aleppo.png": "e8a7b8b118a4d2cfd0cbd8cf9d642a51",
"assets/assets/images/algo.png": "e18d393756fbac62480c73fbd2fd376a",
"assets/assets/images/android-studio-logo.png": "e667dcfa17b464935eaa196ac173040e",
"assets/assets/images/android.png": "f3f62505de0766a4e362c7cb5df84bfb",
"assets/assets/images/arrow-back.svg": "8dcfdfbd2d822e00e7ced784ab3b4dd6",
"assets/assets/images/c.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/images/clean-code.png": "77df9c9891a132e13d84439861756812",
"assets/assets/images/clinc-logo.png": "13d362d3c7416a19ce6e92f1fa451c0c",
"assets/assets/images/code.png": "783a3429497d5e1c4d94e1eb39726fc8",
"assets/assets/images/dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/images/dcpc.png": "080c01305102bacd292e1acb75cdb1bb",
"assets/assets/images/facebook.png": "03c3adf6ffcb6c0e3825aa635bd3cbac",
"assets/assets/images/firebase.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/images/flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/images/future.png": "401cc13d2688452143887e05d6fee28d",
"assets/assets/images/Git-Logo.png": "039ccae6692592fa85000d38bedb2472",
"assets/assets/images/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/gitlab.png": "2e5f4ba66a2dc0b05535eec7d8b3d55e",
"assets/assets/images/google-maps.png": "d29f7cbde852ac20bc0fdbe8c6aeb154",
"assets/assets/images/google-play.png": "1cc28a80b8a0662f2daa97feb90b04d6",
"assets/assets/images/google.png": "937807959359fa7d436119c2c0209cd9",
"assets/assets/images/hew-logo.png": "f51ec9f423ac12a2166bca8180d23533",
"assets/assets/images/imagin-logo.png": "960dc07c09d03c4d827198641324a8ce",
"assets/assets/images/img.png": "07481ba70d39fc99a2fefb9eb89ba779",
"assets/assets/images/java.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/assets/images/link.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/linux.png": "79a97e51c98e1051be3aa22f70cbaedd",
"assets/assets/images/logo.jpg": "c2741dbb2af403413471620316165b09",
"assets/assets/images/pngegg.png": "d63dfe2732b35eca8f60351bcd4a77f8",
"assets/assets/images/problem-solving.png": "e325685df62f3438cdc6ce40c33d0fe6",
"assets/assets/images/programming.png": "a5318a9c2473e257a7db96e79b901a2c",
"assets/assets/images/shell.png": "4fb8dc7bd4c58e06907ce487da8cbcff",
"assets/assets/images/skills.png": "fffb03a7e45b53971e9c6bd15fe193bc",
"assets/assets/images/sqlite.png": "4ada57b0f07c176ef133d13670feeef0",
"assets/assets/images/telegram.png": "b37d6df3b36a74748a9bda890b3ba550",
"assets/assets/images/travi-logo.png": "745b85cc148cf22e43b9e3afcddab92b",
"assets/assets/images/trello.png": "e51930722c98211010394cf449ca84f8",
"assets/assets/images/wa.png": "419b0f762f23d9c86a45eb1aab26dade",
"assets/FontManifest.json": "5611cb4da70ed9e85f49c6438482136e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "402c0c6df8ded5f22fc4f0cf6a911c78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "c02648e2d1c0082f94da14a565a5ddf7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/android-icon-144x144.png": "77dd17ba23ac76feb862823c6be287aa",
"icons/android-icon-192x192.png": "e8bd9b32d26522937222347cfb44ff32",
"icons/android-icon-36x36.png": "4d2ec2f10744680a2c29c803de203208",
"icons/android-icon-48x48.png": "8d89636a06d3c97d0c4ea517c2dd9fac",
"icons/android-icon-72x72.png": "23c19126745ca9aff6ced2436b45cb16",
"icons/android-icon-96x96.png": "7632e9045e625f02c23d5f8d43d44e68",
"icons/apple-icon-114x114.png": "7d02d220c33c32dd26f892d2fbf0ef23",
"icons/apple-icon-120x120.png": "722cd5a1c426efdf0f621f0de184dd44",
"icons/apple-icon-144x144.png": "77dd17ba23ac76feb862823c6be287aa",
"icons/apple-icon-152x152.png": "b735977007eedbd2a5943c4018d95bf2",
"icons/apple-icon-180x180.png": "5935bcb825be4aee66c4ab29d3733c17",
"icons/apple-icon-57x57.png": "852501ddfb7994f5838463bbff55dd4f",
"icons/apple-icon-60x60.png": "b85472c9f49306fa9c1d5c40206b4c4c",
"icons/apple-icon-72x72.png": "23c19126745ca9aff6ced2436b45cb16",
"icons/apple-icon-76x76.png": "ef3da7c9a4ad27344ffe80c491d18be3",
"icons/apple-icon-precomposed.png": "c55f47822fffdf5c0426a990942d6427",
"icons/apple-icon.png": "c55f47822fffdf5c0426a990942d6427",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "1c385f26b65cd4310fff5c5dc35ba933",
"icons/favicon-32x32.png": "3140a072f0caf442445cf71b60a2c28a",
"icons/favicon-96x96.png": "8afd082dc14e501aa466228975cba8c7",
"icons/favicon.ico": "c02648e2d1c0082f94da14a565a5ddf7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "a167f1be12b5cf40d0da2eb05773e2bc",
"icons/ms-icon-150x150.png": "db37000f5e009dbce6eddbec0c6ac127",
"icons/ms-icon-310x310.png": "39207be380698ac3e1087d522b67c560",
"icons/ms-icon-70x70.png": "a3d816eb30979714c5b4b0cc4cfc032d",
"index.html": "4f836884de459d6866a3cecf0f388d2b",
"/": "4f836884de459d6866a3cecf0f388d2b",
"main.dart.js": "efb7f324d1b9dcca93dbac4e826b4683",
"manifest.json": "cca5ff947ef93358349efac2bf2530e5",
"version.json": "d7c4ef1a45c2dffc13a7e17bcf5cd02e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
