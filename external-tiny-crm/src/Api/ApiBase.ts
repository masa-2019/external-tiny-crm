import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import HttpMethod = GoogleAppsScript.URL_Fetch.HttpMethod;
import {SearchDtoBase} from "./SearchDtoBase";

export abstract class ApiBase {

    public apiPath: string;
    public endPoint: string;
    protected accessToken: string;
    protected url: string;
    protected payload?: object|string;

    protected constructor(apiPath: string, paramString?: string, endPoint?: string, accessToken?: string) {
        this.apiPath = apiPath;
        if (typeof endPoint !== "undefined") {
            this.endPoint = endPoint;
        } else {
            this.endPoint = '';
        }

        if (typeof paramString !== "undefined") {
            this.url = this.getUrl(paramString);
        } else {
            this.url = this.getUrl("");
        }

        if (typeof accessToken !== "undefined") {
            this.accessToken = accessToken;
        } else {
            this.accessToken = '';
        }
    }

    protected callApi(httpMethod: HttpMethod, headers?: any) {
        if (typeof headers === "undefined") {
            headers = {};
        }
        headers.Authorization = 'Bearer ' + this.accessToken

        // urlfetchappのオプション情報
        const options: URLFetchRequestOptions = {
            'method' : httpMethod,
            'headers' : headers,
            'muteHttpExceptions': true
        };

        if (typeof this.payload !== "undefined" && httpMethod !== "get") {
            options.payload = this.payload;
        }

        try {
            //外部へアクセスさせる
            Logger.log(this.url);
            Logger.log(this.accessToken);
            let resStr = UrlFetchApp.fetch(this.url, options).getContentText();
            if (resStr.length === 0) {
                throw new Error("受信データがありませんでした。");
            }
            let resJson = JSON.parse(resStr);
            Logger.log(resStr);
            return resJson;
        } catch(e) {
            Logger.log("エラー：" + e);
            throw new Error("エラー：" + e);
        }
    }


    protected abstract getUrl(paramString: string): string;

    protected setUriParameter(params: string) {
        this.url = this.getUrl(params);
    }

    /**
     * クエリパラメータ設定
     * @param params 検索条件Dtoのいずれか
     * @param isInitialize クエリパラメータを初期化して設定するならtrue,追記したいならfalseを設定
     * @protected
     */
    protected setQueryParameter(params: SearchDtoBase, isInitialize = true) {
        if (this.url.length < 0) {
            throw new Error("APIコール先URLが設定されていない状態でクエリパラメータは設定できません。");
        }
        let firstChar = "";
        if (isInitialize) {
            firstChar += "?";
        } else {
            firstChar += "&";
        }
        this.url += firstChar + params.getQueryParameter();
    }

    protected setRequestBody(request: object) {
        this.payload = JSON.stringify(request);
    }
}