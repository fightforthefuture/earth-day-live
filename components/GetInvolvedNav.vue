<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-toggle target="nav-collapse" id="hamburger-button"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="container">
        <b-nav-item id="whats-happening-nav" @click.prevent="scrollTo('#whats-happening')">What's Happening?</b-nav-item>
        <b-nav-item id="website-banner-nav" @click.prevent="scrollTo('#website-banner')">Website Banner</b-nav-item>
        <b-nav-item id="banner-ads-nav" @click.prevent="scrollTo('#banner-ads')">Banner Ads</b-nav-item>
        <b-nav-item id="social-downloads-nav" @click.prevent="scrollTo('#social-downloads')">Social Downloads</b-nav-item>
        <b-nav-item id="are-you-with-us-nav" @click.prevent="scrollTo('#are-you-with-us')">Are you with us?</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
  background-color: #190825 !important;
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

.nav-link {
  padding: 0;
  color: #fff !important;
  text-decoration: none;
}

.navbar-nav {
  padding: 0 15px;
}

.navbar a {
  padding-bottom: 5px;
}
</style>
