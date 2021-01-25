<template>
    <el-card class="box-card">
        <div class="search-wrapper">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
        <div v-for="article in articleList" :key="article.id">
            <div class="text item">
                <div class="content-wrapper" @click="toArticle(article)">
                    <div class="article-wrapper">
                        <h3 class="article-title">{{ article.title }}</h3>
                        <p class="article-content">
                            {{ article.content }}
                        </p>
                    </div>
                    <div class="article-cover hidden-xs-only">
                        <el-image :src="article.cover" fit="cover" class="cover-image">
                            <div slot="error" class="image-slot">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                    </div>
                </div>
                <div class="article-info">
                    <div class="info-item">
                        <a href="#">
                            <el-avatar :size="30" fit="cover" :src="article.avatar">
                                <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                     alt="avatar"/>
                            </el-avatar>
                        </a>
                    </div>
                    <div class="info-item">
                        <el-link href="#" :underline="false" style="font-size: 12px;">{{ article.author }}</el-link>
                    </div>
                    <div class="info-item">{{ article.gmtCreate }}</div>
                    <div class="info-item"><i class="el-icon-view"></i> {{ article.hot }}</div>
                    <div class="info-item">
                        <a href="#">
                            <el-tag size="mini" type="info">{{ article.catalogue }}</el-tag>
                        </a>
                    </div>
                </div>
                <el-divider></el-divider>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: "HomeCard",
    methods: {
        toArticle(article) {
            this.$router.push({
                name: 'Article',
                params: {article}
            });
        }
    },
    data() {
        return {
            articleList: [{
                id: 0,
                title: '文章标题',
                content: '文章内容',
                cover: 'example.jpg',
                author: 'lostred',
                avatar: 'avatar.jpg',
                gmtCreate: '2021-01-01',
                hot: 0,
                catalogue: 'Java'
            }]
        }
    },
    mounted() {
        // 前端测试
        this.$axios.get('/mock/article.json').then(response => {
            console.log(response.data);
            this.articleList = response.data;
        });
        // 调用后端api
        // this.$axios.get('/api/blog/article/').then(response => {
        //   console.log(response.data.data);
        //   this.articleList = response.data.data.records;
        // });
    }
}
</script>

<style scoped>
.box-card {
    width: 100%;
}

.search-wrapper {
    margin-bottom: 20px;
}

.text {
    position: relative;
    font-size: 14px;
}

.content-wrapper {
    display: flex;
    justify-content: space-between;
}

.content-wrapper:hover {
    position: relative;
    top: -1px;
    left: -1px;
    cursor: pointer;
}

.content-wrapper:hover .article-wrapper {
    color: #A63030;
}

.content-wrapper:hover .article-cover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.article-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.article-cover {
    margin: 30px;
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
