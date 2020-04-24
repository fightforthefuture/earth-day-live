<template>
  <section id="vote-faqs">
    <div class="col-md-6 offset-md-3">
      <h1 class="section-title">
        {{ title }}
      </h1>
      <img class="separator" src="~assets/images/separator.jpg" :alt="$t('getInvolved.common.separatorAlt')" />
      <div>
        <b-button v-b-toggle.collapse-1>
          <h3>I’m registered to vote! Now what?</h3>
        </b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p>Registering to vote is the first step in claiming your power.</p>

            <p>Next, <a href="http://headcount.org/state" target="_blank">find out</a> how to vote by mail in your state or where to vote in person. During COVID-19, we need to protect our democracy while protecting each other.</p>

            <p>Many states require you to bring an ID to the polls. <a href="https://www.voteriders.org/" target="_blank">VoteRiders</a> knows what ID you can use to vote. Text “EARTH DAY” to 844-338-8743 for 1-on-1 assistance.</p>

            <p>COVID-19 has shifted many primary elections. <a href="https://www.vote.org/covid-19/" target="_blank">See if your state is affected.</a></p>
            </p>
          </b-card>
        </b-collapse>
        <b-button v-b-toggle.collapse-2>
          <h3>What more can I do?</h3>
        </b-button>
        <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <p>Check out the <a href="http://abandofvoters.org/" target="_blank">Voter Power Guide</a> from A Band of Voters for all the inspiration and information you need to Party to the Polls.</p>

            <p>Make sure the youth are heard in 2020! Our friends at <a href="https://thecivicscenter.org/" target="_blank">The Civics Center</a> can help you register voters in your high school.</p>

            <p>Over 1,000 polling places have closed in the last year. Access on college campuses is crucial to increasing youth turnout. Take action with <a href="https://allianceforyouthorganizing.org/plus1thepolls/" target="_blank">+1 the Polls</a>.</p>

            <p>Advocate with <a href="https://naacp.org/" target="_blank">NAACP</a> and <a href="https://andrewgoodman.org/" target="_blank">Andrew Goodman Foundation</a>.</p>
            </p>
          </b-card>
        </b-collapse>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'VoteFAQs',
    data() {
      return {
        title: this.$t('vote.faqs.title')
      }
    },
  }
</script>

<style scoped>
  #vote-faqs {
    background-color: #190825;
    color: #fff;
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    text-transform: uppercase;
  }
  .btn-secondary {
    color: #fff;
    background: none;
    border: none;
  }

  .btn-secondary:hover {
    text-decoration: underline;
  }
  .btn-secondary:focus {
    border: none;
    box-shadow: none;
  }
  .card {
    border: none;
  }

  .card-body {
    text-align: justify;
    background-color: #190825;
    color: #fff;
    border: none;
  }
</style>
