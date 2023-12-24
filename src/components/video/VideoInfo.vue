<script setup>

import {onMounted, ref, watchEffect} from "vue";
import router from "@/router";
import {follow, unfollow, getFans} from "@/api/user";
import {showSuccessToast} from "vant";

const props = defineProps({
  ownerId: Number,
  owner: '',
  title: '',
  info: '',
})


const avatar = ref('../../public/god.jpg')
const isFollow = ref(false)
const activeName = ref([])
const userId = localStorage.getItem('userId')

watchEffect(() => {
  if (props.ownerId) {
    getFans(props.ownerId).then((res) => {
      const fans = res.data.data;
      for (const fan of fans) {
        if (fan.id == userId) {
          isFollow.value = true;
          break;
        }
      }
    });
  }
});


// 点击关注
function doFollow() {
  follow(userId, props.ownerId).then((res) => {
    isFollow.value = !isFollow.value
    showSuccessToast('关注成功')
  })
}

// 取消关注
function cancelFollow() {
  unfollow(userId, props.ownerId).then((res) => {
    isFollow.value = !isFollow.value
    showSuccessToast('取消关注成功')
  })
}

const toUserHome = () => {
  router.push({path: '/userHome/', query: {user: props.ownerId}})
}

</script>

<template>

  <!--  创作者-->
  <div class="owner">
    <div style="display: flex; align-items: center" @click="toUserHome">
      <van-image round width="3rem" height="3rem" :src="avatar"/>
      <h3 style="margin: 0 1rem">{{ owner }}</h3>
    </div>

    <!--    关注按钮-->
    <van-button round type="success" v-if="!isFollow" @click="doFollow" class="follow">＋关注</van-button>
    <van-button round type="default" v-if="isFollow" @click="cancelFollow" class="follow">已关注</van-button>
  </div>

  <!--  电影信息-->
  <div class="info">
    <van-collapse v-model="activeName">
      <van-collapse-item name="1">
        <template #title>
          <h2 style="margin: 0">{{ title }}</h2>
        </template>
        {{ info }}
      </van-collapse-item>
    </van-collapse>
  </div>

</template>

<style scoped>

.owner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.follow {
  height: 2rem
}

.info {
  margin-top: 1rem;
}

</style>