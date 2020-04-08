<template>
  <section id="faqs">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FAQsSection",
    data() {
      return { translate: this.$t('home.faqs') }
    },
  }
</script>

<style scoped>
  #faqs {
    background-color: #fff;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }
</style>
