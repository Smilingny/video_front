<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()
function goToUserInfo(){
  router.push('/info')
}
const UserUploadImg=ref()
const sex = ref()
</script>

<template>
<div class="wrapper">
  <!--头部-->
  <van-nav-bar
      title="账号资料"
      left-arrow
      @click-left="goToUserInfo"
  />
<!--资料编辑部分-->
  <div class="main">
    <van-form>
      <van-cell-group inset>
        <van-field
            v-model="username"
            name="头像"
            label="头像"
            placeholder="头像"
        >
          <template #input>
            <!--限制上传的文件个数为1-->
            <van-uploader v-model="UserUploadImg" multiple :max-count="1"/>
          </template>
        </van-field>

        <van-field
            v-model="password"
            name="用户名"
            label="用户名"
            placeholder="请输入用户名"
        />
        <van-field
            v-model="password"
            name="年龄"
            label="年龄"
            placeholder="请输入年龄"
        />
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="sex" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</div>
</template>

<style scoped>
.wrapper{
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.wrapper .main{
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
}
.wrapper .main .line{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vw;
  background-color: #8ec3eb;
}
.wrapper .main .line .right{
  display: flex;
  align-items: center;
  width: 70%;
  position: relative;
}
.wrapper .main .line .right .info{
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
}
.wrapper .main .line .left{
  width: 30%;
}
</style>