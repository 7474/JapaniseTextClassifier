<template>
    <div class="container is-mobile">
        <ul>
            <li v-for="result in results">
                <result :result="result" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Result from './ResultSummary.vue';
    
    @Component({
        components: {
            Result,
        },
    })
    export default class Home extends Vue {
        @Prop()
        private results!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
