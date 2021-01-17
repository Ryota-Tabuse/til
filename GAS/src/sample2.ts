function myFunction() {
    // 紐づくスプレッドシートの取得方法
    const sheet: any = SpreadsheetApp.getActiveSheet();
    Logger.log(sheet.getName());
}
