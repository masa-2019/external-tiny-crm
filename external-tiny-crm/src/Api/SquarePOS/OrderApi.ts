import {SquarePOSApiBase} from "./SquarePOSApiBase";
import {SearchOrdersFilterDto} from "./Dto/SearchOrdersFilterDto";
import {TransactionHead} from "../../Entity/TransactionHead";
import {SearchOrdersDateTimeFilter} from "./Dto/SearchOrdersDateTimeFilter";
import {TimeRangeDto} from "./Dto/TimeRangeDto";
import {QueryDto} from "./Dto/QueryDto";
import {SquareSearchDto} from "./Dto/SquareSearchDto";
import {SquareOrder} from "../../Entity/SquareOrder";

export class OrderApi extends SquarePOSApiBase {

    constructor(locationId: string) {
        super(locationId, 'orders/search');
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
            return this.callApi('post');
        } catch(e) {
            Logger.log("エラー：" + e);
            throw new Error("エラー：" + e);
        }
    }

    /**
     * PFAPI:取引一覧取得を実行
     * @param transactionDateTimeFrom
     * @param transactionDateTimeTo
     * @return SquareOrder[] 取引ヘッダリスト
     */
    public callGetListByDateRange(transactionDateTimeFrom: string, transactionDateTimeTo: string) {
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        const logSheet = ss.getSheetByName("ログ");
        let logLastRow = logSheet?.getLastRow();
        if (typeof logLastRow === "undefined") {
            logLastRow = 1;
        }
        logSheet?.getRange(logLastRow + 1, 1, 1, 1).setValue(transactionDateTimeFrom + "~" + transactionDateTimeTo);

        const createdAt = new TimeRangeDto(transactionDateTimeFrom, transactionDateTimeTo);
        const searchOrdersFilterDto = new SearchOrdersDateTimeFilter();
        searchOrdersFilterDto.create_at = createdAt;

        try {
            const transactionDateRangeSearchDto = new SearchOrdersFilterDto(searchOrdersFilterDto);
            const queryDto = new QueryDto(transactionDateRangeSearchDto);
            const squareSearchDto = new SquareSearchDto([this.locationId], queryDto);
            //外部へアクセスさせる
            this.setRequestBody(squareSearchDto);
            const header = {
                'Content-Type': 'application/json'
            }
            let apiResponse = this.callApi('post', header);
            if (typeof apiResponse?.orders === "undefined") {
                throw new Error("Square取引情報の取得に失敗しました。");
            }
            let squareOrders: SquareOrder[] = [];
            let currentSquareOrder: SquareOrder = new SquareOrder();
            for (let i = 0; i < apiResponse.orders.length; i++) {
                currentSquareOrder.bindObject(apiResponse.orders[i]);
                squareOrders.push(currentSquareOrder)
                currentSquareOrder = new SquareOrder();
            }
            return squareOrders;
        } catch(e) {
            Logger.log("エラー：" + e);
            throw new Error("エラー：" + e);
        }
    }
}