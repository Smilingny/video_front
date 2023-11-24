<script setup>
import {onMounted, ref} from 'vue';
import Dplayer from 'dplayer';

const videoPlayer = ref(null);
let dp;
import vueDanmaku from 'vue3-danmaku'

const danmus = ref(['danmu1', 'danmu2', 'danmu3', '...'])
onMounted(() => {
  dp = new Dplayer({
    container: videoPlayer.value,
    video: {
      url: 'ynu.mp4',
      type: 'auto',
      pic: 'god.jpg'
    },
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    hotkey: true,
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    danmaku: {
      id: '9E2E3368B56CDBB4',
      api: 'https://api.prprpr.me/dplayer/',
      token: 'tokendemo',
      maximum: 1000,
      user: 'DIYgod',
      bottom: '15%',
      unlimited: true,
      speedRate: 0.5,
    },
  });

});




</script>

<template>
  <div class="videoBox" ref="box" @click="full">
    <div ref="videoPlayer" class="video"></div>
  </div>
</template>


<style scoped>
.videoBox {
  position: relative;
  overflow: hidden;
}


.video {
  width: 100vw;
}

</style>