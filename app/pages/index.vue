<template>
  <div>
    <HomePageNav />
    <MaestroLivestream />
    <SignUpForm />
    <SignUpThankYou />
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
import MaestroLivestream from "../components/MaestroLivestream";

export default {
  data() {
    return {
      translate: this.$t('home')
    }
  },
  components: {
    MaestroLivestream,
    TripleYourVote,
    SignUpThankYou,
    HomePageNav,
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
  padding-right: 0px;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
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
