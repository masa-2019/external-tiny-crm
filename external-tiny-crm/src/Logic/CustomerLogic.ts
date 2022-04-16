import {CustomerDao} from "../Dao/CustomerDao";
import {CustomerAlignmentDao} from "../Dao/CustomerAlignmentDao";
import {TransactionApi} from "../Api/Smaregi/TransactionApi";

export class CustomerLogic {

    /**
     * 会員検索処理
     * @var string searchString 検索文字列
     * @return object[] 会員一覧
     */
    doSearch(searchString: string) {
        const customerDao = new CustomerDao();
        const customerList = customerDao.selectList();
        const customers = [];
        let currentCustomer = [];
        let currentCustomerName = "";
        for (let i = 0; i < customerList.length; i++) {
            if (i < 1) {
                continue;
            }
            currentCustomer = customerList[i];
            currentCustomerName = currentCustomer[4] + currentCustomer[5];
            if (!currentCustomerName.match(searchString)) {
                continue;
            }
            customers.push(
                {
                    customerId: currentCustomer[0],
                    customerCode: currentCustomer[1],
                    lastName: currentCustomer[4],
                    firstName: currentCustomer[5],
                    status: currentCustomer[40]
                }
            );
        }
        let res = {};
        if (customers.length > 0) {
            res = {
                "result": {
                    "count": customers.length,
                    "customers": customers
                }
            };
        } else {
            res = {
                "result": {},
                "error": {
                    "message": "検索条件に合致する会員は存在しませんでした。"
                }
            }
        }
        return res;
    }

    doSearchDetail(customerCode: string) {
        const customerDao = new CustomerDao();
        const customerAlignmentDao = new CustomerAlignmentDao();
        const customer = customerDao.selectByPrimary(customerCode, 1);
        const customerAlignmentList = customerAlignmentDao.selectList()
        let resData:any = {};

        for (let j = 1; j < customerAlignmentList.length; j++) {
            if (customerAlignmentList[j][2] !== 1) {
                continue;
            }
            if (customer[j - 1].length < 1) {
                continue;
            }
            resData[customerAlignmentList[j][1]] = customer[j - 1];
        }

        let res = {};
        if (resData && resData !== {}) {
            res = {
                "result": resData
            };
        } else {
            res = {
                "result": [],
                "error": {
                    "message": "検索条件に合致する会員は存在しませんでした。"
                }
            }
        }
        return res;
    }

    /**
     * ポイント更新
     * @var Array transactionHeadIds 取引ID
     * @var String contractId 契約ID
     */
    setPoint(transactionHeadIds: string[], contractId: string) {
        let result: any;
        const smaregiTransactionApi = new TransactionApi(contractId);
        result = smaregiTransactionApi.callGetById(transactionHeadIds[0]);
        this.updatePoint(result);
        return true;
    }

     updatePoint(transactionHead: any) {
        const customerDao = new CustomerDao();
        const customerIdList = customerDao.selectCustomerIdList();
        const customerId = transactionHead.customerId;
        const totalPoint = transactionHead.totalPoint;
        let row = 1;
        for (row = 1; row < customerIdList.length; row++) {
            if (customerIdList[row][0] === customerId) {
                row++;
                break;
            }
        }
        customerDao.updateCustomerPoint(totalPoint, "AE" + row);
    }
}
