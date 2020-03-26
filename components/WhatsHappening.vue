<template>
    <section id="whats-happening">
      <div class="col-md-8 offset-md-2">
        <h1 class="section-title">
          The Century for the Earth
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
        <p class="description">
          On April 22-24, the 50th anniversary of Earth Day, millions of people around the world are going online for a three-day mobilization to stop the climate emergency.
          Join us for three days of action — from teach-ins, musical performances, divestment, and more. All you need is an internet connection.
          Together, we can transform our world into one that is not only safe and sustainable, but flourishes for generations to come.
        </p>
      </div>
    </section>
</template>

<script>
    export default {
        name: "WhatsHappening.vue"
    }
</script>

<style scoped>
#whats-happening {
  background-color: #f8f8f8;
  text-align: center;
  padding: 75px;
}

.section-title {
  text-align: center;
}
.separator {
  margin: auto;
}

</style>
