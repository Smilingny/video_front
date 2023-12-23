<script setup>
import {onMounted, ref} from "vue";
import Tabs from "@/components/ad/Tabs.vue";
import JoinForm from "@/components/ad/JoinForm.vue";
import {UserFilled} from "@element-plus/icons-vue";
import {applyState, getAdApplyList} from "@/api/ad";

const userId = localStorage.getItem('userId')

// 0表示没有加入广告服务，1表示正在审核中，2表示已加入广告服务
const state = ref(0)
const dialogVisible = ref(false)


const updateJoined = () => {
  state.value = 2
  dialogVisible.value = false
}

onMounted(() => {
  applyState(userId).then((res) => {
    state.value = res.data.status
  })
})

</script>


<template>
  <div class="common-layout" style="background-color: #ebedf0">
    <el-container>
      <el-header class="header">
        <h2>广告服务</h2>
        <el-avatar style="margin-left: auto;" :icon="UserFilled"/>
      </el-header>
      <el-main class="main">
        <div v-if="state===0" class="notJoin">
          <el-empty description="您还没有开通广告服务"/>
          <el-button type="primary" @click="dialogVisible=true">加入广告服务</el-button>
        </div>
        <div v-else-if="state===2" class="notJoin">
          <el-empty description="正在审核中"/>
          <el-progress
              :percentage="100"
              status="warning"
              :indeterminate="true"
              :duration="2"
          />
        </div>
        <Tabs v-else/>
      </el-main>
    </el-container>
  </div>

  <el-dialog
      v-model="dialogVisible"
      title="加入广告服务"
      width="60%"
      height="80%"
  >
    <div class="joinPanel">
      <JoinForm @updateJoin="updateJoined"/>
    </div>

  </el-dialog>
</template>


<style scoped>
.header {
  width: 98vw;
  margin: 1vh 1vw;
  height: 8vh;
  border-radius: 5px;
  background-color: #8ec3eb;
  display: flex;
  align-items: center;
}

.main {
  width: 94vw;
  margin: 1vh 3vw;
  height: 88vh;
  border-radius: 5px;
  background-color: white;
}

.notJoin {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.joinPanel {
  width: 100%;
}

.el-progress--line {
  width: 20vw;

}
</style>