<template>
  <div class="container p-5">
    <h1 class="text-center">Your Stocks</h1>
    <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "@/components/Stocks/Stock.vue";

export default {
  data() {
    return {};
  },
  components: {
    "app-stock": Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style>
</style>