<template>
    <el-card v-if="article.id" class="box-card">
        <div class="article-cover">
            <el-image v-if="article.cover" :src="article.cover" fit="cover" class="cover-image">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
        </div>
        <!--文章标题-->
        <h1>{{ article.title }}</h1>
        <!--文章信息-->
        <div class="article-info">
            <div class="info-author">
                <a href="#" style="margin-right: 10px">
                    <el-avatar :size="30" fit="cover" :src="article.avatar">
                        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                             alt="avatar"/>
                    </el-avatar>
                </a>
                <el-link href="#" :underline="false" style="font-size: 12px;">{{ article.author }}</el-link>
            </div>
            <div class="info-item">{{ article.gmtCreate.split("T")[0] }}</div>
            <div class="info-item">
                <i class="el-icon-view"></i> {{ article.hot }}
            </div>
            <div class="info-item">
                <a href="#">
                    <el-tag size="mini" type="info">{{ article.catalogue }}</el-tag>
                </a>
            </div>
        </div>
        <!--文章内容-->
        <mavon-editor
            :value="article.content"
            :subfield="false"
            :defaultOpen="'preview'"
            :toolbarsFlag="false"
            :editable="false"
            :boxShadow="false"
            :previewBackground="'#ffffff'"
            style="border:none"
        ></mavon-editor>
    </el-card>
</template>

<script>
export default {
    name: "ArticleCard",
    data() {
        return {
            article: {
                id: null,
                title: null,
                precis: null,
                content: null,
                cover: null,
                author: null,
                avatar: null,
                gmtCreate: null,
                hot: null,
                catalogue: null
            }
        }
    },
    created() {
        // 前端测试
        // this.$axios.get('/mock/article.json').then(response => {
        //     this.article = response.data;
        // });
        // 调用后端api，加载文章数据
        let id = this.$route.params.id;
        if (id) {
            this.$axios.get(`/api/blog/article/${id}`).then(response => {
                this.article = response.data.data;
            });
        }
        // 调用后端api，更新热度
        this.$axios.post(`/api/blog/article/${id}`).then(response => {
            console.log('浏览文章：', response.data);
        });
    }
}
</script>

<style scoped>
.box-card {
    width: 100%;
}

.cover-image {
    width: 100%;
    background: #E9EEF3;
    display: flex;
    align-items: center;
    justify-content: center;
}

.article-info {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-bottom: 50px;
}

.info-author {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.info-item {
    margin-right: 20px;
}
</style>