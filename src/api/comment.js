import {commentAxiosInstance, commentReplyAxiosInstance, manageAxiosInstance} from "@/axios";
import qs from "qs";

// 获取评论列表
export const getComments = (videoId) => {
    return commentAxiosInstance.get('/get/comment',
        {
            params: {
                videoId: videoId
            }
        });
}

// 点赞评论
export const likeComment = (commentId) => {
    const data = {
        commentId: commentId
    }
    return commentAxiosInstance.put('/like/comment', qs.stringify(data));
}

// 获取回复列表
export const getReplies = (commentId) => {
    const params = {
        commentId: commentId
    }
    return commentReplyAxiosInstance.get('/get/commentReply', {params: params});
}

// 举报评论
export const reportComment = (userId, targetId, content) => {
    const data = {
        userId: userId,
        targetId: targetId,
        content: content,
        type: 3,
    }
    return manageAxiosInstance.post('/report/save/report', data);
}

//保存评论
export const saveComment = (userId, videoId, content) => {
    const data = {
        userId: userId,
        videoId: videoId,
        content: content,
    }
    return commentAxiosInstance.post('/save/comment', data)
}

// 发送回复
export const saveReply = (userId, commentId, content) => {
    const data = {
        userId: userId,
        commentId: commentId,
        content: content,
    }
    return commentReplyAxiosInstance.post('/save/commentReply', data)
}