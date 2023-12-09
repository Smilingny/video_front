<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
<div class="wrapper">
  <Header/>
  <div class="main">
    <RouterView/>
  </div>
  <Footer/>
</div>
</template>

<style scoped>
.wrapper {
  position: relative;
  height: 100vh;
}

.main {
  background-color: #f7f8fa;
  position: relative;
  padding-top: 7vh;
  padding-bottom: 7vh;
}


</style>