import axiosInstance from "@/axios";
import qs from "qs";

export const getVideoInfo = (videoId) => {
    const id = videoId;
    return axiosInstance.get('/VideoInfo', qs.stringify(id));
}