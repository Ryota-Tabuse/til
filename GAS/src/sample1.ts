function myFunction() {
    // 紐づくスプレッドシートの取得方法
    const spreadsheet: any = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log(spreadsheet.getName());

    // IDでの取得
    const spredsheetById: any = SpreadsheetApp.openById("1ua4URZZ8_oFDs4CfmuRs-IEF-U3e_idVrdWJbL7y81c");
    Logger.log(spredsheetById.getName());

    // URLでの取得
    const spredsheetByURL: any = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ua4URZZ8_oFDs4CfmuRs-IEF-U3e_idVrdWJbL7y81c/edit#gid=0");
    Logger.log(spredsheetByURL.getName());

}
