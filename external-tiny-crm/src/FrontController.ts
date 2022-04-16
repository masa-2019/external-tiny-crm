import { DisplayCustomerSalesSummaryAction } from "./Action/DisplayCustomerSalesSummaryAction";
import { ExternalMemberSearchListAction } from "./Action/Api/ExternalMemberSearchListAction";
import { ExternalMemberSearchDetailAction } from "./Action/Api/ExternalMemberSearchDetailAction";
import { ExternalMemberSetPointAction } from "./Action/Api/ExternalMemberSetPointAction";
import {ActionBase} from "./Action/ActionBase";
import {DisplayCustomerSalesSearchFormAction} from "./Action/DisplayCustomerSalesSearchFormAction";
import {GetSmaregiTransactionAction} from "./Action/Batch/GetSmaregiTransactionAction";
import {GetSquarePOSOrderAction} from "./Action/Batch/GetSquarePOSOrderAction";
declare var global: any;

/**
 * メイン処理(GET)
 */
global.doGet = (e: any) => {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("会員マスタ");
    if (!sheet) {
        throw new Error("会員マスタが見つかりません。");
    }

    const params = e.parameter.req;
    const actionId = e.parameter.actionId;

    const logSheet = ss.getSheetByName("ログ");
    let logLastRow = logSheet?.getLastRow();
    if (typeof logLastRow === "undefined") {
        logLastRow = 1;
    }
    logSheet?.getRange(logLastRow + 1, 1, 1, 1).setValue(JSON.stringify(params));

    const webhookEvent = 'pos:customer-points';
    const ignoreWebhookEvent = 'pos:transactions';
    let resData: any;
    let action: ActionBase;
    let html: any;
    let data: object;
    if (actionId) {
        switch (actionId) {
            case "displaySearchFormForCustomerSalesPiChart":
                action = new DisplayCustomerSalesSearchFormAction(null);
                html = action.execute();
                ss.show(html);
                return;
            case "displayCustomerSalesPiChart":
                action = new DisplayCustomerSalesSummaryAction(params);
                data = action.execute();
                logSheet?.getRange(logLastRow + 1, 1, 1, 1).setValue(JSON.stringify(data));
                return data;
            case "getSmaregiTransactionAction":
                action = new GetSmaregiTransactionAction(null);
                action.execute();
                return;
            case "getSquarePOSOrderAction":
                action = new GetSquarePOSOrderAction(null);
                action.execute();
                return;
            default:
                throw new Error("actionId is invalid.");
        }
    }
    if (params.match("searchString")) {
        let action = new ExternalMemberSearchListAction(params);
        resData = action.execute();
    } else if (params.match("customerCode")) {
        let action = new ExternalMemberSearchDetailAction(params);
        resData = action.execute();
    } else if (params.match(webhookEvent)) {
        let action = new ExternalMemberSetPointAction(params);
        resData = action.execute();
    } else if (params.match(ignoreWebhookEvent)) {
        // 一旦何もしない
    } else {
        sheet.getRange("B5").setValue("不正");
        sheet.getRange("B6").setValue(JSON.stringify(e));
    }

    let response = ContentService.createTextOutput();
    response.setMimeType(ContentService.MimeType.JSON);
    response.setContent(JSON.stringify(resData));
    return response;
}
