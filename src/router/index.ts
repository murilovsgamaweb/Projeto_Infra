import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import InitialForm  from '@/pages/InitialForm.vue'
import Cadastro from '@/pages/Cadastro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/initialForm',
      name: 'initialForm',
      component: InitialForm,
    }, 
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro,
    }
  ],
})

export default router
