<script setup>
import {onMounted, reactive, ref} from 'vue'
import NewAd from "@/components/ad/NewAd.vue";
import Message from "@/components/ad/Message.vue";
import {useStore} from "@/store";
import {getAd, removeAd} from "@/api/ad";
import {jwtDecode} from "jwt-decode";
import {ElMessage} from "element-plus";
import AdDetail from "@/components/ad/AdDetail.vue";

const activeName = ref('first')
const token = localStorage.getItem('token')
const userId = jwtDecode(token)['用户Id']
const lookDialog = ref(false)

const getAds = () => {
  getAd(userId).then((res) => {
    console.log(res.data.data)
    tableData.value = res.data.data
    //修改每个tableData中的对象的startTime为前19个字符
    tableData.value.forEach((item) => {
      item.startTime = item.startTime.substring(0, 19)
    })
  })
}
getAds()
//删除推广
const deleteAd = (id) => {
  removeAd(id).then((res) => {
    if (res.data.code === 200) {
      ElMessage.success('删除成功')
      //根据id删除tableData中的对象
      tableData.value = tableData.value.filter((item) => {
        return item.id !== id
      })
      console.log(tableData.value)
    } else {
      ElMessage.error('删除失败')
    }
  })
}

const dialogVisible = ref(false)

const tableData = ref([
  {
    startTime: '',
    id: '',
    duration: '',
    position: '',
    content: ''
  }
])

const selectAd = ref({})
const toDetail = (row) => {
  selectAd.value = row
  lookDialog.value = true
}

const newMessage = ref(0)
const updateMessage = (message) => {
  newMessage.value = message
}

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="推广" name="first" lazy>
      <div class="wrapper">
        <h2>推广列表</h2>
        <el-table :data="tableData" stripe border style="width: 80%">
          <el-table-column prop="id" label="ID" width="180"/>
          <el-table-column prop="startTime" label="创建时间" width="180"/>
          <el-table-column prop="duration" label="持续时间" width="180"/>
          <el-table-column prop="position" label="广告位置" width="180"/>
          <el-table-column prop="content" label="广告内容" show-overflow-tooltip/>
          <el-table-column label="操作" width="180">
            <template #default="scope">
              <el-button type="success" size="small" @click="toDetail(scope.row)">查看</el-button>
              <el-button type="danger" size="small" @click="deleteAd(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" style="margin: 2vh" size="large" @click="dialogVisible=true">＋新建推广</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="消息" name="second">
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

  <el-dialog
      v-model="lookDialog"
      title="推广详情"
      width="50%"
  >
    <AdDetail :adDetail="selectAd"/>
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