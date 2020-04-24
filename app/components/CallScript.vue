<template>
  <section id="call-script">
    <div class="col-md-6 offset-md-3">
      <h3>Here is your call script for <span id="call-script-name"></span>. Call them on <span id="call-script-number"></span>.</h3>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p>{{ translate.script1 }}</p>
      <p>{{ translate.script2 }}</p>
      <p>{{ translate.script3 }}</p>
      <p>{{ translate.script4 }}</p>
      <p>{{ translate.script5 }}</p>
      <p>{{ translate.script6 }}</p>
      <p>{{ translate.script7 }}</p>
      <p>{{ translate.script8 }}</p>
    </div>
  </section>
</template>

<script>
    export default {
      name: "CallScript",
      data() {
        return {
          translate: this.$t('vote.contactYourRepresentative'),
        }
      },
    }
</script>

<style scoped>
  #call-script {
    display: none;
    text-align: center;
    background-color: #f8f8f8;
    padding: 40px;
  }
  p {
    text-align: justify;
  }
</style>
