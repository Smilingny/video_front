<script setup>

import Header from "@/components/Header.vue";
import {Plus, UploadFilled} from "@element-plus/icons-vue";
import VideoCard from "@/components/video/VideoCard.vue";
const  url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>
  <div class="wrapper">
    <!--头部-->
    <div class="header">
    <span style="left: 0;position: absolute;margin-left: 1vw;color: white;font-size: 8vw">
      <i class="fas fa-angle-left"></i>
    </span>
      <div class="title">
        <span>上传视频</span>
      </div>
    </div>

    <div class="middle">
      <!--视频相关-->
      <div class="videoShow" style="margin-top: 2vw">
        <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            拖拽视频或 <em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">

            </div>
          </template>
        </el-upload>
      </div>

      <video  style="width: 100vw;height: 20vw" autoplay>
        <source src="../../public/ynu.mp4" type="video/mp4" />

      </video>
      <!--封面相关-->
      <div class="select">


        <div class="left" style="flex: 1;">
          <el-image style="width: 35vw; height: 25vw;margin-left: 5vw" :src="url" :fit="fit" />
        </div>
        <div class="right" style="flex: 1">
          <el-upload list-type="picture-card"  >
            <el-icon><Plus /></el-icon>
          </el-upload>
        </div>
      </div>

      <div>
        <p style="margin-left: 2vw">描述信息</p>
        <el-form>
          <el-form-item label="简介" prop="region" style="margin-left: 2vw">
            <el-input  type="textarea" style="width: 70vw"/>
          </el-form-item>
        </el-form>
      </div>
    </div>


    <div class="bottom">
      <!--取消按钮-->
      <el-button style="margin-left: 2vw" size="large" type="danger" round>取消</el-button>
      <!--上传-->
      <el-button style="margin-right: 2vw" size="large" type="success" round>确定</el-button>

    </div>
</div>

</template>

<style scoped>
.wrapper{
  width: 100%;
  height: 100%;
  box-sizing: border-box;

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
.wrapper .select{
  margin-top: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40vw;
}
.bottom{
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #8ec3eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20vw;
}
.wrapper .middle{
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-bottom: 20vw;
}
</style>