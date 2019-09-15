<template>
    <div id="app">
        <JtcHeader />
        <section class="hero">
            <div class="hero-body">
                <router-view></router-view>
            </div>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <b>JapaniseTextClassifier</b> (c) <a href="https://twitter.com/koudenpa">koudenpa</a>.
                </p>
                <p>
                    <a href="https://github.com/7474/JapaniseTextClassifier">GitHub repository</a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Vuex from 'vuex';
    import store from './store';
    import JtcHeader from './components/JtcHeader.vue';
    import router from './router';

    Vue.use(Vuex);

    @Component({
        store,
        router,
        components: {
            JtcHeader,
        }
    })
    export default class App extends Vue { }
</script>

<style>
</style>
