<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'
export default {
  head() {
    return {
      title: 'Earth Day Live',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Will you join Earth Day Live?' },
        { hid: 'og:description', property: 'og:description', content: 'On April 22-24, millions around the world are taking to the web to celebrate the 50th anniversary of Earth Day.' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.earthdaylive2020.org/share.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.earthdaylive2020.org' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:description', property: 'twitter:description', content: 'On April 22-24, millions around the world are taking to the web to celebrate the 50th anniversary of Earth Day.' },
        { hid: 'twitter:image', property: 'twitter:image', content: 'https://www.earthdaylive2020.org/share.jpg' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@usclimatestrike' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'Will you join Earth Day Live?' },
        { hid: 'twitter:url', property: 'twitter:title', content: 'https://www.earthdaylive2020.org' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=UA-162257314-1'}
      ]
    }
  },
  mounted() {
    if (this.$route.hash) {
      smoothScrollToElement(this.$route.hash, 500)
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: titling-gothic-fb, sans-serif;
}

p {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-size: 1.3em;
}
a {
  color: #fd6f37;
  text-decoration: underline;
}

a:hover {
  color: #190825;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
