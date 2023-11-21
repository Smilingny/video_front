<script setup>

</script>

<template>
  <div class="content">
    <div class="top"></div>
    <RouterView/>
    <div class="bottom"></div>
  </div>
</template>

<style scoped>
.content {
  background-color: #f7f8fa;
  height: 100vh;
}

.bottom {
  height: 6vh;
  width: 100vw;
  background-color: lightskyblue;
  position: fixed;
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