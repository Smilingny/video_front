<script setup>
import {reportVideo} from "@/api/video";
import {ref} from "vue";
import router from "@/router";
import {showFailToast, showSuccessToast} from "vant";
import {jwtDecode} from "jwt-decode";

const token = localStorage.getItem('token')
const userId = jwtDecode(token)['用户Id']

const props = defineProps({
  video: {
    type: Object,
    default: () => {
      return {
        id: 1,
        title: '教父Ⅱ解说',
        coverUrl: '../../public/god.jpg'
      }
    }
  }
})
const videoHot = ref('123')
const videoLike = ref('234')
const videoLength = ref('11:46')
const videoOwner = ref('黑马')
const showButton = ref(false)
const feedback = ref('')

function submitReport() {
  reportVideo(userId, props.video.id, feedback.value).then((res) => {
    console.log(res.data)
    showSuccessToast('举报成功')
  }).catch((err) => {
    console.log(err)
    showFailToast('举报失败')
  })
}

const toDetail = () => {
  router.push({path: '/videoDetail/' + props.video.id, query: {id: props.video.id}})
}
</script>

<template>
  <!--  电影卡片-->
  <div class="card">
    <div class="card-part1" @click="toDetail">
      <!--      图片-->
      <div class="img">
        <img :src="props.video.coverUrl" style="height: 100%;width:100%;border-radius: 5px" alt="poster"/>
      </div>
      <div class="imgInfo">
        <!--        弹幕数-->
        <div class="info">
          <van-icon name="play-circle-o"/>
          <p>{{ video.sumDanMu }}</p>
        </div>

        <!--        点赞人数-->
        <div class="info">
          <van-icon name="comment-o"/>
          <p>{{ video.sumComment }}</p>
        </div>

        <!--        视频时长-->
        <div class="info">
          <p>{{ videoLength }}&nbsp;</p>
        </div>
      </div>
    </div>
    <div class="card-part2">

      <!--      视频标题-->
      <p @click="toDetail" class="title van-ellipsis">{{ props.video.title }}</p>
      <div class="owner">

        <!--        视频作者-->
        <p style="font-size: 0.7rem" class="van-ellipsis">{{ videoOwner }}</p>

        <!--        举报按钮-->
        <van-icon @click="showButton=!showButton" name="question-o"/>
      </div>
    </div>

  </div>

  <!--    举报信息弹窗-->
  <van-popup
      v-model:show="showButton"
      position="bottom"
      :style="{ height: '30%' }"
  >
    <div style="display: flex;justify-content: center;flex-direction: column">
      <h2 style="text-align: center;margin: 1rem">举报</h2>
      <van-field
          v-model="feedback"
          label="举报内容"
          placeholder="输入举报内容"
          :rules="[{ required: true, message: '请填写密码' }]"/>
      <van-button @click="submitReport" type="primary" style="margin: 1rem">提交举报</van-button>
    </div>
  </van-popup>
</template>

<style scoped>
.card {
  border-radius: 5px;
  width: 45vw;
  height: 20vh;
  background-color: white;
  margin: 2vw 0 0 2vw;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
}

.card-part1 {
  position: relative;
  height: 65%;
}

.card-part2 {
  position: relative;
  padding: 1vw;
  height: 35%;
}

.img {
  height: 100%;
  border-radius: 5px 5px 0 0;
  background-color: lightblue;
}

.imgInfo {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1vw;
  height: 1rem;
  padding-right: 1vw;
  width: 98%;
  color: white;
  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  align-items: center;
}

.title {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.owner {
  width: 96%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: grey;
}
</style>