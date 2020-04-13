<template>
  <div>
    <div class="container-fluid">
      <div>
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
        <div class="col-md-6 offset-md-3">
          <h1 class="title" v-if="error.statusCode === 404">Oh no! Page not found.</h1>
          <h1 class="title" v-else >An error occurred</h1>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
  import Logo from '../components/Logo'
  import PageFooter from '../components/PageFooter'

  export default {
    props: ['error'],
    components: {
      Logo,
      PageFooter
    }
  }

</script>

<style scoped>
body {
  background-color: #e3e9ec;
}

.container-fluid {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('../assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-bottom: 150px;
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
