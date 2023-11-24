<script setup>
import {ref} from "vue";
import VideoCard from "@/components/video/VideoCard.vue";

const images = ref([1, 2, 3, 4, 5])
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
  <div class="content">
    <!--    顶部轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
      <van-swipe-item v-for="image in images">{{ image }}</van-swipe-item>
    </van-swipe>

    <!--    视频列表-->
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="nextPage"
    >
      <div class="videoList">
        <VideoCard v-for="i in videoList"/>
      </div>
    </van-list>
  </div>

</template>

<style scoped>
.content {
  padding: 0.5rem;
}

.my-swipe .van-swipe-item {
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  line-height: 26vh;
  text-align: center;
  background-color: #39a9ed;
}

.videoList {
  position: relative;
  display: flex;
  flex-wrap: wrap
}
</style>
