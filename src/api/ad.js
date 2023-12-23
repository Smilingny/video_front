import {manageAxiosInstance, adAxiosInstance} from "@/axios";
import qs from "qs";

//申请广告服务
export const applyAd = (userId, realName, phone, content) => {
    const data = {
        userId: userId,
        realName: realName,
        phone: phone,
        content: content
    }
    return manageAxiosInstance.post('/apply/save/apply', data);
}

//查询申请结果
export const applyState = (userId) => {
    return manageAxiosInstance.get('/apply/get/apply/status', {
        params: {
            userId: userId
        }
    })
}

// 新建广告
export const saveAd = (ad) => {
    return adAxiosInstance.post('/add/advertisement', ad);
}

// 获取某个用户创建的广告
export const getAd = (userId) => {
    return adAxiosInstance.get('/get/user/advertisement', {
        params: {
            advertiserId: userId
        }
    });
}

//删除广告
export const removeAd = (adId) => {
    const data = {
        advertisementId: adId
    }
    return adAxiosInstance.delete('/remove/advertisement', qs.stringify(data));
}

//获取所有广告
export const getAllAds = () => {
    return adAxiosInstance.get('/get/all/advertisement')
}

//点击广告
export const clickAd = (adId) => {
    const data = {
        advertisementId: adId
    }
    return adAxiosInstance.put('/update/advertisement/click', qs.stringify(data));
}

// 转化广告
export const convertAd = (adId) => {
    const data = {
        advertisementId: adId
    }
    return adAxiosInstance.put('/update/advertisement/conversion', qs.stringify(data));
}

export const getAdApplyList = () => {
    return manageAxiosInstance.get('/apply/get/applyList')
}



