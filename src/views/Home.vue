<template>
  <div class="jumbotron p-5 mt-5">
    <h1 class="display-4">Buy & Trade your Stocks!</h1>
    <p class="lead">Your funds: {{ funds }}</p>
    <hr class="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <router-link class="btn btn-primary btn-lg" to="/about" role="button">About us</router-link>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
