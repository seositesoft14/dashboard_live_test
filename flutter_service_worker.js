'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "af523b2943fce5b3582373a635559bb6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9650c93ddde8b45233a1513b937fbdfe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dcacfb24d561ba80edaaf7b502e08333",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c2edaa69a9ca19678fefeba96d0114f",
".git/logs/refs/heads/main": "7c2edaa69a9ca19678fefeba96d0114f",
".git/logs/refs/remotes/origin/HEAD": "bcca401b3dfcc4d2a4d77076047652a7",
".git/logs/refs/remotes/origin/main": "13053a5c2f722f4b794c5c608db3aff1",
".git/objects/02/11d614e9bfc90f56bb0aa1cf8960b3e037f739": "1492a741cb054547c462636707b2b9be",
".git/objects/05/9e73c4069c86f06814cf81093290ae8cf1e157": "b556eefb9ccea2e4bf034532e79e8edd",
".git/objects/0c/58e46a21bca472d6bb1499ab7582e323ec5e30": "a670317ce760c2346f40faa868c3114e",
".git/objects/0d/87f4013feba418f24808d8883f377907434c77": "0ed2a402accc806df8d8cbda2804237e",
".git/objects/0d/bfe13106e8ee1e7bf8a56953eea68a5dbc4c97": "5636e080b1e32b6eb9774d062c27bed3",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/e67981a2b36f62ae8235fa5f52d7525396314c": "1536fb34258ea932489d04334f0dfb40",
".git/objects/11/1263de272eedf0053fa5ae5e843d1425bf857a": "6deb50ad1138c0950a35ca312aba35de",
".git/objects/11/50dcf0903016cbd7a352ff0f89cb363838fc87": "614da365044f34c2c4cb3f7872f9bc9f",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/e9ec5aa6a94dfa5d552e855eeee2f80cf3e03b": "10354ee52296b2279d08d9ae7d42cf23",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2e/e8147040e99b6f9365b3812793e471bce2cef4": "c19ea1c1d83bc6b2d3e111b58aabcace",
".git/objects/34/7f385212f119af6f17173dcbe6322c3559669d": "d75d9b297aee9c46e59fb4c61a873249",
".git/objects/38/a02ced00af61a32f935fc6f5294da8d6468974": "3296ac734aeceb3d24e267813ce92230",
".git/objects/3b/200775e487a3a9636e31ca86d953d4732eb6a5": "e13fce867c993b672933b8624da935e7",
".git/objects/3c/bc2bd6551154c4fa038ae8b90fa3e94cf74c5b": "a9a0179ab85ce2286b8a877dd285e694",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/26e48692e93530bbbfd05d84043687e8046ca7": "d78480d508882442e26ab88a1538a3e9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/569635f6fb7986b0fb432ebc845b359c291f5c": "7fe0e31468e7373dd41e72c1302bdfce",
".git/objects/52/9070f5529fadb10b95bae513f3b9d3789530bf": "52dc8ae78ef2fff3c9ae20c7712dd45f",
".git/objects/54/2414e7fa1c6fc67290da85d18047657d67a7ee": "5c6a70b336b8e769493f5a1fbdc7e006",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5d/9542932055d16b34a14b02fdd8ade464947fa4": "b598d76b8290e147c2a595b3d353efb2",
".git/objects/61/a843318bacfd26a8d0437cdaee21a9fef9bb4a": "466dab6a6a1ba0490932e3ed61af1f5c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/49e18ea1e06faecdcddfec1af391560c46728d": "61eb396f4b96d50855465ccf7628054f",
".git/objects/68/17bb9c5c6b00da380fe886f003012ea57716a7": "8d34a73eb2538982325bb4ca7805986a",
".git/objects/6b/09eb1846a3ac3b02790477b5de60f866785f33": "1fa9b525a4b4f0c50f6bb0a3f5d0e65f",
".git/objects/70/54c5a10d99b1017dee69f1b5cdf299078545af": "5e0b2f6682e744a5b4f3cce95e6e3115",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7a/ed7e6be383f1eb330489e2f5e2a86d0cdd6475": "01b7e22d4818f5b067d394a94af631df",
".git/objects/7e/1151185caee1a807af4eb648ccd33f383f1e75": "263c9ac94323f66772e3080eefc3cc74",
".git/objects/80/47ed2b868b6d8f8cf98ca13e51956776fcbd92": "24fdb2000502229bdb1ead36390afc72",
".git/objects/82/4c40c1a21bbc67ef59ff2cf19fc396f58722df": "2d0f02b85b3a571a0b770e4b340f6ac0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d3999594d93ac1eed89297446adf015d94bbd3": "7da3ca4b4ffc433d9e55685d4f03ea89",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/de7a2ee9f8a091fddc8032f9188ba567c0f697": "a40770acaafc58d9fa7c860a89078bfc",
".git/objects/89/f6db17b43dd5a79ac8e0189e2b0af18cf849c3": "a4ced49fb395e80d29d5d6ba05439ce5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/65c724ea0696b7a068913b2180e638d0312739": "c7f5c92dec2421b58f3e2ac3017bf02d",
".git/objects/90/0746646b2d718aa0550d0e30d5eb7d6a3d6f84": "a4c6c9d9d7dab8a1127f7047ec51e63b",
".git/objects/93/6fe3fb131d6f94c4d96b7531cf3ea6f46324d9": "02dd4e582f90c123db172a97a6e6d31d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/a52c35aeb3fdc1bd683a844ad66a32080ec5dd": "ce8cc68fbd3c62bbbc61e38ab967a0b7",
".git/objects/97/3d2c961b68b9a4e3b82051e081e0d29b7f4ee1": "ccfb8be29932232b235bb198ce390657",
".git/objects/9d/322d80716f2e7c8c5ebfba75ad3714150755c5": "1db0a3d8894438709802124eaba35de4",
".git/objects/9e/6f38dba90b4bb084335576f19b3937eff7f9e0": "23e0148a241e2df7e93028cb0a2e8095",
".git/objects/a1/6db3227f858bca2c278151f743eba1de40a51b": "cfd111cbdfab77eda6aaff86ee555154",
".git/objects/a2/097945def54ce3596ec1dee63bfa1cf7cef1e3": "a2822e311581082d7b02b8df89cb8ab2",
".git/objects/a4/3ee0202e8f5d1a563726e14112bd4c0ab857fd": "68d42064aacf2362af933b66e54a24eb",
".git/objects/a7/e96c4c3816949c6dab7c248e898ce87925ccb4": "08626994c4051f362fe3ce061b4430d2",
".git/objects/a9/41928b37dfb6809b0b8f784cc63a9bb64c3b93": "4dadb7985b1fcb8a6873fd19e478ad1f",
".git/objects/ad/bb218fa229613f045ddce2bcec0a352228ca65": "2b79a98f00bca62bd5593fa1c665a976",
".git/objects/b0/549168039f0760a5a757e9f088de8d8d0f236e": "54d3d84fdf204c7d688363f8e27e2df9",
".git/objects/b3/63b6d7110328bb05b3050bc8ff7517deb4d12d": "b2b9c3da6f3f2272242a3ed39d1a3b5c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/c6b2904f02d706cdb53d45b2c307bfed06eaab": "7605182879f8f2d5d3214dde40a78028",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/b4b8930e35c6ddceb943c559ff6ee70aba1930": "7187f6c1587a9155695eafed801b6d85",
".git/objects/bd/21735d6ae64b664447b17da1f735f814936bb5": "1bdc843396146607a23bc1115b7a8d70",
".git/objects/c1/0df3695d5edca4f2e2e66c0de96cf5f5df1d39": "6c4a9bac7c33b091bcef4c7ea95e4932",
".git/objects/c4/327082b953dadffd1072aecffb8d2eeb2b797f": "f2883d93ffe59da1d2d2f50ae6406d9b",
".git/objects/c7/5d85880dea49c5cfe69d683645f3b1d60ab79d": "4a877e8d474769a219fd9e624f3ca57c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/75c25eea60ed8ea1162bcbec346ee7f5c00fac": "6ac76257dd14a95889af0c64b25ece90",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1ff41b5ab0645b6302155be5f3a1e2987095ac": "1eb4ee941507cecd0542f210e589f307",
".git/objects/dd/ebb56e974bba6df65c6ac0dfeffc9b15f78494": "986e18eb09dea84f39c1143d9a98126f",
".git/objects/ea/116601802624ce03cac5331b2f4883475e870a": "825fda93d071dddc7c511b8cdd538851",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f0151d06cda1581ccbec955e804644f502bc12": "8f55dd4b2a134fc6cbe37320487de977",
".git/objects/ee/c0171abee40c7f893e9260287b00ccb0fb2416": "fce13c4f0fad63a33e1742427be78511",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/42c8632cbae51fad32d18363665eddfd071e33": "f5fa3aa949ccf0400acb47853e3d580e",
".git/objects/f2/847694e304709a08bc733031eb0c733952ef51": "fdf094335037f494d58484173d57dcf2",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "f08cf2cef4317039cf8bbe88e29bb759",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f08cf2cef4317039cf8bbe88e29bb759",
"assets/AssetManifest.bin": "285ec540dd2a92374d99b478cc05bcff",
"assets/AssetManifest.bin.json": "4e5a72837e585429ae39aa41205df1cd",
"assets/AssetManifest.json": "0559d9bfa5913f928409a4b94945730e",
"assets/assets/images/loadingJson.json": "4b614ca2e9927c01d9f0a5b81a253549",
"assets/assets/images/logo.png": "4f2be63ea1c3904f1e6b60780f89ecbb",
"assets/assets/images/profile.png": "e5e01279780f92f82edd702f74100c70",
"assets/assets/svgs/4882406.png": "8c911c1105507a6ac285189a40a06d43",
"assets/assets/svgs/affiliate.svg": "8a4fc56516d6078bf67925cef8160a2b",
"assets/assets/svgs/analysis.svg": "4e1b3ff8f61024fb6c92889904a23363",
"assets/assets/svgs/apiManagement.svg": "dbc797183f45200667d1e02180d46f45",
"assets/assets/svgs/calendar.svg": "7cefa4bc0d6b470c8432a6d3d919fe40",
"assets/assets/svgs/campaign.svg": "47f4d0dadc1a6f307fe486332ed288c1",
"assets/assets/svgs/categoryTags.svg": "6563ec4524e6347eb5858f805049af65",
"assets/assets/svgs/contentAnalysis.svg": "d4dcdba70614c90586d771999f92ddd1",
"assets/assets/svgs/contentManagement.svg": "9c28611f1c686d496427d12f8703a91e",
"assets/assets/svgs/contentUpload.svg": "4857925aa7baec899ca80215b280a9b6",
"assets/assets/svgs/dashboard.svg": "8ae45de811f2d8fe35cf7f44c83f4af5",
"assets/assets/svgs/helpSupport.svg": "e33cb9ee55e75718819cadd8224c2ded",
"assets/assets/svgs/importIssues.svg": "0385fe66936871fdd07d51293208f7d0",
"assets/assets/svgs/InvitePeople.svg": "bae8d1d46928e0897fd2580e46abbe7a",
"assets/assets/svgs/management.svg": "19cbd318330750653dd4bfd3a7f30251",
"assets/assets/svgs/salesCommissions.svg": "ad9ee82388254f3841e9474a9ca21e6d",
"assets/assets/svgs/surveyReport.svg": "fb45d7b344d3f28165fe526139a0e854",
"assets/assets/svgs/userAnalysis.svg": "5bab7f85dca19a585e0aa11e6c46157f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "87687efe88d603bb5f62278db2345120",
"assets/NOTICES": "e063d68b10b4a3400eec528e76f867ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "f40ebae2a862b4f095fcf7df505757fc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fe5a257f155648c05e28bcaca63f85a4",
"/": "fe5a257f155648c05e28bcaca63f85a4",
"main.dart.js": "c55aa60a13d0874a0a918be710f05c2e",
"manifest.json": "ce0c328e0be3d64a5061e1cc0f76c6d4",
"version.json": "47e9872625361073b7b774a70cfdb858"};
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
