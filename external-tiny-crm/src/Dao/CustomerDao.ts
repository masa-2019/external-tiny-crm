import { DaoBase } from "./DaoBase";

export class CustomerDao extends DaoBase {

    constructor() {
        super("会員マスタ");
    }

    public selectCustomerIdList() {
        return this.sheet.getRange("A:A").getValues()
    }

    public updateCustomerPoint(point: string|number, address: string) {
        this.updateTargetCell(point, address);
    }
}