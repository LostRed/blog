<template>
    <el-row class="header-wrap" type="flex" justify="space-between">
        <div class="logo-wrap">
            <a href="/"><img src="../assets/logo.png" alt="logo"/></a>
        </div>
        <div class="menu-wrapper hidden-xs-only">
            <el-menu class="menu" mode="horizontal">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">分类</el-menu-item>
                <el-menu-item index="3">标签</el-menu-item>
                <el-menu-item index="4">归档</el-menu-item>
            </el-menu>
        </div>
        <div class="user-wrapper hidden-xs-only">
            <el-dropdown>
                <div class="user-info el-dropdown-link">
                    <div class="info-item">
                        <a href="#">
                            <el-avatar :size="35" fit="cover" :src="user.avatar">
                                <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                     alt="avatar"/>
                            </el-avatar>
                        </a>
                    </div>
                    <div class="info-item" v-if="user.username">
                        <el-link href="#" :underline="false">{{ user.username }}</el-link>
                    </div>
                    <div class="info-item" v-else>
                        <el-link href="#" :underline="false">登录/注册</el-link>
                    </div>
                </div>
                <div v-if="user.username">
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item divided>我的收藏</el-dropdown-item>
                        <el-dropdown-item divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </div>
            </el-dropdown>
            <div style="margin-left: 20px">
                <el-button type="primary">
                    发表文章 <i class="el-icon-edit"></i>
                </el-button>
            </div>
        </div>
    </el-row>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            user: {
                id: null,
                username: null,
                avatar: null,
                name: null,
                sex: null,
                email: null
            }
        }
    }
}
</script>

<style scoped>
.header-wrap {
    height: 100%;
}

.logo-wrap {
    height: 100%;
}

.logo-wrap img {
    height: 100%;
}

.menu {
    display: flex;
    justify-content: center;
}

.menu-wrapper {
    margin: 0 20px;
}

.user-wrapper {
    display: flex;
    justify-content: center;
}

.user-info {
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-item {
    margin-right: 10px;
}

.info-item a {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>