<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import router from "@/router";

const socket = new WebSocket('ws://localhost:8080/ws')

const messageList = reactive([
  {
    id: 1,
    name: '小明',
    content: '你好啊',
    newCount: 3,
    time: '2021-10-10 10:10:10'
  },
  {
    id: 2,
    name: '小红',
    content: '你好啊',
    newCount: ref(5),
    time: '2021-10-10 10:10:10'
  },
  {
    id: 3,
    name: '小明',
    content: '你好啊',
    newCount: 0,
    time: '2021-10-10 10:10:10'
  },
  {
    id: 4,
    name: '小红',
    content: '你好啊',
    newCount: 0,
    time: '2021-10-10 10:10:10'
  },
  {
    id: 5,
    name: '小明',
    content: '你好啊',
    newCount: 3,
    time: '2021-10-10 10:10:10'
  }
])
const emits = defineEmits(['updateMessage'])
const update = () => {
  let total = 0
  messageList.forEach(item => {
    total += item.newCount
  })
  emits('updateMessage', total)
  return total;
}


onMounted(() => {
      emits('updateMessage', update())
    }
)
</script>

<template>
  <div class="wrapper">
    <el-card shadow="hover" v-for="item in messageList" :key="item.id" class="messageItem"
             body-style="padding: 0;width: 100%;height: 100%;
                          display: flex;
                          align-items: center;
                          justify-content: center;"
             @click="router.push('/chat/'+item.id)"
    >
      <div class="messageItemLeft">
        <el-avatar :size="50"/>
      </div>
      <div class="messageItemRight">
        <div class="messageItemRightTop">
          <span class="name">{{ item.name }}</span>
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