<template>
  <div>
    <div class="container-fluid">
      <div>
        <!-- The video -->
        <video autoplay muted loop id="backgroundVideo">
        <source src="~assets/images/animation-back.mp4" type="video/mp4">
        </video>
        <logo class="logo" />
        <div class="col-md-6 offset-md-3">
          <h1 class="title">
            Strike, divest, and vote to save humanity and our planet.
          </h1>
        </div>
        <div class="col-md-6 offset-md-3">
          <h4 class="subtitle">
          On April 22-24, the 50th anniversary of Earth Day, millions of people around the world are going online for a three-day mobilization to stop the climate emergency.
          </h4>
          <h4 class="subtitle">
          Join us for three days of action — from teach-ins, musical performances, divestment, and more. All you need is an internet connection.
          </h4>
          <h4 class="subtitle">
          Together, we can transform our world into one that is not only safe and sustainable, but flourishes for generations to come.
          </h4>
        </div>
      </div>
    </div>
    <SignUpForm />
    <PageFooter />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SignUpForm from '~/components/SignUpForm.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    Logo,
    SignUpForm,
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
}

.title {
  margin: 0 auto;
  font-family: titling-gothic-fb, sans-serif;
  display: block;
  font-weight: 300;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 30px;
}

.subtitle {
  margin: 0 auto;
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 300;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 20px;
}

#backgroundVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-bottom: 130px;
}

.logo {
  position: relative;
}
</style>
