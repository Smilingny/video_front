<script setup>
import {reactive, ref} from "vue";
import {Delete, Download, Plus, ZoomIn} from '@element-plus/icons-vue'

const adRef = ref(null)

const adInfo = reactive({
  duration: 1,
  adPosition: 'firstPage',
  content: '',
  createTime: '',
})

const rules = ref({
  content: [
    {required: true, message: '请输入广告名称', trigger: 'blur'},
    {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
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
const submit = () => {
  console.log(adInfo.adPosition)
}

const reset = () => {
  adInfo.duration = 1;
  adInfo.content = '';
  adInfo.adPosition = 'firstPage';
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
    </el-form-item>
    <el-form-item label="广告图片">

      <!--      图片上传-->
      <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1" :file-list="adImage">
        <el-icon>
          <Plus/>
        </el-icon>

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
      <el-radio-group v-model="adInfo.adPosition">
        <el-radio label="firstPage">首页</el-radio>
        <el-radio label="videoPage">视频页</el-radio>
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