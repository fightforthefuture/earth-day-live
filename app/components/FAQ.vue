<template>
  <div>
    <b-button v-b-toggle="collapse_id">
      <h3>{{ this.question }}</h3>
    </b-button>
    <b-collapse :id="collapse_id" class="mt-2">
      <b-card>
        <p class="card-text" v-for="(answer, index) in this.answers" v-bind:key="index">
          {{ answer }}
        </p>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
    export default {
      name: "FAQ",
      props: ['question', 'answers', 'index'],
      computed: {
        collapse_id() {
          return `collapse-${this.index}`
        }
      },
    }
</script>

<style scoped>
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
