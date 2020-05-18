<template>
  <div id="thanks-page">
    <ThanksNav />
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
    <section id="video-recap">
      <div class="col-md-8 offset-md-2">
        <div class="video-container">
          <iframe width="100%" height="600" src="https://www.youtube.com/embed/W8G09g-Z-FU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <section id="impact-section">
      <div class="col-md-8 offset-md-2">
        <font-awesome-layers class="fa-2x down-arrow-pink">
          <font-awesome-icon icon="chevron-down"/>
        </font-awesome-layers>
        <h2 class="impact-section-small">
          {{ translate.impact1 }}
        </h2>
        <h1 class="impact-section-large">
          {{ translate.impact2 }}
        </h1>
        <h2 class="impact-section-small">
          {{ translate.impact3 }}
        </h2>
        <font-awesome-layers class="fa-2x down-arrow-pink">
          <font-awesome-icon icon="chevron-down"/>
        </font-awesome-layers>
        <h2 class="impact-section-small">
          {{ translate.impact4 }}
        </h2>
        <h1 class="impact-title-event">
          {{ translate.impact5 }}
        </h1>
        <font-awesome-layers class="fa-2x down-arrow-pink">
          <font-awesome-icon icon="chevron-down"/>
        </font-awesome-layers>
        <h2 class="impact-section-small">
          {{ translate.impact6 }}
        </h2>
        <h1 class="impact-title-viewers">
          {{ translate.impact7 }}
        </h1>
        <div class="row impact-social-views-wrapper">
          <div class="impact-social-views-top-arrow"></div>
          <div class="col-4">
            <div class="row">
              <div class="col-lg-3 share-icon-wrapper">
                <img class="share-icon" src="~assets/images/facebook.svg" alt="Facebook Views" />
              </div>
              <div class="col-md-9">
                <h4 class="impact-social-text">{{ translate.impact8 }}</h4>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-lg-3 share-icon-wrapper">
                <img class="share-icon" src="~assets/images/twitch.png" alt="Twitch Views" />
              </div>
              <div class="col-md-9">
                <h4 class="impact-social-text">{{ translate.impact9 }}</h4>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-lg-3 share-icon-wrapper">
                <img class="share-icon" src="~assets/images/twitter.svg" alt="Twitter Views" />
              </div>
              <div class="col-md-9">
                <h4 class="impact-social-text">{{ translate.impact10 }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 offset-md-2">
        <font-awesome-layers class="fa-2x down-arrow-pink">
          <font-awesome-icon icon="chevron-down"/>
        </font-awesome-layers>
      </div>
      <div class="impact-color-background">
        <div class="impact-color-background-top-arrow"></div>
        <div class="impact-top-arrow"></div>
        <div class="col-md-8 offset-md-2">
          <h2 class="impact-section-small">
            {{ translate.impact11 }}
          </h2>
          <h1 class="impact-title-actions">
            {{ translate.impact12 }}
          </h1>
          <img class="white-arrow" src="~assets/images/arrow-down.svg" alt="Arrow down" />
          <h2 class="impact-section-small">
            {{ translate.impact13 }}
          </h2>
          <h1 class="impact-title-pledges">
            {{ translate.impact14 }}
          </h1>
        </div>
      </div>
    </section>
    <section id="media-section">
      <div class="col-md-8 offset-md-2">
        <div>
          <h1 class="section-title">
            {{ translate.mediaTitle }}
          </h1>
        </div>
        <div class="row">
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/vice-media-black.svg" alt="Vice" />
              <p class="media-article-title">
                {{ translate.media1 }}
              </p>
              <p class="media-title-link">
                <a href="https://www.vice.com/en_us/article/5dmxnn/earth-day-online-activism-what-can-you-do" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/teen-vogue-logo.svg" alt="Teen Vogue" />
            <p class="media-article-title">
              {{ translate.media2 }}
            </p>
              <p class="media-title-link">
                <a href="https://www.teenvogue.com/story/history-of-earth-day" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/the-verge-logo.png" alt="Vice" />
            <p class="media-article-title">
              {{ translate.media3 }}
            </p>
              <p class="media-title-link">
                <a href="https://www.theverge.com/2020/4/21/21229975/earth-day-50th-anniversary-live-stream" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/rolling-stone-logo.png" alt="Rolling Stone" />
            <p class="media-article-title">
              {{ translate.media5 }}
            </p>
              <p class="media-title-link">
                <a href="https://www.rollingstone.com/music/music-news/earth-day-live-984959/" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/nbc-logo.png" alt="NBC" />
            <p class="media-article-title">
              {{ translate.media4 }}
            </p>
              <p class="media-title-link">
                <a href="https://www.nbcchicago.com/news/national-international/changing-climate/50th-anniversary-of-earth-day-how-to-celebrate-at-home/2259232/" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/refinery-29-logo.png" id="refinery-29-logo" alt="Refinery 29" />
            <p class="media-article-title">
              {{ translate.media6 }}
            </p>
              <p class="media-title-link">
                <a href="https://www.refinery29.com/en-us/2020/04/9705447/gen-z-activists-earth-day-2020" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/mtv-news-logo.png" alt="MTV News" />
            <p class="media-article-title">
              {{ translate.media7 }}
            </p>
              <p class="media-title-link">
                <a href="http://www.mtv.com/news/3164059/earth-day-live-youth-climate-strike" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/cbs-logo.svg" alt="CBS" />
            <p class="media-article-title">
              {{ translate.media8 }}
            </p>
              <p class="media-title-link">
                <a href="https://www.cbsnews.com/news/coronavirus-stuck-home-how-to-celebrate-earth-day-digitally/" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/mashable-logo.png" alt="Mashable" />
            <p class="media-article-title">
              {{ translate.media9 }}
            </p>
              <p class="media-title-link">
                <a href="https://mashable.com/article/advocacy-organizations-coronavirus/" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/npr-logo.png" alt="NPR" />
            <p class="media-article-title">
              {{ translate.media10 }}
            </p>
              <p class="media-title-link">
                <a href="https://wamu.org/story/20/04/22/earth-day-at-50-climate-activists-go-digital-amid-pandemic-shutdown/" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/forbes-logo.png" alt="Forbes" />
              <p class="media-article-title">
                {{ translate.media11 }}
              </p>
              <p class="media-title-link">
                <a href="https://www.forbes.com/sites/lauratenenbaum/2020/04/20/three-beautiful-ways-to-celebrate-earth-day-from-home" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="media-card-wrapper">
              <img class="media-logo" src="~assets/images/media-logos/the-hill-logo.png" id="the-hill-logo" alt="The Hill" />
              <p class="media-article-title">
                {{ translate.media12 }}
              </p>
              <p class="media-title-link">
                <a href="https://thehill.com/policy/energy-environment/493951-earth-day-goes-online-amid-coronavirus-pandemic" target="_blank">
                  {{ translate.readArticle }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="next-steps-section">
      <div class="col-md-8 offset-md-2">
        <h1 class="section-title">
          {{ translate.nextSteps1 }}
        </h1>
        <div class="row three-days">
          <div class="col-xl-4">
            <div class="next-steps-day-wrapper">
              <h1 class="next-steps-day-title next-steps-day-1-title">{{ translate.nextSteps3 }}</h1>
            <p class="next-steps-day-description">{{ translate.nextSteps4 }}</p>
              <div class="next-steps-button-wrapper">
                <button class="btn next-steps-day-1-button" @click="goTo('https://strikewithus.org/demands/')">
                  {{ translate.nextSteps9 }}
                  <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="next-steps-day-wrapper">
              <h1 class="next-steps-day-title next-steps-day-2-title">{{ translate.nextSteps5 }}</h1>
            <p class="next-steps-day-description">{{ translate.nextSteps6 }}</p>
              <div class="next-steps-button-wrapper">
                <button class="btn next-steps-day-2-button" @click="goTo('https://stopthemoneypipeline.com/petition/')">
                  {{ translate.nextSteps10 }}
                <img class="circle-arrow" src="~assets/images/circle-green-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="next-steps-day-wrapper">
              <h1 class="next-steps-day-title next-steps-day-3-title">{{ translate.nextSteps7 }}</h1>
            <p class="next-steps-day-description">{{ translate.nextSteps8 }}</p>
              <div class="next-steps-button-wrapper">
                <button class="btn next-steps-day-3-button" @click="goTo(localePath('/vote/'))">
                  {{ translate.nextSteps11 }}
                <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="thank-you-section">
      <div class="col-md-8 offset-md-2">
        <h1 id="thank-you-title">
          {{ translate.thankyou1 }}
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
        <h3 class="subtitle-black">
          {{ translate.thankyou2 }}
        </h3>
        <p class="thank-you-list">{{ translate.thankyou3 }}</p>
      </div>
    </section>
    <PageFooter />
  </div>
</template>

<script>
  import Logo from '~/components/Logo'
  import PageFooter from '~/components/PageFooter'
  import ThanksNav from '~/components/ThanksNav'
  export default {
    data() {
      return {
        translate: this.$t('thanks')
      }
    },
    components: {
      ThanksNav,
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

<style>

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

  #thanks-page .logo-eclipse,
  #thanks-page .logo-earth-day-live {
    max-width: 150px;
  }

  .title {
    padding-bottom: 40px;
    font-size: 4em;
  }

  body {
    background-color: #efefef;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #impact-section {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 40px;
  }

  #video-recap {
    margin-top: -120px;
  }

  .down-arrow-pink {
    color: #ec727e;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .impact-section-small {
    font-size: 2.5em;
    text-transform: uppercase;
    color: #100c19;
  }

  .impact-section-large {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 20vw;
    background: -webkit-linear-gradient(left, #ffde16, #f47d3a, #fb722c, #f65b5a, #f85371);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 92%;
  }

  .impact-title-event {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 6vw;
    background: -webkit-linear-gradient(45deg, #ec688d, #cd79b1, #cbdb2a, #f26146);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 92%;
  }

  .impact-title-viewers {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 8vw;
    background: -webkit-linear-gradient(135deg, #ec688d, #cd79b1, #cbdb2a, #f26146);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 92%;
  }

  .impact-social-views-wrapper {
    background: #fff;
    padding: 20px;
    text-align: left;
    position: relative;
    margin-top: 20px;
  }

  .impact-social-views-top-arrow {
    position: absolute;
    width: 0;
    height: 0;
    top: -20px;
    left: 50%;
    border-top: 20px solid #fff;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    transform: rotate(180deg);
    margin-left: -20px;
  }

  .share-icon-wrapper {
    text-align: center;
  }

  .share-icon {
    max-width: 85%;
    display: inline-block;
  }

  .impact-social-text {
    text-transform: uppercase;
    display: inline-block;
    font-size: 1.3em;
  }

  .impact-color-background {
    background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: #fff;
    padding-top: 60px;
    padding-bottom: 60px;
    position: relative;
  }

  .impact-color-background-top-arrow {
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 50%;
    border-top: 20px solid #efefef;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    margin-left: -20px;
  }

  .impact-color-background .impact-section-small {
    color: #fff;
  }

  .white-arrow {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .impact-title-actions {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 10vw;
    line-height: 100%;
  }

  .impact-title-pledges {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 7vw;
    line-height: 100%;
  }

  .subtitle-black {
    margin: 0 auto;
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 300;
    word-spacing: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
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

  #media-section .col-xl-3 {
    height: 400px;
  }

  .media-card-wrapper {
    transition: .10s, transform .10s ease;
    -moz-transition: .10s, transform .10s ease;
    -webkit-transition: .10s, transform .10s ease;
  }

  .media-card-wrapper:hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari */
    transform: scale(1.1);
    -moz-box-shadow:    0 0 20px 10px #ccc;
    -webkit-box-shadow: 0 0 20px 10px #ccc;
    box-shadow:         0 0 20px 10px #ccc;
  }

  .media-card-wrapper {
    background: #fff;
    padding: 10px;
    height: 90%;
    position: relative;
  }

  .media-logo {
    padding: 40px 10px 30px 10px;
    max-width: 80%;
  }

  #the-hill-logo,
  #refinery-29-logo {
    width: 70%;
  }

  .media-article-title {
    padding-left: 20px;
    padding-bottom: 20px;
    text-align: left;
    font-size: 1.1em;
    font-family: titling-gothic-fb, sans-serif;
    text-decoration: underline;
  }

  .media-title-link {
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    position: absolute;
    width: 100%;
    bottom: 10px;
    text-align: left;
    padding-left: 20px;
  }

  .media-title-link a {
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8em;
    font-weight: 800;
  }

  .next-steps-day-wrapper {
    background-color: #190825;
    color: #fff;
    padding: 10px 10px 0 10px;
    position: relative;
    height: 400px;
  }

  .next-steps-button-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .next-steps-day-title {
    padding: 20px 20px 0 20px;
    text-align: left;
  }

  .next-steps-day-description {
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
  }

  .next-steps-day-1-button,
  .next-steps-day-2-button,
  .next-steps-day-3-button {
    text-transform: uppercase;
    color: #fff;
    padding: 20px 40px;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 20px;
    width: 88%;
  }

  .next-steps-day-1-title {
    background: -webkit-linear-gradient(right, #f26146, #fb722c, #f65b5a, #f85371);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .next-steps-day-2-title {
    background: -webkit-linear-gradient(right, #88c656, #c3b449, #95c552, #88c656);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .next-steps-day-3-title {
    background: -webkit-linear-gradient(right, #ec688d, #e671a4, #cd79b1, #ec688d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .next-steps-day-1-button {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  .next-steps-day-1-button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  .next-steps-day-2-button {
    background-image: linear-gradient(to right, #88c656 0%, #c3b449 35%, #95c552 65%, #88c656 100%);
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
    margin-left: 5px;
    padding-bottom: 3px;
  }

  #thank-you-section {
    background-color: #efefef;
  }

  .section-title {
    padding-bottom: 60px;
  }

  #thank-you-title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 5vw;
    background: -webkit-linear-gradient(135deg, #ec688d, #cd79b1, #cbdb2a, #f26146);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 92%;
  }

  #thank-you-section .subtitle-black {
    font-weight: 700;
    font-size: 2em;
  }

  .thank-you-list {
    font-weight: 600px;
    color: #6a6476;
  }

  @media (max-width: 768px) {

    #thanks-page .logo-eclipse,
    #thanks-page .logo-earth-day-live {
      max-width: 100px;
    }

    #thanks-page .title {
      font-size: 2em;
    }

    #thanks-page .section-title {
      font-size: 2em;
    }

    .impact-section-large {
      font-size: 35vw;
    }

    .impact-section-small {
      font-size: 2em;
    }

    .impact-title-event {
      font-size: 10vw;
    }

    .impact-title-viewers {
      font-size: 12vw;
    }

    .share-icon {
      width: 40px;
      padding-bottom: 10px;
    }

    .impact-social-text {
      font-size: 0.8em;
      text-align: center;
    }

    .down-arrow-pink {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .impact-social-views-wrapper {
      padding: 20px 5px 20px 5px;
      margin-right: 5px;
      margin-left: 5px;
      margin-top: 30px;
    }

    .impact-title-actions {
      font-size: 14vw;
    }

    .impact-title-pledges {
      font-size: 10vw;
    }

    #media-section .col-xl-3 {
      height: 300px;
    }

    .media-logo {
      width: 200px;
    }

    #refinery-29-logo,
    #the-hill-logo {
      width: 45%;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .next-steps-day-wrapper {
      margin-bottom: 20px;
      height: 360px;
    }

    #thank-you-section {
      padding-top: 0;
    }

    #thank-you-title {
      font-size: 10vw;
    }
  }

</style>
