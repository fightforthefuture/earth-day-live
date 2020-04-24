<template>
  <section id="contact-your-representative">
    <div class="col-md-6 offset-md-3 register-to-vote-wrapper">
      <h1 class="section-title">
        {{ translate.title}}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        Calling your representative is one of the most effective ways to build public pressure, so call today and
        demand your representative commit to the <a href="https://www.fiveprinciples.org/" target="_blank">Five Principles for just COVID-19</a> relief and stimulus.
        While your representatives' staff are unlikely to pick up the phone, the Congressional switchboard remains open and
        most Members of Congress are diligently monitoring their voicemails, so be sure to leave a message.
      </p>

      <div class="row contact-form">
        <div class="col-md-6 offset-md-3">
          <b-input
            id="inline-form-input-zip"
            class="zip-code-input"
            placeholder="Zip Code"
            type="text"
            pattern="[0-9]{5}"
          ></b-input>
          <button class="btn thanks-button" @click.prevent="$fetch">
            {{ translate.findYourRepButtonText }}
            <img class="circle-arrow" src="~assets/images/circle-arrow.svg" :alt="$t('getInvolved.common.arrowAlt')" />
          </button>
        </div>
        <div>
          <div class="representative-container" v-for="representative of representatives" :key="representative.id">
            <Representative
              v-bind:name="representative.name"
              v-bind:state="representative.state"
              v-bind:party="representative.party"
              v-bind:district="representative.district"
              v-bind:phone="representative.phone"
              v-bind:link="representative.link"
              v-bind:score="representative.score"
              v-bind:lifetime-score="representative.lifetimeScore"
            />
          </div>
        </div>
        <div id="zip-code-error">
          <p>{{ translate.zipCodeError }}</p>
        </div>
      </div>
      <p id="scorecard-source">*<a href="http://scorecard.lcv.org/sites/scorecard.lcv.org/files/LCV_2019_Scorecard.pdf" target="_blank">{{ translate.scoreCardSource }}</a></p>
    </div>
  </section>
</template>

<script>
    import Representative from "./Representative";
    export default {
        name: "contactYourRepresentative",
      components: {Representative},
      data() {
        return {
          translate: this.$t('vote.contactYourRepresentative'),
          lcvData: [],
          representatives: [],
        }
      },
      async mounted() {
        await this.$axios.$get(`https://murmuring-spire-01484.herokuapp.com/https://stage.earthdaylive2020.org/lcv-data.json`)
          .then((response) => this.lcvData = response)
      },
      async fetch() {
        let zipCode = document.getElementById('inline-form-input-zip').value.trim()

        await this.$axios.$get(`https://murmuring-spire-01484.herokuapp.com/https://whoismyrepresentative.com/getall_mems.php?zip=${zipCode}&output=json`, {data: null, ContentType : 'application/json; charset=utf-8'}, )
          .then((response) => {

            if (response === '<result message=\'No Data Found\' />' || response === '<result error=\'Invalid input data\' />') {
              document.getElementById('zip-code-error').style.display = 'block'
            } else {
              document.getElementById('zip-code-error').style.display = 'none'
              document.getElementById('scorecard-source').style.display = 'block'
            }

            this.representatives = []
            response.results.forEach((representative) => {
              let lsvRep = this.lcvData.find(lsvRep => lsvRep.name === representative.name)
              if (lsvRep) {
                representative.score = lsvRep['2019Score']
                representative.lifetimeScore = lsvRep['lifeTimeScore']
                this.representatives.push(representative)
              }
            })
          })
      }
    }
</script>

<style scoped>
  #contact-your-representative {
    padding: 40px 0;
    text-align: center;
  }

  .description {
    padding: 20px 0;
    text-align: justify;
  }

  #inline-form-input-zip {
    height: 49px;
    border-radius: 0;
    width: 50%;
    display: inline-block;
    border: none;
    font-weight: 700;
    font-size: 1.4em;
    margin-right: -5px;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 700;
    font-size: 1.4em;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
    display: inline-block;
    margin-bottom: 8px;
  }

  button:hover {
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
  }

  .circle-arrow {
    max-width: 30px;
  }

  .representative-container {
    display: inline-block;
    padding: 10px;
    width: 50%;
  }

  .contact-form {
    background-color: #190825;
    color: #fff;
    padding: 20px;
  }

  #zip-code-error {
    display: none;
    margin: 20px auto;

  }

  #scorecard-source {
    display: none;
    margin-top: 20px;
  }

</style>
