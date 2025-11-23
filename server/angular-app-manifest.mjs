
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/overview",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/overview"
  },
  {
    "renderMode": 2,
    "route": "/all"
  },
  {
    "renderMode": 2,
    "route": "/add-coin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XSVXRC36.js"
    ],
    "route": "/upload"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 538, hash: 'dbb4e1a629da1c5813bc5769d275f02145c6c558ebbec31ddf1e766d83ba2564', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: 'cd4636f67c7fb54071477d0a89b639a3f6e6abf5d0e914ee1bd8fcad41423a4c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'all/index.html': {size: 12611, hash: 'a7d9d64679353e428a1589599fcb45a852abfa1e09c87c7f7aea0693b4f88ec9', text: () => import('./assets-chunks/all_index_html.mjs').then(m => m.default)},
    'add-coin/index.html': {size: 8001, hash: '0c26d5e03d860abb66d1c185c2efc90f91e4adb3a29969821da78393b5c50d29', text: () => import('./assets-chunks/add-coin_index_html.mjs').then(m => m.default)},
    'upload/index.html': {size: 7257, hash: '35aeff66ca0cfedb57c7cc96bbdba0ad4fffdef7f8719bbf5157492fcbe4c91c', text: () => import('./assets-chunks/upload_index_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 12697, hash: 'e1cbe884a67f9ff0021a2433e06572024df4d6ed546d31bf0e431ba620dcf35a', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
