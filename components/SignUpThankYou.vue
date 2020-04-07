<template>
  <div class="container signup-thank-you-wrapper">
    <h1 class="signup-thank-you-title">{{ translate.title }}</h1>
    <p>{{ translate.description }}</p>
    <div class="row registration-pledge-wrapper">
      <div class="col-md-6 registration-pledge-col">
        <div class="registration-pledge">
          <h3 class="registration-pledge-title">{{ translate.registerNotSureTitle }}</h3>
          <p class="registration-pledge-description">{{ translate.registerNotSureDescription1 }} <span>{{ translate.registerNotSureDescription2 }}</span></p>
          <button class="register-not-sue-button" @click="scrollTo('#check-registration')">
            {{ translate.registerNotSureButton }}
            <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
          </button>
        </div>
      </div>
      <div class="col-md-6 registration-pledge-col">
        <div class="registration-pledge">
          <h3 class="registration-pledge-title">{{ translate.registeredTitle }}</h3>
          <p class="registration-pledge-description">{{ translate.registeredDescription1 }} <span>{{ translate.registeredDescription2 }}</span></p>
          <button class="registered-button" @click="scrollTo('#vote-invite-friends')">
            {{ translate.registeredButton }}
            <img class="circle-green-arrow" src="~assets/images/circle-green-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { smoothScrollToElement } from '~/assets/js/helpers'
    export default {
      name: "SignUpThankYou",
      data() {
        return { translate: this.$t('getInvolved.signUpThankYou') }
      },
      mounted() {
        document.addEventListener('can_embed_submitted', () => {
          document.querySelector('.splash-page-signup-form-container').style.display = 'none'
          document.querySelector('.signup-thank-you-wrapper').style.display = 'block'
        })
      },
      methods: {
        scrollTo(hash) {
          const duration = 500
          smoothScrollToElement(hash, duration)
          setTimeout(() => {
            location.hash = hash
          }, duration)
        },
      }
    }
</script>

<style scoped>
.signup-thank-you-wrapper {
  margin-top: -100px;
  background-color: #190825;
  padding: 50px;
  color: #fff;
  text-align: center;
  display: none;
}

.signup-thank-you-title {
  font-size: 3em;
  background: -webkit-linear-gradient(right, #f26146, #f47d3a, #f8d233, #cbdb2a, #88c656);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.registration-pledge-wrapper {
  padding: 50px;
}
.registration-pledge {
  background-color: #fff;
  color: #190825;
}
.registration-pledge-col {
  padding-left: 5px;
  padding-right: 5px;
}
.registration-pledge-title {
  padding: 40px;
  font-size: 2em;
  font-weight: 700;
}


.registration-pledge-description {
  max-width: 80%;
  margin: 20px auto;
}

.registration-pledge-description span {
  font-weight: 700;
}

button {
  width: 80%;
  text-transform: uppercase;
  color: #fff;
  padding: 20px;
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 50px;
}

.register-not-sue-button {
  background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
}

.registered-button {
  background-image: linear-gradient(90deg,#88c656 0,#c3b449 35%,#95c552 65%, #88c656) !important;
}

.circle-arrow {
  transform: rotate(90deg);
}

.circle-arrow,
.circle-green-arrow {
  max-width: 30px;
}
@media (max-width: 1200px) {
  .registration-pledge-wrapper {
    padding: 10px;
  }

  button {
    font-size: 1.2em;
  }
}

@media (max-width: 767px) {
  .registration-pledge-col {
    margin-bottom: 10px;
  }
}

</style>
