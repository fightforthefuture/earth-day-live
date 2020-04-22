
export default {
  srcDir: './app',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Earth Day Live',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#e3e9ec' },
      { name: 'application-name', content: 'Earth Day Live' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/kgg8gke.css' },
    ],
    script: [
      { src: '/js/pixel.js' }
    ]
  },
  loading: { color: '#e3e9ec' },
  css: ['./app/assets/style.css'],
  modern: 'true',
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: './plugins/clipboardCopy.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: ['faFistRaised', 'faPiggyBank', 'faVoteYea'],
    }
  },
  'google-gtag': {
    id: 'UA-162257314-1',
    config: {
      anonymize_ip: true,
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      optimize_id: 'GTM-TS3VMMV',
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },
  facebook: {
    track: 'PageView',
    pixelId: '528654107852878',
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-gtag',
    'nuxt-facebook-pixel-module',
    [
      'nuxt-i18n',
      {
        strategy: "prefix_except_default",
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'es',
            name: 'Español'
          },
        ],
        defaultLocale: "en",  // The locale to use if the current locale can't be found
        vueI18n: {
          locale: "en",  // Default locale
          fallbackLocale: "en",
          messages: {
            en: require("./app/locales/en.json"),
            es: require("./app/locales/es.json")
          }
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev) {
          config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    }
  }
}
