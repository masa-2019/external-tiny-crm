import { ExternalMemberSearchListAction } from "Action/Api/ExternalMemberSearchListAction";
import { ExternalMemberSearchDetailAction } from "Action/Api/ExternalMemberSearchDetailAction";
import { ExternalMemberSetPointAction } from "Action/Api/ExternalMemberSetPointAction";

/**
 * メイン処理(GET)
 */
function doGet(e: any) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("会員マスタ");
    if (!sheet) {
        throw new Error("会員マスタが見つかりません。");
    }
    console.log(e);
    const params = e.parameter.req;
    const webhookEvent = 'pos:customer-points';
    const ignoreWebhookEvent = 'pos:transactions';
    let resData: any;
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
    }

    let response = ContentService.createTextOutput();
    response.setMimeType(ContentService.MimeType.JSON);
    response.setContent(JSON.stringify(resData));
    return response;
}