import {EntityBase} from "./EntityBase";

export class TransactionHead extends EntityBase {

    public transactionHeadId: string;
    public transactionDateTime: string;
    public transactionHeadDivision: string;
    public cancelDivision: string;
    public unitNonDiscountsubtotal: string;
    public unitDiscountsubtotal: string;
    public unitStaffDiscountsubtotal: string;
    public unitBargainDiscountsubtotal: string;
    public subtotal: string;
    public subtotalForDiscount: string;
    public subtotalDiscountPrice: string;
    public subtotalDiscountRate: string;
    public subtotalDiscountDivision: string;
    public pointDiscount: string;
    public couponDiscount: string;
    public total: string;
    public taxInclude: string;
    public taxExclude: string;
    public roundingDivision: string;
    public roundingPrice: string;
    public cashTotal: string;
    public creditTotal: string;
    public deposit: string;
    public depositCash: string;
    public depositCredit: string;
    public change: string;
    public tipCash: string;
    public tipCredit: string;
    public amount: string;
    public returnAmount: string;
    public costTotal: string;
    public salesHeadDivision: string;
    public inTaxSalesTotal: string;
    public outTaxSalesTotal: string;
    public nonTaxSalesTotal: string;
    public nonSalesTargetTotal: string;
    public nonSalesTargetOutTaxTotal: string;
    public nonSalesTargetInTaxTotal: string;
    public nonSalesTargetTaxFreeTotal: string;
    public nonSalesTargetCostTotal: string;
    public nonSalesTargetAmount: string;
    public nonSalesTargetReturnAmount: string;
    public newPoint: string;
    public spendPoint: string;
    public point: string;
    public totalPoint: string;
    public currentMile: string;
    public earnMile: string;
    public totalMile: string;
    public adjustmentMile: string;
    public adjustmentMileDivision: string;
    public adjustmentMileValue: string;
    public storeId: string;
    public storeCode: string;
    public terminalId: string;
    public customerId: string;
    public customerCode: string;
    public terminalTranId: string;
    public terminalTranDateTime: string;
    public sumDivision: string;
    public adjustmentDateTime: string;
    public sumDate: string;
    public customerRank: string;
    public customerGroupId: string;
    public customerGroupId2: string;
    public customerGroupId3: string;
    public customerGroupId4: string;
    public customerGroupId5: string;
    public staffId: string;
    public staffCode: string;
    public staffName: string;
    public creditDivision: string;
    public paymentCount: string;
    public slipNumber: string;
    public cancelSlipNumber: string;
    public authNumber: string;
    public authDate: string;
    public cardCompany: string;
    public denomination: string;
    public memo: string;
    public receiptMemo: string;
    public carriage: string;
    public commission: string;
    public guestNumbers: string;
    public guestNumbersMale: string;
    public guestNumbersFemale: string;
    public guestNumbersUnknown: string;
    public enterDateTime: string;
    public taxFreeSalesDivision: string;
    public netTaxFreeGeneralTaxInclude: string;
    public netTaxFreeGeneralTaxExclude: string;
    public netTaxFreeConsumableTaxInclude: string;
    public netTaxFreeConsumableTaxExclude: string;
    public tags: string;
    public pointGivingDivision: string;
    public pointGivingUnitPrice: string;
    public pointGivingUnit: string;
    public pointSpendDivision: string;
    public mileageDivision: string;
    public mileageLabel: string;
    public customerPinCode: string;
    public returnSales: string;
    public disposeDivision: string;
    public disposeServerTransactionHeadId: string;
    public cancelDateTime: string;
    public sellDivision: string;
    public taxRate: string;
    public taxRounding: string;
    public discountRoundingDivision: string;
    public transactionUuid: string;
    public exchangeTicketNo: string;
    public giftReceiptValidDays: string;
    public barcode: string;
    public updDateTime: string;

    constructor(
        transactionHeadId?: string,
        transactionDateTime?: string,
        transactionHeadDivision?: string,
        cancelDivision?: string,
        unitNonDiscountsubtotal?: string,
        unitDiscountsubtotal?: string,
        unitStaffDiscountsubtotal?: string,
        unitBargainDiscountsubtotal?: string,
        subtotal?: string,
        subtotalForDiscount?: string,
        subtotalDiscountPrice?: string,
        subtotalDiscountRate?: string,
        subtotalDiscountDivision?: string,
        pointDiscount?: string,
        couponDiscount?: string,
        total?: string,
        taxInclude?: string,
        taxExclude?: string,
        roundingDivision?: string,
        roundingPrice?: string,
        cashTotal?: string,
        creditTotal?: string,
        deposit?: string,
        depositCash?: string,
        depositCredit?: string,
        change?: string,
        tipCash?: string,
        tipCredit?: string,
        amount?: string,
        returnAmount?: string,
        costTotal?: string,
        salesHeadDivision?: string,
        inTaxSalesTotal?: string,
        outTaxSalesTotal?: string,
        nonTaxSalesTotal?: string,
        nonSalesTargetTotal?: string,
        nonSalesTargetOutTaxTotal?: string,
        nonSalesTargetInTaxTotal?: string,
        nonSalesTargetTaxFreeTotal?: string,
        nonSalesTargetCostTotal?: string,
        nonSalesTargetAmount?: string,
        nonSalesTargetReturnAmount?: string,
        newPoint?: string,
        spendPoint?: string,
        point?: string,
        totalPoint?: string,
        currentMile?: string,
        earnMile?: string,
        totalMile?: string,
        adjustmentMile?: string,
        adjustmentMileDivision?: string,
        adjustmentMileValue?: string,
        storeId?: string,
        storeCode?: string,
        terminalId?: string,
        customerId?: string,
        customerCode?: string,
        terminalTranId?: string,
        terminalTranDateTime?: string,
        sumDivision?: string,
        adjustmentDateTime?: string,
        sumDate?: string,
        customerRank?: string,
        customerGroupId?: string,
        customerGroupId2?: string,
        customerGroupId3?: string,
        customerGroupId4?: string,
        customerGroupId5?: string,
        staffId?: string,
        staffCode?: string,
        staffName?: string,
        creditDivision?: string,
        paymentCount?: string,
        slipNumber?: string,
        cancelSlipNumber?: string,
        authNumber?: string,
        authDate?: string,
        cardCompany?: string,
        denomination?: string,
        memo?: string,
        receiptMemo?: string,
        carriage?: string,
        commission?: string,
        guestNumbers?: string,
        guestNumbersMale?: string,
        guestNumbersFemale?: string,
        guestNumbersUnknown?: string,
        enterDateTime?: string,
        taxFreeSalesDivision?: string,
        netTaxFreeGeneralTaxInclude?: string,
        netTaxFreeGeneralTaxExclude?: string,
        netTaxFreeConsumableTaxInclude?: string,
        netTaxFreeConsumableTaxExclude?: string,
        tags?: string,
        pointGivingDivision?: string,
        pointGivingUnitPrice?: string,
        pointGivingUnit?: string,
        pointSpendDivision?: string,
        mileageDivision?: string,
        mileageLabel?: string,
        customerPinCode?: string,
        returnSales?: string,
        disposeDivision?: string,
        disposeServerTransactionHeadId?: string,
        cancelDateTime?: string,
        sellDivision?: string,
        taxRate?: string,
        taxRounding?: string,
        discountRoundingDivision?: string,
        transactionUuid?: string,
        exchangeTicketNo?: string,
        giftReceiptValidDays?: string,
        barcode?: string,
        updDateTime?: string
    ) {
        super();
        if (typeof transactionHeadId !== "undefined") {
            this.transactionHeadId = transactionHeadId;
        } else {
            this.transactionHeadId = "";
        }
        if (typeof transactionDateTime !== "undefined") {
            this.transactionDateTime = transactionDateTime;
        } else {
            this.transactionDateTime = "";
        }
        if (typeof transactionHeadDivision !== "undefined") {
            this.transactionHeadDivision = transactionHeadDivision;
        } else {
            this.transactionHeadDivision = "";
        }
        if (typeof cancelDivision !== "undefined") {
            this.cancelDivision = cancelDivision;
        } else {
            this.cancelDivision = "";
        }
        if (typeof unitNonDiscountsubtotal !== "undefined") {
            this.unitNonDiscountsubtotal = unitNonDiscountsubtotal;
        } else {
            this.unitNonDiscountsubtotal = "";
        }
        if (typeof unitDiscountsubtotal !== "undefined") {
            this.unitDiscountsubtotal = unitDiscountsubtotal;
        } else {
            this.unitDiscountsubtotal = "";
        }
        if (typeof unitStaffDiscountsubtotal !== "undefined") {
            this.unitStaffDiscountsubtotal = unitStaffDiscountsubtotal;
        } else {
            this.unitStaffDiscountsubtotal = "";
        }
        if (typeof unitBargainDiscountsubtotal !== "undefined") {
            this.unitBargainDiscountsubtotal = unitBargainDiscountsubtotal;
        } else {
            this.unitBargainDiscountsubtotal = "";
        }
        if (typeof subtotal !== "undefined") {
            this.subtotal = subtotal;
        } else {
            this.subtotal = "";
        }
        if (typeof subtotalForDiscount !== "undefined") {
            this.subtotalForDiscount = subtotalForDiscount;
        } else {
            this.subtotalForDiscount = "";
        }
        if (typeof subtotalDiscountPrice !== "undefined") {
            this.subtotalDiscountPrice = subtotalDiscountPrice;
        } else {
            this.subtotalDiscountPrice = "";
        }
        if (typeof subtotalDiscountRate !== "undefined") {
            this.subtotalDiscountRate = subtotalDiscountRate;
        } else {
            this.subtotalDiscountRate = "";
        }
        if (typeof subtotalDiscountDivision !== "undefined") {
            this.subtotalDiscountDivision = subtotalDiscountDivision;
        } else {
            this.subtotalDiscountDivision = "";
        }
        if (typeof pointDiscount !== "undefined") {
            this.pointDiscount = pointDiscount;
        } else {
            this.pointDiscount = "";
        }
        if (typeof couponDiscount !== "undefined") {
            this.couponDiscount = couponDiscount;
        } else {
            this.couponDiscount = "";
        }
        if (typeof total !== "undefined") {
            this.total = total;
        } else {
            this.total = "";
        }
        if (typeof taxInclude !== "undefined") {
            this.taxInclude = taxInclude;
        } else {
            this.taxInclude = "";
        }
        if (typeof taxExclude !== "undefined") {
            this.taxExclude = taxExclude;
        } else {
            this.taxExclude = "";
        }
        if (typeof roundingDivision !== "undefined") {
            this.roundingDivision = roundingDivision;
        } else {
            this.roundingDivision = "";
        }
        if (typeof roundingPrice !== "undefined") {
            this.roundingPrice = roundingPrice;
        } else {
            this.roundingPrice = "";
        }
        if (typeof cashTotal !== "undefined") {
            this.cashTotal = cashTotal;
        } else {
            this.cashTotal = "";
        }
        if (typeof creditTotal !== "undefined") {
            this.creditTotal = creditTotal;
        } else {
            this.creditTotal = "";
        }
        if (typeof deposit !== "undefined") {
            this.deposit = deposit;
        } else {
            this.deposit = "";
        }
        if (typeof depositCash !== "undefined") {
            this.depositCash = depositCash;
        } else {
            this.depositCash = "";
        }
        if (typeof depositCredit !== "undefined") {
            this.depositCredit = depositCredit;
        } else {
            this.depositCredit = "";
        }
        if (typeof change !== "undefined") {
            this.change = change;
        } else {
            this.change = "";
        }
        if (typeof tipCash !== "undefined") {
            this.tipCash = tipCash;
        } else {
            this.tipCash = "";
        }
        if (typeof tipCredit !== "undefined") {
            this.tipCredit = tipCredit;
        } else {
            this.tipCredit = "";
        }
        if (typeof amount !== "undefined") {
            this.amount = amount;
        } else {
            this.amount = "";
        }
        if (typeof returnAmount !== "undefined") {
            this.returnAmount = returnAmount;
        } else {
            this.returnAmount = "";
        }
        if (typeof costTotal !== "undefined") {
            this.costTotal = costTotal;
        } else {
            this.costTotal = "";
        }
        if (typeof salesHeadDivision !== "undefined") {
            this.salesHeadDivision = salesHeadDivision;
        } else {
            this.salesHeadDivision = "";
        }
        if (typeof inTaxSalesTotal !== "undefined") {
            this.inTaxSalesTotal = inTaxSalesTotal;
        } else {
            this.inTaxSalesTotal = "";
        }
        if (typeof outTaxSalesTotal !== "undefined") {
            this.outTaxSalesTotal = outTaxSalesTotal;
        } else {
            this.outTaxSalesTotal = "";
        }
        if (typeof nonTaxSalesTotal !== "undefined") {
            this.nonTaxSalesTotal = nonTaxSalesTotal;
        } else {
            this.nonTaxSalesTotal = "";
        }
        if (typeof nonSalesTargetTotal !== "undefined") {
            this.nonSalesTargetTotal = nonSalesTargetTotal;
        } else {
            this.nonSalesTargetTotal = "";
        }
        if (typeof nonSalesTargetOutTaxTotal !== "undefined") {
            this.nonSalesTargetOutTaxTotal = nonSalesTargetOutTaxTotal;
        } else {
            this.nonSalesTargetOutTaxTotal = "";
        }
        if (typeof nonSalesTargetInTaxTotal !== "undefined") {
            this.nonSalesTargetInTaxTotal = nonSalesTargetInTaxTotal;
        } else {
            this.nonSalesTargetInTaxTotal = "";
        }
        if (typeof nonSalesTargetTaxFreeTotal !== "undefined") {
            this.nonSalesTargetTaxFreeTotal = nonSalesTargetTaxFreeTotal;
        } else {
            this.nonSalesTargetTaxFreeTotal = "";
        }
        if (typeof nonSalesTargetCostTotal !== "undefined") {
            this.nonSalesTargetCostTotal = nonSalesTargetCostTotal;
        } else {
            this.nonSalesTargetCostTotal = "";
        }
        if (typeof nonSalesTargetAmount !== "undefined") {
            this.nonSalesTargetAmount = nonSalesTargetAmount;
        } else {
            this.nonSalesTargetAmount = "";
        }
        if (typeof nonSalesTargetReturnAmount !== "undefined") {
            this.nonSalesTargetReturnAmount = nonSalesTargetReturnAmount;
        } else {
            this.nonSalesTargetReturnAmount = "";
        }
        if (typeof newPoint !== "undefined") {
            this.newPoint = newPoint;
        } else {
            this.newPoint = "";
        }
        if (typeof spendPoint !== "undefined") {
            this.spendPoint = spendPoint;
        } else {
            this.spendPoint = "";
        }
        if (typeof point !== "undefined") {
            this.point = point;
        } else {
            this.point = "";
        }
        if (typeof totalPoint !== "undefined") {
            this.totalPoint = totalPoint;
        } else {
            this.totalPoint = "";
        }
        if (typeof currentMile !== "undefined") {
            this.currentMile = currentMile;
        } else {
            this.currentMile = "";
        }
        if (typeof earnMile !== "undefined") {
            this.earnMile = earnMile;
        } else {
            this.earnMile = "";
        }
        if (typeof totalMile !== "undefined") {
            this.totalMile = totalMile;
        } else {
            this.totalMile = "";
        }
        if (typeof adjustmentMile !== "undefined") {
            this.adjustmentMile = adjustmentMile;
        } else {
            this.adjustmentMile = "";
        }
        if (typeof adjustmentMileDivision !== "undefined") {
            this.adjustmentMileDivision = adjustmentMileDivision;
        } else {
            this.adjustmentMileDivision = "";
        }
        if (typeof adjustmentMileValue !== "undefined") {
            this.adjustmentMileValue = adjustmentMileValue;
        } else {
            this.adjustmentMileValue = "";
        }
        if (typeof storeId !== "undefined") {
            this.storeId = storeId;
        } else {
            this.storeId = "";
        }
        if (typeof storeCode !== "undefined") {
            this.storeCode = storeCode;
        } else {
            this.storeCode = "";
        }
        if (typeof terminalId !== "undefined") {
            this.terminalId = terminalId;
        } else {
            this.terminalId = "";
        }
        if (typeof customerId !== "undefined") {
            this.customerId = customerId;
        } else {
            this.customerId = "";
        }
        if (typeof customerCode !== "undefined") {
            this.customerCode = customerCode;
        } else {
            this.customerCode = "";
        }
        if (typeof terminalTranId !== "undefined") {
            this.terminalTranId = terminalTranId;
        } else {
            this.terminalTranId = "";
        }
        if (typeof terminalTranDateTime !== "undefined") {
            this.terminalTranDateTime = terminalTranDateTime;
        } else {
            this.terminalTranDateTime = "";
        }
        if (typeof sumDivision !== "undefined") {
            this.sumDivision = sumDivision;
        } else {
            this.sumDivision = "";
        }
        if (typeof adjustmentDateTime !== "undefined") {
            this.adjustmentDateTime = adjustmentDateTime;
        } else {
            this.adjustmentDateTime = "";
        }
        if (typeof sumDate !== "undefined") {
            this.sumDate = sumDate;
        } else {
            this.sumDate = "";
        }
        if (typeof customerRank !== "undefined") {
            this.customerRank = customerRank;
        } else {
            this.customerRank = "";
        }
        if (typeof customerGroupId !== "undefined") {
            this.customerGroupId = customerGroupId;
        } else {
            this.customerGroupId = "";
        }
        if (typeof customerGroupId2 !== "undefined") {
            this.customerGroupId2 = customerGroupId2;
        } else {
            this.customerGroupId2 = "";
        }
        if (typeof customerGroupId3 !== "undefined") {
            this.customerGroupId3 = customerGroupId3;
        } else {
            this.customerGroupId3 = "";
        }
        if (typeof customerGroupId4 !== "undefined") {
            this.customerGroupId4 = customerGroupId4;
        } else {
            this.customerGroupId4 = "";
        }
        if (typeof customerGroupId5 !== "undefined") {
            this.customerGroupId5 = customerGroupId5;
        } else {
            this.customerGroupId5 = "";
        }
        if (typeof staffId !== "undefined") {
            this.staffId = staffId;
        } else {
            this.staffId = "";
        }
        if (typeof staffCode !== "undefined") {
            this.staffCode = staffCode;
        } else {
            this.staffCode = "";
        }
        if (typeof staffName !== "undefined") {
            this.staffName = staffName;
        } else {
            this.staffName = "";
        }
        if (typeof creditDivision !== "undefined") {
            this.creditDivision = creditDivision;
        } else {
            this.creditDivision = "";
        }
        if (typeof paymentCount !== "undefined") {
            this.paymentCount = paymentCount;
        } else {
            this.paymentCount = "";
        }
        if (typeof slipNumber !== "undefined") {
            this.slipNumber = slipNumber;
        } else {
            this.slipNumber = "";
        }
        if (typeof cancelSlipNumber !== "undefined") {
            this.cancelSlipNumber = cancelSlipNumber;
        } else {
            this.cancelSlipNumber = "";
        }
        if (typeof authNumber !== "undefined") {
            this.authNumber = authNumber;
        } else {
            this.authNumber = "";
        }
        if (typeof authDate !== "undefined") {
            this.authDate = authDate;
        } else {
            this.authDate = "";
        }
        if (typeof cardCompany !== "undefined") {
            this.cardCompany = cardCompany;
        } else {
            this.cardCompany = "";
        }
        if (typeof denomination !== "undefined") {
            this.denomination = denomination;
        } else {
            this.denomination = "";
        }
        if (typeof memo !== "undefined") {
            this.memo = memo;
        } else {
            this.memo = "";
        }
        if (typeof receiptMemo !== "undefined") {
            this.receiptMemo = receiptMemo;
        } else {
            this.receiptMemo = "";
        }
        if (typeof carriage !== "undefined") {
            this.carriage = carriage;
        } else {
            this.carriage = "";
        }
        if (typeof commission !== "undefined") {
            this.commission = commission;
        } else {
            this.commission = "";
        }
        if (typeof guestNumbers !== "undefined") {
            this.guestNumbers = guestNumbers;
        } else {
            this.guestNumbers = "";
        }
        if (typeof guestNumbersMale !== "undefined") {
            this.guestNumbersMale = guestNumbersMale;
        } else {
            this.guestNumbersMale = "";
        }
        if (typeof guestNumbersFemale !== "undefined") {
            this.guestNumbersFemale = guestNumbersFemale;
        } else {
            this.guestNumbersFemale = "";
        }
        if (typeof guestNumbersUnknown !== "undefined") {
            this.guestNumbersUnknown = guestNumbersUnknown;
        } else {
            this.guestNumbersUnknown = "";
        }
        if (typeof enterDateTime !== "undefined") {
            this.enterDateTime = enterDateTime;
        } else {
            this.enterDateTime = "";
        }
        if (typeof taxFreeSalesDivision !== "undefined") {
            this.taxFreeSalesDivision = taxFreeSalesDivision;
        } else {
            this.taxFreeSalesDivision = "";
        }
        if (typeof netTaxFreeGeneralTaxInclude !== "undefined") {
            this.netTaxFreeGeneralTaxInclude = netTaxFreeGeneralTaxInclude;
        } else {
            this.netTaxFreeGeneralTaxInclude = "";
        }
        if (typeof netTaxFreeGeneralTaxExclude !== "undefined") {
            this.netTaxFreeGeneralTaxExclude = netTaxFreeGeneralTaxExclude;
        } else {
            this.netTaxFreeGeneralTaxExclude = "";
        }
        if (typeof netTaxFreeConsumableTaxInclude !== "undefined") {
            this.netTaxFreeConsumableTaxInclude = netTaxFreeConsumableTaxInclude;
        } else {
            this.netTaxFreeConsumableTaxInclude = "";
        }
        if (typeof netTaxFreeConsumableTaxExclude !== "undefined") {
            this.netTaxFreeConsumableTaxExclude = netTaxFreeConsumableTaxExclude;
        } else {
            this.netTaxFreeConsumableTaxExclude = "";
        }
        if (typeof tags !== "undefined") {
            this.tags = tags;
        } else {
            this.tags = "";
        }
        if (typeof pointGivingDivision !== "undefined") {
            this.pointGivingDivision = pointGivingDivision;
        } else {
            this.pointGivingDivision = "";
        }
        if (typeof pointGivingUnitPrice !== "undefined") {
            this.pointGivingUnitPrice = pointGivingUnitPrice;
        } else {
            this.pointGivingUnitPrice = "";
        }
        if (typeof pointGivingUnit !== "undefined") {
            this.pointGivingUnit = pointGivingUnit;
        } else {
            this.pointGivingUnit = "";
        }
        if (typeof pointSpendDivision !== "undefined") {
            this.pointSpendDivision = pointSpendDivision;
        } else {
            this.pointSpendDivision = "";
        }
        if (typeof mileageDivision !== "undefined") {
            this.mileageDivision = mileageDivision;
        } else {
            this.mileageDivision = "";
        }
        if (typeof mileageLabel !== "undefined") {
            this.mileageLabel = mileageLabel;
        } else {
            this.mileageLabel = "";
        }
        if (typeof customerPinCode !== "undefined") {
            this.customerPinCode = customerPinCode;
        } else {
            this.customerPinCode = "";
        }
        if (typeof returnSales !== "undefined") {
            this.returnSales = returnSales;
        } else {
            this.returnSales = "";
        }
        if (typeof disposeDivision !== "undefined") {
            this.disposeDivision = disposeDivision;
        } else {
            this.disposeDivision = "";
        }
        if (typeof disposeServerTransactionHeadId !== "undefined") {
            this.disposeServerTransactionHeadId = disposeServerTransactionHeadId;
        } else {
            this.disposeServerTransactionHeadId = "";
        }
        if (typeof cancelDateTime !== "undefined") {
            this.cancelDateTime = cancelDateTime;
        } else {
            this.cancelDateTime = "";
        }
        if (typeof sellDivision !== "undefined") {
            this.sellDivision = sellDivision;
        } else {
            this.sellDivision = "";
        }
        if (typeof taxRate !== "undefined") {
            this.taxRate = taxRate;
        } else {
            this.taxRate = "";
        }
        if (typeof taxRounding !== "undefined") {
            this.taxRounding = taxRounding;
        } else {
            this.taxRounding = "";
        }
        if (typeof discountRoundingDivision !== "undefined") {
            this.discountRoundingDivision = discountRoundingDivision;
        } else {
            this.discountRoundingDivision = "";
        }
        if (typeof transactionUuid !== "undefined") {
            this.transactionUuid = transactionUuid;
        } else {
            this.transactionUuid = "";
        }
        if (typeof exchangeTicketNo !== "undefined") {
            this.exchangeTicketNo = exchangeTicketNo;
        } else {
            this.exchangeTicketNo = "";
        }
        if (typeof giftReceiptValidDays !== "undefined") {
            this.giftReceiptValidDays = giftReceiptValidDays;
        } else {
            this.giftReceiptValidDays = "";
        }
        if (typeof barcode !== "undefined") {
            this.barcode = barcode;
        } else {
            this.barcode = "";
        }
        if (typeof updDateTime !== "undefined") {
            this.updDateTime = updDateTime;
        } else {
            this.updDateTime = "";
        }
    }

    public convertStringArray() {
        Logger.log("convertStringArray");
        const res: string[] = [];
        if (typeof this.transactionHeadId !== "undefined") {
            res.push(this.transactionHeadId);
        } else {
            res.push("");
        }
        if (typeof this.transactionDateTime !== "undefined") {
            res.push(this.transactionDateTime);
        } else {
            res.push("");
        }
        if (typeof this.transactionHeadDivision !== "undefined") {
            res.push(this.transactionHeadDivision);
        } else {
            res.push("");
        }
        if (typeof this.cancelDivision !== "undefined") {
            res.push(this.cancelDivision);
        } else {
            res.push("");
        }
        if (typeof this.unitNonDiscountsubtotal !== "undefined") {
            res.push(this.unitNonDiscountsubtotal);
        } else {
            res.push("");
        }
        if (typeof this.unitDiscountsubtotal !== "undefined") {
            res.push(this.unitDiscountsubtotal);
        } else {
            res.push("");
        }
        if (typeof this.unitStaffDiscountsubtotal !== "undefined") {
            res.push(this.unitStaffDiscountsubtotal);
        } else {
            res.push("");
        }
        if (typeof this.unitBargainDiscountsubtotal !== "undefined") {
            res.push(this.unitBargainDiscountsubtotal);
        } else {
            res.push("");
        }
        if (typeof this.subtotal !== "undefined") {
            res.push(this.subtotal);
        } else {
            res.push("");
        }
        if (typeof this.subtotalForDiscount !== "undefined") {
            res.push(this.subtotalForDiscount);
        } else {
            res.push("");
        }
        if (typeof this.subtotalDiscountPrice !== "undefined") {
            res.push(this.subtotalDiscountPrice);
        } else {
            res.push("");
        }
        if (typeof this.subtotalDiscountRate !== "undefined") {
            res.push(this.subtotalDiscountRate);
        } else {
            res.push("");
        }
        if (typeof this.subtotalDiscountDivision !== "undefined") {
            res.push(this.subtotalDiscountDivision);
        } else {
            res.push("");
        }
        if (typeof this.pointDiscount !== "undefined") {
            res.push(this.pointDiscount);
        } else {
            res.push("");
        }
        if (typeof this.couponDiscount !== "undefined") {
            res.push(this.couponDiscount);
        } else {
            res.push("");
        }
        if (typeof this.total !== "undefined") {
            res.push(this.total);
        } else {
            res.push("");
        }
        if (typeof this.taxInclude !== "undefined") {
            res.push(this.taxInclude);
        } else {
            res.push("");
        }
        if (typeof this.taxExclude !== "undefined") {
            res.push(this.taxExclude);
        } else {
            res.push("");
        }
        if (typeof this.roundingDivision !== "undefined") {
            res.push(this.roundingDivision);
        } else {
            res.push("");
        }
        if (typeof this.roundingPrice !== "undefined") {
            res.push(this.roundingPrice);
        } else {
            res.push("");
        }
        if (typeof this.cashTotal !== "undefined") {
            res.push(this.cashTotal);
        } else {
            res.push("");
        }
        if (typeof this.creditTotal !== "undefined") {
            res.push(this.creditTotal);
        } else {
            res.push("");
        }
        if (typeof this.deposit !== "undefined") {
            res.push(this.deposit);
        } else {
            res.push("");
        }
        if (typeof this.depositCash !== "undefined") {
            res.push(this.depositCash);
        } else {
            res.push("");
        }
        if (typeof this.depositCredit !== "undefined") {
            res.push(this.depositCredit);
        } else {
            res.push("");
        }
        if (typeof this.change !== "undefined") {
            res.push(this.change);
        } else {
            res.push("");
        }
        if (typeof this.tipCash !== "undefined") {
            res.push(this.tipCash);
        } else {
            res.push("");
        }
        if (typeof this.tipCredit !== "undefined") {
            res.push(this.tipCredit);
        } else {
            res.push("");
        }
        if (typeof this.amount !== "undefined") {
            res.push(this.amount);
        } else {
            res.push("");
        }
        if (typeof this.returnAmount !== "undefined") {
            res.push(this.returnAmount);
        } else {
            res.push("");
        }
        if (typeof this.costTotal !== "undefined") {
            res.push(this.costTotal);
        } else {
            res.push("");
        }
        if (typeof this.salesHeadDivision !== "undefined") {
            res.push(this.salesHeadDivision);
        } else {
            res.push("");
        }
        if (typeof this.inTaxSalesTotal !== "undefined") {
            res.push(this.inTaxSalesTotal);
        } else {
            res.push("");
        }
        if (typeof this.outTaxSalesTotal !== "undefined") {
            res.push(this.outTaxSalesTotal);
        } else {
            res.push("");
        }
        if (typeof this.nonTaxSalesTotal !== "undefined") {
            res.push(this.nonTaxSalesTotal);
        } else {
            res.push("");
        }
        if (typeof this.nonSalesTargetTotal !== "undefined") {
            res.push(this.nonSalesTargetTotal);
        } else {
            res.push("");
        }
        if (typeof this.nonSalesTargetOutTaxTotal !== "undefined") {
            res.push(this.nonSalesTargetOutTaxTotal);
        } else {
            res.push("");
        }
        if (typeof this.nonSalesTargetInTaxTotal !== "undefined") {
            res.push(this.nonSalesTargetInTaxTotal);
        } else {
            res.push("");
        }
        if (typeof this.nonSalesTargetTaxFreeTotal !== "undefined") {
            res.push(this.nonSalesTargetTaxFreeTotal);
        } else {
            res.push("");
        }
        if (typeof this.nonSalesTargetCostTotal !== "undefined") {
            res.push(this.nonSalesTargetCostTotal);
        } else {
            res.push("");
        }
        if (typeof this.nonSalesTargetAmount !== "undefined") {
            res.push(this.nonSalesTargetAmount);
        } else {
            res.push("");
        }
        if (typeof this.nonSalesTargetReturnAmount !== "undefined") {
            res.push(this.nonSalesTargetReturnAmount);
        } else {
            res.push("");
        }
        if (typeof this.newPoint !== "undefined") {
            res.push(this.newPoint);
        } else {
            res.push("");
        }
        if (typeof this.spendPoint !== "undefined") {
            res.push(this.spendPoint);
        } else {
            res.push("");
        }
        if (typeof this.point !== "undefined") {
            res.push(this.point);
        } else {
            res.push("");
        }
        if (typeof this.totalPoint !== "undefined") {
            res.push(this.totalPoint);
        } else {
            res.push("");
        }
        if (typeof this.currentMile !== "undefined") {
            res.push(this.currentMile);
        } else {
            res.push("");
        }
        if (typeof this.earnMile !== "undefined") {
            res.push(this.earnMile);
        } else {
            res.push("");
        }
        if (typeof this.totalMile !== "undefined") {
            res.push(this.totalMile);
        } else {
            res.push("");
        }
        if (typeof this.adjustmentMile !== "undefined") {
            res.push(this.adjustmentMile);
        } else {
            res.push("");
        }
        if (typeof this.adjustmentMileDivision !== "undefined") {
            res.push(this.adjustmentMileDivision);
        } else {
            res.push("");
        }
        if (typeof this.adjustmentMileValue !== "undefined") {
            res.push(this.adjustmentMileValue);
        } else {
            res.push("");
        }
        if (typeof this.storeId !== "undefined") {
            res.push(this.storeId);
        } else {
            res.push("");
        }
        if (typeof this.storeCode !== "undefined") {
            res.push(this.storeCode);
        } else {
            res.push("");
        }
        if (typeof this.terminalId !== "undefined") {
            res.push(this.terminalId);
        } else {
            res.push("");
        }
        if (typeof this.customerId !== "undefined") {
            res.push(this.customerId);
        } else {
            res.push("");
        }
        if (typeof this.customerCode !== "undefined") {
            res.push(this.customerCode);
        } else {
            res.push("");
        }
        if (typeof this.terminalTranId !== "undefined") {
            res.push(this.terminalTranId);
        } else {
            res.push("");
        }
        if (typeof this.terminalTranDateTime !== "undefined") {
            res.push(this.terminalTranDateTime);
        } else {
            res.push("");
        }
        if (typeof this.sumDivision !== "undefined") {
            res.push(this.sumDivision);
        } else {
            res.push("");
        }
        if (typeof this.adjustmentDateTime !== "undefined") {
            res.push(this.adjustmentDateTime);
        } else {
            res.push("");
        }
        if (typeof this.sumDate !== "undefined") {
            res.push(this.sumDate);
        } else {
            res.push("");
        }
        if (typeof this.customerRank !== "undefined") {
            res.push(this.customerRank);
        } else {
            res.push("");
        }
        if (typeof this.customerGroupId !== "undefined") {
            res.push(this.customerGroupId);
        } else {
            res.push("");
        }
        if (typeof this.customerGroupId2 !== "undefined") {
            res.push(this.customerGroupId2);
        } else {
            res.push("");
        }
        if (typeof this.customerGroupId3 !== "undefined") {
            res.push(this.customerGroupId3);
        } else {
            res.push("");
        }
        if (typeof this.customerGroupId4 !== "undefined") {
            res.push(this.customerGroupId4);
        } else {
            res.push("");
        }
        if (typeof this.customerGroupId5 !== "undefined") {
            res.push(this.customerGroupId5);
        } else {
            res.push("");
        }
        if (typeof this.staffId !== "undefined") {
            res.push(this.staffId);
        } else {
            res.push("");
        }
        if (typeof this.staffCode !== "undefined") {
            res.push(this.staffCode);
        } else {
            res.push("");
        }
        if (typeof this.staffName !== "undefined") {
            res.push(this.staffName);
        } else {
            res.push("");
        }
        if (typeof this.creditDivision !== "undefined") {
            res.push(this.creditDivision);
        } else {
            res.push("");
        }
        if (typeof this.paymentCount !== "undefined") {
            res.push(this.paymentCount);
        } else {
            res.push("");
        }
        if (typeof this.slipNumber !== "undefined") {
            res.push(this.slipNumber);
        } else {
            res.push("");
        }
        if (typeof this.cancelSlipNumber !== "undefined") {
            res.push(this.cancelSlipNumber);
        } else {
            res.push("");
        }
        if (typeof this.authNumber !== "undefined") {
            res.push(this.authNumber);
        } else {
            res.push("");
        }
        if (typeof this.authDate !== "undefined") {
            res.push(this.authDate);
        } else {
            res.push("");
        }
        if (typeof this.cardCompany !== "undefined") {
            res.push(this.cardCompany);
        } else {
            res.push("");
        }
        if (typeof this.denomination !== "undefined") {
            res.push(this.denomination);
        } else {
            res.push("");
        }
        if (typeof this.memo !== "undefined") {
            res.push(this.memo);
        } else {
            res.push("");
        }
        if (typeof this.receiptMemo !== "undefined") {
            res.push(this.receiptMemo);
        } else {
            res.push("");
        }
        if (typeof this.carriage !== "undefined") {
            res.push(this.carriage);
        } else {
            res.push("");
        }
        if (typeof this.commission !== "undefined") {
            res.push(this.commission);
        } else {
            res.push("");
        }
        if (typeof this.guestNumbers !== "undefined") {
            res.push(this.guestNumbers);
        } else {
            res.push("");
        }
        if (typeof this.guestNumbersMale !== "undefined") {
            res.push(this.guestNumbersMale);
        } else {
            res.push("");
        }
        if (typeof this.guestNumbersFemale !== "undefined") {
            res.push(this.guestNumbersFemale);
        } else {
            res.push("");
        }
        if (typeof this.guestNumbersUnknown !== "undefined") {
            res.push(this.guestNumbersUnknown);
        } else {
            res.push("");
        }
        if (typeof this.enterDateTime !== "undefined") {
            res.push(this.enterDateTime);
        } else {
            res.push("");
        }
        if (typeof this.taxFreeSalesDivision !== "undefined") {
            res.push(this.taxFreeSalesDivision);
        } else {
            res.push("");
        }
        if (typeof this.netTaxFreeGeneralTaxInclude !== "undefined") {
            res.push(this.netTaxFreeGeneralTaxInclude);
        } else {
            res.push("");
        }
        if (typeof this.netTaxFreeGeneralTaxExclude !== "undefined") {
            res.push(this.netTaxFreeGeneralTaxExclude);
        } else {
            res.push("");
        }
        if (typeof this.netTaxFreeConsumableTaxInclude !== "undefined") {
            res.push(this.netTaxFreeConsumableTaxInclude);
        } else {
            res.push("");
        }
        if (typeof this.netTaxFreeConsumableTaxExclude !== "undefined") {
            res.push(this.netTaxFreeConsumableTaxExclude);
        } else {
            res.push("");
        }
        if (typeof this.tags !== "undefined") {
            res.push(this.tags);
        } else {
            res.push("");
        }
        if (typeof this.pointGivingDivision !== "undefined") {
            res.push(this.pointGivingDivision);
        } else {
            res.push("");
        }
        if (typeof this.pointGivingUnitPrice !== "undefined") {
            res.push(this.pointGivingUnitPrice);
        } else {
            res.push("");
        }
        if (typeof this.pointGivingUnit !== "undefined") {
            res.push(this.pointGivingUnit);
        } else {
            res.push("");
        }
        if (typeof this.pointSpendDivision !== "undefined") {
            res.push(this.pointSpendDivision);
        } else {
            res.push("");
        }
        if (typeof this.mileageDivision !== "undefined") {
            res.push(this.mileageDivision);
        } else {
            res.push("");
        }
        if (typeof this.mileageLabel !== "undefined") {
            res.push(this.mileageLabel);
        } else {
            res.push("");
        }
        if (typeof this.customerPinCode !== "undefined") {
            res.push(this.customerPinCode);
        } else {
            res.push("");
        }
        if (typeof this.returnSales !== "undefined") {
            res.push(this.returnSales);
        } else {
            res.push("");
        }
        if (typeof this.disposeDivision !== "undefined") {
            res.push(this.disposeDivision);
        } else {
            res.push("");
        }
        if (typeof this.disposeServerTransactionHeadId !== "undefined") {
            res.push(this.disposeServerTransactionHeadId);
        } else {
            res.push("");
        }
        if (typeof this.cancelDateTime !== "undefined") {
            res.push(this.cancelDateTime);
        } else {
            res.push("");
        }
        if (typeof this.sellDivision !== "undefined") {
            res.push(this.sellDivision);
        } else {
            res.push("");
        }
        if (typeof this.taxRate !== "undefined") {
            res.push(this.taxRate);
        } else {
            res.push("");
        }
        if (typeof this.taxRounding !== "undefined") {
            res.push(this.taxRounding);
        } else {
            res.push("");
        }
        if (typeof this.discountRoundingDivision !== "undefined") {
            res.push(this.discountRoundingDivision);
        } else {
            res.push("");
        }
        if (typeof this.transactionUuid !== "undefined") {
            res.push(this.transactionUuid);
        } else {
            res.push("");
        }
        if (typeof this.exchangeTicketNo !== "undefined") {
            res.push(this.exchangeTicketNo);
        } else {
            res.push("");
        }
        if (typeof this.giftReceiptValidDays !== "undefined") {
            res.push(this.giftReceiptValidDays);
        } else {
            res.push("");
        }
        if (typeof this.barcode !== "undefined") {
            res.push(this.barcode);
        } else {
            res.push("");
        }
        if (typeof this.updDateTime !== "undefined") {
            res.push(this.updDateTime);
        } else {
            res.push("");
        }

        return res;
    }

    public bindObject(request: any) {
        if (typeof request?.transactionHeadId === "string") {
            this.transactionHeadId = request.transactionHeadId;
        } else {
            this.transactionHeadId = "";
        }
        if (typeof request?.transactionDateTime === "string") {
            this.transactionDateTime = request.transactionDateTime;
        } else {
            this.transactionDateTime = "";
        }
        if (typeof request?.transactionHeadDivision === "string") {
            this.transactionHeadDivision = request.transactionHeadDivision;
        } else {
            this.transactionHeadDivision = "";
        }
        if (typeof request?.cancelDivision === "string") {
            this.cancelDivision = request.cancelDivision;
        } else {
            this.cancelDivision = "";
        }
        if (typeof request?.unitNonDiscountsubtotal === "string") {
            this.unitNonDiscountsubtotal = request.unitNonDiscountsubtotal;
        } else {
            this.unitNonDiscountsubtotal = "";
        }
        if (typeof request?.unitDiscountsubtotal === "string") {
            this.unitDiscountsubtotal = request.unitDiscountsubtotal;
        } else {
            this.unitDiscountsubtotal = "";
        }
        if (typeof request?.unitStaffDiscountsubtotal === "string") {
            this.unitStaffDiscountsubtotal = request.unitStaffDiscountsubtotal;
        } else {
            this.unitStaffDiscountsubtotal = "";
        }
        if (typeof request?.unitBargainDiscountsubtotal === "string") {
            this.unitBargainDiscountsubtotal = request.unitBargainDiscountsubtotal;
        } else {
            this.unitBargainDiscountsubtotal = "";
        }
        if (typeof request?.subtotal === "string") {
            this.subtotal = request.subtotal;
        } else {
            this.subtotal = "";
        }
        if (typeof request?.subtotalForDiscount === "string") {
            this.subtotalForDiscount = request.subtotalForDiscount;
        } else {
            this.subtotalForDiscount = "";
        }
        if (typeof request?.subtotalDiscountPrice === "string") {
            this.subtotalDiscountPrice = request.subtotalDiscountPrice;
        } else {
            this.subtotalDiscountPrice = "";
        }
        if (typeof request?.subtotalDiscountRate === "string") {
            this.subtotalDiscountRate = request.subtotalDiscountRate;
        } else {
            this.subtotalDiscountRate = "";
        }
        if (typeof request?.subtotalDiscountDivision === "string") {
            this.subtotalDiscountDivision = request.subtotalDiscountDivision;
        } else {
            this.subtotalDiscountDivision = "";
        }
        if (typeof request?.pointDiscount === "string") {
            this.pointDiscount = request.pointDiscount;
        } else {
            this.pointDiscount = "";
        }
        if (typeof request?.couponDiscount === "string") {
            this.couponDiscount = request.couponDiscount;
        } else {
            this.couponDiscount = "";
        }
        if (typeof request?.total === "string") {
            this.total = request.total;
        } else {
            this.total = "";
        }
        if (typeof request?.taxInclude === "string") {
            this.taxInclude = request.taxInclude;
        } else {
            this.taxInclude = "";
        }
        if (typeof request?.taxExclude === "string") {
            this.taxExclude = request.taxExclude;
        } else {
            this.taxExclude = "";
        }
        if (typeof request?.roundingDivision === "string") {
            this.roundingDivision = request.roundingDivision;
        } else {
            this.roundingDivision = "";
        }
        if (typeof request?.roundingPrice === "string") {
            this.roundingPrice = request.roundingPrice;
        } else {
            this.roundingPrice = "";
        }
        if (typeof request?.cashTotal === "string") {
            this.cashTotal = request.cashTotal;
        } else {
            this.cashTotal = "";
        }
        if (typeof request?.creditTotal === "string") {
            this.creditTotal = request.creditTotal;
        } else {
            this.creditTotal = "";
        }
        if (typeof request?.deposit === "string") {
            this.deposit = request.deposit;
        } else {
            this.deposit = "";
        }
        if (typeof request?.depositCash === "string") {
            this.depositCash = request.depositCash;
        } else {
            this.depositCash = "";
        }
        if (typeof request?.depositCredit === "string") {
            this.depositCredit = request.depositCredit;
        } else {
            this.depositCredit = "";
        }
        if (typeof request?.change === "string") {
            this.change = request.change;
        } else {
            this.change = "";
        }
        if (typeof request?.tipCash === "string") {
            this.tipCash = request.tipCash;
        } else {
            this.tipCash = "";
        }
        if (typeof request?.tipCredit === "string") {
            this.tipCredit = request.tipCredit;
        } else {
            this.tipCredit = "";
        }
        if (typeof request?.amount === "string") {
            this.amount = request.amount;
        } else {
            this.amount = "";
        }
        if (typeof request?.returnAmount === "string") {
            this.returnAmount = request.returnAmount;
        } else {
            this.returnAmount = "";
        }
        if (typeof request?.costTotal === "string") {
            this.costTotal = request.costTotal;
        } else {
            this.costTotal = "";
        }
        if (typeof request?.salesHeadDivision === "string") {
            this.salesHeadDivision = request.salesHeadDivision;
        } else {
            this.salesHeadDivision = "";
        }
        if (typeof request?.inTaxSalesTotal === "string") {
            this.inTaxSalesTotal = request.inTaxSalesTotal;
        } else {
            this.inTaxSalesTotal = "";
        }
        if (typeof request?.outTaxSalesTotal === "string") {
            this.outTaxSalesTotal = request.outTaxSalesTotal;
        } else {
            this.outTaxSalesTotal = "";
        }
        if (typeof request?.nonTaxSalesTotal === "string") {
            this.nonTaxSalesTotal = request.nonTaxSalesTotal;
        } else {
            this.nonTaxSalesTotal = "";
        }
        if (typeof request?.nonSalesTargetTotal === "string") {
            this.nonSalesTargetTotal = request.nonSalesTargetTotal;
        } else {
            this.nonSalesTargetTotal = "";
        }
        if (typeof request?.nonSalesTargetOutTaxTotal === "string") {
            this.nonSalesTargetOutTaxTotal = request.nonSalesTargetOutTaxTotal;
        } else {
            this.nonSalesTargetOutTaxTotal = "";
        }
        if (typeof request?.nonSalesTargetInTaxTotal === "string") {
            this.nonSalesTargetInTaxTotal = request.nonSalesTargetInTaxTotal;
        } else {
            this.nonSalesTargetInTaxTotal = "";
        }
        if (typeof request?.nonSalesTargetTaxFreeTotal === "string") {
            this.nonSalesTargetTaxFreeTotal = request.nonSalesTargetTaxFreeTotal;
        } else {
            this.nonSalesTargetTaxFreeTotal = "";
        }
        if (typeof request?.nonSalesTargetCostTotal === "string") {
            this.nonSalesTargetCostTotal = request.nonSalesTargetCostTotal;
        } else {
            this.nonSalesTargetCostTotal = "";
        }
        if (typeof request?.nonSalesTargetAmount === "string") {
            this.nonSalesTargetAmount = request.nonSalesTargetAmount;
        } else {
            this.nonSalesTargetAmount = "";
        }
        if (typeof request?.nonSalesTargetReturnAmount === "string") {
            this.nonSalesTargetReturnAmount = request.nonSalesTargetReturnAmount;
        } else {
            this.nonSalesTargetReturnAmount = "";
        }
        if (typeof request?.newPoint === "string") {
            this.newPoint = request.newPoint;
        } else {
            this.newPoint = "";
        }
        if (typeof request?.spendPoint === "string") {
            this.spendPoint = request.spendPoint;
        } else {
            this.spendPoint = "";
        }
        if (typeof request?.point === "string") {
            this.point = request.point;
        } else {
            this.point = "";
        }
        if (typeof request?.totalPoint === "string") {
            this.totalPoint = request.totalPoint;
        } else {
            this.totalPoint = "";
        }
        if (typeof request?.currentMile === "string") {
            this.currentMile = request.currentMile;
        } else {
            this.currentMile = "";
        }
        if (typeof request?.earnMile === "string") {
            this.earnMile = request.earnMile;
        } else {
            this.earnMile = "";
        }
        if (typeof request?.totalMile === "string") {
            this.totalMile = request.totalMile;
        } else {
            this.totalMile = "";
        }
        if (typeof request?.adjustmentMile === "string") {
            this.adjustmentMile = request.adjustmentMile;
        } else {
            this.adjustmentMile = "";
        }
        if (typeof request?.adjustmentMileDivision === "string") {
            this.adjustmentMileDivision = request.adjustmentMileDivision;
        } else {
            this.adjustmentMileDivision = "";
        }
        if (typeof request?.adjustmentMileValue === "string") {
            this.adjustmentMileValue = request.adjustmentMileValue;
        } else {
            this.adjustmentMileValue = "";
        }
        if (typeof request?.storeId === "string") {
            this.storeId = request.storeId;
        } else {
            this.storeId = "";
        }
        if (typeof request?.storeCode === "string") {
            this.storeCode = request.storeCode;
        } else {
            this.storeCode = "";
        }
        if (typeof request?.terminalId === "string") {
            this.terminalId = request.terminalId;
        } else {
            this.terminalId = "";
        }
        if (typeof request?.customerId === "string") {
            this.customerId = request.customerId;
        } else {
            this.customerId = "";
        }
        if (typeof request?.customerCode === "string") {
            this.customerCode = request.customerCode;
        } else {
            this.customerCode = "";
        }
        if (typeof request?.terminalTranId === "string") {
            this.terminalTranId = request.terminalTranId;
        } else {
            this.terminalTranId = "";
        }
        if (typeof request?.terminalTranDateTime === "string") {
            this.terminalTranDateTime = request.terminalTranDateTime;
        } else {
            this.terminalTranDateTime = "";
        }
        if (typeof request?.sumDivision === "string") {
            this.sumDivision = request.sumDivision;
        } else {
            this.sumDivision = "";
        }
        if (typeof request?.adjustmentDateTime === "string") {
            this.adjustmentDateTime = request.adjustmentDateTime;
        } else {
            this.adjustmentDateTime = "";
        }
        if (typeof request?.sumDate === "string") {
            this.sumDate = request.sumDate;
        } else {
            this.sumDate = "";
        }
        if (typeof request?.customerRank === "string") {
            this.customerRank = request.customerRank;
        } else {
            this.customerRank = "";
        }
        if (typeof request?.customerGroupId === "string") {
            this.customerGroupId = request.customerGroupId;
        } else {
            this.customerGroupId = "";
        }
        if (typeof request?.customerGroupId2 === "string") {
            this.customerGroupId2 = request.customerGroupId2;
        } else {
            this.customerGroupId2 = "";
        }
        if (typeof request?.customerGroupId3 === "string") {
            this.customerGroupId3 = request.customerGroupId3;
        } else {
            this.customerGroupId3 = "";
        }
        if (typeof request?.customerGroupId4 === "string") {
            this.customerGroupId4 = request.customerGroupId4;
        } else {
            this.customerGroupId4 = "";
        }
        if (typeof request?.customerGroupId5 === "string") {
            this.customerGroupId5 = request.customerGroupId5;
        } else {
            this.customerGroupId5 = "";
        }
        if (typeof request?.staffId === "string") {
            this.staffId = request.staffId;
        } else {
            this.staffId = "";
        }
        if (typeof request?.staffCode === "string") {
            this.staffCode = request.staffCode;
        } else {
            this.staffCode = "";
        }
        if (typeof request?.staffName === "string") {
            this.staffName = request.staffName;
        } else {
            this.staffName = "";
        }
        if (typeof request?.creditDivision === "string") {
            this.creditDivision = request.creditDivision;
        } else {
            this.creditDivision = "";
        }
        if (typeof request?.paymentCount === "string") {
            this.paymentCount = request.paymentCount;
        } else {
            this.paymentCount = "";
        }
        if (typeof request?.slipNumber === "string") {
            this.slipNumber = request.slipNumber;
        } else {
            this.slipNumber = "";
        }
        if (typeof request?.cancelSlipNumber === "string") {
            this.cancelSlipNumber = request.cancelSlipNumber;
        } else {
            this.cancelSlipNumber = "";
        }
        if (typeof request?.authNumber === "string") {
            this.authNumber = request.authNumber;
        } else {
            this.authNumber = "";
        }
        if (typeof request?.authDate === "string") {
            this.authDate = request.authDate;
        } else {
            this.authDate = "";
        }
        if (typeof request?.cardCompany === "string") {
            this.cardCompany = request.cardCompany;
        } else {
            this.cardCompany = "";
        }
        if (typeof request?.denomination === "string") {
            this.denomination = request.denomination;
        } else {
            this.denomination = "";
        }
        if (typeof request?.memo === "string") {
            this.memo = request.memo;
        } else {
            this.memo = "";
        }
        if (typeof request?.receiptMemo === "string") {
            this.receiptMemo = request.receiptMemo;
        } else {
            this.receiptMemo = "";
        }
        if (typeof request?.carriage === "string") {
            this.carriage = request.carriage;
        } else {
            this.carriage = "";
        }
        if (typeof request?.commission === "string") {
            this.commission = request.commission;
        } else {
            this.commission = "";
        }
        if (typeof request?.guestNumbers === "string") {
            this.guestNumbers = request.guestNumbers;
        } else {
            this.guestNumbers = "";
        }
        if (typeof request?.guestNumbersMale === "string") {
            this.guestNumbersMale = request.guestNumbersMale;
        } else {
            this.guestNumbersMale = "";
        }
        if (typeof request?.guestNumbersFemale === "string") {
            this.guestNumbersFemale = request.guestNumbersFemale;
        } else {
            this.guestNumbersFemale = "";
        }
        if (typeof request?.guestNumbersUnknown === "string") {
            this.guestNumbersUnknown = request.guestNumbersUnknown;
        } else {
            this.guestNumbersUnknown = "";
        }
        if (typeof request?.enterDateTime === "string") {
            this.enterDateTime = request.enterDateTime;
        } else {
            this.enterDateTime = "";
        }
        if (typeof request?.taxFreeSalesDivision === "string") {
            this.taxFreeSalesDivision = request.taxFreeSalesDivision;
        } else {
            this.taxFreeSalesDivision = "";
        }
        if (typeof request?.netTaxFreeGeneralTaxInclude === "string") {
            this.netTaxFreeGeneralTaxInclude = request.netTaxFreeGeneralTaxInclude;
        } else {
            this.netTaxFreeGeneralTaxInclude = "";
        }
        if (typeof request?.netTaxFreeGeneralTaxExclude === "string") {
            this.netTaxFreeGeneralTaxExclude = request.netTaxFreeGeneralTaxExclude;
        } else {
            this.netTaxFreeGeneralTaxExclude = "";
        }
        if (typeof request?.netTaxFreeConsumableTaxInclude === "string") {
            this.netTaxFreeConsumableTaxInclude = request.netTaxFreeConsumableTaxInclude;
        } else {
            this.netTaxFreeConsumableTaxInclude = "";
        }
        if (typeof request?.netTaxFreeConsumableTaxExclude === "string") {
            this.netTaxFreeConsumableTaxExclude = request.netTaxFreeConsumableTaxExclude;
        } else {
            this.netTaxFreeConsumableTaxExclude = "";
        }
        if (typeof request?.tags === "string") {
            this.tags = request.tags;
        } else {
            this.tags = "";
        }
        if (typeof request?.pointGivingDivision === "string") {
            this.pointGivingDivision = request.pointGivingDivision;
        } else {
            this.pointGivingDivision = "";
        }
        if (typeof request?.pointGivingUnitPrice === "string") {
            this.pointGivingUnitPrice = request.pointGivingUnitPrice;
        } else {
            this.pointGivingUnitPrice = "";
        }
        if (typeof request?.pointGivingUnit === "string") {
            this.pointGivingUnit = request.pointGivingUnit;
        } else {
            this.pointGivingUnit = "";
        }
        if (typeof request?.pointSpendDivision === "string") {
            this.pointSpendDivision = request.pointSpendDivision;
        } else {
            this.pointSpendDivision = "";
        }
        if (typeof request?.mileageDivision === "string") {
            this.mileageDivision = request.mileageDivision;
        } else {
            this.mileageDivision = "";
        }
        if (typeof request?.mileageLabel === "string") {
            this.mileageLabel = request.mileageLabel;
        } else {
            this.mileageLabel = "";
        }
        if (typeof request?.customerPinCode === "string") {
            this.customerPinCode = request.customerPinCode;
        } else {
            this.customerPinCode = "";
        }
        if (typeof request?.returnSales === "string") {
            this.returnSales = request.returnSales;
        } else {
            this.returnSales = "";
        }
        if (typeof request?.disposeDivision === "string") {
            this.disposeDivision = request.disposeDivision;
        } else {
            this.disposeDivision = "";
        }
        if (typeof request?.disposeServerTransactionHeadId === "string") {
            this.disposeServerTransactionHeadId = request.disposeServerTransactionHeadId;
        } else {
            this.disposeServerTransactionHeadId = "";
        }
        if (typeof request?.cancelDateTime === "string") {
            this.cancelDateTime = request.cancelDateTime;
        } else {
            this.cancelDateTime = "";
        }
        if (typeof request?.sellDivision === "string") {
            this.sellDivision = request.sellDivision;
        } else {
            this.sellDivision = "";
        }
        if (typeof request?.taxRate === "string") {
            this.taxRate = request.taxRate;
        } else {
            this.taxRate = "";
        }
        if (typeof request?.taxRounding === "string") {
            this.taxRounding = request.taxRounding;
        } else {
            this.taxRounding = "";
        }
        if (typeof request?.discountRoundingDivision === "string") {
            this.discountRoundingDivision = request.discountRoundingDivision;
        } else {
            this.discountRoundingDivision = "";
        }
        if (typeof request?.transactionUuid === "string") {
            this.transactionUuid = request.transactionUuid;
        } else {
            this.transactionUuid = "";
        }
        if (typeof request?.exchangeTicketNo === "string") {
            this.exchangeTicketNo = request.exchangeTicketNo;
        } else {
            this.exchangeTicketNo = "";
        }
        if (typeof request?.giftReceiptValidDays === "string") {
            this.giftReceiptValidDays = request.giftReceiptValidDays;
        } else {
            this.giftReceiptValidDays = "";
        }
        if (typeof request?.barcode === "string") {
            this.barcode = request.barcode;
        } else {
            this.barcode = "";
        }
        if (typeof request?.updDateTime === "string") {
            this.updDateTime = request.updDateTime;
        } else {
            this.updDateTime = "";
        }
    }

    public bindArray(arr: string|number[]) {
        if (typeof arr[0] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[0] === "string") {
            this.transactionHeadId = arr[0];
        } else {
            this.transactionHeadId = String(arr[0]);
        }
        if (typeof arr[1] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[1] === "string") {
            this.transactionDateTime = arr[1];
        } else {
            this.transactionDateTime = String(arr[1]);
        }
        if (typeof arr[2] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[2] === "string") {
            this.transactionHeadDivision = arr[2];
        } else {
            this.transactionHeadDivision = String(arr[2]);
        }
        if (typeof arr[3] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[3] === "string") {
            this.cancelDivision = arr[3];
        } else {
            this.cancelDivision = String(arr[3]);
        }
        if (typeof arr[4] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[4] === "string") {
            this.unitNonDiscountsubtotal = arr[4];
        } else {
            this.unitNonDiscountsubtotal = String(arr[4]);
        }
        if (typeof arr[5] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[5] === "string") {
            this.unitDiscountsubtotal = arr[5];
        } else {
            this.unitDiscountsubtotal = String(arr[5]);
        }
        if (typeof arr[6] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[6] === "string") {
            this.unitStaffDiscountsubtotal = arr[6];
        } else {
            this.unitStaffDiscountsubtotal = String(arr[6]);
        }
        if (typeof arr[7] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[7] === "string") {
            this.unitBargainDiscountsubtotal = arr[7];
        } else {
            this.unitBargainDiscountsubtotal = String(arr[7]);
        }
        if (typeof arr[8] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[8] === "string") {
            this.subtotal = arr[8];
        } else {
            this.subtotal = String(arr[8]);
        }
        if (typeof arr[9] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[9] === "string") {
            this.subtotalForDiscount = arr[9];
        } else {
            this.subtotalForDiscount = String(arr[9]);
        }
        if (typeof arr[10] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[10] === "string") {
            this.subtotalDiscountPrice = arr[10];
        } else {
            this.subtotalDiscountPrice = String(arr[10]);
        }
        if (typeof arr[11] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[11] === "string") {
            this.subtotalDiscountRate = arr[11];
        } else {
            this.subtotalDiscountRate = String(arr[11]);
        }
        if (typeof arr[12] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[12] === "string") {
            this.subtotalDiscountDivision = arr[12];
        } else {
            this.subtotalDiscountDivision = String(arr[12]);
        }
        if (typeof arr[13] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[13] === "string") {
            this.pointDiscount = arr[13];
        } else {
            this.pointDiscount = String(arr[13]);
        }
        if (typeof arr[14] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[14] === "string") {
            this.couponDiscount = arr[14];
        } else {
            this.couponDiscount = String(arr[14]);
        }
        if (typeof arr[15] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[15] === "string") {
            this.total = arr[15];
        } else {
            this.total = String(arr[15]);
        }
        if (typeof arr[16] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[16] === "string") {
            this.taxInclude = arr[16];
        } else {
            this.taxInclude = String(arr[16]);
        }
        if (typeof arr[17] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[17] === "string") {
            this.taxExclude = arr[17];
        } else {
            this.taxExclude = String(arr[17]);
        }
        if (typeof arr[18] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[18] === "string") {
            this.roundingDivision = arr[18];
        } else {
            this.roundingDivision = String(arr[18]);
        }
        if (typeof arr[19] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[19] === "string") {
            this.roundingPrice = arr[19];
        } else {
            this.roundingPrice = String(arr[19]);
        }
        if (typeof arr[20] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[20] === "string") {
            this.cashTotal = arr[20];
        } else {
            this.cashTotal = String(arr[20]);
        }
        if (typeof arr[21] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[21] === "string") {
            this.creditTotal = arr[21];
        } else {
            this.creditTotal = String(arr[21]);
        }
        if (typeof arr[22] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[22] === "string") {
            this.deposit = arr[22];
        } else {
            this.deposit = String(arr[22]);
        }
        if (typeof arr[23] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[23] === "string") {
            this.depositCash = arr[23];
        } else {
            this.depositCash = String(arr[23]);
        }
        if (typeof arr[24] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[24] === "string") {
            this.depositCredit = arr[24];
        } else {
            this.depositCredit = String(arr[24]);
        }
        if (typeof arr[25] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[25] === "string") {
            this.change = arr[25];
        } else {
            this.change = String(arr[25]);
        }
        if (typeof arr[26] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[26] === "string") {
            this.tipCash = arr[26];
        } else {
            this.tipCash = String(arr[26]);
        }
        if (typeof arr[27] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[27] === "string") {
            this.tipCredit = arr[27];
        } else {
            this.tipCredit = String(arr[27]);
        }
        if (typeof arr[28] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[28] === "string") {
            this.amount = arr[28];
        } else {
            this.amount = String(arr[28]);
        }
        if (typeof arr[29] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[29] === "string") {
            this.returnAmount = arr[29];
        } else {
            this.returnAmount = String(arr[29]);
        }
        if (typeof arr[30] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[30] === "string") {
            this.costTotal = arr[30];
        } else {
            this.costTotal = String(arr[30]);
        }
        if (typeof arr[31] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[31] === "string") {
            this.salesHeadDivision = arr[31];
        } else {
            this.salesHeadDivision = String(arr[31]);
        }
        if (typeof arr[32] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[32] === "string") {
            this.inTaxSalesTotal = arr[32];
        } else {
            this.inTaxSalesTotal = String(arr[32]);
        }
        if (typeof arr[33] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[33] === "string") {
            this.outTaxSalesTotal = arr[33];
        } else {
            this.outTaxSalesTotal = String(arr[33]);
        }
        if (typeof arr[34] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[34] === "string") {
            this.nonTaxSalesTotal = arr[34];
        } else {
            this.nonTaxSalesTotal = String(arr[34]);
        }
        if (typeof arr[35] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[35] === "string") {
            this.nonSalesTargetTotal = arr[35];
        } else {
            this.nonSalesTargetTotal = String(arr[35]);
        }
        if (typeof arr[36] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[36] === "string") {
            this.nonSalesTargetOutTaxTotal = arr[36];
        } else {
            this.nonSalesTargetOutTaxTotal = String(arr[36]);
        }
        if (typeof arr[37] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[37] === "string") {
            this.nonSalesTargetInTaxTotal = arr[37];
        } else {
            this.nonSalesTargetInTaxTotal = String(arr[37]);
        }
        if (typeof arr[38] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[38] === "string") {
            this.nonSalesTargetTaxFreeTotal = arr[38];
        } else {
            this.nonSalesTargetTaxFreeTotal = String(arr[38]);
        }
        if (typeof arr[39] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[39] === "string") {
            this.nonSalesTargetCostTotal = arr[39];
        } else {
            this.nonSalesTargetCostTotal = String(arr[39]);
        }
        if (typeof arr[40] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[40] === "string") {
            this.nonSalesTargetAmount = arr[40];
        } else {
            this.nonSalesTargetAmount = String(arr[40]);
        }
        if (typeof arr[41] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[41] === "string") {
            this.nonSalesTargetReturnAmount = arr[41];
        } else {
            this.nonSalesTargetReturnAmount = String(arr[41]);
        }
        if (typeof arr[42] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[42] === "string") {
            this.newPoint = arr[42];
        } else {
            this.newPoint = String(arr[42]);
        }
        if (typeof arr[43] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[43] === "string") {
            this.spendPoint = arr[43];
        } else {
            this.spendPoint = String(arr[43]);
        }
        if (typeof arr[44] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[44] === "string") {
            this.point = arr[44];
        } else {
            this.point = String(arr[44]);
        }
        if (typeof arr[45] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[45] === "string") {
            this.totalPoint = arr[45];
        } else {
            this.totalPoint = String(arr[45]);
        }
        if (typeof arr[46] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[46] === "string") {
            this.currentMile = arr[46];
        } else {
            this.currentMile = String(arr[46]);
        }
        if (typeof arr[47] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[47] === "string") {
            this.earnMile = arr[47];
        } else {
            this.earnMile = String(arr[47]);
        }
        if (typeof arr[48] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[48] === "string") {
            this.totalMile = arr[48];
        } else {
            this.totalMile = String(arr[48]);
        }
        if (typeof arr[49] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[49] === "string") {
            this.adjustmentMile = arr[49];
        } else {
            this.adjustmentMile = String(arr[49]);
        }
        if (typeof arr[50] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[50] === "string") {
            this.adjustmentMileDivision = arr[50];
        } else {
            this.adjustmentMileDivision = String(arr[50]);
        }
        if (typeof arr[51] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[51] === "string") {
            this.adjustmentMileValue = arr[51];
        } else {
            this.adjustmentMileValue = String(arr[51]);
        }
        if (typeof arr[52] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[52] === "string") {
            this.storeId = arr[52];
        } else {
            this.storeId = String(arr[52]);
        }
        if (typeof arr[53] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[53] === "string") {
            this.storeCode = arr[53];
        } else {
            this.storeCode = String(arr[53]);
        }
        if (typeof arr[54] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[54] === "string") {
            this.terminalId = arr[54];
        } else {
            this.terminalId = String(arr[54]);
        }
        if (typeof arr[55] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[55] === "string") {
            this.customerId = arr[55];
        } else {
            this.customerId = String(arr[55]);
        }
        if (typeof arr[56] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[56] === "string") {
            this.customerCode = arr[56];
        } else {
            this.customerCode = String(arr[56]);
        }
        if (typeof arr[57] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[57] === "string") {
            this.terminalTranId = arr[57];
        } else {
            this.terminalTranId = String(arr[57]);
        }
        if (typeof arr[58] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[58] === "string") {
            this.terminalTranDateTime = arr[58];
        } else {
            this.terminalTranDateTime = String(arr[58]);
        }
        if (typeof arr[59] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[59] === "string") {
            this.sumDivision = arr[59];
        } else {
            this.sumDivision = String(arr[59]);
        }
        if (typeof arr[60] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[60] === "string") {
            this.adjustmentDateTime = arr[60];
        } else {
            this.adjustmentDateTime = String(arr[60]);
        }
        if (typeof arr[61] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[61] === "string") {
            this.sumDate = arr[61];
        } else if (typeof arr[61] === "object") {
            this.sumDate = Utilities.formatDate(arr[61], 'JST', 'yyyy-MM-dd');
        } else {
            this.sumDate = String(arr[61]);
        }
        if (typeof arr[62] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[62] === "string") {
            this.customerRank = arr[62];
        } else {
            this.customerRank = String(arr[62]);
        }
        if (typeof arr[63] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[63] === "string") {
            this.customerGroupId = arr[63];
        } else {
            this.customerGroupId = String(arr[63]);
        }
        if (typeof arr[64] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[64] === "string") {
            this.customerGroupId2 = arr[64];
        } else {
            this.customerGroupId2 = String(arr[64]);
        }
        if (typeof arr[65] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[65] === "string") {
            this.customerGroupId3 = arr[65];
        } else {
            this.customerGroupId3 = String(arr[65]);
        }
        if (typeof arr[66] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[66] === "string") {
            this.customerGroupId4 = arr[66];
        } else {
            this.customerGroupId4 = String(arr[66]);
        }
        if (typeof arr[67] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[67] === "string") {
            this.customerGroupId5 = arr[67];
        } else {
            this.customerGroupId5 = String(arr[67]);
        }
        if (typeof arr[68] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[68] === "string") {
            this.staffId = arr[68];
        } else {
            this.staffId = String(arr[68]);
        }
        if (typeof arr[69] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[69] === "string") {
            this.staffCode = arr[69];
        } else {
            this.staffCode = String(arr[69]);
        }
        if (typeof arr[70] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[70] === "string") {
            this.staffName = arr[70];
        } else {
            this.staffName = String(arr[70]);
        }
        if (typeof arr[71] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[71] === "string") {
            this.creditDivision = arr[71];
        } else {
            this.creditDivision = String(arr[71]);
        }
        if (typeof arr[72] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[72] === "string") {
            this.paymentCount = arr[72];
        } else {
            this.paymentCount = String(arr[72]);
        }
        if (typeof arr[73] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[73] === "string") {
            this.slipNumber = arr[73];
        } else {
            this.slipNumber = String(arr[73]);
        }
        if (typeof arr[74] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[74] === "string") {
            this.cancelSlipNumber = arr[74];
        } else {
            this.cancelSlipNumber = String(arr[74]);
        }
        if (typeof arr[75] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[75] === "string") {
            this.authNumber = arr[75];
        } else {
            this.authNumber = String(arr[75]);
        }
        if (typeof arr[76] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[76] === "string") {
            this.authDate = arr[76];
        } else {
            this.authDate = String(arr[76]);
        }
        if (typeof arr[77] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[77] === "string") {
            this.cardCompany = arr[77];
        } else {
            this.cardCompany = String(arr[77]);
        }
        if (typeof arr[78] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[78] === "string") {
            this.denomination = arr[78];
        } else {
            this.denomination = String(arr[78]);
        }
        if (typeof arr[79] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[79] === "string") {
            this.memo = arr[79];
        } else {
            this.memo = String(arr[79]);
        }
        if (typeof arr[80] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[80] === "string") {
            this.receiptMemo = arr[80];
        } else {
            this.receiptMemo = String(arr[80]);
        }
        if (typeof arr[81] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[81] === "string") {
            this.carriage = arr[81];
        } else {
            this.carriage = String(arr[81]);
        }
        if (typeof arr[82] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[82] === "string") {
            this.commission = arr[82];
        } else {
            this.commission = String(arr[82]);
        }
        if (typeof arr[83] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[83] === "string") {
            this.guestNumbers = arr[83];
        } else {
            this.guestNumbers = String(arr[83]);
        }
        if (typeof arr[84] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[84] === "string") {
            this.guestNumbersMale = arr[84];
        } else {
            this.guestNumbersMale = String(arr[84]);
        }
        if (typeof arr[85] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[85] === "string") {
            this.guestNumbersFemale = arr[85];
        } else {
            this.guestNumbersFemale = String(arr[85]);
        }
        if (typeof arr[86] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[86] === "string") {
            this.guestNumbersUnknown = arr[86];
        } else {
            this.guestNumbersUnknown = String(arr[86]);
        }
        if (typeof arr[87] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[87] === "string") {
            this.enterDateTime = arr[87];
        } else {
            this.enterDateTime = String(arr[87]);
        }
        if (typeof arr[88] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[88] === "string") {
            this.taxFreeSalesDivision = arr[88];
        } else {
            this.taxFreeSalesDivision = String(arr[88]);
        }
        if (typeof arr[89] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[89] === "string") {
            this.netTaxFreeGeneralTaxInclude = arr[89];
        } else {
            this.netTaxFreeGeneralTaxInclude = String(arr[89]);
        }
        if (typeof arr[90] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[90] === "string") {
            this.netTaxFreeGeneralTaxExclude = arr[90];
        } else {
            this.netTaxFreeGeneralTaxExclude = String(arr[90]);
        }
        if (typeof arr[91] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[91] === "string") {
            this.netTaxFreeConsumableTaxInclude = arr[91];
        } else {
            this.netTaxFreeConsumableTaxInclude = String(arr[91]);
        }
        if (typeof arr[92] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[92] === "string") {
            this.netTaxFreeConsumableTaxExclude = arr[92];
        } else {
            this.netTaxFreeConsumableTaxExclude = String(arr[92]);
        }
        if (typeof arr[93] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[93] === "string") {
            this.tags = arr[93];
        } else {
            this.tags = String(arr[93]);
        }
        if (typeof arr[94] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[94] === "string") {
            this.pointGivingDivision = arr[94];
        } else {
            this.pointGivingDivision = String(arr[94]);
        }
        if (typeof arr[95] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[95] === "string") {
            this.pointGivingUnitPrice = arr[95];
        } else {
            this.pointGivingUnitPrice = String(arr[95]);
        }
        if (typeof arr[96] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[96] === "string") {
            this.pointGivingUnit = arr[96];
        } else {
            this.pointGivingUnit = String(arr[96]);
        }
        if (typeof arr[97] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[97] === "string") {
            this.pointSpendDivision = arr[97];
        } else {
            this.pointSpendDivision = String(arr[97]);
        }
        if (typeof arr[98] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[98] === "string") {
            this.mileageDivision = arr[98];
        } else {
            this.mileageDivision = String(arr[98]);
        }
        if (typeof arr[99] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[99] === "string") {
            this.mileageLabel = arr[99];
        } else {
            this.mileageLabel = String(arr[99]);
        }
        if (typeof arr[100] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[100] === "string") {
            this.customerPinCode = arr[100];
        } else {
            this.customerPinCode = String(arr[100]);
        }
        if (typeof arr[101] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[101] === "string") {
            this.returnSales = arr[101];
        } else {
            this.returnSales = String(arr[101]);
        }
        if (typeof arr[102] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[102] === "string") {
            this.disposeDivision = arr[102];
        } else {
            this.disposeDivision = String(arr[102]);
        }
        if (typeof arr[103] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[103] === "string") {
            this.disposeServerTransactionHeadId = arr[103];
        } else {
            this.disposeServerTransactionHeadId = String(arr[103]);
        }
        if (typeof arr[104] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[104] === "string") {
            this.cancelDateTime = arr[104];
        } else {
            this.cancelDateTime = String(arr[104]);
        }
        if (typeof arr[105] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[105] === "string") {
            this.sellDivision = arr[105];
        } else {
            this.sellDivision = String(arr[105]);
        }
        if (typeof arr[106] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[106] === "string") {
            this.taxRate = arr[106];
        } else {
            this.taxRate = String(arr[106]);
        }
        if (typeof arr[107] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[107] === "string") {
            this.taxRounding = arr[107];
        } else {
            this.taxRounding = String(arr[107]);
        }
        if (typeof arr[108] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[108] === "string") {
            this.discountRoundingDivision = arr[108];
        } else {
            this.discountRoundingDivision = String(arr[108]);
        }
        if (typeof arr[109] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[109] === "string") {
            this.transactionUuid = arr[109];
        } else {
            this.transactionUuid = String(arr[109]);
        }
        if (typeof arr[110] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[110] === "string") {
            this.exchangeTicketNo = arr[110];
        } else {
            this.exchangeTicketNo = String(arr[110]);
        }
        if (typeof arr[111] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[111] === "string") {
            this.giftReceiptValidDays = arr[111];
        } else {
            this.giftReceiptValidDays = String(arr[111]);
        }
        if (typeof arr[112] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[112] === "string") {
            this.barcode = arr[112];
        } else {
            this.barcode = String(arr[112]);
        }
        if (typeof arr[113] === "undefined") {
            this.transactionHeadId = "";
        } else if (typeof arr[113] === "string") {
            this.updDateTime = arr[113];
        } else {
            this.updDateTime = String(arr[113]);
        }
    }
}