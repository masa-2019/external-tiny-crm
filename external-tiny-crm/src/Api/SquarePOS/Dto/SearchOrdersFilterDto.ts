import {SearchOrdersDateTimeFilter} from "./SearchOrdersDateTimeFilter";

export class SearchOrdersFilterDto {

    public date_time_filter: SearchOrdersDateTimeFilter;

    constructor(dateTimeFilter: SearchOrdersDateTimeFilter) {
        this.date_time_filter = dateTimeFilter;
    }
}