<template>
  <section id="register-to-vote">
    <div class="col-md-6 offset-md-3 register-to-vote-wrapper">
      <h1 class="section-title">
        {{ translate.title}}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
      </p>
      <iframe id="rtv-iframe" src="https://register.rockthevote.com/registrants/new?partner=38367" @load="onIframeLoad"></iframe>
    </div>
  </section>
</template>

<script>
  import iFrameResize from 'iframe-resizer/js/iframeResizer'

  function getRtvIframeUrl(outerThis) {
    const urlParams = new URLSearchParams(window.location.search)

    const sourceParam = urlParams.get('source')
    const trackingParam = urlParams.get('tracking')

    let url = 'https://register.rockthevote.com/registrants/new?partner=38367'

    if (sourceParam) {
      url += `&source=${sourceParam}`
    }

    if (trackingParam) {
      url += `&tracking=${trackingParam}`
    }

    console.log('test')
    const emailCookie = outerThis.$cookie.get('form-email')
    const zipcodeCookie = outerThis.$cookie.get('form-zip_code')
    if (emailCookie !== null) {
       url += `&email_address=${emailCookie}`
    }

    if (zipcodeCookie !== null) {
      url += `&home_zip_code=${zipcodeCookie}`
    }

    return url
  }

  export default {
    name: "RegisterToVoteForm",
    data() {
      return {
        translate: this.$t('registerToVote'),
      }
    },
    methods: {
      onIframeLoad() {
        iFrameResize({
          log: false,
          heightCalculationMethod: 'bodyScroll'
        }, '#rtv-iframe')
      }
    },
    mounted() {
      document.getElementById('rtv-iframe').src = getRtvIframeUrl(this)
    }
  }
</script>

<style scoped>
  #register-to-vote {
    text-align: center;
    background-color: #f8f8f8;
    padding: 40px 0;
    display: none;
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

  #rtv-iframe {
    width: 1px;
    min-width: 100%;
    border: none;
  }
</style>
