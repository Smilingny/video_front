import {userAxiosInstance, loginAxiosInstance} from "@/axios";
import qs from "qs";

// 登陆
export const login = (user) => {
    const data = {
        username: user.username,
        password: user.password
    }
    return loginAxiosInstance.post('/login', data)
}

// 注册
export const register = (user) => {
    return userAxiosInstance.post('/register', user)
}

//获取粉丝列表
export const getFans = (userId) => {
    return userAxiosInstance.get('/followedUserList', {
        params: {
            userId: userId
        }
    });
}

//获取关注列表
export const getFollow = (userId) => {

    return userAxiosInstance.get('/followingUserList', {
        params: {
            userId: userId
        }
    });
}

// 关注
export const follow = (userId, targetId) => {
    const data = {
        following_id: userId,
        followed_id: targetId
    }
    return userAxiosInstance.put('/followUser', data)
}

// 取消关注
export const unfollow = (userId, targetId) => {
    const data = {
        following_id: userId,
        followed_id: targetId
    }
    return userAxiosInstance.put('/unfollowUser', data)
}