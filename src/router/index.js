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
      component:()=>import('../views/Info.vue')
    },

    {
      path:'/uploadVideo',
      name: 'UploadVideo',
      component:()=>import('../views/UploadVideo.vue')

    },
      {
          path:'/letterIconView',
          name: 'LetterIconView',
          component:()=>import('../views/LetterIconView.vue')

      },
      {
          path:'/listItemDetail/:Title',
          name: 'ListItemDetail',
          component:()=>import('../views/ListItemDetail.vue')

      },
  ]
})

export default router
