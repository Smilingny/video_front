<script setup>
import {ref} from "vue";
import router from "@/router";
import {showToast} from "vant";

const account = ref('');
const password = ref('');
const onSubmit = (values) => {
  console.log('submit', values);
  showToast({
    message: '登录成功',
    type: 'success',
    duration: 1000,
  });
  router.push('/')
};

const toRegister = () => {
  console.log('toRegister');
  router.push('/register');
};
</script>

<template>
  <div class="login">
    <h2>账号登录</h2>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="account"
            name="account"
            label="账号"
            placeholder="账号"
            :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <a class="toRegister" @click="toRegister">没有账号？去注册</a>
  </div>

</template>

<style scoped>
.login {
  height: 100vh;
  width: 100vw;
  background-color: #f7f8fa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login h2 {
  margin-bottom: 2rem;
}

.toRegister {
  text-decoration: underline;

}
</style>