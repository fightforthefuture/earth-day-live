<template>
  <div class="col" :class="classObject">
    <div class="row" v-for="(event, index) in this.events" v-bind:key="index">
      <div class="row event-time">
        <div class="col">
          <h5 :class="classObject">
            {{event.eventTime}}<span class="am-or-pm" v-if="event.eventTime">{{amOrPm}}</span>
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="event-description">{{event.description}}</p>
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
      classObject() {
        return {
          apr22: this.date === 'april-22',
          apr23: this.date === 'april-23',
          apr24: this.date === 'april-24',
          inactivecol: this.date === 'april-23' || this.date === 'april-24',
        }
      },
      amOrPm() {
        if (this.index > 2) {
          return 'pm EST'
        }
        return 'am EST'
      }
  },
}
</script>

<style scoped>

  h5.apr22 {
    color: #f47d3a;
    padding: 20px 0 0 5px;
    margin-bottom: 0;
  }

  h5.apr23 {
    color: #95c552;
    padding: 20px 0 0 5px;
    margin-bottom: 0;
  }

  h5.apr24 {
    color: #e671a4;
    padding: 20px 0 0 5px;
    margin-bottom: 0;
  }

  .event-description {
    padding: 0 5px 0 5px;
    font-size: 1.1em;
    margin-bottom: 0;
  }

  .event-time {
    width: 100%;
  }

  @media (min-width: 768px) {
    .am-or-pm {
      display: none;
    }
  }

  @media (max-width: 767px) {
    h5 {
      font-size: 1.5em;
    }

    .event-time {
      padding: 0 20px 0 15px;
    }

    .event-description {
      padding: 0 20px 0 20px;
    }
  }
</style>
