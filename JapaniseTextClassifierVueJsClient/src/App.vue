<template>
    <div id="app">
        <JtcHeader />
        <section class="hero">
            <div class="hero-body">
                <Home />
            </div>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <b>JapaniseTextClassifier</b> (c) koudenpa.
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
    import Home from './components/Home.vue';

    Vue.use(Vuex);

    @Component({
        store,
        components: {
            JtcHeader,
            Home,
        }
    })
    export default class App extends Vue { }
</script>

<style>
</style>
