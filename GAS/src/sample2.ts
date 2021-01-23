function myFunction() {
    // シートが一つの場合
    const sheet: any = SpreadsheetApp.getActiveSheet();
    Logger.log(sheet.getName());

    //シート名を直接指定
    const spreadsheet: any = SpreadsheetApp.getActiveSpreadsheet();
    const sheetByName: any = spreadsheet.getSheetByName("シート2");
    Logger.log(sheetByName.getName());

    // 配列から取得
    const spreadsheet2: any = SpreadsheetApp.getActiveSpreadsheet();
    const sheets: any[] = spreadsheet2.getSheets();
    Logger.log(sheets[0].getName());
    Logger.log(sheets[1].getName());
    Logger.log(sheets[2].getName());


    const foo = [{ "aaa": "aaa" }, { "aaa": "aaa" }];
}
