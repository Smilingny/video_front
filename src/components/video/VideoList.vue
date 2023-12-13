<script setup>

import {ref} from "vue";

const title = ref('教父Ⅱ解说')
const time = ref('06-01')
const videoLength = ref('11:46')
</script>

<template>

  <div class="wrapper">
    <div class="img">
      <img src="../../../public/god.jpg" style="height: 100%;width:100%;border-radius: 5px" alt="poster"/>
    </div>
    <div>
      <p style="height: 50%;margin: 0;">{{ title }}</p>
      <p style="color: gray; margin: 0">{{ time }}</p>
      <p style="color: gray; margin-top: 5px;">{{ videoLength }}</p>
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