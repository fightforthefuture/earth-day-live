<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-toggle target="nav-collapse" id="hamburger-button"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="container">
        <b-nav-item id="home-nav" @click="goTo(localePath('/'))">{{ translate.home }}</b-nav-item>
        <b-nav-item id="impact-section-nav" @click.prevent="scrollTo('#impact-section')">{{ translate.theImpact }}</b-nav-item>
        <b-nav-item id="media-section-nav" @click.prevent="scrollTo('#media-section')">{{ translate.mediaAttention }}</b-nav-item>
        <b-nav-item id="whats-next-nav" @click.prevent="scrollTo('#next-steps-section')">{{ translate.whatsNext }}</b-nav-item>
        <b-nav-item id="thank-you-nav" @click.prevent="scrollTo('#thank-you-section')">{{ translate.thankYou }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  import { smoothScrollToElement } from '~/assets/js/helpers'

  export default {
    name: "ThanksNav",
    data() {
      return { translate: this.$t('thanks.nav') }
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
