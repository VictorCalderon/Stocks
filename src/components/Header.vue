<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <router-link class="navbar-brand" to="/home">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav mr-auto">
        <router-link class="nav-link" to="/Portfolio" active-class="active">Portfolio</router-link>
        <router-link class="nav-link" to="/Market" active-class="active">Market</router-link>
        <router-link
          class="nav-link"
          to="/Purchases"
          active-class="active"
        >Funds: {{funds | currency}}</router-link>
      </ul>
      <div class="dropdown mr-2">
        <button
          class="btn btn-info dropdown-toggle mr-auto"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Actions</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Commit Trades</a>
          <a class="dropdown-item" href="#">Load Previous States</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="endDay">End Trading Session</a>
        </div>
      </div>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>
