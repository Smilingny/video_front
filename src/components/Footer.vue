<script setup>

import {useRouter} from "vue-router";

const router = useRouter()
function goToInfo(){
  router.push('/info');
}
function goToIndex(){
  router.push('/');
}
function goToUploadVideo(){
  router.push('/uploadVideo')
}
</script>

<template>
  <div class="footer">
    <!--首页-->
    <div  @click="goToIndex">
      <i class="fas fa-home"></i>
      <p>首页</p>
    </div>
    <!--动态-->
    <div >
      <i class="fas fa-shapes"></i>
      <p>动态</p>
    </div>
    <!--视频发布-->
    <div style="background-color: #F16141;width: 8vw;height: 8vw;border-radius: 20%;margin-bottom: 2vw" @click="goToUploadVideo">
      <i class="fas fa-plus" style="font-size: 4vw" ></i>
    </div>
    <!--购物-->
    <div >
      <i class="fas fa-store"></i>
      <p>购物</p>
    </div>
    <!--我的-->
    <div  @click="goToInfo">
      <i class="fas fa-user-astronaut"></i>
      <p>我的</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 15vw;
  background-color: #8ec3eb;
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 0;
}
.footer div{
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.footer div p {
  margin-top: 1vw;
  font-size: 2.5vw;
}
</style>