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
        <div class="card-footer">
            <div v-for="category in result.categories" class="card-footer-item">
                <div class="tags has-addons">
                    <span class="tag is-dark">{{ category.name }}</span>
                    <span class="tag is-danger  ">{{ category.score | score }}</span>
                </div>
                <progress class="progress is-danger" :value="category.score" max="1">
                    {{ category.name }}: {{ category.score | score }}
                </progress>
            </div>
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
    .card {
        margin-bottom: 1.5em;
    }
    .card-footer-item {
        flex-direction: column;
    }
    .card-footer-item .tags {
        margin-bottom: 0;
    }
</style>
