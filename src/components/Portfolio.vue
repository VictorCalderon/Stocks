<template>
  <div class="container p-3">
    <div class="row" v-if="stockPortfolio.length > 0">
      <h1 class="col text-center">Your Stocks</h1>
      <div class="row">
        <app-stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock" :mode="'Sell'"></app-stock>
      </div>
    </div>
    <div class="row" v-else>
      <div class="jumbotron col-12">
        <h1>You don't own any stocks yet!</h1>
        <button class="btn btn-success btn-large">Go to Market</button>
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