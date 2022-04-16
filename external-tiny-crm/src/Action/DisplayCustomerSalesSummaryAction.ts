import {CustomerSalesLogic} from "../Logic/CustomerSalesLogic";
import {ApiActionBase} from "./ApiActionBase";
import {DisplayCustomerSalesSummaryDto} from "../Dto/DisplayCustomerSalesSummaryDto";
import {DateTimeUtil} from "../Util/DateTimeUtil";

export class DisplayCustomerSalesSummaryAction extends ApiActionBase {

  constructor(request: any) {
    super(request);
  }

  public validate() {

  }

  public execute () {
    let logic = new CustomerSalesLogic();
    // let contractId = this.request.contractId;
    let contractId = "<スマレジの契約ID>";
    let from = this.request?.from;
    let to = this.request?.to;
    from = from.replace(/\//g, "-");
    to = to.replace(/\//g, "-");
    let transactionHeadList = logic.getSmaregiTransactionHead(from, to, contractId);
    if (transactionHeadList.length < 1) {
      return "取引情報がありませんでした。";
    }
    let dailySalesList = CustomerSalesLogic.getDailyCustomerSalesFromSmaregiTransactionHeadList(transactionHeadList);
    let piChartList = CustomerSalesLogic.getDailyCustomerSalesPiChartDataFromDailySumSalesList(dailySalesList);
    return new DisplayCustomerSalesSummaryDto(dailySalesList, piChartList);
  }
}

