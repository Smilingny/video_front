<script setup>

import {Search} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {ElMessage} from "element-plus";

const router = useRouter()
function goToIndex(){
  router.push('/')
}
/*添加一些搜索假数据*/
const searchInfo = ref([
    {
      title:"标题",
      content:"视频简介",
      time:"4:15",
      url:"../../public/god.jpg"
    },
  {
    title:"标题",
    content:"视频简介",
    time:"4:15",
    url:"../../public/god.jpg"
  },
  {
    title:"标题",
    content:"视频简介",
    time:"4:15",
    url:"../../public/god.jpg"
  },
  {
    title:"标题",
    content:"视频简介",
    time:"4:15",
    url:"../../public/god.jpg"
  }
])
/*实现搜索显示和隐藏的逻辑*/

/*存储用户的搜索词*/
const searchKey = ref()
/*存储搜索结果的状态：1为检索到，0为未检索到*/
const searchResult  =ref(0);
function search(){
  console.log(searchKey.value)
  /*这里使用假数据来进行判断*/
  if (searchKey.value==="标题"){
    searchResult.value=1
    ElMessage.success('搜索成功')
  }
  else {
    searchResult.value=0
    ElMessage.error('搜索失败')
  }
}
</script>

<template>
<div class="wrapper">
<!--头部-->
  <div class="myHeader">
    <span style="left: 0;position: absolute;margin-left: 1vw;color: white;font-size: 8vw">
      <i class="fas fa-angle-left" @click="goToIndex"></i>
    </span>
    <div class="title" style="margin-left: 4vw">
      <el-input placeholder="请输入搜索内容"
                :prefix-icon="Search"
                size="small"
                style="width: 70vw"
                v-model="searchKey"
                clearable
      ></el-input>
    </div>
    <div class="btn">
      <el-button type="primary" round size="small" @click="search" >搜索</el-button>
    </div>
  </div>
<!--查询结果部分-->
<!--默认为空状态-->
  <div class="empty" v-if="searchResult===0">
    <el-empty description="空空如也"/>
  </div>
  <div class="list" v-else>
    <div class="item" v-for="item in searchInfo" >
<!--左边图片区-->
      <div class="left">
        <div class="img">
        <img :src="item.url" alt=""/>
        </div>
        <div class="imgInfo">
<!--播放时长-->
          <div class="time" style="color: white;font-size: 3vw">{{ item.time }}</div>
        </div>
      </div>
<!-- 右边文字区-->
      <div class="right">
        <div class="title">
          <p style="margin-top: 2vw">{{ item.title }}</p>
        </div>
        <div class="content" style="font-size: 3.5vw;color: #666;">{{ item.content }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.wrapper{
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.wrapper .list{
  margin-top: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper .empty{
  margin-top: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper .list .item{
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  height: 25vw;
  background-color: white;
  /*设置相应的间距*/
  margin: 2vw;
  box-shadow: 2px 2px 3px 2px rgba(0.2, 0.2, 0.2, 0.2);
}
.wrapper .list .item .left{
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper .list .item .left .img{
  height: 20vw;
  width: 85%;
  border-radius: 5px 5px 0 0;
  background-color: lightblue;
}
.wrapper .list .item .left .img img{
  height: 100%;
  width:100%;
  border-radius: 5px
}
.wrapper .list .item .left .imgInfo{
  position: absolute;
  right: 4vw;
  bottom: 0;
  margin: 1vw;
  height: 1rem;
}
.wrapper .list .item .right{
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>