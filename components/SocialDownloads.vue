<template>
  <section id="social-downloads">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        Everyone: Spread the word on social media
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
      <p class="description">
        On social media? Share these Earth Day Live graphics on your corner of the Internet to get the word out.
      </p>
      <a href="https://drive.google.com/drive/u/2/folders/1vb5cOeosTzj3Nfl4GpmUgNbm2_MKQTRM" target="_blank">
        <button class="social-downloads-button">
          Download now
          <img class="circle-arrow" src="~assets/images/circle-arrow.svg" alt="Arrow" />
        </button>
      </a>
    </div>
  </section>
</template>

<script>
    export default {
        name: "SocialDownloads"
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
  }

  .social-downloads-button {
    text-transform: uppercase;
    color: #fff;
    padding: 15px 50px;
    font-weight: 700;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%) !important;
  }
  .social-downloads-button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%) !important;
  }

  .circle-arrow {
    width: 30px;
    margin-top: -2px;
    margin-left: 10px;
  }
</style>
