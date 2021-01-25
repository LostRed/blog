<template>
    <app-layout>
        <template v-slot:header>
            <app-header/>
        </template>
        <template>
            <div class="page">
                <div class="left-container">
                    <article-card/>
                </div>
                <div class="right-container hidden-md-and-down">
                    <hot-card/>
                    <new-card/>
                </div>
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
import ArticleCard from './ArticleCard'

export default {
    name: "Article",
    components: {
        AppLayout,
        AppHeader,
        AppFooter,
        HotCard,
        NewCard,
        ArticleCard
    }
}
</script>

<style scoped>
.page {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    color: #aeb1b6;
}

.left-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.right-container {
    width: 360px;
    padding-left: 20px;
}
</style>