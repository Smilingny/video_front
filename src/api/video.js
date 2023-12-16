import {videoAxiosInstance} from "@/axios";
import qs from "qs";

export const getVideoInfo = (videoId) => {
    return videoAxiosInstance.get('/VideoInfo', qs.stringify(videoId));
}

export const getVideoList = () => {
    return videoAxiosInstance.get('getVideoList');
}