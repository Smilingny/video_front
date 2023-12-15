<script setup>
import {Uploader} from 'vant';
import {Delete, Download, Plus, Upload, UploadFilled, ZoomIn} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const router = useRouter()

function goToIndex() {
  router.push('/')
}
/*存储视频封面的基本信息*/
const uploadImg = ref()
/*存储视频的相关信息*/
const uploadVideoInfo = ref({
  title: "",
  explain: ""
})
/*存储上传的文件*/
const uploadVideo = ref()
/*存储视频的url*/
const videoUrl = ref("")
function show() {
  console.log(uploadVideo)
}
/*给视频进行相应的赋值*/
function handleVideoSc(file) {
  /*存储文件的相应信息*/
  videoUrl.value = file.content
}
/*弹窗的控制*/
const showVideoPlay = ref(false)

/*默认的开关为关*/
const checked = ref(false);
</script>

<template>
  <div class="wrapper">
    <!--头部-->
    <van-nav-bar
        title="视频上传"
        left-text="返回"
        left-arrow
        @click-left="goToIndex"
        style="--van-nav-bar-height:15vw"
    />

    <div class="middle">
      <!--视频上传-->
      <div>
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <!--视频上传-->
            <van-field name="视频上传" label="视频上传">
              <template #input>
                <van-uploader
                    v-model="uploadVideo"
                    multiple :max-count="1"
                    accept="video/*"
                    preview-full-image
                    :after-read="handleVideoSc"
                />
                <!--       accept="*":接受所有的文件类型
                          preview-full-image：支持全图预览-->
              </template>
            </van-field>
            <!--视频预览效果-->
            <van-field name="show" label="视频预览">
              <template #input>
                <van-switch v-model="checked"/>
                <van-dialog v-model:show="checked"
                            title="标题" show-cancel-button
                            :show-cancel-button="false"
                            :show-confirm-button="false"
                >
                  <video
                      controls
                      preload="auto"
                      style="width:100%;height:200px;object-fit: contain;"
                      :src="videoUrl"
                      v-if="videoUrl"
                  ></video>
                </van-dialog>
              </template>
            </van-field>
            <!--封面设置-->
            <van-field name="uploader" label="封面设置">
              <template #input>
                <!--限制上传的文件个数为1-->
                <van-uploader v-model="uploadImg" multiple :max-count="1"/>
              </template>
            </van-field>
            <!-- 视频标题-->
            <van-field
                v-model="uploadVideoInfo.title"
                name="视频标题"
                label="视频标题"
                placeholder="视频标题"
                :rules="[{ required: true, message: '请填写视频标题' }]"
            />
            <!-- 视频简介-->
            <van-field
                v-model="uploadVideoInfo.explain"
                rows="2"
                autosize
                label="视频简介"
                type="textarea"
                maxlength="50"
                placeholder="请输入视频简介"
                show-word-limit
            />
          </van-cell-group>
          <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
              上传
            </van-button>
          </div>
        </van-form>
      </div>
    </div>


  </div>

</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

}

.wrapper .header {
  width: 100vw;
  height: 14vw;
  background-color: #8ec3eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper .header .title {
  color: white;
  font-size: 6vw;
}

.wrapper .select {
  margin-top: 3vw;
  display: flex;
  flex-direction: column;
  height: 40vw;
}

.wrapper .select .title {
  margin-bottom: 2vw;
  margin-left: 2vw;
}

.wrapper .select .uploadInfo {
  display: flex;

}

.bottom {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #8ec3eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20vw;
}

.wrapper .middle {
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-bottom: 20vw;
}

.wrapper .middle .videoShow .title {
  display: flex;
  align-items: center;
  margin-left: 2vw;
}
</style>