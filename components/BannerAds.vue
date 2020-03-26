<template>
  <section id="banner-ads">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        Use these banner ads
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
        name: "BannerAds"
    }
</script>

<style scoped>
  #banner-ads {
    background-color: #f8f8f8;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
  }

  .separator {
    margin: auto;
  }
</style>
