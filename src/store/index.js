import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

const store = new VueX.Store({
    strict: true,
    state: {
        user: {
            id: null,
            username: null,
            avatar: '',
            name: null,
            sex: null,
            email: null
        }
    },
    mutations: {
        login(state, user) {
            state.user = user;
        },
        exit(state) {
            state.user = {
                id: null,
                username: null,
                avatar: '',
                name: null,
                sex: null,
                email: null
            };
        }
    }
});
export default store;