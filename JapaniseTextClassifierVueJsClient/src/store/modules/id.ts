import axios from "axios";
import store from "../";
import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";

interface Me {
    iconUrl: string;
    userId: string;
    raw: any;
}

@Module({ dynamic: true, store, name: "id", namespaced: true })
class Id extends VuexModule {
    me: Me = {
        iconUrl: "",
        userId: "",
        raw: {},
    };

    get isLogin(): boolean {
        return !!this.me.userId;
    }

    get userUrl(): string {
        return "https://twitter.com/" + this.me.userId;
    }

    @Mutation
    setMe(me: Me) {
        this.me = me;
        console.log(this.me);
    }

    @Action({ commit: "setMe" })
    async getAuthMe(): Promise<Me | null> {
        // XXX 設定に切り出す
        try {
            const access_token = localStorage.getItem("twitter_access_token");
            const access_token_secret = localStorage.getItem("twitter_access_token_secret");
            // https://docs.microsoft.com/ja-jp/azure/app-service/app-service-authentication-how-to#extend-session-token-expiration-grace-period
            const zumoResponse = await axios.post("https://japanisetextclassifierfunction.azurewebsites.net/.auth/login/twitter", {
                access_token: access_token,
                access_token_secret: access_token_secret
            }, {
                withCredentials: true,
            });
            axios.defaults.headers = {
                ...axios.defaults.headers,
                "X-ZUMO-AUTH": zumoResponse.data.authenticationToken,
            }
            console.log(zumoResponse);
        } catch (err) {
            console.log(err);
        }
        // refresh 結果は見ず単に /.auth/me を呼んでしまう
        const response = await axios.get("https://japanisetextclassifierfunction.azurewebsites.net/.auth/me", {
            withCredentials: true,
        });
        console.log(response);

        if (response.status === 200) {
            const data = response.data[0];
            // XXX localStorage にトークン永続化は相当ダーティだと思うのでお試し。これするとほぼ永続セッションになりそう。
            localStorage.setItem("twitter_access_token", data.access_token);
            localStorage.setItem("twitter_access_token_secret", data.access_token_secret);
            return {
                userId: data.user_id,
                iconUrl: data.user_claims.find((x: any) => x.typ === "urn:twitter:profile_image_url_https").val,
                raw: data,
            };
        } else {
            return {
                iconUrl: "",
                userId: "",
                raw: {},
            };
        }
    }
}

export const idModule = getModule(Id);