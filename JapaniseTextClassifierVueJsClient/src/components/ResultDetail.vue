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
                    <span class="tag" :class="category.score | scoreClass">{{ category.score | score }}</span>
                </div>
                <progress class="progress " :class="category.score | scoreClass" :value="category.score" max="1">
                    {{ category.name }}: {{ category.score | score }}
                </progress>
            </div>
        </div>
        <div class="card-footer">
            <div class="card-footer-item">
                <a :href="shreUrl" target="_blank" class="bd-tw-button button">
                    <span class="icon">
                        <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                        Tweet
                    </span>
                </a>
            </div>
        </div>
        <div class="card-content">
            <pre>{{ rawData }}</pre>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { japaniseTextClassifierModule } from "../store/modules/japanise-text-classifier";
    import { Response } from '../api';

    @Component({
        filters: {
            score(value: Number): string {
                return (new Number(value)).toFixed(2);
            },
            scoreClass(value: Number): string {
                if (value >= 0.8) {
                    return "is-danger";
                } else if (value >= 0.5) {
                    return "is-warning";
                } else {
                    return "is-info";
                }
            }
        }
    })
    export default class ResultDetail extends Vue {
        get result(): Response | undefined {
            return japaniseTextClassifierModule.classifyResultById(this.$route.params.id);
        }

        private get rawData(): string {
            return JSON.stringify(this.result, null, 2);
        }
        private get shreUrl(): string {
            if (this.result) {
                const apiUrl = "https://japanisetextclassifierfunction.azurewebsites.net/api/v1/classify/share/" + this.result.id;
                return "https://twitter.com/intent/tweet?hashtags=JapaniseTextClassifier&text=" + encodeURIComponent(apiUrl);
            }
            return "";
        }
        public async created(): Promise<void> {
            if (!this.result) {
                await japaniseTextClassifierModule.loadResult(this.$route.params.id);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
