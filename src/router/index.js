import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Info_0 from '../views/info_0.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/',
      name:'info_0',
      component:Info_0
    },

  ]
})

export default router
