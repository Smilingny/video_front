

<script setup>
import { ref } from 'vue';

const videoPlayer = ref(null);

const togglePlay = () => {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
  } else {
    videoPlayer.value.pause();
  }
}

// 判定双击事件
let lastTouchTime = 0;
const handleTouch = () => {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTouchTime;
  if (tapLength < 500 && tapLength > 0) {
    togglePlay(); // 触发双击事件后执行播放暂停切换
  }
  lastTouchTime = currentTime;
};

const showTools = () => {
  console.log('showTools');
};
</script>

<template>
  <div>
    <video ref="videoPlayer" class="video" autoplay @touchstart="handleTouch" >
      <source src="../../../public/ynu.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>


<style scoped>
.videoBox{
  width: 100vw;
  position: relative;

}

.video {
  width: 100vw;
}

.tools{
  position: absolute;
  top:0;
}
</style>