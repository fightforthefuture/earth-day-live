<template>
  <div>
    <HomePageNav />
    <TakeActionButton />
    <MaestroLivestream />
    <SignUpForm v-bind:is-rsvp-page="false"/>
    <SignUpThankYou v-bind:is-rsvp-page="false"/>
    <RegisterToVoteForm id="register" />
    <TripleYourVote />
    <ParticipantsSection />
    <ScheduleSection />
    <TheThreeDaysSection />
    <LocalLivestreamsSection />
    <GetInvolvedSection />
    <FAQsSection />
    <PageFooter />
  </div>
</template>

<script>
import MaestroLivestream from '~/components/MaestroLivestream'
import SignUpForm from '~/components/SignUpForm'
import PageFooter from '~/components/PageFooter'
import RegisterToVoteForm from '~/components/RegisterToVoteForm'
import HomePageNav from "~/components/HomePageNav"
import ParticipantsSection from "~/components/ParticipantsSection"
import TheThreeDaysSection from "~/components/TheThreeDaysSection"
import LocalLivestreamsSection from "~/components/LocalLivestreamsSection"
import GetInvolvedSection from "~/components/GetInvolvedSection"
import FAQsSection from "~/components/FAQsSection"
import SignUpThankYou from "~/components/SignUpThankYou"
import TripleYourVote from "~/components/TripleYourVote"
import ScheduleSection from "~/components/ScheduleSection"
import TakeActionButton from "~/components/TakeActionButton"

export default {
  data() {
    return {
      translate: this.$t('home')
    }
  },
  components: {
    ScheduleSection,
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
    TakeActionButton,
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
