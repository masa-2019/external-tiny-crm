
export abstract class EntityBase {
    /** スプレッドシート登録用に文字列に変換するメソッド*/
    public abstract convertStringArray(): string[];

    /** APIリクエストをbindするメソッド*/
    public abstract bindObject(request: any): void;

    /** 配列からメンバをbindするメソッド*/
    public abstract bindArray(arr: string|number[]): void;
}