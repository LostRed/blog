import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Article from '../views/blog/Article.vue'
import Editor from '../views/editor/Editor.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/article/:id?',
        name: 'Article',
        component: Article
    },
    {
        path: '/editor',
        name: 'Editor',
        component: Editor
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
