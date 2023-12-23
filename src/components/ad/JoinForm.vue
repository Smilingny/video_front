<script setup>
import {applyAd} from "@/api/ad";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {jwtDecode} from "jwt-decode";

const userId = localStorage.getItem('userId')
const joinRef = ref(null)
const joinInfo = reactive({
  name: '',
  phone: '',
  content: '',
})

const reset = () => {
  joinInfo.name = ''
  joinInfo.phone = ''
  joinInfo.content = ''
}

const emits = defineEmits(['updateJoin'])
const submit = () => {
  const joinref = joinRef.value
  joinref.validate((valid) => {
    // 表单校验成功
    if (valid) {
      console.log(joinInfo)
      applyAd(userId, joinInfo.name, joinInfo.phone, joinInfo.content).then((res) => {
        console.log(res)
        ElMessage.success('提交成功')
      })
      // 触发父组件updateJoin方法
      emits('updateJoin')
    }
  })

}

//增加表单校验rules
const rules = ref({
  name: [
    {required: true, message: '请输入姓名', trigger: 'blur'},
    {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
  ],
  phone: [
    {required: true, message: '请输入电话', trigger: 'blur'},
    {min: 11, max: 11, message: '请输入11位电话号码', trigger: 'blur'}
  ],
  content: [
    {required: true, message: '请输入合作内容', trigger: 'blur'},
    {min: 10, max: 100, message: '长度在 10 到 100 个字符', trigger: 'blur'}
  ]
})
</script>

<template>
  <el-form
      ref="joinRef"
      label-position="left"
      label-width="100px"
      :model="joinInfo"
      :rules="rules"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="joinInfo.name"/>
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input v-model="joinInfo.phone"/>
    </el-form-item>
    <el-form-item label="合作内容" prop="content">
      <el-input v-model="joinInfo.content" :rows="5" type="textarea"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit"
      >提交
      </el-button
      >
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>