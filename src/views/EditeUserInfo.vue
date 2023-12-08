<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
function goToUserInfo(){
  router.push('/info')
}
</script>

<template>
<div class="wrapper">
  <!--头部-->
  <div class="myHeader">
    <span style="left: 0;position: absolute;margin-left: 1vw;color: white;font-size: 8vw">
      <i class="fas fa-angle-left" @click="goToUserInfo"></i>
    </span>
    <div class="title">
      <span>账号资料</span>
    </div>
  </div>
<!--资料编辑部分-->
  <div class="main">
    <div class="line">
      <div class="left" style="margin-left: 2vw;font-size: 5vw;color: white">
       头&nbsp;像
      </div>
      <div class="right">
        <div class="info">
          <el-avatar :size="45" src="../../public/1.jpg" style="margin-right: 2vw"/>
          <i class="fas fa-angle-right" style="margin-right: 2vw;color: white"></i>
        </div>
      </div>
    </div>
    <div class="line">
      <div class="left" style="margin-left: 2vw;font-size: 5vw;color: white">
        昵&nbsp;称
      </div>
      <div class="right">
        <div class="info">
          <p style="color: white;margin-right: 2vw">用户昵称</p>
          <i class="fas fa-angle-right" style="margin-right: 2vw;color: white"></i>
        </div>
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
.wrapper .main{
  margin-top: 15vw;
  display: flex;
  flex-direction: column;

}
.wrapper .main .line{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vw;
  background-color: #8ec3eb;


}
.wrapper .main .line .right{
  display: flex;
  align-items: center;
  width: 70%;
  position: relative;
}
.wrapper .main .line .right .info{
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
}
.wrapper .main .line .left{
  width: 30%;
}
</style>