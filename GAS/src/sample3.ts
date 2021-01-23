function myFunction() {
    // 同一シート内でコピーを実施する方法
    const spreadsheet: any = SpreadsheetApp.getActiveSpreadsheet();
    const sheet: any = SpreadsheetApp.getActiveSheet();

    const newSheet = sheet.copyTo(spreadsheet);
    newSheet.setName("1-3");
    Logger.log(sheet.getName());

    // 別シートにコピーを実施する方法
    const spreadsheet2: any = SpreadsheetApp.getActiveSpreadsheet();
    const sheet2: any = SpreadsheetApp.getActiveSheet();

    const anotherSpreadsheet = SpreadsheetApp.openById('1ua4URZZ8_oFDs4CfmuRs-IEF-U3e_idVrdWJbL7y81c');

    const newSheet2 = sheet2.copyTo(anotherSpreadsheet);
    newSheet2.setName("111");
}
