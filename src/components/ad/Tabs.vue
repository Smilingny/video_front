<script setup>
import {reactive, ref} from 'vue'
import NewAd from "@/components/ad/NewAd.vue";
import Message from "@/components/ad/Message.vue";
import {useStore} from "@/store";

const store = useStore()
const activeName = store.activeTab

const handleClick = (tab, event) => {
  console.log(activeName.value)

}

const dialogVisible = ref(false)
const tableData = reactive([
  {
    createTime: '2016-05-03',
    name: 'Tom',
    duration: '3天',
    adPosition: '首页',
    content: '广告内容',
  },
  {
    createTime: '2016-05-03',
    name: 'Tom',
    duration: '3天',
    adPosition: '首页',
    content: '广告内容',
  },
  {
    createTime: '2016-05-03',
    name: 'Tom',
    duration: '3天',
    adPosition: '首页',
    content: '广告内容',
  },
  {
    createTime: '2016-05-03',
    name: 'Tom',
    duration: '3天',
    adPosition: '首页',
    content: '广告内容',
  }
])

const newMessage = ref(0)
const updateMessage = (message) => {
  newMessage.value = message
}
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first">
      广告数据的展示
    </el-tab-pane>
    <el-tab-pane label="推广" name="second">
      <div class="wrapper">
        <h2>推广列表</h2>
        <el-table :data="tableData" stripe border style="width: 80%">
          <el-table-column prop="name" label="名称" width="180"/>
          <el-table-column prop="createTime" label="创建时间" width="180"/>
          <el-table-column prop="duration" label="持续时间" width="180"/>
          <el-table-column prop="adPosition" label="广告位置" width="180"/>
          <el-table-column prop="content" label="广告内容"/>
        </el-table>
        <el-button type="primary" style="margin: 2vh" size="large" @click="dialogVisible=true">＋新建推广</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="商业合作" name="third">商业合作</el-tab-pane>
    <el-tab-pane name="four">
      <template v-slot:label>
        <el-badge :value="newMessage" class="item" :hidden="newMessage===0">
          <span style="padding: 7px">消息</span>
        </el-badge>
      </template>
      <Message @updateMessage="updateMessage"/>
    </el-tab-pane>
  </el-tabs>

  <el-dialog
      v-model="dialogVisible"
      title="新建推广"
      width="60%"
  >
    <NewAd/>
  </el-dialog>
</template>

<style scoped>
.demo-tabs {
  height: 100%;
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>