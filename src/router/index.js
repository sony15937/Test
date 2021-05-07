import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name:'Login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/Home',
    children:[{
      path: 'Home',
      name: 'Home',
      component: () => import('../views/home'),
      meta:{
        roles: ['admin','user']
      }
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
