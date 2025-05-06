import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/UserRegister.vue'
import Login from '../components/UserLogin.vue'

const routes = [
  { path: '/UserRegister', component: Register },
  { path: '/UserLogin', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
