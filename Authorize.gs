function  doGet(e) {
  console.log(e);
  var propertyStore = PropertiesService.getScriptProperties();
  var props = propertyStore.getProperties();
  var cache = CacheService.getUserCache();
  var url = 'https://oauth2.googleapis.com/token';
   var postPayload = {
  
      "code" : e.parameter.code ,
      "client_id" : props.client_id,
      "client_secret" : props.client_secret,
      "redirect_uri" : getGoogleCallbackURL(true),
      "grant_type" : "authorization_code",
    };
  var options = {
      "method" : "post",
      "payload" : postPayload,
    };
       var credentials = UrlFetchApp.fetch(url, options);
       var params = JSON.parse(credentials.getContentText());
       console.log(params);
       var refresh = params.refresh_token;
       var access = params.access_token;
       addtosheet(refresh,access);
       return HtmlService.createHtmlOutput('Success! You can close this tab.');
}
function getGoogleCallbackURL(silent) {
  var url = ScriptApp.getService().getUrl();
  var callbackUrl = (url.indexOf('/exec') >= 0 ? url.slice(0, -4) : url.slice(0, -3)) + 'usercallback';
  if (!silent) Logger.log(callbackUrl);
  return callbackUrl;
}
   

