import {SearchOrdersFilterDto} from "./SearchOrdersFilterDto";

export class QueryDto {
    filter: SearchOrdersFilterDto;

    constructor(filter: SearchOrdersFilterDto) {
        this.filter = filter;
    }
}