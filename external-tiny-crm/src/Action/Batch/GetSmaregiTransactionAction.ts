import {CustomerSalesLogic} from "../../Logic/CustomerSalesLogic";
import {ApiActionBase} from "../ApiActionBase";
import {DateTimeUtil} from "../../Util/DateTimeUtil";

export class GetSmaregiTransactionAction extends ApiActionBase {

  constructor(request: any) {
    super(request);
  }

  public validate() {

  }

  public execute () {
    let logic = new CustomerSalesLogic();
    let contractId = "<スマレジ の契約ID>";
    const today = new Date();
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    let to = DateTimeUtil.getYmdString(today, "-");
    let from = DateTimeUtil.getYmdString(yesterday, "-");
    let transactionHeadList = logic.getSmaregiTransactionHead(from, to, contractId, true);
    CustomerSalesLogic.insertDailyCustomerSalesForSmaregi(transactionHeadList);
  }
}

