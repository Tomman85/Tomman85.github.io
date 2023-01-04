'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7a51e5619bff56f478134835fadbdc06",
"index.html": "1d35cc8be6ea7eca32a0e3aa7ba81d5f",
"/": "1d35cc8be6ea7eca32a0e3aa7ba81d5f",
"main.dart.js": "3aeca77589f60bea9483f2a8223342d2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8f14d86a5662be83f3e5afd4ede04379",
"assets/config/app_config.json": "3fdb3755f58fdbb7334c55fcad06244a",
"assets/AssetManifest.json": "e693b6f1a435176fb13b95d9883fef90",
"assets/NOTICES": "6611a21fd2ac95a450b2ed81d39f394b",
"assets/FontManifest.json": "8919a6971c08a1730cc910b70b7d2266",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "445684b871ec12da37c4b3af76d43113",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/robertprofile.png": "2d727889651bad28ea8a5df324245d51",
"assets/assets/images/customSlider.png": "9e15eec03a9c47f343e55e4399f6781b",
"assets/assets/images/sygnetsmaller.png": "f026a45e33695cccc1d70d579ada9fad",
"assets/assets/images/robert.png": "957b6aedffb9da1b1f15e0408fcbfb4d",
"assets/assets/images/sygnetgray.png": "37c833fd89a6b3debf33ba9ef0eb7e3c",
"assets/assets/images/homebackground.png": "ca28a353b2b6d5312fab46b4fa36048c",
"assets/assets/images/adamkowalski.png": "e0ab15a610b6257a68051c90f405870e",
"assets/assets/images/employer.png": "04525c51eee58a7abeaeccd44c70de4a",
"assets/assets/images/logomindpal.png": "eb70854d2cbdd57246ca25914b673f07",
"assets/assets/images/culturechart.png": "40eaa7f001de9c2745864af80d5dc260",
"assets/assets/images/sygnet.png": "8c80cf89d4e0e3d3f1d3a23ec5bd31b4",
"assets/assets/images/pulsar.png": "b7351041107390f45c3cce418a91fa06",
"assets/assets/images/andrii.png": "6c736335eef43bb57b76c5b636d006d6",
"assets/assets/images/logoskygate.png": "65563fab7d30572dcab02512d0cd0a03",
"assets/assets/images/badges.png": "f5b4f7135bb52716bd654f9b4cd64fca",
"assets/assets/icons/skillsactive.png": "7f6feeafedd1199af667869c66d1800b",
"assets/assets/icons/overwiewicon.png": "6b269e17709f8c7f2c6f10d057cf2924",
"assets/assets/icons/filters.png": "be18b8a10ffbec705eb30b8632c79c2a",
"assets/assets/icons/reactwhite.png": "4cad6dfca0ddea651f57b4f28f39bd51",
"assets/assets/icons/introactive.png": "d647f883a7df179db0688fbac0cfd71a",
"assets/assets/icons/python.png": "7efdd38d9c335eb66034306f1602563c",
"assets/assets/icons/ruby.png": "0aa4b5bc8aca1ae151a44d56acf589ca",
"assets/assets/icons/dislike.png": "086eb43a38fe52faa0ba054d54b2532b",
"assets/assets/icons/searchicon.png": "0c210bbaf09f1aea9a7b80ed9c9112c4",
"assets/assets/icons/flutter.png": "15bb81927351030858ba48740114887b",
"assets/assets/icons/cognitiveicon.png": "152fe4a6bd3e0cf8968f43b779334fbf",
"assets/assets/icons/htmlwhite.png": "ae4ad0be47caca4abc75ae769937bed5",
"assets/assets/icons/c++white.png": "1ccbc3779168645080333db3a428b5e4",
"assets/assets/icons/techtesticon.png": "6f214ab5b7647385478145dcc5a47690",
"assets/assets/icons/notesicon.png": "6b1f4fef3a2a6edc38d768356b340cc2",
"assets/assets/icons/testsactive.png": "8e890ff1447c8f5fddae85bfe869f57c",
"assets/assets/icons/java.png": "13b78457a120c99763a8ee6e742b8e91",
"assets/assets/icons/js.png": "874cecb39481bf1ec2becfd1386091cf",
"assets/assets/icons/skillsunactive.png": "955c03989acfc8472ed2b728b8fa879c",
"assets/assets/icons/rubywhite.png": "71de4bc9890beae1937f05c6f17b84e1",
"assets/assets/icons/cvunactive.png": "70eb37f6144eeba98bcc50a92c407286",
"assets/assets/icons/experienceicon.png": "b3d893320ba318aa051ed0521009a4db",
"assets/assets/icons/like.png": "fd5262376aa95c1f3a159e46fa93c940",
"assets/assets/icons/vettedgreen.png": "2ac05400ab82cc4578f4687601219c14",
"assets/assets/icons/languagesicon.png": "2e4aad69b53445c6e1dbbd910b319983",
"assets/assets/icons/videocamera.png": "c65985a0e25fe17d5884347791c675d3",
"assets/assets/icons/allwhite.png": "1fbd6a17e406c8a8d262e0c8cc4c6281",
"assets/assets/icons/cvactive.png": "3e12a4864b6172883497649118844ea2",
"assets/assets/icons/html.png": "813bd75df8a4639731ad5fa2f8705a42",
"assets/assets/icons/reacticon.png": "494d9427ed22d1bb6b318909b0bf584d",
"assets/assets/icons/testsunactive.png": "2c95c037a38723182ee08deeb5b47da7",
"assets/assets/icons/introunactive.png": "8903d4db136564fea94e5be42f221837",
"assets/assets/icons/react.png": "ab32277000743a1c3d0388b628cebe95",
"assets/assets/icons/availabilityicon.png": "87c035354b4f31b2b3e6e22ffde6042f",
"assets/assets/icons/vetted.png": "9795620146fe59f56e63ff53b36fe768",
"assets/assets/icons/checkicon.png": "b234a22135797e7fc2cbec1c195478c3",
"assets/assets/icons/seniorityicon.png": "1121dc14649539ff48d523c3cb95e4be",
"assets/assets/icons/c++.png": "84432b67a72b51e6904e5452d12d65e5",
"assets/assets/icons/badgesicon.png": "2a1ba961e5caab2798226cce5a55ff48",
"assets/assets/icons/pythonwhite.png": "7c72a0a007a4e8e661f31de9480ebf59",
"assets/assets/icons/php.png": "03c95479f79f52dc9eb3afbcc6712b08",
"assets/assets/icons/personalityicon.png": "c8a20b9980da7c915f7004833896ea20",
"assets/assets/icons/caretdown.png": "35147e0c1b34e21e6f32079a6445ea77",
"assets/assets/icons/locationicon.png": "9092674ae278781434f563c04357bb4a",
"assets/assets/icons/javawhite.png": "0aab2e52340821246e37cb0dd43839dc",
"assets/assets/icons/vueicon.png": "3c13fd66acf26caeeb6bba03fe2e40a3",
"assets/assets/icons/jswhite.png": "ee48353f6c410b9d97a833077fbff881",
"assets/assets/icons/cameraicon.png": "ad347b59410fd47f299238cbadb9f525",
"assets/assets/icons/phpwhite.png": "905dd14e86455e580b398ee2589e1cda",
"assets/assets/icons/jsicon.png": "8eb710f2311867f22fc4dee0f9010624",
"assets/assets/icons/nodejs.png": "57ba14aa2d13b305256ee5d46f47ab4d",
"assets/assets/fonts/WorkSans-Regular.ttf": "7d761a652f8e716f57f4352b0f4e6280",
"assets/assets/fonts/Inter-Bold.ttf": "97decd2b78e0890e270894d96efe328f",
"assets/assets/fonts/Inter-Regular.ttf": "b396b0594c9620bc6ad91c5c92f6db30",
"assets/assets/fonts/WorkSans-Bold.ttf": "f051cc0ed2761378e886727284cf3c05",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
