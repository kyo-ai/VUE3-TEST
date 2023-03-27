import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router