<script setup>

import router from "@/router";

const props = defineProps({
  video: {
    type: Object,
    default: () => {
      return {
        id: 1,
        title: '教父Ⅱ解说',
        coverUrl: '../../public/god.jpg',
        duration: 10,
        publishTime: '2021-06-01'
      }
    }
  },
})
const cover = '../../public/god.jpg'

const toDetail = () => {
  router.push({path: '/videoDetail/' + props.video.id, query: {id: props.video.id}})
}
</script>

<template>

  <div class="wrapper" @click="toDetail">
    <div class="img">
      <img :src="cover" style="height: 100%;width:100%;border-radius: 5px" alt="poster"/>
    </div>
    <div>
      <p style="height: 50%;margin: 0;">{{ props.video.title }}</p>
      <p style="color: gray; margin: 0">{{ props.video.publishTime }}</p>
      <p style="color: gray; margin-top: 5px;">{{ props.video.duration }}</p>
    </div>
  </div>

</template>

<style scoped>


.wrapper {
  width: 100%;
  height: 10vh;
  margin-top: 1rem;
  display: flex;
}

.img {
  height: 100%;
  width: 36%;
  margin-right: 4%;
}
</style>