<template>
  <section id="website-banner">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        Share our banner
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
      <p class="description">
        Spread the word about Earth Day Live with a small, but powerful, banner. On Earth Day, expand the banner full screen so your website can join the mobilization!
      </p>
      <p class="description">
        Simply add this line of JavaScript to any page on your site to join Earth Day Live:
      </p>
      <div class="row widget-code-wrapper">
        <div class="col-md-9 widget-code">
          <code>
            {{ widget_link }}
          </code>
        </div>
        <div class="col-md-3 widget-code-button-wrapper">
          <button @click="showWidget">
            Try it out
            <img class="circle-arrow" src="~assets/images/circle-arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
      <div>
        <p class="description-center">
          The widget will appear on your page as a closable footer just like you see it here (<a href="https://widget.earthdaylive2020.org/demo.html" target="_blank">demo</a>):
        </p>
        <img class="widget-example" src="~assets/images/EDL-mockup-banner.png" alt="Website Banner Example 1" />
        <p class="description-center">
          Then on April 22, the widget can expand it show your site supporting Earth Day Live (<a href="https://widget.earthdaylive2020.org/demo.html?fullPage" target="_blank">demo</a>):
        </p>
        <img class="widget-example" src="~assets/images/EDL-mockup-overlay.png" alt="Website Banner Example 2" />
        <p class="description-center">
          A closable overlay option is included as part of the widget (<a href="https://widget.earthdaylive2020.org/demo.html?fullPage&showCloseButton=1" target="_blank">demo</a>):
        </p>
        <img class="widget-example" src="~assets/images/EDL-mockup-full.png" alt="Website Banner Example 3" />
        <p class="description">
          Visit our <a href="https://github.com/fightforthefuture/earth-day-live-widget" targer="_blank">GitHub page</a> to learn how you can further customize the user experience or behavior of the widget.
          Please feel free to create your own custom way to drive awareness of Earth Day Live on your site.
        </p>
        <p class="description">
          If you use your site to spread the word in any way, please let us know by
          <a href="#are-you-with-us" @click.prevent="scrollTo('#are-you-with-us')">filling in the form below</a>.
          This is super important so we can help amplify your impact and mobilize as many people as possible to help stop the climate crisis.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'

export default {
  name: "WebsiteBanner",
  data() {
    return {
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
    }
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
