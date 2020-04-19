<template>
  <section id="participants">
    <div class="col-lg-8 offset-lg-2">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <h2 class="participants-list">
        <span class="featuring">{{ translate.featuring }}</span>
        {{ translate.participantList }}
      </h2>
      <h5>{{ translate.moreSoon }}</h5>
    </div>
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
    background-color: #f8f8f8;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  .featuring {
    background: -webkit-linear-gradient(right, #f26146, #f47d3a, #f8d233, #cbdb2a, #88c656);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .participants-list {
    line-height: 1.5em;
  }
</style>
