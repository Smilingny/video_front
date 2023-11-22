<script setup>
import {ref} from 'vue';

const comments = ref([]);
const newCommentContent = ref('');
const replyContent = ref([]);
const showInput = ref(false)

comments.value = [{
  avatar: 'god.jpg',
  name: '小明',
  time: '2023-10-10',
  agree: '123',
  content: '非常好看',
  replies: [
    {content: "我也认为1", from: '张三', to: '李四'},
    {content: "我也认为2", from: '张三', to: '李二'},
    {content: "我也认为3", from: '宋里', to: '李逵'},
    {content: "我也认为4", from: '王鹏', to: '顶针'},
    {content: "我也认为5", from: '雪豹', to: '小李'},
    {content: "我也认为6", from: '张三', to: '李四'},
    {content: "我也认为7", from: '张三', to: '李四'},

  ]
},
  {
    avatar: 'god.jpg',
    name: '小明',
    time: '2023-10-10',
    agree: '123',
    content: '非常好看',
    replies: [
      {content: "我也认为1", from: '张三', to: '李四'},
      {content: "我也认为2", from: '张三', to: '李二'},
      {content: "我也认为3", from: '宋里', to: '李逵'},
    ]
  },
  {
    avatar: 'god.jpg',
    name: '小明',
    time: '2023-10-10',
    agree: '123',
    content: '非常好看',
    replies: []
  }]

// 发送新评论
const sendComment = () => {
  const newComment = {content: newCommentContent.value, replies: []};
  comments.value.push(newComment);
  newCommentContent.value = ''; // 清空评论框
};

// 赞同评论
const agree = () => {

}

const replyTo = () => {
  showInput.value = true;
}
const sendReply = (index) => {
  const newReply = {content: replyContent.value[index]};
  comments.value[index].replies.push(newReply);
  replyContent.value[index] = ''; // 清空回复框
};
</script>

<template>
  <div>
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
            <van-icon name="good-job-o" @click="agree"/>
            {{ comment.agree }}
            <van-icon name="comment-o" style="margin-left: 1rem" @click="replyTo"/>
          </div>

          <!--          回复区-->
          <div class="replies">
            <div v-for="(reply,index) in comment.replies" :key="index" style="display: flex; padding:0.2rem">
              <van-highlight :keywords="reply.from" :source-string="reply.from"/>
              回复
              <van-highlight :keywords="reply.to" :source-string="reply.to"/>
              ： {{ reply.content }}
            </div>

            <!--            点击展开全部回复-->
            <div v-if="comment.replies.length" class="showMore">
              更多 >
            </div>
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
        发送评论
      </van-button>
    </div>
  </div>

  <!--  输入评论弹出层-->
  <van-popup
      v-model:show="showInput"
      position="bottom"
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
        @click=""
    >
      发送评论
    </van-button>
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
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  color: deepskyblue;
}

</style>