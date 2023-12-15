<script setup>

/*部分组件使用了element-plus*/

/*使用showValue来存储对话消息*/
import {ref} from "vue";
/*使用响应式的对象数组存储消息数据*/
const showValue = ref()
/*使用对象数组来存储数据*/
const show = [
  {
    /*假设属性只有用户头像和相应的内容*/
    /*内容*/
    content:'你好',
    /*头像URL对方*/
    url:null,
    /*设定相应的状态:通过不同的状态来使用不同的样式格式*/
    state:0
  },
  {
    /*假设属性只有用户头像和相应的内容*/
    /*内容*/
    content:'你好',
    /*头像URL本人*/
    url:null,
    /*设定相应的状态:通过不同的状态来使用不同的样式格式*/
    state:1
  },
]
/*通过赋值的方式来实现响应更新*/
showValue.value = show
/*存储需要发送的信息*/
const sendMsg = ref()

/*存储不变的用户信息:可能暂时用不到*/
const userInfo =ref()

/*发送后页面变化的函数*/
function send(){
  if(sendMsg.value!==null){
    const addNews = {
      content:sendMsg.value,
      url:null,
      state:1,
    }
    show.push(addNews)
    showValue.value = show
    /*清空发送数据*/
    sendMsg.value=null
    console.log(showValue)
  }

}
</script>

<template>
<div class="wrapper">
<!--头部-->
  <div class="Header">
    <div class="title">
      <span>消息</span>
    </div>
  </div>
<!--中间部分-->
  <!--中间部分呈现相应的信息：作为接收方-->
  <div class="middle">
    <!--接收方数据显示-->
    <div class="list">
      <div class="date">
        <p>2023-12-10</p>
      </div>
      <div class="item" v-for="item in showValue" >
        <!--头像和消息部分--接收方： 显示要求：state:0-->
        <div class="iconAndInfo" v-if="item.state===0">
          <div class="icon">
            <!--显示头像的基本信息-->
            <el-avatar :size="45" :src="item.url" style="margin-left: 2vw;"/>
          </div>
          <div class="info">
             <div class="chatCart">
              <!--显示发送请求的基本信息:样式设计可以实现自动换行-->
              <p >{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!--发送方-->
        <div class="iconAndInfo" v-if="item.state===1">
          <div class="info" style="margin-left: 18vw">
            <div class="info">
              <div class="chatCart">
                <!--显示发送请求的基本信息:样式设计可以实现自动换行-->
                <p >{{ item.content }}</p>
              </div>
            </div>
          </div>
          <div class="icon">
            <!--显示头像的基本信息-->
            <el-avatar :size="45" :src="item.url" style="margin-left: 2vw"/>
          </div>
        </div>
      </div>
    </div>

  </div>
<!--尾部-->
  <div class="footer">
    <div class="left">
      <el-input type="text" v-model="sendMsg"></el-input>
    </div>
    <div class="right">
      <el-button @click="send">发送</el-button>
    </div>
  </div>
</div>
</template>

<style scoped>
.wrapper{
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.wrapper .Header{
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 15vw;

  background-color: #8ec3eb;
  justify-content: space-around;
  align-items: center;
}
.wrapper .Header .title{
  color: white;
  font-size: 6vw;
}
/*尾部样式*/
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
.wrapper .middle .list .item .iconAndInfo .info .chatCart{
  background-color: #8ec3eb;
  width:64vw;
  display: flex;
  border-radius: 2.5vw;

}
.wrapper .middle .list .item .iconAndInfo .info .chatCart p{
 font-size: 3.5vw;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin-left: 2vw;
  color: white;
}
</style>