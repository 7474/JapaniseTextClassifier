<template>
    <div>
        <a :href="loginUrl" v-show="!isLogin">Login with Twitter</a>
        <div v-show="isLogin"><a :href="userUrl"><img :src="iconUrl" style="width: 1.4em;" />{{ userId }}</a></div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { idModule } from "../store/modules/id";

    @Component
    export default class JtcHeader extends Vue {
        get isLogin() {
            return idModule.isLogin;
        }
        get userId() {
            return idModule.me.userId;
        }
        get iconUrl() {
            return idModule.me.iconUrl;
        }
        get userUrl() {
            return idModule.userUrl;
        }
        get loginUrl() {
            return "https://japanisetextclassifierfunction.azurewebsites.net/.auth/login/twitter?post_login_redirect_url=" + encodeURIComponent(window.location.toString());
        }

        public created(): void {
            idModule.getAuthMe();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
