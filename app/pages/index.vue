<template>
  <div>
    <HomePageNav />
    <div class="container-fluid header-container">
      <div>
        <logo />
        <div class="col-md-6 offset-md-3">
          <h1 class="title">
            {{ translate.title }}
          </h1>
        </div>
        <div class="col-md-6 offset-md-3">
          <h4 class="subtitle">
            {{ translate.subtitle1 }}
          </h4>
          <h4 class="subtitle">
            {{ translate.subtitle2 }}
          </h4>
        </div>
      </div>
      <video loop muted autoplay poster="~assets/images/earth-day-live-gradient.jpg" class="video-background">
        <source src="~assets/images/animated-background.mp4" type="video/mp4">
      </video>
    </div>
    <SignUpForm />
    <SignUpThankYou />
    <CheckMyRegistrationForm />
    <RegisterToVoteForm />
    <TripleYourVote />
    <ParticipantsSection />
    <TheThreeDaysSection />
    <LocalLivestreamsSection />
    <GetInvolvedSection />
    <FAQsSection />
    <PageFooter />
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import SignUpForm from '~/components/SignUpForm'
import PageFooter from '~/components/PageFooter'
import RegisterToVoteForm from '~/components/RegisterToVoteForm'
import HomePageNav from "~/components/HomePageNav";
import ParticipantsSection from "~/components/ParticipantsSection";
import TheThreeDaysSection from "~/components/TheThreeDaysSection";
import LocalLivestreamsSection from "~/components/LocalLivestreamsSection";
import GetInvolvedSection from "~/components/GetInvolvedSection";
import FAQsSection from "~/components/FAQsSection";
import SignUpThankYou from "~/components/SignUpThankYou";
import TripleYourVote from "~/components/TripleYourVote";
import CheckMyRegistrationForm from "~/components/CheckMyRegistrationForm";

export default {
  data() {
    return {
      translate: this.$t('home')
    }
  },
  components: {
    CheckMyRegistrationForm,
    TripleYourVote,
    SignUpThankYou,
    HomePageNav,
    Logo,
    SignUpForm,
    RegisterToVoteForm,
    FAQsSection,
    GetInvolvedSection,
    TheThreeDaysSection,
    LocalLivestreamsSection,
    ParticipantsSection,
    PageFooter,
  }
}
</script>

<style>

.video-background {
  position: fixed;
  z-index: -1;
  height: 300vh;
}

.header-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 130px;
  overflow: hidden;
}

.title {
  padding-bottom: 30px;
}

body {
 background-color: #e3e9ec;
}

.subtitle {
  margin: 0 auto;
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 300;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 20px;
}
.separator {
  margin: 30px;
}

.description {
  text-align: justify;
  margin-bottom: 30px;
}
</style>
