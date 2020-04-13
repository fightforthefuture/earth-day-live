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
              src="https://am-i-registered-to-vote.org/futurecoalition/"
              class="rtf-cmr-iframe"
              scrolling="no"
              frameborder="0"
              @load="onIframeLoad"
      >
      </iframe>
    </div>
  </section>

</template>

<script>
    import iFrameResize from 'iframe-resizer/js/iframeResizer'

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
        }
      },
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
</style>
