<template>
  <section id="triple-your-vote">
    <div class="col-md-6 offset-md-3 register-to-vote-wrapper">
      <h1 class="section-title">
        {{ translate.title}}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <b-row>
        <b-col cols="6">
          <p class="description">
            {{ translate.description1 }}
          </p>
          <h2 class="text-cta">
            {{ translate.textCta }}
          </h2>
          <p class="description">
            <strong>{{ translate.description2 }}</strong>
          </p>
        </b-col>
        <b-col cols="6">
          <img class="triple-your-vote-image" src="~assets/images/EDL-Vote-Tripling.png" :alt="translate.tripleYourVoteImage" />
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
    export default {
        name: "TripleYourVote",
      data() {
        return { translate: this.$t('tripleYourVote') }
      },
    }
</script>

<style scoped>
  #triple-your-vote {
    text-align: center;
    background-color: #f8f8f8;
    padding: 40px 0;
    display: none;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  .text-cta {
    background: -webkit-linear-gradient(right, #f26146, #f47d3a, #f8d233, #cbdb2a, #88c656);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
