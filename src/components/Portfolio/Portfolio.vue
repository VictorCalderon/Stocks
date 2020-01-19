<template>
  <div class="container p-5">
    <h1 class="text-center">Your Stocks</h1>
    <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";

export default {
  computed: {
    ...mapGetters(["stocks"])
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>
</style>