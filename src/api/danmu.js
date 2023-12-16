import {danmuAxiosInstance} from "@/axios";
import qs from "qs";

// 获取弹幕
export const getDanmu = (videoId) => {
    const data = {
        videoId: videoId
    }
    return danmuAxiosInstance.get('getDanmu', qs.stringify(data))
}

export const saveDanmu = (danmu, userId) => {
    const data = {
        userId: userId,
        videoId: danmu.videoId,
        timeStamp: danmu.time,
        content: danmu.text,
        color: danmu.color,
    }
    return danmuAxiosInstance.post('saveDanmu', qs.stringify(data))
}