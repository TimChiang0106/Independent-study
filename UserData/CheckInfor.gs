function CheckInfor(userId) {
  var SpreadSheet = SpreadsheetApp.openById("1tJJ2ynTJC1sYLxG7Wx1iHvk0NRJ9LAoC_O7zQHdPXQI");
  var Sheet = SpreadSheet.getSheetByName("UserData");
  var values = Sheet.getDataRange().getValues();
  for(var i=1;i<values.length;i++){
    if(email === values[i][1]){
      return true;
    }
  }
}
