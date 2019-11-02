function addtosheet(refresh,access) {
 
  var props = PropertiesService.getScriptProperties();
  var cache = CacheService.getUserCache();
  var userid = props.getProperty('getPorfile');
  var email =  getEmail(access);
  cache.put(email, access, 3600);
  UserData.AddUserData(userid,email, refresh,access);
}
function getEmail(access){
var props = PropertiesService.getScriptProperties();
  var url = 'https://www.googleapis.com/oauth2/v2/userinfo';
  var option = {
   'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer '+ access,
    },
    'method':'get'
  };
 
  
   var data = UrlFetchApp.fetch(url, option);
   var params = JSON.parse(data.getContentText());
   console.log(params);
   return params.email;
}
