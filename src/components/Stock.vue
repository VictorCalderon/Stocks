<template>
  <div class="col-md-4 col-sm-6 p-2">
    <div class="card bg-light">
      <div class="card-body text-center">
        <h3 class="card-title">{{ stock.name }}</h3>
        <h5 class="card-subtitle">
          <small>
            Price:
            {{ stock.price | currency }}
            <small>USD</small>
          </small>
          <h6 class="text-muted mt-1">
            <span v-if="buyingOrSelling">24-Hr Change: 0%</span>
            <span v-else>Quantity: {{ stock.quantity ? stock.quantity : 0 }}</span>
          </h6>
        </h5>
        <div class="input-group mt-2 col-10 offset-1">
          <input
            onwheel
            type="number"
            class="form-control shadow-sm"
            placeholder="Quantity"
            v-model="quantity"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              v-if="buyingOrSelling"
              class="btn shadow-sm"
              :class="insufficientFundsStyle"
              type="button"
              id="button-addon2"
              @click="appBuyStock"
              :disabled="quantity < 1 || insufficientFunds"
            >{{insufficientFunds ? 'Insufficient Funds' : mode}}!</button>
            <button
              v-if="!buyingOrSelling"
              class="btn shadow-sm"
              :class="insufficientStocksStyle"
              type="button"
              id="button-addon2"
              @click="appSellStock"
              :disabled="quantity < 1 || insufficientStocks"
            >{{insufficientStocks ? 'Insufficient Stocks' : mode}}!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock", "mode"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      storeBuyStock: "buyStock",
      storeSellStock: "sellStock"
    }),
    appBuyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.storeBuyStock(order);
      this.quantity = 0;
    },
    appSellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.storeSellStock(order);
      this.quantity = 0;
    }
  },
  computed: {
    buyingOrSelling() {
      return this.mode == "Buy" ? true : false;
    },
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    insufficientStocks() {
      return this.quantity > this.stock.quantity;
    },
    insufficientFundsStyle() {
      return this.insufficientFunds ? "btn-warning" : "btn-info";
    },
    insufficientStocksStyle() {
      return this.insufficientStocks ? "btn-warning" : "btn-info";
    }
  }
};
</script>

<style>
</style>

