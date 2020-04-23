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
            {{ translate.description }}
          </h5>
          <h5 class="subtitle">
            {{translate.description2}}
          </h5>
        </div>
      </div>
    </div>
    <div class="container logo-container">
      <div class="col-md-8 offset-md-2">
        <div class="row logo-row">
          <div class="col-6">
            <a href="https://www.doctorswithoutborders.org/" target="__blank">
              <img class="donate-logo" src="~/assets/images/dwb-logo.png" alt="Doctors Without Borders" />
            </a>

          </div>
          <div class="col-6">
            <a href="https://www.feedingamerica.org/" target="__blank">
            <img class="donate-logo" src="~/assets/images/fa-logo.png" alt="Feeding America" />
            </a>
          </div>
        </div>
        <div class="row logo-row">
          <div class="col-6">
            <a href="https://www.feedingamerica.org/" target="__blank">
              <img class="donate-logo" src="~/assets/images/ef-logo.jpg" alt="Emergent Fund" />
            </a>
          </div>
          <div class="col-6">
            <a href="https://www.feedingamerica.org/" target="__blank">
              <img class="donate-logo" src="~/assets/images/ien-logo.png" alt="Indigenous Environmental Network" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-md-6 offset-md-3 act-blue-wrapper">
        <div class="act-blue-token " data-ab-form data-ab-token="31BvGG5jv8rDN8LFqpXQ1Fw2">
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
        translate: this.$t('donate')
      }
    },
    components: {
      PageFooter,
    },

    head() {
      return {
        script: [{
            src: `/js/actBlueInit.js`
          },
          {
            src: `https://secure.actblue.com/cf/assets/actblue.js`
          }
        ],
      }
    }
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

  .logo-container {
    margin-bottom: 20px;
  }

  .logo-row {
    text-align: center;
  }

  /* The following CSS must be deployed separately for the ActBlue form iframe */
  /* html, body {
    margin: 0px;
  }

  div.steps {
    --color-text: white;
    --color-secondaryText: white;
    --color-primary-brand: #9086b6;
  }

  h1.fight-covid-header {
    font-family: titling-gothic-fb, sans-serif;
    background-color: #240e34;
    color: white;
    margin: 0;
    text-align: center;
  }

  h4, p {
    font-family: neue-haas-grotesk-display, sans-serif !important;
  }

  .formheading {
    color: white;
    font-family: neue-haas-grotesk-display, sans-serif !important;
    text-align: center;
  }

  .embeddedform {
    border: none;
  }

  .formNav {
    background-color: #240e34;
    color: white;
    font-family: neue-haas-grotesk-display, sans-serif !important;
    border: none;
  }

  .jdJLxe {
    color: white;
  }

  .form, .advance {
    background-color: #240e34;
    border: none;
  }

  .amountButtons__button, .amountButtons__other {
    color: white;
    background-color: #9086b6;
    border-radius: 0;
  }

  .advance__button, .expressButtons__button {
    background-image: linear-gradient(to right, #f26146, #fb722c, #f65b5a, #f85371);
  }

  .expressLinks__reset {
    color: white;
  }

  .expressButtons__other {
    background-color: white;
  }

  .expressButtons__other__button {
      background-image: linear-gradient(to right, #f26146, #fb722c, #f65b5a, #f85371);
  }

  .radiogroup {
    color: white;
  }

  .steps__step--complete {
    text-decoration-color: #9086b6;
  }

  .message--negative {
    background-color: #f85371;
    color: white;
  }

  .inputContainer__input {
    border-radius: 0;
  }

  .form__subheading {
    color: white;
  }


  input.form__section {
    background-color: white;
  }

  div.contributionrules {
    background-color: #240e34;
    color: white;
  }

  a.contributionrules {
    background-color: #240e34;
    color: white;
  }

  .selectbuttoncontainer__button {
    --select-button-selected-color-background: linear-gradient(to right, #f26146, #fb722c, #f65b5a, #f85371);
    --select-button-color-background: white;
    border-radius: 0;
  }

  .exp-wrapper select:last-child {
    background-color: white;
  }

  .exp-wrapper select:first-child {
    background-color: white;
  }

  .form__welcomeBackSalutation {
    color: white;
  }

  p.smalltext {
    color: white;
  } */

</style>
