function getValueSample() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const range = sheet.getRange("A1");
    Logger.log(range.getValue());
}
function setValueSample() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const range = sheet.getRange("A10");
    range.setValue('マリオ');
    sheet.getRange('B10').setValue(100);
    sheet.getRange('C10').setValue("=B10+50");
}
