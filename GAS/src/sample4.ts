function clearSample() {
    // 全てクリア
    const sheet: any = SpreadsheetApp.getActiveSheet();
    sheet.clear();
}

function clearContentSample() {
    // 値と数式のみクリア
    const sheet: any = SpreadsheetApp.getActiveSheet();
    sheet.clearContents();
}

function clearFormatsSample() {
    // 書式のクリア
    const sheet: any = SpreadsheetApp.getActiveSheet();
    sheet.clearFormats();
}
