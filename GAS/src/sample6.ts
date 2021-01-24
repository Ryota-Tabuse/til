function getDataRangeSample() {

    const sheet:any = SpreadsheetApp.getActiveSheet();
    const range:any = sheet.getDataRange();
    Logger.log(range.getA1Notation());
}
function getDataRangeSample2() {

    const sheet:any = SpreadsheetApp.getActiveSheet();
    const range:any = sheet.getRange(1,1,sheet.getLastRow(),2);
    Logger.log(range.getA1Notation());
}
