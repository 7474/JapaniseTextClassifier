import Vue from 'vue';
import Vuex from 'vuex';
import classifier from './modules/japanise-text-classifier';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        classifier,
    },
});
