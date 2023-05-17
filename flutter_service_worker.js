'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "377ad60d660aa7d316534a8bd57399ee",
".git/config": "a38446eac1095d9d99f3d64ea4b9d4ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32ca7881ad266ab96160d1392fcf2132",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a28302ab2511ed64448b44d69c0b653d",
".git/logs/refs/heads/master": "a28302ab2511ed64448b44d69c0b653d",
".git/logs/refs/remotes/origin/master": "63775105a7439f88d2bd5ec212b9d7b4",
".git/objects/02/b67239f620536634f4129f81904963cdd44a85": "5fef4d9215e07374b3037f9ca4549970",
".git/objects/03/200cdd252b9d11e6f9600c7000cde1dc899ac1": "6b71614eaf077bd0ad95b607319c5eb1",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/08/b7a80f57d817d83cc549497838d2a78dbcf2d4": "870092ce72242d0d1d446a5f325038a3",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/19/b6069529f8c2c6bf3d6adf2bb1706181c4e963": "7a74c19a4026372febdd414168799eb2",
".git/objects/1e/3d92c8d600f14344ff18801e3a88d6855b8b92": "cbf2d72ae77d689a6b40a045c0e20931",
".git/objects/23/dbd6c7582d64e4328b7338f393530c96af0c94": "817cc906f42f30500cd8dbbc0bbf9dc1",
".git/objects/27/5b7382c70ccf27d20e0859385e2078d7b49242": "0ee57e2d653553f3d0aa7ea7320fa964",
".git/objects/34/7b9540b77b2a9069aa6b9f55d2432bb67f3d94": "a8195a6a0fbc0a3dc3c4933b9cb469f4",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3e/1fd6a235acff26be3174043ea0b0370ba10a37": "c862aa7bc1579fecdce1245c1d1ddfa4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/a96cdb5d28df809bba3b9bc4b24e643a7249eb": "bc8bbaa3c01cb1032af80f1e3f4c382c",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/54/1f6fd3d8dd6f3728680185b594d4efac0747a5": "0ce74bfc25915590a91b65e4292a7aae",
".git/objects/54/f4e018ca988ee030fa4357180a1eae4d97f72b": "7a1a968ad534b0757e24fed92ca3fcac",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/68/cc3514e76a17a06e4941203d6630aff0113a04": "6834c681a2cfb5484d74ea2157b19186",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/63c88150429a1235c40145bf601cc4472a0449": "ba389ef9efe835c70394aa73868ba0f7",
".git/objects/7e/0cb25703f9c6264abf6423c587058e8ede1c08": "f9ed082c54a582b3bbcb4cc4764ab2aa",
".git/objects/80/6a543aa931cef0cb74ba482e9ef6be236ba0e5": "2c5bf8b6cdd60c03ce058c0a63e179d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/312ad237895aac4727b9057c3caa1a29986a17": "75282f8c903b96f667d85df826fbe159",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/11cbedd2fc8eefc2c7b02f65e2c1e3fc781dad": "9d663db7ff96dbc776ca10927bf62e0d",
".git/objects/ab/5b877a11cfa4d06ef149c595c28ff5b5ef2799": "f67fc65032ed8ba8dab71cfe4870b6b5",
".git/objects/ad/669d468879c88fa63931cf076aaa394409edec": "0a009cc9a81f7a1d7b89d54508866d09",
".git/objects/b6/29202e52385191257e4ab425b913e892f26068": "2725c55176ee4359adef5550b8be9d34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/6647eee8ac41e6e57e28736c6bb4e35f5f20d4": "c50213f64530f9ccbc31a57d6c70e7d8",
".git/objects/be/6a34aaafac1938a8e643ebf27d020f5226b7f1": "9545fe1b06d67da23e11854b214cc47d",
".git/objects/c1/d88e48c92221865886c31e13ac7d5340064b3f": "5a2a7c7c8374c1f4afdaa6ee59dea783",
".git/objects/c5/b00ee5473e084d3bfaeedc2eea0b95cef9376f": "f12bc86e09cd2022c3d3967388b70bec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/d9088fd7bc69612844338a25229c43caf2a83f": "2269c379407aeddf9296d059899d1e26",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b5c8c6a9f818df7a36f62e1b658f71db34a088": "0e77154710158700884db938f0133d70",
".git/objects/ed/cd1eb711360b508cb90e2368de1de72d089d0b": "b78793140c493692f54814b18f444586",
".git/objects/f1/51c02dba1183b4ae63d13ce9eee2cce4b5a274": "c308c8b37938af034bd43a71c7195279",
".git/objects/f2/70e30e620d603ea396fe59d81026d84faf272c": "deb39d35841f339938a52e43cf0ca9ed",
".git/objects/pack/tmp_pack_9GrNss": "2a9266b97a38ea6a67db5c251bf733b2",
".git/objects/pack/tmp_pack_OEXHGm": "8a53d1314102d93bcc63af77f644cd23",
".git/refs/heads/master": "529e806f76c2fca329227e11d10a3610",
".git/refs/remotes/origin/master": "529e806f76c2fca329227e11d10a3610",
"assets/AssetManifest.json": "8a9dd43124c5b8f4eaf0fcf33271ebdd",
"assets/assets/fonts/Karla-Bold.ttf": "b45be274b8b65fc9c72b038d72486edd",
"assets/assets/fonts/Karla-BoldItalic.ttf": "17f8a645015756768592e12b12219220",
"assets/assets/fonts/Karla-Italic.ttf": "363d3c4ec8cb40d863cdacfc0049eb12",
"assets/assets/fonts/Karla-Regular.ttf": "fd3f938a23d57da8894c8aa0e85adf3f",
"assets/assets/images/%257B%2520%257D.png": "c37ac5a06e629c87947fe7531e753fae",
"assets/assets/images/ahmad.jpg": "ce1b1c712e88665cb3ea9d494b9c8eaa",
"assets/assets/images/algo.png": "e18d393756fbac62480c73fbd2fd376a",
"assets/assets/images/arrow-back.svg": "8dcfdfbd2d822e00e7ced784ab3b4dd6",
"assets/assets/images/clinc-logo.png": "13d362d3c7416a19ce6e92f1fa451c0c",
"assets/assets/images/code.png": "783a3429497d5e1c4d94e1eb39726fc8",
"assets/assets/images/dcpc.png": "080c01305102bacd292e1acb75cdb1bb",
"assets/assets/images/future.png": "401cc13d2688452143887e05d6fee28d",
"assets/assets/images/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/google.png": "937807959359fa7d436119c2c0209cd9",
"assets/assets/images/hew-logo.png": "f51ec9f423ac12a2166bca8180d23533",
"assets/assets/images/imagin-logo.png": "960dc07c09d03c4d827198641324a8ce",
"assets/assets/images/link.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/logo.jpg": "c2741dbb2af403413471620316165b09",
"assets/assets/images/skills.png": "fffb03a7e45b53971e9c6bd15fe193bc",
"assets/assets/images/travi-logo.png": "745b85cc148cf22e43b9e3afcddab92b",
"assets/FontManifest.json": "5611cb4da70ed9e85f49c6438482136e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "33c1831cd402dd0264a36cd486aa5dc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f39a900454cc868567ab84cbb703ccca",
"/": "f39a900454cc868567ab84cbb703ccca",
"main.dart.js": "654c7ab9590bad2e54d11b717f89e348",
"manifest.json": "856385af6464faae15be3523aece988d",
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
