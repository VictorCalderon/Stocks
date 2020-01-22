<template>
  <div class="container p-3">
    <h1 v-if=" stockPortfolio.length>0" class="col text-center">Your Stocks</h1>
    <div class="row" v-if="stockPortfolio.length > 0">
      <app-stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock" :mode="'Sell'"></app-stock>
    </div>
    <div class="row" v-else>
      <div class="jumbotron col-12">
        <h3 class="text-muted">No Stocks to display</h3>
        <h1>Buy Stocks!</h1>
        <router-link class="btn btn-success btn-large mt-1" to="/market">Go to Market</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "@/components/Stock";

export default {
  computed: {
    ...mapGetters(["stockPortfolio"])
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>
</style>