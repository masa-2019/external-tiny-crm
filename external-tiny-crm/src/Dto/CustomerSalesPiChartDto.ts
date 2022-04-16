export class CustomerSalesPiChartDto {
    /**
     * @var string salesDivisionName (非会員販売(金額) or 会員販売(金額))
     */
    public piChartLabel: string;

    /**
     * @var number value (売上実績)
     */
    public value: number;

    public static CUSTOMER_SALES_DIVISION_NON_CUSTOMER = "非会員販売";

    public static CUSTOMER_SALES_DIVISION_CUSTOMER = "会員販売";

    constructor(salesDivision?: string, value?: number) {
        if (typeof salesDivision === "undefined") {
            this.piChartLabel = "";
        } else {
            this.piChartLabel = salesDivision;
        }
        if (typeof value === "undefined") {
            this.value = 0;
        } else {
            this.value = value;
        }
    }

    public setNonCustomerSales(value: number) {
        this.piChartLabel = CustomerSalesPiChartDto.CUSTOMER_SALES_DIVISION_NON_CUSTOMER + "(" + value + "円)";
        this.value = value;
    }

    public setCustomerSales(value: number) {
        this.piChartLabel = CustomerSalesPiChartDto.CUSTOMER_SALES_DIVISION_CUSTOMER + "(" + value + "円)";
        this.value = value;
    }
}