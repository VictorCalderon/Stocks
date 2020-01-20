import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Portfolio from '@/components/Portfolio.vue'
import Market from '@/components/Market.vue'



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
    path: '/Market',
    name: 'market',
    component: Market
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
