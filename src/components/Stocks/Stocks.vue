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
    return {
      stocks: [
        { id: 1, name: "BMW", price: 321 },
        { id: 2, name: "Apple", price: 123 },
        { id: 3, name: "Illumina", price: 159 },
        { id: 4, name: "Alphabet", price: 423 },
        { id: 5, name: "Nalguepollo", price: 987 }
      ]
    };
  },
  components: {
    "app-stock": Stock
  }
};
</script>

<style>
</style>