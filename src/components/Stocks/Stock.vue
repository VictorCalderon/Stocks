<template>
  <div class="col-md-4 col-sm-6 p-2">
    <div class="card bg-light">
      <div class="card-body text-center">
        <h5 class="card-title">
          {{ stock.name }}
          <small>
            <small>
              (Price: {{ stock.price }}
              <small>USD</small>)
            </small>
          </small>
        </h5>
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
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>