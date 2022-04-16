import {PageActionBase} from "./PageActionBase";
import {DateTimeUtil} from "../Util/DateTimeUtil";

export class DisplayCustomerSalesSearchFormAction extends PageActionBase {

  constructor(request: any) {
    super(request, "会員売上比率");
  }

  public validate() {

  }

  public execute () {
    let output = this.getViewTemplate();
    let today = new Date();
    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);

    let todayString = DateTimeUtil.getYmdString(today, "/");
    let oneWeekAgoString = DateTimeUtil.getYmdString(oneWeekAgo, "/");

    output.today = todayString;
    output.oneWeekAgo = oneWeekAgoString;
    return this.getView(output);
  }
}
