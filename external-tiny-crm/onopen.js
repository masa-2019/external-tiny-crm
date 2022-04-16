/**
 * ファイルを開いたときのイベントハンドラ
 */
function onOpen() {
    let ui = SpreadsheetApp.getUi();           // Uiクラスを取得する
    let menu = ui.createMenu('アプリ');  // Uiクラスからメニューを作成する
    menu.addItem('会員売上比率', 'displaySearchFormForCustomerSalesPiChart');   // メニューにアイテムを追加する
    menu.addToUi();                            // メニューをUiクラスに追加する
}

function displaySearchFormForCustomerSalesPiChart() {
    callService("displaySearchFormForCustomerSalesPiChart");
}

function displayCustomerSalesPiChart(e) {
    return callService("displayCustomerSalesPiChart", e);
}

function getSmaregiTransactionAction() {
    return callService("getSmaregiTransactionAction");
}

function getSquarePOSOrderAction() {
    return callService("getSquarePOSOrderAction");
}

function callService(actionId, request) {
    let e = {};
    e.parameter = {};
    e.parameter.actionId = actionId;
    if (typeof request !== "undefined") {
        e.parameter.req = request;
    }
    return doGet(e);
}