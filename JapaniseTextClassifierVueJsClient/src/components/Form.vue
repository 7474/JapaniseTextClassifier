<template>
    <div>
        <form>
            <textarea v-model="jaText" placeholder="分類したい日本語"></textarea>
            <button type="button" v-on:click="onClick">classify</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Form extends Vue {
        // XXX こうした要素もローカルではなく $store に持つものなのか？
        // その場合は処理が成功したらクリアするのか？
        jaText: string = '';

        public onClick() {
            console.log('onClick');
            console.log(this.$store.state);
            // XXX 処理中をUIに反映するのはいつの時代も手間がかかりそうだ
            this.$store.dispatch('classifyJapaniseText', this.jaText);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
