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
/*存储发送方的默认信息*/
const showValue = ref()
const show = [
  {
    /*假设属性只有用户头像和相应的内容*/
    /*内容*/
    content:'你好',
    /*头像URL*/
    url:'../../public/1.jpg',
    /*设定相应的状态:通过不同的状态来使用不同的样式格式*/
    state:0
  },
  {
    /*假设属性只有用户头像和相应的内容*/
    /*内容*/
    content:'你好',
    /*头像URL*/
    url:'../../public/2.jpeg',
    /*设定相应的状态:通过不同的状态来使用不同的样式格式*/
    state:1
  },
]
showValue.value = show
onMounted(()=>{
  /*显示获取到的数据结构*/
  console.log(info.value.url)
})
/*消息显示存储变量*/


/*存储发送的信息*/
const sendMsg =ref("")
/*发送后消息的显示效果函数*/
function send(){
  const addNews = {
    content:sendMsg.value,
    url:'../../public/2.jpeg',
    state:1,

  }
  show.push(addNews)
  showValue.value = show
  sendMsg.value=null
  console.log(showValue)
}
</script>

<template>
  <div class="wrapper">
<!--头部-->
    <div class="myHeader">
  <span style="left: 0;position: absolute;margin-left: 1vw;color: white;font-size: 8vw">
      <i class="fas fa-angle-left" @click="goToLetterIconView"></i>
    </span>
      <div class="title">
        <span>{{ route.params.Title }}</span>
      </div>
    </div>
<!--中间部分呈现相应的信息：作为接收方-->
    <div class="middle">
<!--接收方数据显示-->
      <div class="list">
        <div class="date">
          <p>{{ info.date }}</p>
        </div>
        <div class="item" v-for="item in showValue" >
          <!--头像和消息部分--接收方： 显示要求：state:0-->
          <div class="iconAndInfo" v-if="item.state===0">
            <div class="icon">
              <!--显示头像的基本信息-->
              <el-avatar :size="45" :src="item.url" style="margin-left: 2vw;"/>
            </div>
            <div class="info">
              <el-card >
                <!--显示发送请求的基本信息:样式设计可以实现自动换行-->
                <p style="font-size: 3.5vw;
                    white-space: pre-line;
                    word-wrap: break-word;
                    overflow-wrap: break-word;">{{ item.content }}</p>
              </el-card>
            </div>
          </div>
          <!--发送方-->
          <div class="iconAndInfo" v-if="item.state===1">
            <div class="info" style="margin-left: 20vw">
              <el-card >
                <!--显示发送请求的基本信息-->
                <p style="font-size: 4vw;
                    white-space: pre-line;
                    word-wrap: break-word;
                    overflow-wrap: break-word;">{{ item.content }}</p>
              </el-card>
            </div>
            <div class="icon">
              <!--显示头像的基本信息-->
              <el-avatar :size="45" :src="item.url" style="margin-left: 2vw"/>
            </div>
          </div>
        </div>
      </div>

    </div>


    <!--底部-->
    <div class="footer">
      <div class="left">
        <el-input type="text" v-model="sendMsg"></el-input>
      </div>
      <div class="right">
        <el-button @click="send">发送</el-button>
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
  margin-bottom: 15vw;
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
/*日期样式是居中对齐*/
.wrapper .middle .list .date{
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
/*头像和信息部分*/
.wrapper .middle .list .item .iconAndInfo{
  margin-top: 2vw;
  display: flex;
  width: 100vw;
  align-items: center;

}
.wrapper .middle .list .item .iconAndInfo .icon{
  width: 16vw;

}
.wrapper .middle .list .item .iconAndInfo .info{
  width: 65vw;
  margin-right: 2vw;

}
</style>