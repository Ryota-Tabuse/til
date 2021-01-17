function myFunction() {
    const sheet: any = SpreadsheetApp.getActiveSheet();
    Logger.log(sheet.getName());

    const spreadsheet: any = SpreadsheetApp.getActiveSpreadsheet();
    const sheetByName: any = spreadsheet.getSheetByName("シート2");
    Logger.log(sheetByName.getName());

    const spreadsheet2: any = SpreadsheetApp.getActiveSpreadsheet();
    const sheets: any[] = spreadsheet2.getSheets();
    Logger.log(sheets[0].getName());
    Logger.log(sheets[1].getName());
    Logger.log(sheets[2].getName());
}
