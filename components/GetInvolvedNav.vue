<template>
    <nav class="navbar">
      <div class="container">
        <a id="whats-happening-nav" @click.prevent="scrollTo('#whats-happening')">
            {{ $t('common.whatsHappening') }}
        </a>
        <a id="website-banner-nav" @click.prevent="scrollTo('#website-banner')">
            {{ translate.websiteBanner }}
        </a>
        <a id="banner-ads-nav" @click.prevent="scrollTo('#banner-ads')">
          {{ translate.bannerAds }}
        </a>
        <a id="social-downloads-nav" @click.prevent="scrollTo('#social-downloads')">
          {{ translate.socialDownloads }}
        </a>
        <a id="are-you-with-us-nav" @click.prevent="scrollTo('#are-you-with-us')">
          {{ translate.withUs }}
        </a>
      </div>
    </nav>
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

@media only screen and (max-width: 600px) {
  .navbar {
    display: none;
  }
}
</style>
