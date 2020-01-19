<template>
  <div class="container p-3">
    <h1 class="text-center">Your Stocks</h1>
    <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" :mode="'Sell'"></app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "@/components/Stock";

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