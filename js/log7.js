if(typeof wts7==='undefined'){wts7={};}
wts7.versionNumber=wts7.versionNumber||"8.256";wts7.lastPageShow=wts7.lastPageShow||0;wts7.lastEvent=wts7.lastEvent||"load";wts7.lastURL=wts7.lastURL||window.location.href;function wtslog7(alias,db,obj,event_name,event_conversion,event,origin,dbStatus,instanceId,loop){try{if(!loop){loop=0;}
loop++;if(!alias||!db){wtsDebug7('wtslog7 / no alias ('+alias+') or db ('+db+') / origin = '+origin);return;}
if(document.readyState==='loading'){setTimeout(function(){wtslog7(alias,db,obj,event_name,event_conversion,event,origin,dbStatus,instanceId,loop);},100);return;}
if(!document.body){if(loop<=10){setTimeout(function(){wtslog7(alias,db,obj,event_name,event_conversion,event,origin,dbStatus,instanceId,loop);},250);}
return;}
wts7.alias=alias;try{wtslog7Exe(alias,db,obj,event_name,event_conversion,event,origin,dbStatus,instanceId);}
catch(e){wtsDebug7('wtslog7 error 1',e);}}
catch(e){wtsDebug7('wtslog7 error 00',e);}}
function wtslog7Exe(alias,db,obj,event_name,event_conversion,event,origin,dbStatus,instanceId){try{if(/bot|crawl|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent)){return;}
var web_url="www.web-stat.com";var app_url="app.ardalio.com";var app_name="Web-Stat";wts7.action=wts7.action||"record";var start=new Date().valueOf();if(origin=="embeddedScript"){if(window.location.href==wts7.lastURL&&start-wts7.lastPageShow<5000){return;}
wts7.params='wix';wts7.invisible='yes';wts7.action="pre_record";}
if(event){wts7.thisEvent=event.type;if(db>5){wts7.params="wix";}}
else{wts7.thisEvent="load";}
if(wts7.thisEvent!=wts7.lastEvent&&start-wts7.lastPageShow<1500){return;}
if(event_name){if(event){event.preventDefault();}}
if(wts7.origin=='wtslog6_2'){wts7.versionNumber='6.28';}
if(!alias||!db){return;}
if(document.readyState==='loading'){if(typeof document.addEventListener==='function'){document.addEventListener("DOMContentLoaded",function(){wtslog7Exe(alias,db,obj,event_name,event_conversion,event,origin,dbStatus,instanceId);});return;}
else{if(document.getElementById('wts'+alias)){document.getElementById('wts'+alias).innerHTML='<a href="https://'+web_url+'"><img alt="'+app_name+' Web Analytics" src="https://'+app_url+'/7/'+db+'/'+alias+'.png"></a>';}}}
wts7.lastEvent=wts7.thisEvent;wts7.lastPageShow=start;window.onerror=function(msg,url,lineNo,columnNo,error){if(url.indexOf(/wts\d?\.one/)>-1){var e_text='JS error on url: '+url+' / error: '+msg+' ('+lineNo+'/'+columnNo+') / '+error+' / ref: '+document.referrer;wtsDebug7(e_text,error);}
return true;};var gmtimeUnix,timeLastLoad,sessionId,visitorId,nVisits,referer,title,url,originalRef,allow_cookies,user_status,overLimit,isOwner,isEvent,params,invisible,conversion_number,page_name,group_name,checked_online,qry,cs2,s2,newSpan,userId,uidsid;gmtimeUnix=Math.floor(start/1000);wts7.origin=wts7.origin||'log7';params=wts7.params||'';invisible=wts7.invisible||'';conversion_number=wts7.conversion_number||'';page_name=wts7.page_name||'';group_name=wts7.group_name||'';referer=wts7.ref||'';if(referer!==''){referer=referer+'::::::';}
if(!wts7.focusEvent){window.addEventListener('focus',function(){wts7.focusEvent=1;if(new Date().valueOf()-start>1800000){wtslog7Exe(alias,db,obj,event_name,event_conversion,event,origin,dbStatus,instanceId);if(origin=="embeddedScript"){messageWorker();}}
start=new Date().valueOf();});}
if(wts7.params!='editor_load'&&wts7.params!='no_count'){wts7.url='';wts7.scrW=screen.width||window.innerWidth||window.screen.height||0;wts7.scrH=screen.height||window.innerHeight||window.screen.height||0;checked_online='';if(typeof event_name!=='undefined'&&event_name!=''){isEvent='yes';invisible='yes';conversion_number=event_conversion||'';event_name=event_name.replace(/^\\s+|\\s+\$/g,'');event_name=encodeURIComponent(event_name);page_name='event_'+event_name;group_name=event_name;url=event_name;title=event_name;}
else{isEvent='no';try{title=top.document.title||'';}
catch(e){title=document.title||'';}
try{url=top.document.URL||'';}
catch(e){url=document.URL||'';}
url=url.replace(/\/$/,'');wts7.url=url;try{referer=referer+top.document.referrer;}
catch(e){referer=referer+document.referrer;}
if(referer&&referer.length>510){referer=referer.substring(0,510);}}
var rgx={};rgx.ack=/^1$|^0$/;rgx.ovx=/^1$|^0$/;rgx.inv=/^1$|^0$/;rgx.tll=/^\d+$/;rgx.sta=/^\w+$/;rgx.sid=/^[\w\-@]+$/;rgx.uid=/.+/;rgx.vid=/^[\w\-@\.]+$/;rgx.bid=/^[\w\-@]+$/;rgx.nv=/^\d+$/;rgx.io=/^1$|^0$/;rgx.lv=/^\d+$/;rgx.or=/^[^\[]+$/;rgx.prf=/^[^\[]+$/;rgx.cty=/.+/;rgx.asn=/^\d+$/;try{if(wts7.allow_cookies===false){allow_cookies=0;}
else if(wts7.use_cookies==="1"){allow_cookies=1;}
else if(wts7.use_cookies==="0"){allow_cookies=0;}
else{allow_cookies=getData7('ack',alias,gmtimeUnix,rgx)||'';}
user_status=getData7('sta',alias,gmtimeUnix,rgx)||'';timeLastLoad=getData7('tll',alias,gmtimeUnix,rgx)||'0';overLimit=getData7('ovx',alias,gmtimeUnix,rgx)||'0';if(user_status=="regular"&&invisible=="yes"&&parseInt(timeLastLoad)>0&&(gmtimeUnix-parseInt(timeLastLoad))<1800){return;}
if(overLimit=='1'){return;}
sessionId=getData7('sid',alias,gmtimeUnix,rgx)||'';if(params=='wordPress'){userId=getData7('uid',alias,gmtimeUnix,rgx);if(userId){if(!Number.isInteger(Number(userId))){writeData7('uid_'+alias,'x',allow_cookies,0,gmtimeUnix,rgx);if(wts7.user_id&&wts7.user_id.indexOf('{"id":0,')==-1){userId=wts7.user_id;}
else{userId='';}}}
else if(wts7.user_id&&wts7.user_id.indexOf('{"id":0,')==-1){userId=wts7.user_id;}}
else{userId=getData7('uid',alias,gmtimeUnix,rgx)||wts7.user_id||'';}
visitorId=getData7('vid',alias,gmtimeUnix,rgx)||'';nVisits=getData7('nv',alias,gmtimeUnix,rgx)||0;isOwner=getData7('io',alias,gmtimeUnix,rgx)||'0';originalRef=getData7('or',alias,gmtimeUnix,rgx)||'';}
catch(e){wtsDebug7('wtslog7Exe error 1.1',e);}
try{if(timeLastLoad!='0'){writeData7('tll_'+alias,timeLastLoad,allow_cookies,315360000,gmtimeUnix,rgx);}
if(sessionId!=''){writeData7('sid_'+alias,sessionId,allow_cookies,1800,gmtimeUnix,rgx);}
if(nVisits!=0){writeData7('nv_'+alias,nVisits,allow_cookies,315360000,gmtimeUnix,rgx);}
if(visitorId!=''){writeData7('vid_'+alias,visitorId,allow_cookies,315360000,gmtimeUnix,rgx);}
if(userId){if(params=='wordPress'&&userId.match(/^\d+$/)){writeData7('uid_'+alias,userId,allow_cookies,315360000,gmtimeUnix,rgx);}
else{writeData7('uid_'+alias,userId,allow_cookies,315360000,gmtimeUnix,rgx);}}
if(isOwner=='1'){writeData7('io_'+alias,'1',allow_cookies,315360000,gmtimeUnix,rgx);}
if(originalRef!=''){writeData7('or_'+alias,originalRef,allow_cookies,315360000,gmtimeUnix,rgx);}
try{uidsid=sessionStorage.getItem("uidsid_"+alias);}catch(e){}}
catch(e){wtsDebug7('wtslog7Exe error 1.2',e);}
if(userId&&uidsid==sessionId&&!userId.match(/^d_/)){userId='d_'+userId;}
url=encodeURIComponent(url);url=url.replace(/&/g,"%oag");if(originalRef!==''){originalRef=encodeURIComponent(originalRef);originalRef=originalRef.replace(/&/g,"%oag");}
if(referer!==''){referer=encodeURIComponent(referer);referer=referer.replace(/&/g,"%oag");}
if(page_name!==''){page_name=encodeURIComponent(page_name);}
if(group_name!==''){group_name=encodeURIComponent(group_name);}
if(title!==''){try{title=encodeURIComponent(title);}catch(e){}}
if(userId){userId=encodeURIComponent(userId);}}
qry=alias+'&'+db+'&'+invisible+'&'+conversion_number+'&'+page_name+'&'+group_name+'&'+title+'&'+url+'&'+referer+'&'+
originalRef+'&'+wts7.scrW+'x'+wts7.scrH+'&'+wts7.action+'&'+gmtimeUnix+'&'+sessionId+'&'+timeLastLoad+'&'+visitorId+'&'+nVisits+'&'+isOwner+'&'+
params+'&'+isEvent+'&&'+userId+'&'+wts7.versionNumber+'&'+allow_cookies+'&'+Math.random();if(event_name){cs2=document.createElement("script");cs2.type="text/javascript";cs2.async="async";cs2.src="https://"+app_url+"/count7.pl?"+qry;s2=document.getElementsByTagName("script")[0];if(s2){s2.parentNode.insertBefore(cs2,s2);}
else{try{document.head.appendChild(cs2);}
catch(e){wtsDebug7('wtslog7Exe error a4 / typeof document.head = '+(typeof document.head),e);}}
if(obj){cs2.onload=function(){redirect7(obj);};return false;}}
else{newSpan=document.createElement("span");newSpan.setAttribute("id","wtstimer"+alias);newSpan.style.display="none";try{document.body.appendChild(newSpan);}
catch(e){wtsDebug7('wtslog7Exe error a2.6_23 / typeof document.body = '+(typeof document.body),e);}
cs2=document.createElement("script");cs2.type="text/javascript";cs2.async="async";cs2.src="https://"+app_url+"/count7.pl?"+qry;s2=document.getElementsByTagName("script")[0];if(s2){s2.parentNode.insertBefore(cs2,s2);}
else{try{document.head.appendChild(cs2);}
catch(e){wtsDebug7('wtslog7Exe error a3 / typeof document.head = '+(typeof document.head),e);}}
cs2.onload=function(){finalProcessing7(alias,db,app_url,gmtimeUnix,params,invisible,wts7,0,obj,event_name,event_conversion,event,origin,dbStatus);};}}
catch(e){wtsDebug7('wtslog7Exe error 1',e);}}
function redirect7(obj){var new_window;if(obj.target){try{new_window=window.open(obj.href,obj.target);}
catch(e){try{window.top.location=obj.href;}
catch(e){window.location=obj.href;}}}
else if(obj.dataset.href){if(obj.dataset.target&&obj.dataset.target=="new"){new_window=window.open(obj.dataset.href);}
else{try{window.top.location=obj.dataset.href;}
catch(e){window.location=obj.dataset.href;}}}
else{try{window.top.location=obj.href;}
catch(e){window.location=obj.href;}}}
function finalProcessing7(alias,db,app_url,gmtimeUnix,params,invisible,wts7,loop,obj,event_name,event_conversion,event,origin,dbStatus){var pingId,panelId,status,exclude_hit,counterType,sessionId,response,ajaxRequest,ajaxRequest2,msg,delay;if(document.getElementById("wtstimer"+alias).innerHTML){response=document.getElementById("wtstimer"+alias).innerHTML;}
if(!response||response.indexOf("::")==-1){loop++;if(loop<100){setTimeout(function(){finalProcessing7(alias,db,app_url,gmtimeUnix,params,invisible,wts7,loop,obj,event_name,event_conversion,event,origin,dbStatus);},100);return;}
return;}
if(document.readyState==='complete'){if(!wts7.pageShowEvent){window.addEventListener("pageshow",function(event){wts7.pageShowEvent=1;wtslog7Exe(alias,db,obj,event_name,event_conversion,event,origin,dbStatus);});}}
else{window.addEventListener("load",function(event){setTimeout(function(){if(!wts7.pageShowEvent){window.addEventListener("pageshow",function(event){wts7.pageShowEvent=1;wtslog7Exe(alias,db,obj,event_name,event_conversion,event,origin,dbStatus);});}},1500);});}
response=response.split("::");status=response[5];if(status!="premium"){return;}
exclude_hit=response[6];counterType=response[7];sessionId=response[4];pingId=db+"&"+alias+"&"+response[0]+"&"+response[1]+"&"+response[2]+"&"+response[3]+"&"+sessionId;panelId=db+"&"+alias+"&"+response[1]+"&"+response[0]+"&"+response[8];if(params!="no_count"&&exclude_hit!="yes"){ajaxRequest=new XMLHttpRequest();pingPage7(pingId,0,ajaxRequest,app_url,alias,db);}
if(counterType=="panel"&&invisible!="yes"){msg="https://"+app_url+"/get_panel_data.pl?"+panelId+"&"+Math.random();ajaxRequest2=new XMLHttpRequest();ajaxRequest2.onreadystatechange=function(){if(ajaxRequest2.readyState==4&&ajaxRequest2.status==200){updatePanelDisplay7(ajaxRequest2,alias,msg);}};delay=500;setTimeout(function(){getPanelData7(alias,msg,ajaxRequest2);},delay);}}
function pingPage7(pingId,delay,ajaxRequest,app_url,alias,db){var currTime,msg,timer,original_timestamp,hasFocus;currTime=Math.floor(new Date().valueOf()/1000);if(original_timestamp&&currTime>(original_timestamp+1800)){console.log("Inactive for 30 minutes / STOP");if(timer){clearTimeout(timer);}
return;}
if(delay==0){original_timestamp=currTime;}
try{hasFocus=top.document.hasFocus();}
catch(e){hasFocus=document.hasFocus();}
if(document.visibilityState!="hidden"&&hasFocus){delay=delay+1000;if(delay>60000){delay=60000;}
msg="https://"+app_url+"/ping_timer.pl?"+pingId+"&"+delay+"&ck="+Math.random();try{fetch(msg).then(res=>res.text()).then(function(data){if(data.indexOf("OK / 1")==-1){console.log("Not OK / data = "+data);if(alias=="2474"){wtsDebug7("Ping error 1.1 / data = "+data);}}})}
catch(e){wtsDebug7("Ping error 2 / data = "+data,e);}
timer=setTimeout(function(){pingPage7(pingId,delay,ajaxRequest,app_url,alias,db);},delay);}
else{timer=setTimeout(function(){pingPage7(pingId,0,ajaxRequest,app_url,alias,db);},2000);}}
function getPanelData7(alias,msg,ajaxRequest2){msg=msg+"::"+Math.random();ajaxRequest2.open('GET',msg,true);ajaxRequest2.send();}
function updatePanelDisplay7(ajaxRequest2,alias,msg){var focusTest,response,previous_count,now_count,previous_delay,delay,done_updating;response=ajaxRequest2.responseText.split("::");if(response[0]=='OK'){delay=1000;previous_count=parseInt(document.getElementById("wts_last_"+alias).innerHTML);previous_delay=parseInt(document.getElementById("wts_delay_"+alias).innerHTML);now_count=parseInt(response[1]);document.getElementById("wts_p_online_"+alias).innerHTML=response[2].toLocaleString();done_updating=1;if(document.getElementById("wts_dot_"+alias).style.opacity==1){blink7("wts_dot_"+alias,0,0);}
if(now_count>previous_count){done_updating=0;animateIncrement7(alias,now_count,previous_count);}
document.getElementById("wts_last_"+alias).innerHTML=response[1];if(now_count>previous_count&&previous_delay>3000){delay=previous_delay-1000;}
else{delay=previous_delay+1000;}
if(delay>60000){delay=60000;}
if(delay<3000){delay=3000;}
document.getElementById("wts_delay_"+alias).innerHTML=delay;setTimeout(function(){done_updating=1;},20000);if(document.visibilityState!="hidden"&&done_updating){setTimeout(function(){getPanelData7(alias,msg,ajaxRequest2);},delay);}
else{document.getElementById("wts_delay_"+alias).innerHTML=0;focusTest=setInterval(function(){if(document.visibilityState!="hidden"&&done_updating){clearInterval(focusTest);getPanelData7(alias,msg,ajaxRequest2);}},2000);}}
function animateIncrement7(alias,now_count,previous_count){previous_count++;document.getElementById("wts_p_count_"+alias).innerHTML=previous_count.toLocaleString();if(previous_count<now_count){if(now_count-previous_count<10){setTimeout(function(){animateIncrement7(alias,now_count,previous_count);},300);}
else if(now_count-previous_count<100){setTimeout(function(){animateIncrement7(alias,now_count,previous_count);},50);}}
else{if(document.getElementById("wts_dot_"+alias).style.opacity==1){blink7("wts_p_count_"+alias,0,1);}}}
function blink7(id,opacity,update){if(opacity>1){opacity=1;}
document.getElementById(id).style.opacity=opacity;if(opacity<1){opacity=opacity+0.05;setTimeout(function(){blink7(id,opacity,update);},100);}
else{if(update=="1"){done_updating=1;}}}}
function writeData7(id,data,allow_cookies,max_age,now,rgx){var domain,item,expiry;data=data.toString();if(data==''){}
expiry=now+max_age;item={value:data,expiry:expiry};try{window.localStorage.setItem(id,JSON.stringify(item));}
catch(e){}
if(allow_cookies=='1'){try{var parts=location.hostname.split('.');domain=parts.slice(-2).join('.');}
catch(e){}
if(domain){try{document.cookie=id+'='+data+'; domain='+domain+'; path=/; SameSite=None; hostOnly=false; Secure; Max-Age='+max_age;}
catch(e){wtsDebug7('writeData 3.1 / error writing cookies on '+domain,e);}}
else{try{document.cookie=id+'='+data+'; path=/; SameSite=None; Secure; hostOnly=false; Max-Age='+max_age;}
catch(e){wtsDebug7('writeData 3.2 / error writing cookie',e);}}}}
function getData7(id,alias,now,rgx){var data,dataJSON;try{dataJSON=window.localStorage.getItem(id+'_'+alias);}
catch(e){}
if(dataJSON){try{data=JSON.parse(dataJSON);}
catch(e){data=dataJSON;if(data){try{window.localStorage.removeItem(id+'_'+alias);}catch(e){}
if(rgx[id].test(data)){return data;}
else{wtsDebug7('error::storage 0::non-conform id '+id+'='+data);}}}
if(data&&data.expiry&&data.value){if(data.expiry>=now){if(rgx[id].test(data.value)){return data.value;}
else{wtsDebug7('error::storage::non-conform id '+id+'='+data.value);try{window.localStorage.removeItem(id+'_'+alias);}catch(e){}}}
else{try{window.localStorage.removeItem(id+'_'+alias);}catch(e){}
return;}}}
data='';try{if(document.cookie&&document.cookie.indexOf(id+'_'+alias)>-1){data=document.cookie.split("; ").find(function(row){return row.startsWith(id+'_'+alias+'=');}).split("=")[1];}}
catch(e){}
if(data){if(rgx[id].test(data)){return data;}
else{var domain;wtsDebug7('error::cookie::non-conform id '+id+'='+data);try{domain=window.location.host.match(/^(?:.*?\.?)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/)[1];document.cookie=id+'=; path=/; domain='+domain+'; SameSite=None; Secure; expires=Thu, 01 Jan 1970 00:00:01 GMT';}catch(e){}}}}
function messageWorker(){var frames=document.getElementsByTagName("iframe");for(var i=0;i<frames.length;++i){if(frames[i].title=="WEB-STAT"&&frames[i].style.display=="none"){console.log("sending message");var worker=frames[i].contentWindow;worker.postMessage("message","https://app.ardalio.com");return;}}
setTimeout(messageWorker,5000);}
function wtsDebug7(e_text,e_object){var errData=new URLSearchParams();errData.append('e_text',e_text);if(e_object){errData.append('e_object',e_object.toString()+' / e name: '+e_object.name+' e message: '+e_object.message);}
errData.append('version',wts7.versionNumber);errData.append('referrer',document.referrer);errData.append('url',document.URL);errData.append('alias',wts7.alias);navigator.sendBeacon('https://app.ardalio.com/beacon_e.pl',errData);return;}