<template>
  <section id="banner-ads">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
        <a href="https://drive.google.com/drive/folders/1D5xxm1n1TsEmzNRgrOrMTSoi1el1jtV1" target="_blank">{{ translate.linkText }}</a>.
      </p>
      <a href="https://drive.google.com/drive/folders/1D5xxm1n1TsEmzNRgrOrMTSoi1el1jtV1" target="_blank">
        <img class="banner-ad" src="~assets/images/banner-ad-600x628.png" :alt="translate.smallAlt">
      </a>
      <a href="https://drive.google.com/drive/folders/1D5xxm1n1TsEmzNRgrOrMTSoi1el1jtV1" target="_blank">
        <img class="banner-ad" src="~assets/images/banner-ad-970x90.png" :alt="translate.largeAlt">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerAds",
  data() {
    return { translate: this.$t('getInvolved.bannerAds') }
  }
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
    text-transform: uppercase;
  }

  .banner-ad {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
