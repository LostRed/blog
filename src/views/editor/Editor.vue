<template>
    <div class="page">
        <div class="title-input">
            <div class="back-wrapper">
                <el-link @click="back" :underline="false" icon="el-icon-arrow-left">返回</el-link>
            </div>
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
            <div class="button-wrapper">
                <el-button type="primary">保存草稿</el-button>
                <el-button type="primary">发布文章</el-button>
            </div>
        </div>
        <mavon-editor class="editor"/>
    </div>
</template>

<script>
export default {
    name: "Editor",
    methods: {
        back() {
            if (this.$route.query.goindex === 'true') {
                this.$router.push('/');
            } else {
                this.$router.back();
            }
        }
    },
    data() {
        return {
            title: ''
        }
    }
}
</script>

<style scoped>
.page {
    height: 100%;
}

.back-wrapper {
    width: 60px;
    margin: 0 10px;
}

.button-wrapper {
    margin: 0 10px;
    display: flex;
    align-items: center;
}

.title-input {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
}

.editor {
    height: calc(100% - 60px);
}
</style>