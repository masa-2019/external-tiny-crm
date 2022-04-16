import {CustomerLogic} from "../../Logic/CustomerLogic";
import {ApiActionBase} from "../ApiActionBase";

export class ExternalMemberSearchDetailAction extends ApiActionBase {
    public validate() {

    }

    public execute() {
        let tmpQueryArray = this.request.split('&');
        for (let i = 0; i < tmpQueryArray.length; i++) {
            if (!tmpQueryArray[i].match("customerCode")) {
                continue;
            }
            let tmpArray = tmpQueryArray[i].split('=');
            let logic = new CustomerLogic();
            return logic.doSearchDetail(tmpArray[1]);
        }
        return null;
    }
}

