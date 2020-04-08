<template>
  <section id="participants">
    <h1 class="section-title">
      {{ translate.title }}
    </h1>
    <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
    <h3 class="participants-list">
      <span class="featuring">{{ translate.featuring }}</span>
    </h3>
  </section>
</template>

<script>
    export default {
      name: "ParticipantsSection",
      data() {
        return { translate: this.$t('home.participants') }
      },
    }
</script>

<style scoped>

  #participants {
    background-color: #fff;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }
</style>
