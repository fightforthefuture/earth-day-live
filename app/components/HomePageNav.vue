<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-toggle target="nav-collapse" id="hamburger-button"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="container">
        <b-nav-item id="home-icon-nav" @click="goTo(localePath('/'))">{{ translate.home }}</b-nav-item>
        <b-nav-item id="schedule-nav" @click.prevent="scrollTo('#schedule')">{{ translate.schedule }}</b-nav-item>
        <b-nav-item id="participants-nav" @click.prevent="scrollTo('#participants')">{{ translate.participants }}</b-nav-item>
        <b-nav-item id="three-days-nav" @click.prevent="scrollTo('#the-three-days')">{{ translate.theThreeDays }}</b-nav-item>
        <b-nav-item id="local-livestreams-nav" @click.prevent="scrollTo('#local-livestreams')">{{ translate.localLivestreams }}</b-nav-item>
        <b-nav-item id="get-involved-nav" @click.prevent="scrollTo('#get-involved')">{{ translate.getInvolved }}</b-nav-item>
        <b-nav-item id="faqs-nav" @click.prevent="scrollTo('#faqs')">{{ translate.faqs }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  import { smoothScrollToElement } from '~/assets/js/helpers'

  export default {
    name: "HomePageNav",
    data() {
      return { translate: this.$t('home.nav') }
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

  .nav-link {
    padding: 0;
    color: #fff !important;
    text-decoration: none;
  }

  .navbar-nav {
    padding: 0 15px;
  }

  .nav-logo-eclipse {
    max-width: 30px;
  }

  .navbar a {
    padding-bottom: 5px;
  }
</style>
