import {StringUtil} from "../Util/StringUtil";

export class DailyCustomerSalesDto {
    /**
     * @var number customerSales 会員販売額
     */
    public customerSales: number;

    /**
     * @var number nonCustomerSales 非会員販売額
     */
    public nonCustomerSales: number;

    /**
     * @var string sumDate 締め日
     */
    public sumDate: string;

    /**
     * @var number usePoint 利用ポイント
     */
    public usePoint: number;

    /**
     * @var number newPoint 使用ポイント
     */
    public newPoint: number;

    /**
     * constructor
     * @param sumDate 締め日
     * @param customerSales 会員販売額
     * @param nonCustomerSales 非会員販売額
     * @param usePoint 利用ポイント
     * @param newPoint 付与ポイント
     */
    constructor(sumDate: string,customerSales: number, nonCustomerSales: number, usePoint: number, newPoint: number) {
        if (StringUtil.checkDateFormat(sumDate)) {
            this.sumDate = sumDate;
        } else {
            throw new Error("締め日のフォーマットが不正です。");
        }
        this.customerSales = customerSales;
        this.nonCustomerSales = nonCustomerSales;
        this.usePoint = usePoint;
        this.newPoint = newPoint;
    }
}