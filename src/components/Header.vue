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
            <a class="dropdown-item" href="#" @click="loadTrades">Load Trades</a>
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
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h3 class="mt-2">Log in</h3>
            <hr />
            <div class="row justify-content-center">
              <div class="col-10 mb-1">
                <input
                  v-model="user.name"
                  type="text"
                  id="inputUsername"
                  class="form-control text-center"
                  placeholder="username"
                />
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-10">
                <input
                  v-model="user.password"
                  type="password"
                  id="inputPassword"
                  placeholder="password"
                  class="form-control text-center"
                />
              </div>
            </div>
            <p class="mt-3">Enter your credentials to load your previous exchanges.</p>
            <button class="btn btn-success btn-block col-6 offset-3">Load Trades</button>
          </div>
          <!-- <div class="modal-footer">
            <button class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
          </div>-->
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
      user: {
        name: "",
        password: ""
      },
      isDropdownActive: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
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
    },
    loadTrades() {
      this.fetchData();
    }
  }
};
</script>
