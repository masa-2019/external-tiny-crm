import {SearchDtoBase} from "../../SearchDtoBase";

export abstract class SquarePOSSearchBase extends SearchDtoBase{
    public location_ids: string[];

    protected constructor(locationIds: string[]) {
        super();
        this.location_ids = locationIds;
    }

    public getQueryParameter() {
        return "";
    }
}