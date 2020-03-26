<template>
  <div>
    <section id="are-you-with-us">
      <div class="col-md-6 offset-md-3">
        <h1 class="section-title">
          Are you with us?
        </h1>
        <img class="separator" src="~assets/images/separator.jpg" alt="Separator" />
        <p class="description">
          Together, we can transform our world into one that is not only safe and sustainable, but flourishes for generations to come.
        </p>
      </div>
      <SignUpForm />
    </section>
  </div>
</template>

<script>
import SignUpForm from '~/components/SignUpForm.vue'
export default {
    name: "AreYouWithUs",
  components: {
    SignUpForm,
  }
}
</script>

<style>
  #are-you-with-us {
    background-color: #f8f8f8;
    text-align: center;
    padding: 75px 20px;
  }

  .section-title {
    text-align: center;
  }
  .separator {
    margin: auto;
  }

  #are-you-with-us .splash-page-signup-form-wrapper {
    margin-top: 50px;
    margin-bottom: 0;
  }

</style>
