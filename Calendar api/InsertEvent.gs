function conditionalFetch() {
  var cache = CacheService.getUserCache();
  var propertyStore = PropertiesService.getScriptProperties();
  
  var email = propertyStore.getProperty('email');
  var url = 'https://www.googleapis.com/calendar/v3/calendars/'+email+'/events';
  
      var accessToken = propertyStore.getProperty('access_token');
      var summaryevent = propertyStore.getProperty('title');
      var location = propertyStore.getProperty('loaction');
      var description = propertyStore.getProperty('description');
      var startTime = propertyStore.getProperty('startTime');
      var endTime = propertyStore.getProperty('endtime');
 
  var option = {
      'headers': {
      'Content-type': 'application/json',
      'authorization': 'Bearer ' + accessToken,
    },
    'method':'post',
    'payload': JSON.stringify({
    'summary': summaryevent,
    'location': location,
    'description': description,
      'start': { dateTime:startTime+':00.000Z'},
      'end': {dateTime:endTime+':00.000Z'},
      colorId: 11
  }),
} 
   var a = UrlFetchApp.getRequest(url,option);
  Logger.log(a);
        UrlFetchApp.fetch(url,option);
 return;
}
