import axiosInstance from "@/axios";
import qs from "qs";

// 登陆
export const login = (user) => {
    const data = {
        username: user.username,
        password: user.password
    }
    return axiosInstance.get('/login', qs.stringify(data))
}