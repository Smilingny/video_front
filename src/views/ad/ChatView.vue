<script setup>
import {onMounted, ref} from "vue";
import router from "@/router";
import {useStore} from "@/store";
import {ArrowLeftBold} from "@element-plus/icons-vue";


const message = ref('')
const chatScroll = ref(null)
const userId = localStorage.getItem('userId')
const friendId = router.currentRoute.value.query.friendId
const friendName = router.currentRoute.value.query.friendName
const ws = 'ws://10.100.187.89:51801/chat?sender=' + userId + '&receiver=' + friendId
const webSocket = new WebSocket(ws)
const chats = ref([])
// 监听连接
webSocket.onopen = () => {
  console.log('WebSocket 连接已建立');
};

webSocket.onerror = (error) => {
  console.error('WebSocket 连接发生错误:', error);
};

//时间戳转换为时间格式
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

webSocket.onmessage = event => {
  console.log('Received message:', event.data);
  const chat = JSON.parse(event.data)
  chat.time = formatTimestamp(chat.createdTime)
  chats.value.push(chat)
  console.log(friendId)
  scrollToBottom();
};


const scrollToBottom = () => {
  setTimeout(() => {
    chatScroll.value.scrollTop = chatScroll.value.scrollHeight;
  }, 100)
}
const store = useStore()

const sendMessage = () => {
  scrollToBottom();
  webSocket.send(message.value)
  const chat = {
    sender: userId,
    receiver: friendId,
    content: message.value,
    time: new Date().toLocaleString()
  }
  chats.value.push(chat)
  message.value = '';
}

onMounted(() => {
  scrollToBottom();
})
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <el-icon size="30" style="width: 50px;" @click="router.go(-1)">
          <ArrowLeftBold/>
        </el-icon>
        <h2 style="margin: 20px auto;">{{ friendName }}</h2>
      </div>
      <div class="main" ref="chatScroll">
        <div v-for="item in chats">
          <p class="chat" :class="{chatLeft: item.receiver==userId,chatRight: item.sender==userId}">
            {{ item.content }}
          </p>
          <span class="state" :class="{stateLeft: item.receiver==userId,stateRight: item.sender==userId}">
              {{ item.time }}
            </span>
        </div>

      </div>
      <div class="footer">
        <el-input
            class="input"
            placeholder="请输入内容"
            v-model="message"
            suffix-icon="el-icon-chat-dot-round"
            @keyup.enter.native="sendMessage"
        />
        <el-button type="primary" @click="sendMessage">发送消息</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #ebedf0;
}

.wrapper {
  position: relative;
  width: 70vw;
  height: 80vh;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  border-bottom: 1px solid darkgrey;
  display: flex;
  align-items: center;
}

.main {
  height: 75%;
  padding: 20px 0;
  overflow-y: auto;
}

.main::-webkit-scrollbar {
  display: none
}

.chat {
  height: 2rem;
  width: 200px;
  max-width: 80%;
  margin-top: 15px;
  margin-bottom: 05px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px 10px;
  border-radius: 5px;
}

.state {
  text-align: center;
  width: 200px;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  color: #a5a5a5;
}

.stateRight {
  margin-right: 0;
  margin-left: auto;
}

.stateLeft {
  margin-right: auto;
  margin-left: 0;
}

.chatRight {
  margin-right: 0;
  margin-left: auto;
  background-color: #63bbd0;
}

.chatLeft {
  margin-right: auto;
  margin-left: 0;
  background-color: #baccd9;
}

.footer {
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid darkgrey;
}

.input {
  width: 80%;
  margin: auto;
}

</style>