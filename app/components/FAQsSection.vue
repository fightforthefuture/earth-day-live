<template>
  <section id="faqs">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <div v-for="(item, index) in faqsList">
        <FAQ
          v-bind:question="item.question"
          v-bind:answers="item.answers"
          v-bind:index="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import FAQ from '~/components/FAQ'

  export default {
    name: 'FAQsSection',
    components: {
      FAQ
    },
    data() {
      return {
        title: this.$t('home.faqs.title'),
        faqsList: this.$t('home.faqs.faqsList')
      }
    },
  }
</script>

<style scoped>
  #faqs {
    background-color: #190825;
    color: #fff;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }
</style>
