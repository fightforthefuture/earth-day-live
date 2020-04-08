<template>
  <b-container id="register-to-vote">
    <b-row>
      <b-col md="8" offset-md="2">
        <h1 class="section-title">
          {{ translate.title}}
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
        <p class="description">
          {{ translate.description }}
        </p>
      </b-col>
      <iframe id="rtv-iframe" src="https://www.earthdaylive2020.org/ovr-index.html" @load="onIframeLoad"></iframe>
    </b-row>
  </b-container>
</template>

<script>
  import iFrameResize from 'iframe-resizer/js/iframeResizer'

  export default {
    name: "RegisterToVoteForm",
    data() {
      return {
        translate: this.$t('registerToVote'),
      }
    },
    methods: {
      onIframeLoad() {
        iFrameResize({ log: true }, '#rtv-iframe')
      }
    }
  }
</script>

<style scoped>

  #register-to-vote {
    text-align: center;
  }
  .section-title {
    text-align: center;
  }
  .section-title,
  .description,
  .separator {
    margin-bottom: 20px;
  }

  #rtv-iframe {
    width: 100%;
    border: none;
  }
</style>
