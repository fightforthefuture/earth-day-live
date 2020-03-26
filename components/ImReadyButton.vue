<template>
  <div>
    <button class="im-ready-button" @click.prevent="scrollTo('#website-banner')">
      I'm Ready
    </button>
    <div class="arrow-down-wrapper">
      <a @click.prevent="scrollTo('#website-banner')">
        <img src="~assets/images/arrow-down.svg" alt="Scroll Down" />
      </a>
    </div>
  </div>
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'

export default {
  name: "ImReadyButton",
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
  background-color: #151515;
  font-family: titling-gothic-fb, sans-serif;
  padding: 20px 100px;
  border: none;
  font-size: 2em;
  margin-bottom: 50px;
}

.arrow-down-wrapper:hover {
  cursor: pointer;
}

</style>
