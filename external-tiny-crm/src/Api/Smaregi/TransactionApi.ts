import {SmaregiApiBase} from "./SmaregiApiBase";
import {TransactionDateRangeSearchDto} from "./Dto/TransactionDateRangeSearchDto";
import {TransactionHead} from "../../Entity/TransactionHead";

export class TransactionApi extends SmaregiApiBase {

    constructor(contractId: string) {
        super(contractId, '/pos/transactions/');
    }

    /**
     * PFAPI:取引取得APIを実行
     * @param transactionHeadId
     * @return TransactionHead 取引ヘッダ
     */
    public callGetById(transactionHeadId: string) {
        try {
            //外部へアクセスさせる
            this.setUriParameter(transactionHeadId);
            return this.callApi('get');
        } catch(e) {
            Logger.log("エラー：" + e);
            throw new Error("エラー：" + e);
        }
    }

    /**
     * PFAPI:取引一覧取得を実行
     * @param transactionDateTimeFrom
     * @param transactionDateTimeTo
     * @return TransactionHead[] 取引ヘッダリスト
     */
    public callGetListByDateRange(transactionDateTimeFrom: string, transactionDateTimeTo: string) {
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        const logSheet = ss.getSheetByName("ログ");
        let logLastRow = logSheet?.getLastRow();
        if (typeof logLastRow === "undefined") {
            logLastRow = 1;
        }
        logSheet?.getRange(logLastRow + 1, 1, 1, 1).setValue(transactionDateTimeFrom + "~" + transactionDateTimeTo);

        try {
            const transactionDateRangeSearchDto = new TransactionDateRangeSearchDto(transactionDateTimeFrom, transactionDateTimeTo);
            //外部へアクセスさせる
            this.setQueryParameter(transactionDateRangeSearchDto);
            let apiResponse = this.callApi('get');
            let transactionHeadList: TransactionHead[] = [];
            let currentTransactionHead: TransactionHead = new TransactionHead();
            for (let i = 0; i < apiResponse.length; i++) {
                currentTransactionHead.bindObject(apiResponse[i]);
                transactionHeadList.push(currentTransactionHead)
                currentTransactionHead = new TransactionHead();
            }
            return transactionHeadList;
        } catch(e) {
            Logger.log("エラー：" + e);
            throw new Error("エラー：" + e);
        }
    }
}