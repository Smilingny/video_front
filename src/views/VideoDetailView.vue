<script setup>
import Video from "@/components/video/Video.vue";
import VideoInfo from "@/components/video/VideoInfo.vue";
import Comment from "@/components/video/Comment.vue";
</script>

<template>
  <!--  视频-->
  <Video/>
  <!--  广告-->
  <div class="ad">这是一条广告</div>

  <van-tabs style="margin: 0 1rem">
    <!--    视频简介-->
    <van-tab title="简介" name="info" style="margin-top: 1rem">
      <VideoInfo/>
    </van-tab>
    <!--    评论-->
    <van-tab title="评论" name="comments" style="margin-top: 1rem">
      <Comment/>
    </van-tab>

  </van-tabs>
</template>
<style scoped>


.ad{
  height: 8vh;
  width: 100vw;
  background-color: #f7f8fa;
  border-bottom: 1px solid #ebedf0;
}

</style>