import {EntityBase} from "./EntityBase";

export class SquareOrder extends EntityBase {

    public id: string;
    public location_id: string;
    public customer_id: string;
    public total_money: number;

    constructor(id?: string, locationId?: string, customerId?: string, totalMoney?: number) {
        super();
        this.id = typeof id !== "undefined" ? id : "";
        this.location_id = typeof locationId !== "undefined" ? locationId : "";
        this.customer_id = typeof customerId !== "undefined" ? customerId : "";
        this.total_money = typeof totalMoney !== "undefined" ? totalMoney : 0;
    }

    /** スプレッドシート登録用に文字列に変換するメソッド*/
    public  convertStringArray() {
        const res: string[] = [];
        res.push(this.id);
        res.push(this.location_id);
        res.push(this.customer_id);
        res.push(String(this.total_money));
        return res;
    };

    /** APIリクエストをbindするメソッド*/
    public  bindObject(request: any) {
        if (typeof request?.id === "string") {
            this.id = request.id;
        }
        if (typeof request?.location_id === "string") {
            this.location_id = request.location_id;
        }
        if (typeof request?.customer_id === "string") {
            this.customer_id = request.customer_id;
        }
        if (typeof request?.total_money !== "undefined" && typeof request?.total_money?.amount === "number") {
            this.total_money = request.total_money.amount;
        }
    };

    /** 配列からメンバをbindするメソッド*/
    public  bindArray(arr: string|number[]) {
        if (typeof arr[0] === "undefined") {
            this.id = "";
        } else if (typeof arr[0] === "string") {
            this.id = arr[0];
        } else {
            this.id = String(arr[0]);
        }

        if (typeof arr[1] === "undefined") {
            this.location_id = "";
        } else if (typeof arr[1] === "string") {
            this.location_id = arr[1];
        } else {
            this.location_id = String(arr[1]);
        }

        if (typeof arr[2] === "undefined") {
            this.customer_id = "";
        } else if (typeof arr[2] === "string") {
            this.customer_id = arr[2];
        } else {
            this.customer_id = String(arr[2]);
        }

        if (typeof arr[3] === "undefined") {
            this.total_money = 0;
        } else if (typeof arr[3] === "number") {
            this.total_money = arr[3];
        } else {
            this.total_money = Number(arr[3]);
        }
    }
}