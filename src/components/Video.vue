

<script setup>
import { ref } from 'vue';

const videoPlayer = ref(null);

const togglePlay = () => {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
  } else {
    videoPlayer.value.pause();
  }
};

const showTools = () => {

};
</script>

<template>
  <div>
    <video ref="videoPlayer" class="video" autoplay @dblclick="togglePlay" @click="showTools">
      <source src="../../public/ynu.mp4" type="video/mp4" />
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