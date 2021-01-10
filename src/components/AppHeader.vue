<template>
  <el-row class="header-wrap" type="flex" justify="space-between">
    <div class="logo-wrap">
      <a href="#"><img src="../assets/logo.png" alt="logo"/></a>
    </div>
    <el-col class="hidden-xs-only" :span="10">
      <el-menu class="menu" mode="horizontal" >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">分类</el-menu-item>
        <el-menu-item index="3">标签</el-menu-item>
        <el-menu-item index="4">归档</el-menu-item>
      </el-menu>
    </el-col>
    <el-col class="hidden-xs-only" :span="6">
      <el-input size="small" placeholder="请输入内容" prefix-icon="el-icon-search">
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.header-wrap {
  height: 100%;
}

.logo-wrap {
  height: 100%;
}

.logo-wrap img {
  height: 100%;
}

.menu{
  display: flex;
  justify-content: center;
}
.{
  vertical-align: middle;
}
</style>