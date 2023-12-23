<script setup>
import {computed, onMounted, ref} from "vue";
import Artplayer from "artplayer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
import {getDanmu, saveDanmu, reportDanmu} from "@/api/danmu";
import {showFailToast, showSuccessToast} from "vant";

const props = defineProps({
  id: '',
  url: ''
})
const artRef = ref(null)
const testUrl = '../../../public/ynu.mp4'
const userId = localStorage.getItem('userId')
const videoId = props.id
const showBottom = ref(false)
const reportId = ref()
const reportContent = ref('')

// 举报弹幕
const report = () => {
  reportDanmu(userId, reportId.value, reportContent.value).then((res) => {
    showSuccessToast('举报成功')
  }).catch((err) => {
    showFailToast('举报失败')
    showBottom.value = false
  })
}

//获取弹幕列表
onMounted(async () => {
  const danmu = ref([])
  await getDanmu(props.id).then((res) => {
    const danmuRaw = res.data.data
    for (let i = 0; i < danmuRaw.length; i++) {
      danmu.value.push({
        time: danmuRaw[i].timeStamp,
        mode: 0,
        color: 'red',
        text: danmuRaw[i].id + '：' + danmuRaw[i].content,
      })
    }
    console.log(danmu.value)
  })

  //初始化播放器
  const art = new Artplayer({
    container: artRef.value,
    url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    setting: true,
    hotkey: true,
    autoplay: false,
    fullscreen: true,
    miniProgressBar: true,
    autoOrientation: true,
    plugins: [
      artplayerPluginDanmuku({
        // 弹幕数组
        danmuku: danmu.value,
        speed: 5, // 弹幕持续时间，单位秒，范围在[1 ~ 10]
        opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
        fontSize: 10, // 字体大小，支持数字和百分比
        color: '#FFFFFF', // 默认字体颜色
        mode: 0, // 默认模式，0-滚动，1-静止
        margin: [10, '25%'], // 弹幕上下边距，支持数字和百分比
        antiOverlap: true, // 是否防重叠
        useWorker: true, // 是否使用 web worker
        lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60]
        maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500]
        minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制
        maxWidth: 600, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度
        theme: 'light', // 输入框自定义挂载时的主题色，默认为 dark，可以选填亮色 light
      }),
    ],
    controls: [
      {
        name: '弹幕举报',
        index: 10,
        position: 'right',
        html: '<div style="border: 2px solid white; padding: 0 5px;border-radius: 5px;font-size: 0.75rem;">!</div>',
        tooltip: '弹幕举报',
        click: function () {
          showBottom.value = true
        },
      }
    ]

  })
  art.on('artplayerPluginDanmuku:emit', (danmu) => {
    saveDanmu(danmu, userId, videoId).then((res) => {
      console.log(res)
    })
  });
})
</script>

<template>
  <div ref="artRef" class="video"></div>
  <van-popup
      v-model:show="showBottom"
      position="bottom"
      :style="{ height: '30%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}"
  >
    <p>弹幕举报</p>
    <van-cell-group style="margin: 1rem">
      <van-field
          v-model="reportId"
          label="违规弹幕id"
          type="digit"
          placeholder="请输入违规弹幕id"
      />
      <van-field
          v-model="reportContent"
          label="举报内容"
          type="text"
          placeholder="请输入举报内容"
      />
    </van-cell-group>
    <van-button type="primary" @click="report">提交</van-button>
  </van-popup>
</template>

<style scoped>
.video {
  aspect-ratio: 20/9;
  margin-bottom: 3rem;
}
</style>