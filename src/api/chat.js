import {chatAxiosInstance} from "@/axios";


// 获取聊天室列表
export const getChatList = (userId) => {
    return chatAxiosInstance.get('/get/chatList', {
        params: {
            userId: userId
        }
    });
};