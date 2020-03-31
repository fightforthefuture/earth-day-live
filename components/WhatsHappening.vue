<template>
    <section id="whats-happening">
      <div class="col-md-6 offset-md-3">
        <h1 class="section-title">
          What's Happening?
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
        <p class="description">
          April 22 will be the 50th anniversary of Earth Day.
          That’s why we’re launching a massive livestream from April 22-24 where millions of people can tune in with activists, celebrities, musicians, and more in an epic celebration of our planet.
          In the midst of an unprecented global pandemic, it's more important than ever to unite and support each other during this crisis.
          Together, we’ll call on our leaders to take emergency action and drive donations to benefit the COVID-19 relief effort.
          Here are all the ways you can spread the word and make this as big as possible.
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
  padding: 75px 20px;
}

.section-title {
  text-align: center;
  text-transform: uppercase;
}

</style>
