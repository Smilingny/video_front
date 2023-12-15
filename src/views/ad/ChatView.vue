<script setup>
import {inject, onMounted, reactive, ref} from "vue";
import router from "@/router";
import {useStore} from "@/store";
import {ArrowLeftBold} from "@element-plus/icons-vue";

const webSocket = inject('mockWebSocket')
const message = ref('')
const chatScroll = ref(null)

// 模拟 WebSocket 服务器

// 监听连接
webSocket.onopen = () => {
  console.log('WebSocket 连接已建立');
};

// 在这里可以使用 mockWebSocket，比如监听消息等
webSocket.onmessage = event => {
  console.log('Received message:', event.data);
  store.chats.push(event.data)
};

const scrollToBottom = () => {
  setTimeout(() => {
    chatScroll.value.scrollTop = chatScroll.value.scrollHeight;
  }, 100)
}
const store = useStore()
const chats = store.chats
// const chats = reactive([
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'send',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'send',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'send',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'receive',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   },
//   {
//     type: 'send',
//     content: '你好啊',
//     time: '2021-10-10 10:10:10'
//   }
// ])
const sendMessage = () => {
  const messageInfo = {
    type: 'send',
    content: message.value,
    time: new Date().toLocaleString()
  };
  message.value = '';
  console.log(store.chats)
  scrollToBottom();
  webSocket.send(messageInfo)
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
        <h2 style="margin: 20px auto;">张三</h2>
      </div>
      <div class="main" ref="chatScroll">
        <div v-for="item in chats">
          <p class="chat" :class="{chatLeft: item.type==='receive',chatRight: item.type==='send'}">
            {{ item.content }}
          </p>
          <span class="state" :class="{stateLeft: item.type==='receive',stateRight: item.type==='send'}">
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