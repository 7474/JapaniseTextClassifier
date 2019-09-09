import Vue from "vue";
import Vuex, { Module as Mod } from "vuex";
import { RegisterOptions } from "vuex-class-modules";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { Response, ClassificationApi, Configuration } from "../../api";

@Module
class JapaniseTextClassifier extends VuexModule {
    classifyResults: Array<Response>;
    private classificationApi: ClassificationApi;

    constructor(options: Mod<ThisType<any>, any>) {
        super(options);
        this.classifyResults = [];
        // XXX どこに持つのがいいの？
        this.classificationApi = new ClassificationApi(
            new Configuration({
                // XXX 何処から食わせるのがいいの？
                basePath: "http://localhost:7071/api"
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

    @Action({ commit: "addClassifyResult" })
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
}

export default JapaniseTextClassifier;
