<template>
    <div>
        <p>{{ result.request.text }}</p>
        <p>↓</p>
        <p>{{ result.translatedText }}</p>
        <ul>
            <li v-for="category in result.categories">
                {{ category.name }}: {{ category.score }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ResultSummary extends Vue {
        @Prop()
        private result!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
