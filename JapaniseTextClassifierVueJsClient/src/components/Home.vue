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

    @Component
    export default class Home extends Vue {
        @Prop()
        private jaText!: string;

        private get results(): string {
            return this.$store.state.classifyResults;
        }

        public onClick() {
            console.log('onClick');
            this.$store.dispatch('classifyJapaniseText', this.jaText);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
