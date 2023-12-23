<script setup>
import VideoInfo from "@/components/video/VideoInfo.vue";
import Comment from "@/components/video/Comment.vue";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import ArtVideo from "@/components/video/ArtVideo.vue";
import {getVideoInfo} from "@/api/video";
import {getAllAds, clickAd, convertAd} from "@/api/ad";
import {useStore} from "@/store";


const router = useRouter();
const store = useStore()
// 监听class为ad的div，当其顶部到达窗口顶部时，修改head的透明度
window.addEventListener('scroll', function () {
  const ad = document.querySelector('.ad');
  const head = document.querySelector('.head');
  const adButton = ad.getBoundingClientRect().bottom;
  if (adButton <= 50) {
    head.style.opacity = 1;
    head.style.backgroundColor = 'white';
    head.style.borderBottom = '1px solid #ebedf0';
    head.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  } else {
    head.style.opacity = 0.4;
  }
})

const id = router.currentRoute.value.query.id
const head = ref(true)

const owner = ref('')
const ownerId = ref()
const title = ref('')
const info = ref('')
const url = ref('')

//获取视频详细信息
getVideoInfo(id).then((res) => {
  const data = res.data.data;
  owner.value = data.username;
  ownerId.value = data.userId;
  title.value = data.title;
  info.value = data.briefIntro;
  url.value = data.url;
  console.log(url.value)
})

const showAd = ref(false)
const clickedAd = ref({})
const oneAd = ref({})
//获取广告
if (store.ads.length === 0) {
  getAllAds().then((res) => {
    const data = res.data.data
    console.log(data)
    //将data逐个存入ads中，只存入position值为1的广告
    data.forEach((item) => {
      if (item.position === 1) {
        store.ads.push(item)
      }
    })
    oneAd.value = store.getAdById(3)
  })
}


//点击广告
const clickAdvertisement = (id) => {
  clickAd(id).then((res) => {
    console.log(res.data)
    showAd.value = true
    clickedAd.value = store.getAdById(id)
    console.log(ad)
  })
}

//转化广告
const convertAdvertisement = (id) => {
  convertAd(id).then((res) => {
    console.log(res.data)
  })
}

</script>


<template>
  <div class="wrapper">
    <div class="head" v-if="head">
      <van-icon name="arrow-left" size="2rem" @click="router.go(-1)"/>
    </div>

    <!--  视频-->
    <ArtVideo @click="head=!head" :id="id" :url="url"/>

    <!--  广告-->
    <div class="ad" @click="clickAdvertisement(oneAd.id)" v-if="oneAd">
      <p>{{ oneAd.content }}</p>
      <img :src="oneAd.pictureUrl" alt="广告图片"/>
    </div>

    <van-tabs style="margin: 0 1rem" sticky offset-top="5vh">
      <!--    视频简介-->
      <van-tab title="简介" name="info" style="margin-top: 1rem">
        <VideoInfo :owner-id="ownerId" :owner="owner" :info="info" :title="title"/>
      </van-tab>
      <!--    评论-->
      <van-tab title="评论" name="comments" style="margin-top: 1rem">
        <Comment/>
      </van-tab>
    </van-tabs>
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
.wrapper {
  position: relative;
}

.head {
  position: fixed;
  top: 0;
  padding: 0 0.5rem;
  z-index: 999;
  width: 100vw;
  height: 5vh;
  background-color: white;
  opacity: 0.3;
  display: flex;
  align-items: center;
}

.ad {
  height: 8vh;
  width: 100vw;
  background-color: #f7f8fa;
  border-bottom: 1px solid #ebedf0;
}

.adWrapper {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>