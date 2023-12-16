<script setup>
/*导入相应的文件*/
import {Setting, Wallet} from "@element-plus/icons-vue";
</script>
<template>
  <div>
    <el-menu
        default-active="user"
        class="el-menu-vertical-demo"
        style="min-height: calc(100vh - 50px);"
        router
    >
      <!--style="min-height: calc(100vh - 50px):解决了侧边栏的长度问题
      default-active="user" :选择高亮的地方，默认高亮
      -->
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="user" >用户信管理</el-menu-item>
        <el-menu-item index="community" >社区管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <Wallet/>
          </el-icon>
          <span>数据统计</span>
        </template>
        <el-menu-item index="data">运营数据</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style >
</style>