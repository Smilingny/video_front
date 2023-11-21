<script setup>
import {ref} from "vue";
import VideoCard from "@/components/VideoCard.vue";

const images = ref([1, 2, 3, 4, 5])

</script>

<template>
  <div class="content">
    <!--    顶部轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
      <van-swipe-item v-for="image in images">{{ image }}</van-swipe-item>
    </van-swipe>

    <div class="videoList">
      <VideoCard v-for="i in 20"/>
    </div>
  </div>

</template>

<style scoped>
.content {
  position: relative;
  top: 7vh;
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
