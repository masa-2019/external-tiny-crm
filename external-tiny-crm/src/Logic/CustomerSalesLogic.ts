import {TransactionApi} from "../Api/Smaregi/TransactionApi";
import {SmaregiTransactionHeadDao} from "../Dao/SmaregiTransactionHeadDao";
import {TransactionHead} from "../Entity/TransactionHead";
import {CustomerSalesPiChartDto} from "../Dto/CustomerSalesPiChartDto";
import {DailyCustomerSalesDto} from "../Dto/DailyCustomerSalesDto";
import {OrderApi} from "../Api/SquarePOS/OrderApi";
import {SquareOrderDao} from "../Dao/SquareOrderDao";
import {SquareOrder} from "../Entity/SquareOrder";

export class CustomerSalesLogic {

  public static DATETIME_FORMAT: string = "T00:00:00+09:00";

  /**
   * 日別会員売上実績取得(スマレジ)
   * @var String transactionDateFrom 取引日時From
   * @var String transactionDateTo 取引日時To
   * @var String contractId 契約ID
   * @var bool apiCallFlag APIを強制的にコールするフラグ
   */
  public getSmaregiTransactionHead(transactionDateFrom: string, transactionDateTo: string, contractId: string, apiCallFlag= false) {
    const fromDate = new Date(transactionDateFrom);
    const toDate = new Date(transactionDateTo);
    const nowDate = new Date();
    const termDay = Math.floor((nowDate.getTime() - fromDate.getTime())) / 86400000;

    if (apiCallFlag || termDay > 90 || toDate.getTime() > nowDate.getTime()) {
      const smaregiTransactionApi = new TransactionApi(contractId);
      return smaregiTransactionApi.callGetListByDateRange(transactionDateFrom + CustomerSalesLogic.DATETIME_FORMAT, transactionDateTo + CustomerSalesLogic.DATETIME_FORMAT);
    } else {
      const transactionHeadDao = new SmaregiTransactionHeadDao();
      return transactionHeadDao.selectBySumDateRange(transactionDateFrom, transactionDateTo);
    }
  }

  /**
   * 会員売上実績取得(Square POS)
   * @var String transactionDateFrom 取引日時From
   * @var String transactionDateTo 取引日時To
   * @var String contractId 契約ID
   */
  public getSquareOrder(transactionDateFrom: string, transactionDateTo: string, locationId: string) {
    const SquareOrderApi = new OrderApi(locationId);
    return SquareOrderApi.callGetListByDateRange(transactionDateFrom, transactionDateTo);
  }

  public static insertDailyCustomerSalesForSmaregi(transactionHeadList: TransactionHead[]) {
    const smaregiTransactionHeadDao = new SmaregiTransactionHeadDao();
    smaregiTransactionHeadDao.insertRowTail(transactionHeadList);
  }

  public static insertDailyCustomerSalesForSquare(squareOrderList: SquareOrder[]) {
    const squareOrderDao = new SquareOrderDao();
    squareOrderDao.insertRowTail(squareOrderList);
  }

  public static getDailyCustomerSalesFromSummarySumDataList(transactionHeadList: TransactionHead[]) {
    let dailyCustomerSalesList: CustomerSalesPiChartDto[] = [];
    let wkTotalListForNonCustomer: any = [];
    let wkTotalListForCustomer: any = [];
    let tmpSumDate = "";

    let ss = SpreadsheetApp.getActiveSpreadsheet();
    const logSheet = ss.getSheetByName("ログ");
    let logLastRow = logSheet?.getLastRow();
    if (typeof logLastRow === "undefined") {
      logLastRow = 1;
    }
    logSheet?.getRange(logLastRow + 1, 1, 1, 1).setValue(JSON.stringify(transactionHeadList[0]));
    logSheet?.getRange(logLastRow + 2, 1, 1, 1).setValue(transactionHeadList[1].sumDate);

    for (let i = 0; i < transactionHeadList.length; i++) {
      tmpSumDate = transactionHeadList[i].sumDate;
      if (!wkTotalListForCustomer.hasOwnProperty(tmpSumDate)) {
        wkTotalListForCustomer[tmpSumDate] = 0;
      }
      if (!wkTotalListForNonCustomer.hasOwnProperty(tmpSumDate)) {
        wkTotalListForNonCustomer[tmpSumDate] = 0;
      }
      if (transactionHeadList[i].customerId.length > 0) {
        wkTotalListForCustomer[tmpSumDate] += Number(transactionHeadList[i].total);
      } else {
        wkTotalListForNonCustomer[tmpSumDate] += Number(transactionHeadList[i].total);
      }
    }

    let customerSalesValue = 0;
    let nonCustomerSalesValue = 0;
    for(let sumDate in wkTotalListForCustomer) {
      customerSalesValue += wkTotalListForCustomer[sumDate];
      nonCustomerSalesValue += wkTotalListForNonCustomer[sumDate];
    }
    const customerSalesPiChartForCustomer = new CustomerSalesPiChartDto();
    customerSalesPiChartForCustomer.setCustomerSales(customerSalesValue);
    dailyCustomerSalesList.push(customerSalesPiChartForCustomer);

    const customerSalesPiChartForNonCustomer = new CustomerSalesPiChartDto();
    customerSalesPiChartForNonCustomer.setNonCustomerSales(nonCustomerSalesValue);
    dailyCustomerSalesList.push(customerSalesPiChartForNonCustomer);

    return dailyCustomerSalesList;
  }

  public static getDailyCustomerSalesFromSmaregiTransactionHeadList(transactionHeadList: TransactionHead[]) {
    let tmpDailySalesList: any = [];
    let dailySalesList: DailyCustomerSalesDto[] = [];
    let tmpSumDate = "";

    let ss = SpreadsheetApp.getActiveSpreadsheet();
    const logSheet = ss.getSheetByName("ログ");
    let logLastRow = logSheet?.getLastRow();
    if (typeof logLastRow === "undefined") {
      logLastRow = 1;
    }
    logSheet?.getRange(logLastRow + 1, 1, 1, 1).setValue(JSON.stringify(transactionHeadList[0]));
    logSheet?.getRange(logLastRow + 2, 1, 1, 1).setValue(transactionHeadList[1].sumDate);

    for (let i = 0; i < transactionHeadList.length; i++) {
      tmpSumDate = transactionHeadList[i].sumDate;
      if (!tmpDailySalesList.hasOwnProperty(tmpSumDate)) {
        tmpDailySalesList[tmpSumDate] = new DailyCustomerSalesDto(tmpSumDate, 0, 0, 0, 0);
      }
      if (transactionHeadList[i].customerId.length > 0) {
        tmpDailySalesList[tmpSumDate].customerSales += Number(transactionHeadList[i].total);
        tmpDailySalesList[tmpSumDate].newPoint += Number(transactionHeadList[i].newPoint);
        tmpDailySalesList[tmpSumDate].usePoint += Number(transactionHeadList[i].point);
      } else {
        tmpDailySalesList[tmpSumDate].nonCustomerSales += Number(transactionHeadList[i].total);
      }
    }

    tmpDailySalesList.sort(
        function(a: DailyCustomerSalesDto, b: DailyCustomerSalesDto){
          let aSumDate = Number(a.sumDate.replace("-", ""));
          let bSumDate = Number(b.sumDate.replace("-", ""));
          if(aSumDate < bSumDate) return -1;
          if(aSumDate > bSumDate) return 1;
          return 0;
        }
    );
    for (let tmpDailySales in tmpDailySalesList) {
      dailySalesList.push(tmpDailySalesList[tmpDailySales]);
    }

    return dailySalesList;
  }

  public static getDailyCustomerSalesPiChartDataFromDailySumSalesList(dailySalesList: DailyCustomerSalesDto[]) {
    let dailyCustomerSalesList: CustomerSalesPiChartDto[] = [];
    let customerSalesValue = 0;
    let nonCustomerSalesValue = 0;
    for(let sumDate in dailySalesList) {
      customerSalesValue += dailySalesList[sumDate].customerSales;
      nonCustomerSalesValue += dailySalesList[sumDate].nonCustomerSales;
    }
    const customerSalesPiChartForCustomer = new CustomerSalesPiChartDto();
    customerSalesPiChartForCustomer.setCustomerSales(customerSalesValue);
    dailyCustomerSalesList.push(customerSalesPiChartForCustomer);

    const customerSalesPiChartForNonCustomer = new CustomerSalesPiChartDto();
    customerSalesPiChartForNonCustomer.setNonCustomerSales(nonCustomerSalesValue);
    dailyCustomerSalesList.push(customerSalesPiChartForNonCustomer);

    return dailyCustomerSalesList;
  }
}
