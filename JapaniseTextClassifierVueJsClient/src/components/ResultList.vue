<template>
    <div class="container is-mobile">
        <ul>
            <li v-for="result in results">
                <ResultSummary :result="result" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import ResultSummary from './ResultSummary.vue';
    import { Response } from "../api";
    
    @Component({
        components: {
            ResultSummary,
        },
    })
    export default class Home extends Vue {
        @Prop()
        private results!: Response[];
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
