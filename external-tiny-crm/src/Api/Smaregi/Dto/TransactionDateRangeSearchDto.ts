import {SmaregiSearchBase} from "./SmaregiSearchBase";

export class TransactionDateRangeSearchDto extends SmaregiSearchBase{
    public transactionDateTimeFrom: string;
    public transactionDateTimeTo: string;

    constructor(transactionDateTimeFrom: string, transactionDateTimeTo: string) {
        super();
        this.transactionDateTimeFrom = transactionDateTimeFrom;
        this.transactionDateTimeTo = transactionDateTimeTo;
    }

    public getQueryParameter() {
        return "transaction_date_time-from=" + encodeURIComponent(this.transactionDateTimeFrom) + "&transaction_date_time-to=" + encodeURIComponent(this.transactionDateTimeTo);
    }
}