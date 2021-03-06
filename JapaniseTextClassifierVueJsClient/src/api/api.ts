// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * JapaniseTextClassifierFunction
 * For hosting JapaniseTextClassifier on Azure Functions.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ListResponse
 */
export interface ListResponse {
    /**
     * 
     * @type {string}
     * @memberof ListResponse
     */
    nextOffest?: string;
    /**
     * 
     * @type {Array<ListResponseItems>}
     * @memberof ListResponse
     */
    items?: Array<ListResponseItems>;
}
/**
 * 
 * @export
 * @interface ListResponseItems
 */
export interface ListResponseItems {
    /**
     * 
     * @type {string}
     * @memberof ListResponseItems
     */
    id?: string;
    /**
     * 
     * @type {ResponseRequest}
     * @memberof ListResponseItems
     */
    request?: ResponseRequest;
    /**
     * 
     * @type {boolean}
     * @memberof ListResponseItems
     */
    hasError?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ListResponseItems
     */
    translatedText?: string;
    /**
     * 
     * @type {Array<ResponseCategories>}
     * @memberof ListResponseItems
     */
    categories?: Array<ResponseCategories>;
}
/**
 * 
 * @export
 * @interface Request
 */
export interface Request {
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    translatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    classifierName?: string;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    text?: string;
}
/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    id?: string;
    /**
     * 
     * @type {ResponseRequest}
     * @memberof Response
     */
    request?: ResponseRequest;
    /**
     * 
     * @type {boolean}
     * @memberof Response
     */
    hasError?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    translatedText?: string;
    /**
     * 
     * @type {Array<ResponseCategories>}
     * @memberof Response
     */
    categories?: Array<ResponseCategories>;
}
/**
 * 
 * @export
 * @interface ResponseCategories
 */
export interface ResponseCategories {
    /**
     * 
     * @type {string}
     * @memberof ResponseCategories
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ResponseCategories
     */
    score?: number;
}
/**
 * 
 * @export
 * @interface ResponseRequest
 */
export interface ResponseRequest {
    /**
     * 
     * @type {string}
     * @memberof ResponseRequest
     */
    translatorName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseRequest
     */
    classifierName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseRequest
     */
    text?: string;
}

/**
 * ClassificationApi - axios parameter creator
 * @export
 */
export const ClassificationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Request} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classifyJapaniseText(body?: Request, options: any = {}): RequestArgs {
            const localVarPath = `/v1/classify`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (<any>"Request" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassifyResult(id: string, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getClassifyResult.');
            }
            const localVarPath = `/v1/classify/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassifyResultList(offset?: string, options: any = {}): RequestArgs {
            const localVarPath = `/v1/classify`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClassificationApi - functional programming interface
 * @export
 */
export const ClassificationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Request} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classifyJapaniseText(body?: Request, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response> {
            const localVarAxiosArgs = ClassificationApiAxiosParamCreator(configuration).classifyJapaniseText(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassifyResult(id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response> {
            const localVarAxiosArgs = ClassificationApiAxiosParamCreator(configuration).getClassifyResult(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassifyResultList(offset?: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListResponse> {
            const localVarAxiosArgs = ClassificationApiAxiosParamCreator(configuration).getClassifyResultList(offset, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ClassificationApi - factory interface
 * @export
 */
export const ClassificationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {Request} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classifyJapaniseText(body?: Request, options?: any) {
            return ClassificationApiFp(configuration).classifyJapaniseText(body, options)(axios, basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassifyResult(id: string, options?: any) {
            return ClassificationApiFp(configuration).getClassifyResult(id, options)(axios, basePath);
        },
        /**
         * 
         * @param {string} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassifyResultList(offset?: string, options?: any) {
            return ClassificationApiFp(configuration).getClassifyResultList(offset, options)(axios, basePath);
        },
    };
};

/**
 * ClassificationApi - object-oriented interface
 * @export
 * @class ClassificationApi
 * @extends {BaseAPI}
 */
export class ClassificationApi extends BaseAPI {
    /**
     * 
     * @param {Request} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationApi
     */
    public classifyJapaniseText(body?: Request, options?: any) {
        return ClassificationApiFp(this.configuration).classifyJapaniseText(body, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationApi
     */
    public getClassifyResult(id: string, options?: any) {
        return ClassificationApiFp(this.configuration).getClassifyResult(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {string} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationApi
     */
    public getClassifyResultList(offset?: string, options?: any) {
        return ClassificationApiFp(this.configuration).getClassifyResultList(offset, options)(this.axios, this.basePath);
    }

}


