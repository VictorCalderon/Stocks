import Vue from 'vue'
import Vuex from 'vuex'

import Stocks from '@/store/modules/stocks'
import Portfolio from '@/store/modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Stocks,
    Portfolio
  }

})
