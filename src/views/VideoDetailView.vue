<script setup>
import VideoInfo from "@/components/video/VideoInfo.vue";
import Comment from "@/components/video/Comment.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import ArtVideo from "@/components/video/ArtVideo.vue";


const router = useRouter();
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

const head = ref(true)


</script>


<template>
  <div class="wrapper">
    <div class="head" v-if="head">
      <van-icon name="arrow-left" size="2rem" @click="router.go(-1)"/>
    </div>

    <!--  视频-->
    <ArtVideo @click="head=!head"/>

    <!--  广告-->
    <div class="ad">这是一条广告</div>

    <van-tabs style="margin: 0 1rem" sticky offset-top="5vh">
      <!--    视频简介-->
      <van-tab title="简介" name="info" style="margin-top: 1rem">
        <VideoInfo/>
      </van-tab>
      <!--    评论-->
      <van-tab title="评论" name="comments" style="margin-top: 1rem">
        <Comment/>
      </van-tab>
    </van-tabs>
  </div>
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

</style>