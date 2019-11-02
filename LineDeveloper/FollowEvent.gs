function followevent(replyToken) {
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
           "type": "flex",
          "altText": "this is a flex message",
"contents": {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Hello, Welcome to Join us",
        "weight": "bold",
        "size": "lg"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Hi, We will help you to using Google Calendar, but before that, you have to login Google. Please click 'Authorize' to continue",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 5
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "style": "link",
        "height": "sm",
        "action": {
          "type": "postback",
          "label": "Authorize",
          "data": "Authorize",
          "displayText": "認證"
        }
      },
      {
        "type": "spacer",
        "size": "sm"
      }
    ],
    "flex": 0
  }
  }
        }],
}),
};
  UrlFetchApp.fetch(url, option);
          
   }
