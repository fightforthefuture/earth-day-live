<template>
  <section id="social-downloads">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        Spread the word
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
      <p class="description">
        On social media? Share these Earth Day Live graphics on your corner of the Internet to get the word out.
      </p>

      <button class="social-downloads-button" @click="goToSocialDownloads">
        Download now
        <img class="circle-arrow" src="~assets/images/circle-arrow.svg" alt="Arrow" />
      </button>
      <div class="row">
        <div class="col-md-6">
          <img class="social-downloads-mockup" src="~assets/images/instagram-post-mockup.png" alt="Instagram Post">
        </div>
        <div class="col-md-6">
          <img class="social-downloads-mockup" src="~assets/images/instagram-story-mockup.png" alt="Instagram Story">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "SocialDownloads",
      methods: {
        goToSocialDownloads() {
          window.open("https://drive.google.com/drive/u/2/folders/1vb5cOeosTzj3Nfl4GpmUgNbm2_MKQTRM", "_blank");
        }
      }
    }

</script>

<style scoped>
  #social-downloads {
    background-color: #efefef;
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
