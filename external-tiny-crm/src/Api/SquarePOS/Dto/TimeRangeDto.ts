
export class TimeRangeDto {
    public start_at: string;
    public end_at: string;

    constructor(transactionDateTimeFrom: string, transactionDateTimeTo: string) {
        this.start_at = transactionDateTimeFrom;
        this.end_at = transactionDateTimeTo;
    }
}