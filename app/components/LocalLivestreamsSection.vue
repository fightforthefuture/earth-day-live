<template>
  <section id="local-livestreams">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
      </p>
    </div>
    <div class="col-md-8 offset-md-2">
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
    padding: 40px 0;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  .map-of-livestreams {
    width: 100%;
    height: 700px;
    border: none;
  }
</style>
