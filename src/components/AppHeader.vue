<template>
    <el-row class="header-wrap" type="flex" justify="space-between">
        <div class="logo-wrap">
            <a href="javascript:void(0)" @click="toHome"><img src="../assets/logo.png" alt="logo"/></a>
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
            <el-dropdown v-if="this.$store.state.user.id">
                <div class="user-info el-dropdown-link">
                    <div class="info-item">
                        <a href="#">
                            <el-avatar :size="35" fit="cover" :src="this.$store.state.user.avatar">
                                <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                     alt="avatar"/>
                            </el-avatar>
                        </a>
                    </div>
                    <div class="info-item">
                        <el-link href="#" :underline="false">{{ this.$store.state.user.username }}</el-link>
                    </div>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item divided>我的文章</el-dropdown-item>
                    <el-dropdown-item>我的收藏</el-dropdown-item>
                    <el-dropdown-item @click.native="exit" divided>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <div v-else @click="toLogin">
                <div class="user-info el-dropdown-link">
                    <div class="info-item">
                        <a href="#">
                            <el-avatar :size="35" fit="cover"
                                       src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
                            </el-avatar>
                        </a>
                    </div>
                    <div class="info-item">
                        <el-link :underline="false">登录/注册</el-link>
                    </div>
                </div>
            </div>
            <div style="margin-left: 20px">
                <el-button @click="toEditor" type="primary">
                    发表文章 <i class="el-icon-edit"></i>
                </el-button>
            </div>
        </div>
    </el-row>
</template>

<script>
export default {
    name: "AppHeader",
    methods: {
        toHome() {
            if (this.$route.path !== "/") {
                this.$router.push("/");
            }
        },
        toEditor() {
            this.$router.push({
                name: 'Editor'
            });
        },
        toLogin() {
            if (this.$route.path !== "/login") {
                this.$router.push("/login");
            }
        },
        getUser() {
            this.$axios.get('/api/blog/authentication/user/')
                .then(response => {
                    if (response.data.code === 200) {
                        this.$store.commit('login', response.data.data);
                    }
                });
        },
        exit() {
            this.$axios.post('/api/blog/authentication/user/exit')
                .then(response => {
                    if (response.data.code === 200) {
                        this.$message.success('你已退出!');
                        this.$store.commit('exit');
                        this.$router.push({
                            name: 'Login'
                        });
                    } else {
                        this.$message.error('退出失败!');
                    }
                });
        }
    },
    created() {
        this.getUser();
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