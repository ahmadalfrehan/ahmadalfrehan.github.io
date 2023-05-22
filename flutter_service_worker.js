'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "f4f0f4e251983069b5b84fce87a98a5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd092aeb85b78ab0b44d8e4fcc22a70f",
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
".git/index": "473cce7591dd519e9d524988a88e66cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b0a78c62a001b174b29c9c987697c52",
".git/logs/refs/heads/master": "7b0a78c62a001b174b29c9c987697c52",
".git/logs/refs/remotes/origin/ahmadalfrehan": "c9f3050343767cc7a6867bd964dd1eab",
".git/logs/refs/remotes/origin/master": "84977dc23ae242aeb6add4d00c3bdc9b",
".git/objects/02/6e05bec6348d26f95a74427a3381a736f594dd": "41643ad717857db9676601d859e9148b",
".git/objects/02/b67239f620536634f4129f81904963cdd44a85": "5fef4d9215e07374b3037f9ca4549970",
".git/objects/03/200cdd252b9d11e6f9600c7000cde1dc899ac1": "6b71614eaf077bd0ad95b607319c5eb1",
".git/objects/03/c56dc1ca4d95e905eb55502c5cae399113d430": "0c9b81ead059b149758524b5e8d36f74",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/08/b7a80f57d817d83cc549497838d2a78dbcf2d4": "870092ce72242d0d1d446a5f325038a3",
".git/objects/0d/15e79201754eedee07f4f5dbeed2df33207913": "6dd0121e867ebf39d99b8a28a2e95469",
".git/objects/11/afbcbb0bdd17183e61204f9de87ed6ecf193a8": "cc530880f8b9275f41309b3f650058f8",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/dd936dde3fe9b4597b3a6a421c6d64dca5050c": "17ed8e410e17623b6c5c62e019411bef",
".git/objects/15/c73a284574093941e699b660f9ce69f405e8aa": "a5917806601da20f5529c531529b73ff",
".git/objects/16/b238a1d492f907de086128c4a6393e97648173": "2d4ee9e97f94530b799045b06cf4f0cc",
".git/objects/19/b6069529f8c2c6bf3d6adf2bb1706181c4e963": "7a74c19a4026372febdd414168799eb2",
".git/objects/19/f1b417dafd0260122cce4b15094481d464490f": "cf28d8d3e30722cb04836f5f32629e91",
".git/objects/1c/12eb775703df92ba5e324c320a0f8afcabbdb7": "29ddaca81bff9a7ca45d0d0da4a2eaf1",
".git/objects/1d/5a3dd743bc8f2a8a8fd2ddb29f3faedad18a23": "507706356d4a05a7ebb71739ebaa2e4b",
".git/objects/1e/3d92c8d600f14344ff18801e3a88d6855b8b92": "cbf2d72ae77d689a6b40a045c0e20931",
".git/objects/1e/b64d2d3e0ae278637d54d3f0691a8e7dabee50": "bcac6a007d04b22affe1b75f48bceae9",
".git/objects/20/b14b785b6abf3be238ca677bcb4927597644ec": "06cfc90cdd986545761555571e3e44dc",
".git/objects/22/10cca47bc3056d3e8289e5d0b5c3d2f8bf98b2": "4a0ea461b8041974f5c356095e97e29e",
".git/objects/23/dbd6c7582d64e4328b7338f393530c96af0c94": "817cc906f42f30500cd8dbbc0bbf9dc1",
".git/objects/24/6c12db541dc0713504e27e1ef8efd8b4dd50f4": "a0bc936733827c8ba1af5739230fc3b8",
".git/objects/25/69362589c450434a32415b18e73d1e510291f5": "4755e78cd65ff706ee94fd71c54cede0",
".git/objects/27/05a4b3061ae69035335ba675c2ef61b142f942": "180fc1cf1bcf8017eed98e4c5f964f9b",
".git/objects/27/5b7382c70ccf27d20e0859385e2078d7b49242": "0ee57e2d653553f3d0aa7ea7320fa964",
".git/objects/2b/05a7a6a37a8b4b9b42e0e3922cb10826c8f668": "4f6a004b40e4a43d6939ac9117885a7f",
".git/objects/2b/5909875809c116af51c1c2db5203474af0a763": "c0f4bd6568c1fa87fc3ec95f4263e96b",
".git/objects/30/ea10755185c1256236a961203cb6a54fe9cd38": "b669f7a79cb12969ff296605ab71950d",
".git/objects/34/7b9540b77b2a9069aa6b9f55d2432bb67f3d94": "a8195a6a0fbc0a3dc3c4933b9cb469f4",
".git/objects/35/939d2a5578a5605b5d485ea811e03d9e98da25": "5e38c8c887fdb6538ab9278151959e16",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3e/1fd6a235acff26be3174043ea0b0370ba10a37": "c862aa7bc1579fecdce1245c1d1ddfa4",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/e31aa663b7eb718031dc22430e974656c7d5e7": "d07d56f6fe08cf192bdc79651aecbfff",
".git/objects/45/a96cdb5d28df809bba3b9bc4b24e643a7249eb": "bc8bbaa3c01cb1032af80f1e3f4c382c",
".git/objects/46/773a9c99a9607c06e1706fd7ccfe089f215f3a": "4042b14962c45a7ea9b14b4c2b39355f",
".git/objects/49/2975b4051610d5209a1488cc422377a616bb6b": "3b28e67ba4e425433fd3b31f39f2e460",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/055674976019f5d6e2539ab84571a5561c594b": "c717b5e9df4abbbfab00f738ec99af12",
".git/objects/4d/545bd7ab8def466c6fd1b546d19ca87e2effe7": "559d984d2b2b56131171d1e0994f19bd",
".git/objects/53/35c8bb776880b0b7c2fd388732c78b70947861": "1749275035f53c38b8f7c24d28d8013e",
".git/objects/54/1f6fd3d8dd6f3728680185b594d4efac0747a5": "0ce74bfc25915590a91b65e4292a7aae",
".git/objects/54/850b9b44b0b0830e0f92e65e64b67bc0ea636f": "3aff231a7669045d4a882d82bb452f4f",
".git/objects/54/f4e018ca988ee030fa4357180a1eae4d97f72b": "7a1a968ad534b0757e24fed92ca3fcac",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/103be00458278e7e3013bf22fe29fe8cc0eb68": "dbad0f0c31530fbba3949d75a1224c4c",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/5b/0ffecd96713f812da4836301dcb7b385c9839f": "b0bda90aa600812a3b0ae40c736b93a0",
".git/objects/5d/fb9cf5e8b10861d4e794a49d208cec58ed924d": "8364cb2a813b2de035ecf60dba0ae3ba",
".git/objects/60/626a9942b5ec681ea6abcdc059138629b05221": "e20ac2a41f53d962bebd9ce19aa2e5f9",
".git/objects/66/7d14d10bcb2f2646bce3b55bbd140cef396d35": "94e9a125da9049bb05b6c568dfae3b65",
".git/objects/68/93773ff1f8a620063cceb83014809216b3cefa": "80edc2d7c5282dfd1274013642930f56",
".git/objects/68/cc3514e76a17a06e4941203d6630aff0113a04": "6834c681a2cfb5484d74ea2157b19186",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/2c77a082bfe55f1b4bd968d57e21e14168e5ec": "88077106ef9d7b18e656edc6c0b24fc1",
".git/objects/6e/0ff3876d799d2186b5addd26d1412b98929e10": "2034002a19717456ed8ab7f577262b45",
".git/objects/70/af22483b05d17472471e6564962c217ca0dabe": "941e35f8664d8302725dc304d7941c19",
".git/objects/71/4b12e3ecf15a5739d7c0075633ade42b32aab5": "b756eb46d3ab2a12ab92ff68949835c5",
".git/objects/71/df112f92e8d29df73225f4eafd1380e28cd144": "1e5dce93ff5329104cd5bc7b293e944c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/4d978f6ab81b33d04797c02e33a760ed75d349": "92ecca0a16572f0cfe96ee91e657defe",
".git/objects/76/198146c646da3e9745f314ee4e7f548393c3a2": "f7061c7c02e842d207920abd714cff01",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9d7dd4e5bc1d94dfead24eeb19e15cb1cff9ed": "ebb0bf70f40897c93e9939576a508b3b",
".git/objects/7c/63c88150429a1235c40145bf601cc4472a0449": "ba389ef9efe835c70394aa73868ba0f7",
".git/objects/7d/e2353ba0b9319f6727db300bf0a3132a82a18c": "25c745be23079f8355a72d01077aae4d",
".git/objects/7e/0cb25703f9c6264abf6423c587058e8ede1c08": "f9ed082c54a582b3bbcb4cc4764ab2aa",
".git/objects/80/6a543aa931cef0cb74ba482e9ef6be236ba0e5": "2c5bf8b6cdd60c03ce058c0a63e179d9",
".git/objects/80/f680d86a65d8161a791d976fccefd225390152": "64a31b8e543ebd6b010f82c45756b149",
".git/objects/82/5aa60c841ffd6125f9494f9ab203c0fbb314e5": "d651af6d0ed18a43937d64884567c05e",
".git/objects/84/913a4569241f06420845e3cbed81436b8cb8e1": "def328857d819a7b9be61913cf349209",
".git/objects/87/ed14fd5d896f13886180d16b0085ec3602aff7": "a03bc384edf0250f61487caa4e161376",
".git/objects/88/5a9055f708d8a3973fc27fbff25f28b4b3e4ae": "3cf97851664b680b1adb7c435a78f222",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2822fb0ba65e4c04fabb1d59ec0413a9a99c7b": "1defe5fc149cb3480084c4819c78d7b6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/5db92466142b412c7627921bb12ec7cb5e2097": "df3dedd785368d6025b85289b991d88b",
".git/objects/91/0f9936950b6e6cc5697c2e6bc761b7f80b9d76": "0d451e0b1951fee6078c1b86e7f2660c",
".git/objects/91/d092d2f52090e50e91f917cb8263c935a4ff47": "d507c4f251494e8660c93802daa752c7",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/95/2163954537933baa99a9c978288451e2308fab": "159322de345b7da8364f7305e9daaea1",
".git/objects/9a/ffd58bd041dca250ed1bea132f670327268404": "a8842756ee922b051ccc3e461c2770db",
".git/objects/9b/e40c7ba1b497d8f0af9e92b6fd16bc7426817e": "d1e8ae131c0cd169d397ab5417debb24",
".git/objects/a0/0c7ecafaaebaca88bd3c1933e41f063ab089a5": "6f7b637c15d505a8e7258d3bb5f806f7",
".git/objects/a1/3720b857dd71037e72f3d1899c9ac236bbeb7e": "2e64a90e1de2a7c4e4fd79287d4559d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/0dd65ace0a2674dde5d239ab99f9d8725da984": "e1973b129658906577c2918005e1ff22",
".git/objects/a5/a8f9de50bc48fe54540d63f29159c27718808f": "b0383f97cd287c430ee3979448cfe4cc",
".git/objects/a8/8757860442728313ee0bff9e28a7cc39664775": "a2648b1ac9f2f03158f54f1da90cd6aa",
".git/objects/a9/990530482154fdff071a9e94ac5e25156f1fdc": "c155ef9847c61f7c4ae6e32a506c950c",
".git/objects/aa/312ad237895aac4727b9057c3caa1a29986a17": "75282f8c903b96f667d85df826fbe159",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/11cbedd2fc8eefc2c7b02f65e2c1e3fc781dad": "9d663db7ff96dbc776ca10927bf62e0d",
".git/objects/ab/5b877a11cfa4d06ef149c595c28ff5b5ef2799": "f67fc65032ed8ba8dab71cfe4870b6b5",
".git/objects/ab/b22c8d2d6b194ad38fe390a304a2c7694a6f17": "34607031960ac6f89b5261fcfa3c2720",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ad/669d468879c88fa63931cf076aaa394409edec": "0a009cc9a81f7a1d7b89d54508866d09",
".git/objects/af/03fa2cb045edf8d16963d797994b57446f9a10": "ab0642706b882fae30a35ebca5cb5de0",
".git/objects/b2/a451da1d323befd50cd8dd8db0f2bcb83946d2": "a862dc611d1588c2d7d979e9685de9cd",
".git/objects/b4/89323bdcd2983d8530b77770837dd35e775095": "551189dec4cd97af44edc67f85efae64",
".git/objects/b6/29202e52385191257e4ab425b913e892f26068": "2725c55176ee4359adef5550b8be9d34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/425ad0f45127dc73c502ac326fb9b9b587fede": "74b7ddebac037eee868aa7f79140d6d8",
".git/objects/ba/6647eee8ac41e6e57e28736c6bb4e35f5f20d4": "c50213f64530f9ccbc31a57d6c70e7d8",
".git/objects/bd/05a850b3fb54d262985d9aa1d923136e073e43": "1681716338d28b42c52a990e5f5a64fc",
".git/objects/bd/a5b54cc6f1db15bc07c2202fbd4708bbd4e67f": "432a4a2d3624741b84df7ecccc9f7846",
".git/objects/be/6a34aaafac1938a8e643ebf27d020f5226b7f1": "9545fe1b06d67da23e11854b214cc47d",
".git/objects/be/b198d183ed5ee4add3ef27b30a9a3f1459a8cb": "d6b231246e446cbf89dffa648b231e90",
".git/objects/c1/d88e48c92221865886c31e13ac7d5340064b3f": "5a2a7c7c8374c1f4afdaa6ee59dea783",
".git/objects/c5/b00ee5473e084d3bfaeedc2eea0b95cef9376f": "f12bc86e09cd2022c3d3967388b70bec",
".git/objects/c6/7cb7b06df084e04c3330bf8a7367a89f774665": "956027b0e090e5cedc0a246aa91b1035",
".git/objects/c7/e4efeae1cb92e60b0995507e9577ddeb64c0b7": "ed2bc74fa1e3b9fed27b9af0675906f8",
".git/objects/cb/2cc06b250601e95f2d22dd25973c59bb6005b2": "deb5396f51a85da4b2d0d2f41ecf526b",
".git/objects/cb/ffa4dea8854f856856583271fa46043b95d703": "40f7f4f2ec690c74dd675d6a4555c5b8",
".git/objects/cd/242c89635583381de859d477ddc9f7b752a7b3": "5a4f0592ed9307f86b6efe0e3b5bd2b9",
".git/objects/ce/eef8c1532114c4ccc6b0268ecde1a1c077c88f": "04afcc65a6ef355ea854396aa3f4a3cd",
".git/objects/d0/91c28f04211f6ea515ecdd907ecf6e16ed0d85": "f9f4b973fcb52d2080a3abfd4b71e50a",
".git/objects/d0/df984cfcea5ab1dc8d14965034792b3fe1e181": "27ac4394a21d62a7afa1077b722f60ff",
".git/objects/d0/e7f8c17d4118117a24794bb33f9f13ed7b2b28": "ecaf33daf392ea599611d5868df43281",
".git/objects/d1/30afda095c85066479293030974357d37a15bf": "f42877e0c493995280008d209a8cd016",
".git/objects/d1/7fce307edaa7b25126f93763fe8506eb2c7c2b": "3b7ca78c403b08bc41874a6b232ce417",
".git/objects/d1/fa2d99463575a10b9404ab777fa151b474e881": "2f5ec1436d4a901e5418bf812e70fac4",
".git/objects/d2/6207c0aee3f462ad7c066c6e2110606204363f": "9c0a41776c84d2c9add9f368634bcf03",
".git/objects/d5/55f8f66d552c5901602803d37ad8e8fe2cf360": "8230a79c7229b8bd290d22e65756cfa0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/b5bc90ae260d5db570f82841f2ceb113b939b3": "7012a225491e22d8d9c4a428f8035fc4",
".git/objects/d7/e368c95b6b3c4845be4b892d97dd0264754c65": "3ad628568fac9bf03e56b34d1dd74d8f",
".git/objects/d8/55df027ff98d055ada6b7ed2930b232eab3aa9": "d3d9637cb0afcfd6293867ea954d22ea",
".git/objects/d9/5521934945db23fcf417489a28ce079f790d35": "b896cb130ff15268fe64e7cd490caae4",
".git/objects/da/7e4bba1818e4d3e1a44d63e2c2be893776798e": "d0592547ca396d57600cf7c6b8730a94",
".git/objects/db/cccfcc08b9bda94db6809757220f4876f7ca19": "974fc6fcb9220451ee2671442f2dc6b2",
".git/objects/dc/a24fa3ed695312b08091e5dca09ec5d3d5bec9": "4e372ab6a61e6c53a06854fd62cdb6e1",
".git/objects/df/e49fb317b36025c6d56de4272283399724f19d": "17613b1487f4001a84fd176ca5c58f1a",
".git/objects/e3/e46f779392352ee4b67e57bb205b54e2f325a5": "cd3c73c5782b0b688882af29e17bd09d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/356d69a3c965780b56d480412754ee61df2194": "6b3d005508dfd7fd714c1d57d8ff7238",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/d9088fd7bc69612844338a25229c43caf2a83f": "2269c379407aeddf9296d059899d1e26",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b5c8c6a9f818df7a36f62e1b658f71db34a088": "0e77154710158700884db938f0133d70",
".git/objects/ed/cd1eb711360b508cb90e2368de1de72d089d0b": "b78793140c493692f54814b18f444586",
".git/objects/f1/51c02dba1183b4ae63d13ce9eee2cce4b5a274": "c308c8b37938af034bd43a71c7195279",
".git/objects/f2/70e30e620d603ea396fe59d81026d84faf272c": "deb39d35841f339938a52e43cf0ca9ed",
".git/objects/f8/dd423b5704a322d38ddc9ff9cf12a3d1f8b00c": "382cf31a3b724f3b0f768b62cad82616",
".git/objects/fb/b3af41d414693ec3228ed0424f5c0f764a5ce2": "7c76af3ed588a5d986c526e6d8f866b6",
".git/objects/fd/ff32a88be64ed7c3dc745d741827ed8b033991": "f34e3091a01c839edb0a58c9bdc1d647",
".git/objects/pack/pack-6cb94f8753e14cf9616d315f521ef1e4e601ae9b.idx": "1a679eb6e1a8b72636321b313cb33c65",
".git/objects/pack/pack-6cb94f8753e14cf9616d315f521ef1e4e601ae9b.pack": "a4c6fd8da4193c4b755aa6425883240e",
".git/objects/pack/tmp_pack_9GrNss": "2a9266b97a38ea6a67db5c251bf733b2",
".git/objects/pack/tmp_pack_OEXHGm": "8a53d1314102d93bcc63af77f644cd23",
".git/ORIG_HEAD": "0032ba4aacc39646a692461935245eda",
".git/refs/heads/master": "0e92ccf2e780d435927f8fe42e20cb8a",
".git/refs/remotes/origin/ahmadalfrehan": "fb34393c9d91a578fcf708f04682219a",
".git/refs/remotes/origin/master": "0e92ccf2e780d435927f8fe42e20cb8a",
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
"assets/NOTICES": "d3d5800c17bb0ab231b33b39afedd760",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "99ea3615c8f754585828b6afc34676aa",
"favicon.ico": "c02648e2d1c0082f94da14a565a5ddf7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf91c1d6d394399224619c23be2c9069",
"/": "bf91c1d6d394399224619c23be2c9069",
"main.dart.js": "0e5b549f2edb521e7616052154121e37",
"manifest.json": "abf2dad48b25b5987fec720a30bc4e19",
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
