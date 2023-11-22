<script setup>

import {ref} from "vue";

const avatar = ref('../../public/god.jpg')
const owner = ref('黑马')
const isFollow = ref(true)
const title = ref('教父Ⅱ解说')
const info = ref('《教父第二部》是1974年上映的一部美国电影，由弗朗西斯·福特·科波拉执导，是《教父》三部曲的第二部。这部电影被认为是电影史上最杰出的作品之一，也是商业上的成功，获得了广泛的赞誉和奖项。')
const activeName = ref([])

// 点击关注
function follow() {
  isFollow.value = !isFollow.value
}

// 取消关注
function cancelFollow() {
  isFollow.value = !isFollow.value
}
</script>

<template>
  <!--  创作者-->
  <div class="owner">
    <div style="display: flex; align-items: center">
      <van-image round width="3rem" height="3rem" :src="avatar"/>
      <h3 style="margin: 0 1rem">{{ owner }}</h3>
    </div>

    <!--    关注按钮-->
    <van-button round type="success" v-if="isFollow" @click="follow" class="follow">＋关注</van-button>
    <van-button round type="default" v-if="!isFollow" @click="cancelFollow" class="follow">已关注</van-button>
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

.info{
  margin-top: 1rem;
}

</style>