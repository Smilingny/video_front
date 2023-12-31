import {createRouter, createWebHistory} from 'vue-router'


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
            path: '/videoDetail/:id',
            name: 'videoDetail',
            component: () => import('../views/VideoDetailView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/ad/login',
            name: 'adLogin',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/admin/login',
            redirect: 'adminLogin',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/info',
            name: 'info',
            component: () => import('../views/info.vue')
        },

        /*上传视频界面*/
        {
            path: '/uploadVideo',
            name: 'UploadVideo',
            component: () => import('../views/UploadVideo.vue')

        },
        /*信封图标界面*/
        {
            path: '/letterIconView',
            name: 'LetterIconView',
            component: () => import('../views/LetterIconView.vue')

        },
        /*消息显示界面*/
        {
            path: '/listItemDetail/:Title',
            name: 'ListItemDetail',
            component: () => import('../views/ListItemDetail.vue')

        },
        /*搜索结果界面*/
        {
            path: '/searchResult',
            name: 'SearchResult',
            component: () => import('../views/SearchResultvView.vue')
        },
        /*编辑个人信息界面*/
        {
            path: '/editeUserInfo',
            name: 'EditeUserInfo',
            component: () => import('../views/EditeUserInfo.vue')
        },
        /*后台管理界面路由*/
        {
            path: '/backgroundView',
            name: 'BackgroundView',
            component: () => import('../views/BackgroundView.vue'),
            children: [
                {
                    path: '/user',
                    name: 'User',
                    component: () => import("../components/BackgroundComponent/UserInfo.vue")
                },
                {
                    path: '/community',
                    name: 'Community',
                    component: () => import("../components/BackgroundComponent/ComunityManager.vue")
                },
                {
                    path: '/data',
                    name: 'Data',
                    component: () => import("../components/BackgroundComponent/Data.vue")
                },
            ]
        },
        {
            path: '/ad',
            name: 'ad',
            component: () => import("../views/ad/index.vue")
        },
        {
            path: '/userHome',
            name: 'userHome',
            component: () => import("../views/UserHomeView.vue")
        },
        {
            path: '/chat',
            name: 'adChat',
            component: () => import("../views/ad/ChatView.vue")
        },
        /*测试聊天窗口*/
        {
            path: '/test',
            name: 'chat',
            component: () => import("../views/showVedio.vue")
        },
    ]
})

export default router
