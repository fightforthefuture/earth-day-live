<template>
  <div class="container-fluid header-container">
    <iframe id="maestro-player-iframe" src="https://sapphire.maestro.io/earth-day/?embed=theatre" style="width:100%">
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
    height: 1000px;
  }
</style>
