<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getLocalStorage} from "@/common";

const router = useRouter()
/*获取相应的值*/
const route = useRoute()
const info = ref()
info.value = getLocalStorage('info')
function goToLetterIconView() {
  router.push('/letterIconView')
}
onMounted(()=>{
  /*显示获取到的数据结构*/
  console.log(info.value.url)
})
</script>

<template>
  <div class="wrapper">
    <div class="myHeader">
  <span style="left: 0;position: absolute;margin-left: 1vw;color: white;font-size: 8vw">
      <i class="fas fa-angle-left" @click="goToLetterIconView"></i>
    </span>
      <div class="title">
        <span>{{ route.params.Title }}</span>
      </div>
    </div>
<!--中间部分呈现相应的信息-->
    <div class="middle">
      <div class="list">
        <div class="item">
          <div class="date">
          <p>{{ info.date }}</p>
          </div>

          <!--头像和消息部分-->
          <div class="iconAndInfo">
            <div class="icon">
              <el-avatar :size="45" :src="info.url" style="margin-left: 2vw"/>
            </div>
            <div class="info">
              <el-card >
                <p style="font-size: 4vw">{{ info.content }}</p>
              </el-card>
            </div>
          </div>
        </div>
      </div>
<!--日期部分-->

    </div>


    <!--底部-->
    <div class="footer">
      <div class="left">
        <el-input type="text"></el-input>
      </div>
      <div class="right">
        <el-button>发送</el-button>
      </div>
    </div>
  </div>
  <!--头部-->

</template>

<style scoped>
.wrapper{
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.wrapper .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #8ec3eb;

  height: 15vw;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.wrapper .footer .left{
  margin-left: 2vw;
  width: 80vw;
}
.wrapper .footer .right{
   margin-left: 2vw;
  width: 20vw;
   margin-right: 2vw;
}
/*中间部分样式的设定*/
.wrapper .middle{
  margin-top: 15vw;
  display: flex;
  flex-direction: column;
}
.wrapper .middle .list{
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.wrapper .middle .list .item{
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.wrapper .middle .list .item .date{
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
/*头像和信息部分*/
.wrapper .middle .list .item .iconAndInfo{
  display: flex;
  justify-content: space-around;
  width: 100vw;

}
.wrapper .middle .list .item .iconAndInfo .icon{
  width: 20vw;

}
.wrapper .middle .list .item .iconAndInfo .info{
  width: 80vw;
  margin-right: 2vw;

}
</style>