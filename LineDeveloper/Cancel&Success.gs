function cancel(replyToken) {
  var proper = PropertiesService.getScriptProperties();
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
        'type': 'text',
        'text': '已取消成功',  
      }],
    }),
  });
}
function AddSuccess(replyToken) {
  var proper = PropertiesService.getScriptProperties();
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
        'type': 'text',
        'text': '新增成功',  
      }],
    }),
  });
}
