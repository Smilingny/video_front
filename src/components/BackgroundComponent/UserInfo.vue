<script setup>
/*设置显示的假数据*/
import {ref} from "vue";

const tableData = ref([
  {
    userId:10001,
    userName:"张三",
    passwd:123456,
    age:12,
    sex:"男",
    profilePhone:null,
    phone:123456789,
    email:123456
  },


])
</script>

<template>
  <div class="wrapper">
    <!--搜索功能区域-->
    <div class="search">
      <el-input v-model="search" placeholder="请输入关键字" clearable/>
      <!--      clearable:清空操作-->
      <el-button type="primary" style="margin-left: 2vw">查询</el-button>
      <el-button type="success" style="margin-left: 2vw">新增</el-button>
    </div>
    <!--数据显示区域-->
    <div class="showDate">
      <el-table
          :data="tableData"
          border
          stripe
          style="width:100%"
      >
        <!--设置用户管理中可能字段-->
        <el-table-column prop="userId" label="用户编号"/>
        <el-table-column prop="userName" label="用户名"/>
        <el-table-column prop="passwd" label="密码"/>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column prop="sex" label="性别"/>
        <el-table-column prop="phone" label="联系电话" width="95"/>
        <el-table-column prop="email" label="邮箱"/>




        <!--操作部分-->
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm title="确认删除吗?" @confirm="handleDelete( scope.row.id)">
              <!--            @confirm="handleDelete( scope.row.id)" :起到了一个确认删除的效果-->
              <template #reference>
                <el-button
                    size="small"
                    type="danger"

                >删除</el-button
                >
              </template>
            </el-popconfirm>

          </template>
        </el-table-column>


      </el-table>
    </div>


  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 60vw;
  flex-direction: column;
}

.wrapper .search {
  margin-left: 2vw;
  margin-top: 2vw;
  display: flex;
  width: 70vw;
  align-items: center;
  justify-content: space-between;

}

.wrapper .showDate {
  margin-top: 2vw;
  margin-left: 2vw;
  width: 80vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>