<template>
  <b-card
    :title="this.name"
    class="mb-2 representative-card"
    style="width: 100%;"
  >
    <b-card-text>
      <p>{{ party }}, {{ state }}</p>

      <p>Ph: {{ phone }}</p>
      <h5>Environmental Scorecard*:</h5>
      <div class="row">
        <div class="col-6">
          2019: <span class="score" :class="scoreColor">{{ score }}%</span>
        </div>
        <div class="col-6">
          Lifetime: <span class="score" :class="lifetimeScoreColor">{{ lifetimeScore }}%</span>
        </div>
      </div>
      <button class="btn call-now-button" @click.prevent="handleCallButtonClick">
        {{ translate.callNow }}
        <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
      </button>
      <div class="website-wrapper">
        <a class="website" :href="this.link" target="_blank">Representative Website</a>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
    import { smoothScrollToElement } from '~/assets/js/helpers'

    export default {
      name: "Representative",
      props: ['name', 'party', 'state', 'district', 'phone', 'link', 'score', 'lifetimeScore'],
      data() {
        return {
          translate: this.$t('vote.contactYourRepresentative'),
        }
      },
      computed: {
        scoreColor() {
          if (this.score > 80) {
            return 'green'
          } else if (this.score > 50) {
            return 'yellow'
          } else {
            return 'red'
          }
        },
        lifetimeScoreColor() {
          if (this.lifetimeScore > 80) {
            return 'green'
          } else if (this.lifetimeScore > 50) {
            return 'yellow'
          } else {
            return 'red'
          }
        }
      },
      methods: {
        handleCallButtonClick() {
          document.getElementById('call-script').style.display = 'block'
          document.getElementById('call-script-name-title').innerHTML = this.name
          document.getElementById('call-script-name-text').innerHTML = this.name
          document.getElementById('call-script-number').innerHTML = this.phone
          smoothScrollToElement('#call-script', 500)
        }
      }
    }
</script>

<style scoped>
  .representative-card {
    background-color: #190825;
    color: #fff;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    display: block;
    font-weight: 700;
    font-size: 1em;
    width: 100%;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  .circle-arrow {
    max-width: 30px;
    margin-left: 10px;
    transform: rotate(90deg);
  }

  p {
    font-size: 1.2em;
  }

  .card-title {
    background: -webkit-linear-gradient(right, #f26146, #f47d3a, #f8d233, #88c656);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .score {
    font-weight: 700;
  }
  .green {
    color: #88c656;
  }

  .yellow {
    color: #ffde16;
  }

  .red {
    color: #f00004;
  }

  .website-wrapper {
    text-align: center;
    padding-top: 10px;
  }
  .website:hover {
    color: #fd6f37;
  }
</style>
