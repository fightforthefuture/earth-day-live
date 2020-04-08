<template>
  <section id="get-involved">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
      </p>
      <button class="get-involved-button" @click="goTo('/get-involved')">
        {{ translate.buttonText }}
        <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
      </button>
    </div>

  </section>
</template>

<script>
  export default {
    name: "GetInvolvedSection",
    data() {
      return { translate: this.$t('home.getInvolved') }
    },
    methods: {
      goTo(url) {
        window.location.href = url
      },
    }
  }
</script>

<style scoped>
  #get-involved {
    background-color: #fff;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    padding: 20px 40px;
    font-weight: 700;
    font-size: 1.5em;
    margin-bottom: 50px;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }
  .circle-arrow {
     max-width: 30px;
   }
</style>
