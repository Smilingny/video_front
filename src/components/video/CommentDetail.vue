<script setup>
import {defineProps, reactive, ref} from 'vue';
import SingleComment from "@/components/video/SingleComment.vue";


const user = reactive({
  avatar: 'god.jpg',
  name: '小明',
})

const mainComment = reactive({
  user: user,
  time: '2021-10-08',
  agree: 123,
  content: '非常好看'
})


const replies = reactive([
  {
    user: user,
    content: '说得对',
    time: '2021-10-20',
    agree: 23,
    toCommentId: 1,
    toCommentator: '小明'
  }

])
</script>

<template>
  <van-divider
      content-position="center"
      :style="{ color: 'black', borderColor: '#ebedf0', padding: '0 16px' }"
  >
    评论详情
  </van-divider>
  <div class="comments">

    <!--    层主评论-->
    <div class="mainComment">
      <SingleComment :comment="mainComment"></SingleComment>
    </div>

    <div style="margin: 0.5rem; color: grey; font-size: 0.8rem">相关回复</div>

    <div v-for="(reply,index) in replies" :key="index">
      <SingleComment :comment="reply"></SingleComment>
    </div>
  </div>


</template>


<style scoped>
.comments {
  margin: 1rem;
}

.mainComment {
  padding-bottom: 1rem;
  border-bottom: 2px solid darkgrey;
}
</style>