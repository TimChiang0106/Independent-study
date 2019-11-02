function doGet(e) {
  var params = e.parameter;
  var number = params.number;
  var name = params.name;
  var refresh = params.refresh;
  var accesstoken = params.access_token;
  

  
  var SpreadSheet = SpreadsheetApp.openById("1tJJ2ynTJC1sYLxG7Wx1iHvk0NRJ9LAoC_O7zQHdPXQI");
  var Sheet = SpreadSheet.getSheetByName("UserData");
  var LastRow = Sheet.getLastRow();
  

  Sheet.getRange(LastRow+1, 1).setValue(number); 
  Sheet.getRange(LastRow+1, 2).setValue(name);
  Sheet.getRange(LastRow+1, 3).setValue(refresh); 
  Sheet.getRange(LastRow+1, 4).setValue(accesstoken); 
 
  

 
  

  

  return ContentService.createTextOutput(true);
}
