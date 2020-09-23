import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const app = {
    namespaced: true,
    state: {
        init: false
    },
    getters: {
        init (state) {
            return state.init;
        }
    },
    mutations: {
        init_complete (state) {
            state.init = true;
        }
    },
    actions: {
    }
};

export default app;
