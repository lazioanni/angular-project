
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-project',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-project/overview",
    "route": "/angular-project"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/overview"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/all"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/add-coin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XSVXRC36.js"
    ],
    "route": "/angular-project/upload"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 553, hash: '7070b8f53ee334a42a9c7102c06c6d32716a7e697b356ac5928928de8f2904e3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1066, hash: '1a98e7fcd3a1bc6862de5d8162ebb7879fb6657fec09d966514cc46f97ade1c8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'all/index.html': {size: 12690, hash: 'f581e6e39086db6be17fbe3f68d2c12e93a27734a80b5b0865ba97fca72a52a7', text: () => import('./assets-chunks/all_index_html.mjs').then(m => m.default)},
    'add-coin/index.html': {size: 8080, hash: 'af253fd9bb0f2685d87ee8c3b285a274e64c7f37a4174942a2c55a4d4b1d1bad', text: () => import('./assets-chunks/add-coin_index_html.mjs').then(m => m.default)},
    'upload/index.html': {size: 7336, hash: '765701f50051f45fc91442260aad7b77b9dd23d47b2e8d4f76252daf70cac10d', text: () => import('./assets-chunks/upload_index_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 12776, hash: 'b889d0fb7bb5b3ac6ca07ad7a7e2a0b54a10c6ea8d352517fcfd78f6da25d3b0', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
