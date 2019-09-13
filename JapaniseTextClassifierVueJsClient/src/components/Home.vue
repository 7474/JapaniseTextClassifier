<template>
    <div>
        <classify-form />
        <hr />
        <result-list :results="results" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { japaniseTextClassifierModule } from "../store/modules/japanise-text-classifier";
    import ClassifyForm from './ClassifyForm.vue';
    import ResultList from './ResultList.vue';
    import { Response } from "../api";

    @Component({
        components: {
            ClassifyForm,
            ResultList,
        },
    })
    export default class Home extends Vue {
        private get results(): Response[] {
            return japaniseTextClassifierModule.classifyResults;
        }
        public created(): void {
            japaniseTextClassifierModule.loadResultList();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
