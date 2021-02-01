<template>
    <el-row class="page">
        <div class="page-header">
            <el-page-header @back="back" content="Markdown编辑器">
            </el-page-header>
            <el-select v-model="catalogueId" placeholder="请选择分类">
                <el-option
                    v-for="catalogue in catalogueList"
                    :key="catalogue.id"
                    :label="catalogue.name"
                    :value="catalogue.id">
                </el-option>
            </el-select>
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
            <el-input v-model="precis" placeholder="请输入摘要"></el-input>
            <div class="button-wrapper">
                <el-button @click="save(2)" type="primary">保存草稿</el-button>
                <el-button @click="save(1)" type="primary">发布文章</el-button>
            </div>
        </div>
        <mavon-editor class="editor" :toolbars="toolbars" v-model='content'/>
    </el-row>
</template>

<script>
export default {
    name: "Editor",
    methods: {
        tip(msg) {
            this.$alert(msg, '提示', {
                confirmButtonText: '确定'
            });
        },
        back() {
            if (this.$route.query.goindex === 'true') {
                this.$router.push('/');
            } else {
                this.$router.back();
            }
        },
        save(statusId) {
            if (this.catalogueId == null) {
                this.tip('请选择文章类型！');
                return;
            }
            if (this.title === '') {
                this.tip('请填写文章标题！');
                return;
            }
            if (this.precis === '') {
                this.tip('请填写文章摘要！');
                return;
            }
            if (this.content === '') {
                this.tip('请填写文章内容！');
                return;
            }
            let article = {
                statusId: statusId,
                catalogueId: this.catalogueId,
                title: this.title,
                precis: this.precis,
                cover: null,
                content: this.content
            };
            // 调用后端api
            this.$axios.put('/api/blog/article/', article).then(response => {
                console.log(response.data);
                this.back();
            });
        }
    },
    data() {
        return {
            catalogueId: null,
            title: '',
            precis: '',
            content: '',
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: false, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            },
            catalogueList: [{
                id: 1,
                name: 'Java'
            }, {
                id: 2,
                name: '音乐'
            }, {
                value: 3,
                name: '诗词'
            }]
        }
    }
}
</script>

<style scoped>
.page {
    height: 100%;
}

.page-header {
    height: 60px;
    display: flex;
    align-items: center;
}

.el-page-header {
    align-items: center;
    min-width: 250px;
    margin: 0 10px;
}

.el-select {
    min-width: 120px;
}

.el-input {
    margin-left: 10px;
}

.button-wrapper {
    margin: 0 10px;
    display: flex;
    align-items: center;
}

.editor {
    height: calc(100% - 60px);
}
</style>