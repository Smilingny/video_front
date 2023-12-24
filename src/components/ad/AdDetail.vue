<script setup>
const props = defineProps({
  adDetail: {}
})
</script>

<template>
  <div>
    <div class="info">
      <span>广告内容：</span>
      {{ adDetail.content }}
    </div>
    <div class="info">
      <span>广告图片：</span>
      <img :src="adDetail.image" alt="广告图片" style="width: 100px; height: 100px">
    </div>
    <div class="info">
      <span>广告位置：</span>
      <span v-if="adDetail.position === 1">首页</span>
      <span v-else>视频详情页</span>
    </div>
    <div class="info">
      <span>广告持续时间：</span>
      {{ adDetail.duration }}
    </div>
    <div class="info">
      <span>广告创建时间：</span>
      {{ adDetail.startTime }}
    </div>
    <div class="info">
      <span>点击量：</span>
      {{ adDetail.clicks }}
    </div>
    <div class="info">
      <span>转化数：</span>
      {{ adDetail.conversions }}
    </div>
    <div class="info">
      <span>转化率：</span>
      {{ adDetail.conversionRate }}
    </div>
  </div>

</template>

<style scoped>
.info {
  margin: 1.5rem 1rem;
}

.info span {
  display: inline-block;
  font-weight: bold;
  width: 7rem;
}
</style>