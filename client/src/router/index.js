import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Solve from '../views/Solve.vue'
import Status from '../views/Status.vue'
import Schedule from '../views/Schedule.vue'
import Apply from '../views/Apply.vue'
import Login from '../views/Login.vue'
import Me from '../views/Me.vue'

import SolveHome from '../components/SolveHome'
import Part1 from '../components/Part1'
import Part2 from '../components/Part2'
import Part3 from '../components/Part3'
import Part4 from '../components/Part4'
import Part5 from '../components/Part5'
import Part6 from '../components/Part6'

import store from '../store'

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuthenticated)
    return next()
  next('/login?returnPath=me')
}

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/me',
    name: 'Me',
    component: Me,
    beforeEnter: requireAuth
  },
  {
    path: '/solve',
    name: 'Solve',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Solve,
    children : [
      { path: '', component: SolveHome, },
      { path: 'part1', component: Part1, },
      { path: 'part2', component: Part2, },
      { path: 'part3', component: Part3, },
      { path: 'part4', component: Part4, },
      { path: 'part5', component: Part5, },
      { path: 'part6', component: Part6, },
    ]
  },
  {
    path: '/status',
    name: 'Status',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Status
  },
  {
    path: '/schedule',
    name: 'Schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Schedule
  },
  {
    path: '/apply',
    name: 'Apply',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Apply
  },
  {
    path: '/solve',
    name: 'Solve',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Solve
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
