import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Portfolio from '@/views/Portfolio.vue'
import Market from '@/views/Market.vue'
import Purchases from '@/views/Purchases.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
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
  },
  {
    path: '/Purchases',
    name: 'purchases',
    component: Purchases
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
