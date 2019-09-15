<template>
    <div class="card">
        <div class="card-content">
            <p>{{ result.request.text }}</p>
            <p class="subtitle is-7 has-text-right has-text-grey">Japanise</p>
        </div>
        <div class="card-content">
            <p>{{ result.translatedText }}</p>
            <p class="subtitle is-7 has-text-right has-text-grey">English</p>
        </div>
        <div class="card-content">
            <ul class="field is-grouped is-grouped-multiline">
                <li v-for="category in result.categories" class="control">
                    <div class="tags has-addons">
                        <span class="tag is-dark">{{ category.name }}</span>
                        <span class="tag is-danger  ">{{ category.score | score }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Response } from "../api";

    @Component({
        filters: {
            score(value: Number): string {
                return (new Number(value)).toFixed(2);
            }
        }
    })
    export default class ResultSummary extends Vue {
        @Prop()
        private result!: Response;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
