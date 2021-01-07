import Vue from 'vue';
import ElementUI from 'element-ui';
import './assets/theme/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue';
import router from './router'

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});