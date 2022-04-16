import {QueryDto} from "./QueryDto";

export class SquareSearchDto {
    location_ids: string[]
    query: QueryDto;

    constructor(locationIds: string[], query: QueryDto) {
        this.location_ids = locationIds;
        this.query = query;
    }
}