<script setup>
import {ref} from "vue";
import router from "@/router";
import {showToast} from "vant";
import {login} from "@/api/user";

const route = router.currentRoute.value;
const account = ref('');
const password = ref('');
const onSubmit = (user) => {
  console.log('submit', user);
  login(user).then((res) => {
    console.log(res.data);
    if (res.data) {
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('userInfo', JSON.stringify(res.data.data.userInfo));
      localStorage.setItem('userId', res.data.data.userInfo.id);
      localStorage.setItem('userName', res.data.data.userInfo.username);
      showToast({
        message: '登录成功',
        type: 'success',
        duration: 1000,
      });

      const currentRoutePath = route.matched[0].path;
      console.log(currentRoutePath);
      // 根据不同的登录页面进行判断
      if (currentRoutePath === '/login') {
        router.push('/'); // 这里是普通用户的主页路径
      } else if (currentRoutePath === '/ad/login') {
        router.push('/ad'); // 这里是广告用户的主页路径
      } else if (currentRoutePath === '/admin/login') {
        router.push('/admin-home'); // 这里是管理员的主页路径
      }
    }
  }).catch((err) => {
    console.log(err);
    showToast({
      message: '登录失败',
      type: 'fail',
      duration: 1000,
    });
  })

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
            name="username"
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