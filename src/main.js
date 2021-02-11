import Vue from 'vue';
import ElementUI from 'element-ui';
import './assets/theme/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue';
import Router from './router';
import Axios from 'axios';
import MarkdownEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import Store from './store';

Vue.use(ElementUI);
Vue.use(MarkdownEditor);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
    el: '#app',
    router: Router,
    store: Store,
    render: h => h(App)
});