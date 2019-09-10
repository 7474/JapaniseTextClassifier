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
        const response = await axios.get("https://japanisetextclassifierfunction.azurewebsites.net/.auth/me", {
            withCredentials: true,
        });
        console.log(response);

        if (response.status === 200) {
            const data = response.data[0];
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