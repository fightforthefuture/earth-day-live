<template>
  <div>
    <button class="btn im-ready-button" @click.prevent="scrollTo('#website-banner')">
      {{ translate.readyButton }}
    </button>
    <div class="arrow-down-wrapper">
      <a @click.prevent="scrollTo('#website-banner')">
        <img src="~assets/images/arrow-down.svg" :alt="translate.readyButtonAlt" />
      </a>
    </div>
  </div>
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'

export default {
  name: "ImReadyButton",
  data() {
    return { translate: this.$t('getInvolved.readyButton') }
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
.im-ready-button {
  text-transform: uppercase;
  color: #fff;
  background-color: #190825;
  font-family: titling-gothic-fb, sans-serif;
  padding: 20px 100px;
  border: none;
  font-size: 2em;
  margin-bottom: 50px;
}

.arrow-down-wrapper:hover {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .im-ready-button {
    padding: 20px 60px;
  }
}

</style>
