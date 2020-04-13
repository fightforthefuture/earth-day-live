<template>
  <iframe id="rtf-cmr-iframe" src="https://www.am-i-registered-to-vote.org" class="rtf-cmr-iframe" style="width:100%">

  </iframe>
</template>

<script>
    export default {
      name: "CheckMyRegistrationForm",
      mounted() {
      }
    }
</script>

<style scoped>
  .rtf-cmr-iframe {
    width: 100%;
    border: none;
    height: 1000px;
  }
</style>
