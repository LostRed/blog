<template>
  <div class="footer-wrap">
    <el-row class="footer-top" type="flex" justify="space-between">
      <el-col class="my-info" :span="6">
        <div class="title">关于我</div>
        <div class="content">
          <span class="link">
            <el-link type="info" href="https://github.com/LostRed" target="_blank">Github</el-link>
          </span>
          <span class="link">
            <el-link type="info" href="https://blog.csdn.net/LostRed" target="_blank">CSDN</el-link>
          </span>
        </div>
      </el-col>
      <el-col class="introduce" :span="18">
        <div class="title">lostred.info</div>
        <div class="content">
          <p>这是我的个人博客，分享一些编程、写作、音乐甚至是其他的内容，由于网站初建，后续内容会慢慢填坑</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="about">
      <div class="copyright">Copyright &copy; 2021 - 2022 designed by LostRed</div>
      <div class="report">闽ICP备2020021117号</div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>


.footer-top {
  padding: 20px 0;
  border-bottom: 1px solid #4b5054;
}

.title {
  text-align: center;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;

}

.content {
  font-size: 14px;
}

.link {
  margin-right: 10px;
}

.my-info {
  padding-right: 20px;
}

.introduce {
  border-left: 1px solid #4b5054;
  padding-left: 20px;
}

.about {
  text-align: center;
  padding: 10px 0;
}

.copyright, .report {
  padding: 5px 0;
  font-size: 14px;
}
</style>