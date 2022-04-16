import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheet = GoogleAppsScript.Spreadsheet.Sheet;
import {EntityBase} from "../Entity/EntityBase";
import {type} from "os";

export abstract class DaoBase {
    public ss: Spreadsheet;
    public sheet: Sheet;
    public sheetName: string;

    protected constructor(sheetName: string) {
        this.ss =  SpreadsheetApp.getActiveSpreadsheet();
        let sheet = this.ss.getSheetByName(sheetName);
        if (!sheet) {
            throw new Error("シートの取得に失敗しました。");
        }
        this.sheet = sheet;
        this.sheetName = sheetName;
    }

    public selectList() {
        const list = this.sheet.getDataRange().getValues();
        if (!list) {
            return [];
        }
        return list;
    }

    /**
     * 指定の列番号で検索。
     * 最初にヒットした行を返すので、ユニークキー用の列を指定すること。
     * @param primaryKeyValue
     * @param primaryKeyColumn
     */
    public selectByPrimary(primaryKeyValue: string, primaryKeyColumn: number) {
        const list = this.selectList();
        let currentRecord: any;
        let currentPrimaryKeyValue: string;
        for (let i = 0; i < list.length; i++) {
            if (i < 1) {
                continue;
            }
            currentRecord = list[i];
            currentPrimaryKeyValue = currentRecord[primaryKeyColumn];
            if (currentPrimaryKeyValue.match(primaryKeyValue)) {
                return currentRecord;
            }
        }
        return null;
    }

    public updateTargetCell(updateValue: any, address: string) {
        this.sheet.getRange(address).setValue(updateValue);
    }

    public insertRowTail(rows: EntityBase[]) {
        if (rows.length < 1) {
            return 0;
        }
        let insertRows: string[][] = [];
        let insertRow: string[] = [];
        const lastColNumber = rows[0].convertStringArray().length;
        let keys: string[] = [];
        if (lastColNumber < 1) {
            throw new Error("登録データの型が空です。");
        }
        for (let i = 0; i < rows.length; i++) {
            if (i === 0 && this.sheet.getLastRow() < 1) {
                keys = Object.keys(rows[i]);
                insertRows.push(keys);
            }
            insertRow = rows[i].convertStringArray();
            insertRows.push(insertRow);
        }
        Logger.log(insertRows);
        this.sheet.getRange(this.sheet.getLastRow() + 1, 1, rows.length, lastColNumber).setValues(insertRows);
    }
}