<template>
    <el-container class="all-page">
        <el-header>
            <div class="container">
                <slot name="header"></slot>
            </div>
        </el-header>
        <el-main>
            <div class="container">
                <slot></slot>
            </div>
        </el-main>
        <el-footer>
            <div class="container">
                <slot name="footer"></slot>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: "AppLayout"
}
</script>

<style scoped>
@media only screen and (max-width: 576px) {
    .container {
        max-width: 100%;
    }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
    .container {
        max-width: 540px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .container {
        max-width: 720px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .container {
        max-width: 960px;
    }
}

@media only screen and (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

.container {
    width: 100%;
}

.el-container {
    min-height: 100%;
}

.el-header {
    display: flex;
    justify-content: center;
    line-height: 60px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.el-main {
    display: flex;
    justify-content: center;
    background-color: #E9EEF3;
}

.el-footer {
    height: auto !important;
    display: flex;
    justify-content: center;
    background-color: #373737;
    color: #909399;
}
</style>