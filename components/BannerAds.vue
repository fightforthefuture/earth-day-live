<template>
  <section id="banner-ads">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        Use these banner ads
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
      <p class="description">
        Do you run a site or blog? Use these banner ads to get the word out about Earth Day Live. There are tons of
        <a href="https://drive.google.com/drive/folders/1D5xxm1n1TsEmzNRgrOrMTSoi1el1jtV1" target="_blank">ad sizes to choose from here</a>.
      </p>
      <a href="https://drive.google.com/drive/folders/1D5xxm1n1TsEmzNRgrOrMTSoi1el1jtV1" target="_blank">
        <img class="banner-ad" src="~assets/images/banner-ad-600x628.png" alt="Ready to help save the world? (Banner Ad 600x628)">
      </a>
      <a href="https://drive.google.com/drive/folders/1D5xxm1n1TsEmzNRgrOrMTSoi1el1jtV1" target="_blank">
        <img class="banner-ad" src="~assets/images/banner-ad-970x90.png" alt="Ready to help save the world? (Banner Ad 970x90)">
      </a>
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

  .banner-ad {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
