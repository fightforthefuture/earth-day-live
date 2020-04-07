<template>
  <b-container>
    <b-row class="share-wrapper">
      <b-col cols="12" md="8" class="share-sub-title">
        <p>{{translate.subTitle}}</p>
      </b-col>
      <b-col cols="12" md="4" class="share-icons-wrapper">

        <img class="share-icon" src="~assets/images/facebook.svg" :alt="translate.facebook" />
        <img class="share-icon" src="~assets/images/twitter.svg" :alt="translate.twitter" />
        <img class="share-icon" src="~assets/images/linkedin.svg" :alt="translate.linkedIn" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: "SignUpShare",
      data() {
        return { translate: this.$t('getInvolved.signUpShare') }
      },
    }
</script>

<style scoped>

.share-wrapper {
  border: 2px solid #463057;
}

.share-sub-title {
  font-weight: 700;
  font-size: 1.5em;
  background-color: #463057;
}

.share-icons-wrapper {
  display: flex;
  justify-content: space-between;
}

.share-icon {
  max-width: 50px;
}
</style>
