<template>
  <div>
    <div class="container-fluid">
      <div>
        <logo />
        <div class="col-md-6 offset-md-3">
          <h1 class="title">
            Strike, divest, and vote to save humanity and our planet.
          </h1>
        </div>
        <div class="col-md-6 offset-md-3">
          <ImReadyButton />
        </div>
      </div>
    </div>
    <WhatsHappening />
    <PageFooter />
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import ImReadyButton from '~/components/ImReadyButton.vue'
  import PageFooter from '~/components/PageFooter.vue'
  import WhatsHappening from '~/components/WhatsHappening.vue'

  export default {
    components: {
      Logo,
      ImReadyButton,
      WhatsHappening,
      PageFooter
    }
  }

</script>

<style>

  body {
    background-color: #e3e9ec;
  }

  .container-fluid {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-bottom: 130px;
  }

  .title {
    margin: 0 auto;
    font-family: titling-gothic-fb, sans-serif;
    display: block;
    font-weight: 300;
    color: #fff;
    letter-spacing: 1px;
    padding-bottom: 50px;
  }
</style>
