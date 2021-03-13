/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0110592b2c51adb2cbff48348889b771"
  },
  {
    "url": "assets/css/0.styles.bfb149a8.css",
    "revision": "cfd403d349f1d20ec955de9ea3d0fcb0"
  },
  {
    "url": "assets/fonts/feather.3d2fa2e5.woff",
    "revision": "3d2fa2e544004aef2ea641698b715af6"
  },
  {
    "url": "assets/fonts/feather.6a750f01.ttf",
    "revision": "6a750f0119ba9c8ab8a994a4796599a6"
  },
  {
    "url": "assets/img/bg.dc1e8779.jpg",
    "revision": "dc1e877946dd4568404a432623fca8fc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.17c2be4d.js",
    "revision": "9c44400431a354b9ca72a84e72e25841"
  },
  {
    "url": "assets/js/10.6cb2557a.js",
    "revision": "b6bbdb9ab7c70b7d043c1fdbbe1bc491"
  },
  {
    "url": "assets/js/100.fbfdd59f.js",
    "revision": "0661d334aaac4cfab8cfdf7d033ba91c"
  },
  {
    "url": "assets/js/101.8c42cf79.js",
    "revision": "c62048fdfba4d3a9bda7aefc5a76e9a5"
  },
  {
    "url": "assets/js/102.c3870428.js",
    "revision": "7d38e36c68bab3154d7ef5e6b52a48f6"
  },
  {
    "url": "assets/js/103.5736640f.js",
    "revision": "7e3daec7bc8f40bb99ded3ce878961ef"
  },
  {
    "url": "assets/js/104.27e4a55c.js",
    "revision": "c63adf65e9143320aa8c4f1695256add"
  },
  {
    "url": "assets/js/105.506c1a94.js",
    "revision": "73ce9df60d4145786a50aab0fdca1d73"
  },
  {
    "url": "assets/js/106.3f8144cd.js",
    "revision": "7e7f12482c3ad74fce3ff016e1530b2e"
  },
  {
    "url": "assets/js/107.36de5259.js",
    "revision": "70af55dbe2e01efc00b8afa43ed5cc83"
  },
  {
    "url": "assets/js/108.a306e9fd.js",
    "revision": "62017ade605634f0f66f37945e00f963"
  },
  {
    "url": "assets/js/109.10a35481.js",
    "revision": "d037d08582567aa23fe2af091df36f76"
  },
  {
    "url": "assets/js/11.4a7be86d.js",
    "revision": "7f27b9bdbf00ace07e10632c33205c83"
  },
  {
    "url": "assets/js/110.481c184a.js",
    "revision": "a5f3f05e420c7af7d801a583577dae4d"
  },
  {
    "url": "assets/js/111.efc9cc97.js",
    "revision": "03fe1e6515692e52b896323904309b89"
  },
  {
    "url": "assets/js/112.66eb1289.js",
    "revision": "c19c477a2ed76b4f2aa41a55500bffcf"
  },
  {
    "url": "assets/js/113.c165e59f.js",
    "revision": "19bff7ada1eaa35f386770b1f098e79b"
  },
  {
    "url": "assets/js/114.777de200.js",
    "revision": "796387e4949910cda234db745979a772"
  },
  {
    "url": "assets/js/115.06ad87b7.js",
    "revision": "e5b46800f5c522b2285f2a17122fbbf3"
  },
  {
    "url": "assets/js/116.2be06d17.js",
    "revision": "af622921693e86e23785e6139066b4a7"
  },
  {
    "url": "assets/js/117.62f1e843.js",
    "revision": "130d7652ba19c5182738432013d2a927"
  },
  {
    "url": "assets/js/118.a2ca9903.js",
    "revision": "21fe0bad20671eb35469424230ac3cda"
  },
  {
    "url": "assets/js/119.a5a66ea9.js",
    "revision": "985aef5458915f014a66107dad0092d4"
  },
  {
    "url": "assets/js/12.0e2eac3d.js",
    "revision": "f6c8c0869989861e30bcdaf501e4bba6"
  },
  {
    "url": "assets/js/120.953a115d.js",
    "revision": "ab78f06f18dbfb159b7acc0daea27a4e"
  },
  {
    "url": "assets/js/121.c0e6e758.js",
    "revision": "f12078d270e87cb08ef9421af483c174"
  },
  {
    "url": "assets/js/122.b31373ef.js",
    "revision": "21495bae79d72804dc3cd810cd065f67"
  },
  {
    "url": "assets/js/123.d3ca7394.js",
    "revision": "d51401b7cd5fbf5c1940f40452bb07c2"
  },
  {
    "url": "assets/js/124.ebcd8da4.js",
    "revision": "4e6b1c5aa428194ea5ec9e38a0886f61"
  },
  {
    "url": "assets/js/125.68f31ddc.js",
    "revision": "929944193b130b5c9634e814eeb86725"
  },
  {
    "url": "assets/js/126.8f5b19c4.js",
    "revision": "61282cbd9b9b71598b6f1d7b8c6f61e6"
  },
  {
    "url": "assets/js/127.e8ef8749.js",
    "revision": "494167b5327403c62993dda89ed2ac89"
  },
  {
    "url": "assets/js/128.3ee601df.js",
    "revision": "ce6282e83f99ad4c72cd70a5aee56711"
  },
  {
    "url": "assets/js/129.85c609ac.js",
    "revision": "a7d14fed78dd431e6660b3de7007fbcb"
  },
  {
    "url": "assets/js/13.4c657f9a.js",
    "revision": "0feec785dd3eb48ec3a7a90bf0b56bf1"
  },
  {
    "url": "assets/js/130.6d6ff715.js",
    "revision": "4bfb58e4b17b49475a82610f94112322"
  },
  {
    "url": "assets/js/131.a09cbb58.js",
    "revision": "eac7ba51c9d0705ba25829d81efe18ad"
  },
  {
    "url": "assets/js/132.2c7fe885.js",
    "revision": "37e18536b539c5ac2043e36110d11140"
  },
  {
    "url": "assets/js/133.0f496100.js",
    "revision": "75dae359f87c19d16a081ce99f2994ba"
  },
  {
    "url": "assets/js/134.9c966d6e.js",
    "revision": "38de2af3158799f5b8a42a5b03fd243d"
  },
  {
    "url": "assets/js/135.09a300e9.js",
    "revision": "d88a4206192152875ccd44659733f6f4"
  },
  {
    "url": "assets/js/136.38cb0ac8.js",
    "revision": "4d52bcedfe583fbc54c99c56d393335f"
  },
  {
    "url": "assets/js/137.117942ed.js",
    "revision": "3dfc8875b11bc4d92c7d7b8e2e14ca70"
  },
  {
    "url": "assets/js/138.1d86c748.js",
    "revision": "1d0a3e7feab99bffe9082d2933bb42a4"
  },
  {
    "url": "assets/js/139.a85f5ee5.js",
    "revision": "1f94a1cdafa4bd8911943e65b714ce92"
  },
  {
    "url": "assets/js/14.4eb8092f.js",
    "revision": "eded937659e140fdaff3c3b6b307940f"
  },
  {
    "url": "assets/js/140.efe2c838.js",
    "revision": "d584f36646218cbe3df14e731256a3f8"
  },
  {
    "url": "assets/js/141.b10045da.js",
    "revision": "444b7bb8709bb5d908613e563d261842"
  },
  {
    "url": "assets/js/142.e16abd66.js",
    "revision": "3595f23f565a4fe83b8695946ec8b0a8"
  },
  {
    "url": "assets/js/143.d80902d8.js",
    "revision": "87445b212818f74e814acbb4457831c6"
  },
  {
    "url": "assets/js/144.2c8e1594.js",
    "revision": "35167a2a7242a13c57a1e4b5f71ab460"
  },
  {
    "url": "assets/js/145.914882d5.js",
    "revision": "bc2b912f5a631a353c2b0a6996d9a666"
  },
  {
    "url": "assets/js/146.1d080a97.js",
    "revision": "b56550ccf6ce60045852be600c16bc68"
  },
  {
    "url": "assets/js/147.7fbbcc49.js",
    "revision": "ab70bb3a042195358c1d0a992bf5dc5f"
  },
  {
    "url": "assets/js/148.3149ddb6.js",
    "revision": "78447c290cc38b7381403c2ff3ce759b"
  },
  {
    "url": "assets/js/149.04187b2b.js",
    "revision": "ea86e74dfc78868e0f2a815c00fd7948"
  },
  {
    "url": "assets/js/15.3cfb12e2.js",
    "revision": "145b69645bb695a7172ab0f27d77cead"
  },
  {
    "url": "assets/js/150.e01ae804.js",
    "revision": "4380ef855e8b35952a77921582c12e0a"
  },
  {
    "url": "assets/js/151.29bc8b2b.js",
    "revision": "fabcaf6432045eabf482e3d15af411df"
  },
  {
    "url": "assets/js/152.a8168fba.js",
    "revision": "cf033ac8400b6d935cfd117c7803f2fa"
  },
  {
    "url": "assets/js/153.442117dd.js",
    "revision": "61d8f9c96d9c8406687ed3cd76c85d06"
  },
  {
    "url": "assets/js/154.bd26d3a0.js",
    "revision": "9acf2f9c8013b5b2926fea5140b37905"
  },
  {
    "url": "assets/js/155.13da4734.js",
    "revision": "187a0f4a966378df4ae98a12c138c682"
  },
  {
    "url": "assets/js/156.a93f90c5.js",
    "revision": "f421f35a34546a4cdfc2a86c46c056e6"
  },
  {
    "url": "assets/js/157.ce5edfaf.js",
    "revision": "49a7413fb2f2faa8718a60f64bb1aeb4"
  },
  {
    "url": "assets/js/158.8fac0cd9.js",
    "revision": "21776e0de78fd01d99c565048b14174e"
  },
  {
    "url": "assets/js/159.64cc44e9.js",
    "revision": "19e3e79e067759e258c074b765ff561a"
  },
  {
    "url": "assets/js/16.52cc1061.js",
    "revision": "cd6df089fb95eae6204b811e6c438f34"
  },
  {
    "url": "assets/js/160.d42135f8.js",
    "revision": "6ec31d34bad7cf214457cb281c5e9ded"
  },
  {
    "url": "assets/js/161.c91dedfd.js",
    "revision": "4b09b3e722ca321602c1652c2d62732e"
  },
  {
    "url": "assets/js/162.ba90feff.js",
    "revision": "83be23b2d3eb58cedfc3e00b94eda17a"
  },
  {
    "url": "assets/js/163.eb7a7edd.js",
    "revision": "562bbb436a295eb82adab8490fe1b612"
  },
  {
    "url": "assets/js/164.0184a946.js",
    "revision": "12eb81d6636bc03ff0adfd317fa08b66"
  },
  {
    "url": "assets/js/165.fc02208f.js",
    "revision": "630814d3684325cd3a748839caa63fd4"
  },
  {
    "url": "assets/js/17.69d73cbd.js",
    "revision": "5f1c8e3b7b081bd65f657ef9eda0cde5"
  },
  {
    "url": "assets/js/18.bd2ab659.js",
    "revision": "8ce00d3084be786b6eef371983023b01"
  },
  {
    "url": "assets/js/19.24fb68a5.js",
    "revision": "3d2f0bfdee2b9e5035b4152c0051c12d"
  },
  {
    "url": "assets/js/20.d59daae0.js",
    "revision": "f49f3930ee99e52da2ba9e3547f28f6d"
  },
  {
    "url": "assets/js/21.3080b18b.js",
    "revision": "967b016912927a81f6f8c8c6119e19ed"
  },
  {
    "url": "assets/js/22.69840b45.js",
    "revision": "d2fba0515bc5bcc3ea3c00f156956d77"
  },
  {
    "url": "assets/js/23.8958ba00.js",
    "revision": "685b14897b2bad1398b2a5f3c22ace72"
  },
  {
    "url": "assets/js/24.e97668a9.js",
    "revision": "dcbfa4990b9d12763e1d7251f7d87c94"
  },
  {
    "url": "assets/js/25.4bd9de61.js",
    "revision": "4351ed8f1e0bbf1a788edcb91063cacb"
  },
  {
    "url": "assets/js/26.c10a97d7.js",
    "revision": "5f6c480aa631432e066e52175ec1ea03"
  },
  {
    "url": "assets/js/27.35e2e485.js",
    "revision": "e7f522e7545f0e025588f86706d39a63"
  },
  {
    "url": "assets/js/28.82bc1643.js",
    "revision": "9aff926d62d97cdeacdb5c33208498f0"
  },
  {
    "url": "assets/js/29.6c95a869.js",
    "revision": "420995aee47fce2d74c94989d5464c45"
  },
  {
    "url": "assets/js/3.a5eefe1a.js",
    "revision": "b93f051a511a94be2b4fee093b75cd12"
  },
  {
    "url": "assets/js/30.afa291da.js",
    "revision": "60461daa45cfc73fc27d7343f1b8a523"
  },
  {
    "url": "assets/js/31.5712d4a9.js",
    "revision": "bd53f0280bdbfeff2a26fa6eff6da35a"
  },
  {
    "url": "assets/js/32.3fcc54eb.js",
    "revision": "aef9f604cb3504b80edd1102812fdf42"
  },
  {
    "url": "assets/js/33.b8377ef1.js",
    "revision": "d7aa1a7c0a0b9099a2f4b3af16938e48"
  },
  {
    "url": "assets/js/34.6c6e4890.js",
    "revision": "7966174275968f8863c1379c8d51248f"
  },
  {
    "url": "assets/js/35.13e6d763.js",
    "revision": "e0ff2dc0e3db258c2a860946b18df2e8"
  },
  {
    "url": "assets/js/36.87f670ad.js",
    "revision": "a8e6df813c654817017f613835a75e9d"
  },
  {
    "url": "assets/js/37.10fee010.js",
    "revision": "becdc64ed9de2a423ef605dddd84dfc4"
  },
  {
    "url": "assets/js/38.4783f589.js",
    "revision": "c049e5af1e08ee6e23e2fdf18c4f3f04"
  },
  {
    "url": "assets/js/39.2359e24c.js",
    "revision": "f577d7b3ff17b77defd76be8b0ba4409"
  },
  {
    "url": "assets/js/4.5d0dcaed.js",
    "revision": "9ce9607d2b2338e1dbdf3cc309d55269"
  },
  {
    "url": "assets/js/40.47a52a9b.js",
    "revision": "43baf94ac442cea2c2f7cc2b92ba9a63"
  },
  {
    "url": "assets/js/41.a7480e13.js",
    "revision": "241c8dce091b3525da63aa8eecf4c688"
  },
  {
    "url": "assets/js/42.18adab5a.js",
    "revision": "a1f1dec4dc601c55f18f41c4e5a9116b"
  },
  {
    "url": "assets/js/43.bcf5a9bc.js",
    "revision": "33de13259ecc0b4f29d18ce7a5de9da9"
  },
  {
    "url": "assets/js/44.b448272a.js",
    "revision": "9ad218ec92ea339a3da75ca15fea6da7"
  },
  {
    "url": "assets/js/45.5ed1e00a.js",
    "revision": "16f5ddc43e32cc99e302f78d820721c5"
  },
  {
    "url": "assets/js/46.d3d8cf81.js",
    "revision": "8866850452ad8b283566c409186562c8"
  },
  {
    "url": "assets/js/47.b2280ce7.js",
    "revision": "489538aa80d3abab6ce9a037eefed4ea"
  },
  {
    "url": "assets/js/48.91c34465.js",
    "revision": "f993a481e8561e1624e00eba85f32f9a"
  },
  {
    "url": "assets/js/49.d6b8457b.js",
    "revision": "408edaf51d9ab85705bee8035e216a64"
  },
  {
    "url": "assets/js/5.fa7aee05.js",
    "revision": "4ac88181bc0d0f5e9b276161d1b646e2"
  },
  {
    "url": "assets/js/50.e2164745.js",
    "revision": "04d24d3f2b317b59591bfbca4eecbe86"
  },
  {
    "url": "assets/js/51.294e1dfc.js",
    "revision": "3a0fa88bf4cd0e280dbe89c2ae684733"
  },
  {
    "url": "assets/js/52.a139ce55.js",
    "revision": "ea81cd524b0699629175bc8d5d95ea4c"
  },
  {
    "url": "assets/js/53.b36b0473.js",
    "revision": "3ae3138038f08400ec5cb82de472ec2e"
  },
  {
    "url": "assets/js/54.d3a2ef95.js",
    "revision": "14ec134c9322688dd4be014996f85850"
  },
  {
    "url": "assets/js/55.f8af4e2d.js",
    "revision": "de800563274991804c3c506f059fe0f1"
  },
  {
    "url": "assets/js/56.2a1d7926.js",
    "revision": "20de95f237e06333324ad294b7dabe9b"
  },
  {
    "url": "assets/js/57.d0106a88.js",
    "revision": "3ef56f8caa21b17d4a87a32f36959131"
  },
  {
    "url": "assets/js/58.1ebfcfd8.js",
    "revision": "7a25a9777456dc35d0455b40bd201fcd"
  },
  {
    "url": "assets/js/59.b52d8fb4.js",
    "revision": "6400d724c0e6649e928b23c5e683389f"
  },
  {
    "url": "assets/js/6.2c95d418.js",
    "revision": "6ec7e5f8103a219876f7bdaf154f8117"
  },
  {
    "url": "assets/js/60.9be32159.js",
    "revision": "8f1e9b48af32b9721f36ec0e0bc8c786"
  },
  {
    "url": "assets/js/61.ca674826.js",
    "revision": "2168525cd19eb021f777ceda0890a5c5"
  },
  {
    "url": "assets/js/62.dee2cb7a.js",
    "revision": "3fb197f7abd5bb5d1cf0288fedad3073"
  },
  {
    "url": "assets/js/63.ff0b2073.js",
    "revision": "add6e93add6416a63c3ecc5ef64b4e82"
  },
  {
    "url": "assets/js/64.dab87602.js",
    "revision": "03ce863003feb8972ee524b1cc44af5b"
  },
  {
    "url": "assets/js/65.a44a5635.js",
    "revision": "1aa833a7929dc7a0ce9ab03c537ec7bf"
  },
  {
    "url": "assets/js/66.ef8250bc.js",
    "revision": "e524ebae1fd2408320fd186702d82aa3"
  },
  {
    "url": "assets/js/67.0ddd2c2a.js",
    "revision": "77715c7db778df179d4825f8bef8ccf8"
  },
  {
    "url": "assets/js/68.678b98ee.js",
    "revision": "0d9992626f49f4587ddee24b2b18dc24"
  },
  {
    "url": "assets/js/69.d16a42b2.js",
    "revision": "7f0b42f1d71c5c17df1d39ba7a7eeb65"
  },
  {
    "url": "assets/js/7.28e002d8.js",
    "revision": "bbd43d13c2b193b8bfdf6cb1402b4ee1"
  },
  {
    "url": "assets/js/70.21a21c45.js",
    "revision": "3a271d3a76048261a65e81772930cc44"
  },
  {
    "url": "assets/js/71.9758de29.js",
    "revision": "f6389803529f235a570941e82b291e0c"
  },
  {
    "url": "assets/js/72.f1e1d2f8.js",
    "revision": "a4ac4a5efc60a1fdc5a6b5960fbd3a94"
  },
  {
    "url": "assets/js/73.f51378b1.js",
    "revision": "a6556cf9e93cd469c17c49273f6b2da9"
  },
  {
    "url": "assets/js/74.6fbf381b.js",
    "revision": "d8c40d5e47efef64d374298faf3af8fd"
  },
  {
    "url": "assets/js/75.f3cd8274.js",
    "revision": "24bb3e32cab069797caaee4a7f9aa982"
  },
  {
    "url": "assets/js/76.0791fc2e.js",
    "revision": "0879400cfa47b5bcd1b6b22e83d2c7b2"
  },
  {
    "url": "assets/js/77.acbcd76f.js",
    "revision": "aae41418073e345189414f3aaee4cf50"
  },
  {
    "url": "assets/js/78.6251c22c.js",
    "revision": "aa063a235eb9dc013bd8dedcfb15b1c5"
  },
  {
    "url": "assets/js/79.ef925cc4.js",
    "revision": "8af6cf165af1f42d02cff03e56090d94"
  },
  {
    "url": "assets/js/8.b7ab4503.js",
    "revision": "53dd638cf21c58cea61f073e68354f40"
  },
  {
    "url": "assets/js/80.cf268532.js",
    "revision": "f3eaf901c74b93ffbf6c503537f18700"
  },
  {
    "url": "assets/js/81.bb9f7ecf.js",
    "revision": "1558d95065efc4936aa1ca179a04d80b"
  },
  {
    "url": "assets/js/82.37d46a47.js",
    "revision": "811aa5349242d382172f3a21155496d4"
  },
  {
    "url": "assets/js/83.dac2ca0d.js",
    "revision": "dfee13788b9b5f8a86833cd1d3ec2475"
  },
  {
    "url": "assets/js/84.66dffec5.js",
    "revision": "38f346918499fafccc576443412a371d"
  },
  {
    "url": "assets/js/85.6be461e3.js",
    "revision": "bc144a23135c9a8ca966c2c70c05ebe2"
  },
  {
    "url": "assets/js/86.81c9ccea.js",
    "revision": "511e55140b81460efd07ab3786c1a8aa"
  },
  {
    "url": "assets/js/87.c310177a.js",
    "revision": "65739702d7dc2f8d8d27ea31d17d7b0d"
  },
  {
    "url": "assets/js/88.d1735fdf.js",
    "revision": "894ce76e004d39834d971a22a963ee12"
  },
  {
    "url": "assets/js/89.396da1e0.js",
    "revision": "726bcda42a6f86c8d031030ac9f4e7c5"
  },
  {
    "url": "assets/js/9.3b791e6c.js",
    "revision": "fd2875fecacda89fa7cdf8410e2e73c4"
  },
  {
    "url": "assets/js/90.b2d09af8.js",
    "revision": "9ed540844e59b8ca5f5897c9e794ab94"
  },
  {
    "url": "assets/js/91.e856b6b1.js",
    "revision": "0944727889e7c91e6f93a4020ad49e40"
  },
  {
    "url": "assets/js/92.ab10cd7f.js",
    "revision": "29359069dfe16b9282305d338fee17c6"
  },
  {
    "url": "assets/js/93.a161cb1d.js",
    "revision": "d676d4906e317b860ae76475e0a64da7"
  },
  {
    "url": "assets/js/94.97f3e88b.js",
    "revision": "033080f07aadd52950df24779daf4955"
  },
  {
    "url": "assets/js/95.7ed2114e.js",
    "revision": "4b69fb8dfc9ee78f96f223c504e66228"
  },
  {
    "url": "assets/js/96.dc6bb350.js",
    "revision": "cbd95cecffaa4331a37efa4c7002ca63"
  },
  {
    "url": "assets/js/97.a5fb19ca.js",
    "revision": "6402b372adc7b3c3ea964086ae162f38"
  },
  {
    "url": "assets/js/98.f7dbbf03.js",
    "revision": "a97d8ea7c4b1e3b7164b76f71c559fa3"
  },
  {
    "url": "assets/js/99.364cd1d5.js",
    "revision": "a8078f292baf1637acf353462b1466ac"
  },
  {
    "url": "assets/js/app.b4363074.js",
    "revision": "d3681c790d5da86ef5357897b43fec55"
  },
  {
    "url": "bg.jpg",
    "revision": "dc1e877946dd4568404a432623fca8fc"
  },
  {
    "url": "camera/changeDeviceId.html",
    "revision": "aa42b663a2304b91535e043cf31aa279"
  },
  {
    "url": "camera/destroy.html",
    "revision": "04799e07a4505cb88aa2b4fbc4b1948e"
  },
  {
    "url": "camera/getDeviceLists.html",
    "revision": "33986fc3e8f6777a0726e9498081a6dc"
  },
  {
    "url": "camera/index.html",
    "revision": "44881e95762ddf66ca3b63078b88cf83"
  },
  {
    "url": "camera/init.html",
    "revision": "9b6161156b06e454aca87c8a64ef3ff6"
  },
  {
    "url": "camera/photoShot.html",
    "revision": "1822e6ca0c5ec1be0daa01d0cb675de4"
  },
  {
    "url": "camera/startCapture.html",
    "revision": "6d60f35c04f383c0d9b8ba1048186d9c"
  },
  {
    "url": "camera/stopCapture.html",
    "revision": "2d4eb4a6c222dc0d36edddd2d7de1a1e"
  },
  {
    "url": "changeLog.html",
    "revision": "61cf6911735a76a68a8ace86eba0b2d7"
  },
  {
    "url": "db/createCol.html",
    "revision": "f4feadef54728df0465200ea4bf14bb3"
  },
  {
    "url": "db/drop.html",
    "revision": "6e6898802acd91acafe9fe940519d76d"
  },
  {
    "url": "db/find.html",
    "revision": "458dae0484aa4f42bb7ca8a925b024fd"
  },
  {
    "url": "db/getState.html",
    "revision": "213e1b22fdad11d7c7a01f1ea8d8f18a"
  },
  {
    "url": "db/index.html",
    "revision": "70729a6eee06416f9a544bfe4c4737bf"
  },
  {
    "url": "db/insert.html",
    "revision": "47eb849844da51f6d862ffcdcb1c5a77"
  },
  {
    "url": "db/remove.html",
    "revision": "87053b4accae6bdf5bf083c67c5292a0"
  },
  {
    "url": "db/update.html",
    "revision": "492972e2b9671f335d796ec434f87c62"
  },
  {
    "url": "downloader.bak/checkCourseware.html",
    "revision": "0fb2e21ad656c672d347053377deb501"
  },
  {
    "url": "downloader.bak/checkNetSpeed.html",
    "revision": "3f57c5d39abcd27b8ecfbdafe3c85e3f"
  },
  {
    "url": "downloader.bak/download.html",
    "revision": "3b72fb610456c3dee7134f723a39df94"
  },
  {
    "url": "downloader.bak/downloadCourseware.html",
    "revision": "9517d8cf6abdea25f87215c99f1892b5"
  },
  {
    "url": "downloader.bak/downloadFiles.html",
    "revision": "b8d14252c13b464e266f98cd9a8ea898"
  },
  {
    "url": "downloader.bak/downloadUpdates.html",
    "revision": "126c4a34bc22f7c0704de1e983bbbdca"
  },
  {
    "url": "downloader.bak/extractZip.html",
    "revision": "918042521e02eca13252cec872e62ead"
  },
  {
    "url": "downloader.bak/index.html",
    "revision": "898c8e9f06ef29e5ae4ea758e8bc670f"
  },
  {
    "url": "downloader/checkCourseware.html",
    "revision": "40151c136902be64e089c1c49170e8dd"
  },
  {
    "url": "downloader/downloadCourseware.html",
    "revision": "f42b3c46b23b005387a687db08494331"
  },
  {
    "url": "downloader/downloadFile.html",
    "revision": "499b96c3256a012a25c0b18137464809"
  },
  {
    "url": "downloader/downloadUpdates.html",
    "revision": "27e055a3f637a38e58e85fc3d41fc557"
  },
  {
    "url": "downloader/extractZip.html",
    "revision": "99924a4954c9be18a27d902137f988db"
  },
  {
    "url": "downloader/index.html",
    "revision": "60a92b732ab68c8bfec32c3d5229633c"
  },
  {
    "url": "graffiti/clear.html",
    "revision": "f70794bf8d16733f39a5e03f4dfde29a"
  },
  {
    "url": "graffiti/createImage.html",
    "revision": "23980737617d0c3ae2f0d33da669a743"
  },
  {
    "url": "graffiti/destroy.html",
    "revision": "ff2d39754c9b71c48fac99e73d2ad9a3"
  },
  {
    "url": "graffiti/eraser.html",
    "revision": "d52012e8046c31f213cf2573e9062ce7"
  },
  {
    "url": "graffiti/eraserSize.html",
    "revision": "d71cfc6f0e2cb58dd8fbad4f9b372440"
  },
  {
    "url": "graffiti/index.html",
    "revision": "00fa41303df82fdd6683c1f6eb2a575a"
  },
  {
    "url": "graffiti/init.html",
    "revision": "9ff6df09ebd1c256717eeac27831cb89"
  },
  {
    "url": "graffiti/lineColor.html",
    "revision": "18c69da7d25a65e664100bd55889f4cb"
  },
  {
    "url": "graffiti/lineSize.html",
    "revision": "72e761e50c3ecdf9f50f9f16c4aea25e"
  },
  {
    "url": "graffiti/next.html",
    "revision": "5aec93b4917e4c186831688b8d9f121e"
  },
  {
    "url": "graffiti/prev.html",
    "revision": "e3e557291b809e9112b4c9df15275c45"
  },
  {
    "url": "graffiti/saveImage.html",
    "revision": "d280f8b0e49e48b40eccb8b7d3d4a1fa"
  },
  {
    "url": "index.html",
    "revision": "72fb019dcbb4601feae1656c91612d84"
  },
  {
    "url": "ipc/call.html",
    "revision": "265ce54579d07954bd2c519c6889745b"
  },
  {
    "url": "ipc/index.html",
    "revision": "7e6459e77f5436caad7b8b4ae13b1f04"
  },
  {
    "url": "ipc/listener.html",
    "revision": "4bdc2362a1ea6f66133dddc0282d3888"
  },
  {
    "url": "ipc/send.html",
    "revision": "4606d039254a7ead3d1f705cb41ba8eb"
  },
  {
    "url": "ipc/worker.html",
    "revision": "c6cfde3addb668003ecc61fa0fdba669"
  },
  {
    "url": "like/destroy.html",
    "revision": "1ed254fe57942e63c0325ef26147f42a"
  },
  {
    "url": "like/index.html",
    "revision": "5e127159f7a83963948c124d56116f3a"
  },
  {
    "url": "like/init.html",
    "revision": "6d61bb0492c1536f03efbd186e0db3ff"
  },
  {
    "url": "logger.bak/error.html",
    "revision": "feaf445687edafe8bfb7d30a1c6982f1"
  },
  {
    "url": "logger.bak/index.html",
    "revision": "bbe7c33357afd4e8602f29200f292b19"
  },
  {
    "url": "logger.bak/info.html",
    "revision": "b170fb4906bca36327efa4bc8ae48447"
  },
  {
    "url": "logger.bak/log.html",
    "revision": "fd1b75de67e1d32dc77edd39732b7a4b"
  },
  {
    "url": "logger.bak/query.html",
    "revision": "e5534b777a5fc617ae527bac6274dd9a"
  },
  {
    "url": "logger.bak/readLog.html",
    "revision": "2a22740358bfd3fe6f196a2a81e13932"
  },
  {
    "url": "logger.bak/removeLog.html",
    "revision": "af9300369d58c7c671caefbcc8a041e7"
  },
  {
    "url": "logger.bak/start.html",
    "revision": "37926b5c032fac6ac27a5ab761e22ee2"
  },
  {
    "url": "logger/error.html",
    "revision": "50ff03dea890f696989eff44ce48a03e"
  },
  {
    "url": "logger/index.html",
    "revision": "9cd6b96a9753dc968009cac0416ab830"
  },
  {
    "url": "logger/info.html",
    "revision": "901b7edea34c9d855911b17e827353aa"
  },
  {
    "url": "logger/log.html",
    "revision": "7dfa835eed889201709b285d147113c8"
  },
  {
    "url": "logger/query.html",
    "revision": "52c2afe80118453c9e07aadef7d91a89"
  },
  {
    "url": "logger/readLog.html",
    "revision": "02cafcaa95ffa09733375e5c90a67403"
  },
  {
    "url": "logger/removeLog.html",
    "revision": "b97a29b725d532376b32c95d2b40a05d"
  },
  {
    "url": "logger/start.html",
    "revision": "5565b4920d69cc0aa3210036c88a183e"
  },
  {
    "url": "native/addElementDrag.html",
    "revision": "d521361a9850a9499473daa0ca574b71"
  },
  {
    "url": "native/changeWindowState.html",
    "revision": "d2fda7157035cebedb0c22c0187d0bbb"
  },
  {
    "url": "native/cleanCache.html",
    "revision": "89c81559a5ea294ead774bb97c4cf5a2"
  },
  {
    "url": "native/cleanFiles.html",
    "revision": "3e8d81ca4a54ef71fce22867fa26b7a0"
  },
  {
    "url": "native/cleanStorage.html",
    "revision": "47629876332948999aec2b713e013ba5"
  },
  {
    "url": "native/clipboard.html",
    "revision": "51fa3b16482082bcfbb2696abcb49c09"
  },
  {
    "url": "native/closeWindow.html",
    "revision": "25fd4eaf0f604e2541463e587976882e"
  },
  {
    "url": "native/elementDrag.html",
    "revision": "92065927418c82dab3e02fba1163bacb"
  },
  {
    "url": "native/exitApp.html",
    "revision": "68cba3562cb33f6b7aba23f58a095809"
  },
  {
    "url": "native/fullScreen.html",
    "revision": "dbc0d35f9fd99b8f7c17a4dbdac4b416"
  },
  {
    "url": "native/get/getAppPath.html",
    "revision": "14d31bc00c6c599f3c13ece17433266e"
  },
  {
    "url": "native/get/getAppVersion.html",
    "revision": "a8ce15a6b3af18050322c1be6a7f1319"
  },
  {
    "url": "native/get/getClientInfo.html",
    "revision": "f63432288c02abf6ec05fbb1ba3501c6"
  },
  {
    "url": "native/get/getDeviceInfo.html",
    "revision": "e5b883cec15dcb9485247ddc89283086"
  },
  {
    "url": "native/get/getMediaAccess.html",
    "revision": "efb52ccce21dfa50ec81b7566ded29eb"
  },
  {
    "url": "native/get/getMediaAccessStatus.html",
    "revision": "a348b83d658b61b8c074ad74fc7c5dec"
  },
  {
    "url": "native/get/getPathByName.html",
    "revision": "418f42c53883f7389d651ee574ed88fd"
  },
  {
    "url": "native/get/getWindowBounds.html",
    "revision": "1eaa51266565f422023f92f9a99fb477"
  },
  {
    "url": "native/get/getWindowPosition.html",
    "revision": "fdf83f296c4e3e45c57b65623ae66ccd"
  },
  {
    "url": "native/get/getWindowSize.html",
    "revision": "6cfb67b749dea3d12e84041e4a50afb5"
  },
  {
    "url": "native/get/getWindowState.html",
    "revision": "fa264b0f1fda03be096951adab4791fa"
  },
  {
    "url": "native/index.html",
    "revision": "2c5ede56ebeab1e661b61fc03840134a"
  },
  {
    "url": "native/jumpPage.html",
    "revision": "3bfb29e34121e8cdd15b31a7ca8dbc7d"
  },
  {
    "url": "native/loadFile.html",
    "revision": "3a899f94b6fe5184649aa7d5772889a1"
  },
  {
    "url": "native/loadUrl.html",
    "revision": "2cfdc9a2b370078befb766d893c381e8"
  },
  {
    "url": "native/maximize.html",
    "revision": "1f82b3bd083ef5b8e255b28df4192e21"
  },
  {
    "url": "native/minimize.html",
    "revision": "a9f39e736179c53bf65c80dfb909cf43"
  },
  {
    "url": "native/normal.html",
    "revision": "d844e4e6b1e3d7764ee63e8f88d3546f"
  },
  {
    "url": "native/open/openDirBySystem.html",
    "revision": "997311203dfab6fa9b51e38230f6d232"
  },
  {
    "url": "native/open/openDirDialog.html",
    "revision": "16c2b8aeaee2d8aab923b39ea79a2813"
  },
  {
    "url": "native/open/openFile.html",
    "revision": "2d689bf0422eae81110b63df4949030e"
  },
  {
    "url": "native/open/openFileAsync.html",
    "revision": "734f86495db49305de3eaef2fc585a66"
  },
  {
    "url": "native/open/openFileBySystem.html",
    "revision": "239f0b12a11d91abc70b607253a00b1f"
  },
  {
    "url": "native/open/openFileDialog.html",
    "revision": "2cfbde5cb080cd03d83d1a5c609c575c"
  },
  {
    "url": "native/open/openFileOrDirBySystem.html",
    "revision": "538236349891174310e2ac900055b679"
  },
  {
    "url": "native/open/openSaveDialog.html",
    "revision": "4c3bfb850f402aa778379f6ec9f6f8a2"
  },
  {
    "url": "native/open/openWindow.html",
    "revision": "f35d3ccbd42f01ca24be6cbc5c67ecbd"
  },
  {
    "url": "native/registerShortcut.html",
    "revision": "e0fff8feb772202aa3e77c73b665ccef"
  },
  {
    "url": "native/relaunchApp.html",
    "revision": "20fb353f51fd50666999788044f44f80"
  },
  {
    "url": "native/reload.html",
    "revision": "345e6eb9956342fece2b38c1a00eb42e"
  },
  {
    "url": "native/removeElementDrag.html",
    "revision": "7b166904c54778b6f01834a6d61a202f"
  },
  {
    "url": "native/set/setAlwaysOnTop.html",
    "revision": "2ef0487c151768a225b2dc89aeecaaea"
  },
  {
    "url": "native/set/setFullscreen.html",
    "revision": "7b873964502fe3ce95fdde15adedf654"
  },
  {
    "url": "native/set/setSize.html",
    "revision": "817ca10f90c4b4031959476e8f1b22ae"
  },
  {
    "url": "native/set/setWindowAble.html",
    "revision": "0531de77c8076e9fb9dfd545b0832f4d"
  },
  {
    "url": "native/set/setWindowBounds.html",
    "revision": "1ddb40e056324325c7b68f033d9edda0"
  },
  {
    "url": "native/set/setWindowCenter.html",
    "revision": "536b84aa04bb32cfe5503c7dc5554775"
  },
  {
    "url": "native/set/setWindowLimitSize.html",
    "revision": "f0acf5db465ac782dd234477ada19633"
  },
  {
    "url": "native/set/setWindowMaxSize.html",
    "revision": "a25b97abf9d19c8e267768f3a2e077d9"
  },
  {
    "url": "native/set/setWindowMinSize.html",
    "revision": "c06cc8f76be32df6482a7c3a6b721343"
  },
  {
    "url": "native/set/setWindowPosition.html",
    "revision": "eb08346363e4ca4805f6d6da7bb271af"
  },
  {
    "url": "native/set/setWindowState.html",
    "revision": "8e2bdf6040d6fda90de246f5f17de500"
  },
  {
    "url": "native/snapShot.html",
    "revision": "e65f074ac273501fac2499ade9d37714"
  },
  {
    "url": "net/checkNetSpeed.html",
    "revision": "15750f8133ae2c7d5bf3d0697965bda3"
  },
  {
    "url": "net/getFastDomain.html",
    "revision": "8e1db728284837aa888150459f99c2ac"
  },
  {
    "url": "net/index.html",
    "revision": "0a23fdfaf30f156c8fa22bf8862aac2c"
  },
  {
    "url": "net/reportNetSpeed.html",
    "revision": "7eb79e2ac249c8281afef1bb0a5cacbc"
  },
  {
    "url": "recorder/close.html",
    "revision": "6b6a939f9ac1111667b13f31df3285fa"
  },
  {
    "url": "recorder/destroy.html",
    "revision": "f82e2ae3415fe3cb2fb0badc15a8079f"
  },
  {
    "url": "recorder/getBlob.html",
    "revision": "561704600211a8c80a26215c49ce1e34"
  },
  {
    "url": "recorder/getDeviceLists.html",
    "revision": "212ee9e17bbf50878eb7d99a0df59ab9"
  },
  {
    "url": "recorder/index.html",
    "revision": "4baa332a2319b70122f92e4817a0d72f"
  },
  {
    "url": "recorder/init.html",
    "revision": "b8f402836d4eb4cee053c2bf5ed6052b"
  },
  {
    "url": "recorder/isSupport.html",
    "revision": "9798aa988a91227f22244291710de667"
  },
  {
    "url": "recorder/open.html",
    "revision": "4ec09db17f39ab7c7c39edb0a5b34a59"
  },
  {
    "url": "recorder/pause.html",
    "revision": "7563dcfb833781269d40b3a81e2e8df0"
  },
  {
    "url": "recorder/play.html",
    "revision": "feb468a66c28112875018d119b96bfc0"
  },
  {
    "url": "recorder/resume.html",
    "revision": "e976ab8d2963d4adbbc3cab26e4e43dc"
  },
  {
    "url": "recorder/start.html",
    "revision": "44e8adb184838f142b46f00908c40685"
  },
  {
    "url": "recorder/stop.html",
    "revision": "7003f070d7ca429c409a78caed9d2042"
  },
  {
    "url": "test/index.html",
    "revision": "71bae565eac1ba33e56cde7c111cb7ab"
  },
  {
    "url": "updater/autoCheckUpdates.html",
    "revision": "c8ff12103535f18dbdb20114109bdef6"
  },
  {
    "url": "updater/checkUpdates.html",
    "revision": "1b2d82531539ca5de718ed89354682ff"
  },
  {
    "url": "updater/checkUpdatesMain.html",
    "revision": "0d29129f2a1d20eb2d457051b91baa25"
  },
  {
    "url": "updater/download.html",
    "revision": "a7bf9c5def570c4c222ecbcda6afc052"
  },
  {
    "url": "updater/downloadUpdates.html",
    "revision": "8048c925609d9c7ea848ff08a81be6c9"
  },
  {
    "url": "updater/index.html",
    "revision": "85eed120c284f92e09516cf0fb5e809b"
  },
  {
    "url": "updater/installUpdates.html",
    "revision": "69f7813d94581a0cd6ebf6fc8851dcb6"
  },
  {
    "url": "utils/get.html",
    "revision": "7026e4da51157634789d0760e4640fd1"
  },
  {
    "url": "utils/index.html",
    "revision": "3315ad97704c93cca470925f96be5253"
  },
  {
    "url": "utils/is.html",
    "revision": "58443fc957d6dcc5f11aff6b2429511f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
