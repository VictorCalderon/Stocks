<template>
  <div class="col-md-4 col-sm-6 p-2">
    <div class="card bg-light">
      <div class="card-body text-center">
        <h3 class="card-title">Name: {{ stock.name }}</h3>
        <h5 class="card-subtitle">Price: {{ stock.price }}USD</h5>
        <h5 class="card-subtitle">Quantity: {{ stock.quantity }}</h5>
        <div class="input-group mb-1 col-10 offset-1">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-success"
              type="button"
              id="button-addon2"
              @click="sellStock"
              :disabled="quantity < 0"
            >Sell</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
    }
  }
};
</script>

<style>
</style>

