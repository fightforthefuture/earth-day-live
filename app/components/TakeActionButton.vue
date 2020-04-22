<style scoped>
  .take-action-button-wrapper {
    background-color: #190825;
    display: block;
    text-align: right;
    padding-bottom: 10px;
  }

  .take-action-button {
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    padding: 10px 30px;
    font-size: 20px;
    width: 320px;
    color: #fff;
    background: linear-gradient(90deg, rgba(242, 97, 70, 1) 0%, rgba(251, 114, 44, 1) 35%, rgba(246, 91, 90, 1) 65%, rgba(248, 83, 113, 1)
    100%);
  }

  .take-action-button img {
    height: 20px;
    margin-left: 10px;
    margin-top: -4px;
  }

  @media only screen and (max-width: 899px) {
    .take-action-button-wrapper {
      padding: 0;
    }

    .take-action-button {
      width: 100%;
      display: block;
    }
  }
</style>

<template>
  <div class="take-action-button-wrapper">
    <a class="take-action-button" @click.prevent="scrollTo('#signup')">
      {{ $t('takeActionButton.buttonText') }}
      <img src="~/assets/images/take-action-btn-arrow.svg" alt="">
    </a>
  </div>
</template>

<script>
  import { smoothScrollToElement } from '~/assets/js/helpers'

  export default {
    methods: {
      scrollTo(hash) {
        const duration = 500
        smoothScrollToElement(hash, duration)
        setTimeout(() => {
          location.hash = hash
        }, duration)
      }
    }
  }
</script>
