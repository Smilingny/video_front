import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        }
      ]
    },
    {
        path: '/videoDetail',
        name: 'videoDetail',
        component: () => import('../views/VideoDetailView.vue'),
        children: [
            {
                path: '/commentDetail',
                name: 'commentDetail',
                component: () => import('../components/video/CommentDetail.vue')
            }
        ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path:'/info_0',
      name:'info_0',
      component:()=>import('../views/info_0.vue')
    },


  ]
})

export default router
