const path = require("path");
const slugify = require("transliteration").slugify;
const tools = require("./theme/util/tools");
const sidebars = require ('./configs/sidebar')
// const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  title: "NeosJS开发文档",
  description: "NeosJS文档",
  dest: "./dist",
  head:[
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ['meta', { name: 'theme-color', content: '#0070f3' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/imgs/icons/apple-icon-256x256.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/imgs/icons/ms-icon-128x128.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "IpcMessage", link: "/ipc/"},
      { text: "Native", link: "/native/get/getAppVersion.html"},
      { text: "Updater", link: "/updater/",dropdown:true},
      { text: "DataBase", link: "/db/",dropdown:true},
      // { text: "Downloader", link: "/downloader/", deprecated: true },
      { text: "Downloader", link: "/downloader/" },
      { text: "Recorder", link: "/recorder/" },
      { text: "Graffiti", link: "/graffiti/", dropdown:true},
      { text: "Camera", link: "/camera/", dropdown:true },
      { text: "Net", link: "/net/", dropdown:true },
      { text: "Like", link: "/like/", dropdown:true },
      { text: "Logger", link: "/logger/", dropdown:true},
      { text: "Components", link: "/components/"},
      { text: "Utils", link: "/utils/is.html", dropdown:true }
    ],
    sidebar:sidebars,
    lastUpdated: "上次更新",
    smoothScroll: true
  },
  plugins: [
    // require('./plugins/vuepress-plugin-demo-container/index.js'),
    "@vuepress/back-to-top",
    [
      "@vuepress/last-updated",
      // {
      //   transformer(timestamp) {
      //     const date = new Date(timestamp)
      //     const digits = [
      //       date.getUTCFullYear(),
      //       date.getUTCMonth() + 1,
      //       date.getUTCDate(),
      //       date.getUTCHours(),
      //       date.getUTCMinutes(),
      //       date.getUTCSeconds()
      //     ].map(num => String(num).padStart(2, '0'))

      //     return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(
      //       /{(\d)}/g,
      //       (_, num) => digits[num]
      //     )
      //   }
      // }
      {
        transformer: timestamp => {
          const moment = require("moment");
          moment.locale("zh-CN");
          return moment(timestamp).fromNow();
        }
      }
    ],
    ["@vuepress/register-components"],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        popupComponent: "UpdatePopup",
        updatePopup: {
          message: "文档有更新啦 ^_^",
          buttonText: "获取新内容"
        }
      }
    ],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ]
  ],
  markdown: {
    toc: {
      includeLevel: [2],
      slugify: slugify,
      forceFullToc: true
    },
    anchor: {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    },
    lineNumbers: false,
    extendMarkdown: md => {
      md.use(...tools.createContainer("tip"))
        .use(...tools.createContainer("info"))
        .use(...tools.createContainer("success"))
        .use(...tools.createContainer("danger"))
        .use(...tools.createContainer("error"))
        .use(...tools.createContainer("warning"))
        .use(...tools.createContainer("warn"))
        .use(...tools.createDemoContainer("demo"));
    }
  },
  chainWebpack(config) {
    // config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').end();
    config.resolve.alias.set("@imgs", path.resolve(__dirname, "public/imgs/")).end();
    config.resolve.alias.set("utils", path.resolve(__dirname, "../../neosui/utils")).end();
    config.resolve.alias.set("packages", path.resolve(__dirname, "../../packages")).end();
    config.resolve.alias.set("NeosUI", path.resolve(__dirname, "../../neosui")).end();
  },
  clientRootMixin: path.resolve(__dirname, "mixin.js")
  // devServer: {
  //   https: true
  // }
};

