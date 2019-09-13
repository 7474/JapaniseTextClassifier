<template>
    <div class="container is-mobile">
        <form v-show="isLogin" :disabled="isBusy">
            <div class="field">
                <div class="control">
                    <textarea v-model="jaText" placeholder="分類したい日本語" class="textarea"></textarea>
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button type="button" v-on:click="onClick" :disabled="isBusy" class="button is-primary">classify</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { idModule } from "../store/modules/id";
    import { japaniseTextClassifierModule } from "../store/modules/japanise-text-classifier";

    @Component
    export default class ClassifyForm extends Vue {
        // XXX こうした要素もローカルではなく $store に持つものなのか？
        // その場合は処理が成功したらクリアするのか？
        jaText: string = '';
        get isLogin(): boolean {
            return idModule.isLogin;
        }
        isBusy: boolean = false;

        async onClick() {
            console.log('onClick');
            console.log(this.$store.state);
            this.isBusy = true;
            try {
                await japaniseTextClassifierModule.classifyJapaniseText(this.jaText);
            } finally {
                this.isBusy = false;
                this.jaText = "";
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
