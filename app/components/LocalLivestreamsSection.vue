<template>
  <section id="local-livestreams">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <iframe class="map-of-livestreams" src="https://wearemarchon.github.io/strikewithus/"></iframe>
    </div>
  </section>
</template>

<script>
    export default {
      name: "LocalLivestreamsSection",
      data() {
        return { translate: this.$t('home.localLivestreams') }
      },
    }
</script>

<style scoped>

  #local-livestreams {
    background-color: #f8f8f8;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  .map-of-livestreams {
    width: 600px;
    height: 400px;
    border: none;
  }
</style>
