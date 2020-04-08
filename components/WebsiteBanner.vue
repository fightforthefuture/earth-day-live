<template>
  <section id="website-banner">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.body1 }}
      </p>
      <p class="description">
        {{ translate.body2 }}
      </p>
      <div class="row widget-code-wrapper">
        <div class="col-md-9 widget-code">
          <code>
            {{ widget_link }}
          </code>
        </div>
        <div class="col-md-3 widget-code-button-wrapper">
          <button @click="showWidget">
            {{ translate.tryIt }}
            <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
          </button>
        </div>
      </div>
      <div>
        <WidgetInstructions></WidgetInstructions>
        <p class="description-center">
          {{ translate.center1 }} (<a href="https://widget.earthdaylive2020.org/demo.html" target="_blank">{{ translate.demo }}</a>)
        </p>
        <img class="widget-example" src="~assets/images/EDL-mockup-banner.png" alt="Website Banner Example 1" />
        <p class="description-center">
          {{ translate.center2 }} (<a href="https://widget.earthdaylive2020.org/demo.html?fullPage" target="_blank">{{ translate.demo }}</a>):
        </p>
        <img class="widget-example" src="~assets/images/EDL-mockup-full.png" alt="Website Banner Full" />
        <p class="description-center">
          {{ translate.center3 }} (<a href="https://widget.earthdaylive2020.org/demo.html?fullPage&showCloseButton=1" target="_blank">{{ translate.demo }}</a>):
        </p>
        <img class="widget-example" src="~assets/images/EDL-mockup-overlay.png" alt="Website Banner Closeable Overlay" />
        <p class="description">
          {{ translate.body3.preLink }}
          <a href="https://github.com/fightforthefuture/earth-day-live-widget" target="_blank">{{ translate.body3.linkText }}</a> {{ translate.body3.postLink }}
        </p>
        <p class="description">
          {{ translate.body4.preLink }}
          <a href="#are-you-with-us" @click.prevent="scrollTo('#are-you-with-us')">{{ translate.body4.linkText }}</a>{{ translate.body4.postLink }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'
import WidgetInstructions from '~/components/WidgetInstructions.vue'

export default {
  name: "WebsiteBanner",
  components: {
    WidgetInstructions,
  },
  data() {
    return {
      translate: this.$t('getInvolved.websiteBanner'),
      widget_link: "<script src=\"https://widget.earthdaylive2020.org/widget.js\" async><\/script>" //eslint-disable-line
    }
  },
  methods: {
    scrollTo(hash) {
      const duration = 500
      smoothScrollToElement(hash, duration)
      setTimeout(() => {
        location.hash = hash
      }, duration)
    },
    showWidget() {
      window.open('https://widget.earthdaylive2020.org/demo.html', '_blank')
    },
  }
}


</script>

<style scoped>
  #website-banner {
    background-color: #efefef;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  .widget-code-wrapper {
    margin-bottom: 20px;
    margin-left: 0;
  }

  .widget-code {
    background-color: #fff;
    text-align: left;
    padding: 10px 20px;
  }

  .widget-code code {
    color: #000;
  }
  .widget-code-button-wrapper {
    padding-left: 0;
  }

  .widget-code-button-wrapper button {
    width: 100%;
    text-transform: uppercase;
    color: #fff;
    padding: 20px;
    font-weight: 700;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%) !important;
  }

  .widget-code-button-wrapper button:hover {
    cursor: pointer;
  }

  .widget-code-button-wrapper .circle-arrow {
    width: 30px;
    margin-top: -2px;
    margin-left: 10px;
  }

  .widget-example {
    width: 80%;
    margin: 20px auto;
  }

  @media only screen and (max-width: 600px) {
    .widget-code-button-wrapper {
      padding-right: 0;
    }
  }
</style>
