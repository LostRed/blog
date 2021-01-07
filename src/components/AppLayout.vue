<template>
  <el-container>
    <el-header>
      <slot name="header"></slot>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
    <el-footer>
      <slot name="footer"></slot>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "AppLayout"
}
</script>

<style scoped>
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