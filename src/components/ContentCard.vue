<template>
  <el-card class="box-card">
    <div class="search-wrapper">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      <div class="content-wrapper">
        <div class="article-wrapper">
          <h3 class="article-title">文章标题</h3>
          <p class="article-content">
            {{ '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容 ' + o }}
          </p>

        </div>
        <div class="article-cover hidden-xs-only">
          <el-image :src="src" fit="cover" class="cover-image">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </div>
      <div class="article-info">
        <div class="info-item">
          <a href="#">
            <el-avatar :size="30" fit="cover" :src="circleUrl">
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="avatar"/>
            </el-avatar>
          </a>
        </div>
        <div class="info-item">
          <el-link href="#" :underline="false" style="font-size: 12px;">lostred</el-link>
        </div>
        <div class="info-item">2020-01-18</div>
        <div class="info-item"><i class="el-icon-view"></i> 999</div>
        <div class="info-item">
          <a href="#">
            <el-tag size="mini" type="info">Java</el-tag>
          </a>
        </div>
      </div>
      <el-divider></el-divider>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ContentCard",
  data() {
    return {
      circleUrl: require("../../public/avatar.jpg"),
      src: require('../../public/example.jpg')
    }
  }
}
</script>

<style scoped>
.text:hover:after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: #d0aeae;
}

.text {
  position: relative;
  font-size: 14px;
}

.box-card {
  width: 100%;
}

.search-wrapper {
  margin-bottom: 20px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
}

.article-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-cover {
  padding: 30px;
}

.cover-image {
  width: 240px;
  height: 135px;
  background: #E9EEF3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.article-info {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.info-item {
  margin-right: 20px;
}

p {
  position: relative;
  height: 60px;
  overflow: hidden;
}
</style>
