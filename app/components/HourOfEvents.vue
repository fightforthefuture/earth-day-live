<template>
  <div class="col">
    <div class="row" v-for="(event, index) in this.events" v-bind:key="index">
      <div class="row">
        <div class="col">
          <h5 :class="classObject">
            {{event.eventTime}}
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>{{event.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HourOfEvents",
    props: ['events', 'index', 'date'],
    computed: {
  classObject: function () {
    return {
      apr22: this.date === 'april-22',
      apr23: this.date === 'april-23',
      apr24: this.date === 'april-24'
    }
  }
},
}
</script>

<style scoped>

  .apr22 {
    color: #f47d3a;
  }
  
  .apr23 {
    color: #95c552;
  }
  
  .apr24 {
    color: #e671a4;
  }
</style>
