<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="content">
    <div class="top">
      <Header/>
    </div>
    <RouterView/>
    <div class="bottom">
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
.content {
  background-color: #f7f8fa;
  height: 100vh;
}

.bottom {
  height: 6vw;
  width: 100vw;
  background-color: lightskyblue;
  position: fixed;
  left: 0;
  bottom: 0;
}

.top {
  height: 6vh;
  width: 100vw;
  background-color: lightskyblue;
  position: fixed;
  top: 0;
  z-index: 10
}

</style>