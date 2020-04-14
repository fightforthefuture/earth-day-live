<template>
  <div>
    <section id="are-you-with-us">
      <div class="col-md-6 offset-md-3">
        <h1 class="section-title">
         {{ translate.title }}
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
        <p class="description">
          {{ translate.description }}
        </p>
      </div>
      <SignUpForm />
    </section>
  </div>
</template>

<script>
import SignUpForm from './SignUpForm'
export default {
  name: "AreYouWithUs",
  data() {
    return { translate: this.$t('getInvolved.withUs') }
  },
  components: {
    SignUpForm,
  }
}
</script>

<style>
  #are-you-with-us {
    background-color: #efefef;
    text-align: center;
    padding: 75px 20px;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }
  .separator {
    margin: auto;
  }
  #are-you-with-us .splash-page-signup-form-container {
    background: #efefef;
  }
  #are-you-with-us .splash-page-signup-form-wrapper {
    margin-top: 50px;
    margin-bottom: 0;
  }

</style>
