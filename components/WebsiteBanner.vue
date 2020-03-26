<template>
  <section id="website-banner">
    <div class="col-md-8 offset-md-2">
      <h1 class="section-title">
        Sites: add the Earth Day Live banner
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
      <p class="description">
        Add our widget to your site. It's a small (but powerful!) notice to your site's users that something BIG is happening for Earth Day.
      </p>
    </div>
  </section>
</template>

<script>
    export default {
        name: "WebsiteBanner"
    }
</script>

<style scoped>
  #website-banner {
    background-color: #efefef;
    padding: 75px;
    text-align: center;
  }

  .section-title {
    text-align: center;
  }

  .separator {
    margin: auto;
  }
</style>
