<script setup>


import {reactive, toRefs} from "vue";
import {Message, Search} from "@element-plus/icons-vue";

const state = reactive({
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})

const {url} = toRefs(state)
</script>

<template>

  <header>
    <!--头部部分-->
    <div class="header-part_0">
      <el-avatar :size="28" :src="url"/>
    </div>
    <!--  搜索框部分-->
    <div class="header-part_1">
      <el-input placeholder="搜索" :prefix-icon="Search" size="small"></el-input>
    </div>
    <!-- 信封部分-->
    <div class="header-part_2">
      <el-badge value="1" class="item">
        <el-icon color="white" size="8vw">
          <Message/>
        </el-icon>
      </el-badge>
    </div>
  </header>
  <!--  标签页-->
  <div class="tabs">
    <el-tabs  class="demo-tabs"   type="border-card">
      <el-tab-pane label="推荐" name="first">
        <span>中间部分内容</span>
      </el-tab-pane>
      <el-tab-pane label="热门" name="second">
        <span>可以填写在这个位置</span>
      </el-tab-pane>
      <el-tab-pane label="饮食" name="third">
        <span>实现自然切换</span>
      </el-tab-pane>
      <el-tab-pane label="游戏" name="fourth">
        <span>要注意头部</span>
      </el-tab-pane>
    </el-tabs>

  </div>
  <!--文字显示部分-->
</template>

<style scoped>
header {
  position: fixed;
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

/*设置消息数样式*/
header .header-part_2 .item {
  margin-top: 2vw;
  margin-right: 2vw;
}
.tabs{
  margin-top: 15vw;
  width: 100vw;

}

</style>