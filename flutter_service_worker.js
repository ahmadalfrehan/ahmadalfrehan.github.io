'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "754e03ce60e55765bf3383ce0169a2d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d2d73d35d58afdf85e329db2b3981f51",
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
".git/index": "bc81a64267245625914f3f3f287848e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08382808b1e30bf8dcd2a3ef37177338",
".git/logs/refs/heads/ahmad": "1b5065d1282bc63ca9ec0a12a922d9b2",
".git/logs/refs/heads/master": "2f2d59b0174ad89f9e3c19d1fc7e22e6",
".git/logs/refs/remotes/origin/ahmad": "617dd019f875b7af8f65b6f11d8a46fa",
".git/logs/refs/remotes/origin/ahmadalfrehan": "597f16e1f09c22d09be428ec4977a5d3",
".git/logs/refs/remotes/origin/master": "63ff408710345eb0442ea3aa57fe0b8d",
".git/objects/00/451a7a6e652f1cc0a84f7f510eba4928d80451": "3210ab8aba89f2f176a9fc77e83e1470",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/02/92c96a291278e6b13b2a7c013faa0359a39819": "c989598503c0f6db18036ebab628567a",
".git/objects/02/b67239f620536634f4129f81904963cdd44a85": "5fef4d9215e07374b3037f9ca4549970",
".git/objects/03/200cdd252b9d11e6f9600c7000cde1dc899ac1": "6b71614eaf077bd0ad95b607319c5eb1",
".git/objects/03/c56dc1ca4d95e905eb55502c5cae399113d430": "0c9b81ead059b149758524b5e8d36f74",
".git/objects/08/b7a80f57d817d83cc549497838d2a78dbcf2d4": "870092ce72242d0d1d446a5f325038a3",
".git/objects/0a/025bbd85fd53521fbfc6c1309604bb74a862d1": "9e07cfc64730d19d40542a7e8e76ef72",
".git/objects/0d/15e79201754eedee07f4f5dbeed2df33207913": "6dd0121e867ebf39d99b8a28a2e95469",
".git/objects/11/afbcbb0bdd17183e61204f9de87ed6ecf193a8": "cc530880f8b9275f41309b3f650058f8",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/4edbf4114f516035b82a1fc32f934ebe8bf18c": "5314d61db45c93814781291fa4f248d6",
".git/objects/19/5d15c9162831e5c613ae419c00edc9dbcf4e4a": "40f9d842f6c67ffb60f525042a62e0c9",
".git/objects/1e/3d92c8d600f14344ff18801e3a88d6855b8b92": "cbf2d72ae77d689a6b40a045c0e20931",
".git/objects/1e/a875e8c7cc3fe52a057a8e2dedcd98b1a55a97": "e5cf352277022eb971e553251868793c",
".git/objects/1e/b64d2d3e0ae278637d54d3f0691a8e7dabee50": "bcac6a007d04b22affe1b75f48bceae9",
".git/objects/1e/c0866c5d54f2758bd1578d5bcd00f5fd0defec": "61b60d836923aad95c413d0fe1ea7f45",
".git/objects/28/c79fa862ef9f67d5904274e99ac2db2d381698": "3200724b5f638bbd5e5faa4fa135e9d2",
".git/objects/2b/5909875809c116af51c1c2db5203474af0a763": "c0f4bd6568c1fa87fc3ec95f4263e96b",
".git/objects/34/63d12758f51bec319c33add3df1ca8115b57a3": "791779fa7845a08305ab024010f5e42b",
".git/objects/34/7b9540b77b2a9069aa6b9f55d2432bb67f3d94": "a8195a6a0fbc0a3dc3c4933b9cb469f4",
".git/objects/37/0f0c0ec65f3f167a6529586f2947da2ec7dae2": "1759a7d594681690990500e2c8b96328",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3e/d6f06fc01d97867762cd1649fcb0487400de5e": "9f65f246268be37e18985fbf73a128b8",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/a96cdb5d28df809bba3b9bc4b24e643a7249eb": "bc8bbaa3c01cb1032af80f1e3f4c382c",
".git/objects/45/cde9760acbc765008c316aebd4286c25b9ed2b": "8572505b83a7bc4a090e346f3d99affb",
".git/objects/46/773a9c99a9607c06e1706fd7ccfe089f215f3a": "4042b14962c45a7ea9b14b4c2b39355f",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/545bd7ab8def466c6fd1b546d19ca87e2effe7": "559d984d2b2b56131171d1e0994f19bd",
".git/objects/50/0fd30ba0da003536629df3c835fbcb032b40d4": "281c2d5423395514691a3d8db23e2d4e",
".git/objects/51/7b5027e5b12168e7b291d293893eb30a533f6a": "94eb92590800bfe93a810a3365f6de19",
".git/objects/53/35c8bb776880b0b7c2fd388732c78b70947861": "1749275035f53c38b8f7c24d28d8013e",
".git/objects/54/f4e018ca988ee030fa4357180a1eae4d97f72b": "7a1a968ad534b0757e24fed92ca3fcac",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/1bd704afb502992429ffb965b8e57894f7617b": "803dc07d454ddb9cb5258bcc48926da0",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/5c/5ca210e781d429ca404a2b9fdd650435487158": "42fabc2d601cc1a2c5996441df10c079",
".git/objects/5d/e871c39d131beab6bd01ee1b8197c35e669d96": "4be71aeb0dc47bbc295f671dc0216de9",
".git/objects/5d/fb9cf5e8b10861d4e794a49d208cec58ed924d": "8364cb2a813b2de035ecf60dba0ae3ba",
".git/objects/5e/053fac9f8ac672f968c8cb842ec910ca2b1918": "06e6d2da7117ebb65e610a2724c0230b",
".git/objects/62/becb21477c6383aec2ecd8dba7a0e9d7223da1": "346533d6253104767c34e8c6106df404",
".git/objects/64/5372f1f7fdd1e5130d17ddcf234b4131ee50c2": "494f64a07ebc99b8ed5534f7d896bcfa",
".git/objects/68/333e2f5a0122ad0525cd16be93b7eeb46d6ccf": "2bd4972031e669b5257e8578fca85edf",
".git/objects/69/f1dc9b12799bd66248e916f21e077503b8d161": "cc701f4bcbcc96b1992be56e58dfe12c",
".git/objects/6a/29ab321c8d72612bbc3153031787899cf41ebe": "54e902205309ed1702bf61941d36cfb6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/2c77a082bfe55f1b4bd968d57e21e14168e5ec": "88077106ef9d7b18e656edc6c0b24fc1",
".git/objects/71/4b12e3ecf15a5739d7c0075633ade42b32aab5": "b756eb46d3ab2a12ab92ff68949835c5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/4d978f6ab81b33d04797c02e33a760ed75d349": "92ecca0a16572f0cfe96ee91e657defe",
".git/objects/75/a5044e06341522ea90c6e23e9e0b492f4e3693": "1c2c1a9788c8daff2add5a205585c347",
".git/objects/76/198146c646da3e9745f314ee4e7f548393c3a2": "f7061c7c02e842d207920abd714cff01",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/3ef87ebdf350a19fc0073077f606f9632fd8a4": "1199cb71165aae284aabafa0a5df668f",
".git/objects/81/c61d3ae82184093b7d2a8ccd2d6986c2f64f99": "b2e3e272008fc6cec7fcef47b6c6888e",
".git/objects/87/ed14fd5d896f13886180d16b0085ec3602aff7": "a03bc384edf0250f61487caa4e161376",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2822fb0ba65e4c04fabb1d59ec0413a9a99c7b": "1defe5fc149cb3480084c4819c78d7b6",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/9435b06e9cdb8f50317512a51d9ab58c1e29d5": "057ba07c64b98f00ba48efc36bd9fac4",
".git/objects/91/0f9936950b6e6cc5697c2e6bc761b7f80b9d76": "0d451e0b1951fee6078c1b86e7f2660c",
".git/objects/91/304030b6e890b3be7b94397bf8a307aef6bae6": "3cfc0db55450d89c9461dd9f19e4461e",
".git/objects/94/175abfa490a135c63b4f5e6a82920382e226b8": "cc9545cffeaf8066cfb7f0d13efeb0d7",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/9b/53806f1fd761cf03a535c2b6c413bfa00b72d6": "ea3ce47fffa378bd9ec6bdd70b087cf8",
".git/objects/a0/a0498487ba9a9cf7b1313964096e50c2757492": "29e2ca2afb5737b23121c966c5f2124c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/b35df256e994976c21423b4d43e00c286adf38": "0e7d25053b81b0e4a6a35029a7afe5de",
".git/objects/aa/312ad237895aac4727b9057c3caa1a29986a17": "75282f8c903b96f667d85df826fbe159",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/1387eafc73b327341eb7203c2ca729dec1f1e0": "4ae6971dba79eecec6136307a3db6bea",
".git/objects/ab/b1653910bbdc9b2b996003e1128c9463132225": "af62f2bad4bdd16acb636aa89cca2760",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b6/29202e52385191257e4ab425b913e892f26068": "2725c55176ee4359adef5550b8be9d34",
".git/objects/b6/eac54511a4bea3e7a7c6b3c1306c36d6c861e6": "5110745292b8de49c8d67663f2f7488c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/425ad0f45127dc73c502ac326fb9b9b587fede": "74b7ddebac037eee868aa7f79140d6d8",
".git/objects/b9/a80c29ed33a32e8f3ad39978c4cac6bd0fa19c": "71b40360b44b849e59369d8cce9fece7",
".git/objects/ba/6647eee8ac41e6e57e28736c6bb4e35f5f20d4": "c50213f64530f9ccbc31a57d6c70e7d8",
".git/objects/bd/05a850b3fb54d262985d9aa1d923136e073e43": "1681716338d28b42c52a990e5f5a64fc",
".git/objects/be/6a34aaafac1938a8e643ebf27d020f5226b7f1": "9545fe1b06d67da23e11854b214cc47d",
".git/objects/c1/d88e48c92221865886c31e13ac7d5340064b3f": "5a2a7c7c8374c1f4afdaa6ee59dea783",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/b00ee5473e084d3bfaeedc2eea0b95cef9376f": "f12bc86e09cd2022c3d3967388b70bec",
".git/objects/c6/0c1bbe1f8a5c64ddadec2ee4a3b36752b10115": "e1a1a8feaf005461992db9c5ea8ee65c",
".git/objects/c6/93a419f150ab13d2e9fcf26f1013b30fc8e64b": "1118feaf2a60e74a08100c26f0fc0dbb",
".git/objects/cb/05782c84ded2212bb902eb2d4744b4d0886352": "8c9ea799ac5c0f53bda075072381e939",
".git/objects/cb/2cc06b250601e95f2d22dd25973c59bb6005b2": "deb5396f51a85da4b2d0d2f41ecf526b",
".git/objects/cd/242c89635583381de859d477ddc9f7b752a7b3": "5a4f0592ed9307f86b6efe0e3b5bd2b9",
".git/objects/d0/91c28f04211f6ea515ecdd907ecf6e16ed0d85": "f9f4b973fcb52d2080a3abfd4b71e50a",
".git/objects/d0/df984cfcea5ab1dc8d14965034792b3fe1e181": "27ac4394a21d62a7afa1077b722f60ff",
".git/objects/d0/e7f8c17d4118117a24794bb33f9f13ed7b2b28": "ecaf33daf392ea599611d5868df43281",
".git/objects/d0/f3574dc67470b345a09dd9b9092fc10e4a4021": "8e2ab544a6189a6b09053794b7d6c9b0",
".git/objects/d1/7fce307edaa7b25126f93763fe8506eb2c7c2b": "3b7ca78c403b08bc41874a6b232ce417",
".git/objects/d1/fa2d99463575a10b9404ab777fa151b474e881": "2f5ec1436d4a901e5418bf812e70fac4",
".git/objects/d2/6207c0aee3f462ad7c066c6e2110606204363f": "9c0a41776c84d2c9add9f368634bcf03",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d8a9fd661323d495d3639b54cffdb68310c4ba": "8ba6156e6f034ece971c6705b090dc7a",
".git/objects/d7/b5bc90ae260d5db570f82841f2ceb113b939b3": "7012a225491e22d8d9c4a428f8035fc4",
".git/objects/d9/5521934945db23fcf417489a28ce079f790d35": "b896cb130ff15268fe64e7cd490caae4",
".git/objects/dc/976458d2d1e536afaa0c30f02d852ec37686e1": "c70678e93119cfb43a321fabca106f9f",
".git/objects/dc/a24fa3ed695312b08091e5dca09ec5d3d5bec9": "4e372ab6a61e6c53a06854fd62cdb6e1",
".git/objects/dd/80b7be3beb10d03f44da025e5b91252a675e28": "5f124a80ac0e090b4fbbaa6d9c7c4884",
".git/objects/dd/dce44b4a097c3c204440f80befc2ef47d411f1": "d8f8d1cad4187e70999dd0751e782fca",
".git/objects/e0/2fe5fa34da8722c2eb5eddbfebabefbfea86cd": "22807ec918be688c313a57d534147ee7",
".git/objects/e0/e6c9fe02e3d08e3ed8d9553d3957204672b54e": "1461ff515584fc2370a7fa04ab3d286c",
".git/objects/e2/9d495fa41f28cbd284ca5dfe535f588ca0228b": "a24f2222ffa551f89cc0bc502212c85b",
".git/objects/e3/e46f779392352ee4b67e57bb205b54e2f325a5": "cd3c73c5782b0b688882af29e17bd09d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b5c8c6a9f818df7a36f62e1b658f71db34a088": "0e77154710158700884db938f0133d70",
".git/objects/ed/cd1eb711360b508cb90e2368de1de72d089d0b": "b78793140c493692f54814b18f444586",
".git/objects/ee/35ffdfb3a4f44559a2ee1bc69bdedb6d369397": "dfad4748c623640b9ccaea843ac71440",
".git/objects/ee/ca2600b337e4155523fdfb339b2e825f0e86fc": "18fae22ff8b5ab02f44be29b0c36eca5",
".git/objects/f1/51c02dba1183b4ae63d13ce9eee2cce4b5a274": "c308c8b37938af034bd43a71c7195279",
".git/objects/f2/70e30e620d603ea396fe59d81026d84faf272c": "deb39d35841f339938a52e43cf0ca9ed",
".git/objects/fd/ff32a88be64ed7c3dc745d741827ed8b033991": "f34e3091a01c839edb0a58c9bdc1d647",
".git/objects/ff/5f4efe6c9bd295ab67a1b6c4b62c281dc8c713": "9548971ff17299cf2b4fa18b996aa618",
".git/objects/pack/pack-ada6beba8e9768781acf8aedfdade062b0c94145.idx": "2c789c89e96c895998e3f42305fb09b7",
".git/objects/pack/pack-ada6beba8e9768781acf8aedfdade062b0c94145.pack": "4ebd90305485e07870c2576749871c3f",
".git/objects/pack/tmp_pack_cRtxS2": "f890a42f19ce1ee339170abec53b3878",
".git/objects/pack/tmp_pack_dU2yJ5": "60ab7572cc371faf8098dd15913366c6",
".git/objects/pack/tmp_pack_esSfYn": "e5d330da8acdcded48d336edfe8f1ad4",
".git/objects/pack/tmp_pack_jTjbxU": "d80493ddffd24342dd0f93dac0f7593c",
".git/objects/pack/tmp_pack_Ka2b2p": "393e8a3892e8c383b78f6066e4c91c9c",
".git/objects/pack/tmp_pack_QyxDAO": "2ba3aa46b9c81a3c0e9b6d78a390c88a",
".git/ORIG_HEAD": "2549a0d338e3feebb4a4829f0d741993",
".git/refs/heads/ahmad": "617b7134d04506275c1d10380db70fdc",
".git/refs/heads/master": "260b445840fc6975dfb30294780c501a",
".git/refs/remotes/origin/ahmad": "617b7134d04506275c1d10380db70fdc",
".git/refs/remotes/origin/ahmadalfrehan": "fb34393c9d91a578fcf708f04682219a",
".git/refs/remotes/origin/master": "260b445840fc6975dfb30294780c501a",
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
"CNAME": "99ea3615c8f754585828b6afc34676aa",
"favicon.ico": "c02648e2d1c0082f94da14a565a5ddf7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"google6d200025ea91d3ab.html": "3ae388003f02f733bddf95b94816ece0",
"google833687854ec5d97f.html": "92c46b939eae1622bc41e03a7bbbb3bb",
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
"index.html": "f66c29dd61b4499b9aab01c9f513003f",
"/": "f66c29dd61b4499b9aab01c9f513003f",
"main.dart.js": "a6d318800464adc76bd0d91592ed0bd2",
"manifest.json": "cca5ff947ef93358349efac2bf2530e5",
"Readme.md": "d1ce89e0e6f573e514f179afd841e0d0",
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
