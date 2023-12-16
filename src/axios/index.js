import axios from 'axios';

const createAxiosInstance = (baseURL) => {
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
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    return instance;
};

// 用户微服务
// const userAxiosInstance = createAxiosInstance('http://10.100.24.66:51701');
// // 视频微服务
// const videoAxiosInstance = createAxiosInstance('http://10.100.24.66:51702');
// // 弹幕微服务
// const danmuAxiosInstance = createAxiosInstance('http://10.100.24.66:51703');
// // 评论微服务
// const commentAxiosInstance = createAxiosInstance('http://10.100.24.66:51704');
// // 聊天微服务
// const chatAxiosInstance = createAxiosInstance('http://10.100.24.66:51706');
// // 统计微服务
// const statisticsAxiosInstance = createAxiosInstance('http://10.100.24.66:51705');


// 用户微服务
const userAxiosInstance = createAxiosInstance('http://localhost:3000');
// 视频微服务
const videoAxiosInstance = createAxiosInstance('http://localhost:3000');
// 弹幕微服务
const danmuAxiosInstance = createAxiosInstance('http://localhost:3000');
// 评论微服务
const commentAxiosInstance = createAxiosInstance('http://localhost:3000');
// 聊天微服务
const chatAxiosInstance = createAxiosInstance('http://localhost:3000');
// 统计微服务
const statisticsAxiosInstance = createAxiosInstance('http://localhost:3000');

export {
    userAxiosInstance, videoAxiosInstance, danmuAxiosInstance,
    commentAxiosInstance, chatAxiosInstance, statisticsAxiosInstance
};
