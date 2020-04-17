<template>
  <div class="container-fluid header-container">
    <iframe id="maestro-player-iframe" src="https://sapphire.maestro.io/earth-day/?embed=theatre">
    </iframe>
  </div>
</template>

<script>

  function handleMessage(event) {
    console.log(event)
  }
  export default {
    name: "MaestroLivestream",
    mounted() {
      window.addEventListener('message', handleMessage)
    }
  }
</script>

<style scoped>
  #maestro-player-iframe {
    width: 100%;
    border: none;
    height: 1110px;
  }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait */
  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    #maestro-player-iframe {
      height: 500px;
    }
  }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait */
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    #maestro-player-iframe {
      height: 600px;
    }
  }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait */
  @media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {
    #maestro-player-iframe {
      height: 665px;
    }
  }

  /* ----------- iPhone X ----------- */

  /* Portrait */
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {
    #maestro-player-iframe {
      height: 700px;
    }
  }

</style>
