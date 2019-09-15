import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import ResultDetail from './components/ResultDetail.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: ResultDetail,
        },
    ],
});