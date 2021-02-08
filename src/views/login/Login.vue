<template>
    <app-layout>
        <template v-slot:header>
            <app-header/>
        </template>
        <template>
            <div class="page">
                <div class="image-wrapper hidden-sm-and-down">
                    <el-image fit="cover" src="fire.png"></el-image>
                </div>
                <login-card/>
            </div>
        </template>
        <template v-slot:footer>
            <app-footer/>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from '../../components/AppLayout'
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'
import LoginCard from "./LoginCard";

export default {
    name: "Login",
    components: {
        LoginCard,
        AppLayout,
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>
.page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper {
    margin-right: 10%;
}
</style>