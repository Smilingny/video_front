<script setup>
import {onMounted, ref} from 'vue';
import Dplayer from 'dplayer';
import 'dplayer/dist/DPlayer.min.css';

const videoPlayer = ref(null);
let dp;

onMounted(() => {
  dp = new Dplayer({
    container: videoPlayer.value,
    video: {
      url: 'ynu.mp4',
      type: 'auto',
    },
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    hotkey: true,
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    danmaku: {
      id: 'BiliPlayer',
      api: 'http://localhost:8091/',
      token: 'bilibili',
      maximum: 1000,
      user: 'BiliPlayer',
      bottom: '15%',
      unlimited: true,
      speedRate: 0.5,
    },
  });

});
</script>

<template>
  <div ref="videoPlayer"></div>
</template>


<style scoped>
</style>