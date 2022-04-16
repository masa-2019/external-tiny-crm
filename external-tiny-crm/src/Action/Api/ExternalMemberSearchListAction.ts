import {CustomerLogic} from "../../Logic/CustomerLogic";
import {ApiActionBase} from "../ApiActionBase";

export class ExternalMemberSearchListAction extends ApiActionBase {
    public validate() {

    }

    public execute () {
        let tmpArray = this.request.split('=');
        let logic = new CustomerLogic();
        return logic.doSearch(tmpArray[1]);
    }
}

