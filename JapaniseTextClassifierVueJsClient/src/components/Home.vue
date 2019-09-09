<template>
    <div>
        <h1>JapaniseTextClassifierVueJsClient</h1>
        <Form />
        <hr />
        <result-list :results="results" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    // XXX HTML要素と同名はよくなさそう
    import Form from './Form.vue';
    import ResultList from './ResultList.vue';

    @Component({
        components: {
            Form,
            ResultList,
        },
    })
    export default class Home extends Vue {
        private get results(): string {
            return this.$store.state.classifier.classifyResults;
        }
        public created(): void {
            this.$store.dispatch('loadResultList');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
