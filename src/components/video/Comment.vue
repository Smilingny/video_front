<script setup>
import {onMounted, ref} from 'vue';
import router from "@/router";
import CommentDetail from "@/components/video/CommentDetail.vue";
import {getComments, likeComment, reportComment, saveComment} from "@/api/comment";
import {jwtDecode} from "jwt-decode";
import {showFailToast, showSuccessToast} from "vant";

const videoId = router.currentRoute.value.query.id
const comments = ref([]);
const newCommentContent = ref('');
const replyContent = ref([]);
const showReport = ref(false)
const reportId = ref()
const reportContent = ref()
const showCommentDetail = ref(false)
const selectedComment = ref()
const agreeIcon = ref()
const userId = localStorage.getItem('userId')
const userName = localStorage.getItem('userName')
const commentDetailKey = ref(0)

//举报评论
const report = (id) => {
  showReport.value = true
  reportId.value = id
}
const submitReport = () => {
  reportComment(userId, reportId.value, reportContent.value).then((res) => {
    showSuccessToast('举报成功')
  }).catch((err) => {
    showFailToast('举报失败')
  })
  reportContent.value = ''
  showReport.value = false
}

//获取评论列表
onMounted(() => {
  getComments(videoId).then((res) => {
    for (const raw of res.data.data) {
      const single = {}
      single.id = raw.id
      single.name = raw.userName
      single.time = raw.createdTime.substring(0, 19)
      single.content = raw.content
      single.agree = raw.sumLike
      single.replyCounts = raw.sumReply
      comments.value.push(single)
    }
  })
})


// 发送新评论
const sendComment = () => {
  saveComment(userId, videoId, newCommentContent.value).then((res) => {
    showSuccessToast('发送成功')
    const newComment = {
      name: userName,
      time: new Date().toLocaleString(),
      content: newCommentContent.value,
      agree: 0,
      replyCounts: 0,
    }
    comments.value.push(newComment);
    newCommentContent.value = ''; // 清空输入框
  }).catch((err) => {
    showFailToast('发送失败')
    newCommentContent.value = ''; // 清空输入框
  })
};

// 赞同评论
const agree = (comment) => {
  const commentId = comment.id;
  likeComment(commentId).then((res) => {
    console.log(res.data);
    comment.agree += 1;
  })
}

// 进入评论详情
function toDetail(comment) {
  selectedComment.value = comment;
  showCommentDetail.value = true;
}

// 发送回复
const sendReply = (index) => {
  const newReply = {content: replyContent.value[index]};
  comments.value[index].replies.push(newReply);
  replyContent.value[index] = ''; // 清空回复框
};
</script>

<template>
  <div class="commentWrapper">
    <van-divider
        content-position="center"
        :style="{ color: 'black', borderColor: '#ebedf0', padding: '0 16px' }"
    >
      视频评论
    </van-divider>

    <!-- 评论列表 -->
    <div class="comments">
      <div v-for="(comment, index) in comments" :key="index" class="comment">

        <div class="commentator">
          <!--        评论者头像-->
          <van-image round width="3rem" height="3rem" :src="comment.avatar"/>
          <!--          评论者-->
          <div class="user">
            <div class="name">{{ comment.name }}</div>
            <div class="time">{{ comment.time }}</div>
          </div>
        </div>

        <div class="comment-content">
          <!--        评论内容-->
          <p>{{ comment.content }}</p>
          <!--          点赞-->
          <div style="display: flex;align-items: center; color: darkgrey">
            <van-icon name="good-job-o" @click="agree(comment)" ref="agreeIcon"/>
            {{ comment.agree }}
            <van-icon name="comment-o" style="margin: 0 0.5rem 0 1rem"/>
            {{ comment.replyCounts }}
            <van-icon name="warn-o" style="margin-left: 1rem;" @click="report(comment.id)"/>
          </div>

          <!--          &lt;!&ndash;          回复区&ndash;&gt;-->
          <!--          <div class="replies">-->
          <!--            <div v-for="(reply,index) in comment.replies" :key="index"-->
          <!--                 style="display: flex; padding:0.2rem;width: 100%" class="van-ellipsis">-->
          <!--              <van-highlight :keywords="reply.from" :source-string="reply.from"/>-->
          <!--              回复-->
          <!--              <van-highlight :keywords="reply.to" :source-string="reply.to"/>-->
          <!--              ： {{ reply.content }}-->
          <!--            </div>-->
          <!--          </div>-->
          <!--            点击展开全部回复-->
          <div class="showMore" @click="toDetail(comment)">
            更多 >
          </div>
        </div>
      </div>
    </div>

    <!-- 发送评论 -->
    <div class="newComment">
      <van-field
          v-model="newCommentContent"
          rows="1"
          autosize
          type="textarea"
          placeholder="输入评论内容"
          style=" width: 70vw;"
      ></van-field>
      <van-button
          style="margin-right: 2rem; height: 2.5rem"
          round
          type="primary"
          plain
          @click="sendComment"
      >
        发送
      </van-button>
    </div>
  </div>

  <!--  举报弹出层-->
  <van-popup v-model:show="showReport" round :style="{ padding: '40px' }">
    <van-field
        v-model="reportContent"
        rows="5"
        type="textarea"
        placeholder="请输入举报内容"
        style="border: 1px solid #ebedf0; width: 100%"
    />
    <van-button
        style="margin: 1rem 2rem 0 0; height: 2.5rem;width: 100%"
        round
        type="primary"
        plain
        @click="submitReport"
    >
      提交
    </van-button>
  </van-popup>

  <!--  评论详情-->
  <van-popup
      v-model:show="showCommentDetail"
      position="bottom"
      lazy-render
      :style="{ height: '70%' }"
      @open="commentDetailKey++"
  >
    <CommentDetail :main-comment="selectedComment" :key="commentDetailKey"/>
  </van-popup>

</template>

<style scoped>

.newComment {
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
  align-items: center;
  border-top: 1px solid #ebedf0;
}

.comments {
  padding-bottom: 15vh;
}

.comment {
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ebedf0;
}

.commentator {
  display: flex;
  align-items: center;
}

.user {
  margin-left: 1rem
}

.time {
  font-size: 0.8rem;
  color: darkgrey;
  padding-top: 5px;
}

.comment-content {
  margin: 0 4rem;
}

.replies {
  position: relative;
  overflow: hidden;
  max-height: 24vw;
  background-color: #ebedf0;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.8rem;
}


.replies:empty {
  padding: 0;
}

.showMore {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: deepskyblue;
}

</style>