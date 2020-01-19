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
            <span v-if="buyingOrSelling">24-Hour Change: 0%</span>
            <span v-else>Quantity: {{ stock.quantity ? stock.quantity : 'Null' }}</span>
          </h6>
        </h5>
        <div class="input-group mt-2 col-10 offset-1">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              v-if="buyingOrSelling"
              class="btn btn-info"
              type="button"
              id="button-addon2"
              @click="buyStock"
              :disabled="quantity < 0"
            >{{mode}}!</button>
            <button
              v-if="!buyingOrSelling"
              class="btn btn-info"
              type="button"
              id="button-addon2"
              @click="sellStock"
              :disabled="quantity < 0"
            >{{mode}}!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["stock", "mode"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapGetters(["sellStock"]),
    buyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("BUY_STOCK", order);
      this.quantity = 0;
    },
    sellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
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

