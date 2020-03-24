<template>
  <div>
    <nuxt />
  </div>
</template>

<script>

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
      ]
    }
  },
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
