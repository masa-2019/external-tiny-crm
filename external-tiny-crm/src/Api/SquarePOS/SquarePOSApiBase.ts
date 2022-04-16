import {ApiBase} from "../ApiBase";

export abstract class SquarePOSApiBase extends ApiBase{

    /**
     * @var string locationId ロケーションID
     */
    public locationId: string;

    protected constructor(locationId: string, apiPath: string, paramString?: string) {
        const SQUARE_API_ENDPOINT = 'https://connect.squareup.com/v2/';
        const SQUARE_ACCESS_TOKEN = '<squareのアクセストークン>';
        super(apiPath, paramString, SQUARE_API_ENDPOINT, SQUARE_ACCESS_TOKEN);
        this.locationId = locationId;
        if (typeof paramString !== "undefined") {
            this.url = this.getUrl(paramString);
        } else {
            this.url = this.getUrl("");
        }
    }

    protected getUrl(paramString: string): string {
        return encodeURI(this.endPoint + this.apiPath + paramString);
    }
}