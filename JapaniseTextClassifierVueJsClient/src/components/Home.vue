<template>
    <div>
        <h1>JapaniseTextClassifierVueJsClient</h1>
        <form>
            <textarea v-model="jaText" placeholder="分類したい日本語"></textarea>
            <button type="button" v-on:click="onClick">classify</button>
        </form>
        <hr />
        <ul>
            <li v-for="result in results">
                <p>{{ result.request.text }}</p>
                <p>↓</p>
                <p>{{ result.translatedText }}</p>
                <ul>
                    <li v-for="category in result.categories">
                        {{ category.name }}: {{ category.score }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ClassificationApi, Configuration, Response } from '../api';

    @Component
    export default class Home extends Vue {
        @Prop()
        private jaText!: string;
        private results: Array<Response>;
        
        constructor() {
            super();
            this.results = [];
        }
        // XXX APIクライアントの試し呼び
        public async onClick() {
            const client = new ClassificationApi(new Configuration({
                // XXX 何処から食わせるのがいいの？
                basePath: "http://localhost:7071/api",
            }));
            const result = await client.classifyJapaniseText(
                {
                    text: this.jaText,
                    translatorName: "GcpTranslator",
                    classifierName: "AzureClassifier",
                });
            console.log(result);
            this.results.push(result.data);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
