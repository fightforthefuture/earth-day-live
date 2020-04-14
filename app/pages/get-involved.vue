<template>
  <div>
    <GetInvolvedNav />
    <div class="container-fluid get-involved-container">
      <div class="get-involved-title-details">
        <a @click="goTo('/')" class="get-involved-logo">
          <logo />
        </a>
        <div class="col-md-8 offset-md-2">
          <h1 class="title">
            {{ $t('getInvolved.title') }}
          </h1>
        </div>
        <div class="col-md-6 offset-md-3">
          <ImReadyButton />
        </div>
      </div>
      <video loop muted autoplay poster="~assets/images/earth-day-live-gradient.jpg" class="video-background">
        <source src="~assets/images/animated-background.mp4" type="video/mp4">
      </video>
    </div>
    <WhatsHappening />
    <WebsiteBanner />
    <BannerAds />
    <SocialDownloads />
    <AreYouWithUs />
    <div class="are-you-with-us-signup-wrapper">
      <div class="col-md-8 offset-md-2">
        <hr class="white-separator">
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
  import GetInvolvedNav from '~/components/GetInvolvedNav'
  import Logo from '~/components/Logo'
  import ImReadyButton from '~/components/ImReadyButton'
  import WhatsHappening from '~/components/WhatsHappening'
  import WebsiteBanner from '~/components/WebsiteBanner'
  import BannerAds from '~/components/BannerAds'
  import SocialDownloads from '~/components/SocialDownloads'
  import AreYouWithUs from '~/components/AreYouWithUs'
  import SignUpForm from '~/components/SignUpForm'
  import PageFooter from '~/components/PageFooter'

  export default {
    components: {
      GetInvolvedNav,
      Logo,
      ImReadyButton,
      WhatsHappening,
      WebsiteBanner,
      BannerAds,
      SocialDownloads,
      AreYouWithUs,
      SignUpForm, //eslint-disable-line
      PageFooter,
    },
    methods: {
      goTo(url) {
        window.location.href = url
      },
    }
  }

</script>

<style>

  .video-background {
    position:fixed;
    z-index: -1;
  }

  .container-fluid.get-involved-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-bottom: 50px;
    width:100vw;
    height: 75vh;
  }

  .get-involved-title-details {
    position: static;
  }

  .are-you-with-us-signup-wrapper {
    background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-top: 400px;
    margin-top: -500px;
    text-align: center;
  }
  .get-involved-logo:hover {
    cursor: pointer;
  }

  .white-separator {
    width: 80%;
    background-color: #fff;
    margin: auto;
  }
  .are-you-with-us-signup-wrapper .logo-eclipse,
  .are-you-with-us-signup-wrapper .logo-earth-day-live {
    max-width: 150px;
  }

  .description {
    text-align: justify;
  }

  .description-center {
    margin: auto;
  }

  .separator {
    margin-bottom: 10px;
  }
  #EARTH_DAY_LIVE {
    display: none;
  }
</style>
