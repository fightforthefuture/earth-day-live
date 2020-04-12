<template>
  <b-container>
    <b-row class="share-wrapper">
      <b-col cols="12" md="8" class="share-sub-title">
        <p>{{translate.subTitle}}</p>
        <div class="right-arrrow"></div>
        <div class="bottom-arrrow"></div>
      </b-col>
      <b-col cols="12" md="4" class="share-icons-wrapper">
        <img class="share-icon" src="~assets/images/facebook.svg" :alt="translate.facebook" @click.prevent="rerouteClick('share_button share-facebook left mr15 js-facebook_link')"/>
        <img class="share-icon" src="~assets/images/twitter.svg" :alt="translate.twitter" @click.prevent="rerouteClick('share_button share-twitter left mr15 js-twitter_link ')"/>
        <img class="share-icon" src="~assets/images/linkedin.svg" :alt="translate.linkedIn" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fearthdaylive2020.org', 'linkedin', 'width=450,height=475,left='+(screen.availWidth/2-375)+',top='+(screen.availHeight/2-150)+'')"/>
        <button class="link-icon-box" v-clipboard:copy="earthdayliveLink" v-clipboard:success="showSuccessAlert"><img class="share-icon link-icon" src="~assets/images/link.svg" :alt="translate.copyLink" ></button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SignUpShare",
  data() {
    return { translate: this.$t('getInvolved.signUpShare'), earthdayliveLink: "earthdaylive2020.org", copySucceeded: null }
  },
  methods: {
    rerouteClick(elementClass) {
      document.getElementsByClassName(elementClass)[0].click();
    },
    showSuccessAlert() {
      alert('Added the link to your clipboard')
    }
  }
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

.link-icon-box {
    background-color: #463057;
    border-radius: 50%;
    width: 45px;
    height: 46px;
    margin: 2px;
    border: none;
}

.link-icon {
    width: 35px;
    height: 35px;
    padding: 4px;
    margin: -2px;
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

.share-sub-title p {
  margin-bottom: 0;
}

.share-icons-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
}

.share-icon {
  max-width: 45px;
  cursor: pointer;
}
</style>
