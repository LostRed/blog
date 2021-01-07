<template>
  <el-row class="header-wrap">

    <el-col class="logo-wrap" :xs="12" :sm="7" :md="8" :lg="8" :xl="8">
      <a href="#"><img src="../assets/logo.png" alt="logo"/></a>
    </el-col>
    <el-col :xs="0" :sm="10" :md="8" :lg="8" :xl="8" style="background: #8c939d">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">分类</el-menu-item>
        <el-menu-item index="3">标签</el-menu-item>
        <el-menu-item index="4">归档</el-menu-item>
      </el-menu>
    </el-col>
    <el-col class="search-wrap" :xs="12" :sm="7" :md="8" :lg="8" :xl="8">
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
  text-align: center;
}

.logo-wrap img {
  height: 100%;
}
</style>