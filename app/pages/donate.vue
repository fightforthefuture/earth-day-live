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
        <div class="col-md-8 offset-md-2">
          <div class="row logo-row">
            <div class="col-3 logo-col">
              <a href="https://www.feedingamerica.org/" target="__blank">
                <img class="donate-logo" src="~/assets/images/feedingamerica_reverse.png" alt="Feeding America" />
              </a>
            </div>
            <div class="col-3 logo-col">
              <a href="https://www.doctorswithoutborders.org/" target="__blank">
                <img class="donate-logo" src="~/assets/images/Medecins_Sans_Frontieres_reverse.png" alt="Doctors Without Borders" />
              </a>
            </div>
            <div class="col-3 logo-col">
              <a href="https://www.emergentfund.net/" target="__blank">
                <img class="donate-logo" src="~/assets/images/ef-logo-yellow.png" alt="Emergent Fund" />
              </a>
            </div>
            <div class="col-3 logo-col">
              <a href="https://www.ienearth.org/" target="__blank">
                <img class="donate-logo" src="~/assets/images/ien-logo-reverse.png" alt="Indigenous Environmental Network" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-lg-6 offset-lg-3 act-blue-wrapper">
        <div id="act-blue-token" class="act-blue-token" data-ab-form data-ab-token="31BvGG5jv8rDN8LFqpXQ1Fw2">
        </div>
        <div id="act-blue-thanks">
          <h2 class="title">
            {{ translate.thanksTitle }}
          </h2>
          <p>{{ translate.thanksDescription }}</p>
          <button class="btn thanks-button col-8" @click="goTo(localePath('/'))">
            {{ translate.thanksButtonText }}
          </button>
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
    methods: {
      goTo(url) {
        window.location.href = url
      },
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
    },
  }
</script>

<style scoped>
  .act-blue-token {
    height: 100%;
  }

  .earth-day-live-full-lockup {
    max-width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
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
    padding-bottom: 130px;
  }

  .title {
    padding-bottom: 30px;
    text-align: center;
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
    margin-top: -100px;
  }

  .donate-logo {
    width: 100%;
    max-width: 200px;
    padding: 20px 0;
  }


  .logo-row {
    text-align: center;
  }

  .logo-col {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  button.thanks-button {
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    font-weight: 700;
    font-size: 1.5em;
    margin-bottom: 50px;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
    margin-top: 20px;
  }

  button.thanks-button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }
  
  #act-blue-thanks {
    text-align: center;
    background-color: #240e34;
    color: #fff;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
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
