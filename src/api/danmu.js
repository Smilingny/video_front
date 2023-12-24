import {danmuAxiosInstance, manageAxiosInstance} from "@/axios";
import qs from "qs";

// 获取弹幕
export const getDanmu = (videoId) => {
    return danmuAxiosInstance.get('/get/all/barrage', {
        params: {
            videoId: videoId
        }
    })
}

//保存弹幕
export const saveDanmu = (danmu, userId, videoId) => {
    const data = {
        userId: userId,
        videoId: videoId,
        timeStamp: Math.round(danmu.time),
        content: danmu.text,
        color: danmu.color,
    }
    return danmuAxiosInstance.post('/save/barrage', data)
}

//举报弹幕
export const reportDanmu = (userId, targetId, content) => {
    const data = {
        userId: userId,
        targetId: targetId,
        content: content,
        type: 2,
    }
    return manageAxiosInstance.post('/report/save/report', data);
}