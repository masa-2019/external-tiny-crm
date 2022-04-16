import {CustomerSalesLogic} from "../../Logic/CustomerSalesLogic";
import {ApiActionBase} from "../ApiActionBase";

export class GetSquarePOSOrderAction extends ApiActionBase {

  constructor(request: any) {
    super(request);
  }

  public validate() {

  }

  public execute () {
    let logic = new CustomerSalesLogic();
    let locationId = "squareのロケーションID";
    const today = new Date();
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    const to = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDay();
    const from = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDay();
    let orderList = logic.getSquareOrder(from, to, locationId);
    Logger.log(orderList);
    CustomerSalesLogic.insertDailyCustomerSalesForSquare(orderList);
  }
}

