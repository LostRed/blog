<template>
    <el-card class="box-card">
        <div>
            <div class="article-cover">
                <el-image :src="article.cover" fit="cover" class="cover-image">
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
            <h1>{{ article.title }}</h1>
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
                <div class="info-item">
                    <i class="el-icon-view"></i> {{ article.hot }}
                </div>
                <div class="info-item">
                    <a href="#">
                        <el-tag size="mini" type="info">{{ article.catalogue }}</el-tag>
                    </a>
                </div>
            </div>
            <p>{{ article.content }}</p>
        </div>
    </el-card>
</template>

<script>
export default {
    name: "ArticleCard",
    data() {
        return {
            article: {
                id: 0,
                title: '文章标题',
                content: '文章内容',
                cover: 'example.jpg',
                author: 'lostred',
                avatar: 'avatar.jpg',
                gmtCreate: '2020-01-25',
                hot: 0,
                catalogue: 'Java'
            }
        }
    },
    created() {
        if (this.$route.params.article) {
            this.article = this.$route.params.article;
        }
    }
}
</script>

<style scoped>
.box-card {
    width: 100%;
}

.article-info {
    display: flex;
    align-items: center;
    font-size: 12px;
}

.info-item {
    margin-right: 20px;
}
</style>