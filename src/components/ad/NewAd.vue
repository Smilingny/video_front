<script setup>
import {reactive, ref} from "vue";
import {Delete, Download, Plus, ZoomIn} from '@element-plus/icons-vue'
import {jwtDecode} from "jwt-decode";
import {saveAd} from "@/api/ad";
import {ElMessage} from "element-plus";

const adRef = ref(null)
const token = localStorage.getItem('token')
const userId = jwtDecode(token)['用户Id']

const adInfo = reactive({
  duration: 1,
  position: '1',
  content: '',
  image: '',
  advertiserId: userId
})

const rules = ref({
  content: [
    {required: true, message: '请输入广告名称', trigger: 'blur'},
    {min: 2, max: 1000, message: '长度在 2 到 1000 个字符', trigger: 'blur'}
  ],
  duration: [
    {required: true, message: '请输入持续时间', trigger: 'blur'},
    {min: 1, max: 1000, message: '请输入1-1000的数字', trigger: 'blur'}
  ],
  position: [
    {required: true, message: '请输入广告内容', trigger: 'blur'},
    {min: 10, max: 100, message: '长度在 10 到 100 个字符', trigger: 'blur'}
  ]
})


const reset = () => {
  adInfo.duration = 1;
  adInfo.content = '';
  adInfo.position = '1';
  adImage.value = []
}

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const adImage = ref([])
const handleRemove = (file) => {
  adImage.value = [];
  console.log(file)
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  console.log(file.url);
  dialogVisible.value = true
}

//提交新广告
const submit = () => {
  adInfo.image = adImage.value[0].raw
  adInfo.position = parseInt(adInfo.position)
  const formData = new FormData()
  formData.append('image', adInfo.image)
  formData.append('duration', adInfo.duration)
  formData.append('position', adInfo.position)
  formData.append('content', adInfo.content)
  formData.append('advertiserId', adInfo.advertiserId)
  saveAd(formData)
      .then((res) => {
        ElMessage.success('新推广创建成功！')
      })
      .catch((err) => {
        ElMessage.error(err)
      })
}

const handleImage = (image) => {
  adImage.value = [image]
}
</script>

<template>
  <el-form
      ref="adRef"
      label-position="left"
      label-width="100px"
      :model="adInfo"
      :rules="rules"
  >
    <el-form-item label="广告内容" prop="content">
      <el-input v-model="adInfo.content" :rows="5" type="textarea"/>
      <img :src="adInfo.image" alt=""/>
    </el-form-item>
    <el-form-item label="广告图片">

      <!--      图片上传-->
      <el-upload action="#" list-type="picture-card" :on-change="handleImage"
                 :auto-upload="false" :limit="1" :file-list="adImage">
        <el-icon>
          <Plus/>
        </el-icon>

        <!--        预览-->
        <template #file="{ file }">
          <div>
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
            <span class="el-upload-list__item-actions">
          <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in/></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
          >
            <el-icon><Delete/></el-icon>
          </span>
        </span>
          </div>
        </template>
      </el-upload>

      <!--   图片预览-->
      <el-dialog v-model="dialogVisible">
        <img :src="dialogImageUrl" alt="Preview Image" style="width: 100%;height: 100%"/>
      </el-dialog>
    </el-form-item>

    <el-form-item label="持续时间" prop="duration">
      <el-input-number v-model="adInfo.duration" :min="1" :max="1000"/>
      <span>&nbsp;天</span>
    </el-form-item>
    <el-form-item label="广告位置" prop="position">
      <el-radio-group v-model="adInfo.position">
        <el-radio label="1">首页</el-radio>
        <el-radio label="2">视频页</el-radio>
      </el-radio-group>
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