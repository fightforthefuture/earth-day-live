<template>
  <div id="rtv-ovr-scripts">
    <iframe id="rtv-iframe" @load="iframeLoaded" src="https://register.rockthevote.com?partner=38367"></iframe>
  </div>
</template>

<script>
  export default {
    name: "RegisterToVoteForm",
  }
</script>

<style scoped>
  #rtv-iframe {
    width: 100%;
    height: 800px;
    border: none;
  }
</style>
