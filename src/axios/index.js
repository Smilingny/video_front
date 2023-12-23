import axios from 'axios';

const createAxiosInstance = (service) => {
    const baseURL = 'http://10.100.187.89:51801' + service
    const instance = axios.create({
        baseURL,
        timeout: 3000,
    });

    // 拦截器配置
    instance.interceptors.request.use(
        (config) => {
            if (config.url !== '/login' && config.url !== '/register') {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = token;
                }
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    return instance;
};

// 登陆
const loginAxiosInstance = createAxiosInstance('/authenticate');
// 用户微服务
const userAxiosInstance = createAxiosInstance('/user');
// 管理服务
const manageAxiosInstance = createAxiosInstance('/manage');
// 视频微服务
const videoAxiosInstance = createAxiosInstance('/wemedia/video');
// 弹幕微服务
const danmuAxiosInstance = createAxiosInstance('/wemedia/barrage');
// 评论微服务
const commentAxiosInstance = createAxiosInstance('/wemedia/comment');
// 评论回复微服务
const commentReplyAxiosInstance = createAxiosInstance('/wemedia/commentReply');
// 聊天微服务
const chatAxiosInstance = createAxiosInstance('/wemedia/chat');
// 统计微服务
const statisticsAxiosInstance = createAxiosInstance('/wemedia/statistics');
// 广告服务
const adAxiosInstance = createAxiosInstance('/wemedia/advertising')


// // 用户服务
// const userAxiosInstance = createAxiosInstance('http://localhost:3000');
// // 视频微服务
// const videoAxiosInstance = createAxiosInstance('http://localhost:3000');
// // 弹幕微服务
// const danmuAxiosInstance = createAxiosInstance('http://localhost:3000');
// // 评论微服务
// const commentAxiosInstance = createAxiosInstance('/comment');
// // 聊天微服务
// const chatAxiosInstance = createAxiosInstance('http://localhost:3000');
// // 统计微服务
// const statisticsAxiosInstance = createAxiosInstance('http://localhost:3000');

export {
    userAxiosInstance, videoAxiosInstance, danmuAxiosInstance,
    commentAxiosInstance, chatAxiosInstance, statisticsAxiosInstance,
    commentReplyAxiosInstance, adAxiosInstance, manageAxiosInstance,
    loginAxiosInstance
};
