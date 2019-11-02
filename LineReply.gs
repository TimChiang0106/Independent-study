function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var cache = CacheService.getUserCache();
  var url = 'https://api.line.me/v2/bot/message/reply';
  var CHANNEL_ACCESS_TOKEN = props.getProperty('CHANNEL_ACCESS_TOKEN');
  var msg = JSON.parse(e.postData.contents);
  console.log(msg);
  var replyToken = msg.events[0].replyToken; 
  var getProfile = msg.events[0].source.userId;
  var type = msg.events[0].type;
  var  profile = props.setProperty('getPorfile', getProfile);
                 props.setProperty('replytoken', replyToken);
  if(type === "message"){
     var userMessage = msg.events[0].message.text;
  }
  if(type === "follow"){
    count();
  followevent(replyToken);
 }
  if(type === 'postback'){
   var postback = msg.events[0].postback.data;
    if(postback ==='Authorize'){
     
      loginconfirm(replyToken); 
    } 
    if(postback ==='cancel'){
      cancel(replyToken);
      cache.put('ce', 0);
      return;
    }
    if(postback ==='Confirm'){
       conditionalFetch();
      AddSuccess(replyToken);
      return;
    }
    if(postback ==='date'){
      if(props.getProperty('startTime') === 'undefined'){
      var dateparams = msg.events[0].postback.params.datetime;
       props.setProperty('startTime', dateparams);
      addEndtime(replyToken);
      return;
      }
    }
     if(postback ==='date'){
      if(props.getProperty('endtime') === 'undefined'){
      var dateparams = msg.events[0].postback.params.datetime;
      props.setProperty('endtime', dateparams);
      console.log(dateparams);
      confirme(replyToken);
      return;
      }
     }
    }
  if(userMessage==='下一頁'){
    var menuid = '6062d42a6ce37d02c655f6608e299728'
    cancelMenu();
    setdefultmenu(menuid);  
  
  }
  if(userMessage==='前往查詢目錄'){
    var menuid = 'f88ec8eed0a33a26250f5f7c180196da'
    cancelMenu();
    setdefultmenu(menuid);
  }
   if(userMessage === '認證'){
      loginconfirm(replyToken); 
   }
  if(userMessage ==='今日行程'){
    GetTodayList(replyToken)
   
    return;
  }
  if(userMessage === '明日行程' ){
     GetTomorrowList(replyToken);
    return;
  }
  if(userMessage === '查詢'){
    queryevent(replyToken);
    cache.put('qevent', 'QueryEvent');
    return;
  }
  var qevent = cache.get('qevent');
  if(qevent ==='QueryEvent'){
    QeventList(replyToken,userMessage)
    cache.put('qevent', 'null');
    return;
  }
  if(userMessage ==='建立'){
  　　createvent(replyToken);
     cache.put('ce','ADDTITLE');
     return ;
   }
  var ce = cache.get('ce');
  if(ce === 'ADDTITLE'){
    props.setProperty('title',userMessage);
    addlocation(replyToken);
    cache.put('ce', 'ADDDESCRIPTION');
    return;
  }
  if(ce ==='ADDDESCRIPTION'){
    props.setProperty('loaction', msg.events[0].message.address);
    AddDecscription(replyToken);
    cache.put('ce', 'AddTime');
    return; 
  }
  if(ce ==='AddTime'){
    props.setProperty('description', userMessage);
    addtime(replyToken);
    return;
    }
}
