<template>
    <section id="whats-happening">
      <div class="col-md-6 offset-md-3">
        <h1 class="section-title">
          {{ $t('common.whatsHappening') }}
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
        <p class="description">
          {{ translate.descriptionA }}
        </p>
        <ul>
          <li>
            {{ translate.descriptionB }}
          </li>
          <li>
            {{ translate.descriptionC }}
          </li>
          <li>
            {{ translate.descriptionD }}
          </li>
        </ul>

        <p class="description">
          {{ translate.descriptionE }}
        </p>
      </div>
    </section>
</template>

<script>
export default {
  name: "WhatsHappening.vue",
  data() {
    return { translate: this.$t('getInvolved.whatsHappening') }
  },
}
</script>

<style scoped>
#whats-happening {
  background-color: #f8f8f8;
  text-align: center;
  padding: 75px 20px;
}

.section-title {
  text-align: center;
  text-transform: uppercase;
}

li {
  font-family: neue-haas-grotesk-display, sans-serif;
  text-align: left;
  font-size: 1.3em;
}

</style>
