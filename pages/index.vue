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
          <h4 class="subtitle">
            {{ translate.subtitle3 }}
          </h4>
        </div>
      </div>
    </div>
    <SignUpForm />
    <RegisterToVoteForm />
    <ParticipantsSection />
    <TheThreeDaysSection />
    <GetInvolvedSection />
    <FAQsSection />
    <PageFooter />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SignUpForm from '~/components/SignUpForm.vue'
import PageFooter from '~/components/PageFooter.vue'
import RegisterToVoteForm from '~/components/RegisterToVoteForm.vue'
import HomePageNav from "../components/homePageNav";
import ParticipantsSection from "../components/ParticipantsSection";
import TheThreeDaysSection from "../components/TheThreeDaysSection";
import GetInvolvedSection from "../components/GetInvolvedSection";
import FAQsSection from "../components/FAQsSection";

export default {
  data() {
    return {
      translate: this.$t('home')
    }
  },
  components: {
    HomePageNav,
    Logo,
    SignUpForm,
    RegisterToVoteForm,
    FAQsSection,
    GetInvolvedSection,
    TheThreeDaysSection,
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
  padding-bottom: 130px;
}

.title {
  margin: 0 auto;
  font-family: titling-gothic-fb, sans-serif;
  display: block;
  font-weight: 300;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 30px;
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
