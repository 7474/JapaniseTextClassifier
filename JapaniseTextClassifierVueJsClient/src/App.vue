<template>
    <div id="app">
        <Home />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Vuex from 'vuex';
    import store from './store';
    import Home from './components/Home.vue';

    Vue.use(Vuex);

    @Component({
        store,
        components: {
            Home
        }
    })
    export default class App extends Vue { }
</script>

<style>
</style>
