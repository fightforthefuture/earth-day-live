<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-toggle target="nav-collapse" id="hamburger-button"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="container">
        <b-nav-item id="home-icon-nav" @click="goTo('/')">
          <img class="nav-logo-eclipse" src="~/assets/images/earth-day-live-eclipse.png" alt="Eclipse" />
        </b-nav-item>
        <b-nav-item id="whats-happening-nav" @click.prevent="scrollTo('#whats-happening')">{{ $t('common.whatsHappening') }}</b-nav-item>
        <b-nav-item id="website-banner-nav" @click.prevent="scrollTo('#website-banner')">{{ translate.websiteBanner }}</b-nav-item>
        <b-nav-item id="banner-ads-nav" @click.prevent="scrollTo('#banner-ads')">{{ translate.bannerAds }}</b-nav-item>
        <b-nav-item id="social-downloads-nav" @click.prevent="scrollTo('#social-downloads')">{{ translate.socialDownloads }}</b-nav-item>
        <b-nav-item id="are-you-with-us-nav" @click.prevent="scrollTo('#are-you-with-us')">{{ translate.withUs }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { smoothScrollToElement } from '~/assets/js/helpers'

export default {
  name: "GetInvolvedNav",
  data() {
    return { translate: this.$t('getInvolved.nav') }
  },
  methods: {
    scrollTo(hash) {
      const duration = 500
      smoothScrollToElement(hash, duration)
      setTimeout(() => {
        location.hash = hash
      }, duration)
    },
    goTo(url) {
      window.location.href = url
    },
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

.nav-logo-eclipse {
  max-width: 30px;
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
