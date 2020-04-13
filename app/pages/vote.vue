<template>
  <div id="vote-page">
    <VoteNav />
    <div class="container-fluid header-container">
      <div>
        <logo />
        <div class="col-md-6 offset-md-3">
          <h1 class="title">
            {{ translate.title }}
          </h1>
        </div>
        <div class="col-md-6 offset-md-3">
          <h4 class="subtitle">
            {{ translate.subtitle }}
          </h4>
        </div>
      </div>
    </div>
    <RegisterToVoteForm />
    <TripleYourVote />
    <PageFooter />
  </div>
</template>

<script>
  import Logo from '~/components/Logo'
  import PageFooter from '~/components/PageFooter'
  import RegisterToVoteForm from '~/components/RegisterToVoteForm'
  import TripleYourVote from '~/components/TripleYourVote';
  import VoteNav from '~/components/VoteNav'

  export default {
    data() {
      return {
        translate: this.$t('vote')
      }
    },
    components: {
      VoteNav,
      Logo,
      RegisterToVoteForm,
      TripleYourVote,
      PageFooter,
    }
  }
</script>

<style>

  #vote-page #register-to-vote,
  #vote-page #triple-your-vote {
    display: block;
  }

  .header-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('~assets/images/earth-day-live-gradient.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-bottom: 130px;
  }
  .title {
    padding-bottom: 30px;
  }

  body {
    background-color: #e3e9ec;
  }

  .subtitle {
    margin: 0 auto;
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 300;
    color: #fff;
    word-spacing: 5px;
    padding-bottom: 20px;
  }

  #vote-page #register-to-vote .separator,
  #vote-page #register-to-vote .description,
  #vote-page #register-to-vote .section-title {
    display: none;
  }

  #vote-page #register-to-vote #rtv-iframe {
    margin-top: -140px;
  }
</style>
