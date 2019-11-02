function GetTodayList(replyToken) {
  var proper = PropertiesService.getScriptProperties();
  var values = TodayList();
  var title = values[0];
  var time = values[1];
  var length = title.length;
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
   var url = 'https://api.line.me/v2/bot/message/reply';
   UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
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
        "text": "今日事情",
        "weight": "bold",
        "size": "xl"
      },
        {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "text",
            "text": "主旨"
          },
          {
            "type": "text",
            "text": "時間"
          }
        ]
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
                "text": title[0],
                "size": "sm",
                "flex": 5
              },
              {
                "type": "text",
                "text": time[0],
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 5
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": title[1],
                "size": "sm",
                "flex": 5
              },
              {
                "type": "text",
                "text": time[1],
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
  }
}
}],
    }),
   });
}
function GetTomorrowList(replyToken) {
  var proper = PropertiesService.getScriptProperties();
  var values = tomorrowlist();
  var title = values[0];
  var time = values[1];
  var length = title.length;
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
   var url = 'https://api.line.me/v2/bot/message/reply';
   UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
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
        "text": "今日事情",
        "weight": "bold",
        "size": "xl"
      },
        {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "text",
            "text": "主旨"
          },
          {
            "type": "text",
            "text": "時間"
          }
        ]
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
                "text": title[0],
                "size": "sm",
                "flex": 5
              },
              {
                "type": "text",
                "text": time[0],
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 5
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": title[1],
                "size": "sm",
                "flex": 5
              },
              {
                "type": "text",
                "text": time[1],
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
  }
}
}],
    }),
   });
}

