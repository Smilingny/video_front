<script setup>

import Header from "@/components/Header.vue";
import {Plus} from "@element-plus/icons-vue";
const  url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>
  <div class="wrapper">
    <!--头部-->
    <div class="header">
<!--    <span style="left: 0;position: absolute">-->
<!--      <i class="fas fa-angle-left"></i>-->
<!--    </span>-->
      <div class="title">
        <span>上传视频</span>
      </div>
    </div>
    <!--  视频相关-->
<!--    <div class="select">-->
<!--      <div class="left" style="flex: 1;margin-left: 4vw">-->
<!--        <el-image style="width: 35vw; height: 35vw" :src="url" :fit="fit" />-->
<!--      </div>-->
<!--      <div class="right" style="flex: 1">-->
<!--        <el-upload list-type="picture-card"  >-->
<!--          <el-icon><Plus /></el-icon>-->
<!--        </el-upload>-->
<!--      </div>-->

<!--    </div>-->
<!--    &lt;!&ndash;文字部分的&ndash;&gt;-->
<!--    <div>-->
<!--      <p style="margin-left: 2vw">描述信息</p>-->
<!--      <el-form>-->
<!--        <el-form-item label="简介" prop="region" style="margin-left: 2vw">-->
<!--          <el-input  type="textarea" style="width: 70vw"/>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </div>-->
    <!--底部-->
<!--    <div class="bottom">-->
<!--      &lt;!&ndash;取消按钮&ndash;&gt;-->
<!--      <el-button>取消</el-button>-->
<!--      &lt;!&ndash;上传&ndash;&gt;-->
<!--      <el-button>确定</el-button>-->

<!--    </div>-->
</div>

</template>

<style scoped>
.wrapper{
  width: 100%;
  height: 100%;
}
.wrapper .header {
  width: 100vw;
  height: 14vw;
  background-color: #8ec3eb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper .header .title{

  color: white;
  font-size: 6vw;
}
.wrapper header span i {
  margin-left: 2vw;
  color: white;
  font-size: 8vw;
}
.wrapper .select{
  width: 100vw;
  height: 40vw;
  display: flex;
  margin-top: 2vw;
  margin-left: 2vw;
  align-items: center;
  justify-content: space-between;
}
.bottom {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #8ec3eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>