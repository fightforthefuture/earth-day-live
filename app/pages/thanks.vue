<template>
  <div id="thanks-page">
    <div class="container-fluid header-container">
      <div>
        <a href="/">
          <logo />
        </a>
        <div class="col-md-8 offset-md-2">
          <h1 class="title">
            {{ translate.title }}
          </h1>
        </div>
      </div>
    </div>
    <div class="col-md-8 offset-md-2">
      <section id="impact-section">
        <h4 class="impact-section-title">
          {{ translate.impact1 }}
        </h4>
        <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
        <h3 class="description">
          {{ translate.impact2 }}
        </h3>
        <h1 class="viewer-count">
          {{ translate.impact3 }}
        </h1>
        <div class="row share-icons-wrapper">
          <div class="col-md-4">
            <img class="share-icon" src="~assets/images/facebook.svg" alt="Facebook Views" />
            <p>{{ translate.impact4 }}</p>
          </div>
          <div class="col-md-4">
            <img class="share-icon" src="~assets/images/twitter.svg" alt="Twitch View" />
            <p>{{ translate.impact5 }}</p>
          </div>
          <div class="col-md-4">
            <img class="share-icon" src="~assets/images/twitter.svg" alt="Twitter View" />
            <p>{{ translate.impact6 }}</p>
          </div>
        </div>
        <div>
          <h2>
            {{ translate.impact7 }}
          </h2>
          <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />

          <h1 class="viewer-count">
            {{ translate.impact8 }}
          </h1>
        </div>
        <h2>
          {{ translate.impact9 }}
        </h2>
        <div>
          <h1 class="viewer-count">
            {{ translate.impact10 }}
          </h1>
        </div>
      </section>
    </div>
    <div class="col-md-8 offset-md-2">
      <section id="media-section">
        <div>
          <h1>
            {{ translate.impact11 }}
          </h1>
          <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
        </div>
        <div class="row">
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/vice-media-black.svg" alt="Vice" />
            <p class="media-article-title">
              <a href="https://www.vice.com/en_us/article/5dmxnn/earth-day-online-activism-what-can-you-do" target="_blank">{{ translate.media1 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/teen-vogue-logo.svg" alt="Teen Vogue" />
            <p class="media-article-title">
              <a href="https://www.teenvogue.com/story/history-of-earth-day" target="_blank">{{ translate.media2 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/the-verge-logo.png" alt="Vice" />
            <p class="media-article-title">
              <a href="https://www.theverge.com/2020/4/21/21229975/earth-day-50th-anniversary-live-stream" target="_blank">{{ translate.media3 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/rolling-stone-logo.png" alt="Rolling Stone" />
            <p class="media-article-title">
              <a href="https://www.rollingstone.com/music/music-news/earth-day-live-984959/" target="_blank">{{ translate.media5 }}</a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/nbc-logo.png" alt="NBC" />
            <p class="media-article-title">
              <a href="https://www.nbcchicago.com/news/national-international/changing-climate/50th-anniversary-of-earth-day-how-to-celebrate-at-home/2259232/" target="_blank">{{ translate.media4 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/refinery-29-logo.png" alt="Refinery 29" />
            <p class="media-article-title">
              <a href="https://www.refinery29.com/en-us/2020/04/9705447/gen-z-activists-earth-day-2020" target="_blank">{{ translate.media6 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/mtv-news-logo.png" alt="MTV News" />
            <p class="media-article-title">
              <a href="http://www.mtv.com/news/3164059/earth-day-live-youth-climate-strike" target="_blank">{{ translate.media7 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/cbs-logo.svg" alt="CBS" />
            <p class="media-article-title">
              <a href="https://www.cbsnews.com/news/coronavirus-stuck-home-how-to-celebrate-earth-day-digitally/" target="_blank">{{ translate.media8 }}</a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/mashable-logo.png" alt="Mashable" />
            <p class="media-article-title">
              <a href="https://mashable.com/article/advocacy-organizations-coronavirus/" target="_blank">{{ translate.media9 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/npr-logo.png" alt="NPR" />
            <p class="media-article-title">
              <a href="https://wamu.org/story/20/04/22/earth-day-at-50-climate-activists-go-digital-amid-pandemic-shutdown/" target="_blank">{{ translate.media10 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/forbes-logo.png" alt="Forbes" />
            <p class="media-article-title">
              <a href="https://www.forbes.com/sites/lauratenenbaum/2020/04/20/three-beautiful-ways-to-celebrate-earth-day-from-home" target="_blank">{{ translate.media11 }}</a>
            </p>
          </div>
          <div class="col-md-3">
            <img class="media-logo" src="~assets/images/media-logos/the-hill-logo.png" alt="The Hill" />
            <p class="media-article-title">
              <a href="https://thehill.com/policy/energy-environment/493951-earth-day-goes-online-amid-coronavirus-pandemic" target="_blank">{{ translate.media12 }}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="col-md-8 offset-md-2">
      <section id="next-steps-section">
        <div>
          <h1>
            {{ translate.nextSteps1 }}
          </h1>
          <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
          <h4 class="subtitle-black">
            {{ translate.nextSteps2 }}
          </h4>
        </div>
        <div class="row three-days">
          <div class="col-md-4">
            <h1 class="next-steps-day-title">{{ translate.nextSteps3 }}</h1>
            <p class="next-steps-day-description">{{ translate.nextSteps4 }}</p>
            <button class="btn next-steps-day-1-button" @click="goTo('https://strikewithus.org/demands/')">
              {{ translate.nextSteps9 }}
              <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
            </button>
          </div>
          <div class="col-md-4">
            <h1 class="next-steps-day-title">{{ translate.nextSteps5 }}</h1>
            <p class="next-steps-day-description">{{ translate.nextSteps6 }}</p>
            <button class="btn next-steps-day-2-button" @click="goTo('https://stopthemoneypipeline.com/petition/')">
              {{ translate.nextSteps10 }}
              <img class="circle-arrow" src="~assets/images/circle-green-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
            </button>
          </div>
          <div class="col-md-4">
            <h1 class="next-steps-day-title">{{ translate.nextSteps7 }}</h1>
            <p class="next-steps-day-description">{{ translate.nextSteps8 }}</p>
            <button class="btn next-steps-day-3-button" @click="goTo(localePath('/vote/'))">
              {{ translate.nextSteps11 }}
              <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
            </button>
          </div>
        </div>
      </section>
    </div>
    <section id="thank-you-section">
      <div class="col-md-6 offset-md-3">
        <h1>
          {{ translate.thankyou1 }}
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
        <h3 class="subtitle-black">
          {{ translate.thankyou2 }}
        </h3>
        <p>{{ translate.thankyou3 }}</p>
      </div>
    </section>

    <PageFooter />
  </div>
</template>

<script>
  import Logo from '~/components/Logo'
  import PageFooter from '~/components/PageFooter'
  export default {
    data() {
      return {
        translate: this.$t('thanks')
      }
    },
    components: {
      Logo,
      PageFooter,
    },
    methods: {
      goTo(url) {
        window.open(url, '_blank');
      },
    }
  }
</script>

<style scoped>

  .header-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-bottom: 130px;
  }

  .title {
    padding-bottom: 30px;
  }

  body {
    background-color: #e3e9ec;
  }

  #impact-section {
    text-align: center;
    background-color: #190825;
    padding: 40px;
    color: #fff;
    margin-top: -120px;
  }

  .impact-section-title {
    margin: auto 40px;
    padding: 20px;
  }

  .subtitle-black {
    margin: 0 auto;
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 300;
    word-spacing: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .viewer-count {
    background: -webkit-linear-gradient(right, #f26146, #f47d3a, #f8d233, #cbdb2a, #88c656);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #f26146, #f47d3a, #f8d233, #cbdb2a, #88c656);
    width: 80%;
    margin: 40px auto;
    padding: 20px;
  }

  .share-icons-wrapper {
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    margin: auto 40px;
  }

  .share-icon {
    max-width: 100px;
  }

  #media-section,
  #thank-you-section {
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  #next-steps-section {
    text-align: center;
    padding-bottom: 60px;
  }

  .media-logo {
    max-width: 100%;
  }

  .media-logo {
    padding-top: 40px;
    padding-bottom: 20px;
    max-width: 200px;
  }

  #next-steps-section .three-days {
    background-color: #190825;
    color: #fff;
  }

  .next-steps-day-title {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .next-steps-day-description {
    padding-bottom: 20px;
  }

  .next-steps-day-1-button,
  .next-steps-day-2-button,
  .next-steps-day-3-button {
    text-transform: uppercase;
    color: #fff;
    padding: 20px 40px;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 50px;
    width: 80%;
  }

  .next-steps-day-1-button {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  .next-steps-day-1-button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  .next-steps-day-2-button {
    background-image: linear-gradient(to right,#88c656 0%, #c3b449 35%, #95c552 65%, #88c656 100%);
  }

  .next-steps-day-2-button img {
    transform: rotate(270deg);
  }

  .next-steps-day-2-button:hover {
    background-image: linear-gradient(to right,#88c656 0%, #c3b449 35%, #95c552 65%, #88c656 100%);
  }

  .next-steps-day-3-button {
    background-image: linear-gradient(to right, #ec688d 0%, #e671a4 35%, #cd79b1 65%, #ec688d 100%);
  }

  .next-steps-day-3-button:hover {
    background-image: linear-gradient(to right, #ec688d 0%, #e671a4 35%, #cd79b1 65%, #ec688d 100%);
  }

  .circle-arrow {
    max-width: 25px;
    margin-left: 10px;
  }

  #thank-you-section {
    background-color: #efefef;
  }


  @media (max-width: 576px) {
    .share-icons-wrapper,
    .impact-section-title {
      margin: 0;
    }

    .viewer-count {
      margin: 0 auto;
      width: 100%;
    }
  }

</style>
