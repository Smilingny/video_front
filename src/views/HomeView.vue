<script setup>
import {ref} from "vue";
import VideoCard from "@/components/video/VideoCard.vue";
import {showFailToast, showSuccessToast, showToast} from "vant";
import {getVideoList} from "@/api/video";
import {getAllAds, clickAd, convertAd} from "@/api/ad";
import {useStore} from "@/store";

const store = useStore()
const refreshLoading = ref(false)
const showAd = ref(false)

const ads = store.ads
const clickedAd = ref({})
const videoList = ref([])

//获取电影列表
getVideoList().then((res) => {
  videoList.value = res.data.data
  console.log(videoList.value.length)
}).catch((err) => {
  console.log(err)
})


//获取广告
if (store.ads.length === 0) {
  getAllAds().then((res) => {
    const data = res.data.data
    console.log(data)
    //将data逐个存入ads中，只存入position值为0的广告
    data.forEach((item) => {
      if (item.position === 0) {
        store.ads.push(item)
      }
    })
  })
}

//点击广告
const clickAdvertisement = (id) => {
  clickAd(id).then((res) => {
    console.log(res.data)
    showAd.value = true
    clickedAd.value = store.getAdById(id)
  })
}

//转化广告
const convertAdvertisement = (id) => {
  convertAd(id).then((res) => {
    showSuccessToast('转化成功')
  })
}

//刷新
const onRefresh = () => {
  getVideoList().then((res) => {
    videoList.value = res.data.data
    showSuccessToast('刷新成功')
  }).catch((err) => {
    showFailToast('刷新失败')
  }).finally(() => {
    refreshLoading.value = false
  })
}
</script>

<template>
  <div class="content">
    <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
      <!--    顶部轮播图-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
        <van-swipe-item v-for="ad in ads">
          <div @click="clickAdvertisement(ad.id)">
            {{ ad.content }}
          </div>
        </van-swipe-item>
      </van-swipe>

      <!--    视频列表-->
      <div class="videoList">
        <div v-for="video in videoList">
          <VideoCard :video="video"/>
        </div>
      </div>
    </van-pull-refresh>
  </div>

  <!--  广告详情及转化-->
  <van-popup v-model:show="showAd" round :style="{ padding: '10px' }">
    <div class="adWrapper">
      <p>{{ clickedAd.content }}</p>
      <img :src="clickedAd.pictureUrl" alt="广告图片"/>
      <van-button type="primary" @click="convertAdvertisement(clickedAd.id)">转化</van-button>
    </div>
  </van-popup>
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
  height: 26vh;
}

.videoList {
  position: relative;
  display: flex;
  flex-wrap: wrap
}

.adWrapper {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
