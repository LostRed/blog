<template>
    <app-layout>
        <template v-slot:header>
            <app-header/>
        </template>
        <template>
            <div class="page">
                <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
                    <home-card/>
                </el-col>
                <el-col :lg="7" :xl="7" class="hidden-md-and-down" style="padding-left: 20px">
                    <hot-card/>
                    <new-card/>
                </el-col>
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
import HotCard from '../../components/HotCard'
import NewCard from '../../components/NewCard'
import HomeCard from './HomeCard'

export default {
    name: "Home",
    components: {
        AppLayout,
        AppHeader,
        AppFooter,
        HotCard,
        NewCard,
        HomeCard
    }
}
</script>

<style scoped>
.page {
    width: 100%;
    height: 100%;
    color: #aeb1b6;
    display: flex;
    justify-content: center;
}
</style>
