<template>
  <div class="container-fluid header-container">
    <iframe id="maestro-player-iframe" src="https://watch.earthdaylive2020.org/" allowtransparency="true" allowfullscreen>
    </iframe>
  </div>
</template>

<script>

  export default {
    name: "MaestroLivestream",
  }
</script>

<style scoped>

  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }

  #maestro-player-iframe {
    width: 100%;
    border: none;
    height: 800px;
  }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait */


</style>
