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
        <mavon-editor class="editor" :toolbars="toolbars" v-model='content' @imgAdd="imgAdd" @imgDel="imgDel"/>
    </el-row>
</template>

<script>
export default {
    name: "Editor",
    data() {
        return {
            filePathList: [],
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
    },
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
                if (response.data.code === 200) {
                    this.$message.success('发布成功！');
                    let id = response.data.data.id;
                    this.$router.push({
                        name: 'Article',
                        params: {
                            id: id
                        }
                    });
                } else {
                    this.$message.error('发布失败！');
                }
            });
        },
        imgAdd(pos, $file) {
            console.log("上传第" + pos + "个文件");
            let formData = new FormData()
            formData.append('file', $file)
            this.$axios.post('/api/blog/file/upload', formData)
                .then(response => {
                    if (response.data.code === 200) {
                        let url = response.data.data;
                        this.filePathList.push(url);
                        let name = $file.name;
                        if (name.includes('-')) {
                            name = name.replace(/-/g, '');
                        }
                        let content = this.content;
                        // 将返回的url替换到文本原位置![...](1) -> ![...](url)
                        if (content.includes(name)) {
                            let oStr = `(${pos})`;
                            let nStr = `(${url})`;
                            let index = content.indexOf(oStr);
                            let str = content.replace(oStr, '');
                            let insertStr = (source, start, newStr) => {
                                return source.slice(0, start) + newStr + source.slice(start);
                            };
                            this.content = insertStr(str, index, nStr);
                        }
                        console.log("文件上传成功！")
                    }
                });
        },
        imgDel(pos) {
            let filePath = this.filePathList[pos[0] - 1];
            console.log("删除", filePath);
            this.$axios.delete('/api/blog/file/delete', {params: {filePath}})
                .then(response => {
                    if (response.data.code === 200) {
                        console.log("文件删除成功！");
                    } else if (response.data.code === 400) {
                        console.log(response.data.msg);
                    }
                })
                .catch(error => {
                    console.log(error);
                    console.log("文件删除失败！");
                });
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