function myFunction() {
    // 紐づくスプレッドシートの取得方法
    const sheet: any = SpreadsheetApp.getActiveSheet();
    Logger.log(sheet.getName());

    // 紐づくスプレッドシートの取得方法
    const spreadsheet: any = SpreadsheetApp.getActiveSpreadsheet();
    const sheetByName: any = spreadsheet.getSheetByName("シート2");
    Logger.log(sheetByName.getName());

}
