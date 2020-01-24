import Vue from 'vue'
import Vuex from 'vuex'

import Stocks from '@/store/modules/stocks'
import Portfolio from '@/store/modules/portfolio'

import * as actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    Stocks,
    Portfolio
  }

})
