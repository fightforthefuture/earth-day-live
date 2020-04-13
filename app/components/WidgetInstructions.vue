<template>
  <div>
    <p class="description-center">
      {{ translate.instructionsDescription }}
    </p>
    <div class="widget-instructions-list">
      <b-list-group horizontal="xl">
        <b-list-group-item class="flex-fill" @click="goToInstructions('https://docs.google.com/document/d/1NEt5JgIKmDqxc7uq56Cfz1TDtgkj7Zq5rre6qn5RW1o/')">
          {{ translate.wordpress }}
          <img class="arrow-side" src="~assets/images/arrow-side.svg" :alt="$t('getInvolved.common.arrowAlt')" />
        </b-list-group-item>
        <b-list-group-item class="flex-fill" @click="goToInstructions('https://docs.google.com/document/d/116ZqH8l68HaolxQQIxIuLwCuo-7EjnrCC_Cu76B3sEA/')">
          {{ translate.squarespace }}
          <img class="arrow-side" src="~assets/images/arrow-side.svg" :alt="$t('getInvolved.common.arrowAlt')" />
        </b-list-group-item>
        <b-list-group-item class="flex-fill" @click="goToInstructions('https://docs.google.com/document/d/1BvUz4f6hSrOcLhNSIBq4GUTeeA9Cvb6vdis3F0-Tnuo/')">
          {{ translate.tumblr }}
          <img class="arrow-side" src="~assets/images/arrow-side.svg" :alt="$t('getInvolved.common.arrowAlt')" />
        </b-list-group-item>
        <b-list-group-item class="flex-fill" @click="goToInstructions('https://docs.google.com/document/d/1TCxjUFn8yAv3KLBAEjR0QtQiMu2uMaqjNh-gUBMQybc/')">
          {{ translate.shopify }}
          <img class="arrow-side" src="~assets/images/arrow-side.svg" :alt="$t('getInvolved.common.arrowAlt')" />
        </b-list-group-item>

      </b-list-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WidgetInstructions",
    data() {
      return {
        translate: this.$t('getInvolved.websiteBanner'),
      }
    },
    methods: {
      goToInstructions(url) {
        window.open(url, '_blank')
      },
    }
  }
</script>

<style scoped>
  .description-center {
    margin: auto;
  }

  .widget-instructions-list {
    padding: 25px 0;
  }

  .blah {}

  .list-group-item {
    border-radius: 0 !important;
    border: none;
    border-right: 1px solid #fff;
    background-color: #190825;
    padding: 20px;
    text-transform: uppercase;
    font-family: titling-gothic-fb, sans-serif !important;
    color: #fff;
  }

  .list-group-item:hover {
    cursor: pointer;
  }

  .list-group-item:last-child {
    border-right: none;
  }

  .arrow-side {
    max-width: 10px;
    padding-bottom: 4px;
  }

  @media (min-width: 767px) {
    .list-group-item {
      border-top: 1px solid #fff;
    }
  }

</style>
