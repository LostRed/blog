<template>
  <el-card class="box-card">
    <h1>项目正在施工~( •̀ ω •́ )y</h1>
    <div v-for="o in 4" :key="o" class="text item">
      {{ '列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ContentCard"
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
}
</style>
