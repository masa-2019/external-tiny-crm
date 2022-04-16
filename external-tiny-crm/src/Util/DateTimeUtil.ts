export class DateTimeUtil {

    /**
     * Ymd形式の文字列に変換
     * @param date1 変換するDateオブジェクト
     * @param separator Ymdの間に挟む区切り文字
     * @return string 変換した文字列
     */
    public static getYmdString(date1: Date, separator: string) {

        let todayMonth = date1.getMonth() + 1;
        let todayMonthSup = '';
        if (todayMonth < 10) {
            todayMonthSup = '0';
        }

        let todayDate = date1.getDate();
        let todayDateSup = '';
        if (todayDate < 10) {
            todayDateSup = '0';
        }

        return date1.getFullYear() + separator + todayMonthSup + (date1.getMonth() + 1) + separator + todayDateSup + date1.getDate();
    }
}