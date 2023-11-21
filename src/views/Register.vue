<script setup>
import { ref } from "vue";
import router from "@/router";
import {showToast} from "vant";

const account = ref('');
const password = ref('');
const confirmPassword = ref('');

const checkPassword = () => {
  if (password.value !== confirmPassword.value) {
    return '两次输入的密码不匹配';
  }
};

const toLogin = () => {
  console.log('toLogin');
  router.push('/login');
};

const onSubmit = (values) => {
  console.log('submit', values);
  showToast({
    message: '注册成功',
    type: 'success',
    duration: 1000,
  });
  toLogin();
};
</script>

<template>
  <div class="register">
    <h2>注册账号</h2>
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
        <van-field
            v-model="confirmPassword"
            type="password"
            name="confirmPassword"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请再次填写密码' },
             { validator: checkPassword }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>


<style scoped>
.register {
  height: 100vh;
  width: 100vw;
  background-color: #f7f8fa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register h2 {
  margin-bottom: 2rem;
}
</style>