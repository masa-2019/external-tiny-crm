import {TimeRangeDto} from "./TimeRangeDto";

export class SearchOrdersDateTimeFilter {

    public closed_at?: TimeRangeDto;
    public create_at?: TimeRangeDto;
    public updated_at?: TimeRangeDto;

    public constructor(closedAt?: TimeRangeDto, createAt?: TimeRangeDto, updatedAt?:TimeRangeDto) {
        this.closed_at = closedAt;
        this.create_at = createAt;
        this.updated_at = updatedAt;
    }
}