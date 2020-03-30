<template>
    <nav class="navbar">
      <div class="container">
        <a id="whats-happening-nav" @click.prevent="scrollTo('#whats-happening')">What's Happening?</a>
        <a id="website-banner-nav" @click.prevent="scrollTo('#website-banner')">Website Banner</a>
        <a id="banner-ads-nav" @click.prevent="scrollTo('#banner-ads')">Banner Ads</a>
        <a id="social-downloads-nav" @click.prevent="scrollTo('#social-downloads')">Social Downloads</a>
        <a id="are-you-with-us-nav" @click.prevent="scrollTo('#are-you-with-us')">Are you with us?</a>
      </div>
    </nav>
</template>
<script>
import { smoothScrollToElement } from '~/assets/js/helpers'

export default {
  name: "GetInvolvedNav",
  methods: {
    scrollTo(hash) {
      const duration = 500
      smoothScrollToElement(hash, duration)
      setTimeout(() => {
        location.hash = hash
      }, duration)
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #190825;
  color: #fff;
  font-family: titling-gothic-fb, sans-serif;
  text-transform: uppercase;
  padding: 15px;
  font-size: 0.8em;
}

.navbar a:hover {
  cursor:pointer;
  background-image: url('~assets/images/separator.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
}

.navbar a {
  padding-bottom: 5px;
}
</style>
