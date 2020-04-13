<template>
  <div class="container-fluid splash-page-signup-form-container">
    <div class="col-md-6 offset-md-3">
      <div class="splash-page-signup-form-wrapper">
        <div id='can-form-area-rsvp-for-earth-day-live'>
        </div>
        <p class="splash-page-disclaimer">
          {{ translate.disclaimer1 }}<i>{{ translate.disclaimer2 }}</i>{{ translate.disclaimer3 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  head () {
    return {
      script: [
        { src: 'https://actionnetwork.org/widgets/v3/form/rsvp-for-earth-day-live?format=js&source=widget' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://actionnetwork.org/css/style-embed-v3.css' }
      ]
    }
  },
  data() {
    return { translate: this.$t('getInvolved.signUpForm') }
  },
  mounted() {
    document.addEventListener('can_embed_loaded', () => {
      const optInGroups = document.getElementById('d_sharing').querySelectorAll('li')

      if (optInGroups.length > 1) {
        const optInText = optInGroups[1].querySelectorAll('label')[0].innerText
        const partnerGroupName = optInText.replace('Opt in to updates from ', '')
        const partnerDisclaimer = document.createElement('p')
        partnerDisclaimer.classList.add('splash-page-disclaimer')
        partnerDisclaimer.innerHTML = `You may receive updates from <i>${partnerGroupName}</i>, who shared this form with you.`
        document.querySelector('.splash-page-signup-form-wrapper').appendChild(partnerDisclaimer)
      }
    })

    document.addEventListener('can_embed_submitted', () => {
      console.log(this.$root.context.app)
      this.$gtag('event', 'rsvp_form_submitted',
        {
          'event_category': 'sign',
          'event_label': 'action_network_form',
        })
      document.querySelectorAll('.splash-page-disclaimer').forEach((disclaimer) => {
        disclaimer.style.display = 'none'
      })
    })
  }
}

</script>

<style>
  .splash-page-signup-form-container {
    background-color: #e3e9ec;
    padding-bottom: 100px;
    display: flex;
  }
  .splash-page-signup-form-wrapper {
    margin-top: -100px;
    background-color: #190825;
    padding: 20px;
    color: #fff;
    text-align: center;
  }

  .splash-page-disclaimer {
    font-size: 0.75em;
    margin-top: -10px;
  }

  #can_embed_form div,
  #can_embed_form small,
  #can_embed_form a {
    font-family: neue-haas-grotesk-display, sans-serif !important;
  }

  #can_embed_form a {
    color: #fd6f37 !important;
  }

  #can-form-area-rsvp-for-earth-day-live {
    border: none !important;
    background-color: #190825;
  }
  #can-form-area-rsvp-for-earth-day-live #can_embed_form {
    border: none !important;
    background-color: #190825 !important;
  }

  #can_embed_form_inner h2:first-child {
    display: none !important;
  }

  #can_embed_form_inner h4:nth-child(2) {
    color: #fff !important;
    font-family: titling-gothic-fb, sans-serif !important;
    text-transform: uppercase !important;
    font-size: 1.6em !important;
  }

  #can_embed_form_inner h4:nth-child(2):after {
    content: none !important;
  }

  #can_embed_form #can_embed_form_inner #form_col2,
  #can_embed_form #can_embed_form_inner #form_col1 {
    float: none !important;
    margin: auto !important;
    width: 80% !important;
  }

  #can_embed_form #action_info,
  #can_embed_form #logo_wrap {
    display: none;
  }

  #can_embed_form #form_col1 label {
    display: none !important;
  }

  #can_embed_form #form_col1 input,
  #can_embed_form #form_col1 select,
  #can_embed_form #form_col1 select option,
  #can_embed_form #form_col2 input {
    font-size: 1.2em !important;;
    font-family: neue-haas-grotesk-display, sans-serif !important;
    font-weight: 700 !important;
    border: none !important;
  }

  #can_embed_form #form_col1 input {
    padding: 25px 20px !important;
    color: #190825 !important;
  }

  #can_embed_form #form_col1 input.error_input::placeholder {
    color: #cd3a18 !important;
  }

  #can_embed_form #form_col2 input[type="submit"] {
    padding: 15px 20px !important;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%) !important;
  }

  #can_embed_form #form_col2 #d_sharing {
    border-top: none !important;
  }

  #can_embed_form #d_sharing label {
    color: #fff !important;
  }

  #can_embed_form .international_link {
    color: #fff !important;
  }

  #can-form-area-rsvp-for-earth-day-live #can_embed_form #can_thank_you {
    background-color: #190825 !important;
  }

  #can-form-area-rsvp-for-earth-day-live #can_embed_form #can_thank_you h1 {
    font-family: titling-gothic-fb, sans-serif !important;
  }

  #can-form-area-rsvp-for-earth-day-live #can_embed_form .can_thank_you-block h4 {
    color: #fff !important;
    font-family: neue-haas-grotesk-display, sans-serif !important;
  }

  .can_thank_you-block #embed_toggle-open,
  .can_thank_you-block #embed_toggle-close {
    color: #fff !important;
    font-family: neue-haas-grotesk-display, sans-serif !important;
  }

  @media only screen and (max-width: 600px) {
    #can_embed_form #can_embed_form_inner #form_col2,
    #can_embed_form #can_embed_form_inner #form_col1 {
      width: 100% !important;
    }
  }

</style>