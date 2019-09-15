import { Module as Mod } from "vuex";
import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { Response, ClassificationApi, Configuration } from "../../api";
import store from "../";

@Module({ dynamic: true, store, name: "japaniseTextClassifier", namespaced: true })
class JapaniseTextClassifier extends VuexModule {
    classifyResults: Array<Response> = [];
    private classificationApi: ClassificationApi;

    constructor(options: Mod<ThisType<any>, any>) {
        super(options);
        // XXX どこに持つのがいいの？
        this.classificationApi = new ClassificationApi(
            new Configuration({
                // XXX 何処から食わせるのがいいの？
                //basePath: "http://localhost:7071/api"
                basePath: "https://japanisetextclassifierfunction.azurewebsites.net/api",
                baseOptions: {
                    withCredentials: true,
                },
            })
        );
    }

    get classifyResultById() {
        return (id: string): Response | undefined => {
            return this.classifyResults.find(result => result.id === id);
        };
    }

    @Mutation
    addClassifyResult(result: Response) {
        this.classifyResults.unshift(result);
    }
    @Mutation
    setClassifyResults(results: Array<Response>) {
        this.classifyResults = results;
    }

    @Action({ commit: "addClassifyResult", rawError: true })
    async classifyJapaniseText(jaText: string) {
        const result = await this.classificationApi.classifyJapaniseText({
            text: jaText,
            translatorName: "GcpTranslator",
            classifierName: "AzureClassifier"
        });
        console.log(result);
        return result.data;
    }

    @Action({ commit: "setClassifyResults" })
    async loadResultList() {
        const result = await this.classificationApi.getClassifyResultList();
        console.log(result);
        return result.data.items;
    }

    @Action({ commit: "addClassifyResult" })
    async loadResult(id: string) {
        const result = await this.classificationApi.getClassifyResult(id);
        console.log(result);
        return result.data;
    }
}

export const japaniseTextClassifierModule = getModule(JapaniseTextClassifier);
