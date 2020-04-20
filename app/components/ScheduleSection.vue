<template>
  <section id="schedule">
    <div class="col-lg-8 offset-lg-2">
      <div class="text-center" id="schedule-wrapper">
        <div class="row" style="margin: auto">
          <div class="col" id="schedule-top-right-corner">
          </div>
          <div class="col date-box" id="april-22">
            <h2 @click="handleScheduleDateBoxClick($event)">April 22</h2>
          </div>
          <div class="col date-box" id="april-23">
            <h2 @click="handleScheduleDateBoxClick($event)">April 23</h2>
          </div>
          <div class="col date-box" id="april-24">
            <h2 @click="handleScheduleDateBoxClick($event)">April 24</h2>
          </div>
        </div>
        <div class="row text-left" v-for="(time, index) in TIMESLOTS" v-bind:key="index" style="margin: auto">
          <div class="col schedule-hour">
            <h2 class="hour">{{time}}</h2>
            <h3 class="est">EST</h3>
          </div>
          <HourOfEvents
            v-bind:events=eventsOnThe22nd[time]
            v-bind:index="index"
            date="april-22"
          />
          <HourOfEvents
            v-bind:events=eventsOnThe23rd[time]
            v-bind:index="index"
            date="april-23"
          />
          <HourOfEvents
            v-bind:events=eventsOnThe24th[time]
            v-bind:index="index"
            date="april-24"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HourOfEvents from '~/components/HourOfEvents'

  function showElements(elements) {
    elements.forEach((element) => {
      element.classList.remove('inactivecol')
    });
  }

  function hideElements(elements) {
    elements.forEach((element) => {
      element.classList.add('inactivecol')
    });
  }

  export default {
    name: "ScheduleSection",
    components: {
      HourOfEvents
    },
    data() {
      return {
        TIMESLOTS: ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm"],
        eventsOnThe22nd: this.$t('home.events.april-22'),
        eventsOnThe23rd: this.$t('home.events.april-23'),
        eventsOnThe24th: this.$t('home.events.april-24')
      }
    },
    methods: {
      handleScheduleDateBoxClick(event) {
        const clicked = event.target.parentNode.id
        switch(clicked) {
          case'april-22':
            showElements(document.querySelectorAll('.col.apr22'))
            hideElements(document.querySelectorAll('.col.apr23'))
            hideElements(document.querySelectorAll('.col.apr24'))
            break
          case'april-23':
            hideElements(document.querySelectorAll('.col.apr22'))
            showElements(document.querySelectorAll('.col.apr23'))
            hideElements(document.querySelectorAll('.col.apr24'))
            break
          case 'april-24':
            hideElements(document.querySelectorAll('.col.apr22'))
            hideElements(document.querySelectorAll('.col.apr23'))
            showElements(document.querySelectorAll('.col.apr24'))
            break
        }
      }
    }
  }
</script>

<style scoped>
  #schedule {
    background-color: #f8f8f8;
  }

  #schedule-wrapper {
    background-color: #240e34;
    color: #f8f8f8;
  }

  .container {
    background-color: #f8f8f8;
    padding-left: 0;
    padding-right: 0;
  }

  #times-and-descriptions {
    padding-top: 5%;
  }

  #schedule-top-right-corner {
    background-color: #f8f8f8;
  }

  #april-22 {
    background-image: linear-gradient(to right, #f26146, #fb722c, #f65b5a, #f85371);
  }

  #april-23 {
    background-image: linear-gradient(to right, #88c656, #c3b449, #95c552, #88c656);
  }

  #april-24 {
    background-image: linear-gradient(to right, #ec688d, #e671a4, #cd79b1, #ec688d);
  }


  .date-box {
    padding-top: 1.5%;
    padding-bottom: 1.5%;
  }

  .hour {
    padding: 10px 0 0 0;
  }

  .est {
    font-size: 1.3em;
  }

  .hour,
  .est {
    background: linear-gradient(to right, #88c656, #cbdb2a, #f8d233, #f47d3a, #f26146);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 767px) {
    #schedule-top-right-corner,
    .schedule-hour {
      display: none;
    }

    .date-box h2 {
      font-size: 1.2em;
    }

    .date-box h2:hover {
      cursor:pointer;
    }

    .col.apr22.inactivecol,
    .col.apr23.inactivecol,
    .col.apr24.inactivecol {
      display:none;
    }
  }
</style>
