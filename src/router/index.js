import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Solicitud from '../views/usuario/Solicitud.vue'
import AdmDashboard from '../views/administrador/Dashboard.vue'
import TecnicoDashboard from '../views/tecnico/Dashboard.vue'

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
    path: '/solicitud',
    name: 'Solicitud',
    component: Solicitud
  },
  {
    path: '/admin/dashboard',
    name: 'AdmDashboard',
    component: AdmDashboard
  },
  {
    path: '/tecnico/dashboard',
    name: 'TecnicoDashboard',
    component: TecnicoDashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
