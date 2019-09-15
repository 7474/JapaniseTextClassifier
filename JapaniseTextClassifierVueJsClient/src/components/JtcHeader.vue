<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <figure class="image is-32x32 is-inline-block">
                        <img src="brand.png" alt="JapaniseTextClassifierVueJsClient">
                    </figure>
                </a>
                <div class="navbar-item">
                    <div class="buttons">
                        <a v-show="!isLogin" :href="loginUrl" class="bd-tw-button button">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
                            <span>
                                Login
                            </span>
                        </a>
                        <a v-show="isLogin" :href="userUrl" class="button">
                            <figure class="image is-24x24 is-inline-block">
                                <img :src="iconUrl" />
                            </figure>
                            @{{ userId }}
                        </a>
                        <a v-show="isLogin" :href="logoutUrl" class="button">
                            Logout
                        </a>
                    </div>
                </div>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                </div>
            </div>
        </nav>
    </header>
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
        get logoutUrl() {
            // XXX リダイレクト先としてはTopページが良さそう
            return "https://japanisetextclassifierfunction.azurewebsites.net/.auth/logout?post_logout_redirect_uri=" + encodeURIComponent(window.location.toString());
        }

        public created(): void {
            idModule.getAuthMe();
        }
    }

    // https://bulma.io/documentation/components/navbar/
    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    if ($target !== null) $target.classList.toggle('is-active');
                });
            });
        }

    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
