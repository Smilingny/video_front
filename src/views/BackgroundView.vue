<script setup>

import BackgroundHeader from "@/components/BackgroundHeader.vue";
import BackgroundAside from "@/components/BackgroundAside.vue";
</script>

<template>
  <div class="wrapper">
    <!--  头部-->
    <BackgroundHeader/>
    <!--  侧边栏-->
    <div style="display: flex">
      <BackgroundAside/>
      <!--内容区域-->
      <RouterView style="flex: 1"/>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>