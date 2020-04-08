<template>
  <section id="the-three-days">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ translate.title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
      </p>
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab active>
            <template v-slot:title class="tab tab-1">
              <div class="tab-name">{{ translate.tab1Title }}</div>
              <div class="tab-active-triangle"></div>
            </template>
            <font-awesome-layers class="fa-2x">
              <font-awesome-icon icon="fist-raised"/>
            </font-awesome-layers>
            <h3>Earth Day and Youth Climate Strikes</h3>
            <p>{{ translate.tab1Description }}</p>
          </b-tab>
          <b-tab>
            <template v-slot:title class="tab tab-2">
              <div class="tab-name">{{ translate.tab2Title }}</div>
              <div class="tab-active-triangle"></div>
            </template>
            <font-awesome-layers class="fa-2x">
              <font-awesome-icon icon="piggy-bank"/>
            </font-awesome-layers>
            <h3>Divestment and Climate Financing</h3>
            <p> {{ translate.tab2Description }}</p>
          </b-tab>
          <b-tab>
            <template v-slot:title class="tab tab-3">
              <div class="tab-name">{{ translate.tab3Title }}</div>
              <div class="tab-active-triangle"></div>
            </template>
            <font-awesome-layers class="fa-2x">
              <font-awesome-icon icon="vote-yea"/>
            </font-awesome-layers>
            <h3>Voter Registration and Political Engagement</h3>
            <p>{{ translate.tab3Description }}</p>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>
    import { faFistRaised } from '@fortawesome/free-solid-svg-icons'

    export default {
      name: "TheThreeDaysSection",
      data() {
        return { translate: this.$t('home.theThreeDays') }
      },
      computed: {
        faFistRaised() {
          return faFistRaised
        }
      },

    }
</script>

<style>
  #the-three-days {
    background-color: #e3e9ec;
    padding: 75px 20px;
    text-align: center;
  }

  #the-three-days .section-title {
    text-align: center;
    text-transform: uppercase;
  }

  #the-three-days.tab-name {
    color: #fff;
    text-decoration: none;
    text-transform: none;
  }

  .nav-item {
    text-transform: uppercase;
    font-family: titling-gothic-fb, sans-serif;
  }

  .tab-active-triangle {
    display: none;
    width: 0;
    height: 0;
    border-bottom: 10px solid #190825;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    margin: 5px auto -10px auto;
  }

  #the-three-days .nav-link.active .tab-active-triangle {
    display: block;
  }

  #the-three-days .nav-link:hover,
  #the-three-days .nav-link.active {
    border: none;
  }

  #the-three-days .nav-item:first-child a,
  #the-three-days .nav-item:first-child {
    color: #fff;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
    text-decoration: none;
  }

  #the-three-days .nav-item:nth-child(2) a,
  #the-three-days .nav-item:nth-child(2) {
    color: #fff;
    background-image: linear-gradient(to right,#88c656 0%, #c3b449 35%, #95c552 65%, #88c656 100%);
    text-decoration: none;
  }

  #the-three-days .nav-item:nth-child(3) a,
  #the-three-days .nav-item:nth-child(3) {
    color: #fff;
    background-image: linear-gradient(to right, #ec688d 0%, #e671a4 35%, #cd79b1 65%, #ec688d 100%);
    text-decoration: none;
  }

  #the-three-days .tab-content {
    color: #fff;
    background-color: #190825;
    margin-top: 0 !important;
    padding: 30px 40px;
    text-align: center;
  }

  #the-three-days .tab-content p {
    text-align: justify;
  }

  #the-three-days .tab-content h3 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

</style>
