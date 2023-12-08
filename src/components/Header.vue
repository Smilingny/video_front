<script setup>


import {reactive, toRefs} from "vue";
import {Message, Search} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";


const state = reactive({
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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

  <header>
    <!--头部部分-->
    <div class="header-part_0">
      <el-avatar :size="28" :src="url"/>
    </div>
    <!--  搜索框部分-->
    <div class="header-part_1" @click="goToSearchResult">
      <el-input placeholder="搜索" :prefix-icon="Search" size="small"></el-input>
    </div>
    <!-- 信封部分-->
    <div class="header-part_2">
        <el-icon color="white" size="7vw" @click="goToLetter">
          <Message/>
        </el-icon>
    </div>
  </header>
  <!--  标签页-->

  <!--文字显示部分-->
</template>
<style scoped>
header {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 15vw;
  background-color: #8ec3eb;
  justify-content: space-between;
  align-items: center;
}

header .header-part_0 {

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9vw;
  width: 10vw;
  margin-right: 2vw;
}

header .header-part_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 7;
  height: 8vw;
  width: 10vw;
  margin-right: 2vw;
}

header .header-part_2 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  height: 8vw;
  width: 10vw;
}

</style>