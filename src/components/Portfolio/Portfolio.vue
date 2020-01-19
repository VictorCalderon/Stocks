<template>
  <div>
    {{ stockPortfolio }}
    <app-stock v-for="stock in stockPortfolio" :key="stock" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";

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