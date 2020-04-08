<template>
  <section id="faqs">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <div>
        <b-button v-b-toggle.collapse-1>
          <h3>{{ translate.faq1Question }}</h3>
        </b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">
              {{ translate.faq1AnswerA }}
            </p>
            <p class="card-text">
              {{ translate.faq1AnswerB }}
            </p>
          </b-card>
        </b-collapse>
      </div>
      <div>
        <b-button v-b-toggle.collapse-2>
          <h3>{{ translate.faq2Question }}</h3>
        </b-button>
        <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <p class="card-text">
              {{ translate.faq2Answer }}
            </p>
          </b-card>
        </b-collapse>
      </div>
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
    background-color: #190825;
    color: #fff;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  .btn-secondary {
    color: #fff;
    background: none;
    border: none;
  }

  .btn-secondary:hover {
    background-image: url('~assets/images/separator.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;
  }
  .btn-secondary:focus {
    border: none;
    box-shadow: none;
  }
  .card {
    border: none;
  }

  .card-body {
    text-align: justify;
    background-color: #190825;
    color: #fff;
    border: none;
  }
</style>
