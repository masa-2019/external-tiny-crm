import { DaoBase } from "./DaoBase";
import {TransactionHead} from "../Entity/TransactionHead";

export class SmaregiTransactionHeadDao extends DaoBase {

    constructor() {
        super("スマレジ取引ヘッダ");
    }

    /**
     * 期間指定で検索
     * @param from YYYY-MM-DD形式
     * @param to YYYY-MM-DD形式
     * @return TransactionHead[] 取引ヘッダリスト
     */
    public selectBySumDateRange(from: string, to: string) {
        let allListFromSheet = this.selectList();
        let wkTransactionHead: TransactionHead = new TransactionHead();
        let wkSumDate: Date;
        const fromDate = new Date(from);
        const toDate = new Date(to);
        let res: TransactionHead[] = [];
        for (let i = 1; i < allListFromSheet.length; i++) {
            wkTransactionHead = new TransactionHead();
            wkTransactionHead.bindArray(allListFromSheet[i]);
            wkSumDate = new Date(wkTransactionHead.sumDate);
            if (fromDate.getTime() <= wkSumDate.getTime() && toDate.getTime() >= wkSumDate.getTime()) {
                res.push(wkTransactionHead);
            }
        }
        return res;
    }
}