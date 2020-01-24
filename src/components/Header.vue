<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <router-link class="navbar-brand" to="/home">Stock Trader</router-link>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav mr-auto">
          <router-link class="nav-link" to="/Portfolio" active-class="active">Portfolio</router-link>
          <router-link class="nav-link" to="/Market" active-class="active">Market</router-link>
          <router-link
            class="nav-link"
            to="/Purchases"
            active-class="active"
          >Funds: {{funds | currency}}</router-link>
        </ul>
        <div class="dropdown mr-2">
          <button
            class="btn btn-info dropdown-toggle mr-auto"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Actions</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="commitTrades">Commit Trades</a>
            <a
              class="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#loadPrevious"
            >Load Previous States</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="endDay">End Trading Session</a>
          </div>
        </div>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!-- Modal -->
    <div class="modal fade" id="loadPrevious" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loadPreviousLabel">Fetch your previous states</h5>
          </div>
          <div class="modal-body">
            <h1>Log in forms here</h1>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownActive: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
    commitTrades() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>