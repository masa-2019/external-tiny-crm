import {CustomerLogic} from "../../Logic/CustomerLogic";
import {ApiActionBase} from "../ApiActionBase";

export class ExternalMemberSetPointAction extends ApiActionBase {
    public validate() {

    }

    public execute () {
        const paramsObj = JSON.parse(this.request);
        let transactionHeadIds = paramsObj.transactionHeadIds;
        let contractId = paramsObj.contractId;
        let logic = new CustomerLogic();
        return logic.setPoint(transactionHeadIds, contractId);
    }
}

