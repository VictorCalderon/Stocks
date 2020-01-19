import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '@/components/Portfolio/Portfolio.vue'
import Stocks from '@/components/Stocks/Stocks.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/Stocks',
    name: 'stocks',
    component: Stocks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
