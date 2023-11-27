<script setup>
import {onMounted, ref} from "vue";
import Artplayer from "artplayer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";

const artRef = ref(null)

onMounted(() => {
  const art = new Artplayer({
    container: artRef.value,
    url: 'ynu.mp4',
    autoMini: true,
    setting: true,
    hotkey: true,
    fullscreen: true,
    miniProgressBar: true,
    autoOrientation: true,
    plugins: [
      artplayerPluginDanmuku({
        // 弹幕数组
        danmuku: [
          {
            text: '111', // 弹幕文本
            time: 1, // 发送时间，单位秒
            color: '#fff', // 弹幕局部颜色
            border: false, // 是否显示描边
            mode: 0, // 弹幕模式: 0表示滚动, 1静止
          },
          {
            text: '222',
            time: 2,
            color: 'red',
            border: true,
            mode: 0,
          },
          {
            text: '333',
            time: 3,
            color: 'green',
            border: false,
            mode: 1,
          },
        ],
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

  })
})
</script>

<template>
  <div ref="artRef" class="video"></div>
</template>

<style scoped>
.video {
  aspect-ratio: 20/9;
  margin-bottom: 3rem;
}
</style>