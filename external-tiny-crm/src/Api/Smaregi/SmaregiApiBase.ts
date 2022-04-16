import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import HttpMethod = GoogleAppsScript.URL_Fetch.HttpMethod;
import {SmaregiSearchBase} from "./Dto/SmaregiSearchBase";
import {ApiBase} from "../ApiBase";
import {type} from "os";

export abstract class SmaregiApiBase extends ApiBase {

    public contractId: string;

    protected constructor(contractId: string, apiPath: string, paramString?: string) {
        super(apiPath, paramString,  'https://api.smaregi.jp', "");
        this.contractId = contractId;
        if (typeof paramString !== "undefined") {
            this.url = this.getUrl(paramString);
        } else {
            this.url = this.getUrl("");
        }
        let accessToken = this.getAccessToken(contractId);
        if (!accessToken) {
            throw new Error("スマレジのアクセストークンの取得に失敗しました。");
        }
        this.accessToken = accessToken;
    }

    public getAccessToken(contractId: string) {
        // プロパティサービスに予め、必要な定数を定義しておく。
        const scope = PropertiesService.getScriptProperties().getProperty("SMAREGI_APP_SCOPE_REQUIRED"); // 要求するスコープ(複数ある場合は、半角スペースで区切ること）
        const clientId = PropertiesService.getScriptProperties().getProperty("SMAREGI_APP_CLIENT_ID"); // アプリのクライアントID([アプリ]->[対象のアプリ]->[2. 環境設定])
        const secret = PropertiesService.getScriptProperties().getProperty("SMAREGI_APP_SECRET"); // アプリのクライアントシークレット([アプリ]->[対象のアプリ]->[2. 環境設定])

        // 下記、ハードコーディング用(危険なのでプロパティサービスを使うようにしてください。）
        // const contractId = "sb_xxx123x0(契約ID)";
        // const scope = "スコープ(Ex. pos.products.read等)詳しくはプラットフォームAPIの仕様書をご覧ください。";
        // const clientId = "クライアントID";
        // const secret = "クライアントシークレット";

        const grantType = "client_credentials"; // 認証方法を指定(固定値)
        const url = 'https://id.smaregi.jp/app/' + contractId + '/token'; // end point

        const headers = {
            'Authorization' : 'Basic ' + Utilities.base64Encode(clientId + ":" + secret, Utilities.Charset.UTF_8), // Basic認証用にエンコード
            'Content-Type' : 'application/x-www-form-urlencoded'
        };

        const payload = {
            'grant_type' : grantType,
            'scope' : scope
        };

        const options: URLFetchRequestOptions = {
            'method' : 'post',
            'headers' : headers,     // header情報を追加
            'payload' : payload      // トークンを設定
        };

        try {
            //外部へアクセスさせる
            let resStr = UrlFetchApp.fetch(url, options).getContentText();
            if (resStr.length === 0) {
                throw new Error("受信データがありませんでした。");
            }
            let resJson = JSON.parse(resStr);
            // 取得したアクセストークンとスコープを、プロパティサービスに登録
            PropertiesService.getScriptProperties().setProperties({"SMAREGI_APP_SCOPE":resJson.scope, "SMAREGI_APP_ACCESS_TOKEN":resJson.access_token});

            return PropertiesService.getScriptProperties().getProperty("SMAREGI_APP_ACCESS_TOKEN");
            // if (resJson.scope !== scope) {
            //     // developersサイト側で許可していないスコープを指定した場合、ここでエラーになる。
            //     throw new Error("アクセストークンは更新されましたが、要求したスコープと許可されたスコープが一致しません。developersサイトのスコープを確認して下さい。");
            // }

        } catch(e) {
            Logger.log("エラー：" + e);
            throw new Error("エラー：" + e);
        }
    }

    protected getUrl(paramString: string) {
        return encodeURI(this.endPoint + "/" + this.contractId + this.apiPath + paramString);
    }
}