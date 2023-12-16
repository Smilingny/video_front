<script setup>
import {ref} from "vue";
import VideoCard from "@/components/video/VideoCard.vue";
import {showToast} from "vant";
import {getVideoList} from "@/api/video";

const refreshLoading = ref(false)
const count = ref(0)

const images = ref([1, 2, 3, 4, 5])
const loading = ref(false)
const finished = ref(false)
const pageNumber = ref(1)
const pageSize = 20;
const videoList = ref([])

getVideoList().then((res) => {
  videoList.value = res.data.data
  console.log(videoList.value.length)
}).catch((err) => {
  console.log(err)
})
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    refreshLoading.value = false;
    count.value++;
  }, 1000);
}
const nextPage = () => {
  videoList.value.length += 10;
  setTimeout(() => {
    console.log(loading.value)
    loading.value = false
    console.log(loading.value)
  }, 3000)

  if (videoList.value.length > 40) {
    finished.value = true;
  }
}
</script>

<template>
  <div class="content">
    <van-pull-refresh :v-model="refreshLoading" @refresh="onRefresh">
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
          <div v-for="video in videoList">
            <VideoCard :video="video"/>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
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
