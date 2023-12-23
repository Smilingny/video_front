<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import router from "@/router";
import {getChatList} from "@/api/chat";

const userId = localStorage.getItem('userId')

const messageList = ref([])

getChatList(userId).then((res) => {
  const chatList = res.data.data
  for (const chat of chatList) {
    messageList.value.push({
      sessionId: chat.sessionId,
      friendId: chat.friendId,
      friendName: chat.friendName
    })
  }
})

const emits = defineEmits(['updateMessage'])
const update = () => {
  let total = 0
  messageList.value.forEach(item => {
    total += item.newCount
  })
  emits('updateMessage', total)
  return total;
}


onMounted(() => {
      emits('updateMessage', update())
    }
)

const toChat = (item) => {
  router.push({
    path: '/chat',
    query: {
      sessionId: item.sessionId,
      friendId: item.friendId,
      friendName: item.friendName
    }
  })
}
</script>

<template>
  <div class="wrapper">
    <el-card shadow="hover" v-for="item in messageList" :key="item.id" class="messageItem"
             body-style="padding: 0;width: 100%;height: 100%;
                          display: flex;
                          align-items: center;
                          justify-content: center;"
             @click="toChat(item)"
    >
      <div class="messageItemLeft">
        <el-avatar :size="50"/>
      </div>
      <div class="messageItemRight">
        <div class="messageItemRightTop">
          <span class="name">{{ item.friendName }}</span>
          <span class="other">{{ item.time }}</span>
        </div>
        <div class="messageItemRightBottom">
          <span class="other">{{ item.content }}</span>
          <span v-if="item.newCount>0" class="newCount">{{ item.newCount }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.messageItem {
  width: 80%;
  height: 100px;
  padding-right: 40px;
  margin-top: 20px;
}

.messageItemLeft {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.messageItemRight {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.messageItemRightTop {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.messageItemRightBottom {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

.other {
  font-size: 16px;
  color: #999999;
}

.newCount {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>