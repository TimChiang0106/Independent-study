function searchevent(q) {
   var propertyStore = PropertiesService.getScriptProperties();
  
  var email = propertyStore.getProperty('email');
  var accessToken = propertyStore.getProperty('access_token');
  var url = 'https://www.googleapis.com/calendar/v3/calendars/'+email+'/events?access_token='+accessToken+'&q='+q+'&alt=json&prettyPrint=true';
  var reasult  =  UrlFetchApp.fetch(url);
  var item = JSON.parse(reasult.getContentText());
  var itemlength = Object.keys(item.items).length;
  var title =  new Array();
  var startTime = new Array();
  var endTime= new Array();
  for(i=0;i<itemlength;i++){
       title[i] = item.items[i].summary;
       startTime[i] = JSON.stringify(item.items[i].start.dateTime).substring(12,20);    
       endTime[i] = JSON.stringify(item.items[i].end.dateTime).substring(12,20); 
  }
  return [title, startTime,endTime];
}

