function getAccessToken(email) {
  var cache = CacheService.getUserCache();
  var accessToken = cache.get(email);
  if (accessToken === null) {
    var refresh_token = UserData.GetRefresh(email);
    accessToken = refreshAccessToken(refresh_token);
  }
  return cache.put(email,accessToken,3600);
}



function refreshAccessToken(refresh_token) {
  var propertyStore = PropertiesService.getScriptProperties();
  var props = propertyStore.getProperties();
  var url = 'https://accounts.google.com/o/oauth2/token';
  var postPayload = {
      'client_id': props.client_id,
      'client_secret': props.client_secret,
      'refresh_token': refresh_token,
      'grant_type': "refresh_token",
    };
       var options = {
      "method" : "post",
      "payload" : postPayload,
    };
      var credentials = UrlFetchApp.fetch(url, options);
  
      var params = JSON.parse(credentials.getContentText());
      return params.access_token;
}
