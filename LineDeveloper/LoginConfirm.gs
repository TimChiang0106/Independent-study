function loginconfirm(replyToken) {
  var proper = PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
   var url = 'https://api.line.me/v2/bot/message/reply';
   var option = {
     'headers':{
           'Content-Type': 'application/json',          
           'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
     },
      'method': 'post',
     'payload': JSON.stringify({
       'replyToken': replyToken,
       'messages': [{
         "type": "template",
         "altText": "this is a confirm template",
       "template": {
         "type": "confirm",
         "text": "Login to Google",
         "actions": [
          {
            "type": "uri",
            "label": "Login",
            "uri": proper.getProperty('url'),
          },
          {
            "type": "message",
            "label": "NO login",
            "text": "Thank you for your attending"
          },
      ],
  },
        }],
}),
};
  UrlFetchApp.fetch(url, option);
          
   }
