function getRangeSmaple(){
    let range: any = SpreadsheetApp.getActiveSheet().getRange("A2");
    Logger.log(range.getA1Notation());

    range = SpreadsheetApp.getActiveSheet().getRange(2,1);
    Logger.log(range.getA1Notation());
}

function getRangeSmaple3(){
    let range: any = SpreadsheetApp.getActiveSheet().getRange("A1:B2");
    Logger.log(range.getA1Notation());

    range = SpreadsheetApp.getActiveSheet().getRange(1,1,2,2);
    Logger.log(range.getA1Notation());
}

function getRangeSmaple4(){
    let range: any = SpreadsheetApp.getActiveSheet().getRange("1:1");
    Logger.log(range.getA1Notation());

    range = SpreadsheetApp.getActiveSheet().getRange("A:A");
    Logger.log(range.getA1Notation());
}
