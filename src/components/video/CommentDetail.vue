<script setup>
import {defineProps, onUnmounted, reactive, ref} from 'vue';
import SingleComment from "@/components/video/SingleComment.vue";
import {getReplies, likeComment} from "@/api/comment";


const props = defineProps({
  mainComment: Object
})

const user = reactive({
  avatar: 'god.jpg',
  name: '小明',
})


const replies = ref([])

getReplies(props.mainComment.id).then((res) => {
      for (const raw of res.data.data) {
        const single = {}
        single.id = raw.id
        single.toCommentId = raw.commentId
        single.toCommentator = raw.userName
        single.time = raw.createdTime.substring(0, 19)
        single.name = raw.replyName
        single.agree = raw.sumLike
        single.content = raw.content
        replies.value.push(single)
      }
    }
)

const addReply = (reply) => {
  replies.value.push(reply)
  console.log('回复', reply)
}

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
      <SingleComment :comment="mainComment" @add="addReply"></SingleComment>
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