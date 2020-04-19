<template>
  <section id="check-my-registration">
    <div class="col-md-6 offset-md-3 register-to-vote-wrapper">
      <h1 class="section-title">
        {{ translate.title}}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
      </p>
      <iframe id="rtf-cmr-iframe"
              src="https://am-i-registered-to-vote.org/futurecoalition"
              class="rtf-cmr-iframe"
              scrolling="no"
              frameborder="0"
              @load="onIframeLoad"
      >
      </iframe>
      <div id="registered-cta" class="registration-check-complete">
        <button class="btn register-not-sure-button" @click="handleNotRegisteredClick">
          {{ translate.registerNowButton }}
          <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
        </button>
      </div>
      <div id="not-registered-cta" class="registration-check-complete">
        <button class="btn registered-button" @click="handleRegisteredClick">
          {{ translate.tripleYourVoteButton }}
          <img class="circle-green-arrow" src="~assets/images/circle-green-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
        </button>
      </div>
    </div>
  </section>

</template>

<script>

    import { smoothScrollToElement } from '~/assets/js/helpers'
    import iFrameResize from 'iframe-resizer/js/iframeResizer'

    function receiveMessage(event) {

      var iframeHost = 'https://am-i-registered-to-vote.org/futurecoalition';

      // This is to ensure against XSS vulnerabilities
      if (event.origin.lastIndexOf(iframeHost, 0) !== 0) return;

      // This is a check to ensure the event is deliberately received for the Future Coalition iFrame
      if (!event.data.FUTURE_COALITION) return;

      switch (event.data.status) {
        case 'registered':
          document.getElementById('registered-cta').style.display = 'block'
          this.$gtag('event', 'check_and_registered',
            {
              'event_category': 'voter_registration',
              'event_label': 'rsc_form',
            })
        case 'notRegistered' | 'registrationCheckFailed':
          document.getElementById('not-registered-cta').style.display = 'block'
          this.$gtag('event', 'check_and_not_registered',
            {
              'event_category': 'voter_registration',
              'event_label': 'rsc_form',
            })
        default:
          console.log(`Message not supported ${event}`)
      }
    }
    export default {
      name: "CheckMyRegistrationForm",
      data() {
        return {
          translate: this.$t('checkMyRegistration'),
        }
      },
      methods: {
        onIframeLoad() {
          iFrameResize({
            log: false,
            heightCalculationMethod: 'bodyScroll'
          }, '#rtf-cmr-iframe')
        },
        handleNotRegisteredClick() {
          document.getElementById('register-to-vote').style.display = 'block'
          document.getElementById('triple-your-vote').style.display = 'block'

          smoothScrollToElement('#register-to-vote', 500)

          const buttonClickAction = this.isRsvpPage ? 'check_and_not_registered_button_click_rsvp_page' : 'check_and_not_registered_button_click'
          this.$gtag('event', buttonClickAction,
            {
              'event_category': 'voter_registration',
              'event_label': 'check_and_not_registered_button',
            })
        },
        handleRegisteredClick() {
          document.getElementById('triple-your-vote').style.display = 'block'
          smoothScrollToElement('#triple-your-vote', 500)

          const buttonClickAction = this.isRsvpPage ? 'checked_and_registered_button_click_rsvp_page' : 'checked_and_registered_button_click'
          this.$gtag('event', buttonClickAction,
            {
              'event_category': 'voter_registration',
              'event_label': 'checked_and_registered_button',
            })
        }
      },
      mounted() {
        window.addEventListener('message', receiveMessage)
      }
    }
</script>

<style scoped>
  #check-my-registration {
    text-align: center;
    background-color: #f8f8f8;
    padding: 40px 0;

  }
  .section-title {
    text-align: center;
    text-transform: uppercase;
  }
  .section-title,
  .description,
  .separator {
    margin-bottom: 20px;
  }

  #rtf-cmr-iframe {
    min-width: 100%;
    border: none;
    height: 600px;
  }
  .registration-check-complete {
    margin-top: -10px;
    padding-top: 20px;
    background-color: #190825;
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

  .register-not-sure-button {
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
    margin-left: 10px;
  }
</style>
