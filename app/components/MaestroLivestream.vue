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

  @media (max-width: 365px) {
    #maestro-player-iframe {
      height: 550px;
    }
  }

  @media (min-width: 366px) and (max-width: 380px) {
    #maestro-player-iframe {
      height: 550px;
    }
  }

  @media (min-width: 381px) and (max-width: 420px) {
    #maestro-player-iframe {
      height: 620px;
    }
  }

</style>
