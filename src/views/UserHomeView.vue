<script setup>

import {ref} from "vue";
import VideoList from "@/components/video/VideoList.vue";
import router from "@/router";

const avatar = ref('../../public/god.jpg')
const fans = ref(12)
const follow = ref(12)
const like = ref(12)
const name = ref('黑马')

const loading = ref(false)
const finished = ref(false)
const pageNumber = ref(1)
const pageSize = 20;
const videoList = ref(10)

const nextPage = () => {
  videoList.value += 10;
  setTimeout(() => {
    console.log(loading.value)
    loading.value = false
    console.log(loading.value)
  }, 3000)

  if (videoList.value > 40) {
    finished.value = true;
  }
}
</script>

<template>
  <div class="headBar">
    <van-icon name="arrow-left" size="2rem" @click="router.go(-1)"/>
  </div>

  <!--  首部背景图-->
  <div class="headBack"></div>

  <div class="headInfo">
    <!--    头像-->
    <van-image round width="5rem" height="5rem" :src="avatar" class="avatar"/>

    <div style="width: 50vw">
      <div class="info">
        <div class="fans">
          <div>{{ fans }}</div>
          <div style="color: darkgray;margin-top: 3px;">粉丝</div>
        </div>

        <div class="follow">
          <div>{{ follow }}</div>
          <div style="color: darkgray;margin-top: 3px;">关注</div>
        </div>

        <div class="like">
          <div>{{ like }}</div>
          <div style="color: darkgray;margin-top: 3px;">获赞</div>
        </div>
      </div>

      <van-button type="primary" style="width: 100%;height: 2rem;margin-top: 1rem">＋ 关注</van-button>
    </div>

  </div>
  <h3 style="margin-left: 2rem;">{{ name }}</h3>
  <van-divider :style="{borderColor: 'gray'}"/>
  <van-divider>动态</van-divider>

  <!--    视频列表-->
  <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="nextPage"
  >
    <div class="videoList">
      <VideoList v-for="i in videoList"/>
    </div>
  </van-list>
</template>

<style scoped>
.headBar {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5vh;
  background-color: white;
  border-bottom: 1px solid #ebedf0
}

.headBack {
  width: 100vw;
  height: 20vh;
  background-color: skyblue;
}

.headInfo {
  display: flex;
  height: 13vh;
}

.avatar {
  margin: 2rem;
  top: -3.5rem;
  border: 3px solid white;
}

.info {
  text-align: center;
  margin-top: 1rem;
  width: 50vw;
  display: flex;
  justify-content: space-between;
}

.videoList {
  margin: 1rem;
}
</style>