<template>
  <div id="donate-page">
    <div class="container-fluid header-container">
      <div>
        <img class="earth-day-live-full-lockup" src="~/assets/images/earth-day-live-full-lockup.png" alt="Earth Day Live" />
        <div class="col-md-8 offset-md-2">
          <h2 class="title">
            {{ translate.title }}
          </h2>
        </div>
        <div class="col-md-8 offset-md-2">
          <h5 class="subtitle">
            {{ translate.subtitle }}
          </h5>
        </div>
      </div>
    </div>
    <div class="container logo-container">
      <div class="col-md-8 offset-md-2">
        <div class="row logo-row">
          <div class="col-6 col-8-md">
            <a href="https://www.doctorswithoutborders.org/" target="__blank">
              <img class="donate-logo" src="~/assets/images/dwb-logo.png" alt="Doctors Without Borders" />
            </a>

          </div>
          <div class="col-6 col-8-md">
            <a href="https://www.feedingamerica.org/" target="__blank">
            <img class="donate-logo" src="~/assets/images/fa-logo.png" alt="Feeding America" />
            </a>
          </div>
        </div>
        <div class="row logo-row">
          <div class="col-6 col-8-md">
            <a href="https://www.feedingamerica.org/" target="__blank">
              <img class="donate-logo" src="~/assets/images/ef-logo.jpg" alt="Emergent Fund" />
            </a>
          </div>
          <div class="col-6 col-8-md">
            <a href="https://www.feedingamerica.org/" target="__blank">
              <img class="donate-logo" src="~/assets/images/ien-logo.png" alt="Indigenous Environmental Network" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
  import PageFooter from '~/components/PageFooter'

  export default {
    data() {
      return {
        translate: this.$t('donation-thank-you')
      }
    },
    components: {
      PageFooter,
    },
  }
</script>

<style scoped>
  .act-blue-token {
    height: 100%;
  }

  .earth-day-live-full-lockup {
    max-width: 200px;
  }

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
    padding-bottom: 100px;
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
    padding-bottom: 30px;
  }

  .act-blue-wrapper {
    height: 640px;
    margin-bottom: 100px;
  }

  .donate-logo {
    width: 100%;
    max-width: 200px;
    padding: 20px 0;
  }

  .logo-row {
    text-align: center;
    vertical-align: middle;
  }

</style>
