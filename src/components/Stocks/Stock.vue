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
            | Perc. Change: 0%
          </small>
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
              class="btn btn-success"
              type="button"
              id="button-addon2"
              @click="buyStock"
              :disabled="quantity < 0"
            >Buy!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("BUY_STOCK", order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>

