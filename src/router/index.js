import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Spotsearch from '../views/Spotsearch.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Spotsearch',
    name: 'Spotsearch',
    component: () => import('../views/Spotsearch.vue')
  },
  {
    path: '/Pamphlet',
    name: 'Pamphlet',
    component: () => import('../views/Pamphlet.vue')
  },
  {
    path: '/Pamphlet',
    name: 'Pamphlet',
    component: () => import('../views/Pamphlet.vue')
  },
  {
    path: '/Aboutus',
    name: 'Aboutus',
    component: () => import('../views/Aboutus.vue')
  },
  {
    path: '/Photogallery',
    name: 'Photogallery',
    component: () => import('../views/Photogallery.vue')
  },
  {
    path: '/entry/:id',
    name: 'Entry',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/EntryPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
