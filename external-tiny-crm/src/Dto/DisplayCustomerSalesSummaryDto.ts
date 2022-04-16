import {DailyCustomerSalesDto} from "./DailyCustomerSalesDto";
import {CustomerSalesPiChartDto} from "./CustomerSalesPiChartDto";

export class DisplayCustomerSalesSummaryDto {

    /**
     * @var DailyCustomerSalesDto[] dailySalesList 折線グラフ用データ
     */
    public dailySalesList: DailyCustomerSalesDto[];

    /**
     * @var CustomerSalesPiChartDto[] piChartList 円グラフ用データ
     */
    public piChartList: CustomerSalesPiChartDto[];

    public constructor(dailySalesList:DailyCustomerSalesDto[], piChartList: CustomerSalesPiChartDto[]) {
        this.dailySalesList = dailySalesList;
        this.piChartList = piChartList;
    }
}