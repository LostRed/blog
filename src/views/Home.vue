<template>
  <el-container>
    <el-header>
        <nav></nav>
    </el-header>
    <el-main>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import nav from '../components/Nav'

export default {
  name: "home",
  components: {
    nav
  }
}
</script>

<style>
.el-container {
  min-height: 100%;
}

.el-header {
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
}

.el-footer {
  background-color: black;
  color: #fff;
  line-height: 60px;
}
</style>