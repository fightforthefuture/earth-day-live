
export default {
  mode: 'universal',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Earth Day Live',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/kgg8gke.css' },
    ],
    htmlAttrs: {
      lang: 'en',
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/clipboardCopy.js' }
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
        locales: ["en", "es"],
        defaultLocale: "en",  // The locale to use if the current locale can't be found
        vueI18n: {
          locale: "en",  // Default locale
          fallbackLocale: "en",
          messages: {
            en: require("./i18n/en.json"),
            es: require("./i18n/es.json")
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
    extend (config, ctx) {
    }
  }
}
