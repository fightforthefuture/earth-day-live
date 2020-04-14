<template>
  <section id="social-downloads">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
      <p class="description">
        {{ translate.description }}
      </p>

      <button class="btn social-downloads-button" @click="goToSocialDownloads">
        {{ translate.download }}
        <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
      </button>
      <div class="row">
        <div class="col-md-6">
          <img class="social-downloads-mockup" src="~assets/images/EDL-instagram-post.png" :alt="translate.postAlt">
        </div>
        <div class="col-md-6">
          <img class="social-downloads-mockup" src="~assets/images/EDL-instagram-story.png" :alt="translate.storyAlt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SocialDownloads",
  data() {
    return { translate: this.$t('getInvolved.socialDownloads') }
  },
  methods: {
    goToSocialDownloads() {
      window.open("https://drive.google.com/drive/folders/1ZxlFc8B3r8R-XVI23iDt8YBEA5LLpXjK", "_blank");
    }
  }
}
</script>

<style scoped>
  #social-downloads {
    background-color: #f8f8f8;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  .social-downloads-button {
    text-transform: uppercase;
    color: #fff;
    padding: 15px 30px;
    font-weight: 700;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
    margin-bottom: 50px;
  }

  .social-downloads-button:focus,
  .social-downloads-button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  .circle-arrow {
    width: 30px;
    margin-top: -2px;
    margin-left: 10px;
  }

  .social-downloads-mockup {
    width: 80%;
  }
</style>
