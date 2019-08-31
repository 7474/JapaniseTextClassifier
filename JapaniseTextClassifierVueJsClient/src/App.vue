<template>
    <div id="app">
        <Home msg="Hello world!" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Vuex from 'vuex';

    import { ClassificationApi, Configuration, Response } from './api';
    import Home from './components/Home.vue';

    Vue.use(Vuex);

    const store = new Vuex.Store({
        state: {
            classifyResults: <Array<Response>>[],
        },
        mutations: {
            addClassifyResult(state, result) {
                state.classifyResults.push(result);
            }
        },
        actions: {
            async classifyJapaniseText(context, jaText: string) {
                const client = new ClassificationApi(new Configuration({
                    // XXX 何処から食わせるのがいいの？
                    basePath: "http://localhost:7071/api",
                    //basePath: "https://japanisetextclassifierfunction.azurewebsites.net/api",
                }));
                const result = await client.classifyJapaniseText(
                    {
                        text: jaText,
                        translatorName: "GcpTranslator",
                        classifierName: "AzureClassifier",
                    });
                console.log(result);
                context.commit('addClassifyResult', result.data);
            }
        }
    });

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
