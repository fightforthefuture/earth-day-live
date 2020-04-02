<template>
  <div>
    <GetInvolvedNav />
    <div class="container-fluid get-involved-container">
      <!-- The video -->
      <video autoplay muted loop class="backgroundVideo">
        <source src="~assets/images/animation-back.mp4" type="video/mp4">
      </video>
      <div>
        <logo />
        <div class="col-md-8 offset-md-2">
          <h1 class="title">
            Spread the word to help save the world.
          </h1>
        </div>
        <div class="col-md-6 offset-md-3">
          <ImReadyButton />
        </div>
      </div>
    </div>
    <WhatsHappening />
    <WebsiteBanner />
    <BannerAds />
    <SocialDownloads />
    <AreYouWithUs />
    <div class="are-you-with-us-signup-wrapper">
      <div class="col-md-8 offset-md-2">
        <hr class="white-separator">
        <Logo />
      </div>
    </div>
  </div>
</template>

<script>
  import GetInvolvedNav from '~/components/GetInvolvedNav.vue'
  import Logo from '~/components/Logo.vue'
  import ImReadyButton from '~/components/ImReadyButton.vue'
  import WhatsHappening from '~/components/WhatsHappening.vue'
  import WebsiteBanner from '~/components/WebsiteBanner.vue'
  import BannerAds from '~/components/BannerAds.vue'
  import SocialDownloads from '~/components/SocialDownloads.vue'
  import AreYouWithUs from '~/components/AreYouWithUs.vue'
  import SignUpForm from '~/components/SignUpForm.vue'

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
    },
  }
</script>

<style>
  .container-fluid.get-involved-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-bottom: 50px;
  }

  .title {
    margin: 0 auto;
    font-family: titling-gothic-fb, sans-serif;
    display: block;
    font-weight: 300;
    color: #fff;
    letter-spacing: 1px;
    padding-bottom: 50px;
  }
  .are-you-with-us-signup-wrapper {
    background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-top: 500px;
    margin-top: -500px;
    text-align: center;
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

  .backgroundVideo {
    padding-top: 30px;
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-bottom: 190px;
  }

  .logo {
    position: relative;
  }

  @media screen and (max-width: 1050px) and (min-width: 480px) {
    .backgroundVideo {
      padding-bottom: 650px;
    }
  }

  @media screen and (max-width: 480px) {
    .backgroundVideo {
      padding-bottom: 0px;
      margin-bottom: -75px;
    }
  }
</style>
