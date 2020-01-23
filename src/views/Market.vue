<template>
  <div class="container p-3">
    <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" :mode="'Buy'"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "@/components/Stock.vue";

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