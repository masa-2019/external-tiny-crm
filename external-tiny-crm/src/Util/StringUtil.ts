export class StringUtil {

    /**
     * YYYY-mm-ddに文字列がなっているかチェック
     * @param val 登録する文字列
     * @return bool フォーマットに合っていればtrue,それ以外はfalse
     */
    public static checkDateFormat(val: string) {
        return val.match(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
    }
}