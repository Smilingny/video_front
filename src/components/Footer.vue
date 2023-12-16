<script setup>

import {useRouter} from "vue-router";
import {ref} from "vue";

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
/*存储相应的激活方式*/
const active =ref(0)
</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o"  @click="goToIndex">首页</van-tabbar-item>
    <van-tabbar-item icon="search" @click="goToUploadVideo">上传</van-tabbar-item>
    <van-tabbar-item icon="cash-o">购物</van-tabbar-item>
    <van-tabbar-item icon="manager-o"  @click="goToInfo">我的</van-tabbar-item>
  </van-tabbar>
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