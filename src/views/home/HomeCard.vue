<template>
    <el-card class="box-card infinite-list-wrapper">
        <div class="search-wrapper">
            <el-input v-model="keyword" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
        <div v-for="article in articleList" :key="article.id">
            <div class="text item">
                <div class="content-wrapper" @click="toArticle(article)">
                    <div class="article-wrapper">
                        <h3 class="article-title">{{ article.title }}</h3>
                        <p class="article-precis">
                            {{ article.precis }}
                        </p>
                    </div>
                    <div class="article-cover hidden-xs-only">
                        <el-image v-if="article.cover" :src="article.cover" fit="cover" class="cover-image">
                            <div slot="error" class="image-slot">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                    </div>
                </div>
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
                <el-divider></el-divider>
            </div>
        </div>
        <p v-if="loading" style="text-align: center;font-size: 12px;"><i class="el-icon-loading"></i> 加载中...</p>
        <p v-if="noMore" style="text-align: center;font-size: 12px;">没有更多了</p>
    </el-card>
</template>

<script>
export default {
    name: "HomeCard",
    data() {
        return {
            keyword: '',
            current: 0,
            size: 5,
            total: 1,
            articleList: [],
            loading: false
        };
    },
    computed: {
        noMore() {
            return this.articleList.length >= this.total;
        }
    },
    methods: {
        handleScroll() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (scrollTop + windowHeight === scrollHeight && !this.noMore) {
                this.load();
            }
        },
        load() {
            this.loading = true;
            this.current++;
            this.$axios.get('/api/blog/article/',
                {
                    params: {
                        current: this.current,
                        size: this.size
                    }
                })
                .then(response => {
                    console.log('文章列表数据：', response.data.data);
                    this.current = response.data.data.current;
                    this.total = response.data.data.total;
                    this.articleList = this.articleList.concat(response.data.data.records);
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
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
    mounted() {
        document.addEventListener('scroll', this.handleScroll, true);
        // 前端测试
        // this.$axios.get('/mock/articleList.json').then(response => {
        //     console.log(response.data);
        //     this.articleList = response.data;
        // });
        // 调用后端api
        this.load();
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

.info-author {
    display: flex;
    align-items: center;
    margin-right: 20px;
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
