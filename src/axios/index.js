import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000,
})

axiosInstance.interceptors.request.use(config => {
    if (config.url !== '/login' && config.url !== '/register') {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config; // 返回config以便请求继续执行
}, error => {
    return Promise.reject(error); // 处理拦截器错误
});


export default axiosInstance