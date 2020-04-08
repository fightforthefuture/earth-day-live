<template>
  <footer class="page-footer">

    <b-container>
      <b-row>
        <b-col col-md="8">
          <img class="earth-day-live-full-lockup" src="~/assets/images/earth-day-live-full-lockup.png" alt="Earth Day Live" />
        </b-col>
        <b-col col-md="8" class="footer-side-right">
          <p>Media: <a href="mailto:press@stopthemoneypipeline.com">press@stopthemoneypipeline.com</a></p>
          <p></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p>{{ translate.madeWithLove }}</p>
        </b-col>
      </b-row>
    </b-container>

  </footer>
</template>

<script>
  export default {
    name: "PageFooter",
    data() {
      return { translate: this.$t('footer') }
    },
  }
</script>

<style scoped>
.page-footer {
  background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 20px;
}
.page-footer p {
  margin-bottom: 0;
  font-family: neue-haas-grotesk-display, sans-serif;
}

.earth-day-live-full-lockup {
  max-width: 250px;
}
.page-footer a {
  color: #fff;
}

.footer-side-right {
  line-height: 120px;
  text-align: center;
}
</style>
