<template>
  <b-container>
    <b-row class="share-wrapper">
      <b-col cols="12" md="8" class="share-sub-title">
        <p>{{translate.subTitle}}</p>
        <div class="right-arrrow"></div>
        <div class="bottom-arrrow"></div>
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

.bottom-arrrow {
  display: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: -10px;
  right: 50%;
  border-top: 10px solid #463057;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}


.right-arrrow {
  position: absolute;
  width: 0;
  height: 0;
  right: -10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #463057;
}

@media (max-width: 767px) {
  .bottom-arrrow {
    display: block;
  }
  .right-arrrow {
    display: none;
  }
}

.share-wrapper {
  border: 2px solid #463057;
}

.share-sub-title {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
  font-weight: 700;
  font-size: 1.5em;
  background-color: #463057;
}

.share-icons-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
}

.share-icon {
  max-width: 45px;
}
</style>
