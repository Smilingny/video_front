<script setup>
import {likeComment, saveReply} from "@/api/comment";
import {ref} from "vue";
import {showSuccessToast} from "vant";

const userId = localStorage.getItem('userId')
const userName = localStorage.getItem('userName')

const props = defineProps({
  comment: {
    required: true
  }
})

const replyContent = ref('')

const showInput = ref(false)
const replyTo = () => {
  showInput.value = true;
}

const emits = defineEmits(['add'])
const sendReply = () => {
  saveReply(userId, props.comment.id, replyContent.value).then((res) => {
    showSuccessToast('发送成功')
    const reply = {
      toCommentId: props.comment.id,
      toCommentator: props.comment.name,
      time: new Date().toLocaleTimeString(),
      name: userName,
      agree: 0,
      content: replyContent.value
    }
    emits('add', reply)
  })
  showInput.value = false;
}

//点赞评论
const agree = (comment) => {
  const commentId = comment.id;
  likeComment(commentId).then((res) => {
    console.log(res.data);
    comment.agree += 1;
  })
}
</script>

<template>
  <div class="commentator">
    <!--        评论者头像-->
    <van-image round width="2rem" height="2rem" :src="comment.avatar"/>
    <!--          评论者-->
    <div class="user">
      <div class="name">{{ comment.name }}</div>
      <div class="time">{{ comment.time }}</div>
    </div>
  </div>

  <div class="comment-content">
    <!--        评论内容-->
    <p>
      <span v-if="comment.toCommentId">
        回复
        <span style="color:deepskyblue">{{ comment.toCommentator }}</span>
        ：
      </span>
      {{ comment.content }}
    </p>
    <!--          点赞-->
    <div style="display: flex;align-items: center; color: darkgrey">
      <van-icon name="good-job-o" @click="agree(comment)"/>
      {{ comment.agree }}
      <van-icon name="comment-o" style="margin: 0 0.5rem 0 1rem" @click="replyTo"/>
      {{ comment.replyCounts }}
    </div>
  </div>

  <!--  输入评论弹出层-->
  <van-popup
      v-model:show="showInput"
      position="bottom"
      lazy-render
      :style="{ height: '40%' }"
      style="display: flex;flex-direction: column;align-items: center"
  >
    <van-field
        v-model="replyContent"
        rows="5"
        type="textarea"
        placeholder="请输入内容"
        style="border: 1px solid #ebedf0; margin:5vw; width: 90vw"
    />
    <van-button
        style="margin-right: 2rem; height: 2.5rem; "
        round
        type="primary"
        plain
        @click="sendReply"
    >
      发送
    </van-button>
  </van-popup>
</template>

<style scoped>


.commentator {
  display: flex;
  align-items: center;
  margin-top: 1rem;
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
  margin: 0 3rem;
}</style>