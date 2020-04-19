<template>
  <section id="website-participants">
    <div class="col-md-8 offset-md-2">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <b-row>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/Ben_and_jerry_logo.svg" alt="Ben & Jerry" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/eyeo-black-web.png" alt="Eyeo" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/FFTF-logo.png" alt="Fight For the Future" /></b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/fodlogo.png" alt="Funny or Die" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/IIYC-Black.png" alt="Internaitonal Indigenous Youth Council" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/imgur-logo.png" alt="Imgur" /></b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="6" md="4"><img id="kde-logo" class="logo" src="~assets/images/website-participants/kde-logo-bluegradient.png" alt="KDE" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/LushLogo.png" alt="Lush" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/mapbox-logo-black.svg" alt="Mapbox" /></b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/seventh-gen-logo-768x321.png" alt="Seventh Generation" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/tumblr-logo.png" alt="Tumblr" /></b-col>
        <b-col cols="12" sm="6" md="4"><img id="uume-logo" class="logo" src="~assets/images/website-participants/UUME.png" alt="Unitarian Universalist Ministry for Earth" /></b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/vivaldi_logo_dark.png" alt="Vivaldi" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/Wholegrain-logo.png" alt="Wholegrain Digital" /></b-col>
        <b-col cols="12" sm="6" md="4"><img class="logo" src="~assets/images/website-participants/Wikimedia_Foundation_logo_-_horizontal.png" alt="Wikimedia" /></b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "WebsiteParticipants",
    data() {
      return { translate: this.$t('home.participants') }
    },
  }
</script>

<style scoped>

  #website-participants {
    background-color: #f8f8f8;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }
  .logo {
    max-width: 70%;
    padding: 20px 0;
    text-align: center;
  }

  #uume-logo,
  #kde-logo {
    max-width: 90px;
  }
</style>
