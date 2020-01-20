<template>
  <div class="col-md-4 col-sm-6 p-2">
    <div class="card bg-light">
      <div class="card-body text-center">
        <h3 class="card-title">{{ stock.name }}</h3>
        <h5 class="card-subtitle">
          <small>
            Price:
            {{ stock.price }}
            <small>USD</small>
          </small>
          <h6 class="text-muted mt-1">
            <span v-if="buyingOrSelling">24-Hr Change: 0%</span>
            <span v-else>Quantity: {{ stock.quantity ? stock.quantity : 0 }}</span>
          </h6>
        </h5>
        <div class="input-group mt-2 col-10 offset-1">
          <input
            onwheel="quantity++"
            type="number"
            class="form-control shadow-sm"
            placeholder="Quantity"
            v-model="quantity"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              v-if="buyingOrSelling"
              class="btn btn-info shadow-sm"
              type="button"
              id="button-addon2"
              @click="appBuyStock"
              :disabled="quantity < 0"
            >{{mode}}!</button>
            <button
              v-if="!buyingOrSelling"
              class="btn btn-info shadow-sm"
              type="button"
              id="button-addon2"
              @click="appSellStock"
              :disabled="quantity < 0 || stock.quantity < quantity"
            >{{mode}}!</button>
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
    }
  }
};
</script>

<style>
</style>

