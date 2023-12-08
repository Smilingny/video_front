<script setup>
import {reactive, toRefs} from "vue";
import Footer from "@/components/Footer.vue";
import {useRouter} from "vue-router";

const state = reactive({
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})

const {url} = toRefs(state)
const router = useRouter()
/*路由到相应的编辑界面*/
function goToEdite(){
  router.push('/editeUserInfo')
}
/*前往后台管理界面*/
function goToBack(){
  router.push('/backgroundView')
}
</script>

<template>
  <div class="wrapper">
    <!--头部-->
    <div class="header">
      <!--头像部分-->
      <div class="top">
        <!--头像-->
        <div class="left" style="width: 20%">
          <el-avatar :size="45" :src="url" style="margin-left: 2vw"/>
        </div>
        <!-- 相关个人信息-->
        <div class="right" style="width: 80%">
          <span style="color: white">用户昵称</span>
          <i class="fas fa-edit" style="margin-left: 5vw;color: white" @click="goToEdite"></i>
        </div>
      </div>
      <!--数据显示部分-->
      <div class="bottom">
        <!--显示块-->
        <div class="data" style=" border-right: 1px solid var(--el-border-color);">
          <span>12</span>
          <p>动态</p>
        </div>
        <div class="data" style=" border-right: 1px solid var(--el-border-color);">
          <span>12</span>
          <p>关注</p>
        </div>
        <div class="data">
          <span>12</span>
          <p>粉丝</p>
        </div>
      </div>
    </div>
    <!--    中间部分-->
    <div class="center">
      <!--视频相关-图标-->
      <div class="video-icon">
        <div class="icon">
          <i class="far fa-folder"></i>
          <p>离线缓存</p>
        </div>
        <div class="icon">
          <i class="fas fa-history"></i>
          <p>历史记录</p>
        </div>
        <div class="icon">
          <i class="far fa-star"></i>
          <p>我的收藏</p>
        </div>
        <div class="icon">
          <i class="fas fa-pen"></i>
          <p>创作中心</p>
        </div>
      </div>
      <!--自定义模块_1-->
      <div class="model_1">
        <span>推荐服务</span>
       <div class="content">
         <div class="row">
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
         </div>
         <div class="row">
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
         </div>
         <div class="row">
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
         </div>
         <div class="row">
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
           <div class="col">
             <i class="far fa-star"></i>
             <p>文字</p>
           </div>
         </div>
       </div>
      </div>
      <div class="model_1">
        <span>更多服务</span>
        <div class="content">
          <div class="line">
<!--图标-->
            <div class="left">
              <i class="fas fa-users"></i>
              <span>联系客服</span>
            </div>
<!--            图标-->
            <div class="right">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
          <div class="line">
            <!--图标-->
            <div class="left">
              <i class="fas fa-users"></i>
              <span>后台管理</span>
            </div>
            <!--            图标-->
            <div class="right">
              <i class="fas fa-angle-right" @click="goToBack"></i>
            </div>
          </div>
          <div class="line">
            <!--图标-->
            <div class="left">
              <i class="fas fa-users"></i>
              <span>设置</span>
            </div>
            <!--            图标-->
            <div class="right">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
}

.wrapper .header {
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 35vw;

}

.wrapper .header .top {
  width: 100vw;
  height: 20vw;
  background-color: #8ec3eb;
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.wrapper .header .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 15vw;
  background-color: #8ec3eb;
}

.wrapper .header .bottom .data {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 10vw;
  margin-left: 2vw;
  margin-top: 3vw;
  margin-right: 2vw;

}

.wrapper .header .bottom .data p {
  margin-top: 1vw;
  font-size:3vw;
  color: aliceblue;
}

.wrapper .header .bottom .data span {
  color: white;
}

.wrapper .center {
  margin-top: 35vw;
}

.wrapper .center .video-icon {
  width: 100vw;
  height: 15vw;
  background-color: #153860;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper .center .video-icon div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2vw;
  margin-top: 3vw;
  margin-right: 2vw;
}

.wrapper .center .video-icon .icon i {
  margin-top: 2vw;
  color: #8ec3eb;
  font-size: 6vw;
}

.wrapper .center .video-icon .icon p {
  font-size: 3.5vw;
  margin-top: 2vw;
  color: white;
}
.wrapper .center .model_1{
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #8ec3eb;
}
.wrapper .center .model_1 span {
 color: white;
  margin-top: 2vw;
  font-size: 3.5vw;
  margin-left: 2vw;
}

.wrapper .center .model_1 .content{
  display: flex;
  width: 100vw;
  flex-direction: column;
}
.wrapper .center .model_1 .content .row{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper .center .model_1 .content .row .col{
  margin-left: 2vw;
  margin-top: 3vw;
  margin-right: 2vw;
}
.wrapper .center .model_1 .content .row p{
  font-size: 3.5vw;
  margin-top: 2vw;
  color: white;
}
.wrapper .center .model_1 .content .row i{
  font-size: 6vw;
  color: white;
}
.wrapper .center .model_2 span{
  color: white;
  margin-top: 2vw;
  font-size: 3.5vw;
  margin-left: 2vw;
}
.wrapper .center .model_1 .content  .line{
  width: 100vw;
  height: 10vw;
  background-color: #8ec3eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper .center .model_1 .content .line .left i {
  margin-left: 2vw;
  font-size: 5vw;
  color: white;
}
.wrapper .center .model_1 .content .line .right i{
  margin-right: 2vw;
  font-size: 5vw;
  color: white;
}
</style>