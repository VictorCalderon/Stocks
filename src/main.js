import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://stock-trader-8a8e8.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
