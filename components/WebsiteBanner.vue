<template>
  <section id="website-banner">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        Sites: add the Earth Day Live banner
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
      <p class="description">
        Add our widget to your site. It's a small (but powerful!) notice to your site's users that something BIG is happening for Earth Day.
      </p>
      <div class="row">
        <div class="col-md-9 widget-code">
          <code>
            {{ widget_link }}
          </code>
        </div>
        <div class="col-md-3 widget-code-button-wrapper">
          <button>
            Try it out
            <img class="circle-arrow" src="~assets/images/circle-arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WebsiteBanner",
  data() {
    return {
      widget_link: "<script src=\"https://assets.earthdaylive2020.net/widget.js\" async><\/script>"
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

  .widget-code-button-wrapper .circle-arrow {
    width: 30px;
    margin-top: -2px;
    margin-left: 10px;
  }
</style>
