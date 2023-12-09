<script setup>
import {useRouter} from "vue-router";
import {reactive, ref, toRefs} from "vue";
import Footer from "@/components/Footer.vue";
import {setLocalStorage} from "@/common";

const router = useRouter()
function goToIndex(){
  router.push('/')
}




const state = reactive({
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
})
/*存储相应的标题信息*：假设获取到的消息中，标题内容是一个数组对象 */
const information = ref([
  {
    title:"标题1",
    url:"../../public/1.jpg",
    content:"这是标题一的内容",
    date:"2023-12-05"
  },
  {
    title:"标题2",
    url:"../../public/2.jpeg",
    content:"这是标题二的内容",
    date:"2023-12-08"

  },
  {
    title:"标题3",
    url:"../../public/3.jpeg",
    content:"这是标题三的内容",
    date:"2023-12-10"
  },
  {
    title:"标题4",
    url:"../../public/4.jpeg",
    content:"这是标题四的内容",
    date:"2023-12-15"
  },
  {
    title:"标题5",
    url:"../../public/5.jpeg",
    content:"这是标题五的内容",
    date:"2023-12-28"
  },
])
/*创建路由点击进入消息的详细界面*/
function goToDetail(item){
  /*同时传递相应不同的标题信息*/
  router.push({name:'ListItemDetail',params:{Title:item.title}})
  /*实现选择性内容的函数：点击某一条数据时将相应的头像信息进行存储和传递*/
  setLocalStorage('info',item)
}
const {url} = toRefs(state)
</script>

<template>
<div class="wrapper">
<!--头部-->
  <div class="myHeader">
    <span style="left: 0;position: absolute;margin-left: 1vw;color: white;font-size: 8vw">
      <i class="fas fa-angle-left" @click="goToIndex"></i>
    </span>
    <div class="title">
      <span>消息</span>
    </div>
  </div>
<!--图标和文字部分-->
  <div class="iconAndWords">
    <div class="part">
      <i class="fas fa-comments" style="color: greenyellow"></i>
      <span>回复我的</span>

    </div>
    <div class="part">
      <i class="fas fa-at" style="color: yellow"></i>
      <span>@我</span>
    </div>
    <div class="part">
      <i class="far fa-thumbs-up" style="color: palevioletred"></i>
      <span>收到的赞</span>
    </div>
    <div class="part">
      <i class="fas fa-paper-plane" style="color: cornflowerblue"></i>
      <span>系统通知</span>
    </div>
  </div>
<!--聊天列表部分-->
  <div class="chat">
    <div class="title">
      <p>聊天列表</p>
    </div>
    <div class="list">
      <div class="listItem" v-for="item in information" @click="goToDetail(item)">
        <div class="left">
          <el-avatar :size="45" :src="item.url" style="margin-left: 2vw"/>
        </div>
        <div class="right">
          <p>{{ item.title }}</p>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>
<!--底部相关-->
  <Footer/>
</div>
</template>

<style scoped>
.wrapper{
 display: flex;
  flex-direction: column;
  width: 100vw;

}
.wrapper .iconAndWords{
  margin-top: 15vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 30vw;
}
.wrapper .iconAndWords .part{
  background-color: #8ec3eb;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  flex-direction: column;
}
.wrapper .iconAndWords .part i{
  font-size: 8vw;
  margin-bottom: 4vw;
}
.wrapper .iconAndWords span{
  color: white;
  font-size: 4vw;
}
.wrapper .chat{
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-around;
}
.wrapper .chat .title{
  display: flex;
  align-items: center;
 background-color: #8ec3eb;

}
.wrapper .chat .title p{
  margin-top: 1vw;
  color: white;
  margin-left: 1vw;
  height: 3vw;
}
/*设置聊天列表中的相应样式*/
.wrapper .chat .list{
  margin-top: 27vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 20vw;

}
.wrapper .chat .list .listItem{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45vw;
}
.wrapper .chat .list .listItem .left{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  background-color: #8ec3eb;
  height: 15vw;
}
.wrapper .chat .list .listItem .right{
  display: flex;
  flex-direction: column;
  width: 80vw;
  background-color: #8ec3eb;
  height: 15vw;
}
/*设置标题样式*/
.wrapper .chat .list .listItem .right p{
  margin-top: 1.3vw;
  margin-left: 1.2vw;
  margin-bottom: 2vw;
  font-size: 5vw;
  color: white;
}
.wrapper .chat .list .listItem .right span{
  font-size: 3vw;
  margin-left: 1.2vw;
  color: #666;
}

</style>