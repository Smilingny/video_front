import {videoAxiosInstance} from "@/axios";
import qs from "qs";

export const getVideoInfo = (videoId) => {
    return videoAxiosInstance.get('/get/videoInfo', {
        params: {
            videoId: videoId
        }
    });
}

export const getVideoList = () => {
    return videoAxiosInstance.get('/get/videoList');
}

export const getUserVideoList = (userId) => {
    return videoAxiosInstance.get('/get/user/videoList', {
        params: {
            userId: userId
        }
    });
}

//举报视频
export const reportVideo = (userId, targetId, content) => {
    const data = {
        userId: userId,
        targetId: targetId,
        content: content,
        type: 0,
    }
    return videoAxiosInstance.post('/reportVideo', data);
}