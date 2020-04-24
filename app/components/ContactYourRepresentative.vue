<template>
  <section id="contact-your-representative">
    <div class="col-md-6 offset-md-3 register-to-vote-wrapper">
      <h1 class="section-title">
        {{ translate.title}}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <p class="description">
        {{ translate.description }}
        Date derived from LINK TO SOURCE
      </p>

      <div class="row">
        <div class="col-6">
          <label class="sr-only" for="inline-form-input-zip">Zip / Postal Code</label>
          <b-input
            id="inline-form-input-zip"
            class="mb-2 mr-sm-2 mb-sm-0 zip-code-input"
            placeholder="Zip Code"
            type="text"
            pattern="[0-9]{5}"
          ></b-input>
        </div>
        <div class="col-6">
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
      </div>
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
        await this.$axios.$get(`https://cors-anywhere.herokuapp.com/https://stage.earthdaylive2020.org/lcv-data.json`)
          .then((response) => this.lcvData = response)
      },
      async fetch() {
        let zipCode = document.getElementById('inline-form-input-zip').value.trim()

        await this.$axios.$get(`https://cors-anywhere.herokuapp.com/https://whoismyrepresentative.com/getall_mems.php?zip=${zipCode}&output=json`, {data: null, ContentType : 'application/json; charset=utf-8'}, )
          .then((response) => {
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

  .zip-code-input {
    height: 50px;
    border-radius: 0;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 700;
    font-size: 1.4em;
    margin-bottom: 50px;
    background-image: linear-gradient(to right, #f26146 0%, #fb722c 35%, #f65b5a 65%, #f85371 100%);
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

</style>
