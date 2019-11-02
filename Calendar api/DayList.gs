function TodayList() {
  var propertyStore = PropertiesService.getScriptProperties();
  
  var email = propertyStore.getProperty('email');
  var accessToken = propertyStore.getProperty('access_token');
  
  var today =  Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");
  var url = 'https://www.googleapis.com/calendar/v3/calendars/'+email+'/events?access_token='+accessToken+'&timeMax='+today+'T23%3A59%3A59Z&timeMin='+today+'T00%3A00%3A00Z&alt=json&prettyPrint=true';
  var reasult  =  UrlFetchApp.fetch(url);
   var item = JSON.parse(reasult.getContentText());
   var itemlength = Object.keys(item.items).length;
   var title =  new Array();
   var time = new Array();
  for(i=0;i<itemlength;i++){
       title[i] = item.items[i].summary;
       time[i] = JSON.stringify(item.items[i].start.dateTime).substring(12,20);    
  }
  return [title, time];
}
function tomorrowlist() {
    var propertyStore = PropertiesService.getScriptProperties();
  
  var email = propertyStore.getProperty('email');
  var accessToken = propertyStore.getProperty('access_token');
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate()+1);  
  var tomorrow =  Utilities.formatDate(tomorrow, "GMT+8", "yyyy-MM-dd");
  var url = 'https://www.googleapis.com/calendar/v3/calendars/'+email+'/events?access_token='+accessToken+'&timeMax='+tomorrow+'T23%3A59%3A59Z&timeMin='+tomorrow+'T00%3A00%3A00Z&alt=json&prettyPrint=true';
  var reasult  =  UrlFetchApp.fetch(url);
   var item = JSON.parse(reasult.getContentText());
   var itemlength = Object.keys(item.items).length;
   var title =  new Array();
   var time = new Array();
  for(i=0;i<itemlength;i++){
       title[i] = item.items[i].summary;
       time[i] = JSON.stringify(item.items[i].start.dateTime).substring(12,20);    
  }
  Logger.log(title);
  Logger.log(time);
  return [title, time];
  
}


