<template>
    <div class="home" v-on:click="onClick">
        <h1>{{ msg }}</h1>
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a> and <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a>.</p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ClassificationApi, Configuration } from '../api';

    @Component
    export default class Home extends Vue {
        @Prop() private msg!: string;

        // XXX APIクライアントの試し呼び
        public async onClick() {
            const client = new ClassificationApi(new Configuration({
                // XXX 何処から食わせるのがいいの？
                basePath: "http://localhost:7071/api",
            }));
            const result = await client.classifyJapaniseText(
                {
                    text: "これを分類できますか？",
                    translatorName: "GcpTranslator",
                    classifierName: "AzureClassifier",
                });
            console.log(result);
            this.msg = "" + result.data.translatedText;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
