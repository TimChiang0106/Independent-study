function QueryMenu() {
  var proper=PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
  var url = 'https://api.line.me/v2/bot/richmenu';
    var option = {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
        'method': 'post',
      'payload': JSON.stringify({
       "size": {
        "width": '2500',
        "height": '1686',
       },
      "selected": false,
      "name": "QueryMenu",
      "chatBarText": "Tap to open",
           "areas": [
             {"bounds":{"x":0,"y":0,"width":2500,"height":843},"action":{"type":"message","text":"今日行程"}},
             {"bounds":{"x":1666,"y":843,"width":834,"height":834},"action":{"type":"message","text":"下一頁"}},
             {"bounds":{"x":833,"y":843,"width":833,"height":834},"action":{"type":"message","text":"查詢"}},
             {"bounds":{"x":0,"y":843,"width":833,"height":834},"action":{"type":"message","text":"明日行程"}},
            
           
           
           ],
      
   

      }),
    };
   var data =  UrlFetchApp.fetch(url, option);
  }
function MainMenu() {
  var proper=PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
  var url = 'https://api.line.me/v2/bot/richmenu';
    var option = {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
        'method': 'post',
      'payload': JSON.stringify({
       "size": {
        "width": '1200',
        "height": '405',
       },
      "selected": false ,
      "name": "MainMenu",
      "chatBarText": "Tap to open",
      "areas": [
    
             {"bounds":{"x":0,"y":0,"width":400,"height":405},"action":{"type":"message","text":"前往查詢目錄"}},
             {"bounds":{"x":400,"y":0,"width":400,"height":405},"action":{"type":"message","text":"建立行程"}},
             {"bounds":{"x":800,"y":0,"width":400,"height":405},"action":{"type":"uri","uri":"https://www.google.com/calendar",}},
    
  ],
      }),
    };
   var data =  UrlFetchApp.fetch(url, option);
  }
function cancelMenu(){
   var proper=PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
  var url = 'https://api.line.me/v2/bot/user/all/richmenu';
    var option = {
      'headers': {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
      'method':'DELETE'
    }
      var data =  UrlFetchApp.fetch(url, option);
}
function setdefultmenu(menuid) {
  var proper=PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
  var url = 'https://api.line.me/v2/bot/user/all/richmenu/richmenu-'+menuid;
    var option = {
      'headers': {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
      'method': 'post',     
   }
     var data =  UrlFetchApp.fetch(url, option);
}
function uploadimage() {
  var proper=PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
  var url = 'https://api.line.me/v2/bot/richmenu/richmenu-6062d42a6ce37d02c655f6608e299728/content';
  var file = DriveApp.getFileById('1fDVvaIVzUZRHjPZstJorujLSIaOT9jAi').getAs('image/png');
   var option = {
      'headers': {
      'Content-Type': 'image/png',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
      'method': 'post',
     'payload' : file,
      
     
   }
     var data =  UrlFetchApp.fetch(url, option);
}
function getrichmenu() {
 var proper=PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
  var url = 'https://api.line.me/v2/bot/richmenu/list'
  
   var option = {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
  
  
}
    var data =  UrlFetchApp.fetch(url, option);
   Logger.log(data);
 }
function delet() {
 var proper=PropertiesService.getScriptProperties();
  var CHANNEL_ACCESS_TOKEN = proper.getProperty('CHANNEL_ACCESS_TOKEN');
  var url = 'https://api.line.me/v2/bot/richmenu/richmenu-e48fb25fd653cda658c9d6a40278f2e1'
  
   var option = {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
     'method':'delete',
  
  
}
    var data =  UrlFetchApp.fetch(url, option);
   Logger.log(data);
 }



  
  

