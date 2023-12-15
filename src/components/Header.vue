<script setup>


import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";


const state = reactive({
  url: '../../public/1.jpg',
})

const {url} = toRefs(state)
const router = useRouter()
/*导向信封页面*/
function goToLetter(){
  router.push('/letterIconView')
}

/*搜索导向函数，直接导向搜索结果界面*/
function goToSearchResult(){
  router.push('/searchResult')
}
</script>

<template>
<!--  导航栏部分-->
  <van-nav-bar
      title="sho"
      left-arrow
      style="--van-nav-bar-height:15vw"
  >
    <template #left>
      <van-image
          round
          width="10vw"
          height="10vw"
          :src="url"
      />
    </template>
    <template #title>
      <van-search v-model="value" placeholder="请输入搜索关键词"
      style="--van-search-input-height:10vw"
      />
    </template>
    <template #right >
      <van-icon name="envelop-o" size="6vw" @click="goToLetter"/>
    </template>
  </van-nav-bar>

</template>
<style scoped>


</style>