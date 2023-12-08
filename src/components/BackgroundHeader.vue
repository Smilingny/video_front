<script setup>

/*设置退出登录部分返回的是用户界面*/
import {useRouter} from "vue-router";

const router = useRouter()
function loginOut(){
  router.push('/info')
}

</script>
<template>
  <!--总体盒子-->
  <div class="header">
    <!-- 样式中主要设置的是头部的高度，下边框样式，以及弹性布局   -->
    <div class="left">
      在线视频管理后台
    </div>
    <div class="right">
      <!--右边主要是用于处理选项的-->
      <div class="iconAndInfo">
        <el-dropdown>
<!--设置页面显示的内容-->
          <span class="el-dropdown-link" >
            <!--  头像部分    -->
             <el-avatar :size="35" src="../../public/1.jpg" style="margin-right: 2vw"/>
             <h4>admin</h4>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <!--这里的方法是点击后就退出相应的界面，这里先省略：@click="loginOut"-->
              <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #409EFF
}

.header .left {
  width: 20vw;
  padding-left: 30px;
  font-weight: 20;
  color: white;
  display: flex
}

.header .right {

  width: 80vw;
  display: flex;
  align-items: center;
  position: relative;
}
.header .right .iconAndInfo{
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 2vw;
  align-items: center;
}
.el-dropdown-link{
  display: flex;
  align-items: center;
  outline: none;
  color: white;
  font-size: 2vw
}
</style>