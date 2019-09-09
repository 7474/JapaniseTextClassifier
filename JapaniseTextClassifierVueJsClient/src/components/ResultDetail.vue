<template>
    <div>
        <pre>{{ rawData }}</pre>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Response } from '../api';

    @Component
    export default class ResultDetail extends Vue {
        @Prop()
        private result!: Response;

        private get rawData(): string {
            return JSON.stringify(this.result, null, 2);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
