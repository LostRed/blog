<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>最新文章</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <div v-for="article in articleList" :key="article.id" class="text item">
            <el-link @click="toArticle(article)" :underline="false">{{ article.title }}</el-link>
        </div>
    </el-card>
</template>

<script>
export default {
    name: "NewCard",
    data() {
        return {
            articleList: []
        }
    },
    methods: {
        getNewArticleList() {
            this.$axios.get('/api/blog/article/',
                {
                    params: {
                        column: 'gmt_create',
                        current: 1,
                        size: 5
                    }
                })
                .then(response => {
                    this.articleList = response.data.data.records;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        toArticle(article) {
            this.$router.push({
                name: 'Article',
                params: {
                    id: article.id
                }
            });
        }
    },
    created() {
        // 调用后端api
        this.getNewArticleList();
    }
}
</script>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 100%;
    margin-bottom: 20px;
}
</style>
