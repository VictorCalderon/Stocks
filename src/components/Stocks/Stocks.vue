<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock">{{stock}}</app-stock>
  </div>
</template>

<script>
import Stock from "@/components/Stocks/Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 321 },
        { id: 2, name: "APPL", price: 123 },
        { id: 3, name: "ILLM", price: 159 },
        { id: 4, name: "ALPH", price: 423 },
        { id: 5, name: "ADAN", price: 987 }
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